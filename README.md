# Wander — AI Travel Blog with Affiliate Monetization

A modular travel blog built with Vite + React 18, featuring AI-generated articles, contextual affiliate CTAs, dynamic deep links, A/B testing, and Schema.org SEO markup.

## Features

- **20 affiliate partners** — flights, hotels, cars, activities, restaurants, insurance, eSIM, parking
- **Dynamic deep links** — pre-filled checkin/checkout dates, destination-specific URLs
- **Inline `{{CTA}}` markers** — affiliate buttons embedded naturally in article prose
- **Price comparison widgets** — collapsible multi-partner comparison per service category
- **A/B testing** — 3 CTA text variants, stable per session, tracked in GA4
- **Urgency badges** — animated "alta demanda" on events with limited availability
- **Sticky mobile booking bar** — appears on scroll with 4 main booking actions
- **Schema.org JSON-LD** — Article, Event, Place, BreadcrumbList per article
- **AI article generator** — demo generator with simulated pipeline steps

## Requirements

- **Node.js** ≥ 18
- **npm** ≥ 9

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
# → http://localhost:5173

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── App.jsx              # Root component with global state
├── main.jsx             # Vite entry point
├── views/               # Page-level components
│   ├── HomeView.jsx
│   └── DetailView.jsx
├── components/
│   ├── icons/           # SVG icon set
│   ├── ui/              # Rating, UrgencyBadge
│   ├── affiliate/       # AffBtn, PriceCompare
│   ├── content/         # RichContent ({{CTA}} parser)
│   ├── layout/          # Header, Footer, Sidebar, MobileBookingBar
│   ├── articles/        # Card, Detail, PlacesList, EventsList
│   └── generator/       # AI article generator UI
├── config/              # AFFILIATE_CONFIG, A/B variants
├── data/                # Articles and guides data
├── utils/               # trackClick, buildDeepLink, generateArticleSchema
├── hooks/               # useScrollPosition, useABVariant
└── styles/              # Theme, typeColors, animations, globalStyles
```

## Configuration

### Affiliate IDs
Replace placeholder IDs in `src/config/affiliates.js`:
```js
booking: { id: "YOUR_BOOKING_ID", ... }
```

### GA4
Uncomment the GA4 snippet in `index.html` and replace `G-XXXXXXXXXX` with your Measurement ID.

### Domain
Replace `https://yourdomain.com` in `src/utils/seo.js` and `public/robots.txt` with your actual domain.

## Deploy

### Netlify
```bash
npm run build
# Drag & drop the dist/ folder to Netlify, or connect your Git repo
# Build command: npm run build
# Publish directory: dist
```

### Vercel
```bash
npm run build
# Connect your Git repo to Vercel
# Framework preset: Vite
# Build command: npm run build
# Output directory: dist
```

## License

MIT
