import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { GA4_ID } from "@config/google";

export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    if (typeof window === "undefined" || !window.gtag) return;
    window.gtag("config", GA4_ID, {
      page_path:  location.pathname + location.search,
      page_title: document.title,
    });
  }, [location.pathname, location.search]);
};
