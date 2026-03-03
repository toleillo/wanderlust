import { useLocale } from "@i18n";
import { useMeta } from "@hooks";
import { COLORS, FONTS } from "@styles";
import { AFFILIATE_CONFIG } from "@config";
import { AffBtn } from "@components/affiliate";
import { SmartImage } from "@components/ui";

export const ToolkitView = () => {
  const { lang } = useLocale();
  
  useMeta({
    title: lang === "en" ? "The Ultimate Travel Toolkit 2026 — Expert Resources" : "El Toolkit de Viaje Definitivo 2026 — Recursos Expertos",
    description: lang === "en" ? "Handpicked tools for the modern traveler: eSIMs, insurance, and more." : "Herramientas seleccionadas para el viajero moderno: eSIMs, seguros y más.",
    canonical: lang === "en" ? "/en/toolkit" : "/toolkit",
  });

  const sections = [
    {
      title: lang === "en" ? "Digital Connectivity" : "Conectividad Digital",
      subtitle: lang === "en" ? "Stay online anywhere in the world." : "Mantente conectado en cualquier rincón del mundo.",
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200",
      items: [
        { partner: "airalo", bestFor: lang === "en" ? "Best for global travelers" : "Mejor para viajeros globales", desc: lang === "en" ? "100% digital eSIMs in 200+ countries. Installs in minutes." : "eSIMs 100% digitales en más de 200 países. Instalación en minutos." },
        { partner: "saily", bestFor: lang === "en" ? "Value for money" : "Mejor relación calidad-precio", desc: lang === "en" ? "Reliable 5G data plans by Nord Security." : "Planes de datos 5G fiables de Nord Security." },
        { partner: "yesim", bestFor: lang === "en" ? "Long stays" : "Estancias largas", desc: lang === "en" ? "Includes a virtual number for calls and SMS." : "Incluye número virtual para llamadas y SMS." },
      ]
    },
    {
      title: lang === "en" ? "Travel Security" : "Seguridad y Salud",
      subtitle: lang === "en" ? "Travel with peace of mind." : "Viaja con total tranquilidad.",
      image: "https://images.unsplash.com/photo-1506784911325-101037380961?q=80&w=1200",
      items: [
        { partner: "safetywing", bestFor: lang === "en" ? "Top Choice" : "Nuestra Recomendación", desc: lang === "en" ? "Flexible nomad insurance starting at $45/month." : "Seguro flexible para nómadas desde 45$/mes." },
        { partner: "nordvpn", bestFor: lang === "en" ? "Cybersecurity" : "Ciberseguridad", desc: lang === "en" ? "Protect your identity on public Wi-Fi networks." : "Protege tu identidad en redes Wi-Fi públicas." },
      ]
    },
    {
      title: lang === "en" ? "Logistics & Savings" : "Logística y Ahorro",
      subtitle: lang === "en" ? "Move smarter, spend less." : "Muévete con inteligencia y gasta menos.",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200",
      items: [
        { partner: "discovercars", bestFor: lang === "en" ? "Best car deals" : "Mejores alquileres", desc: lang === "en" ? "The #1 car rental comparison site worldwide." : "El comparador #1 de alquiler de coches del mundo." },
        { partner: "revolut", bestFor: lang === "en" ? "Essential card" : "Tarjeta imprescindible", desc: lang === "en" ? "Best exchange rates and zero fees abroad." : "Mejor tipo de cambio y cero comisiones fuera." },
      ]
    }
  ];

  return (
    <div style={{ animation: "fadeIn 0.5s ease" }}>
      {/* Hero Section */}
      <div style={{ 
        position: "relative", padding: "100px 20px 80px", textAlign: "center",
        background: "radial-gradient(circle at 50% 10%, rgba(212,168,83,0.1) 0%, transparent 50%)"
      }}>
        <span style={{ 
          fontFamily: FONTS.sans, fontSize: "0.75rem", fontWeight: 700, 
          color: COLORS.gold, textTransform: "uppercase", letterSpacing: "0.25em",
          display: "block", marginBottom: "16px"
        }}>
          Edition 2026
        </span>
        <h1 style={{ 
          fontFamily: FONTS.serif, fontSize: "clamp(2.5rem, 8vw, 4.5rem)", 
          color: COLORS.text, margin: "0 auto 20px", maxWidth: "800px", lineHeight: 1,
          fontWeight: 700, letterSpacing: "-0.02em"
        }}>
          The Ultimate <br/>
          <span style={{ color: COLORS.gold }}>Travel Toolkit</span>
        </h1>
        <p style={{ 
          fontFamily: FONTS.sans, color: COLORS.textMuted, fontSize: "1.15rem", 
          maxWidth: "600px", margin: "0 auto", lineHeight: 1.6
        }}>
          {lang === "en" 
            ? "A handpicked, battle-tested collection of the best tools for modern travelers. No fluff, just the essentials."
            : "Una colección de las mejores herramientas para viajeros modernos, probadas en el terreno. Sin rellenos, solo lo esencial."
          }
        </p>
      </div>

      <div style={{ maxWidth: "1140px", margin: "0 auto", padding: "0 22px 100px" }}>
        {sections.map((section, idx) => (
          <div key={idx} style={{ marginBottom: "80px" }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: "16px", marginBottom: "32px", borderBottom: `1px solid ${COLORS.borderSubtle}`, paddingBottom: "16px" }}>
              <h2 style={{ fontFamily: FONTS.serif, fontSize: "2.2rem", color: COLORS.text, margin: 0, fontWeight: 600 }}>
                {section.title}
              </h2>
              <p style={{ fontFamily: FONTS.sans, color: COLORS.textFaint, fontSize: "0.95rem", margin: 0 }}>
                {section.subtitle}
              </p>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "28px" }}>
              {section.items.map((item, i) => {
                const cfg = AFFILIATE_CONFIG[item.partner];
                return (
                  <div key={i} style={{ 
                    background: "rgba(22,20,15,0.6)", 
                    backdropFilter: "blur(12px)",
                    border: `1px solid ${COLORS.border}`, 
                    borderRadius: "24px", 
                    padding: "32px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    transition: "all 0.3s ease",
                    position: "relative",
                    overflow: "hidden"
                  }} className="toolkit-card">
                    {/* Hover glow effect */}
                    <div style={{ 
                      position: "absolute", inset: 0, 
                      background: "radial-gradient(circle at 100% 0%, rgba(212,168,83,0.05) 0%, transparent 60%)",
                      pointerEvents: "none"
                    }} />
                    
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "20px" }}>
                        <div style={{ 
                          width: "56px", height: "56px", borderRadius: "16px", 
                          background: "rgba(255,255,255,0.03)", display: "flex", 
                          alignItems: "center", justifyContent: "center", border: `1px solid ${COLORS.border}`
                        }}>
                          <span style={{ fontSize: "2rem" }}>{cfg?.logo}</span>
                        </div>
                        <span style={{ 
                          fontSize: "0.65rem", fontWeight: 800, color: COLORS.gold,
                          background: COLORS.goldBg, padding: "5px 12px", borderRadius: "30px",
                          textTransform: "uppercase", letterSpacing: "0.05em"
                        }}>
                          {item.bestFor}
                        </span>
                      </div>
                      
                      <h3 style={{ 
                        fontFamily: FONTS.serif, fontSize: "1.4rem", color: COLORS.text, 
                        margin: "0 0 10px 0", fontWeight: 600 
                      }}>
                        {cfg?.name}
                      </h3>
                      <p style={{ 
                        fontFamily: FONTS.sans, color: COLORS.textMuted, fontSize: "0.95rem", 
                        lineHeight: 1.6, marginBottom: "32px" 
                      }}>
                        {item.desc}
                      </p>
                    </div>
                    
                    <AffBtn partner={item.partner} label={lang === "en" ? "Visit Official Website" : "Visitar Web Oficial"} className="toolkit-btn" />
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Closing trust section */}
        <div style={{ 
          background: "linear-gradient(135deg, #16140f, #0e0c09)", 
          borderRadius: "32px", padding: "60px 40px", textAlign: "center",
          border: `1px solid ${COLORS.border}`
        }}>
          <h3 style={{ fontFamily: FONTS.serif, fontSize: "1.8rem", color: COLORS.text, marginBottom: "16px" }}>
            {lang === "en" ? "Why trust these tools?" : "¿Por qué confiar en estas herramientas?"}
          </h3>
          <p style={{ 
            fontFamily: FONTS.sans, color: COLORS.textMuted, fontSize: "1rem", 
            maxWidth: "700px", margin: "0 auto 32px", lineHeight: 1.6
          }}>
            {lang === "en" 
              ? "Every tool listed here has been personally tested by our team in real travel conditions. We prioritize reliability, security, and true value for the traveler. Our reputation is more important than any commission."
              : "Cada herramienta listada aquí ha sido probada personalmente por nuestro equipo en condiciones reales de viaje. Priorizamos la fiabilidad, la seguridad y el valor real para el viajero. Nuestra reputación es más importante que cualquier comisión."
            }
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "24px", opacity: 0.6 }}>
            <span style={{ fontSize: "0.8rem", fontWeight: 700 }}>2026 VERIFIED</span>
            <span style={{ fontSize: "0.8rem", fontWeight: 700 }}>EXPERT CHOICE</span>
            <span style={{ fontSize: "0.8rem", fontWeight: 700 }}>ZERO SPAM</span>
          </div>
        </div>
      </div>

      <style>{`
        .toolkit-card:hover {
          transform: translateY(-8px);
          border-color: ${COLORS.gold} !important;
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }
        .toolkit-btn {
          width: 100%;
          justify-content: center;
          padding: 14px !important;
          border-radius: 12px !important;
        }
      `}</style>
    </div>
  );
};
