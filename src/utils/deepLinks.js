import { AFFILIATE_CONFIG } from "@config";

export const slugifyEvent = (name, city) => {
  const resolve = (v) => (v && typeof v === "object") ? (v.es ?? v.en ?? "") : (v ?? "");
  const norm = (str) =>
    resolve(str).normalize("NFD")
       .replace(/[\u0300-\u036f]/g, "")
       .toLowerCase()
       .replace(/[^a-z0-9]+/g, "-")
       .replace(/^-+|-+$/g, "");
  return `${norm(name)}-${norm(city)}`;
};

export const getDynamicDates = (offsetDays = 14, nights = 3) => {
  const ci = new Date(Date.now() + offsetDays * 864e5);
  const co = new Date(ci.getTime() + nights * 864e5);
  const f = (d) => d.toISOString().split("T")[0];
  return { checkin: f(ci), checkout: f(co) };
};

export const buildDeepLink = (partner, city, query, dates) => {
  const cfg = AFFILIATE_CONFIG[partner];
  if (!cfg) return "#";
  const { checkin, checkout } = dates || getDynamicDates();
  // city can be a bilingual {es,en} object — deepUrl functions expect a plain string
  const cityStr = (city && typeof city === "object") ? (city.es ?? city.en ?? "") : (city ?? "");
  return cfg.deepUrl(cityStr, query || cityStr, checkin, checkout);
};
