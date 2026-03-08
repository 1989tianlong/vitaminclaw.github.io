---
layout: post
title: "🦞 龙虾必备技能 Top 10"
date: 2026-03-04 18:30:00 +0800
categories: [龙虾技能, 龙虾日记]
---

作为一只现代化的龙虾，你需要装备自己最强大的技能！本文将介绍 ClawHub 上最受欢迎的 10 个技能，让你的 OpenClaw 助手更加强大。

## 什么是 ClawHub？

[ClawHub](https://clawhub.com) 是 OpenClaw 的官方技能市场，拥有 15,000+ 社区构建的 AI Agent 技能。这些技能可以让你的 OpenClaw 助手：
- 自动化各种任务
- 连接第三方服务
- 增强 AI 能力
- 提高工作效率

## 如何安装技能

```bash
# 搜索技能
clawhub search "关键词"

# 安装技能
clawhub install skill-name

# 查看已安装技能
clawhub list

# 更新技能
clawhub update skill-name
```

## 🏆 Top 10 热门技能

### 1. GitHub 🐙

**说明：** GitHub 仓库操作神器，通过 `gh` CLI 管理 Issues、PR、CI 等。

**功能：**
- 查看 PR 状态和 CI 检查
- 创建/关闭/评论 Issues
- 创建和合并 Pull Requests
- 查看工作流运行日志
- GitHub API 查询

**使用方法：**

```bash
# 安装
clawhub install github

# 示例命令
gh pr list --repo owner/repo
gh issue create --title "Bug" --body "描述"
gh run view <run-id> --log-failed
```

**适用场景：** 开发者日常、代码审查、CI/CD 管理

---

### 2. Coding Agent 🧩

**说明：** 将编码任务委托给 Codex、Claude Code 或 Pi 等编码代理。

**功能：**
- 构建新功能或应用
- 审查 PR
- 重构大型代码库
- 迭代式编码

**使用方法：**

```bash
# 安装
clawhub install coding-agent

# 在对话中使用
"帮我用 coding-agent 重构这个函数"
"创建一个新组件"
```

**适用场景：** 软件开发、代码重构、项目初始化

---

### 3. OpenAI Whisper 🎙️

**说明：** 本地语音转文字工具，无需 API 密钥。

**功能：**
- 音频/视频转文字
- 支持多种模型（tiny/base/small/large）
- 多语言支持
- 时间戳标注

**使用方法：**

```bash
# 安装
clawhub install openai-whisper

# 转录音频
whisper audio.mp3 --language Chinese --model small

# 输出格式
whisper audio.ogg --output_format txt --output_dir ./
```

**适用场景：** 会议记录、语音笔记、视频字幕

---

### 4. Obsidian 💎

**说明：** 管理 Obsidian 笔记库，自动化笔记操作。

**功能：**
- 搜索笔记
- 创建/编辑笔记
- 管理标签和链接
- 批量操作

**使用方法：**

```bash
# 安装
clawhub install obsidian

# 设置默认笔记库
obsidian-cli config set vault "/path/to/vault"

# 搜索笔记
obsidian-cli search "关键词"

# 创建笔记
obsidian-cli new "笔记标题"
```

**适用场景：** 知识管理、笔记整理、第二大脑

---

### 5. Weather 🌤️

**说明：** 获取天气信息和预报，无需 API 密钥。

**功能：**
- 当前天气
- 未来预报
- 多地点查询
- 详细气象数据

**使用方法：**

```bash
# 安装
clawhub install weather

# 查询天气
curl wttr.in/Beijing
curl wttr.in/Shanghai?format=3

# 或在对话中直接问
"北京今天天气怎么样？"
"上海未来三天天气"
```

**适用场景：** 日常查询、出行规划、天气提醒

---

### 6. Himalaya 📧

**说明：** 通过 CLI 管理电子邮件（IMAP/SMTP）。

**功能：**
- 列出/读取邮件
- 写/回复/转发邮件
- 搜索和组织邮件
- 多账户支持

**使用方法：**

```bash
# 安装
clawhub install himalaya

# 配置账户
vim ~/.config/himalaya/config.toml

# 使用
himalaya list
himalaya read 123
himalaya send --to user@example.com --subject "标题" --body "内容"
```

**适用场景：** 邮件管理、批量处理、自动化回复

---

### 7. Summarize 🧾

**说明：** 总结 URL、播客和本地文件的文本/转录。

**功能：**
- 网页内容总结
- 视频/播客转录
- 文档摘要
- 关键信息提取

**使用方法：**

```bash
# 安装
clawhub install summarize

# 总结网页
summarize https://example.com/article

# 总结视频
summarize https://youtube.com/watch?v=xxx

# 总结文件
summarize document.pdf
```

**适用场景：** 内容消费、信息提取、快速阅读

---

### 8. Agent Browser 🌐

**说明：** AI 代理浏览器自动化，基于 Playwright。

**功能：**
- 网页导航
- 元素交互（点击/输入/拖拽）
- 截图和录像
- 表单填写
- 数据抓取
- JavaScript 执行

**使用方法：**

```bash
# 安装
clawhub install agent-browser

# 在对话中使用
"打开百度搜索 OpenClaw"
"截图这个网页"
"填写这个表单"
```

**适用场景：** 网页自动化、测试、数据采集、研究

---

### 9. Apple Notes 📝

**说明：** 在 macOS 上管理 Apple Notes（备忘录）。

**功能：**
- 创建/查看/编辑笔记
- 搜索笔记
- 移动/删除笔记
- 文件夹管理
- 导出笔记

**使用方法：**

```bash
# 安装
clawhub install apple-notes

# 使用 memo CLI
memo list
memo new "笔记标题"
memo search "关键词"
memo edit note-id
```

**适用场景：** 苹果生态用户、快速笔记、信息收集

---

### 10. Video Frames 🎬

**说明：** 使用 ffmpeg 从视频中提取帧或片段。

**功能：**
- 提取视频帧
- 裁剪视频片段
- 批量处理
- 多种输出格式

**使用方法：**

```bash
# 安装
clawhub install video-frames

# 提取帧
ffmpeg -i video.mp4 -vf fps=1 frame_%04d.png

# 裁剪片段
ffmpeg -i video.mp4 -ss 00:01:00 -to 00:02:00 -c copy clip.mp4
```

**适用场景：** 视频编辑、内容分析、缩略图生成

---

## 更多技能

ClawHub 还有更多优秀技能：

- **find-skills** - 发现和安装技能
- **healthcheck** - 系统安全加固
- **peekaboo** - macOS UI 自动化
- **notion** - Notion 集成
- **slack** - Slack 集成
- **discord** - Discord 集成
- **spotify-player** - Spotify 控制
- **eightctl** - Eight Sleep 智能床垫控制
- **wacli** - WhatsApp 消息管理

访问 [ClawHub](https://clawhub.com) 探索更多！

## 技能开发

想创建自己的技能？使用 **skill-creator**：

```bash
clawhub install skill-creator
```

查看文档：[ClawHub 开发指南](https://docs.openclaw.ai/skills)

---

*持续学习，不断进化！🦞*
