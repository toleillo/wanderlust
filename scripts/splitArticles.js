#!/usr/bin/env node
// Run after editing articles.js to regenerate articles-base.js and articlesContent.js
// Usage: node scripts/splitArticles.js

import { ARTICLES } from '../src/data/articles.js';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const ROOT = dirname(dirname(fileURLToPath(import.meta.url)));

// ── articlesContent.js (content + faq only) ─────────────────────────────────
const contentMap = {};
for (const a of ARTICLES) {
  const entry = {};
  if (a.content) entry.content = a.content;
  if (a.faq)     entry.faq = a.faq;
  contentMap[a.id] = entry;
}

writeFileSync(resolve(ROOT, 'src/data/articlesContent.js'), `// Heavy article fields (content + faq) — lazy-loaded by DetailView only.
// Generated from articles.js. Do not edit manually.
// To update: edit articles.js, then run: node scripts/splitArticles.js

export const CONTENT_MAP = ${JSON.stringify(contentMap, null, 2)};
`);

// ── articles-base.js (metadata only, no content/faq) ────────────────────────
const stripped = ARTICLES.map(({ content: _c, faq: _f, ...rest }) => rest);

writeFileSync(resolve(ROOT, 'src/data/articles-base.js'), `// Article metadata (no content/faq) — used by HomeView, EventsView, etc.
// Generated from articles.js. Do not edit manually.
// To update: edit articles.js, then run: node scripts/splitArticles.js

// Helper: resolve bilingual {es,en} fields — copied here so this file is self-contained
export const g = (field, lang) => {
  if (!field) return "";
  if (typeof field === "string") return field;
  return field[lang] ?? field.es ?? field.en ?? "";
};

export const ARTICLES = ${JSON.stringify(stripped, null, 2)};
`);

const contentKB = (JSON.stringify(contentMap).length / 1024).toFixed(1);
const baseKB    = (JSON.stringify(stripped).length / 1024).toFixed(1);
console.log(`✓ articlesContent.js  ${contentKB} KB  (lazy — loaded only on article pages)`);
console.log(`✓ articles-base.js    ${baseKB} KB  (eager — data chunk)`);
console.log(`  Split: ${ARTICLES.length} articles`);
