---
title: "日记探索 · 2026-06-29"
date: 2026-06-29
authorship: ai
authorshipNote: "由 AI 对当日日记逐条做第一性原理拆解与实践指导。"
description: "8 条记录 · 5 条重点：Ports、vorssaint-utils、Tokei 知度"
tags: [日记探索]
---

> 第一性原理 · 广泛搜索 · 实践指导

## 📅 概览
- 探索日期：2026-06-29
- 信息来源：20-日记/2026-06-29.md
- 条目数：8
- 重点探索：5条

---

### 🔹 条目1：Ports

**日记原文**：https://ports-app.com/

**🎯 本质**
- 一句话：在菜单栏显示本地所有开发服务器状态的小工具
- 根本问题：开发者经常开很多本地服务，想快速知道哪个端口在跑什么
- 人话版：你的Mac菜单栏上直接显示「现在开了哪些本地服务」，不用一个个去查端口

**📋 基本信息**
- 是什么：macOS 菜单栏应用，监控本地监听端口
- 核心功能：显示每个端口对应的进程、支持一键跳转到终端或杀掉进程、显示运行时间/CPU/内存/能耗
- 目标用户：日常开发多项目同时运行的程序员
- 热度/数据：BigLittleApps 出品，macOS 14+ 免费使用

**⚡ 竞品对比**
- 同类：netstat 命令行、Node DevTools
- 差异点：菜单栏实时显示、智能识别 Node/Vite/Next/Python/Rails/Go/Bun/Deno 等常见框架、一键操作
- 优劣势：✅ 轻量、免费、界面美观 | ❌ 仅 macOS

**🔗 资源**
- 官网：https://ports-app.com/
- GitHub：未公开
- 下载：https://ports-app.com/Ports-1.7.dmg

**🎮 实践指导**
- 第一步（5分钟）：下载 DMG 安装
- 第二步（30分钟）：打开应用，看菜单栏效果
- 第三步（后续）：多开几个开发服务器测试
- 踩坑预警：需 macOS 14+
- 与大哥需求的关联：开发效率工具，帮你管理多个AI agent同时运行的本地服务
- 一句话结论：开发党必备小工具 | 价值评分：⭐⭐⭐

---

### 🔹 条目2：vorssaint-utils

**日记原文**：https://github.com/vorssaint/vorssaint-utils

**🎯 本质**
- 一句话：开源 macOS 菜单栏工具大礼包
- 根本问题：macOS 缺少一些实用的小功能（音量独立控制、系统监控等）
- 人话版：把 Windows 或 Linux 上常见的小功能移植到 Mac 菜单栏

**📋 基本信息**
- 是什么：开源 macOS 菜单栏工具集
- 核心功能：每个应用的音量混合器、系统监控、Dock 预览、保持唤醒、窗口切换器（Alt Tab）、应用卸载器等
- 目标用户：想要增强 Mac 功能的用户
- 热度/数据：GitHub 开源项目

**⚡ 竞品对比**
- 同类：Raycast、AltTab、Maccy
- 差异点：免费开源、一站式菜单栏解决方案
- 优劣势：✅ 免费、开源、功能全 | ❌ 需自行编译安装

**🔗 资源**
- 官网：GitHub 仓库
- GitHub：https://github.com/vorssaint/vorssaint-utils

**🎮 实践指导**
- 第一步（5分钟）：查看 GitHub README 了解功能
- 第二步（30分钟）：尝试编译安装
- 第三步（后续）：按需配置功能
- 踩坑预警：需要一定的终端操作能力
- 与大哥需求的关联：提升 Mac 使用效率的实用工具集
- 一句话结论：功能丰富但门槛略高 | 价值评分：⭐⭐

---

### 🔹 条目3：Tokei 知度

**日记原文**：https://tokei.lanshuagent.com/

**🎯 本质**
- 一句话：监控你用哪些 AI 编程工具、花了多少 Token 和钱的菜单栏应用
- 根本问题：同时用多个 AI 编程工具，不知道总共花了多少钱、用了多少 Token
- 人话版：你的 AI 编程「消费账单」，一个面板看清所有工具的用量

**📋 基本信息**
- 是什么：macOS 菜单栏 AI 编程用量监控工具
- 核心功能：Token 实时监控、缓存命中率分析、成本追踪、全局仪表盘、年度 Wrapped（Spotify Wrapped 风格）、项目足迹、防休眠、久坐提醒、多设备同步
- 目标用户：使用多个 AI 编程工具的开发者
- 热度/数据：支持 9 款工具（Claude Code、Codex CLI、Gemini CLI、Grok、Qoder、Hermes、OpenCode、OpenClaw、Pi Coding Agent），完全离线、不联网、零遥测

**⚡ 竞品对比**
- 同类：CodexBar
- 差异点：Tokei 侧重深度用量分析（Token 级、成本趋势、项目维度），完全离线不需要登录；CodexBar 侧重提供商覆盖和配额轮询，需要联网
- 优势：✅ 完全离线、零登录、深度分析、年度 Wrapped 有趣 | ❌ 只支持 9 款工具（少于 CodexBar 的 40+）

**🔗 资源**
- 官网：https://tokei.lanshuagent.com/
- GitHub：https://github.com/cclank/tokei
- 下载：https://dl.lanshuagent.com/tokei/Tokei-v1.0.9.dmg

**🎮 实践指导**
- 第一步（5分钟）：下载 DMG 安装到 Applications
- 第二步（30分钟）：打开应用，自动读取本地日志，显示今日用量
- 第三步（后续）：配置自定义价格表、开启多设备同步
- 踩坑预警：首次打开可能被系统拦截，需要运行 `sudo xattr -rd com.apple.quarantine /Applications/Tokei.app`
- 与大哥需求的关联：帮你监控 OpenClaw 等 AI agent 的使用成本
- 一句话结论：AI 编程党必装，成本可视化 | 价值评分：⭐⭐⭐⭐

---

### 🔹 条目4：VVTerm

**日记原文**：https://vvterm.com

**🎯 本质**
- 一句话：Apple 全平台原生的 SSH 终端 + SFTP 客户端
- 根本问题：在 iPhone/iPad 上没有好用的 SSH 工具，Mac 上既存の终端不够现代
- 人话版：苹果设备上的「福昕终端」—— 支持 SSH、SFTP、云同步、跨设备

**📋 基本信息**
- 是什么：跨平台（iPhone/iPad/Mac）SSH 终端和 SFTP 客户端
- 核心功能：标准 SSH、Mosh、Tailscale SSH、Cloudflare Tunnel SSH、内置 SFTP 文件浏览器、Keychain 凭证安全、iCloud 同步
- 目标用户：管理多台服务器的开发者、Homelab 用户、Apple 全家桶用户
- 热度/数据：基于 libghostty 渲染引擎，iOS 16+ / macOS 13+（仅 Apple Silicon）

**⚡ 竞品对比**
- 同类：Termius、Shellng、Prompt
- 差异点：免费版够用（1 workspace/1 server/1 tab）、Lifetime 一次性付费 $49.99、基于 Ghostty 渲染更现代
- 优劣势：✅ 免费够用、Lifetime 便宜、跨设备同步 | ❌ 免费版限制较多、仅 Apple Silicon

**🔗 资源**
- 官网：https://vvterm.com
- GitHub：https://github.com/vivy-company/vvterm
- 下载：App Store

**🎮 实践指导**
- 第一步（5分钟）：App Store 下载安装
- 第二步（30分钟）：添加一个服务器配置，测试连接
- 第三步（后续）：开启 iCloud 同步，多设备使用
- 踩坑预警：仅支持 Apple Silicon Mac，Intel 用户绕行
- 与大哥需求的关联：管理远程 GPU 服务器、AI agent 设备的工具
- 一句话结论：Apple 用户的 SSH 新选择 | 价值评分：⭐⭐⭐

---

### 🔹 条目5：FlareMo

**日记原文**：https://github.com/realchendahuang/FlareMo

**🎯 本质**
- 一句话：用一个免费 Cloudflare 账号搭建的「永远在线」个人笔记系统
- 根本问题：自建笔记服务需要维护服务器、数据库、备份，Cloudflare 免费额度其实够用
- 人话版：利用 Cloudflare 免费资源（D1+R2+Workers）搭建一个不用自己维护的 Memos 替代品

**📋 基本信息**
- 是什么：Cloudflare 原生部署的个人笔记系统
- 核心功能：快速记录、标签、附件、时间线、归档、回收站、搜索、热力图、R2 附件存储、公开分享、Memos 兼容 API、MCP 端点
- 目标用户：想要自部署笔记但不想维护服务器的人
- 热度/数据：Cloudflare 免费额度（D1 5GB + R2 10GB + Workers 免费请求）

**⚡ 竞品对比**
- 同类：Memos、Flomo、Anytype
- 差异点：零服务器、零运维，完全依托 Cloudflare 免费生态
- 优劣势：✅ 免费额度溢出、数据企业级保障、全球加速 | ❌ 依赖 Cloudflare、需学习部署

**🔗 资源**
- 官网：GitHub 仓库
- GitHub：https://github.com/realchendahuang/FlareMo
- 部署：Deploy to Cloudflare 按钮一键部署

**🎮 实践指导**
- 第一步（5分钟）：点击 Deploy to Cloudflare 按钮
- 第二步（30分钟）：绑定自己的 Cloudflare 账号，跑迁移
- 第三步（后续）：配置自定义域名、Access 登录策略
- 踩坑预警：需要 Cloudflare 账号，首次部署需连接 GitHub
- 与大哥需求的关联：搭建自己的笔记/思考记录系统，成本为零
- 一句话结论：白嫖 Cloudflare 的好方案 | 价值评分：⭐⭐⭐

---

### 🔹 条目6：Contained

**日记原文**：https://github.com/tdeverx/contained-app

**🎯 本质**
- 一句话：Apple 官方 container CLI 的原生 macOS 图形界面
- 根本问题：container CLI 是命令行，普通用户用不来，需要图形化
- 人话版：把苹果的「容器」命令变成一个好看的 Mac 应用

**📋 基本信息**
- 是什么：SwiftUI 原生 macOS 应用，管理 Apple container CLI
- 核心功能：容器生命周期管理、日志、终端、统计、历史、文件浏览、镜像管理、Build/Volume/Network CRUD
- 目标用户：使用 Apple Silicon Mac 运行 Linux 容器的开发者
- 热度/数据：需 macOS 26+、Xcode 26+、container CLI 1.0.0

**⚡ 竞品对比**
- 同类：Docker Desktop、Rancher Desktop、OrbStack
- 差异点：专为 Apple container CLI 设计，Liquid Glass 界面风格
- 优劣势：✅ 界面现代、SwiftUI 原生 | ❌ 依赖特定新版系统和高门槛

**🔗 资源**
- 官网：GitHub 仓库
- GitHub：https://github.com/tdeverx/contained-app
- 下载：Releases 页面

**🎮 实践指导**
- 第一步（5分钟）：查看 GitHub 了解功能
- 第二步（30分钟）：安装 container CLI 1.0.0
- 第三步（后续）：等待 macOS 26 正式版
- 踩坑预警：需要极新的系统和工具，门槛极高
- 与大哥需求的关联：目前实用性较低，观望
- 一句话结论：前沿但门槛极高 | 价值评分：⭐

---

### 🔹 条目7：ArrowJS 1.0

**日记原文**：ArrowJS 1.0

**🎯 本质**
- 一句话：未搜到有效信息
- 根本问题：未知
- 人话版：未知

**📋 基本信息**
- 是什么：未确认
- 核心功能：未确认
- 目标用户：未确认
- 热度/数据：未搜到有效信息

**⚡ 竞品对比**
- 同类：未确认
- 差异点：未确认
- 优劣势：未确认

**🔗 资源**
- 官网：未找到
- GitHub：未找到

**🎮 实践指导**
- 踩坑预警：信息不足，无法评估
- 一句话结论：存疑，待进一步探索 | 价值评分：未知

---

### 🔹 条目8：Agent-Native框架

**日记原文**：Agent-Native框架

**🎯 本质**
- 一句话：未搜到有效信息
- 根本问题：未知
- 人话版：未知

**📋 基本信息**
- 是什么：未确认（可能是指面向 AI Agent 设计的应用框架）
- 核心功能：未确认
- 目标用户：未确认
- 热度/数据：未搜到有效信息

**⚡ 竞品对比**
- 同类：未确认
- 差异点：未确认
- 优劣势：未确认

**🔗 资源**
- 官网：未找到
- GitHub：未找到

**🎮 实践指导**
- 踩坑预警：信息不足，无法评估
- 一句话结论：存疑，待进一步探索 | 价值评分：未知

---

## 📊 今日汇总

### 最值得关注 Top 3
1. **Tokei 知度** - AI 编程用量监控，完全离线、零成本可视化、年度 Wrapped 有趣
2. **Ports** - 开发者必备菜单栏工具，快速查看本地服务状态
3. **FlareMo** - 零成本自部署笔记系统，利用 Cloudflare 免费额度

### 本质洞察
- 这些条目背后的共同趋势：**macOS 菜单栏工具爆发** + **AI 开发者工具链完善**
- 有什么底层的规律或模式：开发者想要「一站式监控面板」—— 既要看到本地服务（Ports）、又要看到 AI 用量（Tokei）、还要能远程操作（VVTerm）
- 第一性原理层面的发现：
  1. **监控是刚需**：不管监控什么（端口、Token、成本），开发者都想知道「现在是什么状态」
  2. **免费额度被低估**：Cloudflare、D1、R2 的免费额度对个人用户来说是「永久免费」，很多人不知道
  3. **跨设备是常态**：VVTerm、Tokei 都在强调多设备同步，因为开发者真的在多台机器上工作

### 明日行动清单
- [ ] 下载 Tokei，体验 AI 编程用量监控（5分钟）
- [ ] 安装 Ports，管理本地开发服务（5分钟）
- [ ] （可选）研究 FlareMo 部署，为自己搭建笔记系统

