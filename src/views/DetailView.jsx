import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ARTICLES, g } from "@data";
import { useLocale } from "@i18n";
import { useMeta } from "@hooks";
import { generateArticleSchema } from "@utils";
import { Detail } from "@components/articles";
import { ReadingProgress } from "@components/ui";

const ContentLoader = () => (
  <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
    <span style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.85rem", color: "#B8860B", letterSpacing: "0.08em" }}>
      ···
    </span>
  </div>
);

export const DetailView = () => {
  const { slug } = useParams();
  const { lang, t } = useLocale();
  const navigate = useNavigate();
  const [articleContent, setArticleContent] = useState(null);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  const article = lang === "en"
    ? ARTICLES.find((a) => a.enSlug === slug)
    : ARTICLES.find((a) => a.slug === slug);

  // Lazy-load heavy content + faq from a separate async chunk
  useEffect(() => {
    if (!article) return;
    setArticleContent(null);
    import("@data/articlesContent.js").then((m) => {
      setArticleContent(m.CONTENT_MAP[article.id] ?? {});
    });
  }, [article?.id]);

  const canonicalPath = article
    ? (lang === "en" ? `/en/${article.enSlug}` : `/${article.slug}`)
    : null;
  const altPath = article
    ? (lang === "en" ? `/${article.slug}` : `/en/${article.enSlug}`)
    : null;

  useMeta({
    title:       article ? g(article.title, lang) : t("not_found"),
    description: article ? g(article.metaDescription, lang) : "",
    canonical:   canonicalPath,
    image:       article?.heroImage,
    lang,
    altUrl:      altPath,
  });

  useEffect(() => {
    if (!article) return;
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "article-schema";
    script.textContent = generateArticleSchema(article, lang);
    document.head.appendChild(script);
    return () => {
      const el = document.getElementById("article-schema");
      if (el) el.remove();
    };
  }, [article, lang]);

  if (!article) {
    return (
      <div style={{ textAlign: "center", padding: "80px 20px", color: "#1A1A18", fontFamily: "'Source Serif 4', serif" }}>
        <p style={{ fontSize: "1rem", marginBottom: "14px" }}>{t("not_found")}</p>
        <button
          onClick={() => navigate(lang === "en" ? "/en" : "/")}
          style={{ background: "none", border: "1px solid #E5E1D8", borderRadius: "8px", color: "#B8860B", padding: "9px 18px", cursor: "pointer", fontFamily: "'Source Serif 4', serif", fontSize: "0.82rem" }}
        >
          {t("go_home")}
        </button>
      </div>
    );
  }

  // Merge base article (metadata) with lazy-loaded content+faq
  if (!articleContent) return <ContentLoader />;
  const fullArticle = { ...article, ...articleContent };

  return <><ReadingProgress /><Detail article={fullArticle} /></>;
};
