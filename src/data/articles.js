// Helper: get language-specific text from a bilingual field
export const g = (field, lang) => {
  if (!field) return "";
  if (typeof field === "string") return field;
  return field[lang] ?? field.es ?? field.en ?? "";
};

export const ARTICLES = [
  // ─────────────────────────────────────────────
  // 1. BARCELONA
  // ─────────────────────────────────────────────
  {
    id: 1,
    slug: "barcelona-primavera-2026",
    enSlug: "barcelona-spring-2026",
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
        date: "5–7 Jun 2026",
        venue: "Parc del Fòrum",
        urgency: true,
        description: {
          es: "El festival indie más importante de Europa. Agota entradas cada año antes de que puedas decir 'pero si acaban de anunciar el cartel'.",
          en: "Europe's most important indie festival. Sells out every year before you've finished reading the lineup announcement.",
        },
        affiliateLinks: [
          { label: { es: "Comprar abono", en: "Buy festival pass" }, partner: "ticketmaster", query: "primavera sound 2026", type: "tickets" },
          { label: { es: "Reventa verificada", en: "Verified resale" }, partner: "stubhub", query: "primavera sound 2026", type: "tickets" },
        ],
      },
      {
        name: "Festival Sónar",
        type: "electronic",
        date: "18–20 Jun 2026",
        venue: "Fira Gran Via",
        urgency: true,
        description: {
          es: "Música electrónica, arte digital e innovación tecnológica. Duermes poco, piensas mucho y sales convencido de que entiendes el arte contemporáneo.",
          en: "Electronic music, digital art and technological innovation. You sleep little, think a lot, and leave convinced you finally understand contemporary art.",
        },
        affiliateLinks: [
          { label: { es: "Entradas Sónar", en: "Sónar tickets" }, partner: "ticketmaster", query: "sonar barcelona 2026", type: "tickets" },
          { label: { es: "Reventa", en: "Resale tickets" }, partner: "stubhub", query: "sonar festival barcelona", type: "tickets" },
        ],
      },
      {
        name: "Feria de Abril de Catalunya",
        type: "cultural",
        date: "24 Abr – 3 May 2026",
        venue: "Fira de Barcelona",
        urgency: false,
        description: {
          es: "Sevillanas, casetas y gastronomía andaluza en plena Barcelona. La prueba definitiva de que esta ciudad absorbe culturas y las hace propias sin complejos.",
          en: "Sevillanas, casetas and Andalusian gastronomy in the heart of Barcelona. Definitive proof that this city absorbs other cultures and makes them its own without a hint of embarrassment.",
        },
        affiliateLinks: [
          { label: { es: "Entradas online", en: "Online tickets" }, partner: "ticketmaster", query: "feria abril barcelona", type: "tickets" },
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
      es: `Barcelona en primavera es una sinfonía de colores, sabores y sonidos. También es una ciudad de 1,6 millones de habitantes que recibe 12 millones de turistas al año, lo que explica que algunas terrazas tengan lista de espera antes de abrir. Dicho esto: merece cada minuto.

El itinerario perfecto comienza en el Eixample, donde la arquitectura modernista brilla bajo la luz dorada de la mañana. La Sagrada Família es obligatoria — {{CTA:tickets:getyourguide:sagrada familia skip line:Reserva tu entrada sin cola}} para evitar las dos horas de espera que son tan habituales como inevitables si no planificas. El verdadero secreto está en llegar a las 9 de la mañana: luz espectacular, multitudes gestionables.

Desde ahí, perderse por el Born es un ritual que conviene hacer con el estómago vacío y la tarjeta lista. Este barrio medieval reinventado tiene las mejores tapas de la ciudad y unos precios que recuerdan que estás en Europa occidental. {{CTA:activity:getyourguide:born food tour barcelona tapas:Un tour gastronómico por el Born}} te descubrirá rincones que jamás encontrarías solo — y te explicará por qué el pan con tomate es filosofía, no guarnición.

Por la tarde, la Barceloneta ofrece el contrapunto mediterráneo perfecto: arena, brisa salada y chiringuitos donde el vermut fluye con calma. Si buscas la foto que nadie tiene, sube a los Bunkers del Carmel al atardecer — toda la ciudad se despliega a tus pies y la botella de cava sabe mejor con vistas de 360°.

Y luego están los festivales. Primavera Sound transforma la ciudad en la capital mundial del indie durante tres días de junio — {{CTA:tickets:ticketmaster:primavera sound 2026:consigue tu abono antes de que se agoten}}, porque se agotan antes de que puedas decidir si el cartel te convence. Sónar lleva décadas en la vanguardia de la música electrónica y de la confusión artística productiva.

Si necesitas moverte más allá de la ciudad, {{CTA:service:discovercars:barcelona:alquilar un coche}} te permitirá explorar la Costa Brava, Montserrat o las bodegas del Penedès en excursiones de un día que multiplican la experiencia — y te alejan del turismo de masas al menos durante unas horas.`,
      en: `Barcelona in spring is a symphony of colours, flavours and sounds. It's also a city of 1.6 million residents that welcomes 12 million tourists a year, which explains why some terraces have waiting lists before they open. That said: it's worth every minute.

The perfect itinerary starts in the Eixample, where modernist architecture glows under golden morning light. The Sagrada Família is mandatory — {{CTA:tickets:getyourguide:sagrada familia skip line:Book your skip-the-line ticket}} to avoid the two-hour queues that are as reliable as the sunshine. The real secret is arriving at 9am: spectacular light, manageable crowds.

From there, getting lost in El Born is a ritual best approached on an empty stomach with a working credit card. This reinvented medieval quarter has the city's best tapas and prices that remind you you're in Western Europe. {{CTA:activity:getyourguide:born food tour barcelona tapas:A gastronomic tour through El Born}} will reveal corners you'd never find alone — and explain why bread with tomato is a philosophy, not a garnish.

In the afternoon, La Barceloneta offers the perfect Mediterranean counterpoint: sand, sea breeze and beach bars where vermouth flows without rush. If you want the photo nobody has, climb up to the Bunkers del Carmel at sunset — the entire city unfolds before you and the bottle of cava tastes better with 360° views.

And then there are the festivals. Primavera Sound transforms the city into the world's indie capital for three June days — {{CTA:tickets:ticketmaster:primavera sound 2026:get your pass before they sell out}}, because they sell out before you've decided whether you like the lineup. Sónar has spent decades at the vanguard of electronic music and productive artistic confusion.

If you need to venture beyond the city, {{CTA:service:discovercars:barcelona:renting a car}} will let you explore the Costa Brava, Montserrat or the Penedès wineries on day trips that multiply the experience — and put some distance between you and mass tourism, at least for a few hours.`,
    },
  },

  // ─────────────────────────────────────────────
  // 2. TOKYO
  // ─────────────────────────────────────────────
  {
    id: 2,
    slug: "tokio-guia-completa-2026",
    enSlug: "tokyo-complete-guide-2026",
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
          es: "La tradición más bella de Japón: pícnics bajo los cerezos en flor. También la más instructiva: contemplar algo hermoso que dura dos semanas te enseña más sobre el tiempo que cualquier libro de autoayuda.",
          en: "Japan's most beautiful tradition: picnics under the cherry blossoms. Also the most instructive: contemplating something beautiful that lasts two weeks teaches you more about impermanence than any self-help book.",
        },
        affiliateLinks: [
          { label: { es: "Tour hanami exclusivo", en: "Exclusive hanami tour" }, partner: "viator", query: "tokyo hanami cherry blossom", type: "activity" },
        ],
      },
      {
        name: "teamLab Borderless",
        type: "digital-art",
        date: "Todo el año",
        venue: "Azabudai Hills",
        urgency: false,
        description: {
          es: "La instalación de arte digital inmersiva más impresionante del mundo. Sales sin saber si llevas una hora o cuatro dentro, y con la certeza de que el arte del futuro no necesita marcos.",
          en: "The world's most impressive immersive digital art installation. You exit unsure whether you've been inside for one hour or four, and convinced that the art of the future has no need for frames.",
        },
        affiliateLinks: [
          { label: { es: "Entrada prioritaria", en: "Priority ticket" }, partner: "tiqets", query: "teamlab borderless tokyo", type: "tickets" },
          { label: { es: "Entrada + traslado", en: "Ticket + transfer" }, partner: "getyourguide", query: "teamlab borderless", type: "tickets" },
        ],
      },
      {
        name: "Tokyo Game Show",
        type: "technology",
        date: "Sep 2026",
        venue: "Makuhari Messe",
        urgency: true,
        description: {
          es: "La feria de videojuegos más grande de Asia: el lugar donde los juegos del año que viene se anuncian y tú descubres que tu consola ya es historia.",
          en: "Asia's largest video game expo: the place where next year's games get announced and you quietly accept that your current console is already obsolete.",
        },
        affiliateLinks: [
          { label: { es: "Entradas TGS", en: "TGS tickets" }, partner: "ticketmaster", query: "tokyo game show 2026", type: "tickets" },
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
      es: `Tokio es la ciudad que reinventa el concepto de metrópolis cada día, y lo hace con una precisión tan quirúrgica que el resto de las grandes ciudades del mundo dan un poco de vergüenza ajena. Con 14 millones de habitantes funciona mejor que la mayoría de aeropuertos europeos, y con una amabilidad que te hace cuestionar si has estado haciendo lo del viaje de forma equivocada todo este tiempo.

Tu primer amanecer debería ser en Senso-ji — {{CTA:activity:getyourguide:sensoji asakusa tour:reserva un tour guiado por Asakusa}} para entender la historia detrás de cada ritual. A las 6 de la mañana, cuando los inciensos empiezan a arder y aún no ha llegado el primer grupo con bastón de selfie, Tokio te revela por qué Japón es un lugar aparte.

El contraste llega en minutos: un tren te deja en Shibuya, donde el cruce más famoso del mundo pulsa como el corazón eléctrico de la ciudad. Desde allí, Akihabara te sumerge en una realidad paralela de neones y figuras de anime de cinco pisos donde el dinero fluye hacia cosas que tres días antes no sabías que necesitabas.

Pero Tokio también sabe ser silencio. Shinjuku Gyoen en primavera es un lienzo impresionista de cerezos en flor. Es la tradición del hanami: contemplar lo efímero y encontrar belleza en ello — y también comer mucho tsukechi bajo los árboles.

No te vayas sin visitar teamLab Borderless — {{CTA:tickets:tiqets:teamlab borderless tokyo:compra tu entrada con antelación}} porque se agotan semanas antes. Es la instalación de arte digital más impresionante que verás jamás, y la única en la que perderte literalmente es parte de la experiencia.

Y la comida. El ramen de medianoche en Golden Gai. El sushi omakase donde el chef lleva 40 años perfeccionando el mismo corte y no admite sustituciones. {{CTA:activity:getyourguide:tsukiji food tour sushi:Un tour gastronómico por Tsukiji}} es la mejor inversión culinaria del viaje y la razón principal por la que el viaje de vuelta siempre llega demasiado pronto.`,
      en: `Tokyo is the city that reinvents the concept of metropolis every day, and it does so with a surgical precision that makes the rest of the world's great cities feel slightly embarrassed. With 14 million inhabitants it runs better than most European airports, with a kindness that makes you question whether you've been approaching travel completely wrong.

Your first sunrise should be at Senso-ji — {{CTA:activity:getyourguide:sensoji asakusa tour:book a guided tour through Asakusa}} to understand the history behind each ritual. At 6 in the morning, when the incense begins to burn and the first selfie-stick group hasn't arrived yet, Tokyo reveals why Japan is a place apart.

The contrast arrives in minutes: a train drops you in Shibuya, where the world's most famous crossing pulses like the electric heart of the city. From there, Akihabara immerses you in a parallel reality of neon signs and five-storey anime figures where money flows toward things you didn't know you needed three days ago.

But Tokyo also knows how to be silence. Shinjuku Gyoen in spring is an impressionist canvas of cherry blossoms. It's the tradition of hanami: contemplating the ephemeral and finding beauty in it — and also eating a lot of tsukechi under the trees.

Don't leave without visiting teamLab Borderless — {{CTA:tickets:tiqets:teamlab borderless tokyo:buy your ticket in advance}} because they sell out weeks ahead. It's the most impressive digital art installation you'll ever see, and the only one where literally getting lost is part of the intended experience.

And the food. Midnight ramen in Golden Gai. The omakase sushi where the chef has spent 40 years perfecting the same cut and does not accept substitutions. {{CTA:activity:getyourguide:tsukiji food tour sushi:A food tour through Tsukiji}} is the best culinary investment of the trip and the main reason the flight home always comes too soon.`,
    },
  },

  // ─────────────────────────────────────────────
  // 3. CDMX
  // ─────────────────────────────────────────────
  {
    id: 3,
    slug: "cdmx-guia-completa-2026",
    enSlug: "mexico-city-guide-2026",
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
          es: "Altares, ofrendas, calaveras y mega desfile. La celebración más fotogénica del mundo: la muerte como fiesta, el duelo como color y la marigold como protagonista.",
          en: "Altars, offerings, sugar skulls and a mega parade. The world's most photogenic celebration: death as a party, grief as colour and marigolds as the main character.",
        },
        affiliateLinks: [
          { label: { es: "Tour nocturno especial", en: "Special night tour" }, partner: "getyourguide", query: "dia muertos mexico city tour", type: "activity" },
        ],
      },
      {
        name: "Vive Latino 2026",
        type: "festival",
        date: "Mar 2026",
        venue: "Foro Sol",
        urgency: true,
        description: {
          es: "El festival de rock y alternativo más grande de Iberoamérica: tres días de música, calor y la certeza de que en CDMX saben perfectamente cómo hacer un festival.",
          en: "The largest rock and alternative festival in Ibero-America: three days of music, heat and the absolute certainty that Mexico City knows exactly how to throw a festival.",
        },
        affiliateLinks: [
          { label: { es: "Boletos", en: "Tickets" }, partner: "ticketmaster", query: "vive latino 2026", type: "tickets" },
          { label: { es: "Reventa", en: "Resale tickets" }, partner: "stubhub", query: "vive latino 2026", type: "tickets" },
        ],
      },
      {
        name: "MUTEK México",
        type: "digital-art",
        date: "Oct 2026",
        venue: "Varios recintos",
        urgency: false,
        description: {
          es: "Creatividad digital y música electrónica experimental en una ciudad que lleva décadas demostrando que el arte no necesita pedir permiso.",
          en: "Digital creativity and experimental electronic music in a city that has spent decades proving art doesn't need to ask permission.",
        },
        affiliateLinks: [
          { label: { es: "Entradas MUTEK", en: "MUTEK tickets" }, partner: "ticketmaster", query: "mutek mexico 2026", type: "tickets" },
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
      es: `Ciudad de México no se descubre, te descubre a ti. Es una ciudad que te envuelve en su caos organizado — porque sí, hay un orden en el caos chilango, aunque a veces requiera fe — y no te suelta hasta que te has enamorado irremediablemente de sus tacos, su arte y esa energía que no tiene equivalente en ninguna otra ciudad del planeta.

El Centro Histórico es donde todo empieza. El Zócalo te recibe con la majestuosidad del Palacio Nacional y los murales de Diego Rivera que te obligan a detenerte aunque vayas con prisa. A pocos pasos, el Templo Mayor recuerda con total frialdad que esta ciudad se construyó literalmente sobre las ruinas del imperio azteca. La historia aquí no está en los libros: está bajo tus pies.

Teotihuacán es imprescindible — {{CTA:activity:getyourguide:teotihuacan sunrise balloon:reserva el tour al amanecer con globo aerostático}} para una experiencia que jamás olvidarás. Subir la Pirámide del Sol cuando la niebla se levanta y la ciudad antigua aparece como una aparición es uno de esos momentos que se tatúan en la memoria y hacen que el madrugón valga absolutamente cada minuto.

El alma de CDMX late en sus barrios. Coyoacán conserva el espíritu bohemio que enamoró a Frida y Diego, con mercados coloridos y cafés donde el tiempo pasa de otra manera. La Casa Azul es peregrinación obligatoria — {{CTA:tickets:tiqets:frida kahlo museum skip:compra la entrada con antelación}} porque las colas sin reserva pueden superar las dos horas y la ironía de hacer cola para ver a Frida Kahlo no se le escapa a nadie.

Roma-Condesa es la otra cara de la ciudad: gastronomía contemporánea de nivel Michelin junto a fondas donde el mole lleva cociéndose tres días y sabe a todo. {{CTA:activity:viator:roma condesa food tour cdmx:Un food tour por Roma-Condesa}} te revelará los secretos mejor guardados de una escena culinaria que ha puesto a Ciudad de México en el mapa gastronómico mundial.

Y si planeas estar en noviembre, el Día de Muertos transforma toda la ciudad en algo que no tiene parangón en el mundo — {{CTA:activity:getyourguide:dia muertos mexico city tour:reserva un tour nocturno especial}} para vivir la celebración más fotogénica del planeta. La muerte aquí se celebra con flores, colores y una alegría que resulta completamente lógica en cuanto llevas dos días en la ciudad.`,
      en: `Mexico City doesn't discover itself to you — it discovers you. It's a city that wraps you in its organised chaos — and yes, there is an order to the chilango chaos, even if it occasionally requires a leap of faith — and doesn't let go until you've fallen hopelessly in love with its tacos, its art and an energy that has no equivalent anywhere else on the planet.

The Historic Centre is where it all begins. The Zócalo welcomes you with the majesty of the National Palace and Diego Rivera's murals that force you to stop even when you're running late. Steps away, the Templo Mayor coolly reminds you that this city was literally built on the ruins of the Aztec empire. History here isn't in books: it's under your feet.

Teotihuacán is unmissable — {{CTA:activity:getyourguide:teotihuacan sunrise balloon:book the sunrise tour with hot air balloon}} for an experience you'll never forget. Climbing the Pyramid of the Sun as the morning mist lifts and the ancient city appears like an apparition is one of those moments that gets permanently tattooed into memory and makes the early alarm feel entirely worth it.

The soul of CDMX beats in its neighbourhoods. Coyoacán preserves the bohemian spirit that enchanted Frida and Diego, with colourful markets and cafés where time moves differently. La Casa Azul is obligatory pilgrimage — {{CTA:tickets:tiqets:frida kahlo museum skip:buy your ticket in advance}} because queues without a reservation can exceed two hours, and the irony of queuing to see Frida Kahlo is not lost on anyone.

Roma-Condesa is the other face: contemporary Michelin-level gastronomy alongside fondas where the mole has been simmering for three days and tastes like everything. {{CTA:activity:viator:roma condesa food tour cdmx:A food tour through Roma-Condesa}} will reveal the best-kept secrets of a culinary scene that has put Mexico City firmly on the global gastronomic map.

And if you're planning to be there in November, Día de Muertos transforms the entire city into something that has no parallel in the world — {{CTA:activity:getyourguide:dia muertos mexico city tour:book a special night tour}} to live the planet's most photogenic celebration. Death here is celebrated with flowers, colours and a joy that makes complete sense within about two days of arriving.`,
    },
  },

  // ─────────────────────────────────────────────
  // 4. LISBON
  // ─────────────────────────────────────────────
  {
    id: 4,
    slug: "lisboa-guia-2026",
    enSlug: "lisbon-guide-2026",
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
        date: "Jul 2026",
        venue: "Passeio Marítimo de Algés",
        urgency: true,
        description: {
          es: "Uno de los mejores festivales de Europa con vistas al Tajo y líneas de cartel de primer nivel. La combinación de música en directo, calor portugués y la brisa del río es difícil de superar.",
          en: "One of Europe's best music festivals with Tagus views and top-tier lineups. The combination of live music, Portuguese heat and the river breeze is genuinely hard to beat.",
        },
        affiliateLinks: [
          { label: { es: "Entradas NOS Alive", en: "NOS Alive tickets" }, partner: "ticketmaster", query: "nos alive 2026 lisbon", type: "tickets" },
          { label: { es: "Reventa", en: "Resale tickets" }, partner: "stubhub", query: "nos alive 2026", type: "tickets" },
        ],
      },
      {
        name: "Festas de Lisboa",
        type: "cultural",
        date: "Jun 2026",
        venue: "Toda la ciudad",
        urgency: false,
        description: {
          es: "Las fiestas de Santo António llenan cada barrio de Lisboa con sardinas a la brasa, marchas populares y bailes en la calle. En junio, Lisboa huele a verano y a carbón, y el olor es absolutamente perfecto.",
          en: "The Santo António festivals fill every neighbourhood with grilled sardines, popular marches and street dancing. In June, Lisbon smells of summer and charcoal, and the smell is absolutely perfect.",
        },
        affiliateLinks: [
          { label: { es: "Tour Festas de Lisboa", en: "Festas de Lisboa tour" }, partner: "civitatis", query: "festas lisboa santo antonio", type: "activity" },
        ],
      },
      {
        name: "Maratón de Lisboa",
        type: "sport",
        date: "Oct 2026",
        venue: "Centro Lisboa",
        urgency: false,
        description: {
          es: "Una de las maratones más bonitas del mundo, con el Tajo siempre a la vista. El único contexto en el que subir todas las colinas de Lisboa parece una decisión voluntaria y positiva.",
          en: "One of the world's most beautiful marathons, with the Tagus always in view. The only context in which climbing all of Lisbon's hills feels like a voluntary and positive decision.",
        },
        affiliateLinks: [
          { label: { es: "Inscripción maratón", en: "Marathon registration" }, partner: "getyourguide", query: "lisbon marathon 2026", type: "activity" },
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
      es: `Lisboa huele a sal, naftalina y buganvillas. La capital portuguesa tiene esa rareza de una ciudad que sigue siendo auténtica pese a que el mundo entero haya caído enamorado de ella en los últimos diez años y haya intentado convertirla en otra cosa. Lisboa ha resistido con elegancia y un punto de saudade preventiva.

El Alfama es el corazón palpitante de la ciudad y también el lugar donde se tarda el doble de lo previsto en llegar a cualquier parte, gracias a sus callejuelas empedradas que desembocan siempre en un mirador inesperado. {{CTA:activity:getyourguide:alfama fado tour lisbon:Un tour por el Alfama con fado en vivo}} es la forma perfecta de entender por qué esta música de melancolía y esperanza fue declarada Patrimonio de la Humanidad — y también por qué los portugueses son tan filosóficamente resignados y tan magníficamente irónicos al mismo tiempo.

Belém guarda los tesoros imperiales de Portugal. El Mosteiro dos Jerónimos es probablemente el edificio más impresionante de toda la península ibérica — {{CTA:tickets:tiqets:jeronimos monastery lisbon:reserva tu entrada con antelación}} para evitar las colas que en verano pueden sorprenderte. A cien metros, la Torre de Belém emerge del Tajo como un guardián de piedra que ha visto pasar cinco siglos de historia sin inmutarse. Y antes de seguir, un pastel de nata en la Pastéis de Belém de 1837 es parada obligatoria: cálido, crujiente y la respuesta a preguntas que todavía no sabías que tenías.

El Bairro Alto despierta al atardecer con tabernas de azulejos centenarios, tiendas de discos de vinilo y cervecerías artesanas mezcladas en un barrio donde la noche siempre tiene excusa. El LX Factory, instalado en una antigua fábrica textil, tiene mercado vintage, restaurantes con mesas compartidas y conciertos improvisados donde nadie sabe muy bien cómo ha acabado ahí pero nadie quiere irse.

La gastronomía portuguesa es una razón por sí sola para volver. {{CTA:activity:getyourguide:lisbon food tour lx factory:Un food tour por Lisboa}} te llevará desde el bacalhau à brás hasta las ginjinhas de Alfama, pasando por mariscos que hacen que el concepto de "producto de temporada" adquiera un sentido completamente nuevo.

Y si tienes un día de más — y procura tenerlo — {{CTA:service:discovercars:lisbon:alquila un coche}} y conduce hasta Sintra para perderte entre palacios de cuento rodeados de niebla atlántica. Es la excursión que transforma un viaje a Lisboa en algo que se recuerda indefinidamente.`,
      en: `Lisbon smells of salt, mothballs and bougainvillea. The Portuguese capital has the rare quality of a city that remains authentic despite the entire world having fallen in love with it over the last decade and tried to turn it into something else. Lisbon has resisted with elegance and a pre-emptive touch of saudade.

The Alfama is the city's beating heart and also the place where everything takes twice as long to get to, thanks to cobblestone alleys that always end at an unexpected viewpoint. {{CTA:activity:getyourguide:alfama fado tour lisbon:A tour through Alfama with live fado}} is the perfect way to understand why this music of melancholy and hope was declared a UNESCO World Heritage — and why the Portuguese are simultaneously so philosophically resigned and so magnificently ironic.

Belém holds Portugal's imperial treasures. The Jerónimos Monastery is probably the most impressive building on the entire Iberian Peninsula — {{CTA:tickets:tiqets:jeronimos monastery lisbon:book your ticket in advance}} to avoid the queues that can genuinely surprise you in summer. A hundred metres away, the Tower of Belém emerges from the Tagus like a stone guardian who has watched five centuries of history pass without flinching. And before moving on, a pastel de nata at the Pastéis de Belém bakery — open since 1837 — is a mandatory stop: warm, crispy and the answer to questions you didn't know you had.

Bairro Alto wakes up at sunset with century-old azulejo taverns, vinyl record shops and craft beer bars mixed in a neighbourhood where the night always has an excuse. LX Factory — a former textile factory — has a vintage market, restaurants with shared tables and impromptu concerts where nobody is quite sure how they ended up there but nobody wants to leave.

Portuguese gastronomy is reason enough to return on its own. {{CTA:activity:getyourguide:lisbon food tour lx factory:A food tour through Lisbon}} will take you from bacalhau à brás to the ginjinhas of Alfama, passing through seafood that gives the concept of "seasonal produce" a completely new meaning.

And if you have a spare day — and make sure you do — {{CTA:service:discovercars:lisbon:rent a car}} and drive to Sintra to get lost among fairy-tale palaces wrapped in Atlantic mist. It's the excursion that transforms a trip to Lisbon into something you remember indefinitely.`,
    },
  },
  // ─────────────────────────────────────────────
  // 5. ROME
  // ─────────────────────────────────────────────
  {
    id: 5,
    slug: "roma-guia-completa-2026",
    enSlug: "rome-complete-guide-2026",
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
          es: "42 kilómetros a través de los monumentos más icónicos del mundo. La más bonita del circuito — también la más calurosa en primavera. Lleva agua. Mucha agua.",
          en: "42 kilometres through the world's most iconic monuments. The most beautiful on the international circuit — and also, by March, already warmer than you'd expect. Bring water. Lots of it.",
        },
        affiliateLinks: [
          { label: { es: "Inscripción maratón", en: "Marathon entry" }, partner: "getyourguide", query: "rome marathon 2026", type: "activity" },
        ],
      },
      {
        name: "Estate Romana",
        type: "cultural",
        date: "Jun–Sep 2026",
        venue: "Teatros y espacios al aire libre",
        urgency: false,
        description: {
          es: "Festivales de música, teatro y cine al aire libre con el Coliseo o el Foro Romano de fondo. Básicamente lo que ocurre cuando vives en el mejor decorado de la historia.",
          en: "Music, theatre and open-air cinema with the Colosseum or Roman Forum as backdrop. What happens when you live inside the greatest set in history.",
        },
        affiliateLinks: [
          { label: { es: "Eventos Estate Romana", en: "Estate Romana events" }, partner: "ticketmaster", query: "estate romana roma 2026", type: "tickets" },
        ],
      },
      {
        name: "Settimana della Cucina Italiana",
        type: "gastronomy",
        date: "Nov 2026",
        venue: "Restaurantes de toda Roma",
        urgency: false,
        description: {
          es: "La semana de la gastronomía italiana con menús especiales en los mejores restaurantes de la capital. Ya que estás, pide la carbonara. Técnicamente solo lleva huevo, guanciale y queso, pero te costará €18.",
          en: "Italian gastronomy week with special menus at the capital's best restaurants. Go ahead and order the carbonara. It's technically just egg, guanciale and cheese, but it will cost you €18 and be worth every cent.",
        },
        affiliateLinks: [
          { label: { es: "Reservar mesa", en: "Book a table" }, partner: "opentable", query: "rome best restaurants 2026", type: "restaurant" },
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
      es: `Roma en verano tiene dos temperaturas: calor y mucho calor. Los fontanini salvan vidas. La pasta alla carbonara salva almas. Y el tráfico — bueno, el tráfico forma parte del espectáculo.

El Coliseo es el símbolo definitivo de Roma. {{CTA:tickets:getyourguide:colosseum rome skip line:Reserva tu entrada con acceso prioritario}} — las colas sin entrada previa pueden superar las dos horas en temporada alta. Conviene combinar la visita con el Foro Romano y el Palatino, donde podrás contemplar las ruinas del Imperio más grande de la historia y sentirte, por un momento, completamente insignificante. Es gratis.

El Vaticano es un estado dentro de una ciudad y merece al menos medio día, o un día entero si tu tolerancia al arte religioso es alta. La Capilla Sixtina, al final del recorrido, detiene la respiración — aunque a esas alturas ya llevas dos kilómetros de pasillos y es posible que hayas perdido el grupo. {{CTA:activity:civitatis:vatican museums sistine chapel tour:Un tour guiado por los Museos Vaticanos}} te explicará el contexto histórico que hace que la visita cobre otra dimensión, y además no te perderás.

El Trastevere es el barrio donde Roma baja la guardia y permite que los turistas crean que han descubierto algo secreto. Restaurantes con mesas en la calle, mercados matutinos, iglesias medievales que puedes visitar sin hacer cola. Es el barrio más humano de la ciudad, especialmente al atardecer, cuando todos los romanos parecen trasladarse aquí y los precios de las cervezas suben proporcionalmente.

El Panteón es, posiblemente, el edificio mejor conservado de la antigüedad y sigue funcionando como iglesia — lo que significa que Adriano lleva ganando el debate arquitectónico desde el año 125 d.C. {{CTA:tickets:tiqets:pantheon rome ticket:Compra tu entrada al Panteón}} y date tiempo para sentir lo que es estar bajo ese óculo que lleva 1.900 años abierto al cielo. Cuando llueve, el suelo se drena solo. Roma tenía los ingenieros correctos.

Para moverse entre los grandes sitios, {{CTA:activity:viator:colosseum guided tour rome:un tour guiado que combine el Coliseo, el Foro y el Palatino}} en una jornada es la opción más eficiente. La alternativa es ir solo, perderse, comer un granizado en una terraza y decidir que así también funciona. Cualquiera de las dos es una victoria.`,
      en: `Rome in summer has two temperatures: hot and extremely hot. The fontanini save lives. Pasta alla carbonara saves souls. And the traffic — well, the traffic is part of the show.

The Colosseum is the ultimate symbol of Rome. {{CTA:tickets:getyourguide:colosseum rome skip line:Book your priority-access ticket}} — queues without advance tickets can exceed two hours in high season. It's worth combining the visit with the Roman Forum and Palatine Hill, where you can contemplate the ruins of the greatest empire in history and feel, just for a moment, entirely insignificant. That part is free.

The Vatican is a state within a city and deserves at least half a day — or a full day if your tolerance for religious art is high. The Sistine Chapel, at the end of the tour, stops the breath, though by that point you've already walked two kilometres of corridors and may have lost the group. {{CTA:activity:civitatis:vatican museums sistine chapel tour:A guided tour of the Vatican Museums}} will explain the historical context that makes the visit take on another dimension — and also means you won't get lost.

Trastevere is the neighbourhood where Rome lets its guard down and lets tourists believe they've discovered something secret. Restaurants with street tables, morning markets, medieval churches you can enter without queuing. It's the city's most human neighbourhood, especially in the evening when all Romans seem to move here and beer prices rise proportionally.

The Pantheon is possibly the best-preserved building from antiquity and still functions as a church — which means Hadrian has been winning the architecture debate since 125 AD. {{CTA:tickets:tiqets:pantheon rome ticket:Buy your Pantheon ticket}} and give yourself time to feel what it means to stand beneath an oculus that has been open to the sky for 1,900 years. When it rains, the floor drains itself. Rome had the right engineers.

To move efficiently between the great sites, {{CTA:activity:viator:colosseum guided tour rome:a guided tour combining the Colosseum, the Forum and Palatine Hill}} in one day is the most efficient option. The alternative is going solo, getting lost, eating a granita on a terrace and deciding that works just as well. Either way is a win.`,
    },
  },

  // ─────────────────────────────────────────────
  // 6. NEW YORK
  // ─────────────────────────────────────────────
  {
    id: 6,
    slug: "nueva-york-guia-2026",
    enSlug: "new-york-guide-2026",
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
          es: "La semana de la moda más influyente del mundo. Shows, pop-ups y fiestas que transforman la ciudad — y hacen que ya resulte difícil encontrar taxi en Midtown.",
          en: "The world's most influential fashion week. Shows, pop-ups and parties that transform the city — and make it even harder than usual to get a cab in Midtown.",
        },
        affiliateLinks: [
          { label: { es: "Eventos fashion week", en: "Fashion week events" }, partner: "stubhub", query: "new york fashion week 2026", type: "tickets" },
        ],
      },
      {
        name: "NYC Marathon",
        type: "sport",
        date: "Nov 2026",
        venue: "5 distritos",
        urgency: true,
        description: {
          es: "La maratón más grande del mundo con 50.000 corredores atravesando los cinco distritos. La ciudad entera anima. Tú también animarás, aunque solo vayas a ver.",
          en: "The world's largest marathon with 50,000 runners crossing all five boroughs. The entire city cheers. So will you, even if you only came to watch.",
        },
        affiliateLinks: [
          { label: { es: "NYC Marathon 2026", en: "NYC Marathon 2026" }, partner: "ticketmaster", query: "new york marathon 2026", type: "tickets" },
        ],
      },
      {
        name: "New Year's Eve Times Square",
        type: "cultural",
        date: "31 Dic 2026",
        venue: "Times Square",
        urgency: true,
        description: {
          es: "La cuenta atrás más famosa del mundo. Un millón de personas bajo la bola de cristal, de pie en el frío desde las seis de la tarde. Romántico, objetivamente.",
          en: "The world's most famous countdown. A million people under the crystal ball, standing in the cold since six in the evening. Objectively romantic.",
        },
        affiliateLinks: [
          { label: { es: "Tour Nochevieja NYC", en: "NYC New Year's tour" }, partner: "viator", query: "new years eve times square tour", type: "activity" },
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
      es: `Nueva York no es una ciudad. Es un experimento en curso sobre qué puede llegar a ser la humanidad cuando se pone seria — y sobre cuánto puede costar un apartamento de 40 metros cuadrados. Caótica, brillante, agotadora y completamente imposible de olvidar, especialmente porque te dejó sin ahorros.

Central Park es el pulmón verde de Manhattan: 341 hectáreas donde los corredores al amanecer comparten espacio con conciertos espontáneos y ardillas que han perdido el miedo al hombre hace generaciones. Rodéalo a pie siguiendo la ruta de los museos — el MET es una jornada entera, y "entera" significa que saldrás con dolor de pies y la convicción de que necesitas más días — {{CTA:tickets:tiqets:metropolitan museum new york:compra tu entrada al MET}} para evitar colas y tener acceso prioritario a las exposiciones temporales que, con suerte, alguien te explicará.

El Brooklyn Bridge sigue siendo una de esas cosas que te hace pensar que los humanos somos capaces de algo grande, cuando no estamos haciendo cola o mirando el teléfono. Crúzalo a pie al amanecer, con Manhattan iluminándose a tu espalda. Después, explora Dumbo: cafeterías con vistas al puente, la mejor pizza de masa fina de la ciudad, y el barrio donde todos los creativos de Nueva York querían vivir antes de que el alquiler los expulsara a Queens.

The High Line transforma una vía de tren abandonada en un parque elevado de 2,3 km con arte contemporáneo y vistas al Hudson. Es el proyecto de regeneración urbana más elegante del siglo XXI, y lo mejor es que es gratis — lo que, en esta ciudad, lo convierte casi en un milagro.

MoMA, el Guggenheim, el Whitney — Nueva York tiene más museos de clase mundial que la mayoría de los países europeos, y la suficiente actitud para saberlo. {{CTA:activity:getyourguide:met museum highlights tour nyc:Un tour guiado por el MET}} te ayudará a contextualizar la colección y descubrir las obras que de otro modo pasarías por alto entre tanta magnificencia. También es útil para saber de qué hablar en la cena.

Para comer, desayunar un bagel con salmón ahumado en un deli del East Village es un ritual protegido. El café es grande, fuerte y viene en un vaso de papel con un nombre mal escrito. Así es como funciona aquí. {{CTA:service:skyscanner:new york:Volar a Nueva York}} se hace desde casi cualquier aeropuerto del mundo — el truco es llegar con suficiente energía como para sobrevivir los primeros tres días.`,
      en: `New York is not a city. It's an ongoing experiment into what humanity can become when it gets serious — and into how much a 40-square-metre apartment can cost. Chaotic, brilliant, exhausting and completely impossible to forget, especially because it emptied your savings account.

Central Park is Manhattan's green lung: 341 hectares where dawn runners share space with spontaneous concerts and squirrels that lost their fear of humans several generations ago. Walk around it following the museum route — the MET is an entire day, and "entire" means you'll emerge with sore feet and the conviction that you need more days — {{CTA:tickets:tiqets:metropolitan museum new york:buy your MET ticket}} to skip the queues and get priority access to temporary exhibitions, which someone may helpfully explain to you.

The Brooklyn Bridge remains one of those things that makes you think humans are occasionally capable of something great, when we're not queuing or staring at our phones. Walk across it at sunrise, with Manhattan lighting up behind you. Afterwards, explore Dumbo: cafés with bridge views, the city's best thin-crust pizza, and the neighbourhood where all of New York's creatives wanted to live before the rent drove them to Queens.

The High Line transforms an abandoned railway into a 2.3km elevated park with contemporary art and Hudson River views. It's the most elegant urban regeneration project of the 21st century, and it's free — which in this city makes it almost miraculous.

MoMA, the Guggenheim, the Whitney — New York has more world-class museums than most European countries, and enough attitude to know it. {{CTA:activity:getyourguide:met museum highlights tour nyc:A guided tour of the MET}} will help you contextualise the collection and discover the masterpieces you'd otherwise walk past in a fog of jet lag and grandeur. Also useful for knowing what to talk about at dinner.

For food, having a bagel with smoked salmon at an East Village deli is a protected ritual. The coffee is large, strong and arrives in a paper cup with your name spelled incorrectly. That's just how it works here. {{CTA:service:skyscanner:new york:Flying to New York}} is possible from almost any airport in the world — the trick is arriving with enough energy to survive the first three days.`,
    },
  },

  // ─────────────────────────────────────────────
  // 7. AMSTERDAM
  // ─────────────────────────────────────────────
  {
    id: 7,
    slug: "amsterdam-guia-2026",
    enSlug: "amsterdam-guide-2026",
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
          es: "La ciudad entera se viste de naranja para celebrar el cumpleaños del rey. Mercados callejeros, fiesta en los canales y la única ocasión del año en que está socialmente aceptado beber cerveza en un barco a las once de la mañana.",
          en: "The entire city dresses in orange to celebrate the king's birthday. Street markets, canal parties and the one day of the year when drinking beer on a boat at eleven in the morning is socially acceptable.",
        },
        affiliateLinks: [
          { label: { es: "Tour King's Day", en: "King's Day tour" }, partner: "viator", query: "kings day amsterdam 2026", type: "activity" },
        ],
      },
      {
        name: "Amsterdam Dance Event",
        type: "electronic",
        date: "Oct 2026",
        venue: "Toda la ciudad",
        urgency: true,
        description: {
          es: "El festival de música electrónica más grande del mundo. 400 eventos en 140 venues durante 5 días. Tu sueño — o tu pesadilla, dependiendo de tu relación con el techno y el jet lag.",
          en: "The world's largest electronic music festival. 400 events across 140 venues over 5 days. Your dream — or your nightmare, depending on your relationship with techno and jet lag.",
        },
        affiliateLinks: [
          { label: { es: "Entradas ADE", en: "ADE tickets" }, partner: "ticketmaster", query: "amsterdam dance event 2026", type: "tickets" },
        ],
      },
      {
        name: "Amsterdam Light Festival",
        type: "art",
        date: "Nov–Ene 2026/27",
        venue: "Canales del centro",
        urgency: false,
        description: {
          es: "Instalaciones de arte luminoso a lo largo de los canales históricos. Mejor en barco, con una manta, un vino caliente y la sensación de haber tomado una decisión excelente.",
          en: "Light art installations along the historic canals. Best experienced by boat, with a blanket, a warm wine and the feeling that you have made an excellent life decision.",
        },
        affiliateLinks: [
          { label: { es: "Tour en barco", en: "Boat tour" }, partner: "getyourguide", query: "amsterdam light festival boat tour", type: "activity" },
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
      es: `Ámsterdam es contradictoria de la manera más encantadora posible. Una ciudad del siglo XVII con 165 canales y un millón de bicicletas que resulta ser una de las más progresistas y sofisticadas de Europa. Y todo esto en un territorio que literalmente está por debajo del nivel del mar — los holandeses llevan siglos ganando peleas contra la naturaleza y no tienen ninguna intención de parar.

Lo primero que aprenderás en Ámsterdam es a mirar antes de cruzar. No por los coches — los coches son lo de menos. Por las bicicletas. Van rápido, llevan la razón y la legislación de su parte. El Rijksmuseum es la razón por la que Ámsterdam está en el mapa cultural mundial: Rembrandt, Vermeer, Frans Hals. {{CTA:tickets:tiqets:rijksmuseum amsterdam:Compra tu entrada al Rijksmuseum}} con tiempo — las colas se extienden a lo largo del canal en temporada alta, y la ironía de hacer cola junto a una obra de arte es algo que solo pasa aquí.

La Casa de Ana Frank es una experiencia que va más allá del turismo. El Anexo Secreto es un recordatorio físico de uno de los capítulos más oscuros del siglo XX, y ninguna descripción hace justicia a lo que se siente estando dentro. {{CTA:tickets:tiqets:anne frank house amsterdam:Reserva tu entrada}} semanas antes — el aforo es limitado y las entradas se agotan con frecuencia. Esto no es un aviso turístico; es una obligación moral.

El Jordaan es el barrio que mejor conserva el espíritu original de Ámsterdam: calles estrechas bordeadas de casas con fachadas en escalón, brown cafés que huelen a café y madera vieja, tiendas de antigüedades donde el dueño lleva ahí más años que la mayor parte de los turistas llevan vivos, y el Noordermarkt los sábados. Si en algún momento de tu viaje piensas "esto es exactamente lo que esperaba de Ámsterdam", probablemente estés en el Jordaan.

Vondelpark es donde todos los holandeses llevan sus bicicletas los domingos — lo que en teoría lo haría más peligroso, pero en la práctica todos van más despacio porque están relajados. Conciertos gratuitos, perros, niños en equilibrio, parejas leyendo. El tipo de ambiente relajado que te recuerda por qué esta ciudad tiene fama de la más habitable de Europa.

Para moverse por la ciudad, {{CTA:activity:getyourguide:amsterdam canal bike tour:un tour en bicicleta por los canales}} es la experiencia más amsterdamesa que existe. Sí, tendrás que pedalear. Sí, merecerá la pena. Y no, no podrás evitar que en algún momento una bici local pase a tu lado a velocidad de crucero y te haga sentir un turista. Claro que sí.`,
      en: `Amsterdam is contradictory in the most charming way possible. A 17th-century city with 165 canals and a million bicycles that turns out to be one of Europe's most progressive and sophisticated. All this on a territory that is literally below sea level — the Dutch have been winning fights against nature for centuries and have no intention of stopping.

The first thing you'll learn in Amsterdam is to look before you cross the road. Not for cars — cars are the least of your worries. For bicycles. They're fast, they're right, and the law is on their side. The Rijksmuseum is the reason Amsterdam appears on the world cultural map: Rembrandt, Vermeer, Frans Hals. {{CTA:tickets:tiqets:rijksmuseum amsterdam:Buy your Rijksmuseum ticket}} well in advance — queues stretch along the canal in high season, and the irony of queuing next to a work of art is something that only happens here.

The Anne Frank House is an experience that goes beyond tourism. The Secret Annex is a physical reminder of one of the 20th century's darkest chapters, and no description does justice to what it feels like to stand inside it. {{CTA:tickets:tiqets:anne frank house amsterdam:Book your ticket}} weeks ahead — capacity is limited and tickets sell out frequently. This is not a tourist tip; it's a moral obligation.

The Jordaan is the neighbourhood that best preserves Amsterdam's original spirit: narrow streets lined with step-gabled houses, brown cafés that smell of coffee and old wood, antique shops where the owner has been there longer than most tourists have been alive, and the Noordermarkt on Saturdays. If at any point during your trip you think "this is exactly what I expected Amsterdam to be", you're probably in the Jordaan.

Vondelpark is where all Dutch people take their bicycles on Sundays — which in theory would make it more dangerous, but in practice everyone goes slower because they're relaxed. Free concerts, dogs, children on balance bikes, couples reading. The kind of atmosphere that reminds you why this city has a reputation as Europe's most liveable.

For getting around the city, {{CTA:activity:getyourguide:amsterdam canal bike tour:a cycling tour of the canals}} is the most Amsterdamian experience there is. Yes, you'll have to pedal. Yes, it will be worth it. And no, you won't be able to avoid a local cyclist gliding past you at cruising speed and making you feel like a tourist. That's just how it works here.`,
    },
  },

  // ─────────────────────────────────────────────
  // 8. BANGKOK
  // ─────────────────────────────────────────────
  {
    id: 8,
    slug: "bangkok-guia-2026",
    enSlug: "bangkok-guide-2026",
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
          es: "El año nuevo tailandés convertido en el festival de agua más grande del mundo. Tres días de batalla acuática en las calles. No hay ropa impermeable suficiente. No se puede ganar. Solo se puede disfrutar.",
          en: "The Thai New Year turned into the world's largest water festival. Three days of water battles in the streets. No waterproofing is sufficient. You cannot win. You can only enjoy it.",
        },
        affiliateLinks: [
          { label: { es: "Tour Songkran Bangkok", en: "Bangkok Songkran tour" }, partner: "getyourguide", query: "songkran festival bangkok 2026", type: "activity" },
        ],
      },
      {
        name: "Loy Krathong",
        type: "cultural",
        date: "Nov 2026",
        venue: "Ríos y lagos",
        urgency: false,
        description: {
          es: "Miles de linternas de papel iluminan el cielo y el río Chao Phraya se llena de pequeñas balsas con velas y flores. Es tan bonito que te parecerá mentira que sea real — y sin embargo ahí estás.",
          en: "Thousands of paper lanterns illuminate the sky and the Chao Phraya River fills with small rafts bearing candles and flowers. It's so beautiful you'll find it hard to believe it's real — and yet there you are.",
        },
        affiliateLinks: [
          { label: { es: "Tour Loy Krathong", en: "Loy Krathong tour" }, partner: "viator", query: "loy krathong bangkok 2026", type: "activity" },
        ],
      },
      {
        name: "Bangkok Design Week",
        type: "art",
        date: "Feb 2026",
        venue: "Charoen Krung",
        urgency: false,
        description: {
          es: "Exposiciones de diseño, arquitectura y arte contemporáneo tailandés en el barrio más creativo de Bangkok. La prueba de que esta ciudad tiene capas que el turista estándar ni sospecha.",
          en: "Design, architecture and contemporary Thai art exhibitions in Bangkok's most creative neighbourhood. Proof that this city has layers the average tourist never suspects.",
        },
        affiliateLinks: [
          { label: { es: "Eventos Bangkok Design", en: "Bangkok Design events" }, partner: "ticketmaster", query: "bangkok design week 2026", type: "tickets" },
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
      es: `Bangkok te recibe con un golpe de calor, olor a incienso y el caos más estimulante que puedes encontrar en el planeta. Una megalópolis de 11 millones de personas donde un templo budista del siglo XVIII convive a dos minutos a pie con un centro comercial de siete plantas y un mercado flotante. Antes de que puedas procesar todo esto, ya tienes un pad thai en la mano. Así empieza Bangkok.

El Gran Palacio y el Wat Phra Kaew son el corazón espiritual de Tailandia — y también el punto donde más turistas llevan pantalones largos en verano. El Buda de Esmeralda es la figura religiosa más venerada del país. {{CTA:tickets:tiqets:grand palace bangkok:Compra tu entrada al Gran Palacio}} — recuerda llevar el código de vestimenta correcto (hombros y rodillas cubiertos). Si llegas en camiseta de tirantes, hay un mostrador donde te prestarán algo. Esto también forma parte de la experiencia. A cien metros, el Wat Pho alberga al Buda Reclinado, una figura de 46 metros que llena completamente el templo y que en ninguna fotografía cabe entera — hecho que no ha impedido que millones de personas lo intenten.

Chatuchak es el mercado de fin de semana más grande del mundo: 15.000 puestos que venden desde antigüedades birmanas hasta street food de toda Tailandia. {{CTA:activity:getyourguide:chatuchak market tour bangkok:Un tour guiado por Chatuchak}} es la mejor forma de orientarse en este laberinto de 27 hectáreas sin acabar perdido en la sección de reptiles preguntándote cómo llegaste hasta aquí.

El río Chao Phraya es la autopista histórica de Bangkok. En barco puedes llegar al Wat Arun — cuya fachada de porcelana brilla con la luz del atardecer de una manera que ninguna fotografía hace justicia. Lo sabemos porque todos lo intentan, durante mucho tiempo, con mucho teléfono. {{CTA:activity:viator:chao phraya river cruise bangkok:Un crucero por el Chao Phraya}} con cena incluida es uno de los planes más memorables que puedes tener en esta ciudad, especialmente si consigues una mesa en cubierta.

La gastronomía callejera de Bangkok es inigualable. Pad thai en Thip Samai, tom yum goong humeante, mango sticky rice al caer la tarde. Ningún restaurante del mundo consigue esto por menos de €1,50. Y cuando descubres que el puesto de al lado también está igual de bueno, y el de al lado también, y el de más allá, entiendes que Bangkok no es un destino gastronómico: es un estado de gracia alimentaria permanente del que no quieres que te saquen nunca.`,
      en: `Bangkok hits you with a wave of heat, incense and the most stimulating chaos you'll find on the planet. A megalopolis of 11 million people where an 18th-century Buddhist temple coexists two minutes' walk from a seven-storey shopping mall and a floating market. Before you can process any of this, you already have pad thai in your hand. That's how Bangkok begins.

The Grand Palace and Wat Phra Kaew are the spiritual heart of Thailand — and also the point where the highest concentration of tourists wear long trousers in the heat. The Emerald Buddha is the country's most venerated religious figure. {{CTA:tickets:tiqets:grand palace bangkok:Buy your Grand Palace ticket}} — remember to follow the dress code (shoulders and knees covered). If you arrive in a tank top, there's a counter where they'll lend you something. This is also part of the experience. A hundred metres away, Wat Pho houses the Reclining Buddha, a 46-metre figure that completely fills its temple and that fits in no single photograph — a fact that has not stopped millions of people trying.

Chatuchak is the world's largest weekend market: 15,000 stalls selling everything from Burmese antiques to street food from across Thailand. {{CTA:activity:getyourguide:chatuchak market tour bangkok:A guided tour of Chatuchak}} is the best way to navigate this 27-hectare labyrinth without ending up lost in the reptile section wondering how you got there.

The Chao Phraya River is Bangkok's historic highway. By boat you can reach Wat Arun — whose porcelain façade shines in the afternoon light in a way no photograph does justice to. We know, because everyone tries, for a long time, with a great deal of phone. {{CTA:activity:viator:chao phraya river cruise bangkok:A Chao Phraya river cruise}} with dinner included is one of the most memorable experiences this city offers, especially if you get a table on deck.

Bangkok's street food is in a class of its own. Pad thai at Thip Samai, steaming tom yum goong, mango sticky rice as an afternoon dessert. No restaurant in the world achieves this for less than €1.50. And when you discover that the stall next door is equally good, and the one after that, and the one beyond, you understand that Bangkok is not a gastronomic destination — it's a permanent state of culinary grace that you never want to leave.`,
    },
  },  // ─────────────────────────────────────────────
  // 9. MARRAKECH
  // ─────────────────────────────────────────────
  {
    id: 9,
    slug: "marrakech-guia-2026",
    enSlug: "marrakech-guide-2026",
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
          es: "Uno de los festivales de cine más prestigiosos de África, con alfombra roja, proyecciones al aire libre en la medina y la posibilidad de ver una película con estrellas de Hollywood a tu derecha y un encantador de serpientes a tu izquierda.",
          en: "One of Africa's most prestigious film festivals, with red carpet events and open-air screenings in the medina. Quite possibly the only film festival where the afterparty involves a live cobra.",
        },
        affiliateLinks: [
          { label: { es: "Entradas festival cine", en: "Film festival tickets" }, partner: "ticketmaster", query: "marrakech film festival 2026", type: "tickets" },
        ],
      },
      {
        name: "Ramadán en Marrakech",
        type: "cultural",
        date: "Feb–Mar 2026",
        venue: "Toda la medina",
        urgency: false,
        description: {
          es: "La medina cobra una dimensión espiritual única al atardecer cuando la llamada al magrib anuncia el iftar y las calles, que estaban desiertas, se llenan de vida en cuestión de segundos. El mejor espectáculo sin entrada que existe.",
          en: "The medina takes on a unique spiritual dimension at sunset when the call to maghrib announces iftar and streets that were empty seconds ago suddenly fill with life. The best free show on earth.",
        },
        affiliateLinks: [
          { label: { es: "Tour iftar Ramadán", en: "Ramadan iftar tour" }, partner: "getyourguide", query: "marrakech ramadan iftar tour", type: "activity" },
        ],
      },
      {
        name: "Excursión al Desierto",
        type: "natural",
        date: "Todo el año",
        venue: "Sahara, Merzouga",
        urgency: false,
        description: {
          es: "Merzouga y las dunas de Erg Chebbi, a un día de Marrakech. Noche en jaima bajo un cielo tan estrellado que parece CGI. La arena en los zapatos durante el vuelo de vuelta es parte del recuerdo.",
          en: "Merzouga and the Erg Chebbi dunes, a day from Marrakech. A night in a tent under a star-filled sky that looks too good to be real. The sand in your shoes for the flight home is a free souvenir.",
        },
        affiliateLinks: [
          { label: { es: "Tour desierto Sahara", en: "Sahara desert tour" }, partner: "viator", query: "sahara desert tour marrakech merzouga", type: "activity" },
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
      es: `Marrakech te asalta por todos los sentidos simultáneamente. El olor a especias y a rosa, el ruido de los herreros, el naranja de las murallas a la hora dorada y el sabor a harira que cambia para siempre el concepto de lo que puede ser una sopa. La Ciudad Roja no se visita — se sufre y se ama, en ese orden, y a veces al mismo tiempo.

La Djemaa el-Fna es el lugar más cinematográfico del mundo. La plaza principal de la medina se transforma con el día: acróbatas y encantadores de serpientes por la mañana — que, ya que estás, van a intentar ponerte una encima —; mercado de comida al aire libre que alimenta a cientos de personas entre humo de brasas al atardecer. {{CTA:activity:getyourguide:djemaa el fna marrakech tour:Un tour guiado por la medina}} te dará contexto histórico y te mostrará los rincones donde solo van los marroquíes, que es exactamente lo que buscabas aunque todavía no lo sabías.

El Jardin Majorelle es el oasis de la ciudad. Sus jardines de azul cobalto son un refugio de paz en medio del caos — y sí, todo el mundo tiene la misma idea de escaparse aquí. {{CTA:tickets:tiqets:jardin majorelle marrakech:Compra tu entrada al Jardín Majorelle}} con antelación porque la afluencia es alta, el acceso está controlado y no has venido hasta Marrakech para quedarte en la cola.

Los zocos de Marrakech son el comercio como forma de arte. Barrio de los tintoreros, callejones de carpinteros, fondouks donde artesanos trabajan cuero y cobre con técnicas centenarias. Negociar es parte del ritual — el primer precio siempre es el doble del precio real, y el vendedor te lo dice con una sonrisa que te hace querer pagarle igualmente.

El Palacio Bahía y las Tumbas Saadíes añaden una dimensión histórica que recuerda que Marrakech fue durante siglos una de las capitales del mundo islámico, antes de que alguien inventara Instagram y empezara a fotografiar sus puertas azules.

Para ver el desierto, {{CTA:activity:viator:sahara desert tour marrakech merzouga:un tour de uno o dos días al Sahara}} desde Marrakech es una de las experiencias más transformadoras que puedes tener en el norte de África. La arena en los zapatos al volver es un recuerdo gratuito y duradero.`,
      en: `Marrakech assaults all your senses simultaneously. The smell of spices and roses, the sound of blacksmiths, the orange of the walls at golden hour and the taste of harira that permanently redefines your concept of what soup can be. The Red City isn't visited — it's suffered and loved, in that order, and sometimes both at once.

Djemaa el-Fna is the world's most cinematic place. The medina's main square transforms throughout the day: acrobats and snake charmers in the morning — who will, while you're at it, attempt to drape something scaly on your shoulders —; an open-air food market feeding hundreds between charcoal smoke at sunset. {{CTA:activity:getyourguide:djemaa el fna marrakech tour:A guided tour of the medina}} will give you historical context and show you the corners only Moroccans visit, which is precisely what you wanted even if you didn't know it yet.

The Jardin Majorelle is the city's oasis. Its cobalt blue gardens are a haven of peace amid the chaos — and yes, everyone else had exactly the same idea about coming here to escape the crowds. {{CTA:tickets:tiqets:jardin majorelle marrakech:Buy your Jardin Majorelle ticket}} in advance — visitor numbers are high, access is controlled, and you didn't come all the way to Marrakech to stand in a queue.

Marrakech's souks are commerce as an art form. The dyers' quarter, carpenters' alleyways, fondouks where artisans work leather and copper with centuries-old techniques. Negotiating is part of the ritual — the first price is always double the real one, and the vendor delivers it with a smile that makes you want to pay it anyway.

The Bahia Palace and the Saadian Tombs add a historical dimension that reminds you Marrakech was for centuries one of the cultural capitals of the Islamic world, long before anyone discovered its blue doors were photogenic.

To see the desert, {{CTA:activity:viator:sahara desert tour marrakech merzouga:a one or two-day tour to the Sahara}} from Marrakech is one of the most transformative experiences you can have in North Africa. The sand in your shoes on the flight home is a free and persistent souvenir.`,
    },
  },

  // ─── DUBAI ────────────────────────────────────────────────────────────────────
  {
  id: 10,
  slug: "dubai-guia-2026",
  enSlug: "dubai-guide-2026",
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
      description: { es: "El mayor festival de compras del mundo con descuentos masivos, shows y sorteos de coches y oro durante todo enero. El único lugar del planeta donde hacer cola para entrar a un centro comercial se considera actividad cultural.", en: "The world's biggest shopping festival with massive discounts, shows and draws for cars and gold throughout January. The only place on earth where queuing to enter a mall is considered a cultural experience." },
      affiliateLinks: [],
    },
    {
      name: "Dubai Airshow",
      type: "technology",
      date: "Noviembre 2025",
      description: { es: "La feria aeronáutica más importante de la región con exhibiciones espectaculares y los últimos avances en aviación. Para cuando salgas habrás considerado seriamente comprarte un avión privado.", en: "The region's most important aeronautical fair with spectacular airshows and the latest aviation advances. You will leave having briefly considered purchasing a private jet. This is intentional." },
      affiliateLinks: [],
    },
    {
      name: "Dubai World Cup",
      type: "sport",
      date: "Marzo 2026",
      description: { es: "La carrera de caballos con el mayor premio en metálico del mundo en el hipódromo de Meydan. Entrada gratuita — lo cual, en Dubái, merece documentarse por su rareza.", en: "The horse race with the world's largest prize money at Meydan Racecourse. Free admission — which, in Dubai, is a fact so unusual it deserves to be highlighted." },
      affiliateLinks: [],
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
    es: `Dubái es una apuesta extrema que sale bien. En menos de 50 años pasó de ser un pueblo pesquero del Golfo a convertirse en una de las ciudades más visitadas del mundo. El secreto no es solo el lujo — es la ambición sin complejos de construir lo que antes solo existía en la ciencia ficción, con un presupuesto que claramente no tuvo límites y con el aire acondicionado como principal argumento turístico en los meses de verano.

El **Burj Khalifa** sigue siendo la referencia inevitable. Con 828 metros, sigue siendo el edificio más alto del planeta. {{CTA:tickets:tiqets:burj khalifa at the top entrada:Reserva tu entrada al Burj Khalifa}} con antelación — las entradas para los pisos superiores (148) se agotan semanas antes, y si no reservas online pagarás más para ver exactamente lo mismo. La mejor hora: el atardecer, cuando el desierto se tiñe de naranja y las luces de la ciudad empiezan a encenderse y empiezas a entender por qué la gente se vuelve a Dubái.

Justo al lado está el **Dubai Mall**, donde el shopping se convierte en un acontecimiento y los euros en un recuerdo. El Dubai Aquarium alberga uno de los acuarios más grandes del mundo visible desde el interior del centro. Por las noches, la Dubai Fountain sincroniza chorros de 150 metros de altura con música en un espectáculo gratuito y cinematográfico — gratis, en Dubái, es algo que conviene celebrar.

Pero el Dubái que más sorprende está fuera del centro. El barrio de **Al Fahidi** conserva las antiguas torres de viento de barro — el aire acondicionado premoderno, que funcionaba con física en lugar de con electricidad — y el Museo de Dubái cuenta cómo era esta ciudad antes del petróleo. Cruzar el **Dubai Creek** en abra por 1 dírhams es uno de los mejores momentos del viaje y, estadísticamente, la experiencia más barata que vas a tener en esta ciudad.

Para la experiencia definitiva de contraste, nada supera un **safari en el desierto** al atardecer. {{CTA:activity:getyourguide:dubai desert safari sunset:Reserva tu safari al atardecer}} — incluye sandboarding, fotografías entre las dunas y cena beduina bajo las estrellas. A 45 minutos del Burj Khalifa y a siglos de distancia. También incluye la satisfacción de haber hecho algo que no cuesta 500 euros.

La **Palm Jumeirah** merece una mañana entera. El monorraíl la recorre de extremo a extremo ofreciendo vistas de toda la costa. El hotel Atlantis tiene uno de los mejores parques acuáticos del mundo — {{CTA:activity:tiqets:atlantis aquaventure water park dubai:las entradas al Aquaventure}} son caras pero justificadas si viajas con familia o buscas un día de adrenalina total y no te importa que la adrenalina también incluya ver la tarjeta de crédito.

**Cómo moverse**: el metro de Dubái es moderno, barato y conecta todos los puntos principales de Sheikh Zayed Road. Para el Old Dubai, los taxis son razonables. {{CTA:service:discovercars:alquiler coche dubai:Un coche de alquiler}} te permite llegar al desierto y a las playas más alejadas con total libertad — y es la única forma de escapar del mall cuando necesites aire fresco.`,
    en: `Dubai is an extreme bet that pays off. In less than 50 years it went from being a Gulf fishing village to one of the world's most visited cities. The secret isn't just luxury — it's the unapologetic ambition to build what previously existed only in science fiction, with an apparently unlimited budget and air conditioning as the primary tourist attraction from June through September.

The **Burj Khalifa** remains the unmissable reference. At 828 metres, it's still the tallest building on the planet. {{CTA:tickets:tiqets:burj khalifa at the top ticket:Book your Burj Khalifa ticket}} in advance — tickets for the upper floors (148) sell out weeks ahead, and if you don't book online you'll pay more to see precisely the same view. Best time: sunset, when the desert turns orange and the city lights begin to twinkle and you begin to understand why people keep coming back.

Right next door is the **Dubai Mall**, where shopping becomes an event and your budget becomes a distant memory. The Dubai Aquarium houses one of the world's largest tanks visible from inside the mall. At night, the Dubai Fountain synchronises jets of water 150 metres high with music in a free, cinematic spectacle — free, in Dubai, being a fact worth pausing to appreciate.

But the Dubai that surprises most is outside the centre. The **Al Fahidi** district preserves the ancient mud wind towers — pre-modern air conditioning, running on physics rather than electricity bills — and the Dubai Museum tells how this city looked before oil. Crossing **Dubai Creek** by abra for 1 dirham is one of the trip's best moments and, statistically, the cheapest experience you will have in this city.

For the ultimate contrast experience, nothing beats a **desert safari** at sunset. {{CTA:activity:getyourguide:dubai desert safari sunset:Book your sunset safari}} — it includes sandboarding, photos among the dunes and a Bedouin dinner under the stars. 45 minutes from the Burj Khalifa and several centuries away. Also includes the quiet satisfaction of doing something that doesn't cost €500.

**Palm Jumeirah** deserves a full morning. The monorail runs its entire length offering views of the whole coastline. The Atlantis hotel has one of the world's best water parks — {{CTA:activity:tiqets:atlantis aquaventure water park dubai:Aquaventure tickets}} are expensive but justified if travelling with family or looking for a full adrenaline day, where the adrenaline in question includes watching your credit card statement.

**Getting around**: Dubai's metro is modern, cheap and connects all the main points on Sheikh Zayed Road. For Old Dubai, taxis are reasonable. {{CTA:service:discovercars:car hire dubai:A rental car}} gives you freedom to reach the desert and more distant beaches at will — and is the only reliable means of escaping a mall when you genuinely need fresh air.`,
  },
},

// ─── PRAGA ────────────────────────────────────────────────────────────────────
{
  id: 11,
  slug: "praga-guia-2026",
  enSlug: "prague-guide-2026",
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
      description: { es: "Los mercados de Navidad en la Plaza de la Ciudad Vieja y Wenceslao están entre los más bonitos de toda Europa, con artesanía tradicional, vino caliente y temperaturas que te recordarán por qué Centroeuropa inventó los abrigos.", en: "The Christmas markets at Old Town Square and Wenceslas Square are among the most beautiful in all of Europe, with traditional crafts, mulled wine, and temperatures that explain why Central Europe invented the overcoat." },
      affiliateLinks: [],
    },
    {
      name: "Prague Spring Music Festival",
      type: "cultural",
      date: "Mayo 2026",
      description: { es: "El festival de música clásica más importante de Europa Central, con conciertos en palacios, iglesias y salas históricas durante tres semanas. La mejor excusa para vestirse bien y fingir que entiendes de música clásica.", en: "Central Europe's most important classical music festival, with concerts in palaces, churches and historic halls for three weeks. The finest excuse to dress up and pretend you understand classical music." },
      affiliateLinks: [],
    },
    {
      name: "Prague International Marathon",
      type: "sport",
      date: "Mayo 2026",
      description: { es: "Una de las maratones urbanas más espectaculares del mundo, con el trazado atravesando el casco histórico Patrimonio de la Humanidad. Correr o aplaudir: ambas opciones son válidas.", en: "One of the world's most spectacular city marathons, with the route passing through the UNESCO World Heritage historic centre. Running or cheering: both are entirely valid choices." },
      affiliateLinks: [],
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
    es: `Praga tiene el don de parecer inventada. Sus torres góticas, los puentes de piedra y los tejados de teja roja forman una postal tan perfecta que cuesta creer que sea real. Y sin embargo existe, intacta, como si el tiempo hubiera decidido saltarse el siglo XX — aunque el tiempo no pudo evitar que el siglo XXI la descubriera en masa, con maleta de cabina incluida.

El **Castillo de Praga** domina la ciudad desde la colina de Hradčany y es el punto de partida obligatorio. El complejo más grande del mundo alberga la **Catedral de San Vito**, cuyas vidrieras filtrando la luz de la mañana son uno de los espectáculos visuales más intensos de Europa. {{CTA:tickets:tiqets:prague castle st vitus cathedral:Reserva tu entrada al Castillo}} — el combinado incluye el Palacio Real, la Basílica de San Jorge y el mítico **Callejón del Oro**, donde Kafka vivió brevemente y donde hoy hay tiendas de souvenirs. Kafka lo habría apreciado.

El **Puente de Carlos** es el símbolo de Praga y uno de los puentes más fotografiados del mundo. La clave es el horario: al amanecer, antes de las 7h, lo tendrás casi para ti solo. Las 30 estatuas barrocas de los santos custodiando el río Moldava son un catálogo de historia del arte al aire libre, y a las 11h son también el fondo de aproximadamente cuatro millones de fotos.

El **Barrio Judío de Josefov** es quizá la visita más importante de Praga para entender la historia de Europa. {{CTA:tickets:tiqets:jewish museum prague josefov synagogues:Entra al Museo Judío}} — el ticket combinado da acceso a seis sinagogas y al cementerio medieval donde doce generaciones de judíos están enterradas en solo 12.000 metros cuadrados. Es uno de esos lugares que te cambia la perspectiva para el resto del viaje.

Para comer y beber lejos de los circuitos turísticos — y de los grupos de despedida de soltero —, el barrio de **Vinohrady** es la respuesta. Cafés de especialidad, restaurantes con cocina checa moderna y la mejor selección de cervezas artesanales de la ciudad. Una cerveza Pilsner Urquell en un tradicional pivnice (cervecería) cuesta menos de 2€, lo cual en 2026 sigue siendo uno de los mejores datos estadísticos de Europa.

**Cómo moverse**: el metro y los tranvías de Praga son eficientísimos y baratos. El casco histórico se recorre perfectamente a pie — con calzado cómodo, porque los adoquines son hermosos pero no tienen ninguna consideración por tus pies. {{CTA:activity:getyourguide:prague free walking tour old town:Un free walking tour}} es la mejor forma de empezar — los guías locales revelan historias que no aparecen en ninguna guía, incluyendo la de por qué el WiFi del hotel solo funciona en el lobby.`,
    en: `Prague has the gift of seeming invented. Its Gothic spires, stone bridges and red-tiled rooftops form a postcard so perfect it's hard to believe it's real. Yet it exists, intact, as if time decided to skip the 20th century — though time couldn't prevent the 21st from discovering it en masse, carry-on luggage in tow.

**Prague Castle** dominates the city from Hradčany hill and is the essential starting point. The world's largest castle complex houses **St Vitus Cathedral**, whose stained glass filtering the morning light is one of Europe's most intense visual experiences. {{CTA:tickets:tiqets:prague castle st vitus cathedral:Book your Castle ticket}} — the combination includes the Royal Palace, St George's Basilica and the legendary **Golden Lane**, where Kafka briefly lived and where there are now souvenir shops. Kafka would have appreciated this.

**Charles Bridge** is Prague's symbol and one of the world's most photographed bridges. The key is timing: at dawn, before 7am, you'll have it nearly to yourself. The 30 Baroque statues of saints guarding the Vltava River are an open-air art history catalogue — and by 11am, the backdrop for approximately four million photographs.

The **Jewish Quarter of Josefov** is perhaps Prague's most important visit for understanding European history. {{CTA:tickets:tiqets:jewish museum prague josefov synagogues:Enter the Jewish Museum}} — the combination ticket gives access to six synagogues and the medieval cemetery where twelve generations of Jewish people are buried in just 12,000 square metres. It is one of those places that shifts your perspective for the rest of the trip.

To eat and drink away from tourist circuits — and stag parties — the **Vinohrady** district is the answer. Specialty coffee shops, restaurants with modern Czech cuisine and the city's best craft beer selection. A Pilsner Urquell in a traditional pivnice (beer hall) costs under €2, which in 2026 remains one of Europe's finest statistical facts.

**Getting around**: Prague's metro and trams are efficient and cheap. The historic centre is entirely walkable — with comfortable shoes, because the cobblestones are beautiful but have no sympathy for your feet. {{CTA:activity:getyourguide:prague free walking tour old town:A free walking tour}} is the best way to start — local guides reveal stories that appear in no guidebook, including why the hotel WiFi only works in the lobby.`,
  },
},

// ─── BALI ─────────────────────────────────────────────────────────────────────
{
  id: 12,
  slug: "bali-guia-2026",
  enSlug: "bali-guide-2026",
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
      description: { es: "El Año Nuevo balinés: 24 horas de silencio total en toda la isla. Vuelos cancelados, calles vacías, internet cortado. Una experiencia única que solo existe en Bali y que te hará redescubrir lo que es el silencio — y lo que es el aburrimiento, ya que estamos.", en: "The Balinese New Year: 24 hours of total silence across the entire island. Flights cancelled, streets empty, internet cut. A unique experience that exists only in Bali and will remind you what silence feels like — as well as what genuine boredom feels like, while we're at it." },
      affiliateLinks: [],
    },
    {
      name: "Bali Arts Festival",
      type: "art",
      date: "Junio–Julio 2026",
      description: { es: "Un mes de danza, música gamelan, teatro y artesanía tradicional en el centro artístico Taman Werdhi Budaya de Denpasar. El único festival del mundo donde 'auténtico' no necesita entrecomillarse.", en: "A month of dance, gamelan music, traditional theatre and crafts at the Taman Werdhi Budaya arts centre in Denpasar. The one festival where 'authentic' needs no scare quotes." },
      affiliateLinks: [],
    },
    {
      name: "Bali Spirit Festival",
      type: "cultural",
      date: "Abril 2026",
      description: { es: "El mayor festival de yoga, danza y música del sudeste asiático reúne a miles de personas en Ubud durante cinco días. Si buscabas lo auténtico y encuentras esto, es que Bali también tiene sentido del humor.", en: "Southeast Asia's largest yoga, dance and music festival brings thousands to Ubud for five days of workshops and talks. If you came to Bali searching for the authentic and found this instead, Bali has a sense of humour." },
      affiliateLinks: [],
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
    es: `Bali no es un lugar. Es al menos tres destinos superpuestos en una isla del tamaño de Cataluña: el Bali espiritual de templos y arrozales en terrazas, el Bali sofisticado de Seminyak y Canggu, y el Bali salvaje de volcanes y selva. Pregúntate cuál quieres antes de reservar, o acabarás en un retiro de yoga cuando lo que querías era playa — o viceversa, que también pasa.

**Ubud** es el corazón cultural y el mejor punto de partida. A 25 kilómetros de Kuta, el ambiente aquí es radicalmente diferente: galerías de arte, talleres de danza tradicional, mercados artesanales y el bosque sagrado de monos, donde los monos han elevado el hurto de objetos personales a la categoría de arte. {{CTA:activity:getyourguide:ubud culture day tour temples rice terraces:Un día de tours por Ubud}} te llevará a los templos más importantes, las terrazas de arroz de Tegallalang y el volcán Kintamani en una sola jornada.

Las **terrazas de arroz de Tegallalang** son la imagen de Bali que todo el mundo reconoce. El sistema de irrigación subak, inscrito por la UNESCO, creó estos paisajes en cascada hace siglos. La mejor hora para fotografiarlas: primera hora de la mañana, antes de que lleguen los grupos organizados con sus camisetas de colores coordinados y sus instagramers de oficio.

El **Templo de Tanah Lot** emerge sobre una roca volcánica en el océano como una aparición. Al atardecer, con el sol hundiéndose en el horizonte del Índico detrás del templo, se convierte en uno de los momentos más memorables de cualquier viaje por Asia — compartido, eso sí, con ochocientas personas que tuvieron exactamente la misma idea.

En el extremo sur de la isla, el **Templo de Uluwatu** está emplazado en el borde de un acantilado de 70 metros sobre el océano. La experiencia se completa con el **Kecak Fire Dance** al atardecer: decenas de bailarines narrando el Ramayana con un coro de voces sin instrumentos musicales — y con monos merodeando que consideran tu bolso parte del atrezzo. {{CTA:activity:viator:uluwatu temple kecak fire dance bali sunset:Reserva tu tour a Uluwatu con Kecak Dance}} para llegar a tiempo y conseguir los mejores asientos.

Para los que buscan aventura, el **Monte Batur** ofrece uno de los trekkings de volcán más accesibles de Asia. {{CTA:activity:getyourguide:mount batur sunrise trek bali:El trek al amanecer}} sale a las 2h de la madrugada — sí, de madrugada — y llega a los 1717 metros de altitud justo cuando el sol aparece sobre las nubes y el lago del cráter se tiñe de naranja. La bajada incluye baño en aguas termales naturales, que es la única razón por la que nadie se arrepiente de haberse levantado a las 2h.

**Para alojarte**: Ubud para cultura y naturaleza, Seminyak y Canggu para vida nocturna y gastronomía, las playas de Uluwatu para surf y atardeceres. {{CTA:hotel:booking:bali ubud boutique hotel:Compara hoteles en Bali}} — la diferencia de precio entre un hotel de 3 estrellas y uno de 5 es sorprendentemente pequeña fuera de temporada alta, lo cual es el único argumento que necesitas para justificar el upgrade.`,
    en: `Bali is not a single place. It's at least three destinations overlaid on an island the size of Catalonia: the spiritual Bali of temples and rice terraces, the sophisticated Bali of Seminyak and Canggu, and the wild Bali of volcanoes and jungle. Decide which one you want before booking, or you'll end up at a yoga retreat when you wanted a beach — or vice versa, which also happens with surprising frequency.

**Ubud** is the cultural heart and best starting point. 25 kilometres from Kuta, the atmosphere here is radically different: art galleries, traditional dance workshops, artisan markets and the sacred monkey forest, where the monkeys have elevated the theft of personal belongings to an art form. {{CTA:activity:getyourguide:ubud culture day tour temples rice terraces:A day tour around Ubud}} will take you to the most important temples, the Tegallalang rice terraces and Mount Kintamani in a single day.

The **Tegallalang rice terraces** are the image of Bali that everyone recognises. The UNESCO-inscribed subak irrigation system created these cascading landscapes centuries ago. Best time to photograph them: early morning before the organised tour groups arrive with their coordinated outfits and professional-grade cameras.

**Tanah Lot Temple** rises from a volcanic rock in the ocean like an apparition. At sunset, with the sun sinking into the Indian Ocean horizon behind the temple, it becomes one of the most memorable moments of any trip through Asia — shared, admittedly, with eight hundred people who had exactly the same thought.

At the island's southern tip, **Uluwatu Temple** sits on the edge of a 70-metre cliff above the ocean. The experience is completed by the **Kecak Fire Dance** at sunset: dozens of dancers narrating the Ramayana with a chorus of voices and no musical instruments — with monkeys prowling nearby who consider your bag part of the set. {{CTA:activity:viator:uluwatu temple kecak fire dance bali sunset:Book your Uluwatu & Kecak Dance tour}} to arrive in time and get the best seats.

For those seeking adventure, **Mount Batur** offers one of Asia's most accessible volcano treks. {{CTA:activity:getyourguide:mount batur sunrise trek bali:The sunrise trek}} departs at 2am — yes, in the actual middle of the night — and reaches 1,717 metres of altitude just as the sun appears above the clouds and the crater lake turns orange. The descent includes a dip in natural hot springs, which is the only reason nobody regrets the 2am alarm.

**Where to stay**: Ubud for culture and nature, Seminyak and Canggu for nightlife and gastronomy, Uluwatu beaches for surf and sunsets. {{CTA:hotel:booking:bali ubud boutique hotel:Compare hotels in Bali}} — the price difference between a 3-star and 5-star hotel is surprisingly small outside peak season, which is the only justification you need for upgrading.`,
  },
},
];
