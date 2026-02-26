import { useState } from "react";
import { AFFILIATE_CONFIG } from "@config";
import { buildDeepLink } from "@utils";
import { trackClick } from "@utils";
import { useABVariant } from "@hooks";
import { TYPE_COLORS } from "@styles";
import { I } from "@components/icons";

export const AffBtn = ({ label, partner, query, type = "service", city = "", small, className }) => {
  const [h, setH] = useState(false);
  const s = TYPE_COLORS[type] || TYPE_COLORS.service;
  const cfg = AFFILIATE_CONFIG[partner];
  const variant = useABVariant();
  const url = buildDeepLink(partner, city, query);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer sponsored"
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      onClick={() => trackClick(partner, type, label, city, variant)}
      className={className}
      style={{
        display: "inline-flex", alignItems: "center", gap: "5px",
        padding: small ? "4px 9px" : "7px 13px",
        borderRadius: "7px", border: `1px solid ${s.border}`,
        background: h ? `${s.bg}ee` : s.bg, color: s.text,
        fontFamily: "'Libre Franklin', sans-serif", fontSize: small ? "0.7rem" : "0.78rem",
        fontWeight: 600, textDecoration: "none", transition: "all 0.15s", cursor: "pointer", whiteSpace: "nowrap",
        transform: h ? "translateY(-1px)" : "none",
        boxShadow: h ? `0 4px 12px ${s.border}44` : "none",
      }}
    >
      {cfg?.logo && <span style={{ fontSize: small ? "0.7rem" : "0.78rem" }}>{cfg.logo}</span>}
      {label} <I.Ext />
    </a>
  );
};
