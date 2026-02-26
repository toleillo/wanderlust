import { AffBtn } from "@components/affiliate";

export const RichContent = ({ content, city }) => {
  const parts = content.split(/({{CTA:[^}]+}})/g);
  return (
    <div>
      {parts.map((part, i) => {
        const match = part.match(/{{CTA:(\w+):(\w+):([^:]+):([^}]+)}}/);
        if (match) {
          const [, type, partner, query, label] = match;
          return (
            <AffBtn key={i} label={label} partner={partner} query={query} type={type} city={city} className="inline-cta" />
          );
        }
        if (part.trim() === "") return null;
        return part.split("\n\n").map((para, j) =>
          para.trim() ? (
            <p key={`${i}-${j}`} style={{
              fontFamily: "'Source Serif 4', serif", color: "#c8bda4", fontSize: "1.05rem",
              lineHeight: 1.85, margin: "0 0 22px 0",
            }}>
              {para}
            </p>
          ) : null
        );
      })}
    </div>
  );
};
