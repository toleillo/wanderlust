import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ARTICLES, g } from "@data";
import { useLocale } from "@i18n";
import { useMeta } from "@hooks";
import { generateArticleSchema } from "@utils";
import { ADSENSE_PUBLISHER_ID } from "@config/google";
import { Detail } from "@components/articles";

// Load AdSense script once per content page (never on home/navigation pages)
function useAdSense() {
  useEffect(() => {
    if (document.getElementById("adsense-script")) return;
    const s = document.createElement("script");
    s.id = "adsense-script";
    s.async = true;
    s.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_PUBLISHER_ID}`;
    s.crossOrigin = "anonymous";
    document.head.appendChild(s);
  }, []);
}

export const DetailView = () => {
  useAdSense();
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

  return <Detail article={article} />;
};
