import { useState } from "react";
import { buildDeepLink, trackClick } from "@utils";
import { useLocale } from "@i18n";
import { g } from "@data";
import { I } from "@components/icons";

// Pre-designed house affiliate banners
const PARTNER_BANNERS = {
  skyscanner: {
    bg: "linear-gradient(135deg, #0c1a3e 0%, #0a2d6e 100%)",
    accent: "#4a9eff",
    emoji: "✈️",
    tagline: { es: "Compara vuelos al mejor precio", en: "Compare flights at the best price" },
    sub: { es: "Ahorra hasta un 40% · Sin comisiones ocultas", en: "Save up to 40% · No hidden fees" },
    offer: { es: "Búsqueda gratuita", en: "Free search" },
    cta: { es: "Buscar vuelos", en: "Search flights" },
    partner: "skyscanner", query: "vuelos baratos", type: "service",
  },
  booking: {
    bg: "linear-gradient(135deg, #00234e 0%, #003b82 100%)",
    accent: "#4db6ff",
    emoji: "🏨",
    tagline: { es: "Más de 500.000 alojamientos", en: "Over 500,000 accommodations" },
    sub: { es: "Sin tarifa de reserva · Cancelación gratuita disponible", en: "No booking fee · Free cancellation available" },
    offer: { es: "Precio garantizado", en: "Guaranteed price" },
    cta: { es: "Ver hoteles", en: "View hotels" },
    partner: "booking", query: "", type: "hotel",
  },
  safetywing: {
    bg: "linear-gradient(135deg, #0d2035 0%, #163a5e 100%)",
    accent: "#5ab4e8",
    emoji: "🛡️",
    tagline: { es: "Seguro de viaje desde 40 $/mes", en: "Travel insurance from $40/month" },
    sub: { es: "Cobertura en 175+ países · Ideal para nómadas digitales", en: "Coverage in 175+ countries · Ideal for digital nomads" },
    offer: { es: "Actívalo ya viajando", en: "Buy while travelling" },
    cta: { es: "Ver cobertura", en: "View coverage" },
    partner: "safetywing", query: "", type: "service",
  },
  airalo: {
    bg: "linear-gradient(135deg, #0d2d1e 0%, #1a5230 100%)",
    accent: "#5ae888",
    emoji: "📱",
    tagline: { es: "eSIM en 200+ países sin roaming", en: "eSIM in 200+ countries, no roaming" },
    sub: { es: "Desde 4,50 € · Sin tarjeta física · Sin cambio de SIM", en: "From €4.50 · No physical card · No SIM swap" },
    offer: { es: "Actívala desde casa", en: "Activate from home" },
    cta: { es: "Ver planes", en: "View plans" },
    partner: "airalo", query: "", type: "service",
  },
  getyourguide: {
    bg: "linear-gradient(135deg, #2d1500 0%, #6b3000 100%)",
    accent: "#ffaa44",
    emoji: "🎯",
    tagline: { es: "Más de 1 millón de experiencias", en: "Over 1 million experiences" },
    sub: { es: "Tours, entradas y actividades · Cancelación gratuita", en: "Tours, tickets and activities · Free cancellation" },
    offer: { es: "Mejor precio garantizado", en: "Best price guaranteed" },
    cta: { es: "Explorar actividades", en: "Explore activities" },
    partner: "getyourguide", query: "", type: "activity",
  },
  discovercars: {
    bg: "linear-gradient(135deg, #0d2a0d 0%, #1a5220 100%)",
    accent: "#6ae85a",
    emoji: "🚗",
    tagline: { es: "Compara 500+ empresas de alquiler", en: "Compare 500+ rental companies" },
    sub: { es: "Seguro incluido · Sin cargos ocultos · Mejores precios", en: "Insurance included · No hidden charges · Best prices" },
    offer: { es: "Cancelación gratuita", en: "Free cancellation" },
    cta: { es: "Comparar coches", en: "Compare cars" },
    partner: "discovercars", query: "", type: "service",
  },
  worldnomads: {
    bg: "linear-gradient(135deg, #1a2a0d 0%, #2a4a18 100%)",
    accent: "#9ae85a",
    emoji: "🌐",
    tagline: { es: "150+ actividades de aventura cubiertas", en: "150+ adventure activities covered" },
    sub: { es: "Cobertura médica hasta 5.000.000 $ · Cancelación de vuelos", en: "Medical coverage up to $5,000,000 · Flight cancellation" },
    offer: { es: "Ideal para aventureros", en: "Ideal for adventurers" },
    cta: { es: "Calcular precio", en: "Get a quote" },
    partner: "worldnomads", query: "", type: "service",
  },
  holafly: {
    bg: "linear-gradient(135deg, #1e1a35 0%, #2e2a5a 100%)",
    accent: "#aa88ff",
    emoji: "🌍",
    tagline: { es: "eSIM con datos ilimitados para viajar", en: "Unlimited data eSIM for travel" },
    sub: { es: "150+ países · Actívala en minutos · Soporte en español", en: "150+ countries · Activate in minutes · Spanish support" },
    offer: { es: "Planes ilimitados", en: "Unlimited plans" },
    cta: { es: "Ver planes", en: "View plans" },
    partner: "holafly", query: "", type: "service",
  },
  kiwi: {
    bg: "linear-gradient(135deg, #1a2e0d 0%, #2e5018 100%)",
    accent: "#88dd44",
    emoji: "🛫",
    tagline: { es: "Combina vuelos y ahorra hasta un 50%", en: "Combine flights and save up to 50%" },
    sub: { es: "Virtual Interlining · Cobertura si pierdes conexión · Sin comisiones extra", en: "Virtual Interlining · Coverage if you miss a connection · No extra fees" },
    offer: { es: "Precio mínimo garantizado", en: "Lowest price guaranteed" },
    cta: { es: "Buscar vuelos", en: "Search flights" },
    partner: "kiwi", query: "", type: "service",
  },
  parkimeter: {
    bg: "linear-gradient(135deg, #2a1a05 0%, #503010 100%)",
    accent: "#ff9944",
    emoji: "🅿️",
    tagline: { es: "Reserva parking con hasta un 70% de descuento", en: "Book parking with up to 70% discount" },
    sub: { es: "Aeropuertos, centros y hoteles · Cancelación gratuita · Confirmación inmediata", en: "Airports, city centres and hotels · Free cancellation · Instant confirmation" },
    offer: { es: "Sin sorpresas al llegar", en: "No surprises on arrival" },
    cta: { es: "Reservar parking", en: "Book parking" },
    partner: "parkimeter", query: "", type: "service",
  },
  easypark: {
    bg: "linear-gradient(135deg, #0d1e35 0%, #1a3560 100%)",
    accent: "#44aaff",
    emoji: "🚘",
    tagline: { es: "Paga el parking desde el móvil, sin parquímetro", en: "Pay for parking from your phone, no meter needed" },
    sub: { es: "500+ ciudades europeas · Solo pagas lo que usas · App gratuita", en: "500+ European cities · Pay only what you use · Free app" },
    offer: { es: "Primera vez sin comisión", en: "First time, no commission" },
    cta: { es: "Descargar Easypark", en: "Get Easypark" },
    partner: "easypark", query: "", type: "service",
  },
};

const SIZES = {
  leaderboard: { maxWidth: "728px", width: "100%", height: "92px" },
  rectangle:   { width: "100%", maxWidth: "300px", height: "250px" },
  billboard:   { maxWidth: "100%", width: "100%", height: "200px" },
};

export const AdBanner = ({ size = "leaderboard", type = "placeholder", partner, slot, style = {} }) => {
  const [h, setH] = useState(false);
  const { lang, t } = useLocale();
  const dim = SIZES[size] || SIZES.leaderboard;

  // — Placeholder —
  if (type === "placeholder") {
    return (
      <div style={{
        ...dim, margin: "0 auto",
        background: "#0f0d0a",
        border: "1px dashed #252018",
        borderRadius: "8px",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "5px",
        ...style,
      }}>
        <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.52rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#2e2820" }}>
          {t("ad_label")}
        </span>
        <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.6rem", color: "#302a22" }}>
          {t("ad_placeholder")} · {t("ad_contact")}
        </span>
      </div>
    );
  }

  // — Google AdSense —
  if (type === "adsense") {
    return (
      <div style={{ ...dim, margin: "0 auto", ...style }}>
        <p style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.52rem", color: "#3a3428", textAlign: "center", margin: "0 0 3px 0", textTransform: "uppercase", letterSpacing: "0.15em" }}>
          {t("ad_label")}
        </p>
        <ins
          className="adsbygoogle"
          style={{ display: "block", ...dim }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
          data-ad-slot={slot || "XXXXXXXXXX"}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
      </div>
    );
  }

  // — Affiliate house ad —
  if (type === "affiliate") {
    const bd = PARTNER_BANNERS[partner];
    if (!bd) return <AdBanner size={size} type="placeholder" style={style} />;

    const url = buildDeepLink(bd.partner, "", bd.query);
    const handleClick = () => trackClick(bd.partner, bd.type, g(bd.cta, lang), "", "banner");

    // Rectangle (vertical)
    if (size === "rectangle") {
      return (
        <a href={url} target="_blank" rel="sponsored noopener noreferrer" onClick={handleClick}
          onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
          style={{
            ...dim, display: "flex", flexDirection: "column", alignItems: "center",
            justifyContent: "space-between", background: bd.bg,
            border: `1px solid ${bd.accent}28`, borderRadius: "12px",
            padding: "20px 16px 16px", textDecoration: "none", cursor: "pointer",
            transition: "all 0.2s",
            boxShadow: h ? `0 8px 28px ${bd.accent}25` : "0 2px 8px rgba(0,0,0,0.3)",
            transform: h ? "translateY(-2px)" : "none",
            ...style,
          }}
        >
          <span style={{ fontSize: "2rem", lineHeight: 1 }}>{bd.emoji}</span>
          <div style={{ textAlign: "center", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", gap: "6px", padding: "10px 0" }}>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.05rem", fontWeight: 700, color: "#e8e0d4", margin: 0, lineHeight: 1.25 }}>
              {g(bd.tagline, lang)}
            </p>
            <p style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.7rem", color: "rgba(232,224,212,0.5)", margin: 0, lineHeight: 1.45 }}>
              {g(bd.sub, lang)}
            </p>
            <span style={{ display: "inline-block", fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.62rem", fontWeight: 700, color: bd.accent, background: `${bd.accent}18`, border: `1px solid ${bd.accent}35`, borderRadius: "4px", padding: "2px 8px" }}>
              {g(bd.offer, lang)}
            </span>
          </div>
          <div style={{
            width: "100%", padding: "9px", borderRadius: "8px", textAlign: "center",
            background: h ? `${bd.accent}30` : `${bd.accent}18`,
            border: `1px solid ${bd.accent}44`,
            fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.78rem", fontWeight: 700,
            color: bd.accent, transition: "all 0.15s", display: "flex", alignItems: "center",
            justifyContent: "center", gap: "5px",
          }}>
            {g(bd.cta, lang)} <I.Ext />
          </div>
          <p style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.5rem", color: "rgba(255,255,255,0.18)", margin: "6px 0 0", textTransform: "uppercase", letterSpacing: "0.12em" }}>
            {t("ad_label")}
          </p>
        </a>
      );
    }

    // Leaderboard / Billboard (horizontal)
    const isBillboard = size === "billboard";
    return (
      <a href={url} target="_blank" rel="sponsored noopener noreferrer" onClick={handleClick}
        onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
        style={{
          ...dim, display: "flex", alignItems: "center", justifyContent: "space-between",
          gap: "16px", background: bd.bg, border: `1px solid ${bd.accent}22`,
          borderRadius: isBillboard ? "14px" : "10px",
          padding: isBillboard ? "0 40px" : "0 20px",
          textDecoration: "none", cursor: "pointer", transition: "all 0.2s", margin: "0 auto",
          boxShadow: h ? `0 6px 24px ${bd.accent}20` : "0 2px 8px rgba(0,0,0,0.25)",
          ...style,
        }}
      >
        <span style={{ fontSize: isBillboard ? "2.5rem" : "1.6rem", flexShrink: 0 }}>{bd.emoji}</span>
        <div style={{ flex: 1, minWidth: 0 }}>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: isBillboard ? "1.3rem" : "0.95rem", fontWeight: 700, color: "#e8e0d4", margin: "0 0 2px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {g(bd.tagline, lang)}
          </p>
          <p style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: isBillboard ? "0.82rem" : "0.68rem", color: "rgba(232,224,212,0.5)", margin: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {g(bd.sub, lang)}
          </p>
        </div>
        <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.62rem", fontWeight: 700, color: bd.accent, background: `${bd.accent}18`, border: `1px solid ${bd.accent}35`, borderRadius: "4px", padding: "3px 9px", whiteSpace: "nowrap", flexShrink: 0 }}>
          {g(bd.offer, lang)}
        </span>
        <div style={{
          padding: isBillboard ? "10px 22px" : "7px 14px", borderRadius: "8px",
          border: `1px solid ${bd.accent}55`,
          background: h ? `${bd.accent}30` : `${bd.accent}18`,
          fontFamily: "'Libre Franklin', sans-serif",
          fontSize: isBillboard ? "0.85rem" : "0.74rem", fontWeight: 700,
          color: bd.accent, transition: "all 0.15s", whiteSpace: "nowrap",
          display: "flex", alignItems: "center", gap: "5px", flexShrink: 0,
        }}>
          {g(bd.cta, lang)} <I.Ext />
        </div>
        <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.48rem", color: "rgba(255,255,255,0.18)", textTransform: "uppercase", letterSpacing: "0.1em", flexShrink: 0 }}>
          {t("ad_label")}
        </span>
      </a>
    );
  }

  return null;
};
