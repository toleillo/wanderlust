import { I } from "@components/icons";
import { PriceCompare } from "@components/affiliate";
import { useLocale } from "@i18n";

export const Sidebar = ({ services, city }) => {
  const { t } = useLocale();
  return (
    <aside style={{ position: "sticky", top: "82px" }}>
      <div style={{
        background: "linear-gradient(160deg, #14120f 0%, #1a1510 100%)",
        border: "1px solid #2a2520", borderRadius: "14px", padding: "22px", marginBottom: "18px",
      }}>
        <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.15rem", color: "#e8e0d4", margin: "0 0 4px 0", fontWeight: 600 }}>
          {t("sidebar_title", { city })}
        </h3>
        <p style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.72rem", color: "#6b6358", margin: "0 0 18px 0", lineHeight: 1.4 }}>
          {t("sidebar_sub")}
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          {Object.entries(services).map(([key, partners]) => (
            <PriceCompare
              key={key}
              partners={partners}
              city={city}
              category={key === "hotels" ? "hotel" : "service"}
              label={t("svc_" + key)}
            />
          ))}
        </div>
        <div style={{
          marginTop: "14px", padding: "10px 12px", borderRadius: "8px",
          background: "rgba(212,168,83,0.05)", border: "1px solid rgba(212,168,83,0.1)",
        }}>
          <p style={{
            fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.66rem", color: "#7a7060",
            margin: 0, lineHeight: 1.5, display: "flex", alignItems: "start", gap: "6px",
          }}>
            <span style={{ flexShrink: 0, marginTop: "1px" }}><I.Info /></span>
            {t("sidebar_disclaimer")}
          </p>
        </div>
      </div>
    </aside>
  );
};
