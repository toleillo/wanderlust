// ─── Google Configuration ──────────────────────────────────────────────────
// Replace the placeholder values with your real IDs before deploying.

// Google Analytics 4
export const GA4_ID = "G-4KVVKQ17N8";   // → Measurement ID desde analytics.google.com

// Google AdSense
export const ADSENSE_PUBLISHER_ID = "ca-pub-8583050969295844"; // → desde adsense.google.com

// ─── Ad slots ─────────────────────────────────────────────────────────────
// Create each slot in AdSense > Ads > By ad unit > Display ads
// then paste the slot ID (the number only) below.
export const AD_SLOTS = {
  // Home
  home_top:        "1111111111",  // Leaderboard — above article grid
  home_mid:        "2222222222",  // Leaderboard — between grid and guides
  home_bottom:     "3333333333",  // Leaderboard — below guides

  // Article detail
  article_mid:     "4444444444",  // Leaderboard — mid-article
  sidebar_top:     "5555555555",  // Rectangle   — sidebar top
  sidebar_bottom:  "6666666666",  // Rectangle   — sidebar bottom

  // Guide
  guide_top:       "7777777777",  // Leaderboard — below intro
  guide_mid:       "8888888888",  // Leaderboard — middle of content
  guide_bottom:    "9999999999",  // Billboard   — bottom of guide
};
