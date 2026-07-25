---
title: "Apple Core AI Models"
url: "https://github.com/apple/coreai-models"
date: 2026-06-17
type: tool
tags: [日记探索]
blurb: "Apple 官方开源的端侧 AI 模型导出、微调和运行时工具集"
---

## 核心价值

- 一句话：Apple 官方开源的端侧 AI 模型导出、微调和运行时工具集
- 根本问题：开发者想在 Apple 设备（iPhone/Mac）上跑自己的 AI 模型，但缺乏从 PyTorch 到 on-device 的完整工作流
- 人话版：你训练了一个 AI 模型，但不知道怎么装到 iPhone 上让它跑起来 — Apple 帮你解决了这个问题

## 使用指南

- 第一步（5分钟）：`git clone https://github.com/apple/coreai-models.git` 看看支持哪些模型
- 第二步（30分钟）：跑 `uv run coreai.model.registry --list-models` 看看当前支持的模型列表
- 第三步（后续）：如果你的产品需要端侧 AI 能力（比如在 iPhone 上跑本地 LLM），深入研究 export recipes
- 踩坑预警：必须 macOS/iOS 27.0+ 和 Xcode 27.0+，旧系统不可用；仅限 Apple Silicon 机型
- 与大哥需求的关联：如果你做 AI 相关的产品/内容，了解 Apple 的端侧 AI 能力很重要 — ChatGPT 之后，端侧 AI 将是下一个战场
- 一句话结论：Apple 生态 AI 开发者的必读项目 | 价值评分：⭐⭐⭐⭐

---

> 摘自 [日记探索 · 2026-06-17](/diary/2026-06-17-exploration/)。
