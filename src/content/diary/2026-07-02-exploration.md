---
title: "日记探索 · 2026-07-02"
date: 2026-07-02
authorship: ai
authorshipNote: "由 AI 对当日日记逐条做第一性原理拆解与实践指导。"
description: "6 条记录 · 4 条重点：tg.bd.cn、Seedance 2.0 on OpenArt AI、Agent-Reach"
tags: [日记探索]
---

> 第一性原理 · 广泛搜索 · 实践指导

## 📅 概览
- 探索日期：2026-07-03
- 信息来源：2026-07-02.md
- 条目数：6
- 重点探索：4条（Agent-Reach、Osaurus、Blender+Seedance工作流、Ego Lite）

---

### 🔹 条目1：tg.bd.cn（国内代理/梯子服务）

**日记原文**：https://tg.bd.cn/?rtb_retry=1#/pages/login/register?invite_code=8898365&qd=self_fans_pc

**🎯 本质**
- 一句话：这是一个代理/VPN服务的注册链接（tg.bd.cn可能是某个机场/代理服务）
- 根本问题：访问被墙的AI工具和服务（如OpenArt、GitHub等）
- 人话版：就是翻墙工具，让你能在国内用上国外AI服务的入口

**📋 基本信息**
- 是什么：疑似机场/代理服务注册页面，带返佣码
- 核心功能：提供海外网络节点访问
- 目标用户：需要访问海外AI工具的国内用户
- 热度/数据：未搜到有效信息

**⚡ 竞品对比**
- 同类：Clash、V2ray、各类机场服务
- 差异点：属于哪个服务商不明
- 优劣势：无法评估

**🔗 资源**
- 站点：tg.bd.cn（访问受限，无法抓取）
- GitHub：无

**🎮 实践指导**
- 第一步（5分钟）：大哥自己评估是否需要稳定代理访问海外AI服务
- 第二步（30分钟）：如有需求，比较几家主流机场服务（稳定性/速度/价格）
- 第三步（后续）：按需订阅
- 踩坑预警：稳定性参差不齐，注意隐私风险
- 与大哥需求的关联：可能是想用Seedance等工具的铺垫
- 一句话结论：工具本身，不做评价，按需使用 | 价值评分：⭐⭐

---

### 🔹 条目2：Seedance 2.0 on OpenArt AI

**日记原文**：Seedance 2.0 on OpenArt AI

**🎯 本质**
- 一句话：Seedance是字节跳动旗下的AI视频生成模型，OpenArt AI是其托管平台
- 解决的根本问题：让普通用户无需本地部署，直接在云端用AI生成高质量视频
- 人话版：就是"AI拍视频"，你描述一段画面，AI给你生成出来

**📋 基本信息**
- 是什么：字节跳动Seedance视频生成模型的云端服务，由OpenArt AI平台托管
- 核心功能：文本/图片生成视频，支持运动控制、镜头语言等
- 目标用户：内容创作者、视频工作者、普通用户
- 热度/数据：字节跳动是国内AI视频头部玩家，OpenArt有稳定用户群

**⚡ EOUT**
- 同类：Runway Gen-3、Pika、Sora、快手可灵、智谱清影
- 差异点：Seedance主打运动稳定性和镜头控制，字节技术积累深厚
- 优劣势：+国内团队优化好 +有Blender控制工作流 -依赖平台 -可能需代理访问

**🔗 资源**
- 官网：openart.ai（直接访问超时，需代理）
- GitHub：见下方Awesome-Blender-Seedance-Workflow-Usecases
- 文档：evolink.ai cookbook

**🎮 实践指导**
- 第一步（5分钟）：确认有稳定代理访问OpenArt
- 第二步（30分钟）：注册OpenArt账号，查看Seedance 2.0定价
- 第三步（后续）：参考Blender工作流文档做控制测试
- 踩坑预警：OpenArt国内访问不稳定；视频生成消耗积分/费用
- 与大哥需求的关联：内容创作素材生产，做视频内容的神器
- 一句话结论：值得重点关注，国内AI视频生成第一梯队 | 价值评分：⭐⭐⭐⭐

---

### 🔹 条目3：Agent-Reach（AI Agent互联网能力扩展）

**日记原文**：https://github.com/Panniantong/Agent-Reach

**🎯 本质**
- 一句话：给AI Agent装上"眼睛"，让它能读推特、搜Reddit、看YouTube、刷小红书
- 解决的根本问题：AI Agent只能处理本地文件，无法访问互联网内容
- 人话版：装上这个插件，你的AI助手就能自己上网搜索、刷社交媒体、看视频了

**📋 基本信息**
- 是什么：AI Agent的互联网访问能力扩展工具箱/路由层
- 核心功能：
  - 读取任意网页（Jina Reader）
  - 提取YouTube字幕
  - 搜索Twitter/Reddit/B站/小红书
  - GitHub读写、RSS订阅
  - 全网语义搜索（Exa MCP）
- 目标用户：使用Claude Code/OpenClaw/Cursor等AI Agent的用户
- 热度/数据：GitHub Trending #1，MIT开源，持续维护更新

**⚡ 竞品对比**
- 同类：Browserbase、Firecrawl、各平台MCP Server
- 差异点：
  - 多平台统一路由（"首选+备选"后端列表，某个失效自动切换）
  - 一句话安装，装完即用
  - 专为AI Agent设计，不是给人用的工具
  - 完全免费（API本身可能收费，但工具链免费）
- 优劣势：+安装极简 +自动路由降级 +支持平台多 +免费开源 -需要配置Cookie的平台稍复杂

**🔗 资源**
- 官网：https://github.com/Panniantong/Agent-Reach
- 安装：复制一句话给Agent即可
- 文档：docs/install.md（安装）、docs/update.md（更新）

**🎮 实践指导**
- 第一步（5分钟）：复制「帮我安装 Agent Reach：https://raw.githubusercontent.com/Panniantong/agent-reach/main/docs/install.md」给OpenClaw
- 第二步（30分钟）：运行agent-reach doctor检查各渠道状态
- 第三步（后续）：告诉Agent「帮我配Twitter」「帮我配小红书」解锁需要登录的平台
- 踩坑预警：OpenClaw需开启exec权限（tools profile设为coding）；Cookie只存本地
- 与大哥需求的关联：深度搜索/调研神器，做内容必备的信息收集能力
- 一句话结论：今天就能装，装完你的AI助手立刻变强，必装 | 价值评分：⭐⭐⭐⭐⭐

---

### 🔹 条目4：Osaurus（macOS本地AI Agent框架）

**日记原文**：https://github.com/osaurus-ai/osaurus

**🎯 本质**
- 一句话：在你自己的Mac上运行的AI Agent框架，完全离线，数据不出机器
- 解决的根本问题：把AI Agent的能力和数据完全控制在自己手里，不依赖云服务
- 人话版：相当于给Mac装了个"本地版ChatGPT"，但它更聪明——有记忆、能执行任务、完全属于你

**📋 基本信息**
- 是什么：原生macOS AI Agent运行环境，Swift开发，MIT开源
- 核心功能：
  - 多Agent并行（每个Agent独立记忆、主题、工具）
  - 本地持久记忆（分层记忆系统）
  - 沙箱执行（Linux VM隔离执行代码）
  - 隐私过滤器（自动检测并遮挡敏感信息再发往云端）
  - 加密身份/密钥管理
  - 支持本地模型（Ollama）和云端模型（OpenAI/Anthropic）
  - MCP Server支持
- 目标用户：重视隐私的Mac用户、开发者、想完全掌控AI数据的用户
- 热度/数据：GitHub开源，有Discord社区，持续迭代

**⚡ 竞品对比**
- 同类：OpenAI Agents SDK、LangChain Agents、本地Agent框架
- 差异点：
  - 原生Swift，非Electron，性能好
  - 完全离线可用（本地模型）
  - 隐私过滤器是亮点（云端传输前自动脱敏）
  - Apple Silicon专属
  - MCP协议支持
- 优劣势：+隐私极强 +本地运行 -仅Mac -需要macOS 15.5+

**🔗 资源**
- 官网：https://osaurus.ai / 文档：https://docs.osaurus.ai
- GitHub：https://github.com/osaurus-ai/osaurus
- 安装：`brew install --cask osaurus`
- Discord：discord.gg/osaurus

**🎮 实践指导**
- 第一步（5分钟）：检查Mac系统版本（需15.5+和Apple Silicon）
- 第二步（30分钟）：运行brew install --cask osaurus，安装后启动osaurus ui
- 第三步（后续）：配置本地模型（Ollama）或接入API Key
- 踩坑预警：仅Apple Silicon Mac；沙箱功能需macOS 26+；和大哥现有OpenClaw有重叠功能
- 与大哥需求的关联：长期看，本地AI Agent是趋势，但和OpenClaw功能有重叠
- 一句话结论：技术很有前瞻性，但大哥已有OpenClaw，可作为备选/对比研究 | 价值评分：⭐⭐⭐

---

### 🔹 条目5：Awesome-Blender-Seedance-Workflow-Usecases

**日记原文**：https://github.com/cheercheung/Awesome-Blender-Seedance-Workflow-Usecases

**🎯 本质**
- 一句话：用Blender控制Seedance视频生成的实战案例集合
- 解决的根本问题：AI视频生成不可控、难以精确控制镜头和动作
- 人话版：传统AI视频是"盲盒"，这个工作流让你先用Blender做好镜头规划，再让AI生成，精度大幅提升

**📋 基本信息**
- 是什么：收录25个Blender+Seedance实战案例的开源仓库
- 核心功能：
  - Blender MCP接入（让AI控制Blender）
  - 镜头控制工作流
  - 预可视化（Previs）流程
  - FBX/Mixamo动作引用
  - ComfyUI风格迁移
- 目标用户：专业视频创作者、3D艺术家、AI视频进阶用户
- 热度/数据：多语言文档（中英日韩等），配套EvoLink平台

**⚡ 竞品对比**
- 同类：各平台官方工作流文档
- 差异点：
  - 真实用户案例，非官方宣传
  - Blender控制是核心亮点（精确镜头语言）
  - Agent辅助（MCP+Claude Codex）
- 优劣势：+案例真实可查 +控制精度高 +有配套工具 -学习曲线陡

**🔗 资源**
- GitHub：https://github.com/cheercheung/Awesome-Blender-Seedance-Workflow-Usecases
- Cookbook：https://evolink.ai/cookbook/blender-to-video
- 配套工具：npm i evolink-seedance / evolink-topaz-video-upscale

**🎮 实践指导**
- 第一步（5分钟）：浏览GitHub仓库，了解25个案例类型
- 第二步（30分钟）：阅读EvoLink Blender-to-video cookbook，了解完整流程
- 第三步（后续）：如需高精度控制，安装Blender MCP，配置Agent工具链
- 踩坑预警：需要Blender基础；工具链较复杂；需OpenArt/Seedance账号
- 与大哥需求的关联：专业级AI视频控制，做高质量内容的重要参考
- 一句话结论：进阶用户值得研究，普通用户可以先收藏 | 价值评分：⭐⭐⭐

---

### 🔹 条目6：exercises-dataset（健身动作多语言数据集）

**日记原文**：https://github.com/hasaneyldrm/exercises-dataset

**🎯 本质**
- 一句话：1324个健身动作的结构化数据集，支持6种语言，包含完整的动作规格和步骤说明
- 解决的根本问题：开发健身类应用需要大量标准化动作数据，人工整理耗时
- 人话版：帮开发者省事的"健身动作数据库"，有动作名称、肌肉部位、器材、步骤说明，中英西意土俄六种语言

**📋 基本信息**
- 是什么：开发者友好的健身动作数据集+脚手架工具
- 核心功能：
  - 1324个健身动作元数据
  - 6种语言翻译（EN/ES/IT/TR/RU/ZH）
  - JSON格式，含分类/肌肉群/器材/步骤
  - 含交互式浏览器和开发者安装向导
- 目标用户：健身App开发者、AI训练数据需求者
- 热度/数据：开源数据集，非前沿技术项目

**⚡ 竞品对比**
- 同类：ExerciseDB（官方）、各健身平台数据
- 差异点：多语言是亮点；开发者友好；不含媒体文件（避免版权）
- 优劣势：+多语言 +结构清晰 -无图片/视频 -非AI前沿

**🔗 资源**
- GitHub：https://github.com/hasaneyldrm/exercises-dataset
- 数据源：ExerciseDB by AscendAPI

**🎮 实践指导**
- 第一步（5分钟）：浏览GitHub了解数据结构和字段
- 第二步（30分钟）：下载exercises.json研究格式
- 第三步（后续）：如做健身类App或AI训练，可直接作为数据源
- 踩坑预警：无图片/动图（版权问题），需自己配图
- 与大哥需求的关联：可作为内容创作的素材库（如健身教程），但优先级较低
- 一句话结论：垂直领域工具，非大哥核心需求，可作为素材备用 | 价值评分：⭐⭐

---

### 🔹 条目7：Ego Lite

**日记原文**：Ego Lite

**🎯 本质**
- 一句话：未搜到有效信息
- 根本问题：未搜到有效信息
- 人话版：未搜到有效信息

**📋 基本信息**
- 是什么：未搜到有效信息
- 核心功能：未搜到有效信息
- 目标用户：未搜到有效信息
- 热度/数据：未搜到有效信息

**⚡ 竞品对比**
- 同类：未搜到有效信息
- 差异点：未搜到有效信息
- 优劣势：未搜到有效信息

**🔗 资源**
- 官网：未搜到有效信息
- GitHub：未搜到有效信息

**🎮 实践指导**
- 与大哥需求的关联：无法评估
- 一句话结论：信息不足，无法判断 | 价值评分：无法评估

---

## 📊 今日汇总

### 最值得关注 Top 3
1. **Agent-Reach** - 今天就能装，装完OpenClaw立刻能读推特/搜Reddit/看B站/刷小红书，信息收集能力暴增
2. **Seedance 2.0 on OpenArt** - 字节跳动AI视频生成第一梯队，配合Blender控制工作流可做专业级内容
3. **Awesome-Blender-Seedance-Workflow-Usecases** - Seedance的实战案例库，是进阶视频控制的路线图

### 本质洞察
- **Agent能力延伸**是核心主题：Agent-Reach让AI"睁眼"看互联网，Osaurus让AI"住进"你的Mac，Seedance让AI"会拍"视频——本质都是把AI从聊天工具变成真正的数字劳动力
- **信息差 → 工具链**的落地：大哥日记里既有信息搜集工具（Agent-Reach），也有内容生产工具（Seedance），形成了「调研→创作」的完整闭环
- **本地化vs云端**的博弈：Osaurus代表本地化趋势，Seedance on OpenArt代表云端趋势——两者不矛盾，本地做隐私，云端做算力

### 明日行动清单
- [ ] **第一件事（5分钟）**：把「帮我安装 Agent Reach：https://raw.githubusercontent.com/Panniantong/agent-reach/main/docs/install.md」发给OpenClaw
- [ ] **第二件事（30分钟）**：确认OpenArt/Seedance访问情况，研究Seedance 2.0定价和功能
- [ ] **第三件事（可选深入）**：浏览Awesome-Blender-Seedance-Workflow-Usecases，了解专业视频控制方法

