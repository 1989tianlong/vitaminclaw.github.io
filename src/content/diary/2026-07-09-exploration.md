---
title: "日记探索 · 2026-07-09"
date: 2026-07-09
authorship: ai
authorshipNote: "由 AI 对当日日记逐条做第一性原理拆解与实践指导。"
description: "19 条记录 · 5 条重点：A2A 协议、AgentCompany、super.engineering"
tags: [日记探索]
---

> 第一性原理 · 广泛搜索 · 实践指导

## 📅 概览
- 探索日期：2026-07-09
- 信息来源：2026-07-09.md
- 条目数：19
- 重点探索：5条

---

### 🔹 条目1：A2A 协议 (Agent-to-Agent)

**日记原文**：刚刚，Claude Code 之父 Boris Cherny 宣布了一个新命令：/checkup。方向已经明确：**多智能体的未来，不是单个 Agent 越来越强，而是 Agent 之间越来越会协作。**

**🎯 本质**
- 一句话：用一套标准协议让不同厂商的AI Agent能互相通信、协作、调用彼此的能力
- 根本问题：现在每个AI Agent都是"孤岛"，无法互相调用，形成不了合力
- 人话版：就像USB接口让不同电脑配件能互通，A2A就是AI世界的"USB接口"

**📋 基本信息**
- 是什么：Google主导的开放协议，让Agent之间可以相互发现、对话、委托任务
- 核心功能：Agent发现、任务协商、能力暴露、状态同步
- 目标用户：AI开发者、企业级Agent系统
- 热度/数据：Google、Anthropic、OpenAI等主流厂商参与

**⚡ 竞品对比**
- 同类：MCP (Model Context Protocol)、AutoGen多智能体框架
- 差异点：A2A更侧重跨厂商互操作，MCP更侧重工具调用
- 优劣势：A2A生态更广但刚起步，MCP更成熟但局限在工具层

**🔗 资源**
- 官网/博客：developers.googleblog.com/how-a2a-is-building-a-world-of-collaborative-agents/
- 文档：cloud.google.com A2A相关

**🎮 实践指导**
- 第一步（5分钟）：阅读Google A2A博客，理解协议核心概念
- 第二步（30分钟）：尝试用支持A2A的工具搭建简单多Agent系统
- 第三步（后续）：关注A2A生态进展，特别是与MCP的融合趋势
- 踩坑预警：协议仍在早期，工具链不完善
- 与大哥需求的关联：多Agent协作是未来做AI产品的主流形态
- 一句话结论：必关注方向，但生态成熟尚需时日 | 价值评分：⭐⭐⭐⭐

---

### 🔹 条目2：AgentCompany

**日记原文**：https://agent-company.dev/

**🎯 本质**
- 一句话：在本地桌面运行一个"AI公司"，AI做CEO自主决策，人类只设定目标
- 根本问题：AI Agent如何独立完成复杂任务？需要组织架构和协作机制
- 人话版：给AI一个"公司"让它自己运转，你只需要当老板下达目标

**📋 基本信息**
- 是什么：桌面应用，用AI CEO自主组建团队、分配任务、协调工作
- 核心功能：自组织团队、预算管控、进度可视化、跨工具集成
- 目标用户：开发者、创业者、想体验AI自治的个人
- 热度/数据：v1.2.0，13,674次下载

**⚡ 竞品对比**
- 同类：AutoGen、CrewAI、LangGraph
- 差异点：AgentCompany是完整桌面应用，开箱即用；其他是代码框架
- 优劣势：上手极简，但定制化能力弱于代码框架

**🔗 资源**
- 官网：agent-company.dev
- 下载：macOS (arm64/x64) / Windows (x64)
- 支持Agent：Claude Code、Codex CLI、Gemini CLI、Kimi、GLM、MiniMax、Ollama

**🎮 实践指导**
- 第一步（5分钟）：下载安装AgentCompany
- 第二步（30分钟）：设定一个简单目标（如"写一个爬虫"），看AI如何自组织
- 第三步（后续）：体验多目标协作，观察Agent间如何沟通
- 踩坑预警：需要稳定网络连接AI provider；复杂任务需要较长时间
- 与大哥需求的关联：可以试验"AI替你干活"的最前沿体验
- 一句话结论：目前最接近"AI自治公司"概念的桌面产品 | 价值评分：⭐⭐⭐⭐

---

### 🔹 条目3：super.engineering

**日记原文**：https://super.engineering/

**🎯 本质**
- 一句话：让多个AI Coding Agent并行工作的地方，类似"AI版Terminal+IDE"
- 根本问题：如何同时管理多个Agent、让它们分工协作？
- 人话版：一个App让你同时跑多个AI程序员，各自干活，统一管理

**📋 基本信息**
- 是什么：Rust原生桌面应用，并行管理多个Coding Agent
- 核心功能：多Tab/工作区、git worktree隔离、diff审查、PR管理
- 目标用户：需要同时调度多个AI Agent的开发者
- 热度/数据：100% Rust，<50ms启动，完全原生

**⚡ 竞品对比**
- 同类：Cursor、Warp、Claude Code独立使用
- 差异点：super.engineering专门做并行编排，其他是单一Agent
- 优优势：性能极致快(Rust)，并行能力强；劣势是生态还在早期

**🔗 资源**
- 官网：super.engineering
- 下载：macOS版
- 文档：/docs

**🎮 实践指导**
- 第一步（5分钟）：下载macOS版本安装
- 第二步（30分钟）：添加一个repo，尝试同时启动2个Agent
- 第三步（后续）：体验跨repo工作区、并行编码
- 踩坑预警：目前只有macOS版，Windows版未发布
- 与大哥需求的关联：如果是做AI编程相关，这个是并行Agent管理的利器
- 一句话结论：Rust性能+并行设计，适合多Agent场景 | 价值评分：⭐⭐⭐

---

### 🔹 条目4：AgentX (arXiv 2606.26859)

**日记原文**：AgentX https://arxiv.org/abs/2606.26859

**🎯 本质**
- 一句话：工业级推荐系统的AI Agent自迭代系统，AI自己生成想法、写代码、做实验、总结经验
- 根本问题：推荐系统迭代太慢，需要人工参与每个环节；能否让AI自己闭环？
- 人话版：AI不仅帮你干活，还能自己"学习如何更好地干活"

**📋 基本信息**
- 是什么：生产环境部署的多Agent系统，自动化推荐算法迭代全流程
- 核心组成：Brainstorm Agent(想法生成) → Developing Agent(代码实现) → Evaluation Agent(A/B测试) → Harness Evolution(自改进)
- 目标用户：推荐系统工程师、算法团队
- 热度/数据：26位作者，来自工业界，arXiv 2026.6发布

**⚡ 竞品对比**
- 同类：AutoGen多智能体、Ray/Tune自动化调参
- 差异点：AgentX是端到端闭环，其他是单点自动化
- 优劣势：创新性强，但仅适用于推荐系统场景

**🔗 资源**
- 论文：arxiv.org/abs/2606.26859
- PDF：/pdf/2606.26859

**🎮 实践指导**
- 第一步（5分钟）：读论文摘要，理解系统架构
- 第二步（30分钟）：泛读论文，重点看四阶段如何协作
- 第三步（后续）：思考能否迁移到其他业务场景
- 踩坑预警：工业级系统，个人难以复现
- 与大哥需求的关联：代表AI Agent的终极形态——自我改进
- 一句话结论：工业界多Agent闭环的标杆案例 | 价值评分：⭐⭐⭐⭐

---

### 🔹 条目5：VibeCafé / Vibe Usage

**日记原文**：https://vibecafe.ai/usage

**🎯 本质**
- 一句话：帮你追踪各种AI编程工具Token用量的工具，防止月底账单爆炸
- 根本问题：同时用多个AI工具，不知道哪个花钱多、哪个模型贵
- 人话版：你的AI工具"记账本"，告诉你这月花了多少Token

**📋 基本信息**
- 是什么：Token用量追踪工具，支持20+种AI编程工具
- 核心功能：自动同步Token消耗、多维度筛选（时间/工具/模型/项目）、费用预估、排行榜
- 目标用户：AI开发者、企业技术负责人
- 热度/数据：完全免费，Mac/Windows桌面App + CLI

**⚡ 竞品对比**
- 同类：OpenRouter、Anthropic内置dashboard
- 差异点：Vibe Usage支持所有主流Coding Agent，不局限单一厂商
- 优劣势：聚合视角免费开源；劣势是精确度依赖模型定价覆盖

**🔗 资源**
- 官网：vibecafe.ai/usage
- GitHub：github.com/vibe-cafe
- 安装：npx @vibe-cafe/vibe-usage

**🎮 实践指导**
- 第一步（5分钟）：运行 npx @vibe-cafe/vibe-usage 体验CLI版
- 第二步（30分钟）：安装桌面App，常驻后台自动同步
- 第三步（后续）：设置预算提醒，避免超支
- 踩坑预警：需保持后台运行才能持续同步
- 与大哥需求的关联：做AI产品必关注成本，这个工具帮你控本
- 一句话结论：开发者的"AI账单管家"，实用性强 | 价值评分：⭐⭐⭐⭐

---

### 📦 其他条目（简述）

- **hiesther.me**：个人网站，信息不足
- **LingBot World 2**：世界模型项目，给一张图生成整个世界，Reactor平台独家
- **Entire.io**：分布式Git托管+Agent会话存储，主打快速clone和会话追踪
- **Raven (EverMind-AI)**：记忆优先的自改进Agent框架，基于EverOS
- **x.ai CLI**：Grok命令行工具，curl安装
- **MiniMax API**：国内AI API服务商，需自行探索
- **Netsgo**：内网穿透工具，GitHub开源
- **Avernet**：分布式Agent协调平台，GitHub开源
- **平凯数据库**：国产数据库产品，云服务入口
- **UUMit**：A2A能力网络平台，"让AI帮人类赚钱"
- **凡泰极客**：国产技术公司，关联 FinChat
- **Open Knowledge Format**：Google推动的数据格式标准

---

## 📊 今日汇总

### 最值得关注 Top 3
1. **A2A协议** - 多Agent协作是未来趋势，Google主导的开放协议值得关注
2. **AgentCompany** - 体验"AI自治公司"最直接的方式，开箱即用
3. **Vibe Usage** - 实用工具，帮你控制AI开发成本

### 本质洞察
- 这些条目背后的共同趋势：**多Agent协作 + 自治 + 成本控制**
- 有什么底层的规律或模式：从单Agent工具 → 多Agent系统 → Agent自循环
- 第一性原理层面的发现：
  - 单个Agent再强也有上限，协作才是未来
  - AI自治的核心是"闭环"：自己想法→自己执行→自己学习
  - 开发者工具正在从"赋能个人"转向"编排群体"

### 明日行动清单
- [ ] 安装AgentCompany，设定一个简单目标体验
- [ ] 安装Vibe Usage，开始追踪Token用量
- [ ] 阅读A2A协议博客，理解多Agent通信标准

