import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GUIDES, g } from "@data";
import { useLocale } from "@i18n";
import { useMeta } from "@hooks";
import { AffBtn } from "@components/affiliate";
import { AdBanner } from "@components/banners";
import { AD_SLOTS } from "@config/google";
import { I } from "@components/icons";

// ─── Numbered tip card ───────────────────────────────────────────────────────
const TipCard = ({ tip, lang, t, isLast }) => (
  <div style={{
    background: "#16140f", border: "1px solid #242018", borderRadius: "14px", padding: "24px 26px",
    display: "flex", gap: "20px", alignItems: "start",
    marginBottom: isLast ? 0 : "14px",
    animation: `fadeSlideUp 0.4s ease ${tip.num * 0.06}s both`,
  }}>
    <span style={{
      fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 700,
      color: "rgba(212,168,83,0.18)", lineHeight: 1, flexShrink: 0, minWidth: "42px",
    }}>
      {String(tip.num).padStart(2, "0")}
    </span>
    <div style={{ flex: 1 }}>
      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem", color: "#e8e0d4", margin: "0 0 8px", fontWeight: 600, lineHeight: 1.2 }}>
        {g(tip.title, lang)}
      </h3>
      <p style={{ fontFamily: "'Libre Franklin', sans-serif", color: "#8a7e6b", fontSize: "0.88rem", lineHeight: 1.65, margin: tip.partner ? "0 0 14px" : 0 }}>
        {g(tip.body, lang)}
      </p>
      {tip.partner && (
        <AffBtn label={t("guide_see_offer")} partner={tip.partner} query={tip.query || ""} city="" type="service" small />
      )}
    </div>
  </div>
);

// ─── Comparison item card ─────────────────────────────────────────────────────
const ComparisonCard = ({ item, lang, t, i }) => {
  const pros = item.pros[lang] ?? item.pros.es ?? [];
  const cons = item.cons[lang] ?? item.cons.es ?? [];
  return (
    <div style={{
      background: "#16140f", border: "1px solid #2a2418", borderRadius: "16px", overflow: "hidden",
      marginBottom: "18px", animation: `fadeSlideUp 0.4s ease ${i * 0.08}s both`,
    }}>
      {/* Header */}
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "20px 24px", background: "linear-gradient(135deg, #1a1710 0%, #16140e 100%)",
        borderBottom: "1px solid #2a2418", flexWrap: "wrap", gap: "10px",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span style={{ fontSize: "1.8rem" }}>{item.logo}</span>
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", color: "#e8e0d4", margin: 0, fontWeight: 700 }}>
            {item.name}
          </h3>
        </div>
        <div style={{ display: "flex", flex: "column", alignItems: "flex-end", gap: "4px" }}>
          <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b6358" }}>
            {t("guide_price")}
          </span>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", color: "#d4a853", fontWeight: 600 }}>
            {g(item.price, lang)}
          </span>
        </div>
      </div>

      {/* Pros / Cons */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
        <div style={{ padding: "18px 20px", borderRight: "1px solid #2a2418" }}>
          <p style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#4a7a4a", margin: "0 0 10px" }}>
            {t("guide_pros")}
          </p>
          {pros.map((p, j) => (
            <div key={j} style={{ display: "flex", gap: "7px", alignItems: "start", marginBottom: "6px" }}>
              <span style={{ color: "#4a7a4a", flexShrink: 0, marginTop: "2px" }}><I.Check /></span>
              <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.8rem", color: "#8a7e6b", lineHeight: 1.45 }}>{p}</span>
            </div>
          ))}
        </div>
        <div style={{ padding: "18px 20px" }}>
          <p style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#7a4a4a", margin: "0 0 10px" }}>
            {t("guide_cons")}
          </p>
          {cons.map((c, j) => (
            <div key={j} style={{ display: "flex", gap: "7px", alignItems: "start", marginBottom: "6px" }}>
              <span style={{ color: "#7a4a4a", flexShrink: 0, marginTop: "1px", fontSize: "0.8rem" }}>✕</span>
              <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.8rem", color: "#8a7e6b", lineHeight: 1.45 }}>{c}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Best for + Verdict + CTA */}
      <div style={{ padding: "16px 24px", borderTop: "1px solid #2a2418", display: "flex", flexDirection: "column", gap: "10px" }}>
        <div>
          <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#6b6358" }}>
            {t("guide_best_for")}:{" "}
          </span>
          <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.82rem", color: "#a09080" }}>
            {g(item.bestFor, lang)}
          </span>
        </div>
        <div style={{ padding: "12px 16px", background: "rgba(212,168,83,0.04)", border: "1px solid rgba(212,168,83,0.1)", borderRadius: "8px" }}>
          <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#d4a853", marginRight: "6px" }}>
            {t("guide_verdict")}:
          </span>
          <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.82rem", color: "#8a7e6b", lineHeight: 1.55, fontStyle: "italic" }}>
            {g(item.verdict, lang)}
          </span>
        </div>
        <AffBtn label={t("guide_see_offer")} partner={item.partner} query="" city="" type="service" />
      </div>
    </div>
  );
};

// ─── Main view ────────────────────────────────────────────────────────────────
export const GuideView = () => {
  const { slug } = useParams();
  const { lang, t } = useLocale();
  const navigate = useNavigate();

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  const guide = lang === "en"
    ? GUIDES.find((gu) => gu.enSlug === slug)
    : GUIDES.find((gu) => gu.slug === slug);

  useMeta({
    title:       guide ? g(guide.title, lang) : t("not_found"),
    description: guide ? g(guide.subtitle, lang) : "",
    canonical:   guide ? (lang === "en" ? `/en/guide/${guide.enSlug}` : `/guia/${guide.slug}`) : null,
    image:       guide?.heroImage,
    lang,
    altUrl:      guide ? (lang === "en" ? `/guia/${guide.slug}` : `/en/guide/${guide.enSlug}`) : null,
  });

  if (!guide) {
    return (
      <div style={{ textAlign: "center", padding: "80px 20px", color: "#5e5648", fontFamily: "'Libre Franklin', sans-serif" }}>
        <p style={{ fontSize: "1rem", marginBottom: "14px" }}>{t("not_found")}</p>
        <button
          onClick={() => navigate(lang === "en" ? "/en" : "/")}
          style={{ background: "none", border: "1px solid #242018", borderRadius: "8px", color: "#d4a853", padding: "9px 18px", cursor: "pointer", fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.82rem" }}
        >
          {t("go_home")}
        </button>
      </div>
    );
  }

  const dateLocale = lang === "en" ? "en-US" : "es-ES";
  const relatedGuides = (guide.related || []).map((id) => GUIDES.find((gu) => gu.id === id)).filter(Boolean);

  return (
    <div style={{ animation: "fadeIn 0.35s ease", maxWidth: "800px", margin: "0 auto" }}>
      {/* Back */}
      <button onClick={() => navigate(lang === "en" ? "/en" : "/")} style={{
        display: "inline-flex", alignItems: "center", gap: "7px",
        background: "rgba(255,255,255,0.04)", border: "1px solid #242018", borderRadius: "9px",
        color: "#8a7e6b", fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.82rem",
        padding: "9px 16px", cursor: "pointer", marginBottom: "22px", transition: "all 0.15s",
      }}>
        <I.Back /> {t("guide_back")}
      </button>

      {/* Hero */}
      <div style={{ borderRadius: "18px", overflow: "hidden", position: "relative", height: "280px", marginBottom: "28px" }}>
        <img src={guide.heroImage} alt={g(guide.title, lang)} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(transparent 20%, rgba(0,0,0,0.9))",
          display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "30px 32px",
        }}>
          <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#d4a853", marginBottom: "8px" }}>
            {g(guide.category, lang)}
          </span>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.5rem,3.5vw,2.1rem)", color: "#fff", margin: "0 0 10px", lineHeight: 1.15, fontWeight: 700 }}>
            {g(guide.title, lang)}
          </h1>
          <div style={{ display: "flex", gap: "14px", alignItems: "center", flexWrap: "wrap" }}>
            <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.74rem", color: "rgba(255,255,255,0.45)", display: "flex", alignItems: "center", gap: "4px" }}>
              <I.Clock /> {guide.readTime}
            </span>
            <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.74rem", color: "rgba(255,255,255,0.45)" }}>
              {new Date(guide.date).toLocaleDateString(dateLocale, { day: "numeric", month: "long", year: "numeric" })}
            </span>
          </div>
        </div>
      </div>

      {/* Subtitle */}
      <p style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.95rem", color: "#6b6358", lineHeight: 1.5, margin: "0 0 6px", fontStyle: "italic" }}>
        {g(guide.subtitle, lang)}
      </p>

      {/* Intro */}
      <p style={{ fontFamily: "'Source Serif 4', serif", fontSize: "1.05rem", color: "#a09080", lineHeight: 1.75, margin: "16px 0 28px" }}>
        {g(guide.intro, lang)}
      </p>

      {/* Top ad slot */}
      <div style={{ marginBottom: "32px" }}>
        <AdBanner type="adsense" size="leaderboard" slot={AD_SLOTS.guide_top} />
      </div>

      {/* ── Tips content ── */}
      {guide.type === "tips" && (() => {
        const half = Math.ceil(guide.tips.length / 2);
        return (
          <>
            {guide.tips.slice(0, half).map((tip, i) => (
              <TipCard key={tip.num} tip={tip} lang={lang} t={t} isLast={i === half - 1} />
            ))}
            <div style={{ margin: "24px 0" }}>
              <AdBanner type="adsense" size="leaderboard" slot={AD_SLOTS.guide_mid} />
            </div>
            {guide.tips.slice(half).map((tip, i) => (
              <TipCard key={tip.num} tip={tip} lang={lang} t={t} isLast={i === guide.tips.slice(half).length - 1} />
            ))}
          </>
        );
      })()}

      {/* ── Comparison content ── */}
      {guide.type === "comparison" && (() => {
        const half = Math.ceil(guide.items.length / 2);
        return (
          <>
            {guide.items.slice(0, half).map((item, i) => (
              <ComparisonCard key={item.name} item={item} lang={lang} t={t} i={i} />
            ))}
            <div style={{ margin: "8px 0 24px" }}>
              <AdBanner type="adsense" size="leaderboard" slot={AD_SLOTS.guide_mid} />
            </div>
            {guide.items.slice(half).map((item, i) => (
              <ComparisonCard key={item.name} item={item} lang={lang} t={t} i={i + half} />
            ))}
          </>
        );
      })()}

      {/* Conclusion */}
      <div style={{
        marginTop: "28px", padding: "24px 28px",
        background: "linear-gradient(135deg, #1a1714, #14120f)",
        border: "1px solid #3a3530", borderRadius: "14px",
      }}>
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#e8e0d4", fontSize: "1.2rem", margin: "0 0 10px", fontWeight: 600 }}>
          {t("guide_conclusion")}
        </h3>
        <p style={{ fontFamily: "'Libre Franklin', sans-serif", color: "#8a7e6b", fontSize: "0.88rem", lineHeight: 1.65, margin: 0 }}>
          {g(guide.conclusion, lang)}
        </p>
      </div>

      {/* CTA partners */}
      {guide.ctaPartners?.length > 0 && (
        <div style={{ marginTop: "24px", padding: "22px 24px", background: "#14120f", border: "1px solid #242018", borderRadius: "14px" }}>
          <h4 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#e8e0d4", fontSize: "1.15rem", margin: "0 0 6px", fontWeight: 600 }}>
            {t("guide_cta_title")}
          </h4>
          <p style={{ fontFamily: "'Libre Franklin', sans-serif", color: "#6b6358", fontSize: "0.8rem", margin: "0 0 16px", lineHeight: 1.5 }}>
            {t("guide_cta_sub")}
          </p>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            {guide.ctaPartners.map((p) => (
              <AffBtn key={p} label={t("guide_see_offer")} partner={p} query="" city="" type="service" />
            ))}
          </div>
        </div>
      )}

      {/* Bottom ad slot */}
      <div style={{ margin: "28px 0" }}>
        <AdBanner type="adsense" size="billboard" slot={AD_SLOTS.guide_bottom} />
      </div>

      {/* Related guides */}
      {relatedGuides.length > 0 && (
        <div style={{ marginTop: "8px" }}>
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#e8e0d4", fontSize: "1.3rem", margin: "0 0 16px", fontWeight: 600 }}>
            {t("guide_related")}
          </h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "14px" }}>
            {relatedGuides.map((rg) => {
              const url = lang === "en" ? `/en/guide/${rg.enSlug}` : `/guia/${rg.slug}`;
              return (
                <div
                  key={rg.id}
                  onClick={() => navigate(url)}
                  style={{
                    background: "#16140f", border: "1px solid #242018", borderRadius: "12px",
                    overflow: "hidden", cursor: "pointer", transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.border = "1px solid #4a4030"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.border = "1px solid #242018"; e.currentTarget.style.transform = "none"; }}
                >
                  <div style={{ height: "120px", overflow: "hidden" }}>
                    <img src={rg.heroImage} alt={g(rg.title, lang)} style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
                  </div>
                  <div style={{ padding: "14px 16px" }}>
                    <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#d4a853", display: "block", marginBottom: "4px" }}>
                      {g(rg.category, lang)}
                    </span>
                    <h4 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#e8e0d4", fontSize: "0.98rem", margin: "0 0 6px", lineHeight: 1.3, fontWeight: 600 }}>
                      {g(rg.title, lang)}
                    </h4>
                    <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.7rem", color: "#5e5648", display: "flex", alignItems: "center", gap: "4px" }}>
                      <I.Clock /> {rg.readTime}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
