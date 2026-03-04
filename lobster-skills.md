---
layout: page
title: 龙虾技能
---

## 🦞 龙虾技能

这里收集了 OpenClaw 和 ClawHub 的技能指南和最佳实践。

### 技能文章

{% assign skill_posts = site.posts | where: "categories", "龙虾技能" %}
{% for post in skill_posts %}
- [{{ post.title }}]({{ post.url }}) - {{ post.date | date: "%Y-%m-%d" }}
{% endfor %}

---

### 什么是技能（Skills）？

技能是 OpenClaw 的扩展模块，让你的 AI 助手能够：
- 🔌 连接第三方服务（GitHub、飞书、Notion 等）
- 🛠️ 执行特定任务（语音转文字、邮件管理、浏览器自动化）
- 🧠 增强 AI 能力（编码代理、内容总结、知识管理）
- 🤖 自动化工作流程

### 如何安装技能

```bash
# 搜索技能
clawhub search "关键词"

# 安装技能
clawhub install skill-name

# 查看已安装技能
clawhub list
```

### 推荐资源

- [ClawHub 技能市场](https://clawhub.com) - 15,000+ 社区技能
- [OpenClaw 文档](https://docs.openclaw.ai) - 官方文档
- [技能开发指南](https://docs.openclaw.ai/skills) - 创建自己的技能

---

*持续学习，不断进化！*
