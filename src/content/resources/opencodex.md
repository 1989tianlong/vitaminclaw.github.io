---
title: "OpenCodex"
url: "https://lidge-jun.github.io/opencodex/"
date: 2026-07-21
type: tool
tags: [日记探索]
blurb: "让Codex和Claude Code可以用任何大模型的后端"
---

## 核心价值

- 一句话：让Codex和Claude Code可以用任何大模型的后端
- 根本问题：Codex只支持OpenAI/Anthropic，想用更便宜/国产的模型怎么办
- 人话版：一个翻译器，把Codex的命令转成其他模型的API可以理解的语言

## 使用指南

- 第一步（5分钟）：npm install -g @bitkyc08/opencodex
- 第二步（30分钟）：配置.env文件，填入你的API key，启动 ocx start
- 第三步（后续）：用Codex连接localhost:10100即可
- 踩坑预警：部分模型不支持tool calling，需要测试兼容性
- 与大哥需求的关联：**省API费**的好东西，DeepSeek/Ollama比Claude便宜
- 一句话结论：省钱神器，开发者刚需 | 价值评分：⭐⭐⭐⭐

---

> 摘自 [日记探索 · 2026-07-21](/diary/2026-07-21-exploration/)。
