import { useState, useEffect } from "react";

const STORAGE_KEY = "wander_cookie_consent";

const updateGtag = (level) => {
  if (typeof window === "undefined" || !window.gtag) return;
  const granted = level === "all";
  window.gtag("consent", "update", {
    analytics_storage:  granted ? "granted" : "denied",
    ad_storage:         granted ? "granted" : "denied",
    ad_user_data:       granted ? "granted" : "denied",
    ad_personalization: granted ? "granted" : "denied",
  });
};

export const useCookieConsent = () => {
  const [consent, setConsent] = useState(() => {
    try { return localStorage.getItem(STORAGE_KEY) || null; }
    catch { return null; }
  });

  useEffect(() => {
    if (consent) updateGtag(consent);
  }, []);

  const acceptAll = () => {
    setConsent("all");
    try { localStorage.setItem(STORAGE_KEY, "all"); } catch {}
    updateGtag("all");
  };

  const acceptNecessary = () => {
    setConsent("necessary");
    try { localStorage.setItem(STORAGE_KEY, "necessary"); } catch {}
    updateGtag("necessary");
  };

  return { consent, acceptAll, acceptNecessary };
};
