import { useNavigate } from "react-router-dom";
import { useLocale } from "@i18n";
import { useMeta } from "@hooks";

const CONTENT = {
  privacy: {
    es: {
      title: "Política de Privacidad",
      updated: "Última actualización: febrero 2026",
      sections: [
        {
          h: "1. Responsable del tratamiento",
          p: "ElTechoEncima (en adelante, «el blog»), accesible en www.eltechoencima.com. Contacto: contacto@www.eltechoencima.com.",
        },
        {
          h: "2. Datos que recopilamos",
          p: "Recopilamos datos de uso de forma anónima a través de Google Analytics 4 (GA4) cuando el usuario acepta las cookies analíticas. Estos datos incluyen páginas visitadas, tiempo de sesión y dispositivo empleado. No recogemos nombre, e-mail ni ningún dato identificativo de forma directa.",
        },
        {
          h: "3. Finalidad y base legal",
          p: "Los datos se tratan para analizar el uso del blog y mejorar el contenido (interés legítimo, art. 6.1.f RGPD) y para publicidad personalizada con tu consentimiento previo (art. 6.1.a RGPD). La base legal de cada cookie se detalla en la Política de Cookies.",
        },
        {
          h: "4. Destinatarios",
          p: "Los datos analíticos se transfieren a Google LLC (EEUU), acogida a las cláusulas contractuales tipo de la UE. Las interacciones de reserva se redirigen a plataformas de terceros (Booking.com, Skyscanner, GetYourGuide, etc.), cada una con su propia política de privacidad.",
        },
        {
          h: "5. Conservación",
          p: "Los datos de GA4 se conservan durante 14 meses. Las cookies de terceros se rigen por la política de retención de cada empresa.",
        },
        {
          h: "6. Tus derechos",
          p: "Puedes acceder, rectificar, suprimir, limitar u oponerte al tratamiento de tus datos, así como solicitar la portabilidad, escribiendo a contacto@www.eltechoencima.com. También tienes derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (aepd.es).",
        },
        {
          h: "7. Enlaces de afiliados",
          p: "Este blog contiene enlaces de afiliado. Si realizas una reserva a través de ellos, recibimos una comisión sin coste adicional para ti. Esta práctica no afecta a la independencia editorial de los contenidos.",
        },
      ],
    },
    en: {
      title: "Privacy Policy",
      updated: "Last updated: February 2026",
      sections: [
        {
          h: "1. Data Controller",
          p: "ElTechoEncima (the «blog»), available at www.eltechoencima.com. Contact: hello@www.eltechoencima.com.",
        },
        {
          h: "2. Data We Collect",
          p: "We collect anonymous usage data through Google Analytics 4 (GA4) when the user accepts analytics cookies. This includes pages visited, session duration and device type. We do not collect names, email addresses or any directly identifying data.",
        },
        {
          h: "3. Purpose and Legal Basis",
          p: "Data is processed to analyse blog usage and improve content (legitimate interest, GDPR Art. 6.1.f) and for personalised advertising with your prior consent (GDPR Art. 6.1.a). The legal basis for each cookie is detailed in the Cookie Policy.",
        },
        {
          h: "4. Recipients",
          p: "Analytics data is transferred to Google LLC (USA), covered by EU standard contractual clauses. Booking interactions redirect to third-party platforms (Booking.com, Skyscanner, GetYourGuide, etc.), each with their own privacy policy.",
        },
        {
          h: "5. Retention",
          p: "GA4 data is retained for 14 months. Third-party cookies are governed by each company's own retention policy.",
        },
        {
          h: "6. Your Rights",
          p: "You may access, rectify, delete, restrict or object to the processing of your data, as well as request portability, by writing to hello@www.eltechoencima.com. You also have the right to lodge a complaint with your local supervisory authority.",
        },
        {
          h: "7. Affiliate Links",
          p: "This blog contains affiliate links. If you make a booking through them, we receive a commission at no extra cost to you. This does not affect the editorial independence of our content.",
        },
      ],
    },
  },
  cookies: {
    es: {
      title: "Política de Cookies",
      updated: "Última actualización: febrero 2026",
      intro: "Este blog utiliza cookies propias y de terceros. A continuación te explicamos qué son, para qué las usamos y cómo puedes gestionarlas.",
      groups: [
        {
          name: "Cookies estrictamente necesarias",
          basis: "Sin estas cookies el sitio no funciona. No requieren consentimiento.",
          cookies: [
            { name: "wander_cookie_consent", owner: "ElTechoEncima", purpose: "Guarda tu preferencia de consentimiento de cookies.", duration: "1 año" },
          ],
        },
        {
          name: "Cookies analíticas",
          basis: "Solo se activan si aceptas las cookies analíticas.",
          cookies: [
            { name: "_ga", owner: "Google Analytics 4", purpose: "Distingue usuarios únicos.", duration: "2 años" },
            { name: "_ga_*", owner: "Google Analytics 4", purpose: "Almacena el estado de la sesión.", duration: "2 años" },
          ],
        },
        {
          name: "Cookies publicitarias",
          basis: "Solo se activan si aceptas todas las cookies.",
          cookies: [
            { name: "IDE, NID, __Secure-*", owner: "Google AdSense / DoubleClick", purpose: "Muestra anuncios personalizados.", duration: "1-2 años" },
          ],
        },
        {
          name: "Cookies de afiliados (terceros)",
          basis: "Se activan al hacer clic en un enlace de afiliado y son responsabilidad del tercero.",
          cookies: [
            { name: "Varias", owner: "Booking.com, Skyscanner, Kiwi.com, GetYourGuide, DiscoverCars, Airalo, SafetyWing, etc.", purpose: "Seguimiento de reservas para comisiones de afiliado.", duration: "7–90 días según plataforma" },
          ],
        },
      ],
      manage: "Puedes retirar o cambiar tu consentimiento en cualquier momento haciendo clic en «Cookies» en el pie de página. También puedes bloquear o eliminar cookies desde los ajustes de tu navegador.",
    },
    en: {
      title: "Cookie Policy",
      updated: "Last updated: February 2026",
      intro: "This blog uses first-party and third-party cookies. Below we explain what they are, how we use them and how you can manage them.",
      groups: [
        {
          name: "Strictly Necessary Cookies",
          basis: "These cookies are required for the site to function. They do not require consent.",
          cookies: [
            { name: "wander_cookie_consent", owner: "ElTechoEncima", purpose: "Stores your cookie consent preference.", duration: "1 year" },
          ],
        },
        {
          name: "Analytics Cookies",
          basis: "Only activated if you accept analytics cookies.",
          cookies: [
            { name: "_ga", owner: "Google Analytics 4", purpose: "Distinguishes unique users.", duration: "2 years" },
            { name: "_ga_*", owner: "Google Analytics 4", purpose: "Stores session state.", duration: "2 years" },
          ],
        },
        {
          name: "Advertising Cookies",
          basis: "Only activated if you accept all cookies.",
          cookies: [
            { name: "IDE, NID, __Secure-*", owner: "Google AdSense / DoubleClick", purpose: "Displays personalised ads.", duration: "1-2 years" },
          ],
        },
        {
          name: "Affiliate Cookies (Third-Party)",
          basis: "Activated when you click an affiliate link and are the responsibility of the third party.",
          cookies: [
            { name: "Various", owner: "Booking.com, Skyscanner, Kiwi.com, GetYourGuide, DiscoverCars, Airalo, SafetyWing, etc.", purpose: "Tracks bookings for affiliate commissions.", duration: "7–90 days depending on platform" },
          ],
        },
      ],
      manage: "You can withdraw or change your consent at any time by clicking «Cookies» in the footer. You can also block or delete cookies from your browser settings.",
    },
  },
};

const prose = {
  fontFamily: "'Source Serif 4', serif",
  fontSize: "1rem",
  lineHeight: 1.8,
  color: "#6B6358",
};

const h2Style = {
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: "1.15rem",
  fontWeight: 600,
  color: "#1A1A18",
  margin: "28px 0 8px",
};

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse",
  fontSize: "0.82rem",
  fontFamily: "'Source Serif 4', serif",
  color: "#6B6358",
  marginTop: "12px",
};

const thStyle = {
  textAlign: "left",
  padding: "8px 12px",
  borderBottom: "1px solid #E5E1D8",
  color: "#9A9080",
  fontWeight: 600,
  fontSize: "0.76rem",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
};

const tdStyle = {
  padding: "10px 12px",
  borderBottom: "1px solid #E5E1D8",
  verticalAlign: "top",
};

export const LegalView = ({ page }) => {
  const { lang, t } = useLocale();
  const navigate = useNavigate();
  const data = CONTENT[page]?.[lang];

  useMeta({
    title: data?.title ? `${data.title} — ElTechoEncima` : "ElTechoEncima",
    description: data?.title ?? "",
  });

  if (!data) return null;

  const backPath = lang === "en" ? "/en" : "/";

  return (
    <article style={{ maxWidth: "720px", margin: "0 auto" }}>
      <button
        onClick={() => navigate(backPath)}
        style={{
          background: "none", border: "none", cursor: "pointer",
          color: "#6B6358", fontSize: "0.82rem",
          fontFamily: "'Source Serif 4', serif",
          padding: "0 0 28px", display: "block",
        }}
      >
        ← {t("go_home")}
      </button>

      <h1 style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
        fontWeight: 700, color: "#1A1A18", margin: "0 0 6px",
      }}>
        {data.title}
      </h1>
      <p style={{ fontFamily: "'Source Serif 4', serif", fontSize: "0.78rem", color: "#9A9080", marginBottom: "40px" }}>
        {data.updated}
      </p>

      {/* Privacy Policy */}
      {page === "privacy" && data.sections?.map((s, i) => (
        <div key={i}>
          <h2 style={h2Style}>{s.h}</h2>
          <p style={prose}>{s.p}</p>
        </div>
      ))}

      {/* Cookie Policy */}
      {page === "cookies" && (
        <>
          <p style={prose}>{data.intro}</p>

          {data.groups?.map((g, i) => (
            <div key={i} style={{ marginTop: "36px" }}>
              <h2 style={h2Style}>{g.name}</h2>
              <p style={{ ...prose, fontSize: "0.88rem", marginBottom: "12px" }}>{g.basis}</p>
              <div style={{ overflowX: "auto" }}>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>{lang === "es" ? "Cookie" : "Cookie"}</th>
                      <th style={thStyle}>{lang === "es" ? "Emisor" : "Owner"}</th>
                      <th style={thStyle}>{lang === "es" ? "Finalidad" : "Purpose"}</th>
                      <th style={thStyle}>{lang === "es" ? "Duración" : "Duration"}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {g.cookies.map((c, j) => (
                      <tr key={j}>
                        <td style={{ ...tdStyle, fontFamily: "monospace", fontSize: "0.78rem" }}>{c.name}</td>
                        <td style={tdStyle}>{c.owner}</td>
                        <td style={tdStyle}>{c.purpose}</td>
                        <td style={{ ...tdStyle, whiteSpace: "nowrap" }}>{c.duration}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}

          <div style={{ marginTop: "40px", padding: "20px", background: "#F4F2EE", borderRadius: "6px", border: "1px solid #E5E1D8" }}>
            <p style={{ ...prose, margin: 0, fontSize: "0.9rem" }}>{data.manage}</p>
          </div>
        </>
      )}
    </article>
  );
};
