import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { readFileSync, writeFileSync, mkdirSync } from "fs";

const ROOT = new URL(".", import.meta.url).pathname.replace(/\/$/, "");

/**
 * Vite plugin: after every production build, generates a static HTML file
 * per article (ES + EN) and per guide (ES + EN) with correct OG/Twitter/
 * canonical meta tags hard-coded in the markup.
 *
 * Social-media crawlers (Facebook, Twitter, WhatsApp …) don't execute JS,
 * so they only see index.html — which has generic fallback OG tags.
 * With this plugin each slug gets its own HTML file (served by Vercel as a
 * clean URL thanks to `cleanUrls: true`) that already has the right tags.
 * Regular users get the exact same React SPA — just with better pre-filled
 * meta.
 */
const generateOgHtml = () => ({
  name: "generate-og-html",
  apply: "build",
  async closeBundle() {
    const ORIGIN = "https://www.eltechoencima.com";

    // — Load article + guide data (both files have zero imports) —
    const { ARTICLES } = await import(`${ROOT}/src/data/articles.js`);
    const { GUIDES }   = await import(`${ROOT}/src/data/guides.js`);

    const g = (field, lang) => {
      if (!field) return "";
      if (typeof field === "string") return field;
      return field[lang] ?? field.es ?? field.en ?? "";
    };

    const esc = (s) => s.replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    // Read the compiled index.html once
    const template = readFileSync(`${ROOT}/dist/index.html`, "utf-8");

    const patch = (html, { title, description, url, image, lang }) => {
      const locale   = lang === "en" ? "en_GB" : "es_ES";
      const fullTitle = `${esc(title)} · ElTechoEncima`;
      const safeDesc  = esc(description);
      const safeImg   = image || `${ORIGIN}/og-default.jpg`;

      return html
        // html[lang]
        .replace(/(<html[^>]*lang=")[^"]*(")/,         `$1${lang}$2`)
        // <title>
        .replace(/<title>[^<]*<\/title>/,              `<title>${fullTitle}</title>`)
        // meta description
        .replace(/(<meta name="description" content=")[^"]*(")/,          `$1${safeDesc}$2`)
        // canonical
        .replace(/(<link rel="canonical" href=")[^"]*(")/,                `$1${url}$2`)
        // OG
        .replace(/(<meta property="og:title" content=")[^"]*(")/,        `$1${fullTitle}$2`)
        .replace(/(<meta property="og:description" content=")[^"]*(")/,  `$1${safeDesc}$2`)
        .replace(/(<meta property="og:url" content=")[^"]*(")/,          `$1${url}$2`)
        .replace(/(<meta property="og:type" content=")[^"]*(")/,         `$1article$2`)
        .replace(/(<meta property="og:locale" content=")[^"]*(")/,       `$1${locale}$2`)
        .replace(/(<meta property="og:image" content=")[^"]*(")/,        `$1${safeImg}$2`)
        .replace(/(<meta property="og:image:alt" content=")[^"]*(")/,    `$1${esc(title)}$2`)
        // Twitter
        .replace(/(<meta name="twitter:title" content=")[^"]*(")/,       `$1${fullTitle}$2`)
        .replace(/(<meta name="twitter:description" content=")[^"]*(")/,`$1${safeDesc}$2`);
    };

    const write = (dir, filename, html) => {
      mkdirSync(`${ROOT}/dist/${dir}`, { recursive: true });
      writeFileSync(`${ROOT}/dist/${dir}/${filename}.html`, html, "utf-8");
    };

    // — Articles —
    for (const a of ARTICLES) {
      const esTitle = g(a.title, "es");
      const enTitle = g(a.title, "en");
      const esDesc  = g(a.metaDescription, "es");
      const enDesc  = g(a.metaDescription, "en");

      write(".",  a.slug,   patch(template, { title: esTitle, description: esDesc, url: `${ORIGIN}/${a.slug}`,        image: a.heroImage, lang: "es" }));
      write("en", a.enSlug, patch(template, { title: enTitle, description: enDesc, url: `${ORIGIN}/en/${a.enSlug}`,  image: a.heroImage, lang: "en" }));
    }

    // — Guides —
    for (const g_ of GUIDES) {
      const esTitle = g(g_.title, "es");
      const enTitle = g(g_.title, "en");
      const esDesc  = g(g_.subtitle, "es");
      const enDesc  = g(g_.subtitle, "en");
      const img     = g_.heroImage;

      write("guia",     g_.slug,   patch(template, { title: esTitle, description: esDesc, url: `${ORIGIN}/guia/${g_.slug}`,        image: img, lang: "es" }));
      write("en/guide", g_.enSlug, patch(template, { title: enTitle, description: enDesc, url: `${ORIGIN}/en/guide/${g_.enSlug}`,  image: img, lang: "en" }));
    }

    console.log(`\x1b[32m✓\x1b[0m OG HTML: ${ARTICLES.length * 2} article pages + ${GUIDES.length * 2} guide pages`);
  },
});

export default defineConfig({
  plugins: [react(), generateOgHtml()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@config": resolve(__dirname, "src/config"),
      "@data": resolve(__dirname, "src/data"),
      "@utils": resolve(__dirname, "src/utils"),
      "@styles": resolve(__dirname, "src/styles"),
      "@hooks": resolve(__dirname, "src/hooks"),
      "@components": resolve(__dirname, "src/components"),
      "@i18n": resolve(__dirname, "src/i18n"),
    },
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
        },
      },
    },
  },
});
