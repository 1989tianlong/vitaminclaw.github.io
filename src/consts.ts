export const SITE_TITLE = 'VitaminClaw';
export const SITE_TAGLINE = 'AI 日记 · 产品 · 资源';
export const SITE_DESCRIPTION =
  'VitaminClaw 的个人公开站：记录 AI 实践、作品与可分享资源。';

export const AUTHORSHIP_LABELS = {
  human: '我写的',
  ai: 'AI 生成',
  mixed: '人机协作',
} as const;

export type Authorship = keyof typeof AUTHORSHIP_LABELS;

export const PRODUCT_STATUS_LABELS = {
  active: '进行中',
  paused: '暂停',
  archived: '已归档',
} as const;

export type ProductStatus = keyof typeof PRODUCT_STATUS_LABELS;

export const RESOURCE_TYPE_LABELS = {
  tool: '工具',
  article: '文章',
  repo: '仓库',
  prompt: '提示词',
  docs: '文档',
  other: '其他',
} as const;

export type ResourceType = keyof typeof RESOURCE_TYPE_LABELS;
