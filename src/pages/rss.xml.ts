import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE_DESCRIPTION, SITE_TITLE } from '../consts';
import { diaryPath, getPublishedDiary } from '../lib/content';

export async function GET(context: APIContext) {
  const diary = await getPublishedDiary();
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site!,
    items: diary.map((entry) => ({
      title: entry.data.title,
      description: entry.data.description ?? entry.data.title,
      pubDate: entry.data.date,
      link: `${import.meta.env.BASE_URL}${diaryPath(entry)}`,
      categories: [entry.data.authorship, ...entry.data.tags],
    })),
    customData: `<language>zh-CN</language>`,
  });
}
