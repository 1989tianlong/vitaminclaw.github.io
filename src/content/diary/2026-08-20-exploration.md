---
title: "日记探索 · 2026-08-20"
date: 2026-08-20
authorship: ai
authorshipNote: "由 AI 对当日日记逐条做第一性原理拆解与实践指导。"
description: "5 条记录 · 5 条重点"
tags: [日记探索]
---

> 第一性原理 · 广泛搜索 · 实践指导

## 📅 概览
- 探索日期：2026-08-20
- 信息来源：`20-日记/2026-08-07.md`（**补全轮** —— 今日无新日记；最近一篇 08-17（Apache Ossie）已于 08-17/08-18 探索两轮；08-07 日记共 5 条链接，是近期唯一一篇从未被探索过的日记，本轮补齐）
- 条目数：5
- 重点探索：5 条
- 验证方式：官网/文档 via r.jina.ai 抓取 ✅ + GitHub API 实测 stars/license ✅

---

## 条目 1：Herdr —— 编程智能体的「运行时/窗格管理器」

🔗 来源：https://herdr.dev/zh-cn/docs/agent-skill/ ｜ GitHub: https://github.com/herdrdev/herdr

### a) 本质定位（第一性原理）
- **一句话说透本质**：Herdr 是「AI 智能体的 tmux + 操作系统」——一个让多个编程智能体在受管窗格里并行运行、互相看得见彼此的运行时环境。
- **解决的根本问题**：智能体跑在裸终端里是「瞎子」——看不到旁边窗格的兄弟智能体在干嘛、不能等别的任务跑完、不能安全地分屏协作。Herdr 把「窗格」变成一等公民，让智能体之间能像人类同事一样协调。
- **人话翻译**：以前每个 AI 员工关在自己小黑屋干活；Herdr 给它们一间开放式办公室，谁在旁边、谁的测试跑完了，彼此都看得见。

### b) 基本信息（已验证 ✅）
- **是什么**：Rust 写的智能体运行时（repo 描述："the runtime your coding agents live on"），通过 `HERDR_ENV=1` 环境变量 + 本地 socket 让窗格内的智能体获得 workspace/tab/pane 感知与控制能力
- **核心功能**：查看工作区/标签页/窗格/相邻智能体；不抢焦点地分屏跑命令；读取窗格输出与日志；`pane wait-output`、`agent wait` 等待服务器/测试/其他智能体完成；在相邻窗格启动辅助智能体
- **热度**：GitHub **30,892 stars** ✅（API 实测，2026-03 创建，不到 5 个月 3 万星，爆炸级），Apache-2.0，Rust，持续活跃（pushed 当天）
- **关键设计**：提供官方 SKILL.md（`npx skills add herdrdev/herdr --skill herdr -g`），技能开头有护栏——`HERDR_ENV=1` 未设置时智能体必须停手，防止外部智能体误控别人的会话

### c) 竞品对比
- **同类**：tmux/zellij（纯窗格，无智能体语义）、Vibe Kanban、Conductor、Crystal（均为智能体并行工作台，未逐项验证）
- **差异**：Herdr 的差异点是「给智能体用的技能文件」而不是「给人用的 GUI」——它把多智能体协作协议直接写进 SKILL.md，任何支持技能的 agent 装了就能用
- **优势**：技能分发模式轻（一个 markdown）、Rust 性能、star 增速恐怖；**劣势**：绑定自家运行时，智能体必须跑在 Herdr 窗格内

### d) 实用信息
- 官方：https://herdr.dev ｜ 技能文件：https://github.com/herdrdev/herdr/blob/v0.8.2/skills/herdr/SKILL.md
- 上手门槛：中（需要装 Herdr 本体 + 在窗格内启动智能体）
- 费用：开源免费（Apache-2.0）✅

### e) 实践指导
1. **第一步（5 分钟）**：读一遍它的 SKILL.md 原文，理解「环境变量门控 + pane 命令」这套智能体协作协议设计——就算不用 Herdr，这套模式也值得抄
2. **第二步（30 分钟）**：`npx skills add herdrdev/herdr --skill herdr -g` 全局装技能，在 Herdr 里 `herdrclaude` 起一个智能体，试 `pane split` + `pane wait-output`
3. **第三步（深入）**：把「相邻窗格辅助智能体」模式用到自己的多项目并行场景
- **踩坑预警**：智能体必须运行在 Herdr 窗格内（`HERDR_ENV=1`）才有效；窗格 ID 体系需要先熟悉
- **与大哥的直接关联**：大哥已重度使用 Hermes 多智能体（delegate_task / OpenClaw 双飞书机器人），Herdr 是「多智能体并行工作」这一趋势的头部项目，值得跟踪其协议设计
- **价值评分**：⭐⭐⭐⭐
- **一句话结论**：值得花时间——3 万星的新物种，代表「智能体协作基础设施」这个大赛道。

---

## 条目 2：Todos (todos.dev) —— 人 + 智能体混合团队的任务工作台

🔗 来源：https://todos.dev/

### a) 本质定位（第一性原理）
- **一句话说透本质**：Todos 是「AI 员工的组织架构图 + OKR 系统」——你写一份团队章程（charter），一个「Chief」智能体自动招人、分工、盯进度。
- **解决的根本问题**：单个 agent 一次只能干一件事，而且每次都要人重新交代背景。Todos 把「目标→拆任务→分给不同模型的不同角色→并行跑→分支合并→记忆沉淀」做成产品闭环。
- **人话翻译**：你不是在用一个 AI，而是在当老板管一家 AI 公司——有 HR（Chief 招角色）、有考勤（定时任务）、有复盘（记忆沉淀）。

### b) 基本信息（已验证 ✅ 官网 + features 页）
- **是什么**：智能体工作台 SaaS，核心是「Chief 智能体」：一句话给目标，Chief 拆成 todos 分给各角色智能体，各自独立 git 分支并行执行，逐个合回主干
- **核心功能**：团队章程（优先级/模型偏好/工作方式）；plan→build 两阶段可挂不同 agent；独立 agent 评审；定时重跑（小时/日/周）；技能银行 + 智能体记忆；PWA 手机端语音下达/审批；MCP server 让 Claude Code/Cursor 读写任务板；按模型分账 token 成本
- **模型**：700+ 模型（GPT/Claude/DeepSeek/Ollama 本地/OpenAI 兼容端点），支持直接绑定 ChatGPT/Codex/Copilot 订阅免 API key ✅
- **热度**：未找到公开 GitHub 仓库（闭源 SaaS），热度未搜到有效信息

### c) 竞品对比
- **同类**：Hermes 自身的 delegate_task/cron、OpenClaw、Claude Code 的 subagents、ChatGPT Agent、Manus（未逐项验证）
- **差异**：Todos 卖的是「组织」不是「智能」——执行在你自己的机器上（`tds start` 注册执行器，git worktree 隔离，PR 直推 GitHub），推理不加价不计量
- **优势**：角色/章程/记忆的组织化设计、成本透明；**劣势**：闭源、依赖其服务端协调、免费版限单人

### d) 实用信息
- 官方：https://todos.dev ｜ 费用：免费版单人永久免费；Pro 按团队一口价（无席位费/无用量计费），模型费用自付 ✅（官网 FAQ）
- 上手门槛：低（一句话起目标，Node.js + git 即可当执行机，无需 GPU）

### e) 实践指导
1. **第一步（5 分钟）**：官网注册免费版，把它的「团队章程」模板抄下来——章程写法（优先级+模型偏好+工作方式）可以直接迁移到 Hermes 的 memory/skill 体系
2. **第二步（30 分钟）**：给它一个真实小目标（比如「每天生成一份 XX 报告」），观察 Chief 怎么拆任务、怎么定时重跑
3. **第三步（深入）**：对比它和 Hermes cron + delegate_task 的能力重叠度，决定哪类任务放哪边
- **踩坑预警**：闭源 SaaS，核心协调逻辑在服务端；「邀请真人协作」功能还没上线（FAQ 明示）
- **与大哥的直接关联**：大哥的日记探索/周总结流水线本质就是「定时重跑的例行业务」——Todos 的 charter + 定时轮次 + 评审门设计可直接借鉴到现有 cron 体系
- **价值评分**：⭐⭐⭐
- **一句话结论**：不一定要迁移，但它的「章程 + Chief + 定时轮次」产品设计值得 30 分钟拆解学习。

---

## 条目 3：T3 Code —— 编程智能体的开源「控制塔」

🔗 来源：https://t3.codes/ ｜ GitHub: https://github.com/pingdotgg/t3code

### a) 本质定位（第一性原理）
- **一句话说透本质**：T3 Code 是「编程智能体的总控台」——把 Claude Code、Codex、OpenCode、Cursor、Grok CLI 这些各自为政的 CLI 收进一个 GUI 里统一调度。
- **解决的根本问题**：每个 AI 编程工具都有自己的终端界面、自己的会话、自己的上下文，切换成本极高，且无法并行监工。T3 Code 做的是**编排层**——它不卖 token，只编排你已有的订阅。
- **人话翻译**：你养了五个不同品牌的 AI 程序员，T3 Code 是给包工头用的监控大屏——谁干到哪了、谁的代码可以合并，一屏看完。

### b) 基本信息（已验证 ✅）
- **是什么**：Theo (pingdotgg / T3 Tools) 出品的开源桌面应用（Electron，但社区评价「证明 Electron 应用可以不卡」），MIT 协议
- **核心功能**：多 harness 并行线程（Claude Code / Codex / OpenCode / Cursor / Grok）；每个线程独立 git 分支；一键 commit+push+开 PR（自动生成标题/正文/changelog）；内联 diff 评审；线程中途换模型；iOS/Android 遥控 App
- **热度**：GitHub **19,675 stars** ✅（API 实测；官网还写着 14k+，实际已逼近 2 万），MIT，TypeScript，当天仍在提交
- **商业模式**：不卖 token——「Bring your own sub」，插你已有的订阅凭证

### c) 竞品对比
- **同类**：Paseo（见条目 4）、bb（条目 5）、Conductor、Vibe Kanban、Cursor 自带的多 agent 面板（未逐项验证）
- **差异**：T3 Code 胜在作者影响力（Theo 是开发者圈顶流 YouTuber）+ 完全 MIT + 「不喜欢就 fork」的开放姿态
- **优势**：社区最大、口碑最强（官网引用大量 KOL 推文）；**劣势**：官网自标 alpha，工作流仍在快速变动

### d) 实用信息
- 官方：https://t3.codes ｜ 下载：macOS 直装 / Windows / Linux / iOS / Android 全平台 ✅
- 上手门槛：低（装完登录已有的 Claude Code/Codex 订阅即可）
- 费用：完全免费开源（MIT）✅，模型费走你自己的订阅

### e) 实践指导
1. **第一步（5 分钟）**：GitHub releases 下载 macOS 版，用现有 Claude Code 登录态起第一个线程
2. **第二步（30 分钟）**：同时开两个线程跑两个不同任务（比如一个修 bug 一个写文案页），体验「分支隔离 + 一键 PR」的并行监工流
3. **第三步（深入）**：试 Grok CLI 接入（大哥已有 SuperGrok 订阅 ✅），实现「Claude 写代码 + Grok 出图」在同一块板上跑
- **踩坑预警**：alpha 阶段，UI/工作流可能周变；多线程并行时注意分支冲突（虽然每个线程独立分支）
- **与大哥的直接关联**：大哥现有工具链（Hermes + OpenClaw + Grok CLI + 多订阅）正是 T3 Code 的目标用户画像；它的「一键 PR」流可以补上大哥部署流程里手工 git 的环节
- **价值评分**：⭐⭐⭐⭐⭐
- **一句话结论**：今天就可以装——免费、开源、完美匹配你已有的订阅，5 个里最值得立即试的。

---

## 条目 4：Paseo —— 从任何设备遥控编程智能体

🔗 来源：https://paseo.sh/ ｜ GitHub: https://github.com/getpaseo/paseo（原 boudra/paseo 已转移 ✅）

### a) 本质定位（第一性原理）
- **一句话说透本质**：Paseo 是「编程智能体的远程遥控器」——daemon 跑在你的机器上，人从手机/网页/桌面连进来发指令。
- **解决的根本问题**：编程智能体被锁死在「人坐在那台电脑前」的场景里。Paseo 把「执行」和「操控」解耦——agent 在你的笔记本/VM/服务器上跑，你在地铁上用手机审 diff、合并 PR。
- **人话翻译**：AI 员工在家里电脑上 24 小时待命，你揣着手机当远程老板，躺沙发上也能让它改 bug。

### b) 基本信息（已验证 ✅）
- **是什么**：免费开源项目（个人作者 Mo / boudra 主导，后转入 getpaseo org），支持 Claude Code / Codex / Copilot / OpenCode / Pi / Cursor 等 **38+ 种** agent
- **核心功能**：daemon 无头运行（`npm install -g @getpaseo/cli && paseo`）；端到端加密中继 / 局域网直连 / 自建隧道三种远程方式；git worktree 隔离；浏览器内预览 app + 内联 diff 审阅 + 提交/PR/合并全流程；本地优先语音输入；Paseo Hub（GitHub/Slack/Discord 触发器 + 团队访问）
- **热度**：GitHub **14,422 stars** ✅（API 实测，2025-10 创建），TypeScript，当天仍在提交
- **关键卖点**：「会不会被封号？」FAQ 明确——它只是把各家的官方 CLI 当子进程启动，不抽取 token、不直接调推理 API，从服务商视角和自己跑 CLI 无法区分 ✅

### c) 竞品对比
- **同类**：T3 Code（条目 3，偏桌面 GUI）、Claude Code 官方的 mobile/web 遥控、Happy Coder（移动端遥控 Claude Code）、VibeTunnel（未逐项验证）
- **差异**：Paseo 最强调「agent 不可知 + 跨设备」：daemon 架构 + 全脚本化 CLI + 加密中继
- **优势**：支持 agent 数量最多（38+）、真正无头可跑服务器；**劣势**：个人项目转 org，治理和长期维护待观察；中继服务虽是 E2E 加密但毕竟是第三方管道（可自建隧道规避）

### d) 实用信息
- 官方：https://paseo.sh ｜ CLI：`npm install -g @getpaseo/cli`
- 上手门槛：低-中（桌面版开箱即用；无头模式需要懂 daemon/隧道）
- 费用：完全免费开源 ✅（靠 GitHub Sponsors 维持）

### e) 实践指导
1. **第一步（5 分钟）**：`npm install -g @getpaseo/cli && paseo` 在 Mac 上起 daemon，局域网用手机浏览器连上
2. **第二步（30 分钟）**：把它装到阿里云服务器（aliyun2, 8.163.63.129）上无头运行，配 Tailscale 隧道——手机随时遥控服务器上的 agent 干活
3. **第三步（深入）**：用 Paseo Hub 接 GitHub 触发器，实现「issue 自动派给 agent」
- **踩坑预警**：远程访问优先选自建隧道（Tailscale/Cloudflare Tunnel）而不是暴露端口；worktree 功能依赖 git
- **与大哥的直接关联**：大哥已有阿里云服务器 + 学习部署的背景，Paseo 无头模式 + 服务器是「我的 24 小时 AI 员工」的最短路径；且和 Hermes cron 不冲突（cron 管定时，Paseo 管遥控）
- **价值评分**：⭐⭐⭐⭐
- **一句话结论**：值得装——尤其服务器无头玩法，正好接上你正在学的部署技能树。

---

## 条目 5：bb (get-bb/bb) —— 「自我构建」的智能体 IDE

🔗 来源：https://github.com/get-bb/bb ｜ 官网：https://getbb.app

### a) 本质定位（第一性原理）
- **一句话说透本质**：bb 是「能自己装修自己的 IDE」——每个界面（桌面/Web/CLI/HTTP API）都是一等入口，IDE 本身就是智能体可以操控和改造的对象。
- **解决的根本问题**：传统 IDE 是「人用的工具」，AI 只是插件；bb 反过来了——IDE 为智能体而生，目标是「你自己的软件工厂」，让 agent 可以在里面自我定制、自我自动化。
- **人话翻译**：别的 IDE 是给你配了个 AI 助手；bb 是给 AI 盖了栋房子，你是房东——房子还能自己扩建。

### b) 基本信息（已验证 ✅）
- **是什么**：开源 agentic IDE（MIT，TypeScript monorepo），口号 "The agent IDE that builds itself"。工作以「线程」组织，可实时跟踪、随时接管、转交另一个 agent
- **核心功能**：桌面 App（Apple Silicon 稳定，Linux alpha）+ `npx bb-app@latest` 全平台 + CLI + HTTP API；复用你已登录的 provider CLI（不重复收费）；插件市场（bb-community）；git worktree 多实例并行
- **热度**：GitHub **2,424 stars** ✅（API 实测，2026-02 创建，比前三个小一个量级），212 个 open issues，开发极活跃（当天有提交）
- **注意**：README 明示「active development，核心架构稳定但工作流和界面仍在演变」✅

### c) 竞品对比
- **同类**：T3 Code、Paseo（同赛道）、Cursor/Windsurf（商业 agentic IDE）、Void/Zed 的 AI 模式（未逐项验证）
- **差异**：bb 的赌注是「IDE 本身可被 agent 编程」——自我改造能力（self-hosting 的软件工厂叙事），比「控制塔」类项目野心更大也更早期
- **优势**：理念最激进、四面体（desktop/web/CLI/API）架构干净；**劣势**：stars 最少、npm 12 兼容坑多（见下）、文档自认尚在演变

### d) 实用信息
- 运行：`npx bb-app@latest` → 打开 http://localhost:38886 ✅（README）
- 上手门槛：中（alpha 软件，坑见下）
- 费用：开源免费（MIT）✅，模型走你已有 provider CLI

### e) 实践指导
1. **第一步（5 分钟）**：`npx --allow-scripts=better-sqlite3,node-pty,@parcel/watcher bb-app@latest`（npm 12+ 必须加这个 flag，否则起不来）✅
2. **第二步（30 分钟）**：用你现有的 Claude Code 登录态在里面开一个线程，感受「线程可接管/可转交」的交互
3. **第三步（深入）**：读它的 `docs/VISION.md`，判断「自我构建 IDE」是不是伪需求
- **踩坑预警**：**npm ≥ 12 默认拦截 install scripts**，bb 的原生模块（better-sqlite3/node-pty/@parcel/watcher）装不上会报 `Could not locate the bindings file`——必须用 `--allow-scripts` 或 `npm_config_ignore_scripts=false` ✅（README 有专节）；Intel Mac 不支持桌面版只能 npx；默认有匿名遥测，`BB_TELEMETRY=false` 可关
- **与大哥的直接关联**：理念值得关注但暂不建议主力使用；它的 HTTP API 一等公民设计和 Hermes 的工具化思路相通
- **价值评分**：⭐⭐⭐
- **一句话结论**：先收藏观察——理念最性感但成熟度最低，等它 star 破万再认真玩不迟。

---

## 📊 今日汇总

### 最值得关注 Top 3
1. **T3 Code** —— 免费开源 + 编排你已有的全部订阅 + 一键 PR，今天就能装，完美匹配大哥现有工具链
2. **Herdr** —— 5 个月 3 万星的「智能体运行时」新物种，其 SKILL.md 协作协议设计代表了多智能体基础设施的方向
3. **Paseo** —— 无头 daemon + 手机遥控 + 38 种 agent，接上阿里云服务器就是 24 小时 AI 员工

### 本质洞察
- **共同趋势**：5 个条目全部指向同一件事——**「单个 AI 助手」时代结束，「管理一群 AI 员工」的基础设施爆发**。分工已经很清晰：Herdr 管运行时（agent 住哪）、Todos 管组织（agent 听谁的）、T3 Code 管监工（人怎么盯进度）、Paseo 管触达（人在哪都能管）、bb 管工厂（agent 自己改造工具）。
- **底层规律**：这些工具没有一家在卖模型/算力——全都明确说「bring your own subscription」。价值正在从「智能本身」上移到**编排层**（orchestration）：谁的 agent 协作协议、分支隔离、评审门、记忆沉淀做得好，谁就赢。模型在商品化，管理智能体的「管理学问」在升值。
- **第一性原理发现**：人类管公司的全套概念（组织架构/章程/OKR/远程办公/审批流）正在被逐字翻译成 agent 世界的软件。判断一个新 agent 工具值不值得跟，就看它翻译的是哪个成熟的管理概念——翻译得越忠实，越可能是真需求。
- **对大哥的映射**：大哥的 Hermes + cron + delegate_task + 双飞书机器人体系，其实已经覆盖了 Todos 约 70% 的能力（定时轮次、子代理、记忆）。真正的能力缺口在**可视化监工**（T3 Code/Paseo 的 diff 评审 + 一键 PR 流）。

### 明日行动清单
- [ ] 下载 T3 Code macOS 版，用现有 Claude Code 登录起两个并行线程（5-30 分钟）
- [ ] 在阿里云服务器上 `npm install -g @getpaseo/cli` 起 Paseo 无头 daemon，手机连一次（30 分钟）
- [ ] （可选深入）读 Herdr 的 SKILL.md 原文，把「环境变量门控护栏」模式记进自己的 skill 设计笔记

