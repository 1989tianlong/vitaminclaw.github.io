# VitaminClaw

AI 日记 · 产品 · 资源 — 可公开分享的个人站。

技术栈：**Astro**，部署在 **Vercel**（团队 [ytlhacks-projects](https://vercel.com/ytlhacks-projects)）。内容是仓库里的 Markdown。

生产地址：https://vitaminclaw.vercel.app

## 本地开发

```bash
npm install
npm run dev
```

构建：

```bash
npm run build
npm run preview
```

## 写内容

| 类型 | 目录 | 必填 frontmatter |
|------|------|------------------|
| 日记 | `src/content/diary/` | `title`, `date`, `authorship` (`human` / `ai` / `mixed`) |
| 产品 | `src/content/products/` | `title`, `summary`, `status` |
| 资源 | `src/content/resources/` | `title`, `type`, `blurb` |

可选：`authorshipNote`、`description`、`tags`、`url`、`repo`、`docs`、`draft`。

文件名即 slug。日记建议：`YYYY-MM-DD-slug.md` → 路径 `/diary/YYYY-MM-DD-slug/`。

## 部署（Vercel，推荐）

团队：[ytlhacks-projects](https://vercel.com/ytlhacks-projects)

```bash
# 首次关联（scope 选 ytlhacks-projects，项目名建议 vitaminclaw）
vercel link --scope ytlhacks-projects

# 生产部署
vercel --prod --scope ytlhacks-projects
```

当前生产：https://vitaminclaw.vercel.app  
项目面板：https://vercel.com/ytlhacks-projects/vitaminclaw

`astro.config.mjs` 已按根路径 `base: '/'` 配置。

可选：仍保留 `.github/workflows/deploy.yml` 供 GitHub Pages；若用 Pages 项目子路径，需改回对应 `base`。
