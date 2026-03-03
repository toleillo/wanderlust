import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { I } from "@components/icons";
import { useLocale } from "@i18n";
import { g } from "@data";
import { buildDeepLink, trackClick } from "@utils";
import { SmartImage } from "@components/ui";

export const Card = ({ article, i }) => {
  const [h, setH] = useState(false);
  const { lang, t } = useLocale();
  const navigate = useNavigate();

  const url = lang === "en" ? `/en/${article.enSlug}` : `/${article.slug}`;

  return (
    <article
      onClick={() => navigate(url)}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        cursor: "pointer", borderRadius: "14px", overflow: "hidden", background: "#16140f",
        border: `1px solid ${h ? "#4a4030" : "#242018"}`,
        transition: "all 0.35s cubic-bezier(0.25,0.46,0.45,0.94)",
        transform: h ? "translateY(-3px)" : "none",
        boxShadow: h ? "0 18px 36px rgba(0,0,0,0.35)" : "0 2px 8px rgba(0,0,0,0.15)",
        animation: `fadeSlideUp 0.5s ease ${i * 0.12}s both`,
      }}
    >
      <div style={{ height: "210px", overflow: "hidden", position: "relative" }}>
        <SmartImage
          src={article.heroImage}
          alt={article.city}
          width={400}
          height={210}
          style={{ width: "100%", height: "100%", transition: "transform 0.5s", transform: h ? "scale(1.04)" : "scale(1)" }}
        />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "linear-gradient(transparent,rgba(0,0,0,0.75))", padding: "22px 18px 14px" }}>
          <span style={{
            fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.65rem", fontWeight: 700,
            letterSpacing: "0.13em", textTransform: "uppercase", color: "#d4a853",
            background: "rgba(212,168,83,0.12)", padding: "3px 9px", borderRadius: "4px", border: "1px solid rgba(212,168,83,0.25)",
          }}>
            {t("cat_" + article.category)}
          </span>
        </div>
      </div>
      <div style={{ padding: "18px" }}>
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.18rem", color: "#e8e0d4", margin: "0 0 7px 0", lineHeight: 1.25, fontWeight: 600 }}>
          {g(article.title, lang)}
        </h3>
        <p style={{
          fontFamily: "'Libre Franklin', sans-serif", color: "#8a7e6b", fontSize: "0.82rem", lineHeight: 1.55, margin: "0 0 14px 0",
          display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden",
        }}>
          {g(article.excerpt, lang)}
        </p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "14px", borderTop: "1px solid #242018" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.72rem", color: "#5e5648", display: "flex", alignItems: "center", gap: "4px" }}>
              <I.Clock /> {article.readTime}
            </span>
            <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.72rem", color: "#5e5648" }}>
              {article.pointsOfInterest.length} {t("card_places")} · {article.events.length} {t("card_events")}
            </span>
          </div>
          <span style={{ color: h ? "#d4a853" : "#5e5648", transition: "all 0.25s", transform: h ? "translateX(3px)" : "none", display: "flex" }}>
            <I.Arrow />
          </span>
        </div>

        {/* Quick-book strip */}
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            display: "flex", gap: "6px", paddingTop: "12px",
            borderTop: "1px solid #1a1714", marginTop: "12px",
          }}
        >
          {[
            { emoji: "✈️", label: lang === "es" ? "Vuelo" : "Flight", partner: "kiwi",         type: "service"  },
            { emoji: "🏨", label: lang === "es" ? "Hotel" : "Hotel",  partner: "booking",       type: "hotel"    },
            { emoji: "🎯", label: lang === "es" ? "Tours" : "Tours",  partner: "getyourguide",  type: "activity" },
          ].map(({ emoji, label, partner, type }) => (
            <a
              key={partner}
              href={buildDeepLink(partner, article.city, "")}
              target="_blank"
              rel="sponsored noopener noreferrer"
              onClick={() => trackClick(partner, type, label, article.city, "card")}
              style={{
                flex: 1, display: "flex", alignItems: "center", justifyContent: "center",
                gap: "4px", padding: "6px 4px", borderRadius: "6px",
                background: "rgba(255,255,255,0.03)", border: "1px solid #2a2416",
                fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.7rem",
                color: "#5e5648", textDecoration: "none", transition: "all 0.15s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(212,168,83,0.08)"; e.currentTarget.style.color = "#d4a853"; e.currentTarget.style.borderColor = "rgba(212,168,83,0.25)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.color = "#5e5648"; e.currentTarget.style.borderColor = "#2a2416"; }}
            >
              <span style={{ fontSize: "0.72rem" }}>{emoji}</span> {label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
};
