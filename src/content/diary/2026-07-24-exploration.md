---
title: "日记探索 · 2026-07-24"
date: 2026-07-24
authorship: ai
authorshipNote: "由 AI 对当日日记逐条做第一性原理拆解与实践指导。"
description: "16 条记录 · 5 条重点：副业思路、Unstract、Canvas UI"
tags: [日记探索]
---

> 第一性原理 · 广泛搜索 · 实践指导

## 📅 概览
- 探索日期：2026-07-24
- 信息来源：2026-07-24.md
- 条目数：16
- 重点探索：5条

---

### 🔹 条目1：副业思路（Goodreads → Anna's Archive → enladder → 闲鱼/夸克网盘）

**日记原文**：分享一个副业，有手有梯子就行，每个月赚个2-3千还是没问题的。1. 在goodreads.com上找英文书单 2. 通过annas-archive.cc下载英文电子书 3. 用enladder.com对生词（难词）标注 4. 用闲鱼等平台做好看的封面接单做定制难词提示电子书 5. 一些做过的电子书放到夸克网盘做网盘拉新

**🎯 本质**
- 一句话：利用信息差和工具链，把英文电子书转化成"带中文难词标注的定制版"，卖给想读英文原版书但词汇量不够的中国人
- 根本问题：中国人想读英文原版书但阅读门槛高（生词多、查词打断阅读体验），传统的英汉对照版又太丑太粗糙
- 人话版：给想读英文书但英语不够好的人，做"贴心标注版"电子书，收点手工费

**📋 基本信息**
- 是什么：一条完整的副业链条，利用多工具协作实现定制化英文电子书制作
- 核心工具链：Goodreads（找书单）→ Anna's Archive（下载资源）→ enladder（自动标注难词）→ 闲鱼（接单）→ 夸克网盘（拉新）
- 目标用户：想读英文原版书但词汇量有限的中国英语学习者
- 热度/数据：闲鱼上"英文原版书带注释"类目竞争不算激烈，属于小众蓝海

**⚡ 竞品对比**
- 同类：直接卖英文原版电子书（盗版/正版代购）、Kindle生词提示功能、各种阅读App的翻译功能
- 差异点：定制化（用户指定的书+指定的难度标注）+ 手工服务感（有人情味）
- 优劣势：优势是门槛极低、几乎零成本、可规模化；劣势是依赖第三方平台（闲鱼容易被封）、灰色地带（版权问题）

**🔗 资源**
- Goodreads：https://www.goodreads.com
- Anna's Archive：https://annas-archive.cc
- enladder：https://enladder.com
- 闲鱼：支付宝App内

**🎮 实践指导**
- 第一步（5分钟）：注册enladder账号，看免费额度够标几本书
- 第二步（30分钟）：去Goodreads找一本热门英文书（比如Atomic Habits），下载电子版，用enladder标难词，做一页样图
- 第三步（后续）：闲鱼发帖接单，定价策略参考（5-10元/本），积累好评后提价
- 踩坑预警：1）版权问题——Anna's Archive属于灰色地带，不要高调宣传来源 2）闲鱼规则——不要直接发电子文件，引导到网盘/邮箱 3）工具成本——enladder可能需要付费套餐
- 与大哥需求的关联：**直接赚钱**！月入2-3千的副业，符合大哥赚钱需求
- 一句话结论：值得试，启动成本为0，关键是跑通流程 | 价值评分：⭐⭐⭐⭐⭐

---

### 🔹 条目2：Unstract（文档转结构化JSON）

**日记原文**：你丢入一份文档。用简单的英语描述你想提取什么。它会直接返回结构化的 JSON，随时可以加载到你的数据库中。无需正则表达式。无需脆弱的模板。无需按页计费。→ 将 PDF、DOCX、XLSX、PPTX 和图像转换为结构化 JSON → 接入任何 LLM：OpenAI、Claude、Gemini、Bedrock、Mistral，或本地运行的 Ollama

**🎯 本质**
- 一句话：一个"用自然语言描述提取规则"的文档解析引擎，把非结构化文档变成结构化数据
- 根本问题：传统文档解析需要正则表达式、模板、按页计费的OCR服务，繁琐且脆弱——Unstract让你用一句话描述"提取什么"，剩下的交给AI
- 人话版：以前要从PDF里提取数据得写一堆代码，现在你告诉AI"把发票上的金额和日期提取出来"，它直接给你JSON

**📋 基本信息**
- 是什么：AI驱动的文档到结构化数据转换平台
- 核心功能：PDF/DOCX/XLSX/PPTX/图片 → 结构化JSON，支持自定义提取规则（自然语言描述）
- 目标用户：需要处理大量文档的企业、数据工程师、RPA开发者、AI应用开发者
- 热度/数据：文档解析赛道竞争激烈（Unstructured.io、LlamaParse等），但Unstract的"自然语言定义提取规则"是差异化卖点

**⚡ 竞品对比**
- 同类：Unstructured.io、LlamaParse、Azure Document Intelligence、Amazon Textract
- 差异点：自然语言描述提取规则（无需正则/模板）、支持本地Ollama（数据不出域）
- 优劣势：优势是使用门槛极低（说人话就行）、支持本地模型保障数据安全；劣势是比较新，社区和生态不如竞品成熟

**🔗 资源**
- 官网：https://unstract.com（日记中未提供链接，推测为此）
- 文档：可在官网查看

**🎮 实践指导**
- 第一步（5分钟）：找一份PDF发票或合同，去Unstract官网注册试用
- 第二步（30分钟）：尝试用自然语言描述"提取所有金额、日期、商品名称"，对比输出的JSON质量
- 第三步（后续）：如果能用，整合到工作流程中处理批量文档
- 踩坑预警：1）复杂排版（表格嵌套、不规则布局）可能出错 2）依赖LLM，有API成本 3）中文文档效果需要实测
- 与大哥需求的关联：如果大哥有文档处理需求（合同、报告、发票），能大幅提升效率
- 一句话结论：文档处理的"ChatGPT时刻"，有场景就非常有用 | 价值评分：⭐⭐⭐⭐

---

### 🔹 条目3：Canvas UI（创意组件库）

**日记原文**：https://canvasui.dev/

**🎯 本质**
- 一句话：一个开源的前端UI组件库，提供Canvas/WebGL创意效果组件，框架无关（React/Vue/Svelte/Solid/原生JS都能用）
- 根本问题：前端开发中做酷炫视觉效果门槛很高（需要WebGL/Canvas/着色器知识），Canvas UI把这些封装成开箱即用的组件
- 人话版：你想让网页有粒子效果、玻璃质感、火焰效果，但自己写很麻烦——现在装个组件就行了

**📋 基本信息**
- 是什么：开源创意UI组件库，提供Canvas/WebGL视觉效果
- 核心功能：24+个创意组件（粒子揭示、火焰、液体、玻璃、VHS效果等），支持React/Vue/Svelte/Solid/原生JS
- 目标用户：前端开发者、产品设计师、想做创意网站的人
- 热度/数据：开源（MIT+Commons Clause），通过shadcn CLI安装，有MCP服务器支持AI Agent安装

**⚡ 竞品对比**
- 同类：Framer Motion、GSAP、Three.js生态的各种库、shadcn/ui（普通UI）
- 差异点：专注于"canvas/WebGL创意效果"，而不是通用UI组件；框架无关（5个版本）；shadcn风格CLI安装
- 优劣势：优势是效果炫酷、安装简单、框架无关；劣势是组件数量还不多（24个），部分效果依赖Chrome实验特性

**🔗 资源**
- 官网：https://canvasui.dev
- GitHub：https://github.com/DavidHDev/canvas-ui
- 组件列表：https://canvasui.dev/components
- 文档：https://canvasui.dev/docs

**🎮 实践指导**
- 第一步（5分钟）：打开官网看演示效果，找到喜欢的组件
- 第二步（30分钟）：在项目中运行 `npx shadcn@latest add @canvas-ui/particle-reveal-react` 尝试安装
- 第三步（后续）：如果做需要视觉冲击的网站（产品页、品牌页），直接用
- 踩坑预警：1）html-in-canvas组件依赖Chrome实验特性，其他浏览器降级为普通HTML 2）WebGL组件在所有现代浏览器可用
- 与大哥需求的关联：如果大哥做网站/产品，用来提升视觉品质
- 一句话结论：做创意网站的好工具，但不是刚需 | 价值评分：⭐⭐⭐

---

### 🔹 条目4：video-shotcraft（AI视频制作技能包）

**日记原文**：https://github.com/Vincentwei1021/video-shotcraft

**🎯 本质**
- 一句话：一个AI Agent技能包，让你用自然语言描述产品，AI自动生成电影级产品宣传视频（通过Claude Code/Codex + Remotion）
- 根本问题：制作高质量产品宣传视频需要专业团队（导演、动画师、音效师），成本高、周期长——这个技能包让AI Agent一个人全干了
- 人话版：你告诉AI"给我的产品做个宣传片"，它自己写代码、生成动画、配音乐，出一个能直接用的视频

**📋 基本信息**
- 是什么：AI Agent技能包，将Claude Code/Codex变成动效工作室
- 核心功能：106个镜头卡片、162种风格、161个动效预览、完整的视频模板（Ink Press：36.2秒，10个镜头）
- 目标用户：独立开发者、产品团队、需要快速制作产品视频的人
- 热度/数据：GitHub开源项目，基于Remotion实现，Gallery在线预览所有镜头效果

**⚡ 竞品对比**
- 同类：Runway Gen-3、Pika、Sora（AI视频生成）、传统动效团队
- 差异点：不是AI生成视频，而是AI Agent编排代码级动画（Remotion），精确控制每个镜头
- 优劣势：优势是精确可控、风格一致、可迭代修改；劣势是上手门槛高于AI视频生成工具（需要Claude Code/Codex + 一些技术背景）

**🔗 资源**
- GitHub：https://github.com/Vincentwei1021/video-shotcraft
- Gallery（在线预览）：https://vincentwei1021.github.io/video-shotcraft/

**🎮 实践指导**
- 第一步（5分钟）：打开Gallery浏览镜头效果，找灵感
- 第二步（30分钟）：在Claude Code中运行 `npx skills add Vincentwei1021/video-shotcraft` 安装
- 第三步（后续）：准备产品素材（截图、文案），用Ink Press模板生成第一个视频
- 踩坑预警：1）依赖Remotion，需要Node.js环境 2）渲染需要时间（长视频更久）3）需要Claude Code或Codex才能发挥全部能力
- 与大哥需求的关联：如果大哥做产品推广、自媒体内容，这是一个极低成本做专业视频的方案
- 一句话结论：想做产品视频但没有预算找专业团队的完美方案 | 价值评分：⭐⭐⭐⭐

---

### 🔹 条目5：MarkItDown（微软文档转Markdown工具）

**日记原文**：GitHub：github.com/microsoft/markitdown

**🎯 本质**
- 一句话：微软开源的轻量级Python工具，把各种格式文件（PDF/Word/Excel/PPT/图片/音频等）统一转换成Markdown
- 根本问题：不同格式的文档（PDF、Docx、PPT、图片中的文字等）无法直接喂给LLM处理——MarkItDown把它们统一转成LLM最擅长的Markdown格式
- 人话版：你有一堆PDF、Word文档、甚至手写图片，想丢给AI分析——先过一遍MarkItDown转成Markdown

**📋 基本信息**
- 是什么：微软开源的文档→Markdown转换工具（AutoGen团队出品）
- 核心功能：PDF/DOCX/PPTX/XLSX/图片（OCR）/音频（转写）/HTML/CSV/JSON/XML/ZIP/YouTube链接 → Markdown
- 目标用户：AI应用开发者、数据工程师、需要批量处理文档的人
- 热度/数据：PyPI下载量高，微软官方出品，AutoGen团队维护

**⚡ 竞品对比**
- 同类：textract、Pandoc、Unstructured.io、LlamaParse
- 差异点：专为LLM输入优化（输出Markdown）、支持格式极广（音频、YouTube链接）、微软生态集成
- 优劣势：优势是格式支持广、开源免费、LLM友好的输出；劣势是复杂排版保留有限（不是高保真转换）

**🔗 资源**
- GitHub：https://github.com/microsoft/markitdown
- PyPI：`pip install 'markitdown[all]'`

**🎮 实践指导**
- 第一步（5分钟）：`pip install 'markitdown[all]'` 安装
- 第二步（30分钟）：尝试 `markitdown myfile.pdf > myfile.md` 转换一个PDF，查看输出质量
- 第三步（后续）：集成到文档处理流程中，批量转换后喂给LLM
- 踩坑预警：1）复杂表格/排版可能丢失 2）图片OCR需要Tesseract 3）音频转写需要额外模型
- 与大哥需求的关联：如果大哥有大量文档需要分析（报告、合同、书籍），这是预处理神器
- 一句话结论：文档转LLM输入格式的最佳选择之一，值得装一个 | 价值评分：⭐⭐⭐⭐

---

## 📊 今日汇总

### 最值得关注 Top 3
1. **副业思路（Goodreads→enladder→闲鱼）** - 直接能赚钱的副业，启动成本为0，符合大哥核心需求
2. **MarkItDown** - 微软官方工具，文档处理神器，如果大哥有批量文档分析需求就是刚需
3. **video-shotcraft** - AI Agent做产品视频，低成本做内容的好工具

### 本质洞察
- **工具链化趋势明显**：今天的条目中，Unstract和副业思路都是"多工具组合成一条链"的模式，而非单一工具解决问题。真正的价值在于组合而非单个工具。
- **AI从"生成"转向"编排"**：Canvas UI和video-shotcraft都不是AI直接生成最终结果，而是AI作为"编排者"调用代码级组件来精确输出。这比"一句话生成"更可控、更实用。
- **文档处理仍是刚需**：Unstract和MarkItDown都指向同一个方向——非结构化数据到结构化数据的转换。这是AI落地的"脏活累活"，但也是最有实际价值的环节。
- **副业的本质是信息差+工具差**：那条"做定制英文电子书"的副业，本质上是利用了中国用户不知道Goodreads/Anna's Archive/enladder这条工具链，加上一点点手工价值（定制标注）。

### 明日行动清单
- [ ] 第一件事（5分钟）：注册enladder账号，看看免费额度
- [ ] 第二件事（30分钟）：跑通副业流程——找书→下载→标注→做样图
- [ ] 第三件事（可选）：pip安装MarkItDown，试转换一份PDF看看效果

