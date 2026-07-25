// 把 ~/Documents/MinMetaSeek/25-日记探索 下的探索日记同步为站点 AI 日记。
// 幂等：转换结果与目标文件一致时跳过，只处理新增/变化的文件。
import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const SRC = '/Users/yantianlong/Documents/MinMetaSeek/25-日记探索';
const DEST = new URL('../src/content/diary/', import.meta.url).pathname;

const FILE_RE = /^(\d{4}-\d{2}-\d{2})-.+\.md$/;

function yamlEscape(value) {
  return `"${value.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`;
}

function transform(raw, date) {
  // 去掉首个 H1（详情页会自己渲染标题）
  const body = raw.replace(/^#[^\n]*\n+/, '').trimStart();

  // 从「概览」提取条目数与重点数
  const total = raw.match(/条目数：(\d+)/)?.[1];
  const highlights = raw.match(/重点探索：(\d+)条?/)?.[1];

  // 取前三个条目标题作为内容预告
  const topics = [...raw.matchAll(/^###\s*🔹\s*条目\d+：(.+)$/gm)]
    .map((m) => m[1].replace(/[（(].*$/, '').trim())
    .filter(Boolean)
    .slice(0, 3);

  const stats =
    total && highlights ? `${total} 条记录 · ${highlights} 条重点` : total ? `${total} 条记录` : '';
  const description = [stats, topics.join('、')].filter(Boolean).join('：');

  const frontmatter = [
    '---',
    `title: ${yamlEscape(`日记探索 · ${date}`)}`,
    `date: ${date}`,
    'authorship: ai',
    'authorshipNote: "由 AI 对当日日记逐条做第一性原理拆解与实践指导。"',
    description ? `description: ${yamlEscape(description)}` : null,
    'tags: [日记探索]',
    '---',
  ]
    .filter(Boolean)
    .join('\n');

  return `${frontmatter}\n\n${body}\n`;
}

const files = (await readdir(SRC)).filter((f) => FILE_RE.test(f)).sort();

let added = 0;
let updated = 0;
let unchanged = 0;

for (const file of files) {
  const date = file.match(FILE_RE)[1];
  const raw = await readFile(path.join(SRC, file), 'utf8');
  const output = transform(raw, date);
  const destPath = path.join(DEST, `${date}-exploration.md`);

  const existing = await readFile(destPath, 'utf8').catch(() => null);
  if (existing === output) {
    unchanged += 1;
    continue;
  }
  await writeFile(destPath, output);
  if (existing === null) added += 1;
  else updated += 1;
}

console.log(`diary sync: ${added} added, ${updated} updated, ${unchanged} unchanged`);
