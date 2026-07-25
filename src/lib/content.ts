import { getCollection, type CollectionEntry } from 'astro:content';

export async function getPublishedDiary() {
  const entries = await getCollection('diary', ({ data }) => !data.draft);
  return entries.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getPublishedProducts() {
  const entries = await getCollection('products', ({ data }) => !data.draft);
  return entries.sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title, 'zh-CN'));
}

export async function getPublishedResources() {
  const entries = await getCollection('resources', ({ data }) => !data.draft);
  return entries.sort((a, b) => a.data.title.localeCompare(b.data.title, 'zh-CN'));
}

export function diaryPath(entry: CollectionEntry<'diary'>) {
  return `diary/${entry.id}/`;
}

export function productPath(entry: CollectionEntry<'products'>) {
  return `products/${entry.id}/`;
}

export function resourcePath(entry: CollectionEntry<'resources'>) {
  return `resources/${entry.id}/`;
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('zh-CN', {
    timeZone: 'Asia/Shanghai',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}
