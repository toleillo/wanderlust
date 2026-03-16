import { useNavigate } from "react-router-dom";
import { ARTICLES, g } from "@data";
import { useLocale } from "@i18n";
import { Card } from "./Card";

export const RelatedArticles = ({ currentArticleId, category, tags = [], limit = 3 }) => {
  const { lang } = useLocale();
  const navigate = useNavigate();

  // Buscar artículos relacionados por categoría o tags, excluyendo el actual
  const related = ARTICLES.filter(a => a.id !== currentArticleId)
    .map(a => {
      let score = 0;
      if (a.category === category) score += 2;
      const commonTags = (a.tags || []).filter(t => tags.includes(t));
      score += commonTags.length * 3;
      return { ...a, score };
    })
    .filter(a => a.score > 0)
    .sort((a, b) => b.score - a.score || new Date(b.date) - new Date(a.date))
    .slice(0, limit);

  if (related.length === 0) return null;

  return (
    <div style={{ marginTop: "64px", borderTop: "1px solid #E5E1D8", paddingTop: "48px" }}>
      <h3 style={{ 
        fontFamily: "'Cormorant Garamond', serif", 
        fontSize: "2rem", 
        fontWeight: 700, 
        color: "#1A1A18", 
        marginBottom: "28px" 
      }}>
        {lang === "en" ? "You might also like" : "También te puede interesar"}
      </h3>
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", 
        gap: "24px" 
      }}>
        {related.map((a, i) => (
          <Card key={a.id} article={a} i={i} />
        ))}
      </div>
    </div>
  );
};
