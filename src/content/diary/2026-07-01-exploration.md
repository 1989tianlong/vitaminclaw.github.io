---
title: "日记探索 · 2026-07-01"
date: 2026-07-01
authorship: ai
authorshipNote: "由 AI 对当日日记逐条做第一性原理拆解与实践指导。"
description: "8 条记录 · 4 条重点：sim-use、greenlight、领哥"
tags: [日记探索]
---

> 第一性原理 · 广泛搜索 · 实践指导

## 📅 概览
- 探索日期：2026-07-01
- 信息来源：20-日记/2026-07-01.md
- 条目数：8
- 重点探索：4条

---

### 🔹 条目1：sim-use

**日记原文**：https://github.com/lycorp-jp/sim-use

**🎯 本质**
- 一句话：用命令行让AI能"看见"和"点击"手机屏幕
- 根本问题：AI无法直接操作移动端应用，缺少验证环节
- 人话版：相当于给AI Agent装上了"眼睛"和"手指"，可以自己操作iOS和Android模拟器

**📋 基本信息**
- 是什么：跨平台CLI工具，驱动iOS Simulator和Android模拟器的无障碍API
- 核心功能：`sim-use ui`（读取屏幕）、`sim-use tap @N`（点击元素）
- 目标用户：做移动端AI Agent开发的工程师
- 热度：GitHub新项目，具体star数未获取

**⚡ 竞品对比**
- 同类：Appium、Selendroid（传统自动化框架）
- 差异点：专为AI Agent设计，token压缩16倍，支持别名点击（@N），无需坐标
- 优劣势：✅ AI原生、跨平台、快速；❌ 仅支持模拟器/真机调试

**🔗 资源**
- 官网：https://github.com/lycorp-jp/sim-use
- 安装：`brew tap lycorp-jp/tap && brew install lycorp-jp/tap/sim-use`

**🎮 实践指导**
- 第一步（5分钟）：运行 `brew tap lycorp-jp/tap && brew install sim-use`，验证 `sim-use --help`
- 第二步（30分钟）：用 `sim-use ui` 查看模拟器屏幕输出，理解输出格式
- 第三步后续：安装agent skill `sim-use init --client claude`，集成到Claude Code工作流
- 踩坑预警：需要macOS 14+，Xcode环境；首次运行要授权Accessibility权限
- 与大哥需求的关联：做移动端AI应用测试、自动化验证的利器
- 一句话结论：移动端AI Agent开发的必备工具，填补了验证环节的空白 | 价值评分：⭐⭐⭐

---

### 🔹 条目2：greenlight

**日记原文**：https://github.com/RevylAI/greenlight

**🎯 本质**
- 一句话：App Store提交前的自动化"体检医生"
- 根本问题：Apple审核严格，常见因隐私、支付、私有API等问题被拒
- 人话版：上架前先自己检查一遍，避免被Apple打回

**📋 基本信息**
- 是什么：预提交合规扫描器，检查源代码、隐私清单、IPA二进制
- 核心功能：`greenlight preflight` 一键扫描30+违规模式
- 目标用户：iOS开发者、App运营团队
- 热度：GitHub新项目

**⚡ 竞品对比**
- 同类：App Store Connect自带检测、第三方审核工具
- 差异点：完全离线、秒级完成、无需Apple账号
- 优劣势：✅ 快速、全面；❌ 无法替代人工审核

**🔗 资源**
- 官网：https://github.com/RevylAI/greenlight
- 安装：`brew install revylai/tap/greenlight`

**🎮 实践指导**
- 第一步（5分钟）：`brew install revylai/tap/greenlight`，验证 `greenlight --version`
- 第二步（30分钟）：对现有项目运行 `greenlight preflight .`，查看报告
- 第三步后续：集成到CI/CD流程，每次提交自动检查
- 踩坑预警：静态扫描无法覆盖运行时问题（如账号删除功能是否真正可用）
- 与大哥需求的关联：做iOS应用必用，可减少被拒风险
- 一句话结论：iOS开发者的保命工具，早用早安心 | 价值评分：⭐⭐⭐

---

### 🔹 条目3：领哥 (lingge66)

**日记原文**：https://lingge66.pages.dev/

**🎯 本质**
- 一句话：一个人做AI产品并实现稳定变现的"超级个体"案例
- 根本问题：很多人学AI但不知道怎么变现
- 人话版：看看人家怎么做个人AI商业化的

**📋 基本信息**
- 是什么：一位AI开发者的个人官网+产品矩阵
- 核心项目：99Huo交易平台、菩提苑命理站、Codex团队客户端、支付宝回调系统等
- 成绩：13,600+用户，69,000+粉丝，日盈利¥700-2000+
- 目标用户：想学AI变现的人、AI开发者

**⚡ 竞品对比**
- 同类：各种AI培训、付费社群
- 差异点：真实运营数据、多个可验证的项目、不是纯卖课
- 优劣势：✅ 有实战案例；❌ 需付费进社群才能深度学习

**🔗 资源**
- 官网：https://lingge66.pages.dev/
- GitHub：https://github.com/lingge66
- 社群：QQ 3268185320

**🎮 实践指导**
- 第一步（5分钟）：浏览官网，了解他的项目矩阵和战绩
- 第二步（30分钟）：访问 https://99huo.com 看他的产品形态
- 第三步后续：加入社群深度交流（付费）
- 踩坑预警：他的方法不一定能直接复制，但值得借鉴思路
- 与大哥需求的关联：学习个人AI产品化、商业化的实战案例
- 一句话结论：真实的AI超级个体案例，比任何课程都有参考价值 | 价值评分：⭐⭐⭐

---

### 🔹 条目4：openJiuwen

**日记原文**：https://openjiuwen.com

**🎯 本质**
- 一句话：华为开源的企业级AI Agent平台
- 根本问题：企业想自己做Agent但缺底层框架
- 人话版：华为把内部用的Agent技术开源了，大家可以用它搭建自己的AI助手

**📋 基本信息**
- 是什么：开源Agent平台，支持多Agent协同、智能体自演进
- 核心产品：JiuwenSwarm（多Agent协作）、Agent Studio（可视化开发）、Agent Core（SDK）
- 目标用户：企业开发者、AI工程师
- 热度：社区800+ followers，核心仓库2.5K-3.8K stars

**⚡ 竞品对比**
- 同类：LangChain、AutoGen、Microsoft AutoGen
- 差异点：华为背书、中文社区活跃、主打自演进和协同
- 优劣势：✅ 中文文档、企业级；❌ 生态不如LangChain成熟

**🔗 资源**
- 官网：https://www.openjiuwen.com
- 代码：https://atomgit.com/openJiuwen（国内）/ GitHub
- 文档：完整文档和API参考

**🎮 实践指导**
- 第一步（5分钟）：访问官网和AtomGit，了解项目结构
- 第二步（30分钟）：克隆 `jiuwenswarm` 仓库，运行Demo
- 第三步后续：基于Agent Core开发自己的Agent应用
- 踩坑预警：部分模块还在开发中（如Ops）；需要Python基础
- 与大哥需求的关联：做企业级AI应用或需要多Agent协同时的备选框架
- 一句话结论：华为品质的中文Agent框架，值得关注 | 价值评分：⭐⭐⭐

---

### 🔹 其他条目（简述）

**5. marker (datalab-to/marker)**
- PDF转Markdown+JSON工具，高精度转换
- 用途：文档提取、知识管理
- 价值：⭐⭐（工具类，有特定使用场景）

**6. Kilo Code**
- 开源AI agent VS Code扩展
- 需要登录才能使用完整功能
- 价值：⭐⭐（VS Code用户可关注）

**7. OKX AI**
- 抓取失败，未获取有效信息
- 价值：待探索

**8. Chinatalk**
- 抓取失败，未获取有效信息
- 价值：待探索

---

## 📊 今日汇总

### 最值得关注 Top 3
1. **greenlight** - iOS开发者的保命符，省掉被Apple打回的麻烦
2. **领哥** - 真实的AI超级个体变现案例，比任何课都有参考价值
3. **sim-use** - 移动端AI Agent的验证工具，填补了关键空白

### 本质洞察
- 今天收集的工具都指向一个趋势：**AI Agent正在从"能说"向"能做事"进化**
- sim-use解决"AI怎么验证自己做的事"（验证层）
- greenlight解决"AI生成的东西能不能过审"（合规层）
- openJiuwen解决"怎么让多个AI协同工作"（协作层）
- 领哥代表的是：AI时代个人也能做出有收入的产品的路径

### 明日行动清单
- [ ] 用greenlight扫描一个iOS项目（5分钟）
- [ ] 访问领哥官网和99Huo，理解他的产品思路（30分钟）
- [ ] 克隆sim-use或openJiuwen，尝试运行Demo（30分钟）

