---
title: "日记探索 · 2026-07-21"
date: 2026-07-21
authorship: ai
authorshipNote: "由 AI 对当日日记逐条做第一性原理拆解与实践指导。"
description: "9 条记录 · 5 条重点：Moshi、OpenCodex、todos.dev"
tags: [日记探索]
---

> 第一性原理 · 广泛搜索 · 实践指导

## 📅 概览
- 探索日期：2026-07-21
- 信息来源：20-日记/2026-07-21.md
- 条目数：9
- 重点探索：5条

---

### 🔹 条目1：Moshi

**日记原文**：https://getmoshi.app/

**🎯 本质**
- 一句话：用手机远程操作电脑终端的AI编程工具
- 根本问题：开发者需要随时随地通过手机操控Claude Code/Codex等AI编程工具
- 人话版：手机APP，连接电脑上的AI编程助手，在手机上敲代码

**📋 基本信息**
- 是什么：移动端SSH/MOSH终端，专门为Claude Code和AI编程工具设计
- 核心功能：iOS/Android远程连接电脑终端，运行CLI编程工具
- 目标用户：需要随时随地coding的开发者
- 热度：App Store评分4.8，757条评价

**⚡ 竞品对比**
- 同类：Termius、Promptory、Blink Shell
- 差异点：Moshi专门针对AI编程工具优化，支持Claude Code直连
- 优劣势：✅ 专为AI设计 ❌ 生态不如Termius成熟

**🔗 资源**
- 官网：https://getmoshi.app/
- GitHub：https://github.com/rjyo
- 下载：iOS App Store / Google Play

**🎮 实践指导**
- 第一步（5分钟）：App Store搜索Moshi下载安装
- 第二步（30分钟）：在电脑启动Claude Code，配好SSH key，手机连接
- 第三步（后续）：通勤时在手机上continue编程session
- 踩坑预警：需要稳定的网络环境，MOSH比SSH更适合移动网络
- 与大哥需求的关联：做内容时随时修改代码？更适合移动办公场景
- 一句话结论：极客玩具，锦上添花 | 价值评分：⭐⭐

---

### 🔹 条目2：OpenCodex

**日记原文**：https://github.com/lidge-jun/opencodex

**🎯 本质**
- 一句话：让Codex和Claude Code可以用任何大模型的后端
- 根本问题：Codex只支持OpenAI/Anthropic，想用更便宜/国产的模型怎么办
- 人话版：一个翻译器，把Codex的命令转成其他模型的API可以理解的语言

**📋 基本信息**
- 是什么：Universal provider proxy for OpenAI Codex & Claude Code
- 核心功能：代理转发，支持Claude/Gemini/Grok/DeepSeek/Ollama等任意LLM
- 目标用户：想用低成本模型跑Codex的开发者
- 热度：⭐1695

**⚡ 竞品对比**
- 同类：OpenRouter、LiteLLM
- 差异点：专为Codex/Claude Code设计，支持session管理和账户池
- 优劣势：✅ 轻量 ✅ 支持多账户轮询 ❌ 功能OpenRouter也有

**🔗 资源**
- 官网：https://lidge-jun.github.io/opencodex/
- GitHub：https://github.com/lidge-jun/opencodex
- 安装：npm install -g @bitkyc08/opencodex

**🎮 实践指导**
- 第一步（5分钟）：npm install -g @bitkyc08/opencodex
- 第二步（30分钟）：配置.env文件，填入你的API key，启动 ocx start
- 第三步（后续）：用Codex连接localhost:10100即可
- 踩坑预警：部分模型不支持tool calling，需要测试兼容性
- 与大哥需求的关联：**省API费**的好东西，DeepSeek/Ollama比Claude便宜
- 一句话结论：省钱神器，开发者刚需 | 价值评分：⭐⭐⭐⭐

---

### 🔹 条目3：todos.dev

**日记原文**：https://todos.dev/

**🎯 本质**
- 一句话：让人和AI Agent协作的任务管理工具
- 根本问题：团队引入AI后，如何让人和Agent一起做任务而不混乱
- 人话版：带AI助手的任务管理APP，Agent可以帮你填todo

**📋 基本信息**
- 是什么：The task-driven workspace for humans and agents
- 核心功能：任务管理 + AI团队协作（可配置多个AI角色）
- 目标用户：1-5人小团队 + AI协作
- 热度：未搜到有效公开数据

**⚡ 竞品对比**
- 同类：Linear、Todoist、Notion Tasks
- 差异点：内置AI角色，Agent可以自己创建/更新任务
- 优劣势：✅ AI原生设计 ❌ 刚起步，集成度待观察

**🔗 资源**
- 官网：https://todos.dev/
- 文档：https://todos.dev/docs
- 定价：免费版可用，付费版有更多模型

**🎮 实践指导**
- 第一步（5分钟）：访问todos.dev注册账号
- 第二步（30分钟）：创建一个task，体验AI帮你分解任务
- 第三步（后续）：配置自己的AI模型（如DeepSeek）
- 踩坑预警：国内访问可能慢
- 与大哥需求的关联：项目管理/内容生产流程化
- 一句话结论：概念新颖，实用待验证 | 价值评分：⭐⭐⭐

---

### 🔹 条目4：Openship

**日记原文**：https://github.com/oblien/openship

**🎯 本质**
- 一句话：零配置的自动化部署平台
- 根本问题：部署太麻烦，要写CI/CD配置、yaml、运维
- 人话版：push代码自动部署，像Vercel但开源可自托管

**📋 基本信息**
- 是什么：Open-source, self-hostable deployment platform with built-in CI/CD
- 核心功能：代码push → 自动构建 → 部署容器 → 域名/SSL/CDN全包
- 目标用户：开发者/小团队
- 热度：⭐5546

**⚡ 竞品对比**
- 同类：Coolify、Portainer、Jumpserver
- 差异点：主打零配置，AI检测技术栈自动部署
- 优劣势：✅ 零配置 ✅ 桌面端/Web/CLI三合一 ❌ 社区比Coolify小

**🔗 资源**
- 官网：https://openship.io
- GitHub：https://github.com/oblien/openship
- 安装：npm i -g openship 或 Docker

**🎮 实践指导**
- 第一步（5分钟）：npm i -g openship
- 第二步（30分钟）：openship init 初始化项目，openship deploy 部署
- 第三步（后续）：自托管到自己的Linux服务器
- 踩坑预警：需要一台Linux服务器（可Docker运行）
- 与大哥需求的关联：做产品/工具的自动化部署
- 一句话结论：部署神器，省时间 | 价值评分：⭐⭐⭐⭐

---

### 🔹 条目5：xterm.js

**日记原文**：https://github.com/xtermjs/xterm.js

**🎯 本质**
- 一句话：浏览器里的终端模拟器
- 根本问题：如何在网页上运行命令行界面
- 人话版：JS库，把终端嵌入到任何网页

**📋 基本信息**
- 是什么：Terminal for the web - a frontend component for terminal apps in browser
- 核心功能：在浏览器中运行bash/vim/tmux等终端程序
- 目标用户：需要Web终端的开发者（VS Code、Hyper、Tabby都用它）
- 热度：⭐20937

**⚡ 竞品对比**
- 同类：hterm（Chromium内置）、xtermjs
- 差异点：最成熟、文档最全、VS Code同款
- 优劣势：✅ 20k+ star验证 ✅ 零依赖 ✅ WebGL加速 ❌ 无后端

**🔗 资源**
- 官网：https://xtermjs.org/
- GitHub：https://github.com/xtermjs/xterm.js
- npm：@xterm/xterm

**🎮 实践指导**
- 第一步（5分钟）：npm install @xterm/xterm
- 第二步（30分钟）：看官方文档，搭一个简单Demo
- 第三步（后续）：集成到自己项目中（如在线编程平台）
- 踩坑预警：需要配合node-pty等后端才能真正运行命令
- 与大哥需求的关联：做在线工具/平台的底层组件
- 一句话结论：基础设施，必要时有价值 | 价值评分：⭐⭐⭐

---

### 🔹 条目6：AI Agent Book

**日记原文**：https://github.com/bojieli/ai-agent-book

**🎯 本质**
- 一句话：AI Agent的系统性教材
- 根本问题：市面上AI Agent资料碎片化，缺乏系统性工程实践指南
- 人话版：一本书，从原理到代码，手把手教做AI Agent

**📋 基本信息**
- 是什么：《深入理解 AI Agent：设计原理与工程实践》（李博杰 著）
- 核心内容：10章，Agent=LLM+上下文+工具，88个配套实验
- 目标用户：AI开发者/研究者
- 热度：⭐13436

**⚡ 竞品对比**
- 同类：各种AI Agent付费课程、论文
- 差异点：**开源免费** + 88个可运行实验 + 中文原创
- 优劣势：✅ 免费 ✅ 实践性强 ✅ 中文友好 ❌ 需要一定基础

**🔗 资源**
- 官网：GitHub仓库
- PDF下载：GitHub Releases
- 翻译：英文/泰语/越南语都有

**🎮 实践指导**
- 第一步（5分钟）：GitHub star + 下载PDF
- 第二步（30分钟）：读chapter1intro，了解核心公式
- 第三步（后续）：选感兴趣的实验动手跑
- 踩坑预警：部分实验需要API key（Kimi/GLM/SiliconFlow等）
- 与大哥需求的关联：**理解AI Agent底层逻辑**，做产品/内容的基础
- 一句话结论：必读教材，AI Agent入门神书 | 价值评分：⭐⭐⭐⭐⭐

---

### 🔹 条目7：Short Video Factory

**日记原文**：https://github.com/YILS-LIN/short-video-factory

**🎯 本质**
- 一句话：AI批量生成营销短视频的桌面工具
- 根本问题：做产品营销视频成本高、周期长
- 人话版：输入文案+素材，自动剪辑出带配音字幕的短视频

**📋 基本信息**
- 是什么：一键生成产品营销与泛内容短视频，AI批量自动剪辑工具
- 核心功能：文案生成、语音合成、视频剪辑、字幕特效、批量处理
- 目标用户：电商/营销/内容创作者
- 热度：⭐4831

**⚡ 竞品对比**
- 同类：CapCut、Pika、Runway
- 差异点：**本地运行** + 批量自动化 + 开源
- 优劣势：✅ 开源可定制 ✅ 批量处理 ❌ 界面美观度一般

**🔗 资源**
- 官网：https://short-video-factory.yils.blog
- 下载：GitHub Releases（Win/Mac/Linux）
- GitHub：https://github.com/YILS-LIN/short-video-factory

**🎮 实践指导**
- 第一步（5分钟）：GitHub下载安装包
- 第二步（30分钟）：导入素材，配好文案，跑通一个视频
- 第三步（后续）：研究批量任务配置
- 踩坑预警：需要一定配置，本地运行需要GPU更佳
- 与大哥需求的关联：**短视频内容生产**的自动化工具
- 一句话结论：营销利器，内容生产者值得关注 | 价值评分：⭐⭐⭐⭐

---

### 🔹 条目8：x.ai/grok/excel

**日记原文**：https://x.ai/grok/excel

**状态**：被Cloudflare拦截，未搜到有效信息

---

### 🔹 条目9：Avernet

**日记原文**：git clone https://github.com/inclusionAI/Avernet.git

**🎯 本质**
- 一句话：企业级多Agent协调平台
- 根本问题：企业引入大量Agent后，如何让他们协作而不混乱
- 人话版：让10000+个AI Agent在一起工作、共享记忆、协同做事的操作系统

**📋 基本信息**
- 是什么：Distributed agent coordination platform
- 核心功能：Agent身份管理、多Agent发现组队、协同执行、组织记忆
- 目标用户：企业（已在蚂蚁集团生产环境运行，管理10000+ Agent）
- 热度：⭐231

**⚡ 竞品对比**
- 同类：AutoGen、LangGraph、CrewAI
- 差异点：企业级生产级、蚂蚁背书、完整基础设施
- 优advantages：✅ 10000+ Agent验证 ✅ 完整治理/审计 ❌ 刚开源

**🔗 资源**
- GitHub：https://github.com/inclusionAI/Avernet
- 文档：仓库内README

**🎮 实践指导**
- 第一步（5分钟）：git clone仓库，看README
- 第二步（30分钟）：跑通Quick Start示例
- 第三步（后续）：研究多Agent协作场景
- 踩坑预警：偏底层，需要一定架构理解
- 与大哥需求的关联：了解企业级Agent基础设施长啥样
- 一句话结论：前瞻性项目，了解趋势 | 价值评分：⭐⭐⭐

---

## 📊 今日汇总

### 最值得关注 Top 3
1. **AI Agent Book** - 13k+ star验证，系统性学习AI Agent的唯一免费中文教材，88个实验可跑
2. **OpenCodex** - 省钱+灵活性，用低成本模型跑Codex，开发者刚需
3. **Short Video Factory** - 短视频批量生产工具，直接关联内容变现

### 本质洞察
- 这些条目背后有一个共同主题：**AI Agent正在从玩具走向生产**
- Avernet（10000+ Agent在企业运行）、Openship（零配置部署）都在降低AI应用门槛
- 工具链在完善：编码（OpenCodex）→ 部署（Openship）→ 内容生产（Short Video Factory）

### 明日行动清单
- [ ] 下载AI Agent Book PDF，读chapter1（30分钟）
- [ ] 试装OpenCodex，用DeepSeek跑通一个简单任务（30分钟）
- [ ] 下载Short Video Factory，跑通一个demo视频（1小时）

