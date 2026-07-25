---
title: "日记探索 · 2026-05-25"
date: 2026-05-25
authorship: ai
authorshipNote: "由 AI 对当日日记逐条做第一性原理拆解与实践指导。"
tags: [日记探索]
---

今日日记共包含3个条目：Simon Willison（开源工具开发者）、aholo-viewer（3DGS渲染器）、谢赛宁（计算机视觉研究者）。

---

## 1. Simon Willison - Datasette & LLM

### 来源/上下文
- 日记中记录了"Datasette，llm的创始人"
- 主页：https://aholojs.dev/zh-CN/（这个链接指向aholo，可能是记错了地址）
- Simon Willison 是英国开发者，Django 框架的联合创始人之一

### 简要介绍
Simon Willison 是开源界的知名人物，近年来专注于两个主要项目：

**Datasette**
- GitHub: https://github.com/simonw/datasette
- ⭐ 11,099 stars | 842 forks
- 许可证: Apache 2.0
- 定位：用于探索和发布数据的开源工具
- 核心功能：将任意形状/规模的 SQLite 数据发布为交互式可探索的网站和 API
- 目标用户：数据记者、策展人、档案管理员、政府科学家、研究人员
- 特色：无需编码即可快速将数据变成可浏览的 Web 应用

**LLM**
- GitHub: https://github.com/simonw/llm
- ⭐ 11,929 stars | 858 forks
- 许可证: Apache 2.0
- 定位：命令行工具和 Python 库，用于与大语言模型交互
- 支持模型：OpenAI、Anthropic Claude、Google Gemini、Meta Llama，以及本地运行模型
- 核心功能：
  - 命令行运行 prompt
  - 将 prompt 和响应存储在 SQLite
  - 生成和存储 embeddings
  - 从文本和图像中提取结构化内容
  - 赋予模型执行工具的能力
- 安装方式：pip / Homebrew / pipx / uv

### 值得深入研究的方向
- Datasette Lite（WebAssembly 版本，可在浏览器中运行）
- Datasette 与 LLM 的结合使用（LLM 可以操作 Datasette 数据库）
- Datasette 插件生态

### 对闫天龙的价值
- **数据探索**：如果需要快速将数据变成可交互的 Web 界面，Datasette 是极佳选择
- **AI 开发**：LLM 提供了命令行和 Python 两种交互方式，适合快速原型开发和自动化脚本
- **工程标杆**：Simon Willison 的项目以文档完善、设计优雅著称，是学习如何构建开发者工具的好范本

---

## 2. aholo-viewer - 高性能 3DGS 渲染器

### 来源/上下文
- Github: https://github.com/manycoretech/aholo-viewer
- 主页: https://aholojs.dev/

### 简要介绍
- ⭐ 129 stars | 11 forks
- 语言: TypeScript
- 许可证: MIT
- 描述: "A high performance 3DGS renderer"（高性能 3D Gaussian Splatting 渲染器）
- 主题标签: 3d, 3d-gaussian-splatting, 3dgs, 3dgs-lod

**项目结构**：
- `packages/renderer/` - 渲染器 TypeScript 源码包
- `website/` - Astro 网站（文档、示例、playground）
- `external/egs-core` - 上游依赖
- `external/splat-transform` - 工作区依赖

**核心能力**：
- 3D Gaussian Splatting (3DGS) 是一种新兴的 3D 表示方法，能高效渲染 NeRF 类的辐射场
- 支持 LOD (Level of Detail)
- 提供在线 Playground

### 值得深入研究的方向
- 3DGS vs NeRF vs Mesh 的技术对比
- 实时渲染 3D 场景的前沿技术
- 在 Web 端部署 3DGS 的工程挑战

### 对闫天龙的价值
- **3D/AR 方向**：如果涉及 AR/VR、3D 内容创作、数字化身等方向，3DGS 是当前热门技术
- **前端开发**：纯 TypeScript + WebGL 实现，适合学习 Web 3D 开发
- **产品创意**：可探索将 3DGS 用于电商展示、虚拟试穿、房产预览等场景

---

## 3. 谢赛宁 (Saining Xie) - FAIR 计算机视觉研究者

### 来源/上下文
- 日记仅记录"谢赛宁"三个字和时间
- 21:11 的记录可能是看到了他的某个研究或动态

### 简要介绍
谢赛宁是 Facebook AI Research (FAIR) 的研究科学家，纽约大学 (NYU) 博士，师从 Yann LeCun 的学生。

**代表性工作**：
1. **ConvNeXt** (2022)
   - 论文: "A ConvNet of the 2020s"
   - 作者: Zhuang Liu, Hanzi Mao, Chao-Yuan Wu, Christoph Feichtenhofer, Trevor Darrell, Saining Xie
   - 贡献：将 ResNet 重新设计为现代架构，证明纯卷积网络在 Vision 任务上可以达到甚至超越 Vision Transformer 的性能
   - 影响：重燃了社区对 ConvNet 的兴趣，是 Vision 领域的里程碑工作

2. 其他工作涉及：
   - Vision Transformer (ViT) 相关研究
   - 图像/视频理解
   - 神经网络架构搜索

**相关资源**：
- GitHub 上有多个关于谢赛宁研究方法和思维方式的 skill/笔记
- 与张小珺有 7 小时马拉松式访谈

### 值得深入研究的方向
- ConvNeXt 的设计哲学和技术细节
- Vision Transformer vs ConvNet 的演进脉络
- 如何培养 research taste（研究品味）

### 对闫天龙的价值
- **AI 趋势洞察**：谢赛宁的研究方向代表 CV 领域的前沿
- **学习标杆**：他的工作展示了如何从工程角度优化经典架构、如何提出有影响力的研究问题
- **思维方法**：网上有关于他研究品味和问题框架方法的学习资料

---

## 关键洞察总结

1. **开发者工具链**：Simon Willison 的 Datasette + LLM 提供了一套从数据到 AI 的完整工具链思考方式——先用 Datasette 快速探索和发布数据，再用 LLM 进行 AI 处理

2. **3D 内容创作爆发前夜**：aholo-viewer 代表的 3DGS 技术正在降低 3D 内容门槛，随着 Apple Vision Pro 等设备普及，Web 端 3D 渲染可能成为下一个爆发点

3. **CV 范式更迭**：谢赛宁的 ConvNeXt 工作标志着 Vision 领域"复古创新"的趋势——经典架构经过现代优化可以重新焕发活力，这对产品开发的启示是：不要盲目追新，经典技术经过恰当改进往往更实用

---

*探索完成于 2026-05-25*

