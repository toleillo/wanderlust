import { AffBtn } from "@components/affiliate";
import { useLocale } from "@i18n";

export const MobileBookingBar = ({ city, show }) => {
  const { t } = useLocale();
  if (!show) return null;
  return (
    <div style={{
      position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 200,
      background: "rgba(15,13,10,0.95)", backdropFilter: "blur(16px)",
      borderTop: "1px solid #2a2520", padding: "10px 16px",
      display: "flex", gap: "8px", justifyContent: "center",
      animation: "slideUp 0.3s ease", WebkitBackdropFilter: "blur(16px)",
    }}>
      <AffBtn label={t("mb_flights")} partner="skyscanner"   city={city} type="service"  small />
      <AffBtn label={t("mb_hotel")}   partner="booking"      city={city} type="hotel"    small />
      <AffBtn label={t("mb_car")}     partner="discovercars" city={city} type="service"  small />
      <AffBtn label={t("mb_tours")}   partner="getyourguide" city={city} type="activity" small />
    </div>
  );
};
