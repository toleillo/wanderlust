import { I } from "@components/icons";

export const Rating = ({ v }) => (
  <span style={{ display: "inline-flex", alignItems: "center", gap: "1px", color: "#d4a853" }}>
    {[1, 2, 3, 4, 5].map((i) => <I.Star key={i} f={i <= Math.round(v)} />)}
    <span style={{ color: "#8a7e6b", fontSize: "0.78rem", marginLeft: "3px", fontFamily: "'Libre Franklin', sans-serif" }}>{v}</span>
  </span>
);
