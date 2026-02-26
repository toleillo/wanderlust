import { useState } from "react";
import { AFFILIATE_CONFIG } from "@config";
import { I } from "@components/icons";
import { useLocale } from "@i18n";
import { AffBtn } from "./AffBtn.jsx";

export const PriceCompare = ({ partners, city, category, label }) => {
  const [open, setOpen] = useState(false);
  const { t } = useLocale();
  return (
    <div style={{
      background: "#14120f", border: "1px solid #2a2520", borderRadius: "12px",
      overflow: "hidden", transition: "all 0.3s",
    }}>
      <button onClick={() => setOpen(!open)} style={{
        width: "100%", padding: "12px 16px", background: "none", border: "none",
        color: "#c4b89a", fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.82rem",
        fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center",
        justifyContent: "space-between",
      }}>
        <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <I.Compare /> {label || t("compare_prices")}
        </span>
        <span style={{ transform: open ? "rotate(180deg)" : "none", transition: "transform 0.2s", display: "flex" }}>
          <I.ChevDown />
        </span>
      </button>
      {open && (
        <div style={{ padding: "0 16px 14px", display: "flex", gap: "6px", flexWrap: "wrap", animation: "fadeIn 0.2s ease" }}>
          {partners.map((p) => (
            <AffBtn key={p} label={AFFILIATE_CONFIG[p]?.name || p} partner={p} city={city} type={category} small />
          ))}
        </div>
      )}
    </div>
  );
};
