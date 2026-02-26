import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ARTICLES, g } from "@data";
import { useLocale } from "@i18n";
import { useMeta } from "@hooks";
import { generateArticleSchema } from "@utils";
import { Detail } from "@components/articles";

export const DetailView = () => {
  const { slug } = useParams();
  const { lang, t } = useLocale();
  const navigate = useNavigate();

  const article = lang === "en"
    ? ARTICLES.find((a) => a.enSlug === slug)
    : ARTICLES.find((a) => a.slug === slug);

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
      <div style={{ textAlign: "center", padding: "80px 20px", color: "#5e5648", fontFamily: "'Libre Franklin', sans-serif" }}>
        <p style={{ fontSize: "1rem", marginBottom: "14px" }}>{t("not_found")}</p>
        <button
          onClick={() => navigate(lang === "en" ? "/en" : "/")}
          style={{ background: "none", border: "1px solid #242018", borderRadius: "8px", color: "#d4a853", padding: "9px 18px", cursor: "pointer", fontFamily: "'Libre Franklin', sans-serif", fontSize: "0.82rem" }}
        >
          {t("go_home")}
        </button>
      </div>
    );
  }

  return <Detail article={article} />;
};
