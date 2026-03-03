import { AFFILIATE_CONFIG } from "@config";
import { buildDeepLink } from "@utils";
import { I } from "@components/icons";
import { COLORS, FONTS } from "@styles";

export const TopRecommendations = ({ city, services = [] }) => {
  // We pick 3 key services: Stay, Activity, Transport/Connectivity
  const topPicks = [
    { type: "hotel",    partner: "booking",      label: "Best Stay",      icon: "🏨" },
    { type: "activity", partner: "getyourguide", label: "Top Experience", icon: "🎟️" },
    { type: "service",  partner: "airalo",       label: "Connectivity",   icon: "📶" },
  ];

  return (
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "12px",
      margin: "24px 0 32px",
    }}>
      {topPicks.map((pick) => {
        const url = buildDeepLink(pick.partner, city);
        return (
          <a
            key={pick.type}
            href={url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            style={{
              background: "linear-gradient(145deg, #1a1714, #14120f)",
              border: "1px solid #2a2520",
              borderRadius: "14px",
              padding: "16px",
              textDecoration: "none",
              transition: "all 0.2s ease",
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              position: "relative",
              overflow: "hidden"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = COLORS.gold;
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#2a2520";
              e.currentTarget.style.transform = "none";
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start" }}>
              <span style={{ fontSize: "1.2rem" }}>{pick.icon}</span>
              <span style={{
                fontSize: "0.6rem",
                fontWeight: 700,
                color: COLORS.gold,
                textTransform: "uppercase",
                letterSpacing: "0.05em",
                background: "rgba(212,168,83,0.1)",
                padding: "3px 8px",
                borderRadius: "20px"
              }}>
                {pick.label}
              </span>
            </div>
            <div>
              <h4 style={{
                fontFamily: FONTS.serif,
                color: COLORS.text,
                fontSize: "1rem",
                margin: "4px 0 2px",
                fontWeight: 600
              }}>
                {AFFILIATE_CONFIG[pick.partner]?.name}
              </h4>
              <p style={{
                fontFamily: FONTS.sans,
                color: COLORS.textMuted,
                fontSize: "0.75rem",
                margin: 0
              }}>
                {city} recommendations
              </p>
            </div>
            <div style={{ marginTop: "4px", color: COLORS.gold, display: "flex", alignItems: "center", gap: "4px", fontSize: "0.8rem", fontWeight: 600 }}>
              Book now <I.Arrow />
            </div>
          </a>
        );
      })}
    </div>
  );
};
