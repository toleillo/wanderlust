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
 * @param {string}  opts.title       — Page title (appended with · Wanderlust)
 * @param {string}  opts.description — Meta description
 * @param {string}  opts.canonical   — Canonical path, e.g. "/barcelona-primavera-2026"
 * @param {string}  [opts.image]     — OG image URL (article heroImage)
 * @param {string}  [opts.lang]      — "es" | "en"
 * @param {string}  [opts.altUrl]    — Alternate-language canonical path for hreflang
 */
export const useMeta = ({ title, description, canonical, image, lang = "es", altUrl = null }) => {
  useEffect(() => {
    const origin = window.location.origin;

    // — Title —
    document.title = title
      ? `${title} · Wanderlust`
      : lang === "en"
        ? "Wanderlust — Definitive travel guides"
        : "Wanderlust — Guías de viaje definitivas";

    // — html[lang] —
    document.documentElement.lang = lang;

    // — Meta description —
    let descEl = document.querySelector('meta[name="description"]');
    if (!descEl) {
      descEl = document.createElement("meta");
      descEl.name = "description";
      document.head.appendChild(descEl);
    }
    if (description) descEl.content = description;

    // — OG + Twitter —
    const pageUrl = canonical ? `${origin}${canonical}` : window.location.href;
    setMetaTag("property", "og:title",       title || "Wanderlust");
    setMetaTag("property", "og:description", description || "");
    setMetaTag("property", "og:url",         pageUrl);
    setMetaTag("property", "og:type",        "article");
    setMetaTag("property", "og:site_name",   "Wanderlust");
    if (image) setMetaTag("property", "og:image", image);
    setMetaTag("name", "twitter:card",        "summary_large_image");
    setMetaTag("name", "twitter:title",       title || "Wanderlust");
    setMetaTag("name", "twitter:description", description || "");
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
    document.querySelectorAll("link[data-usemeta-hl]").forEach((el) => el.remove());
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
      document.querySelectorAll("link[data-usemeta-hl]").forEach((el) => el.remove());
    };
  }, [title, description, canonical, image, lang, altUrl]);
};
