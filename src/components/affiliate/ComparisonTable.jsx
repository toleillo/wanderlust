import { AFFILIATE_CONFIG } from "@config";
import { buildDeepLink } from "@utils";
import { COLORS, FONTS } from "@styles";
import { I } from "@components/icons";
import { useLocale } from "@i18n";
import { g } from "@data";

export const ComparisonTable = ({ city, items = [] }) => {
  const { lang } = useLocale();

  return (
    <div style={{ margin: "40px 0" }}>
      {/* Desktop View: Elegant Table */}
      <div className="desktop-only" style={{
        overflow: "hidden",
        border: `1px solid ${COLORS.border}`,
        borderRadius: "16px",
        background: "linear-gradient(180deg, rgba(22,20,15,0.8), rgba(14,12,9,1))",
        backdropFilter: "blur(10px)",
      }}>
        <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
          <thead>
            <tr style={{ background: "rgba(255,255,255,0.02)", borderBottom: `1px solid ${COLORS.border}` }}>
              <th style={{ padding: "20px", color: COLORS.textMuted, fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 700 }}>Provider</th>
              <th style={{ padding: "20px", color: COLORS.textMuted, fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 700 }}>Key Features</th>
              <th style={{ padding: "20px", color: COLORS.textMuted, fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.12em", fontWeight: 700 }}>Verdict</th>
              <th style={{ padding: "20px" }}></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, idx) => {
              const cfg = AFFILIATE_CONFIG[item.partner];
              const url = buildDeepLink(item.partner, city, item.query);
              return (
                <tr key={idx} style={{ 
                  borderBottom: idx === items.length - 1 ? "none" : `1px solid ${COLORS.borderSubtle}`,
                  transition: "background 0.2s"
                }} onMouseEnter={(e) => e.currentTarget.style.background = "rgba(212,168,83,0.02)"}
                   onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
                  <td style={{ padding: "20px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div style={{ 
                        width: "40px", height: "40px", borderRadius: "10px", 
                        background: "#1a1714", display: "flex", alignItems: "center", 
                        justifyContent: "center", border: `1px solid ${COLORS.border}` 
                      }}>
                        <span style={{ fontSize: "1.4rem" }}>{cfg?.logo}</span>
                      </div>
                      <span style={{ fontWeight: 700, color: COLORS.text, fontSize: "0.95rem", fontFamily: FONTS.serif }}>{cfg?.name}</span>
                    </div>
                  </td>
                  <td style={{ padding: "20px" }}>
                    <div style={{ color: COLORS.textMuted, fontSize: "0.85rem", lineHeight: 1.5, maxWidth: "240px" }}>
                      {item.features.split(",").map((f, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "start", gap: "6px", marginBottom: "4px" }}>
                          <span style={{ color: COLORS.gold, fontSize: "0.8rem" }}>✓</span> {f.trim()}
                        </div>
                      ))}
                    </div>
                  </td>
                  <td style={{ padding: "20px" }}>
                    <div style={{
                      display: "inline-block",
                      fontSize: "0.65rem",
                      fontWeight: 800,
                      color: item.highlight ? COLORS.greenLight : COLORS.gold,
                      background: item.highlight ? COLORS.greenBg : COLORS.goldBg,
                      padding: "5px 10px",
                      borderRadius: "6px",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em"
                    }}>
                      {g(item.bestFor, lang)}
                    </div>
                  </td>
                  <td style={{ padding: "20px", textAlign: "right" }}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "8px",
                        padding: "10px 20px",
                        background: item.highlight ? COLORS.gold : "transparent",
                        border: `1px solid ${COLORS.gold}`,
                        color: item.highlight ? COLORS.bg : COLORS.gold,
                        borderRadius: "10px",
                        fontSize: "0.82rem",
                        fontWeight: 700,
                        textDecoration: "none",
                        transition: "all 0.2s",
                        boxShadow: item.highlight ? `0 4px 15px ${COLORS.gold}33` : "none"
                      }}
                    >
                      {lang === "en" ? "Select" : "Elegir"} <I.Ext />
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Mobile View: High-Conversion Cards */}
      <div className="mobile-only" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {items.map((item, idx) => {
          const cfg = AFFILIATE_CONFIG[item.partner];
          const url = buildDeepLink(item.partner, city, item.query);
          return (
            <div key={idx} style={{
              background: COLORS.bgCardAlt,
              border: `1px solid ${item.highlight ? COLORS.gold : COLORS.border}`,
              borderRadius: "16px",
              padding: "20px",
              position: "relative",
              boxShadow: item.highlight ? `0 8px 24px ${COLORS.gold}15` : "none"
            }}>
              {item.highlight && (
                <div style={{
                  position: "absolute", top: "-12px", left: "20px",
                  background: COLORS.gold, color: COLORS.bg,
                  padding: "4px 12px", borderRadius: "20px",
                  fontSize: "0.65rem", fontWeight: 800, textTransform: "uppercase",
                  letterSpacing: "0.05em"
                }}>
                  {lang === "en" ? "Recommended" : "Recomendado"}
                </div>
              )}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "16px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontSize: "1.5rem" }}>{cfg?.logo}</span>
                  <span style={{ fontWeight: 700, color: COLORS.text, fontSize: "1.1rem", fontFamily: FONTS.serif }}>{cfg?.name}</span>
                </div>
                <div style={{ 
                  fontSize: "0.65rem", fontWeight: 700, color: item.highlight ? COLORS.greenLight : COLORS.gold,
                  background: item.highlight ? COLORS.greenBg : COLORS.goldBg,
                  padding: "4px 8px", borderRadius: "6px"
                }}>
                  {item.bestFor}
                </div>
              </div>
              <div style={{ marginBottom: "20px" }}>
                {item.features.split(",").map((f, i) => (
                  <div key={i} style={{ color: COLORS.textMuted, fontSize: "0.85rem", marginBottom: "6px", display: "flex", gap: "8px" }}>
                    <span style={{ color: COLORS.gold }}>✓</span> {f.trim()}
                  </div>
                ))}
              </div>
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer sponsored"
                style={{
                  display: "block", textAlign: "center",
                  padding: "14px", background: item.highlight ? COLORS.gold : "transparent",
                  border: `1px solid ${COLORS.gold}`, color: item.highlight ? COLORS.bg : COLORS.gold,
                  borderRadius: "12px", fontSize: "0.9rem", fontWeight: 700, textDecoration: "none"
                }}
              >
                {lang === "en" ? "View Offer" : "Ver Oferta"}
              </a>
            </div>
          );
        })}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .desktop-only { display: none !important; }
          .mobile-only { display: flex !important; }
        }
        @media (min-width: 769px) {
          .desktop-only { display: block !important; }
          .mobile-only { display: none !important; }
        }
      `}</style>
    </div>
  );
};
