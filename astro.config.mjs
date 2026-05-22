import mdx from "@astrojs/mdx";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";
import expressiveCode from "astro-expressive-code";

export default defineConfig({
  site: "https://lt-20260522-042729105-serene-ink-01-9105-e15f80e8.pages.dev/",
  vite: { plugins: [tailwindcss()] },
  integrations: [expressiveCode(), mdx(), sitemap()],
});
