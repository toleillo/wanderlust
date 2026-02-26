import { AFFILIATE_CONFIG } from "@config";

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
  return cfg.deepUrl(city, query || city, checkin, checkout);
};
