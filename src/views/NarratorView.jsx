import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { NARRATORS } from "@data/narrators.js";
import { ARTICLES } from "@data";
import { useLocale } from "@i18n";
import { useMeta } from "@hooks";
import { Card } from "@components/articles";

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
        ← {lang === "en" ? "All destinations" : "Todos los destinos"}
      </button>

      {/* Narrator header */}
      <div style={{ background: "#0E0C09", borderRadius: "18px", padding: "44px 40px", marginBottom: "44px", display: "flex", alignItems: "center", gap: "28px", flexWrap: "wrap" }}>
        <span style={{ fontSize: "4rem", lineHeight: 1 }}>{narrator.emoji}</span>
        <div>
          <p style={{ fontFamily: "'Source Serif 4', serif", fontSize: "0.66rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#D4A853", marginBottom: "8px" }}>
            {lang === "en" ? "Narrator" : "Narrador/a"}
          </p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 700, color: "#E8E0D4", lineHeight: 1.1, margin: "0 0 6px" }}>
            {name}
          </h1>
          <p style={{ fontFamily: "'Source Serif 4', serif", color: "#D4A853", fontSize: "1rem", margin: "0 0 14px", fontStyle: "italic" }}>
            {title}
          </p>
          <p style={{ fontFamily: "'Source Serif 4', serif", color: "#8a7e6b", fontSize: "0.95rem", maxWidth: "560px", lineHeight: 1.65, margin: 0 }}>
            {bio}
          </p>
        </div>
      </div>

      {/* Article count */}
      <p style={{ fontFamily: "'Source Serif 4', serif", color: "#9A9080", fontSize: "0.85rem", marginBottom: "22px" }}>
        {articles.length} {lang === "en" ? "articles" : "artículos"}
      </p>

      {/* Articles grid */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "24px" }}>
        {articles.map((a, i) => <Card key={a.id} article={a} i={i} />)}
      </div>
    </div>
  );
};
