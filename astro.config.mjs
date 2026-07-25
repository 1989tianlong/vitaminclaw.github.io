// @ts-check
import { defineConfig } from 'astro/config';

// Primary host: Vercel (ytlhacks-projects).
// GitHub Pages project path is no longer the default base.
export default defineConfig({
  site: 'https://vitaminclaw.vercel.app',
  base: '/',
  trailingSlash: 'always',
});
