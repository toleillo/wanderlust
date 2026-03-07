import { useNavigate } from "react-router-dom";
import { useLocale } from "@i18n";
import { useCookieConsent } from "@hooks";

export const CookieBanner = () => {
  const { consent, acceptAll, acceptNecessary } = useCookieConsent();
  const { t, lang } = useLocale();
  const navigate = useNavigate();

  if (consent) return null;

  const cookiesPath = lang === "en" ? "/en/cookies-policy" : "/cookies";

  return (
    <div style={{
      position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 9999,
      background: "#FFFFFF", borderTop: "1px solid #E5E1D8",
      boxShadow: "0 -4px 24px rgba(0,0,0,0.06)",
      padding: "16px 24px", display: "flex", alignItems: "center",
      gap: "16px", flexWrap: "wrap",
      fontFamily: "'Source Serif 4', serif",
    }}>
      <p style={{
        flex: 1, minWidth: "220px", margin: 0,
        fontSize: "0.78rem", color: "#6B6358", lineHeight: 1.5,
      }}>
        {t("cookie_banner_text")}{" "}
        <button
          onClick={() => navigate(cookiesPath)}
          style={{
            background: "none", border: "none", padding: 0, cursor: "pointer",
            color: "#B8860B", fontSize: "0.78rem", textDecoration: "underline",
            fontFamily: "inherit",
          }}
        >
          {t("cookie_learn_more")}
        </button>
      </p>
      <div style={{ display: "flex", gap: "10px", flexShrink: 0 }}>
        <button
          onClick={acceptNecessary}
          style={{
            padding: "8px 16px", fontSize: "0.76rem", cursor: "pointer",
            background: "transparent", border: "1px solid #E5E1D8",
            color: "#9A9080", borderRadius: "7px", fontFamily: "inherit",
            whiteSpace: "nowrap",
          }}
        >
          {t("cookie_necessary_only")}
        </button>
        <button
          onClick={acceptAll}
          style={{
            padding: "8px 18px", fontSize: "0.76rem", cursor: "pointer",
            background: "#B8860B", border: "1px solid #B8860B",
            color: "#FFFFFF", borderRadius: "7px", fontFamily: "inherit",
            fontWeight: 600, whiteSpace: "nowrap",
          }}
        >
          {t("cookie_accept_all")}
        </button>
      </div>
    </div>
  );
};
