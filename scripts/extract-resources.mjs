// 从已同步的日记探索中抽取高价值资源（⭐≥4 且带链接），生成 resources 条目。
// 幂等：按 URL 与文件名去重，已存在的资源不重复生成、不覆盖。
import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const DIARY_DIR = new URL('../src/content/diary/', import.meta.url).pathname;
const RESOURCE_DIR = new URL('../src/content/resources/', import.meta.url).pathname;

const ENTRY_RE = /^### 🔹 条目/gm;
const LINK_RE = /^-\s*([^：:]{1,12})[：:]\s*(https?:\/\/[A-Za-z0-9\-._~:/?#[\]@!$&'*+,;=%]+)\s*.*$/gm;

function section(block, header) {
  const start = block.indexOf(header);
  if (start === -1) return '';
  const rest = block.slice(start + header.length);
  const end = rest.search(/^\*\*[🎯📋⚡🔗🎮]/m);
  const body = (end === -1 ? rest : rest.slice(0, end)).trim();
  return body.replace(/---+\s*$/, '').trim();
}

function slugify(name, url) {
  const ascii = name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  if (ascii) return ascii;
  try {
    const host = new URL(url).hostname.replace(/^www\./, '');
    return host.split('.')[0].replace(/[^a-z0-9-]/gi, '-').toLowerCase();
  } catch {
    return null;
  }
}

function parseEntry(block) {
  const titleMatch = block.match(/^### 🔹 条目\d+：(.+)$/m);
  if (!titleMatch) return null;
  const fullTitle = titleMatch[1].trim();

  const stars = block.match(/价值评分：(⭐+)/)?.[1].length ?? 0;
  if (stars < 4) return null;

  const links = [...block.matchAll(LINK_RE)].map((m) => ({ label: m[1].trim(), url: m[2] }));
  if (links.length === 0) return null;

  const repo = links.find((l) => /github\.com/.test(l.url))?.url;
  const url =
    links.find((l) => /官网|官方|主页|网站|文档/.test(l.label))?.url ??
    links.find((l) => !/github\.com/.test(l.url))?.url ??
    links[0].url;

  const name = fullTitle.split(/[（(]/)[0].trim();
  const blurb = block.match(/一句话：(.+)/)?.[1].trim() ?? '';
  const value = section(block, '**🎯 本质**');
  const guide = section(block, '**🎮 实践指导**');

  let type = 'tool';
  if (/提示词|prompt/i.test(fullTitle)) type = 'prompt';
  else if (repo && repo === url && !links.some((l) => /官网|官方/.test(l.label))) type = 'repo';
  else if (links.every((l) => /arxiv|论文|文章/.test(l.label + l.url))) type = 'article';

  return { name, fullTitle, url, repo, type, blurb, value, guide };
}

// 已有资源里的 URL（含手工维护的 7 条），用于去重
const existingUrls = new Set();
const existingSlugs = new Set();
for (const file of await readdir(RESOURCE_DIR)) {
  if (!file.endsWith('.md')) continue;
  existingSlugs.add(file.replace(/\.md$/, ''));
  const text = await readFile(path.join(RESOURCE_DIR, file), 'utf8');
  for (const m of text.matchAll(/(https?:\/\/[^\s"')]+)/g)) existingUrls.add(m[1].replace(/\/$/, ''));
}

const diaries = (await readdir(DIARY_DIR)).filter((f) => f.endsWith('-exploration.md')).sort();

let added = 0;
let skippedDup = 0;
const addedTitles = [];

for (const file of diaries) {
  const date = file.slice(0, 10);
  const body = await readFile(path.join(DIARY_DIR, file), 'utf8');
  const blocks = body.split(ENTRY_RE).slice(1);

  for (const rawBlock of blocks) {
    // 条目正文在遇到下一个非条目标题（如「其他条目」「今日汇总」）时结束
    const cut = rawBlock.search(/^#{2,3} /m);
    const block = `### 🔹 条目${cut === -1 ? rawBlock : rawBlock.slice(0, cut)}`;
    const entry = parseEntry(block);
    if (!entry) continue;
    const normUrl = entry.url.replace(/\/$/, '');
    if (existingUrls.has(normUrl)) {
      skippedDup += 1;
      continue;
    }

    let slug = slugify(entry.name, entry.url);
    if (!slug) continue;
    while (existingSlugs.has(slug)) slug = `${slug}-x`;
    existingSlugs.add(slug);
    existingUrls.add(normUrl);

    const fm = [
      '---',
      `title: "${entry.name.replace(/"/g, '\\"')}"`,
      `url: "${entry.url}"`,
      entry.repo && entry.repo !== entry.url ? `repo: "${entry.repo}"` : null,
      `date: ${date}`,
      `type: ${entry.type}`,
      'tags: [日记探索]',
      `blurb: "${entry.blurb.replace(/"/g, '\\"')}"`,
      '---',
    ]
      .filter(Boolean)
      .join('\n');

    const parts = [fm];
    if (entry.value) parts.push(`## 核心价值\n\n${entry.value}`);
    if (entry.guide) parts.push(`## 使用指南\n\n${entry.guide}`);
    parts.push(`---\n\n> 摘自 [日记探索 · ${date}](/diary/${date}-exploration/)。`);

    await writeFile(path.join(RESOURCE_DIR, `${slug}.md`), parts.join('\n\n') + '\n');
    added += 1;
    addedTitles.push(`${date} ${entry.name}`);
  }
}

console.log(`resource extract: ${added} added, ${skippedDup} duplicates skipped`);
for (const t of addedTitles) console.log(`  + ${t}`);
