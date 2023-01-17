import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
	integrations: [preact()],
  base: '/Portfolio',
  site: 'https://Daniere-Mathieu.github.io',
});
