import { useNavigate } from "react-router-dom";
import { NARRATORS } from "@data/narrators.js";
import { useLocale } from "@i18n";

export const NarratorCard = ({ narratorId }) => {
  const narrator = NARRATORS[narratorId];
  const { lang } = useLocale();
  const navigate = useNavigate();

  if (!narrator) return null;

  const name  = narrator.name[lang]  ?? narrator.name.es;
  const title = narrator.title[lang] ?? narrator.title.es;
  const bio   = narrator.bio[lang]   ?? narrator.bio.es;
  const url   = lang === "en" ? `/en/narrator/${narratorId}` : `/narrador/${narratorId}`;

  return (
    <div
      onClick={() => { navigate(url); window.scrollTo({ top: 0, behavior: "smooth" }); }}
      role="link"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && navigate(url)}
      style={{
        display: "flex", alignItems: "flex-start", gap: "14px",
        background: "#F4F2EE",
        borderLeft: "4px solid #B8860B",
        borderRadius: "0 10px 10px 0",
        padding: "16px 18px",
        marginBottom: "28px",
        cursor: "pointer",
        transition: "background 0.15s",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.background = "#EDE9E0"; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = "#F4F2EE"; }}
    >
      <span style={{ fontSize: "2rem", lineHeight: 1, flexShrink: 0 }}>{narrator.emoji}</span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "1.05rem", fontWeight: 600,
          color: "#1A1A18", margin: "0 0 4px 0",
        }}>
          {name} <span style={{ color: "#B8860B" }}>·</span> <span style={{ color: "#1A1A18", fontWeight: 400 }}>{title}</span>
        </p>
        <p style={{
          fontFamily: "'Source Serif 4', serif",
          fontSize: "0.85rem", color: "#1A1A18",
          margin: "0 0 6px", lineHeight: 1.55,
        }}>
          {bio}
        </p>
        <span style={{ fontFamily: "'Source Serif 4', serif", fontSize: "0.75rem", color: "#B8860B", letterSpacing: "0.04em" }}>
          {lang === "en" ? "See all articles →" : "Ver todos sus artículos →"}
        </span>
      </div>
    </div>
  );
};
