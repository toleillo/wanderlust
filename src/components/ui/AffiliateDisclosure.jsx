import { useLocale } from "@i18n";

export const AffiliateDisclosure = () => {
  const { lang } = useLocale();
  
  const text = lang === "en" 
    ? "Disclosure: This post contains affiliate links. If you make a purchase through these links, we may earn a small commission at no extra cost to you. This helps support our independent travel guides."
    : "Nota: Este artículo contiene enlaces de afiliación. Si realizas una compra a través de ellos, podemos recibir una pequeña comisión sin coste adicional para ti. Esto nos ayuda a mantener nuestras guías independientes.";

  return (
    <div style={{
      padding: "12px 16px",
      background: "#F9F8F6",
      border: "1px solid #E5E1D8",
      borderRadius: "8px",
      marginBottom: "24px",
      fontSize: "0.78rem",
      lineHeight: "1.4",
      color: "#9A9080",
      fontFamily: "'Source Serif 4', serif",
      fontStyle: "italic"
    }}>
      {text}
    </div>
  );
};
