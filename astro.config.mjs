import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// En Vercel / Dominios personalizados (expojuy-five.vercel.app / expojuy.com): base = '/'
const basePath = process.env.ASTRO_BASE_PATH || '/';

// https://astro.build/config
export default defineConfig({
  site: 'https://expojuy-five.vercel.app',
  base: basePath,
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  output: 'static',
  compressHTML: true,
  build: {
    assets: '_assets',
  },
});
