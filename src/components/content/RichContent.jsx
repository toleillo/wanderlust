import { useNavigate } from "react-router-dom";
import { AffBtn, ComparisonTable } from "@components/affiliate";
import { COLORS, FONTS } from "@styles";
import { useLocale } from "@i18n";

export const RichContent = ({ content, city }) => {
  const { lang, t } = useLocale();
  const navigate = useNavigate();
  const parts = content.split(/({{CTA:[^}]+}}|{{COMPARE:[^}]+}}|{{RELATED:[^}]+}})/g);
  return (
    <div>
      {parts.map((part, i) => {
        const ctaMatch = part.match(/{{CTA:(\w+):(\w+):([^:]+):([^}]+)}}/);
        if (ctaMatch) {
          const [, type, partner, query, label] = ctaMatch;
          return (
            <AffBtn key={i} label={label} partner={partner} query={query} type={type} city={city} className="inline-cta" />
          );
        }

        const compMatch = part.match(/{{COMPARE:([^:]+):([^:]+):([^:]+):([^}]+)}}/);
        if (compMatch) {
          const [, partners, features, bestFors, query] = compMatch;
          const pList = partners.split(",");
          const fList = features.split(",");
          const bList = bestFors.split(",");
          const items = pList.map((p, idx) => ({
            partner: p,
            features: fList[idx],
            bestFor: bList[idx],
            query: query,
            highlight: idx === 0 // First one is highlighted by default
          }));
          return <ComparisonTable key={i} city={city} items={items} />;
        }

        const relatedMatch = part.match(/{{RELATED:([^:]+):([^}]+)}}/);
        if (relatedMatch) {
          const [, slug, label] = relatedMatch;
          const url = lang === "en" ? `/en/${slug}` : `/${slug}`;
          return (
            <div 
              key={i} 
              onClick={() => { navigate(url); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              style={{
                margin: "32px 0",
                padding: "20px",
                background: "rgba(212,168,83,0.03)",
                borderLeft: `3px solid ${COLORS.gold}`,
                borderRadius: "0 12px 12px 0",
                cursor: "pointer",
                transition: "background 0.2s"
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "rgba(212,168,83,0.06)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "rgba(212,168,83,0.03)"}
            >
              <span style={{ 
                fontFamily: FONTS.sans, 
                fontSize: "0.65rem", 
                fontWeight: 700, 
                color: COLORS.gold, 
                textTransform: "uppercase", 
                letterSpacing: "0.1em",
                display: "block",
                marginBottom: "4px"
              }}>
                {lang === "en" ? "Read also" : "Lectura recomendada"}
              </span>
              <span style={{ 
                fontFamily: FONTS.serif, 
                fontSize: "1.1rem", 
                color: COLORS.text,
                fontWeight: 600
              }}>
                {label} →
              </span>
            </div>
          );
        }

        if (part.trim() === "") return null;
        return part.split("\n\n").map((para, j) => {
          const trimmedPara = para.trim();
          if (!trimmedPara) return null;

          // Check for headers (## or ###)
          const headerMatch = trimmedPara.match(/^(#{2,3})\s+(.*)/);
          if (headerMatch) {
            const level = headerMatch[1].length;
            const text = headerMatch[2];
            const id = text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
            const Tag = level === 2 ? "h2" : "h3";
            return (
              <Tag id={id} key={`${i}-${j}`} style={{
                fontFamily: FONTS.serif,
                color: COLORS.text,
                fontSize: level === 2 ? "1.8rem" : "1.4rem",
                marginTop: "40px",
                marginBottom: "20px",
                fontWeight: 600,
                scrollMarginTop: "100px" // To avoid being hidden by sticky header
              }}>
                {text}
              </Tag>
            );
          }

          return (
            <p key={`${i}-${j}`} style={{
              fontFamily: "'Source Serif 4', serif", color: "#1A1A18", fontSize: "1.05rem",
              lineHeight: 1.85, margin: "0 0 22px 0",
            }}>
              {para.split(/(\*\*[^*]+\*\*)/).map((chunk, k) =>
                chunk.startsWith("**") && chunk.endsWith("**")
                  ? <strong key={k}>{chunk.slice(2, -2)}</strong>
                  : chunk
              )}
            </p>
          );
        });
      })}
    </div>
  );
};
