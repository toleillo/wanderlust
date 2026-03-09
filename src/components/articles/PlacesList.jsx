import { I } from "@components/icons";
import { Rating } from "@components/ui";
import { AffBtn } from "@components/affiliate";
import { useLocale } from "@i18n";
import { g } from "@data";

export const PlacesList = ({ pointsOfInterest, articleCity }) => {
  const { lang } = useLocale();
  return (
    <div style={{ display: "grid", gap: "14px" }}>
      {pointsOfInterest.map((poi, i) => (
        <div key={i} style={{
          background: "#FFFFFF", border: "1px solid #E5E1D8", borderRadius: "12px", padding: "22px",
          animation: `fadeSlideUp 0.35s ease ${i * 0.08}s both`,
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "7px", flexWrap: "wrap", gap: "7px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "9px", flexWrap: "wrap" }}>
              <span style={{ color: "#B8860B", display: "flex" }}><I.MapPin /></span>
              <h4 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#1A1A18", margin: 0, fontSize: "1.08rem", fontWeight: 600 }}>
                {poi.name}
              </h4>
              <span style={{ fontFamily: "'Source Serif 4', serif", fontSize: "0.65rem", color: "#9A9080", background: "#F0EEE9", padding: "2px 7px", borderRadius: "4px", fontWeight: 600 }}>
                {poi.type}
              </span>
              {poi.priceRange && (
                <span style={{ fontFamily: "'Source Serif 4', serif", fontSize: "0.65rem", color: "#B8860B", background: "rgba(184,134,11,0.07)", padding: "2px 7px", borderRadius: "4px" }}>
                  {poi.priceRange}
                </span>
              )}
            </div>
            <Rating v={poi.rating} />
          </div>
          <p style={{ fontFamily: "'Source Serif 4', serif", color: "#1A1A18", fontSize: "0.88rem", lineHeight: 1.6, margin: "0 0 12px 0" }}>
            {g(poi.description, lang)}
          </p>
          {poi.affiliateLinks && (
            <div style={{ display: "flex", gap: "7px", flexWrap: "wrap" }}>
              {poi.affiliateLinks.map((l, j) => (
                <AffBtn key={j} label={g(l.label, lang)} partner={l.partner} query={l.query} type={l.type} city={articleCity} />
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
