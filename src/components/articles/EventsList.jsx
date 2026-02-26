import { I } from "@components/icons";
import { UrgencyBadge } from "@components/ui";
import { AffBtn } from "@components/affiliate";
import { EVT_COLORS } from "@styles";
import { useLocale } from "@i18n";
import { g } from "@data";

export const EventsList = ({ events, articleCity }) => {
  const { lang, t } = useLocale();
  return (
    <div style={{ display: "grid", gap: "14px" }}>
      {events.map((ev, i) => {
        const c = EVT_COLORS[ev.type] || EVT_COLORS.default;
        const typeKey = "evttype_" + ev.type.replace("-", "_");
        return (
          <div key={i} style={{
            background: "#16140f", border: "1px solid #242018", borderRadius: "12px", padding: "22px",
            animation: `fadeSlideUp 0.35s ease ${i * 0.08}s both`,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "9px", marginBottom: "9px", flexWrap: "wrap" }}>
              <span style={{ color: c.text, display: "flex" }}><I.Ticket /></span>
              <h4 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#e8e0d4", margin: 0, fontSize: "1.08rem", fontWeight: 600 }}>
                {ev.name}
              </h4>
              <span style={{
                fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.65rem", color: c.text,
                background: c.bg, padding: "3px 9px", borderRadius: "4px", fontWeight: 600, border: `1px solid ${c.border}`,
              }}>
                {t(typeKey)}
              </span>
              {ev.urgency && <UrgencyBadge text={t("urgency")} />}
            </div>
            <p style={{ fontFamily: "'Libre Franklin', sans-serif", color: "#8a7e6b", fontSize: "0.88rem", lineHeight: 1.6, margin: "0 0 11px 0" }}>
              {g(ev.description, lang)}
            </p>
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: ev.affiliateLinks ? "12px" : 0 }}>
              <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.78rem", color: "#5e5648", display: "flex", alignItems: "center", gap: "5px" }}>
                <I.Calendar /> {ev.date}
              </span>
              <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.78rem", color: "#5e5648", display: "flex", alignItems: "center", gap: "5px" }}>
                <I.MapPin /> {ev.venue}
              </span>
            </div>
            {ev.affiliateLinks && (
              <div style={{ display: "flex", gap: "7px", flexWrap: "wrap" }}>
                {ev.affiliateLinks.map((l, j) => (
                  <AffBtn key={j} label={g(l.label, lang)} partner={l.partner} query={l.query} type={l.type} city={articleCity} />
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
