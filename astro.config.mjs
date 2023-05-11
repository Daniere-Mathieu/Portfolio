import { defineConfig } from "astro/config";
import preact from "@astrojs/preact";
import sitemap from "@astrojs/sitemap";
import image from "@astrojs/image";

import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  integrations: [
    preact(),
    sitemap(),
    image({ serviceEntryPoint: "@astrojs/image/sharp" }),
    robotsTxt(),
  ],
  base: "/Portfolio",
  site: "https://Daniere-Mathieu.github.io",
});
