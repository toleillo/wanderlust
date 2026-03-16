import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { GUIDES, g } from "@data";
import { useLocale } from "@i18n";
import { useMeta } from "@hooks";
import { AffBtn } from "@components/affiliate";
import { ReadingProgress } from "@components/ui";
import { I } from "@components/icons";

// ─── WCAG-compliant colour tokens ─────────────────────────────────────────────
// Verified with APCA/WCAG contrast calculator. All pairs ≥ 4.5:1 (AA normal text)
const A = {
  text:       "#1A1A18",   // principal — on white: 17.7:1 ✓  on cream: 16.4:1 ✓
  body:       "#1A1A18",   // cuerpo de contenido — on white: 17.7:1 ✓  on cream: 16.4:1 ✓
  meta:       "#1A1A18",   // SOLO metadatos (fechas, readTime) — on white: 5.3:1 ✓
  goldText:   "#8B6800",   // on white: 5.1:1 ✓  on cream #F4F2EE: 4.7:1 ✓
  goldDark:   "#6B4F08",   // on white: 7.4:1 ✓  on gold tint: 6.8:1 ✓
  green:      "#2D6A2D",   // on white: 6.6:1 ✓
  red:        "#8B2500",   // on white: 9.0:1 ✓
  border:     "#E5E1D8",
  bgCard:     "#FFFFFF",
  bgAlt:      "#F4F2EE",
  label:      "0.75rem",   // 12px mínimo para etiquetas en mayúsculas
};

// ─── Numbered tip card ────────────────────────────────────────────────────────
const TipCard = ({ tip, lang, t, isLast }) => (
  <li style={{
    background: A.bgCard, border: `1px solid ${A.border}`, borderRadius: "14px",
    padding: "24px 26px", display: "flex", gap: "20px", alignItems: "start",
    marginBottom: isLast ? 0 : "14px",
    animation: `fadeSlideUp 0.4s ease ${tip.num * 0.06}s both`,
    listStyle: "none",
  }}>
    {/* Purely decorative — screen readers get the ordered list position instead */}
    <span aria-hidden="true" style={{
      fontFamily: "'Cormorant Garamond', serif", fontSize: "2rem", fontWeight: 700,
      color: "rgba(139,104,0,0.22)", lineHeight: 1, flexShrink: 0, minWidth: "42px",
      userSelect: "none",
    }}>
      {String(tip.num).padStart(2, "0")}
    </span>
    <div style={{ flex: 1 }}>
      <h3 style={{
        fontFamily: "'Cormorant Garamond', serif", fontSize: "1.2rem",
        color: A.text, margin: "0 0 8px", fontWeight: 600, lineHeight: 1.2,
      }}>
        {g(tip.title, lang)}
      </h3>
      <p style={{
        fontFamily: "'Source Serif 4', serif", color: A.body,
        fontSize: "0.95rem", lineHeight: 1.75, margin: tip.partner ? "0 0 14px" : 0,
      }}>
        {g(tip.body, lang)}
      </p>
      {tip.partner && (
        <AffBtn label={t("guide_see_offer")} partner={tip.partner} query={tip.query || ""} city="" type="service" small />
      )}
    </div>
  </li>
);

// ─── Comparison item card ──────────────────────────────────────────────────────
const ComparisonCard = ({ item, lang, t, i }) => {
  const pros = item.pros[lang] ?? item.pros.es ?? [];
  const cons = item.cons[lang] ?? item.cons.es ?? [];
  return (
    <article style={{
      background: A.bgCard, border: `1px solid ${A.border}`, borderRadius: "16px",
      overflow: "hidden", marginBottom: "18px",
      animation: `fadeSlideUp 0.4s ease ${i * 0.08}s both`,
    }}>
      {/* Card header */}
      <header style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "20px 24px", background: A.bgAlt,
        borderBottom: `1px solid ${A.border}`, flexWrap: "wrap", gap: "10px",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <span aria-hidden="true" style={{ fontSize: "1.8rem" }}>{item.logo}</span>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem",
            color: A.text, margin: 0, fontWeight: 700,
          }}>
            {item.name}
          </h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "2px" }}>
          <span style={{
            fontFamily: "'Source Serif 4', serif", fontSize: A.label, fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase", color: A.meta,
          }}>
            {t("guide_price")}
          </span>
          <span style={{
            fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem",
            color: A.goldText, fontWeight: 600,
          }}>
            {g(item.price, lang)}
          </span>
        </div>
      </header>

      {/* Pros / Cons */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0 }}>
        <section aria-label={t("guide_pros")} style={{ padding: "18px 20px", borderRight: `1px solid ${A.border}` }}>
          <p style={{
            fontFamily: "'Source Serif 4', serif", fontSize: A.label, fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase", color: A.green, margin: "0 0 10px",
          }}>
            {t("guide_pros")}
          </p>
          <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {pros.map((p, j) => (
              <li key={j} style={{ display: "flex", gap: "7px", alignItems: "start", marginBottom: "6px" }}>
                <span aria-hidden="true" style={{ color: A.green, flexShrink: 0, marginTop: "2px" }}><I.Check /></span>
                <span style={{ fontFamily: "'Source Serif 4', serif", fontSize: "0.9rem", color: A.body, lineHeight: 1.55 }}>{p}</span>
              </li>
            ))}
          </ul>
        </section>
        <section aria-label={t("guide_cons")} style={{ padding: "18px 20px" }}>
          <p style={{
            fontFamily: "'Source Serif 4', serif", fontSize: A.label, fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase", color: A.red, margin: "0 0 10px",
          }}>
            {t("guide_cons")}
          </p>
          <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
            {cons.map((c, j) => (
              <li key={j} style={{ display: "flex", gap: "7px", alignItems: "start", marginBottom: "6px" }}>
                <span aria-hidden="true" style={{ color: A.red, flexShrink: 0, marginTop: "1px", fontSize: "0.9rem", lineHeight: 1.4 }}>✕</span>
                <span style={{ fontFamily: "'Source Serif 4', serif", fontSize: "0.9rem", color: A.body, lineHeight: 1.55 }}>{c}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Best for + Verdict + CTA */}
      <footer style={{ padding: "16px 24px", borderTop: `1px solid ${A.border}`, display: "flex", flexDirection: "column", gap: "10px" }}>
        <p style={{ margin: 0 }}>
          <span style={{
            fontFamily: "'Source Serif 4', serif", fontSize: A.label, fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase", color: A.meta,
          }}>
            {t("guide_best_for")}:{" "}
          </span>
          <span style={{ fontFamily: "'Source Serif 4', serif", fontSize: "0.9rem", color: A.body }}>
            {g(item.bestFor, lang)}
          </span>
        </p>
        {/* blockquote for semantic verdict */}
        <blockquote style={{
          margin: 0, padding: "12px 16px",
          background: "rgba(107,79,8,0.06)", border: "1px solid rgba(107,79,8,0.18)",
          borderRadius: "8px",
        }}>
          <span style={{
            fontFamily: "'Source Serif 4', serif", fontSize: A.label, fontWeight: 700,
            letterSpacing: "0.1em", textTransform: "uppercase", color: A.goldDark, marginRight: "6px",
          }}>
            {t("guide_verdict")}:
          </span>
          <span style={{
            fontFamily: "'Source Serif 4', serif", fontSize: "0.93rem",
            color: A.body, lineHeight: 1.65, fontStyle: "italic",
          }}>
            {g(item.verdict, lang)}
          </span>
        </blockquote>
        <AffBtn label={t("guide_see_offer")} partner={item.partner} query="" city="" type="service" />
      </footer>
    </article>
  );
};

// ─── Main view ─────────────────────────────────────────────────────────────────
export const GuideView = () => {
  const { slug } = useParams();
  const { lang, t } = useLocale();
  const navigate = useNavigate();

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  const guide = lang === "en"
    ? GUIDES.find((gu) => gu.enSlug === slug)
    : GUIDES.find((gu) => gu.slug === slug);

  const canonicalPath = guide
    ? (lang === "en" ? `/en/guide/${guide.enSlug}` : `/guia/${guide.slug}`)
    : null;

  useMeta({
    title:       guide ? g(guide.title, lang) : t("not_found"),
    description: guide ? g(guide.subtitle, lang) : "",
    canonical:   canonicalPath,
    image:       guide?.heroImage,
    lang,
    type:        "article",
    altUrl:      guide ? (lang === "en" ? `/guia/${guide.slug}` : `/en/guide/${guide.enSlug}`) : null,
  });

  // — JSON-LD for guides —
  useEffect(() => {
    if (!guide || !canonicalPath) return;
    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "@id": `https://www.eltechoencima.com${canonicalPath}#article`,
          headline: g(guide.title, lang),
          description: g(guide.subtitle, lang),
          image: guide.heroImage,
          datePublished: guide.date,
          dateModified: guide.date,
          inLanguage: lang,
          author: { "@type": "Organization", name: "ElTechoEncima", url: "https://www.eltechoencima.com" },
          publisher: {
            "@type": "Organization",
            name: "ElTechoEncima",
            url: "https://www.eltechoencima.com",
            logo: { "@type": "ImageObject", url: "https://www.eltechoencima.com/favicon.svg" },
          },
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: lang === "en" ? "Home" : "Inicio", item: `https://www.eltechoencima.com${lang === "en" ? "/en" : ""}` },
            { "@type": "ListItem", position: 2, name: lang === "en" ? "Guides" : "Guías", item: `https://www.eltechoencima.com${lang === "en" ? "/en" : ""}` },
            { "@type": "ListItem", position: 3, name: g(guide.title, lang) },
          ],
        },
      ],
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "guide-schema";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    return () => { document.getElementById("guide-schema")?.remove(); };
  }, [guide, lang, canonicalPath]);

  if (!guide) {
    return (
      <div style={{ textAlign: "center", padding: "80px 20px", color: A.body, fontFamily: "'Source Serif 4', serif" }} role="alert">
        <p style={{ fontSize: "1rem", marginBottom: "14px" }}>{t("not_found")}</p>
        <button
          onClick={() => navigate(lang === "en" ? "/en" : "/")}
          style={{
            background: "none", border: `1px solid ${A.border}`, borderRadius: "8px",
            color: A.goldText, padding: "9px 18px", cursor: "pointer",
            fontFamily: "'Source Serif 4', serif", fontSize: "0.88rem",
          }}
        >
          {t("go_home")}
        </button>
      </div>
    );
  }

  const dateLocale = lang === "en" ? "en-US" : "es-ES";
  const relatedGuides = (guide.related || []).map((id) => GUIDES.find((gu) => gu.id === id)).filter(Boolean);
  const guideTitle = g(guide.title, lang);

  return (
    // article + Schema.org microdata for AI/WebMCP crawlers
    <><ReadingProgress /><article
      style={{ animation: "fadeIn 0.35s ease", maxWidth: "800px", margin: "0 auto" }}
      aria-labelledby="guide-title"
      itemScope
      itemType="https://schema.org/Article"
    >
      {/* Back navigation */}
      <nav aria-label={lang === "en" ? "Guide navigation" : "Navegación de la guía"}>
        <button
          onClick={() => navigate(lang === "en" ? "/en" : "/")}
          aria-label={t("guide_back")}
          style={{
            display: "inline-flex", alignItems: "center", gap: "7px",
            background: "rgba(0,0,0,0.03)", border: `1px solid ${A.border}`, borderRadius: "9px",
            color: A.body, fontFamily: "'Source Serif 4', serif", fontSize: "0.88rem",
            padding: "9px 16px", cursor: "pointer", marginBottom: "22px", transition: "all 0.15s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#C8C0B0"; e.currentTarget.style.color = A.text; }}
          onMouseLeave={(e) => { e.currentTarget.style.borderColor = A.border; e.currentTarget.style.color = A.body; }}
        >
          <I.Back /> {t("guide_back")}
        </button>
      </nav>

      {/* Hero — image is decorative, title carries the alt text via h1 */}
      <header style={{ borderRadius: "18px", overflow: "hidden", position: "relative", height: "clamp(180px, 40vw, 280px)", marginBottom: "28px" }}>
        <img
          src={guide.heroImage}
          alt=""
          aria-hidden="true"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          itemProp="image"
        />
        <div className="hero-guide-overlay" style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(transparent 15%, rgba(0,0,0,0.92))",
          display: "flex", flexDirection: "column", justifyContent: "flex-end",
        }}>
          {/* #E8C76A on rgba(0,0,0,0.92) overlay ≈ 7.2:1 ✓ */}
          <span style={{
            fontFamily: "'Source Serif 4', serif", fontSize: A.label, fontWeight: 700,
            letterSpacing: "0.14em", textTransform: "uppercase", color: "#E8C76A",
            marginBottom: "8px", display: "block",
          }}>
            {g(guide.category, lang)}
          </span>
          <h1
            id="guide-title"
            style={{
              fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.5rem,3.5vw,2.1rem)",
              color: "#FFFFFF", margin: "0 0 10px", lineHeight: 1.15, fontWeight: 700,
            }}
            itemProp="headline"
          >
            {guideTitle}
          </h1>
          <div style={{ display: "flex", gap: "14px", alignItems: "center", flexWrap: "wrap" }}>
            {/* rgba(255,255,255,0.88) on near-black ≈ 13.8:1 ✓ */}
            <span style={{
              fontFamily: "'Source Serif 4', serif", fontSize: "0.78rem",
              color: "rgba(255,255,255,0.88)", display: "flex", alignItems: "center", gap: "4px",
            }}>
              <I.Clock /> <span>{guide.readTime}</span>
            </span>
            <time
              dateTime={guide.date}
              itemProp="datePublished"
              style={{ fontFamily: "'Source Serif 4', serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.88)" }}
            >
              {new Date(guide.date).toLocaleDateString(dateLocale, { day: "numeric", month: "long", year: "numeric" })}
            </time>
          </div>
        </div>
      </header>

      {/* Subtitle + Intro */}
      <p
        style={{ fontFamily: "'Source Serif 4', serif", fontSize: "1.05rem", color: A.body, lineHeight: 1.65, margin: "0 0 6px", fontStyle: "italic" }}
        itemProp="description"
      >
        {g(guide.subtitle, lang)}
      </p>
      <p style={{ fontFamily: "'Source Serif 4', serif", fontSize: "1.05rem", color: A.body, lineHeight: 1.85, margin: "16px 0 28px" }}>
        {g(guide.intro, lang)}
      </p>

      {/* ── Tips — semantic ordered list so screen readers announce position ── */}
      {guide.type === "tips" && (
        <section aria-label={lang === "en" ? "Tips" : "Consejos"}>
          <ol style={{ margin: 0, padding: 0 }}>
            {guide.tips.map((tip, i) => (
              <TipCard key={tip.num} tip={tip} lang={lang} t={t} isLast={i === guide.tips.length - 1} />
            ))}
          </ol>
        </section>
      )}

      {/* ── Comparisons ── */}
      {guide.type === "comparison" && (
        <section aria-label={lang === "en" ? "Comparisons" : "Comparativas"}>
          {guide.items.map((item, i) => (
            <ComparisonCard key={item.name} item={item} lang={lang} t={t} i={i} />
          ))}
        </section>
      )}

      {/* Conclusion */}
      <section aria-labelledby="guide-conclusion" style={{ marginTop: "28px" }}>
        <div style={{ padding: "24px 28px", background: A.bgAlt, border: `1px solid ${A.border}`, borderRadius: "14px" }}>
          <h2
            id="guide-conclusion"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: A.text, fontSize: "1.3rem", margin: "0 0 10px", fontWeight: 600 }}
          >
            {t("guide_conclusion")}
          </h2>
          <p style={{ fontFamily: "'Source Serif 4', serif", color: A.body, fontSize: "0.95rem", lineHeight: 1.8, margin: 0 }}>
            {g(guide.conclusion, lang)}
          </p>
        </div>
      </section>

      {/* CTA partners */}
      {guide.ctaPartners?.length > 0 && (
        <section aria-labelledby="guide-cta" style={{ marginTop: "24px" }}>
          <div style={{ padding: "22px 24px", background: A.bgCard, border: `1px solid ${A.border}`, borderRadius: "14px" }}>
            <h2
              id="guide-cta"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: A.text, fontSize: "1.2rem", margin: "0 0 6px", fontWeight: 600 }}
            >
              {t("guide_cta_title")}
            </h2>
            <p style={{ fontFamily: "'Source Serif 4', serif", color: A.body, fontSize: "0.9rem", margin: "0 0 16px", lineHeight: 1.6 }}>
              {t("guide_cta_sub")}
            </p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {guide.ctaPartners.map((p) => (
                <AffBtn key={p} label={t("guide_see_offer")} partner={p} query="" city="" type="service" />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related guides — nav landmark for screen readers & AI crawlers */}
      {relatedGuides.length > 0 && (
        <nav aria-labelledby="guide-related" style={{ marginTop: "36px" }}>
          <h2
            id="guide-related"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: A.text, fontSize: "1.3rem", margin: "0 0 16px", fontWeight: 600 }}
          >
            {t("guide_related")}
          </h2>
          <ul style={{
            display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "14px", margin: 0, padding: 0, listStyle: "none",
          }}>
            {relatedGuides.map((rg) => {
              const url = lang === "en" ? `/en/guide/${rg.enSlug}` : `/guia/${rg.slug}`;
              const rgTitle = g(rg.title, lang);
              return (
                <li key={rg.id}>
                  <div
                    role="link"
                    tabIndex={0}
                    onClick={() => navigate(url)}
                    onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); navigate(url); } }}
                    aria-label={rgTitle}
                    style={{
                      background: A.bgCard, border: `1px solid ${A.border}`, borderRadius: "12px",
                      overflow: "hidden", cursor: "pointer", transition: "all 0.2s", outline: "none",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#C8C0B0"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.07)"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = A.border; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
                    onFocus={(e) => { e.currentTarget.style.boxShadow = "0 0 0 3px rgba(139,104,0,0.35)"; e.currentTarget.style.borderColor = A.goldText; }}
                    onBlur={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = A.border; }}
                  >
                    <div style={{ height: "120px", overflow: "hidden" }}>
                      <img src={rg.heroImage} alt="" aria-hidden="true" style={{ width: "100%", height: "100%", objectFit: "cover" }} loading="lazy" />
                    </div>
                    <div style={{ padding: "14px 16px" }}>
                      <span style={{
                        fontFamily: "'Source Serif 4', serif", fontSize: A.label, fontWeight: 700,
                        letterSpacing: "0.1em", textTransform: "uppercase", color: A.goldText,
                        display: "block", marginBottom: "4px",
                      }}>
                        {g(rg.category, lang)}
                      </span>
                      <h3 style={{
                        fontFamily: "'Cormorant Garamond', serif", color: A.text,
                        fontSize: "0.98rem", margin: "0 0 6px", lineHeight: 1.3, fontWeight: 600,
                      }}>
                        {rgTitle}
                      </h3>
                      <span style={{
                        fontFamily: "'Source Serif 4', serif", fontSize: "0.78rem",
                        color: A.meta, display: "flex", alignItems: "center", gap: "4px",
                      }}>
                        <I.Clock /> {rg.readTime}
                      </span>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </article></>
  );
};
