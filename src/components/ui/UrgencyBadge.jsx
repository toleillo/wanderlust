import { I } from "@components/icons";

export const UrgencyBadge = ({ text }) => (
  <span style={{
    display: "inline-flex", alignItems: "center", gap: "4px",
    background: "rgba(240,80,60,0.12)", border: "1px solid rgba(240,80,60,0.3)",
    color: "#f0503c", borderRadius: "6px", padding: "3px 9px",
    fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.68rem", fontWeight: 700,
    animation: "pulse 2s ease-in-out infinite",
  }}>
    <I.Fire /> {text}
  </span>
);
