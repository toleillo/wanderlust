import { useEffect } from "react";

const setMetaTag = (attr, attrVal, content) => {
  if (!content) return;
  let el = document.querySelector(`meta[${attr}="${attrVal}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, attrVal);
    el.dataset.usemeta = "true";
    document.head.appendChild(el);
  }
  el.content = content;
};

/**
 * Dynamically updates all SEO meta tags for the current page.
 * Handles: title, meta description, canonical, OG, Twitter cards, hreflang.
 *
 * @param {object} opts
 * @param {string}  opts.title       — Page title (appended with · ElTechoEncima)
 * @param {string}  opts.description — Meta description
 * @param {string}  opts.canonical   — Canonical path, e.g. "/barcelona-primavera-2026"
 * @param {string}  [opts.image]     — OG image URL (article heroImage)
 * @param {string}  [opts.lang]      — "es" | "en"
 * @param {string}  [opts.altUrl]    — Alternate-language canonical path for hreflang
 * @param {string}  [opts.type]      — OG type: "article" | "website" (default: "article")
 */
// Replace any past 4-digit year in a string with the current year so
// meta titles/descriptions stay fresh without manual edits each January.
const CURRENT_YEAR = new Date().getFullYear();
const refreshYear = (str) =>
  str ? str.replace(/\b(20\d{2})\b/g, (y) => (+y < CURRENT_YEAR ? String(CURRENT_YEAR) : y)) : str;

export const useMeta = ({ title, description, canonical, image, lang = "es", altUrl = null, type = "article" }) => {
  useEffect(() => {
    const origin = "https://www.eltechoencima.com";
    const t = refreshYear(title);
    const d = refreshYear(description);

    // — Title —
    document.title = t
      ? `${t} · ElTechoEncima`
      : lang === "en"
        ? "ElTechoEncima — Definitive travel guides"
        : "ElTechoEncima — Guías de viaje definitivas";

    // — html[lang] —
    document.documentElement.lang = lang;

    // — Meta description —
    let descEl = document.querySelector('meta[name="description"]');
    if (!descEl) {
      descEl = document.createElement("meta");
      descEl.name = "description";
      document.head.appendChild(descEl);
    }
    if (d) descEl.content = d;

    // — OG + Twitter —
    const pageUrl = canonical ? `${origin}${canonical}` : window.location.href;
    const ogLocale = lang === "en" ? "en_GB" : "es_ES";
    setMetaTag("property", "og:title",       t || "ElTechoEncima");
    setMetaTag("property", "og:description", d || "");
    setMetaTag("property", "og:url",         pageUrl);
    setMetaTag("property", "og:type",        type);
    setMetaTag("property", "og:site_name",   "ElTechoEncima");
    setMetaTag("property", "og:locale",      ogLocale);
    if (image) {
      setMetaTag("property", "og:image",     image);
      setMetaTag("property", "og:image:alt", t || "ElTechoEncima");
    }
    setMetaTag("name", "twitter:card",        "summary_large_image");
    setMetaTag("name", "twitter:title",       t || "ElTechoEncima");
    setMetaTag("name", "twitter:description", d || "");
    setMetaTag("name", "twitter:site",        "@eltechoencima");
    if (image) setMetaTag("name", "twitter:image", image);

    // — Canonical —
    let canonEl = document.querySelector('link[rel="canonical"]');
    if (!canonEl) {
      canonEl = document.createElement("link");
      canonEl.rel = "canonical";
      canonEl.dataset.usemeta = "true";
      document.head.appendChild(canonEl);
    }
    if (canonical) canonEl.href = `${origin}${canonical}`;

    // — hreflang alternates —
    // Remove ALL hreflang links — both React-managed and static HTML ones
    // (static HTML injects them at build time; on SPA navigation they become stale)
    document.querySelectorAll("link[rel='alternate'][hreflang]").forEach((el) => el.remove());
    if (canonical && altUrl) {
      const isEn = lang === "en";
      [
        [isEn ? "en" : "es", canonical],
        [isEn ? "es" : "en", altUrl],
        ["x-default",        isEn ? altUrl : canonical],
      ].forEach(([hl, href]) => {
        const el = document.createElement("link");
        el.rel = "alternate";
        el.hreflang = hl;
        el.href = `${origin}${href}`;
        el.dataset.usemetaHl = "true";
        document.head.appendChild(el);
      });
    }

    return () => {
      document.querySelectorAll("link[rel='alternate'][hreflang]").forEach((el) => el.remove());
    };
  }, [title, description, canonical, image, lang, altUrl]);
};
