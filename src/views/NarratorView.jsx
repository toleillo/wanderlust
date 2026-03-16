import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { NARRATORS } from "@data/narrators.js";
import { ARTICLES } from "@data";
import { useLocale } from "@i18n";
import { useMeta } from "@hooks";
import { Card } from "@components/articles";
import { I } from "@components/icons";

export const NarratorView = () => {
  const { id } = useParams();
  const { lang } = useLocale();
  const navigate = useNavigate();

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  const narrator = NARRATORS[id];

  useMeta({
    title: narrator
      ? (lang === "en" ? `${narrator.name.en} · ${narrator.title.en}` : `${narrator.name.es} · ${narrator.title.es}`)
      : "Narrador",
    description: narrator ? (narrator.bio[lang] ?? narrator.bio.es) : "",
    canonical: lang === "en" ? `/en/narrator/${id}` : `/narrador/${id}`,
    lang,
    altUrl: lang === "en" ? `/narrador/${id}` : `/en/narrator/${id}`,
  });

  useEffect(() => {
    if (!narrator) return;
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "narrator-schema";
    const name = narrator.name[lang] || narrator.name.es;
    const title = narrator.title[lang] || narrator.title.es;
    const bio = narrator.bio[lang] || narrator.bio.es;
    
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Person",
      "name": name,
      "jobTitle": title,
      "description": bio,
      "url": `https://www.eltechoencima.com/${lang === "en" ? "en/narrator" : "narrador"}/${id}`,
      "sameAs": Object.values(narrator.social || {})
    });
    document.head.appendChild(script);
    return () => document.getElementById("narrator-schema")?.remove();
  }, [narrator, id, lang]);

  if (!narrator) {
    return (
      <div style={{ textAlign: "center", padding: "80px 20px", color: "#1A1A18", fontFamily: "'Source Serif 4', serif" }}>
        <p>Narrador no encontrado.</p>
        <button onClick={() => navigate(lang === "en" ? "/en" : "/")} style={{ marginTop: "14px", background: "none", border: "1px solid #E5E1D8", borderRadius: "8px", color: "#B8860B", padding: "9px 18px", cursor: "pointer", fontFamily: "'Source Serif 4', serif", fontSize: "0.82rem" }}>
          {lang === "en" ? "Back home" : "Volver al inicio"}
        </button>
      </div>
    );
  }

  const name  = narrator.name[lang]  ?? narrator.name.es;
  const title = narrator.title[lang] ?? narrator.title.es;
  const bio   = narrator.bio[lang]   ?? narrator.bio.es;

  const articles = ARTICLES.filter((a) => narrator.articles.includes(a.slug) || narrator.articles.includes(a.enSlug));

  return (
    <div style={{ animation: "fadeIn 0.35s ease" }}>
      <button
        onClick={() => navigate(lang === "en" ? "/en" : "/")}
        style={{ display: "inline-flex", alignItems: "center", gap: "7px", background: "rgba(0,0,0,0.03)", border: "1px solid #E5E1D8", borderRadius: "9px", color: "#1A1A18", fontFamily: "'Source Serif 4', serif", fontSize: "0.82rem", padding: "9px 16px", cursor: "pointer", marginBottom: "32px", transition: "all 0.15s" }}
      >
        <I.Back /> {lang === "en" ? "All destinations" : "Todos los destinos"}
      </button>

      {/* Narrator header */}
      <div style={{ background: "#0E0C09", borderRadius: "24px", padding: "48px 40px", marginBottom: "44px", display: "flex", alignItems: "center", gap: "32px", flexWrap: "wrap", boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}>
        <div style={{ 
          fontSize: "4.5rem", 
          lineHeight: 1, 
          background: "rgba(255,255,255,0.05)", 
          width: "120px", 
          height: "120px", 
          display: "flex", 
          alignItems: "center", 
          justifyContent: "center", 
          borderRadius: "60px",
          border: "1px solid rgba(255,255,255,0.1)"
        }}>
          {narrator.emoji}
        </div>
        <div style={{ flex: 1, minWidth: "280px" }}>
          <p style={{ fontFamily: "'Source Serif 4', serif", fontSize: "0.66rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#D4A853", marginBottom: "12px" }}>
            {lang === "en" ? "Verified Narrator" : "Narrador/a Verificado"}
          </p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(2.2rem,5vw,3.2rem)", fontWeight: 700, color: "#E8E0D4", lineHeight: 1.1, margin: "0 0 8px" }}>
            {name}
          </h1>
          <p style={{ fontFamily: "'Source Serif 4', serif", color: "#D4A853", fontSize: "1.1rem", margin: "0 0 16px", fontStyle: "italic", opacity: 0.9 }}>
            {title}
          </p>
          <p style={{ fontFamily: "'Source Serif 4', serif", color: "#A89B85", fontSize: "1.05rem", maxWidth: "600px", lineHeight: 1.7, margin: "0 0 24px" }}>
            {bio}
          </p>
          
          {/* Social Links */}
          {narrator.social && (
            <div style={{ display: "flex", gap: "12px" }}>
              {narrator.social.twitter && (
                <a href={narrator.social.twitter} target="_blank" rel="noopener noreferrer sponsored" style={{ color: "#E8E0D4", background: "rgba(255,255,255,0.1)", padding: "8px", borderRadius: "8px", display: "flex", transition: "all 0.2s" }} onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.2)"} onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}>
                  <I.Twitter />
                </a>
              )}
              {narrator.social.instagram && (
                <a href={narrator.social.instagram} target="_blank" rel="noopener noreferrer sponsored" style={{ color: "#E8E0D4", background: "rgba(255,255,255,0.1)", padding: "8px", borderRadius: "8px", display: "flex", transition: "all 0.2s" }} onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.2)"} onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}>
                  <I.Instagram />
                </a>
              )}
              {narrator.social.linkedin && (
                <a href={narrator.social.linkedin} target="_blank" rel="noopener noreferrer sponsored" style={{ color: "#E8E0D4", background: "rgba(255,255,255,0.1)", padding: "8px", borderRadius: "8px", display: "flex", transition: "all 0.2s" }} onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.2)"} onMouseLeave={e => e.currentTarget.style.background = "rgba(255,255,255,0.1)"}>
                  <I.LinkedIn />
                </a>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Articles section */}
      <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.8rem", color: "#1A1A18", marginBottom: "24px", borderBottom: "1px solid #E5E1D8", paddingBottom: "12px" }}>
        {lang === "en" ? `Stories by ${name}` : `Historias de ${name}`}
        <span style={{ fontSize: "0.9rem", color: "#9A9080", marginLeft: "12px", fontWeight: 400 }}>
          ({articles.length})
        </span>
      </h2>

      {/* Articles grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "28px" }}>
        {articles.map((a, i) => <Card key={a.id} article={a} i={i} />)}
      </div>
    </div>
  );
};
