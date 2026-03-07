import { COLORS, FONTS } from "@styles";
import { useLocale } from "@i18n";
import { AffBtn } from "@components/affiliate";

export const BudgetWidget = ({ city }) => {
  const { t } = useLocale();

  const budgets = {
    stay: { icon: "🏨", label: t("budget_stay"), price: "€85-150", partner: "booking" },
    food: { icon: "🍴", label: t("budget_food"), price: "€40-70", partner: "thefork" },
    fun:  { icon: "🎟️", label: t("budget_activity"), price: "€25-50", partner: "getyourguide" },
  };

  return (
    <div style={{
      background: COLORS.bgCardAlt,
      border: `1px solid ${COLORS.border}`,
      borderRadius: "14px",
      padding: "20px",
      marginTop: "16px"
    }}>
      <h4 style={{
        fontFamily: FONTS.serif,
        fontSize: "1rem",
        color: COLORS.text,
        margin: "0 0 16px 0",
        fontWeight: 600
      }}>
        {t("budget_title")}
      </h4>
      
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {Object.values(budgets).map((b, i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "1rem" }}>{b.icon}</span>
              <span style={{ fontFamily: FONTS.sans, fontSize: "0.8rem", color: COLORS.textMuted }}>{b.label}</span>
            </div>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontFamily: FONTS.sans, fontSize: "0.85rem", color: COLORS.text, fontWeight: 600 }}>{b.price}</div>
              <a 
                href="#" // buildDeepLink would go here
                style={{ fontSize: "0.65rem", color: COLORS.gold, textDecoration: "none" }}
                onClick={(e) => e.preventDefault()}
              >
                {t("budget_check_prices")}
              </a>
            </div>
          </div>
        ))}
      </div>
      
      <div style={{ 
        marginTop: "18px", 
        paddingTop: "14px", 
        borderTop: `1px solid ${COLORS.borderSubtle}`,
        display: "flex",
        flexDirection: "column",
        gap: "8px"
      }}>
        <p style={{ fontFamily: FONTS.sans, fontSize: "0.7rem", color: COLORS.textVeryFaint, margin: 0 }}>
          {t("budget_genius_tip")}
        </p>
        <AffBtn partner="booking" city={city} label={t("budget_find_deals")} small />
      </div>
    </div>
  );
};
