import { useState } from "react";
import { buildDeepLink, trackClick } from "@utils";
import { useLocale } from "@i18n";

// Partners with real affiliate tracking URLs — highest commission
const TOOLS = [
  {
    partner:  "nordvpn",
    emoji:    "🔒",
    bg:       "linear-gradient(135deg, #0d0d2e 0%, #181860 100%)",
    accent:   "#5577ff",
    title:    { es: "Navega seguro en cualquier wifi", en: "Stay secure on any wifi" },
    perks:    {
      es: ["6.300+ servidores en 111 países", "Imprescindible en hoteles y aeropuertos", "Hasta 72% de descuento"],
      en: ["6,300+ servers in 111 countries",   "Essential at hotels and airports",        "Up to 72% off"],
    },
    cta: { es: "Activar NordVPN", en: "Get NordVPN" },
    type: "service",
  },
  {
    partner:  "airalo",
    emoji:    "📱",
    bg:       "linear-gradient(135deg, #0d2d1e 0%, #1a5232 100%)",
    accent:   "#5ae888",
    title:    { es: "Internet en 200+ países sin cambiar SIM", en: "Internet in 200+ countries, no SIM swap" },
    perks:    {
      es: ["Actívala desde casa antes de salir", "Planes desde 4,50 € · Sin roaming", "Compatible con cualquier iPhone o Android"],
      en: ["Activate from home before you leave", "Plans from €4.50 · No roaming",     "Works with any iPhone or Android"],
    },
    cta: { es: "Ver planes eSIM", en: "Browse eSIM plans" },
    type: "service",
  },
  {
    partner:  "saily",
    emoji:    "📡",
    bg:       "linear-gradient(135deg, #0a1a2e 0%, #0f2d50 100%)",
    accent:   "#38b6ff",
    title:    { es: "eSIM en 150 países · Planes desde 1,99 €", en: "eSIM in 150 countries · Plans from €1.99" },
    perks:    {
      es: ["By Nord Security · 100% segura", "Activación instantánea · Sin tarjeta física", "10% dto. en tu primer plan"],
      en: ["By Nord Security · 100% secure",  "Instant activation · No physical card",      "10% off your first plan"],
    },
    cta: { es: "Ver planes Saily", en: "Browse Saily plans" },
    type: "service",
  },
  {
    partner:  "kiwi",
    emoji:    "🛫",
    bg:       "linear-gradient(135deg, #1a2e0d 0%, #2e5018 100%)",
    accent:   "#88dd44",
    title:    { es: "Combina vuelos y ahorra hasta un 50%", en: "Combine flights and save up to 50%" },
    perks:    {
      es: ["Virtual Interlining entre 800+ aerolíneas", "Cobertura si pierdes conexión", "El precio más bajo, garantizado"],
      en: ["Virtual Interlining across 800+ airlines", "Coverage if you miss a connection", "Lowest price guaranteed"],
    },
    cta: { es: "Buscar vuelos", en: "Search flights" },
    type: "service",
  },
];

const ToolCard = ({ tool, lang }) => {
  const [h, setH] = useState(false);
  const t = (obj) => obj[lang] || obj.es;
  const url = buildDeepLink(tool.partner, "", "");

  return (
    <a
      href={url}
      target="_blank"
      rel="sponsored noopener noreferrer"
      onClick={() => trackClick(tool.partner, tool.type, t(tool.cta), "", "toolkit")}
      onMouseEnter={() => setH(true)}
      onMouseLeave={() => setH(false)}
      style={{
        display: "flex", flexDirection: "column", gap: "14px",
        background: tool.bg,
        border: `1px solid ${tool.accent}28`,
        borderRadius: "14px", padding: "24px 22px",
        textDecoration: "none", cursor: "pointer",
        transition: "all 0.2s",
        boxShadow: h ? `0 12px 36px ${tool.accent}22` : "0 2px 8px rgba(0,0,0,0.3)",
        transform: h ? "translateY(-3px)" : "none",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <span style={{ fontSize: "1.8rem", lineHeight: 1 }}>{tool.emoji}</span>
        <h4 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "1.05rem", fontWeight: 700,
          color: "#e8e0d4", margin: 0, lineHeight: 1.25,
        }}>
          {t(tool.title)}
        </h4>
      </div>

      <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "5px", flex: 1 }}>
        {t(tool.perks).map((perk, i) => (
          <li key={i} style={{
            fontFamily: "'Libre Franklin', sans-serif",
            fontSize: "0.76rem", color: "rgba(232,224,212,0.55)",
            display: "flex", alignItems: "center", gap: "6px",
          }}>
            <span style={{ color: tool.accent, flexShrink: 0, fontSize: "0.6rem" }}>✦</span>
            {perk}
          </li>
        ))}
      </ul>

      <div style={{
        marginTop: "auto",
        padding: "9px 14px", borderRadius: "8px", textAlign: "center",
        background: h ? `${tool.accent}28` : `${tool.accent}14`,
        border: `1px solid ${tool.accent}44`,
        fontFamily: "'Libre Franklin', sans-serif",
        fontSize: "0.8rem", fontWeight: 700,
        color: tool.accent, transition: "all 0.15s",
      }}>
        {t(tool.cta)} →
      </div>

      <span style={{
        fontFamily: "'Libre Franklin', sans-serif",
        fontSize: "0.48rem", color: "rgba(255,255,255,0.18)",
        textTransform: "uppercase", letterSpacing: "0.1em", textAlign: "center",
      }}>
        {lang === "es" ? "Publicidad" : "Ad"}
      </span>
    </a>
  );
};

export const ToolkitStrip = () => {
  const { lang } = useLocale();
  const title    = lang === "es" ? "Para viajar más inteligente" : "Travel smarter";
  const subtitle = lang === "es"
    ? "Las herramientas que no aparecen en las guías de viaje — pero que marcan la diferencia."
    : "The tools that don't appear in travel guides — but make all the difference.";

  return (
    <section style={{ margin: "52px 0" }}>
      <h2 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "1.5rem", fontWeight: 600,
        color: "#e8e0d4", margin: "0 0 6px",
      }}>
        {title}
      </h2>
      <p style={{
        fontFamily: "'Libre Franklin', sans-serif",
        fontSize: "0.88rem", color: "#5e5648",
        margin: "0 0 22px", lineHeight: 1.5,
      }}>
        {subtitle}
      </p>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
        gap: "14px",
      }}>
        {TOOLS.map((tool) => (
          <ToolCard key={tool.partner} tool={tool} lang={lang} />
        ))}
      </div>
    </section>
  );
};
