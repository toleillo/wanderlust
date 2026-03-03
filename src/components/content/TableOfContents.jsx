import { useState, useEffect } from "react";
import { COLORS, FONTS } from "@styles";
import { useLocale } from "@i18n";

export const TableOfContents = ({ content }) => {
  const [headings, setHeadings] = useState([]);
  const { lang } = useLocale();

  useEffect(() => {
    // We look for markdown-style headers (### or ##) in the content string
    // This is a simple parser for our RichContent structure
    const lines = content.split("\n");
    const extracted = lines
      .filter(line => line.startsWith("##") || line.startsWith("###"))
      .map((line, idx) => {
        const level = line.startsWith("###") ? 3 : 2;
        const text = line.replace(/#/g, "").trim();
        const id = text.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
        return { id, text, level };
      });
    setHeadings(extracted);
  }, [content]);

  if (headings.length < 2) return null;

  return (
    <div style={{
      background: COLORS.bgCardAlt,
      border: `1px solid ${COLORS.border}`,
      borderRadius: "14px",
      padding: "24px",
      marginBottom: "32px",
    }}>
      <h4 style={{
        fontFamily: FONTS.serif,
        fontSize: "0.95rem",
        fontWeight: 700,
        color: COLORS.gold,
        textTransform: "uppercase",
        letterSpacing: "0.1em",
        margin: "0 0 16px 0",
        display: "flex",
        alignItems: "center",
        gap: "8px"
      }}>
        <span style={{ fontSize: "1.2rem" }}>📍</span> {lang === "en" ? "On this page" : "En esta guía"}
      </h4>
      <nav>
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
          {headings.map((h, i) => (
            <li key={i} style={{ marginBottom: "10px", paddingLeft: h.level === 3 ? "16px" : "0" }}>
              <a 
                href={`#${h.id}`} 
                style={{ 
                  color: COLORS.textMuted, 
                  textDecoration: "none", 
                  fontFamily: FONTS.sans,
                  fontSize: "0.88rem",
                  transition: "color 0.2s",
                  display: "block",
                  lineHeight: 1.4
                }}
                onMouseEnter={(e) => e.target.style.color = COLORS.gold}
                onMouseLeave={(e) => e.target.style.color = COLORS.textMuted}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(h.id)?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {h.text}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
