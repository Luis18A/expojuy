import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// En dev: base = '/' para que los links funcionen en localhost
// En producción (build): base = '/prueba1' para GitHub Pages
const isProd = process.env.NODE_ENV === 'production';

// https://astro.build/config
export default defineConfig({
  site: 'https://luis18a.github.io',
  base: isProd ? '/prueba1' : '/',
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
