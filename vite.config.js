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

    const patch = (html, { title, description, url, image, lang, preloadImage }) => {
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
        .replace(/(<meta name="twitter:description" content=")[^"]*(")/,`$1${safeDesc}$2`)
        // LCP image preload — injected just before </head>
        .replace(/<\/head>/, preloadImage
          ? `  <link rel="preload" as="image" fetchpriority="high" href="${preloadImage}">\n  </head>`
          : "</head>");
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

      write(".",  a.slug,   patch(template, { title: esTitle, description: esDesc, url: `${ORIGIN}/${a.slug}`,        image: a.heroImage, lang: "es", preloadImage: a.heroImage }));
      write("en", a.enSlug, patch(template, { title: enTitle, description: enDesc, url: `${ORIGIN}/en/${a.enSlug}`,  image: a.heroImage, lang: "en", preloadImage: a.heroImage }));
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

    // ── Sitemap ────────────────────────────────────────────────────────────────
    // Inline slugifyEvent (mirrors src/utils/deepLinks.js — no @config import needed)
    const norm = (str) =>
      str.normalize("NFD")
         .replace(/[\u0300-\u036f]/g, "")
         .toLowerCase()
         .replace(/[^a-z0-9]+/g, "-")
         .replace(/^-+|-+$/g, "");
    const slugifyEvent = (name, city) => `${norm(g(name, "es"))}-${norm(g(city, "es"))}`;
    const slugifyEventEn = (name, city) => `${norm(g(name, "en") || g(name, "es"))}-${norm(g(city, "en") || g(city, "es"))}`;

    const TODAY = new Date().toISOString().slice(0, 10);

    // url entry with per-URL lastmod and optional image:image tag
    const urlEntry = ({ loc, es, en, freq = "monthly", priority = "0.9", lastmod = TODAY, image }) => {
      const imgTag = image
        ? `\n    <image:image><image:loc>${image}</image:loc></image:image>`
        : "";
      return `
  <url>
    <loc>${ORIGIN}${loc}</loc>
    <xhtml:link rel="alternate" hreflang="es" href="${ORIGIN}${es}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${ORIGIN}${en}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${ORIGIN}${es}"/>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${freq}</changefreq>
    <priority>${priority}</priority>${imgTag}
  </url>`;
    };

    const URLSET_OPEN = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">`;
    const URLSET_CLOSE = `\n</urlset>`;

    const writeSitemap = (filename, entries) => {
      writeFileSync(`${ROOT}/dist/${filename}`, (URLSET_OPEN + entries.join("") + URLSET_CLOSE).trim(), "utf-8");
    };

    // Static pages
    const staticEntries = [
      urlEntry({ loc: "/",           es: "/",        en: "/en",          freq: "weekly",  priority: "1.0" }),
      urlEntry({ loc: "/en",         es: "/",        en: "/en",          freq: "weekly",  priority: "1.0" }),
      urlEntry({ loc: "/eventos",    es: "/eventos", en: "/en/events",   freq: "weekly",  priority: "0.8" }),
      urlEntry({ loc: "/en/events",  es: "/eventos", en: "/en/events",   freq: "weekly",  priority: "0.8" }),
      urlEntry({ loc: "/toolkit",    es: "/toolkit", en: "/en/toolkit",  freq: "monthly", priority: "0.7" }),
      urlEntry({ loc: "/en/toolkit", es: "/toolkit", en: "/en/toolkit",  freq: "monthly", priority: "0.7" }),
    ];

    // Articles — lastmod from article.date, heroImage as image
    const articleEntries = ARTICLES.flatMap((a) => {
      const lastmod = a.date || TODAY;
      const image   = a.heroImage || undefined;
      return [
        urlEntry({ loc: `/${a.slug}`,      es: `/${a.slug}`, en: `/en/${a.enSlug}`, lastmod, image }),
        urlEntry({ loc: `/en/${a.enSlug}`, es: `/${a.slug}`, en: `/en/${a.enSlug}`, lastmod, image }),
      ];
    });

    // Events — lastmod from parent article.date
    const eventEntries = ARTICLES.flatMap((a) =>
      (a.events || []).flatMap((ev) => {
        const esSlug  = slugifyEvent(ev.name, a.city);
        const enSlug  = slugifyEventEn(ev.name, a.city);
        const lastmod = a.date || TODAY;
        const image   = ev.image || a.heroImage || undefined;
        return [
          urlEntry({ loc: `/evento/${esSlug}`,   es: `/evento/${esSlug}`, en: `/en/event/${enSlug}`, priority: "0.6", lastmod, image }),
          urlEntry({ loc: `/en/event/${enSlug}`, es: `/evento/${esSlug}`, en: `/en/event/${enSlug}`, priority: "0.6", lastmod, image }),
        ];
      })
    );

    // Guides — lastmod from guide.date, heroImage as image
    const guideEntries = GUIDES.flatMap((gd) => {
      const lastmod = gd.date || TODAY;
      const image   = gd.heroImage || undefined;
      return [
        urlEntry({ loc: `/guia/${gd.slug}`,       es: `/guia/${gd.slug}`, en: `/en/guide/${gd.enSlug}`, priority: "0.8", lastmod, image }),
        urlEntry({ loc: `/en/guide/${gd.enSlug}`, es: `/guia/${gd.slug}`, en: `/en/guide/${gd.enSlug}`, priority: "0.8", lastmod, image }),
      ];
    });

    writeSitemap("sitemap-static.xml",   staticEntries);
    writeSitemap("sitemap-articles.xml", articleEntries);
    writeSitemap("sitemap-events.xml",   eventEntries);
    writeSitemap("sitemap-guides.xml",   guideEntries);

    // Sitemap index — sitemap.xml points to the four sub-sitemaps
    const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap><loc>${ORIGIN}/sitemap-static.xml</loc><lastmod>${TODAY}</lastmod></sitemap>
  <sitemap><loc>${ORIGIN}/sitemap-articles.xml</loc><lastmod>${TODAY}</lastmod></sitemap>
  <sitemap><loc>${ORIGIN}/sitemap-events.xml</loc><lastmod>${TODAY}</lastmod></sitemap>
  <sitemap><loc>${ORIGIN}/sitemap-guides.xml</loc><lastmod>${TODAY}</lastmod></sitemap>
</sitemapindex>`;
    writeFileSync(`${ROOT}/dist/sitemap.xml`, sitemapIndex.trim(), "utf-8");

    const evCount = ARTICLES.reduce((n, a) => n + (a.events?.length || 0), 0);
    console.log(`\x1b[32m✓\x1b[0m OG HTML: ${ARTICLES.length * 2} article + ${GUIDES.length * 2} guide pages`);
    console.log(`\x1b[32m✓\x1b[0m Sitemap index: ${ARTICLES.length} articles · ${evCount} events · ${GUIDES.length} guides (4 sub-sitemaps)`);
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
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "react-router-dom"],
        },
      },
    },
  },
});
