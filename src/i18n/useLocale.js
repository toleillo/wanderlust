import { useLocation } from "react-router-dom";
import { es, en } from "./translations.js";

const strings = { es, en };

export const useLocale = () => {
  const { pathname } = useLocation();
  const lang = pathname.startsWith("/en") ? "en" : "es";
  const dict = strings[lang];

  const t = (key, vars = {}) => {
    let str = dict?.[key] ?? strings.es?.[key] ?? key;
    Object.entries(vars).forEach(([k, v]) => {
      str = str.replace(`{${k}}`, v);
    });
    return str;
  };

  return { lang, t };
};
