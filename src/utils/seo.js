import { g } from "@data";

export const generateArticleSchema = (article, lang = "es") => {
  const slug = lang === "en" ? article.enSlug : article.slug;
  const base = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `https://www.eltechoencima.com/${lang === "en" ? "en/" : ""}${slug}#article`,
        headline: g(article.title, lang),
        description: g(article.metaDescription, lang),
        image: article.heroImage,
        datePublished: article.date,
        dateModified: article.date,
        author: { "@type": "Organization", name: "ElTechoEncima" },
        publisher: {
          "@type": "Organization",
          name: "ElTechoEncima",
          url: "https://www.eltechoencima.com",
          logo: { "@type": "ImageObject", url: "https://www.eltechoencima.com/favicon.svg" },
        },
        keywords: (article.keywords?.[lang] ?? article.keywords?.es ?? []).join(", "),
        inLanguage: lang,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://www.eltechoencima.com/${lang === "en" ? "en/" : ""}${slug}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: lang === "en" ? "Home" : "Inicio", item: `https://www.eltechoencima.com/${lang === "en" ? "en" : ""}` },
          { "@type": "ListItem", position: 2, name: article.category, item: `https://www.eltechoencima.com/categoria/${article.category}` },
          { "@type": "ListItem", position: 3, name: article.city },
        ],
      },
      ...(article.faq?.[lang] || []).length > 0 ? [{
        "@type": "FAQPage",
        "mainEntity": (article.faq[lang]).map(q => ({
          "@type": "Question",
          "name": q.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": q.answer
          }
        }))
      }] : [],
      ...(article.pointsOfInterest || []).map((poi) => ({
        "@type": "TouristAttraction",
        name: poi.name,
        description: g(poi.description, lang),
        ...(poi.lat && poi.lng
          ? { geo: { "@type": "GeoCoordinates", latitude: poi.lat, longitude: poi.lng } }
          : {}),
      })),
    ],
  };
  return JSON.stringify(base);
};
