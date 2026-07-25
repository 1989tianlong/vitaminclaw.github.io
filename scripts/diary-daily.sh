#!/bin/bash
# 每日日记同步：源目录 → AI 日记 → 构建 → 提交 → 部署。
# 由 launchd（com.vitaminclaw.diary-sync）每天调用；无变化时直接退出。
set -euo pipefail
export PATH="/opt/homebrew/bin:/usr/local/bin:$PATH"

cd /Users/yantianlong/vibe/vitaminclaw.github.io

node scripts/sync-diary.mjs

if [ -z "$(git status --porcelain -- src/content/diary)" ]; then
  echo "no diary changes, done"
  exit 0
fi

npm run build
git add src/content/diary
git commit -m "sync: 日记探索 $(date +%F)"
git push
vercel --prod --yes
