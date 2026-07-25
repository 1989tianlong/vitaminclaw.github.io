---
title: "日记探索 · 2026-05-27"
date: 2026-05-27
authorship: ai
authorshipNote: "由 AI 对当日日记逐条做第一性原理拆解与实践指导。"
description: "3 条记录"
tags: [日记探索]
---

> 自动生成 · 深度分析版本

## 📅 概览
- 探索日期：2026-05-27
- 探索条目数：3

---

## 🔍 深度探索

### 条目1：Taste Skill

#### ① 定位背景
- **领域**：AI前端设计 + Agent技能体系
- **行业热度**：GitHub 21.5k+ Stars，社区热议的"AI审美"解决方案
- **核心竞争力**：把"设计品味"写成显式规则文件（SKILL.md），让AI生成不再是"Slop"（垃圾UI）

#### ② 理论支撑
- **核心概念**：Agent Skill（可移植的指令文件）
- **技术原理**：
  - 三旋钮调参系统：布局实验度、动效深度、信息密度（1-10可调）
  - Locks & Bans：明确禁止的UI模式（如紫色渐变、千篇一律的Hero）
  - 与 Cursor/Claude Code/Codex 集成，一次安装全局生效
- **解决痛点**：AI生成UI千篇一律，缺乏设计感

#### ③ 资源匹配
- 📘 [官网](https://www.tasteskill.dev/)
- 📘 [官方文档](https://www.tasteskill.dev/docs)
- 🛠️ [GitHub](https://github.com/Leonxlnx/taste-skill)
- 📘 [中文解读：CSDN](https://blog.csdn.net/Chen__2024/article/details/161453599)
- 📘 [中文解读：知乎](https://zhuanlan.zhihu.com/p/2035483979973964214)

#### ④ 实践路径

**阶段一：认知（1天）**
- □ 阅读 Taste Skill 官方文档
- □ 理解 SKILL.md 格式结构
- □ 理解"三旋钮"参数系统
- 输出：用30字概括"Taste Skill是什么"

**阶段二：上手（2天）**
- □ 安装 taste-skill 到一个项目
- □ 用默认 skill 生成一个前端页面
- □ 调整三旋钮参数，观察效果变化
- 输出：截图对比不同参数效果

**阶段三：应用（3天）**
- □ 定制自己的 design-taste skill
- □ 集成到 Cursor/Claude Code 工作流
- □ 输出：自己的 skill 仓库 + 使用教程

---

### 条目2：Jetson Orin Nano Super

#### ① 定位背景
- **领域**：边缘AI计算 / 嵌入式AI
- **行业热度**：2024年底发布，2025年爆火，67 TOPS算力仅$249
- **核心竞争力**：消费级价格，企业级算力，适合机器人/视觉/本地LLM部署

#### ② 理论支撑
- **核心概念**：Edge AI（边缘AI计算）
- **技术规格**：
  - 算力：67 TOPS（Super模式下）
  - 内存：8GB LPDDR5
  - CPU频率：1.7 GHz（提升13%）
  - GPU频率：1020 MHz（提升63%）
- **软件生态**：JetPack 6.1、TensorRT、CUDA、Ollama本地大模型
- **应用场景**：机器人、智能相机、工业检测、离线LLM

#### ③ 资源匹配
- 📘 [NVIDIA官方产品页](https://www.nvidia.cn/autonomous-machines/embedded-systems/jetson-orin/nano-super-developer-kit/)
- 📘 [中文教程：CSDN](https://blog.csdn.net/qq_30637245/article/details/149334818)
- 📘 [中文教程：知乎](https://zhuanlan.zhihu.com/p/17301702807)
- 📘 [中文教程：从零开始刷机与部署](https://www.ichd.cn/portal/article/index.html?id=60)
- 🛠️ [JetPack下载](https://developer.nvidia.com/embedded/jetpack)
- 📘 [Yahboom学习资源](https://www.yahboom.com/study/Orin-Nano-SUPER)

#### ④ 实践路径

**阶段一：认知（1-2天）**
- □ 阅读 Jetson Orin Nano Super 产品介绍
- □ 了解 Super 模式与普通模式的区别
- □ 确定自己的使用场景（机器人？视觉？LLM？）
- 输出：用30字概括"什么场景适合用Jetson"

**阶段二：上手（2-3天）**
- □ 准备硬件：Jetson Orin Nano Developer Kit
- □ 使用 SDK Manager 刷机，安装 JetPack 6.1
- □ 开启 Super 模式
- □ 运行官方示例：Hello AI World
- 输出：成功跑通一个AI demo

**阶段三：应用（3-5天）**
- □ 部署一个本地LLM（Ollama + DeepSeek）
- □ 或部署一个视觉模型（YOLOv8 + TensorRT）
- □ 输出：自己的边缘AI项目 + 复盘文章

---

### 条目3：CodeGraph

#### ① 定位背景
- **领域**：AI代码分析 + 代码知识图谱
- **行业热度**：2025-2026新兴，GraphRAG概念崛起
- **核心竞争力**：解决AI编程助手在"发现阶段"消耗大量tokens的问题

#### ② 理论支撑
- **核心概念**：代码知识图谱（Code Knowledge Graph）
- **技术原理**：
  - 用 tree-sitter 解析37种语言
  - 索引：函数、类、导入、调用链
  - 存储：SQLite + FTS5，或 FalkorDB 图数据库
  - 输出：45个 MCP 工具，或 VS Code 插件
- **性能提升**：减少 ~35% token 消耗，~70% tool calls
- **GraphRAG**：比纯向量RAG更适合代码分析（结构化关系让LLM推理调用链）

#### ③ 资源匹配
- 🛠️ [GitHub](https://github.com/codegraph-ai/CodeGraph)
- 📘 [VS Code插件](https://marketplace.visualstudio.com/items?itemName=aStudioPlus.codegraph)
- 📘 [官方文档](https://codegraphai.vercel.app/)
- 📘 [中文指南](https://tosea.ai/blog/codegraph-claude-code-cursor-guide-2026)
- 📘 [GraphRAG原理](https://www.falkordb.com/blog/code-graph/)

#### ④ 实践路径

**阶段一：认知（1-2天）**
- □ 阅读 CodeGraph README 理解架构
- □ 了解图数据库基础（FalkorDB/Neo4j）
- □ 理解 Cypher 查询基础语法
- 输出：用30字概括"CodeGraph解决什么问题"

**阶段二：上手（2-3天）**
- □ 安装 codegraph-cli：`npm install -g codegraph-cli`
- □ 在一个小项目上运行 `codegraph init`
- □ 尝试查询：找某个函数的调用者
- 输出：成功运行并截图

**阶段三：应用（3-5天）**
- □ 集成到 Claude Code 工作流
- □ 在自己的项目中做代码分析
- □ 输出：项目分析报告 + 复盘文章

---

## 📊 综合建议

### 最值得投入的方向

| 优先级 | 领域 | 理由 | 预计投入 |
|--------|------|------|----------|
| ⭐⭐⭐⭐⭐ | **Taste Skill** | 门槛最低、见效最快，与日常工作流结合紧密 | 6小时 |
| ⭐⭐⭐⭐ | **CodeGraph** | 提升AI编程效率，适合长期使用 | 10小时 |
| ⭐⭐⭐ | **Jetson** | 硬件投入，需要实际设备，门槛较高 | 20小时+ |

### 建议执行顺序

1. **第一周**：Taste Skill（1天认知 + 2天上手 + 3天应用）
2. **第二周**：CodeGraph（2天认知 + 3天上手 + 5天应用）
3. **第三周起**：Jetson（需要采购设备后再开始）

### 对大哥的价值

- **Taste Skill**：提升AI生成UI的质量，做内容/产品时产出更有设计感
- **CodeGraph**：提升编程效率，减少无效token消耗
- **Jetson**：探索硬件产品化的可能性，边缘AI是未来方向

---

_生成时间：2026-05-28 08:10_

