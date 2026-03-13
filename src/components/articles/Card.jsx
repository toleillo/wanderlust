import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { I } from "@components/icons";
import { useLocale } from "@i18n";
import { g } from "@data";
import { SmartImage } from "@components/ui";
import { NARRATORS } from "@data/narrators.js";

export const Card = ({ article, i }) => {
  const [h, setH] = useState(false);
  const { lang, t } = useLocale();
  const navigate = useNavigate();

  const url = lang === "en" ? `/en/${article.enSlug}` : `/${article.slug}`;
  const narrator = article.narrator ? NARRATORS[article.narrator] : null;

  return (
    <article
      onClick={() => navigate(url)}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        cursor: "pointer", borderRadius: "14px", overflow: "hidden", background: "#FFFFFF",
        border: `1px solid ${h ? "#C8C0B0" : "#E5E1D8"}`,
        transition: "all 0.35s cubic-bezier(0.25,0.46,0.45,0.94)",
        transform: h ? "translateY(-2px)" : "none",
        boxShadow: h ? "0 4px 24px rgba(0,0,0,0.08)" : "0 1px 4px rgba(0,0,0,0.04)",
        animation: `fadeSlideUp 0.5s ease ${i * 0.12}s both`,
      }}
    >
      <div style={{ height: "220px", overflow: "hidden", position: "relative" }}>
        <SmartImage
          src={article.heroImage}
          alt={g(article.city, lang)}
          width={400}
          height={220}
          style={{ width: "100%", height: "100%", transition: "transform 0.5s", transform: h ? "scale(1.04)" : "scale(1)" }}
        />
        <div style={{ position: "absolute", top: "14px", left: "14px" }}>
          <span style={{
            fontFamily: "'Source Serif 4', serif", fontSize: "0.62rem", fontWeight: 700,
            letterSpacing: "0.13em", textTransform: "uppercase", color: "#B8860B",
            background: "rgba(255,255,255,0.92)", padding: "3px 9px", borderRadius: "4px",
            border: "1px solid rgba(184,134,11,0.22)",
          }}>
            {t("cat_" + article.category)}
          </span>
        </div>
      </div>
      <div style={{ padding: "18px" }}>
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", color: "#1A1A18", margin: "0 0 7px 0", lineHeight: 1.25, fontWeight: 600 }}>
          {g(article.title, lang)}
        </h3>

        {narrator && (
          <p style={{
            fontFamily: "'Source Serif 4', serif", fontSize: "0.75rem", color: "#9A9080",
            margin: "0 0 10px 0", fontStyle: "italic",
          }}>
            {lang === "en"
              ? `by ${narrator.name.en} · ${narrator.title.en}`
              : `por ${narrator.name.es} · ${narrator.title.es}`}
          </p>
        )}

        <p style={{
          fontFamily: "'Source Serif 4', serif", color: "#1A1A18", fontSize: "0.85rem", lineHeight: 1.6, margin: "0 0 14px 0",
          display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden",
        }}>
          {g(article.excerpt, lang)}
        </p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "14px", borderTop: "1px solid #E5E1D8" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontFamily: "'Source Serif 4', serif", fontSize: "0.72rem", color: "#9A9080", display: "flex", alignItems: "center", gap: "4px" }}>
              <I.Clock /> {article.readTime}
            </span>
            <span style={{ fontFamily: "'Source Serif 4', serif", fontSize: "0.72rem", color: "#9A9080" }}>
              {article.pointsOfInterest.length} {t("card_places")} · {article.events.length} {t("card_events")}
            </span>
          </div>
          <span style={{ color: h ? "#B8860B" : "#9A9080", transition: "all 0.25s", transform: h ? "translateX(3px)" : "none", display: "flex" }}>
            <I.Arrow />
          </span>
        </div>
      </div>
    </article>
  );
};
