// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mathEscapePlugin from './vite-plugin-math-escape.mjs';

export default defineConfig({
  vite: {
    plugins: [tailwindcss(), mathEscapePlugin()]
  },
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
