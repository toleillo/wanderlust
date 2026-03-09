export const COLORS = {
  // Light editorial palette
  bg:           "#FAFAF7",   // crema papel (fondo principal)
  bgCard:       "#FFFFFF",   // blanco puro para cards
  bgCardAlt:    "#F4F2EE",   // crema algo más oscuro, secciones alternas
  bgInput:      "#F0EEE9",   // inputs
  border:       "#E5E1D8",   // bordes sutiles
  borderHover:  "#C8C0B0",   // hover
  borderSubtle: "#EDE9E3",   // bordes muy sutiles
  text:         "#1A1A18",   // casi negro (texto principal)
  textMuted:    "#1A1A18",   // texto secundario
  textDim:      "#9A9080",   // metadata, fechas
  textFaint:    "#B0A898",   // muy secundario
  textVeryFaint:"#C8C0B0",   // barely visible
  gold:         "#B8860B",   // oro oscuro (legible sobre claro)
  goldLight:    "#D4A853",   // hover/acentos
  goldBg:       "rgba(184,134,11,0.07)",
  goldBorder:   "rgba(184,134,11,0.22)",
  green:        "#2E6A2E",
  greenLight:   "#4CAF50",
  greenBg:      "rgba(46,106,46,0.08)",
  urgency:      "#C0392B",   // rojo terracota

  // Header/Footer oscuro (inverso editorial)
  bgDark:       "#0E0C09",
  textLight:    "#E8E0D4",
};

export const FONTS = {
  serif:  "'Cormorant Garamond', serif",   // H1, H2, títulos de artículo
  body:   "'Source Serif 4', serif",        // Todo lo demás: body, UI, nav, botones
  // sans mantenido como alias de body para compatibilidad
  get sans() { return this.body; },
};

export const BREAKPOINTS = {
  mobile: "600px",
  tablet: "900px",
  desktop: "1140px",
};

export const Z_INDEX = {
  header: 100,
  mobileBar: 200,
};
