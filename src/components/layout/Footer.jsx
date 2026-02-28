import { useNavigate } from "react-router-dom";
import { useLocale } from "@i18n";

export const Footer = () => {
  const { t, lang } = useLocale();
  const navigate = useNavigate();
  const prefix = lang === "en" ? "/en" : "";
  const privacyPath = `${prefix}${lang === "en" ? "/privacy" : "/privacidad"}`;
  const cookiesPath = `${prefix}${lang === "en" ? "/cookies-policy" : "/cookies"}`;

  const linkStyle = {
    color: "#4a4030", textDecoration: "underline", cursor: "pointer",
    background: "none", border: "none", fontFamily: "inherit",
    fontSize: "inherit", padding: 0,
  };

  return (
    <footer style={{ borderTop: "1px solid #1a1714", padding: "28px 22px", textAlign: "center" }}>
      <p style={{ fontFamily: "'Libre Franklin', sans-serif", color: "#2e2a20", fontSize: "0.76rem", lineHeight: 1.6 }}>
        ElTechoEncima · {t("footer_affiliate")} ·{" "}
        <button style={linkStyle} onClick={() => navigate(privacyPath)}>{t("footer_policy")}</button>{" "}
        · <button style={linkStyle} onClick={() => navigate(cookiesPath)}>{t("footer_cookies")}</button> · 2026
      </p>
    </footer>
  );
};
