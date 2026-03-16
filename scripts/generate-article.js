/**
 * generate-article.js
 * Genera un artículo completo para eltechoencima.com usando Claude API.
 *
 * Uso:
 *   node generate-article.js <ciudad> <país> <categoría> [narrador] [heroImageUrl]
 *
 * Ejemplos:
 *   node generate-article.js "París" "Francia" "europe" "carmen"
 *   node generate-article.js "Kioto" "Japón" "asia" "elena"
 *   node generate-article.js "Río de Janeiro" "Brasil" "america" "sofia"
 *
 * Categorías válidas: europe | asia | america | africa | guides
 * Narradores válidos: carmen | marcos | elena | david | sofia
 *
 * La salida se guarda en scripts/output/article-{slug}.js
 * Copiar el contenido del archivo generado y añadirlo al array ARTICLES en src/data/articles.js
 */

import Anthropic from "@anthropic-ai/sdk";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
// ─── setup ─────────────────────────────────────────────────────────────────

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load .env from scripts/ directory
const envPath = path.join(__dirname, ".env");
if (fs.existsSync(envPath)) {
  const envContent = fs.readFileSync(envPath, "utf8");
  for (const line of envContent.split("\n")) {
    const [key, ...vals] = line.split("=");
    if (key && vals.length) process.env[key.trim()] = vals.join("=").trim();
  }
}

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// ─── constants ──────────────────────────────────────────────────────────────

const NARRATORS = {
  carmen: {
    name: "Carmen",
    title: "La Profesora",
    bio: "Ex profesora de literatura que viaja sobreinformada y lo admite. Lo ha investigado todo antes de llegar y aun así siempre encuentra algo que la sorprende.",
    voice: "culta, irónica, autodespreciativa, profunda. Mezcla datos históricos con observaciones personales muy concretas. Usa oraciones largas con subordinadas.",
  },
  marcos: {
    name: "Marcos",
    title: "El Músico",
    bio: "Va a festivales como excusa para visitar ciudades. O visita ciudades como excusa para ir a festivales.",
    voice: "entusiasta, digresivo, conecta todo con música y experiencias nocturnas. Frases cortas con ritmo. Humor absurdo ocasional.",
  },
  elena: {
    name: "Elena",
    title: "La Nómada Digital",
    bio: "Trabaja en remoto desde bares con buena conexión wifi en cuatro países distintos al año.",
    voice: "práctica, eficiente, mezcla consejos de trabajo remoto con turismo. Listas mentales, comparaciones de precio, siempre pendiente del wifi y la electricidad.",
  },
  david: {
    name: "David",
    title: "El Gastrónomo Accidental",
    bio: "Planifica los viajes por los restaurantes y luego se tropieza con el resto.",
    voice: "apasionado por la comida hasta el límite de lo razonable. Todo lo filtra por la gastronomía local. Opina con fuerza sobre ingredientes, texturas y dónde no comer.",
  },
  sofia: {
    name: "Sofía",
    title: "La Despistada Organizada",
    bio: "Hace hojas de cálculo perfectas que luego ignora por completo. Aun así siempre acaba encontrando las mejores cosas.",
    voice: "caótica pero aguda. Mezcla desorganización con hallazgos brillantes. Anécdotas donde todo sale mal pero termina bien. Humor situacional.",
  },
};

// Afiliados con IDs reales (funcionan). Usar estos en CTAs del contenido.
const WORKING_PARTNERS = {
  hotel: "booking",        // TPX link funciona
  flights: "kiwi",         // TPX link funciona
  activity: "getyourguide", // ID real JE8MLFA
  tickets: "tiqets",       // ID real 2794590
  activity2: "civitatis",  // ID real 112234
  esim: "airalo",          // ID real funciona
  esim2: "saily",          // ID real 8014
  vpn: "nordvpn",          // ID real aff121038
  cars: "localrent",       // TPX link funciona
  transfers: "intui",      // ID real 287737
};

// Servicios por categoría
const SERVICES_BY_CATEGORY = {
  europe: {
    flights: ["skyscanner", "kiwi"],
    hotels: ["booking", "hostelworld", "vrbo"],
    cars: ["discovercars", "rentalcars", "autoeurope", "localrent"],
    activities: ["getyourguide", "viator", "tiqets", "civitatis"],
    restaurants: ["thefork", "opentable"],
    insurance: ["safetywing", "worldnomads"],
    esim: ["airalo", "holafly", "saily", "yesim"],
    transfers: ["intui", "welcomepickups", "gettransfer"],
    parking: ["parkimeter"],
  },
  asia: {
    flights: ["skyscanner", "kiwi"],
    hotels: ["booking", "hostelworld"],
    activities: ["getyourguide", "viator", "klook"],
    insurance: ["safetywing", "worldnomads"],
    esim: ["airalo", "saily", "yesim"],
    transfers: ["intui", "welcomepickups", "gettransfer", "indrive"],
  },
  america: {
    flights: ["skyscanner", "kiwi"],
    hotels: ["booking", "hostelworld", "vrbo"],
    cars: ["discovercars", "rentalcars"],
    activities: ["getyourguide", "viator", "civitatis"],
    insurance: ["safetywing", "worldnomads"],
    esim: ["airalo", "saily"],
    transfers: ["intui", "welcomepickups", "indrive"],
  },
  africa: {
    flights: ["skyscanner", "kiwi"],
    hotels: ["booking", "hostelworld"],
    activities: ["getyourguide", "viator", "civitatis"],
    insurance: ["safetywing", "worldnomads"],
    esim: ["airalo", "saily"],
    transfers: ["intui", "welcomepickups"],
  },
};

// ─── helpers ────────────────────────────────────────────────────────────────

function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function generateId(city, year = 2026) {
  return `${slugify(city)}-guide-${year}`;
}

function today() {
  return new Date().toISOString().split("T")[0];
}

// ─── prompt builder ─────────────────────────────────────────────────────────

function buildPrompt(city, country, category, narrator) {
  const n = NARRATORS[narrator];
  const services = SERVICES_BY_CATEGORY[category] || SERVICES_BY_CATEGORY.europe;
  const wp = WORKING_PARTNERS;

  return `Eres un escritor de viajes para el blog español "El Techo Encima" (eltechoencima.com).

Debes generar un artículo completo sobre **${city}, ${country}** con las siguientes características:

## Narrador: ${n.name} (${n.title})
Bio: ${n.bio}
Voz: ${n.voice}

## Instrucciones generales
- Tono: honesto, con personalidad, no de guía turística. Evita los clichés vacíos.
- Longitud del content: mínimo 700 palabras por idioma, máximo 1100.
- Cada artículo tiene CTAs inline usando el formato exacto: {{CTA:type:partner:query:label}}
  - type: hotel | activity | tickets | service | restaurant
  - partner: clave del afiliado (ver lista abajo)
  - query: término de búsqueda en inglés para la URL del partner
  - label: texto del botón en el idioma del content (es = español, en = inglés)
- Incluye entre 4 y 7 CTAs en el content español, y los equivalentes en inglés.
- **Usa preferentemente estos partners (tienen tracking real):**
  - hotel → ${wp.hotel}
  - vuelos/flights → ${wp.flights}
  - actividades → ${wp.activity}, ${wp.activity2}
  - tickets atracciones → ${wp.tickets}
  - eSIM → ${wp.esim} o ${wp.esim2}
  - VPN → ${wp.vpn}
  - coches/cars → ${wp.cars}
  - transfers → ${wp.transfers}
- Otros partners disponibles: viator, skyscanner, discovercars, holafly, safetywing, worldnomads, thefork, ticketmaster, klook

## Formato de salida requerido
Responde ÚNICAMENTE con un objeto JSON válido (sin texto adicional antes ni después):

\`\`\`json
{
  "title": {
    "es": "...",
    "en": "..."
  },
  "subtitle": {
    "es": "...",
    "en": "..."
  },
  "excerpt": {
    "es": "Una frase corta de 1-2 oraciones que aparece en la card del artículo.",
    "en": "A short 1-2 sentence excerpt for the article card."
  },
  "metaDescription": {
    "es": "Meta description SEO, 150-160 caracteres, con intención de búsqueda.",
    "en": "SEO meta description, 150-160 chars, with search intent."
  },
  "keywords": {
    "es": ["kw1", "kw2", "kw3", "kw4", "kw5"],
    "en": ["kw1", "kw2", "kw3", "kw4", "kw5"]
  },
  "emoji": "🏙️",
  "readTime": "9 min",
  "pointsOfInterest": [
    {
      "name": "Nombre del lugar",
      "type": "Museo | Barrio | Parque | Monumento | Playa | Mirador | Mercado | Templo | Palacio | Restaurante",
      "lat": 0.0000,
      "lng": 0.0000,
      "description": {
        "es": "Descripción honesta de 2-3 frases en la voz del narrador.",
        "en": "Honest 2-3 sentence description in narrator's voice."
      },
      "rating": 4.7,
      "priceRange": "€15 | Gratis | €€",
      "affiliateLinks": [
        {
          "label": { "es": "Texto botón español", "en": "English button text" },
          "partner": "getyourguide",
          "query": "search query in english",
          "type": "activity | tickets | hotel | restaurant"
        }
      ]
    }
  ],
  "events": [
    {
      "name": "Nombre del evento",
      "type": "festival | cultural | electronic | natural | technology | art | digital-art | sport | gastronomy",
      "date": "15-18 May 2026",
      "venue": "Nombre del recinto",
      "urgency": true,
      "description": {
        "es": "Descripción del evento en la voz del narrador, 3-4 frases.",
        "en": "Event description in narrator's voice, 3-4 sentences."
      },
      "affiliateLinks": [
        {
          "label": { "es": "Texto botón", "en": "Button text" },
          "partner": "getyourguide",
          "query": "event search query",
          "type": "tickets | activity"
        }
      ]
    }
  ],
  "content": {
    "es": "Artículo en español con CTAs inline usando {{CTA:type:partner:query:label}}. Mínimo 700 palabras.",
    "en": "Article in English with inline CTAs using {{CTA:type:partner:query:label}}. Minimum 700 words."
  },
  "faq": {
    "es": [
      { "question": "Pregunta frecuente 1?", "answer": "Respuesta práctica y directa." },
      { "question": "Pregunta frecuente 2?", "answer": "Respuesta práctica." },
      { "question": "Pregunta frecuente 3?", "answer": "Respuesta práctica." }
    ],
    "en": [
      { "question": "Frequent question 1?", "answer": "Practical direct answer." },
      { "question": "Frequent question 2?", "answer": "Practical answer." },
      { "question": "Frequent question 3?", "answer": "Practical answer." }
    ]
  }
}
\`\`\`

## Destino: ${city}, ${country}
- Categoría: ${category}
- Año de referencia: 2026
- Incluye 4-6 puntos de interés reales y relevantes con coordenadas aproximadas correctas.
- Incluye 2-4 eventos reales o plausibles de 2026 (festivales, eventos culturales, deportivos, etc.).
- El content debe fluir de forma narrativa con los CTAs integrados de forma natural, no forzada.
- Los CTAs de eSIM y VPN deben aparecer en el contexto correcto (conectividad, trabajo remoto, etc.).
- Los CTAs de hotel deben incluir la ciudad como query: "${slugify(city)} hotel".
`;
}

// ─── formatter ───────────────────────────────────────────────────────────────

function formatArticleJS(data, city, country, category, narrator, heroImage) {
  const slug = `${slugify(city)}-guia-2026`;
  const enSlug = `${slugify(city)}-travel-guide-2026`;
  const id = generateId(city);
  // Format POI affiliateLinks
  const formatAffLinks = (links) =>
    links.map((l) => `          { label: { es: ${JSON.stringify(l.label.es)}, en: ${JSON.stringify(l.label.en)} }, partner: "${l.partner}", query: ${JSON.stringify(l.query)}, type: "${l.type}" }`).join(",\n");

  const formatPOIs = (pois) =>
    pois.map((p) => `    {
      name: ${JSON.stringify(p.name)},
      type: ${JSON.stringify(p.type)},
      lat: ${p.lat}, lng: ${p.lng},
      description: {
        es: ${JSON.stringify(p.description.es)},
        en: ${JSON.stringify(p.description.en)},
      },
      rating: ${p.rating}${p.priceRange ? `, priceRange: ${JSON.stringify(p.priceRange)}` : ""},
      affiliateLinks: [
${formatAffLinks(p.affiliateLinks || [])}
      ],
    }`).join(",\n");

  const formatEvents = (events) =>
    events.map((e) => `    {
      name: ${JSON.stringify(e.name)},
      type: "${e.type}",
      date: ${JSON.stringify(e.date)},
      venue: ${JSON.stringify(e.venue)},
      urgency: ${e.urgency},
      description: {
        es: ${JSON.stringify(e.description.es)},
        en: ${JSON.stringify(e.description.en)},
      },
      affiliateLinks: [
${formatAffLinks(e.affiliateLinks || [])}
      ],
    }`).join(",\n");

  const formatServices = (svc) => {
    const lines = Object.entries(svc).map(([k, v]) => `    ${k}: [${v.map((x) => `"${x}"`).join(", ")}]`);
    return lines.join(",\n");
  };

  const formatFaq = (faqs) =>
    faqs.map((f) => `        { question: ${JSON.stringify(f.question)}, answer: ${JSON.stringify(f.answer)} }`).join(",\n");

  return `  // ─────────────────────────────────────────────
  // ${city.toUpperCase()}
  // Generated: ${today()}
  // ─────────────────────────────────────────────
  {
    id: "${id}",
    slug: "${slug}",
    enSlug: "${enSlug}",
    narrator: "${narrator}",
    heroImage: "${heroImage}",
    city: ${JSON.stringify(city)},
    country: { es: ${JSON.stringify(country)}, en: ${JSON.stringify(country)} },
    emoji: ${JSON.stringify(data.emoji || "🌍")},
    date: "${today()}",
    readTime: ${JSON.stringify(data.readTime || "9 min")},
    category: "${category}",
    title: {
      es: ${JSON.stringify(data.title.es)},
      en: ${JSON.stringify(data.title.en)},
    },
    subtitle: {
      es: ${JSON.stringify(data.subtitle.es)},
      en: ${JSON.stringify(data.subtitle.en)},
    },
    excerpt: {
      es: ${JSON.stringify(data.excerpt.es)},
      en: ${JSON.stringify(data.excerpt.en)},
    },
    metaDescription: {
      es: ${JSON.stringify(data.metaDescription.es)},
      en: ${JSON.stringify(data.metaDescription.en)},
    },
    keywords: {
      es: [${data.keywords.es.map((k) => JSON.stringify(k)).join(", ")}],
      en: [${data.keywords.en.map((k) => JSON.stringify(k)).join(", ")}],
    },
    pointsOfInterest: [
${formatPOIs(data.pointsOfInterest || [])}
    ],
    events: [
${formatEvents(data.events || [])}
    ],
    services: {
${formatServices(services)}
    },
    content: {
      es: \`${data.content.es.replace(/`/g, "\\`")}\`,
      en: \`${data.content.en.replace(/`/g, "\\`")}\`,
    },
    faq: {
      es: [
${formatFaq(data.faq.es)}
      ],
      en: [
${formatFaq(data.faq.en)}
      ],
    },
  },`;
}

// ─── main ────────────────────────────────────────────────────────────────────

async function generateArticle(city, country, category = "europe", narrator = "carmen", heroImage = "") {
  if (!city || !country) {
    console.error("❌  Uso: node generate-article.js <ciudad> <país> <categoría> [narrador] [heroImageUrl]");
    console.error("   Ejemplo: node generate-article.js \"París\" \"Francia\" \"europe\" \"carmen\"");
    process.exit(1);
  }

  if (!NARRATORS[narrator]) {
    console.error(`❌  Narrador "${narrator}" no válido. Opciones: ${Object.keys(NARRATORS).join(", ")}`);
    process.exit(1);
  }

  if (!SERVICES_BY_CATEGORY[category]) {
    console.error(`❌  Categoría "${category}" no válida. Opciones: ${Object.keys(SERVICES_BY_CATEGORY).join(", ")}`);
    process.exit(1);
  }

  if (!process.env.ANTHROPIC_API_KEY) {
    console.error("❌  Falta ANTHROPIC_API_KEY en scripts/.env");
    process.exit(1);
  }

  // Default hero image using Unsplash search (will need manual update for best result)
  if (!heroImage) {
    heroImage = `https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2070&auto=format&fit=crop`;
    console.warn(`⚠️  No se especificó heroImage. Usando placeholder genérico.`);
    console.warn(`   Busca una imagen en unsplash.com para "${city}" y actualiza heroImage manualmente.\n`);
  }

  console.log(`🌍  Generando artículo: ${city}, ${country} [${category}] — narrador: ${narrator}`);
  console.log(`📡  Llamando a Claude API...\n`);

  const prompt = buildPrompt(city, country, category, narrator);

  const message = await client.messages.create({
    model: "claude-sonnet-4-6",
    max_tokens: 8192,
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  });

  const rawText = message.content[0].text;

  // Extract JSON from response (may be wrapped in ```json ... ```)
  let jsonStr = rawText;
  const jsonMatch = rawText.match(/```json\s*([\s\S]*?)```/);
  if (jsonMatch) jsonStr = jsonMatch[1];
  else {
    // Try to find raw JSON object
    const objMatch = rawText.match(/\{[\s\S]*\}/);
    if (objMatch) jsonStr = objMatch[0];
  }

  let data;
  try {
    data = JSON.parse(jsonStr);
  } catch (e) {
    console.error("❌  Error parseando JSON de Claude. Respuesta raw guardada en scripts/output/debug.txt");
    const outDir = path.join(__dirname, "output");
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);
    fs.writeFileSync(path.join(outDir, "debug.txt"), rawText);
    process.exit(1);
  }

  const articleJS = formatArticleJS(data, city, country, category, narrator, heroImage);

  // Save output
  const outDir = path.join(__dirname, "output");
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);
  const slug = `${slugify(city)}-guia-2026`;
  const outFile = path.join(outDir, `article-${slug}.js`);
  fs.writeFileSync(outFile, articleJS);

  console.log(`✅  Artículo generado: ${outFile}`);
  console.log(`\n📋  Próximos pasos:`);
  console.log(`   1. Revisa el artículo en ${outFile}`);
  console.log(`   2. Busca una heroImage en unsplash.com para "${city}" y actualiza el campo heroImage`);
  console.log(`   3. Copia el contenido y añádelo al array ARTICLES en src/data/articles.js`);
  console.log(`   4. Actualiza narrators.js si es la primera vez que usa este narrador`);
  console.log(`   5. npm run dev para verificar que carga bien`);

  console.log(`\n📊  Tokens usados: ${message.usage.input_tokens} in / ${message.usage.output_tokens} out`);
  console.log(`💰  Coste estimado: $${((message.usage.input_tokens * 3 + message.usage.output_tokens * 15) / 1_000_000).toFixed(4)}`);

  return outFile;
}

// ─── CLI entry ───────────────────────────────────────────────────────────────

const [, , city, country, category, narrator, heroImage] = process.argv;
generateArticle(city, country, category, narrator, heroImage);
