import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { I } from "@components/icons";
import { AffBtn } from "@components/affiliate";
import { RichContent } from "@components/content";
import { Sidebar, MobileBookingBar } from "@components/layout";
import { AdBanner } from "@components/banners";
import { useScrollPosition } from "@hooks";
import { useLocale } from "@i18n";
import { ARTICLES, g } from "@data";
import { PlacesList } from "./PlacesList.jsx";
import { EventsList } from "./EventsList.jsx";
import { Card } from "./Card.jsx";

export const Detail = ({ article }) => {
  const [tab, setTab] = useState("article");
  const scrolled = useScrollPosition(500);
  const { lang, t } = useLocale();
  const navigate = useNavigate();

  const dateLocale = lang === "en" ? "en-US" : "es-ES";
  const currentSlug = lang === "en" ? article.enSlug : article.slug;

  const related = ARTICLES
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3);

  return (
    <div style={{ animation: "fadeIn 0.35s ease" }}>
      <button onClick={() => navigate(lang === "en" ? "/en" : "/")} style={{
        display: "inline-flex", alignItems: "center", gap: "7px",
        background: "rgba(255,255,255,0.04)", border: "1px solid #242018", borderRadius: "9px",
        color: "#8a7e6b", fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.82rem",
        padding: "9px 16px", cursor: "pointer", marginBottom: "22px", transition: "all 0.15s",
      }}>
        <I.Back /> {t("back")}
      </button>

      {/* Hero */}
      <div style={{ borderRadius: "18px", overflow: "hidden", position: "relative", height: "380px", marginBottom: "30px" }}>
        <img src={article.heroImage} alt={article.city} style={{ width: "100%", height: "100%", objectFit: "cover" }} fetchpriority="high" />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(transparent 35%, rgba(0,0,0,0.88))",
          display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "36px",
        }}>
          <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.68rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#d4a853", marginBottom: "10px" }}>
            {article.emoji} {article.city}, {g(article.country, lang)} · /{currentSlug}
          </span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.7rem,3.8vw,2.5rem)", color: "#fff", margin: "0 0 6px 0", lineHeight: 1.15, fontWeight: 700, maxWidth: "750px" }}>
            {g(article.title, lang)}
          </h1>
          <p style={{ fontFamily: "'Libre Franklin', sans-serif", color: "rgba(255,255,255,0.65)", fontSize: "0.95rem", margin: 0, maxWidth: "580px" }}>
            {g(article.subtitle, lang)}
          </p>
          <div style={{ display: "flex", gap: "14px", marginTop: "14px", alignItems: "center", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.76rem", color: "rgba(255,255,255,0.45)", display: "flex", alignItems: "center", gap: "4px" }}>
              <I.Clock /> {article.readTime}
            </span>
            <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.76rem", color: "rgba(255,255,255,0.45)" }}>
              {new Date(article.date).toLocaleDateString(dateLocale, { day: "numeric", month: "long", year: "numeric" })}
            </span>
          </div>
        </div>
      </div>

      {/* Two-column layout */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "28px", alignItems: "start" }} className="detail-grid">
        <div>
          {/* Tabs */}
          <div style={{ display: "flex", gap: "3px", background: "#12100d", padding: "3px", borderRadius: "11px", marginBottom: "28px", border: "1px solid #242018" }}>
            {[
              { k: "article", l: t("tab_article") },
              { k: "places",  l: `${t("tab_places")} (${article.pointsOfInterest.length})` },
              { k: "events",  l: `${t("tab_events")} (${article.events.length})` },
            ].map((tb) => (
              <button key={tb.k} onClick={() => setTab(tb.k)} style={{
                flex: 1, padding: "11px", borderRadius: "8px", border: "none",
                background: tab === tb.k ? "#262420" : "transparent",
                color: tab === tb.k ? "#e8e0d4" : "#5e5648",
                fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.82rem", fontWeight: 600,
                cursor: "pointer", transition: "all 0.15s",
              }}>
                {tb.l}
              </button>
            ))}
          </div>

          {tab === "article" && (
            <div style={{ maxWidth: "680px" }}>
              <RichContent content={g(article.content, lang)} city={article.city} />

              {/* Mid-article ad slot */}
              <div style={{ margin: "28px 0" }}>
                <AdBanner type="affiliate" size="leaderboard" partner="discovercars" />
              </div>

              <div style={{ background: "linear-gradient(135deg, #1a1714, #14120f)", border: "1px solid #3a3530", borderRadius: "14px", padding: "24px" }}>
                <h4 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#e8e0d4", margin: "0 0 6px 0", fontSize: "1.15rem", fontWeight: 600 }}>
                  {t("eoa_title", { city: article.city })}
                </h4>
                <p style={{ fontFamily: "'Libre Franklin', sans-serif", color: "#6b6358", fontSize: "0.8rem", margin: "0 0 14px 0", lineHeight: 1.5 }}>
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
            </div>
          )}

          {tab === "places" && (
            <PlacesList pointsOfInterest={article.pointsOfInterest} articleCity={article.city} />
          )}

          {tab === "events" && (
            <EventsList events={article.events} articleCity={article.city} />
          )}
        </div>

        {/* Right column: sidebar + ad slots */}
        <div style={{ display: "flex", flexDirection: "column", gap: "18px" }}>
          <Sidebar services={article.services} city={article.city} />
          <AdBanner type="affiliate" size="rectangle" partner="safetywing" />
          <AdBanner type="affiliate" size="rectangle" partner="airalo" />
        </div>
      </div>

      {/* Related articles */}
      {related.length > 0 && (
        <div style={{ marginTop: "56px" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", color: "#e8e0d4", margin: "0 0 6px", fontWeight: 600 }}>
            {t("related_articles")}
          </h2>
          <p style={{ fontFamily: "'Libre Franklin', sans-serif", color: "#5e5648", fontSize: "0.85rem", margin: "0 0 20px", lineHeight: 1.5 }}>
            {t("related_articles_sub")}
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "18px" }}>
            {related.map((ra, i) => <Card key={ra.id} article={ra} i={i} />)}
          </div>
        </div>
      )}

      <MobileBookingBar city={article.city} show={scrolled} />
    </div>
  );
};
