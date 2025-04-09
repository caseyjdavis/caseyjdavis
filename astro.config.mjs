import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import pagefind from "astro-pagefind";
import starlightImageZoom from "starlight-image-zoom";

// https://astro.build/config
export default defineConfig({
  site: "https://www.caseyjdavis.com",
  base: "/",
  integrations: [tailwind(), sitemap(), mdx(), pagefind()],
    markdown: {
    shikiConfig: {
      theme: "css-variables",
    },
    plugins: [starlightImageZoom()],
  },
});
