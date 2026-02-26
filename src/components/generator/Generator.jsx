import { useState } from "react";
import { I } from "@components/icons";

export const Generator = ({ onGenerate }) => {
  const [city, setCity] = useState("");
  const [gen, setGen] = useState(false);
  const [prog, setProg] = useState("");

  const go = async () => {
    if (!city.trim() || gen) return;
    setGen(true);
    for (const s of [
      "Investigando puntos de interés...",
      "Buscando eventos y festivales...",
      "Generando deep links de afiliación...",
      "Redactando artículo con IA...",
      "Optimizando CTAs y SEO...",
    ]) {
      setProg(s);
      await new Promise((r) => setTimeout(r, 1000));
    }
    const c = city.trim();
    const slug = c.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
    onGenerate({
      id: Date.now(), city: c, country: "IA", emoji: "✨", slug: `${slug}-guia-2026`,
      heroImage: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80",
      title: `Descubre ${c}: Guía Completa Generada por IA`,
      subtitle: `Puntos de interés, eventos y enlaces de reserva para ${c}`,
      date: new Date().toISOString().split("T")[0], readTime: "7 min", category: "IA",
      excerpt: `Guía de ${c} generada por IA con deep links de afiliación, comparador de precios y CTAs contextuales.`,
      metaDescription: `Guía completa de ${c}: mejores lugares, eventos y donde reservar al mejor precio.`,
      keywords: [c, "viaje", "guía", "2026"],
      pointsOfInterest: [
        { name: `Centro de ${c}`, type: "Zona Histórica", description: "El corazón cultural de la ciudad.", rating: 4.7, priceRange: "Variable",
          affiliateLinks: [
            { label: "Tour guiado", partner: "getyourguide", query: `${c} tour`, type: "activity" },
            { label: "Restaurantes", partner: "thefork", query: c, type: "restaurant" },
          ]},
        { name: "Mirador Principal", type: "Mirador", description: "Las mejores vistas panorámicas.", rating: 4.8,
          affiliateLinks: [
            { label: "Entrada", partner: "tiqets", query: `${c} viewpoint`, type: "tickets" },
          ]},
      ],
      events: [
        { name: `Festival de ${c}`, type: "Cultural", date: "Próximamente", venue: "Centro",
          description: "Celebración anual de cultura local.",
          affiliateLinks: [
            { label: "Entradas", partner: "ticketmaster", query: c, type: "tickets" },
          ]},
      ],
      services: {
        flights: ["skyscanner", "kiwi"], hotels: ["booking", "hostelworld"],
        cars: ["discovercars"], activities: ["getyourguide", "viator"],
        restaurants: ["thefork"], insurance: ["safetywing"], esim: ["airalo"],
      },
      content: `${c} es un destino fascinante. Este artículo de demostración muestra cómo la IA genera contenido con CTAs inline.\n\nEn producción, aquí irían párrafos ricos con {{CTA:activity:getyourguide:${encodeURIComponent(c)} tour:reserva un tour guiado}} integrados naturalmente en la narrativa.\n\nCada enlace usa deep linking dinámico con fechas preseleccionadas y tracking A/B para maximizar conversiones.`,
    });
    setGen(false);
    setProg("");
    setCity("");
  };

  return (
    <div style={{
      background: "linear-gradient(140deg, #16140f 0%, #0f1a12 100%)",
      border: "1px solid #2e4a2e", borderRadius: "14px", padding: "28px", marginBottom: "44px",
      position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 25% 50%, rgba(74,144,74,0.06) 0%, transparent 55%)", pointerEvents: "none" }} />
      <div style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "flex", alignItems: "center", gap: "9px", marginBottom: "6px" }}>
          <I.Sparkle />
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", color: "#e8e0d4", margin: 0, fontWeight: 600 }}>
            Generador de Artículos con IA
          </h3>
        </div>
        <p style={{ fontFamily: "'Libre Franklin', sans-serif", color: "#7a7a6e", fontSize: "0.85rem", margin: "0 0 18px 0", lineHeight: 1.5 }}>
          Escribe una ciudad → la IA genera artículo + deep links de afiliación + comparadores de precio + CTAs inline + schema SEO.
        </p>
        <div style={{ display: "flex", gap: "10px" }}>
          <input
            type="text" value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && go()}
            placeholder="Ej: París, Buenos Aires, Estambul..."
            disabled={gen}
            style={{
              flex: 1, padding: "13px 16px", borderRadius: "9px", border: "1px solid #343028",
              background: "#12100d", color: "#e8e0d4",
              fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.92rem", outline: "none",
            }}
          />
          <button onClick={go} disabled={gen || !city.trim()} style={{
            padding: "13px 26px", borderRadius: "9px", border: "none",
            background: gen ? "#1e2e1e" : "linear-gradient(135deg,#3a6a3a,#2e5a2e)",
            color: "#e8e0d4", fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.92rem", fontWeight: 600,
            cursor: gen ? "wait" : "pointer",
            display: "flex", alignItems: "center", gap: "7px",
            opacity: !city.trim() && !gen ? 0.5 : 1,
          }}>
            {gen ? <I.Spin /> : <I.Sparkle />} {gen ? "Generando..." : "Generar"}
          </button>
        </div>
        {prog && (
          <div style={{
            marginTop: "14px", padding: "10px 14px", borderRadius: "8px",
            background: "rgba(74,144,74,0.08)", border: "1px solid rgba(74,144,74,0.15)",
            display: "flex", alignItems: "center", gap: "9px",
          }}>
            <I.Spin />
            <span style={{ fontFamily: "'Libre Franklin', sans-serif", color: "#8ed68e", fontSize: "0.82rem" }}>{prog}</span>
          </div>
        )}
      </div>
    </div>
  );
};
