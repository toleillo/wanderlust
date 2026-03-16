import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { I } from "@components/icons";
import { Card } from "@components/articles";
import { Newsletter, SmartImage } from "@components/ui";
import { ARTICLES, GUIDES, g } from "@data";
import { useLocale } from "@i18n";
import { useMeta } from "@hooks";

const CAT_ICONS = {
  all: "🌍",
  europe: "🇪🇺",
  asia: "🌏",
  america: "🌎",
  africa: "🌍",
  oceania: "🇦🇺",
  guides: "📖"
};

export const HomeView = () => {
  const { lang, t } = useLocale();
  const navigate = useNavigate();
  const location = useLocation();
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(9);

  // Reset visible count when filter or search changes
  useEffect(() => { setVisibleCount(9); }, [filter, query]);

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
    type:        "website",
    altUrl:      lang === "en" ? "/" : "/en",
  });

  const cats = ["all", ...new Set(ARTICLES.map((a) => a.category))];

  const filtered = ARTICLES.filter((a) => {
    const matchCat = filter === "all" || a.category === filter;
    if (!query.trim()) return matchCat;
    const q = query.toLowerCase();
    const cityStr = (a.city && typeof a.city === "object") ? `${a.city.es} ${a.city.en}` : (a.city ?? "");
    const haystack = [
      typeof a.title === "object" ? `${a.title.es} ${a.title.en}` : (a.title ?? ""),
      cityStr,
      typeof a.excerpt === "object" ? `${a.excerpt.es} ${a.excerpt.en}` : (a.excerpt ?? ""),
    ].join(" ").toLowerCase();
    return matchCat && haystack.includes(q);
  });

  return (
    <>
      {/* Hero — dark/inverted editorial section */}
      <div style={{
        background: "#0E0C09",
        borderRadius: "18px",
        padding: "56px 40px",
        marginBottom: "44px",
        textAlign: "center",
        animation: "fadeSlideUp 0.5s ease",
      }}>
        <p style={{ fontFamily: "'Source Serif 4', serif", fontSize: "0.66rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#D4A853", marginBottom: "14px" }}>
          {t("hero_tag")}
        </p>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2rem,5vw,3.2rem)", fontWeight: 700, color: "#E8E0D4", lineHeight: 1.1, marginBottom: "16px", letterSpacing: "-0.02em" }}>
          {t("hero_title")}
        </h1>
        <p style={{ fontFamily: "'Source Serif 4', serif", color: "#8a7e6b", fontSize: "1.05rem", maxWidth: "560px", margin: "0 auto", lineHeight: 1.65 }}>
          {t("hero_subtitle")}
        </p>
      </div>

      {/* Search */}
      <div style={{ position: "relative", marginBottom: "16px" }}>
        <span style={{ position: "absolute", left: "14px", top: "50%", transform: "translateY(-50%)", color: "#9A9080", pointerEvents: "none", display: "flex" }}>
          <svg width="15" height="15" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="8.5" cy="8.5" r="5.5"/><line x1="13.5" y1="13.5" x2="18" y2="18"/></svg>
        </span>
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={lang === "en" ? "Search destinations…" : "Buscar destinos…"}
          style={{
            width: "100%", padding: "11px 14px 11px 38px",
            border: "1px solid #E5E1D8", borderRadius: "10px",
            background: "#FFFFFF", color: "#1A1A18",
            fontFamily: "'Source Serif 4', serif", fontSize: "0.9rem",
            outline: "none", boxSizing: "border-box",
          }}
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", cursor: "pointer", color: "#9A9080", padding: "2px", display: "flex" }}
          >
            <svg width="14" height="14" viewBox="0 0 20 20" fill="currentColor"><path d="M6 6l8 8M14 6l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
        )}
      </div>

      {/* Filters */}
      <div style={{ display: "flex", gap: "7px", marginBottom: "28px", flexWrap: "wrap" }}>
        {cats.map((c) => (
          <button key={c} onClick={() => setFilter(c)} style={{
            padding: "7px 16px", borderRadius: "7px",
            border: `1px solid ${filter === c ? "#B8860B" : "#E5E1D8"}`,
            background: filter === c ? "rgba(184,134,11,0.07)" : "transparent",
            color: filter === c ? "#B8860B" : "#1A1A18",
            fontFamily: "'Source Serif 4', serif", fontSize: "0.82rem", fontWeight: 600,
            cursor: "pointer", transition: "all 0.15s",
            display: "flex", alignItems: "center", gap: "6px"
          }}>
            <span>{CAT_ICONS[c] || "📍"}</span>
            {t("cat_" + c)}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "24px" }}>
        {filtered.slice(0, visibleCount).map((a, i) => <Card key={a.id} article={a} i={i} />)}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: "center", padding: "56px 20px", color: "#9A9080", fontFamily: "'Source Serif 4', serif" }}>
          <p style={{ fontSize: "1rem", marginBottom: "7px" }}>{t("no_articles")}</p>
          <p style={{ fontSize: "0.85rem" }}>{t("no_articles_sub")}</p>
        </div>
      )}

      {/* Load more */}
      {filtered.length > visibleCount && (
        <div style={{ textAlign: "center", marginTop: "36px" }}>
          <button
            onClick={() => setVisibleCount((n) => n + 9)}
            style={{
              padding: "13px 32px", borderRadius: "10px",
              border: "1px solid #B8860B", background: "transparent",
              color: "#B8860B", fontFamily: "'Source Serif 4', serif",
              fontSize: "0.9rem", fontWeight: 600, cursor: "pointer",
              transition: "all 0.15s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(184,134,11,0.07)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
          >
            {lang === "en"
              ? `Load more · ${filtered.length - visibleCount} remaining`
              : `Cargar más · quedan ${filtered.length - visibleCount}`}
          </button>
        </div>
      )}

      <Newsletter />

      {/* Guides */}
      <div id="guides-section" style={{ marginTop: "16px" }}>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.7rem", color: "#1A1A18", marginBottom: "8px", fontWeight: 600 }}>
          {t("guides_title")}
        </h2>
        <p style={{ fontFamily: "'Source Serif 4', serif", color: "#1A1A18", fontSize: "0.9rem", marginBottom: "22px", lineHeight: 1.55 }}>
          {t("guides_sub")}
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "14px" }}>
          {GUIDES.map((guide) => {
            const url = lang === "en" ? `/en/guide/${guide.enSlug}` : `/guia/${guide.slug}`;
            return (
              <div
                key={guide.id}
                onClick={() => navigate(url)}
                style={{ background: "#FFFFFF", border: "1px solid #E5E1D8", borderRadius: "12px", overflow: "hidden", cursor: "pointer", transition: "all 0.2s" }}
                onMouseEnter={(e) => { e.currentTarget.style.border = "1px solid #C8C0B0"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.06)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.border = "1px solid #E5E1D8"; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
              >
                <SmartImage
                  src={guide.heroImage}
                  alt={g(guide.title, lang)}
                  width={400}
                  height={130}
                />
                <div style={{ padding: "16px 18px" }}>
                  <span style={{ fontFamily: "'Source Serif 4', serif", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#B8860B", marginBottom: "6px", display: "block" }}>
                    {g(guide.category, lang)}
                  </span>
                  <h4 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#1A1A18", fontSize: "1.05rem", margin: "0 0 10px 0", lineHeight: 1.3, fontWeight: 600 }}>
                    {g(guide.title, lang)}
                  </h4>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ fontFamily: "'Source Serif 4', serif", fontSize: "0.7rem", color: "#9A9080", display: "flex", alignItems: "center", gap: "4px" }}>
                      <I.Clock /> {guide.readTime}
                    </span>
                    <span style={{ color: "#C8C0B0", display: "flex" }}><I.Arrow /></span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </>
  );
};
