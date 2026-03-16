import { g } from "@data";
import { NARRATORS } from "@data/narrators.js";

export const generateArticleSchema = (article, lang = "es") => {
  const slug = lang === "en" ? article.enSlug : article.slug;
  const narrator = NARRATORS[article.narrator] || Object.values(NARRATORS)[0];
  const authorName = narrator.name[lang] || narrator.name.es;
  const authorUrl = `https://www.eltechoencima.com/${lang === "en" ? "en/narrator" : "narrador"}/${narrator.id}`;

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
        author: {
          "@type": "Person",
          "name": authorName,
          "url": authorUrl,
          "jobTitle": narrator.title[lang] || narrator.title.es
        },
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
          { "@type": "ListItem", position: 3, name: g(article.city, lang) },
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
        "name": poi.name,
        "description": g(poi.description, lang),
        ...(poi.rating ? {
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": poi.rating,
            "bestRating": "5",
            "worstRating": "1",
            "reviewCount": "100" // Valor por defecto para activar las estrellas en SERP
          }
        } : {}),
        ...(poi.priceRange ? { "priceRange": poi.priceRange } : {}),
        ...(poi.lat && poi.lng
          ? { "geo": { "@type": "GeoCoordinates", "latitude": poi.lat, "longitude": poi.lng } }
          : {}),
      })),
    ],
  };
  return JSON.stringify(base);
};

export const generateHowToSchema = (guide, lang = "es") => {
  if (guide.type !== "tips") return null;

  const steps = guide.tips.map((tip) => ({
    "@type": "HowToStep",
    "url": `https://www.eltechoencima.com/${lang === "en" ? "en/guide/" : "guia/"}${lang === "en" ? guide.enSlug : guide.slug}#tip-${tip.num}`,
    "name": g(tip.title, lang),
    "itemListElement": [{
      "@type": "HowToDirection",
      "text": g(tip.body, lang)
    }]
  }));

  const base = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": g(guide.title, lang),
    "description": g(guide.subtitle, lang),
    "image": guide.heroImage,
    "step": steps,
    "inLanguage": lang
  };

  return JSON.stringify(base);
};
