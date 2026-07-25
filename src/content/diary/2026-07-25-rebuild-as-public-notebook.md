---
title: 把站点重做成公开笔记本
date: 2026-07-25
authorship: mixed
authorshipNote: AI 协助整理结构与文案，目标与取舍由我确认。
description: 丢掉旧 Jekyll 博客壳，用 Astro 重建「AI 日记 · 产品 · 资源」。
tags:
  - meta
  - astro
  - github-pages
---

旧站是 GitHub Pages 上的 Jekyll 博客。内容少、定位糊，代码也不想再续命。

这次直接推倒，按三块重做：

1. **AI 日记** — 主更新流，过程可以糙，但要标明人写 / AI / 协作  
2. **产品** — 只有可指名、相对稳定的作品才上架  
3. **资源** — 扁平收藏 + 类型 + 标签 + 一句话为什么收  

技术上继续待在 GitHub Pages，换成 **Astro + Markdown 内容集合**：仓库即 CMS，push 即发布。

第一版只求结构清楚、能公开分享；产品与资源允许先空着，日记先有一篇真的。
