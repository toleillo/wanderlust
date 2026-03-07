// Helper: get language-specific text from a bilingual field
export const g = (field, lang) => {
  if (!field) return "";
  if (typeof field === "string") return field;
  return field[lang] ?? field.es ?? field.en ?? "";
};

export const ARTICLES = [
  {
    id: "esim-spain-comparison-2026",
    city: "Spain",
    country: { es: "España", en: "Spain" },
    slug: "mejor-esim-espana-2026",
    enSlug: "best-esim-spain-2026",
    title: { es: "Mejor eSIM para España 2026: Comparativa Airalo vs Saily", en: "Best eSIM for Spain 2026: Airalo vs Saily Comparison" },
    subtitle: { es: "Analizamos precio, cobertura y facilidad de uso para que no pagues roaming.", en: "We analyze price, coverage and ease of use so you don't pay for roaming." },
    category: "guides",
    emoji: "📶",
    readTime: "6 min",
    date: "2026-03-02",
    heroImage: "https://images.unsplash.com/photo-1556742049-36318e874944?q=80&w=2070&auto=format&fit=crop",
    metaDescription: { es: "¿Cuál es la mejor eSIM para viajar a España en 2026? Comparamos Airalo, Saily y Holafly. Opiniones reales y códigos descuento.", en: "What is the best eSIM for traveling to Spain in 2026? We compare Airalo, Saily and Holafly. Real reviews and discount codes." },
    keywords: { es: ["mejor esim espana", "airalo vs saily", "internet espana viaje"], en: ["best esim spain", "airalo vs saily", "internet spain travel"] },
    content: {
      es: `Si viajas a España en 2026, tener datos móviles no es un lujo — es la diferencia entre llegar al hotel o estar cuarenta minutos en la cola de atención al cliente del aeropuerto con el móvil sin cobertura y el nombre de la calle en papel.

La eSIM ha resuelto este problema de forma elegante. No hay tarjeta física, no hay que buscar un estanco a las 11 de la mañana del primer día, y la instalación se hace en dos minutos escaneando un código QR desde casa. Las tres opciones más sólidas para España en 2026:

**Airalo** sigue siendo la más popular por una razón: su app funciona a la primera, los precios son competitivos (desde 4,50€/GB con cobertura 4G/5G en toda España) y su soporte responde rápido. {{CTA:service:airalo:airalo esim spain:Comprar eSIM Airalo para España}} — el plan de 3GB suele ser el equilibrio perfecto para una estancia de una semana.

**Saily**, de NordVPN, es la segunda opción más recomendable. Sus planes son algo más baratos en datos grandes (10GB+) y la integración con el ecosistema de Nord es impecable si ya usas su VPN. Para quienes viajan frecuentemente por Europa, su plan regional cubre 36 países al mismo precio.

**Holafly** es la opción de datos ilimitados. Sin límite de GB, precio fijo por días. Más cara para estancias cortas pero imbatible para más de 10 días o para quien consume datos sin restricciones. {{CTA:service:holafly:holafly esim spain:Activar datos ilimitados con Holafly}}.

**Lo que debes saber antes de comprar:**
- Verifica que tu móvil es compatible con eSIM (iPhone XS en adelante, la mayoría de Android desde 2020)
- Compra antes de salir — la activación tarda 5-10 minutos y es mucho más cómoda con wifi en casa
- Tu número original sigue funcionando en paralelo para WhatsApp y llamadas
- España tiene excelente cobertura 5G en Madrid, Barcelona, Valencia, Sevilla y Málaga

Para la mayoría de viajeros de una semana, **Airalo** es la mejor relación calidad-precio. Para más de dos semanas o consumo intensivo: **Holafly** por datos ilimitados. Y si ya eres cliente de Nord: **Saily** sin dudarlo.`,
      en: `If you're travelling to Spain in 2026, mobile data isn't a luxury — it's the difference between finding your hotel immediately and spending forty minutes at airport customer service with no signal and your street address written on paper.

eSIMs have solved this problem elegantly. No physical card, no hunting for a phone shop on your first morning, and installation takes two minutes by scanning a QR code from home. The three most reliable options for Spain in 2026:

**Airalo** remains the most popular for good reason: the app works first time, prices are competitive (from €4.50/GB with 4G/5G coverage across Spain) and support responds quickly. {{CTA:service:airalo:airalo esim spain:Buy Airalo eSIM for Spain}} — the 3GB plan is usually the sweet spot for a week-long stay.

**Saily**, from NordVPN, is the second most recommended. Plans are slightly cheaper for larger data bundles (10GB+) and the integration with the Nord ecosystem is seamless if you already use their VPN. For frequent European travellers, their regional plan covers 36 countries at the same price.

**Holafly** is the unlimited data option. No GB limit, fixed daily price. More expensive for short stays but unbeatable for over 10 days or for heavy data users. {{CTA:service:holafly:holafly esim spain:Activate unlimited data with Holafly}}.

**What to know before buying:**
- Check your phone is eSIM compatible (iPhone XS onwards, most Android from 2020)
- Buy before you leave — activation takes 5-10 minutes and is much easier on home wifi
- Your original number keeps working in parallel for WhatsApp and calls
- Spain has excellent 5G coverage in Madrid, Barcelona, Valencia, Seville and Málaga

For most travellers on a week's trip, **Airalo** is the best value. For over two weeks or heavy use: **Holafly** for unlimited data. And if you're already a Nord customer: **Saily**, no question.`
    },
    pointsOfInterest: [],
    events: [],
    services: { esim: ["airalo", "holafly", "saily", "yesim"] },
    faq: {
      es: [
        { question: "¿Puedo mantener mi número de WhatsApp?", answer: "Sí, la eSIM solo gestiona los datos. Tu WhatsApp seguirá funcionando con tu número original." },
        { question: "¿Cómo se instala una eSIM?", answer: "Recibirás un código QR por email. Escanéalo desde los ajustes de red de tu móvil y listo." }
      ],
      en: [
        { question: "Can I keep my WhatsApp number?", answer: "Yes, the eSIM only handles data. Your WhatsApp will continue to work with your original number." },
        { question: "How is an eSIM installed?", answer: "You will receive a QR code by email. Scan it from your phone's network settings and you're good to go." }
      ]
    }
  },
  {
    id: "madrid-2026-guide",
    city: "Madrid",
    country: { es: "España", en: "Spain" },
    slug: "guia-madrid-2026",
    enSlug: "madrid-travel-guide-2026",
    title: { es: "Madrid 2026: La guía definitiva para tu viaje", en: "Madrid 2026: The Ultimate Travel Guide" },
    subtitle: { es: "Descubre dónde dormir, qué ver y cómo ahorrar en la capital española.", en: "Discover where to stay, what to see and how to save in the Spanish capital." },
    category: "guides",
    emoji: "🇪🇸",
    readTime: "8 min",
    date: "2026-03-01",
    heroImage: "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=2070&auto=format&fit=crop",
    metaDescription: { es: "Planifica tu viaje a Madrid en 2026. Mejores hoteles, tours gratis, y cómo tener internet con eSIM. ¡Ahorra con nuestros consejos!", en: "Plan your trip to Madrid in 2026. Best hotels, free tours, and how to get internet with eSIM. Save with our tips!" },
    keywords: { es: ["madrid 2026", "que hacer en madrid", "hoteles madrid", "esim españa"], en: ["madrid 2026", "things to do in madrid", "hotels madrid", "esim spain"] },
    content: {
      es: `Madrid es una ciudad que funciona a cualquier hora. A las 10 de la mañana, el Retiro es un parque con gente haciendo footing y jubilados jugando al ajedrez. A las 2 del mediodía, los restaurantes de La Latina tienen lista de espera. A las 12 de la noche, el barrio de Malasaña está recién empezando. No hay otra capital europea con este rango horario.

El Museo del Prado es, sin debate posible, uno de los tres grandes museos del mundo. La colección permanente incluye Las Meninas de Velázquez, Los fusilamientos de Goya, El jardín de las delicias de El Bosco y más de 8.000 obras más que ninguna visita de un día puede cubrir en serio. {{CTA:activity:getyourguide:madrid prado museum tour:Reserva tu tour guiado por el Prado}} — un buen guía marca la diferencia entre ver cuadros y entender por qué importan. Llega a primera hora: la sala de Velázquez antes de las 11 tiene una calidad de silencio que no tiene ninguna otra sala del mundo.

El Museo Reina Sofía, a diez minutos a pie del Prado, completa el cuadro con el arte del siglo XX. El Guernica de Picasso en su sala propia — de grandes dimensiones, iluminado con seriedad — es una de esas obras que no puedes prepararte para ver bien aunque hayas estudiado su historia. {{CTA:tickets:tiqets:reina sofia museum madrid:Compra tu entrada al Reina Sofía}} con antelación en temporada alta.

El barrio de La Latina los domingos tiene el mercadillo del Rastro, la mayor flea market de España, y después los bares de la Cava Baja sirven vermut y tapas hasta las 4 de la tarde. Es el domingo madrileño por excelencia: lento, ruidoso, absolutamente perfecto.

El Parque del Retiro merece una mañana entera. El Palacio de Cristal, el estanque con barcas de alquiler, los pintores callejeros, los jardines del Parterre: es el pulmón verde de la ciudad y funciona como termómetro social de Madrid — si hay buen tiempo, medio Madrid está aquí. La entrada es gratis.

Para alojarte, la zona de Chueca y Malasaña tiene la mejor selección de hoteles boutique con acceso a pie a todo. La Gran Vía es más conveniente para transporte pero más ruidosa por las noches. {{CTA:hotel:booking:madrid boutique hotel:Compara hoteles en Madrid}} — la diferencia de precio entre semana y fin de semana en Madrid puede ser significativa; si tienes flexibilidad, entre martes y jueves consigues mejores tarifas.

{{CTA:service:discovercars:madrid:Alquiler de coche en Madrid}} si planeas hacer excursiones al Escorial, Toledo o Segovia — todas a menos de una hora y perfectas para un día.`,
      en: `Madrid is a city that works at any hour. At 10 in the morning, the Retiro is a park with joggers and retired men playing chess. At 2 in the afternoon, restaurants in La Latina have waiting lists. At midnight, Malasaña is just getting started. No other European capital has this kind of operating range.

The Prado Museum is, without debate, one of the three great museums in the world. The permanent collection includes Velázquez's Las Meninas, Goya's The Third of May, Bosch's The Garden of Earthly Delights and over 8,000 more works that no single day can seriously cover. {{CTA:activity:getyourguide:madrid prado museum tour:Book your guided Prado tour}} — a good guide makes the difference between seeing paintings and understanding why they matter. Arrive first thing: the Velázquez room before 11am has a quality of silence found nowhere else in the world.

The Reina Sofía Museum, ten minutes' walk from the Prado, completes the picture with 20th-century art. Picasso's Guernica in its own large, properly lit room is one of those works you can't prepare yourself to see well, even if you've studied its history. {{CTA:tickets:tiqets:reina sofia museum madrid:Buy your Reina Sofía ticket}} in advance during peak season.

La Latina on Sundays has the Rastro flea market — the largest in Spain — followed by the bars on Cava Baja serving vermouth and tapas until 4pm. This is the quintessential Madrid Sunday: slow, noisy, absolutely perfect.

El Retiro Park deserves a full morning. The Crystal Palace, the rowing lake, the street artists, the Parterre gardens: it's the city's green lung and works as Madrid's social barometer — if the weather's good, half the city is here. Free entry.

For accommodation, the Chueca and Malasaña area has the best selection of boutique hotels within walking distance of everything. Gran Vía is more convenient for transport but noisier at night. {{CTA:hotel:booking:madrid boutique hotel:Compare hotels in Madrid}} — the price difference between weekdays and weekends in Madrid can be significant; if you have flexibility, Tuesday to Thursday gives the best rates.

{{CTA:service:discovercars:madrid:Car hire in Madrid}} if you're planning day trips to El Escorial, Toledo or Segovia — all under an hour away and perfect for a day out.`
    },
    pointsOfInterest: [
      {
        name: "Museo del Prado",
        type: "Museo",
        lat: 40.4138, lng: -3.6921,
        description: { es: "La pinacoteca más importante del mundo: Velázquez, Goya, El Bosco, Tiziano. Reserva entrada a primera hora y lleva calzado cómodo — la colección es de otro planeta.", en: "The world's most important art museum: Velázquez, Goya, Bosch, Titian. Book first thing and wear comfortable shoes — the collection is from another planet." },
        rating: 4.9, priceRange: "€15",
        affiliateLinks: [
          { label: { es: "Tour guiado Prado", en: "Guided Prado tour" }, partner: "getyourguide", query: "madrid prado museum tour", type: "activity" },
          { label: { es: "Entrada Reina Sofía", en: "Reina Sofía ticket" }, partner: "tiqets", query: "reina sofia museum madrid", type: "tickets" },
        ],
      },
      {
        name: "Parque del Retiro",
        type: "Parque",
        lat: 40.4153, lng: -3.6844,
        description: { es: "El pulmón verde de Madrid: el Palacio de Cristal, el estanque con barcas y medio Madrid tomando el sol los domingos. Entrada gratuita.", en: "Madrid's green lung: the Crystal Palace, the rowing lake and half the city sunbathing on Sundays. Free entry." },
        rating: 4.8, priceRange: "Gratis",
        affiliateLinks: [],
      },
      {
        name: "La Latina & El Rastro",
        type: "Barrio",
        lat: 40.4115, lng: -3.7089,
        description: { es: "El barrio más castizo de Madrid. El Rastro domingos, vermut en la Cava Baja y tapas que siguen la lógica de que lo pequeño no tiene por qué ser malo.", en: "Madrid's most traditional neighbourhood. Sunday Rastro market, vermouth on Cava Baja and tapas that follow the logic that small doesn't have to mean mediocre." },
        rating: 4.7,
        affiliateLinks: [
          { label: { es: "Tour gastronómico Madrid", en: "Madrid food tour" }, partner: "viator", query: "madrid food tour tapas la latina", type: "activity" },
        ],
      },
    ],
    events: [],
    services: {
      hotels: ["booking", "airbnb", "hostelworld"],
      flights: ["skyscanner", "kiwi"],
      activities: ["getyourguide", "viator", "civitatis"],
      cars: ["discovercars"],
    },
    faq: {
      es: [
        { question: "¿Cuál es la mejor época para visitar Madrid?", answer: "Primavera (abril-junio) y otoño (septiembre-octubre) ofrecen el mejor clima." },
        { question: "¿Cómo moverse por Madrid?", answer: "El metro es excelente y conecta toda la ciudad, incluido el aeropuerto." }
      ],
      en: [
        { question: "When is the best time to visit Madrid?", answer: "Spring (April-June) and Autumn (September-October) offer the best weather." },
        { question: "How to get around Madrid?", answer: "The metro is excellent and connects the entire city, including the airport." }
      ]
    }
  },
  // ─────────────────────────────────────────────
  // 1. BARCELONA
  // ─────────────────────────────────────────────
  {
    id: 1,
    slug: "barcelona-primavera-2026",
    enSlug: "barcelona-spring-2026",
    narrator: "carmen",
    heroImage: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1200&q=80",
    city: "Barcelona",
    country: { es: "España", en: "Spain" },
    emoji: "🇪🇸",
    date: "2026-02-24",
    readTime: "8 min",
    category: "europe",
    title: {
      es: "Barcelona en Primavera: Arte, Tapas y la Cola Eterna de la Sagrada Família",
      en: "Barcelona in Spring: Art, Tapas, and Two Hours Queuing in the Sun",
    },
    subtitle: {
      es: "Lo que las guías no te cuentan para no hundir tus expectativas (ni tu bolsillo)",
      en: "What travel guides omit to protect your booking deposit and your sanity",
    },
    excerpt: {
      es: "Barcelona en primavera suena a terraza, vermut y brisa salada. La realidad también incluye eso, más algún que otro taxista que 'no llega tan al centro' y la versión primaveral de la multitud de turistas que ya conoces del verano.",
      en: "Barcelona in spring promises sea breezes and rooftop cocktails. It delivers all of that, plus a queue outside the Sagrada Família that's been moving since 2019.",
    },
    metaDescription: {
      es: "Guía honesta de Barcelona en primavera 2026: cómo sobrevivir la Sagrada Família, dónde comer sin trampa y qué festivales merecen el madrugón.",
      en: "Honest guide to Barcelona in spring 2026: how to survive the Sagrada Família queue, where to eat without getting fleeced, and which festivals are worth the early alarm.",
    },
    keywords: {
      es: ["Barcelona", "primavera", "Primavera Sound", "Sónar", "Gaudí", "tapas"],
      en: ["Barcelona", "spring", "Primavera Sound", "Sónar", "Gaudí", "tapas"],
    },
    pointsOfInterest: [
      {
        name: "La Sagrada Família",
        type: "Monumento",
        lat: 41.4036, lng: 2.1744,
        description: {
          es: "La obra maestra de Gaudí que lleva más de 140 años en construcción — cosa que, ya que estás, le añade un cierto encanto existencial. Reserva entrada a primera hora o asume que la cola es parte de la experiencia.",
          en: "Gaudí's masterpiece has been under construction for over 140 years, which at this point feels like a feature rather than a bug. Book first thing in the morning or accept that the queue is the warm-up act.",
        },
        rating: 4.9, priceRange: "€26–36",
        affiliateLinks: [
          { label: { es: "Entradas sin cola", en: "Skip-the-line tickets" }, partner: "getyourguide", query: "sagrada familia skip line", type: "tickets" },
          { label: { es: "Tour guiado + torres", en: "Guided tour + towers" }, partner: "civitatis", query: "sagrada familia tour torres", type: "activity" },
          { label: { es: "Entrada + audioguía", en: "Ticket + audio guide" }, partner: "tiqets", query: "sagrada familia audio", type: "tickets" },
        ],
      },
      {
        name: "Park Güell",
        type: "Parque",
        lat: 41.4145, lng: 2.1527,
        description: {
          es: "Los mosaicos de Gaudí rodeados de jardines en flor y cientos de turistas haciéndose selfies en los mismos tres puntos. La zona gratuita tiene mejores vistas y cero obligación de pagar.",
          en: "Gaudí's mosaics surrounded by flowering gardens and tourists photographing the same three spots in rotation. The free zone has better views and the considerable advantage of costing nothing.",
        },
        rating: 4.7, priceRange: "€10",
        affiliateLinks: [
          { label: { es: "Entrada + audioguía", en: "Ticket + audio guide" }, partner: "tiqets", query: "park guell", type: "tickets" },
          { label: { es: "Tour Gaudí completo", en: "Full Gaudí tour" }, partner: "viator", query: "gaudi complete tour barcelona", type: "activity" },
        ],
      },
      {
        name: "El Born",
        type: "Barrio",
        lat: 41.3851, lng: 2.1834,
        description: {
          es: "El barrio más vibrante para tapas, galerías de arte y tiendas vintage. También el lugar donde descubrirás que 'precio de carta' en Barcelona tiene una definición propia.",
          en: "The most vibrant neighbourhood for tapas, independent art galleries and vintage shops. Also the place where you'll discover that 'menu prices' in Barcelona are a creative genre.",
        },
        rating: 4.6,
        affiliateLinks: [
          { label: { es: "Tour gastronómico", en: "Gastronomic tour" }, partner: "getyourguide", query: "born food tour barcelona tapas", type: "activity" },
          { label: { es: "Reservar restaurante", en: "Book a restaurant" }, partner: "thefork", query: "born barcelona", type: "restaurant" },
        ],
      },
      {
        name: "Bunkers del Carmel",
        type: "Mirador",
        lat: 41.4184, lng: 2.1565,
        description: {
          es: "Vistas 360° de la ciudad entera. El secreto más secreto que ya no es secreto: todo el mundo sube al atardecer con cava y la misma idea de que van a ser los únicos.",
          en: "360° views of the entire city. The open secret that everyone is keeping: the whole city climbs up at sunset with wine and the private belief that they're the only ones who know about it.",
        },
        rating: 4.8,
        affiliateLinks: [
          { label: { es: "Tour atardecer + cava", en: "Sunset tour + cava" }, partner: "civitatis", query: "bunkers carmel sunset", type: "activity" },
        ],
      },
      {
        name: "La Barceloneta",
        type: "Playa",
        lat: 41.3758, lng: 2.1899,
        description: {
          es: "La playa urbana más famosa de Europa. En primavera puedes disfrutarla sin la masificación del verano, aunque los chiringuitos ya tienen lista de espera.",
          en: "Europe's most famous urban beach. In spring you can enjoy it without summer's sardine-tin density, though the beach bars already have a waiting list.",
        },
        rating: 4.4,
        affiliateLinks: [
          { label: { es: "Kayak + snorkel", en: "Kayak + snorkel" }, partner: "viator", query: "barceloneta kayak", type: "activity" },
          { label: { es: "Chiringuitos playa", en: "Beach restaurants" }, partner: "thefork", query: "barceloneta restaurant", type: "restaurant" },
        ],
      },
    ],
    events: [
      {
        name: "Primavera Sound 2026",
        type: "festival",
        date: "4–7 Jun 2026",
        venue: "Parc del Fòrum",
        urgency: true,
        description: {
          es: "Headliners: The Cure y My Bloody Valentine el sábado, Gorillaz y The xx el viernes, Doja Cat y Massive Attack el jueves. Lo que eso significa es que pagar 280€ por el abono ya era absurdo cuando lo compraste el día que salió — y que aun así te arrepientes de no haber cogido el de tres días. Agotado desde el 11 de febrero, por segundo año consecutivo.",
          en: "Headliners: The Cure and My Bloody Valentine on Saturday, Gorillaz and The xx on Friday, Doja Cat and Massive Attack on Thursday. What this means is that paying €280 for the pass was already unreasonable when you bought it on day one — and yet you still regret not getting the extended ticket. Sold out since February 11th, for the second year running.",
        },
        affiliateLinks: [
          { label: { es: "Compra tu abono", en: "Buy festival pass" }, partner: "ticketmaster", query: "primavera sound 2026 the cure gorillaz barcelona", type: "tickets" },
          { label: { es: "Reventa verificada", en: "Verified resale" }, partner: "stubhub", query: "primavera sound 2026 gorillaz the cure", type: "tickets" },
          { label: { es: "Experiencia festival completa", en: "Full festival experience" }, partner: "getyourguide", query: "primavera sound barcelona festival experience", type: "activity" },
        ],
      },
      {
        name: "Festival Sónar 2026",
        type: "electronic",
        date: "18–20 Jun 2026",
        venue: "Fira Gran Via (L'Hospitalet)",
        urgency: true,
        description: {
          es: "Gran cambio para 2026: ya no hay formato día/noche ni dos sedes. Todo concentrado en un único recinto — Fira Gran Via — con seis escenarios y música continua de tarde a madrugada. Cartel: The Prodigy, Charlotte de Witte, Skepta, Amelie Lens, Joy Orbison, SBTRKT, Dom Dolla. Duermes poco, piensas mucho y sales convencido de que entiendes el arte contemporáneo — hasta que intentas explicárselo a alguien al día siguiente.",
          en: "Big change for 2026: no more day/night split, no more two venues. Everything concentrated at a single site — Fira Gran Via — with six stages and non-stop music from afternoon to the early hours. Lineup: The Prodigy, Charlotte de Witte, Skepta, Amelie Lens, Joy Orbison, SBTRKT, Dom Dolla. You sleep little, think too much, and leave convinced you finally understand contemporary art — until you try to explain it to someone the next day.",
        },
        affiliateLinks: [
          { label: { es: "Entradas Sónar 2026", en: "Sónar 2026 tickets" }, partner: "ticketmaster", query: "sonar barcelona 2026 the prodigy charlotte de witte", type: "tickets" },
          { label: { es: "Reventa verificada", en: "Verified resale" }, partner: "stubhub", query: "sonar festival barcelona 2026 prodigy skepta", type: "tickets" },
          { label: { es: "Tour electrónico por Barcelona", en: "Electronic Barcelona tour" }, partner: "getyourguide", query: "barcelona music scene tour sonar", type: "activity" },
        ],
      },
      {
        name: "Feria de Abril de Catalunya",
        type: "cultural",
        date: "24 Abr – 3 May 2026",
        venue: "Fira de Barcelona",
        urgency: false,
        description: {
          es: "Sevillanas, casetas y gastronomía andaluza en plena Barcelona. La prueba definitiva de que esta ciudad absorbe culturas ajenas y las hace propias sin pedir permiso — y con más rebujito del que admitirá ningún catalán.",
          en: "Sevillanas, casetas and Andalusian gastronomy in the heart of Barcelona. Definitive proof that this city absorbs other cultures and makes them its own without asking permission — and with more rebujito than any Catalan will officially admit to.",
        },
        affiliateLinks: [
          { label: { es: "Entradas Feria de Abril", en: "Feria de Abril tickets" }, partner: "ticketmaster", query: "feria abril barcelona 2026", type: "tickets" },
          { label: { es: "Tour flamenco + feria", en: "Flamenco + feria tour" }, partner: "civitatis", query: "flamenco feria abril barcelona", type: "activity" },
        ],
      },
    ],
    services: {
      flights: ["skyscanner", "kiwi"],
      hotels: ["booking", "hostelworld", "vrbo"],
      cars: ["discovercars", "rentalcars", "autoeurope", "localrent"],
      activities: ["getyourguide", "viator", "tiqets", "civitatis", "klook"],
      restaurants: ["thefork", "opentable"],
      insurance: ["safetywing", "worldnomads"],
      esim: ["airalo", "holafly", "saily", "yesim"],
      transfers: ["intui", "welcomepickups", "gettransfer", "indrive"],
      parking: ["parkimeter"],
    },
    content: {
      es: `Compré las entradas de la Sagrada Família tres meses antes. Sí, tres meses. "Por si acaso", me dije, con esa seguridad serena de quien lleva dos décadas planeando viajes con hoja de cálculo y jamás ha improvizado nada que valiera la pena. Y claro que sí: en marzo de 2026, si llegas a la Sagrada Família sin entrada reservada, la cola te recibirá con esa frialdad característica de lo inevitable.

Pero ésa es precisamente la gracia de Barcelona: la ciudad que te parece que ya conoces bien de tanto haberla estudiado y sin embargo siempre encuentra la forma de sorprenderte. {{CTA:tickets:getyourguide:sagrada familia skip line:Reserva tu entrada sin cola}} — Gaudí lleva 144 años inacabado y el aforo está controlado al minuto. Llegué a las 9 de la mañana, con la luz entrando a través de los vitrales naranjas y azules y tiñendo de colores absurdamente hermosos las columnas que imitan un bosque. Salí convencida de que era la primera vez que la entendía de verdad, aunque era la cuarta vez que la visitaba.

El Born es el barrio que más me gusta de Barcelona, lo cual me convierte en la turista más predecible del mundo y no me importa. Sus calles medievales reinventadas concentran las mejores tapas de la ciudad — {{CTA:activity:getyourguide:born food tour barcelona tapas:Un tour gastronómico por el Born}} es la forma más inteligente de conocerlo, porque hay restaurantes sin cartel exterior que solo los locales conocen y que sirven el mejor calamar a la romana de la historia del frito. El mercado de Santa Caterina, con su techo de cerámica de colores que el Mercat de la Boqueria nunca tuvo, merece al menos veinte minutos de contemplación. Fui a comprar tomates y salí con tres libros sobre arquitectura modernista. Me conozco.

La Barceloneta al atardecer tiene esa luz mediterránea que transforma cualquier terraza en algo que parece de película. Tome nota: la cerveza sabe exactamente igual en los chiringuitos con precios duplicados que en los de barrio dos calles más atrás. La diferencia es la vista al mar, que vale lo que vale según quien la vea.

Los Bunkers del Carmel al atardecer son mi recomendación definitiva para cualquiera que quiera ver Barcelona desde arriba sin pagar mirador. Se llega a pie, se sube con calma y la vista de 360° — con el mar al fondo, la Sagrada Família en el centro y el Tibidabo a la derecha — es de esas que te hacen entender por qué seis millones de personas al año se suben a un avión y vienen aquí.

Primavera Sound convierte la ciudad en la capital mundial del indie durante tres días de junio — {{CTA:tickets:ticketmaster:primavera sound 2026:consigue tu abono antes de que se agoten}}, porque se agotan antes de que termines de leer los titulares de la alineación. Yo lo compré en enero. "Por si acaso".

Si quieres llegar a la Costa Brava, a Montserrat o a las bodegas del Penedès, {{CTA:service:discovercars:barcelona:alquilar un coche}} sigue siendo la opción más libre. Y sí, tuve el mapa del Penedès descargado antes de aterrizar. ¿Alguien esperaba otra cosa?`,
      en: `I bought the Sagrada Família tickets three months in advance. Yes, three months. "Just in case", I told myself, with the composed certainty of someone who has been planning trips with spreadsheets for two decades and has never improvised anything worth mentioning. And of course: in March 2026, if you arrive at the Sagrada Família without a pre-booked ticket, the queue will greet you with the cold inevitability of something you were warned about.

But that is precisely the charm of Barcelona: the city you think you already know inside out from all the research, yet somehow always manages to surprise you. {{CTA:tickets:getyourguide:sagrada familia skip line:Book your skip-the-line ticket}} — Gaudí's masterpiece has been under construction for 144 years and visitor capacity is controlled to the minute. I arrived at 9am, with light filtering through the orange and blue stained glass and casting absurdly beautiful colours across the tree-like columns. I left convinced I was understanding it for the first time, although it was actually my fourth visit.

El Born is my favourite neighbourhood in Barcelona, which makes me the most predictable tourist in the world and I don't mind at all. Its reinvented medieval streets concentrate the city's best tapas — {{CTA:activity:getyourguide:born food tour barcelona tapas:A gastronomic tour through El Born}} is the most intelligent way to explore it, because there are restaurants with no exterior sign that only locals know, serving the finest calamari in the history of the deep-fried. The Mercat de Santa Caterina, with its multicoloured ceramic roof that La Boqueria never had, deserves at least twenty minutes of contemplation. I went in to buy tomatoes and came out with three books on Modernist architecture. I know myself.

La Barceloneta at sunset has that Mediterranean light that turns any terrace into something cinematic. Take note: the beer tastes exactly the same in the overpriced beach bars as in the neighbourhood spots two streets back. The difference is the sea view, which is worth what it's worth depending on who's looking.

The Bunkers del Carmel at dusk are my definitive recommendation for anyone wanting to see Barcelona from above without paying for an observation deck. You walk up at your own pace, and the 360° view — sea in the background, the Sagrada Família at centre, the Tibidabo to the right — is one of those that explains why six million people a year board a plane and come here.

Primavera Sound turns the city into the world's indie capital for three June days — {{CTA:tickets:ticketmaster:primavera sound 2026:get your pass before they sell out}}, because they sell out before you've finished reading the lineup headlines. I bought mine in January. "Just in case."

If you want to reach the Costa Brava, Montserrat or the Penedès wineries, {{CTA:service:discovercars:barcelona:renting a car}} remains the most liberating option. And yes, I had the Penedès map downloaded before landing. Was anyone expecting anything different?`,
    },
  },

  // ─────────────────────────────────────────────
  // 2. TOKYO
  // ─────────────────────────────────────────────
  {
    id: 2,
    slug: "tokio-guia-completa-2026",
    enSlug: "tokyo-complete-guide-2026",
    narrator: "marcos",
    heroImage: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=80",
    city: "Tokyo",
    country: { es: "Japón", en: "Japan" },
    emoji: "🇯🇵",
    date: "2026-02-20",
    readTime: "10 min",
    category: "asia",
    title: {
      es: "Tokio: Entre la Tradición Milenaria y el Futuro que ya Llegó (Sin Avisar)",
      en: "Tokyo: Between Ancient Tradition and a Future That Arrived Without Asking",
    },
    subtitle: {
      es: "Templos zen, ramen de medianoche y la ciudad que hace que el resto del mundo parezca en obras",
      en: "Zen temples, midnight ramen and the city that makes everywhere else feel like it's still under construction",
    },
    excerpt: {
      es: "Tokio no se visita, te visita a ti. Una ciudad donde un templo del siglo VII convive con un robot-café y los dos funcionan con una puntualidad que avergüenza al resto del planeta.",
      en: "Tokyo doesn't get visited — it visits you. A city where a 7th-century temple coexists with a robot café and both run on a schedule that makes the rest of the world look amateur.",
    },
    metaDescription: {
      es: "Guía de Tokio 2026 sin filtros: templos, barrios, ramen, hanami y teamLab. Con advertencia de jet lag incluida.",
      en: "Unfiltered Tokyo guide 2026: temples, neighbourhoods, ramen, hanami and teamLab. Jet lag warning included.",
    },
    keywords: {
      es: ["Tokio", "Japón", "hanami", "cerezos", "ramen", "Akihabara", "teamLab"],
      en: ["Tokyo", "Japan", "hanami", "cherry blossoms", "ramen", "Akihabara", "teamLab"],
    },
    pointsOfInterest: [
      {
        name: "Senso-ji",
        type: "Templo",
        lat: 35.7148, lng: 139.7967,
        description: {
          es: "El templo más antiguo de Tokio y el más fotografiado. La calle Nakamise que lleva hasta él es un túnel de dulces, artesanías y turistas con peripecias. Ve al amanecer si quieres algo de paz.",
          en: "Tokyo's oldest temple and its most photographed. The Nakamise street leading to it is a tunnel of sweets, crafts and fellow tourists comparing camera settings. Go at dawn if peace is what you're after.",
        },
        rating: 4.8, priceRange: "Gratis",
        affiliateLinks: [
          { label: { es: "Tour guiado Asakusa", en: "Guided Asakusa tour" }, partner: "getyourguide", query: "sensoji asakusa tour", type: "activity" },
          { label: { es: "Tour cultural privado", en: "Private cultural tour" }, partner: "viator", query: "tokyo temple cultural tour", type: "activity" },
        ],
      },
      {
        name: "Shibuya Crossing",
        type: "Icónico",
        lat: 35.6595, lng: 139.7004,
        description: {
          es: "El cruce peatonal más famoso del mundo: 3.000 personas cruzando en todas direcciones simultáneamente, con una eficiencia que nunca dejará de impresionar. Sube al Starbucks del Tsutaya para verlo desde arriba.",
          en: "The world's most famous pedestrian crossing: 3,000 people crossing in all directions simultaneously with an efficiency that will never stop being impressive. Head to the Tsutaya Starbucks to watch from above like a calm god.",
        },
        rating: 4.5,
        affiliateLinks: [
          { label: { es: "Tour nocturno Shibuya", en: "Shibuya night tour" }, partner: "civitatis", query: "shibuya night tour", type: "activity" },
        ],
      },
      {
        name: "Shinjuku Gyoen",
        type: "Jardín",
        lat: 35.6852, lng: 139.7100,
        description: {
          es: "Más de 1.000 cerezos crean un túnel rosado que parece diseñado por alguien que quería demostrar que la naturaleza puede superar a cualquier filtro de Instagram.",
          en: "Over 1,000 cherry trees create a pink tunnel that looks designed by someone who wanted to prove nature can out-filter any Instagram preset.",
        },
        rating: 4.9, priceRange: "¥500",
        affiliateLinks: [
          { label: { es: "Tour jardines + té", en: "Gardens + tea tour" }, partner: "getyourguide", query: "shinjuku gyoen cherry blossom", type: "activity" },
        ],
      },
      {
        name: "Akihabara",
        type: "Barrio",
        lat: 35.7023, lng: 139.7745,
        description: {
          es: "La meca del anime, manga y tecnología. Un lugar donde puedes comprar una figura coleccionable de 500€ y sentirte absolutamente justificado.",
          en: "The mecca of anime, manga and technology. A place where spending €500 on a collectible figure feels completely reasonable and you're not sure when that happened.",
        },
        rating: 4.6,
        affiliateLinks: [
          { label: { es: "Tour otaku guiado", en: "Guided otaku tour" }, partner: "viator", query: "akihabara otaku tour", type: "activity" },
          { label: { es: "Restaurantes temáticos", en: "Themed restaurants" }, partner: "opentable", query: "tokyo akihabara", type: "restaurant" },
        ],
      },
      {
        name: "Tsukiji Outer Market",
        type: "Mercado",
        lat: 35.6654, lng: 139.7707,
        description: {
          es: "El paraíso del sushi fresco a las 7 de la mañana, momento en que descubrirás que el sushi de aeropuerto de vuelta no va a saber igual nunca más.",
          en: "Paradise for fresh sushi at 7am, the precise moment you realise airport sushi on the way home will never taste the same again.",
        },
        rating: 4.7,
        affiliateLinks: [
          { label: { es: "Tour gastronómico", en: "Food tour" }, partner: "getyourguide", query: "tsukiji food tour sushi", type: "activity" },
        ],
      },
    ],
    events: [
      {
        name: "Hanami (Cerezos en flor)",
        type: "natural",
        date: "Mar–Abr 2026",
        venue: "Toda la ciudad",
        urgency: false,
        description: {
          es: "La tradición más bella de Japón: pícnics bajo los cerezos en flor con sake, combini y la filosofía zen de contemplar algo que dura dos semanas. Reservas el vuelo con un año de antelación para ver flores que duran siete días. Vale cada yen.",
          en: "Japan's most beautiful tradition: picnics under the cherry blossoms with sake, convenience store snacks and the zen philosophy of contemplating something that lasts two weeks. You book the flight a year ahead to see flowers that last seven days. Worth every yen.",
        },
        affiliateLinks: [
          { label: { es: "Tour hanami exclusivo", en: "Exclusive hanami tour" }, partner: "viator", query: "tokyo hanami cherry blossom picnic tour", type: "activity" },
          { label: { es: "Experiencia hanami guiada", en: "Guided hanami experience" }, partner: "getyourguide", query: "tokyo cherry blossom hanami guided", type: "activity" },
        ],
      },
      {
        name: "teamLab Borderless",
        type: "digital_art",
        date: "Todo el año",
        venue: "Azabudai Hills",
        urgency: false,
        description: {
          es: "La instalación de arte digital más impresionante del mundo. Entras con tres ideas sobre el arte contemporáneo y sales sin ninguna — pero con veinte fotos que no consiguen capturar lo que acabas de ver. La definición exacta del éxito artístico.",
          en: "The world's most impressive immersive digital art installation. You enter with three ideas about contemporary art and leave with none — but with twenty photos that fail to capture what you just witnessed. The exact definition of artistic success.",
        },
        affiliateLinks: [
          { label: { es: "Entrada prioritaria teamLab", en: "teamLab priority ticket" }, partner: "tiqets", query: "teamlab borderless tokyo azabudai", type: "tickets" },
          { label: { es: "Entrada + transporte", en: "Ticket + transport" }, partner: "getyourguide", query: "teamlab borderless tokyo ticket", type: "tickets" },
        ],
      },
      {
        name: "Tokyo Game Show",
        type: "technology",
        date: "Sep 2026",
        venue: "Makuhari Messe",
        urgency: true,
        description: {
          es: "La feria de videojuegos más grande de Asia: donde anuncian los juegos del año siguiente y descubres que tu consola actual ya es historia. Colas de cuatro horas para probar demos de quince minutos. Sin arrepentimientos.",
          en: "Asia's largest video game expo: where next year's games get announced and you quietly accept your current console is already obsolete. Four-hour queues for fifteen-minute demos. Zero regrets.",
        },
        affiliateLinks: [
          { label: { es: "Entradas Tokyo Game Show", en: "Tokyo Game Show tickets" }, partner: "ticketmaster", query: "tokyo game show 2026", type: "tickets" },
          { label: { es: "Tour gaming Akihabara", en: "Akihabara gaming tour" }, partner: "getyourguide", query: "tokyo game show akihabara gaming tour", type: "activity" },
        ],
      },
    ],
    services: {
      flights: ["skyscanner", "kiwi"],
      hotels: ["booking", "hostelworld"],
      cars: ["discovercars", "rentalcars", "localrent"],
      activities: ["getyourguide", "viator", "tiqets", "civitatis", "klook"],
      restaurants: ["opentable"],
      insurance: ["safetywing", "worldnomads"],
      esim: ["airalo", "holafly", "saily", "yesim"],
      transfers: ["intui", "welcomepickups", "gettransfer", "indrive"],
      transport: ["omio"],
    },
    content: {
      es: `Fui a Tokio para el Tokyo Game Show. Esto es importante para entender todo lo que vino después.

El TGS dura cuatro días. Los primeros dos son industria — si conoces a alguien que trabaje en desarrollo, consigues pasar. Los últimos dos son público general: colas de cuatro horas para demos de diez minutos y una densidad de personas por metro cuadrado que haría quedar mal a la línea Yamanote en hora punta. Perfecto. Me esperaba eso.

Lo que no me esperaba era Akihabara. Fui "a echar un vistazo rápido" el primer día, entre el aeropuerto y el hotel. Salí tres horas después con una figura coleccionista de edición limitada de un anime que descubrí en ese mismo momento y que resultó costar lo mismo que tres noches de hostel. No me arrepiento. La figura está en mi estudio y la veo todos los días y me recuerda que Tokio tiene una habilidad única para convencerte de que necesitas cosas que ni sabías que existían.

Aun así: Senso-ji al amanecer, antes de las 7, es una de las experiencias más tranquilas que puedes tener en una ciudad de 14 millones de personas. {{CTA:activity:getyourguide:sensoji asakusa tour:reserva un tour guiado por Asakusa}} para entender qué está pasando con los rituales del incienso y las ofrendas. El ambiente antes de que lleguen los primeros grupos organizados es de una quietud que contrasta tan brutalmente con el Shibuya de las 11 de la mañana que parece mentira que estés en la misma ciudad.

Shibuya es el cruce más famoso del mundo y sí, merece la visita aunque sea por decir que lo has visto. La estrategia: sube al Starbucks del edificio Tsutaya, pide lo que sea y contempla desde arriba cómo 2.500 personas cruzan simultáneamente en todas las direcciones posibles. Es una coreografía espontánea que llevan décadas practicando sin ponerse de acuerdo.

El Shinjuku Gyoen en primavera (marzo-abril, confirma fechas porque el hanami cambia de año en año) es un lienzo impresionista que justifica cualquier desvío de itinerario. Más de 1.000 cerezos en flor, familias comiendo bajo los árboles, fotógrafos con objetivos del tamaño de un telescopio. Y entre todo eso, silencio sorprendente para estar en el centro de Tokio.

teamLab Borderless es obligatorio, pero necesita planificación: {{CTA:tickets:tiqets:teamlab borderless tokyo:compra tu entrada con antelación}} porque se agotan con semanas de margen. Es la instalación de arte digital más impresionante que he visto, y eso que vengo de ver festivales de visuales en cuatro continentes. Lleva cámara, lleva zapatos que te puedes quitar fácilmente y prepárate para perderte literalmente dentro, que es parte del diseño.

La comida callejera de Tsukiji es el plan que más le recomiendo a cualquiera que llegue con ganas de comer bien sin complicaciones. {{CTA:activity:getyourguide:tsukiji food tour sushi:Un tour gastronómico por Tsukiji}} es la forma inteligente de orientarse entre los puestos y entender qué estás comiendo y por qué vale lo que vale. El tren de regreso al hotel con el sushi todavía en el estómago y la lista de buenas intenciones para mañana ya formada: eso es Tokio en su mejor versión.`,
      en: `I went to Tokyo for the Tokyo Game Show. This is important context for everything that followed.

TGS runs four days. The first two are industry — if you know someone in game development, you can get in. The last two are open to the public: four-hour queues for ten-minute demos and a density of human beings per square metre that would make the Yamanote Line at rush hour look spacious. Perfect. That's exactly what I expected.

What I did not expect was Akihabara. I went "just for a quick look" on the first day, between the airport and the hotel. I emerged three hours later with a limited-edition collector's figure from an anime I had discovered in that exact building an hour earlier, which cost roughly the same as three nights in a hostel. No regrets. The figure sits in my studio and I see it every day and it reminds me that Tokyo has a unique ability to make you need things you didn't know existed.

That said: Senso-ji at dawn, before 7am, is one of the most peaceful experiences available in a city of 14 million people. {{CTA:activity:getyourguide:sensoji asakusa tour:book a guided tour through Asakusa}} to understand what's happening with the incense rituals and the offerings. The atmosphere before the first organised groups arrive is so quiet it contrasts so brutally with Shibuya at 11am that it barely feels like the same city.

Shibuya is the world's most famous crossing and yes, it's worth the visit if only to say you've seen it. The strategy: go up to the Starbucks in the Tsutaya building, order whatever, and watch from above as 2,500 people cross simultaneously in every possible direction. It's spontaneous choreography they've been practising for decades without ever agreeing on it.

Shinjuku Gyoen in spring (March-April, confirm dates because hanami timing varies year to year) is an impressionist canvas that justifies any detour from your itinerary. Over 1,000 cherry trees in bloom, families eating under the branches, photographers with lenses the size of telescopes. And amid all of it, surprising silence for the centre of Tokyo.

teamLab Borderless is non-negotiable, but it requires planning: {{CTA:tickets:tiqets:teamlab borderless tokyo:buy your ticket in advance}} because they sell out weeks ahead. It's the most impressive digital art installation I've seen, and I've been to visual arts festivals on four continents. Bring a camera, wear shoes you can easily remove, and be prepared to get genuinely lost inside the installation — that's part of the design.

The Tsukiji street food scene is the plan I'd recommend to anyone arriving hungry and without complications. {{CTA:activity:getyourguide:tsukiji food tour sushi:A food tour through Tsukiji}} is the smart way to navigate the stalls and understand what you're eating and why it costs what it costs. The train back to the hotel with the sushi still in your stomach and the list of tomorrow's good intentions already forming: that's Tokyo at its best.`,
    },
  },

  // ─────────────────────────────────────────────
  // 3. CDMX
  // ─────────────────────────────────────────────
  {
    id: 3,
    slug: "cdmx-guia-completa-2026",
    enSlug: "mexico-city-guide-2026",
    narrator: "elena",
    heroImage: "https://images.unsplash.com/photo-1585464231875-d9ef1f5ad396?w=1200&q=80",
    city: "Ciudad de México",
    country: { es: "México", en: "Mexico" },
    emoji: "🇲🇽",
    date: "2026-02-15",
    readTime: "9 min",
    category: "america",
    title: {
      es: "CDMX: Sabor, Color y Caos Hermoso en la Capital que No Duerme (Ni Lo Pretende)",
      en: "Mexico City: Flavour, Colour and Beautiful Chaos in the Capital That Never Sleeps (and Doesn't Care to Try)",
    },
    subtitle: {
      es: "Tacos al pastor a las 3AM, pirámides al amanecer y la mejor escena de arte de Latinoamérica — todo en la misma ciudad que te va a robar el corazón y probablemente el estómago",
      en: "Tacos al pastor at 3AM, pyramids at dawn and the best art scene in Latin America — all in the city that will steal your heart and possibly your appetite",
    },
    excerpt: {
      es: "Ciudad de México es excesiva en el mejor sentido posible. Una megalópolis donde Frida convive con galerías de vanguardia y los tacos del mercado son mejores que cualquier restaurante con estrella.",
      en: "Mexico City is excessive in the best possible sense. A megalopolis where Frida coexists with avant-garde galleries and the market tacos are better than anything with a Michelin star.",
    },
    metaDescription: {
      es: "Guía de Ciudad de México 2026: Teotihuacán, Frida Kahlo, Coyoacán, Xochimilco, Día de Muertos y los tacos que cambiarán tu vida.",
      en: "Mexico City guide 2026: Teotihuacán, Frida Kahlo, Coyoacán, Xochimilco, Day of the Dead and the tacos that will change your life.",
    },
    keywords: {
      es: ["CDMX", "México", "Teotihuacán", "Frida Kahlo", "Coyoacán", "Día de Muertos"],
      en: ["Mexico City", "Mexico", "Teotihuacán", "Frida Kahlo", "Coyoacán", "Day of the Dead"],
    },
    pointsOfInterest: [
      {
        name: "Museo Frida Kahlo",
        type: "Museo",
        lat: 19.3550, lng: -99.1626,
        description: {
          es: "La Casa Azul donde nació y murió Frida. Uno de los museos más personales del mundo: sales convencido de que Frida Kahlo te habría caído bien y tú a ella probablemente no.",
          en: "The Blue House where Frida was born and died. One of the world's most personal museums: you leave convinced Frida Kahlo would have liked you, and quietly aware the feeling might not have been mutual.",
        },
        rating: 4.8, priceRange: "MXN 250",
        affiliateLinks: [
          { label: { es: "Entrada sin cola", en: "Skip-the-line ticket" }, partner: "tiqets", query: "frida kahlo museum skip", type: "tickets" },
          { label: { es: "Tour Frida completo", en: "Full Frida tour" }, partner: "civitatis", query: "frida kahlo coyoacan tour", type: "activity" },
        ],
      },
      {
        name: "Teotihuacán",
        type: "Arqueología",
        lat: 19.6925, lng: -98.8438,
        description: {
          es: "Pirámides del Sol y la Luna que llevan ahí 2.000 años esperando que llegues con tu cámara. Madrugar vale la pena: el amanecer sobre la Pirámide del Sol es de esas experiencias que no caben en un story.",
          en: "The Pyramids of the Sun and Moon have been there for 2,000 years waiting for you to show up with your camera. The early start is worth it: sunrise over the Pyramid of the Sun is an experience that doesn't fit in a story.",
        },
        rating: 4.9, priceRange: "MXN 85",
        affiliateLinks: [
          { label: { es: "Tour amanecer + globo", en: "Sunrise tour + balloon" }, partner: "getyourguide", query: "teotihuacan sunrise balloon", type: "activity" },
          { label: { es: "Excursión día completo", en: "Full-day excursion" }, partner: "viator", query: "teotihuacan full day mexico", type: "activity" },
        ],
      },
      {
        name: "Coyoacán",
        type: "Barrio",
        lat: 19.3467, lng: -99.1617,
        description: {
          es: "Barrio bohemio con cafés, librerías, heladerías artesanales y el mercado más colorido de la ciudad. El tipo de barrio donde vas 'a ver' y acabas quedándote cuatro horas.",
          en: "Bohemian neighbourhood with cafés, bookshops, artisan ice cream shops and the city's most colourful market. The kind of neighbourhood you visit 'just to look' and leave four hours later.",
        },
        rating: 4.7,
        affiliateLinks: [
          { label: { es: "Tour gastronómico", en: "Food tour" }, partner: "getyourguide", query: "coyoacan food tour", type: "activity" },
          { label: { es: "Restaurantes", en: "Restaurants" }, partner: "opentable", query: "coyoacan mexico city", type: "restaurant" },
        ],
      },
      {
        name: "Xochimilco",
        type: "UNESCO",
        lat: 19.2577, lng: -99.1040,
        description: {
          es: "Canales prehispánicos con trajineras coloridas: una fiesta flotante que es turística, caótica y absolutamente imprescindible. Lleva efectivo, acepta el mariachi y disfruta.",
          en: "Pre-Hispanic canals with colourful trajineras: a floating party that is touristy, chaotic and absolutely unmissable. Bring cash, accept the mariachi, and enjoy.",
        },
        rating: 4.5, priceRange: "MXN 50–500",
        affiliateLinks: [
          { label: { es: "Tour en trajinera", en: "Trajinera tour" }, partner: "civitatis", query: "xochimilco trajinera tour", type: "activity" },
        ],
      },
      {
        name: "Roma-Condesa",
        type: "Barrio",
        lat: 19.4119, lng: -99.1707,
        description: {
          es: "Art déco, los mejores restaurantes de Latinoamérica y parques arbolados donde la gente saca a pasear perros de diseño. El barrio que te hará reconsiderar seriamente mudarte a México.",
          en: "Art deco architecture, Latin America's best restaurants and leafy parks where people walk designer dogs. The neighbourhood that will make you seriously reconsider moving to Mexico.",
        },
        rating: 4.7,
        affiliateLinks: [
          { label: { es: "Food tour Roma", en: "Roma food tour" }, partner: "viator", query: "roma condesa food tour cdmx", type: "activity" },
          { label: { es: "Reservar restaurante", en: "Book a restaurant" }, partner: "opentable", query: "roma condesa mexico city", type: "restaurant" },
        ],
      },
    ],
    events: [
      {
        name: "Día de Muertos",
        type: "cultural",
        date: "1–2 Nov 2026",
        venue: "Zócalo",
        urgency: true,
        description: {
          es: "Altares, ofrendas, calaveras de azúcar y el desfile más fotogénico del planeta. La celebración donde la muerte se convierte en fiesta, el duelo en color y tú en fotógrafo compulsivo que luego no sabe cuál publicar porque todas son perfectas.",
          en: "Altars, offerings, sugar skulls and the most photogenic parade on the planet. The celebration where death becomes a party, grief becomes colour, and you become a compulsive photographer who can't decide which photo to post because they're all perfect.",
        },
        affiliateLinks: [
          { label: { es: "Tour nocturno Día de Muertos", en: "Day of the Dead night tour" }, partner: "getyourguide", query: "dia de muertos mexico city night tour 2026", type: "activity" },
          { label: { es: "Experiencia altares y ofrendas", en: "Altars and offerings experience" }, partner: "viator", query: "day of dead cdmx ofrenda experience", type: "activity" },
        ],
      },
      {
        name: "Vive Latino 2026",
        type: "festival",
        date: "14–15 Mar 2026",
        venue: "Estadio GNP Seguros (Foro Sol)",
        urgency: true,
        description: {
          es: "Cartel histórico: Lenny Kravitz, The Smashing Pumpkins, The Mars Volta, Cypress Hill, John Fogerty, Tom Morello y Steve Aoki. Más Los Fabulosos Cadillacs, Enanitos Verdes, Maldita Vecindad e Illya Kuryaki. Tres días de música, calor sofocante y la certeza absoluta de que en CDMX saben perfectamente cómo hacer un festival — aunque el sol de marzo te recuerde que el protector solar no es opcional.",
          en: "Historic lineup: Lenny Kravitz, The Smashing Pumpkins, The Mars Volta, Cypress Hill, John Fogerty, Tom Morello and Steve Aoki. Plus Los Fabulosos Cadillacs, Enanitos Verdes, Maldita Vecindad and Illya Kuryaki. Two days of music, suffocating heat and the absolute certainty that Mexico City knows exactly how to throw a festival — though the March sun will remind you that sunscreen is non-negotiable.",
        },
        affiliateLinks: [
          { label: { es: "Boletos Vive Latino", en: "Vive Latino tickets" }, partner: "ticketmaster", query: "vive latino 2026 lenny kravitz smashing pumpkins mexico", type: "tickets" },
          { label: { es: "Reventa verificada", en: "Verified resale" }, partner: "stubhub", query: "vive latino 2026 smashing pumpkins mars volta", type: "tickets" },
          { label: { es: "Tour musical CDMX", en: "CDMX music scene tour" }, partner: "getyourguide", query: "mexico city music tour live", type: "activity" },
        ],
      },
      {
        name: "MUTEK México",
        type: "digital_art",
        date: "Oct 2026",
        venue: "Varios recintos",
        urgency: false,
        description: {
          es: "Creatividad digital y música electrónica experimental en una ciudad que lleva décadas demostrando que el arte no necesita pedir permiso. Saldrás convencido de que la vanguardia es una actitud, no un género — o simplemente muy cansado. Las dos cosas son válidas.",
          en: "Digital creativity and experimental electronic music in a city that has spent decades proving that art needs no permission slip. You'll leave convinced that the avant-garde is an attitude, not a genre — or just very tired. Both outcomes are valid.",
        },
        affiliateLinks: [
          { label: { es: "Entradas MUTEK México", en: "MUTEK México tickets" }, partner: "ticketmaster", query: "mutek mexico 2026", type: "tickets" },
          { label: { es: "Experiencias arte digital CDMX", en: "CDMX digital art experiences" }, partner: "getyourguide", query: "mexico city digital art culture tour", type: "activity" },
        ],
      },
    ],
    services: {
      flights: ["skyscanner", "kiwi"],
      hotels: ["booking", "hostelworld", "vrbo"],
      cars: ["discovercars", "rentalcars", "localrent"],
      activities: ["getyourguide", "viator", "tiqets", "civitatis", "klook"],
      restaurants: ["opentable"],
      insurance: ["safetywing", "worldnomads"],
      esim: ["airalo", "holafly", "saily", "yesim"],
      transfers: ["intui", "welcomepickups", "gettransfer", "indrive"],
      parking: ["parkimeter"],
    },
    content: {
      es: `Llegué a Ciudad de México con la teoría de que sería una nómada digital ejemplar. Tenía un Notion con bloques de tiempo, una playlist de "deep work" y la dirección de tres cafés de Roma Norte con buena conexión. El primero tenía un cartel de "Solo para consumo" en la puerta que yo interpreté como una invitación a pedir un solo café y quedarme cuatro horas. El segundo tenía WiFi con una contraseña en un post-it tan gastado que era ilegible en todos los ángulos posibles. El tercero era perfecto: enchufes, luz natural, un flat white decente. También tenía una mesa comunal donde un señor con sombrero de paja me preguntó si era diseñadora gráfica y acabamos hablando de arquitectura vernácula hasta las tres de la tarde. Así pasaron tres días. No entregué nada a tiempo, me quedé sin créditos de WiFi en el hostel y descubrí que CDMX es una ciudad que activamente conspira contra la productividad. No lo digo como queja.

## Roma-Condesa: el barrio donde fui a trabajar y acabé comiendo

Roma Norte tiene esa cualidad específica de los barrios que fueron cool, siguen siendo cool y se han acostumbrado a serlo sin hacer esfuerzos. Las calles huelen a jacaranda en febrero y a tacos de canasta a cualquier hora. Yo llegué con el portátil en la mochila y lo abrí exactamente cero veces en cuarenta y ocho horas.

La mecánica del barrio es sencilla: caminas en dirección a cualquier café y por el camino interceptas una taquería, una heladería de nieves artesanales y un puesto de elotes que huele de tal manera que es físicamente imposible no detenerse. Para cuando llegas al café ya has comido dos cosas y tu hambre real es otra completamente. {{CTA:activity:viator:roma condesa food tour cdmx:Un food tour por Roma-Condesa}} lo hace con estructura y sin que pierdas una hora decidiendo en qué esquina parar primero.

Lo que más me sorprendió de Roma-Condesa no fue la comida — que es extraordinaria — sino el ritmo. Nadie tiene prisa visible. Los camareros no te miran con esa cara de "¿y tú cuándo te vas?". La ciudad entera parece haber pactado que el tiempo es una sugerencia.

## Teotihuacán: madrugar por primera vez con entusiasmo real

Soy una persona que pone tres alarmas y desactiva las dos primeras sin recordarlo. Pero cuando el guía dijo que el globo despega a las 6:15 y que el amanecer sobre las pirámides desde el aire es "una de esas cosas que no se explican, se viven", me desperté a las 4:40 sin ayuda de nadie.

No exageraba. El amanecer sobre Teotihuacán desde un globo aerostático es el tipo de experiencia que te hace pensar que has estado tomando malas decisiones con tus mañanas durante años. Las pirámides del Sol y la Luna a esa hora, con la neblina todavía enredada entre los volcanes y la luz naranja rompiendo sobre la Calzada de los Muertos, son exactamente lo que parecen en las fotos más el ruido del quemador y el silencio de los otros diez pasajeros procesando lo mismo. {{CTA:activity:getyourguide:teotihuacan sunrise balloon:reserva el tour al amanecer con globo aerostático}} antes de que llegues a la ciudad — los cupos se van rápido y no hay plan B que valga lo mismo.

Cuando aterrizamos nos dieron champán y tamales. Eran las 8 de la mañana. Tomé los dos sin cuestionarme nada.

## La Casa Azul y la lección de no improvisar en Coyoacán

Cometí el error clásico: llegar a la Casa Azul sin entrada reservada un sábado de marzo. La cola daba la vuelta a la manzana y un señor con gorra me explicó con detalle clínico que llevaba noventa minutos ahí y había avanzado siete metros. Me senté en el parque de Coyoacán a comer una tostada de tinga y reconsiderar mis decisiones vitales.

Volví al día siguiente con entrada anticipada. La diferencia es absoluta: entras directo, el ritmo es otro, y puedes quedarte el tiempo que quieras delante de los corsés pintados, los diarios y los cuadros sin que la presión de la cola te empuje hacia la salida. {{CTA:tickets:tiqets:frida kahlo museum skip:compra la entrada con antelación}} y llega temprano de todos modos, porque el jardín a primera hora tiene una luz que Frida habría aprobado.

## Día de Muertos: cuando la ciudad cambia de frecuencia

No estaba en CDMX durante los días de Muertos — llegué en febrero — pero hablé con tres personas distintas que sí estuvieron y las tres usaron la misma palabra: "inexplicable". No inexplicable de forma turística. Inexplicable de verdad, como cuando algo es tan distinto a lo que esperabas que tu sistema de referencia simplemente no sirve.

Las ofrendas en los mercados, el olor a cempasúchil en toda la Colonia Guerrero, la gente visitando cementerios con mole y música como si fuera la cosa más natural del mundo — que en México lo es — son el tipo de escena que entiende diferente dependiendo de si la ves desde afuera o desde dentro. {{CTA:activity:getyourguide:dia muertos mexico city tour:reserva un tour nocturno especial}} con guía local cambia completamente el ángulo: hay contexto, hay historia familiar detrás de cada altar, y hay alguien que te explica qué estás viendo sin convertirlo en espectáculo.

CDMX es de esas ciudades que no se visitan una sola vez. La primera vez entiendes la superficie. La segunda vez empiezas a entender el ritmo. La tercera ya no puedes explicarle a nadie por qué necesitas volver, pero sabes exactamente por qué.`,
      en: `I arrived in Mexico City with a theory that I was going to be an exemplary digital nomad. I had a Notion calendar with time blocks, a "deep work" playlist and the addresses of three cafés in Roma Norte with good WiFi. The first had a "consumption only" sign on the terrace door that I interpreted as permission to order one coffee and stay for four hours. The second had WiFi with a password on a post-it so worn it was illegible from every possible angle. The third was perfect: power outlets, natural light, a decent flat white. It also had a communal table where a man in a straw hat asked if I was a graphic designer and we ended up talking about vernacular architecture until three in the afternoon. That went on for three days. I missed every deadline, ran out of WiFi credits at the hostel, and discovered that Mexico City actively conspires against productivity. I do not say this as a complaint.

## Roma-Condesa: the neighbourhood I went to work in and ended up just eating

Roma Norte has that specific quality of neighbourhoods that were cool, are still cool, and have grown comfortable with both without making any visible effort. The streets smell of jacaranda in February and of tacos de canasta at every hour. I arrived with my laptop in my bag and opened it exactly zero times in forty-eight hours.

The neighbourhood works like this: you walk towards any café and along the way you intercept a taquería, an artisan ice cream parlour and a corn stand that smells so good it is physically impossible to walk past. By the time you reach the café you have already eaten two things and your actual hunger is something else entirely. {{CTA:activity:viator:roma condesa food tour cdmx:A food tour through Roma-Condesa}} handles it with structure and saves you the hour of standing on corners deciding which way to go first.

What surprised me most about Roma-Condesa was not the food — which is extraordinary — but the pace. Nobody appears to be in a hurry. The waiters never give you that look that means "so when are you leaving?" The entire city seems to have agreed that time is a suggestion.

## Teotihuacán: the first morning I genuinely wanted to be awake before dawn

I am the kind of person who sets three alarms and silences the first two without remembering it. But when the guide said the balloon launches at 6:15 and that watching sunrise over the pyramids from the air is "one of those things you can't explain, only live," I woke up at 4:40 with no help from anyone.

He was not exaggerating. Sunrise over Teotihuacán from a hot air balloon makes you feel you have been making poor decisions with your mornings for years. The Pyramids of the Sun and Moon at that hour, with the mist still tangled between the volcanoes and orange light breaking across the Avenue of the Dead, are exactly what they look like in photos plus the sound of the burner and the silence of the other ten passengers processing the same thing. {{CTA:activity:getyourguide:teotihuacan sunrise balloon:book the sunrise tour with hot air balloon}} before you even arrive in the city — spots go fast and there is no plan B that comes close.

When we landed they gave us champagne and tamales. It was 8 in the morning. I accepted both without asking any questions.

## The Frida Kahlo Museum and the lesson of not improvising in Coyoacán

I made the classic mistake: showing up at La Casa Azul on a Saturday in March without a ticket. The queue wrapped around the block and a man in a baseball cap explained with clinical precision that he had been there for ninety minutes and had moved seven metres. I sat in Coyoacán park eating a tostada de tinga and reconsidering my life choices.

I went back the next day with a pre-booked ticket. The difference is total: you walk straight in, the rhythm is completely different, and you can stand as long as you want in front of the painted corsets, the diaries and the paintings without the pressure of the queue pushing you towards the exit. {{CTA:tickets:tiqets:frida kahlo museum skip:buy your ticket in advance}} and arrive early anyway, because the garden at that hour has a light that Frida would have approved of.

## Día de Muertos: when the city changes frequency

I was not in Mexico City during Día de Muertos — I arrived in February — but I spoke to three different people who were, and all three used the same word: "inexplicable." Not inexplicable in a tourist-brochure way. Genuinely inexplicable, the way something is when it is so unlike what you expected that your whole frame of reference stops working.

The altars in the markets, the smell of cempasúchil throughout Colonia Guerrero, the people visiting cemeteries with mole and music as if it were the most natural thing in the world — which in Mexico it is — are the kind of scene that reads differently depending on whether you are watching from outside or inside it. {{CTA:activity:getyourguide:dia muertos mexico city tour:book a special night tour}} with a local guide changes the angle entirely: there is context, there are family histories behind each altar, and there is someone explaining what you are seeing without turning it into a show.

Mexico City is one of those places you don't visit just once. The first time you understand the surface. The second time you start to understand the rhythm. By the third you can't explain to anyone why you need to go back, but you know exactly why you do.`,
    },
  },

  // ─────────────────────────────────────────────
  // 4. LISBON
  // ─────────────────────────────────────────────
  {
    id: 4,
    slug: "lisboa-guia-2026",
    enSlug: "lisbon-guide-2026",
    narrator: "sofia",
    heroImage: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200&q=80",
    city: "Lisboa",
    country: { es: "Portugal", en: "Portugal" },
    emoji: "🇵🇹",
    date: "2026-02-18",
    readTime: "8 min",
    category: "europe",
    title: {
      es: "Lisboa: El Último Gran Secreto del Atlántico (Que Ya No Es Tan Secreto)",
      en: "Lisbon: The Atlantic's Last Great Secret (That Everyone Has Already Discovered)",
    },
    subtitle: {
      es: "Fado, pastéis de nata, miradores y una ciudad que sigue siendo auténtica a pesar de que el mundo entero intente quedarse a vivir en ella",
      en: "Fado, pastéis de nata, viewpoints and a city that remains authentic despite the entire world trying to move in",
    },
    excerpt: {
      es: "Lisboa huele a sal, azulejos y buganvillas. La capital portuguesa tiene esa rareza de una ciudad que sigue siendo auténtica aunque medio mundo haya intentado apropiarse de ella en los últimos diez años.",
      en: "Lisbon smells of salt, azulejos and bougainvillea. The Portuguese capital has the rare quality of a city that remains authentic despite half the world trying to claim it as their own in the last decade.",
    },
    metaDescription: {
      es: "Guía honesta de Lisboa 2026: Alfama, Belém, Bairro Alto, LX Factory, fado y pastéis de nata — y dónde encontrarlos sin hacer cola.",
      en: "Honest Lisbon guide 2026: Alfama, Belém, Bairro Alto, LX Factory, fado and pastéis de nata — and where to find them without queuing.",
    },
    keywords: {
      es: ["Lisboa", "Portugal", "Alfama", "Belém", "fado", "pastel de nata", "NOS Alive"],
      en: ["Lisbon", "Portugal", "Alfama", "Belém", "fado", "pastel de nata", "NOS Alive"],
    },
    pointsOfInterest: [
      {
        name: "Alfama",
        type: "Barrio histórico",
        lat: 38.7140, lng: -9.1303,
        description: {
          es: "El barrio más antiguo de Lisboa, con callejuelas empedradas que siempre terminan en un mirador con vistas al Tajo — y casi siempre también en un gato que te mira como si fueras el turista número 847 del día.",
          en: "Lisbon's oldest neighbourhood, with cobblestone alleys that always end at a viewpoint overlooking the Tagus — and almost always also at a cat staring at you like you're tourist number 847 today.",
        },
        rating: 4.8,
        affiliateLinks: [
          { label: { es: "Tour con fado en vivo", en: "Tour with live fado" }, partner: "getyourguide", query: "alfama fado tour lisbon", type: "activity" },
          { label: { es: "Tuk-tuk por Alfama", en: "Tuk-tuk through Alfama" }, partner: "viator", query: "alfama tuk tuk lisbon", type: "activity" },
        ],
      },
      {
        name: "Mosteiro dos Jerónimos",
        type: "Monumento",
        lat: 38.6978, lng: -9.2066,
        description: {
          es: "Probablemente el edificio más impresionante de toda la península ibérica. Joya del gótico manuelino que hace que te preguntes qué estaba pasando por la cabeza del arquitecto para que saliera algo así.",
          en: "Probably the most impressive building on the entire Iberian Peninsula. A jewel of Manueline Gothic that makes you wonder what the architect was thinking to produce something this extraordinary.",
        },
        rating: 4.9, priceRange: "€12",
        affiliateLinks: [
          { label: { es: "Entrada prioritaria", en: "Priority ticket" }, partner: "tiqets", query: "jeronimos monastery lisbon", type: "tickets" },
          { label: { es: "Tour Belém completo", en: "Full Belém tour" }, partner: "civitatis", query: "belem tour lisbon", type: "activity" },
        ],
      },
      {
        name: "Torre de Belém",
        type: "Monumento",
        lat: 38.6916, lng: -9.2160,
        description: {
          es: "Icono de Lisboa que emerge del Tajo como un guardián de piedra. Patrimonio de la Humanidad y, en temporada alta, también Patrimonio de la Cola de Turistas.",
          en: "Lisbon's icon emerging from the Tagus like a stone guardian. UNESCO World Heritage and, in high season, also a Heritage Site of Tourist Queuing.",
        },
        rating: 4.6, priceRange: "€6",
        affiliateLinks: [
          { label: { es: "Entrada rápida", en: "Fast-track entry" }, partner: "tiqets", query: "torre belem ticket", type: "tickets" },
        ],
      },
      {
        name: "LX Factory",
        type: "Mercado",
        lat: 38.7037, lng: -9.1791,
        description: {
          es: "Antigua fábrica textil reconvertida en espacio hipster con mercado vintage, restaurantes y conciertos. El tipo de lugar que todavía vale la pena antes de que se convierta completamente en lo que intenta no ser.",
          en: "Former textile factory converted into a hipster space with a vintage market, restaurants and concerts. The kind of place still worth visiting before it fully becomes what it's trying not to be.",
        },
        rating: 4.5,
        affiliateLinks: [
          { label: { es: "Tour gastronomía Lisboa", en: "Lisbon food tour" }, partner: "getyourguide", query: "lisbon food tour lx factory", type: "activity" },
          { label: { es: "Restaurantes Lisboa", en: "Lisbon restaurants" }, partner: "thefork", query: "lx factory lisbon", type: "restaurant" },
        ],
      },
      {
        name: "Time Out Market",
        type: "Gastronómico",
        lat: 38.7067, lng: -9.1451,
        description: {
          es: "El mejor mercado gastronómico de Europa con los chefs más famosos de Portugal bajo un mismo techo. Donde el turismo gastronómico alcanza su forma más concentrada y más deliciosa.",
          en: "Europe's best food market with Portugal's most famous chefs all under one roof. Where gastronomic tourism reaches its most concentrated and most delicious form.",
        },
        rating: 4.7,
        affiliateLinks: [
          { label: { es: "Food tour mercados", en: "Market food tour" }, partner: "viator", query: "lisbon market food tour", type: "activity" },
        ],
      },
    ],
    events: [
      {
        name: "NOS Alive",
        type: "festival",
        date: "9–11 Jul 2026",
        venue: "Passeio Marítimo de Algés",
        urgency: true,
        description: {
          es: "Florence + The Machine y Nick Cave & The Bad Seeds encabezan el cartel, con Twenty One Pilots, Lorde, Foo Fighters, Pixies y Wolf Alice como refuerzos de lujo. La combinación perfecta de música en directo, calor portugués y brisa del río — hasta que te das cuenta de que llevas siete horas de pie y los pies ya no te pertenecen.",
          en: "Florence + The Machine and Nick Cave & The Bad Seeds headline, with Twenty One Pilots, Lorde, Foo Fighters, Pixies and Wolf Alice in strong support. The perfect combination of live music, Portuguese heat and river breeze — until you realise you've been standing for seven hours and your feet no longer belong to you.",
        },
        affiliateLinks: [
          { label: { es: "Entradas NOS Alive 2026", en: "NOS Alive 2026 tickets" }, partner: "ticketmaster", query: "nos alive 2026 florence machine nick cave lisbon", type: "tickets" },
          { label: { es: "Reventa verificada", en: "Verified resale" }, partner: "stubhub", query: "nos alive festival 2026 florence lorde foo fighters", type: "tickets" },
          { label: { es: "Experiencia festival Lisboa", en: "Lisbon festival experience" }, partner: "getyourguide", query: "lisbon music festival experience nos alive", type: "activity" },
        ],
      },
      {
        name: "Festas de Lisboa",
        type: "cultural",
        date: "Jun 2026",
        venue: "Toda la ciudad",
        urgency: false,
        description: {
          es: "Las fiestas de Santo António llenan cada rincón de Lisboa con sardinas a la brasa, marchas populares y bailes en la calle. En junio, Lisboa huele a carbón y a verano, y el olor es absolutamente perfecto — aunque llegues oliendo igual el resto de la semana.",
          en: "The Santo António festivals fill every corner of Lisbon with grilled sardines, popular marches and street dancing. In June, Lisbon smells of charcoal and summer, which is absolutely perfect — though you'll carry the same smell for the rest of the week.",
        },
        affiliateLinks: [
          { label: { es: "Tour Festas de Lisboa", en: "Festas de Lisboa tour" }, partner: "civitatis", query: "festas lisboa santo antonio junho", type: "activity" },
          { label: { es: "Experiencia gastronómica sardinas", en: "Sardines gastronomic experience" }, partner: "getyourguide", query: "lisbon sardines festival food tour june", type: "activity" },
        ],
      },
      {
        name: "Maratón de Lisboa",
        type: "sport",
        date: "Oct 2026",
        venue: "Centro Lisboa",
        urgency: false,
        description: {
          es: "Una de las maratones más bonitas del mundo, con el Tajo siempre a la vista. El único contexto en el que subir todas las colinas de Lisboa parece una decisión voluntaria y positiva — o al menos, el único en el que nadie te mirará raro por hacerlo corriendo.",
          en: "One of the world's most beautiful marathons, with the Tagus always in view. The only context in which climbing all of Lisbon's hills feels like a voluntary and positive decision — or at least the only one where nobody looks at you oddly for doing it at a run.",
        },
        affiliateLinks: [
          { label: { es: "Inscripción Maratón Lisboa", en: "Lisbon Marathon registration" }, partner: "getyourguide", query: "lisbon marathon 2026 registration", type: "activity" },
          { label: { es: "Tour running Lisboa", en: "Lisbon running tour" }, partner: "viator", query: "lisbon running tour marathon", type: "activity" },
        ],
      },
    ],
    services: {
      flights: ["skyscanner", "kiwi"],
      hotels: ["booking", "hostelworld", "vrbo"],
      cars: ["discovercars", "rentalcars", "autoeurope", "localrent"],
      activities: ["getyourguide", "viator", "tiqets", "civitatis", "klook"],
      restaurants: ["thefork", "opentable"],
      insurance: ["safetywing", "worldnomads"],
      esim: ["airalo", "holafly", "saily", "yesim"],
      transfers: ["intui", "welcomepickups", "gettransfer", "indrive"],
    },
    content: {
      es: `Tenía cuarenta y siete restaurantes en la lista de Lisboa. Cuarenta y siete. Organizados por barrio, con horario de apertura, especialidad principal y una columna de "urgencia" que yo misma había creado para distinguir los imprescindibles de los meramente importantes. El primer día caminé durante veinticinco minutos hacia el primero de la lista, un sitio en Mouraria que servía bacalhau à brás que según varios blogs era "transformador". Pasé por delante del Bar do Cais cerca de Cais do Sodré, vi que tenía tres taburetes libres junto a la barra y una pizarra con el menú del día por nueve euros, y entré. Cuatro días después seguía yendo. La lista de cuarenta y siete restaurantes existe todavía en mi Notion, inmaculada, sin una sola tilde en la columna de "visitado". No tengo ningún arrepentimiento.

## Alfama: subir sin prisa y con calzado adecuado

Alfama es el barrio más fotografiado de Lisboa y también el que más gente abandona a mitad de cuesta con cara de haber tomado una decisión equivocada. Los adoquines son hermosos y resbaladizos en igual medida. Yo subí un martes por la mañana, cuando los grupos de tour todavía estaban desayunando, y el barrio tenía esa quietud específica de los lugares que saben que no necesitan esforzarse.

El fado en Alfama es otro asunto. Hay versiones para turistas y hay versiones que son casi un accidente: entras a tomar una ginjinha y alguien empieza a cantar porque tiene ganas. La diferencia se nota en el silencio del público. {{CTA:activity:getyourguide:alfama fado tour lisbon:Un tour por el Alfama con fado en vivo}} con un guía local ayuda a distinguir uno de otro y a entender qué estás escuchando antes de que empiece la música, que es cuando el fado tiene más sentido.

## El Jerónimos y la trampa de no reservar

El Monasterio de los Jerónimos es una de esas cosas que ves en fotografía y piensas que la realidad no puede igualar. En este caso la realidad la iguala y la supera: el claustro manuelino tiene una escala que las fotos no consiguen transmitir y unos detalles en piedra que justifican quedarse parado delante de cualquier columna durante diez minutos. El problema es la cola. En temporada media, que en Lisboa ya empieza en marzo, la espera puede ser de hora y media al sol. {{CTA:tickets:tiqets:jeronimos monastery lisbon:reserva tu entrada con antelación}} y llega con diez minutos de margen — la fila de entradas anticipadas es una experiencia radicalmente distinta.

Belém merece medio día entero. El pastel de nata de la Pastéis de Belém no admite debate — hay cola también, pero es una cola que va a una velocidad razonable y al final hay una mesa con azulejo y mantequilla — y el paseo junto al Tajo a las seis de la tarde tiene esa luz específica de las ciudades atlánticas que solo se explica viviéndola.

## LX Factory y el mercado como destino, no como desvío

LX Factory es uno de esos espacios que empezaron como alternativa y ahora son destino principal. Los domingos está lleno, pero la arquitectura industrial, los murales y la librería Ler Devagar — con su árbol interior y sus escaleras de caracol — son de las cosas más bonitas de Lisboa y no han cambiado por el éxito.

{{CTA:activity:getyourguide:lisbon food tour lx factory:Un food tour por Lisboa}} con salida desde el LX Factory es la mejor forma de entender qué está pasando en la cocina lisboeta contemporánea sin tener que investigarlo por tu cuenta durante horas.

## Los alrededores: Sintra y el dilema del coche

Sintra desde Lisboa es perfecta en teoría y caótica en práctica: el tren te deja en el pueblo, pero las villas están repartidas por colinas y la única forma razonable de verlas todas sin morir es con coche. Fui en coche un miércoles y fue la decisión correcta: llegué al Palacio da Pena antes de que llegara el primer grupo de tour y tuve treinta minutos de soledad relativa con los azulejos y las almenas kitsch que son, objetivamente, la cosa más extravagante construida en el siglo XIX europeo.

{{CTA:service:discovercars:lisbon:alquila un coche}} para los alrededores cambia completamente el ritmo de la semana — con base en Lisboa y coche dos días, ves el doble y comes mejor.

El Bar do Cais, por si alguien se lo pregunta, servía mejillones el martes, caldo verde el miércoles, bacalhau el jueves y una empanada de atún el viernes que no está en ninguna guía y que prefiero que siga sin estar.`,
      en: `I had forty-seven restaurants on my Lisbon list. Forty-seven. Organised by neighbourhood, with opening hours, main specialty and an "urgency" column I had created myself to distinguish the essential from the merely important. On the first day I walked twenty-five minutes towards the first place on the list, supposedly serving a "transformative" bacalhau à brás according to several food blogs. I walked past the Bar do Cais near Cais do Sodré, saw three free stools at the bar and a chalkboard with the daily menu for nine euros, and went in. Four days later I was still going. The list of forty-seven restaurants still exists in my Notion, pristine, without a single tick in the "visited" column. I have zero regrets.

## Alfama: Climb Slowly and Wear Appropriate Footwear

Alfama is Lisbon's most photographed neighbourhood and also the one where the most people abandon the climb halfway up with the expression of someone who has made a poor decision. The cobblestones are beautiful and equally slippery. I went up on a Tuesday morning when the tour groups were still at breakfast, and the neighbourhood had that specific quietness of places that know they don't need to try.

Fado in Alfama is a different matter. There are tourist versions and there are versions that feel almost accidental: you go in for a ginjinha and someone starts singing because they feel like it. The difference shows in the audience's silence. {{CTA:activity:getyourguide:alfama fado tour lisbon:A tour through Alfama with live fado}} with a local guide helps you tell one from the other and understand what you are hearing before the music starts, which is when fado makes the most sense.

## The Jerónimos and the Trap of Not Booking Ahead

The Jerónimos Monastery is one of those things you see in photographs and think reality cannot possibly match. In this case reality matches and then raises it: the Manueline cloister has a scale that photos cannot convey and stone details that justify standing in front of any single column for ten minutes. The problem is the queue. In mid-season, which in Lisbon now starts in March, the wait can be ninety minutes in direct sun. {{CTA:tickets:tiqets:jeronimos monastery lisbon:book your ticket in advance}} and arrive ten minutes early — the pre-booked entry line is a completely different experience.

Belém deserves a full half day. The pastel de nata at Pastéis de Belém is not up for debate — there is a queue there too, but it moves at a reasonable speed and at the end there is a tiled table and butter — and the walk along the Tagus at six in the evening has that specific Atlantic-city light that can only be explained by experiencing it.

## LX Factory and the Market as Destination, Not Detour

LX Factory is one of those spaces that started as an alternative and is now the main event. On Sundays it is packed, but the industrial architecture, the murals and the Ler Devagar bookshop — with its indoor tree and spiral staircase — are among the most beautiful things in Lisbon and haven't changed despite the success.

{{CTA:activity:getyourguide:lisbon food tour lx factory:A food tour through Lisbon}} starting from LX Factory is the best way to understand what is happening in contemporary Lisbon cooking without having to research it yourself for hours.

## The Surroundings: Sintra and the Car Question

Sintra from Lisbon is perfect in theory and chaotic in practice: the train drops you in the village, but the palaces are scattered across hills and the only sensible way to see them all without suffering is by car. I drove on a Wednesday and it was the right call: I reached the Pena Palace before the first tour group arrived and had thirty minutes of relative solitude with the tiles and the kitsch battlements that are, objectively, the most extravagant thing built in nineteenth-century Europe.

{{CTA:service:discovercars:lisbon:rent a car}} for the surrounding area changes the whole pace of the week — based in Lisbon with a car for two days, you see twice as much and eat considerably better.

The Bar do Cais, for anyone wondering, served mussels on Tuesday, caldo verde on Wednesday, bacalhau on Thursday and a tuna empanada on Friday that is in no guidebook anywhere, and I prefer it stays that way.`,
    },
  },
  // ─────────────────────────────────────────────
  // 5. ROME
  // ─────────────────────────────────────────────
  {
    id: 5,
    slug: "roma-guia-completa-2026",
    enSlug: "rome-complete-guide-2026",
    narrator: "carmen",
    heroImage: "https://images.unsplash.com/photo-1555992336-03a23c7b20ee?w=1200&q=80",
    city: "Roma",
    country: { es: "Italia", en: "Italy" },
    emoji: "🇮🇹",
    date: "2026-02-05",
    readTime: "9 min",
    category: "europe",
    title: {
      es: "Roma: Ciudad Eterna, Colas Eternas y Pasta que Vale Cada Euro",
      en: "Rome: The Eternal City, the Eternal Queue, and Pasta Worth Every Cent",
    },
    subtitle: {
      es: "El Coliseo, el Vaticano, la carbonara más cara de tu vida y el arte de perderte en el Trastevere sin admitirlo",
      en: "The Colosseum, the Vatican, the most expensive carbonara of your life and the art of getting lost in Trastevere without admitting it",
    },
    excerpt: {
      es: "Roma no tiene una historia — Roma es la historia. Y tú serás otro turista sudando en ella, completamente encantado.",
      en: "Rome doesn't have a history — Rome is history. And you'll be just another tourist sweating through it, completely enchanted.",
    },
    metaDescription: {
      es: "Guía de Roma 2026: Coliseo, Vaticano, Capilla Sixtina, Trastevere, Panteón. Entradas sin colas, porque la vida es corta.",
      en: "Rome guide 2026: Colosseum, Vatican, Sistine Chapel, Trastevere, Pantheon. Skip-the-line tickets, because life is short and queues are not.",
    },
    keywords: {
      es: ["Roma", "Italia", "Coliseo", "Vaticano", "Trastevere", "Panteón", "pasta"],
      en: ["Rome", "Italy", "Colosseum", "Vatican", "Trastevere", "Pantheon", "pasta"],
    },
    pointsOfInterest: [
      {
        name: "Colosseo",
        type: "Arqueología",
        lat: 41.8902, lng: 12.4922,
        description: {
          es: "Dos mil años de historia y aún así más impresionante en persona que en cualquier foto. Las dos horas de cola son negociables con una reserva anticipada. Sin ella, son tuyas — disfrútalas.",
          en: "Two thousand years old and still more impressive in person than in any photo. The two-hour queue is negotiable — book ahead. Without a booking, the queue is yours to enjoy at full length.",
        },
        rating: 4.9, priceRange: "€18",
        affiliateLinks: [
          { label: { es: "Entrada sin cola", en: "Skip-the-line ticket" }, partner: "getyourguide", query: "colosseum rome skip line", type: "tickets" },
          { label: { es: "Tour Coliseo + Foro", en: "Colosseum + Forum tour" }, partner: "tiqets", query: "colosseum forum rome", type: "tickets" },
          { label: { es: "Tour guiado premium", en: "Premium guided tour" }, partner: "viator", query: "colosseum guided tour rome", type: "activity" },
        ],
      },
      {
        name: "Musei Vaticani",
        type: "Museo",
        lat: 41.9065, lng: 12.4534,
        description: {
          es: "La colección de arte más extraordinaria que ha reunido una institución religiosa. La Capilla Sixtina al final detiene la respiración — y las piernas, después de tres kilómetros de pasillos.",
          en: "The most extraordinary art collection ever assembled by a religious institution. The Sistine Chapel at the end takes your breath away — as do your legs, after three kilometres of corridors.",
        },
        rating: 4.8, priceRange: "€20",
        affiliateLinks: [
          { label: { es: "Entrada + Capilla Sixtina", en: "Ticket + Sistine Chapel" }, partner: "tiqets", query: "vatican museums sistine chapel", type: "tickets" },
          { label: { es: "Tour guiado Vaticano", en: "Guided Vatican tour" }, partner: "civitatis", query: "vatican museums sistine chapel tour", type: "activity" },
        ],
      },
      {
        name: "Trastevere",
        type: "Barrio",
        lat: 41.8896, lng: 12.4696,
        description: {
          es: "El barrio donde Roma finge no ser un destino turístico. Restaurantes en la calle, mercados matutinos e iglesias medievales — sin colas, que ya es un milagro.",
          en: "The neighbourhood where Rome pretends not to be a tourist destination. Street restaurants, morning markets and medieval churches with no queues — which is itself something of a miracle.",
        },
        rating: 4.7,
        affiliateLinks: [
          { label: { es: "Tour nocturno Trastevere", en: "Trastevere night tour" }, partner: "getyourguide", query: "trastevere rome night tour", type: "activity" },
          { label: { es: "Reservar restaurante", en: "Book a restaurant" }, partner: "opentable", query: "trastevere rome", type: "restaurant" },
        ],
      },
      {
        name: "Pantheon",
        type: "Monumento",
        lat: 41.8986, lng: 12.4768,
        description: {
          es: "El edificio mejor conservado de la antigüedad, todavía en uso como iglesia. El óculo lleva 1.900 años abierto al cielo — y cuando llueve, el suelo se drena solo. Roma pensó en todo.",
          en: "The best-preserved building from antiquity, still in use as a church. The oculus has been open to the sky for 1,900 years — and when it rains, the floor drains itself. Rome thought of everything.",
        },
        rating: 4.8, priceRange: "€5",
        affiliateLinks: [
          { label: { es: "Entrada Panteón", en: "Pantheon ticket" }, partner: "tiqets", query: "pantheon rome ticket", type: "tickets" },
        ],
      },
      {
        name: "Villa Borghese",
        type: "Museo",
        lat: 41.9137, lng: 12.4922,
        description: {
          es: "La galería Borghese alberga esculturas de Bernini que parecen desafiar las leyes de la física. Acceso limitado y reserva obligatoria — porque si todo el mundo pudiera entrar sin reservar, sería el Coliseo pero con mármol.",
          en: "The Borghese Gallery houses Bernini sculptures that seem to defy the laws of physics. Limited access and advance booking required — because if everyone could walk in, it would be the Colosseum but with marble.",
        },
        rating: 4.9, priceRange: "€15",
        affiliateLinks: [
          { label: { es: "Galería Borghese", en: "Borghese Gallery" }, partner: "tiqets", query: "borghese gallery rome", type: "tickets" },
          { label: { es: "Tour guiado", en: "Guided tour" }, partner: "viator", query: "borghese gallery guided tour rome", type: "activity" },
        ],
      },
    ],
    events: [
      {
        name: "Maratón de Roma",
        type: "sport",
        date: "Mar 2026",
        venue: "Centro histórico",
        urgency: false,
        description: {
          es: "42 kilómetros a través de los monumentos más icónicos del mundo. La más bonita del circuito internacional — y también la más cruel: en marzo ya hace calor, el adoquín romano no perdona las rodillas y en el kilómetro 30 el Coliseo te mira sin compasión.",
          en: "42 kilometres through the world's most iconic monuments. The most beautiful on the international circuit — and also the most punishing: by March it's already warm, Roman cobblestones have no mercy on your knees, and at kilometre 30 the Colosseum stares at you without sympathy.",
        },
        affiliateLinks: [
          { label: { es: "Inscripción Maratón de Roma", en: "Rome Marathon entry" }, partner: "getyourguide", query: "rome marathon 2026 entry", type: "activity" },
          { label: { es: "Tour running monumentos Roma", en: "Rome monuments running tour" }, partner: "viator", query: "rome running tour monuments marathon", type: "activity" },
        ],
      },
      {
        name: "Estate Romana",
        type: "cultural",
        date: "Jun–Sep 2026",
        venue: "Teatros y espacios al aire libre",
        urgency: false,
        description: {
          es: "Festivales de música, teatro y cine al aire libre con el Coliseo o el Foro Romano de fondo. Básicamente lo que ocurre cuando vives en el mejor decorado de la historia y decides que todo el mundo merece enterarse — con una copa de vino en la mano, por supuesto.",
          en: "Music, theatre and open-air cinema with the Colosseum or Roman Forum as backdrop. What happens when you live inside the greatest film set in history and decide everyone deserves to know — with a glass of wine in hand, naturally.",
        },
        affiliateLinks: [
          { label: { es: "Entradas Estate Romana", en: "Estate Romana tickets" }, partner: "ticketmaster", query: "estate romana roma 2026 concerti", type: "tickets" },
          { label: { es: "Eventos culturales Roma verano", en: "Rome summer cultural events" }, partner: "getyourguide", query: "rome summer cultural events outdoor", type: "activity" },
        ],
      },
      {
        name: "Settimana della Cucina Italiana",
        type: "gastronomy",
        date: "Nov 2026",
        venue: "Restaurantes de toda Roma",
        urgency: false,
        description: {
          es: "La semana de la gastronomía italiana con menús especiales en los mejores restaurantes de la capital. Ya que estás, pide la carbonara. Técnicamente solo lleva huevo, guanciale y queso — pero te costará 18€ y será la mejor decisión de tu vida adulta.",
          en: "Italian gastronomy week with special menus at the capital's finest restaurants. Go ahead and order the carbonara. It's technically just egg, guanciale and cheese — but it will cost you €18 and remain the best decision of your adult life.",
        },
        affiliateLinks: [
          { label: { es: "Reservar mesa Roma", en: "Book a table Rome" }, partner: "opentable", query: "rome best restaurants italian cuisine 2026", type: "restaurant" },
          { label: { es: "Tour gastronómico Roma", en: "Rome gastronomic tour" }, partner: "civitatis", query: "tour gastronomico roma pasta carbonara", type: "activity" },
        ],
      },
    ],
    services: {
      flights: ["skyscanner", "kiwi"],
      hotels: ["booking", "hostelworld", "vrbo"],
      cars: ["discovercars", "rentalcars", "autoeurope", "localrent"],
      activities: ["getyourguide", "viator", "tiqets", "civitatis", "klook"],
      restaurants: ["thefork", "opentable"],
      insurance: ["safetywing", "worldnomads"],
      esim: ["airalo", "holafly", "saily", "yesim"],
      transfers: ["intui", "welcomepickups", "gettransfer", "indrive"],
    },
    content: {
      es: `Fui a ver el Coliseo el primer día, como hace todo el mundo. Tomé el metro desde Termini, salí a la superficie y ahí estaba: 2.000 años de historia rodeada de vendedores de selfie-sticks y el calor de julio que aplana cualquier romanticismo. Impresionante, monumental, ineludible.

Lo que no estaba planeado era la librería. Pasé por via della Croce de camino al Trastevere, vi en el escaparate una primera edición de Lampedusa, entré "un momento" y salí dos horas después con tres libros que tenían que ir en el avión de vuelta en la maleta facturada y una conversación pendiente conmigo misma sobre mis prioridades viajeras. Roma me hace eso.

El Coliseo sigue siendo el símbolo definitivo de Roma y vale cada euro. {{CTA:tickets:getyourguide:colosseum rome skip line:Reserva tu entrada con acceso prioritario}} — las colas sin entrada previa en agosto superan las dos horas, y hay mejores formas de usar ese tiempo en esta ciudad. El combinado con el Foro Romano y el Palatino convierte la visita en un paseo por 2.700 años de historia, desde la Roma de los Reyes hasta la del Renacimiento tardío. El Foro al atardecer, cuando los turistas van desapareciendo y la luz dorada golpea los mármoles y las columnas, es uno de los momentos más cinematográficos de Europa.

El Vaticano merece un día entero, y un día entero aquí significa llegar con energía. La Capilla Sixtina, al final de dos kilómetros de pasillos con la Colección Vaticana, detiene la respiración. {{CTA:activity:civitatis:vatican museums sistine chapel tour:Un tour guiado por los Museos Vaticanos}} te da el contexto histórico para entender qué estás mirando — hay diferencia entre ver el techo de la Sixtina y entender el techo de la Sixtina, y la diferencia la marca saber que Michelangelo lo pintó de pie, no tumbado, en contra de su voluntad y con el cuello roto durante cuatro años.

El Trastevere es el barrio donde Roma se relaja. Callejuelas medievales, restaurantes con mesas que invaden la calle, mercados de mañana que huelen a ricotta fresca y fruta de temporada. La mejor carbonara que comí en Roma no tenía nombre en TripAdvisor y me la recomendó una mujer mayor en la cola del supermercado, que es exactamente el tipo de información que no aparece en ninguna guía.

El Panteón es posiblemente el edificio mejor conservado de la Antigüedad y sigue funcionando como iglesia activa, lo que significa que Adriano lleva ganando el debate arquitectónico desde el año 125. {{CTA:tickets:tiqets:pantheon rome ticket:Compra tu entrada al Panteón}} — desde que instituyeron la tarifa de entrada las colas han bajado significativamente, y el momento de estar bajo el óculo con la luz cayendo vertical es de esos que no se olvidan aunque hayas leído todo sobre él antes de llegar. Quizás especialmente si has leído todo sobre él antes de llegar.

Para organizar el tiempo en la ciudad con sensatez, {{CTA:activity:viator:colosseum guided tour rome:un tour guiado que combine el Coliseo, el Foro y el Palatino}} en una mañana es la opción más eficiente. La alternativa es ir solo, perderse, acabar comiendo un gelato de limón en los escalones de una fuente barroca y decidir que así también funciona perfectamente. En Roma, las dos opciones acaban siendo la misma historia.`,
      en: `I went to see the Colosseum on the first day, as everyone does. I took the metro from Termini, surfaced into the open and there it was: 2,000 years of history surrounded by selfie-stick vendors and the kind of July heat that flattens all romanticism. Impressive, monumental, unavoidable.

What wasn't planned was the bookshop. I was walking along Via della Croce on the way to Trastevere, noticed a first edition Lampedusa in the window, went in "for a moment" and emerged two hours later with three books that were going to require checking a separate bag, plus a pending conversation with myself about my travel priorities. Rome does this to me.

The Colosseum remains the ultimate symbol of Rome and is worth every euro. {{CTA:tickets:getyourguide:colosseum rome skip line:Book your priority-access ticket}} — queues without advance tickets in August exceed two hours, and there are better uses of that time in this city. The combination ticket with the Roman Forum and Palatine Hill turns the visit into a walk through 2,700 years of history, from the Rome of the Kings to the late Renaissance. The Forum at dusk, as tourists thin out and golden light catches the marble and columns, is one of the most cinematic moments in Europe.

The Vatican deserves a full day, and a full day here means arriving with energy. The Sistine Chapel, at the end of two kilometres of corridors through the Vatican Collection, stops your breath. {{CTA:activity:civitatis:vatican museums sistine chapel tour:A guided tour of the Vatican Museums}} gives you the historical context to understand what you're looking at — there's a difference between seeing the Sistine ceiling and understanding it, and the difference lies in knowing that Michelangelo painted it standing, not lying down, against his will, with a broken neck, for four years.

Trastevere is the neighbourhood where Rome relaxes. Medieval alleyways, restaurants with tables spilling into the street, morning markets that smell of fresh ricotta and seasonal fruit. The best carbonara I ate in Rome had no TripAdvisor profile and was recommended to me by an older woman in a supermarket queue — exactly the kind of information that appears in no guidebook.

The Pantheon is possibly the best-preserved building from antiquity and still functions as an active church, which means Hadrian has been winning the architecture debate since 125 AD. {{CTA:tickets:tiqets:pantheon rome ticket:Buy your Pantheon ticket}} — since the entry fee was introduced the queues have dropped significantly, and the moment of standing beneath the oculus with light falling vertically through it is one of those that doesn't leave you, even if you've read everything about it before arriving. Perhaps especially if you've read everything about it.

To organise your time in the city sensibly, {{CTA:activity:viator:colosseum guided tour rome:a guided tour combining the Colosseum, the Forum and Palatine Hill}} in one morning is the most efficient option. The alternative is going solo, getting lost, ending up eating lemon gelato on the steps of a Baroque fountain and deciding that works perfectly well too. In Rome, both options tend to become the same story.`,
    },
  },

  // ─────────────────────────────────────────────
  // 6. NEW YORK
  // ─────────────────────────────────────────────
  {
    id: 6,
    slug: "nueva-york-guia-2026",
    enSlug: "new-york-guide-2026",
    narrator: "marcos",
    heroImage: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&q=80",
    city: "New York",
    country: { es: "Estados Unidos", en: "United States" },
    emoji: "🇺🇸",
    date: "2026-02-10",
    readTime: "10 min",
    category: "america",
    title: {
      es: "Nueva York: La Ciudad que Nunca Duerme ni te Deja Dormir a Ti",
      en: "New York: The City That Never Sleeps and Doesn't Let You Either",
    },
    subtitle: {
      es: "Central Park, el MoMA, el Brooklyn Bridge y la mejor pizza del mundo — aunque técnicamente es la mejor porque llevas seis horas sin comer",
      en: "Central Park, MoMA, the Brooklyn Bridge and the world's best pizza — technically true because you haven't eaten in six hours",
    },
    excerpt: {
      es: "Nueva York no es una ciudad. Es un experimento en curso sobre hasta qué punto un ser humano puede sobrevivir a base de bagels, jazz de metro y sueños a €3.000 al mes.",
      en: "New York is not a city. It's an ongoing experiment into how far a human being can survive on bagels, subway jazz and dreams at $3,000 a month.",
    },
    metaDescription: {
      es: "Guía de Nueva York 2026: Central Park, MET, Brooklyn Bridge, High Line, MoMA. Entradas y tours — porque el tiempo en NYC cuesta más que en cualquier otro sitio.",
      en: "New York guide 2026: Central Park, MET, Brooklyn Bridge, High Line, MoMA. Tickets and tours — because time in NYC costs more than anywhere else on earth.",
    },
    keywords: {
      es: ["Nueva York", "Nueva York 2026", "Brooklyn Bridge", "MoMA", "High Line", "Central Park"],
      en: ["New York", "NYC 2026", "Brooklyn Bridge", "MoMA", "High Line", "Central Park"],
    },
    pointsOfInterest: [
      {
        name: "Central Park",
        type: "Parque",
        lat: 40.7829, lng: -73.9654,
        description: {
          es: "341 hectáreas donde los corredores al amanecer comparten espacio con conciertos espontáneos, bodas de película y ardillas que han perdido completamente el miedo al hombre.",
          en: "341 hectares where dawn runners share space with spontaneous concerts, movie-set weddings and squirrels that have entirely lost their fear of humans.",
        },
        rating: 4.8,
        affiliateLinks: [
          { label: { es: "Tour en bicicleta", en: "Bike tour" }, partner: "getyourguide", query: "central park bike tour new york", type: "activity" },
          { label: { es: "Tour a pie", en: "Walking tour" }, partner: "viator", query: "central park walking tour nyc", type: "activity" },
        ],
      },
      {
        name: "The Metropolitan Museum of Art",
        type: "Museo",
        lat: 40.7794, lng: -73.9632,
        description: {
          es: "El MET es una jornada entera. Más de dos millones de obras que abarcan 5.000 años de historia del arte, por si tenías algo mejor que hacer este martes.",
          en: "The MET is an entire day. Over two million works spanning 5,000 years of art history, in case you had something better to do this Tuesday.",
        },
        rating: 4.9, priceRange: "$30",
        affiliateLinks: [
          { label: { es: "Entrada MET", en: "MET ticket" }, partner: "tiqets", query: "metropolitan museum new york", type: "tickets" },
          { label: { es: "Tour highlights", en: "Highlights tour" }, partner: "getyourguide", query: "met museum highlights tour nyc", type: "activity" },
        ],
      },
      {
        name: "Brooklyn Bridge",
        type: "Icónico",
        lat: 40.7061, lng: -73.9969,
        description: {
          es: "Crúzalo a pie al amanecer, con Manhattan iluminándose a tu espalda. Después explora Dumbo para las mejores vistas — y para convencerte de que podrías vivir en Brooklyn, cosa que no puedes permitirte.",
          en: "Walk across it at sunrise, with Manhattan lighting up behind you. Then explore Dumbo for the best views — and to convince yourself you could live in Brooklyn, which you cannot afford.",
        },
        rating: 4.8,
        affiliateLinks: [
          { label: { es: "Tour Brooklyn + puente", en: "Brooklyn + bridge tour" }, partner: "civitatis", query: "brooklyn bridge walking tour", type: "activity" },
        ],
      },
      {
        name: "The High Line",
        type: "Parque",
        lat: 40.7480, lng: -74.0048,
        description: {
          es: "Una vía de tren abandonada convertida en parque elevado de 2,3 km con arte contemporáneo y vistas al Hudson. Nueva York tomó algo que no funcionaba y lo convirtió en algo que todos envidian. Como siempre.",
          en: "An abandoned railway converted into a 2.3km elevated park with contemporary art and Hudson River views. New York took something that didn't work and turned it into something everyone envies. As always.",
        },
        rating: 4.7,
        affiliateLinks: [
          { label: { es: "Tour High Line + Chelsea", en: "High Line + Chelsea tour" }, partner: "viator", query: "high line chelsea market tour nyc", type: "activity" },
        ],
      },
      {
        name: "MoMA",
        type: "Museo",
        lat: 40.7614, lng: -73.9776,
        description: {
          es: "La mayor colección de arte moderno del mundo. Van Gogh, Picasso, Warhol y Pollock en el mismo edificio, más un café donde un sándwich cuesta $22. Precio de Manhattan.",
          en: "The world's greatest collection of modern art. Van Gogh, Picasso, Warhol and Pollock in the same building, plus a café where a sandwich costs $22. Manhattan pricing.",
        },
        rating: 4.8, priceRange: "$30",
        affiliateLinks: [
          { label: { es: "Entrada MoMA", en: "MoMA ticket" }, partner: "tiqets", query: "moma new york ticket", type: "tickets" },
          { label: { es: "Tour guiado MoMA", en: "MoMA guided tour" }, partner: "getyourguide", query: "moma new york guided tour", type: "activity" },
        ],
      },
    ],
    events: [
      {
        name: "New York Fashion Week",
        type: "cultural",
        date: "Feb & Sep 2026",
        venue: "Manhattan",
        urgency: true,
        description: {
          es: "La semana de la moda más influyente del mundo. Shows, pop-ups y fiestas que transforman Manhattan — y hacen que conseguir taxi en Midtown sea básicamente imposible. Tú llevarás tu mejor outfit. Nadie te lo dirá, pero lo notarán.",
          en: "The world's most influential fashion week. Shows, pop-ups and parties that transform Manhattan — and make getting a cab in Midtown essentially impossible. You'll wear your best outfit. Nobody will say anything, but they'll notice.",
        },
        affiliateLinks: [
          { label: { es: "Eventos Fashion Week NYC", en: "NYC Fashion Week events" }, partner: "stubhub", query: "new york fashion week 2026 shows", type: "tickets" },
          { label: { es: "Tour moda y diseño NYC", en: "NYC fashion and design tour" }, partner: "getyourguide", query: "new york fashion week tour design", type: "activity" },
        ],
      },
      {
        name: "NYC Marathon",
        type: "sport",
        date: "Nov 2026",
        venue: "5 distritos",
        urgency: true,
        description: {
          es: "La maratón más grande del mundo con 50.000 corredores atravesando los cinco distritos. La ciudad entera anima, para, llora un poco y aplaude a desconocidos por razones que no sabría explicar. Tú también lo harás. Es inevitable.",
          en: "The world's largest marathon with 50,000 runners crossing all five boroughs. The entire city cheers, stops, cries a little and applauds strangers for reasons it couldn't explain. You'll do the same. It's inevitable.",
        },
        affiliateLinks: [
          { label: { es: "Inscripción NYC Marathon", en: "NYC Marathon registration" }, partner: "ticketmaster", query: "new york city marathon 2026", type: "tickets" },
          { label: { es: "Tour running NYC 5 distritos", en: "NYC 5 boroughs running tour" }, partner: "viator", query: "new york marathon five boroughs tour spectator", type: "activity" },
        ],
      },
      {
        name: "New Year's Eve Times Square",
        type: "cultural",
        date: "31 Dic 2026",
        venue: "Times Square",
        urgency: true,
        description: {
          es: "La cuenta atrás más famosa del mundo. Un millón de personas de pie en el frío desde las seis de la tarde, sin baños disponibles, esperando una bola de cristal durante seis horas. Romántico, objetivamente, en el sentido más masoquista del término.",
          en: "The world's most famous countdown. A million people standing in the cold since six in the evening, with no available bathrooms, waiting six hours for a crystal ball. Objectively romantic, in the most masochistic sense of the word.",
        },
        affiliateLinks: [
          { label: { es: "Tour Nochevieja en NYC", en: "NYC New Year's Eve tour" }, partner: "viator", query: "new years eve times square tour 2026", type: "activity" },
          { label: { es: "Fiestas Nochevieja Nueva York", en: "New York New Year's Eve parties" }, partner: "getyourguide", query: "new york new years eve party times square", type: "activity" },
        ],
      },
    ],
    services: {
      flights: ["skyscanner", "kiwi"],
      hotels: ["booking", "hostelworld", "vrbo"],
      cars: ["discovercars", "rentalcars", "localrent"],
      activities: ["getyourguide", "viator", "tiqets", "civitatis", "klook"],
      restaurants: ["opentable", "thefork"],
      insurance: ["safetywing", "worldnomads"],
      esim: ["airalo", "holafly", "saily", "yesim"],
      transfers: ["intui", "welcomepickups", "gettransfer", "indrive"],
    },
    content: {
      es: `Fui a Nueva York a ver a Interpol en el Madison Square Garden. Eso era el plan.

El plan duró exactamente hasta que, buscando entradas de reventa a un precio razonable, alguien en el hostel de Brooklyn me mencionó que esa misma noche tocaba un cuarteto de jazz experimental en un sótano de Alphabet City que no tenía Instagram, no tenía web y al que se llegaba por una dirección garabateada en un papel. Fui. Era exactamente lo que esperaba que fuera: diez personas, una música que parecía una conversación privada entre instrumentos, y la convicción de que había encontrado el Nueva York que buscaba.

Interpol estaba increíble, por cierto. Pero las tres noches siguientes las pasé siguiendo listas de salas que me iban pasando en bares, y Nueva York cumplió con cada una. Bowery Ballroom, el mejor local de música en vivo que he pisado en mi vida. Baby's All Right en Brooklyn, donde el cartel de esa noche no estaba en ninguna lista de "mejores salas de la ciudad". Rough Trade NYC, librería y sala de conciertos en el mismo espacio, que debería ser ilegal de tan perfecta que es.

Nueva York, musicalmente, es el lugar más denso del planeta. Y para el resto: Central Park al amanecer, antes de que lleguen los ciclistas y los turistas con mapas, es el único momento en que la ciudad respira. 341 hectáreas de silencio relativo en el corazón de Manhattan. El MET abre a las 10 — {{CTA:tickets:tiqets:metropolitan museum new york:compra tu entrada al MET}} y date el día entero porque el ala egipcia sola se lleva dos horas y luego te das cuenta de que no has visto los impresionistas todavía y ya son las 5 y media.

El Brooklyn Bridge vale el caminarlo de extremo a extremo, pero caminalo de Manhattan a Brooklyn, no al revés, para tener la vista de los dos puentes y el skyline en frente. Dumbo al otro lado: las mejores fotos del puente con el Manhattan Bridge en el fondo, la pizza en Juliana's o Grimaldi's, el mercado de DUMBO los domingos.

The High Line es el proyecto de regeneración urbana más elegante del siglo XXI y es gratis — dos hechos que no deberían ser compatibles en Nueva York pero que lo son. 2,3 kilómetros de parque elevado sobre la antigua vía del tren del West Side, con arte contemporáneo y vistas al Hudson. Termina en el Meatpacking District, que tiene exactamente la energía que su nombre sugiere pero con más cocktail bars.

{{CTA:activity:getyourguide:met museum highlights tour nyc:Un tour guiado por el MET}} si quieres orientarte entre tanta magnificencia sin pasar las dos primeras horas mirando el mapa. También útil para saber de qué hablar en la cena, que aquí es una habilidad social necesaria.

{{CTA:service:skyscanner:new york:Volar a Nueva York}} desde Europa es un vuelo de 7-8 horas que merece más la pena en invierno, cuando los precios bajan y la ciudad tiene una energía completamente diferente. Aunque en verano, con el jazz en los parques y las terrazas de las azoteas, tampoco hay queja.`,
      en: `I went to New York to see Interpol at Madison Square Garden. That was the plan.

The plan lasted precisely until someone at the Brooklyn hostel mentioned that same evening there was an experimental jazz quartet playing in a basement in Alphabet City — no Instagram, no website, reachable only via an address scrawled on a piece of paper. I went. It was exactly what it sounded like: ten people, music that felt like a private conversation between instruments, and the conviction that I'd found the New York I was looking for.

Interpol was incredible, for the record. But I spent the next three nights following handwritten venue lists passed on in bars, and New York delivered every single time. Bowery Ballroom, the best live music venue I've ever set foot in. Baby's All Right in Brooklyn, where that night's lineup appeared on no "best venues" list. Rough Trade NYC, bookshop and concert space in one building, which should be illegal for how good it is.

New York, musically, is the densest city on the planet. As for everything else: Central Park at dawn, before the cyclists and the map-carrying tourists arrive, is the only moment the city breathes. 341 hectares of relative silence at the heart of Manhattan. The MET opens at 10am — {{CTA:tickets:tiqets:metropolitan museum new york:buy your MET ticket}} and give yourself the full day because the Egyptian wing alone takes two hours and then you realise you haven't seen the Impressionists yet and it's already half five.

The Brooklyn Bridge is worth crossing on foot end to end, but walk Manhattan-to-Brooklyn rather than the reverse — you want the view of both bridges and the skyline in front of you. Dumbo on the other side: the best bridge photos with the Manhattan Bridge in the background, pizza at Juliana's or Grimaldi's, the DUMBO market on Sundays.

The High Line is the most elegant urban regeneration project of the 21st century and it's free — two facts that shouldn't coexist in New York, but they do. 2.3 kilometres of elevated park above the old West Side railway line, with contemporary art and Hudson River views. It ends in the Meatpacking District, which has exactly the energy its name implies but with more cocktail bars.

{{CTA:activity:getyourguide:met museum highlights tour nyc:A guided tour of the MET}} if you want to navigate all that magnificence without spending the first two hours staring at the map. Also useful for knowing what to talk about at dinner, which here is a necessary social skill.

{{CTA:service:skyscanner:new york:Flying to New York}} from Europe is a 7-8 hour flight that pays off more in winter, when prices drop and the city has a completely different energy. Though in summer, with the jazz in the parks and the rooftop terraces, there's nothing to complain about either.`,
    },
  },

  // ─────────────────────────────────────────────
  // 7. AMSTERDAM
  // ─────────────────────────────────────────────
  {
    id: 7,
    slug: "amsterdam-guia-2026",
    enSlug: "amsterdam-guide-2026",
    narrator: "elena",
    heroImage: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=1200&q=80",
    city: "Amsterdam",
    country: { es: "Países Bajos", en: "Netherlands" },
    emoji: "🇳🇱",
    date: "2026-01-28",
    readTime: "8 min",
    category: "europe",
    title: {
      es: "Ámsterdam: Canales, Bicis y el Arte de No Ser Atropellado",
      en: "Amsterdam: Canals, Bikes, and the Art of Not Getting Run Over",
    },
    subtitle: {
      es: "Rijksmuseum, la Casa de Ana Frank, el Jordaan y el deporte olímpico no oficial de cruzar un carril bici sin mirar",
      en: "Rijksmuseum, Anne Frank House, the Jordaan and the unofficial Olympic sport of crossing a cycle lane without looking",
    },
    excerpt: {
      es: "Ámsterdam es contradictoria de la manera más encantadora posible. Una ciudad del siglo XVII que funciona mejor que la mayoría de las del siglo XXI — siempre que no te pongas delante de una bicicleta.",
      en: "Amsterdam is contradictory in the most charming way possible. A 17th-century city that runs better than most 21st-century ones — provided you stay out of the cycle lanes.",
    },
    metaDescription: {
      es: "Guía de Ámsterdam 2026: Rijksmuseum, Casa de Ana Frank, Jordaan, King's Day, Amsterdam Dance Event. Y cómo sobrevivir al tráfico ciclista.",
      en: "Amsterdam guide 2026: Rijksmuseum, Anne Frank House, Jordaan, King's Day, Amsterdam Dance Event. Plus how to survive the cycling traffic.",
    },
    keywords: {
      es: ["Ámsterdam", "Países Bajos", "Rijksmuseum", "Ana Frank", "Jordaan", "King's Day"],
      en: ["Amsterdam", "Netherlands", "Rijksmuseum", "Anne Frank", "Jordaan", "King's Day"],
    },
    pointsOfInterest: [
      {
        name: "Rijksmuseum",
        type: "Museo",
        lat: 52.3600, lng: 4.8852,
        description: {
          es: "Rembrandt, Vermeer, Frans Hals — la Edad de Oro holandesa reunida en un edificio que es en sí mismo una obra de arte. Las bicicletas pasan por debajo del arco principal, lo que dice todo sobre las prioridades de esta ciudad.",
          en: "Rembrandt, Vermeer, Frans Hals — the Dutch Golden Age assembled in a building that is itself a work of art. Bicycles pass through the main archway, which tells you everything about this city's priorities.",
        },
        rating: 4.9, priceRange: "€22.50",
        affiliateLinks: [
          { label: { es: "Entrada Rijksmuseum", en: "Rijksmuseum ticket" }, partner: "tiqets", query: "rijksmuseum amsterdam", type: "tickets" },
          { label: { es: "Tour obras maestras", en: "Masterpieces tour" }, partner: "getyourguide", query: "rijksmuseum amsterdam tour", type: "activity" },
        ],
      },
      {
        name: "Casa de Ana Frank",
        type: "Museo histórico",
        lat: 52.3752, lng: 4.8840,
        description: {
          es: "El Anexo Secreto donde Ana y su familia se escondieron durante más de dos años. Reserva con semanas de antelación — esto no es negociable ni tiene nada de gracioso.",
          en: "The Secret Annex where Anne and her family hid for more than two years. Book weeks in advance — this one is non-negotiable and nothing about it is funny.",
        },
        rating: 4.8, priceRange: "€14",
        affiliateLinks: [
          { label: { es: "Entrada Casa Ana Frank", en: "Anne Frank House ticket" }, partner: "tiqets", query: "anne frank house amsterdam", type: "tickets" },
        ],
      },
      {
        name: "El Jordaan",
        type: "Barrio",
        lat: 52.3748, lng: 4.8809,
        description: {
          es: "Calles estrechas bordeadas de casas con fachadas en escalón, brown cafés y el mercado Noordermarkt los sábados. El barrio donde los holandeses son más simpáticos — posiblemente porque ya han desayunado.",
          en: "Narrow streets lined with step-gabled houses, brown cafés and the Noordermarkt market on Saturdays. The neighbourhood where Dutch people are at their friendliest — possibly because they've already had breakfast.",
        },
        rating: 4.7,
        affiliateLinks: [
          { label: { es: "Tour por el Jordaan", en: "Jordaan neighbourhood tour" }, partner: "civitatis", query: "jordaan tour amsterdam", type: "activity" },
        ],
      },
      {
        name: "Vondelpark",
        type: "Parque",
        lat: 52.3580, lng: 4.8686,
        description: {
          es: "Donde todos los holandeses llevan sus bicicletas los domingos. Conciertos gratuitos y ambiente completamente relajado — el único lugar de Ámsterdam donde una bici no puede atropellarte.",
          en: "Where all Dutch people take their bicycles on Sundays. Free concerts and a completely relaxed atmosphere — the one place in Amsterdam where a bicycle cannot run you over.",
        },
        rating: 4.6,
        affiliateLinks: [
          { label: { es: "Tour en bici por Ámsterdam", en: "Amsterdam bike tour" }, partner: "getyourguide", query: "amsterdam canal bike tour", type: "activity" },
        ],
      },
      {
        name: "NEMO Science Museum",
        type: "Museo",
        lat: 52.3741, lng: 4.9124,
        description: {
          es: "El museo de ciencias más visitado de los Países Bajos, con una terraza con las mejores vistas de la ciudad. El edificio parece un barco a punto de zarpar — diseño holandés en estado puro.",
          en: "The most visited science museum in the Netherlands, with a rooftop terrace offering the best city views. The building looks like a ship about to set sail — Dutch design in its purest form.",
        },
        rating: 4.5, priceRange: "€17.50",
        affiliateLinks: [
          { label: { es: "Entrada NEMO", en: "NEMO ticket" }, partner: "tiqets", query: "nemo science museum amsterdam", type: "tickets" },
        ],
      },
    ],
    events: [
      {
        name: "King's Day",
        type: "cultural",
        date: "27 Abr 2026",
        venue: "Toda la ciudad",
        urgency: true,
        description: {
          es: "La ciudad entera se viste de naranja para celebrar el cumpleaños del rey. Mercados callejeros, fiesta en los canales y la única ocasión del año en que beber cerveza en un barco a las once de la mañana no solo está aceptado, sino que es prácticamente obligatorio.",
          en: "The entire city dresses in orange to celebrate the king's birthday. Street markets, canal parties and the one day of the year when drinking beer on a boat at eleven in the morning isn't just socially acceptable — it's practically mandatory.",
        },
        affiliateLinks: [
          { label: { es: "Tour King's Day Ámsterdam", en: "Amsterdam King's Day tour" }, partner: "viator", query: "kings day amsterdam 2026 boat party", type: "activity" },
          { label: { es: "Experiencia Koningsdag", en: "Koningsdag experience" }, partner: "getyourguide", query: "amsterdam kings day koningsdag experience", type: "activity" },
        ],
      },
      {
        name: "Amsterdam Dance Event",
        type: "electronic",
        date: "Oct 2026",
        venue: "Toda la ciudad",
        urgency: true,
        description: {
          es: "El festival de música electrónica más grande del mundo. 400 eventos en 140 venues durante 5 días. Tu cuerpo pedirá piedad en el día 3. Tu cabeza dirá que aguanta un poco más. Llegarás a casa sin saber cuántas horas has dormido en total.",
          en: "The world's largest electronic music festival. 400 events across 140 venues over 5 days. Your body will ask for mercy on day 3. Your head will say it can handle one more. You'll arrive home unsure how many hours of sleep you've managed in total.",
        },
        affiliateLinks: [
          { label: { es: "Entradas Amsterdam Dance Event", en: "Amsterdam Dance Event tickets" }, partner: "ticketmaster", query: "amsterdam dance event ADE 2026", type: "tickets" },
          { label: { es: "Reventa ADE", en: "ADE resale tickets" }, partner: "stubhub", query: "amsterdam dance event 2026 tickets", type: "tickets" },
          { label: { es: "Tour electrónico Ámsterdam", en: "Amsterdam electronic music tour" }, partner: "getyourguide", query: "amsterdam electronic music scene tour", type: "activity" },
        ],
      },
      {
        name: "Amsterdam Light Festival",
        type: "art",
        date: "Nov–Ene 2026/27",
        venue: "Canales del centro",
        urgency: false,
        description: {
          es: "Instalaciones de arte luminoso a lo largo de los canales históricos de noviembre a enero. Mejor en barco, con una manta, un vino caliente y la tranquilidad de saber que has tomado la mejor decisión del año — mientras el resto del mundo está en casa viendo series.",
          en: "Light art installations along the historic canals from November through January. Best experienced by boat, with a blanket, a warm wine and the quiet satisfaction of knowing you've made the best decision of the year — while everyone else is at home watching series.",
        },
        affiliateLinks: [
          { label: { es: "Tour barco Festival de Luz", en: "Light Festival boat tour" }, partner: "getyourguide", query: "amsterdam light festival boat tour canal", type: "activity" },
          { label: { es: "Crucero canales iluminados", en: "Illuminated canals cruise" }, partner: "viator", query: "amsterdam light festival canal cruise", type: "activity" },
        ],
      },
    ],
    services: {
      flights: ["skyscanner", "kiwi"],
      hotels: ["booking", "hostelworld", "vrbo"],
      cars: ["discovercars", "rentalcars", "autoeurope", "localrent"],
      activities: ["getyourguide", "viator", "tiqets", "civitatis", "klook"],
      restaurants: ["thefork", "opentable"],
      insurance: ["safetywing", "worldnomads"],
      esim: ["airalo", "holafly", "saily", "yesim"],
      transfers: ["intui", "welcomepickups", "gettransfer", "indrive"],
    },
    content: {
      es: `El coworking que reservé tenía un canal en la puerta. Literalmente: salías a la calle, girabas a la izquierda, y ahí estaba el Keizersgracht con sus casas de ladrillo y sus reflejos en el agua. Así que lo que pasó es que el primer día llegué con el portátil, abrí el espacio de trabajo, miré por la ventana, decidí que lo del deadline podía esperar y me quedé dos horas sentada en los escalones del canal mirando barcazas pasar.

Llevo cuatro años trabajando en remoto desde ciudades distintas y Amsterdam es la primera que ha conseguido que pierda la mañana de un lunes de forma voluntaria y sin culpa. Esto es información relevante para calibrar lo que esta ciudad puede hacerle a tu productividad.

El Rijksmuseum es la razón por la que Amsterdam está en el mapa cultural mundial. Rembrandt, Vermeer, Frans Hals — la Edad de Oro holandesa reunida en un edificio que es él mismo una obra de arte y bajo cuyo arco principal pasan bicicletas, que es la metáfora perfecta de esta ciudad. {{CTA:tickets:tiqets:rijksmuseum amsterdam:Compra tu entrada al Rijksmuseum}} con antelación — en verano las colas junto al canal son una experiencia involuntaria de arte al aire libre que no habías planificado tener.

La Casa de Ana Frank va más allá del turismo. El Anexo Secreto donde ocultó a su familia durante más de dos años es un espacio físico que ningún libro puede prepararte para sentir. {{CTA:tickets:tiqets:anne frank house amsterdam:Reserva tu entrada}} semanas antes — el aforo está controlado, las entradas se agotan y hay pocas visitas en la vida que sean tan importantes como esta. No es una atracción turística. Es un lugar donde ir a recordar.

El Jordaan tiene exactamente el ambiente que esperabas de Amsterdam: calles estrechas, casas con fachadas en escalón, cafés marrones que huelen a café y madera vieja, mercados de fin de semana. El Noordermarkt los sábados vende queso artesanal, flores y libros de segunda mano, que son exactamente las tres categorías de compra impulsiva en las que más fácil es gastar el presupuesto del coworking.

Vondelpark los domingos es donde los holandeses llevan sus bicicletas a pasear — lo que podría sonar peligroso pero en la práctica todos van más despacio porque están relajados y escuchando algo en los auriculares. Conciertos al aire libre en verano, perros, patinadores, la librería del parque. El tipo de domingo que te hace replantearte si la semana laboral de cinco días es un error filosófico.

Para moverse, {{CTA:activity:getyourguide:amsterdam canal bike tour:un tour en bicicleta por los canales}} es la experiencia más genuinamente amsterdamesa que existe. Sí, tendrás que pedalear entre ciclocarriles con gente que lleva haciéndolo toda la vida. Sí, en algún momento te adelantará una abuela con bolsas de la compra colgando del manillar a una velocidad que no esperabas. Eso también forma parte.`,
      en: `The coworking I booked had a canal at the door. Literally: you stepped outside, turned left, and there was the Keizersgracht with its brick townhouses and their reflections in the water. So what happened was: I arrived on the first day with my laptop, opened up the workspace, looked out the window, decided the deadline could wait, and spent two hours sitting on the canal steps watching barges go past.

I've been working remotely from different cities for four years and Amsterdam is the first place that's made me voluntarily and guiltlessly lose a Monday morning. This is relevant information for calibrating what this city can do to your productivity.

The Rijksmuseum is the reason Amsterdam appears on the world cultural map. Rembrandt, Vermeer, Frans Hals — the Dutch Golden Age assembled in a building that is itself a work of art and through whose main archway bicycles pass, which is the perfect metaphor for this city. {{CTA:tickets:tiqets:rijksmuseum amsterdam:Buy your Rijksmuseum ticket}} well in advance — in summer the queues along the canal are an unplanned outdoor art experience you hadn't intended to have.

The Anne Frank House goes beyond tourism. The Secret Annex where she and her family hid for over two years is a physical space that no book can prepare you to feel. {{CTA:tickets:tiqets:anne frank house amsterdam:Book your ticket}} weeks ahead — capacity is controlled, tickets sell out and few visits in a lifetime are as important as this one. It is not a tourist attraction. It's a place to go to remember.

The Jordaan has exactly the atmosphere you were expecting from Amsterdam: narrow streets, step-gabled houses, brown cafés that smell of coffee and old wood, weekend markets. The Noordermarkt on Saturdays sells artisan cheese, flowers and second-hand books — precisely the three categories of impulse buying that most efficiently dissolve a coworking budget.

Vondelpark on Sundays is where Dutch people take their bicycles for a leisurely ride — which could sound dangerous but in practice everyone goes slower because they're relaxed and listening to something in their headphones. Open-air concerts in summer, dogs, skaters, the park bookshop. The kind of Sunday that makes you question whether the five-day working week was a philosophical error.

For getting around, {{CTA:activity:getyourguide:amsterdam canal bike tour:a cycling tour of the canals}} is the most genuinely Amsterdamian experience available. Yes, you'll have to pedal among cycle lanes full of people who've been doing it their whole lives. Yes, at some point a grandmother with shopping bags hanging from her handlebars will overtake you at a speed you weren't expecting. That's part of it.`,
    },
  },

  // ─────────────────────────────────────────────
  // 8. BANGKOK
  // ─────────────────────────────────────────────
  {
    id: 8,
    slug: "bangkok-guia-2026",
    enSlug: "bangkok-guide-2026",
    narrator: "david",
    heroImage: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1200&q=80",
    city: "Bangkok",
    country: { es: "Tailandia", en: "Thailand" },
    emoji: "🇹🇭",
    date: "2026-01-20",
    readTime: "9 min",
    category: "asia",
    title: {
      es: "Bangkok: Caos, Templos y el Pad Thai Más Barato del Mundo",
      en: "Bangkok: Chaos, Temples, and the World's Cheapest Pad Thai",
    },
    subtitle: {
      es: "Templos dorados, pad thai de medianoche, mercados flotantes y la convicción de que en ningún sitio del mundo comes tan bien gastando tan poco",
      en: "Golden temples, midnight pad thai, floating markets and the unshakeable conviction that nowhere on earth do you eat this well for this little",
    },
    excerpt: {
      es: "Bangkok te recibe con un golpe de calor, olor a incienso y el caos más estimulante que puedes encontrar en el planeta. Y antes de que puedas quejarte, ya estás pidiendo más.",
      en: "Bangkok hits you with a wave of heat, incense and the most stimulating chaos you'll find on the planet. And before you can complain, you're already ordering seconds.",
    },
    metaDescription: {
      es: "Guía de Bangkok 2026: Gran Palacio, Wat Pho, Chatuchak, Songkran, Loy Krathong. Mejores tours, hoteles y dónde comer pad thai por €1,50.",
      en: "Bangkok guide 2026: Grand Palace, Wat Pho, Chatuchak, Songkran, Loy Krathong. Best tours, hotels and where to eat pad thai for €1.50.",
    },
    keywords: {
      es: ["Bangkok", "Tailandia", "Gran Palacio", "Wat Pho", "Chatuchak", "Songkran", "pad thai"],
      en: ["Bangkok", "Thailand", "Grand Palace", "Wat Pho", "Chatuchak", "Songkran", "pad thai"],
    },
    pointsOfInterest: [
      {
        name: "Grand Palace & Wat Phra Kaew",
        type: "Palacio y templo",
        lat: 13.7499, lng: 100.4927,
        description: {
          es: "El corazón espiritual de Tailandia. El Buda de Esmeralda es la figura religiosa más venerada del país. Código de vestimenta estricto — y sí, hace más calor con pantalones largos en Bangkok en abril.",
          en: "The spiritual heart of Thailand. The Emerald Buddha is the country's most venerated religious figure. Strict dress code applies — and yes, it is hotter in long trousers in Bangkok in April.",
        },
        rating: 4.8, priceRange: "฿500",
        affiliateLinks: [
          { label: { es: "Entrada Gran Palacio", en: "Grand Palace ticket" }, partner: "tiqets", query: "grand palace bangkok", type: "tickets" },
          { label: { es: "Tour templos Bangkok", en: "Bangkok temples tour" }, partner: "viator", query: "grand palace wat pho bangkok tour", type: "activity" },
        ],
      },
      {
        name: "Wat Pho",
        type: "Templo",
        lat: 13.7465, lng: 100.4927,
        description: {
          es: "Alberga al Buda Reclinado, una figura de 46 metros que llena completamente el templo que lo hospeda. Spoiler: la fotografía no cabe entera. Nadie la consigue entera.",
          en: "Houses the Reclining Buddha, a 46-metre figure that completely fills the temple sheltering it. Spoiler: it doesn't fit in a single photo. Nobody gets the whole thing in frame.",
        },
        rating: 4.7, priceRange: "฿200",
        affiliateLinks: [
          { label: { es: "Tour Wat Pho + masaje", en: "Wat Pho + massage tour" }, partner: "getyourguide", query: "wat pho temple massage bangkok", type: "activity" },
        ],
      },
      {
        name: "Chatuchak Weekend Market",
        type: "Mercado",
        lat: 13.7999, lng: 100.5500,
        description: {
          es: "El mercado de fin de semana más grande del mundo: 15.000 puestos con antigüedades, ropa vintage, artesanía y street food. Llegarás buscando un recuerdo y saldrás con tres bolsas, un sombrero y algo que no sabes muy bien qué es.",
          en: "The world's largest weekend market: 15,000 stalls selling antiques, vintage clothing, crafts and street food. You'll arrive looking for one souvenir and leave with three bags, a hat and something you can't quite identify.",
        },
        rating: 4.6,
        affiliateLinks: [
          { label: { es: "Tour guiado Chatuchak", en: "Chatuchak guided tour" }, partner: "getyourguide", query: "chatuchak market tour bangkok", type: "activity" },
        ],
      },
      {
        name: "Wat Arun",
        type: "Templo",
        lat: 13.7437, lng: 100.4888,
        description: {
          es: "El Templo del Amanecer. Su fachada de porcelana y conchas marinas brilla con la luz del atardecer de una manera imposible de fotografiar — lo que no impide que todos lo intenten durante veinte minutos.",
          en: "The Temple of Dawn. Its porcelain and seashell façade shines in the afternoon light in a way no photograph can do justice to — which doesn't stop everyone trying for twenty minutes.",
        },
        rating: 4.7, priceRange: "฿100",
        affiliateLinks: [
          { label: { es: "Crucero río + Wat Arun", en: "River cruise + Wat Arun" }, partner: "viator", query: "chao phraya river cruise bangkok", type: "activity" },
        ],
      },
      {
        name: "Khao San Road",
        type: "Calle",
        lat: 13.7590, lng: 100.4975,
        description: {
          es: "La calle más internacional de Bangkok: mochileros, street food 24h, bares con música en vivo y masajes a €5. Una trampa para turistas de la que saldrás habiendo gastado €30 y sintiéndote muy bien al respecto.",
          en: "Bangkok's most international street: backpackers, 24h street food, live music bars and €5 massages. A tourist trap you'll leave having spent €30 and feeling entirely fine about it.",
        },
        rating: 4.3,
        affiliateLinks: [
          { label: { es: "Tour nocturno Bangkok", en: "Bangkok night tour" }, partner: "civitatis", query: "bangkok night tour street food", type: "activity" },
        ],
      },
    ],
    events: [
      {
        name: "Songkran",
        type: "cultural",
        date: "13–15 Abr 2026",
        venue: "Toda la ciudad",
        urgency: true,
        description: {
          es: "La guerra de agua más grande del mundo. Tres días de batalla acuática en las calles de Bangkok: lleva ropa que puedas tirar, porque la tirarás. No hay impermeabilización suficiente. No se puede ganar. Solo se puede sobrevivir — y volver al año siguiente.",
          en: "The world's biggest water fight. Three days of aquatic warfare in Bangkok's streets: bring clothes you can throw away, because you will. No waterproofing is sufficient. You cannot win. You can only survive — and return the following year.",
        },
        affiliateLinks: [
          { label: { es: "Tour Songkran Bangkok 2026", en: "Bangkok Songkran 2026 tour" }, partner: "getyourguide", query: "songkran festival bangkok 2026 water fight", type: "activity" },
          { label: { es: "Experiencia Año Nuevo Thai", en: "Thai New Year experience" }, partner: "viator", query: "songkran water festival thailand 2026", type: "activity" },
        ],
      },
      {
        name: "Loy Krathong",
        type: "cultural",
        date: "Nov 2026",
        venue: "Ríos y lagos",
        urgency: false,
        description: {
          es: "Miles de linternas de papel iluminan el cielo mientras el Chao Phraya se llena de pequeñas balsas con velas y flores. Es tan bonito que parecerá mentira que sea real. Y sin embargo ahí estás, con los pies mojados y la mejor fotografía de tu vida en el móvil.",
          en: "Thousands of paper lanterns illuminate the sky as the Chao Phraya fills with small rafts bearing candles and flowers. It's so beautiful you'll find it hard to believe it's real. And yet there you are, with wet feet and the best photograph of your life on your phone.",
        },
        affiliateLinks: [
          { label: { es: "Tour Loy Krathong Bangkok", en: "Loy Krathong Bangkok tour" }, partner: "viator", query: "loy krathong bangkok river lanterns 2026", type: "activity" },
          { label: { es: "Experiencia linternas tailandesas", en: "Thai lantern experience" }, partner: "getyourguide", query: "loy krathong lantern festival thailand", type: "activity" },
        ],
      },
      {
        name: "Bangkok Design Week",
        type: "art",
        date: "Feb 2026",
        venue: "Charoen Krung",
        urgency: false,
        description: {
          es: "Exposiciones de diseño, arquitectura y arte contemporáneo tailandés en el barrio más creativo de Bangkok. La prueba de que esta ciudad tiene capas que el turista estándar ni sospecha — y de que el buen diseño y el pad thai de 1,50€ pueden coexistir perfectamente.",
          en: "Design, architecture and contemporary Thai art exhibitions in Bangkok's most creative neighbourhood. Proof that this city has layers the average tourist never suspects — and that good design and €1.50 pad thai can coexist perfectly.",
        },
        affiliateLinks: [
          { label: { es: "Entradas Bangkok Design Week", en: "Bangkok Design Week tickets" }, partner: "ticketmaster", query: "bangkok design week 2026", type: "tickets" },
          { label: { es: "Tour arte y diseño Bangkok", en: "Bangkok art and design tour" }, partner: "getyourguide", query: "bangkok design art charoen krung creative", type: "activity" },
        ],
      },
    ],
    services: {
      flights: ["skyscanner", "kiwi"],
      hotels: ["booking", "hostelworld"],
      cars: ["discovercars", "localrent"],
      activities: ["getyourguide", "viator", "tiqets", "civitatis", "klook"],
      restaurants: ["opentable"],
      insurance: ["safetywing", "worldnomads"],
      esim: ["airalo", "holafly", "saily", "yesim"],
      transfers: ["intui", "welcomepickups", "gettransfer", "indrive"],
      vpn: ["nordvpn"],
      transport: ["omio"],
    },
    content: {
      es: `Fui a Bangkok con una lista de veintidós restaurantes. La revisé en el avión. La revisé otra vez en el taxi desde Suvarnabhumi, con el calor y el tráfico de la Autopista Exprés formando el fondo perfecto para leer reseñas de pad thai. Cuando llegué al hotel tenía la lista organizada por barrios, con horarios de apertura y un sistema de prioridades propio que no compartiré porque probablemente es perturbador.

La lista duró hasta el segundo día, cuando un conductor de tuk-tuk me dejó delante de un puesto de mango sticky rice en el mercado de Or Tor Kor que no estaba en ninguna aplicación, en ninguna reseña y que era, sin exageración, lo mejor que había comido en Asia. En ese momento abandoné la lista, la estrategia y cualquier pretensión de control gastronómico organizado, y me dejé llevar por Bangkok.

El Gran Palacio y el Wat Phra Kaew son el corazón espiritual de Tailandia. El Buda de Esmeralda, tallado en un único bloque de jade verde, es la figura religiosa más venerada del país. {{CTA:tickets:tiqets:grand palace bangkok:Compra tu entrada al Gran Palacio}} — y lleva pantalón largo o falda que te cubra las rodillas. Hace calor en Bangkok en cualquier mes del año, pero el código de vestimenta es parte del respeto al lugar. Si llegas sin cubrir los hombros, hay un mostrador que te presta algo. Esto forma parte del protocolo.

El Wat Pho, a cien metros del Gran Palacio, tiene al Buda Reclinado: 46 metros de figura dorada que ocupa un templo entero y que no cabe en ninguna fotografía por más que lo intentes. Es también el origen histórico del masaje tailandés, y el complejo tiene una escuela de masajes donde puedes terminar la visita con un masaje de dos horas por un precio que en Europa sería imposible de creer.

Chatuchak es el mercado de fin de semana más grande del mundo: 15.000 puestos en 27 hectáreas que venden desde antigüedades birmanas hasta street food de toda Tailandia. {{CTA:activity:getyourguide:chatuchak market tour bangkok:Un tour guiado por Chatuchak}} te salva de acabar en la sección de reptiles sin saber cómo llegaste. La comida del Chatuchak es en sí misma una excursión: pad thai frito al momento, brochetas de cerdo especiado, agua de coco recién abierta que en Bangkok de agosto es básicamente medicina.

El río Chao Phraya es la autopista histórica de la ciudad. En barco llegas al Wat Arun, cuya fachada de porcelana y cerámica brilla con la luz del atardecer de una manera que justifica el trayecto en barco. {{CTA:activity:viator:chao phraya river cruise bangkok:Un crucero por el Chao Phraya}} con cena incluida es el plan de atardecer más memorable de la ciudad, especialmente si consigues mesa en cubierta y el cielo se tiñe de naranja.

Pero lo que más recuerdo de Bangkok no está en ninguna de las veintidós entradas de mi lista original. Está en el puesto sin nombre de Yaowarat donde el pad see ew costaba ochenta bahts y el cocinero llevaba ahí más años que la mayoría de los restaurantes de mi ciudad llevan abiertos. Bangkok te enseña que la mejor comida del mundo no necesita carta, no necesita estrella y muy a menudo no necesita silla.`,
      en: `I went to Bangkok with a list of twenty-two restaurants. I reviewed it on the plane. I reviewed it again in the taxi from Suvarnabhumi, with the heat and the motorway traffic forming the perfect backdrop for reading pad thai reviews. By the time I reached the hotel the list was organised by neighbourhood, with opening times and a personal priority system I won't share because it is probably alarming.

The list survived until the second day, when a tuk-tuk driver dropped me in front of a mango sticky rice stall at the Or Tor Kor market that appeared in no app, no review site, and was — without exaggeration — the finest thing I'd eaten in Asia. At that moment I abandoned the list, the strategy and any pretension of organised gastronomic control, and let Bangkok take over.

The Grand Palace and Wat Phra Kaew are the spiritual heart of Thailand. The Emerald Buddha, carved from a single block of green jade, is the country's most venerated religious figure. {{CTA:tickets:tiqets:grand palace bangkok:Buy your Grand Palace ticket}} — and wear long trousers or a skirt covering your knees. Bangkok is hot in every month of the year, but the dress code is part of respecting the place. If you arrive with bare shoulders, there's a counter that will lend you something. This is part of the protocol.

Wat Pho, a hundred metres from the Grand Palace, houses the Reclining Buddha: a 46-metre golden figure that occupies an entire temple and fits in no photograph regardless of how hard you try. It's also the historical origin of Thai massage, and the complex has a massage school where you can end your visit with a two-hour massage at a price that would be unbelievable in Europe.

Chatuchak is the world's largest weekend market: 15,000 stalls across 27 hectares selling everything from Burmese antiques to street food from across Thailand. {{CTA:activity:getyourguide:chatuchak market tour bangkok:A guided tour of Chatuchak}} will save you from ending up in the reptile section without understanding how you got there. The food at Chatuchak is an excursion in itself: freshly fried pad thai, spiced pork skewers, freshly opened coconut water that in Bangkok in August is essentially medicine.

The Chao Phraya River is the city's historic highway. By boat you reach Wat Arun, whose ceramic and porcelain façade shines in the afternoon light in a way that justifies the river journey. {{CTA:activity:viator:chao phraya river cruise bangkok:A Chao Phraya river cruise}} with dinner included is the most memorable evening plan in the city, especially if you get a table on deck and the sky turns orange.

But what I remember most about Bangkok appears in none of the original twenty-two entries on my list. It's at the nameless stall in Yaowarat where the pad see ew cost eighty baht and the cook had been there longer than most restaurants in my city have been open. Bangkok teaches you that the world's best food needs no menu, no star and very often no chair.`,
    },
  },  // ─────────────────────────────────────────────
  // 9. MARRAKECH
  // ─────────────────────────────────────────────
  {
    id: 9,
    slug: "marrakech-guia-2026",
    enSlug: "marrakech-guide-2026",
    narrator: "sofia",
    heroImage: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1200&q=80",
    city: "Marrakech",
    country: { es: "Marruecos", en: "Morocco" },
    emoji: "🇲🇦",
    date: "2026-01-15",
    readTime: "8 min",
    category: "africa",
    title: {
      es: "Marrakech: Medina, Especias y el Arte de No Perderte (Aunque Ya Vas a Perderte)",
      en: "Marrakech: Medina, Spices, and Getting Lost Whether You Plan To or Not",
    },
    subtitle: {
      es: "Djemaa el-Fna, el Jardín Majorelle, zocos que te engullen y el Sahara a un día — si consigues salir de la medina",
      en: "Djemaa el-Fna, the Jardin Majorelle, souks that swallow you whole and the Sahara one day away — if you can find the exit",
    },
    excerpt: {
      es: "Marrakech te asalta por todos los sentidos a la vez. El olor a especias, el naranja de las murallas y el sabor a harira que hace que el concepto 'sopa' nunca vuelva a ser el mismo.",
      en: "Marrakech assaults every single sense at once. Spices, orange walls, harira soup, and the warm certainty that you are hopelessly, happily lost.",
    },
    metaDescription: {
      es: "Guía de Marrakech 2026: Djemaa el-Fna, Jardín Majorelle, medina, zocos, desierto del Sahara. Con consejos para negociar, sobrevivir y volver enamorado.",
      en: "Marrakech guide 2026: Djemaa el-Fna, Jardin Majorelle, medina, souks, Sahara Desert. Tips for navigating the chaos and loving every bewildering second.",
    },
    keywords: {
      es: ["Marrakech", "Marruecos", "Djemaa el-Fna", "Jardin Majorelle", "zocos", "Sahara", "medina"],
      en: ["Marrakech", "Morocco", "Djemaa el-Fna", "Jardin Majorelle", "souks", "Sahara", "medina"],
    },
    pointsOfInterest: [
      {
        name: "Djemaa el-Fna",
        type: "Plaza",
        lat: 31.6258, lng: -7.9891,
        description: {
          es: "El lugar más cinematográfico del mundo. Acróbatas y vendedores de zumo por la mañana; mercado de comida al aire libre al atardecer. Prepárate para que alguien te ponga una serpiente encima antes de que puedas decir no.",
          en: "The world's most cinematic place. Acrobats and juice vendors in the morning; open-air food market at sunset. A monkey will find you before you find the monkey.",
        },
        rating: 4.8,
        affiliateLinks: [
          { label: { es: "Tour guiado medina", en: "Medina guided tour" }, partner: "getyourguide", query: "djemaa el fna marrakech tour", type: "activity" },
          { label: { es: "Tour gastronómico", en: "Food tour" }, partner: "viator", query: "marrakech food tour djemaa", type: "activity" },
        ],
      },
      {
        name: "Jardin Majorelle",
        type: "Jardín",
        lat: 31.6413, lng: -8.0036,
        description: {
          es: "Diseñado por Jacques Majorelle y rescatado por Yves Saint Laurent. Sus jardines de azul cobalto son un oasis de paz ridículamente hermoso en medio del caos. La cola para entrar también es larga, pero merece.",
          en: "Designed by Jacques Majorelle and rescued by Yves Saint Laurent. Its cobalt blue gardens are an oasis of peace — and yes, everyone else had the same idea of coming here to escape the crowds.",
        },
        rating: 4.7, priceRange: "€10–16",
        affiliateLinks: [
          { label: { es: "Entrada Jardín Majorelle", en: "Jardin Majorelle ticket" }, partner: "tiqets", query: "jardin majorelle marrakech", type: "tickets" },
          { label: { es: "Tour jardines + YSL", en: "Gardens + YSL tour" }, partner: "civitatis", query: "jardin majorelle yves saint laurent marrakech", type: "activity" },
        ],
      },
      {
        name: "Medina y Zocos",
        type: "Mercado histórico",
        lat: 31.6314, lng: -7.9869,
        description: {
          es: "Un laberinto del siglo XI diseñado expresamente para que pierdas el sentido de la orientación — y lo encuentres en algún riad inesperado. El primer precio siempre es el doble. Sonríe y negocia.",
          en: "An 11th-century maze designed specifically to dissolve your sense of direction. You will get lost. The first price quoted is always double the real one. Embrace both facts equally.",
        },
        rating: 4.6,
        affiliateLinks: [
          { label: { es: "Tour por los zocos", en: "Souks tour" }, partner: "getyourguide", query: "marrakech souks guided tour", type: "activity" },
        ],
      },
      {
        name: "Palacio Bahía",
        type: "Palacio",
        lat: 31.6210, lng: -7.9823,
        description: {
          es: "Arquitectura islámica del siglo XIX con patios de naranjos, fuentes de mosaico y techos de cedro tallado. Un recordatorio de que el lujo existía mucho antes de que alguien inventara el jacuzzi.",
          en: "19th-century Islamic architecture with orange courtyards, mosaic fountains and carved cedar ceilings. Proof that opulence was invented long before the infinity pool.",
        },
        rating: 4.5, priceRange: "70 MAD",
        affiliateLinks: [
          { label: { es: "Tour palacios Marrakech", en: "Marrakech palaces tour" }, partner: "civitatis", query: "bahia palace marrakech tour", type: "activity" },
        ],
      },
      {
        name: "Atlas Mountains",
        type: "Naturaleza",
        lat: 31.2201, lng: -7.9283,
        description: {
          es: "A menos de una hora de la ciudad, el Atlas ofrece pueblos bereberes, trekking y vistas que contrastan radicalmente con el caos de la medina. El silencio aquí es tan absoluto que te parece sospechoso.",
          en: "Less than an hour from the city, the Atlas Mountains offer Berber villages, trekking and views that make you forget Marrakech entirely — until you have to go back.",
        },
        rating: 4.8,
        affiliateLinks: [
          { label: { es: "Excursión Atlas", en: "Atlas day trip" }, partner: "viator", query: "atlas mountains day trip marrakech", type: "activity" },
        ],
      },
    ],
    events: [
      {
        name: "Festival International du Film de Marrakech",
        type: "art",
        date: "Nov–Dic 2026",
        venue: "Place Jemaa el-Fna y cines",
        urgency: false,
        description: {
          es: "Uno de los festivales de cine más prestigiosos de África, con alfombra roja y proyecciones al aire libre en la medina. El único festival de cine del mundo donde puedes ver una película con una estrella de Hollywood a tu derecha y un encantador de serpientes a tu izquierda.",
          en: "One of Africa's most prestigious film festivals, with red carpet events and open-air screenings in the medina. The only film festival on earth where you can watch a film with a Hollywood star on your right and a snake charmer on your left.",
        },
        affiliateLinks: [
          { label: { es: "Entradas Festival de Cine Marrakech", en: "Marrakech Film Festival tickets" }, partner: "ticketmaster", query: "marrakech international film festival 2026", type: "tickets" },
          { label: { es: "Tour cine y cultura Marrakech", en: "Marrakech film and culture tour" }, partner: "getyourguide", query: "marrakech film festival culture tour medina", type: "activity" },
        ],
      },
      {
        name: "Ramadán en Marrakech",
        type: "cultural",
        date: "Feb–Mar 2026",
        venue: "Toda la medina",
        urgency: false,
        description: {
          es: "La medina cobra una dimensión espiritual única al atardecer cuando la llamada al magrib anuncia el iftar y las calles desiertas se llenan de vida en cuestión de segundos. El mejor espectáculo sin entrada que existe — y el mejor momento para probar la harira de tu vida.",
          en: "The medina takes on a unique spiritual dimension at sunset when the call to maghrib announces iftar and streets that were empty seconds ago suddenly fill with life. The best free show on earth — and the best moment to try the harira of your life.",
        },
        affiliateLinks: [
          { label: { es: "Tour iftar Ramadán Marrakech", en: "Marrakech Ramadan iftar tour" }, partner: "getyourguide", query: "marrakech ramadan iftar dinner experience", type: "activity" },
          { label: { es: "Experiencia gastronomía Ramadán", en: "Ramadan gastronomy experience" }, partner: "viator", query: "marrakech ramadan food culture experience", type: "activity" },
        ],
      },
      {
        name: "Excursión al Desierto",
        type: "natural",
        date: "Todo el año",
        venue: "Sahara, Merzouga",
        urgency: false,
        description: {
          es: "Merzouga y las dunas de Erg Chebbi, a un día de Marrakech. Noche en jaima bajo un cielo tan cargado de estrellas que parece CGI. La arena en los zapatos durante el vuelo de vuelta es un recuerdo gratuito y completamente indestructible.",
          en: "Merzouga and the Erg Chebbi dunes, a day from Marrakech. A night in a tent under a sky so full of stars it looks computer-generated. The sand in your shoes on the flight home is a free souvenir that will last significantly longer than expected.",
        },
        affiliateLinks: [
          { label: { es: "Tour desierto Sahara 2 días", en: "2-day Sahara desert tour" }, partner: "viator", query: "sahara desert tour marrakech merzouga 2 days", type: "activity" },
          { label: { es: "Excursión desierto con camello", en: "Desert excursion with camel" }, partner: "getyourguide", query: "marrakech sahara desert camel trek overnight", type: "activity" },
        ],
      },
    ],
    services: {
      flights: ["skyscanner", "kiwi"],
      hotels: ["booking", "hostelworld"],
      cars: ["discovercars", "rentalcars", "localrent"],
      activities: ["getyourguide", "viator", "tiqets", "civitatis", "klook"],
      restaurants: ["thefork"],
      insurance: ["safetywing", "worldnomads"],
      esim: ["airalo", "holafly", "saily", "yesim"],
      transfers: ["intui", "welcomepickups", "gettransfer", "indrive"],
    },
    content: {
      es: `Tenía la ruta perfecta de la medina descargada en el móvil. Punto A al punto B, con los zocos y los palacios en el orden correcto, estimaciones de tiempo de desplazamiento incluidas. Hoja de cálculo, Notion, Google Maps, capturas de pantalla: toda la logística de alguien que jamás se pierde preparando una visita a uno de los laberintos urbanos más complejos del mundo.

La batería se murió en el taxi desde el aeropuerto. Llegué a la medina con el teléfono apagado, la hoja de cálculo inaccesible y una dirección del riad que había memorizado a medias. Encontré el riad en cuarenta minutos, que en la medina de Marrakech es aproximadamente un milagro. Y durante esos cuarenta minutos, sin mapa, con el olor a especias y a cuero, con los herreros y los cocineros y los vendedores de aceitunas componiendo un ruido de fondo absolutamente extraordinario, encontré tres lugares que no estaban en ninguna de mis listas preparadas y que fueron los mejores momentos del viaje.

La Djemaa el-Fna es el lugar más cinematográfico del mundo y cambia completamente con la hora. Por la mañana: acróbatas, zumos de naranja, encantadores de serpientes que intentarán ponerte una encima antes de que puedas negarte educadamente. Al atardecer: el mayor mercado de comida al aire libre de África, con humo de brasas, tagines humeantes y esa luz entre naranja y morado que hace que todo parezca una película de época. {{CTA:activity:getyourguide:djemaa el fna marrakech tour:Un tour guiado por la medina}} te descubre los rincones donde no llegan los grupos organizados y te explica por qué esta plaza lleva 1.000 años siendo el corazón social de Marrakech.

El Jardin Majorelle es el antídoto al caos. Sus jardines de azul cobalto, diseñados por el pintor francés Jacques Majorelle y restaurados por Yves Saint Laurent, son un oasis donde la temperatura baja y el ruido desaparece. {{CTA:tickets:tiqets:jardin majorelle marrakech:Compra tu entrada al Jardín Majorelle}} con antelación — la afluencia es alta y el acceso está controlado, y no has venido hasta aquí para quedarte en la cola mirando el muro.

Los zocos son una lección de comercio antiguo y negociación contemporánea. El primer precio que te dan es el doble del real. El vendedor lo sabe. Tú sabes que él lo sabe. Él sabe que tú sabes. A partir de ahí empieza la conversación. El barrio de los tintoreros, con sus cubas de colores, es la imagen más fotografiada de Marrakech después de las puertas azules y merece la visita aunque tengas que subir tres pisos de escalera en una tienda de alfombras para verlo desde arriba.

El Palacio Bahía, con sus parterres, sus galerías de arcos y sus cámaras decoradas con mosaicos de zellij, es uno de los edificios más hermosos del norte de África y está en gran medida inacabado — el visir que lo construyó murió antes de terminarlo, que es la historia de los grandes proyectos arquitectónicos en cualquier siglo.

Para ver el Sahara, {{CTA:activity:viator:sahara desert tour marrakech merzouga:un tour de uno o dos días al desierto de Merzouga}} desde Marrakech es la excursión más transformadora que puedes hacer en el norte de África. La arena en los zapatos al volver es un recuerdo gratuito que dura semanas.`,
      en: `I had the perfect medina route downloaded on my phone. Point A to point B, souks and palaces in the correct order, estimated walking times included. Spreadsheet, Notion, Google Maps, screenshots: all the logistics of someone who never gets lost preparing to visit one of the world's most complex urban labyrinths.

The battery died in the taxi from the airport. I arrived at the medina with the phone off, the spreadsheet inaccessible and a riad address I'd half-memorised. I found the riad in forty minutes, which in the Marrakech medina is approximately a miracle. And during those forty minutes — no map, surrounded by the smell of spices and leather, blacksmiths and cooks and olive vendors creating an absolutely extraordinary background noise — I found three places that appeared on none of my carefully prepared lists and which turned out to be the best moments of the trip.

Djemaa el-Fna is the world's most cinematic place and changes completely with the hour. In the morning: acrobats, fresh orange juice, snake charmers who will attempt to drape something on you before you can decline politely. At sunset: the largest open-air food market in Africa, with charcoal smoke, steaming tagines and that orange-purple light that makes everything look like a period film. {{CTA:activity:getyourguide:djemaa el fna marrakech tour:A guided tour of the medina}} reveals the corners that organised groups never reach and explains why this square has been the social heart of Marrakech for 1,000 years.

The Jardin Majorelle is the antidote to the chaos. Its cobalt blue gardens, designed by French painter Jacques Majorelle and restored by Yves Saint Laurent, are an oasis where the temperature drops and the noise disappears. {{CTA:tickets:tiqets:jardin majorelle marrakech:Buy your Jardin Majorelle ticket}} in advance — visitor numbers are high, access is controlled, and you haven't come all this way to stand outside looking at the wall.

The souks are a lesson in ancient commerce and contemporary negotiation. The first price you're given is double the real one. The vendor knows this. You know he knows. He knows you know. That's where the conversation starts. The dyers' quarter, with its colour vats, is the most photographed image in Marrakech after the blue doors and deserves the visit even if you have to climb three floors of carpet-shop stairs to see it from above.

The Bahia Palace, with its flowerbeds, arcaded galleries and rooms decorated in zellij mosaic, is one of the most beautiful buildings in North Africa and is largely unfinished — the vizier who commissioned it died before completion, which is the story of ambitious architectural projects in any century.

To see the Sahara, {{CTA:activity:viator:sahara desert tour marrakech merzouga:a one or two-day tour to the Merzouga desert}} from Marrakech is the most transformative excursion you can make in North Africa. The sand in your shoes on the flight home is a free souvenir that lasts for weeks.`,
    },
  },

  // ─── DUBAI ────────────────────────────────────────────────────────────────────
  {
  id: 10,
  slug: "dubai-guia-2026",
  enSlug: "dubai-guide-2026",
  narrator: "david",
  city: "Dubai",
  country: { es: "Emiratos Árabes Unidos", en: "United Arab Emirates" },
  emoji: "🏙️",
  date: "2026-02-01",
  readTime: "11 min",
  category: "asia",
  heroImage: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80",
  title: {
    es: "Dubái: El Futuro Existe y Tiene el Aire Acondicionado Más Potente del Mundo",
    en: "Dubai: The Future Is Here, Fully Air-Conditioned, and Surprisingly Affordable If You Ignore the Cocktails",
  },
  subtitle: {
    es: "Rascacielos récord, desierto infinito y lujo sin límites — con una factura del minibar que te hará reconsiderar tus decisiones vitales.",
    en: "Record-breaking skyscrapers, endless desert and boundless luxury — plus a drinks bill that will prompt genuine soul-searching.",
  },
  excerpt: {
    es: "De la cima del Burj Khalifa al silencio del desierto de Al Marmoom: Dubái es uno de los viajes más espectaculares que existen, y uno de los más caros si no te andas con ojo.",
    en: "From the top of the Burj Khalifa to the silence of the Al Marmoom desert: Dubai is one of the most spectacular trips on earth — and one of the most expensive if you're not paying attention.",
  },
  metaDescription: {
    es: "Guía completa Dubái 2026: qué ver, dónde dormir, cómo moverse y los mejores consejos para aprovechar al máximo tu viaje sin hipotecarte en el minibar.",
    en: "Complete Dubai 2026 guide: what to see, where to stay, how to get around and the best tips to make the most of your trip without remortgaging for room service.",
  },
  keywords: {
    es: ["guía dubai", "dubai 2026", "qué ver en dubai", "burj khalifa", "desierto dubai", "emiratos árabes viaje"],
    en: ["dubai guide", "dubai 2026", "things to do dubai", "burj khalifa", "dubai desert", "uae travel"],
  },
  pointsOfInterest: [
    {
      name: "Burj Khalifa",
      description: { es: "El edificio más alto del mundo ofrece vistas de 360° desde la plataforma At the Top (pisos 124 y 148). Reserva online para evitar colas y conseguir el mejor precio — aunque 'mejor precio' en Dubái es un concepto relativo.", en: "The world's tallest building offers 360° views from the At the Top observation deck (floors 124 and 148). Book online to skip queues and get the best price — though 'best price' in Dubai is always a relative concept." },
      type: "landmark",
      lat: 25.1972, lng: 55.2744,
      affiliateLinks: [{ partner: "tiqets", query: "burj khalifa at the top", label: { es: "Entradas Burj Khalifa", en: "Burj Khalifa Tickets" } }],
    },
    {
      name: "Dubai Mall",
      description: { es: "El mayor centro comercial del mundo alberga también el Dubai Aquarium, una pista de hielo y la Dubai Fountain. Puedes entrar a por agua y salir tres horas después sin saber exactamente qué pasó.", en: "The world's largest shopping mall also houses the Dubai Aquarium, an ice rink and the Dubai Fountain. You can enter for a bottle of water and emerge three hours later genuinely unsure what happened." },
      type: "attraction",
      lat: 25.1985, lng: 55.2796,
      affiliateLinks: [],
    },
    {
      name: "Desierto de Dubai — Al Marmoom",
      description: { es: "A 45 minutos del centro, las dunas de Al Marmoom ofrecen una experiencia radicalmente diferente al lujo del centro. El safari en 4x4 al atardecer es obligatorio — y la única actividad de Dubái donde el precio no te provoca un síncope.", en: "45 minutes from the centre, the Al Marmoom dunes offer a radically different experience to downtown excess. The sunset 4x4 safari is unmissable — and one of the few Dubai activities that won't give you palpitations at checkout." },
      type: "nature",
      lat: 24.8767, lng: 55.5005,
      affiliateLinks: [{ partner: "getyourguide", query: "dubai desert safari", label: { es: "Safari en el desierto", en: "Desert Safari" } }],
    },
    {
      name: "Dubai Creek & Al Fahidi",
      description: { es: "El corazón histórico de Dubái. El barrio Al Fahidi conserva las torres de viento de barro y el Museo de Dubái. Cruza el Creek en abra por 1 dírhams — la única experiencia auténticamente barata de la ciudad.", en: "Dubai's historic heart. The Al Fahidi district preserves the wind towers and the Dubai Museum. Cross the Creek by abra for 1 dirham — officially the cheapest and most charming thing you can do in this city." },
      type: "historic",
      lat: 25.2637, lng: 55.2972,
      affiliateLinks: [],
    },
    {
      name: "Palm Jumeirah & Atlantis",
      description: { es: "La isla artificial más famosa del mundo. El parque acuático Aquaventure del hotel Atlantis te ofrece un día de adrenalina total — con una tarifa de entrada que también es bastante adrenalínica.", en: "The world's most famous artificial island. The Atlantis hotel's Aquaventure waterpark delivers a full adrenaline day — the ticket price alone will give you a head start on the adrenaline." },
      type: "landmark",
      lat: 25.1124, lng: 55.1390,
      affiliateLinks: [{ partner: "tiqets", query: "atlantis aquaventure dubai", label: { es: "Entradas Aquaventure", en: "Aquaventure Tickets" } }],
    },
  ],
  events: [
    {
      name: "Dubai Shopping Festival",
      type: "festival",
      date: "Enero 2026",
      description: { es: "El mayor festival de compras del mundo con descuentos masivos, shows y sorteos de coches y lingotes de oro durante todo enero. El único lugar del planeta donde hacer cola para entrar a un centro comercial a las 11 de la noche se considera una actividad cultural perfectamente normal.", en: "The world's biggest shopping festival with massive discounts, shows and draws for cars and gold bars throughout January. The only place on earth where queuing to enter a shopping mall at 11pm is considered a perfectly normal cultural activity." },
      affiliateLinks: [
        { label: { es: "Experiencias Dubai Shopping Festival", en: "Dubai Shopping Festival experiences" }, partner: "getyourguide", query: "dubai shopping festival 2026 experience", type: "activity" },
        { label: { es: "Tour compras Dubai Mall", en: "Dubai Mall shopping tour" }, partner: "viator", query: "dubai shopping festival mall tour january", type: "activity" },
      ],
    },
    {
      name: "Dubai Airshow",
      type: "technology",
      date: "Noviembre 2025",
      description: { es: "La feria aeronáutica más importante de la región con exhibiciones espectaculares y los últimos avances en aviación civil y militar. Para cuando salgas habrás considerado seriamente comprarte un avión privado — o al menos un asiento en business class.", en: "The region's most important aeronautical fair with spectacular airshows and the latest advances in civil and military aviation. You will leave having briefly but seriously considered purchasing a private jet — or at minimum upgrading to business class for the flight home." },
      affiliateLinks: [
        { label: { es: "Entradas Dubai Airshow", en: "Dubai Airshow tickets" }, partner: "tiqets", query: "dubai airshow 2026 tickets", type: "tickets" },
        { label: { es: "Tour aviación y tecnología Dubai", en: "Dubai aviation and technology tour" }, partner: "getyourguide", query: "dubai airshow aviation technology tour", type: "activity" },
      ],
    },
    {
      name: "Dubai World Cup",
      type: "sport",
      date: "Marzo 2026",
      description: { es: "La carrera de caballos con el mayor premio en metálico del mundo en el hipódromo de Meydan. Entrada gratuita — lo cual, en Dubái, merece documentarse, enmarcarse y colgarse en la pared como recordatorio de que los milagros existen.", en: "The horse race with the world's largest prize money at Meydan Racecourse. Free admission — which, in Dubai, is a fact so statistically improbable it deserves to be framed and hung on a wall as evidence that miracles occur." },
      affiliateLinks: [
        { label: { es: "Experiencia Dubai World Cup", en: "Dubai World Cup experience" }, partner: "getyourguide", query: "dubai world cup meydan horse race 2026", type: "activity" },
        { label: { es: "Tour hipódromo Meydan", en: "Meydan racecourse tour" }, partner: "viator", query: "dubai world cup meydan racecourse experience", type: "activity" },
      ],
    },
  ],
  services: {
    flights:     ["skyscanner", "kiwi"],
    hotels:      ["booking", "expedia"],
    cars:        ["discovercars", "rentalcars"],
    activities:  ["getyourguide", "viator", "tiqets", "klook"],
    insurance:   ["safetywing", "worldnomads"],
    esim:        ["airalo", "holafly", "saily", "yesim"],
    transfers:   ["intui", "welcomepickups", "gettransfer", "indrive"],
    vpn:         ["nordvpn"],
  },
  content: {
    es: `Fui a Dubái buscando comida local. Sé cómo suena. Dubái no es el destino obvio cuando buscas autenticidad gastronómica — es la ciudad más construida del mundo, el lugar donde el lujo se ha convertido en su propia categoría arquitectónica. Pero precisamente por eso: si encuentras la comida local aquí, es porque merece la pena encontrarla.

La encontré en Deira. En el barrio más antiguo de la ciudad, cruzando el Dubai Creek en abra por un dírham, hay restaurantes de biriyani que llevan abiertos desde antes de que existiera el Burj Khalifa. El barrio de Bur Dubai tiene chiringuitos de shawarma que funcionan con los mismos ingredientes y la misma receta desde los años 70. En el Mercado de Especias de Deira, el cardamomo, el azafrán y la canela se venden en costales y el aire huele a algo que no tiene nombre en ninguna carta de restaurante de moda.

Pero claro. Dubái también tiene el Burj Khalifa. Y merece la visita aunque solo sea para entender la escala de lo que decidió construir alguien con visión y presupuesto ilimitado. {{CTA:tickets:tiqets:burj khalifa at the top entrada:Reserva tu entrada al Burj Khalifa}} con tiempo — las entradas para los pisos altos se agotan semanas antes, y el precio sube cuanto más tarde reserves. La mejor hora: atardecer, cuando el desierto se tiñe de naranja y la ciudad se enciende toda a la vez desde 828 metros de altura.

Al lado está el Dubai Mall, que alberga el mayor acuario del mundo accesible desde el interior de un centro comercial, una pista de hielo, y exactamente el mismo pánico de "¿cuánto tiempo llevo aquí?" que en cualquier gran centro comercial del mundo pero multiplicado por diez. La Dubai Fountain, que actúa frente al mall por las noches, es gratis y es cinematográfica — dos cualidades incompatibles en la mayoría de las ciudades del mundo pero no en esta.

El barrio histórico de Al Fahidi es la Dubái premoderna: torres de viento de barro que funcionaban como aire acondicionado natural, callejones estrechos, el Dubai Museum que explica cómo era esta ciudad antes del petróleo. El contraste con el skyline de Sheikh Zayed Road visible al fondo es la imagen más honesta que puedes tener de cómo funciona este lugar.

Para el desierto: {{CTA:activity:getyourguide:dubai desert safari sunset:Reserva tu safari al atardecer}} en Al Marmoom, a 45 minutos del centro. Incluye sandboarding, sesión de fotos en las dunas y cena beduina bajo las estrellas. Es la experiencia más barata del viaje y la que más recuerdo. El desierto de noche, con el cielo sin contaminación lumínica, es otra ciudad completamente distinta.

La Palm Jumeirah merece una mañana: monorraíl de extremo a extremo con vistas a toda la costa, el hotel Atlantis con su parque acuático. {{CTA:activity:tiqets:atlantis aquaventure water park dubai:las entradas al Aquaventure}} son caras pero justificadas con familia o con treinta y cinco grados en el exterior y ganas de pasar el día en el agua.

Para moverse, el metro conecta los puntos principales de Sheikh Zayed Road con una eficiencia que da envidia. Para el resto, {{CTA:service:discovercars:alquiler coche dubai:Un coche de alquiler}} da libertad para llegar al desierto y a las playas del norte. Y para comer comida local de verdad: Deira, siempre Deira.`,
    en: `I went to Dubai looking for local food. I know how that sounds. Dubai is not the obvious destination when you're searching for gastronomic authenticity — it's the most constructed city in the world, the place where luxury has become its own architectural category. But precisely for that reason: if you find local food here, it's worth finding.

I found it in Deira. In the oldest neighbourhood of the city, crossing Dubai Creek by abra for one dirham, there are biryani restaurants that have been open since before the Burj Khalifa existed. The Bur Dubai area has shawarma spots operating with the same ingredients and the same recipe since the 1970s. In the Deira Spice Market, cardamom, saffron and cinnamon are sold by the sack and the air smells of something that has no name on any fashionable restaurant menu.

But of course. Dubai also has the Burj Khalifa. And it deserves a visit if only to understand the scale of what someone with vision and unlimited budget decided to build. {{CTA:tickets:tiqets:burj khalifa at the top entrada:Book your Burj Khalifa ticket}} well in advance — upper floor tickets sell out weeks ahead and the price rises the later you book. Best time: sunset, when the desert turns orange and the entire city lights up at once from 828 metres above it.

Next door is Dubai Mall, which houses the world's largest shopping-mall aquarium, an ice rink, and exactly the same "how long have I been in here?" panic as any large mall in the world, multiplied by ten. The Dubai Fountain, which performs in front of the mall at night, is free and cinematic — two qualities that are incompatible in most cities but not this one.

The historic Al Fahidi neighbourhood is pre-modern Dubai: mud wind towers that functioned as natural air conditioning, narrow alleyways, the Dubai Museum explaining what this city looked like before oil. The contrast with the Sheikh Zayed Road skyline visible in the background is the most honest image you can get of how this place actually works.

For the desert: {{CTA:activity:getyourguide:dubai desert safari sunset:Book your sunset safari}} at Al Marmoom, 45 minutes from the centre. It includes sandboarding, a dune photo session and a Bedouin dinner under the stars. It's the cheapest experience of the trip and the one I remember most. The desert at night, with no light pollution, is an entirely different city.

Palm Jumeirah deserves a morning: the monorail end to end with views of the whole coastline, the Atlantis hotel with its water park. {{CTA:activity:tiqets:atlantis aquaventure water park dubai:Aquaventure tickets}} are expensive but justified with family or with thirty-five degrees outside and a desire to spend the day in the water.

For getting around, the metro connects the main points on Sheikh Zayed Road with an efficiency that other cities should study. For everything else, {{CTA:service:discovercars:alquiler coche dubai:a rental car}} gives freedom to reach the desert and the northern beaches. And for genuinely local food: Deira, always Deira.`,
  },
},

// ─── PRAGA ────────────────────────────────────────────────────────────────────
{
  id: 11,
  slug: "praga-guia-2026",
  enSlug: "prague-guide-2026",
  narrator: "carmen",
  city: "Praga",
  country: { es: "República Checa", en: "Czech Republic" },
  emoji: "🏰",
  date: "2026-02-08",
  readTime: "10 min",
  category: "europe",
  heroImage: "https://images.unsplash.com/photo-1541849546-216549ae216d?w=1200&q=80",
  title: {
    es: "Praga: Ciudad de Cuento, Cervezas de 2€ y Hordas de Despedidas de Soltero",
    en: "Prague: Fairy-Tale City, €2 Beers, and Stag Parties as Far as the Eye Can See",
  },
  subtitle: {
    es: "Bohemia medieval, cervezas legendarias y uno de los cascos históricos más intactos de Europa — compartido con medio continente cada fin de semana.",
    en: "Medieval Bohemia, legendary beers and one of Europe's most intact historic old towns — shared with approximately half the continent every weekend.",
  },
  excerpt: {
    es: "El Puente de Carlos, el castillo que domina la ciudad y los subterráneos de Josefov: Praga es la capital de cuento de hadas que Europa guardaba en secreto hasta que dejó de guardarla.",
    en: "Charles Bridge, the castle that dominates the city and the underground of Josefov: Prague is the fairy-tale capital Europe kept secret — right up until it didn't.",
  },
  metaDescription: {
    es: "Guía completa Praga 2026: el Castillo, el Barrio Judío, las mejores cervezas y todos los consejos para visitar la capital checa sin perderte nada — ni a los grupos de despedida.",
    en: "Complete Prague 2026 guide: the Castle, Jewish Quarter, the best beers and all the tips to visit the Czech capital without missing anything important, stag parties included.",
  },
  keywords: {
    es: ["guía praga", "praga 2026", "qué ver en praga", "castillo de praga", "puente de carlos", "república checa viaje"],
    en: ["prague guide", "prague 2026", "things to do prague", "prague castle", "charles bridge", "czech republic travel"],
  },
  pointsOfInterest: [
    {
      name: "Castillo de Praga",
      description: { es: "El complejo de castillos habitado más grande del mundo, con la Catedral de San Vito, el Callejón del Oro y vistas panorámicas sobre toda la ciudad. Grande, impresionante y lleno de gente con palos de selfie — pero aun así vale cada paso.", en: "The world's largest inhabited castle complex, with St Vitus Cathedral, Golden Lane and panoramic views over the entire city. Vast, magnificent, and packed with people on selfie sticks — still worth every step." },
      type: "historic",
      lat: 50.0909, lng: 14.4005,
      affiliateLinks: [{ partner: "tiqets", query: "prague castle tickets", label: { es: "Entradas Castillo de Praga", en: "Prague Castle Tickets" } }],
    },
    {
      name: "Puente de Carlos",
      description: { es: "El puente más fotografiado de Europa, con 30 estatuas barrocas y aproximadamente 300 grupos de turistas a cualquier hora del día. Madruga para verlo sin multitudes o asume tu rol de extra de fondo en las fotos de desconocidos.", en: "The most photographed bridge in Europe, featuring 30 baroque statues and an equal number of tourist groups at any given moment. Go at dawn or accept your permanent role as background extra in strangers' holiday photos." },
      type: "landmark",
      lat: 50.0865, lng: 14.4114,
      affiliateLinks: [],
    },
    {
      name: "Barrio Judío — Josefov",
      description: { es: "El antiguo gueto judío conserva seis sinagogas, el cementerio medieval y el Museo Judío de Praga. Una visita imprescindible para entender la historia de Europa — y la única parte de la ciudad donde el silencio se mantiene sin esfuerzo.", en: "The former Jewish ghetto preserves six synagogues, the medieval cemetery and the Jewish Museum of Prague. An essential visit to understand European history — and the one part of Prague where silence holds naturally, without asking." },
      type: "historic",
      lat: 50.0894, lng: 14.4182,
      affiliateLinks: [{ partner: "tiqets", query: "jewish museum prague josefov", label: { es: "Museo Judío de Praga", en: "Jewish Museum Prague" } }],
    },
    {
      name: "Plaza de la Ciudad Vieja y Reloj Astronómico",
      description: { es: "El corazón de Praga. El Reloj Astronómico del siglo XV desata un pequeño espectáculo cada hora que atrae a cincuenta personas por cada metro cuadrado disponible. Sube al Ayuntamiento para las mejores vistas — y para escapar de la aglomeración.", en: "Prague's heart. The 15th-century Astronomical Clock puts on a small show every hour that attracts roughly fifty people per available square metre. Climb the Town Hall for the best views — and a moment's respite from the crowd." },
      type: "landmark",
      lat: 50.0870, lng: 14.4213,
      affiliateLinks: [],
    },
    {
      name: "Barrio de Vinohrady",
      description: { es: "El barrio más auténtico de Praga para comer, beber y vivir como un local. Cafés de especialidad, bistrós modernos y, lo más importante, sin grupos de despedida de soltero con camisetas a juego.", en: "Prague's most authentic neighbourhood for eating, drinking and living like a local. Specialty coffee shops, modern bistros and, crucially, no stag parties in matching T-shirts." },
      type: "neighborhood",
      lat: 50.0750, lng: 14.4420,
      affiliateLinks: [],
    },
  ],
  events: [
    {
      name: "Mercados de Navidad de Praga",
      type: "festival",
      date: "Diciembre 2026",
      description: { es: "Los mercados navideños de la Plaza de la Ciudad Vieja y Wenceslao están entre los más bonitos de Europa, con artesanía tradicional, vino caliente y temperaturas que te recordarán por qué Centroeuropa inventó los abrigos de pluma. Llegarás por los mercados. Te quedarás por el trdelník.", en: "The Christmas markets at Old Town Square and Wenceslas Square are among Europe's most beautiful, with traditional crafts, mulled wine and temperatures that explain why Central Europe invented the down coat. You'll come for the markets. You'll stay for the trdelník." },
      affiliateLinks: [
        { label: { es: "Tour mercados Navidad Praga", en: "Prague Christmas markets tour" }, partner: "getyourguide", query: "prague christmas markets tour december 2026", type: "activity" },
        { label: { es: "Experiencia navideña Praga", en: "Prague Christmas experience" }, partner: "viator", query: "prague christmas market old town square", type: "activity" },
      ],
    },
    {
      name: "Prague Spring Music Festival",
      type: "cultural",
      date: "Mayo 2026",
      description: { es: "El festival de música clásica más importante de Europa Central, con conciertos en palacios, iglesias y salas históricas durante tres semanas. La mejor excusa para vestirse bien y fingir con total convicción que entiendes de música clásica — al menos hasta el descanso.", en: "Central Europe's most important classical music festival, with concerts in palaces, churches and historic halls for three weeks. The finest excuse to dress up and convincingly pretend you understand classical music — at least until the interval." },
      affiliateLinks: [
        { label: { es: "Entradas Prague Spring Festival", en: "Prague Spring Festival tickets" }, partner: "tiqets", query: "prague spring music festival 2026 tickets", type: "tickets" },
        { label: { es: "Conciertos clásicos Praga", en: "Prague classical concerts" }, partner: "getyourguide", query: "prague classical music concert palace", type: "activity" },
      ],
    },
    {
      name: "Prague International Marathon",
      type: "sport",
      date: "Mayo 2026",
      description: { es: "Una de las maratones urbanas más espectaculares del mundo, con el trazado atravesando el casco histórico Patrimonio de la Humanidad. Correr el Puente de Carlos en el kilómetro 20 es el único momento en que el dolor de piernas parece completamente justificado.", en: "One of the world's most spectacular city marathons, with the route passing through the UNESCO World Heritage historic centre. Crossing Charles Bridge at kilometre 20 is the one moment when your aching legs feel entirely and completely justified." },
      affiliateLinks: [
        { label: { es: "Inscripción Maratón de Praga", en: "Prague Marathon registration" }, partner: "getyourguide", query: "prague international marathon 2026 registration", type: "activity" },
        { label: { es: "Tour running casco histórico Praga", en: "Prague historic centre running tour" }, partner: "viator", query: "prague marathon running historical centre tour", type: "activity" },
      ],
    },
  ],
  services: {
    flights:     ["skyscanner", "kiwi"],
    hotels:      ["booking", "expedia"],
    cars:        ["discovercars", "rentalcars"],
    activities:  ["getyourguide", "viator", "tiqets", "klook"],
    insurance:   ["safetywing", "worldnomads"],
    esim:        ["airalo", "holafly", "saily", "yesim"],
    transfers:   ["intui", "welcomepickups", "gettransfer", "indrive"],
    transport:   ["omio"],
  },
  content: {
    es: `Fui a Praga para una despedida de soltera. No era la mía. Era la de una amiga de una amiga a quien conocía lo suficientemente bien como para que me invitaran y lo suficientemente poco como para no poder negarme con dignidad. Llegué el jueves pensando en quedarme el fin de semana.

Hay cosas que cambian los planes y hay otras cosas que los hacen obsoletos. El Prague Spring — el festival de música clásica más importante de Europa del Este, que lleva celebrándose desde 1946 — empezaba el lunes siguiente. La Orquesta Filarmónica Checa tocando en el Rudolfinum. La despedida de soltera terminó el sábado. Yo me quedé hasta el jueves siguiente. Praga tiene esa habilidad.

El Castillo de Praga domina la ciudad desde la colina de Hradčany con la contundencia de quien lleva ahí desde el siglo IX y no tiene ninguna intención de moverse. Es el complejo de castillo habitado más grande del mundo y alberga la Catedral de San Vito, cuyas vidrieras gotican la luz de la mañana de una forma que justifica madrugar. {{CTA:tickets:tiqets:prague castle st vitus cathedral:Reserva tu entrada al Castillo}} — el combinado da acceso al Palacio Real, la Basílica de San Jorge y el Callejón del Oro donde Kafka vivió brevemente y donde hoy hay souvenirs. Kafka lo habría convertido en una novela.

El Puente de Carlos es la postal de Praga y merece la madrugada. Al amanecer, antes de las 7, lo tienes prácticamente para ti: las 30 estatuas barrocas de los santos, el río Moldava, las torres góticas al fondo y una niebla matutina que hace todo parecer una escena de un libro del siglo XVIII. A las 11, es el fondo de cuatro millones de fotografías de desconocidos.

El Barrio Judío de Josefov es, posiblemente, la visita más importante de Praga. {{CTA:tickets:tiqets:jewish museum prague josefov synagogues:Entra al Museo Judío}} — el ticket combinado da acceso a seis sinagogas y al cementerio medieval donde doce generaciones de judíos de Praga están enterradas en 12.000 metros cuadrados. Es uno de esos lugares que te cambia la perspectiva sobre Europa y sobre la historia y sobre lo que significa que algo sobreviva cuando todo a su alrededor no lo hace.

El barrio de Vinohrady, lejos de los circuitos turísticos, tiene los mejores cafés de especialidad de la ciudad, cocina checa moderna y cervecerías artesanales donde una Pilsner Urquell cuesta menos de dos euros. En 2026, esto sigue siendo uno de los mejores datos estadísticos de Europa.

{{CTA:activity:getyourguide:prague free walking tour old town:Un free walking tour}} por el casco histórico es la forma más inteligente de empezar — los guías locales conocen las historias que no aparecen en ninguna guía impresa, incluyendo por qué el Reloj Astronómico se construyó en 1410 y qué hicieron con el maestro relojero cuando terminó. (No es agradable. Es perfectamente medieval.)

Para moverse: el metro y los tranvías de Praga son eficientes y baratos. El casco histórico se recorre perfectamente a pie, con calzado cómodo, porque los adoquines son hermosos pero no tienen ninguna consideración por tus rodillas.`,
    en: `I went to Prague for a hen party. Not my own. It was for a friend of a friend I knew well enough to be invited and insufficiently enough to decline gracefully. I arrived on Thursday thinking I'd stay the weekend.

Some things change plans. Other things make them entirely obsolete. The Prague Spring — Eastern Europe's most important classical music festival, held annually since 1946 — was starting the following Monday. The Czech Philharmonic at the Rudolfinum. The hen party ended on Saturday. I stayed until the following Thursday. Prague has that effect.

Prague Castle dominates the city from Hradčany hill with the authority of something that's been there since the 9th century and has no intention of moving. It's the world's largest inhabited castle complex and houses St Vitus Cathedral, whose Gothic stained glass transforms morning light in a way that justifies waking early. {{CTA:tickets:tiqets:prague castle st vitus cathedral:Book your Castle ticket}} — the combination includes the Royal Palace, St George's Basilica and the legendary Golden Lane where Kafka briefly lived and where there are now souvenir shops. Kafka would have made it into a novel.

Charles Bridge is Prague's postcard and it deserves the early start. At dawn, before 7am, you have it nearly to yourself: the 30 Baroque statues of saints, the Vltava River, the Gothic towers in the background and a morning mist that makes everything look like a scene from an 18th-century book. By 11am it's the background for four million photographs taken by people you don't know.

Josefov, the Jewish Quarter, is arguably Prague's most important visit. {{CTA:tickets:tiqets:jewish museum prague josefov synagogues:Enter the Jewish Museum}} — the combination ticket gives access to six synagogues and the medieval cemetery where twelve generations of Prague's Jewish community are buried in 12,000 square metres. It's one of those places that changes your perspective on Europe and on history and on what it means for something to survive when everything around it didn't.

The Vinohrady neighbourhood, away from tourist circuits, has the city's best specialty coffee shops, modern Czech cuisine and craft beer halls where a Pilsner Urquell costs under two euros. In 2026 this remains one of Europe's finest statistical facts.

{{CTA:activity:getyourguide:prague free walking tour old town:A free walking tour}} through the historic centre is the most intelligent way to start — local guides know the stories that appear in no printed guidebook, including why the Astronomical Clock was built in 1410 and what was done to the master clockmaker when he finished it. (It's not pleasant. It's perfectly medieval.)

For getting around: Prague's metro and trams are efficient and cheap. The historic centre is entirely walkable, in comfortable shoes, because the cobblestones are beautiful but have no sympathy for your knees.`,
  },
},

// ─── BALI ─────────────────────────────────────────────────────────────────────
{
  id: 12,
  slug: "bali-guia-2026",
  enSlug: "bali-guide-2026",
  narrator: "elena",
  city: "Bali",
  country: { es: "Indonesia", en: "Indonesia" },
  emoji: "🌴",
  date: "2026-02-15",
  readTime: "12 min",
  category: "asia",
  heroImage: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80",
  title: {
    es: "Bali: Templos, Arrozales y la Búsqueda Eterna de lo Auténtico",
    en: "Bali: Temples, Rice Terraces, and the Eternal Search for 'Authentic' Experiences",
  },
  subtitle: {
    es: "Templos milenarios, junglas volcánicas y playas con olas perfectas — compartidas con diez mil personas que también vinieron a desconectar.",
    en: "Ancient temples, volcanic jungles and beaches with perfect waves — shared with ten thousand other people who also came here to disconnect.",
  },
  excerpt: {
    es: "Ubud, Seminyak, Uluwatu: Bali es tres destinos en uno. Una isla donde la espiritualidad hinduista impregna cada rincón y los retiros de yoga compiten con los beach clubs por el alma del viajero.",
    en: "Ubud, Seminyak, Uluwatu: Bali is three destinations in one. An island where Hindu spirituality permeates every corner and yoga retreats compete with beach clubs for the traveller's soul.",
  },
  metaDescription: {
    es: "Guía completa Bali 2026: Ubud, Seminyak, Uluwatu, los mejores templos, playas y consejos para visitar la isla indonesia — incluyendo cómo sobrevivir a las terrazas de arroz con monos.",
    en: "Complete Bali 2026 guide: Ubud, Seminyak, Uluwatu, the best temples, beaches and tips for visiting the Indonesian island — including how to handle the monkey forest with your snacks intact.",
  },
  keywords: {
    es: ["guía bali", "bali 2026", "qué ver en bali", "ubud bali", "templos bali", "indonesia viaje"],
    en: ["bali guide", "bali 2026", "things to do bali", "ubud bali", "bali temples", "indonesia travel"],
  },
  pointsOfInterest: [
    {
      name: "Templo Tanah Lot",
      description: { es: "El templo más fotografiado de Bali emerge sobre una roca en el océano como una postal de dimensiones sobrehumanas. El atardecer desde aquí es uno de los más espectaculares de Asia — y compartido con aproximadamente ochocientas personas que tuvieron exactamente tu misma idea.", en: "Bali's most photographed temple rises from a rock in the ocean like an oversized postcard. Sunset from here is one of the most spectacular in all of Asia — shared with roughly eight hundred people who had exactly the same idea." },
      type: "landmark",
      lat: -8.6215, lng: 115.0867,
      affiliateLinks: [{ partner: "tiqets", query: "tanah lot temple bali sunset", label: { es: "Entrada Tanah Lot", en: "Tanah Lot Ticket" } }],
    },
    {
      name: "Terrazas de Arroz de Tegallalang",
      description: { es: "El sistema de irrigación subak inscrito por la UNESCO. Las terrazas de arroz en cascada al norte de Ubud son la imagen icónica de Bali — ve por la mañana temprano antes de que lleguen los instagramers con sus atuendos de colores.", en: "The UNESCO-inscribed subak irrigation system. The cascading rice terraces north of Ubud are Bali's iconic image — arrive early before the influencers in coordinated outfits claim the best angles." },
      type: "nature",
      lat: -8.4322, lng: 115.2791,
      affiliateLinks: [],
    },
    {
      name: "Ubud — Centro espiritual y cultural",
      description: { es: "El corazón cultural de Bali: galerías de arte, el palacio real, el Mercado de Ubud y el bosque de monos — donde los monos te quitarán las gafas de sol con una eficiencia que haría llorar de envidia a cualquier carterista profesional.", en: "Bali's cultural heart: art galleries, the royal palace, Ubud Market and the monkey forest — where the monkeys will relieve you of your sunglasses with an efficiency that would make a professional pickpocket weep." },
      type: "neighborhood",
      lat: -8.5069, lng: 115.2625,
      affiliateLinks: [{ partner: "getyourguide", query: "ubud culture day tour temples rice terraces", label: { es: "Tour cultural Ubud", en: "Ubud Culture Day Tour" } }],
    },
    {
      name: "Templo Uluwatu",
      description: { es: "En el borde de un acantilado de 70 metros sobre el océano Índico, Uluwatu es el templo más dramáticamente emplazado de Bali. El Kecak Fire Dance al atardecer es imprescindible — y los monos aquí también son ladrones, pero al menos el escenario es espectacular.", en: "On the edge of a 70-metre cliff above the Indian Ocean, Uluwatu is Bali's most dramatically situated temple. The sunset Kecak Fire Dance is unmissable — the monkeys here are also thieves, but at least the backdrop is spectacular." },
      type: "landmark",
      lat: -8.8291, lng: 115.0849,
      affiliateLinks: [{ partner: "viator", query: "uluwatu temple kecak dance bali", label: { es: "Tour Uluwatu + Kecak", en: "Uluwatu & Kecak Dance Tour" } }],
    },
    {
      name: "Monte Batur — Trekking al amanecer",
      description: { es: "El volcán activo de 1717 metros ofrece uno de los trekkings más accesibles y espectaculares de Asia. Salida a las 2h de la madrugada para llegar a la cima al amanecer — porque si vas a sufrir, al menos que el paisaje lo justifique.", en: "The 1,717-metre active volcano offers one of Asia's most accessible and spectacular treks. Depart at 2am to reach the summit at sunrise — because if you're going to suffer, the view should at least be worth it." },
      type: "nature",
      lat: -8.2422, lng: 115.3752,
      affiliateLinks: [{ partner: "getyourguide", query: "mount batur sunrise trek bali", label: { es: "Trek amanecer Monte Batur", en: "Mount Batur Sunrise Trek" } }],
    },
  ],
  events: [
    {
      name: "Nyepi — Día de Silencio de Bali",
      type: "cultural",
      date: "Marzo 2026",
      description: { es: "El Año Nuevo balinés: 24 horas de silencio total en toda la isla. El aeropuerto de Bali cierra. Tu vuelo no cierra, pero el aeropuerto sí. Piénsalo bien antes de reservar para ese día. La experiencia de redescubrir el silencio real — y el aburrimiento real — no tiene precio.", en: "The Balinese New Year: 24 hours of total silence across the entire island. Bali airport closes. Your flight doesn't close, but the airport does. Think carefully before booking for that day. The experience of rediscovering real silence — and real boredom — is genuinely priceless." },
      affiliateLinks: [
        { label: { es: "Experiencia Nyepi en Bali", en: "Nyepi experience in Bali" }, partner: "getyourguide", query: "nyepi bali day of silence experience 2026", type: "activity" },
        { label: { es: "Tour Ogoh-ogoh parade Bali", en: "Bali Ogoh-ogoh parade tour" }, partner: "viator", query: "bali nyepi ogoh ogoh parade cultural", type: "activity" },
      ],
    },
    {
      name: "Bali Arts Festival",
      type: "art",
      date: "Junio–Julio 2026",
      description: { es: "Un mes de danza, música gamelan, teatro tradicional y artesanía en Denpasar. El único festival del mundo donde la palabra auténtico no necesita entrecomillarse y donde entiendes en quince minutos por qué Bali tiene fama espiritual que trasciende los posts de Instagram.", en: "A month of dance, gamelan music, traditional theatre and crafts in Denpasar. The one festival where the word authentic needs no scare quotes, and where you understand within fifteen minutes why Bali's spiritual reputation transcends Instagram posts." },
      affiliateLinks: [
        { label: { es: "Tour Bali Arts Festival", en: "Bali Arts Festival tour" }, partner: "getyourguide", query: "bali arts festival denpasar june 2026", type: "activity" },
        { label: { es: "Experiencia danza y gamelan Bali", en: "Bali dance and gamelan experience" }, partner: "viator", query: "bali traditional dance gamelan festival", type: "activity" },
      ],
    },
    {
      name: "Bali Spirit Festival",
      type: "cultural",
      date: "Abril 2026",
      description: { es: "El mayor festival de yoga, danza y música del sudeste asiático reúne a miles de personas en Ubud durante cinco días. Si viniste a Bali buscando lo auténtico y encuentras esto, Bali tiene sentido del humor — y también el mejor brunch post-yoga del hemisferio sur.", en: "Southeast Asia's largest yoga, dance and music festival brings thousands to Ubud for five days. If you came to Bali searching for the authentic and found this instead, Bali has a sense of humour — and also the best post-yoga brunch in the southern hemisphere." },
      affiliateLinks: [
        { label: { es: "Entradas Bali Spirit Festival", en: "Bali Spirit Festival tickets" }, partner: "tiqets", query: "bali spirit festival ubud 2026 tickets", type: "tickets" },
        { label: { es: "Experiencia yoga y meditación Ubud", en: "Ubud yoga and meditation experience" }, partner: "getyourguide", query: "bali spirit festival yoga ubud experience", type: "activity" },
      ],
    },
  ],
  services: {
    flights:     ["skyscanner", "kiwi"],
    hotels:      ["booking", "expedia"],
    cars:        ["discovercars", "localrent"],
    activities:  ["getyourguide", "viator", "tiqets", "klook"],
    insurance:   ["safetywing", "worldnomads"],
    esim:        ["airalo", "holafly", "saily", "yesim"],
    transfers:   ["intui", "welcomepickups", "gettransfer", "indrive"],
    vpn:         ["nordvpn"],
  },
  content: {
    es: `Llegué con un contrato de tres meses. Contrato real, con cliente real, en el que ponía explícitamente "trabajo remoto desde Bali" porque llevaba seis meses diciendo que iba a hacerlo y alguien me tomó en serio. Me instalé en Canggu con wifi, una moto de alquiler y la firme intención de ser productiva cuatro días a la semana y explorar los otros tres.

Ocho meses después, cuando por fin compré el billete de vuelta, había renovado el contrato dos veces, aprendido a hacer la ruta del aeropuerto al centro de Ubud sin GPS, sobrevivido a un eclipse lunar sobre el templo de Tanah Lot y conseguido que los monos del bosque sagrado de Ubud ya no me robaran los auriculares porque habían aprendido que no tenía comida encima. Bali hace eso.

Ubud es el punto de partida más inteligente de la isla. A 25 kilómetros del caos de Kuta, tiene galerías de arte, talleres de danza balinesa, cafés de especialidad con vistas a arrozales y el ambiente de quien se ha tomado la espiritualidad en serio sin ponerse pretencioso al respecto. {{CTA:activity:getyourguide:ubud culture day tour temples rice terraces:Un día de tours por Ubud}} es la forma más eficiente de ver los templos principales, las terrazas de Tegallalang y el volcán Kintamani en un día, que es lo que necesitas el primer día si quieres orientarte.

Las terrazas de arroz de Tegallalang son la imagen de Bali que todo el mundo reconoce. El sistema de irrigación subak, inscrito por la UNESCO hace siglos, creó estos paisajes en cascada que en temporada de lluvias son de un verde imposible. La clave: llega antes de las 8 de la mañana, antes de que lleguen los grupos con cámaras profesionales y atuendos coordinados para el contenido. La luz de la primera hora sobre el arroz mojado es de las mejores fotografías que he hecho en cuatro años viajando.

El Templo de Tanah Lot emerge sobre una roca volcánica en el océano al atardecer y se convierte en la postal de Bali más repetida por una razón: es genuinamente espectacular. Lo compartirás con ochocientas personas que tuvieron la misma idea, pero en este caso la multitud forma parte del ambiente.

El Templo de Uluwatu, sobre un acantilado de 70 metros en el extremo sur de la isla, añade altura y mar. El Kecak Fire Dance al atardecer — decenas de bailarines narran el Ramayana con voces sin instrumentos, con el océano Índico y el fuego de fondo — es la experiencia cultural más intensa de Bali. {{CTA:activity:viator:uluwatu temple kecak fire dance bali sunset:Reserva tu tour a Uluwatu con Kecak Dance}} para llegar antes de que empiece y conseguir los mejores asientos. Los monos también estarán ahí. Guarda el teléfono en el bolsillo.

Para los que pueden madrugar: el trek al volcán Batur. {{CTA:activity:getyourguide:mount batur sunrise trek bali:El trek al amanecer}} sale a las 2 de la mañana. Sí, las dos de la mañana. Se llega a los 1.717 metros de altitud justo cuando el sol aparece sobre el mar de nubes y el lago del cráter se tiñe de naranja. La bajada incluye baño en aguas termales. Cinco de las cinco personas del grupo dijo que repetiría.

Para alojarte: Ubud para cultura y naturaleza, Seminyak y Canggu para gastronomía y vida nocturna, Uluwatu para surf y atardeceres. {{CTA:hotel:booking:bali ubud boutique hotel:Compara hoteles en Bali}} — la diferencia de precio entre un tres y un cinco estrellas en Bali es sorprendentemente pequeña fuera de julio y agosto, lo cual es el argumento definitivo para el upgrade.`,
    en: `I arrived with a three-month contract. A real contract, with a real client, which explicitly stated "remote work from Bali" because I'd been saying I was going to do it for six months and someone finally took me seriously. I set up in Canggu with reliable wifi, a rented scooter and the firm intention of being productive four days a week and exploring the other three.

Eight months later, when I finally bought the return ticket, I had renewed the contract twice, learned the airport-to-Ubud route without GPS, survived a lunar eclipse over Tanah Lot temple, and trained the sacred monkeys in the Ubud forest to stop stealing my headphones because they'd learned I never had food on me. Bali does that.

Ubud is the most intelligent starting point on the island. 25 kilometres from the chaos of Kuta, it has art galleries, Balinese dance workshops, specialty coffee shops with rice terrace views and the energy of someone who has taken spirituality seriously without becoming insufferable about it. {{CTA:activity:getyourguide:ubud culture day tour temples rice terraces:A day tour around Ubud}} is the most efficient way to see the main temples, the Tegallalang terraces and Mount Kintamani in one day — which is what you need on day one if you want to orient yourself.

The Tegallalang rice terraces are the image of Bali everyone recognises. The UNESCO-inscribed subak irrigation system created these cascading landscapes centuries ago, and in the rainy season they're an impossible shade of green. The key: arrive before 8am, before the groups with professional cameras and coordinated outfits for content arrive. The early morning light on wet rice is some of the best photography I've managed in four years of travel.

Tanah Lot Temple rises from a volcanic rock in the ocean at sunset and becomes Bali's most replicated postcard for a reason: it's genuinely spectacular. You'll share it with eight hundred people who had the same idea, but here the crowd is part of the atmosphere.

Uluwatu Temple, on a 70-metre cliff at the island's southern tip, adds altitude and ocean. The Kecak Fire Dance at sunset — dozens of dancers narrating the Ramayana with voices and no instruments, with the Indian Ocean and fire behind them — is Bali's most intense cultural experience. {{CTA:activity:viator:uluwatu temple kecak fire dance bali sunset:Book your Uluwatu & Kecak Dance tour}} to arrive before it starts and get the best seats. The monkeys will also be there. Keep your phone in your pocket.

For those who can manage an early start: the Batur volcano trek. {{CTA:activity:getyourguide:mount batur sunrise trek bali:The sunrise trek}} departs at 2am. Yes, 2 in the morning. You reach 1,717 metres of altitude just as the sun appears above the cloud sea and the crater lake turns orange. The descent includes a dip in natural hot springs. All five people in my group said they'd do it again.

Where to stay: Ubud for culture and nature, Seminyak and Canggu for food and nightlife, Uluwatu for surf and sunsets. {{CTA:hotel:booking:bali ubud boutique hotel:Compare hotels in Bali}} — the price difference between a three-star and five-star in Bali is surprisingly small outside July and August, which is the definitive argument for the upgrade.`,
  },
},
];
