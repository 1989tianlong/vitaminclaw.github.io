---
title: "日记探索 · 2026-08-12"
date: 2026-08-12
authorship: ai
authorshipNote: "由 AI 对当日日记逐条做第一性原理拆解与实践指导。"
description: "1 条记录 · 1 条重点"
tags: [日记探索]
---

---
标题: 2026-08-12 日记深度探索
日期: 2026-08-12
tags:
  - 日记探索
  - AI短剧
  - Agent-Skills
---

# 2026-08-12 日记深度探索 v3
> 第一性原理 · 广泛搜索 · 实践指导

## 📅 概览
- 探索日期：2026-08-12
- 信息来源：20-日记/2026-08-12.md
- 条目数：1
- 重点探索：1 条（shuohao-skills，共 5 次抓取/搜索：README、GitHub API、novel-outline SKILL.md、GitHub 竞品搜索、Bing 行业搜索）

---

## 条目 1：shuohao-skills —— AI 短剧制作的 Agent Skill 集合

🔗 原始片段：https://github.com/eternityspring/shuohao-skills

### a) 本质定位（第一性原理）

- **一句话说透本质**：把「小说 → 短剧拍摄素材」这条人工改编流水线，拆成三个结构化 prompt 工作流 + 确定性校验脚本，让 AI 编码 agent 替代编剧助理和美术统筹的重复劳动。
- **解决的根本问题**：AI 短剧量产的瓶颈不在生成画面，而在**上游结构化**——角色不崩、大纲有爽点节奏、场景道具前后一致。LLM 直接「帮我写个短剧大纲」会产出无约束的散文；这个项目用 13 道/11 道脚本质量门把行业经验（爽点间隔 ≤3 集、每集钩子必填、主场景上限随集数动态计算）变成硬检查，不靠模型自觉。
- **人话翻译**：就像给 AI 发了一本「短剧改编标准作业手册 + 质检清单」——AI 照着手册干活，干完脚本自动质检，不合格的打回重做，不用人盯着。
- **去掉花哨包装后核心在做什么**：三个 SKILL.md 提示词工程文件 + 几个零依赖 Node 校验脚本（.mjs）。没有模型、没有 API、没有 npm 依赖——**本质是高质量的 prompt + lint 规则**，这恰恰是它能在 Claude Code 和 codex 里即插即用的原因。
- **更便宜/更简单的替代方案**：直接让 Claude/GPT 写大纲（免费但无质量约束）；或人工编剧（质量高但慢且贵）。这个项目卡在中间甜点位：零成本接入 + 部分质量保障。

### b) 基本信息 ✅ 已验证（README + GitHub API）

- **是什么**：AI 短剧制作的 skill 集合，给 Claude Code / codex 用。三个 skill：
  - `novel-characters`：小说 → 角色设定集（人物画像、形象提示词、音色提示词、角色设定图）
  - `novel-outline`：小说 → 短剧改编大纲五件套（改编说明、人物表、爽点表、分集梗概、资产清单），13 道质量门脚本检查，支持「体检模式」诊断现成大纲
  - `novel-art`：美术设定集（场景 + 叙事道具），一致性锚点、光照/状态变体，11 道质量门
- **核心功能**：小说进 → 角色设定 + 改编大纲 + 美术设定出，覆盖短剧开拍前的全部案头工作；明确不做剧本台词、分镜、视频生成
- **谁在用**：AI 短剧创作者/工作室；Claude Code 与 codex 双 runtime 用户
- **行业热度**：🔥 极高。仓库 2026-08-06 创建，6 天内 **1083 stars / 125 forks**（✅ API 已验证）。Bing 行业市场数据搜索未返回有效结果（❌ 未搜到，返回的都是通用 AI 产品页），但 GitHub 侧「短剧 skill」关键词下 7 个竞品仓库均数百到上千 star，说明这是当下 AI 创作圈最热赛道之一
- **License**：Apache-2.0 ✅ 可商用、可二次开发
- **作者状态**：作者自述空窗期找工作/半合作（月几千生活费 + 利润分成），建了付费 AI 短剧交流群（微信 hao_dev）——仓库带有明显的个人品牌/获客性质，但不影响代码质量

### c) 竞品对比 ✅ 已验证（GitHub 搜索，按 star 排序）

| 仓库 | Stars | 定位差异 |
| --- | --- | --- |
| liangdabiao/Seedance2-Storyboard-Generator | 2082 | 聚焦 Seedance 2.0 剧本/分镜提示词生成 |
| **eternityspring/shuohao-skills** | **1083** | 上游案头工作：角色/大纲/美术设定 |
| 0xsline/short-drama | 970 | 剧本全流程：选题→分集→合规审核→出海 |
| worldwonderer/drama-skills | 672 | 全链路：剧本、资产、分镜、图/视频提示词、独立审查 |
| GongLingRui/screen-creative-skills | 332 | 31 个影视创作评估策划 skills |
| zhaihao118/Micro-Drama-Skills | 260 | 剧本→角色→分镜→视频提交全流程 |
| A-cat-with-carrots/OnlyShot | 225 | 一句话→成片工业流水线，集成即梦/Seedance，目标直发红果抖音 |

- **差异**：多数竞品做「剧本」或「全链路成片」；shuohao-skills 卡在**改编上游**（小说 IP → 结构化设定），且是其中工程纪律最强的——强制 selftest.mjs（不调模型、1 秒跑完）、质量门全部脚本确定性检查、禁止凭书名脑补（改编取舍必须附原文 evidence）
- **优势**：零依赖零 API key（用当前会话额度）、软链安装 git pull 即生效、双 runtime 兼容、边界清晰（明确不做什么）
- **劣势**：不碰剧本台词/分镜/视频生成，要成片还得接下游工具（如 OnlyShot 路线或即梦/Seedance）；只在 macOS + Node 24 验过；无 CI

### d) 实用信息 ✅

- **GitHub**：https://github.com/eternityspring/shuohao-skills（无独立官网；作者简历站 resume.79px.com）
- **上手门槛**：**低**。前置条件仅 Node ≥18；装过 Claude Code 或 codex 的话 `./scripts/install.sh` 一条命令软链完成；不需要任何 API key
- **费用**：完全免费开源（Apache-2.0），消耗的是自己 agent 会话的模型额度；作者的交流群是付费的（可选）
- **出图**：需 codex CLI 的内置 `$imagegen`；没有 codex 也能用，跳过出图其余产出照常

### e) 实践指导（重点）

**怎么让大哥今天就能试：**

1. **第一步（5 分钟）**：clone + 安装
   ```bash
   git clone https://github.com/eternityspring/shuohao-skills.git
   cd shuohao-skills && ./scripts/install.sh
   ```
   装完跑一遍自测验证环境：`for f in skills/*/scripts/selftest.mjs; do node "$f"; done`
2. **第二步（30 分钟）**：找一本熟悉的短篇小说（或网文开头 3-5 万字），在 Claude Code 里说「用 novel-outline 把这本小说改编成 60 集短剧大纲，题材 XXX」——先体验**大纲体检模式**最稳：贴一份现成大纲让它只跑 13 道质量门出诊断报告，立刻看到价值
3. **第三步（后续深入）**：跑通 novel-characters → novel-outline → novel-art 全链路（后者吃 outline.json 预填，三个 skill 是串联设计的）；若有 codex 可试设定图生成；想直出成片再叠加 OnlyShot/即梦类下游工具

**踩坑预警：**
- ⚠️ 必问参数别跳过：总集数 × 单集时长、题材——题材猜错整份大纲作废；短篇（20-30 集）要主动收紧角色档阈值（默认值按 60 集以上给的）
- ⚠️ 禁止凭书名脑补：一切改编判断需基于给到原文的文本，关键取舍要附 evidence——别只丢个书名让它编
- ⚠️ 出图依赖 codex 的 `$imagegen`，纯 Claude Code 环境角色设定图这步出不来（其余照常）
- ⚠️ 只在 macOS + Node 24 验证过；阿里云 Ubuntu 服务器上理论可跑但未验证
- ⚠️ 仓库 6 天千 star 增长极快，接口/质量门规则可能频繁变动，用前 `git pull`

**与大哥赚钱/做内容的直接关联：**
- 大哥在做创意孵化 + OPC 一人公司方向，短剧是当下内容变现最猛的赛道之一（红果/抖音生态）。这个工具把「小说 IP → 短剧案头包」成本压到接近零，**一人就能跑通改编上游**，正好是 OPC 模式
- 可延伸的变现路径：接小说改编短剧案头外包、批量产出大纲卖给短剧工作室、或者作为自己 AI 短剧 pipeline 的上游环节
- 工程层面也值得学：它示范了「prompt 工作流 + 确定性校验脚本」的 skill 设计范式（质量门脚本化、selftest 不调模型、边界声明）——大哥自己做 Hermes/Claude skills 可直接借鉴这套约定

**价值评分**：⭐⭐⭐⭐（4/5，赛道热 + 零成本接入 + 工程范式可复用；扣一星因为不做成片，离钱还差下游一环）

**一句话结论**：值得花 30 分钟装上去跑一遍大纲体检——就算不做短剧，它「脚本化质量门」的 skill 设计思路也值得抄。

---

## 📊 今日汇总

### 最值得关注 Top 3
1. **shuohao-skills** - 6 天 1083 star 的 AI 短剧改编上游工具链，零依赖即装即用，直接对接大哥的 OPC/内容变现方向
2. **「质量门脚本化」的 skill 设计范式** - 13 道检查全靠确定性脚本不靠模型自觉，是写高质量 agent skill 的可复制方法论
3. **AI 短剧 skill 生态全景** - GitHub 上 7+ 个数百 star 竞品（OnlyShot 一句话成片、drama-skills 全链路），说明「短剧生产工业化」已是确定性趋势，上游改编位仍有空档

### 本质洞察
- **共同趋势**：AI 内容生产的竞争点正从「生成能力」转向「工作流结构化」——单点生成（图/视频）已商品化，值钱的是把行业 know-how（爽点节奏、角色一致性、场景调度）编码成可校验的流程
- **底层规律**：最好的 agent skill 不是 prompt 写得多漂亮，而是**把质检从模型手里夺走交给脚本**——LLM 负责创造性产出，确定性脚本负责把关，这是当前对抗模型不稳定性的最有效工程模式
- **第一性原理发现**：短剧的本质是「情绪密度的工业化生产」，爽点间隔 ≤3 集这类规则就是把观众留存曲线翻译成制作约束；shuohao-skills 的真正价值不是省时间，而是把原来只在资深编剧脑子里的隐性知识显性化、可执行化

### 明日行动清单
- [ ] clone shuohao-skills 并跑通 install + selftest（5 分钟）
- [ ] 用一本现成小说/大纲跑 novel-outline 体检模式，看诊断报告质量（30 分钟）
- [ ] （可选深入）对比 OnlyShot 的全链路成片路线，评估「shuohao 上游 + OnlyShot 下游」组合成完整 AI 短剧 pipeline 的可行性，记入 02-领域/创意孵化/

