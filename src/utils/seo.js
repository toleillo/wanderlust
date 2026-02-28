import { g } from "@data";

export const generateArticleSchema = (article, lang = "es") => {
  const slug = lang === "en" ? article.enSlug : article.slug;
  const base = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `https://yourdomain.com/${lang === "en" ? "en/" : ""}${slug}#article`,
        headline: g(article.title, lang),
        description: g(article.metaDescription, lang),
        image: article.heroImage,
        datePublished: article.date,
        dateModified: article.date,
        author: { "@type": "Organization", name: "ElTechoEncima" },
        publisher: {
          "@type": "Organization",
          name: "ElTechoEncima",
          logo: { "@type": "ImageObject", url: "https://yourdomain.com/logo.png" },
        },
        keywords: (article.keywords?.[lang] ?? article.keywords?.es ?? []).join(", "),
        inLanguage: lang,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `https://yourdomain.com/${lang === "en" ? "en/" : ""}${slug}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: lang === "en" ? "Home" : "Inicio", item: `https://yourdomain.com/${lang === "en" ? "en" : ""}` },
          { "@type": "ListItem", position: 2, name: article.category, item: `https://yourdomain.com/categoria/${article.category}` },
          { "@type": "ListItem", position: 3, name: article.city },
        ],
      },
      ...(article.pointsOfInterest || []).map((poi) => ({
        "@type": "TouristAttraction",
        name: poi.name,
        description: g(poi.description, lang),
        ...(poi.lat && poi.lng
          ? { geo: { "@type": "GeoCoordinates", latitude: poi.lat, longitude: poi.lng } }
          : {}),
        ...(poi.rating
          ? { aggregateRating: { "@type": "AggregateRating", ratingValue: poi.rating, bestRating: 5 } }
          : {}),
      })),
      ...(article.events || []).map((ev) => ({
        "@type": "Event",
        name: ev.name,
        description: g(ev.description, lang),
        startDate: ev.date,
        location: { "@type": "Place", name: ev.venue, address: article.city },
        eventStatus: "https://schema.org/EventScheduled",
        organizer: { "@type": "Organization", name: ev.venue },
      })),
    ],
  };
  return JSON.stringify(base);
};
