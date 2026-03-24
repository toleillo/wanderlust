import { I } from "@components/icons";
import { Rating } from "@components/ui";
import { AffBtn } from "@components/affiliate";
import { useLocale } from "@i18n";
import { g } from "@data";

export const PlacesList = ({ pointsOfInterest, articleCity }) => {
  const { lang, t } = useLocale();
  
  const getTypeIcon = (type) => {
    const tLower = (type || "").toLowerCase();
    if (tLower.includes("museo") || tLower.includes("museum")) return <span style={{ fontSize: "1.2rem" }}>🏛️</span>;
    if (tLower.includes("parque") || tLower.includes("park")) return <span style={{ fontSize: "1.2rem" }}>🌳</span>;
    if (tLower.includes("playa") || tLower.includes("beach")) return <span style={{ fontSize: "1.2rem" }}>🏖️</span>;
    if (tLower.includes("templo") || tLower.includes("temple")) return <span style={{ fontSize: "1.2rem" }}>⛩️</span>;
    if (tLower.includes("barrio") || tLower.includes("neighbourhood")) return <span style={{ fontSize: "1.2rem" }}>🏘️</span>;
    if (tLower.includes("mercado") || tLower.includes("market")) return <span style={{ fontSize: "1.2rem" }}>🍱</span>;
    return <span style={{ color: "#B8860B" }}><I.MapPin /></span>;
  };

  return (
    <div style={{ display: "grid", gap: "20px" }}>
      {pointsOfInterest.map((poi, i) => (
        <article key={i} style={{
          background: "#FFFFFF", 
          border: "1px solid #E5E1D8", 
          borderRadius: "16px", 
          padding: "24px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.03)",
          transition: "transform 0.2s, box-shadow 0.2s",
          animation: `fadeSlideUp 0.35s ease ${i * 0.08}s both`,
        }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,0,0,0.06)"; }}
        onMouseLeave={(e) => { e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.03)"; }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px", gap: "12px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <div style={{ 
                width: "42px", height: "42px", 
                background: "#F9F8F6", 
                borderRadius: "10px", 
                display: "flex", alignItems: "center", justifyContent: "center",
                border: "1px solid #E5E1D8"
              }}>
                {getTypeIcon(poi.type)}
              </div>
              <div>
                <h4 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#1A1A18", margin: "0 0 2px", fontSize: "1.25rem", fontWeight: 700, lineHeight: 1.1 }}>
                  {poi.name}
                </h4>
                <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
                  <span style={{ fontFamily: "'Source Serif 4', serif", fontSize: "0.75rem", color: "#9A9080", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: 600 }}>
                    {poi.type}
                  </span>
                  {poi.priceRange && (
                    <span style={{ fontFamily: "'Source Serif 4', serif", fontSize: "0.75rem", color: "#B8860B", background: "rgba(184,134,11,0.08)", padding: "1px 6px", borderRadius: "4px", fontWeight: 600 }}>
                      {poi.priceRange}
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div style={{ background: "#F9F8F6", padding: "4px 8px", borderRadius: "6px", border: "1px solid #E5E1D8" }}>
              <Rating v={poi.rating} />
            </div>
          </div>
          
          <p style={{ fontFamily: "'Source Serif 4', serif", color: "#4A4540", fontSize: "0.95rem", lineHeight: 1.65, margin: "0 0 18px 0" }}>
            {g(poi.description, lang)}
          </p>
          
          {(poi.lat && poi.lng) || (poi.affiliateLinks?.length > 0) ? (
            <div style={{ borderTop: "1px solid #F0EEE9", paddingTop: "14px", marginTop: "14px", display: "flex", gap: "10px", flexWrap: "wrap", alignItems: "center" }}>
              {poi.lat && poi.lng && (
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${poi.lat},${poi.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "5px",
                    fontFamily: "'Source Serif 4', serif", fontSize: "0.76rem", fontWeight: 600,
                    color: "#9A9080", textDecoration: "none",
                    background: "#F4F2EE", border: "1px solid #E5E1D8",
                    padding: "5px 10px", borderRadius: "6px", transition: "all 0.15s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#B8860B"; e.currentTarget.style.borderColor = "#C8A84B"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "#9A9080"; e.currentTarget.style.borderColor = "#E5E1D8"; }}
                >
                  <I.MapPin /> {lang === "en" ? "Map" : "Mapa"}
                </a>
              )}
              {poi.affiliateLinks?.map((l, j) => (
                <AffBtn key={j} label={g(l.label, lang)} partner={l.partner} query={l.query} type={l.type} city={articleCity} small />
              ))}
            </div>
          ) : null}
        </article>
      ))}
    </div>
  );
};
