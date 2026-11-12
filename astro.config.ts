import path from 'path';
import { fileURLToPath } from 'url';

import { defineConfig, fontProviders } from 'astro/config';

import { unified } from '@astrojs/markdown-remark';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import icon from 'astro-icon';
import compress from 'astro-compress';
import type { AstroIntegration } from 'astro';

import astrowind from './vendor/integration';

import { readingTimeRemarkPlugin, responsiveTablesRehypePlugin } from './src/utils/frontmatter';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const hasExternalScripts = false;
const whenExternalScripts = (items: (() => AstroIntegration) | (() => AstroIntegration)[] = []) =>
  hasExternalScripts ? (Array.isArray(items) ? items.map((item) => item()) : [items()]) : [];

export default defineConfig({
  output: 'static',

  // Prefetch links as they enter the viewport for snappier navigations
  // (works together with <ClientRouter />, which enables prefetch by default).
  // 'hover': link yalnız üzerine gelince/dokununca önceden yüklenir. 'viewport' ana sayfada
  // ekrandaki her linki (16+ sayfa) indiriyordu; yavaş mobil ağda ilk yükleme 11 sn'ye çıkıyordu.
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },

  // CSS'i sayfaya göm: ayrı .css isteği ilk boyamayı (FCP/LCP) engelliyordu (~21 KB).
  build: {
    inlineStylesheets: 'always',
  },

  // Native Fonts API: self-hosts + subsets + preloads Inter and generates
  // metric-adjusted fallbacks. Injected via <Font /> in Layout.astro and
  // consumed through the `--font-inter` CSS variable in CustomStyles.astro.
  fonts: [
    {
      // Inter, KENDİ alt kümemizden (src/assets/fonts). Fontsource'un latin-ext dosyası Vietnamca vb.
      // dahil 133 KB'tı; Türkçe için yalnız Latin Extended-A (ğ, ş, İ…) gerekiyor. Ağırlık ekseni de
      // sitede kullanılan 300–800 aralığına kısıldı. Toplam 206 KB → 76 KB; başlık (LCP) font
      // gelince yeniden çizildiği için bu doğrudan LCP'yi kısaltır.
      // 'latin-ext' (Ext-A) ŞART: yalnız latin yüklenirse ğ/ş/İ sistem fontuna düşer ('yükümlülüǧünüz').
      // Yeniden üretim: fonttools varLib.instancer wght=300:800 + pyftsubset (unicode aralıkları aşağıda).
      provider: fontProviders.local(),
      name: 'Inter',
      cssVariable: '--font-inter',
      fallbacks: ['sans-serif'],
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/inter-latin.woff2'],
            weight: '300 800',
            style: 'normal',
            display: 'swap',
            unicodeRange: [
              'U+0000-00FF',
              'U+0131',
              'U+0152-0153',
              'U+02BB-02BC',
              'U+02C6',
              'U+02DA',
              'U+02DC',
              'U+0304',
              'U+0308',
              'U+0329',
              'U+2000-206F',
              'U+20AC',
              'U+2122',
              'U+2191',
              'U+2193',
              'U+2212',
              'U+2215',
              'U+FEFF',
              'U+FFFD',
            ],
          },
          {
            src: ['./src/assets/fonts/inter-latin-ext-a.woff2'],
            weight: '300 800',
            style: 'normal',
            display: 'swap',
            unicodeRange: ['U+0100-017F'],
          },
        ],
      },
    },
  ],

  integrations: [
    sitemap({
      // noindex sayfalar sitemap'e girmemeli: Google'a "bunu dizine al" deyip
      // sayfada "alma" demek çelişkili sinyal.
      filter: (sayfa) => !sayfa.includes('/tesekkurler'),
    }),
    mdx(),
    icon({
      // Local SVG icons (used as <Icon name="file-name" />) live next to the other assets.
      iconDir: 'src/assets/icons',
      include: {
        tabler: ['*'],
        'flat-color-icons': [
          'template',
          'gallery',
          'approval',
          'document',
          'advertising',
          'currency-exchange',
          'voice-presentation',
          'business-contact',
          'database',
        ],
      },
    }),

    ...whenExternalScripts(() =>
      partytown({
        config: { forward: ['dataLayer.push'] },
      })
    ),

    compress({
      // csso off on purpose: its parser doesn't understand the media range
      // syntax Tailwind v4 emits for breakpoints (`@media (width>=48rem)`) and
      // silently drops every one of those blocks — the site then renders as if
      // all `md:`/`lg:` classes were missing. lightningcss parses it correctly.
      CSS: { csso: false, lightningcss: { minify: true } },
      HTML: {
        'html-minifier-terser': {
          removeAttributeQuotes: false,
        },
      },
      Image: false,
      JavaScript: true,
      SVG: false,
      Logger: 1,
    }),

    astrowind({
      config: './src/config.yaml',
    }),
  ],

  image: {
    // Astro's default Sharp service handles local images.
    //
    // Most remote CDN images (Unsplash, Cloudinary, Imgix…) are routed by
    // src/components/common/Image.astro through `unpic`, which rewrites the
    // URL with CDN-side query parameters and serves it straight from the
    // provider — Astro never downloads it, so they don't need to be listed.
    //
    // `domains` only matters for remote URLs that fall through to Astro's
    // native <Image /> (i.e. providers Unpic can't detect, like Pixabay).
    // Listed entries are authorized to be processed by Sharp.
    // Unsplash is listed so post covers can be rendered as real 1200×626 Open Graph images.
    domains: ['cdn.pixabay.com', 'images.unsplash.com'],

    // Emit responsive styles for the native <Image layout=…> used by
    // src/components/common/Image.astro (local images). Utility classes on
    // each usage still win, since these styles use low-specificity selectors.
    responsiveStyles: true,
  },

  markdown: {
    processor: unified({
      remarkPlugins: [readingTimeRemarkPlugin],
      rehypePlugins: [responsiveTablesRehypePlugin],
    }),
    shikiConfig: {
      // Code blocks follow the site theme; see the `.astro-code` rules in tailwind.css.
      themes: { light: 'github-light', dark: 'github-dark' },
    },
  },

  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});
