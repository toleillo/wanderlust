import { useLocale } from "@i18n";

export const Footer = () => {
  const { t } = useLocale();
  return (
    <footer style={{ borderTop: "1px solid #1a1714", padding: "28px 22px", textAlign: "center" }}>
      <p style={{ fontFamily: "'Libre Franklin', sans-serif", color: "#2e2a20", fontSize: "0.76rem", lineHeight: 1.6 }}>
        Wanderlust · {t("footer_affiliate")} ·{" "}
        <a href="#" style={{ color: "#4a4030", textDecoration: "underline" }}>{t("footer_policy")}</a>{" "}
        · <a href="#" style={{ color: "#4a4030", textDecoration: "underline" }}>{t("footer_cookies")}</a> · 2026
      </p>
    </footer>
  );
};
