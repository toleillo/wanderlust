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

    const esc     = (s) => s.replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const textEsc = (s) => String(s ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

    // Convert a content string (may contain {{CTA:…}} tokens) → crawlable HTML paragraphs
    const contentToHtml = (str) => {
      if (!str) return "";
      return str
        .replace(/\{\{CTA:[^}]*\}\}/g, "")   // strip affiliate tokens
        .split(/\n\n+/)
        .map((p) => p.trim().replace(/\n/g, " "))
        .filter(Boolean)
        .map((p) => `<p>${textEsc(p)}</p>`)
        .join("");
    };

    // Build a pre-rendered <article> body for guides (tips or comparison)
    const guideBodyHtml = (guide, lang) => {
      let inner = `<h1>${textEsc(g(guide.title, lang))}</h1><p>${textEsc(g(guide.subtitle, lang))}</p>`;
      if (guide.type === "tips" && guide.tips) {
        inner += guide.tips.map((tip) =>
          `<h2>${textEsc(g(tip.title, lang))}</h2><p>${textEsc(g(tip.body, lang))}</p>`
        ).join("");
      } else if (guide.items) {
        inner += guide.items.map((item) =>
          `<h2>${textEsc(item.name || "")}</h2><p>${textEsc(g(item.verdict, lang) || g(item.bestFor, lang) || "")}</p>`
        ).join("");
      }
      return `<article>${inner}</article>`;
    };

    // Read the compiled index.html once
    const template = readFileSync(`${ROOT}/dist/index.html`, "utf-8");

    const patch = (html, { title, description, url, image, lang, preloadImage, bodyHtml }) => {
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
          : "</head>")
        // Pre-rendered body content for crawlers — React replaces on mount.
        // index.html already has a generic <main> inside #root as fallback;
        // here we swap it for the page-specific content.
        .replace(/<div id="root">[\s\S]*?<\/main>\s*<\/div>/, bodyHtml
          ? `<div id="root">${bodyHtml}</div>`
          : html.match(/<div id="root">[\s\S]*?<\/main>\s*<\/div>/)?.[0] ?? '<div id="root"></div>');
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
      const esBody  = `<article><h1>${textEsc(esTitle)}</h1><p>${textEsc(esDesc)}</p>${contentToHtml(g(a.content, "es"))}</article>`;
      const enBody  = `<article><h1>${textEsc(enTitle)}</h1><p>${textEsc(enDesc)}</p>${contentToHtml(g(a.content, "en"))}</article>`;

      write(".",  a.slug,   patch(template, { title: esTitle, description: esDesc, url: `${ORIGIN}/${a.slug}`,        image: a.heroImage, lang: "es", preloadImage: a.heroImage, bodyHtml: esBody }));
      write("en", a.enSlug, patch(template, { title: enTitle, description: enDesc, url: `${ORIGIN}/en/${a.enSlug}`,  image: a.heroImage, lang: "en", preloadImage: a.heroImage, bodyHtml: enBody }));
    }

    // — Guides —
    for (const g_ of GUIDES) {
      const esTitle = g(g_.title, "es");
      const enTitle = g(g_.title, "en");
      const esDesc  = g(g_.subtitle, "es");
      const enDesc  = g(g_.subtitle, "en");
      const img     = g_.heroImage;

      write("guia",     g_.slug,   patch(template, { title: esTitle, description: esDesc, url: `${ORIGIN}/guia/${g_.slug}`,        image: img, lang: "es", bodyHtml: guideBodyHtml(g_, "es") }));
      write("en/guide", g_.enSlug, patch(template, { title: enTitle, description: enDesc, url: `${ORIGIN}/en/guide/${g_.enSlug}`,  image: img, lang: "en", bodyHtml: guideBodyHtml(g_, "en") }));
    }

    // — SPA shell copies ────────────────────────────────────────────────────────
    // cleanUrls: true in Vercel serves /path from dist/path.html.
    // When no .html exists it returns 404 BEFORE rewrites run.
    // Every SPA route that has no article/guide-specific HTML needs a copy of
    // the base index.html so cleanUrls always finds a file to serve.
    const spaRoutes = [
      { dir: ".",  name: "en"             },  // /en
      { dir: ".",  name: "eventos"        },  // /eventos
      { dir: "en", name: "events"         },  // /en/events
      { dir: ".",  name: "toolkit"        },  // /toolkit
      { dir: "en", name: "toolkit"        },  // /en/toolkit
      { dir: ".",  name: "privacidad"     },  // /privacidad
      { dir: ".",  name: "cookies"        },  // /cookies
      { dir: "en", name: "privacy"        },  // /en/privacy
      { dir: "en", name: "cookies-policy" },  // /en/cookies-policy
      // Narrator pages — static shell so cleanUrls finds a file
      ...Object.keys((await import(`${ROOT}/src/data/narrators.js`)).NARRATORS).flatMap((id) => [
        { dir: "narrador",    name: id },  // /narrador/:id
        { dir: "en/narrator", name: id },  // /en/narrator/:id
      ]),
    ];
    for (const { dir, name } of spaRoutes) {
      write(dir, name, template);
    }

    // ── Slug helpers (used by event HTML + sitemap) ────────────────────────────
    const norm = (str) =>
      str.normalize("NFD")
         .replace(/[\u0300-\u036f]/g, "")
         .toLowerCase()
         .replace(/[^a-z0-9]+/g, "-")
         .replace(/^-+|-+$/g, "");
    const slugifyEvent   = (name, city) => `${norm(g(name, "es"))}-${norm(g(city, "es"))}`;
    const slugifyEventEn = (name, city) => `${norm(g(name, "en") || g(name, "es"))}-${norm(g(city, "en") || g(city, "es"))}`;

    // — Event detail pages ──────────────────────────────────────────────────────
    // /evento/:slug and /en/event/:slug — one HTML per event per language
    let evHtmlCount = 0;
    for (const a of ARTICLES) {
      for (const ev of (a.events || [])) {
        const esSlug   = slugifyEvent(ev.name, a.city);
        const enSlug   = slugifyEventEn(ev.name, a.city);
        const evTitle  = g(ev.name, "es") || g(ev.name, "en") || "";
        const evTitleEn = g(ev.name, "en") || g(ev.name, "es") || "";
        const evDesc   = g(ev.description, "es") || "";
        const evDescEn = g(ev.description, "en") || "";
        write("evento",   esSlug, patch(template, { title: evTitle,   description: evDesc,   url: `${ORIGIN}/evento/${esSlug}`,   image: a.heroImage, lang: "es" }));
        write("en/event", enSlug, patch(template, { title: evTitleEn, description: evDescEn, url: `${ORIGIN}/en/event/${enSlug}`, image: a.heroImage, lang: "en" }));
        evHtmlCount++;
      }
    }

    // ── Sitemap ────────────────────────────────────────────────────────────────

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

    // Narrator pages — one per narrator, ES + EN
    const { NARRATORS } = await import(`${ROOT}/src/data/narrators.js`);
    const narratorEntries = Object.entries(NARRATORS).flatMap(([id]) => [
      urlEntry({ loc: `/narrador/${id}`, es: `/narrador/${id}`, en: `/en/narrator/${id}`, freq: "monthly", priority: "0.5" }),
      urlEntry({ loc: `/en/narrator/${id}`, es: `/narrador/${id}`, en: `/en/narrator/${id}`, freq: "monthly", priority: "0.5" }),
    ]);
    writeSitemap("sitemap-static.xml",    [...staticEntries, ...narratorEntries]);
    writeSitemap("sitemap-articles.xml",  articleEntries);
    writeSitemap("sitemap-events.xml",    eventEntries);
    writeSitemap("sitemap-guides.xml",    guideEntries);

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
    console.log(`\x1b[32m✓\x1b[0m OG HTML: ${ARTICLES.length * 2} article + ${GUIDES.length * 2} guide + ${evHtmlCount * 2} event pages`);
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
    chunkSizeWarningLimit: 700,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) return "vendor";
          // articlesContent.js is dynamically imported — keep it as its own async chunk
          if (id.includes("/src/data/articlesContent")) return undefined;
          if (id.includes("/src/data/"))   return "data";
          if (id.includes("/src/components/")) return "ui";
        },
      },
    },
  },
});
