import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { I } from "@components/icons";
import { AdBanner } from "@components/banners";
import { Card } from "@components/articles";
import { ARTICLES, GUIDES, g } from "@data";
import { useLocale } from "@i18n";
import { useMeta } from "@hooks";

export const HomeView = () => {
  const { lang, t } = useLocale();
  const navigate = useNavigate();
  const location = useLocation();
  const [filter, setFilter] = useState("all");

  // Scroll to guides section when arriving via nav link
  useEffect(() => {
    if (location.state?.scrollTo === "guides") {
      setTimeout(() => {
        document.getElementById("guides-section")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    }
  }, [location.state]);

  useMeta({
    title:       lang === "en" ? "Definitive travel guides — destinations, events and activities" : "Guías de viaje definitivas — destinos, eventos y actividades",
    description: t("hero_subtitle"),
    canonical:   lang === "en" ? "/en" : "/",
    lang,
    altUrl:      lang === "en" ? "/" : "/en",
  });

  const cats = ["all", ...new Set(ARTICLES.map((a) => a.category))];
  const filtered = filter === "all" ? ARTICLES : ARTICLES.filter((a) => a.category === filter);

  return (
    <>
      {/* Hero */}
      <div style={{ textAlign: "center", marginBottom: "36px", animation: "fadeSlideUp 0.5s ease" }}>
        <p style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.66rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#d4a853", marginBottom: "14px" }}>
          {t("hero_tag")}
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem,5vw,3.1rem)", fontWeight: 700, color: "#e8e0d4", lineHeight: 1.12, marginBottom: "14px", letterSpacing: "-0.025em" }}>
          <span style={{ background: "linear-gradient(135deg, #d4a853, #e8c87a, #d4a853)", backgroundSize: "200% 200%", animation: "gradientShift 4s ease infinite", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
            {t("hero_title")}
          </span>
        </h1>
        <p style={{ fontFamily: "'Libre Franklin', sans-serif", color: "#5e5648", fontSize: "1rem", maxWidth: "580px", margin: "0 auto", lineHeight: 1.6 }}>
          {t("hero_subtitle")}
        </p>
      </div>

      {/* Ad slot — leaderboard entre hero y filtros */}
      <div style={{ marginBottom: "28px" }}>
        <AdBanner type="affiliate" size="leaderboard" partner="kiwi" />
      </div>

      {/* Filters */}
      <div style={{ display: "flex", gap: "7px", marginBottom: "28px", flexWrap: "wrap" }}>
        {cats.map((c) => (
          <button key={c} onClick={() => setFilter(c)} style={{
            padding: "7px 16px", borderRadius: "7px",
            border: `1px solid ${filter === c ? "#d4a853" : "#242018"}`,
            background: filter === c ? "rgba(212,168,83,0.08)" : "transparent",
            color: filter === c ? "#d4a853" : "#5e5648",
            fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.78rem", fontWeight: 600,
            cursor: "pointer", transition: "all 0.15s",
          }}>
            {t("cat_" + c)}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))", gap: "22px" }}>
        {filtered.map((a, i) => <Card key={a.id} article={a} i={i} />)}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: "center", padding: "56px 20px", color: "#5e5648", fontFamily: "'Libre Franklin', sans-serif" }}>
          <p style={{ fontSize: "1rem", marginBottom: "7px" }}>{t("no_articles")}</p>
          <p style={{ fontSize: "0.85rem" }}>{t("no_articles_sub")}</p>
        </div>
      )}

      {/* Ad slot — entre artículos y guías */}
      <div style={{ margin: "44px 0 36px" }}>
        <AdBanner type="affiliate" size="leaderboard" partner="booking" />
      </div>

      {/* Guides */}
      <div id="guides-section">
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", color: "#e8e0d4", marginBottom: "8px", fontWeight: 600 }}>
          {t("guides_title")}
        </h2>
        <p style={{ fontFamily: "'Libre Franklin', sans-serif", color: "#5e5648", fontSize: "0.88rem", marginBottom: "22px", lineHeight: 1.5 }}>
          {t("guides_sub")}
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "14px" }}>
          {GUIDES.map((guide) => {
            const url = lang === "en" ? `/en/guide/${guide.enSlug}` : `/guia/${guide.slug}`;
            return (
              <div
                key={guide.id}
                onClick={() => navigate(url)}
                style={{ background: "#16140f", border: "1px solid #242018", borderRadius: "12px", overflow: "hidden", cursor: "pointer", transition: "all 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.border = "1px solid #4a4030"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.border = "1px solid #242018"; e.currentTarget.style.transform = "none"; }}
              >
                <div style={{ height: "130px", overflow: "hidden" }}>
                  <img src={guide.heroImage} alt={g(guide.title, lang)} loading="lazy"
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s" }}
                    onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.04)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
                  />
                </div>
                <div style={{ padding: "16px 18px" }}>
                  <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4a853", marginBottom: "6px", display: "block" }}>
                    {g(guide.category, lang)}
                  </span>
                  <h4 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#e8e0d4", fontSize: "1rem", margin: "0 0 10px 0", lineHeight: 1.3, fontWeight: 600 }}>
                    {g(guide.title, lang)}
                  </h4>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.7rem", color: "#5e5648", display: "flex", alignItems: "center", gap: "4px" }}>
                      <I.Clock /> {guide.readTime}
                    </span>
                    <span style={{ color: "#4a4030", display: "flex" }}><I.Arrow /></span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Ad slot — bajo guías */}
      <div style={{ marginTop: "44px" }}>
        <AdBanner type="affiliate" size="leaderboard" partner="getyourguide" />
      </div>
    </>
  );
};
