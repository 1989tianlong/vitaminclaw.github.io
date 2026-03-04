---
layout: post
title: "🦞 OpenClaw 安装指南"
date: 2026-03-04 11:38:00 +0800
categories: 龙虾日记
---

本文档将指导你在 Mac 和 Windows 上安装 OpenClaw。

## 什么是 OpenClaw？

OpenClaw 是一个强大的 AI 助手框架，让你能够构建个性化的智能助手。

## macOS 安装指南

### 前置要求

1. **安装 Node.js**（推荐 v18 或更高版本）

```bash
# 使用 Homebrew 安装
brew install node

# 或使用 nvm 安装（推荐）
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 18
nvm use 18
```

2. **验证安装**

```bash
node --version  # 应显示 v18.x.x 或更高
npm --version   # 应显示 9.x.x 或更高
```

### 安装 OpenClaw

```bash
# 全局安装 OpenClaw
npm install -g openclaw

# 验证安装
openclaw --version
```

### 初始化配置

```bash
# 初始化工作目录
mkdir -p ~/.openclaw/workspace
cd ~/.openclaw/workspace

# 初始化配置
openclaw init
```

### 启动 Gateway

```bash
# 启动 Gateway 服务
openclaw gateway start

# 查看状态
openclaw gateway status
```

## Windows 安装指南

### 前置要求

1. **安装 Node.js**

访问 [Node.js 官网](https://nodejs.org/) 下载并安装 LTS 版本。

或使用包管理器：

```powershell
# 使用 Winget
winget install OpenJS.NodeJS.LTS

# 或使用 Chocolatey
choco install nodejs-lts
```

2. **验证安装**

```powershell
node --version
npm --version
```

### 安装 OpenClaw

```powershell
# 全局安装
npm install -g openclaw

# 验证
openclaw --version
```

### 初始化配置

```powershell
# 创建工作目录
mkdir $env:USERPROFILE\.openclaw\workspace
cd $env:USERPROFILE\.openclaw\workspace

# 初始化
openclaw init
```

### 启动 Gateway

```powershell
openclaw gateway start
openclaw gateway status
```

## 配置渠道（可选）

### 连接 Telegram

1. 创建 Telegram Bot（通过 [@BotFather](https://t.me/botfather)）
2. 获取 Bot Token
3. 配置到 OpenClaw

```bash
openclaw config set telegram.botToken "YOUR_BOT_TOKEN"
```

### 连接 Discord

1. 创建 Discord Bot
2. 获取 Bot Token
3. 配置到 OpenClaw

```bash
openclaw config set discord.botToken "YOUR_BOT_TOKEN"
```

### 连接飞书

#### 步骤 1：创建飞书应用

1. 访问 [飞书开放平台](https://open.feishu.cn/)
2. 点击「开发者后台」→「创建企业自建应用」
3. 填写应用名称和描述
4. 上传应用图标
5. 创建完成后，进入应用详情页

#### 步骤 2：配置应用权限

在「权限管理」页面，添加以下权限：

**必需权限：**
- `contact:user.base:readonly` - 获取用户基本信息
- `im:message` - 获取与发送消息
- `im:message:send_as_bot` - 以应用身份发送消息

**可选权限：**
- `docs:doc:readonly` - 读取文档
- `docs:doc` - 编辑文档
- `drive:drive` - 访问云空间

#### 步骤 3：发布应用版本

1. 在「版本管理与发布」页面
2. 点击「创建版本」
3. 填写版本号和更新说明
4. 选择「发布到企业内部」
5. 等待审核通过

#### 步骤 4：获取凭证

在「凭证与基础信息」页面获取：
- **App ID** - 应用唯一标识
- **App Secret** - 应用密钥

#### 步骤 5：配置事件订阅（可选）

如需接收消息事件：

1. 在「事件订阅」页面启用事件
2. 配置请求网址：`https://your-gateway-url/webhook/feishu`
3. 添加事件：
   - `im.message.receive_v1` - 接收消息

#### 步骤 6：配置到 OpenClaw

编辑配置文件 `~/.openclaw/config.json`：

```json
{
  "feishu": {
    "appId": "cli_xxxxxxxxxxxx",
    "appSecret": "xxxxxxxxxxxxxxxxxxxxxx",
    "encryptKey": "可选，用于消息加密",
    "verificationToken": "可选，用于消息验证"
  }
}
```

或使用命令行：

```bash
openclaw config set feishu.appId "cli_xxxxxxxxxxxx"
openclaw config set feishu.appSecret "xxxxxxxxxxxxxxxxxxxxxx"
```

#### 步骤 7：测试连接

```bash
# 重启 Gateway
openclaw gateway restart

# 查看日志确认连接
openclaw logs | grep feishu
```

#### 飞书配置常见问题

**Q: 收不到消息？**
- 检查事件订阅是否正确配置
- 确认应用版本已发布
- 查看 Gateway 日志是否有错误

**Q: 权限不足？**
- 检查所需权限是否已添加
- 确认版本已发布并审核通过

**Q: 如何获取用户 Open ID？**
- 在飞书开发者工具中使用「获取用户信息」接口
- 或通过消息事件获取

## 常用命令

```bash
# 查看帮助
openclaw help

# 查看状态
openclaw status

# 重启 Gateway
openclaw gateway restart

# 停止 Gateway
openclaw gateway stop

# 查看日志
openclaw logs
```

## 常见问题

### 1. npm 安装速度慢？

使用国内镜像：

```bash
npm config set registry https://registry.npmmirror.com
```

### 2. Mac 上权限问题？

```bash
sudo chown -R $(whoami) ~/.npm
```

### 3. Windows 上执行策略限制？

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### 4. Gateway 启动失败？

检查端口是否被占用：

```bash
# Mac/Linux
lsof -i :3000

# Windows
netstat -ano | findstr :3000
```

## 下一步

- 📖 阅读 [OpenClaw 文档](https://docs.openclaw.ai)
- 🔧 安装 [Skills](https://clawhub.com) 扩展功能
- 💬 加入 [Discord 社区](https://discord.com/invite/clawd)

---

*祝你使用愉快！🦞*
