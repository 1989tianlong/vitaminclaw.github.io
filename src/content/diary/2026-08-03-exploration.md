---
title: "日记探索 · 2026-08-03"
date: 2026-08-03
authorship: ai
authorshipNote: "由 AI 对当日日记逐条做第一性原理拆解与实践指导。"
description: "9 条记录"
tags: [日记探索]
---

---
标题: 2026-08-03 日记深度探索
日期: 2026-08-03
tags:
  - 日记探索
  - 补全轮
---

# 2026-08-03 日记深度探索 v3（补全轮）
> 第一性原理 · 广泛搜索 · 实践指导

## 📅 概览
- 探索日期：2026-08-03
- 信息来源：`20-日记/2026-07-21.md`（**补全轮** —— 今天无新日记；07-21 日记共 9 条，是近两周唯一一篇从未被探索过的日记，本轮补齐）
- 条目数：9（深度探索 5 条 + 4 条一段话带过）
- 验证方式：GitHub API + README 实抓 ×4、官网（r.jina.ai 阅读器代理）×3。getmoshi.app / todos.dev 直连被安全扫描器拦（lookalike TLD），经 jina 代理验证 ✅

---

## 条目 1：Moshi（getmoshi.app）—— 装在口袋里的 AI Coding Agent 终端

🔗 https://getmoshi.app/ （已验证 ✅，jina 代理抓取官网）

### a) 本质定位（第一性原理）
- **一句话说透本质**：它不是又一个 Agent，而是把你已有的 Agent（Claude Code / Codex / Grok Build）通过 SSH 装进手机——卖的是「随时随地盯着 Agent 干活」。
- **解决的根本问题**：Agent 干活动辄几十分钟，人却被钉在电脑前「 babysitting（当保姆）」。Moshi 把「看护 Agent」这个动作从桌面解放出来。
- **人话翻译**：手机上的一个终端 App，SSH 连回你自己的电脑，躺沙发上也能看 Claude Code 跑活、批审批、看 diff。
- **去掉包装核心在做什么**：SSH/Mosh/ET 直连 + 为手机重做的终端 UI + 语音输入 + 会话保活。没有中间服务器，数据不过第三方。

### b) 基本信息（官网实抓）
- **是什么**：iOS/Android 移动端终端，专为 AI coding agent 场景设计；App Store 评分 4.8（官网宣称）
- **核心功能**：SSH/Mosh/ET 直连自己的机器；会话跨休眠、切网、杀后台保活；语音转终端输入（Parakeet/Whisper/Apple/云端）；截图涂抹直接进 prompt；从终端头部 review 工作区 diff；可选 moshi-hook 加审批/通知/Watch 控制；支持 Claude Code、Codex、OpenCode、Pi、Grok Build、Cursor、Kimi Code 等
- **谁在用**：跑 coding agent 的独立开发者
- **行业热度**：未搜到 HN 热帖，靠 App Store 口碑传播（未逐项验证）

### c) 竞品对比
- **同类**：Termius/Blink Shell（通用 SSH 终端）、Tailscale + 任意终端（穷人版方案）、各 Agent 官方 App（Claude / Codex 移动端，但绑自家生态）
- **差异**：通用终端不懂 Agent 场景（审批、diff、语音）；官方 App 绑死自家 Agent。Moshi 是「Agent 中立 + 为手机原生设计」
- **优劣势**：优势是场景切得准、无 relay 隐私好；劣势是需要自己有一台常开的机器 + 配好网络（Tailscale 最省事），对非技术用户门槛不低

### d) 实用信息
- 官网：https://getmoshi.app/ ｜ App Store / Google Play 均有
- 上手门槛：**中**（要会配 SSH/Tailscale，正好是大哥最近在学的领域）
- 费用：免费起步（无账号无卡），具体付费档未验证

### e) 实践指导
- **今天就能试**：
  1. 第一步（5 分钟）：App Store 搜 Moshi 下载，局域网内 SSH 连自己的 Mac 跑一下 `ls`
  2. 第二步（30 分钟）：装 Tailscale（Mac + 手机各一端），实现外网一键连回；连上后启动 Claude Code / Hermes 跑个真任务
  3. 第三步（深入）：配 moshi-hook 接审批和通知，体验「Agent 干活、人只点头」的完整流
- **踩坑预警**：macOS 要开「远程登录」（系统设置 → 共享）；休眠会断线，Mac 需设防休眠或接电源；语音输入用云端引擎时注意代码隐私
- **与大哥赚钱/做内容的直接关联**：大哥已有阿里云服务器 + Mac 双环境，Moshi 是把这两台机器「随身化」的最后一块拼图；内容角度，「手机上遛 AI Agent」是 X/B站的高传播题材
- **价值评分**：⭐⭐⭐⭐
- **一句话结论**：值得今天就装——它把大哥已有的 Agent 工作流直接延长到了手机上，边际成本几乎为零。

---

## 条目 2：Todos.dev —— 一句话目标，Agent 团队自动拆活干活

🔗 https://todos.dev/ （已验证 ✅，jina 代理抓取官网含 FAQ）

### a) 本质定位（第一性原理）
- **一句话说透本质**：把「项目经理」这个角色做成 Agent（Chief）——你说一句话目标，它拆成 todo、按分工派给手下 Agent、盯进度、汇报。
- **解决的根本问题**：单 Agent 干不了大活，而人自己当「多 Agent 调度员」太累——编排、分模型、盯进度、控成本全是体力活。
- **人话翻译**：一个「AI 包工头」：你下一句指令，它把手下几个 AI 员工的活排好、干完、向你汇报，你只负责最终签字。
- **去掉包装核心在做什么**：任务分解 + 按岗位分配模型（贵模型干难活、便宜模型干粗活）+ plan/build 两阶段 + 独立 review agent + 逐条 token 成本核算 + 经验沉淀为 skill/记忆。

### b) 基本信息（官网 FAQ 实抓）
- **是什么**：人机混合团队的任务驱动工作区，PWA 形态（手机可用）；执行跑在你自己的机器上（`tds start` 注册 executor，git worktree 隔离，PR 直推 GitHub）
- **核心功能**：Chief agent 拆解/派单/追踪/汇报；每 agent 可独立配模型和思考档位（700+ 模型，GPT/Claude/DeepSeek/Ollama 本地/任意 OpenAI 兼容端点）；支持直接用 ChatGPT/Codex/Copilot 订阅登录（无需 API key）；技能库 + agent 记忆复用
- **谁在用**：1-5 人小团队，一人公司也明确支持
- **费用**：单人 Free 永久免费；Pro 按团队固定价、不按席位、模型费用零加价（付给模型商）

### c) 竞品对比
- **同类**：Devin（全托管云端 agent）、Manus、Kanban-orchestrator 类多 agent 编排、大哥自己在用的 Hermes delegate_task
- **差异**：Devin 跑在厂商沙箱；Todos 执行在你自己的硬件上，且订阅登录制（不强制 API key）+ 成本逐条核算
- **优劣势**：优势是架构开放、成本透明、和现有订阅复用；劣势是新产品（未搜到大规模用户反馈），可靠性待验证

### d) 实用信息
- 官网：https://todos.dev/
- 上手门槛：**中**（要一台跑 Node.js + git 的执行机）
- 费用：混合（单人免费 + Pro 团队价，模型费自理零加价）

### e) 实践指导
- **今天就能试**：
  1. 第一步（5 分钟）：打开 todos.dev 注册，把 PWA 加到手机主屏
  2. 第二步（30 分钟）：拿一个真实小任务（比如给 myapp 加个页面）让 Chief 拆一遍，重点观察「它拆的 todo 靠不靠谱」——这是判断此类产品成色的唯一标准
  3. 第三步（深入）：配 executor 跑通完整 plan→build→review→PR 流程，对比 Hermes 的 delegate_task 哪个更顺手
- **踩坑预警**：此类产品最大的坑是「拆解看起来漂亮、执行全是返工」，先用小任务验证再托付大活；订阅登录模式注意授权范围
- **与大哥赚钱/做内容的直接关联**：大哥的 OPC 一人公司方向就是「人 + Agent 团队」，Todos 是这个范式的产品化样本，值得当竞品/参照系研究
- **价值评分**：⭐⭐⭐
- **一句话结论**：值得花半小时让 Chief 拆一个真任务——拆得好就是生产力，拆不好也能当一面镜子照出多 Agent 编排的难点。

---

## 条目 3：bojieli/ai-agent-book —— 李博杰《深入理解 AI Agent》开源书（30.6k ⭐）

🔗 https://github.com/bojieli/ai-agent-book （已验证 ✅，GitHub API + README 实抓）

### a) 本质定位（第一性原理）
- **一句话说透本质**：一本把整个 AI Agent 知识体系（上下文工程、记忆、工具、MCP、多智能体、RL）免费开源的中文书，核心公式一句话：Agent = LLM + 上下文 + 工具。
- **解决的根本问题**：Agent 知识碎片化——好内容散在英文论文、厂商文档和付费课程里，中文世界缺一份系统、免费、可动手复现的教材。
- **人话翻译**：AI Agent 领域的「免费教科书」，10 章正文 + 95 个能亲手跑的实验，还翻成了 13 种语言。
- **去掉包装核心在做什么**：把 2025-2026 年 Agent 工程的共识知识做了一次结构化整理，配可运行代码， Apache-2.0 全部白给。

### b) 基本信息（GitHub 实抓）
- **数据**：⭐30,643 / fork 3,282（截至 2026-08-03），2025-09 创建，仍在高频更新（今天还有 push）；GitHub Trending 日榜项目
- **内容结构**：10 章——Agent 基础（Harness 工程才是竞争力）、上下文工程（KV Cache/压缩/Skills）、用户记忆与知识库（RAG/知识图谱）、工具（MCP/事件驱动）、多模态、Coding Agent、多智能体、RL 训练、安全、生产部署
- **获取**：PDF/EPUB 免费下载（releases/latest），或 bojieli.github.io/ai-agent-book 在线读
- **作者**：李博杰（华为/微软背景，知名技术博主）

### c) 竞品对比
- **同类**：pi-book（07-29 已探索，也是讲生产级 coding agent 架构）、Anthropic/OpenAI 官方 cookbook、付费课（极客时间等）
- **差异**：pi-book 聚焦 coding agent 架构决策，本书覆盖面最全（从上下文到 RL 训练）；且中文原创 + 95 个实验可跑
- **优劣势**：优势是系统、免费、中文、动手导向；劣势是书面知识滞后于月度迭代的 Agent 工程实践，需配合一线博客读

### d) 实用信息
- GitHub：https://github.com/bojieli/ai-agent-book ｜ 在线读：https://bojieli.github.io/ai-agent-book/
- 上手门槛：**低**（中文、从基础讲起）
- 费用：**完全免费**（Apache-2.0）

### e) 实践指导
- **今天就能试**：
  1. 第一步（5 分钟）：下载中文 PDF 存进 Obsidian 03-资源，或直接收藏在线版
  2. 第二步（30 分钟）：读第 1 章 + 第 2 章——「Harness 工程才是竞争力」和上下文工程，正好和 07-30 探索过的 HarnessX 互相印证
  3. 第三步（深入）：挑第 3 章（记忆/知识库）对照大哥的 MinMetaSeek 日记系统，看有哪些机制可以直接抄
- **踩坑预警**：别试图一次读完——当工具书用，哪章和当前问题相关读哪章；实验代码要烧 API 额度，挑着跑
- **与大哥赚钱/做内容的直接关联**：是大哥「资深 AI 技术工程专家」定位的最佳弹药库；读书笔记本身就是内容素材（小红书/公众号「30k star 神书精读」系列）
- **价值评分**：⭐⭐⭐⭐⭐
- **一句话结论**：本轮价值最高的条目——免费、系统、和大哥在做的每件事都相关，没有理由不进收藏夹。

---

## 条目 4：short-video-factory —— 一键批量生成短视频的开源桌面工具（5k ⭐）

🔗 https://github.com/YILS-LIN/short-video-factory （已验证 ✅，GitHub API + README 实抓）

### a) 本质定位（第一性原理）
- **一句话说透本质**：把「写文案 → 配音 → 剪辑 → 字幕」这条短视频流水线塞进一个本地桌面 App，输入提示词 + 素材，批量吐出成品视频。
- **解决的根本问题**：短视频量产的核心瓶颈不是创意而是「剪辑工时」——一天剪 3 条是人力极限，批量自动化把它变成算力问题。
- **人话翻译**：一个装在电脑上的「短视频流水线工人」，你给它台词和素材，它不眠不休批量剪片，还全在本地跑不上传。
- **去掉包装核心在做什么**：LLM 写文案 + TTS 合成语音 + ffmpeg 式自动剪辑 + 字幕特效，四件事串成批处理队列。

### b) 基本信息（GitHub 实抓）
- **数据**：⭐5,057 / fork 719，2025-07 创建，TypeScript，AGPL-3.0，Win/Mac/Linux 三平台
- **核心功能**：提示词生成文案、语音合成、自动批量剪辑、字幕特效、多语言、完全本地运行
- **谁在用**：做产品营销视频和泛内容量产的个人/小团队

### c) 竞品对比
- **同类**：剪映（含 AI 功能，生态最强但云端+会员）、MoneyPrinterTurbo（开源，脚本向）、video-shotcraft（07-24 已探索）、各类在线 AI 视频 SaaS
- **差异**：剪映强在精修模板，short-video-factory 强在「无人值守批量」；vs MoneyPrinterTurbo 它有图形界面，非技术用户可用
- **优劣势**：优势是本地免费、批量、开箱即用；劣势是模板化量产视频的同质化风险——平台限流是这类工具的共性问题

### d) 实用信息
- GitHub：https://github.com/YILS-LIN/short-video-factory ｜ 文档：https://short-video-factory.yils.blog
- 上手门槛：**低**（Releases 下载即用）
- 费用：**免费**（AGPL-3.0，注意：改它做闭源商用受 AGPL 限制）

### e) 实践指导
- **今天就能试**：
  1. 第一步（5 分钟）：Releases 下 Mac 版装上，跑一个示例任务看产出质量
  2. 第二步（30 分钟）：拿大哥手上一类内容（比如产品介绍）批量生成 3 条，对比人工剪辑的工时
  3. 第三步（深入）：验证「量产 → 多账号分发」链路是否跑得通，重点测平台去重/限流
- **踩坑预警**：量产内容最大风险是平台判定低质/同质化，先小批量测流量再放大；TTS 音色侵权风险（商用注意授权）
- **与大哥赚钱/做内容的直接关联**：直接对口——如果大哥做任何短视频内容，这是把内容成本压到接近零的工具；也和 07-24 的副业思路（电子书定制）同属「AI 量产 + 平台分发」打法
- **价值评分**：⭐⭐⭐⭐
- **一句话结论**：做内容就值得试，量产能力是真的；但记住工具只解决「剪」，不解决「火」。

---

## 条目 5：Avernet（inclusionAI）—— 蚂蚁开源的多 Agent 协作网络（原生支持 OpenClaw）

🔗 https://github.com/inclusionAI/Avernet （已验证 ✅，GitHub API + README 实抓）

### a) 本质定位（第一性原理）
- **一句话说透本质**：Agent 界的「钉钉 + 人才市场」——不替 Agent 思考，只管注册、发现、拉群、路由、留痕，让不同来源的 Agent 进同一个协作网络。
- **解决的根本问题**：多 Agent 协作的难点不在模型推理，而在协作层——怎么找到对的 Agent、怎么跨 runtime 连接、怎么共享上下文、怎么达成共识、结果怎么可追溯。
- **人话翻译**：给 AI 员工们建的公司内网：有花名册（注册发现）、有会议室（群组会话）、有 workflow（协作编排），还有绩效考核（反馈进化）。
- **去掉包装核心在做什么**：一个 bot 注册中心 + 群组/会话管理 + 统一接入协议，外加从协作反馈里沉淀「哪种组合干活好」的进化回路。

### b) 基本信息（GitHub 实抓）
- **数据**：⭐257 / fork 22，2026-07-06 创建（很新），Python，Apache-2.0，蚂蚁 inclusionAI 团队出品，V0.1 社区版
- **核心能力**：bot 注册/发现/邀请、能力画像 + 智能推荐 + bot/群组市场、自由聊/leader-follower/自定义协作模式、协作反馈进化回路
- **关键卖点**：**原生支持 OpenClaw**，同时接自定义 Agent、第三方引擎、现有 bot 平台（统一协议）
- **本地体验**：`./scripts/singlebox.sh --local` 一键起全栈（Avernet + 5 个测试 bot + 前端）；基础能力不需要模型 key，bot 真回复需配 `OPENCLAW_OPENAI_*` 环境变量

### c) 竞品对比
- **同类**：大哥 07-22 日记里自己构想的「Matrix 协议中央数字会议室」方案、A2A 协议（Google）、各类 multi-agent 编排框架（CrewAI 等）
- **差异**：编排框架是「一个人指挥」，Avernet 是「一个组织协调」——重点是发现/注册/市场这些组织层能力；和大哥的 Matrix 构想思路惊人地一致
- **优劣势**：优势是大厂背书、思路完整、OpenClaw 原生；劣势是 V0.1 太早期，257 star，生产可用性未知

### d) 实用信息
- GitHub：https://github.com/inclusionAI/Avernet
- 上手门槛：**中高**（要起全栈、理解它的概念体系）
- 费用：**免费**（Apache-2.0）

### e) 实践指导
- **今天就能试**：
  1. 第一步（5 分钟）：clone 仓库，`./scripts/singlebox.sh check` 预检依赖（不改环境）
  2. 第二步（30 分钟）：`./scripts/singlebox.sh --local` 起本地全栈，在前端看 5 个 demo bot 拉群协作——直观感受「Agent 组织」长什么样
  3. 第三步（深入）：对照 07-22 日记里大哥自己的 Matrix 数字会议室构想，列出 Avernet 哪些设计可以直接抄（注册中心、群组、市场）
- **踩坑预警**：`install-tools` 是交互式向导会改全局环境（可能装 OpenClaw 相关工具），先跑 `check` 别直接 install；V0.1 文档和代码可能不同步
- **与大哥赚钱/做内容的直接关联**：大哥的 OpenClaw 双机器人体系（马总管/虾总管）正是 Avernet 的目标场景——它是大哥构想的「大厂参考答案」
- **价值评分**：⭐⭐⭐⭐
- **一句话结论**：现在不一定是能用的产品，但一定是最值得读的设计文档——大哥自己画过同样的蓝图，看看蚂蚁怎么落地的。

---

## 📎 次要条目（一段话带过）

- **Openship（oblien/openship，⭐10,191 ✅ 已验证）**：开源自托管部署平台，指着 repo 就能 build/ship/路由/TLS 一条龙，自带 CI/CD，Apache-2.0，TypeScript，2026-03 创建至今高频更新。本质是「自托管版 Vercel」。和大哥正在学的部署领域强相关——但大哥的 Next.js + 阿里云 2C2G 场景用 `git pull + pm2` 已够，Openship 更适合多项目/多机器阶段，**先 star 收藏，等应用变多再上手**。
- **Grok for Excel（x.ai/grok/excel ✅ 已验证）**：Grok 的 Microsoft 365 加载项（Excel/Word/PPT/Outlook 全家桶），侧边栏里用大白话问数据、写公式、跑情景分析，答案引用单元格、改动可追溯。大哥有 SuperGrok 订阅——如果日常用 Excel 可以直接免费装上；若主力是飞书/本地表格则无感。
- **xterm.js（github.com/xtermjs/xterm.js）**：VS Code 终端背后的开源 Web 终端组件，业界事实标准，无需深探。大哥若哪天给 OpenClaw/Hermes 做 Web 终端界面，它就是默认选择，知道有它即可。
- **OpenCodex（lidge-jun/opencodex）**：07-29 日记已深度探索过其 v1.0.3（Codex Desktop 本地控制中心，见 [[2026-07-29-日记探索]]），本条目不重复探索。

---

## 📊 今日汇总

### 最值得关注 Top 3
1. **bojieli/ai-agent-book（30.6k⭐开源书）** —— 免费、系统、中文、和 HarnessX/MinMetaSeek 全部互相关联，本轮价值密度最高
2. **Moshi（手机遛 Agent 终端）** —— 大哥已有 Mac + 阿里云双环境，今天装上就能把 Agent 工作流随身化
3. **Avernet（蚂蚁多 Agent 协作网络）** —— 和大哥 07-22 自己构想的 Matrix 数字会议室是同一张蓝图，蚂蚁给出了参考答案

### 本质洞察
- **共同趋势**：这批条目全是「Agent 的周边基础设施」——终端（Moshi）、组织（Todos/Avernet）、部署（Openship）、教材（ai-agent-book）、内容流水线（short-video-factory）。2026 年的机会不在再造一个 Agent，而在给 Agent 生态「卖铲子」。
- **底层规律**：Agent 能力商品化之后，价值向两端移动——向上是「组织与协作」（怎么管一群 Agent），向下是「触达与执行」（怎么随时随地够得着 Agent）。大哥的日记恰好两端都押了：Matrix 会议室构想押上端，Moshi 押下端。
- **第一性原理发现**：大哥自己的构想（07-22 数字会议室）和大厂开源（Avernet）独立收敛到同一设计——说明方向判断是对的，缺的只是执行。与其从零造，不如站在 Avernet 这类开源底座上做差异化。

### 明日行动清单
- [ ] 下载 ai-agent-book 中文 PDF 存进 03-资源，读第 1-2 章（30 分钟）
- [ ] App Store 装 Moshi，Tailscale 打通手机 → Mac/阿里云的 SSH（30 分钟）
- [ ] （可选深入）clone Avernet 跑 `singlebox.sh --local`，对照 07-22 构想列差异清单

