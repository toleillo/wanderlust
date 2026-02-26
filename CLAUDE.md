# Wander — CLAUDE.md

## Stack
- **Runtime**: Node ≥ 18, Vite 5, React 18
- **Styling**: Inline styles (no CSS framework) — see `src/styles/`
- **Fonts**: Cormorant Garamond (headings), Libre Franklin (UI), Source Serif 4 (body text) via Google Fonts
- **Affiliates**: 20 partners defined in `src/config/affiliates.js`

## Commands
```bash
npm install       # install dependencies
npm run dev       # dev server at http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview production build
npm run lint      # ESLint
```

## Path Aliases (vite.config.js)
| Alias         | Resolves to            |
|---------------|------------------------|
| `@`           | `src/`                 |
| `@config`     | `src/config/`          |
| `@data`       | `src/data/`            |
| `@utils`      | `src/utils/`           |
| `@styles`     | `src/styles/`          |
| `@hooks`      | `src/hooks/`           |
| `@components` | `src/components/`      |

## Architecture Decisions
- **No router**: Single-page navigation via `selected` state in `App.jsx`. No React Router needed — URL changes are a future enhancement.
- **Inline styles throughout**: Avoids CSS specificity conflicts and keeps components self-contained. Theme constants in `src/styles/theme.js` prevent magic strings.
- **A/B variant is stable per session**: `window.__ab_variant` is set once and reused (`src/config/abTesting.js` + `src/hooks/useABVariant.js`).
- **JSON-LD injection**: `DetailView` appends/removes a `<script type="application/ld+json">` tag on mount/unmount via `useEffect`.
- **`{{CTA}}` markers**: `RichContent` component parses `{{CTA:type:partner:query:label}}` tokens in article content and renders them as `<AffBtn>` components inline in the narrative text.

## Adding a New Article
1. Open `src/data/articles.js`
2. Add an object to the `ARTICLES` array following the existing structure:
   - Required fields: `id`, `city`, `country`, `emoji`, `slug`, `heroImage`, `title`, `subtitle`, `date`, `readTime`, `category`, `excerpt`, `metaDescription`, `keywords`, `pointsOfInterest`, `events`, `services`, `content`
   - Use `{{CTA:type:partner:query:label}}` markers in `content` for inline affiliate buttons
   - `services` maps category keys to arrays of partner IDs from `AFFILIATE_CONFIG`

## Adding a New Affiliate Partner
1. Open `src/config/affiliates.js`
2. Add an entry to `AFFILIATE_CONFIG`:
   ```js
   partnerKey: {
     id: "YOUR_ID",
     name: "Partner Name",
     commission: "X%",
     cookie: "30d",
     logo: "emoji",
     deepUrl: (city, query, checkin, checkout) => `https://...`,
   }
   ```
3. The partner is now available in `affiliateLinks` arrays and `services` objects across articles.

## CTA Format
Inline CTAs in article `content` use this format:
```
{{CTA:type:partner:query:label}}
```
- **type**: `tickets` | `activity` | `restaurant` | `hotel` | `service`
- **partner**: key from `AFFILIATE_CONFIG`
- **query**: search query passed to the partner's `deepUrl`
- **label**: button text shown to user

Example:
```
{{CTA:tickets:ticketmaster:primavera sound 2026:Compra tu abono}}
```

## GA4 Integration
Uncomment the GA4 snippet in `index.html` and replace `G-XXXXXXXXXX` with your Measurement ID. The `trackClick` utility in `src/utils/tracking.js` already calls `window.gtag("event", "affiliate_click", ...)` on every affiliate button click.

## Key Files
| File | Purpose |
|------|---------|
| `src/App.jsx` | Root: global state (articles, selected, filter) + layout |
| `src/views/HomeView.jsx` | Home grid, filters, guides, transparency sections |
| `src/views/DetailView.jsx` | JSON-LD injection wrapper around `<Detail>` |
| `src/components/articles/Detail.jsx` | Article page: hero, tabs, sidebar |
| `src/components/affiliate/AffBtn.jsx` | Affiliate button with tracking + deep link |
| `src/config/affiliates.js` | 20 affiliate partners configuration |
| `src/data/articles.js` | Sample articles data |
| `src/styles/globalStyles.js` | CSS string injected via `<style>` in App |

## Troubleshooting

### Blank screen (no visible error)
React errors without an error boundary leave `#root` empty. `src/App.jsx` includes an `ErrorBoundary`
that will display the error message on screen instead of a blank page — check the browser for the
red error panel.

**Known causes fixed:**
- **Missing affiliate partner key** — if an article's `services` object references a partner key
  not present in `AFFILIATE_CONFIG`, `Sidebar.jsx` throws a TypeError reading `.logo` on `undefined`.
  Always add the partner to `src/config/affiliates.js` before referencing it in article data.
- **Stale Vite module cache** — after fixing bugs, old cached modules can keep the broken code.
  Clear the cache and restart the dev server:
  ```bash
  rm -rf node_modules/.vite && npm run dev
  ```
