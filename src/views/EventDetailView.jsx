import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ARTICLES, g } from "@data";
import { useLocale } from "@i18n";
import { useMeta } from "@hooks";
import { AffBtn } from "@components/affiliate";
import { UrgencyBadge } from "@components/ui";
import { EVT_COLORS } from "@styles";
import { I } from "@components/icons";
import { slugifyEvent } from "@utils";

// ─── Flat list of all events + their parent article ────────────────────────
const ALL_EVENTS_FLAT = ARTICLES.flatMap((article) =>
  (article.events || []).map((ev) => ({ ...ev, article }))
);

export const EventDetailView = () => {
  const { slug } = useParams();
  const { lang, t } = useLocale();
  const navigate = useNavigate();

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  const found = ALL_EVENTS_FLAT.find(
    (item) => slugifyEvent(item.name, item.article.city) === slug
  );

  const ev      = found || null;
  const article = found?.article || null;

  useMeta({
    title:       ev ? g(ev.name, lang) : t("not_found"),
    description: ev ? g(ev.description, lang) : "",
    canonical:   ev ? (lang === "en" ? `/en/event/${slug}` : `/evento/${slug}`) : null,
    image:       article?.heroImage,
    lang,
    altUrl:      ev ? (lang === "en" ? `/evento/${slug}` : `/en/event/${slug}`) : null,
  });

  // JSON-LD Event structured data
  useEffect(() => {
    if (!ev || !article) return;
    const schema = {
      "@context": "https://schema.org",
      "@type": "Event",
      name: g(ev.name, lang),
      description: g(ev.description, lang),
      startDate: ev.date,
      location: {
        "@type": "Place",
        name: g(ev.venue, lang),
        address: { "@type": "PostalAddress", addressLocality: article.city },
      },
      eventStatus: "https://schema.org/EventScheduled",
      image: article.heroImage,
      organizer: { "@type": "Organization", name: g(ev.venue, lang) },
      url: `https://www.eltechoencima.com${lang === "en" ? "/en/event/" : "/evento/"}${slug}`,
    };
    const el = document.createElement("script");
    el.type = "application/ld+json";
    el.id = "event-schema";
    el.textContent = JSON.stringify(schema);
    document.head.appendChild(el);
    return () => { document.getElementById("event-schema")?.remove(); };
  }, [slug, lang, ev, article]);

  if (!ev || !article) {
    return (
      <div style={{ textAlign: "center", padding: "80px 20px", color: "#1A1A18", fontFamily: "'Source Serif 4', serif" }}>
        <p style={{ fontSize: "1rem", marginBottom: "14px" }}>{t("not_found")}</p>
        <button
          onClick={() => navigate(lang === "en" ? "/en/events" : "/eventos")}
          style={{ background: "none", border: "1px solid #E5E1D8", borderRadius: "8px", color: "#B8860B", padding: "9px 18px", cursor: "pointer", fontFamily: "'Source Serif 4', serif", fontSize: "0.82rem" }}
        >
          {lang === "es" ? "Ver todos los eventos" : "View all events"}
        </button>
      </div>
    );
  }

  const c         = EVT_COLORS[ev.type] || EVT_COLORS.default;
  const typeKey   = "evttype_" + ev.type.replace("-", "_");
  const articlePath = lang === "en" ? `/en/${article.enSlug}` : `/${article.slug}`;

  const evNameStr = g(ev.name, lang);
  const related = ALL_EVENTS_FLAT.filter(
    (item) => item.type === ev.type && g(item.name, lang) !== evNameStr
  ).slice(0, 3);

  return (
    <div style={{ animation: "fadeIn 0.35s ease", maxWidth: "800px", margin: "0 auto" }}>

      {/* Back */}
      <button
        onClick={() => navigate(lang === "en" ? "/en/events" : "/eventos")}
        style={{
          display: "inline-flex", alignItems: "center", gap: "7px",
          background: "rgba(0,0,0,0.03)", border: "1px solid #E5E1D8", borderRadius: "9px",
          color: "#1A1A18", fontFamily: "'Source Serif 4', serif", fontSize: "0.82rem",
          padding: "9px 16px", cursor: "pointer", marginBottom: "22px", transition: "all 0.15s",
        }}
      >
        <I.Back /> {lang === "es" ? "Todos los eventos" : "All events"}
      </button>

      {/* Hero */}
      <div style={{ borderRadius: "18px", overflow: "hidden", position: "relative", height: "320px", marginBottom: "30px" }}>
        <img
          src={article.heroImage}
          alt={g(ev.name, lang)}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          fetchpriority="high"
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(transparent 20%, rgba(0,0,0,0.92))",
          display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "36px",
        }}>
          {/* Type + urgency */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px", flexWrap: "wrap" }}>
            <span style={{
              fontFamily: "'Source Serif 4', serif", fontSize: "0.65rem", fontWeight: 700,
              letterSpacing: "0.1em", textTransform: "uppercase",
              color: c.text, background: c.bg, border: `1px solid ${c.border}`,
              padding: "4px 10px", borderRadius: "4px",
            }}>
              {t(typeKey)}
            </span>
            {ev.urgency && <UrgencyBadge text={t("urgency")} />}
          </div>

          {/* Title */}
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
            fontWeight: 700, color: "#fff",
            margin: "0 0 14px", lineHeight: 1.1,
          }}>
            {g(ev.name, lang)}
          </h1>

          {/* City + date + venue */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
            <button
              onClick={() => navigate(articlePath)}
              style={{
                display: "inline-flex", alignItems: "center", gap: "5px",
                background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.25)",
                borderRadius: "6px", padding: "4px 10px",
                color: "#fff", fontFamily: "'Source Serif 4', serif", fontSize: "0.78rem",
                cursor: "pointer",
              }}
            >
              {article.emoji} {article.city}
            </button>
            <span style={{ display: "flex", alignItems: "center", gap: "5px", fontFamily: "'Source Serif 4', serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.6)" }}>
              <I.Calendar /> {ev.date}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "5px", fontFamily: "'Source Serif 4', serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.6)" }}>
              <I.MapPin /> {g(ev.venue, lang)}
            </span>
          </div>
        </div>
      </div>

      {/* Description */}
      <p style={{
        fontFamily: "'Source Serif 4', serif",
        fontSize: "1.05rem", lineHeight: 1.75,
        color: "#1A1A18", margin: "0 0 28px",
      }}>
        {g(ev.description, lang)}
      </p>

      {/* Affiliate links */}
      {ev.affiliateLinks?.length > 0 && (
        <div style={{
          background: "#F4F2EE",
          border: "1px solid #E5E1D8", borderRadius: "14px", padding: "24px",
          marginBottom: "28px",
        }}>
          <h4 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#1A1A18", margin: "0 0 6px", fontSize: "1.1rem", fontWeight: 600 }}>
            {lang === "es" ? "Consigue tu entrada" : "Get your tickets"}
          </h4>
          <p style={{ fontFamily: "'Source Serif 4', serif", color: "#1A1A18", fontSize: "0.78rem", margin: "0 0 14px", lineHeight: 1.5 }}>
            {lang === "es" ? "Compra con antelación — las entradas desaparecen más rápido de lo que tardas en decidirte." : "Buy ahead — tickets vanish faster than your will to pack light."}
          </p>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {ev.affiliateLinks.map((l, i) => (
              <AffBtn
                key={i}
                label={g(l.label, lang)}
                partner={l.partner}
                query={l.query}
                type={l.type}
                city={article.city}
              />
            ))}
          </div>
        </div>
      )}

      {/* Article link */}
      <div style={{
        background: "#FFFFFF", border: "1px solid #E5E1D8", borderRadius: "14px",
        padding: "20px 24px", marginBottom: "40px",
        display: "flex", justifyContent: "space-between", alignItems: "center", gap: "16px",
        flexWrap: "wrap",
      }}>
        <div>
          <p style={{ fontFamily: "'Source Serif 4', serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#B8860B", margin: "0 0 5px" }}>
            {lang === "es" ? "Guía de destino" : "Destination guide"}
          </p>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", color: "#1A1A18", margin: 0, fontWeight: 600 }}>
            {article.emoji} {g(article.title, lang)}
          </p>
        </div>
        <button
          onClick={() => navigate(articlePath)}
          style={{
            display: "inline-flex", alignItems: "center", gap: "7px",
            background: "rgba(184,134,11,0.07)", border: "1px solid rgba(184,134,11,0.22)", borderRadius: "9px",
            color: "#B8860B", fontFamily: "'Source Serif 4', serif", fontSize: "0.82rem", fontWeight: 600,
            padding: "9px 16px", cursor: "pointer", whiteSpace: "nowrap",
          }}
        >
          {lang === "es" ? "Ver guía" : "View guide"} <I.Arrow />
        </button>
      </div>

      {/* Related events */}
      {related.length > 0 && (
        <div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.4rem", color: "#1A1A18", margin: "0 0 6px", fontWeight: 600 }}>
            {lang === "es" ? "Eventos similares" : "Similar events"}
          </h2>
          <p style={{ fontFamily: "'Source Serif 4', serif", color: "#9A9080", fontSize: "0.85rem", margin: "0 0 18px", lineHeight: 1.5 }}>
            {lang === "es" ? "Más eventos de este tipo que seguramente también ignorarás hasta el último momento." : "More events of this type that you'll probably also book at the very last minute."}
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "14px" }}>
            {related.map((item) => {
              const rc = EVT_COLORS[item.type] || EVT_COLORS.default;
              const rSlug = slugifyEvent(item.name, item.article.city);
              const rPath = lang === "en" ? `/en/event/${rSlug}` : `/evento/${rSlug}`;
              return (
                <div
                  key={g(item.name, lang) + item.article.city}
                  onClick={() => { navigate(rPath); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                  style={{
                    background: "#FFFFFF", border: "1px solid #E5E1D8", borderRadius: "12px",
                    padding: "16px 18px", cursor: "pointer", transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#C8C0B0"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.06)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "#E5E1D8"; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <span style={{
                    display: "inline-block", fontFamily: "'Source Serif 4', serif",
                    fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase",
                    color: rc.text, background: rc.bg, border: `1px solid ${rc.border}`,
                    padding: "2px 7px", borderRadius: "3px", marginBottom: "8px",
                  }}>
                    {t("evttype_" + item.type.replace("-", "_"))}
                  </span>
                  <h4 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#1A1A18", fontSize: "0.98rem", margin: "0 0 6px", fontWeight: 600, lineHeight: 1.25 }}>
                    {g(item.name, lang)}
                  </h4>
                  <p style={{ fontFamily: "'Source Serif 4', serif", fontSize: "0.72rem", color: "#9A9080", margin: 0 }}>
                    {item.article.emoji} {item.article.city} · {item.date}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
