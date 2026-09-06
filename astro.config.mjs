// @ts-check
import { defineConfig } from 'astro/config';

// Primary host: Vercel (ytlhacks-projects), custom domain vitaminclaw.omniquest.fun.
// GitHub Pages project path is no longer the default base.
export default defineConfig({
  site: 'https://vitaminclaw.omniquest.fun',
  base: '/',
  trailingSlash: 'always',
});
