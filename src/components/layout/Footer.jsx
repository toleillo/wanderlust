import { useNavigate } from "react-router-dom";
import { useLocale } from "@i18n";
import { COLORS, FONTS } from "@styles";

export const Footer = () => {
  const { t, lang } = useLocale();
  const navigate = useNavigate();
  const prefix = lang === "en" ? "/en" : "";
  const privacyPath = `${prefix}${lang === "en" ? "/privacy" : "/privacidad"}`;
  const cookiesPath = `${prefix}${lang === "en" ? "/cookies-policy" : "/cookies"}`;

  const linkStyle = {
    color: COLORS.textVeryFaint, textDecoration: "underline", cursor: "pointer",
    fontFamily: "inherit", fontSize: "inherit", padding: 0,
  };

  return (
    <footer style={{ borderTop: `1px solid ${COLORS.borderSubtle}`, padding: "40px 22px", textAlign: "center" }}>
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <p style={{ fontFamily: FONTS.sans, color: COLORS.textFaint, fontSize: "0.72rem", lineHeight: 1.6, marginBottom: "20px" }}>
          {lang === "en"
            ? "ElTechoEncima is a curated travel platform. Some links on this site are affiliate links, meaning we may earn a commission at no extra cost to you. This helps us keep the guides free and updated."
            : "ElTechoEncima es una plataforma de viajes seleccionados. Algunos enlaces son de afiliados, lo que significa que podemos ganar una comisión sin coste adicional para ti. Esto nos ayuda a mantener las guías gratuitas y actualizadas."
          }
        </p>

        <p style={{ fontFamily: FONTS.sans, color: COLORS.textVeryFaint, fontSize: "0.76rem", lineHeight: 1.6 }}>
          ElTechoEncima · {t("footer_affiliate")} ·{" "}
          <a href={privacyPath} style={linkStyle} onClick={(e) => { e.preventDefault(); navigate(privacyPath); }}>{t("footer_policy")}</a>{" "}
          · <a href={cookiesPath} style={linkStyle} onClick={(e) => { e.preventDefault(); navigate(cookiesPath); }}>{t("footer_cookies")}</a> · {new Date().getFullYear()}
        </p>

        <div style={{ display: "flex", justifyContent: "center", gap: "24px", opacity: 0.15, filter: "grayscale(1)", marginTop: "24px" }}>
          <span style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.1em" }}>VERIFIED BY ELTECHOENCIMA</span>
          <span style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.1em" }}>SECURE BOOKING</span>
          <span style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.1em" }}>EDITION {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
};
