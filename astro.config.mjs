// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // Kanonik adres, sitemap ve schema.org URL'leri buradan türüyor.
  site: "https://dijitalosgb.com",
  trailingSlash: "always",
  integrations: [sitemap()],
  build: { format: "directory" },
});
