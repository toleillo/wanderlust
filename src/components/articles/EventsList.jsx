import { useNavigate } from "react-router-dom";
import { I } from "@components/icons";
import { UrgencyBadge } from "@components/ui";
import { AffBtn } from "@components/affiliate";
import { EVT_COLORS } from "@styles";
import { useLocale } from "@i18n";
import { g } from "@data";
import { slugifyEvent } from "@utils";

export const EventsList = ({ events, articleCity }) => {
  const { lang, t } = useLocale();
  const navigate = useNavigate();
  return (
    <div style={{ display: "grid", gap: "14px" }}>
      {events.map((ev, i) => {
        const c = EVT_COLORS[ev.type] || EVT_COLORS.default;
        const typeKey = "evttype_" + ev.type.replace("-", "_");
        const evSlug = slugifyEvent(ev.name, articleCity);
        const evPath = lang === "en" ? `/en/event/${evSlug}` : `/evento/${evSlug}`;
        return (
          <div key={i} style={{
            background: "#FFFFFF", border: "1px solid #E5E1D8", borderRadius: "12px", padding: "22px",
            animation: `fadeSlideUp 0.35s ease ${i * 0.08}s both`,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "9px", marginBottom: "9px", flexWrap: "wrap" }}>
              <span style={{ color: c.text, display: "flex" }}><I.Ticket /></span>
              <h4 style={{ fontFamily: "'Cormorant Garamond', serif", color: "#1A1A18", margin: 0, fontSize: "1.08rem", fontWeight: 600 }}>
                {g(ev.name, lang)}
              </h4>
              <span style={{
                fontFamily: "'Source Serif 4', serif", fontSize: "0.65rem", color: c.text,
                background: c.bg, padding: "3px 9px", borderRadius: "4px", fontWeight: 600, border: `1px solid ${c.border}`,
              }}>
                {t(typeKey)}
              </span>
              {ev.urgency && <UrgencyBadge text={t("urgency")} />}
            </div>
            <p style={{ fontFamily: "'Source Serif 4', serif", color: "#1A1A18", fontSize: "0.88rem", lineHeight: 1.6, margin: "0 0 11px 0" }}>
              {g(ev.description, lang)}
            </p>
            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: ev.affiliateLinks ? "12px" : 0 }}>
              <span style={{ fontFamily: "'Source Serif 4', serif", fontSize: "0.78rem", color: "#9A9080", display: "flex", alignItems: "center", gap: "5px" }}>
                <I.Calendar /> {g(ev.date, lang)}
              </span>
              <span style={{ fontFamily: "'Source Serif 4', serif", fontSize: "0.78rem", color: "#9A9080", display: "flex", alignItems: "center", gap: "5px" }}>
                <I.MapPin /> {g(ev.venue, lang)}
              </span>
            </div>
            {ev.affiliateLinks && (
              <div style={{ display: "flex", gap: "7px", flexWrap: "wrap", marginBottom: "12px" }}>
                {ev.affiliateLinks.map((l, j) => (
                  <AffBtn key={j} label={g(l.label, lang)} partner={l.partner} query={l.query} type={l.type} city={articleCity} />
                ))}
              </div>
            )}
            <a
              href={evPath}
              onClick={(e) => { e.preventDefault(); navigate(evPath); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              style={{
                display: "inline-flex", alignItems: "center", gap: "5px",
                background: "none", border: "none", cursor: "pointer", padding: 0,
                fontFamily: "'Source Serif 4', serif", fontSize: "0.75rem",
                fontWeight: 600, color: "#B8860B", textDecoration: "none",
              }}
            >
              {t("event_details")} <I.Arrow />
            </a>
          </div>
        );
      })}
    </div>
  );
};
