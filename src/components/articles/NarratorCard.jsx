import { NARRATORS } from "@data/narrators.js";

export const NarratorCard = ({ narratorId, lang }) => {
  const narrator = NARRATORS[narratorId];
  if (!narrator) return null;

  const name = narrator.name[lang] ?? narrator.name.es;
  const title = narrator.title[lang] ?? narrator.title.es;
  const bio = narrator.bio[lang] ?? narrator.bio.es;

  return (
    <div style={{
      display: "flex", alignItems: "flex-start", gap: "14px",
      background: "#F4F2EE",
      borderLeft: "4px solid #B8860B",
      borderRadius: "0 10px 10px 0",
      padding: "16px 18px",
      marginBottom: "28px",
    }}>
      <span style={{ fontSize: "2rem", lineHeight: 1, flexShrink: 0 }}>{narrator.emoji}</span>
      <div>
        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "1.05rem", fontWeight: 600,
          color: "#1A1A18", margin: "0 0 4px 0",
        }}>
          {name} <span style={{ color: "#B8860B" }}>·</span> <span style={{ color: "#6B6358", fontWeight: 400 }}>{title}</span>
        </p>
        <p style={{
          fontFamily: "'Source Serif 4', serif",
          fontSize: "0.85rem", color: "#6B6358",
          margin: 0, lineHeight: 1.55,
        }}>
          {bio}
        </p>
      </div>
    </div>
  );
};
