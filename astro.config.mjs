// @ts-check
import { defineConfig } from 'astro/config';

// Primary host: Vercel (ytlhacks-projects), custom domain claw.omniquest.fun.
// GitHub Pages project path is no longer the default base.
export default defineConfig({
  site: 'https://claw.omniquest.fun',
  base: '/',
  trailingSlash: 'always',
});
