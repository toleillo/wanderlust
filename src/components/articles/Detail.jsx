import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { I } from "@components/icons";
import { AffBtn } from "@components/affiliate";
import { RichContent, TableOfContents } from "@components/content";
import { Sidebar } from "@components/layout";
import { Newsletter, SmartImage, AffiliateDisclosure } from "@components/ui";
import { useLocale } from "@i18n";
import { ARTICLES, GUIDES, g } from "@data";
import { NarratorCard } from "./NarratorCard.jsx";
import { PlacesList } from "./PlacesList.jsx";
import { EventsList } from "./EventsList.jsx";
import { Card } from "./Card.jsx";

import { RelatedArticles } from "./RelatedArticles.jsx";

export const Detail = ({ article }) => {
  const [tab, setTab] = useState("article");
  const { lang, t } = useLocale();
  const navigate = useNavigate();

  const dateLocale = lang === "en" ? "en-US" : "es-ES";
  const currentSlug = lang === "en" ? article.enSlug : article.slug;

  const GUIDE_SLUGS = {
    europe:  ["vuelos-baratos", "revolut-vs-wise-tarjeta-viaje-2026", "seguros-de-viaje-2026"],
    asia:    ["mejores-esim-viajeros-2026", "vuelos-baratos", "seguros-de-viaje-2026"],
    america: ["vuelos-baratos", "revolut-vs-wise-tarjeta-viaje-2026", "seguros-de-viaje-2026"],
    africa:  ["vuelos-baratos", "mejores-esim-viajeros-2026", "seguros-de-viaje-2026"],
    guides:  ["mejores-esim-viajeros-2026", "mejor-vpn-viajes-2025", "revolut-vs-wise-tarjeta-viaje-2026"],
  };
  const relatedGuides = (GUIDE_SLUGS[article.category] ?? GUIDE_SLUGS.europe)
    .map((s) => GUIDES.find((gd) => gd.slug === s))
    .filter(Boolean);

  const CATEGORY_LABELS = {
    europe:  { es: "Europa",   en: "Europe"  },
    asia:    { es: "Asia",     en: "Asia"    },
    america: { es: "América",  en: "America" },
    africa:  { es: "África",   en: "Africa"  },
    guides:  { es: "Guías",    en: "Guides"  },
  };
  const categoryLabel = (CATEGORY_LABELS[article.category] ?? CATEGORY_LABELS.europe)[lang];
  const homeLabel = lang === "en" ? "Home" : "Inicio";

  return (
    <div style={{ animation: "fadeIn 0.35s ease" }}>
      {/* Breadcrumbs */}
      <nav aria-label="breadcrumb" style={{ marginBottom: "18px" }}>
        <ol style={{ display: "flex", alignItems: "center", gap: "6px", listStyle: "none", padding: 0, margin: 0, flexWrap: "wrap" }}>
          <li>
            <button
              onClick={() => navigate(lang === "en" ? "/en" : "/")}
              style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'Source Serif 4', serif", fontSize: "0.76rem", color: "#9A9080", padding: 0, transition: "color 0.15s" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#B8860B"; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#9A9080"; }}
            >
              {homeLabel}
            </button>
          </li>
          <li aria-hidden="true" style={{ color: "#C8C0B4", fontSize: "0.72rem" }}>›</li>
          <li style={{ fontFamily: "'Source Serif 4', serif", fontSize: "0.76rem", color: "#9A9080" }}>
            {categoryLabel}
          </li>
          <li aria-hidden="true" style={{ color: "#C8C0B4", fontSize: "0.72rem" }}>›</li>
          <li style={{ fontFamily: "'Source Serif 4', serif", fontSize: "0.76rem", color: "#1A1A18", fontWeight: 600 }} aria-current="page">
            {g(article.city, lang)}
          </li>
        </ol>
      </nav>

      {/* Hero */}
      <div style={{ borderRadius: "18px", overflow: "hidden", position: "relative", height: "clamp(220px, 52vw, 380px)", marginBottom: "30px" }}>
        <SmartImage
          src={article.heroImage}
          alt={g(article.title, lang)}
          width={1200}
          height={380}
          priority
          sizes="(max-width: 720px) 100vw, (max-width: 1200px) calc(100vw - 44px), 1140px"
          style={{ width: "100%", height: "100%" }}
        />
        <div className="hero-overlay" style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(transparent 30%, rgba(0,0,0,0.85))",
          display: "flex", flexDirection: "column", justifyContent: "flex-end",
        }}>
          <span style={{ fontFamily: "'Source Serif 4', serif", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#D4A853", marginBottom: "10px" }}>
            {article.emoji} {g(article.city, lang)}, {g(article.country, lang)} · /{currentSlug}
          </span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.7rem,3.8vw,2.5rem)", color: "#fff", margin: "0 0 6px 0", lineHeight: 1.15, fontWeight: 700, maxWidth: "750px" }}>
            {g(article.title, lang)}
          </h1>
          <p style={{ fontFamily: "'Source Serif 4', serif", color: "rgba(255,255,255,0.65)", fontSize: "0.95rem", margin: 0, maxWidth: "580px" }}>
            {g(article.subtitle, lang)}
          </p>
          <div style={{ display: "flex", gap: "14px", marginTop: "14px", alignItems: "center", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "'Source Serif 4', serif", fontSize: "0.76rem", color: "rgba(255,255,255,0.45)", display: "flex", alignItems: "center", gap: "4px" }}>
              <I.Clock /> {article.readTime}
            </span>
            <span style={{ fontFamily: "'Source Serif 4', serif", fontSize: "0.76rem", color: "rgba(255,255,255,0.45)" }}>
              {new Date(article.date).toLocaleDateString(dateLocale, { day: "numeric", month: "long", year: "numeric" })}
            </span>
          </div>
        </div>
      </div>

      {/* Two-column layout */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "28px", alignItems: "start" }} className="detail-grid">
        <div>
          {/* Tabs */}
          <div style={{ display: "flex", gap: "3px", background: "#F0EEE9", padding: "3px", borderRadius: "11px", marginBottom: "28px", border: "1px solid #E5E1D8" }}>
            {[
              { k: "article", l: t("tab_article") },
              { k: "places",  l: `${t("tab_places")} (${article.pointsOfInterest.length})` },
              { k: "events",  l: `${t("tab_events")} (${article.events.length})` },
            ].map((tb) => (
              <button key={tb.k} onClick={() => setTab(tb.k)} style={{
                flex: 1, padding: "11px", borderRadius: "8px", border: "none",
                background: tab === tb.k ? "#FFFFFF" : "transparent",
                color: tab === tb.k ? "#1A1A18" : "#9A9080",
                fontFamily: "'Source Serif 4', serif", fontSize: "0.82rem", fontWeight: 600,
                cursor: "pointer", transition: "all 0.15s",
                boxShadow: tab === tb.k ? "0 1px 4px rgba(0,0,0,0.06)" : "none",
              }}>
                {tb.l}
              </button>
            ))}
          </div>

          {tab === "article" && (
            <div style={{ maxWidth: "720px" }}>
              <AffiliateDisclosure />
              {article.narrator && (
                <NarratorCard narratorId={article.narrator} lang={lang} />
              )}
              <TableOfContents content={g(article.content, lang)} />
              <div style={{ fontSize: "1.15rem", lineHeight: 1.85 }}>
                <RichContent content={g(article.content, lang)} city={article.city} />
              </div>

              {/* FAQ Section — visible to Google for rich results */}
              {(article.faq?.[lang] ?? []).length > 0 && (
                <div style={{ marginTop: "44px" }}>
                  <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", color: "#1A1A18", margin: "0 0 4px", fontWeight: 600 }}>
                    {lang === "en" ? "Frequently asked questions" : "Preguntas frecuentes"}
                  </h2>
                  <div style={{ marginTop: "14px" }}>
                    {article.faq[lang].map((item, idx) => (
                      <details key={idx} style={{ borderTop: "1px solid #E5E1D8", padding: "15px 0" }}>
                        <summary style={{ fontFamily: "'Source Serif 4', serif", fontSize: "0.95rem", fontWeight: 600, color: "#1A1A18", cursor: "pointer", userSelect: "none", lineHeight: 1.4 }}>
                          {item.question}
                        </summary>
                        <p style={{ fontFamily: "'Source Serif 4', serif", fontSize: "0.9rem", color: "#4A4540", lineHeight: 1.7, margin: "10px 0 0 0", paddingLeft: "2px" }}>
                          {item.answer}
                        </p>
                      </details>
                    ))}
                    <div style={{ borderTop: "1px solid #E5E1D8" }} />
                  </div>
                </div>
              )}

              <div style={{ background: "#F4F2EE", border: "1px solid #E5E1D8", borderRadius: "14px", padding: "24px" }}>
                <h4 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#1A1A18", margin: "0 0 6px 0", fontSize: "1.2rem", fontWeight: 600 }}>
                  {t("eoa_title", { city: g(article.city, lang) })}
                </h4>
                <p style={{ fontFamily: "'Source Serif 4', serif", color: "#1A1A18", fontSize: "0.82rem", margin: "0 0 14px 0", lineHeight: 1.5 }}>
                  {t("eoa_sub")}
                </p>
                <div style={{ display: "flex", gap: "7px", flexWrap: "wrap" }}>
                  <AffBtn label={t("btn_flights")}     partner="skyscanner"   city={article.city} type="service"    />
                  <AffBtn label={t("btn_hotels")}      partner="booking"      city={article.city} type="hotel"      />
                  <AffBtn label={t("btn_cars")}        partner="discovercars" city={article.city} type="service"    />
                  <AffBtn label={t("btn_activities")}  partner="getyourguide" city={article.city} type="activity"   />
                  <AffBtn label={t("btn_restaurants")} partner="thefork"      city={article.city} type="restaurant" />
                </div>
              </div>

              <Newsletter compact />
            </div>
          )}

          {tab === "places" && (
            <PlacesList pointsOfInterest={article.pointsOfInterest} articleCity={article.city} />
          )}

          {tab === "events" && (
            <EventsList events={article.events} articleCity={article.city} />
          )}
        </div>

        {/* Right column: sidebar + ad slots + guides */}
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <Sidebar services={article.services} city={article.city} />

          {/* Related guides */}
          <div style={{ background: "#FFFFFF", border: "1px solid #E5E1D8", borderRadius: "14px", padding: "18px" }}>
            <h4 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1rem", fontWeight: 600,
              color: "#1A1A18", margin: "0 0 12px",
            }}>
              {t("related_guides")}
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {relatedGuides.map((guide) => {
                const guideUrl = lang === "en" ? `/en/guide/${guide.enSlug}` : `/guia/${guide.slug}`;
                return (
                  <button
                    key={guide.id}
                    onClick={() => { navigate(guideUrl); window.scrollTo({ top: 0, behavior: "smooth" }); }}
                    style={{
                      display: "flex", alignItems: "center", gap: "10px",
                      background: "none", border: "none", cursor: "pointer",
                      padding: "8px 10px", borderRadius: "8px",
                      transition: "background 0.15s", textAlign: "left", width: "100%",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = "#F4F2EE"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = "none"; }}
                  >
                    <img
                      src={guide.heroImage}
                      alt=""
                      style={{ width: "44px", height: "44px", borderRadius: "6px", objectFit: "cover", flexShrink: 0 }}
                    />
                    <span style={{
                      fontFamily: "'Source Serif 4', serif",
                      fontSize: "0.76rem", color: "#1A1A18", lineHeight: 1.35,
                    }}>
                      {g(guide.title, lang)}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Related articles */}
      <RelatedArticles currentArticleId={article.id} category={article.category} tags={article.tags} />
    </div>
  );
};
