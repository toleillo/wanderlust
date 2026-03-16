import { useState, useMemo, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ARTICLES, g } from "@data";
import { useLocale } from "@i18n";
import { useMeta } from "@hooks";
import { AffBtn } from "@components/affiliate";
import { UrgencyBadge } from "@components/ui";
import { EVT_COLORS } from "@styles";
import { I } from "@components/icons";
import { slugifyEvent } from "@utils";

// ─── Resolve bilingual city to stable string key ───────────────────────────
const cityKey = (c) => (c && typeof c === "object") ? (c.es ?? c.en ?? "") : (c ?? "");

// ─── Aggregate all events from all articles ────────────────────────────────
const ALL_EVENTS = ARTICLES.flatMap((article) =>
  (article.events || []).map((ev) => ({
    ...ev,
    articleCity: article.city,       // raw — may be {es,en} object
    articleCityKey: cityKey(article.city), // stable string for filtering
    articleEmoji: article.emoji,
    articleSlug: article.slug,
    articleEnSlug: article.enSlug,
    articleCountry: article.country,
  }))
);

const ALL_TYPES  = [...new Set(ALL_EVENTS.map((ev) => ev.type))];
const ALL_CITIES = ARTICLES.map((a) => ({ city: a.city, cityKey: cityKey(a.city), emoji: a.emoji }));

// ─── Filter pill ───────────────────────────────────────────────────────────
const Pill = ({ label, active, onClick }) => (
  <button
    onClick={onClick}
    style={{
      padding: "6px 14px",
      borderRadius: "20px",
      border: active ? "1px solid #B8860B" : "1px solid #E5E1D8",
      background: active ? "rgba(184,134,11,0.08)" : "#FFFFFF",
      color: active ? "#B8860B" : "#1A1A18",
      fontFamily: "'Source Serif 4', serif",
      fontSize: "0.75rem",
      fontWeight: active ? 600 : 400,
      cursor: "pointer",
      whiteSpace: "nowrap",
      transition: "all 0.15s",
      flexShrink: 0,
    }}
  >
    {label}
  </button>
);

// ─── Event card ────────────────────────────────────────────────────────────
const EventCard = ({ ev, lang, t, navigate }) => {
  const c = EVT_COLORS[ev.type] || EVT_COLORS.default;
  const typeKey = "evttype_" + ev.type.replace("-", "_");
  const articlePath = lang === "en" ? `/en/${ev.articleEnSlug}` : `/${ev.articleSlug}`;
  const evSlug = slugifyEvent(ev.name, ev.articleCity);
  const evPath = lang === "en" ? `/en/event/${evSlug}` : `/evento/${evSlug}`;

  return (
    <div style={{
      background: "#FFFFFF",
      border: "1px solid #E5E1D8",
      borderRadius: "14px",
      padding: "22px 24px",
      display: "flex",
      flexDirection: "column",
      gap: "12px",
      transition: "all 0.2s",
    }}>
      {/* Type + urgency */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
        <span style={{
          fontFamily: "'Source Serif 4', serif",
          fontSize: "0.62rem", fontWeight: 700,
          color: c.text, background: c.bg,
          border: `1px solid ${c.border}`,
          padding: "3px 9px", borderRadius: "4px",
          textTransform: "uppercase", letterSpacing: "0.06em",
        }}>
          {t(typeKey)}
        </span>
        {ev.urgency && <UrgencyBadge text={t("urgency")} />}
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "1.25rem", fontWeight: 700,
        color: "#1A1A18", margin: 0, lineHeight: 1.2,
      }}>
        {g(ev.name, lang)}
      </h3>

      {/* City + date + venue */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "14px" }}>
        <button
          onClick={() => navigate(articlePath)}
          style={{
            display: "flex", alignItems: "center", gap: "5px",
            background: "none", border: "none", cursor: "pointer",
            padding: 0, color: "#1A1A18",
            fontFamily: "'Source Serif 4', serif", fontSize: "0.78rem",
          }}
        >
          <span>{ev.articleEmoji}</span>
          <span style={{ color: "#B8860B", fontWeight: 600 }}>{g(ev.articleCity, lang)}</span>
        </button>
        <span style={{
          display: "flex", alignItems: "center", gap: "5px",
          fontFamily: "'Source Serif 4', serif", fontSize: "0.78rem", color: "#9A9080",
        }}>
          <I.Calendar /> {g(ev.date, lang)}
        </span>
        <span style={{
          display: "flex", alignItems: "center", gap: "5px",
          fontFamily: "'Source Serif 4', serif", fontSize: "0.78rem", color: "#9A9080",
        }}>
          <I.MapPin /> {g(ev.venue, lang)}
        </span>
      </div>

      {/* Description */}
      <p style={{
        fontFamily: "'Source Serif 4', serif",
        fontSize: "0.92rem", lineHeight: 1.65,
        color: "#1A1A18", margin: 0,
      }}>
        {g(ev.description, lang)}
      </p>

      {/* Affiliate links */}
      {ev.affiliateLinks?.length > 0 && (
        <div style={{ display: "flex", gap: "7px", flexWrap: "wrap", marginTop: "2px" }}>
          {ev.affiliateLinks.map((l, j) => (
            <AffBtn
              key={j}
              label={g(l.label, lang)}
              partner={l.partner}
              query={l.query}
              type={l.type}
              city={ev.articleCity}
            />
          ))}
        </div>
      )}

      {/* Event detail link */}
      <div style={{ borderTop: "1px solid #E5E1D8", paddingTop: "10px" }}>
        <button
          onClick={() => navigate(evPath)}
          style={{
            display: "inline-flex", alignItems: "center", gap: "5px",
            background: "none", border: "none", cursor: "pointer", padding: 0,
            fontFamily: "'Source Serif 4', serif", fontSize: "0.75rem",
            fontWeight: 600, color: "#B8860B",
          }}
        >
          {lang === "es" ? "Ver ficha completa" : "View full details"} <I.Arrow />
        </button>
      </div>
    </div>
  );
};

const PAGE_SIZE = 12;

// ─── Main view ────────────────────────────────────────────────────────────
export const EventsView = () => {
  const { lang, t } = useLocale();
  const navigate = useNavigate();
  const [activeType, setActiveType] = useState("all");
  const [activeCity, setActiveCity] = useState("all");
  const [page, setPage]       = useState(1);
  const [loading, setLoading] = useState(false);
  const loaderRef = useRef(null);

  useMeta({
    title: `${t("events_page_title")} — ElTechoEncima`,
    description: t("events_page_sub"),
    canonical: lang === "en" ? "/en/events" : "/eventos",
    lang,
    type: "website",
    altUrl: lang === "en" ? "/eventos" : "/en/events",
  });

  const filtered = useMemo(() => {
    return ALL_EVENTS.filter((ev) => {
      const matchType = activeType === "all" || ev.type === activeType;
      const matchCity = activeCity === "all" || ev.articleCityKey === activeCity;
      return matchType && matchCity;
    });
  }, [activeType, activeCity]);

  // Reset page whenever filters change
  useEffect(() => { setPage(1); }, [activeType, activeCity]);

  const visible = useMemo(() => filtered.slice(0, page * PAGE_SIZE), [filtered, page]);
  const hasMore = visible.length < filtered.length;

  // IntersectionObserver — auto-loads next page when sentinel enters viewport
  useEffect(() => {
    const el = loaderRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && hasMore && !loading) {
          setLoading(true);
          setTimeout(() => {
            setPage((p) => p + 1);
            setLoading(false);
          }, 250);
        }
      },
      { rootMargin: "200px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [hasMore, loading]);

  const scrollbarHide = {
    overflowX: "auto",
    msOverflowStyle: "none",
    scrollbarWidth: "none",
  };

  return (
    <div>
      {/* Page header */}
      <div style={{ marginBottom: "36px" }}>
        <p style={{
          fontFamily: "'Source Serif 4', serif",
          fontSize: "0.72rem", fontWeight: 700,
          letterSpacing: "0.14em", textTransform: "uppercase",
          color: "#B8860B", margin: "0 0 10px",
        }}>
          {t("nav_events")}
        </p>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2rem, 5vw, 3rem)",
          fontWeight: 700, color: "#1A1A18",
          margin: "0 0 12px", lineHeight: 1.1,
        }}>
          {t("events_page_title")}
        </h1>
        <p style={{
          fontFamily: "'Source Serif 4', serif",
          fontSize: "1rem", color: "#1A1A18",
          lineHeight: 1.65, margin: 0,
          maxWidth: "620px",
        }}>
          {t("events_page_sub")}
        </p>
      </div>

      {/* Filters */}
      <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px" }}>
        {/* Type filter */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{
            fontFamily: "'Source Serif 4', serif",
            fontSize: "0.68rem", fontWeight: 700,
            color: "#9A9080", textTransform: "uppercase",
            letterSpacing: "0.1em", flexShrink: 0, width: "44px",
          }}>
            {t("events_type_label")}
          </span>
          <div style={{ ...scrollbarHide, display: "flex", gap: "7px" }}>
            <Pill
              label={t("events_all_types")}
              active={activeType === "all"}
              onClick={() => setActiveType("all")}
            />
            {ALL_TYPES.map((type) => (
              <Pill
                key={type}
                label={t("evttype_" + type.replace("-", "_"))}
                active={activeType === type}
                onClick={() => setActiveType(type)}
              />
            ))}
          </div>
        </div>

        {/* City filter */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{
            fontFamily: "'Source Serif 4', serif",
            fontSize: "0.68rem", fontWeight: 700,
            color: "#9A9080", textTransform: "uppercase",
            letterSpacing: "0.1em", flexShrink: 0, width: "44px",
          }}>
            {t("events_city_label")}
          </span>
          <div style={{ ...scrollbarHide, display: "flex", gap: "7px" }}>
            <Pill
              label={t("events_all_cities")}
              active={activeCity === "all"}
              onClick={() => setActiveCity("all")}
            />
            {ALL_CITIES.map(({ city, cityKey: ck, emoji }) => (
              <Pill
                key={ck}
                label={`${emoji} ${g(city, lang)}`}
                active={activeCity === ck}
                onClick={() => setActiveCity(ck)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Results count */}
      <p style={{
        fontFamily: "'Source Serif 4', serif",
        fontSize: "0.75rem", color: "#9A9080",
        margin: "0 0 20px",
      }}>
        {lang === "es"
          ? `Mostrando ${visible.length} de ${filtered.length} eventos`
          : `Showing ${visible.length} of ${filtered.length} events`}
      </p>

      {/* Grid */}
      {filtered.length === 0 ? (
        <div style={{
          textAlign: "center", padding: "60px 20px",
          color: "#9A9080",
          fontFamily: "'Source Serif 4', serif",
          fontSize: "0.9rem",
        }}>
          {t("events_no_results")}
        </div>
      ) : (
        <>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
            gap: "18px",
          }}>
            {visible.map((ev, i) => (
              <EventCard key={`${ev.articleSlug}-${i}`} ev={ev} lang={lang} t={t} navigate={navigate} />
            ))}
          </div>

          {/* Sentinel + load-more */}
          <div ref={loaderRef} style={{ marginTop: "40px", textAlign: "center", minHeight: "1px" }}>
            {loading && (
              <span style={{
                fontFamily: "'Source Serif 4', serif", fontSize: "0.85rem",
                color: "#B8860B", letterSpacing: "0.08em",
              }}>
                ···
              </span>
            )}
            {!loading && hasMore && (
              <button
                onClick={() => {
                  setLoading(true);
                  setTimeout(() => { setPage((p) => p + 1); setLoading(false); }, 250);
                }}
                style={{
                  fontFamily: "'Source Serif 4', serif", fontSize: "0.85rem",
                  fontWeight: 600, color: "#B8860B",
                  background: "rgba(184,134,11,0.06)", border: "1px solid rgba(184,134,11,0.22)",
                  borderRadius: "10px", padding: "11px 28px",
                  cursor: "pointer", transition: "all 0.15s",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(184,134,11,0.12)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(184,134,11,0.06)"; }}
              >
                {lang === "es" ? "Cargar más eventos" : "Load more events"}
              </button>
            )}
            {!hasMore && filtered.length > PAGE_SIZE && (
              <p style={{ fontFamily: "'Source Serif 4', serif", fontSize: "0.78rem", color: "#C8C0B4" }}>
                {lang === "es" ? `Todos los ${filtered.length} eventos cargados` : `All ${filtered.length} events loaded`}
              </p>
            )}
          </div>
        </>
      )}
    </div>
  );
};
