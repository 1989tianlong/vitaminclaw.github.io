---
title: "MarkItDown"
url: "https://github.com/microsoft/markitdown"
date: 2026-07-24
type: repo
tags: [日记探索]
blurb: "微软开源的轻量级Python工具，把各种格式文件（PDF/Word/Excel/PPT/图片/音频等）统一转换成Markdown"
---

## 核心价值

- 一句话：微软开源的轻量级Python工具，把各种格式文件（PDF/Word/Excel/PPT/图片/音频等）统一转换成Markdown
- 根本问题：不同格式的文档（PDF、Docx、PPT、图片中的文字等）无法直接喂给LLM处理——MarkItDown把它们统一转成LLM最擅长的Markdown格式
- 人话版：你有一堆PDF、Word文档、甚至手写图片，想丢给AI分析——先过一遍MarkItDown转成Markdown

## 使用指南

- 第一步（5分钟）：`pip install 'markitdown[all]'` 安装
- 第二步（30分钟）：尝试 `markitdown myfile.pdf > myfile.md` 转换一个PDF，查看输出质量
- 第三步（后续）：集成到文档处理流程中，批量转换后喂给LLM
- 踩坑预警：1）复杂表格/排版可能丢失 2）图片OCR需要Tesseract 3）音频转写需要额外模型
- 与大哥需求的关联：如果大哥有大量文档需要分析（报告、合同、书籍），这是预处理神器
- 一句话结论：文档转LLM输入格式的最佳选择之一，值得装一个 | 价值评分：⭐⭐⭐⭐

---

> 摘自 [日记探索 · 2026-07-24](/diary/2026-07-24-exploration/)。
