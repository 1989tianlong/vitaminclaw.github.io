---
title: "日记探索 · 2026-06-18"
date: 2026-06-18
authorship: ai
authorshipNote: "由 AI 对当日日记逐条做第一性原理拆解与实践指导。"
description: "mattpocock/skills、Vercel Eve、Zenmux"
tags: [日记探索]
---

> 第一性原理 · 广泛搜索 · 实践指导

## 📅 概览
- 探索日期：2026-06-19
- 信息来源：2026-06-18.md
- 条目数：约20个
- 重点探索：5条（筛选标准：热度高、有开源/产品化、可操作性强）

---

### 🔹 条目1：mattpocock/skills

**日记原文**：https://github.com/mattpocock/skills/releases/tag/mattpocock-skills%401.0.0

**🎯 本质**
- 一句话：**给AI编程助手用的"最佳实践技能包"**
- 根本问题：Claude Code、Cursor等AI编程工具容易"跑偏"，不理解真正需求，交付成果与预期差距大
- 人话版：就像给AI配了个"老工程师导师"，教它怎么接需求、怎么做架构、怎么写代码、怎么测试

**📋 基本信息**
- 是什么：Matt Pocock（TypeScript大牛）开源的AI编程技能集，44个技能，430万次安装
- 核心功能：
  - `/grill-me` - 需求拷问，确保AI真正理解你要什么
  - `/tdd` - 测试驱动开发
  - `/to-prd` - 需求文档化
  - `/improve-codebase-architecture` - 架构改进
  - `/diagnose` - 调试诊断
- 目标用户：使用Claude Code、Cursor、Windsurf等AI编程工具的开发者
- 热度/数据：44个技能，430万次总安装，最热门技能`grill-me`安装35万次

**⚡ 竞品对比**
- 同类：官方Prompt库、Cline内置指令、Agent rules
- 差异点：Matt Pocock的技能经过 thousands 开发者验证，是"真实工程经验"的提炼，可组合、可定制
- 优劣势：✅ 经过实战验证、可组合、免费开源 / ❌ 需要学习成本、不是开箱即用

**🔗 资源**
- 官网：https://skills.sh/mattpocock/skills
- GitHub：https://github.com/mattpocock/skills
- 文档：Skills.sh平台

**🎮 实践指导**
- 第一步（5分钟）：运行 `npx skills@latest add mattpocock/skills`
- 第二步（30分钟）：在Cursor/Cline中尝试 `/grill-me` 技能，体验需求澄清过程
- 第三步（后续）：根据自己场景挑选3-5个常用技能，形成自己的AI工作流
- 踩坑预警：不要一股脑安装所有技能，挑最常用的3-5个即可
- 与大哥需求的关联：大哥做产品开发，AI编程是核心生产力，这个技能包能显著提升AI代码质量
- 一句话结论：**每个AI编程用户都值得拥有的"工程最佳实践包"，装完立刻提升AI输出质量** | 价值评分：⭐⭐⭐⭐⭐

---

### 🔹 条目2：Vercel Eve

**日记原文**：https://vercel.com/blog/introducing-eve

**🎯 本质**
- 一句话：**像Next.js之于网页开发那样，为AI Agent做一个"全栈框架"**
- 根本问题：现在每个人都在造AI Agent，但都在重复造轮子（认证、持久化、错误处理、部署）
- 人话版：Vercel把他们在v0等产品中积累的Agent工程经验，抽象成了一个开源框架，你专注写业务逻辑，其他的全包

**📋 基本信息**
- 是什么：Vercel 2026年6月发布的开源Agent框架
- 核心功能：
  - Durable execution（持久化执行，Agent可暂停、恢复、跨部署存活）
  - Sandboxed compute（沙箱计算）
  - Human-in-the-loop approvals（人工审批节点）
  - Subagents（子Agent编排）
  - Evals（评估）
- 目标用户：需要构建生产级AI Agent的开发者
- 热度/数据：2026年6月17日刚发布，Vercel官方主推

**⚡ 竞品对比**
- 同类：LangChain、AutoGen、LlamaIndex Workflows
- 差异点：Eve强调"batteries included"（电池已装），把生产级基础设施（部署、监控、持久化）做成内置功能，而不是让你自己拼接
- 优ventory：✅ Vercel背书、专为生产环境设计、继承Next.js的易用性 / ❌ 刚发布，生态还在建设中

**🔗 资源**
- 官网：https://vercel.com/blog/introducing-eve
- GitHub：未明确（文章刚发布）
- 文档：Vercel文档站

**🎮 实践指导**
- 第一步（5分钟）：阅读Vercel博客了解Eve理念
- 第二步（30分钟）：试着用Eve创建一个简单的数据分析师Agent
- 第三步（后续）：关注Eve生态发展，用于生产级项目
- 踩坑预警：刚发布，生产项目建议观望2-3个月
- 与大哥需求的关联：大哥做AI产品，框架选型直接影响开发效率，Eve值得作为备选
- 一句话结论：**Vercel出手的Agent框架，定位清晰（"Next.js for Agents"），但需要时间验证** | 价值评分：⭐⭐⭐⭐

---

### 🔹 条目3：Zenmux

**日记原文**：https://zenmux.ai/models

**🎯 本质**
- 一句话：**AI模型的"聚合路由器"，一个API接口调用所有主流AI模型**
- 根本问题：每个AI模型提供商有不同的API、不同的计费方式、不同的协议，开发者苦于切换和整合
- 人话版：就像你办一张卡，可以在所有银行ATM取钱——Zenmux一个API接口，覆盖所有主流AI模型

**📋 基本信息**
- 是什么：企业级LLM平台，提供统一API调用所有主流AI模型
- 核心功能：
  - 统一API（兼容OpenAI、Anthropic、Google Vertex协议）
  - 160+模型接入
  - Model Auto Routing（自动选最优模型）
  - AI Model Insurance（幻觉/低质量输出自动赔付）
  - Human Last Exam (HLE) 质量验证
- 目标用户：企业开发者、需要多模型切换的团队
- 热度/数据：处理过数十亿Token，有企业客户案例

**⚡ 竞品对比**
- 同类：OpenRouter、Together AI、Anyscale
- 差异点：
  - 主打"保险"——AI输出质量差会赔钱
  - HLE质量验证公开透明
  - Auto Routing自动选模型
- 优劣势：✅ 质量有保障（敢赔钱）、透明、自动化 / ❌ 中间商赚差价、可能比直接用原厂贵

**🔗 资源**
- 官网：https://zenmux.ai
- 定价：节日活动充值为+25%赠送

**🎮 实践指导**
- 第一步（5分钟）：访问Zenmux官网了解功能
- 第二步（30分钟）：注册账号，体验Chat界面（免费额度）
- 第三步（后续）：如果有多模型切换需求，申请API测试
- 踩坑预警：作为中间层会有溢价，大规模使用前算好成本
- 与大哥需求的关联：大哥做AI产品需要调用多种模型，Zenmux可以降低切换成本，尤其适合不确定用哪个模型的场景
- 一句话结论：**多模型玩家的"省心之选"，但要算好成本账** | 价值评分：⭐⭐⭐⭐

---

### 🔹 条目4：Cursor Design Mode

**日记原文**：https://cursor.com/cn/blog/design-mode

**🎯 本质**
- 一句话：**让AI帮你做UI设计图，直接生成代码**
- 根本问题：传统设计流程是"设计师出图→开发者代码"，中间有大量沟通损耗和返工
- 人话版：你在Cursor里说"帮我做个登录页面"，AI直接生成设计+代码，一步到位

**📋 基本信息**
- 是什么：Cursor（AI代码编辑器）新推出的设计模式
- 核心功能：
  - 自然语言生成UI
  - Design Mode交互界面
  - 实时预览和修改
- 目标用户：开发者、全栈工程师、独立开发者
- 热度/数据：Cursor本身就是AI编程顶流产品，Design Mode是2025-2026新功能

**⚡ 竞品对比**
- 同类：v0（Vercel）、Lovable、Replit Agent
- 差异点：Cursor Design Mode深度集成IDE，生成代码可直接编辑调试
- 优劣势：✅ 生成代码质量高、与开发流程无缝 / ❌ 需要Cursor订阅

**🔗 资源**
- 官网：https://cursor.com
- 文档：Cursor内置

**🎮 实践指导**
- 第一步（5分钟）：打开Cursor，试着用自然语言生成一个简单UI
- 第二步（30分钟）：用Design Mode做一个完整页面，体验修改流程
- 第三步（后续）：将Design Mode融入日常开发流程
- 踩坑预警：免费版有额度限制
- 与大哥需求的关联：大哥做产品需要快速出原型，Cursor Design Mode可以极大提升"设计→代码"效率
- 一句话结论：**开发者的UI设计神器，和代码无缝衔接** | 价值评分：⭐⭐⭐⭐⭐

---

### 🔹 条目5：AG-UI Protocol

**日记原文**：https://github.com/ag-ui-protocol/ag-ui

**🎯 本质**
- 一句话：**AI Agent和前端应用之间的"通用语言"**
- 根本问题：每个Agent框架用自己的方式和前端通信，没有标准，导致重复开发
- 人话版：就像USB-C接口统一了设备连接，AG-UI统一了AI Agent和APP的通信方式

**📋 基本信息**
- 是什么：开源的、事件驱动的Agent-用户交互协议
- 核心功能：
  - 16种标准事件类型
  - 兼容任何传输层（SSE、WebSocket、webhooks）
  - 实时流式交互
  - 多模态支持
- 目标用户：构建Agent产品的开发者
- 热度/数据：14,339 stars，1,291 forks，328 open issues（相当活跃）

**⚡ 竞品对比**
- 同类：A2A（Agent to Agent）、MCP（Model Context Protocol）
- 差异点：
  - MCP = Agent ↔ 工具/数据
  - A2A = Agent ↔ Agent
  - AG-UI = Agent ↔ 用户界面
  - 三者是互补关系，不是竞争关系
- 优劣势：✅ 解决实际问题、协议栈完整、社区活跃 / ❌ 还在早期，采纳率待观察

**🔗 资源**
- 官网：https://ag-ui.com/
- 文档：https://docs.ag-ui.com/
- GitHub：https://github.com/ag-ui-protocol/ag-ui
- Discord：https://discord.gg/Jd3FzfdJa8

**🎮 实践指导**
- 第一步（5分钟）：访问AG-UI官网了解概念
- 第二步（30分钟）：运行 `npx create-ag-ui-app my-agent-app` 体验Demo
- 第三步（后续）：如果做Agent产品，考虑用AG-UI标准化前端交互
- 踩坑预警：协议较新，企业级采用需要评估稳定性
- 与大哥需求的关联：大哥做AI产品需要考虑前端交互层，AG-UI是值得关注的标准
- 一句话结论：**Agent交互层的"USB-C"，未来可能成为标配** | 价值评分：⭐⭐⭐⭐

---

## 📊 今日汇总

### 最值得关注 Top 3
1. **Cursor Design Mode** - 直接提升开发效率的产品，立刻能用
2. **mattpocock/skills** - 免费开源的AI编程最佳实践，立刻能用
3. **AG-UI Protocol** - 代表了Agent交互层的标准化趋势，值得关注

### 本质洞察
- 这一批日记条目反映了**AI开发的三个层次**：
  1. **工具层**：Cursor Design Mode、Zenmux - 提升日常开发效率
  2. **方法论层**：mattpocock/skills - 让AI更好地为你工作
  3. **架构层**：Eve、AG-UI - 构建生产级Agent的框架和协议
- 共同趋势：**AI开发从"能用"走向"好用"**，从"自己造轮子"走向"用最佳实践"

### 明日行动清单
- [ ] **第一件事（5分钟）**：在Cursor里试一次Design Mode
- [ ] **第二件事（30分钟）**：安装mattpocock/skills并在编程中试用
- [ ] **第三件事（可选深入）**：了解AG-UI协议，评估是否适用于你的项目

---

## 📝 其他条目（简述）

| 条目 | 状态 | 简述 |
|------|------|------|
| Mistral Console | 未深入 | AI模型提供商控制台 |
| StarTrail/LEANN | 未深入 | GitHub开源项目 |
| OpenCut | 未深入 | GitHub开源项目 |
| LightPanda | 未深入 | Agent产品 |
| Midscene | 未深入 | Web测试Agent |
| Google Agent Garden | 未深入 | Google Agent平台 |
| 阿里zvec | 未深入 | 中文开源向量模型 |
| Okara.ai | 未深入 | Influencer Agent平台 |

> 注：其他条目未做深度探索，如需了解某项可单独补充。

