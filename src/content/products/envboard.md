---
title: EnvBoard
summary: macOS 原生工具：可视化管理 ~/.zshrc 环境变量，安全编辑，保存后清晰生效。
status: active
repo: https://github.com/1989tianlong/EnvBoard
cover: ../../assets/products/envboard.png
video: /products/envboard/narration.mp4
gallery:
  - ../../assets/products/envboard-promo-01.png
  - ../../assets/products/envboard-promo-02.png
  - ../../assets/products/envboard-promo-03.png
order: 90
---

手改 `~/.zshrc` 容易改坏、改了不知道生没生效、密钥散落在各处。EnvBoard 用 SwiftUI 把这件事变成一个干净的原生界面：结构化展示 `export KEY=value`，增删改、注释禁用、密钥脱敏一目了然。

## 核心功能

- 环境变量新增 / 编辑 / 删除 / 注释禁用，密钥默认脱敏显示
- 外科手术式写回，不破坏文件其余部分
- 保存前自动备份到 `~/.envboard/backups/`，可预览、一键回滚
- 原子写入 + `zsh -n` 语法检查，「保存并生效」附抽样验证
- 原始文件只读预览，诊断重复定义与 PATH 问题

## 安装

```bash
git clone https://github.com/1989tianlong/EnvBoard.git
cd EnvBoard
swift run

# 打包 .app
./Scripts/make_app.sh
cp -R .build/release/EnvBoard.app ~/Applications/
```

要求 macOS 14+，Swift 6 工具链。完全离线、无联网、无埋点，MIT 开源。
