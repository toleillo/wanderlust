import { COLORS, FONTS } from "@styles";
import { useLocale } from "@i18n";
import { AffBtn } from "@components/affiliate";

const BUDGET_ROWS = [
  { icon: "🏨", labelKey: "budget_stay",     price: "€65-140", partner: "booking",      type: "hotel"    },
  { icon: "🍴", labelKey: "budget_food",     price: "€30-60",  partner: "thefork",      type: "restaurant"},
  { icon: "🎟️", labelKey: "budget_activity", price: "€20-50",  partner: "getyourguide", type: "activity" },
  { icon: "💳", labelKey: "budget_card",     price: "0€ fees", partner: "revolut",      type: "service"  },
];

export const BudgetWidget = ({ city }) => {
  const { t } = useLocale();

  return (
    <div style={{
      background: COLORS.bgCardAlt,
      border: `1px solid ${COLORS.border}`,
      borderRadius: "14px",
      padding: "20px",
      marginTop: "16px",
    }}>
      <h4 style={{
        fontFamily: FONTS.serif, fontSize: "1rem",
        color: COLORS.text, margin: "0 0 16px", fontWeight: 600,
      }}>
        {t("budget_title")}
      </h4>

      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        {BUDGET_ROWS.map((row) => (
          <div key={row.partner} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", flexShrink: 0 }}>
              <span style={{ fontSize: "1rem" }}>{row.icon}</span>
              <span style={{ fontFamily: FONTS.sans, fontSize: "0.8rem", color: COLORS.textMuted }}>
                {t(row.labelKey)}
              </span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontFamily: FONTS.sans, fontSize: "0.82rem", color: COLORS.text, fontWeight: 600, whiteSpace: "nowrap" }}>
                {row.price}
              </span>
              <AffBtn partner={row.partner} city={city} query={city} label={t("budget_check_prices")} type={row.type} small />
            </div>
          </div>
        ))}
      </div>

      <p style={{
        marginTop: "16px", paddingTop: "12px",
        borderTop: `1px solid ${COLORS.borderSubtle}`,
        fontFamily: FONTS.sans, fontSize: "0.7rem",
        color: COLORS.textVeryFaint, margin: "16px 0 0",
      }}>
        {t("budget_genius_tip")}
      </p>
    </div>
  );
};
