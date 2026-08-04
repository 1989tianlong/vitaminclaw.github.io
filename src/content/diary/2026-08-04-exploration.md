---
title: "日记探索 · 2026-08-04"
date: 2026-08-04
authorship: ai
authorshipNote: "由 AI 对当日日记逐条做第一性原理拆解与实践指导。"
description: "4 条记录 · 4 条重点"
tags: [日记探索]
---

> 第一性原理 · 广泛搜索 · 实践指导

## 📅 概览
- 探索日期：2026-08-04
- 信息来源：2026-08-04.md（4 个 GitHub 链接）
- 条目数：4
- 重点探索：4 条（全部）
- 数据来源：GitHub API 实时元数据 + 各仓库 README 原文（2026-08-04 抓取）

---

## 1️⃣ Muxy —— 为 AI Agent 时代而生的 Mac 终端

🔗 https://github.com/muxy-app/muxy · ⭐ 2,129 · Fork 180 · Swift · MIT · 创建于 2026-03-31，仍在活跃更新（昨天还有 push）

### a) 本质定位（第一性原理）
- **一句话说透本质**：一个把「让 AI 操作终端」当成一等公民来设计的终端模拟器。
- **解决的根本问题**：传统终端（iTerm2、Terminal.app）是为人手敲键盘设计的，AI 编码 Agent 没有结构化方式去开分屏、读窗格内容、发按键。Muxy 把这些能力做成 API，让 Agent 能像人一样"用"终端。
- **人话翻译**：以前的终端是给你打字用的，这个终端是给 AI 当"办公桌"用的——AI 可以自己开窗格、看屏幕、敲命令。
- **更便宜/更简单的替代**：Ghostty（它底层用的就是 libghostty）、iTerm2 + tmux 组合也能满足人用的需求；但只有 Muxy 原生提供 Agent CLI 技能。

### b) 基本信息
- **是什么**：SwiftUI + libghostty 构建的轻量、低内存 Mac 终端。
- **核心功能**：项目分组、垂直标签、分屏、Git worktree 管理、命令面板、内置 Markdown/Mermaid 预览、490+ 主题、灵动岛式快捷终端、iOS/Android 伴侣 App。
- **Agent 能力（亮点）**：提供两个官方 skill——`muxy-cli`（Agent 可通过 shell 开项目、分屏、发按键、读窗格）和 `muxy-extension`（写扩展）。`npx skills add` 一键装进 Claude/Codex/Gemini 等 harness。
- **谁在用**：macOS 上的 AI 编码重度用户（topics 里挂着 amp/claude/codex/gemini/opencode）。
- **行业热度**：2.1k star，4 个月的项目，属于新兴的"agent-native 终端"赛道早期选手。

### c) 竞品对比
- **同类**：Ghostty（底层库来源，性能强但无 agent API）、iTerm2（老牌、重）、Warp（AI 内置但闭源、订阅制）、Wave Terminal（开源、有 AI 面板）。
- **差异**：Muxy 的差异化不在"终端里塞 AI 聊天"，而在"给外部 Agent 一套操作终端的 API + skill 分发机制"。Warp 是把 AI 关在终端里，Muxy 是把终端开放给 AI。
- **优劣势**：优——MIT、轻量、原生 Swift 性能、skill 生态思路新；劣——仅 macOS（iOS/Android 是伴侣 app 不是终端）、项目年轻、52 个 open issue，稳定性待验证。

### d) 实用信息
- 官方站点：https://muxy.app · GitHub：https://github.com/muxy-app/muxy
- 上手门槛：**低**（`brew install --cask muxy` 一行装好）
- 费用：**免费**（MIT 开源）

### e) 实践指导
1. **第一步（5 分钟）**：`brew tap muxy-app/tap && brew install --cask muxy`，打开感受垂直标签 + 分屏。
2. **第二步（30 分钟）**：跑 `muxy install-skills`，把 muxy-cli skill 装进你常用的 harness（Claude Code/Grok），然后让 Agent 自己开一个分屏跑测试，体验"Agent 自己操作终端"。
3. **第三步（深入）**：把你跑多 Agent 的工作流（比如同时盯多个 Hermes session）搬进 Muxy 的项目分组 + worktree 管理。
- **踩坑预警**：① macOS 14+ 才能用；② 新项目，别一上来当主力终端，先和现有终端并行用一周；③ Agent 能读窗格内容意味着敏感信息（密钥）可能进 Agent 上下文，注意脱敏。
- **与大哥赚钱/做内容的直接关联**：中等。它是基础设施不是内容工具；但"agent-native 工具"本身是很好的 X/公众号选题。
- **价值评分**：⭐⭐
- **一句话结论**：值得装来玩玩（5 分钟成本），但不必迁移主力终端；关注它代表的"工具给 Agent 留 API"趋势比工具本身更值钱。

---

## 2️⃣ stickman-video-director —— 火柴人短视频"导演"Skill

🔗 https://github.com/kaomei/stickman-video-director · ⭐ 230 · Fork 33 · MIT · 创建于 2026-08-03（昨天刚建！）

### a) 本质定位（第一性原理）
- **一句话说透本质**：把"导演的分镜思考"固化成一个 Codex Skill，让你在花视频生成额度之前先把片子在纸面上导完。
- **解决的根本问题**：AI 视频生成按次收费，直接拿一段文案丢给视频模型会得到"一个火柴人站一个背景、十秒没变化"的平片。这个 skill 强制走"脚本 → 六分镜提案 → 人工批准 → 才生成 prompt"的流程，把烧钱的试错前移到免费的文本阶段。
- **人话翻译**：就像拍戏先画分镜本再开机——它逼 AI 先把 60 秒视频拆成 6 个镜头、写好每个镜头的画面/运镜/音效，你点头了才去生成，省得浪费生成次数。
- **更便宜/更简单的替代**：自己写一段好 prompt 也能做，但"批准关卡 + 每镜头独立锁定角色/配色/声线"的工程化很难手写稳定。

### b) 基本信息
- **是什么**：一个 Codex Skill（`$directing-stickman-videos`），把任意文案变成：英文旁白（130-150 词）+ 六场景导演提案 + 6 条 Gemini Omni Flash 生产级 prompt，最终拼成约 1 分钟火柴人视频。
- **核心功能**：双主题（白底黑人/黑底白人）+ 最多 3 个强调色；9:16 / 16:9 / 1:1 三种画幅分别重新构图；每个 prompt 内置角色/线条/配色/声线/负面约束锁定；明确不编造事实。
- **谁在用**：做 YouTube Shorts / TikTok / Reels 知识解说、励志、教育类短视频的创作者。
- **行业热度**：昨天才创建就 230 star，火柴人解说视频（Kurzgesagt 平替风格）是短视频赛道的常青格式。

### c) 竞品对比
- **同类**：直接用 Gemini/Veo/Sora 写 prompt、OpenMontage（本期条目 4，重型管线）、各类"一句话生成视频"SaaS（InVideo、Pictory）。
- **差异**：它不做渲染不做剪辑，只做"生成之前的导演工作"——轻到极致，只是一个 skill 文件夹。OpenMontage 是整个制片厂，这个是制片厂里的一个导演。
- **优劣势**：优——零依赖、无 API/MCP、MIT、批准关卡防烧钱；劣——强绑定 Gemini Omni Flash 单一模型、音频一致性仍需后期外配 VO、火柴人风格单一容易审美疲劳。

### d) 实用信息
- GitHub：https://github.com/kaomei/stickman-video-director（有中文 README）
- 上手门槛：**低**（clone + cp 一个文件夹到 Codex skills 目录）
- 费用：skill 本身免费（MIT）；生成视频花 Gemini Omni Flash 额度

### e) 实践指导
1. **第一步（5 分钟）**：`git clone` 仓库，`cp -R skills/directing-stickman-videos ~/.codex/skills/`，重启 Codex。
2. **第二步（30 分钟）**：拿你日记/探索里现成的一个主题（比如"黑洞为什么光都逃不出去"），调 `$directing-stickman-videos`，走完"贴文案→选 9:16 竖屏→批准六分镜→拿 6 条 prompt"全流程。
3. **第三步（深入）**：在 Gemini 里逐条生成 6 段 10 秒视频，用剪映/CapCut 拼接 + 统一外配一条 VO 和 BGM（README 自己建议这样做来保证声音一致），发一条 Shorts 试水。
- **踩坑预警**：① 6 段独立生成的视频声线/BGM 会不一致——务必后期统一配音；② 改画幅/主题会触发整个分镜重构，不是简单替换，批准前想清楚；③ 它是 Codex skill，不是 Claude/Hermes skill——要在 Codex 里用，或手动翻译成其他 harness 的 skill 格式。
- **与大哥赚钱/做内容的直接关联**：**高**。如果你做知识类短视频账号，这是目前"火柴人解说"格式最工程化的开源方案之一，成本几乎为零（除生成额度）。
- **价值评分**：⭐⭐⭐
- **一句话结论**：做短视频就值得今天装——它解决的是真问题（生成额度烧钱），而且批准关卡的设计思路可以抄到你自己的视频工作流里。

---

## 3️⃣ firstmate —— 一个 Agent 管一队 Agent 的"大副"系统

🔗 https://github.com/kunchenguid/firstmate · ⭐ 2,789 · Fork 889 · Shell · MIT · 创建于 2026-06-12，今天还在 push

### a) 本质定位（第一性原理）
- **一句话说透本质**：一份"Agent 发行版"——不是软件，是一个装满 AGENTS.md 指令、skill、策略和状态约定的目录，把任何通用编码 Agent 变成"管理一船 Agent 的大副"。
- **解决的根本问题**：单 Agent 好用，但同时跑 3 个并行任务你就变成"标签页保姆"：盯 session、复制上下文、忘了哪个终端在跑失败的测试。firstmate 让你只和一个"大副"对话，它负责派工、监督、收 PR。
- **人话翻译**：你当船长，雇一个大副，大副再去管一群水手——你只说"修好登录测试再加个暗黑模式"，过会儿 PR 就送到你面前。
- **更便宜/更简单的替代**：tmux + 手动开多个 Claude Code 窗口（免费但费人）；各 harness 自带的 subagent（如 Hermes 的 delegate_task）能并行但没有持久舰队状态和 PR 交付闭环。

### b) 基本信息
- **是什么**：一个 git clone 下来即用的"agent distro"。在目录里启动 Claude Code / Grok / Pi / Codex / OpenCode，AGENTS.md 接管，你就成了船长。
- **核心功能**：单一对联络人（大副）；每个水手跑在独立 tmux 窗口（可观看可介入）；每个任务独立 git worktree 互不冲突；ship 任务交 PR / scout 任务交调查报告；事件驱动零 token 监督（bash watcher 睡等，有事才叫醒大副）；状态全落盘、杀 session 后能自愈续跑；可选远程 secondmate（SSH 到别的机器）；可选 X 模式（回 @mention）。
- **谁在用**：重度多 Agent 并行的开发者；2.8k star、889 fork（fork 率高说明动手玩的人多）。
- **行业热度**：多 Agent 编排（multi-agent orchestration）是 2026 年最热的方向之一，这个 repo 把"编排"做成了纯文件约定而非平台。

### c) 竞品对比
- **同类**：Claude Squad、Conductor、Vibe Kanban、OpenHands、各 harness 内置 subagent。
- **差异**：绝大多数竞品是"App/平台"，firstmate 是"目录+约定"——没有安装、没有守护进程、没有 token 消耗的监督循环（bash watcher 事件驱动）。它管理的甚至可以是不同厂商的 harness 混编舰队。
- **优劣势**：优——MIT、零平台锁定、状态全在磁盘可审计、跨 harness；劣——590 个 open issue（复杂度高）、概念多（crew/secondmate/treehouse/dispatch profile）学习曲线陡、本质是 bash+约定，健壮性靠纪律不靠类型。

### d) 实用信息
- GitHub：https://github.com/kunchenguid/firstmate
- 上手门槛：**中高**（需要 gh auth、tmux、理解 worktree/舰队概念；但启动本身只要 clone + 进目录开 harness）
- 费用：**免费**（MIT）；烧的是各 harness 自己的订阅/额度

### e) 实践指导
1. **第一步（5 分钟）**：`gh auth login` 确认已登录，然后 `git clone https://github.com/kunchenguid/firstmate && cd firstmate`。
2. **第二步（30 分钟）**：在目录里启动你已有的 harness（`claude` 或 `grok --trust`），对它说一句 `/bearings` 看状态，然后派一个小 scout 任务（比如"调查我某仓库的 flakey 测试"）观察它怎么开 tmux 窗口干活。
3. **第三步（深入）**：把一个真实仓库挂进 `projects/`，配 `direct-PR` 模式，跑一次完整 ship 流程拿 PR；有余力再研究 secondmate 远程舰队。
- **踩坑预警**：① 它读 AGENTS.md 接管整个会话——别在你日常项目目录里乱试，先沙盒仓库；② `+yolo` 自治标志谨慎开，PR 合入权限要想清楚；③ 多 Agent 并行 = 多倍 token 消耗，watch 钱包；④ 590 个 open issue，遇到怪事先搜 issue。
- **与大哥赚钱/做内容的直接关联**：中等偏高。你已经在用 Hermes 的 delegate_task 做子代理，firstmate 是"把这套做到持久舰队级别"的参照系；做"一人公司 + AI 舰队"内容也是现成素材。
- **价值评分**：⭐⭐⭐
- **一句话结论**：如果你经常同时跑 2 个以上编码 Agent，值得花一小时试；它的"零 token 事件驱动监督"和"状态全落盘可自愈"两个设计直接可以偷师。

---

## 4️⃣ OpenMontage —— 开源 Agentic 视频制片厂

🔗 https://github.com/calesthio/OpenMontage · ⭐ 45,043 · Fork 5,540 · Python · AGPL-3.0 · 官网 openmontage.video · GitHub Trending 日榜第一

### a) 本质定位（第一性原理）
- **一句话说透本质**：把"视频制片厂"整个工作流（调研→脚本→素材→配音→剪辑→渲染）写成管线定义 + skill 文件，让你的 AI 编码助手照着执行。
- **解决的根本问题**：AI 视频工具碎片化——脚本用 ChatGPT、图用 FLUX、视频用 Veo/Kling、配音用 ElevenLabs、剪辑用 PR，每一步都要人肉搬运和决策。OpenMontage 把这 100+ 工具的选型和串联交给 Agent，并用人话下达创作意图。
- **人话翻译**：你对 AI 说"做一个 60 秒讲神经网络怎么学习的动画"，它就自己查资料、写稿、配图、配音、加字幕、渲染出成片——像雇了一个不要工资的制片团队。
- **更便宜/更简单的替代**：单点 SaaS（InVideo/Pictory/可灵网页版）更简单但不可控、按订阅收费；它的零 API key 路径（Piper TTS + Archive.org 素材 + Remotion 渲染）几乎免费，这是 SaaS 给不了的。

### b) 基本信息
- **是什么**：12 条制片管线 + 100+ 工具 + 700+ Agent skill/知识文件的开源系统。支持 Claude Code/Cursor/Copilot/Windsurf/Codex。
- **核心功能**：可粘贴 YouTube/TikTok 参考视频反向出制片方案（含成本预估）；Backlot 实时故事板（分镜审批关卡，花钱前先看 contact sheet）；真实素材纪录片管线（CLIP 检索 Archive.org/NASA 真实影像剪辑，不是"动图冒充视频"）；Remotion（React）/HyperFrames（HTML+GSAP）双渲染运行时；多点自审（ffprobe 校验、抽帧、音量分析、字幕检查）；每个供应商选择 7 维打分留审计日志。
- **成本案例（README 实测）**：60 秒 Pixar 风短片 $1.33；70 秒历史题材 $0.02；产品广告 $0.69。
- **谁在用**：4.5 万 star，AI 视频创作者 + 想自动化视频流水线的开发者。
- **行业热度**：本期最热，没有之一——Trending 日榜第一，视频生成 agent 化的标志性项目。

### c) 竞品对比
- **同类**：Revid.ai / InVideo / Pictory（SaaS）、MoneyPrinterTurbo（开源自动短视频）、short-video-maker（开源）、条目 2 的 stickman-director（单点 skill）。
- **差异**：SaaS 是黑盒订阅制，OpenMontage 是全白盒、可审计、逐场景审批；比 MoneyPrinterTurbo 这类"批量低质内容农场工具"高一个档次——有导演审批关卡和成本预估，目标是"可控质量"而非"批量灌水"。
- **优劣势**：优——极热、生态最全、免费路径真实可用、审批关卡防烧钱；劣——**AGPL-3.0**（商用/SaaS 化有传染性约束）、206 个 open issue、依赖一堆可选 API key 才能发挥全部实力、Python+Node 双栈环境略重。

### d) 实用信息
- 官网：https://www.openmontage.video · GitHub：https://github.com/calesthio/OpenMontage
- 上手门槛：**中**（`git clone && make setup`；需要 Python 3.10+、FFmpeg、Node 18+）
- 费用：开源免费；API key 全可选，零 key 也能出片（Piper TTS + 免费素材 + Remotion）

### e) 实践指导
1. **第一步（5 分钟）**：`git clone https://github.com/calesthio/OpenMontage.git && cd OpenMontage && make setup`（先不配任何 API key）。
2. **第二步（30 分钟）**：用你的 AI 助手打开项目，说"做一个 75 秒城市雨景纪录片混剪，只用真实素材，无旁白，配音乐"——走零成本真实素材管线，看 Backlot 故事板亮起来。
3. **第三步（深入）**：加 FAL_KEY 或 OPENAI_API_KEY，试"参考视频复刻"流程：贴一条你喜欢的 Short，让它出 2-3 个差异化方案 + 成本预估，再决定生不生成。
- **踩坑预警**：① **AGPL**：想做商业产品/SaaS 基于它要想清楚传染性，自用内容创作没问题；② Windows 下 `npm install` 报错要用 `npx --yes npm install`；③ 生成类 API（Veo/Kling）按次计费，务必用它的分镜审批关卡，别跳过 contact sheet 直接渲染；④ 45k star 的项目迭代极快，pull 之前看一眼 CHANGELOG。
- **与大哥赚钱/做内容的直接关联**：**极高**。如果你做视频内容（或想做），这是目前把"AI 制片"做到生产级的最完整开源方案，零 key 路径意味着今天就能零成本出第一条片。
- **价值评分**：⭐⭐⭐（拉满）
- **一句话结论**：今天 4 个链接里最值得立刻动手的——免费、能出真片、热度验证过，唯一要记住的是 AGPL 别拿去做闭源商用。

---

## 📊 今日汇总

### 最值得关注 Top 3
1. **OpenMontage** — 45k star 的 agentic 视频制片厂，零 API key 就能出真片，做内容的人今天就能用
2. **stickman-video-director** — 火柴人短视频的工程化导演 skill，批准关卡防烧钱，30 分钟走完一条 Shorts 全流程
3. **firstmate** — "一个 Agent 管一队 Agent"的发行版，零 token 监督 + 状态落盘自愈的设计值得偷师

### 本质洞察
- **共同趋势**：4 个项目里有 3 个（muxy、stickman、firstmate、OpenMontage 全是）都在做同一件事——**把"人怎么干活的知识"写成 Agent 可读的指令层（AGENTS.md / skills）**。Muxy 给 Agent 操作终端的 API，firstmate 给 Agent 管 Agent 的章程，两个视频项目给 Agent 当导演的手册。
- **底层规律**：2026 年的开源热点已经从"更大的模型"转向"**让现有模型干完整工作的脚手架**"。模型的能力够了，缺的是流程、审批关卡、状态管理。谁把 workflow 固化成 skill/AGENTS.md，谁就能吃到这波红利。
- **第一性原理发现**：**审批关卡（approval gate）是这一代 agentic 工具的共同灵魂**——stickman 在生成前让你批分镜，OpenMontage 在渲染前让你批 contact sheet，firstmate 在合并前让你批 PR。本质都是：AI 负责把试错变便宜，人负责在花真钱（生成额度/代码合并）前点头。这个模式可以直接抄进大哥自己的任何 AI 工作流。
- **对大哥的特殊意义**：四个项目里两个是视频内容生产工具，且都指向同一条可执行路径——**零成本或近零成本量产有质量的短视频**（火柴人解说 / 纪录片混剪），这和"一人公司做内容"的方向直接咬合。

### 明日行动清单
- [ ] `git clone calesthio/OpenMontage && make setup`（5 分钟，不配 key）
- [ ] 用 OpenMontage 零成本路径出一条真实素材混剪短片，体验 Backlot 审批流（30 分钟）
- [ ] （可选深入）把 stickman-video-director 装进 Codex，拿一个知识选题走完六分镜流程，对比两条视频路线的手感和成本

