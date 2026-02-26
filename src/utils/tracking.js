export const trackClick = (partner, type, label, articleCity, variant) => {
  const event = { partner, type, label, city: articleCity, variant, timestamp: Date.now() };
  console.log("[Affiliate Click]", event);
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "affiliate_click", event);
  }
};
