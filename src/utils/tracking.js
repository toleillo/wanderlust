export const trackClick = (partner, type, label, articleCity, variant) => {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", "affiliate_click", {
    partner,
    type,
    label,
    city:    articleCity,
    variant,
  });
};
