import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ARTICLES, g } from "@data";
import { useLocale } from "@i18n";
import { useMeta } from "@hooks";
import { SmartImage } from "@components/ui";

export const NotFoundView = () => {
  const { lang } = useLocale();
  const navigate = useNavigate();

  useMeta({
    title:       lang === "en" ? "Page not found" : "Página no encontrada",
    description: lang === "en" ? "The page you're looking for doesn't exist." : "La página que buscas no existe.",
    lang,
    type:        "website",
  });

  // Inject noindex so Google doesn't index broken URLs
  useEffect(() => {
    let el = document.querySelector('meta[name="robots"][data-404]');
    if (!el) {
      el = document.createElement("meta");
      el.name = "robots";
      el.dataset["404"] = "true";
      document.head.appendChild(el);
    }
    el.content = "noindex, follow";
    return () => el.remove();
  }, []);

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const featured = ARTICLES.slice(0, 3);

  return (
    <div style={{ textAlign: "center", padding: "60px 20px 80px", animation: "fadeIn 0.35s ease" }}>
      <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(4rem,12vw,8rem)", color: "#E5E1D8", fontWeight: 700, margin: "0 0 4px", lineHeight: 1 }}>
        404
      </p>
      <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.4rem,3vw,2rem)", color: "#1A1A18", margin: "0 0 12px", fontWeight: 600 }}>
        {lang === "en" ? "This page doesn't exist" : "Esta página no existe"}
      </h1>
      <p style={{ fontFamily: "'Source Serif 4', serif", color: "#6A6258", fontSize: "0.9rem", maxWidth: "420px", margin: "0 auto 28px", lineHeight: 1.65 }}>
        {lang === "en"
          ? "Maybe the link is broken, or the article has moved. Try going back home or exploring one of these destinations."
          : "Puede que el enlace esté roto o el artículo se haya movido. Prueba a volver al inicio o descubre uno de estos destinos."}
      </p>

      <button
        onClick={() => navigate(lang === "en" ? "/en" : "/")}
        style={{
          display: "inline-flex", alignItems: "center", gap: "8px",
          background: "#1A1A18", color: "#FAFAF7",
          border: "none", borderRadius: "10px",
          fontFamily: "'Source Serif 4', serif", fontSize: "0.85rem", fontWeight: 600,
          padding: "12px 24px", cursor: "pointer", marginBottom: "52px", transition: "opacity 0.15s",
        }}
        onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.82"; }}
        onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
      >
        ← {lang === "en" ? "Back to home" : "Volver al inicio"}
      </button>

      {/* Featured articles */}
      <div style={{ maxWidth: "840px", margin: "0 auto", textAlign: "left" }}>
        <p style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#B8860B", marginBottom: "16px" }}>
          {lang === "en" ? "Featured destinations" : "Destinos destacados"}
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "16px" }}>
          {featured.map((a) => (
            <button
              key={a.id}
              onClick={() => { navigate(lang === "en" ? `/en/${a.enSlug}` : `/${a.slug}`); window.scrollTo(0, 0); }}
              style={{
                background: "#FFFFFF", border: "1px solid #E5E1D8", borderRadius: "14px",
                overflow: "hidden", cursor: "pointer", textAlign: "left",
                transition: "transform 0.15s, box-shadow 0.15s", padding: 0,
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.08)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <div style={{ height: "140px", overflow: "hidden" }}>
                <SmartImage
                  src={a.heroImage}
                  alt={g(a.title, lang)}
                  width={400}
                  height={140}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "12px 14px" }}>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", fontWeight: 600, color: "#1A1A18", margin: "0 0 4px", lineHeight: 1.3 }}>
                  {g(a.title, lang)}
                </p>
                <p style={{ fontFamily: "'Source Serif 4', serif", fontSize: "0.76rem", color: "#9A9080", margin: 0 }}>
                  {a.emoji} {g(a.city, lang)}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
