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
    heroImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
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

{{CTA:service:discovercars:madrid:Alquiler de coche en Madrid}} si planeas hacer excursiones al Escorial, Toledo o Segovia — todas a menos de una hora y perfectas para un día.

Nota práctica: el wifi de hoteles y cafés en Madrid es fiable, pero conectarte a redes públicas con {{CTA:service:nordvpn:vpn viajes:Protege tu conexión con NordVPN}} es especialmente útil si viajas trabajando. Para pagos en Madrid — que es zona euro — una tarjeta sin comisiones como {{CTA:service:revolut:tarjeta viaje europa:Revolut}} ahorra las comisiones de los cajeros y los pagos con tarjeta extranjera.`,
      en: `Madrid is a city that works at any hour. At 10 in the morning, the Retiro is a park with joggers and retired men playing chess. At 2 in the afternoon, restaurants in La Latina have waiting lists. At midnight, Malasaña is just getting started. No other European capital has this kind of operating range.

The Prado Museum is, without debate, one of the three great museums in the world. The permanent collection includes Velázquez's Las Meninas, Goya's The Third of May, Bosch's The Garden of Earthly Delights and over 8,000 more works that no single day can seriously cover. {{CTA:activity:getyourguide:madrid prado museum tour:Book your guided Prado tour}} — a good guide makes the difference between seeing paintings and understanding why they matter. Arrive first thing: the Velázquez room before 11am has a quality of silence found nowhere else in the world.

The Reina Sofía Museum, ten minutes' walk from the Prado, completes the picture with 20th-century art. Picasso's Guernica in its own large, properly lit room is one of those works you can't prepare yourself to see well, even if you've studied its history. {{CTA:tickets:tiqets:reina sofia museum madrid:Buy your Reina Sofía ticket}} in advance during peak season.

La Latina on Sundays has the Rastro flea market — the largest in Spain — followed by the bars on Cava Baja serving vermouth and tapas until 4pm. This is the quintessential Madrid Sunday: slow, noisy, absolutely perfect.

El Retiro Park deserves a full morning. The Crystal Palace, the rowing lake, the street artists, the Parterre gardens: it's the city's green lung and works as Madrid's social barometer — if the weather's good, half the city is here. Free entry.

For accommodation, the Chueca and Malasaña area has the best selection of boutique hotels within walking distance of everything. Gran Vía is more convenient for transport but noisier at night. {{CTA:hotel:booking:madrid boutique hotel:Compare hotels in Madrid}} — the price difference between weekdays and weekends in Madrid can be significant; if you have flexibility, Tuesday to Thursday gives the best rates.

{{CTA:service:discovercars:madrid:Car hire in Madrid}} if you're planning day trips to El Escorial, Toledo or Segovia — all under an hour away and perfect for a day out.

A practical note: hotel and café wifi in Madrid is reliable, but connecting to public networks with {{CTA:service:nordvpn:travel vpn:Protect your connection with NordVPN}} is particularly useful if you're travelling and working. For payments in Madrid — euro zone — a no-fee card like {{CTA:service:revolut:travel card europe:Revolut}} saves the charges on ATM withdrawals and foreign card payments.`
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

Si quieres llegar a la Costa Brava, a Montserrat o a las bodegas del Penedès, {{CTA:service:discovercars:barcelona:alquilar un coche}} sigue siendo la opción más libre. Y sí, tuve el mapa del Penedès descargado antes de aterrizar. ¿Alguien esperaba otra cosa?

Una nota práctica: en los hoteles del centro el wifi público es conveniente pero no precisamente privado. {{CTA:service:nordvpn:vpn viajes:Protege tu conexión con NordVPN}} — útil también para acceder a series de casa cuando llevas diez días fuera. Para pagos, una tarjeta sin comisiones de cambio ahorra más de lo que parece en una semana de tapas y entradas. {{CTA:service:revolut:tarjeta viaje europa:Abre tu cuenta Revolut gratis}} y olvida las comisiones.`,
      en: `I bought the Sagrada Família tickets three months in advance. Yes, three months. "Just in case", I told myself, with the composed certainty of someone who has been planning trips with spreadsheets for two decades and has never improvised anything worth mentioning. And of course: in March 2026, if you arrive at the Sagrada Família without a pre-booked ticket, the queue will greet you with the cold inevitability of something you were warned about.

But that is precisely the charm of Barcelona: the city you think you already know inside out from all the research, yet somehow always manages to surprise you. {{CTA:tickets:getyourguide:sagrada familia skip line:Book your skip-the-line ticket}} — Gaudí's masterpiece has been under construction for 144 years and visitor capacity is controlled to the minute. I arrived at 9am, with light filtering through the orange and blue stained glass and casting absurdly beautiful colours across the tree-like columns. I left convinced I was understanding it for the first time, although it was actually my fourth visit.

El Born is my favourite neighbourhood in Barcelona, which makes me the most predictable tourist in the world and I don't mind at all. Its reinvented medieval streets concentrate the city's best tapas — {{CTA:activity:getyourguide:born food tour barcelona tapas:A gastronomic tour through El Born}} is the most intelligent way to explore it, because there are restaurants with no exterior sign that only locals know, serving the finest calamari in the history of the deep-fried. The Mercat de Santa Caterina, with its multicoloured ceramic roof that La Boqueria never had, deserves at least twenty minutes of contemplation. I went in to buy tomatoes and came out with three books on Modernist architecture. I know myself.

La Barceloneta at sunset has that Mediterranean light that turns any terrace into something cinematic. Take note: the beer tastes exactly the same in the overpriced beach bars as in the neighbourhood spots two streets back. The difference is the sea view, which is worth what it's worth depending on who's looking.

The Bunkers del Carmel at dusk are my definitive recommendation for anyone wanting to see Barcelona from above without paying for an observation deck. You walk up at your own pace, and the 360° view — sea in the background, the Sagrada Família at centre, the Tibidabo to the right — is one of those that explains why six million people a year board a plane and come here.

Primavera Sound turns the city into the world's indie capital for three June days — {{CTA:tickets:ticketmaster:primavera sound 2026:get your pass before they sell out}}, because they sell out before you've finished reading the lineup headlines. I bought mine in January. "Just in case."

If you want to reach the Costa Brava, Montserrat or the Penedès wineries, {{CTA:service:discovercars:barcelona:renting a car}} remains the most liberating option. And yes, I had the Penedès map downloaded before landing. Was anyone expecting anything different?

A practical note: hotel wifi in the centre is convenient but not exactly private. {{CTA:service:nordvpn:travel vpn:Protect your connection with NordVPN}} — useful too for accessing your home streaming services when you've been away ten days. For payments, a no-fee travel card saves more than you'd think across a week of tapas and tickets. {{CTA:service:revolut:travel card europe:Open your free Revolut account}} and forget the conversion fees.`,
    },
    faq: {
      es: [
        { question: "¿Necesito reservar la Sagrada Família con antelación?", answer: "Sí, es imprescindible. Las entradas se agotan semanas antes, especialmente en primavera y verano. Reserva en la web oficial con al menos un mes de antelación para asegurar el horario que quieres." },
        { question: "¿Cuál es la mejor época para visitar Barcelona?", answer: "Primavera (abril-junio) y otoño (septiembre-octubre) son ideales: buen clima, luz perfecta y menos turistas que en el agosto habitual. Evita Semana Santa y el fin de semana del Primavera Sound si buscas tranquilidad." },
        { question: "¿Cómo llegar del aeropuerto al centro de Barcelona?", answer: "El Aerobús conecta el Aeropuerto de El Prat con Plaza Catalunya en 35 minutos. También puedes usar el metro L9 Sud (más lento pero más barato) o un taxi a precio fijo oficial hasta el centro." },
      ],
      en: [
        { question: "Do I need to book the Sagrada Família in advance?", answer: "Yes, absolutely. Tickets sell out weeks ahead, especially in spring and summer. Book through the official website at least one month before to secure the time slot you want." },
        { question: "When is the best time to visit Barcelona?", answer: "Spring (April–June) and autumn (September–October) are ideal: great weather, perfect light, and fewer tourists than August. Avoid Easter and Primavera Sound weekend if you're after peace and quiet." },
        { question: "How do I get from the airport to the city centre?", answer: "The Aerobús connects El Prat Airport to Plaça Catalunya in 35 minutes. You can also take the L9 Sud metro (slower but cheaper) or an official taxi at a fixed rate to the centre." },
      ],
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

La comida callejera de Tsukiji es el plan que más le recomiendo a cualquiera que llegue con ganas de comer bien sin complicaciones. {{CTA:activity:getyourguide:tsukiji food tour sushi:Un tour gastronómico por Tsukiji}} es la forma inteligente de orientarse entre los puestos y entender qué estás comiendo y por qué vale lo que vale. El tren de regreso al hotel con el sushi todavía en el estómago y la lista de buenas intenciones para mañana ya formada: eso es Tokio en su mejor versión.

Dos cosas prácticas antes de llegar: el wifi de hoteles y cafés funciona, pero para datos sin límite y sin depender de nadie, {{CTA:service:nordvpn:vpn viajes:Protege tu conexión con NordVPN}} — en Japón algunos servicios tienen restricciones geográficas y la VPN también es útil en los hoteles más turísticos. Y si vas a hacer actividades de aventura o simplemente viajas lejos de casa, {{CTA:service:safetywing:seguro viaje:Asegura tu viaje con SafetyWing}} — el seguro de viaje cuesta mucho menos de lo que imaginas y en Japón la asistencia médica sin cobertura puede ser cara.`,
      en: `I went to Tokyo for the Tokyo Game Show. This is important context for everything that followed.

TGS runs four days. The first two are industry — if you know someone in game development, you can get in. The last two are open to the public: four-hour queues for ten-minute demos and a density of human beings per square metre that would make the Yamanote Line at rush hour look spacious. Perfect. That's exactly what I expected.

What I did not expect was Akihabara. I went "just for a quick look" on the first day, between the airport and the hotel. I emerged three hours later with a limited-edition collector's figure from an anime I had discovered in that exact building an hour earlier, which cost roughly the same as three nights in a hostel. No regrets. The figure sits in my studio and I see it every day and it reminds me that Tokyo has a unique ability to make you need things you didn't know existed.

That said: Senso-ji at dawn, before 7am, is one of the most peaceful experiences available in a city of 14 million people. {{CTA:activity:getyourguide:sensoji asakusa tour:book a guided tour through Asakusa}} to understand what's happening with the incense rituals and the offerings. The atmosphere before the first organised groups arrive is so quiet it contrasts so brutally with Shibuya at 11am that it barely feels like the same city.

Shibuya is the world's most famous crossing and yes, it's worth the visit if only to say you've seen it. The strategy: go up to the Starbucks in the Tsutaya building, order whatever, and watch from above as 2,500 people cross simultaneously in every possible direction. It's spontaneous choreography they've been practising for decades without ever agreeing on it.

Shinjuku Gyoen in spring (March-April, confirm dates because hanami timing varies year to year) is an impressionist canvas that justifies any detour from your itinerary. Over 1,000 cherry trees in bloom, families eating under the branches, photographers with lenses the size of telescopes. And amid all of it, surprising silence for the centre of Tokyo.

teamLab Borderless is non-negotiable, but it requires planning: {{CTA:tickets:tiqets:teamlab borderless tokyo:buy your ticket in advance}} because they sell out weeks ahead. It's the most impressive digital art installation I've seen, and I've been to visual arts festivals on four continents. Bring a camera, wear shoes you can easily remove, and be prepared to get genuinely lost inside the installation — that's part of the design.

The Tsukiji street food scene is the plan I'd recommend to anyone arriving hungry and without complications. {{CTA:activity:getyourguide:tsukiji food tour sushi:A food tour through Tsukiji}} is the smart way to navigate the stalls and understand what you're eating and why it costs what it costs. The train back to the hotel with the sushi still in your stomach and the list of tomorrow's good intentions already forming: that's Tokyo at its best.

Two practical notes before you arrive: hotel and café wifi works, but for unlimited data without relying on anyone, {{CTA:service:nordvpn:travel vpn:Protect your connection with NordVPN}} — some services have geographic restrictions in Japan and the VPN also proves useful at busier hotels. And if you're doing any adventure activities or simply travelling this far from home, {{CTA:service:safetywing:travel insurance:Insure your trip with SafetyWing}} — travel insurance costs considerably less than you'd expect and in Japan, medical assistance without cover can be expensive.`,
    },
    faq: {
      es: [
        { question: "¿Necesito visado para Japón?", answer: "Los ciudadanos de la UE pueden entrar en Japón sin visado hasta 90 días. Solo necesitas pasaporte en vigor. A la llegada se cumplimenta una declaración de entrada que te entregan en el avión." },
        { question: "¿Cuál es la mejor época para visitar Tokio?", answer: "Primavera (finales de marzo a abril) por los cerezos en flor y otoño (octubre-noviembre) por los colores del follaje son las épocas más recomendadas, aunque también las más concurridas y caras." },
        { question: "¿Cómo pagarse en Tokio?", answer: "Lleva efectivo en yenes además de tarjeta. Muchos templos, mercados y establecimientos pequeños no aceptan tarjeta. Los cajeros de los convenience stores (7-Eleven, FamilyMart) funcionan con tarjetas internacionales." },
      ],
      en: [
        { question: "Do I need a visa for Japan?", answer: "EU citizens can enter Japan without a visa for up to 90 days. You only need a valid passport. On arrival you fill in an entry declaration form handed out on the plane." },
        { question: "When is the best time to visit Tokyo?", answer: "Spring (late March to April) for cherry blossoms and autumn (October–November) for foliage colours are the most recommended seasons, though also the most crowded and expensive." },
        { question: "How should I pay in Tokyo?", answer: "Carry cash yen as well as a card. Many temples, markets and small establishments don't accept card payments. ATMs at convenience stores (7-Eleven, FamilyMart) work with international cards." },
      ],
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
          { label: { es: "Entrada sin cola", en: "Skip-the-line ticket" }, partner: "tiqets", query: "frida kahlo museum", type: "tickets" },
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

Volví al día siguiente con entrada anticipada. La diferencia es absoluta: entras directo, el ritmo es otro, y puedes quedarte el tiempo que quieras delante de los corsés pintados, los diarios y los cuadros sin que la presión de la cola te empuje hacia la salida. {{CTA:tickets:tiqets:frida kahlo museum:compra la entrada con antelación}} y llega temprano de todos modos, porque el jardín a primera hora tiene una luz que Frida habría aprobado.

## Día de Muertos: cuando la ciudad cambia de frecuencia

No estaba en CDMX durante los días de Muertos — llegué en febrero — pero hablé con tres personas distintas que sí estuvieron y las tres usaron la misma palabra: "inexplicable". No inexplicable de forma turística. Inexplicable de verdad, como cuando algo es tan distinto a lo que esperabas que tu sistema de referencia simplemente no sirve.

Las ofrendas en los mercados, el olor a cempasúchil en toda la Colonia Guerrero, la gente visitando cementerios con mole y música como si fuera la cosa más natural del mundo — que en México lo es — son el tipo de escena que entiende diferente dependiendo de si la ves desde afuera o desde dentro. {{CTA:activity:getyourguide:dia muertos mexico city tour:reserva un tour nocturno especial}} con guía local cambia completamente el ángulo: hay contexto, hay historia familiar detrás de cada altar, y hay alguien que te explica qué estás viendo sin convertirlo en espectáculo.

CDMX es de esas ciudades que no se visitan una sola vez. La primera vez entiendes la superficie. La segunda vez empiezas a entender el ritmo. La tercera ya no puedes explicarle a nadie por qué necesitas volver, pero sabes exactamente por qué.

Antes de llegar: el wifi de los cafés de Roma Norte es generalmente bueno, pero en redes públicas siempre conviene ir con {{CTA:service:nordvpn:vpn viajes:Protege tu conexión con NordVPN}}. Y para viajar tranquilo por México — país enorme, con sus particularidades — {{CTA:service:safetywing:seguro viaje:Asegura tu viaje con SafetyWing}} es el seguro de viaje más flexible del mercado y cubre asistencia médica desde el primer día.`,
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

Mexico City is one of those places you don't visit just once. The first time you understand the surface. The second time you start to understand the rhythm. By the third you can't explain to anyone why you need to go back, but you know exactly why you do.

Before you arrive: the wifi at Roma Norte cafés is generally fine, but on public networks it's always sensible to travel with {{CTA:service:nordvpn:travel vpn:Protect your connection with NordVPN}}. And for travelling at ease through Mexico — a vast country with its own particularities — {{CTA:service:safetywing:travel insurance:Insure your trip with SafetyWing}} is the most flexible travel insurance on the market and covers medical assistance from day one.`,
    },
    faq: {
      es: [
        { question: "¿Es segura Ciudad de México para los turistas?", answer: "La seguridad varía mucho por barrio. Roma Norte, Condesa, Polanco y Coyoacán son perfectamente seguras para turistas. Usa Uber en lugar de taxis de la calle por las noches y evita zonas periféricas que no estén en tu ruta." },
        { question: "¿Cuánto cuesta moverse por Ciudad de México?", answer: "El metro cuesta solo 5 pesos por trayecto (menos de 0,30 €) y cubre prácticamente toda la ciudad. Uber también es económico y muy usado por los locales. Evita los taxis libres que paran en la calle." },
        { question: "¿Qué es imprescindible comer en Ciudad de México?", answer: "Tacos de canasta, tlayudas, tamales, pozole y enchiladas verdes. El Mercado de Medellín y Mercado Roma son los mejores para comer bien sin trampa turística. Los tacos de Contramar y los chilaquiles del mercado son referencias obligadas." },
      ],
      en: [
        { question: "Is Mexico City safe for tourists?", answer: "Safety varies greatly by neighbourhood. Roma Norte, Condesa, Polanco and Coyoacán are perfectly safe for tourists. Use Uber instead of street taxis at night and avoid peripheral areas not on your route." },
        { question: "How much does getting around Mexico City cost?", answer: "The metro costs just 5 pesos per journey (under €0.30) and covers virtually the whole city. Uber is also affordable and widely used by locals. Avoid flagging down taxis from the street." },
        { question: "What is essential eating in Mexico City?", answer: "Tacos de canasta, tlayudas, tamales, pozole and enchiladas verdes. Mercado de Medellín and Mercado Roma are the best spots to eat well without tourist traps. Tacos at Contramar and market chilaquiles are essential references." },
      ],
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
          { label: { es: "Entrada rápida", en: "Fast-track entry" }, partner: "tiqets", query: "torre belem lisbon", type: "tickets" },
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

El Bar do Cais, por si alguien se lo pregunta, servía mejillones el martes, caldo verde el miércoles, bacalhau el jueves y una empanada de atún el viernes que no está en ninguna guía y que prefiero que siga sin estar.

Nota práctica: en las redes wifi de hoteles y cafés es conveniente usar {{CTA:service:nordvpn:vpn viajes:Protege tu conexión con NordVPN}} — especialmente si trabajas en remoto desde Lisboa, que es el plan de muchos. Para pagos, Portugal es zona euro pero las comisiones de tarjeta se acumulan: {{CTA:service:revolut:tarjeta viaje europa:Abre tu cuenta Revolut gratis}} y elimina esas comisiones de raíz.`,
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

The Bar do Cais, for anyone wondering, served mussels on Tuesday, caldo verde on Wednesday, bacalhau on Thursday and a tuna empanada on Friday that is in no guidebook anywhere, and I prefer it stays that way.

A practical note: hotel and café wifi in Lisbon is generally reliable, but it's worth using {{CTA:service:nordvpn:travel vpn:Protect your connection with NordVPN}} — especially if you're working remotely from here, which is many people's plan. For payments, Portugal is euro zone but card fees add up: {{CTA:service:revolut:travel card europe:Open your free Revolut account}} and eliminate those fees from the start.`,
    },
    faq: {
      es: [
        { question: "¿Cuál es la mejor época para visitar Lisboa?", answer: "Primavera (marzo-mayo) y otoño (septiembre-octubre) son perfectas: buen clima, precios más bajos y menos masificación. Julio y agosto son los meses más calurosos y concurridos, con precios de alojamiento disparados." },
        { question: "¿Cuántos días necesito para ver Lisboa?", answer: "Con 3-4 días puedes ver los barrios principales (Alfama, Belém, Baixa, Mouraria) con calma. Para explorar también Sintra o la Costa de Caparica, añade 1-2 días más." },
        { question: "¿Cómo moverse por Lisboa?", answer: "Los taxis y Uber son económicos. El tranvía 28 es pintoresco pero muy lento y masificado; para desplazarte de verdad usa el metro, los autobuses o simplemente camina — Lisboa es muy caminable entre barrios." },
      ],
      en: [
        { question: "When is the best time to visit Lisbon?", answer: "Spring (March–May) and autumn (September–October) are ideal: good weather, lower prices, and fewer crowds. July and August are the hottest and busiest months, with accommodation prices at their peak." },
        { question: "How many days do I need to see Lisbon?", answer: "3–4 days covers the main neighbourhoods (Alfama, Belém, Baixa, Mouraria) at a comfortable pace. Add 1–2 days to also explore Sintra or the Costa de Caparica." },
        { question: "How do I get around Lisbon?", answer: "Taxis and Uber are affordable. Tram 28 is picturesque but very slow and crowded; for actual transport use the metro, buses, or simply walk — Lisbon is very walkable between neighbourhoods." },
      ],
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

Para organizar el tiempo en la ciudad con sensatez, {{CTA:activity:viator:colosseum guided tour rome:un tour guiado que combine el Coliseo, el Foro y el Palatino}} en una mañana es la opción más eficiente. La alternativa es ir solo, perderse, acabar comiendo un gelato de limón en los escalones de una fuente barroca y decidir que así también funciona perfectamente. En Roma, las dos opciones acaban siendo la misma historia.

Para las gestiones cotidianas: el wifi público en Roma es variable — desde perfecto hasta inexistente — y {{CTA:service:nordvpn:vpn viajes:Protege tu conexión con NordVPN}} es el complemento más útil para conectarte tranquilo desde cafés y hoteles. Y para no pagar comisiones en cada gelato, entrada o cena: {{CTA:service:revolut:tarjeta viaje europa:Abre tu cuenta Revolut gratis}} antes de salir.`,
      en: `I went to see the Colosseum on the first day, as everyone does. I took the metro from Termini, surfaced into the open and there it was: 2,000 years of history surrounded by selfie-stick vendors and the kind of July heat that flattens all romanticism. Impressive, monumental, unavoidable.

What wasn't planned was the bookshop. I was walking along Via della Croce on the way to Trastevere, noticed a first edition Lampedusa in the window, went in "for a moment" and emerged two hours later with three books that were going to require checking a separate bag, plus a pending conversation with myself about my travel priorities. Rome does this to me.

The Colosseum remains the ultimate symbol of Rome and is worth every euro. {{CTA:tickets:getyourguide:colosseum rome skip line:Book your priority-access ticket}} — queues without advance tickets in August exceed two hours, and there are better uses of that time in this city. The combination ticket with the Roman Forum and Palatine Hill turns the visit into a walk through 2,700 years of history, from the Rome of the Kings to the late Renaissance. The Forum at dusk, as tourists thin out and golden light catches the marble and columns, is one of the most cinematic moments in Europe.

The Vatican deserves a full day, and a full day here means arriving with energy. The Sistine Chapel, at the end of two kilometres of corridors through the Vatican Collection, stops your breath. {{CTA:activity:civitatis:vatican museums sistine chapel tour:A guided tour of the Vatican Museums}} gives you the historical context to understand what you're looking at — there's a difference between seeing the Sistine ceiling and understanding it, and the difference lies in knowing that Michelangelo painted it standing, not lying down, against his will, with a broken neck, for four years.

Trastevere is the neighbourhood where Rome relaxes. Medieval alleyways, restaurants with tables spilling into the street, morning markets that smell of fresh ricotta and seasonal fruit. The best carbonara I ate in Rome had no TripAdvisor profile and was recommended to me by an older woman in a supermarket queue — exactly the kind of information that appears in no guidebook.

The Pantheon is possibly the best-preserved building from antiquity and still functions as an active church, which means Hadrian has been winning the architecture debate since 125 AD. {{CTA:tickets:tiqets:pantheon rome ticket:Buy your Pantheon ticket}} — since the entry fee was introduced the queues have dropped significantly, and the moment of standing beneath the oculus with light falling vertically through it is one of those that doesn't leave you, even if you've read everything about it before arriving. Perhaps especially if you've read everything about it.

To organise your time in the city sensibly, {{CTA:activity:viator:colosseum guided tour rome:a guided tour combining the Colosseum, the Forum and Palatine Hill}} in one morning is the most efficient option. The alternative is going solo, getting lost, ending up eating lemon gelato on the steps of a Baroque fountain and deciding that works perfectly well too. In Rome, both options tend to become the same story.

For day-to-day practicalities: public wifi in Rome ranges from perfectly fine to non-existent, and {{CTA:service:nordvpn:travel vpn:Protect your connection with NordVPN}} is the most useful addition for connecting safely from cafés and hotels alike. And to avoid fees on every gelato, ticket or dinner: {{CTA:service:revolut:travel card europe:Open your free Revolut account}} before you leave.`,
    },
    faq: {
      es: [
        { question: "¿Se puede visitar el Vaticano sin reserva?", answer: "Técnicamente sí, pero la cola puede superar las 3 horas. Reservar la entrada online con antelación es altamente recomendable, especialmente para los Museos Vaticanos y la Capilla Sixtina. La entrada a la Basílica de San Pedro es gratuita y sin reserva." },
        { question: "¿Cuándo es mejor visitar Roma?", answer: "Primavera (abril-junio) y otoño (septiembre-octubre) son ideales. Julio y agosto son extremadamente calurosos (35-40°C) y masificados. Enero y febrero son los meses más tranquilos y baratos, perfectos para museos." },
        { question: "¿Conviene comprar tarjeta de transporte en Roma?", answer: "Para más de 2-3 desplazamientos al día, el bono de 48h o 72h del metro y autobuses es más económico que los tickets individuales. El centro histórico de Roma es muy caminable y muchos monumentos están a poca distancia entre sí." },
      ],
      en: [
        { question: "Can I visit the Vatican without booking?", answer: "Technically yes, but queues can exceed 3 hours. Booking online in advance is highly recommended, especially for the Vatican Museums and Sistine Chapel. Entry to St Peter's Basilica is free and requires no booking." },
        { question: "When is the best time to visit Rome?", answer: "Spring (April–June) and autumn (September–October) are ideal. July and August are extremely hot (35–40°C) and crowded. January and February are the quietest and cheapest months, perfect for museums." },
        { question: "Should I buy a transport pass in Rome?", answer: "For more than 2–3 journeys per day, the 48h or 72h metro and bus pass is better value than individual tickets. Rome's historic centre is very walkable and many monuments are a short distance from each other." },
      ],
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

{{CTA:service:skyscanner:new york:Volar a Nueva York}} desde Europa es un vuelo de 7-8 horas que merece más la pena en invierno, cuando los precios bajan y la ciudad tiene una energía completamente diferente. Aunque en verano, con el jazz en los parques y las terrazas de las azoteas, tampoco hay queja.

Una nota útil: las redes wifi de hoteles y cafés de Manhattan son convenientes pero no privadas — conectarte con {{CTA:service:nordvpn:vpn viajes:Protege tu conexión con NordVPN}} es especialmente sensato si tienes trabajo pendiente en el viaje.`,
      en: `I went to New York to see Interpol at Madison Square Garden. That was the plan.

The plan lasted precisely until someone at the Brooklyn hostel mentioned that same evening there was an experimental jazz quartet playing in a basement in Alphabet City — no Instagram, no website, reachable only via an address scrawled on a piece of paper. I went. It was exactly what it sounded like: ten people, music that felt like a private conversation between instruments, and the conviction that I'd found the New York I was looking for.

Interpol was incredible, for the record. But I spent the next three nights following handwritten venue lists passed on in bars, and New York delivered every single time. Bowery Ballroom, the best live music venue I've ever set foot in. Baby's All Right in Brooklyn, where that night's lineup appeared on no "best venues" list. Rough Trade NYC, bookshop and concert space in one building, which should be illegal for how good it is.

New York, musically, is the densest city on the planet. As for everything else: Central Park at dawn, before the cyclists and the map-carrying tourists arrive, is the only moment the city breathes. 341 hectares of relative silence at the heart of Manhattan. The MET opens at 10am — {{CTA:tickets:tiqets:metropolitan museum new york:buy your MET ticket}} and give yourself the full day because the Egyptian wing alone takes two hours and then you realise you haven't seen the Impressionists yet and it's already half five.

The Brooklyn Bridge is worth crossing on foot end to end, but walk Manhattan-to-Brooklyn rather than the reverse — you want the view of both bridges and the skyline in front of you. Dumbo on the other side: the best bridge photos with the Manhattan Bridge in the background, pizza at Juliana's or Grimaldi's, the DUMBO market on Sundays.

The High Line is the most elegant urban regeneration project of the 21st century and it's free — two facts that shouldn't coexist in New York, but they do. 2.3 kilometres of elevated park above the old West Side railway line, with contemporary art and Hudson River views. It ends in the Meatpacking District, which has exactly the energy its name implies but with more cocktail bars.

{{CTA:activity:getyourguide:met museum highlights tour nyc:A guided tour of the MET}} if you want to navigate all that magnificence without spending the first two hours staring at the map. Also useful for knowing what to talk about at dinner, which here is a necessary social skill.

{{CTA:service:skyscanner:new york:Flying to New York}} from Europe is a 7-8 hour flight that pays off more in winter, when prices drop and the city has a completely different energy. Though in summer, with the jazz in the parks and the rooftop terraces, there's nothing to complain about either.

One useful note: Manhattan hotel and café wifi is convenient but not private — connecting with {{CTA:service:nordvpn:travel vpn:Protect your connection with NordVPN}} is particularly sensible if you have work on during the trip.`,
    },
    faq: {
      es: [
        { question: "¿Necesito ESTA para viajar a Nueva York?", answer: "Sí, los ciudadanos europeos deben solicitar la ESTA (autorización electrónica de viaje) antes de volar a EE.UU. Se tramita online por 21 dólares y suele aprobarse en minutos, aunque puede tardar hasta 72 horas. Solicítala con al menos una semana de antelación." },
        { question: "¿Cuál es la mejor forma de moverse por Nueva York?", answer: "El metro de Nueva York es el más eficiente y funciona las 24 horas. La tarjeta OMNY sin contacto permite pagar directamente con tu tarjeta bancaria sin necesidad de comprar un MetroCard. Los taxis y Uber funcionan bien pero son más caros." },
        { question: "¿Cuándo es mejor visitar Nueva York?", answer: "Primavera (abril-junio) y otoño (septiembre-noviembre) tienen el mejor clima. Diciembre es mágico por las decoraciones navideñas pero muy caro. El verano puede ser sofocante con humedad extrema, aunque los parques y terrazas compensan." },
      ],
      en: [
        { question: "Do I need an ESTA to travel to New York?", answer: "Yes, European citizens must apply for an ESTA (Electronic System for Travel Authorization) before flying to the US. It's processed online for $21 and usually approved within minutes, though it can take up to 72 hours. Apply at least a week in advance." },
        { question: "What is the best way to get around New York?", answer: "The NYC subway is the most efficient option and runs 24/7. The contactless OMNY system lets you pay directly with your bank card without needing a MetroCard. Taxis and Uber work well but are more expensive." },
        { question: "When is the best time to visit New York?", answer: "Spring (April–June) and autumn (September–November) have the best weather. December is magical for Christmas decorations but very expensive. Summer can be stifling with extreme humidity, though parks and rooftop terraces compensate." },
      ],
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

Para moverse, {{CTA:activity:getyourguide:amsterdam canal bike tour:un tour en bicicleta por los canales}} es la experiencia más genuinamente amsterdamesa que existe. Sí, tendrás que pedalear entre ciclocarriles con gente que lleva haciéndolo toda la vida. Sí, en algún momento te adelantará una abuela con bolsas de la compra colgando del manillar a una velocidad que no esperabas. Eso también forma parte.

Dos apuntes prácticos: el wifi de los cafés marrones del Jordaan es irregular — {{CTA:service:nordvpn:vpn viajes:Protege tu conexión con NordVPN}} si trabajas en remoto desde aquí, que es el plan de más de uno. Y para no pagar comisiones en entradas de museo y cenas: {{CTA:service:revolut:tarjeta viaje europa:Abre tu cuenta Revolut gratis}} antes de salir — Ámsterdam es zona euro pero los cargos de las tarjetas no se avisan.`,
      en: `The coworking I booked had a canal at the door. Literally: you stepped outside, turned left, and there was the Keizersgracht with its brick townhouses and their reflections in the water. So what happened was: I arrived on the first day with my laptop, opened up the workspace, looked out the window, decided the deadline could wait, and spent two hours sitting on the canal steps watching barges go past.

I've been working remotely from different cities for four years and Amsterdam is the first place that's made me voluntarily and guiltlessly lose a Monday morning. This is relevant information for calibrating what this city can do to your productivity.

The Rijksmuseum is the reason Amsterdam appears on the world cultural map. Rembrandt, Vermeer, Frans Hals — the Dutch Golden Age assembled in a building that is itself a work of art and through whose main archway bicycles pass, which is the perfect metaphor for this city. {{CTA:tickets:tiqets:rijksmuseum amsterdam:Buy your Rijksmuseum ticket}} well in advance — in summer the queues along the canal are an unplanned outdoor art experience you hadn't intended to have.

The Anne Frank House goes beyond tourism. The Secret Annex where she and her family hid for over two years is a physical space that no book can prepare you to feel. {{CTA:tickets:tiqets:anne frank house amsterdam:Book your ticket}} weeks ahead — capacity is controlled, tickets sell out and few visits in a lifetime are as important as this one. It is not a tourist attraction. It's a place to go to remember.

The Jordaan has exactly the atmosphere you were expecting from Amsterdam: narrow streets, step-gabled houses, brown cafés that smell of coffee and old wood, weekend markets. The Noordermarkt on Saturdays sells artisan cheese, flowers and second-hand books — precisely the three categories of impulse buying that most efficiently dissolve a coworking budget.

Vondelpark on Sundays is where Dutch people take their bicycles for a leisurely ride — which could sound dangerous but in practice everyone goes slower because they're relaxed and listening to something in their headphones. Open-air concerts in summer, dogs, skaters, the park bookshop. The kind of Sunday that makes you question whether the five-day working week was a philosophical error.

For getting around, {{CTA:activity:getyourguide:amsterdam canal bike tour:a cycling tour of the canals}} is the most genuinely Amsterdamian experience available. Yes, you'll have to pedal among cycle lanes full of people who've been doing it their whole lives. Yes, at some point a grandmother with shopping bags hanging from her handlebars will overtake you at a speed you weren't expecting. That's part of it.

Two practical notes: the Jordaan's brown café wifi is inconsistent — {{CTA:service:nordvpn:travel vpn:Protect your connection with NordVPN}} if you're working remotely from here, which is many people's plan. And to avoid fees on museum tickets and dinners: {{CTA:service:revolut:travel card europe:Open your free Revolut account}} before you leave — Amsterdam is euro zone but card charges arrive unannounced.`,
    },
    faq: {
      es: [
        { question: "¿Cuánto tiempo necesito para ver Ámsterdam?", answer: "Con 3 días puedes visitar los principales museos (Rijksmuseum, Van Gogh, Anne Frank), los canales y los barrios más interesantes. Para una experiencia más pausada y explorar también los alrededores, 4-5 días es ideal." },
        { question: "¿Necesito reservar el Rijksmuseum con antelación?", answer: "Sí, especialmente en temporada alta (verano) o en fin de semana. Las entradas pueden agotarse con varios días de antelación. Compra online antes de salir y elige el primer turno de la mañana para evitar las colas." },
        { question: "¿Es mejor moverse en bici en Ámsterdam?", answer: "La bici es el medio de transporte más usado por los locales y la infraestructura ciclista es excelente. Alquilar una cuesta entre 10 y 15 €/día y te permite explorar la ciudad como un residente. Ten cuidado: los ciclistas tienen prioridad absoluta." },
      ],
      en: [
        { question: "How many days do I need to see Amsterdam?", answer: "3 days lets you cover the main museums (Rijksmuseum, Van Gogh, Anne Frank), the canals and the most interesting neighbourhoods. For a more relaxed pace and to explore the surroundings, 4–5 days is ideal." },
        { question: "Do I need to book the Rijksmuseum in advance?", answer: "Yes, especially in high season (summer) or at weekends. Tickets can sell out several days ahead. Buy online before you leave and choose the first morning slot to avoid queues." },
        { question: "Is cycling the best way to get around Amsterdam?", answer: "Cycling is the most popular local transport and the cycling infrastructure is excellent. Renting costs €10–15/day and lets you explore the city like a resident. Be careful: cyclists have absolute right of way." },
      ],
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

Pero lo que más recuerdo de Bangkok no está en ninguna de las veintidós entradas de mi lista original. Está en el puesto sin nombre de Yaowarat donde el pad see ew costaba ochenta bahts y el cocinero llevaba ahí más años que la mayoría de los restaurantes de mi ciudad llevan abiertos. Bangkok te enseña que la mejor comida del mundo no necesita carta, no necesita estrella y muy a menudo no necesita silla.

Dos cosas antes de llegar: el wifi de Bangkok es sorprendentemente bueno en la mayoría de los hoteles, pero en redes públicas conviene ir con {{CTA:service:nordvpn:vpn viajes:Protege tu conexión con NordVPN}} — Tailandia tiene restricciones en algunos servicios online. Y viajar a Tailandia sin seguro es innecesariamente arriesgado: {{CTA:service:safetywing:seguro viaje:Asegura tu viaje con SafetyWing}} cubre desde asistencia médica hasta cancelaciones, y cuesta menos que una noche de hostal.`,
      en: `I went to Bangkok with a list of twenty-two restaurants. I reviewed it on the plane. I reviewed it again in the taxi from Suvarnabhumi, with the heat and the motorway traffic forming the perfect backdrop for reading pad thai reviews. By the time I reached the hotel the list was organised by neighbourhood, with opening times and a personal priority system I won't share because it is probably alarming.

The list survived until the second day, when a tuk-tuk driver dropped me in front of a mango sticky rice stall at the Or Tor Kor market that appeared in no app, no review site, and was — without exaggeration — the finest thing I'd eaten in Asia. At that moment I abandoned the list, the strategy and any pretension of organised gastronomic control, and let Bangkok take over.

The Grand Palace and Wat Phra Kaew are the spiritual heart of Thailand. The Emerald Buddha, carved from a single block of green jade, is the country's most venerated religious figure. {{CTA:tickets:tiqets:grand palace bangkok:Buy your Grand Palace ticket}} — and wear long trousers or a skirt covering your knees. Bangkok is hot in every month of the year, but the dress code is part of respecting the place. If you arrive with bare shoulders, there's a counter that will lend you something. This is part of the protocol.

Wat Pho, a hundred metres from the Grand Palace, houses the Reclining Buddha: a 46-metre golden figure that occupies an entire temple and fits in no photograph regardless of how hard you try. It's also the historical origin of Thai massage, and the complex has a massage school where you can end your visit with a two-hour massage at a price that would be unbelievable in Europe.

Chatuchak is the world's largest weekend market: 15,000 stalls across 27 hectares selling everything from Burmese antiques to street food from across Thailand. {{CTA:activity:getyourguide:chatuchak market tour bangkok:A guided tour of Chatuchak}} will save you from ending up in the reptile section without understanding how you got there. The food at Chatuchak is an excursion in itself: freshly fried pad thai, spiced pork skewers, freshly opened coconut water that in Bangkok in August is essentially medicine.

The Chao Phraya River is the city's historic highway. By boat you reach Wat Arun, whose ceramic and porcelain façade shines in the afternoon light in a way that justifies the river journey. {{CTA:activity:viator:chao phraya river cruise bangkok:A Chao Phraya river cruise}} with dinner included is the most memorable evening plan in the city, especially if you get a table on deck and the sky turns orange.

But what I remember most about Bangkok appears in none of the original twenty-two entries on my list. It's at the nameless stall in Yaowarat where the pad see ew cost eighty baht and the cook had been there longer than most restaurants in my city have been open. Bangkok teaches you that the world's best food needs no menu, no star and very often no chair.

Two things before you arrive: Bangkok's hotel wifi is surprisingly good in most places, but on public networks it pays to travel with {{CTA:service:nordvpn:travel vpn:Protect your connection with NordVPN}} — Thailand has restrictions on certain online services. And travelling to Thailand without insurance is unnecessarily optimistic: {{CTA:service:safetywing:travel insurance:Insure your trip with SafetyWing}} covers everything from medical assistance to cancellations and costs less than a night in a hostel.`,
    },
    faq: {
      es: [
        { question: "¿Necesito visado para Tailandia?", answer: "Los ciudadanos españoles y europeos pueden entrar en Tailandia sin visado hasta 30 días (ampliado recientemente a 60 días en muchos casos). Solo necesitas pasaporte con mínimo 6 meses de validez y un billete de salida del país." },
        { question: "¿Es seguro comer en los puestos de calle de Bangkok?", answer: "Sí, en general es seguro y una de las experiencias culinarias más recomendables del viaje. Elige los puestos concurridos con mucha rotación de producto y clientela local visible. Evita marisco en puestos sin refrigeración visible." },
        { question: "¿Cuál es la mejor época para visitar Bangkok?", answer: "Noviembre a febrero es la temporada seca y más fresca, ideal para visitar con temperaturas de 25-30°C. Evita marzo-mayo con calor extremo de hasta 40°C y junio-octubre con lluvias muy intensas aunque el calor es sofocante todo el año." },
      ],
      en: [
        { question: "Do I need a visa for Thailand?", answer: "Spanish and European citizens can enter Thailand without a visa for up to 30 days (recently extended to 60 days in many cases). You only need a passport valid for at least 6 months and an onward ticket out of the country." },
        { question: "Is it safe to eat at Bangkok street food stalls?", answer: "Yes, generally safe and one of the most recommended culinary experiences of the trip. Choose busy stalls with high product turnover and visible local customers. Avoid seafood at stalls without visible refrigeration." },
        { question: "When is the best time to visit Bangkok?", answer: "November to February is the dry and cooler season, ideal for visiting with temperatures of 25–30°C. Avoid March–May with extreme heat up to 40°C and June–October with very heavy rainfall — though it's stifling year-round." },
      ],
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

Para ver el Sahara, {{CTA:activity:viator:sahara desert tour marrakech merzouga:un tour de uno o dos días al desierto de Merzouga}} desde Marrakech es la excursión más transformadora que puedes hacer en el norte de África. La arena en los zapatos al volver es un recuerdo gratuito que dura semanas.

Nota práctica: Marruecos tiene restricciones en algunas aplicaciones de VoIP y redes sociales en ciertos momentos — viajar con {{CTA:service:nordvpn:vpn viajes:Protege tu conexión con NordVPN}} es especialmente útil aquí, también en los wifi del hotel. Y para una excursión que incluye desierto, medina y actividades físicas, {{CTA:service:safetywing:seguro viaje:Asegura tu viaje con SafetyWing}} es el seguro más razonable del mercado para viajes de este tipo.`,
      en: `I had the perfect medina route downloaded on my phone. Point A to point B, souks and palaces in the correct order, estimated walking times included. Spreadsheet, Notion, Google Maps, screenshots: all the logistics of someone who never gets lost preparing to visit one of the world's most complex urban labyrinths.

The battery died in the taxi from the airport. I arrived at the medina with the phone off, the spreadsheet inaccessible and a riad address I'd half-memorised. I found the riad in forty minutes, which in the Marrakech medina is approximately a miracle. And during those forty minutes — no map, surrounded by the smell of spices and leather, blacksmiths and cooks and olive vendors creating an absolutely extraordinary background noise — I found three places that appeared on none of my carefully prepared lists and which turned out to be the best moments of the trip.

Djemaa el-Fna is the world's most cinematic place and changes completely with the hour. In the morning: acrobats, fresh orange juice, snake charmers who will attempt to drape something on you before you can decline politely. At sunset: the largest open-air food market in Africa, with charcoal smoke, steaming tagines and that orange-purple light that makes everything look like a period film. {{CTA:activity:getyourguide:djemaa el fna marrakech tour:A guided tour of the medina}} reveals the corners that organised groups never reach and explains why this square has been the social heart of Marrakech for 1,000 years.

The Jardin Majorelle is the antidote to the chaos. Its cobalt blue gardens, designed by French painter Jacques Majorelle and restored by Yves Saint Laurent, are an oasis where the temperature drops and the noise disappears. {{CTA:tickets:tiqets:jardin majorelle marrakech:Buy your Jardin Majorelle ticket}} in advance — visitor numbers are high, access is controlled, and you haven't come all this way to stand outside looking at the wall.

The souks are a lesson in ancient commerce and contemporary negotiation. The first price you're given is double the real one. The vendor knows this. You know he knows. He knows you know. That's where the conversation starts. The dyers' quarter, with its colour vats, is the most photographed image in Marrakech after the blue doors and deserves the visit even if you have to climb three floors of carpet-shop stairs to see it from above.

The Bahia Palace, with its flowerbeds, arcaded galleries and rooms decorated in zellij mosaic, is one of the most beautiful buildings in North Africa and is largely unfinished — the vizier who commissioned it died before completion, which is the story of ambitious architectural projects in any century.

To see the Sahara, {{CTA:activity:viator:sahara desert tour marrakech merzouga:a one or two-day tour to the Merzouga desert}} from Marrakech is the most transformative excursion you can make in North Africa. The sand in your shoes on the flight home is a free souvenir that lasts for weeks.

A practical note: Morocco has restrictions on certain VoIP apps and social media at various times — travelling with {{CTA:service:nordvpn:travel vpn:Protect your connection with NordVPN}} is particularly useful here, hotel wifi included. And for a trip that involves desert, medina and physical activity, {{CTA:service:safetywing:travel insurance:Insure your trip with SafetyWing}} is the most reasonably priced insurance on the market for this kind of travel.`,
    },
    faq: {
      es: [
        { question: "¿Es seguro Marrakech para los turistas?", answer: "Marrakech es un destino turístico bien establecido y generalmente seguro. Mantén precaución en los zocos (ten cuidado con los guías no oficiales y los vendedores insistentes) y no muestres artículos de valor. La medina de noche es segura pero menos recomendable para quienes no conocen bien el laberinto de calles." },
        { question: "¿Cuándo es mejor visitar Marrakech?", answer: "Primavera (marzo-mayo) y otoño (septiembre-noviembre) son ideales con temperaturas de 20-28°C y sin lluvia. Evita julio y agosto con calor extremo de 40°C. Diciembre y enero son perfectamente visitables con días soleados y noches frescas." },
        { question: "¿Qué moneda se usa en Marrakech?", answer: "El dírham marroquí (MAD). Solo se puede cambiar dentro de Marruecos — no lleves dírhams de fuera. Los cajeros del aeropuerto funcionan bien; cambia el dinero justo antes de volver para no quedarte con dírhams sin usar." },
      ],
      en: [
        { question: "Is Marrakech safe for tourists?", answer: "Marrakech is a well-established tourist destination and generally safe. Stay cautious in the souks (watch out for unofficial guides and persistent vendors) and don't display valuables. The medina at night is safe but less advisable for those unfamiliar with its labyrinthine streets." },
        { question: "When is the best time to visit Marrakech?", answer: "Spring (March–May) and autumn (September–November) are ideal with temperatures of 20–28°C and no rain. Avoid July and August with extreme heat of 40°C. December and January are perfectly visitable with sunny days and cool nights." },
        { question: "What currency is used in Marrakech?", answer: "The Moroccan dirham (MAD). It can only be exchanged inside Morocco — don't bring dirhams from abroad. Airport ATMs work well; exchange money just before returning to avoid being left with unused dirhams." },
      ],
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

Para moverse, el metro conecta los puntos principales de Sheikh Zayed Road con una eficiencia que da envidia. Para el resto, {{CTA:service:discovercars:alquiler coche dubai:Un coche de alquiler}} da libertad para llegar al desierto y a las playas del norte. Y para comer comida local de verdad: Deira, siempre Deira.

Apunte importante: Dubái bloquea VoIP y algunas aplicaciones de mensajería, y el wifi de los hoteles no es tan privado como parece. Viaja con {{CTA:service:nordvpn:vpn viajes:Protege tu conexión con NordVPN}} — es la herramienta más útil de este viaje después del pasaporte. Y para un destino donde la asistencia médica privada es cara por definición, {{CTA:service:safetywing:seguro viaje:Asegura tu viaje con SafetyWing}} es la decisión más sensata antes de embarcar.`,
    en: `I went to Dubai looking for local food. I know how that sounds. Dubai is not the obvious destination when you're searching for gastronomic authenticity — it's the most constructed city in the world, the place where luxury has become its own architectural category. But precisely for that reason: if you find local food here, it's worth finding.

I found it in Deira. In the oldest neighbourhood of the city, crossing Dubai Creek by abra for one dirham, there are biryani restaurants that have been open since before the Burj Khalifa existed. The Bur Dubai area has shawarma spots operating with the same ingredients and the same recipe since the 1970s. In the Deira Spice Market, cardamom, saffron and cinnamon are sold by the sack and the air smells of something that has no name on any fashionable restaurant menu.

But of course. Dubai also has the Burj Khalifa. And it deserves a visit if only to understand the scale of what someone with vision and unlimited budget decided to build. {{CTA:tickets:tiqets:burj khalifa at the top entrada:Book your Burj Khalifa ticket}} well in advance — upper floor tickets sell out weeks ahead and the price rises the later you book. Best time: sunset, when the desert turns orange and the entire city lights up at once from 828 metres above it.

Next door is Dubai Mall, which houses the world's largest shopping-mall aquarium, an ice rink, and exactly the same "how long have I been in here?" panic as any large mall in the world, multiplied by ten. The Dubai Fountain, which performs in front of the mall at night, is free and cinematic — two qualities that are incompatible in most cities but not this one.

The historic Al Fahidi neighbourhood is pre-modern Dubai: mud wind towers that functioned as natural air conditioning, narrow alleyways, the Dubai Museum explaining what this city looked like before oil. The contrast with the Sheikh Zayed Road skyline visible in the background is the most honest image you can get of how this place actually works.

For the desert: {{CTA:activity:getyourguide:dubai desert safari sunset:Book your sunset safari}} at Al Marmoom, 45 minutes from the centre. It includes sandboarding, a dune photo session and a Bedouin dinner under the stars. It's the cheapest experience of the trip and the one I remember most. The desert at night, with no light pollution, is an entirely different city.

Palm Jumeirah deserves a morning: the monorail end to end with views of the whole coastline, the Atlantis hotel with its water park. {{CTA:activity:tiqets:atlantis aquaventure water park dubai:Aquaventure tickets}} are expensive but justified with family or with thirty-five degrees outside and a desire to spend the day in the water.

For getting around, the metro connects the main points on Sheikh Zayed Road with an efficiency that other cities should study. For everything else, {{CTA:service:discovercars:alquiler coche dubai:a rental car}} gives freedom to reach the desert and the northern beaches. And for genuinely local food: Deira, always Deira.

An important note: Dubai blocks VoIP and certain messaging apps, and hotel wifi is not as private as it appears. Travel with {{CTA:service:nordvpn:travel vpn:Protect your connection with NordVPN}} — it's the most useful tool on this trip after your passport. And for a destination where private medical care is expensive by definition, {{CTA:service:safetywing:travel insurance:Insure your trip with SafetyWing}} is the most sensible decision before boarding.`,
  },
  faq: {
    es: [
      { question: "¿Necesito visado para Dubái?", answer: "Los ciudadanos de la UE (incluida España) pueden entrar en los Emiratos Árabes Unidos sin visado y obtienen un permiso de estancia de 30 días a la llegada, ampliable hasta 90 días. Solo necesitas pasaporte con mínimo 6 meses de validez." },
      { question: "¿Cuál es la mejor época para visitar Dubái?", answer: "Noviembre a marzo es la temporada ideal, con temperaturas de 20-30°C perfectas para turismo. El verano (junio-agosto) puede alcanzar los 45°C de sensación térmica, aunque hoteles y centros comerciales están muy bien climatizados y hay buenos descuentos." },
      { question: "¿Qué código de vestimenta hay que seguir en Dubái?", answer: "En lugares públicos, mezquitas y zocos, se recomienda vestimenta discreta con hombros y rodillas cubiertos. En la playa, hoteles y piscinas la ropa de baño es perfectamente aceptable. Llevar una prenda de abrigo siempre que entres en un centro comercial." },
    ],
    en: [
      { question: "Do I need a visa for Dubai?", answer: "EU citizens (including from Spain) can enter the UAE without a visa and receive a 30-day permit on arrival, extendable to 90 days. You only need a passport valid for at least 6 months." },
      { question: "When is the best time to visit Dubai?", answer: "November to March is the ideal season with temperatures of 20–30°C perfect for sightseeing. Summer (June–August) can reach 45°C heat index, though hotels and malls are well air-conditioned and prices drop significantly." },
      { question: "What dress code should I follow in Dubai?", answer: "In public places, mosques and souks, modest clothing is recommended with shoulders and knees covered. On the beach, in hotels and at pools, swimwear is perfectly acceptable. Always carry a layer when entering air-conditioned malls." },
    ],
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

Para moverse: el metro y los tranvías de Praga son eficientes y baratos. El casco histórico se recorre perfectamente a pie, con calzado cómodo, porque los adoquines son hermosos pero no tienen ninguna consideración por tus rodillas.

Nota práctica: el wifi de los cafés y albergues del centro es irregular en calidad — {{CTA:service:nordvpn:vpn viajes:Protege tu conexión con NordVPN}} si tienes trabajo que dependa de una conexión segura. Y aunque Praga no es zona euro, los cajeros y cambios en el aeropuerto son caros: {{CTA:service:revolut:tarjeta viaje europa:Abre tu cuenta Revolut gratis}} y paga en coronas checas al tipo de cambio real sin comisiones.`,
    en: `I went to Prague for a hen party. Not my own. It was for a friend of a friend I knew well enough to be invited and insufficiently enough to decline gracefully. I arrived on Thursday thinking I'd stay the weekend.

Some things change plans. Other things make them entirely obsolete. The Prague Spring — Eastern Europe's most important classical music festival, held annually since 1946 — was starting the following Monday. The Czech Philharmonic at the Rudolfinum. The hen party ended on Saturday. I stayed until the following Thursday. Prague has that effect.

Prague Castle dominates the city from Hradčany hill with the authority of something that's been there since the 9th century and has no intention of moving. It's the world's largest inhabited castle complex and houses St Vitus Cathedral, whose Gothic stained glass transforms morning light in a way that justifies waking early. {{CTA:tickets:tiqets:prague castle st vitus cathedral:Book your Castle ticket}} — the combination includes the Royal Palace, St George's Basilica and the legendary Golden Lane where Kafka briefly lived and where there are now souvenir shops. Kafka would have made it into a novel.

Charles Bridge is Prague's postcard and it deserves the early start. At dawn, before 7am, you have it nearly to yourself: the 30 Baroque statues of saints, the Vltava River, the Gothic towers in the background and a morning mist that makes everything look like a scene from an 18th-century book. By 11am it's the background for four million photographs taken by people you don't know.

Josefov, the Jewish Quarter, is arguably Prague's most important visit. {{CTA:tickets:tiqets:jewish museum prague josefov synagogues:Enter the Jewish Museum}} — the combination ticket gives access to six synagogues and the medieval cemetery where twelve generations of Prague's Jewish community are buried in 12,000 square metres. It's one of those places that changes your perspective on Europe and on history and on what it means for something to survive when everything around it didn't.

The Vinohrady neighbourhood, away from tourist circuits, has the city's best specialty coffee shops, modern Czech cuisine and craft beer halls where a Pilsner Urquell costs under two euros. In 2026 this remains one of Europe's finest statistical facts.

{{CTA:activity:getyourguide:prague free walking tour old town:A free walking tour}} through the historic centre is the most intelligent way to start — local guides know the stories that appear in no printed guidebook, including why the Astronomical Clock was built in 1410 and what was done to the master clockmaker when he finished it. (It's not pleasant. It's perfectly medieval.)

For getting around: Prague's metro and trams are efficient and cheap. The historic centre is entirely walkable, in comfortable shoes, because the cobblestones are beautiful but have no sympathy for your knees.

A practical note: city centre café and hostel wifi varies considerably in quality — {{CTA:service:nordvpn:travel vpn:Protect your connection with NordVPN}} if any work depends on a secure connection. And although Prague is not in the euro zone, airport ATMs and exchange bureaus are expensive: {{CTA:service:revolut:travel card europe:Open your free Revolut account}} and pay in Czech crowns at the real exchange rate with no fees.`,
  },
  faq: {
    es: [
      { question: "¿Es cara Praga en comparación con otras capitales europeas?", answer: "Praga es más asequible que París, Londres o Ámsterdam. El alojamiento, la comida local y el transporte son notablemente más baratos. Eso sí, el centro turístico ha subido de precio considerablemente en los últimos años — sal de la zona de la Plaza de la Ciudad Vieja para comer mejor y más barato." },
      { question: "¿Cómo moverse por Praga?", answer: "El metro, el tranvía y el autobús comparten el mismo billete (integrado). El tranvía es el medio más cómodo para el centro histórico. Praga es muy caminable entre los barrios principales — muchos monumentos están a 10-15 minutos a pie entre sí." },
      { question: "¿Cuándo es mejor visitar Praga?", answer: "Primavera (abril-mayo) y otoño (septiembre-octubre) son los mejores momentos: buen clima y menos masificación que en verano. Diciembre es especial por los mercados navideños. Julio y agosto son los meses más concurridos y caros del año." },
    ],
    en: [
      { question: "Is Prague expensive compared to other European capitals?", answer: "Prague is more affordable than Paris, London or Amsterdam. Accommodation, local food and transport are noticeably cheaper. That said, the tourist centre has risen considerably in price in recent years — move away from Old Town Square to eat better and cheaper." },
      { question: "How do I get around Prague?", answer: "The metro, tram and bus share a single integrated ticket. The tram is the most convenient for the historic centre. Prague is very walkable between the main neighbourhoods — many monuments are 10–15 minutes on foot from each other." },
      { question: "When is the best time to visit Prague?", answer: "Spring (April–May) and autumn (September–October) are the best times: good weather and fewer crowds than summer. December is special for Christmas markets. July and August are the most crowded and expensive months of the year." },
    ],
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

Para alojarte: Ubud para cultura y naturaleza, Seminyak y Canggu para gastronomía y vida nocturna, Uluwatu para surf y atardeceres. {{CTA:hotel:booking:bali ubud boutique hotel:Compara hoteles en Bali}} — la diferencia de precio entre un tres y un cinco estrellas en Bali es sorprendentemente pequeña fuera de julio y agosto, lo cual es el argumento definitivo para el upgrade.

Dos cosas imprescindibles antes de llegar: Indonesia bloquea algunas plataformas de forma intermitente, y el wifi de los coworkings de Canggu, aunque bueno, no es privado — {{CTA:service:nordvpn:vpn viajes:Protege tu conexión con NordVPN}} es la herramienta que más usé en ocho meses de trabajo remoto en la isla. Y viajar a Bali sin seguro es uno de los errores más comunes: {{CTA:service:safetywing:seguro viaje:Asegura tu viaje con SafetyWing}} cubre asistencia médica, evacuación y cancelaciones por una cuota mensual razonable — el seguro diseñado exactamente para nómadas digitales y viajeros de largo plazo.`,
    en: `I arrived with a three-month contract. A real contract, with a real client, which explicitly stated "remote work from Bali" because I'd been saying I was going to do it for six months and someone finally took me seriously. I set up in Canggu with reliable wifi, a rented scooter and the firm intention of being productive four days a week and exploring the other three.

Eight months later, when I finally bought the return ticket, I had renewed the contract twice, learned the airport-to-Ubud route without GPS, survived a lunar eclipse over Tanah Lot temple, and trained the sacred monkeys in the Ubud forest to stop stealing my headphones because they'd learned I never had food on me. Bali does that.

Ubud is the most intelligent starting point on the island. 25 kilometres from the chaos of Kuta, it has art galleries, Balinese dance workshops, specialty coffee shops with rice terrace views and the energy of someone who has taken spirituality seriously without becoming insufferable about it. {{CTA:activity:getyourguide:ubud culture day tour temples rice terraces:A day tour around Ubud}} is the most efficient way to see the main temples, the Tegallalang terraces and Mount Kintamani in one day — which is what you need on day one if you want to orient yourself.

The Tegallalang rice terraces are the image of Bali everyone recognises. The UNESCO-inscribed subak irrigation system created these cascading landscapes centuries ago, and in the rainy season they're an impossible shade of green. The key: arrive before 8am, before the groups with professional cameras and coordinated outfits for content arrive. The early morning light on wet rice is some of the best photography I've managed in four years of travel.

Tanah Lot Temple rises from a volcanic rock in the ocean at sunset and becomes Bali's most replicated postcard for a reason: it's genuinely spectacular. You'll share it with eight hundred people who had the same idea, but here the crowd is part of the atmosphere.

Uluwatu Temple, on a 70-metre cliff at the island's southern tip, adds altitude and ocean. The Kecak Fire Dance at sunset — dozens of dancers narrating the Ramayana with voices and no instruments, with the Indian Ocean and fire behind them — is Bali's most intense cultural experience. {{CTA:activity:viator:uluwatu temple kecak fire dance bali sunset:Book your Uluwatu & Kecak Dance tour}} to arrive before it starts and get the best seats. The monkeys will also be there. Keep your phone in your pocket.

For those who can manage an early start: the Batur volcano trek. {{CTA:activity:getyourguide:mount batur sunrise trek bali:The sunrise trek}} departs at 2am. Yes, 2 in the morning. You reach 1,717 metres of altitude just as the sun appears above the cloud sea and the crater lake turns orange. The descent includes a dip in natural hot springs. All five people in my group said they'd do it again.

Where to stay: Ubud for culture and nature, Seminyak and Canggu for food and nightlife, Uluwatu for surf and sunsets. {{CTA:hotel:booking:bali ubud boutique hotel:Compare hotels in Bali}} — the price difference between a three-star and five-star in Bali is surprisingly small outside July and August, which is the definitive argument for the upgrade.

Two essentials before you arrive: Indonesia blocks certain platforms intermittently, and the Canggu coworking wifi, while generally good, is not private — {{CTA:service:nordvpn:travel vpn:Protect your connection with NordVPN}} was the tool I used most over eight months of remote work on the island. And travelling to Bali without insurance is one of the most common mistakes: {{CTA:service:safetywing:travel insurance:Insure your trip with SafetyWing}} covers medical assistance, evacuation and cancellations for a reasonable monthly fee — insurance designed precisely for digital nomads and long-term travellers.`,
  },
  faq: {
    es: [
      { question: "¿Necesito visado para Bali/Indonesia?", answer: "Los ciudadanos de la UE pueden entrar en Indonesia sin visado hasta 30 días. Para estancias de hasta 60 días puedes adquirir una Visa on Arrival a tu llegada al aeropuerto de Denpasar (Ngurah Rai) por unos 35 USD, pagaderos en efectivo o con tarjeta." },
      { question: "¿Cuál es la mejor época para visitar Bali?", answer: "La temporada seca (mayo-septiembre) es ideal para la playa y las excursiones, con escasas lluvias y cielos despejados. La temporada húmeda (octubre-abril) trae lluvias frecuentes pero también paisajes más verdes, menos turistas y precios más bajos." },
      { question: "¿Es seguro el agua del grifo en Bali?", answer: "No. El agua del grifo no es potable en Bali. Bebe siempre agua embotellada o usa purificadores portátiles. Ten también cuidado con el hielo en los establecimientos menos turísticos — en restaurantes conocidos y hoteles suelen usar hielo filtrado." },
    ],
    en: [
      { question: "Do I need a visa for Bali/Indonesia?", answer: "EU citizens can enter Indonesia without a visa for up to 30 days. For stays of up to 60 days you can get a Visa on Arrival at Denpasar (Ngurah Rai) airport for around $35, payable in cash or by card." },
      { question: "When is the best time to visit Bali?", answer: "The dry season (May–September) is ideal for the beach and excursions, with little rainfall and clear skies. The wet season (October–April) brings frequent rain but also greener landscapes, fewer tourists and lower prices." },
      { question: "Is tap water safe to drink in Bali?", answer: "No. Tap water is not drinkable in Bali. Always drink bottled water or use portable purifiers. Also be cautious with ice at less touristy establishments — well-known restaurants and hotels typically use filtered ice." },
    ],
  },
},

  // ─── VIENA ────────────────────────────────────────────────────────────────────
  {
    id: 13,
    slug: "viena-guia-2026",
    enSlug: "vienna-guide-2026",
    narrator: "sofia",
    city: "Vienna",
    country: { es: "Austria", en: "Austria" },
    emoji: "🎻",
    date: "2026-03-15",
    readTime: "9 min",
    category: "europe",
    heroImage: "https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=1200&q=80",
    title: {
      es: "Viena: Música, Mármol y la Ciudad que Convirtió el Café en Filosofía de Vida",
      en: "Vienna: Music, Marble and the City That Turned Coffee into a Philosophy of Life",
    },
    subtitle: {
      es: "Palacios imperiales, ópera de otro mundo, Sachertorte con nata y los cafés más elegantes en los que nunca nadie te pedirá que te vayas",
      en: "Imperial palaces, world-class opera, Sachertorte with cream and the most elegant cafés on earth where nobody will ever ask you to leave",
    },
    excerpt: {
      es: "Viena es la ciudad que más seriamente se toma el placer de no hacer nada urgente. Sus cafés, sus palacios y su música clásica componen una ciudad que sigue gobernando culturalmente Europa — sin necesitar que nadie se lo confirme.",
      en: "Vienna is the city that takes the pleasure of unhurried living most seriously. Its coffee houses, palaces and classical music compose a city that still governs Europe culturally — without requiring anyone's confirmation.",
    },
    metaDescription: {
      es: "Guía completa Viena 2026: Schönbrunn, Belvedere, Ópera Estatal, Prater, Heurigen y los cafés imperiales. Con consejos para no perderse ni una nota.",
      en: "Complete Vienna 2026 guide: Schönbrunn, Belvedere, State Opera, Prater, Heurigen and the imperial coffee houses. Tips for not missing a single note.",
    },
    keywords: {
      es: ["guía viena", "viena 2026", "qué ver en viena", "palacio schönbrunn", "ópera viena", "austria viaje", "café viena"],
      en: ["vienna guide", "vienna 2026", "things to do vienna", "schonbrunn palace", "vienna opera", "austria travel", "vienna coffee house"],
    },
    pointsOfInterest: [
      {
        name: "Palacio de Schönbrunn",
        type: "Palacio",
        lat: 48.1845, lng: 16.3122,
        description: {
          es: "El Versalles de los Habsburgo: 1.441 habitaciones, jardines formales del siglo XVIII y la mejor vista de Viena desde el Gloriette en lo alto de la colina. Un recordatorio de que el exceso bien ejecutado puede ser una forma de arte.",
          en: "The Habsburg Versailles: 1,441 rooms, 18th-century formal gardens and the best view of Vienna from the Gloriette at the top of the hill. A reminder that excess, when executed with conviction, can be a legitimate art form.",
        },
        rating: 4.9, priceRange: "€16–26",
        affiliateLinks: [
          { label: { es: "Entrada Schönbrunn + jardines", en: "Schönbrunn + gardens ticket" }, partner: "tiqets", query: "schonbrunn palace vienna gardens", type: "tickets" },
          { label: { es: "Tour palacio imperial", en: "Imperial palace tour" }, partner: "civitatis", query: "schonbrunn palace imperial tour vienna", type: "activity" },
        ],
      },
      {
        name: "Palacio del Belvedere",
        type: "Museo",
        lat: 48.1914, lng: 16.3810,
        description: {
          es: "Arquitectura barroca espectacular y la colección de arte más importante de Austria. El Beso de Klimt en el Belvedere Superior detiene el tiempo de un modo que no debería ser posible para una pintura de hace más de un siglo.",
          en: "Spectacular Baroque architecture and Austria's most important art collection. Klimt's The Kiss in the Upper Belvedere stops time in a way that shouldn't be possible for a painting over a century old.",
        },
        rating: 4.8, priceRange: "€16",
        affiliateLinks: [
          { label: { es: "Entrada Belvedere Superior", en: "Upper Belvedere ticket" }, partner: "tiqets", query: "upper belvedere vienna klimt kiss", type: "tickets" },
          { label: { es: "Tour arte vienés", en: "Viennese art tour" }, partner: "getyourguide", query: "belvedere palace klimt vienna art tour", type: "activity" },
        ],
      },
      {
        name: "Ópera Estatal de Viena",
        type: "Teatro",
        lat: 48.2030, lng: 16.3687,
        description: {
          es: "Una de las salas de ópera más importantes del mundo con 300 producciones anuales distintas. Las entradas de pie desde 3€ son la mejor propuesta cultural-precio del mundo. Llegas de pie, te quedas de pie, y eso lo convierte en el concierto más memorable de tu vida.",
          en: "One of the world's most important opera houses with 300 different annual productions. Standing tickets from €3 are the world's finest culture-to-price proposition. You arrive standing, you stay standing, and that makes it the most memorable concert of your life.",
        },
        rating: 4.9, priceRange: "€3–250",
        affiliateLinks: [
          { label: { es: "Entradas Ópera Estatal Viena", en: "Vienna State Opera tickets" }, partner: "tiqets", query: "vienna state opera tickets 2026", type: "tickets" },
          { label: { es: "Tour tras bambalinas ópera", en: "Opera backstage tour" }, partner: "getyourguide", query: "vienna state opera backstage tour", type: "activity" },
        ],
      },
      {
        name: "Cafés Imperiales",
        type: "Gastronómico",
        lat: 48.2069, lng: 16.3697,
        description: {
          es: "El Café Central, el Café Schwarzenberg, el Landtmann: los cafés de Viena son un estilo de vida declarado Patrimonio Cultural Inmaterial por la UNESCO. Un Melange y un periódico durante tres horas no es procrastinación — es cultura.",
          en: "Café Central, Café Schwarzenberg, Landtmann: Vienna's coffee houses are a way of life declared Intangible Cultural Heritage by UNESCO. A Melange and a newspaper for three hours is not procrastination — it's culture.",
        },
        rating: 4.7,
        affiliateLinks: [
          { label: { es: "Tour cafés imperiales viena", en: "Viennese imperial café tour" }, partner: "viator", query: "vienna coffee house imperial tour", type: "activity" },
          { label: { es: "Reservar café central viena", en: "Book Café Central Vienna" }, partner: "thefork", query: "cafe central vienna", type: "restaurant" },
        ],
      },
      {
        name: "Prater y Riesenrad",
        type: "Parque",
        lat: 48.2165, lng: 16.3958,
        description: {
          es: "El parque de atracciones más antiguo del mundo con la noria gigante del siglo XIX que domina el Prater. La noria aparece en El Tercer Hombre — y desde las cabinas, Viena entera se despliega como un mapa de su propio esplendor.",
          en: "The world's oldest amusement park and its 19th-century giant Ferris wheel that dominates the Prater. The wheel appears in The Third Man — and from the gondolas, all of Vienna unfolds like a map of its own splendour.",
        },
        rating: 4.6, priceRange: "€15",
        affiliateLinks: [
          { label: { es: "Entrada Riesenrad", en: "Riesenrad ticket" }, partner: "tiqets", query: "riesenrad ferris wheel vienna prater", type: "tickets" },
        ],
      },
    ],
    events: [
      {
        name: "Wiener Festwochen 2026",
        type: "art",
        date: "May–Jun 2026",
        venue: "Varios teatros y espacios",
        urgency: true,
        description: {
          es: "El festival de artes escénicas más importante de Austria llena de teatro, danza y ópera contemporánea los mejores escenarios de la ciudad durante seis semanas. El programa 2026 mezcla producciones de la Burgtheater con directores internacionales de vanguardia y actuaciones en espacios no convencionales de la ciudad.",
          en: "Austria's most important performing arts festival fills the city's finest stages with theatre, dance and contemporary opera for six weeks. The 2026 programme mixes Burgtheater productions with international avant-garde directors and performances in unconventional city spaces.",
        },
        affiliateLinks: [
          { label: { es: "Entradas Wiener Festwochen", en: "Wiener Festwochen tickets" }, partner: "tiqets", query: "wiener festwochen vienna 2026 theatre dance", type: "tickets" },
          { label: { es: "Tour escénico Viena", en: "Vienna theatre scene tour" }, partner: "getyourguide", query: "vienna wiener festwochen performing arts experience", type: "activity" },
        ],
      },
      {
        name: "Viena Clásica — Conciertos en palacio",
        type: "cultural",
        date: "Todo el año",
        venue: "Palacio Schönbrunn y Sala Dorada",
        urgency: false,
        description: {
          es: "Conciertos de Mozart y Strauss en los salones del Palacio de Schönbrunn y en la Sala Dorada del Musikverein — el mejor sonido de Europa en el espacio arquitectónico más bello en el que un ser humano puede escuchar una sinfonía. El único dilema: si mirar el techo o cerrar los ojos.",
          en: "Mozart and Strauss concerts in the halls of Schönbrunn Palace and in the Golden Hall of the Musikverein — Europe's finest sound in the most beautiful architectural space a human being can listen to a symphony in. The only dilemma: whether to look at the ceiling or close your eyes.",
        },
        affiliateLinks: [
          { label: { es: "Concierto Mozart en Schönbrunn", en: "Mozart concert at Schönbrunn" }, partner: "tiqets", query: "mozart concert schonbrunn palace vienna", type: "tickets" },
          { label: { es: "Concierto Sala Dorada Musikverein", en: "Musikverein Golden Hall concert" }, partner: "getyourguide", query: "musikverein golden hall concert vienna", type: "activity" },
        ],
      },
      {
        name: "Vienna City Marathon",
        type: "sport",
        date: "Abr 2026",
        venue: "Centro histórico",
        urgency: false,
        description: {
          es: "Uno de los maratones urbanos más bellos del mundo: el trazado pasa por la Ringstrasse, los palacios imperiales y el Ring vienés. Correr Viena a las 7 de la mañana del domingo antes de que abran los cafés es una experiencia que ningún café puede igualar — aunque al llegar a la meta, uno lo intenta igualmente.",
          en: "One of the world's most beautiful city marathons: the route passes along the Ringstrasse, the imperial palaces and the Viennese Ring. Running Vienna at 7am on Sunday before the coffee houses open is an experience no café can match — though at the finish line, you try one anyway.",
        },
        affiliateLinks: [
          { label: { es: "Inscripción Maratón de Viena", en: "Vienna Marathon registration" }, partner: "getyourguide", query: "vienna city marathon 2026 registration run", type: "activity" },
          { label: { es: "Tour running Ringstrasse", en: "Ringstrasse running tour" }, partner: "viator", query: "vienna marathon ringstrasse running tour palaces", type: "activity" },
        ],
      },
      {
        name: "Heuriger Season — Vino de la vendimia",
        type: "gastronomy",
        date: "May–Oct 2026",
        venue: "Grinzing, Heiligenstadt, Nussdorf",
        urgency: false,
        description: {
          es: "Los Heurigen son las tabernas de vino nuevo que los viticultores vieneses abren en sus propias casas cuando hay cosecha fresca. Beber vino blanco joven en los viñedos de las colinas de Viena con las agujas de la catedral de fondo es el plan menos turístico y más perfecto de la ciudad.",
          en: "The Heurigen are new-wine taverns that Viennese winemakers open in their own homes when the fresh harvest is ready. Drinking young white wine in Vienna's hillside vineyards with the cathedral spires in the background is the least touristy and most perfect plan the city has to offer.",
        },
        affiliateLinks: [
          { label: { es: "Tour Heuriger viñedos viena", en: "Vienna Heuriger vineyard tour" }, partner: "viator", query: "vienna heuriger wine tavern tour grinzing", type: "activity" },
          { label: { es: "Experiencia vino vienés", en: "Viennese wine experience" }, partner: "getyourguide", query: "vienna wine tasting heuriger vineyards", type: "activity" },
        ],
      },
    ],
    services: {
      flights: ["skyscanner", "kiwi"],
      hotels: ["booking", "hostelworld", "expedia"],
      cars: ["discovercars", "rentalcars", "autoeurope"],
      activities: ["getyourguide", "viator", "tiqets", "civitatis", "klook"],
      restaurants: ["thefork", "opentable"],
      insurance: ["safetywing", "worldnomads"],
      esim: ["airalo", "holafly", "saily", "yesim"],
      transfers: ["intui", "welcomepickups", "gettransfer"],
      transport: ["omio"],
    },
    content: {
      es: `Llegué a Viena el primer domingo de marzo con la agenda medio llena: una reserva en la Ópera Estatal para el martes, la idea vaga de ver el Belvedere y el propósito firme de encontrar el mejor Apfelstrudel de la ciudad. Salí nueve días después habiendo abandonado completamente la agenda y habiendo sustituido el propósito firme por el hábito diario del Melange en el Café Central, que es exactamente el tipo de cosa que Viena hace con la gente que la visita por primera vez.

El Café Central, en el Palais Ferstel del centro histórico, es el lugar más elegante en el que nadie te apresura a terminar el café. Las bóvedas de piedra, los periódicos en sus varillas de madera, los mozos con mandil que sirven con una dignidad que sugiere que llevan ahí desde el Imperio Austrohúngaro: todo compone una escena que la UNESCO tuvo el buen criterio de declarar Patrimonio Cultural Inmaterial. Un Melange y una Sachertorte duran lo que necesiten durar. {{CTA:activity:viator:vienna coffee house imperial tour:Un tour por los grandes cafés imperiales}} ayuda a distinguir los auténticos de los que viven de su fama — que en Viena, la distinción importa.

El Palacio de Schönbrunn merece una mañana completa y el esfuerzo de llegar antes de las 9 para ver los jardines sin multitudes. Las 1.441 habitaciones construidas para que los Habsburgo no tuvieran que reconocer que existían los demás mortales impresionan menos por el número que por la escala individual de cada salón: el Salón de los Espejos donde Mozart tocó de niño para María Teresa, la cámara de Napoleón, los aposentos de Francisco José decorados con la austeridad severa de alguien que lleva cincuenta años gobernando y ya no necesita demostrar nada. {{CTA:tickets:tiqets:schonbrunn palace vienna gardens:Reserva tu entrada con antelación}} — en temporada media la cola sin reserva es de más de una hora.

El Belvedere Superior guarda el Beso de Klimt. Si hay una sola razón para venir a Viena que no sea la ópera ni el café, es esta: la pintura está en una sala amplia, bien iluminada, a la altura de los ojos, sin cristal protector visible desde cerca. El oro, la espiral de los vestidos entrelazados, la expresión de rendición completa de la mujer: es una de las pinturas más intensas que existen y en el Belvedere puedes quedarte delante de ella el tiempo que quieras. {{CTA:tickets:tiqets:upper belvedere vienna klimt kiss:Compra tu entrada al Belvedere Superior}} con tiempo — las colas en temporada alta llegan a los noventa minutos.

La Ópera Estatal merece un párrafo propio. Las entradas de pie desde 3 euros son reales y funcionan así: llegas una hora antes, formas fila, consigues tu sitio de pie en la parte trasera del patio de butacas o en los palcos, y escuchas una de las mejores orquestas del mundo en el mejor acústico de Europa. Durante tres horas de pie con un programa impreso que no entiendes del todo pero que suena de un modo que justifica todos los vuelos de bajo coste del mundo. {{CTA:tickets:tiqets:vienna state opera tickets 2026:También puedes reservar butaca}} si tu espalda tiene sus propias opiniones sobre estar de pie tres horas.

El Prater al atardecer, con el Riesenrad girando despacio sobre el horizonte vienés y los vendedores de Würstel encendiendo sus brasas, es la Viena más humana y menos monumental. La noria apareció en El Tercer Hombre en 1949 y la ciudad la ha conservado no por nostalgia sino porque sigue funcionando perfectamente — lo cual es la actitud más vienesa posible.

Para los alrededores, {{CTA:service:omio:viena tren salzburgo:el tren a Salzburgo}} tarda menos de tres horas y la ciudad de Mozart vale absolutamente la excursión de un día.

Nota práctica: el wifi de los cafés imperiales de Viena es sorprendentemente bueno, pero en redes públicas conviene usar {{CTA:service:nordvpn:vpn viajes:Protege tu conexión con NordVPN}} — especialmente si trabajas mientras viajas. Y para las entradas de ópera, museos y cenas sin comisiones de cambio: {{CTA:service:revolut:tarjeta viaje europa:Abre tu cuenta Revolut gratis}} antes de salir.`,
      en: `I arrived in Vienna on the first Sunday of March with a half-full agenda: a booking at the State Opera for Tuesday, the vague idea of visiting the Belvedere, and the firm intention of finding the best Apfelstrudel in the city. I left nine days later having abandoned the agenda entirely and replaced the firm intention with the daily habit of a Melange at Café Central — which is precisely the kind of thing Vienna does to people visiting for the first time.

Café Central, in the Palais Ferstel in the historic centre, is the most elegant place on earth where nobody ever hurries you to finish your coffee. The stone vaulted ceilings, the newspapers on their wooden rods, the waiters in aprons who serve with a dignity that suggests they've been there since the Austro-Hungarian Empire: together they compose a scene that UNESCO had the good sense to declare Intangible Cultural Heritage. A Melange and a Sachertorte last for as long as they need to last. {{CTA:activity:viator:vienna coffee house imperial tour:A tour through the great imperial coffee houses}} helps you distinguish the authentic ones from those living off reputation — in Vienna, the distinction matters enormously.

Schönbrunn Palace deserves a full morning and the effort of arriving before 9am to see the gardens without crowds. The 1,441 rooms built so the Habsburgs wouldn't have to acknowledge the existence of ordinary mortals are less impressive for their number than for the individual scale of each salon: the Hall of Mirrors where Mozart played as a child for Maria Theresa, Napoleon's bedroom, Franz Joseph's chambers decorated with the severe austerity of someone who has been governing for fifty years and no longer needs to prove anything. {{CTA:tickets:tiqets:schonbrunn palace vienna gardens:Book in advance}} — in mid-season the queue without a booking exceeds an hour.

The Upper Belvedere houses Klimt's The Kiss. If there is a single reason to come to Vienna that is neither opera nor coffee, it is this: the painting is in a large, well-lit room, at eye level, without visible protective glass from close up. The gold, the spiral of intertwined garments, the expression of complete surrender on the woman's face: it is one of the most intense paintings in existence and at the Belvedere you can stand in front of it for as long as you want. {{CTA:tickets:tiqets:upper belvedere vienna klimt kiss:Buy your Upper Belvedere ticket}} in advance — queues in high season reach ninety minutes.

The State Opera deserves its own paragraph. Standing tickets from three euros are genuine and work like this: you arrive an hour early, form a queue, get your standing spot at the back of the stalls or in the gallery boxes, and listen to one of the world's finest orchestras in Europe's finest acoustic. Three hours standing with a printed programme you don't entirely follow but which sounds in a way that justifies every budget flight ever taken. {{CTA:tickets:tiqets:vienna state opera tickets 2026:You can also book a proper seat}} if your back has its own opinions about standing for three hours.

The Prater at dusk, with the Riesenrad turning slowly against the Viennese skyline and the Würstel vendors lighting their coals, is the most human and least monumental version of Vienna. The Ferris wheel appeared in The Third Man in 1949 and the city has kept it not out of nostalgia but because it still works perfectly — which is the most Viennese attitude possible.

For day trips, {{CTA:service:omio:vienna train salzburg:the train to Salzburg}} takes under three hours and Mozart's city is absolutely worth a day excursion.

A practical note: the wifi in Vienna's imperial coffee houses is surprisingly reliable, but on public networks it's worth using {{CTA:service:nordvpn:travel vpn:Protect your connection with NordVPN}} — particularly if you're working while travelling. And for opera tickets, museum entries and dinners without conversion fees: {{CTA:service:revolut:travel card europe:Open your free Revolut account}} before you leave.`,
    },
    faq: {
      es: [
        { question: "¿Cuántos días son suficientes para ver Viena?", answer: "Cuatro días permiten ver los palacios principales, la Ópera y los cafés sin prisa. Con dos días se puede hacer un resumen decente, pero te irás con la lista de pendientes larga." },
        { question: "¿Cómo conseguir entradas baratas para la Ópera de Viena?", answer: "Las entradas de pie (Stehplätze) cuestan entre 3 y 5€ y se venden en taquilla 80 minutos antes del espectáculo. Llega con tiempo y forma fila — el sistema funciona con notable elegancia para ser una fila en la calle." },
        { question: "¿Merece la pena el Vienna City Card?", answer: "Si visitas más de tres atracciones en un día y usas el transporte público, sí. Incluye metro, tranvías y descuentos en museos. Para estancias de dos días o más es prácticamente siempre rentable." },
      ],
      en: [
        { question: "How many days are enough for Vienna?", answer: "Four days allows you to see the main palaces, the Opera and the coffee houses without rushing. Two days gives you a decent overview, but you'll leave with a long list of things you missed." },
        { question: "How to get cheap Vienna Opera tickets?", answer: "Standing tickets (Stehplätze) cost €3-5 and are sold at the box office 80 minutes before the performance. Arrive with time and join the queue — the system works with notable elegance for something that is, essentially, a pavement queue." },
        { question: "Is the Vienna City Card worth it?", answer: "If you visit more than three attractions in a day and use public transport, yes. It includes metro, trams and museum discounts. For stays of two days or more it is almost always worth the cost." },
      ],
    },
  },

  // ─── SEÚL ─────────────────────────────────────────────────────────────────────
  {
    id: 14,
    slug: "seul-guia-completa-2026",
    enSlug: "seoul-complete-guide-2026",
    narrator: "marcos",
    city: "Seoul",
    country: { es: "Corea del Sur", en: "South Korea" },
    emoji: "🇰🇷",
    date: "2026-03-22",
    readTime: "10 min",
    category: "asia",
    heroImage: "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=1200&q=80",
    title: {
      es: "Seúl: K-pop, Palacios Joseon y la Ciudad que Nunca Para de Reinventarse",
      en: "Seoul: K-pop, Joseon Palaces and the City That Never Stops Reinventing Itself",
    },
    subtitle: {
      es: "Callejones de hanok entre rascacielos, ramyeon a medianoche y el país con la mejor conexión a internet del mundo — por si acaso",
      en: "Hanok alleyways between skyscrapers, midnight ramyeon and the country with the world's best internet — just in case",
    },
    excerpt: {
      es: "Seúl es la ciudad que resolvió el problema de cómo ser simultáneamente antiquísima y completamente del futuro. Lo consigue cada día sin que parezca esfuerzo.",
      en: "Seoul is the city that solved the problem of being simultaneously ancient and completely of the future. It manages it every day without appearing to try.",
    },
    metaDescription: {
      es: "Guía completa Seúl 2026: Gyeongbokgung, Bukchon, Myeongdong, Hongdae, gastronomía coreana y K-pop. Todos los consejos para tu viaje a Corea del Sur.",
      en: "Complete Seoul 2026 guide: Gyeongbokgung, Bukchon, Myeongdong, Hongdae, Korean cuisine and K-pop. All the tips for your South Korea trip.",
    },
    keywords: {
      es: ["guía seúl", "seúl 2026", "qué ver en seúl", "corea del sur viaje", "palacio gyeongbokgung", "bukchon", "kpop seúl"],
      en: ["seoul guide", "seoul 2026", "things to do seoul", "south korea travel", "gyeongbokgung palace", "bukchon", "kpop seoul"],
    },
    pointsOfInterest: [
      {
        name: "Palacio de Gyeongbokgung",
        type: "Palacio histórico",
        lat: 37.5796, lng: 126.9770,
        description: {
          es: "El palacio principal de la dinastía Joseon (siglo XIV) con el espectacular fondo de las montañas Bukak. El cambio de guardia real es una coreografía de veinte minutos que merece madrugar. Alquila un hanbok en la entrada — el acceso es gratis si llegas vestido de época y la foto vale cada won.",
          en: "The main palace of the 14th-century Joseon dynasty with the spectacular Bukak mountain backdrop. The royal guard changing ceremony is a twenty-minute choreography worth an early start. Rent a hanbok at the entrance — entry is free if you arrive in traditional dress and the photo is worth every won.",
        },
        rating: 4.9, priceRange: "₩3.000",
        affiliateLinks: [
          { label: { es: "Tour palacio Gyeongbokgung", en: "Gyeongbokgung palace tour" }, partner: "getyourguide", query: "gyeongbokgung palace seoul guided tour", type: "activity" },
          { label: { es: "Tour palacios Joseon completo", en: "Full Joseon palaces tour" }, partner: "viator", query: "seoul joseon palaces full day tour", type: "activity" },
        ],
      },
      {
        name: "Bukchon Hanok Village",
        type: "Barrio histórico",
        lat: 37.5826, lng: 126.9830,
        description: {
          es: "El barrio de casas hanok del siglo XIV que existe a quinientos metros de los rascacielos de Jongno. Sus callejuelas empedradas entre tejados de teja curva son lo más cercano al Seúl de la dinastía Joseon que queda en pie — y la fotografía más repetida de Corea del Sur por buenas razones.",
          en: "The 14th-century hanok house neighbourhood that exists five hundred metres from the Jongno skyscrapers. Its cobblestone alleys between curved tile roofs are the closest thing to the Joseon-dynasty Seoul that survives — and South Korea's most repeated photograph for very good reasons.",
        },
        rating: 4.7,
        affiliateLinks: [
          { label: { es: "Tour barrios históricos Seúl", en: "Seoul historic neighbourhood tour" }, partner: "civitatis", query: "bukchon hanok village seoul guided walk", type: "activity" },
        ],
      },
      {
        name: "Myeongdong",
        type: "Barrio comercial",
        lat: 37.5636, lng: 126.9869,
        description: {
          es: "El epicentro de la K-beauty y la moda coreana. Las tiendas de skincare compiten en densidad con los puestos de comida callejera de tteokbokki y pajeon. Es imposible salir del barrio sin haber comprado al menos tres productos para la piel que no sabías que necesitabas.",
          en: "The epicentre of K-beauty and Korean fashion. Skincare shops compete in density with street food stalls selling tteokbokki and pajeon. It is physically impossible to exit the neighbourhood without having bought at least three skincare products you didn't know you needed.",
        },
        rating: 4.5,
        affiliateLinks: [
          { label: { es: "Tour comida callejera Seúl", en: "Seoul street food tour" }, partner: "getyourguide", query: "seoul street food tour myeongdong korean", type: "activity" },
          { label: { es: "Restaurantes coreanos Seúl", en: "Seoul Korean restaurants" }, partner: "opentable", query: "myeongdong seoul restaurant", type: "restaurant" },
        ],
      },
      {
        name: "Hongdae",
        type: "Barrio cultural",
        lat: 37.5563, lng: 126.9234,
        description: {
          es: "El barrio universitario más creativo de Asia: arte callejero, actuaciones en directo espontáneas, cafés de temática absurda y la escena de clubs de música electrónica más seria de Corea del Sur. El viernes por la noche aquí es una clase magistral de lo que significa que una generación decida que el futuro se parece a esto.",
          en: "Asia's most creative university neighbourhood: street art, spontaneous live performances, absurdly themed cafés and South Korea's most serious electronic music club scene. Friday night here is a masterclass in what it looks like when a generation decides that the future looks like this.",
        },
        rating: 4.6,
        affiliateLinks: [
          { label: { es: "Tour nocturno Hongdae Seúl", en: "Hongdae Seoul night tour" }, partner: "viator", query: "hongdae seoul night tour kpop clubs", type: "activity" },
        ],
      },
      {
        name: "Mercado de Gwangjang",
        type: "Mercado",
        lat: 37.5699, lng: 126.9996,
        description: {
          es: "El mercado tradicional más antiguo de Seúl, abierto desde 1905. Los puestos de bindaetteok (tortitas de judías mungo), mayak gimbap y yukhoe (steak tartare coreano) son la razón por la que Seúl tiene fama gastronómica que no necesita ningún restaurante con estrella para justificarse.",
          en: "Seoul's oldest traditional market, open since 1905. The stalls of bindaetteok (mung bean pancakes), mayak gimbap and yukhoe (Korean steak tartare) are the reason Seoul has a culinary reputation that requires no Michelin stars to justify itself.",
        },
        rating: 4.8,
        affiliateLinks: [
          { label: { es: "Tour gastronómico mercados Seúl", en: "Seoul market food tour" }, partner: "getyourguide", query: "gwangjang market seoul food tour traditional", type: "activity" },
        ],
      },
    ],
    events: [
      {
        name: "Cherry Blossom Season — Yeouido",
        type: "natural",
        date: "Abr 2026",
        venue: "Parque Yeouido y ciudad entera",
        urgency: true,
        description: {
          es: "La temporada de cerezos de Seúl no tiene nada que envidiarle a la de Japón y tiene la ventaja de que los vuelos son bastante más baratos. El parque de Yeouido se transforma en un túnel de flores rosas de más de cuatro kilómetros. Llevas cinco minutos ahí y entiendes por qué el mundo entero reserva vuelo con un año de antelación para ver algo que dura diez días.",
          en: "Seoul's cherry blossom season has nothing to envy Japan's and has the considerable advantage of significantly cheaper flights. Yeouido Park transforms into a four-kilometre pink flower tunnel. You are there for five minutes and you understand exactly why the entire world books flights a year ahead to see something that lasts ten days.",
        },
        affiliateLinks: [
          { label: { es: "Tour cerezos Seúl Yeouido", en: "Seoul Yeouido cherry blossom tour" }, partner: "getyourguide", query: "seoul cherry blossom yeouido spring tour 2026", type: "activity" },
          { label: { es: "Experiencia hanami coreano", en: "Korean hanami experience" }, partner: "viator", query: "seoul cherry blossom festival hanami korean", type: "activity" },
        ],
      },
      {
        name: "Seoul Fashion Week",
        type: "art",
        date: "Mar y Oct 2026",
        venue: "Dongdaemun Design Plaza",
        urgency: false,
        description: {
          es: "Una de las semanas de la moda más influyentes del mundo, celebrada en el Dongdaemun Design Plaza de Zaha Hadid. Los diseñadores coreanos llevan una década definiendo una estética propia que el resto del mundo lleva todavía intentando descifrar. Entrar a los desfiles es complicado. Ver el espectáculo fuera del DDP, con los asistentes como exhibición en sí mismos, no tiene precio.",
          en: "One of the world's most influential fashion weeks, held at Zaha Hadid's Dongdaemun Design Plaza. Korean designers have spent a decade defining an aesthetic that the rest of the world is still trying to decode. Getting inside the shows is complicated. Watching the spectacle outside the DDP, with the attendees as the exhibition themselves, is free and unmissable.",
        },
        affiliateLinks: [
          { label: { es: "Tour moda y diseño Seúl", en: "Seoul fashion and design tour" }, partner: "getyourguide", query: "seoul fashion week ddp design tour", type: "activity" },
          { label: { es: "Experiencia DDP Seúl", en: "DDP Seoul experience" }, partner: "viator", query: "dongdaemun design plaza seoul tour architecture", type: "activity" },
        ],
      },
      {
        name: "Boryeong Mud Festival",
        type: "festival",
        date: "Jul 2026",
        venue: "Boryeong (2h de Seúl)",
        urgency: false,
        description: {
          es: "El festival de barro más famoso de Asia a dos horas de Seúl en tren. Literalmente: toboganes, piscinas y peleas de barro con miles de personas. El barro de Boryeong es famoso por sus propiedades para la piel — aunque eso lo piensas antes de entrar, no durante.",
          en: "Asia's most famous mud festival two hours from Seoul by train. Literally: slides, pools and mud fights with thousands of people. Boryeong's mud is famous for its skin properties — though that's what you think before entering, not during.",
        },
        affiliateLinks: [
          { label: { es: "Excursión Boryeong Mud Festival", en: "Boryeong Mud Festival day trip" }, partner: "getyourguide", query: "boryeong mud festival day trip seoul 2026", type: "activity" },
          { label: { es: "Tour desde Seúl a Boryeong", en: "Seoul to Boryeong tour" }, partner: "viator", query: "boryeong mud festival tour from seoul july", type: "activity" },
        ],
      },
    ],
    services: {
      flights: ["skyscanner", "kiwi"],
      hotels: ["booking", "hostelworld", "expedia"],
      cars: ["discovercars", "rentalcars"],
      activities: ["getyourguide", "viator", "tiqets", "civitatis", "klook"],
      restaurants: ["opentable"],
      insurance: ["safetywing", "worldnomads"],
      esim: ["airalo", "holafly", "saily", "yesim"],
      transfers: ["intui", "welcomepickups", "gettransfer", "indrive"],
      vpn: ["nordvpn"],
    },
    content: {
      es: `Fui a Seúl a cubrir la Seoul Fashion Week para una revista. Llegué con tres acreditaciones de prensa, dos maletas con "outfits de trabajo" y la convicción de que sabía perfectamente a lo que iba. A las seis horas de aterrizar había descubierto que el mejor contenido no estaba dentro del Dongdaemun Design Plaza sino fuera, en los escalones de entrada, donde los asistentes llevaban la ropa más extraordinaria que había visto en años — y que el ramyeon del 7-Eleven de la esquina a las dos de la mañana era, sin ninguna duda, la mejor comida de mi vida hasta ese momento.

Seúl tiene esa capacidad específica de hacer que todo lo que traes planeado de casa resulte menos interesante que lo primero que encuentras por accidente. El fotógrafo de moda que sube al Bukchon Hanok Village a las 6 de la mañana para hacer las fotos de los tejados sin turistas. La diseñadora coreana que lleva dos horas esperando en la cola del Gyeongbokgung para hacer el cambio de guardia en hanbok. El grupo de universitarios de Hongdae que, mientras actuaba espontáneamente en la calle, consiguió que cuarenta desconocidos se pusieran a bailar sin que nadie se lo pidiera.

El Palacio de Gyeongbokgung es la razón por la que Seúl justifica cualquier vuelo de larga distancia incluso para quien no tiene el menor interés en la historia coreana. El contraste entre los tejados curvos de la arquitectura Joseon del siglo XIV y el skyline de Gangnam en el fondo es la imagen más honesta de la ciudad: antigua y nueva, no en competición sino en conversación permanente. {{CTA:activity:getyourguide:gyeongbokgung palace seoul guided tour:Un tour guiado por el palacio}} descifra los protocolos del cambio de guardia y la historia de la dinastía Joseon — que duró cinco siglos, lo cual es uno de los récords de longevidad institucional más impresionantes de la historia humana.

El barrio de Bukchon, a diez minutos a pie del palacio, es el Seúl del siglo XIV que sobrevivió al XX. Las callejuelas entre hanok de tejados curvos existen a quinientos metros de edificios de vidrio de cincuenta plantas y la convivencia no parece forzada — parece completamente natural, como si la ciudad hubiera decidido que el tiempo no necesita elegir entre el pasado y el presente sino que puede contenerlos a ambos simultáneamente.

En Myeongdong, la K-beauty no es una moda. Es una industria de diseño tan seria como la moda italiana, con una base de consumidores que toma la rutina de cuidado de piel con la misma seriedad con que otros mercados tratan la gastronomía. Los puestos de comida callejera que comparten manzana con las tiendas de skincare sirven tteokbokki (arroz en salsa picante), hotteok (tortitas de azúcar y canela) y kimbap que se comen de pie y que cuestan menos de dos euros. {{CTA:activity:getyourguide:seoul street food tour myeongdong korean:Un tour de comida callejera}} conecta los mejores puestos con contexto sobre la gastronomía coreana que los hace el doble de interesantes.

El Mercado de Gwangjang existe desde 1905 y el interior de sus pabellones de metal corrugado huele a aceite de sésamo, kimchi y masa friéndose de un modo que activa el hambre a cualquier hora del día. Los mayak gimbap — rollitos de arroz pequeños que cuestan veinte céntimos la unidad — son la razón por la que Seúl tiene fama gastronómica que no necesita ningún restaurante con estrella para justificarse. {{CTA:activity:getyourguide:gwangjang market seoul food tour traditional:Un tour gastronómico por los mercados de Seúl}} es, objetivamente, la mejor forma de gastarse quince euros en esta ciudad.

Hongdae por la noche es otro país dentro del mismo. Los clubs de música electrónica — Cakeshop, Soap, Beton Brut — tienen la misma seriedad de curaduría musical que Berghain pero con una política de puertas que consiste básicamente en que si pagas, entras. A las 3 de la mañana, las calles alrededor del club siguen siendo un mercado de ropa vintage iluminado con fluorescentes y una fila de food trucks que sirven dakgalbi hasta las 5. La ciudad que no duerme no es un eslogan — es una descripción literal de lo que pasa en Hongdae cualquier viernes.

Para internet: {{CTA:service:airalo:airalo esim south korea:una eSIM con datos ilimitados}} es imprescindible en Corea del Sur, donde el 5G cubre prácticamente todo el territorio y la velocidad de descarga media es tres veces la europea. Seúl sin internet es como Seúl sin luz — técnicamente posible, pero te estás perdiendo la mitad de la ciudad.

Para conexiones seguras en hoteles y cafés, {{CTA:service:nordvpn:vpn viajes:Protege tu conexión con NordVPN}} es el complemento lógico a la eSIM — Corea del Sur tiene algunas restricciones de contenido geográfico y la VPN es útil para servicios europeos y americanos. Y aunque Corea del Sur tiene un sistema sanitario excelente, viajar tan lejos sin cobertura médica internacional es un riesgo innecesario: {{CTA:service:safetywing:seguro viaje:Asegura tu viaje con SafetyWing}} lo cubre todo desde el primer día.`,
      en: `I went to Seoul to cover Seoul Fashion Week for a magazine. I arrived with three press accreditations, two suitcases of "work outfits" and the absolute conviction that I knew exactly what I was there for. Six hours after landing I had discovered that the best content wasn't inside the Dongdaemun Design Plaza but outside it, on the entrance steps, where the attendees were wearing the most extraordinary clothes I had seen in years — and that the 7-Eleven ramyeon at two in the morning was, without any doubt, the finest meal I had eaten in recent memory.

Seoul has that specific ability to make everything you brought planned from home feel less interesting than the first thing you find by accident. The fashion photographer climbing Bukchon Hanok Village at 6am to photograph the rooftops before tourists arrive. The Korean designer who had been waiting two hours in the Gyeongbokgung queue to do the guard change in a hanbok. The group of Hongdae university students who, while performing spontaneously in the street, managed to get forty strangers dancing without anyone asking.

Gyeongbokgung Palace is the reason Seoul justifies any long-haul flight even for someone with no prior interest in Korean history. The contrast between the curved roofs of 14th-century Joseon architecture and the Gangnam skyline behind it is the city's most honest image: old and new, not in competition but in permanent conversation. {{CTA:activity:getyourguide:gyeongbokgung palace seoul guided tour:A guided palace tour}} deciphers the guard-changing protocols and the history of the Joseon dynasty — which lasted five centuries, one of the most impressive records of institutional longevity in human history.

The Bukchon neighbourhood, ten minutes' walk from the palace, is the 14th-century Seoul that survived the 20th. The alleys between hanok with curved tile roofs exist five hundred metres from fifty-storey glass buildings, and the coexistence doesn't feel forced — it feels entirely natural, as if the city had decided that time doesn't need to choose between past and present but can contain both simultaneously.

In Myeongdong, K-beauty is not a trend. It is a design industry as serious as Italian fashion, with a consumer base that approaches its skincare routine with the same seriousness that other markets bring to gastronomy. The street food stalls sharing a block with the skincare shops serve tteokbokki (rice cakes in spicy sauce), hotteok (sugar and cinnamon pancakes) and kimbap that you eat standing up for under two euros. {{CTA:activity:getyourguide:seoul street food tour myeongdong korean:A street food tour}} connects the best stalls with context about Korean cuisine that makes them twice as interesting.

Gwangjang Market has existed since 1905 and the interior of its corrugated metal pavilions smells of sesame oil, kimchi and batter frying in a way that activates hunger at any hour. The mayak gimbap — small rice rolls at twenty cents each — are the reason Seoul has a gastronomic reputation requiring no Michelin-starred restaurants to justify it. {{CTA:activity:getyourguide:gwangjang market seoul food tour traditional:A gastronomic tour of Seoul's markets}} is, objectively, the finest way to spend fifteen euros in this city.

Hongdae at night is another country within the same one. The electronic music clubs — Cakeshop, Soap, Beton Brut — have the same curatorial seriousness as Berghain but with a door policy that essentially amounts to: if you pay, you're in. At 3am, the streets around the clubs are still a vintage clothing market lit by fluorescent lights and a row of food trucks serving dakgalbi until 5. The city that never sleeps is not a slogan — it is a literal description of what happens in Hongdae any given Friday.

For internet: {{CTA:service:airalo:airalo esim south korea:an eSIM with unlimited data}} is essential in South Korea, where 5G covers practically the entire territory and average download speeds are three times the European average. Seoul without internet is like Seoul without light — technically possible, but you're missing half the city.

For secure connections in hotels and cafés, {{CTA:service:nordvpn:travel vpn:Protect your connection with NordVPN}} is the logical complement to the eSIM — South Korea has some geographic content restrictions and the VPN is useful for European and American services. And although South Korea has an excellent healthcare system, travelling this far without international medical cover is an unnecessary risk: {{CTA:service:safetywing:travel insurance:Insure your trip with SafetyWing}} covers everything from day one.`,
    },
    faq: {
      es: [
        { question: "¿Necesito visado para viajar a Corea del Sur?", answer: "Los ciudadanos de la UE, EEUU, Canadá, Australia y muchos otros países entran sin visado hasta 90 días. Comprueba tu pasaporte en la web del consulado coreano — las normas cambian según el documento." },
        { question: "¿Cuál es la mejor forma de moverse por Seúl?", answer: "El metro de Seúl es el más eficiente de Asia: 9 líneas, señalización en inglés y una T-money card recargable que funciona también en autobuses y taxis. Para la T-money, recarga en cualquier GS25 o CU." },
        { question: "¿Cuánto dinero necesito al día en Seúl?", answer: "Con 50€ al día se come y se vive muy bien, incluyendo alojamiento en hostal de calidad. Para hoteles boutique y restaurantes con estrella, cuenta con 120-150€ diarios. La comida callejera y los mercados son extraordinarios y baratos — no hace falta gastar mucho para comer bien." },
      ],
      en: [
        { question: "Do I need a visa for South Korea?", answer: "Citizens of the EU, USA, Canada, Australia and many other countries enter visa-free for up to 90 days. Check your specific passport on the Korean consulate website — rules vary by nationality." },
        { question: "What is the best way to get around Seoul?", answer: "Seoul's metro is the most efficient in Asia: 9 lines, English signage and a rechargeable T-money card that also works on buses and taxis. For T-money, top up at any GS25 or CU convenience store." },
        { question: "How much money do I need per day in Seoul?", answer: "€50 a day covers food and living very well, including quality hostel accommodation. For boutique hotels and starred restaurants, budget €120-150 daily. The street food and markets are extraordinary and cheap — you don't need to spend much to eat extremely well." },
      ],
    },
  },

  // ─── BUENOS AIRES ──────────────────────────────────────────────────────────────
  {
    id: 15,
    slug: "buenos-aires-guia-2026",
    enSlug: "buenos-aires-guide-2026",
    narrator: "elena",
    city: "Buenos Aires",
    country: { es: "Argentina", en: "Argentina" },
    emoji: "🇦🇷",
    date: "2026-04-05",
    readTime: "10 min",
    category: "america",
    heroImage: "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=1200&q=80",
    title: {
      es: "Buenos Aires: Tango, Asado y la Ciudad que Tiene Más Librerías por Habitante que Ninguna Otra",
      en: "Buenos Aires: Tango, Asado and the City with More Bookshops per Capita Than Anywhere on Earth",
    },
    subtitle: {
      es: "Barrios con carácter propio, el mejor bife del planeta y la conciencia de que llevas demasiados días ahí y sigues sin tener ganas de irte",
      en: "Neighbourhoods with distinct personalities, the finest steak on the planet and the dawning awareness that you've been here too long and still don't want to leave",
    },
    excerpt: {
      es: "Buenos Aires es la ciudad latinoamericana que más seriamente se toma a sí misma. Lo cual, lejos de hacerla pretenciosa, la hace fascinante — cada barrio es un argumento cultural distinto y todos tienen razón.",
      en: "Buenos Aires is the Latin American city that takes itself most seriously. Which, far from making it pretentious, makes it fascinating — every neighbourhood is a different cultural argument and all of them are right.",
    },
    metaDescription: {
      es: "Guía completa Buenos Aires 2026: Palermo, San Telmo, La Boca, Recoleta, tango, asado, librerías y el mejor plan para no querer marcharte nunca.",
      en: "Complete Buenos Aires 2026 guide: Palermo, San Telmo, La Boca, Recoleta, tango, asado, bookshops and the best plan for not ever wanting to leave.",
    },
    keywords: {
      es: ["guía buenos aires", "buenos aires 2026", "qué ver en buenos aires", "tango buenos aires", "san telmo", "palermo buenos aires", "argentina viaje"],
      en: ["buenos aires guide", "buenos aires 2026", "things to do buenos aires", "tango buenos aires", "san telmo", "palermo buenos aires", "argentina travel"],
    },
    pointsOfInterest: [
      {
        name: "San Telmo",
        type: "Barrio histórico",
        lat: -34.6220, lng: -58.3727,
        description: {
          es: "El barrio más antiguo de Buenos Aires: adoquines del siglo XIX, el mejor mercado de antigüedades de Sudamérica y el tango que sale de los bares sin que nadie lo haya planeado. Los domingos, la Feria de San Telmo transforma la calle Defensa en un museo callejero de dos kilómetros.",
          en: "Buenos Aires' oldest neighbourhood: 19th-century cobblestones, the finest antiques market in South America and tango that spills out of bars without anyone having planned it. On Sundays, the San Telmo Fair turns Defensa Street into a two-kilometre street museum.",
        },
        rating: 4.8,
        affiliateLinks: [
          { label: { es: "Tour tango en San Telmo", en: "Tango tour in San Telmo" }, partner: "civitatis", query: "san telmo tango tour buenos aires antiques", type: "activity" },
          { label: { es: "Clase de tango BA", en: "Buenos Aires tango class" }, partner: "getyourguide", query: "tango class buenos aires san telmo", type: "activity" },
        ],
      },
      {
        name: "Palermo",
        type: "Barrio",
        lat: -34.5885, lng: -58.4282,
        description: {
          es: "El barrio más grande y diverso de la ciudad, dividido en microbarrios con personalidad propia: Palermo Soho para galerías y restaurantes de autor, Palermo Hollywood para bares y discotecas, Palermo Chico para las embajadas y los parques del Rosedal. El tipo de barrio donde podrías vivir un año y no repetir restaurante.",
          en: "The city's largest and most diverse neighbourhood, divided into micro-neighbourhoods with distinct personalities: Palermo Soho for galleries and signature restaurants, Palermo Hollywood for bars and clubs, Palermo Chico for embassies and the Rosedal parks. The kind of neighbourhood where you could live for a year without eating at the same restaurant twice.",
        },
        rating: 4.7,
        affiliateLinks: [
          { label: { es: "Tour gastronómico Palermo", en: "Palermo food tour" }, partner: "viator", query: "palermo buenos aires food tour restaurants gastronomy", type: "activity" },
          { label: { es: "Reservar restaurante Palermo", en: "Book Palermo restaurant" }, partner: "opentable", query: "palermo buenos aires restaurant", type: "restaurant" },
        ],
      },
      {
        name: "La Boca — Caminito",
        type: "Barrio icónico",
        lat: -34.6345, lng: -58.3632,
        description: {
          es: "Las casas de chapa de colores del Caminito son la imagen más reproducida de Argentina después del Obelisco. El barrio obrero de inmigrantes italianos que dio origen al tango mantiene un carácter genuino mezclado con turismo intenso — ve a primera hora para ver La Boca antes de que el mercado de souvenirs tome el control del espacio.",
          en: "Caminito's colourful corrugated iron houses are Argentina's most reproduced image after the Obelisco. The working-class Italian immigrant neighbourhood that gave birth to tango retains genuine character alongside intense tourism — go early to see La Boca before the souvenir market takes possession of the space.",
        },
        rating: 4.5,
        affiliateLinks: [
          { label: { es: "Tour La Boca + tango", en: "La Boca + tango tour" }, partner: "getyourguide", query: "la boca caminito tango tour buenos aires", type: "activity" },
        ],
      },
      {
        name: "Recoleta — Cementerio y barrio",
        type: "Barrio cultural",
        lat: -34.5875, lng: -58.3935,
        description: {
          es: "El barrio más parisino de Buenos Aires tiene el cementerio más visitado del mundo — donde Evita Perón tiene su mausoleo rodeado de flores frescas todos los días del año. Los calafates del Bosque de Palermo y los cafés de la Plaza Francia completan una tarde perfecta para quien prefiere la cultura al ruido.",
          en: "Buenos Aires' most Parisian neighbourhood has the world's most visited cemetery — where Evita Perón's mausoleum is surrounded by fresh flowers every single day of the year. The Bosque de Palermo and the Plaza Francia cafés complete a perfect afternoon for those who prefer culture to noise.",
        },
        rating: 4.8, priceRange: "Gratis",
        affiliateLinks: [
          { label: { es: "Tour Cementerio Recoleta + Evita", en: "Recoleta Cemetery + Evita tour" }, partner: "civitatis", query: "recoleta cemetery evita peron buenos aires tour", type: "activity" },
          { label: { es: "Tour barrios BA completo", en: "Buenos Aires neighbourhood tour" }, partner: "viator", query: "buenos aires neighbourhood tour recoleta palermo san telmo", type: "activity" },
        ],
      },
      {
        name: "El Ateneo Grand Splendid",
        type: "Librería",
        lat: -34.5956, lng: -58.3939,
        description: {
          es: "La librería más bella del mundo, construida en un teatro de ópera de 1919 donde los palcos se convirtieron en estantes y el escenario en una cafetería. National Geographic la declaró la segunda librería más bonita del mundo — el primero en decirte que fue injusta es el argentino que tienes más cerca.",
          en: "The world's most beautiful bookshop, built inside a 1919 opera theatre where the boxes became shelves and the stage became a café. National Geographic named it the second most beautiful bookshop in the world — the first Argentine you ask will tell you that was unjust.",
        },
        rating: 4.9, priceRange: "Gratis",
        affiliateLinks: [
          { label: { es: "Tour literario Buenos Aires", en: "Buenos Aires literary tour" }, partner: "getyourguide", query: "buenos aires bookshop literary tour ateneo", type: "activity" },
        ],
      },
    ],
    events: [
      {
        name: "Festival Mundial de Tango",
        type: "cultural",
        date: "Ago 2026",
        venue: "Toda la ciudad",
        urgency: true,
        description: {
          es: "El mayor evento de tango del mundo durante dos semanas de agosto: milongas en el Luna Park, clases gratuitas en la calle, el Campeonato Mundial de Tango y actuaciones en espacios que van desde el Teatro Colón hasta las plazas de San Telmo. Si hay un solo momento para estar en Buenos Aires, es este — aunque el tango aquí es imprescindible los 365 días.",
          en: "The world's largest tango event across two August weeks: milongas at the Luna Park, free lessons in the street, the World Tango Championship and performances in spaces ranging from the Teatro Colón to San Telmo's plazas. If there is one moment to be in Buenos Aires, this is it — though tango here is essential all 365 days.",
        },
        affiliateLinks: [
          { label: { es: "Entradas Festival Tango BA", en: "Buenos Aires Tango Festival tickets" }, partner: "ticketmaster", query: "festival mundial tango buenos aires agosto 2026", type: "tickets" },
          { label: { es: "Clases y milongas Festival", en: "Festival tango classes and milongas" }, partner: "getyourguide", query: "buenos aires tango festival world championship 2026", type: "activity" },
        ],
      },
      {
        name: "Primavera Sound Buenos Aires",
        type: "festival",
        date: "Nov 2026",
        venue: "Hipódromo de Palermo",
        urgency: true,
        description: {
          es: "La expansión sudamericana del festival barcelonés lleva cinco años consolidándose como el mejor festival de rock e indie de Latinoamérica. El cartel de 2026 no se ha anunciado pero el historial de las últimas ediciones — Blur, Arcade Fire, The National, Radiohead-style headliners — indica que las entradas se agotan en 48 horas después del anuncio. Esto es solo un aviso.",
          en: "The South American expansion of the Barcelona festival has spent five years establishing itself as Latin America's finest rock and indie festival. The 2026 lineup has not been announced but the history of recent editions — Blur, Arcade Fire, The National, Radiohead-calibre headliners — suggests tickets sell out within 48 hours of the announcement. Consider this a heads-up.",
        },
        affiliateLinks: [
          { label: { es: "Entradas Primavera Sound BA", en: "Primavera Sound BA tickets" }, partner: "ticketmaster", query: "primavera sound buenos aires noviembre 2026", type: "tickets" },
          { label: { es: "Reventa verificada", en: "Verified resale" }, partner: "stubhub", query: "primavera sound buenos aires 2026 festival", type: "tickets" },
        ],
      },
      {
        name: "Feria Internacional del Libro de Buenos Aires",
        type: "cultural",
        date: "Abr–May 2026",
        venue: "La Rural, Palermo",
        urgency: false,
        description: {
          es: "Una de las ferias del libro más grandes del mundo hispanohablante, con un millón de visitantes en tres semanas y la ciudad que tiene más librerías por habitante del planeta como anfitriota. Presentaciones, debates, firmas y la posibilidad real de que el escritor que más admiras esté firmando en el stand de al lado mientras tú estás mirando libros de segunda mano en el pasillo.",
          en: "One of the largest book fairs in the Spanish-speaking world, with a million visitors over three weeks and the city with the most bookshops per capita on the planet as host. Presentations, debates, signings and the real possibility that the author you most admire is signing copies at the next stand while you browse second-hand books in the aisle.",
        },
        affiliateLinks: [
          { label: { es: "Experiencia Feria del Libro BA", en: "Buenos Aires Book Fair experience" }, partner: "getyourguide", query: "feria libro buenos aires 2026 tour cultural", type: "activity" },
          { label: { es: "Tour barrio literario BA", en: "Buenos Aires literary neighbourhood tour" }, partner: "viator", query: "buenos aires book fair literary palermo tour", type: "activity" },
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
    },
    content: {
      es: `Compré el billete de vuelta para tres semanas. Me fui a los cuatro meses. Hay ciudades que te hacen eso — Buenos Aires lo hace a casi todo el mundo y la diferencia entre los que resisten y los que no es difícil de explicar sin sonar a argumento de autoayuda.

La razón práctica era el asado. No el concepto del asado, que conocía, sino la experiencia específica de estar en una parrilla de San Telmo a las dos de la tarde del jueves, con un bife de chorizo que llegó a la mesa con el punto exacto que nunca consigo replicar en casa, un Malbec que costaba lo mismo que un café en Madrid y una conversación con el cocinero sobre por qué el fuego lento importa más que cualquier otra variable. Volví tres veces esa semana. La cuarta, el cocinero me preguntó si era vegetariana. Dije que no. Me sonrió y trajo algo nuevo que no estaba en la carta.

San Telmo los domingos es una institución. La Feria de San Telmo transforma la calle Defensa en dos kilómetros de antigüedades, arte callejero y tango espontáneo que emerge de los bares antes del mediodía. Los parejeros de tango que bailan en los cruces de calle no lo hacen para turistas — o al menos no solo para turistas. Lo hacen porque es domingo en San Telmo y eso es lo que se hace. {{CTA:activity:getyourguide:tango class buenos aires san telmo:Una clase de tango}} con un maestro del barrio es la forma más directa de entender por qué el tango de Buenos Aires está en la Lista del Patrimonio Cultural Inmaterial de la Humanidad — y por qué aprenderlo en tres horas no es suficiente.

El Cementerio de Recoleta es el museo al aire libre más particular del mundo. Los mausoleos neoclásicos de presidentes, generales y familias aristocráticas del siglo XIX forman una ciudad en miniatura con callejuelas y plazas propias, y en el centro de todo, el mausoleo de María Eva Duarte de Perón siempre tiene flores frescas. El barrio que lo rodea tiene los mejores cafés del mediodía y las fachadas más parisinas de la ciudad — las dos cosas son completamente compatibles con la existencia de un cementerio a cincuenta metros.

El Ateneo Grand Splendid es la librería construida en un teatro de ópera del año 1919, con los palcos convertidos en estantes de libros y el escenario transformado en cafetería. Entrar al Ateneo y no comprar nada requiere una fuerza de voluntad que yo no tengo. Pero incluso si no compras, el espacio merece media hora de contemplación pura: la cúpula pintada, los palcos iluminados y el silencio específico de un lugar lleno de gente leyendo. {{CTA:activity:getyourguide:buenos aires bookshop literary tour ateneo:Un tour literario por Buenos Aires}} empieza aquí y termina en librerías de segunda mano de Palermo que tampoco aparecen en ninguna guía impresa.

Palermo es el barrio en el que uno podría vivir sin aburrirse en años. Sus subdivisiones informales — Soho, Hollywood, Chico — tienen personalidades distintas que convergen en los mismos parques del Rosedal al atardecer. Los domingos, el mercado de Plaza Cortázar reúne diseñadores independientes y artesanos que venden cosas que no encontrarás en ninguna tienda online. La gastronomía de autor de Palermo Soho — restaurantes como Tegui, Narda Comedor o El Preferido de Palermo — está a la altura de cualquier ciudad europea con la ventaja del tipo de cambio.

Para los partidos de Boca o River: {{CTA:tickets:ticketmaster:boca juniors river plate partido 2026:reserva tus entradas con mucha antelación}} — los derbis del Superclásico son los partidos de fútbol más intensos del mundo y el acceso sin entrada no existe en ningún sentido de la palabra. Si vas al estadio de La Bombonera en un día normal de Boca, lleva los auriculares — el ruido que genera el estadio vibrando con el salto del público es una experiencia acústica que ningún sistema de sonido puede replicar.

La Patagonia a cuatro horas de vuelo, las Cataratas del Iguazú a dos, Mendoza con sus bodegas a hora y media: Buenos Aires es también la puerta de entrada a uno de los países con mayor diversidad geográfica del planeta. {{CTA:service:skyscanner:vuelos internos argentina:Los vuelos domésticos en Argentina}} no son caros y convierten la ciudad en la base perfecta para dos semanas de viaje con múltiples destinos.

Dos notas prácticas: el wifi de los cafés de Palermo es generalmente bueno, pero en redes públicas vale la pena usar {{CTA:service:nordvpn:vpn viajes:Protege tu conexión con NordVPN}} — especialmente útil si manejas pagos o trabajas en remoto. Y para un viaje a Argentina que puede incluir Patagonia o cataratas, {{CTA:service:safetywing:seguro viaje:Asegura tu viaje con SafetyWing}} es el seguro de viaje más inteligente del mercado para viajeros de largo plazo.`,
      en: `I bought a return ticket for three weeks. I left after four months. There are cities that do that to you — Buenos Aires does it to almost everyone, and the difference between those who resist and those who don't is difficult to explain without sounding like a self-help argument.

The practical reason was the asado. Not the concept of asado, which I knew, but the specific experience of being in a San Telmo parrilla at two in the afternoon on a Thursday, with a bife de chorizo that arrived at the table at precisely the right point I've never managed to replicate at home, a Malbec that cost the same as a coffee in Madrid, and a conversation with the cook about why slow fire matters more than any other variable. I went back three times that week. On the fourth visit, the cook asked if I was vegetarian. I said no. He smiled and brought something new that wasn't on the menu.

San Telmo on Sundays is an institution. The San Telmo Fair transforms Defensa Street into two kilometres of antiques, street art and spontaneous tango that emerges from bars before midday. The tango dancers performing at street corners aren't doing it for tourists — or at least not only for tourists. They're doing it because it's Sunday in San Telmo and that's what happens. {{CTA:activity:getyourguide:tango class buenos aires san telmo:A tango class}} with a neighbourhood master is the most direct way to understand why Buenos Aires tango is on UNESCO's Intangible Cultural Heritage list — and why learning it in three hours is not enough.

The Recoleta Cemetery is the world's most singular open-air museum. The neoclassical mausoleums of 19th-century presidents, generals and aristocratic families form a miniature city with its own alleys and plazas, and at the centre of it all, María Eva Duarte de Perón's mausoleum always has fresh flowers. The neighbourhood surrounding it has the city's finest midday cafés and the most Parisian facades in Buenos Aires — the two things are entirely compatible with a cemetery fifty metres away.

El Ateneo Grand Splendid is a bookshop built inside a 1919 opera theatre, with the boxes converted into bookshelves and the stage transformed into a café. Entering El Ateneo and buying nothing requires a strength of will I do not possess. But even if you don't buy anything, the space merits half an hour of pure contemplation: the painted dome, the illuminated boxes and the specific silence of a space full of people reading. {{CTA:activity:getyourguide:buenos aires bookshop literary tour ateneo:A literary tour of Buenos Aires}} starts here and ends in second-hand bookshops in Palermo that also appear in no printed guidebook.

Palermo is the neighbourhood where one could live without boredom for years. Its informal subdivisions — Soho, Hollywood, Chico — have distinct personalities that converge in the same Rosedal parks at sunset. On Sundays, the Plaza Cortázar market brings together independent designers and artisans selling things you won't find in any online shop. The signature gastronomy of Palermo Soho — restaurants like Tegui, Narda Comedor or El Preferido de Palermo — matches any European city with the considerable advantage of the exchange rate.

For Boca or River matches: {{CTA:tickets:ticketmaster:boca juniors river plate partido 2026:book your tickets well in advance}} — the Superclásico derbies are the most intense football matches in the world and access without a ticket doesn't exist in any sense of the word. If you go to La Bombonera on a regular Boca match day, bring earplugs — the acoustic experience of the stadium vibrating with the crowd jumping is something no sound system can replicate.

Patagonia four hours by plane, Iguazú Falls two hours away, Mendoza's wineries ninety minutes: Buenos Aires is also the gateway to one of the most geographically diverse countries on the planet. {{CTA:service:skyscanner:vuelos internos argentina:Domestic flights within Argentina}} are not expensive and turn the city into the perfect base for two weeks of multi-destination travel.

Two practical notes: the Palermo café wifi is generally good, but on public networks it's sensible to use {{CTA:service:nordvpn:travel vpn:Protect your connection with NordVPN}} — particularly useful if you're handling payments or working remotely. And for a trip to Argentina that may include Patagonia or the falls, {{CTA:service:safetywing:travel insurance:Insure your trip with SafetyWing}} is the most intelligent travel insurance for long-haul and multi-destination travellers.`,
    },
    faq: {
      es: [
        { question: "¿Es seguro viajar a Buenos Aires en 2026?", answer: "Buenos Aires es segura para el turista que toma precauciones estándar. Palermo, Recoleta y San Telmo son los barrios más seguros y turísticos. Evita sacar el móvil en la calle en zonas menos transitadas y usa taxis de aplicación (Cabify, Uber) en lugar de tomar taxi en la calle." },
        { question: "¿Qué moneda usar en Argentina?", answer: "El peso argentino es la moneda oficial, pero la economía tiene tipos de cambio múltiples. Los cambios en casas de cambio autorizadas o con tarjeta de crédito internacional dan mejores tipos que el efectivo. Infórmate de la situación actual antes de viajar — cambia con frecuencia." },
        { question: "¿Cuándo es la mejor época para visitar Buenos Aires?", answer: "Primavera (septiembre-noviembre) y otoño (marzo-mayo) son los mejores meses: temperaturas agradables, menos turistas y los mejores eventos culturales. El verano porteño (diciembre-febrero) es muy caluroso y húmedo. El invierno (junio-agosto) es templado pero ideal para el tango." },
      ],
      en: [
        { question: "Is Buenos Aires safe to travel to in 2026?", answer: "Buenos Aires is safe for tourists who take standard precautions. Palermo, Recoleta and San Telmo are the safest and most tourist-friendly neighbourhoods. Avoid taking out your phone on quiet streets and use app-based taxis (Cabify, Uber) rather than hailing a cab on the street." },
        { question: "What currency to use in Argentina?", answer: "The Argentine peso is the official currency, but the economy has multiple exchange rates. Authorised exchange houses or international credit cards give better rates than cash. Research the current situation before travelling — it changes frequently." },
        { question: "When is the best time to visit Buenos Aires?", answer: "Spring (September-November) and autumn (March-May) are the best months: pleasant temperatures, fewer tourists and the best cultural events. The Buenos Aires summer (December-February) is very hot and humid. Winter (June-August) is mild and ideal for tango." },
      ],
    },
  },

  // ─────────────────────────────────────────────
  // 16. ISTANBUL
  // ─────────────────────────────────────────────
  {
    id: 16,
    slug: "estambul-guia-2026",
    enSlug: "istanbul-guide-2026",
    narrator: "sofia",
    heroImage: "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1200&q=80",
    city: { es: "Estambul", en: "Istanbul" },
    country: { es: "Turquía", en: "Turkey" },
    emoji: "🕌",
    date: "2026-03-09",
    readTime: "9 min",
    category: "europe",
    title: {
      es: "Estambul: Donde Europa y Asia Comparten el Mismo Horizonte",
      en: "Istanbul: Where Europe and Asia Share the Same Horizon",
    },
    subtitle: {
      es: "Mezquitas, bazares, bósforo y la ciudad que lleva dos milenios siendo el centro del mundo",
      en: "Mosques, bazaars, the Bosphorus and the city that has been the centre of the world for two millennia",
    },
    excerpt: {
      es: "Estambul no es solo una ciudad entre dos continentes: es una ciudad que contiene dos civilizaciones enteras y las mezcla con una naturalidad desconcertante. El Cuerno de Oro al atardecer, el Bósforo con los cargueros y las gaviotas, los alminares al amanecer.",
      en: "Istanbul is not just a city between two continents: it is a city that contains two entire civilisations and blends them with disconcerting ease. The Golden Horn at sunset, the Bosphorus with cargo ships and seagulls, minarets at dawn.",
    },
    metaDescription: {
      es: "Guía completa Estambul 2026: Hagia Sophia, Gran Bazar, Bósforo, barrio de Beyoğlu y la mejor gastronomía otomana. Con consejos para no perderse nada.",
      en: "Complete Istanbul 2026 guide: Hagia Sophia, Grand Bazaar, Bosphorus, Beyoğlu district and the finest Ottoman cuisine. Tips for missing nothing.",
    },
    keywords: {
      es: ["guía estambul", "estambul 2026", "qué ver en estambul", "hagia sophia", "gran bazar", "bósforo turquía"],
      en: ["istanbul guide", "istanbul 2026", "things to do istanbul", "hagia sophia", "grand bazaar", "bosphorus turkey"],
    },
    pointsOfInterest: [
      {
        name: "Hagia Sophia",
        type: "Monumento",
        lat: 41.0086, lng: 28.9802,
        description: {
          es: "Construida en el año 537, fue durante casi un milenio la mayor catedral del mundo, luego mezquita otomana, luego museo y desde 2020 mezquita de nuevo. Cada capa histórica es visible: los mosaicos bizantinos dorados conviven con las caligrafías islámicas. Es el único edificio del mundo que contiene dos imperios en sus paredes.",
          en: "Built in 537, for nearly a millennium it was the world's largest cathedral, then an Ottoman mosque, then a museum, and since 2020 a mosque once more. Every historical layer is visible: golden Byzantine mosaics coexist with Islamic calligraphy. It is the only building in the world that contains two empires within its walls.",
        },
        rating: 4.9, priceRange: "Gratis / Free",
        affiliateLinks: [
          { label: { es: "Tour guiado Hagia Sophia + Topkapi", en: "Hagia Sophia + Topkapi guided tour" }, partner: "getyourguide", query: "hagia sophia topkapi palace istanbul tour", type: "activity" },
          { label: { es: "Visita Hagia Sophia sin colas", en: "Skip-the-line Hagia Sophia" }, partner: "civitatis", query: "hagia sophia istanbul skip line", type: "tickets" },
        ],
      },
      {
        name: "Gran Bazar (Kapalıçarşı)",
        type: "Mercado",
        lat: 41.0108, lng: 28.9680,
        description: {
          es: "El mercado cubierto más grande del mundo: 61 calles cubiertas, más de 3.000 tiendas y el arte elevado del regateo. Hay lámparas de mosaico, alfombras turcas, especias y cerámica. Entra sin prisa, acepta el té que te ofrecerán, negocia sin prisa y sal con algo que no necesitabas pero que ahora es imprescindible.",
          en: "The world's largest covered market: 61 covered streets, over 3,000 shops and the elevated art of bargaining. Mosaic lamps, Turkish carpets, spices and ceramics. Enter unhurried, accept the tea you'll be offered, negotiate without rushing, and leave with something you didn't need but now cannot live without.",
        },
        rating: 4.7, priceRange: "Gratis / Free",
        affiliateLinks: [
          { label: { es: "Tour gastronómico Bazar de las Especias", en: "Spice Bazaar food tour" }, partner: "viator", query: "istanbul spice bazaar food tour grand bazaar", type: "activity" },
        ],
      },
      {
        name: "Palacio de Topkapi",
        type: "Palacio",
        lat: 41.0115, lng: 28.9833,
        description: {
          es: "El corazón del Imperio Otomano durante cuatro siglos. El Harén, la Sala del Trono y el Tesoro del Sultán — que incluye el Diamante del Esponjero de 86 quilates — son algunos de los interiores más fascinantes del mundo islámico.",
          en: "The heart of the Ottoman Empire for four centuries. The Harem, the Throne Room and the Sultan's Treasury — which includes the 86-carat Spoonmaker's Diamond — are among the most fascinating interiors in the Islamic world.",
        },
        rating: 4.8, priceRange: "€18",
        affiliateLinks: [
          { label: { es: "Entrada Topkapi + Harén", en: "Topkapi + Harem ticket" }, partner: "tiqets", query: "topkapi palace harem istanbul", type: "tickets" },
          { label: { es: "Tour guiado Topkapi", en: "Guided Topkapi tour" }, partner: "getyourguide", query: "topkapi palace guided tour istanbul 2026", type: "activity" },
        ],
      },
      {
        name: "Crucero por el Bósforo",
        type: "Actividad",
        lat: 41.0451, lng: 29.0320,
        description: {
          es: "El estrecho que divide Europa de Asia. Un crucero al atardecer desde el puente de Gálata hasta el segundo puente del Bósforo muestra los yalıs de madera del siglo XIX, los palacios imperiales a orillas del agua y el tráfico constante de cargueros que conectan el Mediterráneo con el Mar Negro.",
          en: "The strait that divides Europe from Asia. A sunset cruise from the Galata Bridge to the Second Bosphorus Bridge reveals 19th-century wooden yalı mansions, imperial palaces on the waterfront and the constant traffic of cargo ships connecting the Mediterranean to the Black Sea.",
        },
        rating: 4.8, priceRange: "€15–30",
        affiliateLinks: [
          { label: { es: "Crucero al atardecer por el Bósforo", en: "Bosphorus sunset cruise" }, partner: "civitatis", query: "bosphorus sunset cruise istanbul 2026", type: "activity" },
          { label: { es: "Tour Bósforo + dos continentes", en: "Bosphorus two continents tour" }, partner: "viator", query: "bosphorus cruise two continents istanbul", type: "activity" },
        ],
      },
      {
        name: "Barrio de Beyoğlu y Torre de Gálata",
        type: "Barrio",
        lat: 41.0255, lng: 28.9744,
        description: {
          es: "La orilla europea moderna de Estambul. La calle İstiklal es la arteria comercial y cultural de la ciudad contemporánea, y la Torre de Gálata del siglo XIV domina el horizonte con las mejores vistas del Cuerno de Oro y el casco histórico desde lo alto.",
          en: "Istanbul's modern European shore. İstiklal Avenue is the commercial and cultural artery of the contemporary city, and the 14th-century Galata Tower dominates the skyline with the finest views of the Golden Horn and the historic peninsula from its top.",
        },
        rating: 4.6,
        affiliateLinks: [
          { label: { es: "Entrada Torre Gálata", en: "Galata Tower ticket" }, partner: "tiqets", query: "galata tower istanbul ticket", type: "tickets" },
        ],
      },
    ],
    events: [
      {
        name: "Festival Internacional de Cine de Estambul",
        type: "cultural",
        date: "Abr 2026",
        venue: "Varios cines, Beyoğlu",
        urgency: false,
        description: {
          es: "Uno de los festivales de cine más importantes del mundo islámico y del Mediterráneo oriental, con proyecciones en los cines históricos de Beyoğlu. Películas turcas, griegas, iraníes y árabes que nunca verás en ninguna plataforma de streaming.",
          en: "One of the most important film festivals in the Islamic world and eastern Mediterranean, with screenings in Beyoğlu's historic cinemas. Turkish, Greek, Iranian and Arabic films you'll never find on any streaming platform.",
        },
        affiliateLinks: [],
      },
      {
        name: "Festival de Tulipanes de Estambul",
        type: "festival",
        date: "Abr 2026",
        venue: "Parque Emirgan, Gülhane",
        urgency: false,
        description: {
          es: "Cada abril, Estambul se convierte en la ciudad más colorida del mundo. El Parque Emirgan y los jardines de Gülhane, junto al palacio de Topkapi, se llenan de millones de tulipanes de cientos de variedades. El tulipán llegó a Europa desde Turquía — esto es la fuente.",
          en: "Every April, Istanbul becomes the world's most colourful city. Emirgan Park and the Gülhane gardens, beside Topkapi Palace, fill with millions of tulips in hundreds of varieties. The tulip reached Europe from Turkey — this is the source.",
        },
        affiliateLinks: [
          { label: { es: "Tour jardines y tulipanes", en: "Tulip gardens tour" }, partner: "getyourguide", query: "istanbul tulip festival gardens tour april", type: "activity" },
        ],
      },
      {
        name: "Noche de Música Tradicional Turca (Sufi)",
        type: "cultural",
        date: "Todo el año",
        venue: "Hodjapasha Cultural Centre",
        urgency: false,
        description: {
          es: "Los derviches giróvagos del sufismo en la ceremonia del Sema: música mística ottomana en vivo, mientras los derviches giran en un estado de meditación. Una experiencia que solo existe en Turquía y que no se puede describir sin haberla visto.",
          en: "The whirling dervishes of Sufism in the Sema ceremony: live Ottoman mystical music as the dervishes spin in a meditative state. An experience that exists only in Turkey and cannot be described without having witnessed it.",
        },
        affiliateLinks: [
          { label: { es: "Entradas Dervishes giróvagos", en: "Whirling Dervishes tickets" }, partner: "civitatis", query: "whirling dervishes istanbul sema ceremony", type: "tickets" },
        ],
      },
      {
        name: "Istanbul Jazz Festival",
        type: "festival",
        date: "Jul 2026",
        venue: "Varios escenarios, Estambul",
        urgency: false,
        description: {
          es: "Más de 70 conciertos en quince días repartidos por los escenarios más bellos de la ciudad: jardines de palacios, claustros otomanos y la terraza del SALT Galata con vistas al Bósforo. Jazz, world music y fusión anatoliana que mezcla los dos hemisferios de la ciudad.",
          en: "Over 70 concerts across fifteen days in the city's most beautiful venues: palace gardens, Ottoman cloisters and the SALT Galata rooftop overlooking the Bosphorus. Jazz, world music and Anatolian fusion that blends both hemispheres of the city.",
        },
        affiliateLinks: [
          { label: { es: "Entradas Istanbul Jazz Festival", en: "Istanbul Jazz Festival tickets" }, partner: "ticketmaster", query: "istanbul jazz festival 2026", type: "tickets" },
        ],
      },
    ],
    services: {
      flights: ["skyscanner", "kiwi"],
      hotels: ["booking", "hostelworld", "vrbo"],
      activities: ["getyourguide", "viator", "civitatis", "tiqets"],
      restaurants: ["thefork"],
      insurance: ["safetywing", "worldnomads"],
      esim: ["airalo", "holafly", "saily"],
      transfers: ["welcomepickups", "gettransfer", "indrive"],
    },
    content: {
      es: `Estambul te rompe los esquemas de la primera mañana. Llegué al barrio de Sultanahmet al amanecer — el jet lag hacía lo suyo — y me encontré con el Adhan, la llamada a la oración, saliendo de seis alminares distintos en un crescendo de seis minutos que llena la ciudad como un órgano gigante. No hay alarma de viaje posible que compita con eso.

La Hagia Sophia merece la primera visita en solitario, sin audioguía ni grupo. Entra, levanta la cabeza y deja que los 55 metros de cúpula hagan lo que tienen que hacer. Los mosaicos dorados del siglo IX conviven con las caligrafías otomanas del siglo XVI y las dos cosas son, por separado y juntas, de una belleza que la palabra patrimonio no cubre del todo. {{CTA:activity:getyourguide:hagia sophia topkapi palace istanbul tour:Un tour guiado por Hagia Sophia y el Palacio de Topkapi}} — el contexto histórico transforma lo que ves en algo comprensible, porque la historia de este edificio contiene la historia del Mediterráneo entero.

El Gran Bazar a mediodía es caos puro y ordenado al mismo tiempo: 61 calles, más de 3.000 tiendas y el ecosistema económico más antiguo de Europa en funcionamiento continuo desde el siglo XV. El protocolo es sencillo: acepta el té turco que te ofrecerán en la tercera tienda, míralo todo una vez antes de comprar nada y negocia sin vergüenza — es parte del protocolo, no es grosería. {{CTA:activity:viator:istanbul spice bazaar food tour grand bazaar:El Bazar de las Especias}} está a diez minutos del Gran Bazar y concentra las mejores especias, el lokum más auténtico y el nivel de olores que hace que cualquier supermercado del mundo quede en evidencia para siempre.

El Palacio de Topkapi es cuatro siglos de Imperio Otomano condensados en una sola visita: la colección de porcelana china del Sultán, el Diamante del Esponjero de 86 quilates, la capa del Profeta y el Harén completo. {{CTA:tickets:tiqets:topkapi palace harem istanbul:Compra tu entrada a Topkapi con el Harén}} con antelación en temporada alta — la espera sin reserva puede superar las dos horas.

El Bósforo al atardecer es el momento que hace que cualquier viaje a Estambul sea completo. {{CTA:activity:civitatis:bosphorus sunset cruise istanbul 2026:Un crucero al atardecer por el Bósforo}} muestra los yalıs de madera del siglo XIX, los palacios imperiales a orillas del agua y el horizonte donde Europa termina y Asia empieza — literalmente visible desde cubierta. Los barqueros que cruzan de un continente al otro en quince minutos por menos de un euro hacen ese mismo trayecto con la misma indiferencia tranquila de quien cruza la calle. Ese contraste dice todo de Estambul.

El barrio de Beyoğlu y la Torre de Gálata son la cara contemporánea de la ciudad. La calle İstiklal está llena de cafés, librerías, galerías y el ruido específico de una ciudad de 15 millones de personas que viven hacia fuera. La Torre del siglo XIV domina el barrio con las mejores vistas del Cuerno de Oro — los tejados de la ciudad histórica y el Bósforo en un solo encuadre.

Nota práctica: Turquía no es zona euro. La lira turca tiene tipo de cambio favorable para el viajero europeo, y una tarjeta sin comisiones de cambio como {{CTA:service:revolut:tarjeta viaje turquia:Revolut}} hace que cada pago sea a tipo real sin sorpresas. Para la conexión a redes públicas de aeropuertos y hoteles, {{CTA:service:nordvpn:vpn viajes:Protege tu conexión con NordVPN}} es especialmente útil en un país donde algunas plataformas tienen restricciones intermitentes. Y para un viaje de diez días o más con posibilidad de hacer excursiones a Capadocia o la Costa Egea, {{CTA:service:safetywing:seguro viaje:Asegura tu viaje con SafetyWing}} ofrece la cobertura más completa para viajeros largos sin coste desorbitado.`,
      en: `Istanbul dismantles your assumptions on the first morning. I arrived in the Sultanahmet neighbourhood at dawn — jet lag doing its work — and found the Adhan, the call to prayer, rising from six different minarets in a six-minute crescendo that fills the city like a giant organ. No travel alarm clock can compete with that.

Hagia Sophia deserves a first visit alone, without audio guide or group. Enter, look up and let the 55-metre dome do what it needs to do. The 9th-century golden mosaics coexist with the 16th-century Ottoman calligraphy and both together, and separately, achieve a beauty that the word heritage doesn't quite cover. {{CTA:activity:getyourguide:hagia sophia topkapi palace istanbul tour:A guided tour of Hagia Sophia and Topkapi Palace}} — historical context transforms what you see into something comprehensible, because the history of this building contains the entire history of the Mediterranean.

The Grand Bazaar at midday is pure chaos, organised simultaneously: 61 streets, over 3,000 shops and the oldest economic ecosystem in Europe operating continuously since the 15th century. The protocol is simple: accept the Turkish tea you'll be offered in the third shop, look at everything once before buying anything, and negotiate without embarrassment — it's part of the protocol, not rudeness. {{CTA:activity:viator:istanbul spice bazaar food tour grand bazaar:The Spice Bazaar}} is ten minutes from the Grand Bazaar and concentrates the finest spices, the most authentic lokum and a level of aromas that permanently exposes every supermarket in the world for what it is.

Topkapi Palace is four centuries of Ottoman Empire condensed into a single visit: the Sultan's Chinese porcelain collection, the 86-carat Spoonmaker's Diamond, the Prophet's cloak and the complete Harem. {{CTA:tickets:tiqets:topkapi palace harem istanbul:Buy your Topkapi + Harem ticket}} in advance during peak season — the wait without a reservation can exceed two hours.

The Bosphorus at sunset is the moment that makes any Istanbul trip complete. {{CTA:activity:civitatis:bosphorus sunset cruise istanbul 2026:A sunset cruise on the Bosphorus}} reveals 19th-century wooden yalı mansions, imperial palaces on the waterfront and the horizon where Europe ends and Asia begins — literally visible from deck. The ferrymen crossing from one continent to the other in fifteen minutes for less than a euro do that same journey with the quiet indifference of someone crossing the street. That contrast says everything about Istanbul.

The Beyoğlu neighbourhood and Galata Tower are the city's contemporary face. İstiklal Avenue is full of cafés, bookshops, galleries and the specific noise of a city of 15 million people who live outwards. The 14th-century tower dominates the neighbourhood with the finest views of the Golden Horn — the historic city rooftops and the Bosphorus in a single frame.

A practical note: Turkey is not in the eurozone. The Turkish lira has a favourable exchange rate for European visitors, and a no-fee card like {{CTA:service:revolut:travel card turkey:Revolut}} means every payment is at the real rate with no surprises. For connecting to public networks at airports and hotels, {{CTA:service:nordvpn:travel vpn:Protect your connection with NordVPN}} is particularly useful in a country where some platforms have intermittent restrictions. And for a trip of ten days or more with possible excursions to Cappadocia or the Aegean Coast, {{CTA:service:safetywing:travel insurance:Insure your trip with SafetyWing}} offers the most complete coverage for long-haul travellers without extortionate cost.`,
    },
    faq: {
      es: [
        { question: "¿Necesito visado para entrar a Turquía?", answer: "Los ciudadanos españoles pueden entrar a Turquía sin visado para estancias de hasta 90 días en un período de 180 días. Los ciudadanos de otros países deben verificar los requisitos específicos en la web del consulado turco antes de viajar." },
        { question: "¿Cuál es la mejor época para visitar Estambul?", answer: "Primavera (abril-mayo) y otoño (septiembre-octubre) son los mejores meses: temperaturas agradables de 15-22°C, menos humedad que el verano y los festivales más importantes del año. Abril tiene además el Festival del Tulipán que convierte los parques de la ciudad en algo memorable." },
        { question: "¿Cómo moverse por Estambul?", answer: "El sistema de transporte público de Estambul es excelente y barato: metro, tranvía (especialmente útil para la línea T1 entre Sultanahmet y Kabataş), ferris del Bósforo y autobuses. La tarjeta Istanbulkart recargable es la forma más económica. Los taxis son abundantes pero asegúrate de que el taxímetro funcione." },
      ],
      en: [
        { question: "Do I need a visa to enter Turkey?", answer: "Spanish citizens can enter Turkey without a visa for stays of up to 90 days in a 180-day period. Citizens of other countries should verify specific requirements on the Turkish consulate website before travelling." },
        { question: "When is the best time to visit Istanbul?", answer: "Spring (April-May) and autumn (September-October) are the best months: pleasant temperatures of 15-22°C, less humidity than summer and the year's most important festivals. April also has the Tulip Festival which turns the city's parks into something memorable." },
        { question: "How to get around Istanbul?", answer: "Istanbul's public transport system is excellent and cheap: metro, tram (especially useful for the T1 line between Sultanahmet and Kabataş), Bosphorus ferries and buses. The rechargeable Istanbulkart is the most economical option. Taxis are plentiful but make sure the meter is running." },
      ],
    },
  },

  // ─────────────────────────────────────────────
  // 17. CAPE TOWN
  // ─────────────────────────────────────────────
  {
    id: 17,
    slug: "ciudad-del-cabo-guia-2026",
    enSlug: "cape-town-guide-2026",
    narrator: "marcos",
    heroImage: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1200&q=80",
    city: { es: "Ciudad del Cabo", en: "Cape Town" },
    country: { es: "Sudáfrica", en: "South Africa" },
    emoji: "🦁",
    date: "2026-03-09",
    readTime: "9 min",
    category: "africa",
    title: {
      es: "Ciudad del Cabo: El Fin del Mundo con Vistas a Dos Océanos",
      en: "Cape Town: The End of the World with Views of Two Oceans",
    },
    subtitle: {
      es: "Montaña de la Mesa, cabo de Buena Esperanza, viñedos del Cabo y el país que más sorprende a quien llega sin expectativas",
      en: "Table Mountain, Cape of Good Hope, Cape Winelands and the country that surprises most those who arrive without expectations",
    },
    excerpt: {
      es: "Ciudad del Cabo es una de esas ciudades que no necesitan justificarse. Montaña de la Mesa cayendo sobre el océano, pingüinos en la playa, viñedos a media hora y la gastronomía más interesante del continente africano.",
      en: "Cape Town is one of those cities that needs no justification. Table Mountain falling into the ocean, penguins on the beach, vineyards half an hour away and the most interesting cuisine on the African continent.",
    },
    metaDescription: {
      es: "Guía Ciudad del Cabo 2026: Montaña de la Mesa, Cabo de Buena Esperanza, Robben Island, De Waterkant y la Ruta del Vino. Todo lo que necesitas saber.",
      en: "Cape Town 2026 guide: Table Mountain, Cape of Good Hope, Robben Island, De Waterkant and the Wine Route. Everything you need to know.",
    },
    keywords: {
      es: ["ciudad del cabo", "cape town 2026", "qué ver ciudad del cabo", "montaña de la mesa", "cabo de buena esperanza", "sudáfrica viaje"],
      en: ["cape town guide", "cape town 2026", "things to do cape town", "table mountain", "cape of good hope", "south africa travel"],
    },
    pointsOfInterest: [
      {
        name: "Montaña de la Mesa",
        type: "Naturaleza",
        lat: -33.9628, lng: 18.4098,
        description: {
          es: "La montaña que define la ciudad. La meseta cubre 3 km de longitud a 1.086 metros de altura y domina Ciudad del Cabo con una presencia que hace que la ciudad entera parezca construida a sus pies por reverencia. El teleférico giratorio es la manera más práctica de subir; el senderismo desde Signal Hill o Platteklip Gorge es la más memorable.",
          en: "The mountain that defines the city. The plateau extends 3km at 1,086 metres and dominates Cape Town with a presence that makes the entire city seem built at its feet in reverence. The rotating cable car is the most practical way up; hiking from Signal Hill or Platteklip Gorge is the most memorable.",
        },
        rating: 4.9, priceRange: "€20 (teleférico)",
        affiliateLinks: [
          { label: { es: "Entradas teleférico Montaña de la Mesa", en: "Table Mountain cable car ticket" }, partner: "civitatis", query: "table mountain cable car cape town ticket", type: "tickets" },
          { label: { es: "Tour senderismo Montaña de la Mesa", en: "Table Mountain hiking tour" }, partner: "getyourguide", query: "table mountain hiking tour cape town 2026", type: "activity" },
        ],
      },
      {
        name: "Cabo de Buena Esperanza",
        type: "Naturaleza",
        lat: -34.3568, lng: 18.4734,
        description: {
          es: "El punto más sudoccidental de África, donde el Atlántico y el Índico se agitan bajo los acantilados. El Parque Nacional de la Península del Cabo incluye babucinos en las carreteras, avestruces en los matorrales de fynbos y el faro de Cape Point con sus 239 escalones y vistas a dos océanos.",
          en: "The southwesternmost point of Africa, where the Atlantic and Indian Oceans churn beneath the cliffs. The Cape Peninsula National Park includes baboons on the roads, ostriches in the fynbos scrubland, and the Cape Point lighthouse with its 239 steps and views of two oceans.",
        },
        rating: 4.8, priceRange: "€15",
        affiliateLinks: [
          { label: { es: "Tour Cabo de Buena Esperanza + pingüinos", en: "Cape of Good Hope + penguins tour" }, partner: "viator", query: "cape of good hope cape point penguins boulders beach tour", type: "activity" },
          { label: { es: "Tour península del Cabo día completo", en: "Full day Cape Peninsula tour" }, partner: "getyourguide", query: "cape peninsula full day tour cape town 2026", type: "activity" },
        ],
      },
      {
        name: "Robben Island",
        type: "Monumento",
        lat: -33.8058, lng: 18.3665,
        description: {
          es: "La isla donde Nelson Mandela estuvo encarcelado 18 de sus 27 años de prisión. Los recorridos son guiados por ex presos políticos que vivieron en la isla — no hay forma más directa de entender lo que el apartheid significó en la vida de personas reales.",
          en: "The island where Nelson Mandela was imprisoned for 18 of his 27 years of incarceration. Tours are guided by former political prisoners who lived on the island — there is no more direct way to understand what apartheid meant in the lives of real people.",
        },
        rating: 4.8, priceRange: "€28",
        affiliateLinks: [
          { label: { es: "Ferry + tour Robben Island", en: "Robben Island ferry + tour" }, partner: "civitatis", query: "robben island ferry tour cape town mandela", type: "tickets" },
        ],
      },
      {
        name: "Playa de Boulders (Colonia de pingüinos)",
        type: "Naturaleza",
        lat: -34.1966, lng: 18.4508,
        description: {
          es: "Una colonia de pingüinos africanos que vive en la playa de Boulders, en la pequeña ciudad de Simon's Town. Los pingüinos caminan entre los bañistas con una indiferencia absoluta que resulta completamente irresistible. Es una de las pocas playas del mundo donde puedes bañarte junto a pingüinos salvajes.",
          en: "A colony of African penguins living on Boulders Beach in the small town of Simon's Town. The penguins walk among the swimmers with absolute indifference that proves entirely irresistible. It is one of the few beaches in the world where you can swim alongside wild penguins.",
        },
        rating: 4.7, priceRange: "€10",
        affiliateLinks: [
          { label: { es: "Tour Simon's Town + pingüinos", en: "Simon's Town + penguins tour" }, partner: "getyourguide", query: "boulders beach penguins simons town cape town tour", type: "activity" },
        ],
      },
      {
        name: "Barrio Bo-Kaap",
        type: "Barrio",
        lat: -33.9185, lng: 18.4150,
        description: {
          es: "El barrio de las casas de colores intensos en la ladera de Signal Hill. El corazón de la comunidad Malay Cape Town — descendientes de los esclavos traídos por los holandeses del sudeste asiático en el siglo XVII. La mezquita de Nurul Islam, el Museo Bo-Kaap y la gastronomía Malay Cape son únicas en el continente africano.",
          en: "The neighbourhood of brightly coloured houses on the slopes of Signal Hill. The heart of Cape Town's Malay community — descendants of the slaves brought by the Dutch from Southeast Asia in the 17th century. The Nurul Islam Mosque, the Bo-Kaap Museum and Cape Malay cuisine are unique on the African continent.",
        },
        rating: 4.6,
        affiliateLinks: [
          { label: { es: "Tour Bo-Kaap + cocina Cape Malay", en: "Bo-Kaap + Cape Malay cooking tour" }, partner: "viator", query: "bo-kaap cape malay cooking tour cape town", type: "activity" },
        ],
      },
    ],
    events: [
      {
        name: "Cape Town Jazz Festival",
        type: "festival",
        date: "Mar 2026",
        venue: "Cape Town International Convention Centre",
        urgency: false,
        description: {
          es: "El festival de jazz más grande de África: más de 40 artistas en dos días en el CTICC. Jazz sudafricano, afrobeat, soul y R&B en el evento cultural más importante del calendario capetoniano. La fusión de jazz americano con ritmos del continente africano produce algo que no se escucha en ningún otro festival del mundo.",
          en: "The largest jazz festival in Africa: over 40 artists across two days at the CTICC. South African jazz, afrobeat, soul and R&B at the most important cultural event on the Cape Town calendar. The fusion of American jazz with African continental rhythms produces something heard at no other festival in the world.",
        },
        affiliateLinks: [
          { label: { es: "Entradas Cape Town Jazz Festival", en: "Cape Town Jazz Festival tickets" }, partner: "ticketmaster", query: "cape town jazz festival 2026 south africa", type: "tickets" },
        ],
      },
      {
        name: "Ruta del Vino del Cabo: Vendimia",
        type: "gastronomy",
        date: "Feb-Mar 2026",
        venue: "Stellenbosch, Franschhoek, Paarl",
        urgency: false,
        description: {
          es: "La región vinícola del Cabo produce algunos de los mejores vinos del mundo a precios que en Europa no son posibles: Pinotage, Chenin Blanc y Shiraz de Stellenbosch y Franschhoek durante la temporada de vendimia. Las bodegas más históricas — Boschendal, Spier, Vergelegen — tienen tours y catas abiertas.",
          en: "The Cape Winelands produce some of the world's finest wines at prices impossible in Europe: Pinotage, Chenin Blanc and Stellenbosch and Franschhoek Shiraz during harvest season. The most historic estates — Boschendal, Spier, Vergelegen — offer tours and open tastings.",
        },
        affiliateLinks: [
          { label: { es: "Tour vinícola Stellenbosch y Franschhoek", en: "Stellenbosch & Franschhoek wine tour" }, partner: "getyourguide", query: "stellenbosch franschhoek wine tour cape town 2026", type: "activity" },
        ],
      },
      {
        name: "Cape Town Carnival",
        type: "festival",
        date: "Mar 2026",
        venue: "Green Point, Fan Walk",
        urgency: false,
        description: {
          es: "El mayor espectáculo callejero del continente africano: carrozas, trajes elaborados y la energía de una ciudad que celebra su diversidad cultural. El carnaval de Ciudad del Cabo fusiona influencias Malay Cape, africanas, europeas y contemporáneas en dos horas de desfile que llenan de color la Green Point.",
          en: "The largest street spectacle on the African continent: floats, elaborate costumes and the energy of a city celebrating its cultural diversity. Cape Town Carnival fuses Cape Malay, African, European and contemporary influences into two hours of parade that fill Green Point with colour.",
        },
        affiliateLinks: [],
      },
    ],
    services: {
      flights: ["skyscanner", "kiwi"],
      hotels: ["booking", "hostelworld", "vrbo"],
      activities: ["getyourguide", "viator", "civitatis"],
      insurance: ["safetywing", "worldnomads"],
      esim: ["airalo", "holafly", "saily"],
      transfers: ["welcomepickups", "gettransfer"],
      cars: ["discovercars", "rentalcars"],
    },
    content: {
      es: `Ciudad del Cabo tiene el problema de las ciudades que son demasiado bellas: todo lo demás empieza a parecer un poco menos. La Montaña de la Mesa no avisa. Estás en el avión, miras por la ventanilla mientras desciendes y ahí está — plana, inmensa, con el mantel de nubes que la cubre a veces rodando por los bordes — cayendo directamente al océano. La ciudad parece construida para mirarla, no para ignorarla.

El teleférico giratorio sube en cinco minutos y te deposita en una meseta de tres kilómetros de largo donde los tejones del Cabo corren entre los fynbos y las vistas al Atlántico son de esas que hacen que el concepto de fotografía parezca insuficiente. {{CTA:activity:getyourguide:table mountain hiking tour cape town 2026:Un tour de senderismo por la Montaña de la Mesa}} con guía local muestra los senderos menos transitados y los puntos de vista que no aparecen en ninguna postal. Si el teleférico está cerrado por viento — cosa habitual — el ascenso por Platteklip Gorge es duro y completamente recomendable.

El Cabo de Buena Esperanza es la excursión de día completo que justifica el viaje. La carretera por la Península del Cabo bordea el Atlántico durante cuarenta kilómetros con babucinos en los bordes de la carretera y avestruces en los matorrales de fynbos. El faro de Cape Point está en lo más alto de los acantilados, a 249 metros sobre el nivel del mar, con vistas a los dos océanos. {{CTA:activity:viator:cape of good hope cape point penguins boulders beach tour:El tour completo de la Península del Cabo}} incluye la playa de Boulders, donde la colonia de pingüinos africanos vive con la indiferencia absoluta de quien sabe que es el dueño de la playa.

Robben Island es la visita más emocionalmente intensa del itinerario. El ferry sale desde el V&A Waterfront y el tour es guiado por ex presos políticos — hombres que estuvieron en la isla durante el apartheid. La celda de Nelson Mandela, el patio de la cantera de cal donde trabajaban los presos y el museo en el edificio de la antigua cárcel lo contextualizan todo. No es turismo, es historia en primera persona. {{CTA:tickets:civitatis:robben island ferry tour cape town mandela:Reserva el ferry a Robben Island}} con mucha antelación — las plazas se agotan meses antes.

La Ruta del Vino del Cabo es uno de los mejores secretos del turismo africano. A menos de una hora en coche de Ciudad del Cabo, las bodegas de Stellenbosch y Franschhoek producen Pinotage, Chenin Blanc y Shiraz de nivel mundial a precios que en Europa resultarían inverosímiles. {{CTA:activity:getyourguide:stellenbosch franschhoek wine tour cape town 2026:Un tour vinícola por Stellenbosch y Franschhoek}} con transporte incluido desde Ciudad del Cabo es la forma más cómoda de probar cinco o seis bodegas sin preocuparse por conducir. El almuerzo en Boschendal — una de las granjas vinícolas más antiguas de Sudáfrica, fundada en 1685 — es uno de los mejores almuerzos del continente africano.

El barrio Bo-Kaap sube por la ladera de Signal Hill con sus casas pintadas de colores imposibles — turquesa, amarillo, rosa, naranja — en el corazón de la comunidad Cape Malay, descendientes de los esclavos traídos por los holandeses del sudeste asiático en el siglo XVII. La cocina Cape Malay — bobotie, gatsby, koeksisters — es única en el continente y merece al menos una cena. El Museo Bo-Kaap en una de las casas más antiguas del barrio explica la historia completa.

Nota práctica: Ciudad del Cabo es una ciudad extraordinaria con desigualdades económicas muy visibles. Para moverse, usa Bolt o Uber — los taxis de aplicación son seguros y baratos. No conduzcas de noche por zonas desconocidas. {{CTA:service:safetywing:seguro viaje sudafrica:Asegura tu viaje con SafetyWing}} — un seguro de viaje completo es especialmente importante en Sudáfrica, donde la sanidad privada es excelente pero cara. Para la conexión, {{CTA:service:nordvpn:vpn viajes:Protege tu conexión con NordVPN}} — las redes públicas de hoteles y cafés son convenientes pero nunca privadas.`,
      en: `Cape Town has the problem of cities that are too beautiful: everything else starts to feel slightly less. Table Mountain gives no warning. You're on the plane, looking out the window during descent, and there it is — flat, immense, with the tablecloth of cloud that sometimes covers it rolling off the edges — falling straight into the ocean. The city seems built to be looked at, not ignored.

The rotating cable car ascends in five minutes and deposits you on a three-kilometre-long plateau where Cape dassies run through the fynbos and the views to the Atlantic are the kind that make the concept of photography feel inadequate. {{CTA:activity:getyourguide:table mountain hiking tour cape town 2026:A Table Mountain hiking tour}} with a local guide reveals the less-trodden paths and viewpoints that appear on no postcard. If the cable car is closed due to wind — a common occurrence — the ascent via Platteklip Gorge is demanding and entirely recommended.

The Cape of Good Hope is the full-day excursion that justifies the trip. The road along the Cape Peninsula hugs the Atlantic for forty kilometres with baboons at the roadsides and ostriches in the fynbos scrubland. Cape Point lighthouse stands at the top of the cliffs, 249 metres above sea level, with views of both oceans. {{CTA:activity:viator:cape of good hope cape point penguins boulders beach tour:The complete Cape Peninsula tour}} includes Boulders Beach, where the colony of African penguins lives with the absolute indifference of those who know they own the beach.

Robben Island is the most emotionally intense visit on the itinerary. The ferry departs from the V&A Waterfront and the tour is guided by former political prisoners — men who were held on the island during apartheid. Nelson Mandela's cell, the quarry courtyard where prisoners worked and the museum in the old prison building contextualise everything. This isn't tourism; it's history in the first person. {{CTA:tickets:civitatis:robben island ferry tour cape town mandela:Book the Robben Island ferry}} well in advance — places sell out months ahead.

The Cape Winelands are one of African tourism's best-kept secrets. Less than an hour's drive from Cape Town, the wineries of Stellenbosch and Franschhoek produce world-class Pinotage, Chenin Blanc and Shiraz at prices that would be implausible in Europe. {{CTA:activity:getyourguide:stellenbosch franschhoek wine tour cape town 2026:A wine tour through Stellenbosch and Franschhoek}} with transport included from Cape Town is the most comfortable way to visit five or six wineries without worrying about driving. Lunch at Boschendal — one of South Africa's oldest wine farms, founded in 1685 — is one of the finest lunches on the African continent.

The Bo-Kaap neighbourhood climbs up Signal Hill's slopes with its houses painted in impossible colours — turquoise, yellow, pink, orange — at the heart of the Cape Malay community, descendants of the slaves brought by the Dutch from Southeast Asia in the 17th century. Cape Malay cuisine — bobotie, gatsby, koeksisters — is unique on the continent and deserves at least one dinner. The Bo-Kaap Museum in one of the neighbourhood's oldest houses tells the full story.

A practical note: Cape Town is an extraordinary city with very visible economic inequalities. For getting around, use Bolt or Uber — app-based taxis are safe and cheap. Avoid driving at night in unfamiliar areas. {{CTA:service:safetywing:travel insurance south africa:Insure your trip with SafetyWing}} — comprehensive travel insurance is especially important in South Africa, where private healthcare is excellent but expensive. For connectivity, {{CTA:service:nordvpn:travel vpn:Protect your connection with NordVPN}} — hotel and café public networks are convenient but never private.`,
    },
    faq: {
      es: [
        { question: "¿Es seguro viajar a Ciudad del Cabo en 2026?", answer: "Ciudad del Cabo es segura para el turista que toma precauciones. Las zonas turísticas — V&A Waterfront, De Waterkant, Camps Bay, Sea Point, Green Point, el centro histórico — son seguras de día. Usa siempre Uber o Bolt en lugar de taxis de la calle, no exhibas objetos de valor y evita zonas desconocidas de noche." },
        { question: "¿Cuándo es la mejor época para visitar Ciudad del Cabo?", answer: "Noviembre a febrero es el verano austral: temperaturas de 25-30°C, días largos y la mayoría de festivales. El problema es que es también la época más cara y con más turistas. Marzo-mayo tiene temperaturas perfectas, precios más bajos y el Festival de Jazz de Ciudad del Cabo. El invierno (junio-agosto) es lluvioso pero barato y bueno para avistamiento de ballenas." },
        { question: "¿Necesito un coche de alquiler en Ciudad del Cabo?", answer: "Para la ciudad en sí, no: Uber y Bolt son baratos y fiables. Para la excursión al Cabo de Buena Esperanza y la Ruta del Vino, un coche de alquiler da mucha más libertad — aunque los tours organizados son convenientes si prefieres no conducir. Se conduce por la izquierda, como en el Reino Unido." },
      ],
      en: [
        { question: "Is it safe to travel to Cape Town in 2026?", answer: "Cape Town is safe for tourists who take precautions. The tourist areas — V&A Waterfront, De Waterkant, Camps Bay, Sea Point, Green Point, the historic centre — are safe during the day. Always use Uber or Bolt rather than street taxis, don't display valuables and avoid unfamiliar areas at night." },
        { question: "When is the best time to visit Cape Town?", answer: "November to February is the austral summer: temperatures of 25-30°C, long days and most festivals. The downside is it's also the most expensive and most crowded period. March-May has perfect temperatures, lower prices and the Cape Town Jazz Festival. Winter (June-August) is rainy but cheap and good for whale watching." },
        { question: "Do I need a hire car in Cape Town?", answer: "For the city itself, no: Uber and Bolt are cheap and reliable. For the excursion to the Cape of Good Hope and the Wine Route, a hire car gives much more freedom — though organised tours are convenient if you'd rather not drive. Driving is on the left, as in the UK." },
      ],
    },
  },

  // ─────────────────────────────────────────────
  // 18. SINGAPORE
  // ─────────────────────────────────────────────
  {
    id: 18,
    slug: "singapur-guia-2026",
    enSlug: "singapore-guide-2026",
    narrator: "sofia",
    heroImage: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&q=80",
    city: { es: "Singapur", en: "Singapore" },
    country: { es: "Singapur", en: "Singapore" },
    emoji: "🦁",
    date: "2026-03-09",
    readTime: "8 min",
    category: "asia",
    title: {
      es: "Singapur: El Futuro Construido en el Presente, con Jardines",
      en: "Singapore: The Future Built in the Present, with Gardens",
    },
    subtitle: {
      es: "Marina Bay, jardines verticales, hawker centres y la ciudad-estado que lo hace todo con una eficiencia que el resto del mundo observa con envidia",
      en: "Marina Bay, vertical gardens, hawker centres and the city-state that does everything with an efficiency the rest of the world watches with envy",
    },
    excerpt: {
      es: "Singapur es la ciudad que te hace replantearte lo que una ciudad puede ser. Jardines dentro de edificios, árboles artificiales con vistas al Índico, sistemas de transporte que funcionan exactamente como dicen que funcionan y la mejor gastronomía callejera del planeta.",
      en: "Singapore is the city that makes you rethink what a city can be. Gardens inside buildings, artificial trees with views to the Indian Ocean, transport systems that work exactly as advertised and the finest street food on the planet.",
    },
    metaDescription: {
      es: "Guía Singapur 2026: Gardens by the Bay, Marina Bay Sands, Chinatown, Little India, hawker centres y qué hacer en este destino asiático único. Todo lo esencial.",
      en: "Singapore 2026 guide: Gardens by the Bay, Marina Bay Sands, Chinatown, Little India, hawker centres and what to do in this unique Asian destination. All the essentials.",
    },
    keywords: {
      es: ["guía singapur", "singapur 2026", "qué ver en singapur", "gardens by the bay", "marina bay sands", "hawker centres singapur"],
      en: ["singapore guide", "singapore 2026", "things to do singapore", "gardens by the bay", "marina bay sands", "singapore hawker centres"],
    },
    pointsOfInterest: [
      {
        name: "Gardens by the Bay",
        type: "Parque",
        lat: 1.2816, lng: 103.8636,
        description: {
          es: "Los Supertrees — árboles artificiales de hasta 50 metros de altura cubiertos de plantas verticales y conectados por una pasarela aérea — son el símbolo más fotogénico de la Singapur contemporánea. El Cloud Forest, con su cascada interior de 35 metros dentro de un domo refrigerado, es uno de los espacios más extraordinarios del planeta.",
          en: "The Supertrees — artificial trees up to 50 metres tall covered in vertical gardens and connected by a skybridge — are the most photogenic symbol of contemporary Singapore. The Cloud Forest, with its 35-metre indoor waterfall inside a cooled dome, is one of the most extraordinary spaces on earth.",
        },
        rating: 4.9, priceRange: "€25 (domes)",
        affiliateLinks: [
          { label: { es: "Entrada Gardens by the Bay + domes", en: "Gardens by the Bay + domes ticket" }, partner: "klook", query: "gardens by the bay supertree cloud forest singapore ticket", type: "tickets" },
          { label: { es: "Tour nocturno Garden Rhapsody", en: "Garden Rhapsody night show" }, partner: "getyourguide", query: "gardens by the bay night show singapore supertree grove", type: "activity" },
        ],
      },
      {
        name: "Marina Bay Sands & Skypark",
        type: "Arquitectura",
        lat: 1.2838, lng: 103.8607,
        description: {
          es: "El hotel con la piscina infinita más famosa del mundo — en la cubierta de tres torres de 57 pisos — y el Skypark de acceso público con las mejores vistas del horizonte de Singapur. La piscina solo está disponible para huéspedes, pero el Skypark es accesible para todos con entrada.",
          en: "The hotel with the world's most famous infinity pool — on the roof deck of three 57-storey towers — and the publicly accessible SkyPark with the finest views of the Singapore skyline. The pool is guests-only, but the SkyPark is accessible to all with a ticket.",
        },
        rating: 4.8, priceRange: "€20 (Skypark)",
        affiliateLinks: [
          { label: { es: "Entrada Marina Bay Sands Skypark", en: "Marina Bay Sands SkyPark ticket" }, partner: "klook", query: "marina bay sands skypark observation deck singapore", type: "tickets" },
        ],
      },
      {
        name: "Hawker Centres: Chinatown & Maxwell",
        type: "Gastronomía",
        lat: 1.2812, lng: 103.8445,
        description: {
          es: "Los mercados de comida callejera de Singapur son Patrimonio Cultural de la Humanidad por la UNESCO — el único del mundo en esa categoría. El Maxwell Food Centre y el Chinatown Complex Food Centre concentran décadas de tradición culinaria china, malaya e india en puestos que llevan abiertos desde los años 60. El Hainanese Chicken Rice de Tian Tian en Maxwell tiene lista de espera a mediodía.",
          en: "Singapore's hawker centres are UNESCO Intangible Cultural Heritage — the only street food tradition in the world in that category. The Maxwell Food Centre and the Chinatown Complex Food Centre concentrate decades of Chinese, Malay and Indian culinary tradition in stalls that have been open since the 1960s. Tian Tian's Hainanese Chicken Rice at Maxwell has a queue at midday.",
        },
        rating: 4.8, priceRange: "€3–8",
        affiliateLinks: [
          { label: { es: "Tour gastronómico hawker centres", en: "Hawker centres food tour" }, partner: "viator", query: "singapore hawker centre food tour chinatown maxwell", type: "activity" },
          { label: { es: "Tour nocturno gastronomía callejera", en: "Night street food tour" }, partner: "getyourguide", query: "singapore night street food tour hawker centre", type: "activity" },
        ],
      },
      {
        name: "Barrio de Chinatown",
        type: "Barrio",
        lat: 1.2823, lng: 103.8444,
        description: {
          es: "El barrio chino más ordenado del mundo y también el más auténtico en lo que importa: los templos, la gastronomía y el mercado nocturno de Pagoda Street. El Templo Sri Mariamman, el Templo de Buddha Tooth Relic y la mezquita Jamae Chulia coexisten en tres manzanas — tres civilizaciones en el mismo vecindario.",
          en: "The world's most orderly Chinatown and also the most authentic in what matters: the temples, the food and the Pagoda Street night market. The Sri Mariamman Temple, the Buddha Tooth Relic Temple and the Jamae Chulia Mosque coexist within three blocks — three civilisations in the same neighbourhood.",
        },
        rating: 4.7,
        affiliateLinks: [
          { label: { es: "Tour cultural Chinatown + Little India", en: "Chinatown + Little India cultural tour" }, partner: "civitatis", query: "chinatown little india cultural tour singapore", type: "activity" },
        ],
      },
      {
        name: "Sentosa Island & Universal Studios",
        type: "Entretenimiento",
        lat: 1.2494, lng: 103.8303,
        description: {
          es: "La isla de ocio de Singapur: Universal Studios Asia, el casino del Marina Bay Sands, playas artificiales y el teleférico desde Mount Faber. Universal Studios Singapore tiene las atracciones de Minions, Transformers y la Zona de Harry Potter en su versión más nueva y tecnológica.",
          en: "Singapore's entertainment island: Universal Studios Asia, the Marina Bay Sands casino, artificial beaches and the cable car from Mount Faber. Universal Studios Singapore has the Minions, Transformers and the most technologically advanced Harry Potter zone of any of its parks.",
        },
        rating: 4.6, priceRange: "€65 (Universal Studios)",
        affiliateLinks: [
          { label: { es: "Entradas Universal Studios Singapore", en: "Universal Studios Singapore tickets" }, partner: "klook", query: "universal studios singapore ticket 2026", type: "tickets" },
        ],
      },
    ],
    events: [
      {
        name: "Singapore Food Festival",
        type: "gastronomy",
        date: "Jul 2026",
        venue: "Diversos venues, Singapur",
        urgency: false,
        description: {
          es: "El festival gastronómico anual que celebra la identidad culinaria única de Singapur: chefs estrella, cenas pop-up en localizaciones históricas y competiciones de hawker food que reúnen a los mejores puestos de la ciudad. La mejor semana del año para comer en Singapur, si eso es posible.",
          en: "The annual food festival celebrating Singapore's unique culinary identity: Michelin-starred chefs, pop-up dinners in historic locations and hawker food competitions bringing together the city's finest stalls. The best week of the year to eat in Singapore, if that is even possible.",
        },
        affiliateLinks: [
          { label: { es: "Tour gastronómico Singapore Food Festival", en: "Singapore Food Festival culinary tour" }, partner: "getyourguide", query: "singapore food festival culinary tour 2026", type: "activity" },
        ],
      },
      {
        name: "Formula 1 Singapore Grand Prix",
        type: "sport",
        date: "Sep 2026",
        venue: "Marina Bay Street Circuit",
        urgency: true,
        description: {
          es: "El único Gran Premio de Fórmula 1 que se corre de noche: el circuito urbano de Marina Bay iluminado con 1.500 proyectores recorre la bahía con el skyline de la ciudad como telón de fondo. Uno de los espectáculos más impresionantes del deporte mundial.",
          en: "The only Formula 1 Grand Prix held at night: the Marina Bay street circuit lit by 1,500 floodlights traces the bay with the city skyline as backdrop. One of the most spectacular spectacles in world sport.",
        },
        affiliateLinks: [
          { label: { es: "Entradas F1 Singapur 2026", en: "Singapore F1 Grand Prix 2026 tickets" }, partner: "ticketmaster", query: "singapore formula 1 grand prix 2026 marina bay", type: "tickets" },
          { label: { es: "Paquete F1 + hotel Singapur", en: "Singapore F1 + hotel package" }, partner: "stubhub", query: "singapore f1 grand prix 2026 tickets", type: "tickets" },
        ],
      },
      {
        name: "Deepavali en Little India",
        type: "cultural",
        date: "Oct 2026",
        venue: "Little India, Serangoon Road",
        urgency: false,
        description: {
          es: "El Festival de las Luces hindú transforma Little India en el evento más colorido de Singapur: miles de farolillos de colores, decoraciones en las calles de Serangoon Road, comida india festiva y la energía de la comunidad Tamil celebrando la victoria de la luz sobre la oscuridad.",
          en: "The Hindu Festival of Lights transforms Little India into Singapore's most colourful event: thousands of coloured lanterns, decorations on Serangoon Road, festive Indian food and the energy of the Tamil community celebrating the victory of light over darkness.",
        },
        affiliateLinks: [
          { label: { es: "Tour nocturno Little India Deepavali", en: "Little India Deepavali night tour" }, partner: "viator", query: "little india deepavali festival night tour singapore", type: "activity" },
        ],
      },
      {
        name: "Singapore Night Festival",
        type: "art",
        date: "Ago 2026",
        venue: "Bras Basah-Bugis, Civic District",
        urgency: false,
        description: {
          es: "Instalaciones de luz y arte contemporáneo en los edificios históricos del Civic District y el barrio de Bras Basah. Las proyecciones sobre la fachada del Museo Nacional, el Singapore Art Museum y los edificios coloniales de Stamford Road son el evento de arte visual más importante del año en Singapur.",
          en: "Light installations and contemporary art on the historic buildings of the Civic District and Bras Basah neighbourhood. Projections on the façade of the National Museum, the Singapore Art Museum and the colonial buildings of Stamford Road are the most important visual art event of the year in Singapore.",
        },
        affiliateLinks: [],
      },
    ],
    services: {
      flights: ["skyscanner", "kiwi"],
      hotels: ["booking", "hostelworld", "vrbo"],
      activities: ["getyourguide", "viator", "civitatis", "klook"],
      tickets: ["klook", "tiqets"],
      insurance: ["safetywing", "worldnomads"],
      esim: ["airalo", "holafly", "saily"],
      transfers: ["welcomepickups", "gettransfer", "indrive"],
    },
    content: {
      es: `Singapur funciona. Esa frase, dicha de cualquier otra ciudad del mundo, sería un cumplido moderado. Dicha de Singapur es una declaración radical: los trenes llegan en el segundo exacto que marcan los paneles, los semáforos tienen timers visibles, los hawker centres tienen estrellas Michelin y los jardines están dentro de los edificios. No es utopía — es urbanismo ejecutado con la seriedad de quien sabe que el espacio es finito y la reputación no lo es.

Gardens by the Bay al anochecer es donde Singapur muestra su carta de presentación más espectacular. Los Supertrees — dieciocho árboles artificiales de hasta 50 metros cubiertos de plantas verticales — se iluminan con el Garden Rhapsody, un espectáculo de luz y música que dura veinte minutos y que convierte la explanada en algo que parece de ciencia ficción y de jardín botánico al mismo tiempo. {{CTA:activity:getyourguide:gardens by the bay night show singapore supertree grove:El espectáculo nocturno de los Supertrees}} es gratis y es uno de los mejores shows gratuitos del mundo. El Cloud Forest — un domo refrigerado con una cascada interior de 35 metros y vegetación de montaña tropical — es la visita de pago que más sorprende de la ciudad. {{CTA:tickets:klook:gardens by the bay supertree cloud forest singapore ticket:Compra tu entrada a los domos de Gardens by the Bay}} con antelación para evitar colas.

Los hawker centres son la razón más sólida para venir a Singapur. El Maxwell Food Centre a mediodía tiene el Hainanese Chicken Rice de Tian Tian — pollo cocido a baja temperatura con arroz cocinado en caldo de pollo, salsa de jengibre y pepino — por menos de cinco euros, con lista de espera de quince minutos y una estrella Michelin desde 2016. El Chinatown Complex, con más de 200 puestos en dos plantas, concentra décadas de tradición culinaria china, malaya e india. {{CTA:activity:viator:singapore hawker centre food tour chinatown maxwell:Un tour gastronómico por los hawker centres}} con guía local es la forma de comer en diez puestos diferentes en dos horas y entender por qué la UNESCO declaró esta tradición Patrimonio Cultural Inmaterial.

Marina Bay al atardecer es el skyline más fotogénico de Asia: el Marina Bay Sands con su cubierta en forma de barco volando sobre tres torres, los Supertrees al fondo y las luces del Central Business District reflejándose en el agua. El SkyPark — la cubierta del hotel, accesible para no huéspedes con entrada — tiene la piscina infinita y las vistas más espectaculares de la ciudad. {{CTA:tickets:klook:marina bay sands skypark observation deck singapore:Entrada al SkyPark del Marina Bay Sands}} — es caro pero las vistas merecen el precio una vez.

El barrio de Chinatown tiene tres civilizaciones en tres manzanas: el Templo Sri Mariamman — el templo hindú más antiguo de Singapur, con sus esculturas de colores imposibles — la mezquita Jamae Chulia y el Templo de Buddha Tooth Relic coexisten con una proximidad que solo Singapur puede gestionar. El mercado nocturno de Pagoda Street está abierto hasta la medianoche con souvenirs, batik y street food. Little India, a diez minutos en metro, tiene la misma intensidad de colores, olores y especias que Chennai pero en un barrio de quince manzanas.

La Formula 1 en septiembre convierte Marina Bay en el espectáculo más espectacular del calendario deportivo mundial: el único GP que se corre de noche, con 1.500 focos iluminando el circuito urbano y el skyline de Singapur como telón de fondo. {{CTA:tickets:ticketmaster:singapore formula 1 grand prix 2026 marina bay:Las entradas del GP de Singapur 2026}} se agotan con meses de antelación — si es tu plan, reserva hoy.

Nota práctica: Singapur es el destino asiático más caro del continente pero también el más eficiente. El transporte público (MRT + autobuses) es excepcional y conecta absolutamente todo — no necesitas taxi para moverte. Para la conexión, {{CTA:service:airalo:airalo esim singapur:Una eSIM de Airalo para Singapur}} funciona desde el aterrizaje sin necesidad de buscar tarjeta local. Para proteger tus pagos y conexiones en redes de hoteles y centros comerciales, {{CTA:service:nordvpn:vpn viajes:Protege tu conexión con NordVPN}} es el seguro que no ocupa espacio en la maleta. Y para un viaje de larga distancia a Asia, {{CTA:service:safetywing:seguro viaje asia:Asegura tu viaje con SafetyWing}} ofrece cobertura completa sin las comisiones de los seguros tradicionales.`,
      en: `Singapore works. Said of any other city in the world, that would be a moderate compliment. Said of Singapore, it is a radical statement: trains arrive at the exact second the panels say they will, traffic lights have visible timers, hawker centres have Michelin stars and the gardens are inside the buildings. It isn't utopia — it's urbanism executed with the seriousness of those who know that space is finite and reputation is not.

Gardens by the Bay at dusk is where Singapore presents its most spectacular calling card. The Supertrees — eighteen artificial trees up to 50 metres tall covered in vertical gardens — illuminate for the Garden Rhapsody, a twenty-minute light and music show that transforms the esplanade into something that feels simultaneously like science fiction and a botanical garden. {{CTA:activity:getyourguide:gardens by the bay night show singapore supertree grove:The Supertrees night show}} is free and is one of the finest free shows in the world. The Cloud Forest — a cooled dome with a 35-metre indoor waterfall and tropical mountain vegetation — is the paid attraction that surprises most. {{CTA:tickets:klook:gardens by the bay supertree cloud forest singapore ticket:Buy your Gardens by the Bay domes ticket}} in advance to avoid queues.

The hawker centres are the most compelling reason to come to Singapore. Maxwell Food Centre at midday has Tian Tian's Hainanese Chicken Rice — slow-cooked chicken with rice cooked in chicken stock, ginger sauce and cucumber — for under five euros, with a fifteen-minute queue and a Michelin star since 2016. The Chinatown Complex, with over 200 stalls across two floors, concentrates decades of Chinese, Malay and Indian culinary tradition. {{CTA:activity:viator:singapore hawker centre food tour chinatown maxwell:A hawker centre food tour}} with a local guide is the way to eat at ten different stalls in two hours and understand why UNESCO declared this tradition Intangible Cultural Heritage.

Marina Bay at sunset is Asia's most photogenic skyline: the Marina Bay Sands with its boat-shaped rooftop flying over three towers, the Supertrees in the background and the Central Business District lights reflecting in the water. The SkyPark — the hotel rooftop, accessible to non-guests with a ticket — has the infinity pool and the city's most spectacular views. {{CTA:tickets:klook:marina bay sands skypark observation deck singapore:Marina Bay Sands SkyPark ticket}} — it's expensive but the views merit the price once.

The Chinatown neighbourhood has three civilisations within three blocks: the Sri Mariamman Temple — Singapore's oldest Hindu temple, with its sculptures in impossible colours — the Jamae Chulia Mosque and the Buddha Tooth Relic Temple coexist with a proximity that only Singapore can manage. The Pagoda Street night market is open until midnight with souvenirs, batik and street food. Little India, ten minutes by metro, has the same intensity of colours, aromas and spices as Chennai, condensed into a fifteen-block neighbourhood.

Formula 1 in September turns Marina Bay into the most spectacular spectacle on the world sporting calendar: the only GP run at night, with 1,500 floodlights illuminating the street circuit and the Singapore skyline as backdrop. {{CTA:tickets:ticketmaster:singapore formula 1 grand prix 2026 marina bay:Singapore F1 Grand Prix 2026 tickets}} sell out months in advance — if this is your plan, book today.

A practical note: Singapore is Asia's most expensive destination but also its most efficient. Public transport (MRT + buses) is exceptional and connects everything absolutely — you don't need taxis to get around. For connectivity, {{CTA:service:airalo:airalo esim singapur:An Airalo eSIM for Singapore}} works from landing without needing to find a local SIM. To protect your payments and connections on hotel and shopping centre networks, {{CTA:service:nordvpn:travel vpn:Protect your connection with NordVPN}} is the insurance that takes up no space in your bag. And for a long-haul trip to Asia, {{CTA:service:safetywing:travel insurance asia:Insure your trip with SafetyWing}} offers full coverage without the commissions of traditional travel insurance.`,
    },
    faq: {
      es: [
        { question: "¿Cuántos días se necesitan para ver Singapur?", answer: "Singapur es compacta y eficiente: con 3-4 días puedes ver lo esencial (Gardens by the Bay, Chinatown, Little India, Sentosa, el skyline de Marina Bay). Con 5-6 días puedes explorar también los barrios más locales como Tiong Bahru, Joo Chiat y las reservas de naturaleza de Bukit Timah." },
        { question: "¿Es Singapur realmente tan cara?", answer: "Los hoteles y los bares son caros — comparable a Londres o Zúrich. Pero los hawker centres sirven comidas completas de calidad excepcional por 4-8€. El transporte público es baratísimo. El truco es alojarse en Chinatown o Little India (más barato que el CBD) y comer en hawker centres, no en restaurantes de carta." },
        { question: "¿Necesito visado para entrar a Singapur?", answer: "Los ciudadanos de la UE, Reino Unido, Australia, Canadá y Estados Unidos no necesitan visado para estancias de hasta 30-90 días (varía según nacionalidad). La entrada es gratuita y el proceso es sencillo. Verifica los requisitos específicos de tu país en el sitio oficial de inmigración de Singapur." },
      ],
      en: [
        { question: "How many days do you need to see Singapore?", answer: "Singapore is compact and efficient: in 3-4 days you can see the essentials (Gardens by the Bay, Chinatown, Little India, Sentosa, the Marina Bay skyline). With 5-6 days you can also explore more local neighbourhoods like Tiong Bahru, Joo Chiat and the Bukit Timah nature reserves." },
        { question: "Is Singapore really as expensive as people say?", answer: "Hotels and bars are expensive — comparable to London or Zurich. But hawker centres serve complete meals of exceptional quality for €4-8. Public transport is very cheap. The trick is to stay in Chinatown or Little India (cheaper than the CBD) and eat at hawker centres rather than à la carte restaurants." },
        { question: "Do I need a visa to enter Singapore?", answer: "Citizens of the EU, UK, Australia, Canada and the United States do not need a visa for stays of up to 30-90 days (varies by nationality). Entry is free and the process is straightforward. Check your country's specific requirements on Singapore's official immigration website." },
      ],
    },
  },

  // ─────────────────────────────────────────────
  // KIOTO
  // ─────────────────────────────────────────────
  {
    id: "kioto-guide-2026",
    slug: "kioto-guia-2026",
    enSlug: "kyoto-travel-guide-2026",
    narrator: "david",
    heroImage: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=2070&auto=format&fit=crop",
    city: "Kioto",
    country: { es: "Japón", en: "Japan" },
    emoji: "🇯🇵",
    date: "2026-03-12",
    readTime: "9 min",
    category: "asia",
    title: {
      es: "Kioto 2026: La ciudad que entiendes por la comida antes que por los templos",
      en: "Kyoto 2026: The City You Understand Through Food Before Temples",
    },
    subtitle: {
      es: "Kaiseki, tofu de alta cocina, el Mercado de Nishiki y diez mil torii al amanecer",
      en: "Kaiseki, high-end tofu, Nishiki Market and ten thousand torii at dawn",
    },
    excerpt: {
      es: "Llegué con una lista de restaurantes. Salí con la convicción de que el kaiseki es la forma más sofisticada que existe de comer en el mundo.",
      en: "I arrived with a list of restaurants. I left convinced that kaiseki is the most sophisticated way of eating in the world.",
    },
    metaDescription: {
      es: "Guía de Kioto 2026: Mercado de Nishiki, Fushimi Inari al amanecer, kaiseki y el barrio de Gion. Todo lo que necesitas saber antes de ir a Japón.",
      en: "Kyoto guide 2026: Nishiki Market, Fushimi Inari at dawn, kaiseki and the Gion district. Everything you need to know before visiting Japan.",
    },
    keywords: {
      es: ["kioto 2026", "que ver en kioto", "fushimi inari", "mercado nishiki", "kaiseki"],
      en: ["kyoto 2026", "what to see in kyoto", "fushimi inari", "nishiki market", "kaiseki dinner"],
    },
    pointsOfInterest: [
      {
        name: "Mercado de Nishiki",
        type: "Mercado",
        lat: 35.0052, lng: 135.7659,
        description: {
          es: "Cuatro cuadras bajo techo, trescientas tiendas y en cada mostrador algo que no has probado y que vas a necesitar probar antes de irte. Los tsukemono en tonalidades que van del morado oscuro al amarillo brillante, las brochetas de tofu frito y los wagashi que parecen pequeñas obras de artesanía comestible.",
          en: "Four covered blocks, three hundred shops and at every counter something you haven't tried and will need to try before leaving. Tsukemono in tones from deep purple to bright yellow, fried tofu skewers and wagashi that look like small edible artworks.",
        },
        rating: 4.7, priceRange: "Libre",
        affiliateLinks: [
          { label: { es: "Tour gastronómico Mercado de Nishiki", en: "Nishiki Market food tour" }, partner: "getyourguide", query: "nishiki market food tour kyoto", type: "activity" },
        ],
      },
      {
        name: "Fushimi Inari",
        type: "Templo",
        lat: 34.9671, lng: 135.7727,
        description: {
          es: "Diez mil torii naranjas formando túneles hasta la cima del monte Inari. La perspectiva es de una belleza que ninguna foto reproduce del todo. Solución: llegar a las 7:00 de la mañana. El santuario está abierto las 24 horas y antes de las 9 tienes los túneles prácticamente para ti solo.",
          en: "Ten thousand orange torii forming tunnels up Mount Inari. The tunnel perspective is a beauty no photograph fully reproduces. Solution: arrive at 7am. The shrine is open 24 hours and before 9am you essentially have the tunnels to yourself.",
        },
        rating: 4.9, priceRange: "Gratis",
        affiliateLinks: [
          { label: { es: "Tour al amanecer Fushimi Inari", en: "Fushimi Inari dawn tour" }, partner: "getyourguide", query: "fushimi inari early morning tour kyoto", type: "activity" },
        ],
      },
      {
        name: "Arashiyama",
        type: "Parque",
        lat: 35.0094, lng: 135.6731,
        description: {
          es: "El bosque de bambú (sobreturístico pero merece 20 minutos) y el templo Tenryu-ji con su jardín zen sobre el estanque. También tiene el mejor tofu de la ciudad — Kioto es famosa por su tofu de alta calidad y los restaurantes de Arashiyama lo sirven de formas que convierten algo infrautilizado en Europa en un ingrediente principal con carácter propio.",
          en: "The bamboo grove (over-touristed but worth 20 minutes) and Tenryu-ji temple with its Zen garden over the pond. It also has the best tofu in the city — Kyoto is famous for high-quality tofu and Arashiyama restaurants serve it in ways that transform a European afterthought into a main ingredient with genuine character.",
        },
        rating: 4.8, priceRange: "€5",
        affiliateLinks: [
          { label: { es: "Tour por Arashiyama y bambú", en: "Arashiyama bamboo grove tour" }, partner: "getyourguide", query: "arashiyama bamboo grove temple tour kyoto", type: "activity" },
        ],
      },
      {
        name: "Gion",
        type: "Barrio",
        lat: 35.0031, lng: 135.7752,
        description: {
          es: "El barrio histórico de las geishas. Al atardecer, entre las 17:00 y las 19:00, la probabilidad de ver a una geiko o maiko caminando hacia su primer compromiso del día es real. No son actores ni una atracción turística — trabajan en la industria del entretenimiento formal más antigua de Japón. Mirar está permitido; interrumpirlas no.",
          en: "The historic geisha district. At dusk, between 5pm and 7pm, the chance of seeing a geiko or maiko walking to their first evening engagement is real. They're not actors or a tourist attraction — they work in Japan's oldest formal entertainment industry. Looking is fine; interrupting them is not.",
        },
        rating: 4.8, priceRange: "Libre",
        affiliateLinks: [
          { label: { es: "Tour por Gion al atardecer", en: "Gion dusk walking tour" }, partner: "civitatis", query: "gion district walking tour kyoto geisha evening", type: "activity" },
        ],
      },
      {
        name: "Kinkaku-ji (Pabellón Dorado)",
        type: "Templo",
        lat: 35.0394, lng: 135.7292,
        description: {
          es: "El templo cubierto de pan de oro reflejado en el estanque es tan bonito que parece irreal aunque lo estés mirando en directo. El más fotografiado de Japón por razones que se hacen evidentes en el momento en que lo ves. Llega a primera hora; el camino circular dura 30-40 minutos y el acceso está controlado.",
          en: "The gold-leaf-covered temple reflected in the pond is so beautiful it seems unreal even as you're looking at it directly. The most photographed in Japan for reasons that become evident the moment you see it. Go early; the circular path takes 30-40 minutes and access is controlled.",
        },
        rating: 4.8, priceRange: "€3",
        affiliateLinks: [
          { label: { es: "Tour templos de Kioto con Kinkaku-ji", en: "Kyoto temples tour with Kinkaku-ji" }, partner: "getyourguide", query: "kinkakuji golden pavilion kyoto temples tour", type: "activity" },
        ],
      },
    ],
    events: [
      {
        name: "Hanami — Sakura en Kioto 2026",
        type: "natural",
        date: "25 Mar – 10 Abr 2026",
        venue: "Maruyama Park y ribera del río Kamo",
        urgency: true,
        description: {
          es: "La floración de los cerezos convierte Kioto en la ciudad más hermosa de Japón durante dos semanas. El Maruyama Park con el cerezo lloron iluminado por la noche, el camino del Filósofo bordeado de cerezos sobre el canal y los jardines de Heian Shrine son los puntos de mayor concentración. Reserva alojamiento con meses de antelación — Kioto en hanami se agota antes que Glastonbury.",
          en: "The cherry blossom turns Kyoto into Japan's most beautiful city for two weeks. Maruyama Park with the illuminated weeping cherry at night, the Philosopher's Path lined with cherry trees over the canal and Heian Shrine gardens are the top spots. Book accommodation months in advance — Kyoto during hanami sells out faster than Glastonbury.",
        },
        affiliateLinks: [
          { label: { es: "Tour hanami Kioto al atardecer", en: "Kyoto hanami evening tour" }, partner: "getyourguide", query: "kyoto cherry blossom hanami evening tour maruyama", type: "activity" },
          { label: { es: "Hotel en Kioto durante hanami", en: "Kyoto hotel during hanami season" }, partner: "booking", query: "kyoto hotel hanami cherry blossom april", type: "hotel" },
        ],
      },
      {
        name: "Gion Matsuri 2026",
        type: "cultural",
        date: "Jul 2026",
        venue: "Barrio de Gion",
        urgency: false,
        description: {
          es: "El festival más importante de Kioto y uno de los tres grandes matsuri de Japón, celebrado durante todo el mes de julio. El punto culminante son los desfiles de carrozas Yamaboko Junko los días 17 y 24 — estructuras de madera de varios pisos decoradas con tapices históricos arrastradas por las calles del centro. El Yoiyama la noche anterior, cuando las carrozas se iluminan y las calles se llenan de personas en yukata, es de los mejores espectáculos del año.",
          en: "Kyoto's most important festival and one of Japan's three great matsuri, celebrated throughout July. The highlight is the Yamaboko Junko float procession on the 17th and 24th — multi-story wooden structures decorated with historical tapestries pulled through the city centre. The Yoiyama the night before, when the floats are illuminated and streets fill with people in yukata, is one of the year's best spectacles.",
        },
        affiliateLinks: [
          { label: { es: "Experiencia Gion Matsuri Kioto", en: "Gion Matsuri Kyoto experience" }, partner: "getyourguide", query: "gion matsuri kyoto festival july experience", type: "activity" },
        ],
      },
      {
        name: "Daimonji Gozan Okuribi 2026",
        type: "cultural",
        date: "16 Ago 2026",
        venue: "Colinas que rodean Kioto",
        urgency: false,
        description: {
          es: "Cinco hogueras en forma de kanji y símbolos encendidas simultáneamente en las colinas que rodean la ciudad para guiar a los espíritus ancestrales de vuelta al más allá al final del Obon. La más famosa es la Gran Daimonji en el monte Nyoigadake, visible desde casi cualquier punto del norte de la ciudad. El espectáculo dura unos treinta minutos y los puntos de observación se llenan dos horas antes.",
          en: "Five bonfires in the shape of kanji characters and symbols lit simultaneously on the hills surrounding the city to guide ancestral spirits back to the afterlife at the end of Obon. The most famous is the Great Daimonji on Mount Nyoigadake, visible from almost anywhere in northern Kyoto. The spectacle lasts about thirty minutes and viewing points fill up two hours before.",
        },
        affiliateLinks: [
          { label: { es: "Tour Daimonji Kioto agosto", en: "Daimonji Kyoto August fire festival" }, partner: "getyourguide", query: "daimonji fire festival kyoto august viewpoint", type: "activity" },
        ],
      },
    ],
    services: {
      flights: ["skyscanner", "kiwi"],
      hotels: ["booking", "hostelworld"],
      activities: ["getyourguide", "viator", "klook", "civitatis"],
      insurance: ["safetywing", "worldnomads"],
      esim: ["airalo", "saily", "yesim"],
      transfers: ["intui", "welcomepickups"],
    },
    content: {
      es: `Kioto no es Tokio. Ésta es la primera cosa importante que hay que entender antes de llegar. Tokio es velocidad, densidad, contradicción constante entre lo ultramoderno y lo tradicional que se resuelve de forma ruidosa. Kioto es otra cosa: una ciudad donde el pasado no convive con el presente sino que lo organiza.

Llegué con una lista de restaurantes, como siempre. Salí con la convicción de que el kaiseki es la forma más sofisticada que existe de comer en el mundo, y con la segunda convicción de que nunca lo habría entendido si no hubiera empezado por el Mercado de Nishiki.

El Mercado de Nishiki es mi respuesta a cualquiera que me pregunte qué ver primero en Kioto. Cuatro cuadras bajo techo, trescientas tiendas, y en cada pared o mostrador algo que no has probado y que vas a necesitar probar antes de irse. Los tsukemono — encurtidos japoneses de berenjena, pepino y daikon — en tonalidades que van del morado oscuro al amarillo brillante. Las brochetas de tofu frito. Los wagashi, los dulces tradicionales japoneses hechos con pasta de judía azuki que parecen pequeñas obras de artesanía comestible. {{CTA:activity:getyourguide:nishiki market food tour kyoto:Tour gastronómico por el Mercado de Nishiki}} — hay guías que explican qué estás comiendo, cuándo se hace y por qué funciona así. Recomendables. Yo hice la versión autodidacta señalando cosas al azar: el 90% funcionó, pero entender el contexto añade una capa que no tiene precio.

El kaiseki es la otra razón por la que Kioto es una ciudad gastronómica sin equivalente. Una cena de kaiseki — ocho o diez servicios pequeños, cada uno con ingredientes de temporada, presentación casi arquitectónica y una lógica de sabores que solo se entiende completamente cuando llega el último plato — es cara. Muy cara para los estándares del menú del día español. Pero es también la experiencia culinaria más completa que he tenido en ningún lugar del mundo, incluyendo restaurantes con estrella Michelin de Europa. {{CTA:activity:getyourguide:kyoto kaiseki dinner experience:Reserva una cena kaiseki en Kioto}}. Con dos días de antelación mínimo — los mejores restaurantes cierran cuando se llenan, no cuando llegan más clientes.

Fushimi Inari merece una mañana entera y una estrategia. Los diez mil torii naranjas que forman el camino hasta la cima del monte Inari son una de las imágenes más fotografiadas de Japón y con razón: la perspectiva en túnel que forman los torii consecutivos es de una belleza que ninguna foto reproduce del todo. La multitud de turistas en la base del santuario a partir de las 9 de la mañana no lo ayuda. La solución: llegar a las 7:00 o 7:30. El santuario está abierto las 24 horas. {{CTA:activity:getyourguide:fushimi inari early morning tour kyoto:Tour al amanecer en Fushimi Inari}}, o ve por libre — el camino está perfectamente señalizado y sube durante dos horas hasta la cima con vistas panorámicas sobre la ciudad.

Arashiyama tiene el bosque de bambú y el templo Tenryu-ji con su jardín zen sobre el estanque, que es de los pocos jardines donde la composición es tan correcta que entiendes por qué alguien dedicó su vida a mover piedras. También tiene el mejor tofu de la ciudad. {{CTA:activity:getyourguide:arashiyama bamboo grove temple tour kyoto:Tour por Arashiyama y el bosque de bambú}}. El tofu de los restaurantes especializados de esta zona — servido en dashide caldo claro, frito en agedashi, o frío con jengibre y bonito — tiene poco que ver con el tofu en bloque que conoces de los supermercados europeos. Es un ingrediente diferente.

Gion al atardecer, entre las 17:00 y las 19:00, es el momento de mayor probabilidad de ver a una geiko o maiko caminando hacia su primer compromiso del día. No son actores ni una atracción turística: trabajan en la industria del entretenimiento formal más antigua de Japón. La etiqueta correcta: puedes mirar, no puedes tocarlas ni pedirles fotos directamente.

Para la conectividad en Japón, {{CTA:service:airalo:airalo esim japan:Una eSIM de Airalo para Japón}} funciona desde el aterrizaje — la cobertura 4G/5G en Japón es excepcional. Nota importante: Japón sigue siendo en gran parte una sociedad de efectivo. Los templos, los mercados de calle y los mejores restaurantes de kaiseki no aceptan tarjeta. Lleva siempre yenes en efectivo — los cajeros del 7-Eleven y Lawson aceptan tarjetas internacionales sin problemas. {{CTA:hotel:booking:kyoto hotel traditional ryokan:Compara hoteles y ryokans en Kioto}} — un ryokan tradicional con onsen y cena kaiseki incluida es la forma correcta de entender esta ciudad desde adentro.`,

      en: `Kyoto is not Tokyo. This is the first important thing to understand before you arrive. Tokyo is speed, density, constant contradiction between the ultra-modern and the traditional that resolves itself noisily. Kyoto is something else: a city where the past doesn't coexist with the present but organises it.

I arrived with a list of restaurants, as always. I left with the conviction that kaiseki is the most sophisticated way of eating that exists in the world, and with the secondary conviction that I would never have understood it if I hadn't started with Nishiki Market.

Nishiki Market is my answer to anyone who asks what to see first in Kyoto. Four covered blocks, three hundred shops, and at every wall or counter something you haven't tried and will need to try before leaving. The tsukemono — Japanese pickles of aubergine, cucumber, daikon — in tones ranging from deep purple to bright yellow. Fried tofu skewers. Wagashi, traditional Japanese sweets made from azuki bean paste that look like small edible artworks. {{CTA:activity:getyourguide:nishiki market food tour kyoto:Nishiki Market food tour}} — guides who explain what you're eating, when it's made and why it works this way are worth it. I did the self-taught version pointing at random things and 90% worked, but understanding the context adds a layer that's priceless.

Kaiseki is the other reason Kyoto is a gastronomic city without equal. A kaiseki dinner — eight or ten small courses, each with seasonal ingredients, almost architectural presentation and a flavour logic that only makes complete sense when the last course arrives — is expensive. Very expensive by Spanish set-menu standards. But it's also the most complete culinary experience I've had anywhere in the world, including Michelin-starred restaurants in Europe. {{CTA:activity:getyourguide:kyoto kaiseki dinner experience:Book a kaiseki dinner in Kyoto}}. At least two days' notice — the best restaurants close when they're full, not when more customers arrive.

Fushimi Inari deserves a full morning and a strategy. The ten thousand orange torii forming the path up Mount Inari are one of the most photographed images in Japan, for good reason: the tunnel perspective created by consecutive torii gates is a beauty that no photograph fully reproduces. Tourist crowds at the shrine base from 9am don't help. The solution: arrive at 7 or 7:30am. The shrine is open 24 hours. {{CTA:activity:getyourguide:fushimi inari early morning tour kyoto:Fushimi Inari dawn tour}}, or go independently — the path is perfectly signposted and climbs for two hours to the summit with panoramic views over the city.

Arashiyama has the bamboo grove and Tenryu-ji temple with its Zen garden over the pond, one of the few gardens where the composition is so correct that you understand why someone dedicated their life to moving stones. It also has the best tofu in the city. {{CTA:activity:getyourguide:arashiyama bamboo grove temple tour kyoto:Arashiyama bamboo grove and temple tour}}. The tofu at specialist restaurants in this area — served in clear dashi broth, fried as agedashi, or cold with ginger and bonito — bears little resemblance to the block tofu from European supermarkets. It's a different ingredient.

Gion at dusk, between 5pm and 7pm, is when you're most likely to see a geiko or maiko walking to their first evening engagement. They're not actors or a tourist attraction: they work in Japan's oldest formal entertainment industry. The correct etiquette: you can look, you cannot touch them or ask for photos directly.

For connectivity in Japan, {{CTA:service:airalo:airalo esim japan:An Airalo eSIM for Japan}} works from landing — 4G/5G coverage in Japan is exceptional. An important note: Japan remains largely a cash society. Temples, street markets and the best kaiseki restaurants don't accept cards. Always carry yen in cash — 7-Eleven and Lawson ATMs accept international cards without problems. {{CTA:hotel:booking:kyoto hotel traditional ryokan:Compare hotels and ryokans in Kyoto}} — a traditional ryokan with onsen and kaiseki dinner included is the correct way to understand this city from the inside.`,
    },
    faq: {
      es: [
        { question: "¿Cuántos días se necesitan para ver Kioto?", answer: "Con 3 días puedes ver lo esencial: Fushimi Inari (mañana temprano), Kinkaku-ji, Arashiyama con el bosque de bambú y Tenryu-ji, el Mercado de Nishiki y el barrio de Gion. Con 5 días puedes añadir el camino del Filósofo, los jardines de Heian Shrine, el distrito de Higashiyama y una excursión a Nara (45 minutos en tren). Una cena kaiseki requiere planificación de al menos 2-3 días de antelación." },
        { question: "¿Cuál es la mejor época para visitar Kioto?", answer: "La primavera (finales de marzo - principios de abril) durante el hanami de los cerezos es la época más espectacular pero también la más concurrida y cara. El otoño (noviembre) con los momiji — hojas rojas y doradas — es igualmente hermoso con menos aglomeraciones. El verano es caluroso y húmedo pero tiene el Gion Matsuri en julio. El invierno tiene Kioto nevada, que es espectacular pero fría." },
        { question: "¿Cómo llegar de Tokio a Kioto?", answer: "El Shinkansen (tren bala) entre Tokio (Shinagawa o Tokyo Station) y Kioto tarda 2 horas y 15 minutos. El precio estándar es de unos 14.000 yenes (85-90€) por trayecto. Si haces más de 2 trayectos en Shinkansen, el Japan Rail Pass puede compensar económicamente. El vuelo existe pero es más caro incluyendo traslados y no tiene ventaja de tiempo real." },
      ],
      en: [
        { question: "How many days do you need to see Kyoto?", answer: "In 3 days you can cover the essentials: Fushimi Inari (early morning), Kinkaku-ji, Arashiyama with the bamboo grove and Tenryu-ji, Nishiki Market and the Gion district. With 5 days you can add the Philosopher's Path, Heian Shrine gardens, the Higashiyama district and a day trip to Nara (45 minutes by train). A kaiseki dinner requires planning at least 2-3 days in advance." },
        { question: "When is the best time to visit Kyoto?", answer: "Spring (late March - early April) during cherry blossom hanami is the most spectacular time but also the most crowded and expensive. Autumn (November) with the momiji — red and golden leaves — is equally beautiful with fewer crowds. Summer is hot and humid but has Gion Matsuri in July. Winter has snow-covered Kyoto, which is spectacular but cold." },
        { question: "How to get from Tokyo to Kyoto?", answer: "The Shinkansen (bullet train) between Tokyo (Shinagawa or Tokyo Station) and Kyoto takes 2 hours 15 minutes. Standard price is around 14,000 yen (€85-90) per journey. If you're making more than 2 Shinkansen journeys, the Japan Rail Pass may be economically worthwhile. Flights exist but are more expensive including transfers and offer no real time advantage." },
      ],
    },
  },

  // ─────────────────────────────────────────────
  // PHUKET
  // ─────────────────────────────────────────────
  {
    id: "phuket-guide-2026",
    slug: "phuket-guia-2026",
    enSlug: "phuket-travel-guide-2026",
    narrator: "marcos",
    heroImage: "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=2070&auto=format&fit=crop",
    city: "Phuket",
    country: { es: "Tailandia", en: "Thailand" },
    emoji: "🇹🇭",
    date: "2026-03-12",
    readTime: "8 min",
    category: "asia",
    title: {
      es: "Phuket 2026: Lo que nadie te dice antes de que llegues",
      en: "Phuket 2026: What Nobody Tells You Before You Arrive",
    },
    subtitle: {
      es: "Phi Phi, Bangla Road de noche, Old Town y por qué la segunda visita siempre es mejor que la primera",
      en: "Phi Phi, Bangla Road at night, Old Town and why the second visit is always better than the first",
    },
    excerpt: {
      es: "Lo voy a decir sin rodeos: Phuket no es para todo el mundo. Y lo digo como alguien que ha ido dos veces.",
      en: "I'll say it plainly: Phuket isn't for everyone. And I say that as someone who's been twice.",
    },
    metaDescription: {
      es: "Guía de Phuket 2026: Islas Phi Phi, Bangla Road, Phuket Old Town y las mejores playas. Qué hacer, dónde alojarse y cómo moverse por la isla.",
      en: "Phuket guide 2026: Phi Phi Islands, Bangla Road, Phuket Old Town and the best beaches. What to do, where to stay and how to get around the island.",
    },
    keywords: {
      es: ["phuket 2026", "islas phi phi", "bangla road", "phuket old town", "playas tailandia"],
      en: ["phuket 2026", "phi phi islands", "bangla road", "phuket old town", "thailand beaches"],
    },
    pointsOfInterest: [
      {
        name: "Islas Phi Phi",
        type: "Playa",
        lat: 7.7407, lng: 98.7784,
        description: {
          es: "La bahía Maya Bay — la de la película La Playa — tiene el agua turquesa imposible que solo existe en Tailandia y en los protectores de pantalla de los Mac. Salir en barco a las 7 de la mañana antes de que lleguen los tours masivos marca la diferencia entre tener la bahía para ti solo y compartirla con ochocientas personas haciéndose la misma foto.",
          en: "Maya Bay — the one from The Beach — has the impossible turquoise water that only exists in Thailand and Mac screensavers. Leaving by boat at 7am before the mass tours arrive means the difference between having the bay to yourself and sharing it with eight hundred people taking the exact same photograph.",
        },
        rating: 4.9, priceRange: "€35-60",
        affiliateLinks: [
          { label: { es: "Tour en barco a las Islas Phi Phi", en: "Phi Phi Islands boat tour" }, partner: "getyourguide", query: "phi phi islands boat tour phuket maya bay", type: "activity" },
        ],
      },
      {
        name: "Bangla Road",
        type: "Barrio",
        lat: 7.8959, lng: 98.2944,
        description: {
          es: "Tres cuadras con quince bares por cuadra, cada uno con sus propios DJs, su propio sistema de sonido y su propio concepto. El resultado es una superposición de géneros que a las 2 de la madrugada ya no se distingue como géneros separados sino como un ecosistema acústico propio. Funciona si tienes la actitud correcta, que es no tener expectativas de coherencia musical.",
          en: "Three blocks with fifteen bars each, their own DJs, their own sound systems and their own concept. The result is an overlap of genres that by 2am can no longer be distinguished as separate but as its own acoustic ecosystem. Works if you have the right attitude — no expectations of musical coherence.",
        },
        rating: 4.3, priceRange: "Libre",
        affiliateLinks: [
          { label: { es: "Tour nocturno Bangla Road Phuket", en: "Bangla Road Phuket night tour" }, partner: "getyourguide", query: "bangla road phuket nightlife tour", type: "activity" },
        ],
      },
      {
        name: "Phuket Old Town",
        type: "Barrio",
        lat: 7.8855, lng: 98.3920,
        description: {
          es: "Casas sino-portuguesas del siglo XIX pintadas en colores pastel, cafeterías con café tailandés frío que sabe mejor de lo que ninguna descripción puede capturar, galerías de arte local y calles donde la vida transcurre sin la aceleración turística de Patong. La calle Thalang y la calle Dibuk tienen la mayor concentración de edificios bien conservados.",
          en: "19th-century Sino-Portuguese houses painted in pastel colours, cafés with cold Thai coffee that tastes better than any description can capture, local art galleries and streets where life moves without Patong's tourist acceleration. Thalang Road and Dibuk Road have the highest concentration of well-preserved buildings.",
        },
        rating: 4.7, priceRange: "Libre",
        affiliateLinks: [
          { label: { es: "Tour a pie Phuket Old Town", en: "Phuket Old Town walking tour" }, partner: "getyourguide", query: "phuket old town walking tour sino portuguese heritage", type: "activity" },
        ],
      },
      {
        name: "Playa de Patong",
        type: "Playa",
        lat: 7.8960, lng: 98.2972,
        description: {
          es: "La playa más famosa de Phuket y la más concurrida. Tres kilómetros de arena blanca con aguas cálidas, deportes acuáticos, tumbonas en cada centímetro y chiringuitos con precios que van de razonables a astronómicos según lo cerca del mar que estés. La playa de Kata o Karon, 15 minutos al sur, es más tranquila y casi igual de bonita.",
          en: "Phuket's most famous beach and its most crowded. Three kilometres of white sand with warm waters, water sports, sunbeds on every centimetre and beach bars with prices ranging from reasonable to astronomical depending on how close to the sea you are. Kata or Karon beach, 15 minutes south, is quieter and almost as beautiful.",
        },
        rating: 4.4, priceRange: "Libre",
        affiliateLinks: [
          { label: { es: "Actividades acuáticas en Patong", en: "Patong water activities" }, partner: "getyourguide", query: "patong beach water sports phuket snorkel", type: "activity" },
        ],
      },
      {
        name: "Big Buddha",
        type: "Monumento",
        lat: 7.8278, lng: 98.3088,
        description: {
          es: "45 metros de mármol blanco en la colina de Nakkerd, visible desde casi cualquier punto de la isla. El camino hasta arriba en moto — alquila una por 200 baht al día — tiene vistas panorámicas sobre la costa oeste que justifican el trayecto aunque los templos no te digan nada en particular. Entrada gratuita.",
          en: "45 metres of white marble on Nakkerd Hill, visible from almost anywhere on the island. The road up by motorbike — rent one for 200 baht a day — has panoramic views over the west coast that justify the journey even if temples don't particularly speak to you. Free entry.",
        },
        rating: 4.5, priceRange: "Gratis",
        affiliateLinks: [
          { label: { es: "Tour en moto por Phuket con Big Buddha", en: "Phuket motorbike tour with Big Buddha" }, partner: "getyourguide", query: "phuket big buddha viewpoints island tour", type: "activity" },
        ],
      },
    ],
    events: [
      {
        name: "Festival Vegetariano de Phuket 2026",
        type: "cultural",
        date: "2–11 Oct 2026",
        venue: "Phuket Old Town y templos chinos",
        urgency: false,
        description: {
          es: "Nueve días en los que Phuket Old Town se transforma en un festival religioso taoísta de una intensidad que no esperabas en absoluto. Las procesiones con penitentes que se perforan las mejillas con objetos metálicos, los altares con ofrendas en cada esquina y el aroma a incienso cubriendo el Old Town son una experiencia completamente distinta a la imagen turística habitual de Phuket. Estrictamente vegetariano durante los nueve días.",
          en: "Nine days in which Phuket Old Town transforms into a Taoist religious festival of an intensity you absolutely didn't expect. Processions with penitents piercing their cheeks with metal objects, offering altars on every corner and incense covering the Old Town are a completely different experience from Phuket's usual tourist image. Strictly vegetarian for all nine days.",
        },
        affiliateLinks: [
          { label: { es: "Tour Festival Vegetariano Phuket", en: "Phuket Vegetarian Festival tour" }, partner: "getyourguide", query: "phuket vegetarian festival october cultural tour", type: "activity" },
        ],
      },
      {
        name: "Full Moon Party — Koh Phangan",
        type: "festival",
        date: "Mensual (luna llena)",
        venue: "Haad Rin Beach, Koh Phangan",
        urgency: false,
        description: {
          es: "Técnicamente no está en Phuket, pero está a dos horas en ferry desde el sur de la isla y merece mencionarse porque es el motivo real por el que muchos vienen a esta parte de Tailandia. Diez mil personas bailando en la playa hasta el amanecer con sound systems que tocan house, reggaeton, dubstep y hardstyle en zonas separadas. Va una vez. Si vas dos veces, ya sabes por qué.",
          en: "Technically not in Phuket, but two hours by ferry from the south of the island and worth mentioning because it's the real reason many people come to this part of Thailand. Ten thousand people dancing on the beach until sunrise with sound systems playing house, reggaeton, dubstep and hardstyle in separate zones. Go once. If you go twice, you already know why.",
        },
        affiliateLinks: [
          { label: { es: "Ferry Phuket a Koh Phangan Full Moon", en: "Phuket to Koh Phangan Full Moon ferry" }, partner: "getyourguide", query: "koh phangan full moon party ferry phuket", type: "activity" },
        ],
      },
      {
        name: "Réveillon en Patong 2026",
        type: "cultural",
        date: "31 Dic 2026",
        venue: "Patong Beach, Phuket",
        urgency: false,
        description: {
          es: "La playa de Patong en Nochevieja tiene fuegos artificiales sobre el mar, music stages en la arena y Bangla Road multiplicada por diez. No es el evento más íntimo del mundo — está al mismo nivel de masificación que Copacabana o Dubái — pero la combinación de playa tropical, temperatura perfecta y el caos organizado de Phuket a máxima potencia tiene su propio atractivo.",
          en: "Patong beach on New Year's Eve has fireworks over the sea, music stages on the sand and Bangla Road multiplied by ten. It's not the most intimate event in the world — the crowds match Copacabana or Dubai — but the combination of tropical beach, perfect temperature and Phuket's organised chaos at full power has its own appeal.",
        },
        affiliateLinks: [
          { label: { es: "Hotel en Phuket para Nochevieja", en: "Phuket New Year's Eve hotel" }, partner: "booking", query: "phuket patong beach hotel new year's eve december", type: "hotel" },
        ],
      },
    ],
    services: {
      flights: ["skyscanner", "kiwi"],
      hotels: ["booking", "hostelworld"],
      activities: ["getyourguide", "viator", "klook"],
      insurance: ["safetywing", "worldnomads"],
      esim: ["airalo", "saily", "yesim"],
      transfers: ["intui", "welcomepickups", "indrive"],
    },
    content: {
      es: `Lo voy a decir así, sin rodeos: Phuket no es para todo el mundo. Y lo digo como alguien que ha ido dos veces.

La primera vez llegué con la idea de que iba a ser una semana de playas paradisíacas, templos tranquilos y comida increíble. Todo eso es verdad. También es verdad que Bangla Road a la una de la mañana tiene la energía de tres festivales simultáneos servidos a través de altavoces de dudosa calidad, y que Patong en julio tiene una densidad de tumbona por metro cuadrado que hace que cualquier playa española en agosto parezca un paraje solitario.

La segunda vez lo entendí. Phuket funciona si sabes dónde estar y cuándo.

Las Islas Phi Phi son el motivo por el que la mitad de la gente viene. La bahía Maya Bay — la de la película La Playa — es espectacularmente hermosa aunque hayas visto la foto mil veces. El agua tiene esa transparencia turquesa imposible que solo existe en Tailandia. {{CTA:activity:getyourguide:phi phi islands boat tour phuket maya bay:Tour en barco a las Islas Phi Phi}} — la diferencia entre salir a las 7 de la mañana antes de que lleguen los tours masivos y llegar a las 10 es la diferencia entre tener la bahía para ti solo y compartirla con ochocientas personas haciéndose exactamente la misma foto. Invierto en el madrugón.

Bangla Road por la noche es uno de los espectáculos más absurdos y fascinantes que he visto en ningún lugar. Tres cuadras con quince bares por cuadra, cada uno con sus propios DJs y su propio sistema de sonido. El resultado es una superposición de reggaeton, EDM, pop tailandés, rock clásico y drum and bass que a las 2 de la madrugada ya no se distingue como géneros separados sino como un ecosistema acústico propio. Funciona si tienes la actitud correcta. La actitud correcta es no tener expectativas de coherencia musical y disfrutar el caos con un Chang en la mano.

Phuket Old Town es el antídoto a Patong y merece al menos medio día. Casas sino-portuguesas del siglo XIX en colores pastel, cafeterías con café tailandés frío que sabe mejor de lo que ninguna descripción puede capturar y galerías de arte local. {{CTA:activity:getyourguide:phuket old town walking tour sino portuguese heritage:Tour a pie por el Phuket Old Town}}. La calle Thalang tiene los edificios mejor conservados y los murales de arte urbano más fotogénicos de la isla.

El Big Buddha en la colina de Nakkerd se ve desde casi cualquier punto de la isla. 45 metros de mármol blanco mirando al mar. El camino hasta arriba en moto — alquila una por 200 baht al día, menos de 6 euros — tiene vistas que justifican el trayecto incluso si los templos no te dicen nada. Las vistas panorámicas sobre la costa oeste desde la cima son de las mejores de Tailandia.

La comida: el pad thai de los puestos de calle a 50 baht (menos de 1,50€) es completamente distinto a la versión de restaurante de ciudad europea. El curry masaman con pollo es posiblemente el plato tailandés más infravalorado en el exterior. Los mercados nocturnos — especialmente el Chillva Market en el norte de Phuket — tienen la mejor selección de comida local a precios que todavía sorprenden a quien viene de Europa.

Para moverte por la isla, {{CTA:service:airalo:airalo esim thailand:Una eSIM de Airalo para Tailandia}} desde el aeropuerto — la app de Grab (el Uber tailandés) necesita datos para funcionar y es la forma de gestionar traslados sin pagar precio de turista. {{CTA:hotel:booking:phuket kata karon beach hotel:Compara hoteles en Phuket Kata y Karon}} — la diferencia de precio entre primera línea de Patong y hoteles a dos calles es significativa, y Kata o Karon son más tranquilas y casi igual de bonitas.

El Festival Vegetariano de Phuket en octubre es una de las experiencias más intensas y completamente inesperadas de toda la región. Nueve días en los que el Old Town se convierte en un festival religioso taoísta con procesiones que no vas a olvidar. Vale el viaje por sí solo.`,

      en: `I'll say it plainly: Phuket isn't for everyone. And I say that as someone who's been twice.

The first time I arrived expecting a week of paradise beaches, peaceful temples and incredible food. All of that is true. It's also true that Bangla Road at 1am has the energy of three simultaneous festivals served through questionable speakers, and that Patong in July has a sunbed-per-square-metre density that makes any Spanish beach in August look like a secluded nature spot.

The second time I understood it. Phuket works if you know where to be and when.

The Phi Phi Islands are why half the people come. Maya Bay — the one from The Beach — is spectacularly beautiful even if you've seen the photo a thousand times. The water has that impossible turquoise transparency that only exists in Thailand. {{CTA:activity:getyourguide:phi phi islands boat tour phuket maya bay:Phi Phi Islands boat tour}} — the difference between leaving at 7am before the mass tours arrive and getting there at 10am is the difference between having the bay to yourself and sharing it with eight hundred people taking the exact same photograph. I invest in the early start.

Bangla Road at night is one of the most absurd and fascinating spectacles I've seen anywhere. Three blocks with fifteen bars each, their own DJs and their own sound systems. The result is an overlap of reggaeton, EDM, Thai pop, classic rock and drum and bass that by 2am can no longer be distinguished as separate genres but as its own acoustic ecosystem. Works if you have the right attitude — no expectations of musical coherence, a Chang beer in hand, and the understanding that this is Phuket operating at full capacity.

Phuket Old Town is the antidote to Patong and deserves at least half a day. 19th-century Sino-Portuguese houses in pastel colours, cafés with cold Thai coffee that tastes better than any description can capture, local art galleries. {{CTA:activity:getyourguide:phuket old town walking tour sino portuguese heritage:Phuket Old Town walking tour}}. Thalang Road has the best-preserved buildings and the most photogenic street murals on the island.

The Big Buddha on Nakkerd Hill is visible from almost anywhere on the island. 45 metres of white marble looking out to sea. The road up by motorbike — rent one for 200 baht a day, under €6 — has views that justify the journey even if temples don't particularly speak to you.

The food: street pad thai at 50 baht (under €1.50) is completely different from the restaurant version in a European city. Massaman curry with chicken is possibly the most underrated Thai dish internationally. Night markets — especially Chillva Market in northern Phuket — have the best selection of local food at prices that still surprise anyone coming from Europe.

To get around the island, {{CTA:service:airalo:airalo esim thailand:An Airalo eSIM for Thailand}} from the airport — the Grab app (Thai Uber) needs data to work and is the way to manage transfers without tourist pricing. {{CTA:hotel:booking:phuket kata karon beach hotel:Compare hotels in Phuket Kata and Karon}} — the price difference between first-line Patong hotels and hotels two streets back is significant, and Kata or Karon are quieter and almost as beautiful.

The Phuket Vegetarian Festival in October is one of the most intense and completely unexpected experiences in the entire region. Nine days in which the Old Town becomes a Taoist religious festival with processions you won't forget. Worth the trip on its own.`,
    },
    faq: {
      es: [
        { question: "¿Cuál es la mejor época para ir a Phuket?", answer: "La temporada seca va de noviembre a abril, con el mejor tiempo entre diciembre y marzo. La temporada de lluvias (mayo-octubre) tiene aguaceros intensos pero cortos y precios notablemente más bajos. Julio y agosto tienen oleaje alto en la costa oeste (Patong, Kata, Karon) — ideal para surf, menos para baño tranquilo. La costa este (Rawai, Chalong) es más tranquila en verano." },
        { question: "¿Es seguro alquilar una moto en Phuket?", answer: "Es la forma más eficiente de moverse por la isla y la mayoría de viajeros lo hace. Las carreteras principales están bien asfaltadas. Lleva siempre casco (obligatorio y hay controles), conduce con precaución especialmente en días de lluvia, y no tomes las curvas de montaña a velocidad — las vistas distraen. El seguro de viaje que cubra accidentes de moto es imprescindible. SafetyWing y World Nomads cubren motos." },
        { question: "¿Cuánto cuesta una semana en Phuket?", answer: "Phuket tiene un rango muy amplio. Presupuesto ajustado: 40-60€/día (hostal, comida de mercado, moto propia). Medio: 80-120€/día (hotel de calidad, restaurantes normales, tours). Cómodo: 150-300€/día (resort, tours privados, restaurantes internacionales). Las Islas Phi Phi en tour organizado cuestan entre 35 y 70€ por persona." },
      ],
      en: [
        { question: "When is the best time to visit Phuket?", answer: "The dry season runs November to April, with the best weather from December to March. Rainy season (May-October) has intense but short downpours and notably lower prices. July and August have high surf on the west coast (Patong, Kata, Karon) — ideal for surfing, less so for calm swimming. The east coast (Rawai, Chalong) is calmer in summer." },
        { question: "Is it safe to rent a motorbike in Phuket?", answer: "It's the most efficient way to get around the island and most travellers do it. Main roads are well-paved. Always wear a helmet (mandatory and there are checkpoints), drive carefully especially on rainy days, and don't take mountain bends at speed — the views are distracting. Travel insurance covering motorbike accidents is essential. SafetyWing and World Nomads cover motorbikes." },
        { question: "How much does a week in Phuket cost?", answer: "Phuket has a very wide range. Budget: €40-60/day (hostel, market food, own motorbike). Mid-range: €80-120/day (quality hotel, regular restaurants, tours). Comfortable: €150-300/day (resort, private tours, international restaurants). The Phi Phi Islands tour costs between €35 and €70 per person." },
      ],
    },
  },

  // ─────────────────────────────────────────────
  // RÍO DE JANEIRO
  // ─────────────────────────────────────────────
  {
    id: "rio-guide-2026",
    slug: "rio-de-janeiro-guia-2026",
    enSlug: "rio-de-janeiro-travel-guide-2026",
    narrator: "sofia",
    heroImage: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=2070&auto=format&fit=crop",
    city: "Río de Janeiro",
    country: { es: "Brasil", en: "Brazil" },
    emoji: "🇧🇷",
    date: "2026-03-12",
    readTime: "9 min",
    category: "america",
    title: {
      es: "Río de Janeiro 2026: La ciudad que siempre sale mejor de lo que planeas",
      en: "Rio de Janeiro 2026: The City That Always Turns Out Better Than You Plan",
    },
    subtitle: {
      es: "Cristo Redentor, Copacabana, Lapa de noche y por qué la hoja de cálculo siempre queda a medias",
      en: "Christ the Redeemer, Copacabana, Lapa at night and why the spreadsheet always falls apart",
    },
    excerpt: {
      es: "Tenía un Google Sheet con tres pestañas, dieciséis marcadores en Chrome y una carpeta de Instagram con 273 publicaciones. Llegué al aeropuerto, tomé el taxi equivocado y llegué al hotel correcto por error.",
      en: "I had a Google Sheet with three tabs, sixteen Chrome bookmarks and an Instagram folder with 273 posts. I arrived at the airport, took the wrong taxi, and ended up at the right hotel by mistake.",
    },
    metaDescription: {
      es: "Guía de Río de Janeiro 2026: Cristo Redentor, Copacabana, Ipanema, Lapa y Santa Teresa. Rock in Rio 2026 y Carnaval. Todo lo que necesitas para planear tu viaje a Brasil.",
      en: "Rio de Janeiro guide 2026: Christ the Redeemer, Copacabana, Ipanema, Lapa and Santa Teresa. Rock in Rio 2026 and Carnival. Everything you need to plan your Brazil trip.",
    },
    keywords: {
      es: ["rio de janeiro 2026", "que ver en rio", "cristo redentor", "copacabana", "rock in rio 2026"],
      en: ["rio de janeiro 2026", "what to see in rio", "christ the redeemer", "copacabana", "rock in rio 2026"],
    },
    pointsOfInterest: [
      {
        name: "Cristo Redentor",
        type: "Monumento",
        lat: -22.9519, lng: -43.2105,
        description: {
          es: "En persona es más grande de lo que recuerdas aunque nunca lo hayas visto — ocupa el cielo de una manera que en fotos no se transmite. Sube a primera hora de la mañana antes de que lleguen las nubes, que en Río llegan con puntualidad de cónsul europeo a media mañana y se llevan las vistas consigo.",
          en: "In person it's larger than you remember despite never having seen it — it occupies the sky in a way photographs don't transmit. Go first thing in the morning before the clouds arrive, which in Rio come in with the punctuality of a European diplomat around mid-morning and take the views with them.",
        },
        rating: 4.9, priceRange: "€20",
        affiliateLinks: [
          { label: { es: "Entrada Cristo Redentor sin esperas", en: "Christ the Redeemer skip-the-queue ticket" }, partner: "tiqets", query: "christ the redeemer rio de janeiro ticket skip queue", type: "tickets" },
          { label: { es: "Tour Cristo Redentor + Sugarloaf", en: "Christ the Redeemer + Sugarloaf tour" }, partner: "civitatis", query: "christ redeemer sugarloaf rio de janeiro tour", type: "activity" },
        ],
      },
      {
        name: "Copacabana e Ipanema",
        type: "Playa",
        lat: -22.9711, lng: -43.1819,
        description: {
          es: "Las dos playas son distintas. Copacabana es más democrática, ruidosa, con vendedores de caipirinha ambulantes. Ipanema es más ordenada con la montaña de los Dos Hermanos de fondo. La Pedra do Arpoador — la roca entre las dos playas — tiene las mejores puestas de sol de la ciudad y un aplauso colectivo cada tarde cuando el sol toca el horizonte. No es una metáfora: ocurre.",
          en: "The two beaches are different. Copacabana is more democratic, noisier, with roving caipirinha vendors. Ipanema is more ordered with the Two Brothers mountain as backdrop. Pedra do Arpoador — the rock between the two beaches — has the best sunsets in the city and a collective round of applause each evening when the sun touches the horizon. This is not a metaphor: it happens.",
        },
        rating: 4.8, priceRange: "Libre",
        affiliateLinks: [
          { label: { es: "Tour playas de Río e Ipanema", en: "Rio beaches and Ipanema tour" }, partner: "getyourguide", query: "ipanema copacabana beach tour rio de janeiro", type: "activity" },
        ],
      },
      {
        name: "Lapa",
        type: "Barrio",
        lat: -22.9104, lng: -43.1780,
        description: {
          es: "El barrio de la samba en vivo. Los Arcos da Lapa — el acueducto del siglo XVIII convertido en viaducto del tranvía — iluminados de noche con música saliendo de los bares del entorno. El Carioca da Gema tiene samba en vivo hasta las 2 de la madrugada. Fui con intención de quedarme hasta las 11 y salí a las 3 — el spreadsheet decía que el martes era el día de descanso.",
          en: "The live samba neighbourhood. The Arcos da Lapa — the 18th-century aqueduct converted into a tram viaduct — illuminated at night with music spilling from surrounding bars. The Carioca da Gema has live samba until 2am. I went planning to stay until 11 and left at 3 — the spreadsheet said Tuesday was supposed to be a rest day.",
        },
        rating: 4.7, priceRange: "Libre",
        affiliateLinks: [
          { label: { es: "Tour de samba en vivo por Lapa", en: "Lapa live samba night tour" }, partner: "getyourguide", query: "lapa samba night tour rio de janeiro live music", type: "activity" },
        ],
      },
      {
        name: "Santa Teresa",
        type: "Barrio",
        lat: -22.9249, lng: -43.1850,
        description: {
          es: "El barrio bohemio en las colinas sobre el centro: las mejores galerías de arte independientes, restaurantes con mejor relación calidad-precio de la ciudad y el tranvía histórico — el bonde — que sube serpenteando entre casas de colores. El punto de vista desde el Parque das Ruínas tiene una de las mejores panorámicas de la bahía de Guanabara.",
          en: "The bohemian neighbourhood on the hills above the centre: the best independent art galleries, restaurants with the best value for money in the city, and the historic tram — the bonde — winding up between coloured houses. The viewpoint at Parque das Ruínas has one of the best panoramas of Guanabara Bay.",
        },
        rating: 4.6, priceRange: "Libre",
        affiliateLinks: [
          { label: { es: "Tour por Santa Teresa y arte local", en: "Santa Teresa and local art tour" }, partner: "getyourguide", query: "santa teresa rio de janeiro art gallery bohemian tour", type: "activity" },
        ],
      },
      {
        name: "Pan de Azúcar (Pão de Açúcar)",
        type: "Mirador",
        lat: -22.9489, lng: -43.1555,
        description: {
          es: "Dos teleféricos hasta la cima del Pan de Azúcar, con vistas a Copacabana, el Cristo Redentor, la bahía de Guanabara y el Atlántico. Al atardecer, con el cielo naranja sobre la ciudad, es de los mejores miradores de América del Sur. El segundo teleférico, entre el Morro da Urca y la cima, tiene las mejores vistas del trayecto.",
          en: "Two cable cars to the top of Sugarloaf Mountain, with views of Copacabana, Christ the Redeemer, Guanabara Bay and the Atlantic. At sunset, with an orange sky over the city, it's one of the best viewpoints in South America. The second cable car, between Morro da Urca and the summit, has the best views of the journey.",
        },
        rating: 4.8, priceRange: "€25",
        affiliateLinks: [
          { label: { es: "Teleférico Pan de Azúcar entrada sin cola", en: "Sugarloaf Mountain cable car skip-the-line" }, partner: "tiqets", query: "sugarloaf mountain pao de acucar cable car rio skip line", type: "tickets" },
        ],
      },
    ],
    events: [
      {
        name: "Rock in Rio 2026",
        type: "festival",
        date: "Sep–Oct 2026",
        venue: "Cidade do Rock, Río de Janeiro",
        urgency: true,
        description: {
          es: "El mayor festival de música de América Latina regresa a Río. La Cidade do Rock en la zona norte de la ciudad se convierte en una ciudad dentro de la ciudad durante varios fines de semana. Cartel internacional de primera división con los artistas más grandes del pop, rock, electrónica y hip-hop globales. Los días sin headliner tienen entradas más accesibles y el ambiente es idéntico.",
          en: "The largest music festival in Latin America returns to Rio. The Cidade do Rock in the northern zone becomes a city within a city for several weekends. Top-tier international lineup featuring the biggest names in pop, rock, electronic and global hip-hop. Days without a headliner have more accessible tickets and the atmosphere is identical.",
        },
        affiliateLinks: [
          { label: { es: "Entradas Rock in Rio 2026", en: "Rock in Rio 2026 tickets" }, partner: "ticketmaster", query: "rock in rio 2026 festival tickets brasil", type: "tickets" },
          { label: { es: "Hotel en Río para Rock in Rio", en: "Rio hotel for Rock in Rio" }, partner: "booking", query: "rio de janeiro hotel rock in rio september 2026", type: "hotel" },
        ],
      },
      {
        name: "Carnaval do Rio 2027",
        type: "festival",
        date: "Feb 2027",
        venue: "Sambódromo y toda la ciudad",
        urgency: true,
        description: {
          es: "El espectáculo más elaborado del mundo. Los desfiles de las escolas de samba en el Sambódromo son una producción de escala cinematográfica imposible de describir adecuadamente sin haberla visto. Compra con muchos meses de antelación — las mejores entradas para el Sambódromo se agotan antes de que acabe el carnaval anterior. Los blocos de calle (gratuitos) son otra forma completamente distinta de vivirlo.",
          en: "The most elaborate spectacle in the world. The samba school parades in the Sambódromo are a cinematic-scale production impossible to adequately describe without having seen it. Buy many months in advance — the best Sambódromo tickets sell out before the previous carnival ends. The street blocos (free) are a completely different way of experiencing it.",
        },
        affiliateLinks: [
          { label: { es: "Experiencia Sambódromo Carnaval de Río", en: "Rio Carnival Sambódromo experience" }, partner: "getyourguide", query: "rio carnival sambodromo experience 2027 samba parade", type: "activity" },
        ],
      },
      {
        name: "Réveillon de Copacabana 2026",
        type: "cultural",
        date: "31 Dic 2026",
        venue: "Playa de Copacabana",
        urgency: false,
        description: {
          es: "Dos millones de personas vestidas de blanco en la playa de Copacabana mirando los fuegos artificiales sobre el mar a medianoche. Una de las celebraciones de Año Nuevo más grandes del mundo, gratuita y al aire libre. La tradición de ofrecer flores al mar (para Iemanjá, la diosa del mar en el candomblé) le da una dimensión que va más allá del turismo de masas.",
          en: "Two million people dressed in white on Copacabana beach watching fireworks over the sea at midnight. One of the world's largest New Year's Eve celebrations, free and outdoors. The tradition of offering flowers to the sea (to Iemanjá, the candomblé sea goddess) gives it a dimension that goes beyond mass tourism.",
        },
        affiliateLinks: [
          { label: { es: "Hotel en Copacabana para Nochevieja", en: "Copacabana hotel for New Year's Eve" }, partner: "booking", query: "copacabana hotel new year's eve rio december 2026", type: "hotel" },
        ],
      },
    ],
    services: {
      flights: ["skyscanner", "kiwi"],
      hotels: ["booking", "hostelworld", "vrbo"],
      cars: ["discovercars", "rentalcars"],
      activities: ["getyourguide", "viator", "civitatis", "tiqets"],
      insurance: ["safetywing", "worldnomads"],
      esim: ["airalo", "saily"],
      transfers: ["intui", "welcomepickups", "indrive"],
    },
    content: {
      es: `Tenía un Google Sheet con tres pestañas, dieciséis marcadores guardados en Chrome y una carpeta de Instagram con doscientas setenta y tres publicaciones de Río. Llegué al aeropuerto de Galeão, tomé el taxi equivocado, llegué al hotel correcto por error y descubrí que la habitación tenía vistas al océano que no aparecían en ninguna de mis referencias. Esta es, más o menos, la dinámica de Río.

El Cristo Redentor es la imagen que ya tienes aunque no hayas ido. Los brazos abiertos, la ciudad abajo, la bahía al fondo. En persona es más grande de lo que recuerdas aunque nunca lo hayas visto en directo — ocupa el cielo de una manera que en fotos no se transmite. {{CTA:tickets:tiqets:christ the redeemer rio de janeiro ticket skip queue:Entrada al Cristo Redentor sin esperas}} — la caja rápida ahorra entre 45 y 90 minutos en días de alta afluencia. Sube a primera hora de la mañana antes de que lleguen las nubes, que en Río llegan con puntualidad de cónsul europeo a media mañana y se llevan las vistas consigo.

Copacabana y Ipanema son las dos playas urbanas más famosas del mundo y son distintas. Copacabana es más democrática, más ruidosa, con vendedores de caipirinha ambulantes y churrascos que funcionan como restaurantes informales en la arena. Ipanema es más ordenada, con la montaña de los Dos Hermanos de fondo. La Pedra do Arpoador — la roca entre las dos playas — tiene las mejores puestas de sol de la ciudad. {{CTA:activity:getyourguide:ipanema copacabana beach tour rio de janeiro:Tour por las playas de Río e Ipanema}}. La tradición del aplauso cuando el sol toca el horizonte no es una metáfora: ocurre cada tarde y participa quien está allí, sin distinción.

Lapa de noche es el barrio de la samba en vivo. Los Arcos da Lapa — el acueducto del siglo XVIII — iluminados de noche con la música saliendo de los bares del entorno es de esas combinaciones que solo funcionan en esta ciudad. {{CTA:activity:getyourguide:lapa samba night tour rio de janeiro live music:Tour de samba en vivo por Lapa}}. El Carioca da Gema tiene samba hasta las 2 de la madrugada. Fui con la intención de quedarme hasta las 11 y salí a las 3 — el spreadsheet decía que el martes era el día de descanso. El spreadsheet, como siempre, tenía una visión demasiado optimista.

Santa Teresa, el barrio bohemio en las colinas sobre el centro, tiene las mejores galerías de arte independientes de la ciudad, los restaurantes con mejor relación calidad-precio y el tranvía histórico que sube serpenteando entre casas de colores. {{CTA:activity:getyourguide:santa teresa rio de janeiro art gallery bohemian tour:Tour por Santa Teresa y arte local}}. El punto de vista desde el Parque das Ruínas tiene una de las mejores panorámicas de la bahía de Guanabara — menos conocido que el Pan de Azúcar y completamente gratuito.

El Pan de Azúcar, con sus dos teleféricos hasta la cima, da las mejores vistas del conjunto de la ciudad: Copacabana al sur, el Cristo al norte, la bahía en el centro y el Atlántico en el horizonte. {{CTA:tickets:tiqets:sugarloaf mountain pao de acucar cable car rio skip line:Entrada al teleférico del Pan de Azúcar sin cola}} — al atardecer tiene el mejor espectáculo de luz de toda la ciudad.

Rock in Rio regresa en septiembre de 2026. {{CTA:tickets:ticketmaster:rock in rio 2026 festival tickets brasil:Entradas Rock in Rio 2026}} — varios fines de semana en la Cidade do Rock con los artistas más grandes del pop y rock globales. Los días sin headliner tienen entradas más accesibles y el ambiente es igual de intenso.

Nota práctica: Río tiene zonas con diferencias de seguridad significativas. Las áreas turísticas principales — Ipanema, Leblon, Copacabana, Santa Teresa, el centro histórico — son razonablemente seguras con el nivel habitual de atención en cualquier ciudad grande. No muestres el móvil o la cámara en la calle sin necesidad. Los taxis oficiales y las apps (99, Uber) son la forma de moverse de noche. {{CTA:service:airalo:airalo esim brazil:Una eSIM de Airalo para Brasil}} funciona bien en toda la zona sur de la ciudad y desde el aeropuerto. {{CTA:service:safetywing:safetywing travel insurance brazil:SafetyWing}} para el seguro — Brasil requiere atención médica de calidad y el seguro estándar de la tarjeta no siempre cubre las contingencias reales.`,

      en: `I had a Google Sheet with three tabs, sixteen Chrome bookmarks and an Instagram folder with two hundred and seventy-three posts about Rio. I arrived at Galeão airport, took the wrong taxi, ended up at the right hotel by mistake and discovered my room had ocean views that didn't appear in any of my references. This is, more or less, Rio's dynamic.

Christ the Redeemer is the image you already have even if you've never been. Arms open, city below, bay behind. In person it's larger than you remember despite never having seen it — it occupies the sky in a way photographs don't transmit. {{CTA:tickets:tiqets:christ the redeemer rio de janeiro ticket skip queue:Christ the Redeemer skip-the-queue ticket}} — the fast lane saves 45-90 minutes on busy days. Go first thing in the morning before the clouds arrive, which in Rio come in with the punctuality of a European diplomat around mid-morning and take the views with them.

Copacabana and Ipanema are the two most famous urban beaches in the world and they're different. Copacabana is more democratic, noisier, with roving caipirinha vendors and churrasco stands functioning as informal restaurants on the sand. Ipanema is more ordered, with the Two Brothers mountain as backdrop. Pedra do Arpoador — the rock between the two beaches — has the best sunsets in the city. {{CTA:activity:getyourguide:ipanema copacabana beach tour rio de janeiro:Rio beaches and Ipanema tour}}. The sunset applause tradition isn't a metaphor: it happens every evening, and whoever happens to be there participates, without distinction.

Lapa at night is the live samba neighbourhood. The Arcos da Lapa — the 18th-century aqueduct — illuminated at night with music spilling from surrounding bars is one of those combinations that only work in this city. {{CTA:activity:getyourguide:lapa samba night tour rio de janeiro live music:Lapa live samba night tour}}. The Carioca da Gema has samba until 2am. I went planning to stay until 11 and left at 3 — the spreadsheet said Tuesday was supposed to be a rest day. The spreadsheet, as always, had an overly optimistic worldview.

Santa Teresa, the bohemian neighbourhood on the hills above the centre, has the city's best independent art galleries, restaurants with the best value for money, and the historic tram that winds up between coloured houses. {{CTA:activity:getyourguide:santa teresa rio de janeiro art gallery bohemian tour:Santa Teresa and local art tour}}. The viewpoint at Parque das Ruínas has one of the best panoramas of Guanabara Bay — less well known than Sugarloaf and completely free.

Sugarloaf Mountain, with its two cable cars to the summit, gives the best views of the city as a whole: Copacabana to the south, Christ to the north, the bay in the centre and the Atlantic on the horizon. {{CTA:tickets:tiqets:sugarloaf mountain pao de acucar cable car rio skip line:Sugarloaf cable car skip-the-queue ticket}} — at sunset it offers the best light show in the entire city.

Rock in Rio returns in September 2026. {{CTA:tickets:ticketmaster:rock in rio 2026 festival tickets brasil:Rock in Rio 2026 tickets}} — several weekends at the Cidade do Rock with the biggest names in global pop and rock. Days without a headliner have more accessible tickets and the atmosphere is equally intense.

Practical note: Rio has areas with significant security differences. The main tourist areas — Ipanema, Leblon, Copacabana, Santa Teresa, the historic centre — are reasonably safe with the normal level of attention required in any large city. Don't display your phone or camera on the street without reason. Official taxis and apps (99, Uber) are the way to move at night. {{CTA:service:airalo:airalo esim brazil:An Airalo eSIM for Brazil}} works well throughout the city's southern zone and from the airport. {{CTA:service:safetywing:safetywing travel insurance brazil:SafetyWing}} for insurance — Brazil requires quality medical care and the standard card insurance doesn't always cover real contingencies.`,
    },
    faq: {
      es: [
        { question: "¿Es seguro viajar a Río de Janeiro?", answer: "Las zonas turísticas principales (Ipanema, Leblon, Copacabana, Santa Teresa, el centro histórico) son razonablemente seguras con las precauciones habituales de cualquier ciudad grande: no mostrar objetos de valor en la calle, usar taxis o apps (no parar taxis de la calle por la noche), ser consciente del entorno. Evita las zonas que no conoces de noche sin orientación local." },
        { question: "¿Cuándo es el Carnaval de Río 2027?", answer: "El Carnaval de Río 2027 será en febrero de 2027 (fecha exacta depende del calendario litúrgico). Las entradas para el Sambódromo se ponen a la venta con muchos meses de antelación y las mejores categorías se agotan rápido. Los blocos de calle son gratuitos y no requieren entrada — son otra forma completamente válida y más carioca de vivirlo." },
        { question: "¿Cómo ir del aeropuerto al hotel en Río?", answer: "El aeropuerto de Galeão (GIG, internacional) está al norte de la ciudad. Taxi oficial o Uber hasta Ipanema/Copacabana: 40-60 minutos y 30-50€ según tráfico. Evita los taxistas informales en la puerta de llegadas — usa los mostradores oficiales de taxi dentro del aeropuerto o pide el Uber desde dentro del edificio. El aeropuerto Santos Dumont (SDU, vuelos domésticos) está mucho más cerca del centro." },
      ],
      en: [
        { question: "Is it safe to travel to Rio de Janeiro?", answer: "The main tourist areas (Ipanema, Leblon, Copacabana, Santa Teresa, the historic centre) are reasonably safe with the normal precautions of any large city: don't display valuables on the street, use taxis or apps (don't hail street taxis at night), be aware of your surroundings. Avoid unfamiliar areas at night without local guidance." },
        { question: "When is Rio Carnival 2027?", answer: "Rio Carnival 2027 will be in February 2027 (exact date depends on the liturgical calendar). Sambódromo tickets go on sale many months in advance and the best categories sell out quickly. Street blocos are free and require no ticket — they're a completely valid and more carioca way to experience it." },
        { question: "How to get from the airport to the hotel in Rio?", answer: "Galeão Airport (GIG, international) is in the north of the city. Official taxi or Uber to Ipanema/Copacabana: 40-60 minutes and €30-50 depending on traffic. Avoid informal taxi drivers at the arrivals door — use the official taxi desks inside the airport or request Uber from inside the building. Santos Dumont Airport (SDU, domestic flights) is much closer to the centre." },
      ],
    },
  },

  // ─────────────────────────────────────────────
  // París
  // ─────────────────────────────────────────────
  {
    id: "paris-guide-2026",
    slug: "paris-guia-2026",
    enSlug: "paris-travel-guide-2026",
    narrator: "carmen",
    heroImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2070&auto=format&fit=crop",
    city: "París",
    country: { es: "Francia", en: "France" },
    emoji: "🇫🇷",
    date: "2026-03-12",
    readTime: "9 min",
    category: "europe",
    title: {
      es: "París 2026: La guía que no te va a mentir sobre la Gioconda",
      en: "Paris 2026: The Guide That Won't Lie to You About the Mona Lisa",
    },
    subtitle: {
      es: "Museos, barrios y la pregunta de si hay algo que no hayas visto ya en fotos",
      en: "Museums, neighbourhoods and the question of whether there's anything you haven't already seen in photos",
    },
    excerpt: {
      es: "Llegué con La guía Michelin de 2023 y la seguridad de quien ha leído demasiados libros sobre París. Salí convencida de que no había entendido nada las veces anteriores.",
      en: "I arrived with the 2023 Michelin guide and the certainty of someone who has read too many books about Paris. I left convinced I hadn't understood anything on previous visits.",
    },
    metaDescription: {
      es: "Guía honesta de París 2026: Louvre, Orsay, Montmartre, Le Marais y consejos prácticos para no gastar de más. Roland Garros y Fête de la Musique incluidos.",
      en: "Honest Paris guide 2026: Louvre, Orsay, Montmartre, Le Marais and practical tips to avoid overspending. Roland Garros and Fête de la Musique included.",
    },
    keywords: {
      es: ["paris 2026", "que ver en paris", "louvre entradas", "montmartre", "paris viaje"],
      en: ["paris 2026", "what to see in paris", "louvre tickets", "montmartre", "paris travel guide"],
    },
    pointsOfInterest: [
      {
        name: "Musée du Louvre",
        type: "Museo",
        lat: 48.8606, lng: 2.3376,
        description: {
          es: "380.000 obras, el edificio de un palacio medieval que nadie terminó de limpiar, y La Gioconda al fondo de una sala detrás de un cristal antibalas rodeada de cuarenta personas haciéndose selfis. Reserva con franja horaria o la fila en el patio de la Pirámide te enseñará todo lo que necesitas saber sobre la paciencia.",
          en: "380,000 works, the building of a medieval palace nobody ever quite finished tidying, and the Mona Lisa at the end of a room behind bulletproof glass surrounded by forty people taking selfies. Book a timed entry or the queue in the Pyramid courtyard will teach you everything about patience.",
        },
        rating: 4.9, priceRange: "€22",
        affiliateLinks: [
          { label: { es: "Entrada con hora fija al Louvre", en: "Timed entry ticket to the Louvre" }, partner: "tiqets", query: "louvre museum paris timed entry", type: "tickets" },
          { label: { es: "Tour guiado lo mejor del Louvre", en: "Guided best-of Louvre tour" }, partner: "getyourguide", query: "louvre museum highlights tour paris", type: "activity" },
        ],
      },
      {
        name: "Musée d'Orsay",
        type: "Museo",
        lat: 48.8600, lng: 2.3266,
        description: {
          es: "El mejor museo de París, en mi opinión personal y bastante informada. Monet, Renoir, Degas, Van Gogh y Cézanne en una estación de tren desafectada con relojes de hierro y luz de cristal. Llega a primera hora o después de las 16:30.",
          en: "The best museum in Paris, in my personal and fairly informed opinion. Monet, Renoir, Degas, Van Gogh and Cézanne in a decommissioned railway station with iron clocks and glass light. Arrive first thing or after 4:30pm.",
        },
        rating: 4.9, priceRange: "€16",
        affiliateLinks: [
          { label: { es: "Tour impresionismo en el Orsay", en: "Impressionism tour at the Orsay" }, partner: "getyourguide", query: "musee d'orsay impressionism tour paris", type: "activity" },
          { label: { es: "Entrada sin cola al Orsay", en: "Skip-the-line Orsay ticket" }, partner: "tiqets", query: "musee d'orsay paris skip line", type: "tickets" },
        ],
      },
      {
        name: "Montmartre",
        type: "Barrio",
        lat: 48.8867, lng: 2.3431,
        description: {
          es: "Al amanecer, antes de las 9, las escaleras de la Butte vacías y el Sacré-Cœur sin cola tienen una calidad de silencio que no tiene ningún otro barrio de París. Por la tarde llegan los turistas y los pintores de la Place du Tertre y es otro sitio completamente distinto.",
          en: "At dawn, before 9am, the empty Butte steps and Sacré-Cœur without queues have a quality of silence found nowhere else in Paris. By afternoon the tourists arrive along with the painters of Place du Tertre and it becomes a completely different place.",
        },
        rating: 4.7, priceRange: "Gratis",
        affiliateLinks: [
          { label: { es: "Tour a pie por Montmartre", en: "Montmartre walking tour" }, partner: "civitatis", query: "montmartre walking tour paris morning", type: "activity" },
          { label: { es: "Tour nocturno Montmartre", en: "Montmartre night tour" }, partner: "getyourguide", query: "montmartre night tour paris wine", type: "activity" },
        ],
      },
      {
        name: "Le Marais",
        type: "Barrio",
        lat: 48.8566, lng: 2.3522,
        description: {
          es: "El Museo Picasso, el Museo Carnavalet, la Place des Vosges —la plaza más antigua de París y la más elegante—, galerías de arte contemporáneo y el mejor falafel de Europa en la rue des Rosiers. Todo en radio de medio kilómetro.",
          en: "The Picasso Museum, the Carnavalet Museum, Place des Vosges — the oldest and most elegant square in Paris — contemporary art galleries and the best falafel in Europe on rue des Rosiers. All within a half-kilometre radius.",
        },
        rating: 4.8, priceRange: "Libre",
        affiliateLinks: [
          { label: { es: "Tour gastronómico Le Marais", en: "Le Marais food tour" }, partner: "getyourguide", query: "le marais food tour paris jewish quarter", type: "activity" },
          { label: { es: "Cenar en Le Marais", en: "Dinner in Le Marais" }, partner: "thefork", query: "le marais paris restaurant", type: "restaurant" },
        ],
      },
      {
        name: "Torre Eiffel",
        type: "Monumento",
        lat: 48.8584, lng: 2.2945,
        description: {
          es: "Obligatoria aunque hayas visto la foto dos mil veces. De noche, cada hora en punto, la lluvia de luces dura exactamente cinco minutos y la gente deja de hacer lo que estaba haciendo para mirarla. Sin reserva en temporada alta la fila supera las tres horas.",
          en: "Compulsory even if you've seen the photo two thousand times. At night, every hour on the hour, the light show lasts exactly five minutes and people stop what they're doing to watch. Without a booking in peak season the queue exceeds three hours.",
        },
        rating: 4.8, priceRange: "€29–35",
        affiliateLinks: [
          { label: { es: "Entrada a la cima de la Torre Eiffel", en: "Eiffel Tower summit ticket" }, partner: "tiqets", query: "eiffel tower summit ticket paris", type: "tickets" },
          { label: { es: "Tour nocturno Torre Eiffel", en: "Eiffel Tower evening tour" }, partner: "getyourguide", query: "eiffel tower evening tour paris seine", type: "activity" },
        ],
      },
    ],
    events: [
      {
        name: "Roland Garros 2026",
        type: "sport",
        date: "24 May – 7 Jun 2026",
        venue: "Stade Roland Garros",
        urgency: true,
        description: {
          es: "El Grand Slam de tierra batida más importante del mundo lleva la misma dirección desde 1928. Las entradas para las primeras rondas son razonablemente accesibles; las de cuartos de final en adelante se agotan muy deprisa. La atmósfera del estadio en el Roland Garros —con el polvo rojo, el rebote alto y los aficionados que opinan en voz alta— no tiene parangón en ningún otro torneo del circuito.",
          en: "The world's most important clay-court Grand Slam has been at the same address since 1928. Early round tickets are reasonably accessible; quarter-finals onwards sell out fast. The Roland Garros atmosphere — red clay dust, high bounce, spectators with opinions — has no equivalent in any other tournament on the circuit.",
        },
        affiliateLinks: [
          { label: { es: "Entradas Roland Garros 2026", en: "Roland Garros 2026 tickets" }, partner: "ticketmaster", query: "roland garros 2026 paris tennis", type: "tickets" },
          { label: { es: "Experiencia VIP Roland Garros", en: "Roland Garros VIP experience" }, partner: "getyourguide", query: "roland garros vip experience paris", type: "activity" },
        ],
      },
      {
        name: "Fête de la Musique 2026",
        type: "cultural",
        date: "21 Jun 2026",
        venue: "Toda la ciudad de París",
        urgency: false,
        description: {
          es: "El solsticio de verano convierte cada calle, cada plaza y cada terraza de París en un escenario. Conciertos gratuitos de todos los géneros imaginables desde las 18:00 hasta la madrugada. Los barrios con más concentración de actuaciones: Le Marais, Bastille, Montmartre, Belleville y los quais del Sena. Completamente gratuito y absolutamente inimitable.",
          en: "The summer solstice turns every street, square and terrace in Paris into a stage. Free concerts of every imaginable genre from 6pm until the early hours. The neighbourhoods with the highest concentration of performances: Le Marais, Bastille, Montmartre, Belleville and the Seine quais. Completely free and absolutely inimitable.",
        },
        affiliateLinks: [
          { label: { es: "Tour musical por París esa noche", en: "Musical tour of Paris that night" }, partner: "civitatis", query: "fete musique paris musical tour", type: "activity" },
        ],
      },
      {
        name: "Festival Jazz à la Villette 2026",
        type: "art",
        date: "Sep 2026",
        venue: "Parc de la Villette",
        urgency: false,
        description: {
          es: "Diez días de jazz en el Parc de la Villette con una mezcla de grandes nombres del circuito internacional y artistas emergentes de la escena francesa. Conciertos al aire libre gratuitos durante el día; los conciertos de sala de noche tienen precio de entrada. El parque en septiembre, con el verano todavía en el aire, es uno de los mejores planes de ocio de París.",
          en: "Ten days of jazz in the Parc de la Villette mixing major names from the international circuit with emerging French scene artists. Free outdoor concerts during the day; evening hall concerts have entry prices. The park in September, with summer still in the air, is one of Paris's best leisure options.",
        },
        affiliateLinks: [
          { label: { es: "Tour de jazz por París", en: "Paris jazz tour" }, partner: "getyourguide", query: "paris jazz tour villette music", type: "activity" },
        ],
      },
    ],
    services: {
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
    content: {
      es: `Hay ciudades que se estudian antes de visitarlas y ciudades que te enseñan cosas sobre sí mismas mientras caminas por ellas. París es las dos al mismo tiempo, lo cual resulta un poco injusto para el resto de destinos europeos y absolutamente fatal para cualquier intento de preparar una visita con normalidad.

Llegué con La guía Michelin de 2023, un mapa descargado en el móvil y la seguridad absoluta de quien ha leído demasiados libros sobre París. Salí convencida de que no había entendido nada las veces anteriores.

El Louvre necesita estrategia. No lo digo por ser dramática — lo digo porque la colección tiene 380.000 obras y el edificio tiene la planta de un hospital de guerra medieval que alguien transformó en palacio sin tirar nada. La victoria de Samotracia al fondo de la escalera Daru, la Venus de Milo rodeada de turistas haciéndose selfis en ángulos que la dejan fuera de cuadro, La Gioconda detrás de su urna de cristal a quince metros de distancia y un mínimo de cuarenta personas delante en cualquier momento del día. {{CTA:tickets:tiqets:louvre museum paris timed entry:Reserva tu entrada al Louvre con hora fija}} — la entrada con franja horaria marca la diferencia entre entrar en diez minutos y esperar dos horas en el patio de la Pirámide. Dedicar tres horas a la planta baja del ala Denon —Venus, Gioconda, Samotracia— y no intentar verlo todo es la única estrategia que funciona.

El Musée d'Orsay es, en mi opinión personal y bastante informada, el mejor museo de París. La colección impresionista —Monet, Renoir, Degas, Van Gogh, Cézanne— en un edificio que es él mismo una obra de arte: la antigua estación de Orsay con sus relojes de hierro y su luz de cristal. {{CTA:activity:getyourguide:musee d'orsay impressionism tour paris:Tour guiado por el impresionismo en el Orsay}} con un guía que sepa leer el contexto histórico transforma los cuadros de bonitos en verdaderamente imprescindibles. Llega a primera hora o después de las 16:30 — las horas intermedias son las más masificadas.

Montmartre al amanecer, antes de las 9 de la mañana, tiene una calidad de silencio que no tiene ningún otro barrio de París. Las escaleras de la Butte vacías, el Sacré-Cœur sin cola, las calles del barrio de artistas con los bistrots cerrados todavía y los gatos en los umbrales. {{CTA:activity:civitatis:montmartre walking tour paris morning:Tour a pie por Montmartre}} por la tarde te da el contraste — el barrio con turistas, los pintores de la Place du Tertre, la vista sobre los tejados de París— pero la versión mañanera es la que no se olvida.

Le Marais concentra lo mejor de la ciudad en un radio de medio kilómetro: el Museo Picasso, el Museo Carnavalet, la Place des Vosges —la plaza más antigua de París y la más elegante sin discusión posible—, las galerías de arte contemporáneo de la rue de Bretagne, y los mejores falafel de Europa en la rue des Rosiers. {{CTA:restaurant:thefork:le marais paris restaurant:Reserva mesa en Le Marais}} para cenar — la densidad de buenas opciones por metro cuadrado no tiene parangón en la ciudad.

La Torre Eiffel es obligatoria aunque todo el mundo ya sepa cómo es. De día es grande e imponente. Al atardecer es fotogénica de formas que desafían la originalidad. Por la noche, cada hora en punto, se ilumina con una lluvia de luces durante cinco minutos exactos y la gente deja de hacer lo que estaba haciendo para mirarla. {{CTA:tickets:tiqets:eiffel tower summit ticket paris:Compra tu entrada a la cima de la Torre Eiffel}} con antelación — la fila sin reserva en temporada alta puede superar las tres horas y media.

Roland Garros en mayo y junio convierte París en la capital mundial del tenis durante dos semanas. {{CTA:tickets:ticketmaster:roland garros 2026 paris tennis:Busca entradas para Roland Garros 2026}} — las de primeras rondas son accesibles; las de cuartos en adelante se agotan muy deprisa. El ambiente del estadio, con el polvo rojo y los aficionados que opinan en voz alta, no tiene equivalente en ningún otro torneo del circuito.

Una nota práctica que me tomé demasiado tiempo en aprender: París es barata en museos los primeros domingos de mes (entrada gratuita al Louvre, Orsay y Pompidou) y cara en todo lo demás. Para conectividad, {{CTA:service:airalo:airalo esim france:Una eSIM de Airalo para Francia}} funciona desde el aeropuerto sin buscar tarjeta SIM física. Para pagos: los cafés y bistrots más pequeños en zonas turísticas pueden cobrar comisiones en tarjeta — una tarjeta sin comisiones ahorra el detalle que se nota en una semana entera de viaje.`,

      en: `There are cities you study before you visit and cities that teach you things about themselves as you walk through them. Paris is both at once, which is slightly unfair to every other European destination and absolutely fatal to any attempt to prepare a visit in a normal way.

I arrived with the 2023 Michelin guide, a map downloaded to my phone, and the absolute certainty of someone who has read too many books about Paris. I left convinced I hadn't understood anything on previous visits.

The Louvre requires strategy. Not for dramatic effect — but because the collection holds 380,000 works and the building has the floor plan of a medieval military hospital that someone converted into a palace without removing anything. The Winged Victory of Samothrace at the end of the Daru staircase, the Venus de Milo surrounded by tourists photographing angles that keep her out of frame, the Mona Lisa behind her glass case fifteen metres away with at least forty people in front at any given moment. {{CTA:tickets:tiqets:louvre museum paris timed entry:Book your Louvre timed entry ticket}} — an entry slot makes the difference between walking in within ten minutes and waiting two hours in the Pyramid courtyard. Spending three hours on the ground floor of the Denon wing — Venus, Mona Lisa, Winged Victory — without trying to see everything is the only strategy that works.

The Musée d'Orsay is, in my personal and fairly informed opinion, the best museum in Paris. The Impressionist collection — Monet, Renoir, Degas, Van Gogh, Cézanne — in a building that is itself a work of art: the former Gare d'Orsay with its iron clocks and glass light. {{CTA:activity:getyourguide:musee d'orsay impressionism tour paris:Guided impressionism tour at the Orsay}} with a guide who can read the historical context transforms the paintings from beautiful to genuinely essential. Arrive first thing or after 4:30pm — the middle hours are the busiest.

Montmartre at dawn, before 9am, has a quality of silence that no other Paris neighbourhood possesses. The Butte steps empty, Sacré-Cœur without queues, the streets of the artists' quarter with the bistros still closed and cats in doorways. {{CTA:activity:civitatis:montmartre walking tour paris morning:Walking tour of Montmartre}} in the afternoon gives you the contrast — the neighbourhood with tourists, the painters of Place du Tertre, the views over Paris rooftops — but the morning version is the one that stays with you.

Le Marais concentrates the best of the city within a half-kilometre radius: the Picasso Museum, the Carnavalet Museum, Place des Vosges — the oldest and unquestionably most elegant square in Paris —, the contemporary art galleries on rue de Bretagne, and the best falafel in Europe on rue des Rosiers. {{CTA:restaurant:thefork:le marais paris restaurant:Book dinner in Le Marais}} — the density of good options per square metre is unmatched in the city.

The Eiffel Tower is compulsory even though everyone already knows what it looks like. By day it's vast and imposing. At sunset it's photogenic in ways that defy originality. At night, every hour on the hour, it lights up with a shower of lights for exactly five minutes and people stop what they're doing to watch. {{CTA:tickets:tiqets:eiffel tower summit ticket paris:Buy your Eiffel Tower summit ticket}} in advance — the queue without a booking in peak season can exceed three and a half hours.

Roland Garros in May and June turns Paris into the world capital of tennis for two weeks. {{CTA:tickets:ticketmaster:roland garros 2026 paris tennis:Find Roland Garros 2026 tickets}} — early round tickets are accessible; quarter-finals onwards sell out fast. The stadium atmosphere, with red clay dust and spectators with vocal opinions, has no equivalent in any other tournament on the circuit.

A practical note it took me too long to learn: Paris is cheap for museums on the first Sunday of the month (free entry to the Louvre, Orsay and Pompidou) and expensive for everything else. For connectivity, {{CTA:service:airalo:airalo esim france:An Airalo eSIM for France}} works from the airport without hunting for a physical SIM card. For payments: smaller cafés and bistros in tourist zones sometimes charge card fees — a no-commission card is the detail that adds up across a full week of travel.`,
    },
    faq: {
      es: [
        { question: "¿Cuántos días se necesitan para ver París?", answer: "Con 4-5 días puedes ver lo esencial: Louvre (medio día), Orsay (medio día), Notre-Dame, Le Marais, Montmartre, Torre Eiffel y los quais del Sena. Con 7 días puedes añadir Versalles (día entero), el Pompidou, Belleville y explorar los barrios con calma." },
        { question: "¿Cuál es la mejor época para visitar París?", answer: "Primavera (abril-junio) y otoño (septiembre-octubre) tienen el mejor clima y menos aglomeraciones que julio-agosto. Junio tiene Roland Garros y la Fête de la Musique. Julio y agosto son temporada alta con turismo máximo y precios más altos." },
        { question: "¿Cómo moverse por París?", answer: "El metro es excelente, cubre toda la ciudad y los tickets Navigo (semana o mes) son mucho más económicos que los billetes individuales. El Vélib' (bicicletas públicas) es perfecto para distancias medias. Los taxis y Uber son caros en comparación." },
      ],
      en: [
        { question: "How many days do you need to see Paris?", answer: "In 4-5 days you can cover the essentials: Louvre (half day), Orsay (half day), Notre-Dame, Le Marais, Montmartre, Eiffel Tower and the Seine quais. With 7 days you can add Versailles (full day), the Pompidou, Belleville and explore neighbourhoods at a proper pace." },
        { question: "When is the best time to visit Paris?", answer: "Spring (April-June) and autumn (September-October) have the best weather and fewer crowds than July-August. June has Roland Garros and the Fête de la Musique. July and August are peak season with maximum tourism and higher prices." },
        { question: "How to get around Paris?", answer: "The metro is excellent and covers the entire city. Navigo passes (weekly or monthly) are much more economical than individual tickets. The Vélib' bike-sharing scheme is perfect for medium distances. Taxis and Uber are expensive by comparison." },
      ],
    },
  },

  // ─────────────────────────────────────────────
  // LONDRES
  // ─────────────────────────────────────────────
  {
    id: "london-guide-2026",
    slug: "londres-guia-2026",
    enSlug: "london-travel-guide-2026",
    narrator: "marcos",
    heroImage: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop",
    city: "Londres",
    country: { es: "Reino Unido", en: "United Kingdom" },
    emoji: "🇬🇧",
    date: "2026-03-12",
    readTime: "9 min",
    category: "europe",
    title: {
      es: "Londres 2026: La ciudad donde la música no duerme (y la cerveza no es barata)",
      en: "London 2026: The City Where Music Never Sleeps (and Beer Is Never Cheap)",
    },
    subtitle: {
      es: "Salas, mercados, arte gratis y la pregunta de cuánto cuesta realmente una semana aquí",
      en: "Venues, markets, free art and the question of what a week here actually costs",
    },
    excerpt: {
      es: "Londres me costó dos visitas entender. La primera vez llegué pensando que era París pero gris y con peor comida. La segunda vez llegué en febrero, me instalé en Hackney por una semana y lo entendí.",
      en: "London took me two visits to understand. The first time I thought it was Paris but grey with worse food. The second time I came in February, installed myself in Hackney for a week, and got it.",
    },
    metaDescription: {
      es: "Guía de Londres 2026: Tate Modern, Camden, Borough Market, Shoreditch y la escena musical más densa de Europa. Glastonbury, Wireless Festival y consejos para no arruinarse.",
      en: "London guide 2026: Tate Modern, Camden, Borough Market, Shoreditch and Europe's densest music scene. Glastonbury, Wireless Festival and tips for not going broke.",
    },
    keywords: {
      es: ["londres 2026", "que hacer en londres", "glastonbury 2026", "camden market", "tate modern gratis"],
      en: ["london 2026", "things to do in london", "glastonbury 2026", "camden market", "tate modern free"],
    },
    pointsOfInterest: [
      {
        name: "Tate Modern",
        type: "Museo",
        lat: 51.5076, lng: -0.0994,
        description: {
          es: "Gratis. Este es el tipo de información que cambia el plan mental de todo. Rothko, Picasso, Warhol, Louise Bourgeois en una central eléctrica desafectada sobre el Támesis con una sala de turbinas de las más impresionantes que he visto en ningún edificio. La Turbine Hall con instalaciones de escala arquitectónica que rotan cada temporada.",
          en: "Free. This is the kind of information that changes your entire mental plan. Rothko, Picasso, Warhol, Louise Bourgeois in a decommissioned power station on the Thames with one of the most impressive turbine halls I've seen in any building. Rotating large-scale installations each season.",
        },
        rating: 4.8, priceRange: "Gratis",
        affiliateLinks: [
          { label: { es: "Tour de lo mejor de la Tate Modern", en: "Tate Modern highlights tour" }, partner: "getyourguide", query: "tate modern tour london highlights modern art", type: "activity" },
        ],
      },
      {
        name: "Camden Market",
        type: "Mercado",
        lat: 51.5414, lng: -0.1432,
        description: {
          es: "Trescientas tiendas de ropa vintage, artesanía, discos de vinilo, comida de todo el mundo y gente con estilos que en otras ciudades serían imposibles y aquí son el miércoles normal. El canal después del mercado tiene los pubs con terraza junto al agua donde los londinenses toman el sábado con seriedad admirable.",
          en: "Three hundred shops selling vintage clothes, crafts, vinyl records, food from everywhere, and people with styles that would be impossible in other cities and here are a normal Wednesday. The canal after the market has waterside pub terraces where Londoners take Saturday afternoon with admirable seriousness.",
        },
        rating: 4.6, priceRange: "Libre",
        affiliateLinks: [
          { label: { es: "Tour gastronómico por Camden", en: "Camden food tour" }, partner: "getyourguide", query: "camden market food tour london vinyl records", type: "activity" },
        ],
      },
      {
        name: "Borough Market",
        type: "Mercado",
        lat: 51.5051, lng: -0.0910,
        description: {
          es: "En el mismo sitio desde 1851. Jamón ibérico de productores españoles, quesos artesanos ingleses que revisaron mis prejuicios, pasteles de carne a la antigua y café de especialidad servido por alguien que tiene un doctorado no oficial en el tema. El mejor mercado gastronómico de la ciudad sin debate posible.",
          en: "On the same site since 1851. Iberian ham from Spanish producers, artisan English cheeses that revised my prejudices, old-fashioned meat pies and speciality coffee served by someone with an unofficial doctorate in the subject. The best food market in the city, without debate.",
        },
        rating: 4.8, priceRange: "Libre",
        affiliateLinks: [
          { label: { es: "Tour de comida Borough Market", en: "Borough Market food tour" }, partner: "getyourguide", query: "borough market food tour london southwark", type: "activity" },
          { label: { es: "Mesa cerca del Borough Market", en: "Table near Borough Market" }, partner: "thefork", query: "borough market london restaurant southwark", type: "restaurant" },
        ],
      },
      {
        name: "Shoreditch",
        type: "Barrio",
        lat: 51.5230, lng: -0.0775,
        description: {
          es: "Arte urbano en cada pared —algunos de Banksy, otros de artistas que serán relevantes en cinco años. Bares donde antes había talleres. Restaurantes de cocinas que no existían en el menú europeo hace una década. Por la noche, el Truman Brewery convierte este rincón del East End en una de las zonas más activas de Europa.",
          en: "Street art on every wall — some by Banksy, others by artists who will be relevant in five years. Bars where workshops used to be. Restaurants serving cuisines that didn't exist on the European menu a decade ago. At night, the Truman Brewery makes this corner of the East End one of the most active areas in Europe.",
        },
        rating: 4.7, priceRange: "Libre",
        affiliateLinks: [
          { label: { es: "Tour de arte urbano Shoreditch", en: "Shoreditch street art tour" }, partner: "getyourguide", query: "shoreditch street art tour london east end banksy", type: "activity" },
        ],
      },
      {
        name: "Tower of London",
        type: "Monumento",
        lat: 51.5081, lng: -0.0759,
        description: {
          es: "Novecientos años de historia en un castillo normando a orillas del Támesis: las joyas de la Corona, los cuervos que supuestamente protegen el reino si se van (hay seis en plantilla más un suplente oficial), y las historias de las ejecuciones que los Beefeaters cuentan con una alegría que resulta inquietante.",
          en: "Nine hundred years of history in a Norman castle on the Thames: the Crown Jewels, the ravens that supposedly protect the kingdom if they leave (six on staff plus an official reserve), and the execution stories the Beefeaters recount with an unsettling cheerfulness.",
        },
        rating: 4.7, priceRange: "£33",
        affiliateLinks: [
          { label: { es: "Entrada Tower of London sin cola", en: "Tower of London skip-the-line ticket" }, partner: "tiqets", query: "tower of london skip line ticket crown jewels", type: "tickets" },
          { label: { es: "Tour histórico Torre de Londres", en: "Tower of London historical tour" }, partner: "getyourguide", query: "tower of london guided tour beefeater", type: "activity" },
        ],
      },
    ],
    events: [
      {
        name: "Glastonbury 2026",
        type: "festival",
        date: "24–28 Jun 2026",
        venue: "Worthy Farm, Somerset",
        urgency: true,
        description: {
          es: "El festival más importante del planeta durante cinco días en Somerset, a dos horas de Londres en tren. Las entradas se agotan en horas desde que salen a la venta, generalmente en octubre del año anterior, con lista de registro obligatoria previa. Si no consigues entrada: el Pyramid Stage se retransmite en directo en la BBC y hay pubs en todo el país donde verlo con la misma gente que tampoco consiguió entrada y lo lleva con deportividad.",
          en: "The most important festival on the planet for five days in Somerset, two hours from London by train. Tickets sell out within hours of going on sale, usually in October the previous year, with mandatory prior registration. If you don't get a ticket: the Pyramid Stage is broadcast live on the BBC and there are pubs across the country watching it with people who also didn't get tickets and are taking it well.",
        },
        affiliateLinks: [
          { label: { es: "Lista de espera Glastonbury 2026", en: "Glastonbury 2026 resale tickets" }, partner: "stubhub", query: "glastonbury festival 2026 tickets resale", type: "tickets" },
          { label: { es: "Alojamiento cerca de Glastonbury", en: "Accommodation near Glastonbury" }, partner: "booking", query: "glastonbury somerset accommodation festival 2026", type: "hotel" },
        ],
      },
      {
        name: "Wireless Festival 2026",
        type: "festival",
        date: "3–5 Jul 2026",
        venue: "Crystal Palace Park, Londres",
        urgency: true,
        description: {
          es: "El festival de rap, R&B y música urbana más importante del Reino Unido en Crystal Palace Park. Cartel con los artistas más grandes del género internacional y la escena británica emergente. Tres días, varios escenarios, producción de primer nivel y ambiente de los que solo genera Londres cuando pone la música en el centro de todo.",
          en: "The UK's most important rap, R&B and urban music festival in Crystal Palace Park. Lineup featuring the biggest names in international hip-hop and the British emerging scene. Three days, multiple stages, top-level production and the kind of atmosphere only London generates when it puts music at the centre of everything.",
        },
        affiliateLinks: [
          { label: { es: "Entradas Wireless Festival 2026", en: "Wireless Festival 2026 tickets" }, partner: "ticketmaster", query: "wireless festival 2026 london crystal palace", type: "tickets" },
          { label: { es: "Experiencia festival en Londres", en: "London festival experience" }, partner: "getyourguide", query: "wireless festival london music experience", type: "activity" },
        ],
      },
      {
        name: "Notting Hill Carnival 2026",
        type: "cultural",
        date: "30–31 Ago 2026",
        venue: "Notting Hill, Londres",
        urgency: false,
        description: {
          es: "El mayor festival de calle de Europa y el segundo mayor carnaval del mundo después de Río. Dos días de música caribeña, trajes elaborados, sound systems que te sientes en el pecho y comida de Jamaica, Trinidad y Barbados cocinada en la calle. El domingo es el día de los niños y la familia; el lunes es el desfile principal. Entrada gratuita.",
          en: "The largest street festival in Europe and the second largest carnival in the world after Rio. Two days of Caribbean music, elaborate costumes, sound systems you feel in your chest, and food from Jamaica, Trinidad and Barbados cooked on the street. Sunday is the children's and family day; Monday is the main parade. Free entry.",
        },
        affiliateLinks: [
          { label: { es: "Tour cultural del Caribe en Londres", en: "Caribbean culture tour in London" }, partner: "getyourguide", query: "notting hill carnival london caribbean culture tour", type: "activity" },
        ],
      },
    ],
    services: {
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
    content: {
      es: `Londres me costó dos visitas entender. La primera vez llegué con la idea de que era París pero gris y con peor comida. La segunda vez llegué en febrero, me instalé en Hackney por una semana y lo entendí: Londres no es una ciudad que se visita, es una ciudad donde se vive aunque sea temporalmente. Y vivir aquí — aunque sean cinco días — es algo completamente diferente a hacer turismo aquí.

La escena musical de Londres en 2026 es, sin matices, la mejor del mundo. No lo digo por devoción anglófila — lo digo porque la densidad de salas de conciertos, el número de géneros que conviven y la calidad de los artistas emergentes que salen de aquí no tienen parangón. The Roundhouse en Camden, Brixton Academy en el sur, Rough Trade East en Brick Lane, Village Underground en Shoreditch. Cada noche hay algo que vale la pena en al menos tres salas simultáneamente. El problema es el precio de la cerveza, que en algunos locales ha cruzado definitivamente la barrera de lo razonable hacia territorio de lo absurdo. Se gestiona.

Glastonbury en junio convierte Somerset — a dos horas de Londres en tren — en el festival más importante del planeta durante cinco días. Las entradas se agotan en horas desde que salen a la venta en octubre del año anterior, con lista de registro obligatoria previa. Si no consigues entrada, el Wireless Festival en Crystal Palace Park trae un cartel de rap y R&B contemporáneo que por sí solo justifica el viaje. {{CTA:tickets:ticketmaster:wireless festival 2026 london crystal palace:Entradas Wireless Festival 2026}}.

La Tate Modern es gratis. Este es el tipo de información que me gusta dar al principio porque cambia el plan mental de todo. Colección permanente de arte moderno y contemporáneo del siglo XX — Rothko, Picasso, Warhol, Bourgeois — en una central eléctrica desafectada sobre el Támesis con una sala de turbinas que es de las más impresionantes que he visto en ningún edificio. {{CTA:activity:getyourguide:tate modern tour london highlights modern art:Tour de lo mejor de la Tate Modern}} si quieres contexto, pero la entrada libre sin guía también funciona perfectamente — el audioguía de la app es gratuito.

Camden Market los sábados es el caos más organizado que existe. Trescientas tiendas de ropa vintage, artesanía, discos de vinilo, comida de todo el mundo y gente con estilos que en otras ciudades serían imposibles y aquí son el miércoles normal. La zona del canal después del mercado tiene los pubs con terraza junto al agua donde los londinenses se toman la tarde del sábado con una seriedad admirable. {{CTA:activity:getyourguide:camden market food tour london vinyl records:Tour gastronómico por Camden}} para probar la oferta de food trucks sin perderte en la maraña.

Borough Market, en Southwark, es el mercado gastronómico más serio de la ciudad. Desde 1851 en el mismo sitio. Jamón ibérico de productores españoles exportando directamente, quesos artesanos ingleses que revisaron algunos de mis prejuicios previos, pasteles de carne a la antigua, café de especialidad servido por alguien que tiene un doctorado no oficial en el tema. {{CTA:restaurant:thefork:borough market london restaurant southwark:Reserva mesa cerca del Borough Market}} — los restaurantes del entorno tienen el nivel del mercado, que es decir mucho.

Shoreditch es el barrio que define mejor la energía de la ciudad en 2026. Arte urbano en cada pared — algunos de Banksy o sus seguidores, otros de artistas que serán relevantes en cinco años. Bares donde antes había talleres mecánicos. Restaurantes de cocinas que no existían en el menú europeo hace una década. Por la noche, la concentración de clubs y salas de música en el Truman Brewery convierte este rincón del East End en una de las zonas más activas de Europa. {{CTA:activity:getyourguide:shoreditch street art tour london east end banksy:Tour de arte urbano por Shoreditch}}.

La Tower of London tiene novecientos años de historia comprimidos en un castillo normando con un Támesis de fondo, las joyas de la Corona, seis cuervos en plantilla oficial (más un suplente, por si acaso) y los Beefeaters contando las ejecuciones con una alegría que resulta genuinamente inquietante. {{CTA:tickets:tiqets:tower of london skip line ticket crown jewels:Entrada sin cola a la Torre de Londres}} — la cola sin reserva puede alcanzar las dos horas en verano.

Nota práctica inevitable: Londres es cara. No hay forma elegante de decirlo. El transporte en Oyster Card o contactless — nunca compres billete de papel — es eficiente y razonablemente económico. La comida puede ser asequible en los pubs de barra con menú del mediodía. Para conectividad, {{CTA:service:airalo:airalo esim uk:Una eSIM de Airalo para Reino Unido}} funciona desde el aeropuerto sin buscar SIM local. Si trabajas en remoto, los coworking spaces del East End tienen membresías de un día sin contrato y wifi que funciona de verdad.`,

      en: `London took me two visits to understand. The first time I arrived thinking it was Paris but grey with worse food. The second time I came in February, installed myself in Hackney for a week, and got it: London isn't a city you visit, it's a city where you live, even temporarily. And living here — even for five days — is something completely different from doing tourism here.

London's music scene in 2026 is, without qualification, the best in the world. Not out of Anglo-centric devotion — because the density of venues, the number of genres coexisting, and the quality of emerging artists coming out of here right now are unmatched. The Roundhouse in Camden, Brixton Academy in the south, Rough Trade East on Brick Lane, Village Underground in Shoreditch. Every night there's something worth seeing at at least three venues simultaneously. The problem is the price of beer, which in some places has definitively crossed from unreasonable into the territory of the absurd. You manage.

Glastonbury in June turns Somerset — two hours from London by train — into the most important festival on the planet for five days. Tickets sell out within hours of going on sale, usually in October the previous year, with mandatory prior registration. If you don't get a ticket, Wireless Festival in Crystal Palace Park brings a contemporary rap and R&B lineup that on its own justifies the trip. {{CTA:tickets:ticketmaster:wireless festival 2026 london crystal palace:Wireless Festival 2026 tickets}}.

Tate Modern is free. This is the kind of information I like to give upfront because it changes your entire mental plan. Permanent collection of 20th-century modern and contemporary art — Rothko, Picasso, Warhol, Bourgeois — in a decommissioned power station on the Thames with a Turbine Hall that's one of the most impressive spaces I've seen in any building. {{CTA:activity:getyourguide:tate modern tour london highlights modern art:Tate Modern highlights tour}} if you want context, but free entry without a guide works perfectly too.

Camden Market on Saturdays is the most organised chaos that exists. Three hundred shops selling vintage clothes, crafts, vinyl records, food from everywhere, and people with styles that would be impossible in other cities and here are a normal Wednesday. The canal zone after the market has waterside pub terraces where Londoners take Saturday afternoon with admirable seriousness. {{CTA:activity:getyourguide:camden market food tour london vinyl records:Camden gastronomic tour}} to try the food truck offering without getting lost in the maze.

Borough Market in Southwark is the city's most serious food market. On the same site since 1851. Iberian ham from Spanish producers exporting directly, artisan English cheeses that revised my previous prejudices, old-fashioned meat pies, speciality coffee served by someone with an unofficial doctorate in the subject. {{CTA:restaurant:thefork:borough market london restaurant southwark:Book a table near Borough Market}} — the surrounding restaurants are at the market's level, which is saying a lot.

Shoreditch best defines the city's energy in 2026. Street art on every wall — some by Banksy or his followers, others by artists who will be relevant in five years. Bars where mechanics' workshops used to be. Restaurants serving cuisines that didn't exist on the European menu a decade ago. At night, the concentration of clubs and music venues at the Truman Brewery makes this corner of the East End one of the most active areas in Europe. {{CTA:activity:getyourguide:shoreditch street art tour london east end banksy:Shoreditch street art tour}}.

The Tower of London has nine hundred years of history compressed into a Norman castle with the Thames as backdrop, the Crown Jewels, six ravens on official staff (plus a reserve, just in case) and Beefeaters recounting executions with a genuinely unsettling cheerfulness. {{CTA:tickets:tiqets:tower of london skip line ticket crown jewels:Tower of London skip-the-line ticket}} — the queue without a booking can reach two hours in summer.

Unavoidable practical note: London is expensive. There's no elegant way to say it. Transport on Oyster Card or contactless — never buy a paper ticket — is efficient and reasonably affordable. Food can be cheap at pub bars with their lunch menus. For connectivity, {{CTA:service:airalo:airalo esim uk:An Airalo eSIM for the UK}} works from the airport without hunting for a local SIM. If you're working remotely, East End coworking spaces have day memberships with no contract and wifi that actually works.`,
    },
    faq: {
      es: [
        { question: "¿Cuánto cuesta una semana en Londres?", answer: "Londres es cara. Un presupuesto medio-ajustado son 80-120€/día (sin vuelo): alojamiento en hostel o apartamento compartido 30-50€, comida 20-30€ (pubs y mercados), transporte 10-15€ (Oyster), entradas 20-30€. Un hotel de calidad media y comidas en restaurantes sube a 200-300€/día fácilmente." },
        { question: "¿Es necesario visado para entrar al Reino Unido desde España?", answer: "Tras el Brexit, los ciudadanos españoles (y de la UE) necesitan el ETA (Electronic Travel Authorisation) para entrar al Reino Unido. No es un visado propiamente dicho — se solicita online, cuesta £10 y se aprueba en minutos. Válido para múltiples entradas durante 2 años. Tramítalo antes del viaje." },
        { question: "¿Cuál es la mejor zona para alojarse en Londres?", answer: "Shoreditch y Hackney para ambiente local, mercados y vida nocturna. Southwark y Waterloo para proximidad a los principales museos. Notting Hill para ambiente de barrio con clase. Evita el centro de la City si buscas precio razonable — es el distrito financiero y los hoteles son caros en semana, vacíos en fin de semana." },
      ],
      en: [
        { question: "How much does a week in London cost?", answer: "London is expensive. A medium-tight budget is €80-120/day (excluding flights): hostel or shared flat €30-50, food €20-30 (pubs and markets), transport €10-15 (Oyster), tickets €20-30. A decent hotel and restaurant meals easily reaches €200-300/day." },
        { question: "Do Spanish (EU) citizens need a visa for the UK?", answer: "Post-Brexit, Spanish and EU citizens need an ETA (Electronic Travel Authorisation) to enter the UK. It's not a traditional visa — applied for online, costs £10 and is approved in minutes. Valid for multiple entries for 2 years. Apply before your trip." },
        { question: "What's the best area to stay in London?", answer: "Shoreditch and Hackney for local atmosphere, markets and nightlife. Southwark and Waterloo for proximity to major museums. Notting Hill for upmarket neighbourhood feel. Avoid the City centre if you want reasonable prices — it's the financial district and hotels are expensive on weekdays, empty at weekends." },
      ],
    },
  },

  // ─────────────────────────────────────────────
  // BERLÍN
  // ─────────────────────────────────────────────
  {
    id: "berlin-guide-2026",
    slug: "berlin-guia-2026",
    enSlug: "berlin-travel-guide-2026",
    narrator: "elena",
    heroImage: "https://images.unsplash.com/photo-1587330979470-3595ac045fba?q=80&w=2070&auto=format&fit=crop",
    city: "Berlín",
    country: { es: "Alemania", en: "Germany" },
    emoji: "🇩🇪",
    date: "2026-03-12",
    readTime: "9 min",
    category: "europe",
    title: {
      es: "Berlín 2026: La ciudad más barata de Europa que todavía importa",
      en: "Berlin 2026: The Cheapest Major City in Europe That Still Matters",
    },
    subtitle: {
      es: "Museos de clase mundial, coworking excelente, electrónica sin igual y bares que cierran cuando decide la gente",
      en: "World-class museums, excellent coworking, unmatched electronic music and bars that close when people decide to leave",
    },
    excerpt: {
      es: "Para alguien que trabaja en remoto y necesita una base europea que no cueste un órgano al mes, Berlín no es una opción: es la respuesta.",
      en: "For anyone working remotely who needs a European base that doesn't cost an organ a month, Berlin isn't an option: it's the answer.",
    },
    metaDescription: {
      es: "Guía de Berlín 2026: Isla de los Museos, East Side Gallery, Kreuzberg y Prenzlauer Berg. La mejor ciudad para nómadas digitales de Europa. Lollapalooza Berlin incluido.",
      en: "Berlin guide 2026: Museum Island, East Side Gallery, Kreuzberg and Prenzlauer Berg. Europe's best city for digital nomads. Lollapalooza Berlin included.",
    },
    keywords: {
      es: ["berlin 2026", "que ver en berlin", "isla museos berlin", "nomada digital berlin", "kreuzberg"],
      en: ["berlin 2026", "what to see in berlin", "museum island berlin", "digital nomad berlin", "kreuzberg"],
    },
    pointsOfInterest: [
      {
        name: "Isla de los Museos",
        type: "Museo",
        lat: 52.5205, lng: 13.4005,
        description: {
          es: "Cinco museos de clase mundial en una isla en el Spree. El Pergamonmuseum tiene la Puerta de Ishtar de Babilonia y el Altar de Pérgamo — dos piezas de escala arquitectónica que no tienen referencia en ningún otro museo. El Neues Museum tiene el busto de Nefertiti. La entrada combinada cubre varios museos y la franja horaria es obligatoria.",
          en: "Five world-class museums on an island in the Spree. The Pergamon Museum has the Ishtar Gate of Babylon and the Pergamon Altar — two pieces of architectural scale with no equivalent in any other museum. The Neues Museum has the bust of Nefertiti. The combined ticket covers several museums and a timed slot is essential.",
        },
        rating: 4.9, priceRange: "€18",
        affiliateLinks: [
          { label: { es: "Entrada combinada Isla de los Museos", en: "Museum Island combined ticket" }, partner: "tiqets", query: "berlin museum island pergamon nefertiti timed entry", type: "tickets" },
          { label: { es: "Tour guiado Isla de los Museos", en: "Museum Island guided tour" }, partner: "getyourguide", query: "berlin museum island guided tour pergamon altar", type: "activity" },
        ],
      },
      {
        name: "East Side Gallery",
        type: "Monumento",
        lat: 52.5058, lng: 13.4400,
        description: {
          es: "1,3 kilómetros del muro de Berlín convertidos en galería de arte al aire libre justo después de la caída en 1989. La 'Prueba Fraternal' de Dmitri Vrubel — los dos líderes besándose en la boca — es la imagen más fotografiada. Gratuita, al aire libre, abierta 24 horas. Sin contexto histórico son murales bonitos; con contexto son otra cosa completamente diferente.",
          en: "1.3 kilometres of the Berlin Wall turned into an open-air art gallery immediately after the 1989 fall. Dmitri Vrubel's 'Fraternal Kiss' — the two leaders kissing — is the most photographed image. Free, outdoors, open 24 hours. Without historical context they're beautiful murals; with context they're something else entirely.",
        },
        rating: 4.8, priceRange: "Gratis",
        affiliateLinks: [
          { label: { es: "Tour guiado Muro de Berlín y East Side Gallery", en: "Berlin Wall and East Side Gallery guided tour" }, partner: "getyourguide", query: "berlin wall east side gallery guided tour history", type: "activity" },
        ],
      },
      {
        name: "Kreuzberg",
        type: "Barrio",
        lat: 52.4938, lng: 13.3898,
        description: {
          es: "El distrito que mejor define Berlín en 2026: multicultural, creativo, políticamente activo. El mercado turco de Maybachufer los martes y viernes, el canal del Landwehrkanal con sus bistrots de verano, y la mayor densidad de restaurantes internacionales de la ciudad. Todo sin los precios de Mitte.",
          en: "The district that best defines Berlin in 2026: multicultural, creative, politically active. The Turkish market at Maybachufer on Tuesdays and Fridays, the Landwehrkanal canal with its summer bistros, and the city's highest density of international restaurants. All without Mitte's prices.",
        },
        rating: 4.7, priceRange: "Libre",
        affiliateLinks: [
          { label: { es: "Tour gastronómico Kreuzberg", en: "Kreuzberg street food tour" }, partner: "getyourguide", query: "kreuzberg street food tour berlin turkish market canal", type: "activity" },
        ],
      },
      {
        name: "Prenzlauer Berg",
        type: "Barrio",
        lat: 52.5367, lng: 13.4123,
        description: {
          es: "Donde vive la clase media berlinesa con niños y perros y muy buenas cafeterías. Las plazas con terraza en primavera tienen esa calma perfecta para trabajar con el portátil dos horas antes de explorar. Helmholtzplatz, Kollwitzplatz, Oderberger Strasse con tiendas de diseño. Precios notablemente menores que el centro.",
          en: "Where Berlin's middle class lives with children, dogs and excellent coffee shops. The terrace squares in spring have a calm that's perfect for laptop work for two hours before exploring. Helmholtzplatz, Kollwitzplatz, Oderberger Strasse with design shops. Prices notably lower than the centre.",
        },
        rating: 4.6, priceRange: "Libre",
        affiliateLinks: [
          { label: { es: "Cenar en Prenzlauer Berg", en: "Dinner in Prenzlauer Berg" }, partner: "thefork", query: "prenzlauer berg berlin restaurant dinner", type: "restaurant" },
        ],
      },
      {
        name: "Puerta de Brandenburgo",
        type: "Monumento",
        lat: 52.5163, lng: 13.3777,
        description: {
          es: "Obligatoria aunque hayas visto la foto dos mil veces. De noche, iluminada, tiene una presencia que las fotos no capturan. El kilómetro cuadrado entre la Puerta, el Reichstag, el Memorial del Holocausto y Checkpoint Charlie tiene la mayor densidad histórica del siglo XX en Europa.",
          en: "Compulsory even if you've seen the photo two thousand times. At night, lit up, it has a presence photos don't capture. The square kilometre between the Gate, the Reichstag, the Holocaust Memorial and Checkpoint Charlie has the highest 20th-century historical density in Europe.",
        },
        rating: 4.8, priceRange: "Gratis",
        affiliateLinks: [
          { label: { es: "Tour histórico a pie por Berlín", en: "Berlin historical walking tour" }, partner: "civitatis", query: "berlin city walking tour history holocaust memorial checkpoint charlie", type: "activity" },
          { label: { es: "Tour en bici por Berlín histórico", en: "Historical Berlin bike tour" }, partner: "getyourguide", query: "berlin bike tour historical sites cold war", type: "activity" },
        ],
      },
    ],
    events: [
      {
        name: "Lollapalooza Berlin 2026",
        type: "festival",
        date: "12–13 Sep 2026",
        venue: "Olympiagelände, Berlín",
        urgency: true,
        description: {
          es: "El Olympiagelände — el estadio olímpico de 1936 — se convierte en uno de los festivales más completos del calendario europeo. Cartel que mezcla pop, rock, electrónica e hip-hop en cinco escenarios simultáneos con producción de nivel que justifica el precio del vuelo por sí sola. Dos días de música sin interrupciones en uno de los recintos más fotogénicos de Europa.",
          en: "The Olympiagelände — the 1936 Olympic stadium — becomes one of the most complete festivals on the European calendar. Lineup mixing pop, rock, electronic and hip-hop across five simultaneous stages with production values that alone justify the price of the flight. Two days of uninterrupted music in one of Europe's most photogenic venues.",
        },
        affiliateLinks: [
          { label: { es: "Entradas Lollapalooza Berlin 2026", en: "Lollapalooza Berlin 2026 tickets" }, partner: "ticketmaster", query: "lollapalooza berlin 2026 olympiagelande", type: "tickets" },
          { label: { es: "Alojamiento para el festival en Berlín", en: "Festival accommodation in Berlin" }, partner: "booking", query: "berlin accommodation lollapalooza september 2026", type: "hotel" },
        ],
      },
      {
        name: "Festival of Lights Berlin 2026",
        type: "art",
        date: "8–17 Oct 2026",
        venue: "Todo Berlín",
        urgency: false,
        description: {
          es: "Diez días en octubre en que los edificios más emblemáticos de Berlín — la Puerta de Brandenburgo, la Catedral, el Berliner Dom, el Fernsehturm — se convierten en lienzos de luz. Proyecciones de arte digital a escala arquitectónica visible desde la calle, de acceso gratuito. Uno de los festivales de arte lumínico más importantes de Europa.",
          en: "Ten days in October when Berlin's most iconic buildings — the Brandenburg Gate, the Cathedral, the Berliner Dom, the Fernsehturm — become canvases of light. Large-scale digital art projections viewable from the street, free access. One of Europe's most important light art festivals.",
        },
        affiliateLinks: [
          { label: { es: "Tour nocturno Festival of Lights", en: "Festival of Lights night tour" }, partner: "getyourguide", query: "berlin festival of lights night tour october projections", type: "activity" },
        ],
      },
      {
        name: "Maratón de Berlín 2026",
        type: "sport",
        date: "27 Sep 2026",
        venue: "Centro histórico de Berlín",
        urgency: false,
        description: {
          es: "Uno de los seis World Marathon Majors, con el récord mundial actual establecido en su circuito plano que pasa por la Puerta de Brandenburgo. Aunque no corras, la ciudad convierte el día de la maratón en un acontecimiento colectivo: los berlineses salen a la calle a animar con una seriedad y organización que dice mucho de cómo funciona esta ciudad.",
          en: "One of the six World Marathon Majors, with the current world record set on its flat course passing through the Brandenburg Gate. Even if you're not running, the city turns marathon day into a collective event: Berliners take to the streets to cheer with a seriousness and organisation that says a lot about how this city works.",
        },
        affiliateLinks: [
          { label: { es: "Tour a pie por la ruta de la maratón", en: "Walking tour along the marathon route" }, partner: "civitatis", query: "berlin marathon route walking tour historical", type: "activity" },
        ],
      },
    ],
    services: {
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
    content: {
      es: `Berlín es la ciudad más barata de Europa occidental que todavía importa. Y cuando digo importa me refiero a museos de clase mundial, una escena cultural de densidad inexplicable, la mejor música electrónica del planeta y bares que cierran cuando la gente decide irse — que a menudo es el miércoles siguiente. Para quien trabaja en remoto y necesita una base europea que no cueste un órgano al mes, Berlín no es una opción: es la respuesta.

La isla de los Museos está en el centro de la ciudad y es uno de los conjuntos museísticos más excepcionales del mundo. El Pergamonmuseum tiene la Puerta de Ishtar de Babilonia y el Altar de Pérgamo — dos piezas de escala arquitectónica que no tienen referencia en ningún otro museo del planeta. El Neues Museum tiene el busto de Nefertiti. {{CTA:tickets:tiqets:berlin museum island pergamon nefertiti timed entry:Entrada combinada a la Isla de los Museos con hora reservada}} — la entrada conjunta cubre varios museos y vale cada euro. Empieza por el Pergamon a primera hora y el Neues Museum después del almuerzo cuando las mañanas empiezan a vaciarse.

La East Side Gallery es el segmento más largo del muro de Berlín que todavía queda en pie: 1,3 kilómetros de hormigón convertidos en galería de arte al aire libre por artistas de todo el mundo justo después de la caída en 1989. {{CTA:activity:getyourguide:berlin wall east side gallery guided tour history:Tour guiado por el Muro de Berlín y la East Side Gallery}} para entender la historia detrás de los murales — sin contexto, los graffitis son bonitos; con contexto, son algo completamente diferente. La galería es gratuita y está abierta las 24 horas.

Kreuzberg es el distrito que define mejor a Berlín: multicultural, creativo, políticamente activo. El mercado turco de Maybachufer los martes y viernes es el mejor de la ciudad — especias, telas, olivas y pasteles de nuez que huelen a Estambul a precio de barrio. El canal del Landwehrkanal en verano tiene los bistrots al aire libre donde los berlineses hacen lo que los berlineses hacen mejor: sentarse al sol con una cerveza y no tener prisa. {{CTA:activity:getyourguide:kreuzberg street food tour berlin turkish market canal:Tour de street food por Kreuzberg}}.

Prenzlauer Berg es el barrio que funciona mejor para trabajar. Las cafeterías de la Helmholtzplatz y la Kollwitzplatz tienen wifi estable, enchufes accesibles, café de especialidad y el ruido de fondo correcto para concentrarse. Trabajo tres horas por la mañana, almuerzo en el mercado del Mauerpark los domingos, exploración por la tarde. {{CTA:restaurant:thefork:prenzlauer berg berlin restaurant dinner:Reserva mesa en Prenzlauer Berg}} para cenar — los precios son notablemente más razonables que en Mitte y la calidad es la misma.

La Puerta de Brandenburgo es obligatoria aunque hayas visto la foto dos mil veces. El kilómetro cuadrado entre la Puerta, el Reichstag, el Memorial del Holocausto y Checkpoint Charlie tiene la mayor densidad histórica del siglo XX en Europa. {{CTA:activity:civitatis:berlin city walking tour history holocaust memorial checkpoint charlie:Tour histórico a pie por Berlín}} — dos horas de historia que no se pueden aprender leyendo una guía.

Lollapalooza Berlin en septiembre convierte el Olympiagelände en uno de los festivales más completos del calendario europeo. {{CTA:tickets:ticketmaster:lollapalooza berlin 2026 olympiagelande:Entradas Lollapalooza Berlin 2026}} — cinco escenarios simultáneos, producción de primer nivel, y el estadio olímpico de 1936 como telón de fondo. Si llegas en octubre, el Festival of Lights proyecta arte digital a escala arquitectónica en los edificios más emblemáticos de la ciudad durante diez días, completamente gratis desde la calle.

Nota para nómadas digitales, que es la razón real por la que mucha gente viene: St. Oberholz en Rosenthaler Platz es el coworking clásico — wifi estable, café de especialidad, enchufes en cada mesa, abierto hasta las 22:00. Factory Berlin en Görlitzer Bahnhof para membresías mensuales. Para conectividad móvil, {{CTA:service:airalo:airalo esim germany:Una eSIM de Airalo para Alemania}} — la cobertura 4G/5G en Berlín es sólida y el plan de 10GB suele ser suficiente para una semana. Para redes públicas y coworking compartido, {{CTA:service:nordvpn:nordvpn work remote travel:NordVPN}} es la herramienta que no ocupa espacio en la mochila. {{CTA:hotel:booking:berlin mitte boutique hotel:Compara hoteles en Berlín}} — los precios siguen siendo muy inferiores a París, Londres o Ámsterdam comparando categoría equivalente.`,

      en: `Berlin is the cheapest major city in Western Europe that still matters. And when I say matters, I mean world-class museums, a cultural scene with density that defies explanation, the best electronic music on the planet, and bars that close when people decide to leave — which is often the following Wednesday. For anyone working remotely who needs a European base that doesn't cost an organ a month, Berlin isn't an option: it's the answer.

Museum Island is in the city centre and is one of the most exceptional museum complexes in the world. The Pergamon Museum has the Ishtar Gate of Babylon and the Pergamon Altar — two pieces of architectural scale with no equivalent in any other museum on the planet. The Neues Museum has the bust of Nefertiti. {{CTA:tickets:tiqets:berlin museum island pergamon nefertiti timed entry:Museum Island combined ticket with reserved time slot}} — the joint ticket covers several museums and is worth every euro. Start at the Pergamon first thing and the Neues Museum after lunch when the mornings start to clear.

The East Side Gallery is the longest remaining section of the Berlin Wall: 1.3 kilometres of concrete turned into an open-air art gallery by artists from around the world immediately after the 1989 fall. {{CTA:activity:getyourguide:berlin wall east side gallery guided tour history:Guided tour of the Berlin Wall and East Side Gallery}} to understand the history behind the murals — without context, the graffiti is beautiful; with context, it's something completely different. The gallery is free and open 24 hours.

Kreuzberg is the district that best defines Berlin: multicultural, creative, politically active. The Turkish market at Maybachufer on Tuesdays and Fridays is the best in the city — spices, fabrics, olives and walnut pastries that smell of Istanbul at neighbourhood prices. The Landwehrkanal in summer has outdoor bistros where Berliners do what Berliners do best: sit in the sun with a beer and have nowhere to be. {{CTA:activity:getyourguide:kreuzberg street food tour berlin turkish market canal:Kreuzberg street food tour}}.

Prenzlauer Berg is the neighbourhood that works best for working. The coffee shops around Helmholtzplatz and Kollwitzplatz have stable wifi, accessible plugs, speciality coffee and the right background noise for concentrating. Three hours of work in the morning, lunch at the Mauerpark market on Sundays, exploration in the afternoon. {{CTA:restaurant:thefork:prenzlauer berg berlin restaurant dinner:Book dinner in Prenzlauer Berg}} — prices are notably more reasonable than Mitte and the quality is the same.

The Brandenburg Gate is compulsory even if you've seen the photo two thousand times. The square kilometre between the Gate, the Reichstag, the Holocaust Memorial and Checkpoint Charlie has the highest 20th-century historical density in Europe. {{CTA:activity:civitatis:berlin city walking tour history holocaust memorial checkpoint charlie:Berlin historical walking tour}} — two hours of history you can't learn from reading a guide.

Lollapalooza Berlin in September turns the Olympiagelände into one of the most complete festivals on the European calendar. {{CTA:tickets:ticketmaster:lollapalooza berlin 2026 olympiagelande:Lollapalooza Berlin 2026 tickets}} — five simultaneous stages, top-level production, and the 1936 Olympic stadium as backdrop. If you arrive in October, the Festival of Lights projects digital art at architectural scale onto the city's most iconic buildings for ten days, completely free from the street.

Note for digital nomads, which is the real reason many people come: St. Oberholz on Rosenthaler Platz is the classic coworking spot — stable wifi, speciality coffee, plugs at every table, open until 10pm. Factory Berlin at Görlitzer Bahnhof for monthly memberships. For mobile connectivity, {{CTA:service:airalo:airalo esim germany:An Airalo eSIM for Germany}} — 4G/5G coverage in Berlin is solid and the 10GB plan is usually enough for a week. For public and shared coworking networks, {{CTA:service:nordvpn:nordvpn work remote travel:NordVPN}} is the tool that takes up no bag space. {{CTA:hotel:booking:berlin mitte boutique hotel:Compare hotels in Berlin}} — prices remain significantly below Paris, London or Amsterdam for equivalent category.`,
    },
    faq: {
      es: [
        { question: "¿Es Berlín realmente tan barata?", answer: "Comparada con París, Londres o Ámsterdam: sí. Un hostel de calidad sale por 25-40€/noche, un apartamento por 60-100€/noche. Comer en restaurantes locales de Kreuzberg o Neukölln cuesta 8-15€ por persona. La cerveza en un Späti (tienda 24h) sale por 1-2€. El transporte público (BVG) tiene abono mensual por 29€. La inflación reciente la ha encarecido, pero sigue siendo la más asequible de las grandes capitales de Europa occidental." },
        { question: "¿Cuál es la mejor zona para alojarse en Berlín?", answer: "Mitte para el turismo clásico y cercanía a los museos. Prenzlauer Berg para ambiente local tranquilo y buenas cafeterías — ideal para trabajo remoto. Kreuzberg y Neukölln para vida nocturna, mercados y gastronomía internacional. Friedrichshain para proximidad a la East Side Gallery y la escena de clubs. Evita las zonas alrededor de la Hauptbahnhof si buscas carácter de barrio." },
        { question: "¿Se puede visitar Berlín solo en fin de semana?", answer: "Con 2-3 días puedes ver lo esencial: la Isla de los Museos, la East Side Gallery, la Puerta de Brandenburgo, el Muro y explorar Kreuzberg o Prenzlauer Berg. No es suficiente para entender la ciudad — Berlín tiene una curva de comprensión que requiere tiempo — pero sí para tener un primer contacto serio." },
      ],
      en: [
        { question: "Is Berlin really as cheap as people say?", answer: "Compared to Paris, London or Amsterdam: yes. A quality hostel runs €25-40/night, an apartment €60-100/night. Eating at local restaurants in Kreuzberg or Neukölln costs €8-15 per person. Beer at a Späti (24h corner shop) is €1-2. Public transport (BVG) has a monthly pass for €29. Recent inflation has made it more expensive, but it remains the most affordable major Western European capital." },
        { question: "What's the best area to stay in Berlin?", answer: "Mitte for classic tourism and museum proximity. Prenzlauer Berg for quiet local atmosphere and good coffee shops — ideal for remote work. Kreuzberg and Neukölln for nightlife, markets and international food. Friedrichshain for proximity to the East Side Gallery and club scene. Avoid the areas around Hauptbahnhof if you want neighbourhood character." },
        { question: "Can you visit Berlin on a weekend?", answer: "In 2-3 days you can cover the essentials: Museum Island, East Side Gallery, Brandenburg Gate, the Wall, and explore Kreuzberg or Prenzlauer Berg. It's not enough to understand the city — Berlin has a comprehension curve that requires time — but it is enough for a serious first encounter." },
      ],
    },
  },

  // ─────────────────────────────────────────────
  // ATENAS
  // ─────────────────────────────────────────────
  {
    id: "atenas-guia-2026",
    slug: "atenas-guia-2026",
    enSlug: "athens-travel-guide-2026",
    narrator: "carmen",
    heroImage: "https://images.unsplash.com/photo-1555993539-1732b0258235?q=80&w=2070&auto=format&fit=crop",
    city: "Atenas",
    country: { es: "Grecia", en: "Greece" },
    emoji: "🏛️",
    date: "2026-03-13",
    readTime: "9 min",
    category: "europe",
    title: {
      es: "Atenas 2026: La ciudad más antigua de Europa que sigue sin aburrir",
      en: "Athens 2026: Europe's Oldest City That Still Doesn't Get Boring",
    },
    subtitle: {
      es: "Acrópolis, mezze, barrios que funcionan de verdad y uno de los museos arqueológicos más importantes del mundo",
      en: "Acropolis, mezze, neighbourhoods that actually work and one of the world's most important archaeological museums",
    },
    excerpt: {
      es: "Atenas no es el museo al aire libre que te han vendido. Es una ciudad mediterránea ruidosa, complicada, genuina y más barata que Lisboa. Por eso la gente que va una vez vuelve.",
      en: "Athens isn't the open-air museum you've been sold. It's a loud, complicated, genuine Mediterranean city that's cheaper than Lisbon. That's why people who go once go back.",
    },
    metaDescription: {
      es: "Guía de Atenas 2026: Acrópolis, Museo Arqueológico Nacional, Plaka y Monastiraki. Qué ver, comer y hacer en Atenas. Festival de Atenas y Epidauro incluido.",
      en: "Athens guide 2026: Acropolis, National Archaeological Museum, Plaka and Monastiraki. What to see, eat and do in Athens. Athens & Epidaurus Festival included.",
    },
    keywords: {
      es: ["atenas 2026", "que ver en atenas", "acropolis atenas", "guia atenas grecia", "plaka monastiraki"],
      en: ["athens 2026", "what to see in athens", "acropolis athens", "athens greece travel guide", "plaka monastiraki"],
    },
    pointsOfInterest: [
      {
        name: "Acrópolis",
        type: "Monumento",
        lat: 37.9715, lng: 23.7267,
        description: {
          es: "El Partenón en vivo tiene una escala que ninguna foto transmite. La colina entera — el Erecteion con las cariátides, el Propileos, el templo de Atenea Niké — es una acumulación de arquitectura que justifica el viaje por sí sola. Llega a las 8am cuando abre: las siguientes dos horas antes de que lleguen los grupos son otro mundo.",
          en: "The Parthenon in person has a scale no photograph transmits. The whole hill — the Erechtheion with its Caryatids, the Propylaea, the Temple of Athena Nike — is an accumulation of architecture that justifies the trip on its own. Arrive at 8am when it opens: the next two hours before tour groups arrive are another world entirely.",
        },
        rating: 4.9, priceRange: "€20 (combinado)",
        affiliateLinks: [
          { label: { es: "Entrada Acrópolis sin colas", en: "Acropolis skip-the-line ticket" }, partner: "tiqets", query: "acropolis athens skip the line entry ticket 2026", type: "tickets" },
          { label: { es: "Tour guiado Acrópolis temprano", en: "Acropolis early morning guided tour" }, partner: "getyourguide", query: "acropolis athens early morning guided tour sunrise", type: "activity" },
        ],
      },
      {
        name: "Museo de la Acrópolis",
        type: "Museo",
        lat: 37.9684, lng: 23.7292,
        description: {
          es: "Uno de los diez mejores museos del mundo. La sala del Partenón en el tercer piso — con luz natural, orientada en la misma dirección que el templo — es la sala de museo más impresionante de Europa. Las esculturas originales del friso están aquí. Los mármoles que el Lord Elgin se llevó al British Museum están representados con moldes grises. El contraste no necesita comentario.",
          en: "One of the ten best museums in the world. The Parthenon hall on the third floor — in natural light, oriented in the same direction as the temple — is the most impressive museum room in Europe. The original frieze sculptures are here. The marbles Lord Elgin took to the British Museum are represented with grey casts. The contrast needs no comment.",
        },
        rating: 4.9, priceRange: "€10",
        affiliateLinks: [
          { label: { es: "Entrada Museo de la Acrópolis", en: "Acropolis Museum ticket" }, partner: "tiqets", query: "acropolis museum athens ticket entry", type: "tickets" },
        ],
      },
      {
        name: "Monastiraki",
        type: "Barrio",
        lat: 37.9755, lng: 23.7244,
        description: {
          es: "La plaza y su mercadillo son el centro nervioso de Atenas: tiendas de todo y nada, la mezquita otomana todavía en pie, el ágora antigua a dos pasos y el mejor souvlaki de la ciudad. El domingo hay mercado de pulgas en la calle Ifestou. La terraza con vistas a la Acrópolis iluminada de noche es obligatoria al menos una vez.",
          en: "The square and its flea market are the nerve centre of Athens: shops selling everything and nothing, the Ottoman mosque still standing, the ancient agora two steps away and the city's best souvlaki. On Sundays there's a flea market on Ifestou street. The rooftop bar with views of the illuminated Acropolis at night is compulsory at least once.",
        },
        rating: 4.7, priceRange: "Libre",
        affiliateLinks: [
          { label: { es: "Tour gastronómico Monastiraki", en: "Monastiraki food and market tour" }, partner: "getyourguide", query: "monastiraki food tour athens market souvlaki greek street food", type: "activity" },
        ],
      },
      {
        name: "Museo Arqueológico Nacional",
        type: "Museo",
        lat: 37.9892, lng: 23.7318,
        description: {
          es: "El museo más importante de Grecia. La máscara de Agamenón, el Poseidón de bronce de Artemision y la colección de Thera — frescos minoicos del 1600 a.C. que parecen pintados ayer. Se necesitan tres horas mínimo para verlo con sentido.",
          en: "The most important museum in Greece. The Mask of Agamemnon, the bronze Poseidon of Artemision and the Thera collection — Minoan frescoes from 1600 BC that look painted yesterday. You need a minimum of three hours to see it properly.",
        },
        rating: 4.8, priceRange: "€12",
        affiliateLinks: [
          { label: { es: "Tour guiado Museo Arqueológico", en: "National Archaeological Museum guided tour" }, partner: "civitatis", query: "national archaeological museum athens guided tour ancient greece", type: "activity" },
        ],
      },
      {
        name: "Cabo Sounion",
        type: "Excursión",
        lat: 37.6517, lng: 24.0260,
        description: {
          es: "A 70km de Atenas, el templo de Poseidón sobre el acantilado — del siglo V a.C. — con el Egeo azul en todas direcciones. Lord Byron grabó su nombre en una columna (sigue ahí). La puesta de sol desde el promontorio es uno de los mejores momentos del país.",
          en: "70km from Athens, the Temple of Poseidon on the cliff — 5th century BC — with the Aegean blue in every direction. Lord Byron carved his name on a column (it's still there). The sunset from the promontory is one of the best moments in the country.",
        },
        rating: 4.8, priceRange: "€20 entrada + transporte",
        affiliateLinks: [
          { label: { es: "Excursión Cabo Sounion desde Atenas", en: "Cape Sounion day trip from Athens" }, partner: "civitatis", query: "cape sounion day trip athens temple poseidon sunset", type: "activity" },
        ],
      },
    ],
    events: [
      {
        name: "Festival de Atenas y Epidauro 2026",
        type: "cultural",
        date: "Jun–Sep 2026",
        venue: "Odeón de Herodes Ático, Atenas",
        description: {
          es: "El festival cultural más importante de Grecia. Ópera, teatro y música en el Odeón de Herodes Ático — un teatro al aire libre del año 161 d.C. al pie de la Acrópolis. La experiencia de ver un concierto con la Acrópolis iluminada de fondo y el cielo mediterráneo encima es una de las más memorables de Europa.",
          en: "Greece's most important cultural festival. Opera, theatre and music at the Odeon of Herodes Atticus — an open-air theatre from 161 AD at the foot of the Acropolis. The experience of attending a concert with the illuminated Acropolis behind you and the Mediterranean sky above is one of the most memorable in Europe.",
        },
        affiliateLinks: [
          { label: { es: "Entradas Festival de Atenas 2026", en: "Athens Festival 2026 tickets" }, partner: "tiqets", query: "athens epidaurus festival 2026 odeon herodes atticus tickets", type: "tickets" },
        ],
        urgency: false,
      },
      {
        name: "Maratón de Atenas 2026",
        type: "sport",
        date: "Nov 2026",
        venue: "Maratón – Estadio Panatenaico",
        description: {
          es: "El maratón original: desde la ciudad de Maratón hasta el Estadio Panatenaico, el mismo recorrido de Filípides en el 490 a.C. Terminar dentro del estadio de mármol blanco construido en 1896 para los primeros Juegos Olímpicos modernos es uno de los momentos más singulares del deporte amateur mundial.",
          en: "The original marathon: from the town of Marathon to the Panathenaic Stadium, the same route Pheidippides ran in 490 BC. Finishing inside the white marble stadium built in 1896 for the first modern Olympic Games is one of the most singular moments in amateur sport worldwide.",
        },
        affiliateLinks: [],
        urgency: true,
      },
      {
        name: "Synch Festival 2026",
        type: "electronic",
        date: "Jun 2026",
        venue: "Parque Fáliro, Atenas",
        description: {
          es: "El festival de música electrónica más importante de Grecia. El Parque Fáliro, con la bahía de Atenas de fondo, alberga los nombres más relevantes del circuito europeo de techno. Las noches de verano atenienses — calor seco, brisa del Egeo, amanecer visible desde la pista — hacen que la experiencia sea difícil de reproducir.",
          en: "Greece's most important electronic music festival. Faliron Park, with the Athens bay as backdrop, hosts the most relevant names on the European techno circuit. Athenian summer nights — dry heat, Aegean breeze, sunrise visible from the dancefloor — make the experience difficult to reproduce elsewhere.",
        },
        affiliateLinks: [],
        urgency: false,
      },
    ],
    services: {
      tickets:    ["tiqets", "getyourguide"],
      activity:   ["getyourguide", "civitatis"],
      hotel:      ["booking", "hostelworld"],
      insurance:  ["safetywing", "worldnomads"],
      esim:       ["airalo", "saily"],
    },
    content: {
      es: `La primera impresión de Atenas es el caos. El tráfico, el ruido, los grafitis sobre mármol antiguo, la mezcla de cinco mil años de arquitectura en la misma manzana — un templo clásico, una mezquita otomana, un neoclásico del XIX y un bloque de hormigón de los setenta, todo en cien metros. La segunda impresión es que el caos tiene sentido. Y la tercera, que no querrías que fuera de otra manera.

La Acrópolis desde abajo parece razonablemente impresionante. Desde arriba, caminando por la roca blanca con el Partenón a diez metros, cambia de categoría. No es un monumento: es la referencia de todos los monumentos occidentales de los últimos dos milenios. {{CTA:tickets:tiqets:acropolis athens skip the line entry ticket 2026:Entra sin colas}} y llega a las 8am — las dos primeras horas antes de que lleguen los grupos organizados son el único momento del día en que el sitio respira.

El Museo de la Acrópolis es la otra mitad de la visita y se subestima sistemáticamente. La sala del Partenón en el tercer piso — con las esculturas originales del friso y los moldes grises de las que están en el British Museum — es uno de los argumentos más elocuentes sobre repatriación cultural que existen. Los huecos lo dicen todo. {{CTA:activity:getyourguide:acropolis athens early morning guided tour sunrise:Con guía desde primera hora}} el contexto histórico convierte una visita correcta en una experiencia completa.

El Museo Arqueológico Nacional no está en la Acrópolis — está en Exarchia, a veinte minutos andando desde Monastiraki. El error es no ir. La máscara de Agamenón, el Poseidón de bronce de Artemision (uno de los mejores bronces griegos que existen), la colección de Thera con frescos minoicos de 3.600 años — pinturas murales que conservan la frescura de algo hecho la semana pasada. {{CTA:activity:civitatis:national archaeological museum athens guided tour ancient greece:Con guía especializado}} la colección cobra una dimensión que el recorrido libre no da.

Monastiraki es donde se come y se vive. El souvlaki de cerdo en pan pita con tzatziki, tomate y cebolla roja cuesta dos euros en los puestos del mercado. {{CTA:activity:getyourguide:monastiraki food tour athens market souvlaki greek street food:Un tour gastronómico por Monastiraki}} es la manera más honesta de entender que la gastronomía griega no termina en la ensalada horiatiki. Los mezedes — pequeñas raciones de pulpo a la brasa, taramasalata, dolmades, feta con miel — son el formato de comida más sociable de Europa.

Plaka, el barrio neoclásico a los pies de la Acrópolis, tiene la densidad turística predecible pero también las mejores vistas de la colina. Anafiotika — el micro-barrio dentro de Plaka construido por albañiles de la isla de Anafi en el siglo XIX — es el único sitio de Atenas que no parece Atenas: casas encaladas, callejones de un metro de ancho, macetas con geranios. Pleno centro, sin carteles, sin turistas durante veinte minutos.

Cabo Sounion es la excursión que no te puedes perder si llevas más de dos noches. El templo de Poseidón del siglo V a.C. en el acantilado, con el Egeo en todas direcciones y la firma de Lord Byron en una columna. {{CTA:activity:civitatis:cape sounion day trip athens temple poseidon sunset:La excursión de día completo desde Atenas}} incluye paradas en la Riviera Ateniense. La puesta de sol desde el promontorio — el mar rojo, las columnas de mármol en silueta — es uno de esos momentos que justifican el viaje aunque el resto hubiera sido mediocre. No lo es.

Para el Festival de Atenas y Epidauro en verano: el Odeón de Herodes Ático, al pie de la Acrópolis, lleva celebrando teatro y música desde el año 161 d.C. {{CTA:tickets:tiqets:athens epidaurus festival 2026 odeon herodes atticus tickets:Entradas para el Festival 2026}} — la programación incluye ópera, teatro clásico y música contemporánea en uno de los escenarios más singulares de Europa.

Para moverse: el metro es eficiente y barato — la línea 3 conecta el aeropuerto con el centro en 40 minutos. La tarjeta de 24 horas (4,50€) cubre metro, autobús y tranvía. {{CTA:service:airalo:airalo esim greece:Una eSIM de Airalo para Grecia}} funciona desde el momento del aterrizaje — la cobertura 4G/5G en el centro es excelente. {{CTA:hotel:booking:athens boutique hotel acropolis view:Compara hoteles en Atenas}} — los mejores meses por precio son mayo-junio y septiembre-octubre; julio-agosto sube considerablemente. Para seguro de viaje: {{CTA:insurance:safetywing:safetywing travel insurance greece:SafetyWing cubre Grecia}} con cobertura médica desde 45€/mes.`,

      en: `The first impression of Athens is chaos. The traffic, the noise, the graffiti on ancient marble, the mixture of five thousand years of architecture on the same block — a classical temple, an Ottoman mosque, a 19th-century neoclassical building and a 1970s concrete block, all within a hundred metres. The second impression is that the chaos makes sense. And the third, that you wouldn't want it any other way.

The Acropolis from below seems reasonably impressive. From above, walking on the white rock with the Parthenon ten metres away, it changes category. It's not a monument: it's the reference point for all Western monuments of the past two millennia. {{CTA:tickets:tiqets:acropolis athens skip the line entry ticket 2026:Skip the queue}} and arrive at 8am — the first two hours before organised groups arrive are the only time of day when the place can breathe.

The Acropolis Museum is the other half of the visit and is systematically underestimated. The Parthenon hall on the third floor — with original frieze sculptures and grey casts of the ones in the British Museum — is one of the most eloquent arguments about cultural repatriation that exists. The gaps say everything. {{CTA:activity:getyourguide:acropolis athens early morning guided tour sunrise:With a guide from the start}} the historical context turns a good visit into a complete experience.

The National Archaeological Museum is not at the Acropolis — it's in Exarchia, twenty minutes on foot from Monastiraki. The mistake is not going. The Mask of Agamemnon, the bronze Poseidon of Artemision (one of the finest existing Greek bronzes), the Thera collection with Minoan frescoes 3,600 years old — wall paintings that preserve the freshness of something made last week. {{CTA:activity:civitatis:national archaeological museum athens guided tour ancient greece:With a specialist guide}} the collection takes on a dimension that self-guided visiting doesn't provide.

Monastiraki is where you eat and live. Pork souvlaki in pita bread with tzatziki, tomato and red onion costs two euros at the market stalls. {{CTA:activity:getyourguide:monastiraki food tour athens market souvlaki greek street food:A food tour of Monastiraki}} is the most honest way to understand that Greek gastronomy doesn't end with horiatiki salad. Mezedes — small portions of grilled octopus, taramasalata, dolmades, feta with honey and walnuts — are the most sociable eating format in Europe.

Plaka, the neoclassical neighbourhood at the foot of the Acropolis, has the predictable tourist density but also the best views of the hill. Anafiotika — the micro-neighbourhood within Plaka built by stonemasons from the island of Anafi in the 19th century — is the only place in Athens that doesn't look like Athens: whitewashed houses, one-metre-wide alleys, pots of geraniums. Dead centre, no signs, no tourists for twenty minutes.

Cape Sounion is the day trip you cannot miss if you're staying more than two nights. The 5th century BC Temple of Poseidon on the cliff, with the Aegean in every direction and Lord Byron's signature on a column. {{CTA:activity:civitatis:cape sounion day trip athens temple poseidon sunset:The full-day excursion from Athens}} includes stops on the Athenian Riviera. The sunset from the promontory — the red sea, the marble columns in silhouette — is one of those moments that justify the trip even if the rest had been mediocre. It isn't.

For the Athens and Epidaurus Festival in summer: the Odeon of Herodes Atticus, at the foot of the Acropolis, has been staging theatre and music since 161 AD. {{CTA:tickets:tiqets:athens epidaurus festival 2026 odeon herodes atticus tickets:Festival 2026 tickets}} — the programme includes opera, classical theatre and contemporary music in one of Europe's most singular venues.

Getting around: the metro is efficient and cheap — Line 3 connects the airport to the centre in 40 minutes. The 24-hour card (€4.50) covers metro, bus and tram. {{CTA:service:airalo:airalo esim greece:An Airalo eSIM for Greece}} works from the moment of landing — 4G/5G coverage in the centre is excellent. {{CTA:hotel:booking:athens boutique hotel acropolis view:Compare hotels in Athens}} — the best months for prices are May-June and September-October; July-August rises considerably. For travel insurance: {{CTA:insurance:safetywing:safetywing travel insurance greece:SafetyWing covers Greece}} with medical coverage from €45/month.`,
    },
    faq: {
      es: [
        { question: "¿Cuántos días necesito para ver Atenas?", answer: "Con 3 días completos puedes ver lo esencial: Acrópolis y su museo el primer día, Museo Arqueológico Nacional y Monastiraki el segundo, excursión a Cabo Sounion el tercero. Con 4-5 días puedes añadir el Pireo, explorar Exarchia y hacer una escapada a las islas cercanas (Hidra, Egina o Poros en barco rápido)." },
        { question: "¿Cuál es la mejor época para visitar Atenas?", answer: "Abril-junio y septiembre-octubre. El verano (julio-agosto) tiene temperaturas de 38-40°C, multitudes en la Acrópolis y precios de hotel en máximos. La primavera y el otoño tienen clima perfecto para caminar, precios razonables y menos colas. El invierno es suave (10-15°C) y la ciudad funciona con normalidad." },
        { question: "¿Es Atenas cara para viajar?", answer: "Atenas es una de las capitales europeas más asequibles. Un menú del día en restaurante local cuesta 10-15€. El souvlaki en Monastiraki sale por 2-3€. El transporte público diario no supera los 5€. Un hotel de 3 estrellas en temporada media está entre 70-120€/noche. Significativamente más barata que Lisboa, Roma o Barcelona." },
      ],
      en: [
        { question: "How many days do I need to see Athens?", answer: "With 3 full days you can cover the essentials: Acropolis and its museum on day one, National Archaeological Museum and Monastiraki on day two, Cape Sounion excursion on day three. With 4-5 days you can add Piraeus, explore Exarchia and take a trip to the nearest islands (Hydra, Aegina or Poros by fast ferry)." },
        { question: "What's the best time to visit Athens?", answer: "April-June and September-October. Summer (July-August) has temperatures of 38-40°C, crowds at the Acropolis and hotel prices at their peak. Spring and autumn have perfect weather for walking, reasonable prices and shorter queues. Winter is mild (10-15°C) and the city runs normally." },
        { question: "Is Athens expensive to visit?", answer: "Athens is one of Europe's most affordable capitals. A set lunch at a local restaurant costs €10-15. Souvlaki in Monastiraki runs €2-3. Daily public transport doesn't exceed €5. A decent 3-star hotel in mid-season runs €70-120/night. Significantly cheaper than Lisbon, Rome or Barcelona." },
      ],
    },
  },

  // ─────────────────────────────────────────────
  // SYDNEY
  // ─────────────────────────────────────────────
  {
    id: "sydney-guia-2026",
    slug: "sydney-guia-2026",
    enSlug: "sydney-travel-guide-2026",
    narrator: "marcos",
    heroImage: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2070&auto=format&fit=crop",
    city: "Sydney",
    country: { es: "Australia", en: "Australia" },
    emoji: "🦘",
    date: "2026-03-13",
    readTime: "9 min",
    category: "oceania",
    title: {
      es: "Sydney 2026: La ciudad más espectacular del mundo que nadie sabe cómo pronunciar",
      en: "Sydney 2026: The Most Spectacular City in the World That Nobody Knows How to Pronounce",
    },
    subtitle: {
      es: "Ópera, Bondi, el puente y Vivid Sydney: una ciudad construida alrededor de uno de los puertos naturales más hermosos del planeta",
      en: "Opera House, Bondi, the Bridge and Vivid Sydney: a city built around one of the most beautiful natural harbours on the planet",
    },
    excerpt: {
      es: "Sydney es cara, está lejos, y no importa. El puerto a las 6am con el sol saliendo detrás del puente es uno de los momentos más difíciles de olvidar del mundo.",
      en: "Sydney is expensive, it's far away, and none of that matters. The harbour at 6am with the sun rising behind the bridge is one of the hardest things to forget in the world.",
    },
    metaDescription: {
      es: "Guía de Sydney 2026: Ópera de Sydney, Bondi Beach, Harbour Bridge y Blue Mountains. Qué ver, dónde comer y cuándo ir. Vivid Sydney incluido.",
      en: "Sydney guide 2026: Sydney Opera House, Bondi Beach, Harbour Bridge and Blue Mountains. What to see, where to eat and when to go. Vivid Sydney included.",
    },
    keywords: {
      es: ["sydney 2026", "que ver en sydney", "opera house sydney", "bondi beach", "vivid sydney", "guia viaje australia"],
      en: ["sydney 2026", "what to see in sydney", "sydney opera house", "bondi beach", "vivid sydney", "australia travel guide"],
    },
    pointsOfInterest: [
      {
        name: "Ópera de Sydney",
        type: "Monumento",
        lat: -33.8568, lng: 151.2153,
        description: {
          es: "La Ópera de Sydney no es solo un edificio: es el argumento más convincente de que la arquitectura puede ser, además de funcional, emocionante. Las cáscaras de hormigón de Jørn Utzon — construidas entre 1959 y 1973 con tecnología que no existía cuando empezaron — siguen siendo la referencia de que lo imposible puede ejecutarse si alguien se empeña suficientemente. El interior se visita con tour; el exterior y los escalones de Bennelong Point son de acceso libre.",
          en: "The Sydney Opera House is not just a building: it's the most convincing argument that architecture can be, in addition to functional, genuinely exciting. Jørn Utzon's concrete shells — built between 1959 and 1973 with technology that didn't exist when they started — remain the reference for the idea that the impossible can be executed if someone is determined enough. The interior can be visited by tour; the exterior and Bennelong Point steps are freely accessible.",
        },
        rating: 4.9, priceRange: "Tour desde AUD 44",
        affiliateLinks: [
          { label: { es: "Tour Ópera de Sydney", en: "Sydney Opera House guided tour" }, partner: "getyourguide", query: "sydney opera house guided tour inside backstage", type: "activity" },
          { label: { es: "Entradas espectáculo en la Ópera", en: "Sydney Opera House performance tickets" }, partner: "tiqets", query: "sydney opera house performance tickets 2026", type: "tickets" },
        ],
      },
      {
        name: "Bondi Beach",
        type: "Playa",
        lat: -33.8908, lng: 151.2743,
        description: {
          es: "La playa urbana más famosa del hemisferio sur y, en temporada (noviembre-marzo), probablemente la más dinámica del mundo. El paseo costero de Bondi a Coogee — seis kilómetros de acantilados, piscinas de roca y playas intermedias — es la caminata urbana más cinematográfica de Australia. La piscina de Bondi Icebergs, construida sobre las rocas con el Pacífico golpeando el borde, es obligatoria aunque no nades.",
          en: "The most famous urban beach in the Southern Hemisphere and, in season (November-March), probably the most dynamic in the world. The coastal walk from Bondi to Coogee — six kilometres of cliffs, rock pools and intermediate beaches — is the most cinematic urban walk in Australia. The Bondi Icebergs pool, built on the rocks with the Pacific crashing against the edge, is compulsory even if you don't swim.",
        },
        rating: 4.8, priceRange: "Libre",
        affiliateLinks: [
          { label: { es: "Tour Bondi Beach y paseo costero", en: "Bondi Beach and coastal walk tour" }, partner: "getyourguide", query: "bondi beach coastal walk coogee sydney tour", type: "activity" },
        ],
      },
      {
        name: "Harbour Bridge",
        type: "Monumento",
        lat: -33.8523, lng: 151.2108,
        description: {
          es: "Cruzar el puente a pie es gratis y da las mejores vistas del puerto y la Ópera. Subir al arco — el BridgeClimb — cuesta unos 200 dólares australianos y da las mejores vistas de Sydney desde 134 metros de altura. Vale la pena si el presupuesto lo permite; el cruce a pie ya es de por sí suficientemente espectacular.",
          en: "Crossing the bridge on foot is free and gives the best views of the harbour and Opera House. Climbing the arch — BridgeClimb — costs around AUD 200 and gives the best views of Sydney from 134 metres up. Worth it if the budget allows; the on-foot crossing is already spectacular enough on its own.",
        },
        rating: 4.8, priceRange: "Gratis (pie) / AUD 200 (arco)",
        affiliateLinks: [
          { label: { es: "Tour panorámico del puerto de Sydney", en: "Sydney Harbour panoramic cruise" }, partner: "getyourguide", query: "sydney harbour cruise panoramic opera house bridge", type: "activity" },
        ],
      },
      {
        name: "Montañas Azules",
        type: "Excursión",
        lat: -33.7153, lng: 150.3115,
        description: {
          es: "A 90 minutos de Sydney en tren, el Parque Nacional de las Blue Mountains tiene los Three Sisters — la formación rocosa más fotografiada de Australia — el Gran Cañón del Yarramundi y el ferrocarril más empinado del mundo (52 grados). La niebla de aceite de eucalipto que da el color azul al horizonte en los días claros es fenómeno real, no postal turística.",
          en: "90 minutes from Sydney by train, the Blue Mountains National Park has the Three Sisters — the most photographed rock formation in Australia — the Yarramundi Grand Canyon and the steepest railway in the world (52 degrees). The eucalyptus oil mist that gives the horizon its blue colour on clear days is a real phenomenon, not a tourist poster.",
        },
        rating: 4.8, priceRange: "Desde AUD 99 (excursión)",
        affiliateLinks: [
          { label: { es: "Excursión Montañas Azules desde Sydney", en: "Blue Mountains day trip from Sydney" }, partner: "getyourguide", query: "blue mountains day trip sydney three sisters katoomba", type: "activity" },
        ],
      },
      {
        name: "The Rocks",
        type: "Barrio",
        lat: -33.8599, lng: 151.2090,
        description: {
          es: "El barrio más antiguo de Sydney, donde la Primera Flota desembarcó en 1788. Las calles empedradas, los almacenes de piedra convertidos en bares y el mercado del fin de semana son el contraste perfecto con el CBD de cristal que empieza justo detrás. El Saturday Market tiene el mejor street food de la ciudad.",
          en: "Sydney's oldest neighbourhood, where the First Fleet landed in 1788. The cobbled streets, stone warehouses converted into bars and the weekend market are the perfect contrast with the glass CBD that starts just behind it. The Saturday Market has the best street food in the city.",
        },
        rating: 4.6, priceRange: "Libre",
        affiliateLinks: [
          { label: { es: "Tour histórico The Rocks", en: "The Rocks historical walking tour" }, partner: "getyourguide", query: "the rocks sydney historical walking tour colonial history", type: "activity" },
        ],
      },
    ],
    events: [
      {
        name: "Vivid Sydney 2026",
        type: "art",
        date: "May–Jun 2026",
        venue: "Puerto de Sydney",
        description: {
          es: "El festival de luz, música e ideas más grande del hemisferio sur. Durante tres semanas, la Ópera, el Harbour Bridge, el CBD y el puerto se convierten en instalaciones de luz interactiva a escala arquitectónica. Gratuito en su mayor parte, con algunos espectáculos de pago. El reflejo de las instalaciones en el puerto de noche es la imagen que define Sydney en 2026.",
          en: "The largest festival of light, music and ideas in the Southern Hemisphere. For three weeks, the Opera House, Harbour Bridge, CBD and harbour become interactive light installations at architectural scale. Mostly free, with some ticketed shows. The reflection of the installations in the harbour at night is the defining image of Sydney in 2026.",
        },
        affiliateLinks: [],
        urgency: false,
      },
      {
        name: "Sydney Festival 2026",
        type: "cultural",
        date: "Ene 2026",
        venue: "Sydney (varios recintos)",
        description: {
          es: "El festival cultural de verano australiano más importante. Tres semanas de teatro, música, danza y arte visual en una ciudad que, en enero, vive literalmente en la calle. La programación al aire libre en Hyde Park y en el puerto es gratuita. Es también el mes con el tiempo más perfecto del año en Sydney.",
          en: "Australia's most important summer cultural festival. Three weeks of theatre, music, dance and visual art in a city that, in January, literally lives in the street. The outdoor programme in Hyde Park and at the harbour is free. It's also the month with the most perfect weather of the year in Sydney.",
        },
        affiliateLinks: [],
        urgency: false,
      },
      {
        name: "Nochevieja en el Puerto 2026",
        type: "festival",
        date: "31 Dic 2026",
        venue: "Puerto de Sydney",
        description: {
          es: "Los fuegos artificiales del Puerto de Sydney en Nochevieja son los primeros en verse en las ciudades más pobladas del mundo — Sydney es una de las primeras capitales en entrar en el año nuevo. El espectáculo desde Circular Quay, Mrs Macquaries Point o Cremorne Point tiene una escala que la televisión no transmite fielmente. Las mejores ubicaciones se llenan horas antes.",
          en: "The Sydney Harbour fireworks on New Year's Eve are among the first seen in the world's most populated cities — Sydney is one of the first major capitals to enter the new year. The spectacle from Circular Quay, Mrs Macquaries Point or Cremorne Point has a scale that television doesn't faithfully convey. The best locations fill up hours in advance.",
        },
        affiliateLinks: [
          { label: { es: "Crucero Nochevieja Puerto de Sydney", en: "Sydney Harbour New Year's Eve cruise" }, partner: "getyourguide", query: "sydney harbour new year eve fireworks cruise dinner 2026", type: "tickets" },
        ],
        urgency: true,
      },
    ],
    services: {
      tickets:    ["tiqets", "getyourguide"],
      activity:   ["getyourguide", "klook"],
      hotel:      ["booking", "hostelworld"],
      insurance:  ["safetywing", "worldnomads"],
      esim:       ["airalo", "saily"],
    },
    content: {
      es: `Sydney es cara. Cara de verdad — no cara como Barcelona comparada con una ciudad pequeña, sino cara como ciudad que consistentemente aparece en los diez primeros puestos de los rankings de coste de vida del mundo. Una cerveza en un bar cuesta ocho dólares australianos. Un café con leche, seis. El transporte, los hoteles, la comida fuera de mercados — todo tiene un multiplicador que el presupuesto europeo no anticipa. Dicho esto: el puerto a las 6am con el sol saliendo detrás del Harbour Bridge y la Ópera en primer plano es posiblemente el despertar urbano más espectacular del planeta. El precio, de repente, parece razonable.

La Ópera de Sydney no decepcionará aunque hayas visto mil fotos. La escala en vivo cambia la referencia — el edificio es más grande y más complejo de lo que las fotos sugieren. {{CTA:activity:getyourguide:sydney opera house guided tour inside backstage:El tour interior}} accede a las salas de concierto, los camerinos y los espacios que los visitantes externos no ven. Si coincide con la programación de la temporada: {{CTA:tickets:tiqets:sydney opera house performance tickets 2026:Ver un espectáculo en la Ópera}} es la forma más completa de entender por qué el edificio existe. La acústica de la Concert Hall está entre las cinco mejores del mundo.

Bondi Beach en noviembre — el inicio del verano austral — tiene la energía que solo tienen los sitios donde la gente vive de verdad en la playa, no donde va a hacerse fotos. El paseo costero de Bondi a Coogee son seis kilómetros de acantilados, piscinas de roca naturales y playas intermedias menos conocidas. {{CTA:activity:getyourguide:bondi beach coastal walk coogee sydney tour:Un tour guiado del paseo costero}} da contexto geológico e histórico que convierte una caminata bonita en algo más sustancial. La piscina de Bondi Icebergs — construida sobre las rocas con el Pacífico golpeando el borde — cobra AUD 9 la entrada. Es el baño más cinematográfico del mundo y el precio es absurdamente razonable.

Las Blue Mountains son la excursión obligatoria del primer o segundo día. A 90 minutos en tren desde Central Station — el ferrocarril es barato y funciona — el Parque Nacional tiene los Three Sisters, el Grand Canyon de Yarramundi y un horizonte teñido de azul por el aceite de eucalipto de los árboles. {{CTA:activity:getyourguide:blue mountains day trip sydney three sisters katoomba:La excursión de día completo desde Sydney}} organiza el transporte y las paradas; ir por cuenta propia en tren a Katoomba también funciona y cuesta unos AUD 12.

The Rocks, el barrio colonial al pie del Harbour Bridge, tiene los sábados el mejor mercado de street food de la ciudad. El sábado por la mañana, entre las instalaciones de Vivid Sydney y los barcos en el puerto, es el momento más intenso de Sydney. {{CTA:activity:getyourguide:the rocks sydney historical walking tour colonial history:Un tour histórico por The Rocks}} explica por qué la ciudad tiene su carácter específico — la historia de la Primera Flota, la convict era y el desarrollo del puerto lo dan en perspectiva.

Vivid Sydney en mayo-junio convierte el puerto en el festival de iluminación más grande del hemisferio sur. La Ópera proyectada con instalaciones de luz interactiva, el Harbour Bridge integrado en las animaciones, el CBD iluminado al completo. Gratuito en su mayor parte. {{CTA:activity:getyourguide:sydney harbour cruise panoramic opera house bridge:Un crucero por el puerto durante Vivid}} da la perspectiva completa desde el agua — la única forma de ver simultáneamente todas las instalaciones del festival.

Para la logística: la Opal Card del transporte público cubre metro, autobús, ferry y tren. El ferry del puerto — AUD 4 desde Circular Quay hasta Manly — es la excursión más barata y más bonita de la ciudad. {{CTA:service:airalo:airalo esim australia:Una eSIM de Airalo para Australia}} funciona con cobertura 4G/5G excelente en toda la ciudad y la costa. Para el alojamiento: {{CTA:hotel:booking:sydney hotel harbour view:Compara hoteles en Sydney}} — Newtown y Surry Hills ofrecen más carácter y mejores precios que el CBD. Para el seguro: {{CTA:insurance:safetywing:safetywing travel insurance australia:SafetyWing cubre Australia}} y es especialmente importante dado el coste de la sanidad privada australiana.`,

      en: `Sydney is expensive. Actually expensive — not expensive like Barcelona compared to a small city, but expensive like a city that consistently appears in the world's top ten cost-of-living rankings. A beer in a bar costs eight Australian dollars. A flat white, six. Transport, hotels, food outside markets — everything has a multiplier that the European budget doesn't anticipate. That said: the harbour at 6am with the sun rising behind the Harbour Bridge and the Opera House in the foreground is possibly the most spectacular urban awakening on the planet. The price suddenly seems reasonable.

The Sydney Opera House will not disappoint even if you've seen a thousand photos. The live scale changes the reference — the building is bigger and more complex than photos suggest. {{CTA:activity:getyourguide:sydney opera house guided tour inside backstage:The interior tour}} accesses the concert halls, dressing rooms and spaces external visitors never see. If it coincides with the season's programme: {{CTA:tickets:tiqets:sydney opera house performance tickets 2026:Attending a performance at the Opera House}} is the most complete way to understand why the building exists. The Concert Hall's acoustics are among the five best in the world.

Bondi Beach in November — the start of the Australian summer — has the energy that only exists in places where people actually live in the beach, not where they go to take photos. The coastal walk from Bondi to Coogee is six kilometres of cliffs, natural rock pools and less-known intermediate beaches. {{CTA:activity:getyourguide:bondi beach coastal walk coogee sydney tour:A guided tour of the coastal walk}} gives geological and historical context that turns a beautiful hike into something more substantial. The Bondi Icebergs pool — built on the rocks with the Pacific crashing against the edge — charges AUD 9 entry. It's the most cinematic swim in the world and the price is absurdly reasonable.

The Blue Mountains are the mandatory excursion for day one or two. 90 minutes by train from Central Station — the railway is cheap and works — the National Park has the Three Sisters, Yarramundi Grand Canyon and a horizon tinted blue by the eucalyptus oil from the trees. {{CTA:activity:getyourguide:blue mountains day trip sydney three sisters katoomba:The full-day excursion from Sydney}} organises transport and stops; going independently by train to Katoomba also works and costs around AUD 12.

The Rocks, the colonial neighbourhood at the foot of the Harbour Bridge, has the city's best street food market on Saturdays. Saturday morning, between the Vivid Sydney installations and the boats in the harbour, is Sydney's most intense moment. {{CTA:activity:getyourguide:the rocks sydney historical walking tour colonial history:A historical tour of The Rocks}} explains why the city has its specific character — the story of the First Fleet, the convict era and the harbour's development put it in perspective.

Vivid Sydney in May-June turns the harbour into the Southern Hemisphere's largest light festival. The Opera House projected with interactive light installations, the Harbour Bridge integrated into the animations, the CBD fully illuminated. Mostly free. {{CTA:activity:getyourguide:sydney harbour cruise panoramic opera house bridge:A harbour cruise during Vivid}} gives the complete perspective from the water — the only way to simultaneously see all the festival installations.

For logistics: the Opal Card covers metro, bus, ferry and train. The harbour ferry — AUD 4 from Circular Quay to Manly — is the city's cheapest and most beautiful excursion. {{CTA:service:airalo:airalo esim australia:An Airalo eSIM for Australia}} works with excellent 4G/5G coverage throughout the city and coast. For accommodation: {{CTA:hotel:booking:sydney hotel harbour view:Compare hotels in Sydney}} — Newtown and Surry Hills offer more character and better prices than the CBD. For insurance: {{CTA:insurance:safetywing:safetywing travel insurance australia:SafetyWing covers Australia}} — particularly important given the cost of Australian private healthcare.`,
    },
    faq: {
      es: [
        { question: "¿Cuándo es mejor ir a Sydney?", answer: "Octubre-noviembre y marzo-abril son los mejores meses: clima perfecto (20-26°C), sin el pico de diciembre-enero y más asequible. Enero tiene el Sydney Festival y el clima más cálido pero también los precios más altos. Mayo-junio tiene Vivid Sydney — el festival de luz es razón suficiente para ir." },
        { question: "¿Es Sydney muy cara para los viajeros europeos?", answer: "Sí, significativamente. El tipo de cambio (1€ ≈ 1,65 AUD en 2026) compensa en parte, pero los precios locales son altos: un menú en restaurante mid-range cuesta AUD 25-40, el alojamiento AUD 150-300/noche en hotel decente. Los mercados, el transporte público y las playas son asequibles. Presupuesta al menos 100-150€/día todo incluido sin vuelos." },
        { question: "¿Cuántos días necesito en Sydney?", answer: "Con 4 días tienes lo esencial: Ópera y The Rocks el primero, Bondi y el paseo costero el segundo, Blue Mountains el tercero y el puerto + barrio de Newtown el cuarto. Con más tiempo: Taronga Zoo, las Northern Beaches, el Royal National Park o una escapada a las Hunter Valley wineries." },
      ],
      en: [
        { question: "When is the best time to visit Sydney?", answer: "October-November and March-April are the best months: perfect weather (20-26°C), without the December-January peak and more affordable. January has the Sydney Festival and the warmest weather but also the highest prices. May-June has Vivid Sydney — the light festival is reason enough to go." },
        { question: "Is Sydney very expensive for European travellers?", answer: "Yes, significantly. The exchange rate (€1 ≈ AUD 1.65 in 2026) partly compensates, but local prices are high: a mid-range restaurant meal costs AUD 25-40, accommodation AUD 150-300/night for a decent hotel. Markets, public transport and beaches are affordable. Budget at least €100-150/day all-in excluding flights." },
        { question: "How many days do I need in Sydney?", answer: "With 4 days you have the essentials: Opera House and The Rocks on day one, Bondi and the coastal walk on day two, Blue Mountains on day three and the harbour plus Newtown neighbourhood on day four. With more time: Taronga Zoo, the Northern Beaches, Royal National Park or a trip to the Hunter Valley wineries." },
      ],
    },
  },

  // ─────────────────────────────────────────────
  // TIFLIS (TBILISI)
  // ─────────────────────────────────────────────
  {
    id: "tiflis-guia-2026",
    slug: "tiflis-guia-2026",
    enSlug: "tbilisi-travel-guide-2026",
    narrator: "elena",
    heroImage: "https://images.unsplash.com/photo-1565008576549-57569a49371d?q=80&w=2070&auto=format&fit=crop",
    city: { es: "Tiflis", en: "Tbilisi" },
    country: { es: "Georgia", en: "Georgia" },
    emoji: "🇬🇪",
    date: "2026-03-13",
    readTime: "9 min",
    category: "europe",
    title: {
      es: "Tiflis 2026: La capital que todavía no sabe que es la más interesante de Europa",
      en: "Tbilisi 2026: The Capital That Doesn't Know Yet It's the Most Interesting in Europe",
    },
    subtitle: {
      es: "Baños de azufre, vino natural, casco antiguo declarado Patrimonio y la comunidad de nómadas digitales más densa de la región",
      en: "Sulphur baths, natural wine, UNESCO-listed old town and the densest digital nomad community in the region",
    },
    excerpt: {
      es: "Tiflis tiene todo lo que Berlín tenía en 2010: creatividad brutal, precio razonable, escena cultural en ebullición y la sensación de llegar antes de que llegue todo el mundo. Esa ventana no se queda abierta mucho tiempo.",
      en: "Tbilisi has everything Berlin had in 2010: brutal creativity, reasonable prices, a boiling cultural scene and the feeling of arriving before everyone else does. That window doesn't stay open long.",
    },
    metaDescription: {
      es: "Guía de Tiflis 2026: Casco Antiguo, baños de azufre, vino georgiano y Fabrika. Qué ver y hacer en Tiflis. La ciudad más interesante de Europa del Este.",
      en: "Tbilisi guide 2026: Old Town, sulphur baths, Georgian wine and Fabrika. What to see and do in Tbilisi. The most interesting city in Eastern Europe.",
    },
    keywords: {
      es: ["tiflis 2026", "que ver en tiflis", "guia tiflis georgia", "nomada digital tiflis", "tbilisi viaje"],
      en: ["tbilisi 2026", "what to see in tbilisi", "tbilisi georgia travel guide", "digital nomad tbilisi", "georgia travel"],
    },
    pointsOfInterest: [
      {
        name: "Casco Antiguo (Kala)",
        type: "Barrio",
        lat: 41.6900, lng: 44.8010,
        description: {
          es: "El Kala de Tiflis — las calles de madera tallada, los balcones que vuelan sobre los callejones, las iglesias armenias y ortodoxas a metros de distancia, los baños de azufre debajo de las cúpulas — es el conjunto urbano más singular de Europa del Este. No hay un punto de inicio: se camina. El barrio de Abanotubani, con las cúpulas de los baños de azufre sobre el río Mtkvari, es la imagen más reconocible de la ciudad.",
          en: "Tbilisi's Kala district — the carved wooden streets, the balconies that fly out over the alleyways, the Armenian and Orthodox churches metres apart, the sulphur baths beneath the domes — is the most singular urban ensemble in Eastern Europe. There's no starting point: you just walk. The Abanotubani neighbourhood, with the sulphur bath domes above the Mtkvari river, is the city's most recognisable image.",
        },
        rating: 4.9, priceRange: "Libre",
        affiliateLinks: [
          { label: { es: "Tour a pie Casco Antiguo de Tiflis", en: "Tbilisi Old Town walking tour" }, partner: "getyourguide", query: "tbilisi old town walking tour abanotubani narikala history", type: "activity" },
        ],
      },
      {
        name: "Baños de Azufre de Abanotubani",
        type: "Experiencia",
        lat: 41.6862, lng: 44.8073,
        description: {
          es: "Los baños de azufre llevan funcionando en este sitio desde el siglo V. El agua caliente natural — 37-38°C, con olor a azufre que desaparece en veinte minutos — sale directamente del subsuelo. Las opciones van desde baños públicos por dos laris hasta habitaciones privadas con servicio de masaje por 30-50 euros. Alexandre Dumas, Pushkin y Marco Polo mencionaron los baños. Probablemente no hay mejor endorsement posible.",
          en: "The sulphur baths have been operating on this site since the 5th century. The natural hot water — 37-38°C, with a sulphur smell that disappears within twenty minutes — comes directly from underground. Options range from public baths for two laris to private rooms with massage service for €30-50. Alexandre Dumas, Pushkin and Marco Polo all mentioned the baths. There is probably no better endorsement possible.",
        },
        rating: 4.8, priceRange: "2-50 GEL",
        affiliateLinks: [
          { label: { es: "Reserva baños de azufre privados", en: "Book private sulphur bath Tbilisi" }, partner: "getyourguide", query: "tbilisi sulphur bath private abanotubani traditional experience", type: "activity" },
        ],
      },
      {
        name: "Fortaleza de Narikala",
        type: "Monumento",
        lat: 41.6879, lng: 44.8100,
        description: {
          es: "La fortaleza del siglo IV que domina el casco antiguo desde la colina. Sube a pie por las calles del Kala o en el teleférico desde Rike Park. Las vistas sobre la ciudad — el Mtkvari, las cúpulas de los baños, las iglesias, los barrios nuevos al fondo — son las mejores de Tiflis. El atardecer desde las murallas convierte el skyline en algo que los Instagram handles de viaje todavía no han terminado de procesar correctamente.",
          en: "The 4th-century fortress that dominates the old town from the hill. Walk up through the Kala streets or take the cable car from Rike Park. The views over the city — the Mtkvari, the bath domes, the churches, the new districts in the distance — are Tbilisi's best. Sunset from the walls turns the skyline into something that travel Instagram accounts still haven't finished processing correctly.",
        },
        rating: 4.7, priceRange: "Libre",
        affiliateLinks: [
          { label: { es: "Tour Narikala y casco antiguo", en: "Narikala fortress and old town tour" }, partner: "getyourguide", query: "narikala fortress tbilisi old town sunset views tour", type: "activity" },
        ],
      },
      {
        name: "Fabrika",
        type: "Barrio",
        lat: 41.7000, lng: 44.7941,
        description: {
          es: "Una antigua fábrica de costura soviética reconvertida en el espacio cultural más interesante de Tiflis: hostels, estudios de tatuaje, cafeterías de tercera ola, galerías, tiendas de ropa de segunda mano y bares que empiezan a las 10pm. El patio central tiene la concentración de opciones buenas por metro cuadrado más alta de Georgia. Es también el epicentro de la comunidad de nómadas digitales de la ciudad.",
          en: "A former Soviet sewing factory converted into Tbilisi's most interesting cultural space: hostels, tattoo studios, third-wave coffee shops, galleries, vintage clothing stores and bars that start at 10pm. The central courtyard has the highest concentration of good options per square metre in Georgia. It's also the epicentre of the city's digital nomad community.",
        },
        rating: 4.7, priceRange: "Libre",
        affiliateLinks: [],
      },
      {
        name: "Kakheti y las bodegas georgianas",
        type: "Excursión",
        lat: 41.6500, lng: 45.3500,
        description: {
          es: "Georgia es el lugar donde nació el vino — literalmente: las primeras evidencias de vinificación en el mundo datan del 6000 a.C. en este territorio. La región de Kakheti, a 90 minutos de Tiflis, tiene bodegas que producen el vino en ánforas de barro enterradas (qvevri) siguiendo métodos del Neolítico. El vino natural georgiano — sin sulfitos, fermentado con piel, de color ámbar — es una categoría propia. Una excursión de día al valle de Alazani y sus bodegas es una de las mejores inversiones culturales y gastronómicas del viaje.",
          en: "Georgia is where wine was born — literally: the earliest evidence of winemaking in the world dates to 6000 BC in this territory. The Kakheti region, 90 minutes from Tbilisi, has wineries that produce wine in buried clay amphorae (qvevri) following Neolithic methods. Georgian natural wine — without sulphites, skin-fermented, amber in colour — is a category of its own. A day excursion to the Alazani valley and its wineries is one of the best cultural and gastronomic investments of the trip.",
        },
        rating: 4.9, priceRange: "Desde 50€ (excursión)",
        affiliateLinks: [
          { label: { es: "Tour vino georgiano Kakheti", en: "Georgian wine tour Kakheti day trip" }, partner: "getyourguide", query: "kakheti georgia wine tour day trip tbilisi alazani valley qvevri", type: "activity" },
        ],
      },
    ],
    events: [
      {
        name: "Tbilisi Open Air 2026",
        type: "electronic",
        date: "Jul 2026",
        venue: "Tsinandali Estate, Kakheti",
        description: {
          es: "El festival de música electrónica más importante del Cáucaso y uno de los mejor curados de Europa del Este. En el recinto histórico de Tsinandali, en la región vinícola de Kakheti, con artistas del circuito de Berlín, Ámsterdam y Tbilisi. La combinación de música electrónica de alta calidad, vino georgiano y el paisaje del Cáucaso es difícil de superar.",
          en: "The most important electronic music festival in the Caucasus and one of the best-curated in Eastern Europe. At the historic Tsinandali estate in the Kakheti wine region, with artists from the Berlin, Amsterdam and Tbilisi circuits. The combination of high-quality electronic music, Georgian wine and the Caucasus landscape is hard to beat.",
        },
        affiliateLinks: [],
        urgency: false,
      },
      {
        name: "Tbilisi Jazz Festival 2026",
        type: "festival",
        date: "Oct 2026",
        venue: "Centro de Tiflis",
        description: {
          es: "Festival de jazz internacional que lleva décadas consolidado en el calendario cultural de Tiflis. Artistas internacionales y georgianos en los principales recintos del centro histórico. El jazz en Tiflis tiene una tradición específica desde la época soviética — la ciudad fue uno de los pocos lugares del bloque donde el jazz occidental se toleró y desarrolló con cierta libertad.",
          en: "International jazz festival that has been established in Tbilisi's cultural calendar for decades. International and Georgian artists at the main venues in the historic centre. Jazz in Tbilisi has a specific tradition since the Soviet era — the city was one of the few places in the bloc where Western jazz was tolerated and developed with some freedom.",
        },
        affiliateLinks: [],
        urgency: false,
      },
      {
        name: "Rtveli — Vendimia Georgiana 2026",
        type: "gastronomy",
        date: "Sep–Oct 2026",
        venue: "Kakheti, Georgia",
        description: {
          es: "La vendimia georgiana — el Rtveli — es un acontecimiento cultural y social tan importante en Georgia como la Navidad en otros países. Las bodegas de Kakheti abren sus viñedos y qvevris al público. Pisar uva en ánforas de barro, comer en mesas comunales con vino sin parar y entender por qué los georgianos tienen la relación con la hospitalidad que tienen. Una de las experiencias más genuinas disponibles en Europa del Este.",
          en: "The Georgian harvest — the Rtveli — is a cultural and social event as important in Georgia as Christmas is in other countries. The Kakheti wineries open their vineyards and qvevris to the public. Treading grapes in clay amphorae, eating at communal tables with endless wine and understanding why Georgians have the relationship with hospitality that they do. One of the most genuine experiences available in Eastern Europe.",
        },
        affiliateLinks: [
          { label: { es: "Experiencia vendimia georgiana Kakheti", en: "Georgian harvest experience Kakheti" }, partner: "getyourguide", query: "georgia rtveli wine harvest experience kakheti tbilisi", type: "activity" },
        ],
        urgency: false,
      },
    ],
    services: {
      tickets:    ["tiqets", "getyourguide"],
      activity:   ["getyourguide", "civitatis"],
      hotel:      ["booking", "hostelworld"],
      insurance:  ["safetywing", "worldnomads"],
      esim:       ["airalo", "saily"],
    },
    content: {
      es: `Tiflis en 2026 tiene la misma energía que Berlín en 2010, Ámsterdam en 2005 o Lisboa en 2015: la energía de una ciudad que está en el momento en que todo pasa al mismo tiempo pero los precios todavía no lo saben. Un café de especialidad cuesta un euro. Un khinkali — las empanadillas de masa gruesa rellenas de carne picada y caldo — sale por cincuenta céntimos la unidad. Una habitación de hotel boutique en el casco antiguo, 40-60 euros. La ciudad capital más interesante de Europa, por el precio de una semana en cualquier ciudad media del sur de España.

El Kala, el casco antiguo, es el argumento de apertura. Los balcones de madera tallada que sobresalen sobre callejones de dos metros de ancho, las iglesias armenias y georgianas a cincuenta metros de distancia, los baños de azufre con sus cúpulas de ladrillo al borde del río Mtkvari. {{CTA:activity:getyourguide:tbilisi old town walking tour abanotubani narikala history:Un tour a pie por el casco antiguo}} explica la superposición de culturas — persa, árabe, mongola, rusa, soviética, occidental — que hace de Tiflis el conjunto urbano más complejo de la región.

Los baños de azufre de Abanotubani llevan funcionando desde el siglo V. El agua natural sale del subsuelo a 37-38°C, con el olor a azufre que desaparece en veinte minutos. {{CTA:activity:getyourguide:tbilisi sulphur bath private abanotubani traditional experience:Una habitación privada en los baños}} cuesta entre 30 y 50 euros por dos horas — masaje con kisey (guante exfoliante georgiano) incluido si se pide. Pushkin, Dumas y Marco Polo lo mencionaron. La experiencia en 2026 es esencialmente la misma que la de ellos, con la diferencia de que ahora hay wifi.

La fortaleza de Narikala, del siglo IV, domina el casco antiguo desde la colina. El teleférico desde Rike Park cuesta dos laris (menos de un euro). {{CTA:activity:getyourguide:narikala fortress tbilisi old town sunset views tour:El atardecer desde las murallas}} es la mejor panorámica de la ciudad — el río, las cúpulas, los tejados rojos, los bloques soviéticos al fondo y las montañas del Cáucaso en el horizonte. El contraste funciona exactamente igual que el resto de Tiflis: todo junto, sin disculparse.

Fabrika es una antigua fábrica soviética reconvertida en el espacio más vibrante de la ciudad: cafeterías de tercera ola, estudios de tatuaje, hostels, tiendas de ropa vintage y bares que empiezan a las 10pm. Es también el centro neurálgico de la comunidad de nómadas digitales más densa de Europa del Este — en cualquier tarde de martes hay treinta portátiles abiertos en el patio. El coworking en Tiflis cuesta entre 5 y 15 euros al día; la conexión a internet en toda la ciudad es excepcional.

Kakheti, a 90 minutos de Tiflis, es la razón por la que el vino georgiano existe y por la que la UNESCO declaró el método del qvevri Patrimonio de la Humanidad. {{CTA:activity:getyourguide:kakheti georgia wine tour day trip tbilisi alazani valley qvevri:La excursión de un día a las bodegas de Kakheti}} incluye visita a los viñedos, degustación en qvevri y almuerzo georgiano tradicional. El vino naranja georgiano — fermentado con piel, sin sulfitos, color ámbar — es una categoría que no existe en ningún otro lugar del mundo con esta tradición ni a este precio.

En septiembre-octubre: el Rtveli, la vendimia georgiana. {{CTA:activity:getyourguide:georgia rtveli wine harvest experience kakheti tbilisi:Participar en la vendimia}} es pisar uva en ánforas de barro milenarias, comer en mesas comunales que no terminan nunca y entender por qué los georgianos tienen fama de tener la hospitalidad más genuina de Europa. No es turismo: es una invitación.

Para la logística: no se necesita visado para ciudadanos de la UE (hasta 365 días de estancia libre). El aeropuerto de Tiflis tiene conexiones directas desde Madrid, Barcelona y otras ciudades europeas. {{CTA:service:airalo:airalo esim georgia:Una eSIM de Airalo para Georgia}} funciona con buena cobertura en la ciudad y en Kakheti. {{CTA:hotel:booking:tbilisi boutique hotel old town:Compara hoteles en Tiflis}} — el casco antiguo es el mejor barrio para alojarse, con el mayor número de establecimientos boutique por metro cuadrado. La moneda es el lari georgiano (GEL); 1€ ≈ 2,9 GEL en 2026. Todo en efectivo funciona mejor que tarjeta en los establecimientos locales.`,

      en: `Tbilisi in 2026 has the same energy as Berlin in 2010, Amsterdam in 2005 or Lisbon in 2015: the energy of a city in the moment when everything happens at once but the prices don't know it yet. A speciality coffee costs one euro. A khinkali — the thick-dough dumpling filled with minced meat and broth — runs fifty cents each. A boutique hotel room in the old town, €40-60. Europe's most interesting capital city, at the price of a week in any mid-sized city in southern Spain.

The Kala, the old town, is the opening argument. Carved wooden balconies jutting out over two-metre-wide alleyways, Armenian and Georgian churches fifty metres apart, sulphur baths with their brick domes at the edge of the Mtkvari river. {{CTA:activity:getyourguide:tbilisi old town walking tour abanotubani narikala history:A walking tour of the old town}} explains the layering of cultures — Persian, Arab, Mongol, Russian, Soviet, Western — that makes Tbilisi the most complex urban ensemble in the region.

The Abanotubani sulphur baths have been operating since the 5th century. The natural water comes from underground at 37-38°C, with a sulphur smell that disappears within twenty minutes. {{CTA:activity:getyourguide:tbilisi sulphur bath private abanotubani traditional experience:A private room at the baths}} costs between €30-50 for two hours — massage with kisey (Georgian exfoliating glove) included if requested. Pushkin, Dumas and Marco Polo mentioned them. The 2026 experience is essentially the same as theirs, with the difference that there's now wifi.

The Narikala fortress, from the 4th century, dominates the old town from the hill. The cable car from Rike Park costs two laris (less than one euro). {{CTA:activity:getyourguide:narikala fortress tbilisi old town sunset views tour:Sunset from the walls}} is the city's best panorama — the river, the domes, the red rooftops, the Soviet blocks in the background and the Caucasus mountains on the horizon. The contrast works exactly like the rest of Tbilisi: everything together, without apology.

Fabrika is a former Soviet factory converted into the city's most vibrant space: third-wave coffee shops, tattoo studios, hostels, vintage clothing stores and bars that start at 10pm. It's also the nerve centre of Eastern Europe's densest digital nomad community — on any Tuesday afternoon there are thirty open laptops in the courtyard. Coworking in Tbilisi costs €5-15 per day; internet connectivity throughout the city is exceptional.

Kakheti, 90 minutes from Tbilisi, is the reason Georgian wine exists and why UNESCO declared the qvevri method Intangible Cultural Heritage. {{CTA:activity:getyourguide:kakheti georgia wine tour day trip tbilisi alazani valley qvevri:The one-day excursion to Kakheti's wineries}} includes vineyard visits, qvevri tastings and a traditional Georgian lunch. Georgian amber wine — skin-fermented, without sulphites, amber in colour — is a category that exists nowhere else in the world with this tradition at this price.

In September-October: the Rtveli, the Georgian harvest. {{CTA:activity:getyourguide:georgia rtveli wine harvest experience kakheti tbilisi:Participating in the harvest}} means treading grapes in ancient clay amphorae, eating at communal tables that never end and understanding why Georgians have a reputation for the most genuine hospitality in Europe. It's not tourism: it's an invitation.

For logistics: no visa required for EU citizens (up to 365 days free stay). Tbilisi airport has direct connections from major European cities. {{CTA:service:airalo:airalo esim georgia:An Airalo eSIM for Georgia}} works with good coverage in the city and in Kakheti. {{CTA:hotel:booking:tbilisi boutique hotel old town:Compare hotels in Tbilisi}} — the old town is the best neighbourhood to stay, with the highest number of boutique properties per square metre. Currency is the Georgian lari (GEL); €1 ≈ GEL 2.9 in 2026. Everything works better in cash at local establishments.`,
    },
    faq: {
      es: [
        { question: "¿Necesito visado para entrar a Georgia?", answer: "No. Los ciudadanos de la UE (incluidos españoles) pueden entrar a Georgia sin visado y permanecer hasta 365 días. Solo necesitas pasaporte en vigor. El aeropuerto de Tiflis tiene conexiones directas desde Madrid, Barcelona y otras ciudades europeas con Wizz Air, Georgian Airways y otras compañías." },
        { question: "¿Es seguro viajar a Tiflis?", answer: "Sí. Tiflis es una de las ciudades más seguras de Europa del Este para los turistas. El índice de criminalidad es bajo y la ciudad tiene una tradición de hospitalidad hacia los extranjeros muy arraigada. Como en cualquier ciudad, hay que tener precaución normal en zonas de mucho ambiente nocturno y con los objetos de valor en lugares concurridos." },
        { question: "¿Cuánto dinero necesito por día en Tiflis?", answer: "Tiflis es excepcionalmente asequible para europeos. Con 30-40€/día puedes comer muy bien (khinkali, khachapuri, vino georgiano), moverte en la ciudad y hacer alguna actividad. Con 60-80€/día tienes hotel boutique, restaurantes buenos, excursión a Kakheti y sin preocuparte del presupuesto. Es probablemente la capital europea con mejor relación calidad-precio en 2026." },
      ],
      en: [
        { question: "Do I need a visa to enter Georgia?", answer: "No. EU citizens (including Spanish nationals) can enter Georgia without a visa and stay for up to 365 days. You only need a valid passport. Tbilisi airport has direct connections from major European cities with Wizz Air, Georgian Airways and other airlines." },
        { question: "Is it safe to travel to Tbilisi?", answer: "Yes. Tbilisi is one of the safest cities in Eastern Europe for tourists. The crime rate is low and the city has a deeply rooted tradition of hospitality towards foreigners. As in any city, normal precautions apply in busy nightlife areas and with valuables in crowded places." },
        { question: "How much money do I need per day in Tbilisi?", answer: "Tbilisi is exceptionally affordable for Europeans. With €30-40/day you can eat very well (khinkali, khachapuri, Georgian wine), get around the city and do activities. With €60-80/day you have a boutique hotel, good restaurants, a Kakheti excursion and no budget worries. It's probably Europe's best value-for-money capital in 2026." },
      ],
    },
  },
  {
    id: "30",
    slug: "florencia-guia-2026",
    enSlug: "florence-travel-guide-2026",
    narrator: "carmen",
    category: "europe",
    city: "Florencia",
    country: { es: "Italia", en: "Italy" },
    emoji: "🌸",
    heroImage: "https://images.unsplash.com/photo-1541370976299-4d24be33238b?w=1200&q=80",
    title: { es: "Florencia 2026: La Ciudad Que Puso el Arte en la Calle", en: "Florence 2026: The City That Put Art on the Street" },
    subtitle: { es: "El Renacimiento en vivo — museos, mercados y cómo no colapsar en la cola de los Uffizi", en: "The Renaissance live — museums, markets and how not to collapse in the Uffizi queue" },
    date: "2026-03-13",
    readTime: "10 min",
    metaDescription: { es: "Guía completa Florencia 2026: Uffizi, Duomo, Galería de la Academia, Oltrarno y los mejores restaurantes. Con consejos para evitar colas y lo que Carmen descubrió sobre el arte que ninguna audioguía cuenta.", en: "Complete Florence 2026 guide: Uffizi, Duomo, Galleria dell'Accademia, Oltrarno and the best restaurants. Tips to skip queues and what Carmen discovered about art that no audio guide covers." },
    keywords: { es: ["florencia 2026", "guía florencia", "uffizi entradas", "duomo florencia", "galería academia", "david miguel ángel", "oltrarno barrios"], en: ["florence 2026", "florence travel guide", "uffizi tickets", "florence duomo", "galleria accademia", "michelangelo david", "oltrarno district"] },
    excerpt: { es: "Florencia es la ciudad donde el arte dejó de ser decoración y se convirtió en argumento. Carmen lleva cuatro semanas leyendo sobre el Renacimiento y aún así la primera mañana frente al David la dejó sin palabras. Hay destinos que te preparan. Florencia te sorprende.", en: "Florence is the city where art stopped being decoration and became argument. Carmen spent four weeks reading about the Renaissance and yet the first morning in front of the David left her speechless. Some destinations prepare you. Florence surprises you." },
    pointsOfInterest: [
      {
        name: "Galería de los Uffizi",
        emoji: "🖼️",
        category: "museum",
        rating: 4.8,
        description: { es: "El museo más importante del Renacimiento italiano. Botticelli, Leonardo, Miguel Ángel, Rafael y Tiziano bajo el mismo techo. La colección de la familia Medici que acabó siendo patrimonio de toda la humanidad. Reserva con meses de antelación — la cola sin reserva puede superar las tres horas.", en: "The most important museum of the Italian Renaissance. Botticelli, Leonardo, Michelangelo, Raphael and Titian under one roof. The Medici family collection that became the heritage of all humanity. Book months in advance — the walk-up queue can exceed three hours." },
        affiliateLinks: [{ label: { es: "Entradas Uffizi sin colas", en: "Uffizi skip-the-line tickets" }, partner: "tiqets", query: "uffizi florence skip line", type: "tickets" }, { label: { es: "Tour guiado Uffizi", en: "Guided Uffizi tour" }, partner: "musement", query: "uffizi guided tour florence", type: "activity" }],
      },
      {
        name: "Duomo — Cattedrale di Santa Maria del Fiore",
        emoji: "⛪",
        category: "landmark",
        rating: 4.9,
        description: { es: "La cúpula de Brunelleschi es una de las obras de ingeniería más audaces de la historia: construida entre 1420 y 1436 sin cimbra, con técnicas que el propio Brunelleschi inventó sobre la marcha. Sube a la cúpula o al campanile de Giotto para las mejores vistas del tejado rojo de la ciudad.", en: "Brunelleschi's dome is one of the most audacious engineering feats in history: built between 1420 and 1436 without centering, using techniques Brunelleschi invented as he went. Climb the dome or Giotto's campanile for the best views of the city's red rooftops." },
        affiliateLinks: [{ label: { es: "Entradas Duomo y cúpula", en: "Duomo and dome tickets" }, partner: "tiqets", query: "duomo florence cathedral dome", type: "tickets" }],
      },
      {
        name: "Galería de la Academia — El David",
        emoji: "🏛️",
        category: "museum",
        rating: 4.8,
        description: { es: "El David de Miguel Ángel mide 5,17 metros. Las fotos no transmiten la escala. Tampoco la tensión del cuerpo en el momento exacto antes de lanzar la piedra — Miguel Ángel esculpió el instante de máxima concentración, no el triunfo. Reserva entrada con antelación. Sin reserva, la cola puede durar dos horas.", en: "Michelangelo's David stands 5.17 metres tall. Photos don't convey the scale. Nor the body's tension in the exact moment before releasing the stone — Michelangelo sculpted maximum concentration, not triumph. Book in advance. Walk-up queues can be two hours." },
        affiliateLinks: [{ label: { es: "Entradas Galería Academia", en: "Galleria Accademia tickets" }, partner: "tiqets", query: "galleria accademia florence david", type: "tickets" }, { label: { es: "Tour David + Uffizi", en: "David + Uffizi tour" }, partner: "getyourguide", query: "david michelangelo florence tour", type: "activity" }],
      },
      {
        name: "Ponte Vecchio y Oltrarno",
        emoji: "🌉",
        category: "neighborhood",
        rating: 4.7,
        description: { es: "El Ponte Vecchio es el único puente de Florencia que sobrevivió a la Segunda Guerra Mundial — según la leyenda, por orden directa de Hitler, que no quiso destruir algo tan bello. El barrio de Oltrarno, al otro lado, es el Florencia sin filtros: artesanos, restaurantes locales, cuestas empedradas y vecinos reales.", en: "Ponte Vecchio is the only bridge in Florence to survive World War II — according to legend, on Hitler's direct orders, who couldn't bring himself to destroy something so beautiful. The Oltrarno district on the far side is unfiltered Florence: craftspeople, local restaurants, cobbled slopes and real residents." },
        affiliateLinks: [{ label: { es: "Walking tour Oltrarno", en: "Oltrarno walking tour" }, partner: "musement", query: "oltrarno florence walking tour", type: "activity" }],
      },
      {
        name: "Jardines de Bóboli y Palazzo Pitti",
        emoji: "🌿",
        category: "attraction",
        rating: 4.5,
        description: { es: "Los jardines de Bóboli son el pulmón verde de Florencia: un laberinto de estatuas, fuentes y cipreses que sube por la colina detrás del Palazzo Pitti. El palazzo en sí alberga seis museos, incluyendo la Galería Palatina con más Rafaeles y Titzianos de los que ninguna mente puede procesar en un día.", en: "The Boboli Gardens are Florence's green lung: a labyrinth of statues, fountains and cypresses climbing the hill behind Palazzo Pitti. The palazzo itself houses six museums, including the Palatine Gallery with more Raphaels and Titians than any mind can process in a day." },
        affiliateLinks: [{ label: { es: "Entrada Bóboli + Pitti", en: "Boboli + Pitti ticket" }, partner: "tiqets", query: "boboli gardens palazzo pitti florence", type: "tickets" }],
      },
    ],
    events: [
      {
        name: { es: "Scoppio del Carro — Pascua", en: "Scoppio del Carro — Easter" },
        date: "2026-04-05",
        type: "cultural",
        venue: { es: "Plaza del Duomo, Florencia", en: "Piazza del Duomo, Florence" },
        description: { es: "El Scoppio del Carro (Explosión del Carro) es una de las tradiciones de Pascua más antiguas de Europa: un carro histórico lleno de fuegos artificiales se hace estallar en la Plaza del Duomo. La tradición data del siglo XV. Los florentinos lo ven como augurio de la cosecha del año.", en: "The Scoppio del Carro (Explosion of the Cart) is one of Europe's oldest Easter traditions: a historic cart filled with fireworks is detonated in Piazza del Duomo. The tradition dates to the 15th century. Florentines see it as an omen for the year's harvest." },
        image: "https://images.unsplash.com/photo-1568454537842-d933259bb258?w=800&q=80",
      },
      {
        name: { es: "Calcio Storico Fiorentino", en: "Calcio Storico Fiorentino" },
        date: "2026-06-24",
        type: "sport",
        venue: { es: "Plaza de Santa Croce, Florencia", en: "Piazza Santa Croce, Florence" },
        description: { es: "El Calcio Storico es el deporte más violento del mundo con uniforme del siglo XVI. Una mezcla de fútbol, rugby y lucha libre jugada por cuatro equipos que representan los cuatro barrios históricos de Florencia. Las finales son en junio, en la Plaza de Santa Croce convertida en campo de tierra.", en: "Calcio Storico is the world's most violent sport played in 16th-century costume. A blend of football, rugby and wrestling played by four teams representing Florence's four historic districts. Finals are in June, in Piazza Santa Croce transformed into a dirt pitch." },
        image: "https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=800&q=80",
      },
      {
        name: { es: "Estate Fiesolana — Festival de Verano", en: "Estate Fiesolana — Summer Festival" },
        date: "2026-06-15",
        type: "cultural",
        venue: { es: "Teatro Romano de Fiesole, Florencia", en: "Roman Theatre of Fiesole, Florence" },
        description: { es: "El festival de verano de Fiesole lleva décadas con conciertos de música clásica, ópera y jazz en el Teatro Romano de 70 a.C., con vistas panorámicas sobre Florencia. Subir en autobús desde la ciudad, cenar en Fiesole y bajar a pie con el sol cayendo sobre el Arno es una de las experiencias que Carmen anota en su cuaderno de 'imprescindibles'.", en: "Fiesole's summer festival has run for decades with classical music, opera and jazz concerts in the 70 BC Roman Theatre, with panoramic views over Florence. Taking the bus up from the city, dining in Fiesole and walking back as the sun drops over the Arno is one of those experiences Carmen notes in her 'unmissables' book." },
        image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80",
      },
    ],
    services: {
      activities: ["tiqets", "musement", "getyourguide"],
      hotels: ["booking"],
      insurance: ["safetywing"],
      esim: ["airalo"],
    },
    content: {
      es: `Carmen aquí. Llevo cuatro semanas leyendo sobre el Renacimiento. Tengo tres libros marcados con post-its, un podcast de 40 episodios escuchado dos veces y un cuaderno con fechas, nombres y relaciones familiares de los Medici que rivalizan con la trama de una novela de época. Llegué a Florencia convencida de que no me iba a sorprender nada.

El primer día, entré en la Galería de la Academia a las 9 de la mañana. Caminé por el pasillo de los Prisioneros — los cuatro esclavos inconclusos de Miguel Ángel que parecen estar emergiendo del mármol, no esculpidos en él — y al final del corredor me encontré con el David.

Cinco metros y diecisiete centímetros de mármol blanco. Cuatro semanas de preparación. Y lo primero que pensé fue: no hay forma de prepararse para esto.

## Cómo moverse en Florencia

Florencia es una ciudad pequeña. El centro histórico, declarado Patrimonio de la Humanidad, se puede recorrer a pie en veinte minutos de extremo a extremo. No necesitas metro ni taxi para los monumentos principales.

El aeropuerto Amerigo Vespucci está a 10 minutos en taxi o en el tren Vola in Bus. La estación de Santa Maria Novella conecta con Roma en 1h30 en Frecciarossa, con Milán en 1h45 y con Venecia en 2h15.

Para entrar en el Duomo, los Uffizi, la Academia, el Palazzo Pitti y los Jardines de Bóboli necesitas entrada de pago. {{CTA:tickets:tiqets:florence museums pass uffizi accademia:Pack de museos Florencia}} · {{CTA:activity:musement:florence best of museums tour:Tour mejores museos}}

La tarjeta Firenze Card (72 euros, 72 horas) cubre 72 museos con acceso prioritario. Vale la pena si piensas ver más de cuatro o cinco museos — lo que Carmen llama "el umbral de rentabilidad cultural".

## Los Uffizi: cómo no colapsar

La Galería de los Uffizi tiene ochenta y seis salas. La mayoría de los visitantes ven las veinte primeras en hora y media y salen agotados sin haber llegado a la mitad.

El error: empezar por el principio y seguir en orden. La estrategia de Carmen: ir directamente a las salas de Botticelli (sala 10-14), ver El Nacimiento de Venus y La Primavera con calma, y luego retroceder. Si solo tienes dos horas, prioriza: Botticelli, la sala de Leonardo (sala 15), Michelangelo (sala 35) y la terraza con vistas al Arno.

Reserva con semanas o meses de antelación. Las entradas de última hora existen, pero la cola en taquilla puede ser de tres horas. {{CTA:tickets:tiqets:uffizi gallery skip the line florence:Entradas Uffizi sin colas}}

## El David: lo que la audioguía no cuenta

Miguel Ángel tenía 26 años cuando empezó el David. El bloque de mármol llevaba cuarenta años en el patio de la catedral — otros escultores lo habían rechazado por los defectos de la piedra. Miguel Ángel tardó dos años en terminarlo.

La figura representa a David en el momento antes de lanzar la piedra, no después. El cuerpo está en tensión máxima: la mano derecha ya tensa la honda, la cabeza girada hacia Goliat que aún no llega. Miguel Ángel esculpió la adrenalina.

Un detalle que los visitantes no ven hasta que alguien se lo señala: la mano derecha es desproporcionadamente grande. Algunos historiadores creen que es intencionado — la mano de acción domina el cuerpo.

{{CTA:tickets:tiqets:galleria accademia florence tickets david:Entradas Galería Academia}}

## Oltrarno: la Florencia sin filtros

El barrio de Oltrarno, al sur del Arno, es donde los florentinos han vivido durante siglos mientras los turistas se quedaban en el norte del río. Es también donde están los mejores restaurantes de la ciudad.

La calle Borgo San Jacopo bordea el río con vistas al Ponte Vecchio. El Mercato di Santo Spirito los fines de semana es mercado de artesanía durante el día y aperitivo con músicos en directo por la tarde. El Piazzale Michelangelo, quince minutos a pie colina arriba, tiene las mejores vistas del tejado de Florencia — y las mejores fotos al atardecer.

{{CTA:activity:musement:oltrarno walking tour florence artisans:Tour de artesanos por Oltrarno}}

## Comer en Florencia

La cocina florentina es contundente y sin complejos. La bistecca alla fiorentina — chuletón de ternera Chianina a la brasa, mínimo 1 kilo, vuelta y vuelta — es la referencia local. Se come con vino Chianti Classico y sin más guarnición que las judías blancas (fagioli) que aquí sirven como acompañamiento estándar.

El lampredotto es otra institución: una de las cuatro panzas de ternera, guisada durante horas y servida en panino en los trippaio callejeros. El más famoso está junto al Mercato Centrale. Es una de esas comidas que entiendes o no entiendes, pero probarla una vez es obligatorio.

Para cenar bien sin pagar precio turístico, cruza el Arno. Los restaurantes de Oltrarno tienen menús del mediodía a 12-15 euros que incluyen primero, segundo y vino de la casa.

{{CTA:restaurant:thefork:restaurantes florencia oltrarno:Reserva en Florencia}}

## Practicidades

El aeropuerto de Florencia opera vuelos a toda Europa. Para destinos intercontinentales, el aeropuerto de Pisa (1h en tren) tiene más opciones. Una eSIM te da datos desde el aterrizaje sin pagar roaming. {{CTA:service:airalo:italia esim datos:eSIM para Italia}} · {{CTA:service:safetywing:florence travel insurance:Seguro de viaje}}

La mejor época para visitar: primavera (abril-mayo) y otoño (septiembre-octubre). Julio y agosto son calurosos (35°C habitual), muy concurridos y los precios suben significativamente.`,

      en: `Carmen here. I spent four weeks reading about the Renaissance. I have three books marked with post-its, a 40-episode podcast listened to twice, and a notebook filled with dates, names and Medici family relationships that rival a period novel's plot. I arrived in Florence convinced nothing would surprise me.

On the first day, I entered the Galleria dell'Accademia at 9 AM. I walked through the corridor of the Prisoners — Michelangelo's four unfinished slaves that seem to be emerging from the marble rather than sculpted into it — and at the end of the corridor I found the David.

Five metres and seventeen centimetres of white marble. Four weeks of preparation. And the first thing I thought was: there's no way to prepare for this.

## Getting around Florence

Florence is a small city. The historic centre, a UNESCO World Heritage Site, can be walked from end to end in twenty minutes. You don't need a metro or taxi for the main monuments.

Amerigo Vespucci airport is 10 minutes away by taxi or the Vola in Bus train. Santa Maria Novella station connects with Rome in 1h30 on the Frecciarossa, Milan in 1h45, and Venice in 2h15.

To enter the Duomo, Uffizi, Accademia, Palazzo Pitti and Boboli Gardens you need paid tickets. {{CTA:tickets:tiqets:florence museums pass uffizi accademia:Florence museum pass}} · {{CTA:activity:musement:florence best of museums tour:Best museums tour}}

The Firenze Card (€72, 72 hours) covers 72 museums with priority access. Worth it if you're planning to visit four or five museums — what Carmen calls "the cultural break-even threshold".

## The Uffizi: how not to collapse

The Uffizi Gallery has eighty-six rooms. Most visitors see the first twenty in an hour and a half and leave exhausted without reaching the halfway point.

The mistake: starting from the beginning and following in order. Carmen's strategy: go straight to the Botticelli rooms (rooms 10-14), spend time with The Birth of Venus and Primavera, then backtrack. If you only have two hours, prioritise: Botticelli, the Leonardo room (room 15), Michelangelo (room 35) and the terrace with Arno views.

Book weeks or months in advance. Last-minute tickets exist, but the walk-up queue can be three hours. {{CTA:tickets:tiqets:uffizi gallery skip the line florence:Uffizi skip-the-line tickets}}

## The David: what the audio guide doesn't tell you

Michelangelo was 26 years old when he started the David. The marble block had been in the cathedral courtyard for forty years — other sculptors had rejected it for the stone's flaws. Michelangelo took two years to finish it.

The figure represents David in the moment before throwing the stone, not after. The body is at maximum tension: the right hand already tensing the sling, the head turned toward a Goliath who hasn't arrived yet. Michelangelo sculpted adrenaline.

One detail visitors miss until someone points it out: the right hand is disproportionately large. Some historians believe this is intentional — the hand of action dominates the body.

{{CTA:tickets:tiqets:galleria accademia florence tickets david:Galleria Accademia tickets}}

## Oltrarno: unfiltered Florence

The Oltrarno district, south of the Arno, is where Florentines have lived for centuries while tourists stayed north of the river. It's also where the city's best restaurants are.

Borgo San Jacopo street runs along the river with views of Ponte Vecchio. Mercato di Santo Spirito on weekends is a craft market during the day and aperitivo with live musicians in the evening. Piazzale Michelangelo, fifteen minutes' walk uphill, has the best views of Florence's rooftops — and the best sunset photos.

{{CTA:activity:musement:oltrarno walking tour florence artisans:Oltrarno artisans walking tour}}

## Eating in Florence

Florentine cuisine is robust and unapologetic. Bistecca alla fiorentina — Chianina beef T-bone grilled over charcoal, minimum 1 kilo, barely cooked — is the local reference. Eaten with Chianti Classico and nothing but white beans (fagioli) as standard accompaniment.

Lampredotto is another institution: one of a cow's four stomachs, stewed for hours and served in a bread roll at street trippaio carts. The most famous is next to Mercato Centrale. It's one of those foods you either understand or you don't, but trying it once is compulsory.

For a good dinner without tourist prices, cross the Arno. Oltrarno restaurants have midday set menus at €12-15 including first course, main and house wine.

{{CTA:restaurant:thefork:restaurantes florencia oltrarno:Reserve in Florence}}

## Practicalities

Florence airport operates flights across Europe. For intercontinental destinations, Pisa airport (1h by train) has more options. An eSIM gets you data from landing without paying roaming fees. {{CTA:service:airalo:italia esim datos:eSIM for Italy}} · {{CTA:service:safetywing:florence travel insurance:Travel insurance}}

Best time to visit: spring (April-May) and autumn (September-October). July and August are hot (35°C regularly), very crowded and prices rise significantly.`,
    },
    faq: {
      es: [
        { question: "¿Cuánto tiempo necesito para visitar Florencia?", answer: "Con 3 días puedes ver los grandes museos (Uffizi, Academia, Duomo), explorar Oltrarno y tener tiempo para comer bien. Con 4-5 días puedes añadir una excursión a Fiesole, Siena o las bodegas de Chianti." },
        { question: "¿Cuándo hay que reservar los Uffizi?", answer: "En temporada alta (abril-agosto) es recomendable reservar con 2-4 semanas de antelación mínimo. En temporada baja puedes reservar con 3-7 días. Sin reserva, la cola puede ser de 2-3 horas. Las entradas con acceso prioritario valen el suplemento." },
        { question: "¿Es Florencia cara?", answer: "Los museos cuestan entre 12 y 20 euros la entrada. La Firenze Card (72€, 72h) es rentable si visitas más de 4-5 museos. Comer bien es asequible si evitas los restaurantes de la Plaza del Duomo — en Oltrarno, un menú completo con vino sale por 12-15 euros." },
        { question: "¿Cómo llegar a Florencia desde Roma?", answer: "El tren Frecciarossa conecta Roma Termini con Florencia Santa Maria Novella en 1h30, con salidas frecuentes. Es la opción más rápida y cómoda. Reserva con antelación para obtener los mejores precios." },
      ],
      en: [
        { question: "How long do I need in Florence?", answer: "3 days lets you see the main museums (Uffizi, Accademia, Duomo), explore Oltrarno and have time to eat well. 4-5 days lets you add a trip to Fiesole, Siena or the Chianti vineyards." },
        { question: "When should I book the Uffizi?", answer: "In high season (April-August) book at least 2-4 weeks in advance. In low season, 3-7 days ahead. Without a booking, queues can be 2-3 hours. Skip-the-line tickets are worth the surcharge." },
        { question: "Is Florence expensive?", answer: "Museum tickets cost €12-20 each. The Firenze Card (€72, 72h) pays off if you visit more than 4-5 museums. Eating well is affordable if you avoid restaurants on Piazza del Duomo — in Oltrarno, a full set menu with wine costs €12-15." },
        { question: "How to get from Rome to Florence?", answer: "The Frecciarossa connects Roma Termini with Florence Santa Maria Novella in 1h30, with frequent departures. It's the fastest and most comfortable option. Book in advance for the best prices." },
      ],
    },
  },
];
