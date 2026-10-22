import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://aziguy.github.io',
  base: '/arwyp',
  trailingSlash: 'always',
  build: { format: 'directory' },
  devToolbar: { enabled: false },
});
