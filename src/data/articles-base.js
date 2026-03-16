// Article metadata (no content/faq) — used by HomeView, EventsView, etc.
// Generated from articles.js. Do not edit manually.
// To update: edit articles.js, then run: node scripts/splitArticles.js

// Helper: resolve bilingual {es,en} fields — copied here so this file is self-contained
export const g = (field, lang) => {
  if (!field) return "";
  if (typeof field === "string") return field;
  return field[lang] ?? field.es ?? field.en ?? "";
};

export const ARTICLES = [
  {
    "id": "esim-spain-comparison-2026",
    "city": "Spain",
    "country": {
      "es": "España",
      "en": "Spain"
    },
    "slug": "mejor-esim-espana-2026",
    "enSlug": "best-esim-spain-2026",
    "title": {
      "es": "Mejor eSIM para España 2026: Comparativa Airalo vs Saily",
      "en": "Best eSIM for Spain 2026: Airalo vs Saily Comparison"
    },
    "subtitle": {
      "es": "Analizamos precio, cobertura y facilidad de uso para que no pagues roaming.",
      "en": "We analyze price, coverage and ease of use so you don't pay for roaming."
    },
    "category": "guides",
    "emoji": "📶",
    "readTime": "6 min",
    "date": "2026-03-02",
    "heroImage": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&q=80",
    "metaDescription": {
      "es": "¿Cuál es la mejor eSIM para viajar a España en 2026? Comparamos Airalo, Saily y Holafly. Opiniones reales y códigos descuento.",
      "en": "What is the best eSIM for traveling to Spain in 2026? We compare Airalo, Saily and Holafly. Real reviews and discount codes."
    },
    "keywords": {
      "es": [
        "mejor esim espana",
        "airalo vs saily",
        "internet espana viaje"
      ],
      "en": [
        "best esim spain",
        "airalo vs saily",
        "internet spain travel"
      ]
    },
    "pointsOfInterest": [],
    "events": [],
    "services": {
      "esim": [
        "airalo",
        "holafly",
        "saily",
        "yesim"
      ]
    }
  },
  {
    "id": "madrid-2026-guide",
    "city": "Madrid",
    "country": {
      "es": "España",
      "en": "Spain"
    },
    "slug": "guia-madrid-2026",
    "enSlug": "madrid-travel-guide-2026",
    "title": {
      "es": "Madrid 2026: La guía definitiva para tu viaje",
      "en": "Madrid 2026: The Ultimate Travel Guide"
    },
    "subtitle": {
      "es": "Descubre dónde dormir, qué ver y cómo ahorrar en la capital española.",
      "en": "Discover where to stay, what to see and how to save in the Spanish capital."
    },
    "category": "guides",
    "emoji": "🇪🇸",
    "readTime": "8 min",
    "date": "2026-03-01",
    "heroImage": "https://images.unsplash.com/photo-1539037116277-4db20889f2d4?q=80&w=2070&auto=format&fit=crop",
    "metaDescription": {
      "es": "Planifica tu viaje a Madrid en 2026. Mejores hoteles, tours gratis, y cómo tener internet con eSIM. ¡Ahorra con nuestros consejos!",
      "en": "Plan your trip to Madrid in 2026. Best hotels, free tours, and how to get internet with eSIM. Save with our tips!"
    },
    "keywords": {
      "es": [
        "madrid 2026",
        "que hacer en madrid",
        "hoteles madrid",
        "esim españa"
      ],
      "en": [
        "madrid 2026",
        "things to do in madrid",
        "hotels madrid",
        "esim spain"
      ]
    },
    "pointsOfInterest": [
      {
        "name": "Museo del Prado",
        "type": "Museo",
        "lat": 40.4138,
        "lng": -3.6921,
        "description": {
          "es": "La pinacoteca más importante del mundo: Velázquez, Goya, El Bosco, Tiziano. Reserva entrada a primera hora y lleva calzado cómodo — la colección es de otro planeta.",
          "en": "The world's most important art museum: Velázquez, Goya, Bosch, Titian. Book first thing and wear comfortable shoes — the collection is from another planet."
        },
        "rating": 4.9,
        "priceRange": "€15",
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour guiado Prado",
              "en": "Guided Prado tour"
            },
            "partner": "getyourguide",
            "query": "madrid prado museum tour",
            "type": "activity"
          },
          {
            "label": {
              "es": "Entrada Reina Sofía",
              "en": "Reina Sofía ticket"
            },
            "partner": "tiqets",
            "query": "reina sofia museum madrid",
            "type": "tickets"
          }
        ]
      },
      {
        "name": "Parque del Retiro",
        "type": "Parque",
        "lat": 40.4153,
        "lng": -3.6844,
        "description": {
          "es": "El pulmón verde de Madrid: el Palacio de Cristal, el estanque con barcas y medio Madrid tomando el sol los domingos. Entrada gratuita.",
          "en": "Madrid's green lung: the Crystal Palace, the rowing lake and half the city sunbathing on Sundays. Free entry."
        },
        "rating": 4.8,
        "priceRange": "Gratis",
        "affiliateLinks": []
      },
      {
        "name": "La Latina & El Rastro",
        "type": "Barrio",
        "lat": 40.4115,
        "lng": -3.7089,
        "description": {
          "es": "El barrio más castizo de Madrid. El Rastro domingos, vermut en la Cava Baja y tapas que siguen la lógica de que lo pequeño no tiene por qué ser malo.",
          "en": "Madrid's most traditional neighbourhood. Sunday Rastro market, vermouth on Cava Baja and tapas that follow the logic that small doesn't have to mean mediocre."
        },
        "rating": 4.7,
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour gastronómico Madrid",
              "en": "Madrid food tour"
            },
            "partner": "viator",
            "query": "madrid food tour tapas la latina",
            "type": "activity"
          }
        ]
      }
    ],
    "events": [],
    "services": {
      "hotels": [
        "booking",
        "airbnb",
        "hostelworld"
      ],
      "flights": [
        "skyscanner",
        "kiwi"
      ],
      "activities": [
        "getyourguide",
        "viator",
        "civitatis"
      ],
      "cars": [
        "discovercars"
      ]
    }
  },
  {
    "id": 1,
    "slug": "barcelona-primavera-2026",
    "enSlug": "barcelona-spring-2026",
    "narrator": "carmen",
    "heroImage": "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1200&q=80",
    "city": "Barcelona",
    "country": {
      "es": "España",
      "en": "Spain"
    },
    "emoji": "🇪🇸",
    "date": "2026-02-24",
    "readTime": "8 min",
    "category": "europe",
    "title": {
      "es": "Barcelona en Primavera: Arte, Tapas y la Cola Eterna de la Sagrada Família",
      "en": "Barcelona in Spring: Art, Tapas, and Two Hours Queuing in the Sun"
    },
    "subtitle": {
      "es": "Lo que las guías no te cuentan para no hundir tus expectativas (ni tu bolsillo)",
      "en": "What travel guides omit to protect your booking deposit and your sanity"
    },
    "excerpt": {
      "es": "Barcelona en primavera suena a terraza, vermut y brisa salada. La realidad también incluye eso, más algún que otro taxista que 'no llega tan al centro' y la versión primaveral de la multitud de turistas que ya conoces del verano.",
      "en": "Barcelona in spring promises sea breezes and rooftop cocktails. It delivers all of that, plus a queue outside the Sagrada Família that's been moving since 2019."
    },
    "metaDescription": {
      "es": "Guía honesta de Barcelona en primavera 2026: cómo sobrevivir la Sagrada Família, dónde comer sin trampa y qué festivales merecen el madrugón.",
      "en": "Honest guide to Barcelona in spring 2026: how to survive the Sagrada Família queue, where to eat without getting fleeced, and which festivals are worth the early alarm."
    },
    "keywords": {
      "es": [
        "Barcelona",
        "primavera",
        "Primavera Sound",
        "Sónar",
        "Gaudí",
        "tapas"
      ],
      "en": [
        "Barcelona",
        "spring",
        "Primavera Sound",
        "Sónar",
        "Gaudí",
        "tapas"
      ]
    },
    "pointsOfInterest": [
      {
        "name": "La Sagrada Família",
        "type": "Monumento",
        "lat": 41.4036,
        "lng": 2.1744,
        "description": {
          "es": "La obra maestra de Gaudí que lleva más de 140 años en construcción — cosa que, ya que estás, le añade un cierto encanto existencial. Reserva entrada a primera hora o asume que la cola es parte de la experiencia.",
          "en": "Gaudí's masterpiece has been under construction for over 140 years, which at this point feels like a feature rather than a bug. Book first thing in the morning or accept that the queue is the warm-up act."
        },
        "rating": 4.9,
        "priceRange": "€26–36",
        "affiliateLinks": [
          {
            "label": {
              "es": "Entradas sin cola",
              "en": "Skip-the-line tickets"
            },
            "partner": "getyourguide",
            "query": "sagrada familia skip line",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Tour guiado + torres",
              "en": "Guided tour + towers"
            },
            "partner": "civitatis",
            "query": "sagrada familia tour torres",
            "type": "activity"
          },
          {
            "label": {
              "es": "Entrada + audioguía",
              "en": "Ticket + audio guide"
            },
            "partner": "tiqets",
            "query": "sagrada familia audio",
            "type": "tickets"
          }
        ]
      },
      {
        "name": "Park Güell",
        "type": "Parque",
        "lat": 41.4145,
        "lng": 2.1527,
        "description": {
          "es": "Los mosaicos de Gaudí rodeados de jardines en flor y cientos de turistas haciéndose selfies en los mismos tres puntos. La zona gratuita tiene mejores vistas y cero obligación de pagar.",
          "en": "Gaudí's mosaics surrounded by flowering gardens and tourists photographing the same three spots in rotation. The free zone has better views and the considerable advantage of costing nothing."
        },
        "rating": 4.7,
        "priceRange": "€10",
        "affiliateLinks": [
          {
            "label": {
              "es": "Entrada + audioguía",
              "en": "Ticket + audio guide"
            },
            "partner": "tiqets",
            "query": "park guell",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Tour Gaudí completo",
              "en": "Full Gaudí tour"
            },
            "partner": "viator",
            "query": "gaudi complete tour barcelona",
            "type": "activity"
          }
        ]
      },
      {
        "name": "El Born",
        "type": "Barrio",
        "lat": 41.3851,
        "lng": 2.1834,
        "description": {
          "es": "El barrio más vibrante para tapas, galerías de arte y tiendas vintage. También el lugar donde descubrirás que 'precio de carta' en Barcelona tiene una definición propia.",
          "en": "The most vibrant neighbourhood for tapas, independent art galleries and vintage shops. Also the place where you'll discover that 'menu prices' in Barcelona are a creative genre."
        },
        "rating": 4.6,
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour gastronómico",
              "en": "Gastronomic tour"
            },
            "partner": "getyourguide",
            "query": "born food tour barcelona tapas",
            "type": "activity"
          },
          {
            "label": {
              "es": "Reservar restaurante",
              "en": "Book a restaurant"
            },
            "partner": "thefork",
            "query": "born barcelona",
            "type": "restaurant"
          }
        ]
      },
      {
        "name": "Bunkers del Carmel",
        "type": "Mirador",
        "lat": 41.4184,
        "lng": 2.1565,
        "description": {
          "es": "Vistas 360° de la ciudad entera. El secreto más secreto que ya no es secreto: todo el mundo sube al atardecer con cava y la misma idea de que van a ser los únicos.",
          "en": "360° views of the entire city. The open secret that everyone is keeping: the whole city climbs up at sunset with wine and the private belief that they're the only ones who know about it."
        },
        "rating": 4.8,
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour atardecer + cava",
              "en": "Sunset tour + cava"
            },
            "partner": "civitatis",
            "query": "bunkers carmel sunset",
            "type": "activity"
          }
        ]
      },
      {
        "name": "La Barceloneta",
        "type": "Playa",
        "lat": 41.3758,
        "lng": 2.1899,
        "description": {
          "es": "La playa urbana más famosa de Europa. En primavera puedes disfrutarla sin la masificación del verano, aunque los chiringuitos ya tienen lista de espera.",
          "en": "Europe's most famous urban beach. In spring you can enjoy it without summer's sardine-tin density, though the beach bars already have a waiting list."
        },
        "rating": 4.4,
        "affiliateLinks": [
          {
            "label": {
              "es": "Kayak + snorkel",
              "en": "Kayak + snorkel"
            },
            "partner": "viator",
            "query": "barceloneta kayak",
            "type": "activity"
          },
          {
            "label": {
              "es": "Chiringuitos playa",
              "en": "Beach restaurants"
            },
            "partner": "thefork",
            "query": "barceloneta restaurant",
            "type": "restaurant"
          }
        ]
      }
    ],
    "events": [
      {
        "name": "Primavera Sound 2026",
        "type": "festival",
        "date": "4–7 Jun 2026",
        "venue": "Parc del Fòrum",
        "urgency": true,
        "description": {
          "es": "Headliners: The Cure y My Bloody Valentine el sábado, Gorillaz y The xx el viernes, Doja Cat y Massive Attack el jueves. Lo que eso significa es que pagar 280€ por el abono ya era absurdo cuando lo compraste el día que salió — y que aun así te arrepientes de no haber cogido el de tres días. Agotado desde el 11 de febrero, por segundo año consecutivo.",
          "en": "Headliners: The Cure and My Bloody Valentine on Saturday, Gorillaz and The xx on Friday, Doja Cat and Massive Attack on Thursday. What this means is that paying €280 for the pass was already unreasonable when you bought it on day one — and yet you still regret not getting the extended ticket. Sold out since February 11th, for the second year running."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Compra tu abono",
              "en": "Buy festival pass"
            },
            "partner": "ticketmaster",
            "query": "primavera sound 2026 the cure gorillaz barcelona",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Reventa verificada",
              "en": "Verified resale"
            },
            "partner": "stubhub",
            "query": "primavera sound 2026 gorillaz the cure",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Experiencia festival completa",
              "en": "Full festival experience"
            },
            "partner": "getyourguide",
            "query": "primavera sound barcelona festival experience",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Festival Sónar 2026",
        "type": "electronic",
        "date": "18–20 Jun 2026",
        "venue": "Fira Gran Via (L'Hospitalet)",
        "urgency": true,
        "description": {
          "es": "Gran cambio para 2026: ya no hay formato día/noche ni dos sedes. Todo concentrado en un único recinto — Fira Gran Via — con seis escenarios y música continua de tarde a madrugada. Cartel: The Prodigy, Charlotte de Witte, Skepta, Amelie Lens, Joy Orbison, SBTRKT, Dom Dolla. Duermes poco, piensas mucho y sales convencido de que entiendes el arte contemporáneo — hasta que intentas explicárselo a alguien al día siguiente.",
          "en": "Big change for 2026: no more day/night split, no more two venues. Everything concentrated at a single site — Fira Gran Via — with six stages and non-stop music from afternoon to the early hours. Lineup: The Prodigy, Charlotte de Witte, Skepta, Amelie Lens, Joy Orbison, SBTRKT, Dom Dolla. You sleep little, think too much, and leave convinced you finally understand contemporary art — until you try to explain it to someone the next day."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Entradas Sónar 2026",
              "en": "Sónar 2026 tickets"
            },
            "partner": "ticketmaster",
            "query": "sonar barcelona 2026 the prodigy charlotte de witte",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Reventa verificada",
              "en": "Verified resale"
            },
            "partner": "stubhub",
            "query": "sonar festival barcelona 2026 prodigy skepta",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Tour electrónico por Barcelona",
              "en": "Electronic Barcelona tour"
            },
            "partner": "getyourguide",
            "query": "barcelona music scene tour sonar",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Feria de Abril de Catalunya",
        "type": "cultural",
        "date": "24 Abr – 3 May 2026",
        "venue": "Fira de Barcelona",
        "urgency": false,
        "description": {
          "es": "Sevillanas, casetas y gastronomía andaluza en plena Barcelona. La prueba definitiva de que esta ciudad absorbe culturas ajenas y las hace propias sin pedir permiso — y con más rebujito del que admitirá ningún catalán.",
          "en": "Sevillanas, casetas and Andalusian gastronomy in the heart of Barcelona. Definitive proof that this city absorbs other cultures and makes them its own without asking permission — and with more rebujito than any Catalan will officially admit to."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Entradas Feria de Abril",
              "en": "Feria de Abril tickets"
            },
            "partner": "ticketmaster",
            "query": "feria abril barcelona 2026",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Tour flamenco + feria",
              "en": "Flamenco + feria tour"
            },
            "partner": "civitatis",
            "query": "flamenco feria abril barcelona",
            "type": "activity"
          }
        ]
      }
    ],
    "services": {
      "flights": [
        "skyscanner",
        "kiwi"
      ],
      "hotels": [
        "booking",
        "hostelworld",
        "vrbo"
      ],
      "cars": [
        "discovercars",
        "rentalcars",
        "autoeurope",
        "localrent"
      ],
      "activities": [
        "getyourguide",
        "viator",
        "tiqets",
        "civitatis",
        "klook"
      ],
      "restaurants": [
        "thefork",
        "opentable"
      ],
      "insurance": [
        "safetywing",
        "worldnomads"
      ],
      "esim": [
        "airalo",
        "holafly",
        "saily",
        "yesim"
      ],
      "transfers": [
        "intui",
        "welcomepickups",
        "gettransfer",
        "indrive"
      ],
      "parking": [
        "parkimeter"
      ]
    }
  },
  {
    "id": 2,
    "slug": "tokio-guia-completa-2026",
    "enSlug": "tokyo-complete-guide-2026",
    "narrator": "marcos",
    "heroImage": "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=80",
    "city": "Tokyo",
    "country": {
      "es": "Japón",
      "en": "Japan"
    },
    "emoji": "🇯🇵",
    "date": "2026-02-20",
    "readTime": "10 min",
    "category": "asia",
    "title": {
      "es": "Tokio: Entre la Tradición Milenaria y el Futuro que ya Llegó (Sin Avisar)",
      "en": "Tokyo: Between Ancient Tradition and a Future That Arrived Without Asking"
    },
    "subtitle": {
      "es": "Templos zen, ramen de medianoche y la ciudad que hace que el resto del mundo parezca en obras",
      "en": "Zen temples, midnight ramen and the city that makes everywhere else feel like it's still under construction"
    },
    "excerpt": {
      "es": "Tokio no se visita, te visita a ti. Una ciudad donde un templo del siglo VII convive con un robot-café y los dos funcionan con una puntualidad que avergüenza al resto del planeta.",
      "en": "Tokyo doesn't get visited — it visits you. A city where a 7th-century temple coexists with a robot café and both run on a schedule that makes the rest of the world look amateur."
    },
    "metaDescription": {
      "es": "Guía de Tokio 2026 sin filtros: templos, barrios, ramen, hanami y teamLab. Con advertencia de jet lag incluida.",
      "en": "Unfiltered Tokyo guide 2026: temples, neighbourhoods, ramen, hanami and teamLab. Jet lag warning included."
    },
    "keywords": {
      "es": [
        "Tokio",
        "Japón",
        "hanami",
        "cerezos",
        "ramen",
        "Akihabara",
        "teamLab"
      ],
      "en": [
        "Tokyo",
        "Japan",
        "hanami",
        "cherry blossoms",
        "ramen",
        "Akihabara",
        "teamLab"
      ]
    },
    "pointsOfInterest": [
      {
        "name": "Senso-ji",
        "type": "Templo",
        "lat": 35.7148,
        "lng": 139.7967,
        "description": {
          "es": "El templo más antiguo de Tokio y el más fotografiado. La calle Nakamise que lleva hasta él es un túnel de dulces, artesanías y turistas con peripecias. Ve al amanecer si quieres algo de paz.",
          "en": "Tokyo's oldest temple and its most photographed. The Nakamise street leading to it is a tunnel of sweets, crafts and fellow tourists comparing camera settings. Go at dawn if peace is what you're after."
        },
        "rating": 4.8,
        "priceRange": "Gratis",
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour guiado Asakusa",
              "en": "Guided Asakusa tour"
            },
            "partner": "getyourguide",
            "query": "sensoji asakusa tour",
            "type": "activity"
          },
          {
            "label": {
              "es": "Tour cultural privado",
              "en": "Private cultural tour"
            },
            "partner": "viator",
            "query": "tokyo temple cultural tour",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Shibuya Crossing",
        "type": "Icónico",
        "lat": 35.6595,
        "lng": 139.7004,
        "description": {
          "es": "El cruce peatonal más famoso del mundo: 3.000 personas cruzando en todas direcciones simultáneamente, con una eficiencia que nunca dejará de impresionar. Sube al Starbucks del Tsutaya para verlo desde arriba.",
          "en": "The world's most famous pedestrian crossing: 3,000 people crossing in all directions simultaneously with an efficiency that will never stop being impressive. Head to the Tsutaya Starbucks to watch from above like a calm god."
        },
        "rating": 4.5,
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour nocturno Shibuya",
              "en": "Shibuya night tour"
            },
            "partner": "civitatis",
            "query": "shibuya night tour",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Shinjuku Gyoen",
        "type": "Jardín",
        "lat": 35.6852,
        "lng": 139.71,
        "description": {
          "es": "Más de 1.000 cerezos crean un túnel rosado que parece diseñado por alguien que quería demostrar que la naturaleza puede superar a cualquier filtro de Instagram.",
          "en": "Over 1,000 cherry trees create a pink tunnel that looks designed by someone who wanted to prove nature can out-filter any Instagram preset."
        },
        "rating": 4.9,
        "priceRange": "¥500",
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour jardines + té",
              "en": "Gardens + tea tour"
            },
            "partner": "getyourguide",
            "query": "shinjuku gyoen cherry blossom",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Akihabara",
        "type": "Barrio",
        "lat": 35.7023,
        "lng": 139.7745,
        "description": {
          "es": "La meca del anime, manga y tecnología. Un lugar donde puedes comprar una figura coleccionable de 500€ y sentirte absolutamente justificado.",
          "en": "The mecca of anime, manga and technology. A place where spending €500 on a collectible figure feels completely reasonable and you're not sure when that happened."
        },
        "rating": 4.6,
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour otaku guiado",
              "en": "Guided otaku tour"
            },
            "partner": "viator",
            "query": "akihabara otaku tour",
            "type": "activity"
          },
          {
            "label": {
              "es": "Restaurantes temáticos",
              "en": "Themed restaurants"
            },
            "partner": "opentable",
            "query": "tokyo akihabara",
            "type": "restaurant"
          }
        ]
      },
      {
        "name": "Tsukiji Outer Market",
        "type": "Mercado",
        "lat": 35.6654,
        "lng": 139.7707,
        "description": {
          "es": "El paraíso del sushi fresco a las 7 de la mañana, momento en que descubrirás que el sushi de aeropuerto de vuelta no va a saber igual nunca más.",
          "en": "Paradise for fresh sushi at 7am, the precise moment you realise airport sushi on the way home will never taste the same again."
        },
        "rating": 4.7,
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour gastronómico",
              "en": "Food tour"
            },
            "partner": "getyourguide",
            "query": "tsukiji food tour sushi",
            "type": "activity"
          }
        ]
      }
    ],
    "events": [
      {
        "name": "Hanami (Cerezos en flor)",
        "type": "natural",
        "date": "Mar–Abr 2026",
        "venue": "Toda la ciudad",
        "urgency": false,
        "description": {
          "es": "La tradición más bella de Japón: pícnics bajo los cerezos en flor con sake, combini y la filosofía zen de contemplar algo que dura dos semanas. Reservas el vuelo con un año de antelación para ver flores que duran siete días. Vale cada yen.",
          "en": "Japan's most beautiful tradition: picnics under the cherry blossoms with sake, convenience store snacks and the zen philosophy of contemplating something that lasts two weeks. You book the flight a year ahead to see flowers that last seven days. Worth every yen."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour hanami exclusivo",
              "en": "Exclusive hanami tour"
            },
            "partner": "viator",
            "query": "tokyo hanami cherry blossom picnic tour",
            "type": "activity"
          },
          {
            "label": {
              "es": "Experiencia hanami guiada",
              "en": "Guided hanami experience"
            },
            "partner": "getyourguide",
            "query": "tokyo cherry blossom hanami guided",
            "type": "activity"
          }
        ]
      },
      {
        "name": "teamLab Borderless",
        "type": "digital_art",
        "date": "Todo el año",
        "venue": "Azabudai Hills",
        "urgency": false,
        "description": {
          "es": "La instalación de arte digital más impresionante del mundo. Entras con tres ideas sobre el arte contemporáneo y sales sin ninguna — pero con veinte fotos que no consiguen capturar lo que acabas de ver. La definición exacta del éxito artístico.",
          "en": "The world's most impressive immersive digital art installation. You enter with three ideas about contemporary art and leave with none — but with twenty photos that fail to capture what you just witnessed. The exact definition of artistic success."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Entrada prioritaria teamLab",
              "en": "teamLab priority ticket"
            },
            "partner": "tiqets",
            "query": "teamlab borderless tokyo azabudai",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Entrada + transporte",
              "en": "Ticket + transport"
            },
            "partner": "getyourguide",
            "query": "teamlab borderless tokyo ticket",
            "type": "tickets"
          }
        ]
      },
      {
        "name": "Tokyo Game Show",
        "type": "technology",
        "date": "Sep 2026",
        "venue": "Makuhari Messe",
        "urgency": true,
        "description": {
          "es": "La feria de videojuegos más grande de Asia: donde anuncian los juegos del año siguiente y descubres que tu consola actual ya es historia. Colas de cuatro horas para probar demos de quince minutos. Sin arrepentimientos.",
          "en": "Asia's largest video game expo: where next year's games get announced and you quietly accept your current console is already obsolete. Four-hour queues for fifteen-minute demos. Zero regrets."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Entradas Tokyo Game Show",
              "en": "Tokyo Game Show tickets"
            },
            "partner": "ticketmaster",
            "query": "tokyo game show 2026",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Tour gaming Akihabara",
              "en": "Akihabara gaming tour"
            },
            "partner": "getyourguide",
            "query": "tokyo game show akihabara gaming tour",
            "type": "activity"
          }
        ]
      }
    ],
    "services": {
      "flights": [
        "skyscanner",
        "kiwi"
      ],
      "hotels": [
        "booking",
        "hostelworld"
      ],
      "cars": [
        "discovercars",
        "rentalcars",
        "localrent"
      ],
      "activities": [
        "getyourguide",
        "viator",
        "tiqets",
        "civitatis",
        "klook"
      ],
      "restaurants": [
        "opentable"
      ],
      "insurance": [
        "safetywing",
        "worldnomads"
      ],
      "esim": [
        "airalo",
        "holafly",
        "saily",
        "yesim"
      ],
      "transfers": [
        "intui",
        "welcomepickups",
        "gettransfer",
        "indrive"
      ],
      "transport": [
        "omio"
      ]
    }
  },
  {
    "id": 3,
    "slug": "cdmx-guia-completa-2026",
    "enSlug": "mexico-city-guide-2026",
    "narrator": "elena",
    "heroImage": "https://images.unsplash.com/photo-1585464231875-d9ef1f5ad396?w=1200&q=80",
    "city": "Ciudad de México",
    "country": {
      "es": "México",
      "en": "Mexico"
    },
    "emoji": "🇲🇽",
    "date": "2026-02-15",
    "readTime": "9 min",
    "category": "america",
    "title": {
      "es": "CDMX: Sabor, Color y Caos Hermoso en la Capital que No Duerme (Ni Lo Pretende)",
      "en": "Mexico City: Flavour, Colour and Beautiful Chaos in the Capital That Never Sleeps (and Doesn't Care to Try)"
    },
    "subtitle": {
      "es": "Tacos al pastor a las 3AM, pirámides al amanecer y la mejor escena de arte de Latinoamérica — todo en la misma ciudad que te va a robar el corazón y probablemente el estómago",
      "en": "Tacos al pastor at 3AM, pyramids at dawn and the best art scene in Latin America — all in the city that will steal your heart and possibly your appetite"
    },
    "excerpt": {
      "es": "Ciudad de México es excesiva en el mejor sentido posible. Una megalópolis donde Frida convive con galerías de vanguardia y los tacos del mercado son mejores que cualquier restaurante con estrella.",
      "en": "Mexico City is excessive in the best possible sense. A megalopolis where Frida coexists with avant-garde galleries and the market tacos are better than anything with a Michelin star."
    },
    "metaDescription": {
      "es": "Guía de Ciudad de México 2026: Teotihuacán, Frida Kahlo, Coyoacán, Xochimilco, Día de Muertos y los tacos que cambiarán tu vida.",
      "en": "Mexico City guide 2026: Teotihuacán, Frida Kahlo, Coyoacán, Xochimilco, Day of the Dead and the tacos that will change your life."
    },
    "keywords": {
      "es": [
        "CDMX",
        "México",
        "Teotihuacán",
        "Frida Kahlo",
        "Coyoacán",
        "Día de Muertos"
      ],
      "en": [
        "Mexico City",
        "Mexico",
        "Teotihuacán",
        "Frida Kahlo",
        "Coyoacán",
        "Day of the Dead"
      ]
    },
    "pointsOfInterest": [
      {
        "name": "Museo Frida Kahlo",
        "type": "Museo",
        "lat": 19.355,
        "lng": -99.1626,
        "description": {
          "es": "La Casa Azul donde nació y murió Frida. Uno de los museos más personales del mundo: sales convencido de que Frida Kahlo te habría caído bien y tú a ella probablemente no.",
          "en": "The Blue House where Frida was born and died. One of the world's most personal museums: you leave convinced Frida Kahlo would have liked you, and quietly aware the feeling might not have been mutual."
        },
        "rating": 4.8,
        "priceRange": "MXN 250",
        "affiliateLinks": [
          {
            "label": {
              "es": "Entrada sin cola",
              "en": "Skip-the-line ticket"
            },
            "partner": "tiqets",
            "query": "frida kahlo museum",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Tour Frida completo",
              "en": "Full Frida tour"
            },
            "partner": "civitatis",
            "query": "frida kahlo coyoacan tour",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Teotihuacán",
        "type": "Arqueología",
        "lat": 19.6925,
        "lng": -98.8438,
        "description": {
          "es": "Pirámides del Sol y la Luna que llevan ahí 2.000 años esperando que llegues con tu cámara. Madrugar vale la pena: el amanecer sobre la Pirámide del Sol es de esas experiencias que no caben en un story.",
          "en": "The Pyramids of the Sun and Moon have been there for 2,000 years waiting for you to show up with your camera. The early start is worth it: sunrise over the Pyramid of the Sun is an experience that doesn't fit in a story."
        },
        "rating": 4.9,
        "priceRange": "MXN 85",
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour amanecer + globo",
              "en": "Sunrise tour + balloon"
            },
            "partner": "getyourguide",
            "query": "teotihuacan sunrise balloon",
            "type": "activity"
          },
          {
            "label": {
              "es": "Excursión día completo",
              "en": "Full-day excursion"
            },
            "partner": "viator",
            "query": "teotihuacan full day mexico",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Coyoacán",
        "type": "Barrio",
        "lat": 19.3467,
        "lng": -99.1617,
        "description": {
          "es": "Barrio bohemio con cafés, librerías, heladerías artesanales y el mercado más colorido de la ciudad. El tipo de barrio donde vas 'a ver' y acabas quedándote cuatro horas.",
          "en": "Bohemian neighbourhood with cafés, bookshops, artisan ice cream shops and the city's most colourful market. The kind of neighbourhood you visit 'just to look' and leave four hours later."
        },
        "rating": 4.7,
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour gastronómico",
              "en": "Food tour"
            },
            "partner": "getyourguide",
            "query": "coyoacan food tour",
            "type": "activity"
          },
          {
            "label": {
              "es": "Restaurantes",
              "en": "Restaurants"
            },
            "partner": "opentable",
            "query": "coyoacan mexico city",
            "type": "restaurant"
          }
        ]
      },
      {
        "name": "Xochimilco",
        "type": "UNESCO",
        "lat": 19.2577,
        "lng": -99.104,
        "description": {
          "es": "Canales prehispánicos con trajineras coloridas: una fiesta flotante que es turística, caótica y absolutamente imprescindible. Lleva efectivo, acepta el mariachi y disfruta.",
          "en": "Pre-Hispanic canals with colourful trajineras: a floating party that is touristy, chaotic and absolutely unmissable. Bring cash, accept the mariachi, and enjoy."
        },
        "rating": 4.5,
        "priceRange": "MXN 50–500",
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour en trajinera",
              "en": "Trajinera tour"
            },
            "partner": "civitatis",
            "query": "xochimilco trajinera tour",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Roma-Condesa",
        "type": "Barrio",
        "lat": 19.4119,
        "lng": -99.1707,
        "description": {
          "es": "Art déco, los mejores restaurantes de Latinoamérica y parques arbolados donde la gente saca a pasear perros de diseño. El barrio que te hará reconsiderar seriamente mudarte a México.",
          "en": "Art deco architecture, Latin America's best restaurants and leafy parks where people walk designer dogs. The neighbourhood that will make you seriously reconsider moving to Mexico."
        },
        "rating": 4.7,
        "affiliateLinks": [
          {
            "label": {
              "es": "Food tour Roma",
              "en": "Roma food tour"
            },
            "partner": "viator",
            "query": "roma condesa food tour cdmx",
            "type": "activity"
          },
          {
            "label": {
              "es": "Reservar restaurante",
              "en": "Book a restaurant"
            },
            "partner": "opentable",
            "query": "roma condesa mexico city",
            "type": "restaurant"
          }
        ]
      }
    ],
    "events": [
      {
        "name": "Día de Muertos",
        "type": "cultural",
        "date": "1–2 Nov 2026",
        "venue": "Zócalo",
        "urgency": true,
        "description": {
          "es": "Altares, ofrendas, calaveras de azúcar y el desfile más fotogénico del planeta. La celebración donde la muerte se convierte en fiesta, el duelo en color y tú en fotógrafo compulsivo que luego no sabe cuál publicar porque todas son perfectas.",
          "en": "Altars, offerings, sugar skulls and the most photogenic parade on the planet. The celebration where death becomes a party, grief becomes colour, and you become a compulsive photographer who can't decide which photo to post because they're all perfect."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour nocturno Día de Muertos",
              "en": "Day of the Dead night tour"
            },
            "partner": "getyourguide",
            "query": "dia de muertos mexico city night tour 2026",
            "type": "activity"
          },
          {
            "label": {
              "es": "Experiencia altares y ofrendas",
              "en": "Altars and offerings experience"
            },
            "partner": "viator",
            "query": "day of dead cdmx ofrenda experience",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Vive Latino 2026",
        "type": "festival",
        "date": "14–15 Mar 2026",
        "venue": "Estadio GNP Seguros (Foro Sol)",
        "urgency": true,
        "description": {
          "es": "Cartel histórico: Lenny Kravitz, The Smashing Pumpkins, The Mars Volta, Cypress Hill, John Fogerty, Tom Morello y Steve Aoki. Más Los Fabulosos Cadillacs, Enanitos Verdes, Maldita Vecindad e Illya Kuryaki. Tres días de música, calor sofocante y la certeza absoluta de que en CDMX saben perfectamente cómo hacer un festival — aunque el sol de marzo te recuerde que el protector solar no es opcional.",
          "en": "Historic lineup: Lenny Kravitz, The Smashing Pumpkins, The Mars Volta, Cypress Hill, John Fogerty, Tom Morello and Steve Aoki. Plus Los Fabulosos Cadillacs, Enanitos Verdes, Maldita Vecindad and Illya Kuryaki. Two days of music, suffocating heat and the absolute certainty that Mexico City knows exactly how to throw a festival — though the March sun will remind you that sunscreen is non-negotiable."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Boletos Vive Latino",
              "en": "Vive Latino tickets"
            },
            "partner": "ticketmaster",
            "query": "vive latino 2026 lenny kravitz smashing pumpkins mexico",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Reventa verificada",
              "en": "Verified resale"
            },
            "partner": "stubhub",
            "query": "vive latino 2026 smashing pumpkins mars volta",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Tour musical CDMX",
              "en": "CDMX music scene tour"
            },
            "partner": "getyourguide",
            "query": "mexico city music tour live",
            "type": "activity"
          }
        ]
      },
      {
        "name": "MUTEK México",
        "type": "digital_art",
        "date": "Oct 2026",
        "venue": "Varios recintos",
        "urgency": false,
        "description": {
          "es": "Creatividad digital y música electrónica experimental en una ciudad que lleva décadas demostrando que el arte no necesita pedir permiso. Saldrás convencido de que la vanguardia es una actitud, no un género — o simplemente muy cansado. Las dos cosas son válidas.",
          "en": "Digital creativity and experimental electronic music in a city that has spent decades proving that art needs no permission slip. You'll leave convinced that the avant-garde is an attitude, not a genre — or just very tired. Both outcomes are valid."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Entradas MUTEK México",
              "en": "MUTEK México tickets"
            },
            "partner": "ticketmaster",
            "query": "mutek mexico 2026",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Experiencias arte digital CDMX",
              "en": "CDMX digital art experiences"
            },
            "partner": "getyourguide",
            "query": "mexico city digital art culture tour",
            "type": "activity"
          }
        ]
      }
    ],
    "services": {
      "flights": [
        "skyscanner",
        "kiwi"
      ],
      "hotels": [
        "booking",
        "hostelworld",
        "vrbo"
      ],
      "cars": [
        "discovercars",
        "rentalcars",
        "localrent"
      ],
      "activities": [
        "getyourguide",
        "viator",
        "tiqets",
        "civitatis",
        "klook"
      ],
      "restaurants": [
        "opentable"
      ],
      "insurance": [
        "safetywing",
        "worldnomads"
      ],
      "esim": [
        "airalo",
        "holafly",
        "saily",
        "yesim"
      ],
      "transfers": [
        "intui",
        "welcomepickups",
        "gettransfer",
        "indrive"
      ],
      "parking": [
        "parkimeter"
      ]
    }
  },
  {
    "id": 4,
    "slug": "lisboa-guia-2026",
    "enSlug": "lisbon-guide-2026",
    "narrator": "sofia",
    "heroImage": "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200&q=80",
    "city": "Lisboa",
    "country": {
      "es": "Portugal",
      "en": "Portugal"
    },
    "emoji": "🇵🇹",
    "date": "2026-02-18",
    "readTime": "8 min",
    "category": "europe",
    "title": {
      "es": "Lisboa: El Último Gran Secreto del Atlántico (Que Ya No Es Tan Secreto)",
      "en": "Lisbon: The Atlantic's Last Great Secret (That Everyone Has Already Discovered)"
    },
    "subtitle": {
      "es": "Fado, pastéis de nata, miradores y una ciudad que sigue siendo auténtica a pesar de que el mundo entero intente quedarse a vivir en ella",
      "en": "Fado, pastéis de nata, viewpoints and a city that remains authentic despite the entire world trying to move in"
    },
    "excerpt": {
      "es": "Lisboa huele a sal, azulejos y buganvillas. La capital portuguesa tiene esa rareza de una ciudad que sigue siendo auténtica aunque medio mundo haya intentado apropiarse de ella en los últimos diez años.",
      "en": "Lisbon smells of salt, azulejos and bougainvillea. The Portuguese capital has the rare quality of a city that remains authentic despite half the world trying to claim it as their own in the last decade."
    },
    "metaDescription": {
      "es": "Guía honesta de Lisboa 2026: Alfama, Belém, Bairro Alto, LX Factory, fado y pastéis de nata — y dónde encontrarlos sin hacer cola.",
      "en": "Honest Lisbon guide 2026: Alfama, Belém, Bairro Alto, LX Factory, fado and pastéis de nata — and where to find them without queuing."
    },
    "keywords": {
      "es": [
        "Lisboa",
        "Portugal",
        "Alfama",
        "Belém",
        "fado",
        "pastel de nata",
        "NOS Alive"
      ],
      "en": [
        "Lisbon",
        "Portugal",
        "Alfama",
        "Belém",
        "fado",
        "pastel de nata",
        "NOS Alive"
      ]
    },
    "pointsOfInterest": [
      {
        "name": "Alfama",
        "type": "Barrio histórico",
        "lat": 38.714,
        "lng": -9.1303,
        "description": {
          "es": "El barrio más antiguo de Lisboa, con callejuelas empedradas que siempre terminan en un mirador con vistas al Tajo — y casi siempre también en un gato que te mira como si fueras el turista número 847 del día.",
          "en": "Lisbon's oldest neighbourhood, with cobblestone alleys that always end at a viewpoint overlooking the Tagus — and almost always also at a cat staring at you like you're tourist number 847 today."
        },
        "rating": 4.8,
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour con fado en vivo",
              "en": "Tour with live fado"
            },
            "partner": "getyourguide",
            "query": "alfama fado tour lisbon",
            "type": "activity"
          },
          {
            "label": {
              "es": "Tuk-tuk por Alfama",
              "en": "Tuk-tuk through Alfama"
            },
            "partner": "viator",
            "query": "alfama tuk tuk lisbon",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Mosteiro dos Jerónimos",
        "type": "Monumento",
        "lat": 38.6978,
        "lng": -9.2066,
        "description": {
          "es": "Probablemente el edificio más impresionante de toda la península ibérica. Joya del gótico manuelino que hace que te preguntes qué estaba pasando por la cabeza del arquitecto para que saliera algo así.",
          "en": "Probably the most impressive building on the entire Iberian Peninsula. A jewel of Manueline Gothic that makes you wonder what the architect was thinking to produce something this extraordinary."
        },
        "rating": 4.9,
        "priceRange": "€12",
        "affiliateLinks": [
          {
            "label": {
              "es": "Entrada prioritaria",
              "en": "Priority ticket"
            },
            "partner": "tiqets",
            "query": "jeronimos monastery lisbon",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Tour Belém completo",
              "en": "Full Belém tour"
            },
            "partner": "civitatis",
            "query": "belem tour lisbon",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Torre de Belém",
        "type": "Monumento",
        "lat": 38.6916,
        "lng": -9.216,
        "description": {
          "es": "Icono de Lisboa que emerge del Tajo como un guardián de piedra. Patrimonio de la Humanidad y, en temporada alta, también Patrimonio de la Cola de Turistas.",
          "en": "Lisbon's icon emerging from the Tagus like a stone guardian. UNESCO World Heritage and, in high season, also a Heritage Site of Tourist Queuing."
        },
        "rating": 4.6,
        "priceRange": "€6",
        "affiliateLinks": [
          {
            "label": {
              "es": "Entrada rápida",
              "en": "Fast-track entry"
            },
            "partner": "tiqets",
            "query": "torre belem lisbon",
            "type": "tickets"
          }
        ]
      },
      {
        "name": "LX Factory",
        "type": "Mercado",
        "lat": 38.7037,
        "lng": -9.1791,
        "description": {
          "es": "Antigua fábrica textil reconvertida en espacio hipster con mercado vintage, restaurantes y conciertos. El tipo de lugar que todavía vale la pena antes de que se convierta completamente en lo que intenta no ser.",
          "en": "Former textile factory converted into a hipster space with a vintage market, restaurants and concerts. The kind of place still worth visiting before it fully becomes what it's trying not to be."
        },
        "rating": 4.5,
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour gastronomía Lisboa",
              "en": "Lisbon food tour"
            },
            "partner": "getyourguide",
            "query": "lisbon food tour lx factory",
            "type": "activity"
          },
          {
            "label": {
              "es": "Restaurantes Lisboa",
              "en": "Lisbon restaurants"
            },
            "partner": "thefork",
            "query": "lx factory lisbon",
            "type": "restaurant"
          }
        ]
      },
      {
        "name": "Time Out Market",
        "type": "Gastronómico",
        "lat": 38.7067,
        "lng": -9.1451,
        "description": {
          "es": "El mejor mercado gastronómico de Europa con los chefs más famosos de Portugal bajo un mismo techo. Donde el turismo gastronómico alcanza su forma más concentrada y más deliciosa.",
          "en": "Europe's best food market with Portugal's most famous chefs all under one roof. Where gastronomic tourism reaches its most concentrated and most delicious form."
        },
        "rating": 4.7,
        "affiliateLinks": [
          {
            "label": {
              "es": "Food tour mercados",
              "en": "Market food tour"
            },
            "partner": "viator",
            "query": "lisbon market food tour",
            "type": "activity"
          }
        ]
      }
    ],
    "events": [
      {
        "name": "NOS Alive",
        "type": "festival",
        "date": "9–11 Jul 2026",
        "venue": "Passeio Marítimo de Algés",
        "urgency": true,
        "description": {
          "es": "Florence + The Machine y Nick Cave & The Bad Seeds encabezan el cartel, con Twenty One Pilots, Lorde, Foo Fighters, Pixies y Wolf Alice como refuerzos de lujo. La combinación perfecta de música en directo, calor portugués y brisa del río — hasta que te das cuenta de que llevas siete horas de pie y los pies ya no te pertenecen.",
          "en": "Florence + The Machine and Nick Cave & The Bad Seeds headline, with Twenty One Pilots, Lorde, Foo Fighters, Pixies and Wolf Alice in strong support. The perfect combination of live music, Portuguese heat and river breeze — until you realise you've been standing for seven hours and your feet no longer belong to you."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Entradas NOS Alive 2026",
              "en": "NOS Alive 2026 tickets"
            },
            "partner": "ticketmaster",
            "query": "nos alive 2026 florence machine nick cave lisbon",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Reventa verificada",
              "en": "Verified resale"
            },
            "partner": "stubhub",
            "query": "nos alive festival 2026 florence lorde foo fighters",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Experiencia festival Lisboa",
              "en": "Lisbon festival experience"
            },
            "partner": "getyourguide",
            "query": "lisbon music festival experience nos alive",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Festas de Lisboa",
        "type": "cultural",
        "date": "Jun 2026",
        "venue": "Toda la ciudad",
        "urgency": false,
        "description": {
          "es": "Las fiestas de Santo António llenan cada rincón de Lisboa con sardinas a la brasa, marchas populares y bailes en la calle. En junio, Lisboa huele a carbón y a verano, y el olor es absolutamente perfecto — aunque llegues oliendo igual el resto de la semana.",
          "en": "The Santo António festivals fill every corner of Lisbon with grilled sardines, popular marches and street dancing. In June, Lisbon smells of charcoal and summer, which is absolutely perfect — though you'll carry the same smell for the rest of the week."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour Festas de Lisboa",
              "en": "Festas de Lisboa tour"
            },
            "partner": "civitatis",
            "query": "festas lisboa santo antonio junho",
            "type": "activity"
          },
          {
            "label": {
              "es": "Experiencia gastronómica sardinas",
              "en": "Sardines gastronomic experience"
            },
            "partner": "getyourguide",
            "query": "lisbon sardines festival food tour june",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Maratón de Lisboa",
        "type": "sport",
        "date": "Oct 2026",
        "venue": "Centro Lisboa",
        "urgency": false,
        "description": {
          "es": "Una de las maratones más bonitas del mundo, con el Tajo siempre a la vista. El único contexto en el que subir todas las colinas de Lisboa parece una decisión voluntaria y positiva — o al menos, el único en el que nadie te mirará raro por hacerlo corriendo.",
          "en": "One of the world's most beautiful marathons, with the Tagus always in view. The only context in which climbing all of Lisbon's hills feels like a voluntary and positive decision — or at least the only one where nobody looks at you oddly for doing it at a run."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Inscripción Maratón Lisboa",
              "en": "Lisbon Marathon registration"
            },
            "partner": "getyourguide",
            "query": "lisbon marathon 2026 registration",
            "type": "activity"
          },
          {
            "label": {
              "es": "Tour running Lisboa",
              "en": "Lisbon running tour"
            },
            "partner": "viator",
            "query": "lisbon running tour marathon",
            "type": "activity"
          }
        ]
      }
    ],
    "services": {
      "flights": [
        "skyscanner",
        "kiwi"
      ],
      "hotels": [
        "booking",
        "hostelworld",
        "vrbo"
      ],
      "cars": [
        "discovercars",
        "rentalcars",
        "autoeurope",
        "localrent"
      ],
      "activities": [
        "getyourguide",
        "viator",
        "tiqets",
        "civitatis",
        "klook"
      ],
      "restaurants": [
        "thefork",
        "opentable"
      ],
      "insurance": [
        "safetywing",
        "worldnomads"
      ],
      "esim": [
        "airalo",
        "holafly",
        "saily",
        "yesim"
      ],
      "transfers": [
        "intui",
        "welcomepickups",
        "gettransfer",
        "indrive"
      ]
    }
  },
  {
    "id": 5,
    "slug": "roma-guia-completa-2026",
    "enSlug": "rome-complete-guide-2026",
    "narrator": "carmen",
    "heroImage": "https://images.unsplash.com/photo-1555992336-03a23c7b20ee?w=1200&q=80",
    "city": "Roma",
    "country": {
      "es": "Italia",
      "en": "Italy"
    },
    "emoji": "🇮🇹",
    "date": "2026-02-05",
    "readTime": "9 min",
    "category": "europe",
    "title": {
      "es": "Roma: Ciudad Eterna, Colas Eternas y Pasta que Vale Cada Euro",
      "en": "Rome: The Eternal City, the Eternal Queue, and Pasta Worth Every Cent"
    },
    "subtitle": {
      "es": "El Coliseo, el Vaticano, la carbonara más cara de tu vida y el arte de perderte en el Trastevere sin admitirlo",
      "en": "The Colosseum, the Vatican, the most expensive carbonara of your life and the art of getting lost in Trastevere without admitting it"
    },
    "excerpt": {
      "es": "Roma no tiene una historia — Roma es la historia. Y tú serás otro turista sudando en ella, completamente encantado.",
      "en": "Rome doesn't have a history — Rome is history. And you'll be just another tourist sweating through it, completely enchanted."
    },
    "metaDescription": {
      "es": "Guía de Roma 2026: Coliseo, Vaticano, Capilla Sixtina, Trastevere, Panteón. Entradas sin colas, porque la vida es corta.",
      "en": "Rome guide 2026: Colosseum, Vatican, Sistine Chapel, Trastevere, Pantheon. Skip-the-line tickets, because life is short and queues are not."
    },
    "keywords": {
      "es": [
        "Roma",
        "Italia",
        "Coliseo",
        "Vaticano",
        "Trastevere",
        "Panteón",
        "pasta"
      ],
      "en": [
        "Rome",
        "Italy",
        "Colosseum",
        "Vatican",
        "Trastevere",
        "Pantheon",
        "pasta"
      ]
    },
    "pointsOfInterest": [
      {
        "name": "Colosseo",
        "type": "Arqueología",
        "lat": 41.8902,
        "lng": 12.4922,
        "description": {
          "es": "Dos mil años de historia y aún así más impresionante en persona que en cualquier foto. Las dos horas de cola son negociables con una reserva anticipada. Sin ella, son tuyas — disfrútalas.",
          "en": "Two thousand years old and still more impressive in person than in any photo. The two-hour queue is negotiable — book ahead. Without a booking, the queue is yours to enjoy at full length."
        },
        "rating": 4.9,
        "priceRange": "€18",
        "affiliateLinks": [
          {
            "label": {
              "es": "Entrada sin cola",
              "en": "Skip-the-line ticket"
            },
            "partner": "getyourguide",
            "query": "colosseum rome skip line",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Tour Coliseo + Foro",
              "en": "Colosseum + Forum tour"
            },
            "partner": "tiqets",
            "query": "colosseum forum rome",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Tour guiado premium",
              "en": "Premium guided tour"
            },
            "partner": "viator",
            "query": "colosseum guided tour rome",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Musei Vaticani",
        "type": "Museo",
        "lat": 41.9065,
        "lng": 12.4534,
        "description": {
          "es": "La colección de arte más extraordinaria que ha reunido una institución religiosa. La Capilla Sixtina al final detiene la respiración — y las piernas, después de tres kilómetros de pasillos.",
          "en": "The most extraordinary art collection ever assembled by a religious institution. The Sistine Chapel at the end takes your breath away — as do your legs, after three kilometres of corridors."
        },
        "rating": 4.8,
        "priceRange": "€20",
        "affiliateLinks": [
          {
            "label": {
              "es": "Entrada + Capilla Sixtina",
              "en": "Ticket + Sistine Chapel"
            },
            "partner": "tiqets",
            "query": "vatican museums sistine chapel",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Tour guiado Vaticano",
              "en": "Guided Vatican tour"
            },
            "partner": "civitatis",
            "query": "vatican museums sistine chapel tour",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Trastevere",
        "type": "Barrio",
        "lat": 41.8896,
        "lng": 12.4696,
        "description": {
          "es": "El barrio donde Roma finge no ser un destino turístico. Restaurantes en la calle, mercados matutinos e iglesias medievales — sin colas, que ya es un milagro.",
          "en": "The neighbourhood where Rome pretends not to be a tourist destination. Street restaurants, morning markets and medieval churches with no queues — which is itself something of a miracle."
        },
        "rating": 4.7,
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour nocturno Trastevere",
              "en": "Trastevere night tour"
            },
            "partner": "getyourguide",
            "query": "trastevere rome night tour",
            "type": "activity"
          },
          {
            "label": {
              "es": "Reservar restaurante",
              "en": "Book a restaurant"
            },
            "partner": "opentable",
            "query": "trastevere rome",
            "type": "restaurant"
          }
        ]
      },
      {
        "name": "Pantheon",
        "type": "Monumento",
        "lat": 41.8986,
        "lng": 12.4768,
        "description": {
          "es": "El edificio mejor conservado de la antigüedad, todavía en uso como iglesia. El óculo lleva 1.900 años abierto al cielo — y cuando llueve, el suelo se drena solo. Roma pensó en todo.",
          "en": "The best-preserved building from antiquity, still in use as a church. The oculus has been open to the sky for 1,900 years — and when it rains, the floor drains itself. Rome thought of everything."
        },
        "rating": 4.8,
        "priceRange": "€5",
        "affiliateLinks": [
          {
            "label": {
              "es": "Entrada Panteón",
              "en": "Pantheon ticket"
            },
            "partner": "tiqets",
            "query": "pantheon rome ticket",
            "type": "tickets"
          }
        ]
      },
      {
        "name": "Villa Borghese",
        "type": "Museo",
        "lat": 41.9137,
        "lng": 12.4922,
        "description": {
          "es": "La galería Borghese alberga esculturas de Bernini que parecen desafiar las leyes de la física. Acceso limitado y reserva obligatoria — porque si todo el mundo pudiera entrar sin reservar, sería el Coliseo pero con mármol.",
          "en": "The Borghese Gallery houses Bernini sculptures that seem to defy the laws of physics. Limited access and advance booking required — because if everyone could walk in, it would be the Colosseum but with marble."
        },
        "rating": 4.9,
        "priceRange": "€15",
        "affiliateLinks": [
          {
            "label": {
              "es": "Galería Borghese",
              "en": "Borghese Gallery"
            },
            "partner": "tiqets",
            "query": "borghese gallery rome",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Tour guiado",
              "en": "Guided tour"
            },
            "partner": "viator",
            "query": "borghese gallery guided tour rome",
            "type": "activity"
          }
        ]
      }
    ],
    "events": [
      {
        "name": "Maratón de Roma",
        "type": "sport",
        "date": "Mar 2026",
        "venue": "Centro histórico",
        "urgency": false,
        "description": {
          "es": "42 kilómetros a través de los monumentos más icónicos del mundo. La más bonita del circuito internacional — y también la más cruel: en marzo ya hace calor, el adoquín romano no perdona las rodillas y en el kilómetro 30 el Coliseo te mira sin compasión.",
          "en": "42 kilometres through the world's most iconic monuments. The most beautiful on the international circuit — and also the most punishing: by March it's already warm, Roman cobblestones have no mercy on your knees, and at kilometre 30 the Colosseum stares at you without sympathy."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Inscripción Maratón de Roma",
              "en": "Rome Marathon entry"
            },
            "partner": "getyourguide",
            "query": "rome marathon 2026 entry",
            "type": "activity"
          },
          {
            "label": {
              "es": "Tour running monumentos Roma",
              "en": "Rome monuments running tour"
            },
            "partner": "viator",
            "query": "rome running tour monuments marathon",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Estate Romana",
        "type": "cultural",
        "date": "Jun–Sep 2026",
        "venue": "Teatros y espacios al aire libre",
        "urgency": false,
        "description": {
          "es": "Festivales de música, teatro y cine al aire libre con el Coliseo o el Foro Romano de fondo. Básicamente lo que ocurre cuando vives en el mejor decorado de la historia y decides que todo el mundo merece enterarse — con una copa de vino en la mano, por supuesto.",
          "en": "Music, theatre and open-air cinema with the Colosseum or Roman Forum as backdrop. What happens when you live inside the greatest film set in history and decide everyone deserves to know — with a glass of wine in hand, naturally."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Entradas Estate Romana",
              "en": "Estate Romana tickets"
            },
            "partner": "ticketmaster",
            "query": "estate romana roma 2026 concerti",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Eventos culturales Roma verano",
              "en": "Rome summer cultural events"
            },
            "partner": "getyourguide",
            "query": "rome summer cultural events outdoor",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Settimana della Cucina Italiana",
        "type": "gastronomy",
        "date": "Nov 2026",
        "venue": "Restaurantes de toda Roma",
        "urgency": false,
        "description": {
          "es": "La semana de la gastronomía italiana con menús especiales en los mejores restaurantes de la capital. Ya que estás, pide la carbonara. Técnicamente solo lleva huevo, guanciale y queso — pero te costará 18€ y será la mejor decisión de tu vida adulta.",
          "en": "Italian gastronomy week with special menus at the capital's finest restaurants. Go ahead and order the carbonara. It's technically just egg, guanciale and cheese — but it will cost you €18 and remain the best decision of your adult life."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Reservar mesa Roma",
              "en": "Book a table Rome"
            },
            "partner": "opentable",
            "query": "rome best restaurants italian cuisine 2026",
            "type": "restaurant"
          },
          {
            "label": {
              "es": "Tour gastronómico Roma",
              "en": "Rome gastronomic tour"
            },
            "partner": "civitatis",
            "query": "tour gastronomico roma pasta carbonara",
            "type": "activity"
          }
        ]
      }
    ],
    "services": {
      "flights": [
        "skyscanner",
        "kiwi"
      ],
      "hotels": [
        "booking",
        "hostelworld",
        "vrbo"
      ],
      "cars": [
        "discovercars",
        "rentalcars",
        "autoeurope",
        "localrent"
      ],
      "activities": [
        "getyourguide",
        "viator",
        "tiqets",
        "civitatis",
        "klook"
      ],
      "restaurants": [
        "thefork",
        "opentable"
      ],
      "insurance": [
        "safetywing",
        "worldnomads"
      ],
      "esim": [
        "airalo",
        "holafly",
        "saily",
        "yesim"
      ],
      "transfers": [
        "intui",
        "welcomepickups",
        "gettransfer",
        "indrive"
      ]
    }
  },
  {
    "id": 6,
    "slug": "nueva-york-guia-2026",
    "enSlug": "new-york-guide-2026",
    "narrator": "marcos",
    "heroImage": "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&q=80",
    "city": "New York",
    "country": {
      "es": "Estados Unidos",
      "en": "United States"
    },
    "emoji": "🇺🇸",
    "date": "2026-02-10",
    "readTime": "10 min",
    "category": "america",
    "title": {
      "es": "Nueva York: La Ciudad que Nunca Duerme ni te Deja Dormir a Ti",
      "en": "New York: The City That Never Sleeps and Doesn't Let You Either"
    },
    "subtitle": {
      "es": "Central Park, el MoMA, el Brooklyn Bridge y la mejor pizza del mundo — aunque técnicamente es la mejor porque llevas seis horas sin comer",
      "en": "Central Park, MoMA, the Brooklyn Bridge and the world's best pizza — technically true because you haven't eaten in six hours"
    },
    "excerpt": {
      "es": "Nueva York no es una ciudad. Es un experimento en curso sobre hasta qué punto un ser humano puede sobrevivir a base de bagels, jazz de metro y sueños a €3.000 al mes.",
      "en": "New York is not a city. It's an ongoing experiment into how far a human being can survive on bagels, subway jazz and dreams at $3,000 a month."
    },
    "metaDescription": {
      "es": "Guía de Nueva York 2026: Central Park, MET, Brooklyn Bridge, High Line, MoMA. Entradas y tours — porque el tiempo en NYC cuesta más que en cualquier otro sitio.",
      "en": "New York guide 2026: Central Park, MET, Brooklyn Bridge, High Line, MoMA. Tickets and tours — because time in NYC costs more than anywhere else on earth."
    },
    "keywords": {
      "es": [
        "Nueva York",
        "Nueva York 2026",
        "Brooklyn Bridge",
        "MoMA",
        "High Line",
        "Central Park"
      ],
      "en": [
        "New York",
        "NYC 2026",
        "Brooklyn Bridge",
        "MoMA",
        "High Line",
        "Central Park"
      ]
    },
    "pointsOfInterest": [
      {
        "name": "Central Park",
        "type": "Parque",
        "lat": 40.7829,
        "lng": -73.9654,
        "description": {
          "es": "341 hectáreas donde los corredores al amanecer comparten espacio con conciertos espontáneos, bodas de película y ardillas que han perdido completamente el miedo al hombre.",
          "en": "341 hectares where dawn runners share space with spontaneous concerts, movie-set weddings and squirrels that have entirely lost their fear of humans."
        },
        "rating": 4.8,
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour en bicicleta",
              "en": "Bike tour"
            },
            "partner": "getyourguide",
            "query": "central park bike tour new york",
            "type": "activity"
          },
          {
            "label": {
              "es": "Tour a pie",
              "en": "Walking tour"
            },
            "partner": "viator",
            "query": "central park walking tour nyc",
            "type": "activity"
          }
        ]
      },
      {
        "name": "The Metropolitan Museum of Art",
        "type": "Museo",
        "lat": 40.7794,
        "lng": -73.9632,
        "description": {
          "es": "El MET es una jornada entera. Más de dos millones de obras que abarcan 5.000 años de historia del arte, por si tenías algo mejor que hacer este martes.",
          "en": "The MET is an entire day. Over two million works spanning 5,000 years of art history, in case you had something better to do this Tuesday."
        },
        "rating": 4.9,
        "priceRange": "$30",
        "affiliateLinks": [
          {
            "label": {
              "es": "Entrada MET",
              "en": "MET ticket"
            },
            "partner": "tiqets",
            "query": "metropolitan museum new york",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Tour highlights",
              "en": "Highlights tour"
            },
            "partner": "getyourguide",
            "query": "met museum highlights tour nyc",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Brooklyn Bridge",
        "type": "Icónico",
        "lat": 40.7061,
        "lng": -73.9969,
        "description": {
          "es": "Crúzalo a pie al amanecer, con Manhattan iluminándose a tu espalda. Después explora Dumbo para las mejores vistas — y para convencerte de que podrías vivir en Brooklyn, cosa que no puedes permitirte.",
          "en": "Walk across it at sunrise, with Manhattan lighting up behind you. Then explore Dumbo for the best views — and to convince yourself you could live in Brooklyn, which you cannot afford."
        },
        "rating": 4.8,
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour Brooklyn + puente",
              "en": "Brooklyn + bridge tour"
            },
            "partner": "civitatis",
            "query": "brooklyn bridge walking tour",
            "type": "activity"
          }
        ]
      },
      {
        "name": "The High Line",
        "type": "Parque",
        "lat": 40.748,
        "lng": -74.0048,
        "description": {
          "es": "Una vía de tren abandonada convertida en parque elevado de 2,3 km con arte contemporáneo y vistas al Hudson. Nueva York tomó algo que no funcionaba y lo convirtió en algo que todos envidian. Como siempre.",
          "en": "An abandoned railway converted into a 2.3km elevated park with contemporary art and Hudson River views. New York took something that didn't work and turned it into something everyone envies. As always."
        },
        "rating": 4.7,
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour High Line + Chelsea",
              "en": "High Line + Chelsea tour"
            },
            "partner": "viator",
            "query": "high line chelsea market tour nyc",
            "type": "activity"
          }
        ]
      },
      {
        "name": "MoMA",
        "type": "Museo",
        "lat": 40.7614,
        "lng": -73.9776,
        "description": {
          "es": "La mayor colección de arte moderno del mundo. Van Gogh, Picasso, Warhol y Pollock en el mismo edificio, más un café donde un sándwich cuesta $22. Precio de Manhattan.",
          "en": "The world's greatest collection of modern art. Van Gogh, Picasso, Warhol and Pollock in the same building, plus a café where a sandwich costs $22. Manhattan pricing."
        },
        "rating": 4.8,
        "priceRange": "$30",
        "affiliateLinks": [
          {
            "label": {
              "es": "Entrada MoMA",
              "en": "MoMA ticket"
            },
            "partner": "tiqets",
            "query": "moma new york ticket",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Tour guiado MoMA",
              "en": "MoMA guided tour"
            },
            "partner": "getyourguide",
            "query": "moma new york guided tour",
            "type": "activity"
          }
        ]
      }
    ],
    "events": [
      {
        "name": "New York Fashion Week",
        "type": "cultural",
        "date": "Feb & Sep 2026",
        "venue": "Manhattan",
        "urgency": true,
        "description": {
          "es": "La semana de la moda más influyente del mundo. Shows, pop-ups y fiestas que transforman Manhattan — y hacen que conseguir taxi en Midtown sea básicamente imposible. Tú llevarás tu mejor outfit. Nadie te lo dirá, pero lo notarán.",
          "en": "The world's most influential fashion week. Shows, pop-ups and parties that transform Manhattan — and make getting a cab in Midtown essentially impossible. You'll wear your best outfit. Nobody will say anything, but they'll notice."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Eventos Fashion Week NYC",
              "en": "NYC Fashion Week events"
            },
            "partner": "stubhub",
            "query": "new york fashion week 2026 shows",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Tour moda y diseño NYC",
              "en": "NYC fashion and design tour"
            },
            "partner": "getyourguide",
            "query": "new york fashion week tour design",
            "type": "activity"
          }
        ]
      },
      {
        "name": "NYC Marathon",
        "type": "sport",
        "date": "Nov 2026",
        "venue": "5 distritos",
        "urgency": true,
        "description": {
          "es": "La maratón más grande del mundo con 50.000 corredores atravesando los cinco distritos. La ciudad entera anima, para, llora un poco y aplaude a desconocidos por razones que no sabría explicar. Tú también lo harás. Es inevitable.",
          "en": "The world's largest marathon with 50,000 runners crossing all five boroughs. The entire city cheers, stops, cries a little and applauds strangers for reasons it couldn't explain. You'll do the same. It's inevitable."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Inscripción NYC Marathon",
              "en": "NYC Marathon registration"
            },
            "partner": "ticketmaster",
            "query": "new york city marathon 2026",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Tour running NYC 5 distritos",
              "en": "NYC 5 boroughs running tour"
            },
            "partner": "viator",
            "query": "new york marathon five boroughs tour spectator",
            "type": "activity"
          }
        ]
      },
      {
        "name": "New Year's Eve Times Square",
        "type": "cultural",
        "date": "31 Dic 2026",
        "venue": "Times Square",
        "urgency": true,
        "description": {
          "es": "La cuenta atrás más famosa del mundo. Un millón de personas de pie en el frío desde las seis de la tarde, sin baños disponibles, esperando una bola de cristal durante seis horas. Romántico, objetivamente, en el sentido más masoquista del término.",
          "en": "The world's most famous countdown. A million people standing in the cold since six in the evening, with no available bathrooms, waiting six hours for a crystal ball. Objectively romantic, in the most masochistic sense of the word."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour Nochevieja en NYC",
              "en": "NYC New Year's Eve tour"
            },
            "partner": "viator",
            "query": "new years eve times square tour 2026",
            "type": "activity"
          },
          {
            "label": {
              "es": "Fiestas Nochevieja Nueva York",
              "en": "New York New Year's Eve parties"
            },
            "partner": "getyourguide",
            "query": "new york new years eve party times square",
            "type": "activity"
          }
        ]
      }
    ],
    "services": {
      "flights": [
        "skyscanner",
        "kiwi"
      ],
      "hotels": [
        "booking",
        "hostelworld",
        "vrbo"
      ],
      "cars": [
        "discovercars",
        "rentalcars",
        "localrent"
      ],
      "activities": [
        "getyourguide",
        "viator",
        "tiqets",
        "civitatis",
        "klook"
      ],
      "restaurants": [
        "opentable",
        "thefork"
      ],
      "insurance": [
        "safetywing",
        "worldnomads"
      ],
      "esim": [
        "airalo",
        "holafly",
        "saily",
        "yesim"
      ],
      "transfers": [
        "intui",
        "welcomepickups",
        "gettransfer",
        "indrive"
      ]
    }
  },
  {
    "id": 7,
    "slug": "amsterdam-guia-2026",
    "enSlug": "amsterdam-guide-2026",
    "narrator": "elena",
    "heroImage": "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?w=1200&q=80",
    "city": "Amsterdam",
    "country": {
      "es": "Países Bajos",
      "en": "Netherlands"
    },
    "emoji": "🇳🇱",
    "date": "2026-01-28",
    "readTime": "8 min",
    "category": "europe",
    "title": {
      "es": "Ámsterdam: Canales, Bicis y el Arte de No Ser Atropellado",
      "en": "Amsterdam: Canals, Bikes, and the Art of Not Getting Run Over"
    },
    "subtitle": {
      "es": "Rijksmuseum, la Casa de Ana Frank, el Jordaan y el deporte olímpico no oficial de cruzar un carril bici sin mirar",
      "en": "Rijksmuseum, Anne Frank House, the Jordaan and the unofficial Olympic sport of crossing a cycle lane without looking"
    },
    "excerpt": {
      "es": "Ámsterdam es contradictoria de la manera más encantadora posible. Una ciudad del siglo XVII que funciona mejor que la mayoría de las del siglo XXI — siempre que no te pongas delante de una bicicleta.",
      "en": "Amsterdam is contradictory in the most charming way possible. A 17th-century city that runs better than most 21st-century ones — provided you stay out of the cycle lanes."
    },
    "metaDescription": {
      "es": "Guía de Ámsterdam 2026: Rijksmuseum, Casa de Ana Frank, Jordaan, King's Day, Amsterdam Dance Event. Y cómo sobrevivir al tráfico ciclista.",
      "en": "Amsterdam guide 2026: Rijksmuseum, Anne Frank House, Jordaan, King's Day, Amsterdam Dance Event. Plus how to survive the cycling traffic."
    },
    "keywords": {
      "es": [
        "Ámsterdam",
        "Países Bajos",
        "Rijksmuseum",
        "Ana Frank",
        "Jordaan",
        "King's Day"
      ],
      "en": [
        "Amsterdam",
        "Netherlands",
        "Rijksmuseum",
        "Anne Frank",
        "Jordaan",
        "King's Day"
      ]
    },
    "pointsOfInterest": [
      {
        "name": "Rijksmuseum",
        "type": "Museo",
        "lat": 52.36,
        "lng": 4.8852,
        "description": {
          "es": "Rembrandt, Vermeer, Frans Hals — la Edad de Oro holandesa reunida en un edificio que es en sí mismo una obra de arte. Las bicicletas pasan por debajo del arco principal, lo que dice todo sobre las prioridades de esta ciudad.",
          "en": "Rembrandt, Vermeer, Frans Hals — the Dutch Golden Age assembled in a building that is itself a work of art. Bicycles pass through the main archway, which tells you everything about this city's priorities."
        },
        "rating": 4.9,
        "priceRange": "€22.50",
        "affiliateLinks": [
          {
            "label": {
              "es": "Entrada Rijksmuseum",
              "en": "Rijksmuseum ticket"
            },
            "partner": "tiqets",
            "query": "rijksmuseum amsterdam",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Tour obras maestras",
              "en": "Masterpieces tour"
            },
            "partner": "getyourguide",
            "query": "rijksmuseum amsterdam tour",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Casa de Ana Frank",
        "type": "Museo histórico",
        "lat": 52.3752,
        "lng": 4.884,
        "description": {
          "es": "El Anexo Secreto donde Ana y su familia se escondieron durante más de dos años. Reserva con semanas de antelación — esto no es negociable ni tiene nada de gracioso.",
          "en": "The Secret Annex where Anne and her family hid for more than two years. Book weeks in advance — this one is non-negotiable and nothing about it is funny."
        },
        "rating": 4.8,
        "priceRange": "€14",
        "affiliateLinks": [
          {
            "label": {
              "es": "Entrada Casa Ana Frank",
              "en": "Anne Frank House ticket"
            },
            "partner": "tiqets",
            "query": "anne frank house amsterdam",
            "type": "tickets"
          }
        ]
      },
      {
        "name": "El Jordaan",
        "type": "Barrio",
        "lat": 52.3748,
        "lng": 4.8809,
        "description": {
          "es": "Calles estrechas bordeadas de casas con fachadas en escalón, brown cafés y el mercado Noordermarkt los sábados. El barrio donde los holandeses son más simpáticos — posiblemente porque ya han desayunado.",
          "en": "Narrow streets lined with step-gabled houses, brown cafés and the Noordermarkt market on Saturdays. The neighbourhood where Dutch people are at their friendliest — possibly because they've already had breakfast."
        },
        "rating": 4.7,
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour por el Jordaan",
              "en": "Jordaan neighbourhood tour"
            },
            "partner": "civitatis",
            "query": "jordaan tour amsterdam",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Vondelpark",
        "type": "Parque",
        "lat": 52.358,
        "lng": 4.8686,
        "description": {
          "es": "Donde todos los holandeses llevan sus bicicletas los domingos. Conciertos gratuitos y ambiente completamente relajado — el único lugar de Ámsterdam donde una bici no puede atropellarte.",
          "en": "Where all Dutch people take their bicycles on Sundays. Free concerts and a completely relaxed atmosphere — the one place in Amsterdam where a bicycle cannot run you over."
        },
        "rating": 4.6,
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour en bici por Ámsterdam",
              "en": "Amsterdam bike tour"
            },
            "partner": "getyourguide",
            "query": "amsterdam canal bike tour",
            "type": "activity"
          }
        ]
      },
      {
        "name": "NEMO Science Museum",
        "type": "Museo",
        "lat": 52.3741,
        "lng": 4.9124,
        "description": {
          "es": "El museo de ciencias más visitado de los Países Bajos, con una terraza con las mejores vistas de la ciudad. El edificio parece un barco a punto de zarpar — diseño holandés en estado puro.",
          "en": "The most visited science museum in the Netherlands, with a rooftop terrace offering the best city views. The building looks like a ship about to set sail — Dutch design in its purest form."
        },
        "rating": 4.5,
        "priceRange": "€17.50",
        "affiliateLinks": [
          {
            "label": {
              "es": "Entrada NEMO",
              "en": "NEMO ticket"
            },
            "partner": "tiqets",
            "query": "nemo science museum amsterdam",
            "type": "tickets"
          }
        ]
      }
    ],
    "events": [
      {
        "name": "King's Day",
        "type": "cultural",
        "date": "27 Abr 2026",
        "venue": "Toda la ciudad",
        "urgency": true,
        "description": {
          "es": "La ciudad entera se viste de naranja para celebrar el cumpleaños del rey. Mercados callejeros, fiesta en los canales y la única ocasión del año en que beber cerveza en un barco a las once de la mañana no solo está aceptado, sino que es prácticamente obligatorio.",
          "en": "The entire city dresses in orange to celebrate the king's birthday. Street markets, canal parties and the one day of the year when drinking beer on a boat at eleven in the morning isn't just socially acceptable — it's practically mandatory."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour King's Day Ámsterdam",
              "en": "Amsterdam King's Day tour"
            },
            "partner": "viator",
            "query": "kings day amsterdam 2026 boat party",
            "type": "activity"
          },
          {
            "label": {
              "es": "Experiencia Koningsdag",
              "en": "Koningsdag experience"
            },
            "partner": "getyourguide",
            "query": "amsterdam kings day koningsdag experience",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Amsterdam Dance Event",
        "type": "electronic",
        "date": "Oct 2026",
        "venue": "Toda la ciudad",
        "urgency": true,
        "description": {
          "es": "El festival de música electrónica más grande del mundo. 400 eventos en 140 venues durante 5 días. Tu cuerpo pedirá piedad en el día 3. Tu cabeza dirá que aguanta un poco más. Llegarás a casa sin saber cuántas horas has dormido en total.",
          "en": "The world's largest electronic music festival. 400 events across 140 venues over 5 days. Your body will ask for mercy on day 3. Your head will say it can handle one more. You'll arrive home unsure how many hours of sleep you've managed in total."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Entradas Amsterdam Dance Event",
              "en": "Amsterdam Dance Event tickets"
            },
            "partner": "ticketmaster",
            "query": "amsterdam dance event ADE 2026",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Reventa ADE",
              "en": "ADE resale tickets"
            },
            "partner": "stubhub",
            "query": "amsterdam dance event 2026 tickets",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Tour electrónico Ámsterdam",
              "en": "Amsterdam electronic music tour"
            },
            "partner": "getyourguide",
            "query": "amsterdam electronic music scene tour",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Amsterdam Light Festival",
        "type": "art",
        "date": "Nov–Ene 2026/27",
        "venue": "Canales del centro",
        "urgency": false,
        "description": {
          "es": "Instalaciones de arte luminoso a lo largo de los canales históricos de noviembre a enero. Mejor en barco, con una manta, un vino caliente y la tranquilidad de saber que has tomado la mejor decisión del año — mientras el resto del mundo está en casa viendo series.",
          "en": "Light art installations along the historic canals from November through January. Best experienced by boat, with a blanket, a warm wine and the quiet satisfaction of knowing you've made the best decision of the year — while everyone else is at home watching series."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour barco Festival de Luz",
              "en": "Light Festival boat tour"
            },
            "partner": "getyourguide",
            "query": "amsterdam light festival boat tour canal",
            "type": "activity"
          },
          {
            "label": {
              "es": "Crucero canales iluminados",
              "en": "Illuminated canals cruise"
            },
            "partner": "viator",
            "query": "amsterdam light festival canal cruise",
            "type": "activity"
          }
        ]
      }
    ],
    "services": {
      "flights": [
        "skyscanner",
        "kiwi"
      ],
      "hotels": [
        "booking",
        "hostelworld",
        "vrbo"
      ],
      "cars": [
        "discovercars",
        "rentalcars",
        "autoeurope",
        "localrent"
      ],
      "activities": [
        "getyourguide",
        "viator",
        "tiqets",
        "civitatis",
        "klook"
      ],
      "restaurants": [
        "thefork",
        "opentable"
      ],
      "insurance": [
        "safetywing",
        "worldnomads"
      ],
      "esim": [
        "airalo",
        "holafly",
        "saily",
        "yesim"
      ],
      "transfers": [
        "intui",
        "welcomepickups",
        "gettransfer",
        "indrive"
      ]
    }
  },
  {
    "id": 8,
    "slug": "bangkok-guia-2026",
    "enSlug": "bangkok-guide-2026",
    "narrator": "david",
    "heroImage": "https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1200&q=80",
    "city": "Bangkok",
    "country": {
      "es": "Tailandia",
      "en": "Thailand"
    },
    "emoji": "🇹🇭",
    "date": "2026-01-20",
    "readTime": "9 min",
    "category": "asia",
    "title": {
      "es": "Bangkok: Caos, Templos y el Pad Thai Más Barato del Mundo",
      "en": "Bangkok: Chaos, Temples, and the World's Cheapest Pad Thai"
    },
    "subtitle": {
      "es": "Templos dorados, pad thai de medianoche, mercados flotantes y la convicción de que en ningún sitio del mundo comes tan bien gastando tan poco",
      "en": "Golden temples, midnight pad thai, floating markets and the unshakeable conviction that nowhere on earth do you eat this well for this little"
    },
    "excerpt": {
      "es": "Bangkok te recibe con un golpe de calor, olor a incienso y el caos más estimulante que puedes encontrar en el planeta. Y antes de que puedas quejarte, ya estás pidiendo más.",
      "en": "Bangkok hits you with a wave of heat, incense and the most stimulating chaos you'll find on the planet. And before you can complain, you're already ordering seconds."
    },
    "metaDescription": {
      "es": "Guía de Bangkok 2026: Gran Palacio, Wat Pho, Chatuchak, Songkran, Loy Krathong. Mejores tours, hoteles y dónde comer pad thai por €1,50.",
      "en": "Bangkok guide 2026: Grand Palace, Wat Pho, Chatuchak, Songkran, Loy Krathong. Best tours, hotels and where to eat pad thai for €1.50."
    },
    "keywords": {
      "es": [
        "Bangkok",
        "Tailandia",
        "Gran Palacio",
        "Wat Pho",
        "Chatuchak",
        "Songkran",
        "pad thai"
      ],
      "en": [
        "Bangkok",
        "Thailand",
        "Grand Palace",
        "Wat Pho",
        "Chatuchak",
        "Songkran",
        "pad thai"
      ]
    },
    "pointsOfInterest": [
      {
        "name": "Grand Palace & Wat Phra Kaew",
        "type": "Palacio y templo",
        "lat": 13.7499,
        "lng": 100.4927,
        "description": {
          "es": "El corazón espiritual de Tailandia. El Buda de Esmeralda es la figura religiosa más venerada del país. Código de vestimenta estricto — y sí, hace más calor con pantalones largos en Bangkok en abril.",
          "en": "The spiritual heart of Thailand. The Emerald Buddha is the country's most venerated religious figure. Strict dress code applies — and yes, it is hotter in long trousers in Bangkok in April."
        },
        "rating": 4.8,
        "priceRange": "฿500",
        "affiliateLinks": [
          {
            "label": {
              "es": "Entrada Gran Palacio",
              "en": "Grand Palace ticket"
            },
            "partner": "tiqets",
            "query": "grand palace bangkok",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Tour templos Bangkok",
              "en": "Bangkok temples tour"
            },
            "partner": "viator",
            "query": "grand palace wat pho bangkok tour",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Wat Pho",
        "type": "Templo",
        "lat": 13.7465,
        "lng": 100.4927,
        "description": {
          "es": "Alberga al Buda Reclinado, una figura de 46 metros que llena completamente el templo que lo hospeda. Spoiler: la fotografía no cabe entera. Nadie la consigue entera.",
          "en": "Houses the Reclining Buddha, a 46-metre figure that completely fills the temple sheltering it. Spoiler: it doesn't fit in a single photo. Nobody gets the whole thing in frame."
        },
        "rating": 4.7,
        "priceRange": "฿200",
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour Wat Pho + masaje",
              "en": "Wat Pho + massage tour"
            },
            "partner": "getyourguide",
            "query": "wat pho temple massage bangkok",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Chatuchak Weekend Market",
        "type": "Mercado",
        "lat": 13.7999,
        "lng": 100.55,
        "description": {
          "es": "El mercado de fin de semana más grande del mundo: 15.000 puestos con antigüedades, ropa vintage, artesanía y street food. Llegarás buscando un recuerdo y saldrás con tres bolsas, un sombrero y algo que no sabes muy bien qué es.",
          "en": "The world's largest weekend market: 15,000 stalls selling antiques, vintage clothing, crafts and street food. You'll arrive looking for one souvenir and leave with three bags, a hat and something you can't quite identify."
        },
        "rating": 4.6,
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour guiado Chatuchak",
              "en": "Chatuchak guided tour"
            },
            "partner": "getyourguide",
            "query": "chatuchak market tour bangkok",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Wat Arun",
        "type": "Templo",
        "lat": 13.7437,
        "lng": 100.4888,
        "description": {
          "es": "El Templo del Amanecer. Su fachada de porcelana y conchas marinas brilla con la luz del atardecer de una manera imposible de fotografiar — lo que no impide que todos lo intenten durante veinte minutos.",
          "en": "The Temple of Dawn. Its porcelain and seashell façade shines in the afternoon light in a way no photograph can do justice to — which doesn't stop everyone trying for twenty minutes."
        },
        "rating": 4.7,
        "priceRange": "฿100",
        "affiliateLinks": [
          {
            "label": {
              "es": "Crucero río + Wat Arun",
              "en": "River cruise + Wat Arun"
            },
            "partner": "viator",
            "query": "chao phraya river cruise bangkok",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Khao San Road",
        "type": "Calle",
        "lat": 13.759,
        "lng": 100.4975,
        "description": {
          "es": "La calle más internacional de Bangkok: mochileros, street food 24h, bares con música en vivo y masajes a €5. Una trampa para turistas de la que saldrás habiendo gastado €30 y sintiéndote muy bien al respecto.",
          "en": "Bangkok's most international street: backpackers, 24h street food, live music bars and €5 massages. A tourist trap you'll leave having spent €30 and feeling entirely fine about it."
        },
        "rating": 4.3,
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour nocturno Bangkok",
              "en": "Bangkok night tour"
            },
            "partner": "civitatis",
            "query": "bangkok night tour street food",
            "type": "activity"
          }
        ]
      }
    ],
    "events": [
      {
        "name": "Songkran",
        "type": "cultural",
        "date": "13–15 Abr 2026",
        "venue": "Toda la ciudad",
        "urgency": true,
        "description": {
          "es": "La guerra de agua más grande del mundo. Tres días de batalla acuática en las calles de Bangkok: lleva ropa que puedas tirar, porque la tirarás. No hay impermeabilización suficiente. No se puede ganar. Solo se puede sobrevivir — y volver al año siguiente.",
          "en": "The world's biggest water fight. Three days of aquatic warfare in Bangkok's streets: bring clothes you can throw away, because you will. No waterproofing is sufficient. You cannot win. You can only survive — and return the following year."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour Songkran Bangkok 2026",
              "en": "Bangkok Songkran 2026 tour"
            },
            "partner": "getyourguide",
            "query": "songkran festival bangkok 2026 water fight",
            "type": "activity"
          },
          {
            "label": {
              "es": "Experiencia Año Nuevo Thai",
              "en": "Thai New Year experience"
            },
            "partner": "viator",
            "query": "songkran water festival thailand 2026",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Loy Krathong",
        "type": "cultural",
        "date": "Nov 2026",
        "venue": "Ríos y lagos",
        "urgency": false,
        "description": {
          "es": "Miles de linternas de papel iluminan el cielo mientras el Chao Phraya se llena de pequeñas balsas con velas y flores. Es tan bonito que parecerá mentira que sea real. Y sin embargo ahí estás, con los pies mojados y la mejor fotografía de tu vida en el móvil.",
          "en": "Thousands of paper lanterns illuminate the sky as the Chao Phraya fills with small rafts bearing candles and flowers. It's so beautiful you'll find it hard to believe it's real. And yet there you are, with wet feet and the best photograph of your life on your phone."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour Loy Krathong Bangkok",
              "en": "Loy Krathong Bangkok tour"
            },
            "partner": "viator",
            "query": "loy krathong bangkok river lanterns 2026",
            "type": "activity"
          },
          {
            "label": {
              "es": "Experiencia linternas tailandesas",
              "en": "Thai lantern experience"
            },
            "partner": "getyourguide",
            "query": "loy krathong lantern festival thailand",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Bangkok Design Week",
        "type": "art",
        "date": "Feb 2026",
        "venue": "Charoen Krung",
        "urgency": false,
        "description": {
          "es": "Exposiciones de diseño, arquitectura y arte contemporáneo tailandés en el barrio más creativo de Bangkok. La prueba de que esta ciudad tiene capas que el turista estándar ni sospecha — y de que el buen diseño y el pad thai de 1,50€ pueden coexistir perfectamente.",
          "en": "Design, architecture and contemporary Thai art exhibitions in Bangkok's most creative neighbourhood. Proof that this city has layers the average tourist never suspects — and that good design and €1.50 pad thai can coexist perfectly."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Entradas Bangkok Design Week",
              "en": "Bangkok Design Week tickets"
            },
            "partner": "ticketmaster",
            "query": "bangkok design week 2026",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Tour arte y diseño Bangkok",
              "en": "Bangkok art and design tour"
            },
            "partner": "getyourguide",
            "query": "bangkok design art charoen krung creative",
            "type": "activity"
          }
        ]
      }
    ],
    "services": {
      "flights": [
        "skyscanner",
        "kiwi"
      ],
      "hotels": [
        "booking",
        "hostelworld"
      ],
      "cars": [
        "discovercars",
        "localrent"
      ],
      "activities": [
        "getyourguide",
        "viator",
        "tiqets",
        "civitatis",
        "klook"
      ],
      "restaurants": [
        "opentable"
      ],
      "insurance": [
        "safetywing",
        "worldnomads"
      ],
      "esim": [
        "airalo",
        "holafly",
        "saily",
        "yesim"
      ],
      "transfers": [
        "intui",
        "welcomepickups",
        "gettransfer",
        "indrive"
      ],
      "vpn": [
        "nordvpn"
      ],
      "transport": [
        "omio"
      ]
    }
  },
  {
    "id": 9,
    "slug": "marrakech-guia-2026",
    "enSlug": "marrakech-guide-2026",
    "narrator": "sofia",
    "heroImage": "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1200&q=80",
    "city": "Marrakech",
    "country": {
      "es": "Marruecos",
      "en": "Morocco"
    },
    "emoji": "🇲🇦",
    "date": "2026-01-15",
    "readTime": "8 min",
    "category": "africa",
    "title": {
      "es": "Marrakech: Medina, Especias y el Arte de No Perderte (Aunque Ya Vas a Perderte)",
      "en": "Marrakech: Medina, Spices, and Getting Lost Whether You Plan To or Not"
    },
    "subtitle": {
      "es": "Djemaa el-Fna, el Jardín Majorelle, zocos que te engullen y el Sahara a un día — si consigues salir de la medina",
      "en": "Djemaa el-Fna, the Jardin Majorelle, souks that swallow you whole and the Sahara one day away — if you can find the exit"
    },
    "excerpt": {
      "es": "Marrakech te asalta por todos los sentidos a la vez. El olor a especias, el naranja de las murallas y el sabor a harira que hace que el concepto 'sopa' nunca vuelva a ser el mismo.",
      "en": "Marrakech assaults every single sense at once. Spices, orange walls, harira soup, and the warm certainty that you are hopelessly, happily lost."
    },
    "metaDescription": {
      "es": "Guía de Marrakech 2026: Djemaa el-Fna, Jardín Majorelle, medina, zocos, desierto del Sahara. Con consejos para negociar, sobrevivir y volver enamorado.",
      "en": "Marrakech guide 2026: Djemaa el-Fna, Jardin Majorelle, medina, souks, Sahara Desert. Tips for navigating the chaos and loving every bewildering second."
    },
    "keywords": {
      "es": [
        "Marrakech",
        "Marruecos",
        "Djemaa el-Fna",
        "Jardin Majorelle",
        "zocos",
        "Sahara",
        "medina"
      ],
      "en": [
        "Marrakech",
        "Morocco",
        "Djemaa el-Fna",
        "Jardin Majorelle",
        "souks",
        "Sahara",
        "medina"
      ]
    },
    "pointsOfInterest": [
      {
        "name": "Djemaa el-Fna",
        "type": "Plaza",
        "lat": 31.6258,
        "lng": -7.9891,
        "description": {
          "es": "El lugar más cinematográfico del mundo. Acróbatas y vendedores de zumo por la mañana; mercado de comida al aire libre al atardecer. Prepárate para que alguien te ponga una serpiente encima antes de que puedas decir no.",
          "en": "The world's most cinematic place. Acrobats and juice vendors in the morning; open-air food market at sunset. A monkey will find you before you find the monkey."
        },
        "rating": 4.8,
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour guiado medina",
              "en": "Medina guided tour"
            },
            "partner": "getyourguide",
            "query": "djemaa el fna marrakech tour",
            "type": "activity"
          },
          {
            "label": {
              "es": "Tour gastronómico",
              "en": "Food tour"
            },
            "partner": "viator",
            "query": "marrakech food tour djemaa",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Jardin Majorelle",
        "type": "Jardín",
        "lat": 31.6413,
        "lng": -8.0036,
        "description": {
          "es": "Diseñado por Jacques Majorelle y rescatado por Yves Saint Laurent. Sus jardines de azul cobalto son un oasis de paz ridículamente hermoso en medio del caos. La cola para entrar también es larga, pero merece.",
          "en": "Designed by Jacques Majorelle and rescued by Yves Saint Laurent. Its cobalt blue gardens are an oasis of peace — and yes, everyone else had the same idea of coming here to escape the crowds."
        },
        "rating": 4.7,
        "priceRange": "€10–16",
        "affiliateLinks": [
          {
            "label": {
              "es": "Entrada Jardín Majorelle",
              "en": "Jardin Majorelle ticket"
            },
            "partner": "tiqets",
            "query": "jardin majorelle marrakech",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Tour jardines + YSL",
              "en": "Gardens + YSL tour"
            },
            "partner": "civitatis",
            "query": "jardin majorelle yves saint laurent marrakech",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Medina y Zocos",
        "type": "Mercado histórico",
        "lat": 31.6314,
        "lng": -7.9869,
        "description": {
          "es": "Un laberinto del siglo XI diseñado expresamente para que pierdas el sentido de la orientación — y lo encuentres en algún riad inesperado. El primer precio siempre es el doble. Sonríe y negocia.",
          "en": "An 11th-century maze designed specifically to dissolve your sense of direction. You will get lost. The first price quoted is always double the real one. Embrace both facts equally."
        },
        "rating": 4.6,
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour por los zocos",
              "en": "Souks tour"
            },
            "partner": "getyourguide",
            "query": "marrakech souks guided tour",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Palacio Bahía",
        "type": "Palacio",
        "lat": 31.621,
        "lng": -7.9823,
        "description": {
          "es": "Arquitectura islámica del siglo XIX con patios de naranjos, fuentes de mosaico y techos de cedro tallado. Un recordatorio de que el lujo existía mucho antes de que alguien inventara el jacuzzi.",
          "en": "19th-century Islamic architecture with orange courtyards, mosaic fountains and carved cedar ceilings. Proof that opulence was invented long before the infinity pool."
        },
        "rating": 4.5,
        "priceRange": "70 MAD",
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour palacios Marrakech",
              "en": "Marrakech palaces tour"
            },
            "partner": "civitatis",
            "query": "bahia palace marrakech tour",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Atlas Mountains",
        "type": "Naturaleza",
        "lat": 31.2201,
        "lng": -7.9283,
        "description": {
          "es": "A menos de una hora de la ciudad, el Atlas ofrece pueblos bereberes, trekking y vistas que contrastan radicalmente con el caos de la medina. El silencio aquí es tan absoluto que te parece sospechoso.",
          "en": "Less than an hour from the city, the Atlas Mountains offer Berber villages, trekking and views that make you forget Marrakech entirely — until you have to go back."
        },
        "rating": 4.8,
        "affiliateLinks": [
          {
            "label": {
              "es": "Excursión Atlas",
              "en": "Atlas day trip"
            },
            "partner": "viator",
            "query": "atlas mountains day trip marrakech",
            "type": "activity"
          }
        ]
      }
    ],
    "events": [
      {
        "name": "Festival International du Film de Marrakech",
        "type": "art",
        "date": "Nov–Dic 2026",
        "venue": "Place Jemaa el-Fna y cines",
        "urgency": false,
        "description": {
          "es": "Uno de los festivales de cine más prestigiosos de África, con alfombra roja y proyecciones al aire libre en la medina. El único festival de cine del mundo donde puedes ver una película con una estrella de Hollywood a tu derecha y un encantador de serpientes a tu izquierda.",
          "en": "One of Africa's most prestigious film festivals, with red carpet events and open-air screenings in the medina. The only film festival on earth where you can watch a film with a Hollywood star on your right and a snake charmer on your left."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Entradas Festival de Cine Marrakech",
              "en": "Marrakech Film Festival tickets"
            },
            "partner": "ticketmaster",
            "query": "marrakech international film festival 2026",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Tour cine y cultura Marrakech",
              "en": "Marrakech film and culture tour"
            },
            "partner": "getyourguide",
            "query": "marrakech film festival culture tour medina",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Ramadán en Marrakech",
        "type": "cultural",
        "date": "Feb–Mar 2026",
        "venue": "Toda la medina",
        "urgency": false,
        "description": {
          "es": "La medina cobra una dimensión espiritual única al atardecer cuando la llamada al magrib anuncia el iftar y las calles desiertas se llenan de vida en cuestión de segundos. El mejor espectáculo sin entrada que existe — y el mejor momento para probar la harira de tu vida.",
          "en": "The medina takes on a unique spiritual dimension at sunset when the call to maghrib announces iftar and streets that were empty seconds ago suddenly fill with life. The best free show on earth — and the best moment to try the harira of your life."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour iftar Ramadán Marrakech",
              "en": "Marrakech Ramadan iftar tour"
            },
            "partner": "getyourguide",
            "query": "marrakech ramadan iftar dinner experience",
            "type": "activity"
          },
          {
            "label": {
              "es": "Experiencia gastronomía Ramadán",
              "en": "Ramadan gastronomy experience"
            },
            "partner": "viator",
            "query": "marrakech ramadan food culture experience",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Excursión al Desierto",
        "type": "natural",
        "date": "Todo el año",
        "venue": "Sahara, Merzouga",
        "urgency": false,
        "description": {
          "es": "Merzouga y las dunas de Erg Chebbi, a un día de Marrakech. Noche en jaima bajo un cielo tan cargado de estrellas que parece CGI. La arena en los zapatos durante el vuelo de vuelta es un recuerdo gratuito y completamente indestructible.",
          "en": "Merzouga and the Erg Chebbi dunes, a day from Marrakech. A night in a tent under a sky so full of stars it looks computer-generated. The sand in your shoes on the flight home is a free souvenir that will last significantly longer than expected."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour desierto Sahara 2 días",
              "en": "2-day Sahara desert tour"
            },
            "partner": "viator",
            "query": "sahara desert tour marrakech merzouga 2 days",
            "type": "activity"
          },
          {
            "label": {
              "es": "Excursión desierto con camello",
              "en": "Desert excursion with camel"
            },
            "partner": "getyourguide",
            "query": "marrakech sahara desert camel trek overnight",
            "type": "activity"
          }
        ]
      }
    ],
    "services": {
      "flights": [
        "skyscanner",
        "kiwi"
      ],
      "hotels": [
        "booking",
        "hostelworld"
      ],
      "cars": [
        "discovercars",
        "rentalcars",
        "localrent"
      ],
      "activities": [
        "getyourguide",
        "viator",
        "tiqets",
        "civitatis",
        "klook"
      ],
      "restaurants": [
        "thefork"
      ],
      "insurance": [
        "safetywing",
        "worldnomads"
      ],
      "esim": [
        "airalo",
        "holafly",
        "saily",
        "yesim"
      ],
      "transfers": [
        "intui",
        "welcomepickups",
        "gettransfer",
        "indrive"
      ]
    }
  },
  {
    "id": 10,
    "slug": "dubai-guia-2026",
    "enSlug": "dubai-guide-2026",
    "narrator": "david",
    "city": "Dubai",
    "country": {
      "es": "Emiratos Árabes Unidos",
      "en": "United Arab Emirates"
    },
    "emoji": "🏙️",
    "date": "2026-02-01",
    "readTime": "11 min",
    "category": "asia",
    "heroImage": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80",
    "title": {
      "es": "Dubái: El Futuro Existe y Tiene el Aire Acondicionado Más Potente del Mundo",
      "en": "Dubai: The Future Is Here, Fully Air-Conditioned, and Surprisingly Affordable If You Ignore the Cocktails"
    },
    "subtitle": {
      "es": "Rascacielos récord, desierto infinito y lujo sin límites — con una factura del minibar que te hará reconsiderar tus decisiones vitales.",
      "en": "Record-breaking skyscrapers, endless desert and boundless luxury — plus a drinks bill that will prompt genuine soul-searching."
    },
    "excerpt": {
      "es": "De la cima del Burj Khalifa al silencio del desierto de Al Marmoom: Dubái es uno de los viajes más espectaculares que existen, y uno de los más caros si no te andas con ojo.",
      "en": "From the top of the Burj Khalifa to the silence of the Al Marmoom desert: Dubai is one of the most spectacular trips on earth — and one of the most expensive if you're not paying attention."
    },
    "metaDescription": {
      "es": "Guía completa Dubái 2026: qué ver, dónde dormir, cómo moverse y los mejores consejos para aprovechar al máximo tu viaje sin hipotecarte en el minibar.",
      "en": "Complete Dubai 2026 guide: what to see, where to stay, how to get around and the best tips to make the most of your trip without remortgaging for room service."
    },
    "keywords": {
      "es": [
        "guía dubai",
        "dubai 2026",
        "qué ver en dubai",
        "burj khalifa",
        "desierto dubai",
        "emiratos árabes viaje"
      ],
      "en": [
        "dubai guide",
        "dubai 2026",
        "things to do dubai",
        "burj khalifa",
        "dubai desert",
        "uae travel"
      ]
    },
    "pointsOfInterest": [
      {
        "name": "Burj Khalifa",
        "description": {
          "es": "El edificio más alto del mundo ofrece vistas de 360° desde la plataforma At the Top (pisos 124 y 148). Reserva online para evitar colas y conseguir el mejor precio — aunque 'mejor precio' en Dubái es un concepto relativo.",
          "en": "The world's tallest building offers 360° views from the At the Top observation deck (floors 124 and 148). Book online to skip queues and get the best price — though 'best price' in Dubai is always a relative concept."
        },
        "type": "landmark",
        "lat": 25.1972,
        "lng": 55.2744,
        "affiliateLinks": [
          {
            "partner": "tiqets",
            "query": "burj khalifa at the top",
            "label": {
              "es": "Entradas Burj Khalifa",
              "en": "Burj Khalifa Tickets"
            }
          }
        ]
      },
      {
        "name": "Dubai Mall",
        "description": {
          "es": "El mayor centro comercial del mundo alberga también el Dubai Aquarium, una pista de hielo y la Dubai Fountain. Puedes entrar a por agua y salir tres horas después sin saber exactamente qué pasó.",
          "en": "The world's largest shopping mall also houses the Dubai Aquarium, an ice rink and the Dubai Fountain. You can enter for a bottle of water and emerge three hours later genuinely unsure what happened."
        },
        "type": "attraction",
        "lat": 25.1985,
        "lng": 55.2796,
        "affiliateLinks": []
      },
      {
        "name": "Desierto de Dubai — Al Marmoom",
        "description": {
          "es": "A 45 minutos del centro, las dunas de Al Marmoom ofrecen una experiencia radicalmente diferente al lujo del centro. El safari en 4x4 al atardecer es obligatorio — y la única actividad de Dubái donde el precio no te provoca un síncope.",
          "en": "45 minutes from the centre, the Al Marmoom dunes offer a radically different experience to downtown excess. The sunset 4x4 safari is unmissable — and one of the few Dubai activities that won't give you palpitations at checkout."
        },
        "type": "nature",
        "lat": 24.8767,
        "lng": 55.5005,
        "affiliateLinks": [
          {
            "partner": "getyourguide",
            "query": "dubai desert safari",
            "label": {
              "es": "Safari en el desierto",
              "en": "Desert Safari"
            }
          }
        ]
      },
      {
        "name": "Dubai Creek & Al Fahidi",
        "description": {
          "es": "El corazón histórico de Dubái. El barrio Al Fahidi conserva las torres de viento de barro y el Museo de Dubái. Cruza el Creek en abra por 1 dírhams — la única experiencia auténticamente barata de la ciudad.",
          "en": "Dubai's historic heart. The Al Fahidi district preserves the wind towers and the Dubai Museum. Cross the Creek by abra for 1 dirham — officially the cheapest and most charming thing you can do in this city."
        },
        "type": "historic",
        "lat": 25.2637,
        "lng": 55.2972,
        "affiliateLinks": []
      },
      {
        "name": "Palm Jumeirah & Atlantis",
        "description": {
          "es": "La isla artificial más famosa del mundo. El parque acuático Aquaventure del hotel Atlantis te ofrece un día de adrenalina total — con una tarifa de entrada que también es bastante adrenalínica.",
          "en": "The world's most famous artificial island. The Atlantis hotel's Aquaventure waterpark delivers a full adrenaline day — the ticket price alone will give you a head start on the adrenaline."
        },
        "type": "landmark",
        "lat": 25.1124,
        "lng": 55.139,
        "affiliateLinks": [
          {
            "partner": "tiqets",
            "query": "atlantis aquaventure dubai",
            "label": {
              "es": "Entradas Aquaventure",
              "en": "Aquaventure Tickets"
            }
          }
        ]
      }
    ],
    "events": [
      {
        "name": "Dubai Shopping Festival",
        "type": "festival",
        "date": "Enero 2026",
        "description": {
          "es": "El mayor festival de compras del mundo con descuentos masivos, shows y sorteos de coches y lingotes de oro durante todo enero. El único lugar del planeta donde hacer cola para entrar a un centro comercial a las 11 de la noche se considera una actividad cultural perfectamente normal.",
          "en": "The world's biggest shopping festival with massive discounts, shows and draws for cars and gold bars throughout January. The only place on earth where queuing to enter a shopping mall at 11pm is considered a perfectly normal cultural activity."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Experiencias Dubai Shopping Festival",
              "en": "Dubai Shopping Festival experiences"
            },
            "partner": "getyourguide",
            "query": "dubai shopping festival 2026 experience",
            "type": "activity"
          },
          {
            "label": {
              "es": "Tour compras Dubai Mall",
              "en": "Dubai Mall shopping tour"
            },
            "partner": "viator",
            "query": "dubai shopping festival mall tour january",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Dubai Airshow",
        "type": "technology",
        "date": "Noviembre 2025",
        "description": {
          "es": "La feria aeronáutica más importante de la región con exhibiciones espectaculares y los últimos avances en aviación civil y militar. Para cuando salgas habrás considerado seriamente comprarte un avión privado — o al menos un asiento en business class.",
          "en": "The region's most important aeronautical fair with spectacular airshows and the latest advances in civil and military aviation. You will leave having briefly but seriously considered purchasing a private jet — or at minimum upgrading to business class for the flight home."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Entradas Dubai Airshow",
              "en": "Dubai Airshow tickets"
            },
            "partner": "tiqets",
            "query": "dubai airshow 2026 tickets",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Tour aviación y tecnología Dubai",
              "en": "Dubai aviation and technology tour"
            },
            "partner": "getyourguide",
            "query": "dubai airshow aviation technology tour",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Dubai World Cup",
        "type": "sport",
        "date": "Marzo 2026",
        "description": {
          "es": "La carrera de caballos con el mayor premio en metálico del mundo en el hipódromo de Meydan. Entrada gratuita — lo cual, en Dubái, merece documentarse, enmarcarse y colgarse en la pared como recordatorio de que los milagros existen.",
          "en": "The horse race with the world's largest prize money at Meydan Racecourse. Free admission — which, in Dubai, is a fact so statistically improbable it deserves to be framed and hung on a wall as evidence that miracles occur."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Experiencia Dubai World Cup",
              "en": "Dubai World Cup experience"
            },
            "partner": "getyourguide",
            "query": "dubai world cup meydan horse race 2026",
            "type": "activity"
          },
          {
            "label": {
              "es": "Tour hipódromo Meydan",
              "en": "Meydan racecourse tour"
            },
            "partner": "viator",
            "query": "dubai world cup meydan racecourse experience",
            "type": "activity"
          }
        ]
      }
    ],
    "services": {
      "flights": [
        "skyscanner",
        "kiwi"
      ],
      "hotels": [
        "booking",
        "expedia"
      ],
      "cars": [
        "discovercars",
        "rentalcars"
      ],
      "activities": [
        "getyourguide",
        "viator",
        "tiqets",
        "klook"
      ],
      "insurance": [
        "safetywing",
        "worldnomads"
      ],
      "esim": [
        "airalo",
        "holafly",
        "saily",
        "yesim"
      ],
      "transfers": [
        "intui",
        "welcomepickups",
        "gettransfer",
        "indrive"
      ],
      "vpn": [
        "nordvpn"
      ]
    }
  },
  {
    "id": 11,
    "slug": "praga-guia-2026",
    "enSlug": "prague-guide-2026",
    "narrator": "carmen",
    "city": "Praga",
    "country": {
      "es": "República Checa",
      "en": "Czech Republic"
    },
    "emoji": "🏰",
    "date": "2026-02-08",
    "readTime": "10 min",
    "category": "europe",
    "heroImage": "https://images.unsplash.com/photo-1541849546-216549ae216d?w=1200&q=80",
    "title": {
      "es": "Praga: Ciudad de Cuento, Cervezas de 2€ y Hordas de Despedidas de Soltero",
      "en": "Prague: Fairy-Tale City, €2 Beers, and Stag Parties as Far as the Eye Can See"
    },
    "subtitle": {
      "es": "Bohemia medieval, cervezas legendarias y uno de los cascos históricos más intactos de Europa — compartido con medio continente cada fin de semana.",
      "en": "Medieval Bohemia, legendary beers and one of Europe's most intact historic old towns — shared with approximately half the continent every weekend."
    },
    "excerpt": {
      "es": "El Puente de Carlos, el castillo que domina la ciudad y los subterráneos de Josefov: Praga es la capital de cuento de hadas que Europa guardaba en secreto hasta que dejó de guardarla.",
      "en": "Charles Bridge, the castle that dominates the city and the underground of Josefov: Prague is the fairy-tale capital Europe kept secret — right up until it didn't."
    },
    "metaDescription": {
      "es": "Guía completa Praga 2026: el Castillo, el Barrio Judío, las mejores cervezas y todos los consejos para visitar la capital checa sin perderte nada — ni a los grupos de despedida.",
      "en": "Complete Prague 2026 guide: the Castle, Jewish Quarter, the best beers and all the tips to visit the Czech capital without missing anything important, stag parties included."
    },
    "keywords": {
      "es": [
        "guía praga",
        "praga 2026",
        "qué ver en praga",
        "castillo de praga",
        "puente de carlos",
        "república checa viaje"
      ],
      "en": [
        "prague guide",
        "prague 2026",
        "things to do prague",
        "prague castle",
        "charles bridge",
        "czech republic travel"
      ]
    },
    "pointsOfInterest": [
      {
        "name": "Castillo de Praga",
        "description": {
          "es": "El complejo de castillos habitado más grande del mundo, con la Catedral de San Vito, el Callejón del Oro y vistas panorámicas sobre toda la ciudad. Grande, impresionante y lleno de gente con palos de selfie — pero aun así vale cada paso.",
          "en": "The world's largest inhabited castle complex, with St Vitus Cathedral, Golden Lane and panoramic views over the entire city. Vast, magnificent, and packed with people on selfie sticks — still worth every step."
        },
        "type": "historic",
        "lat": 50.0909,
        "lng": 14.4005,
        "affiliateLinks": [
          {
            "partner": "tiqets",
            "query": "prague castle tickets",
            "label": {
              "es": "Entradas Castillo de Praga",
              "en": "Prague Castle Tickets"
            }
          }
        ]
      },
      {
        "name": "Puente de Carlos",
        "description": {
          "es": "El puente más fotografiado de Europa, con 30 estatuas barrocas y aproximadamente 300 grupos de turistas a cualquier hora del día. Madruga para verlo sin multitudes o asume tu rol de extra de fondo en las fotos de desconocidos.",
          "en": "The most photographed bridge in Europe, featuring 30 baroque statues and an equal number of tourist groups at any given moment. Go at dawn or accept your permanent role as background extra in strangers' holiday photos."
        },
        "type": "landmark",
        "lat": 50.0865,
        "lng": 14.4114,
        "affiliateLinks": []
      },
      {
        "name": "Barrio Judío — Josefov",
        "description": {
          "es": "El antiguo gueto judío conserva seis sinagogas, el cementerio medieval y el Museo Judío de Praga. Una visita imprescindible para entender la historia de Europa — y la única parte de la ciudad donde el silencio se mantiene sin esfuerzo.",
          "en": "The former Jewish ghetto preserves six synagogues, the medieval cemetery and the Jewish Museum of Prague. An essential visit to understand European history — and the one part of Prague where silence holds naturally, without asking."
        },
        "type": "historic",
        "lat": 50.0894,
        "lng": 14.4182,
        "affiliateLinks": [
          {
            "partner": "tiqets",
            "query": "jewish museum prague josefov",
            "label": {
              "es": "Museo Judío de Praga",
              "en": "Jewish Museum Prague"
            }
          }
        ]
      },
      {
        "name": "Plaza de la Ciudad Vieja y Reloj Astronómico",
        "description": {
          "es": "El corazón de Praga. El Reloj Astronómico del siglo XV desata un pequeño espectáculo cada hora que atrae a cincuenta personas por cada metro cuadrado disponible. Sube al Ayuntamiento para las mejores vistas — y para escapar de la aglomeración.",
          "en": "Prague's heart. The 15th-century Astronomical Clock puts on a small show every hour that attracts roughly fifty people per available square metre. Climb the Town Hall for the best views — and a moment's respite from the crowd."
        },
        "type": "landmark",
        "lat": 50.087,
        "lng": 14.4213,
        "affiliateLinks": []
      },
      {
        "name": "Barrio de Vinohrady",
        "description": {
          "es": "El barrio más auténtico de Praga para comer, beber y vivir como un local. Cafés de especialidad, bistrós modernos y, lo más importante, sin grupos de despedida de soltero con camisetas a juego.",
          "en": "Prague's most authentic neighbourhood for eating, drinking and living like a local. Specialty coffee shops, modern bistros and, crucially, no stag parties in matching T-shirts."
        },
        "type": "neighborhood",
        "lat": 50.075,
        "lng": 14.442,
        "affiliateLinks": []
      }
    ],
    "events": [
      {
        "name": "Mercados de Navidad de Praga",
        "type": "festival",
        "date": "Diciembre 2026",
        "description": {
          "es": "Los mercados navideños de la Plaza de la Ciudad Vieja y Wenceslao están entre los más bonitos de Europa, con artesanía tradicional, vino caliente y temperaturas que te recordarán por qué Centroeuropa inventó los abrigos de pluma. Llegarás por los mercados. Te quedarás por el trdelník.",
          "en": "The Christmas markets at Old Town Square and Wenceslas Square are among Europe's most beautiful, with traditional crafts, mulled wine and temperatures that explain why Central Europe invented the down coat. You'll come for the markets. You'll stay for the trdelník."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour mercados Navidad Praga",
              "en": "Prague Christmas markets tour"
            },
            "partner": "getyourguide",
            "query": "prague christmas markets tour december 2026",
            "type": "activity"
          },
          {
            "label": {
              "es": "Experiencia navideña Praga",
              "en": "Prague Christmas experience"
            },
            "partner": "viator",
            "query": "prague christmas market old town square",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Prague Spring Music Festival",
        "type": "cultural",
        "date": "Mayo 2026",
        "description": {
          "es": "El festival de música clásica más importante de Europa Central, con conciertos en palacios, iglesias y salas históricas durante tres semanas. La mejor excusa para vestirse bien y fingir con total convicción que entiendes de música clásica — al menos hasta el descanso.",
          "en": "Central Europe's most important classical music festival, with concerts in palaces, churches and historic halls for three weeks. The finest excuse to dress up and convincingly pretend you understand classical music — at least until the interval."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Entradas Prague Spring Festival",
              "en": "Prague Spring Festival tickets"
            },
            "partner": "tiqets",
            "query": "prague spring music festival 2026 tickets",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Conciertos clásicos Praga",
              "en": "Prague classical concerts"
            },
            "partner": "getyourguide",
            "query": "prague classical music concert palace",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Prague International Marathon",
        "type": "sport",
        "date": "Mayo 2026",
        "description": {
          "es": "Una de las maratones urbanas más espectaculares del mundo, con el trazado atravesando el casco histórico Patrimonio de la Humanidad. Correr el Puente de Carlos en el kilómetro 20 es el único momento en que el dolor de piernas parece completamente justificado.",
          "en": "One of the world's most spectacular city marathons, with the route passing through the UNESCO World Heritage historic centre. Crossing Charles Bridge at kilometre 20 is the one moment when your aching legs feel entirely and completely justified."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Inscripción Maratón de Praga",
              "en": "Prague Marathon registration"
            },
            "partner": "getyourguide",
            "query": "prague international marathon 2026 registration",
            "type": "activity"
          },
          {
            "label": {
              "es": "Tour running casco histórico Praga",
              "en": "Prague historic centre running tour"
            },
            "partner": "viator",
            "query": "prague marathon running historical centre tour",
            "type": "activity"
          }
        ]
      }
    ],
    "services": {
      "flights": [
        "skyscanner",
        "kiwi"
      ],
      "hotels": [
        "booking",
        "expedia"
      ],
      "cars": [
        "discovercars",
        "rentalcars"
      ],
      "activities": [
        "getyourguide",
        "viator",
        "tiqets",
        "klook"
      ],
      "insurance": [
        "safetywing",
        "worldnomads"
      ],
      "esim": [
        "airalo",
        "holafly",
        "saily",
        "yesim"
      ],
      "transfers": [
        "intui",
        "welcomepickups",
        "gettransfer",
        "indrive"
      ],
      "transport": [
        "omio"
      ]
    }
  },
  {
    "id": 12,
    "slug": "bali-guia-2026",
    "enSlug": "bali-guide-2026",
    "narrator": "elena",
    "city": "Bali",
    "country": {
      "es": "Indonesia",
      "en": "Indonesia"
    },
    "emoji": "🌴",
    "date": "2026-02-15",
    "readTime": "12 min",
    "category": "asia",
    "heroImage": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80",
    "title": {
      "es": "Bali: Templos, Arrozales y la Búsqueda Eterna de lo Auténtico",
      "en": "Bali: Temples, Rice Terraces, and the Eternal Search for 'Authentic' Experiences"
    },
    "subtitle": {
      "es": "Templos milenarios, junglas volcánicas y playas con olas perfectas — compartidas con diez mil personas que también vinieron a desconectar.",
      "en": "Ancient temples, volcanic jungles and beaches with perfect waves — shared with ten thousand other people who also came here to disconnect."
    },
    "excerpt": {
      "es": "Ubud, Seminyak, Uluwatu: Bali es tres destinos en uno. Una isla donde la espiritualidad hinduista impregna cada rincón y los retiros de yoga compiten con los beach clubs por el alma del viajero.",
      "en": "Ubud, Seminyak, Uluwatu: Bali is three destinations in one. An island where Hindu spirituality permeates every corner and yoga retreats compete with beach clubs for the traveller's soul."
    },
    "metaDescription": {
      "es": "Guía completa Bali 2026: Ubud, Seminyak, Uluwatu, los mejores templos, playas y consejos para visitar la isla indonesia — incluyendo cómo sobrevivir a las terrazas de arroz con monos.",
      "en": "Complete Bali 2026 guide: Ubud, Seminyak, Uluwatu, the best temples, beaches and tips for visiting the Indonesian island — including how to handle the monkey forest with your snacks intact."
    },
    "keywords": {
      "es": [
        "guía bali",
        "bali 2026",
        "qué ver en bali",
        "ubud bali",
        "templos bali",
        "indonesia viaje"
      ],
      "en": [
        "bali guide",
        "bali 2026",
        "things to do bali",
        "ubud bali",
        "bali temples",
        "indonesia travel"
      ]
    },
    "pointsOfInterest": [
      {
        "name": "Templo Tanah Lot",
        "description": {
          "es": "El templo más fotografiado de Bali emerge sobre una roca en el océano como una postal de dimensiones sobrehumanas. El atardecer desde aquí es uno de los más espectaculares de Asia — y compartido con aproximadamente ochocientas personas que tuvieron exactamente tu misma idea.",
          "en": "Bali's most photographed temple rises from a rock in the ocean like an oversized postcard. Sunset from here is one of the most spectacular in all of Asia — shared with roughly eight hundred people who had exactly the same idea."
        },
        "type": "landmark",
        "lat": -8.6215,
        "lng": 115.0867,
        "affiliateLinks": [
          {
            "partner": "tiqets",
            "query": "tanah lot temple bali sunset",
            "label": {
              "es": "Entrada Tanah Lot",
              "en": "Tanah Lot Ticket"
            }
          }
        ]
      },
      {
        "name": "Terrazas de Arroz de Tegallalang",
        "description": {
          "es": "El sistema de irrigación subak inscrito por la UNESCO. Las terrazas de arroz en cascada al norte de Ubud son la imagen icónica de Bali — ve por la mañana temprano antes de que lleguen los instagramers con sus atuendos de colores.",
          "en": "The UNESCO-inscribed subak irrigation system. The cascading rice terraces north of Ubud are Bali's iconic image — arrive early before the influencers in coordinated outfits claim the best angles."
        },
        "type": "nature",
        "lat": -8.4322,
        "lng": 115.2791,
        "affiliateLinks": []
      },
      {
        "name": "Ubud — Centro espiritual y cultural",
        "description": {
          "es": "El corazón cultural de Bali: galerías de arte, el palacio real, el Mercado de Ubud y el bosque de monos — donde los monos te quitarán las gafas de sol con una eficiencia que haría llorar de envidia a cualquier carterista profesional.",
          "en": "Bali's cultural heart: art galleries, the royal palace, Ubud Market and the monkey forest — where the monkeys will relieve you of your sunglasses with an efficiency that would make a professional pickpocket weep."
        },
        "type": "neighborhood",
        "lat": -8.5069,
        "lng": 115.2625,
        "affiliateLinks": [
          {
            "partner": "getyourguide",
            "query": "ubud culture day tour temples rice terraces",
            "label": {
              "es": "Tour cultural Ubud",
              "en": "Ubud Culture Day Tour"
            }
          }
        ]
      },
      {
        "name": "Templo Uluwatu",
        "description": {
          "es": "En el borde de un acantilado de 70 metros sobre el océano Índico, Uluwatu es el templo más dramáticamente emplazado de Bali. El Kecak Fire Dance al atardecer es imprescindible — y los monos aquí también son ladrones, pero al menos el escenario es espectacular.",
          "en": "On the edge of a 70-metre cliff above the Indian Ocean, Uluwatu is Bali's most dramatically situated temple. The sunset Kecak Fire Dance is unmissable — the monkeys here are also thieves, but at least the backdrop is spectacular."
        },
        "type": "landmark",
        "lat": -8.8291,
        "lng": 115.0849,
        "affiliateLinks": [
          {
            "partner": "viator",
            "query": "uluwatu temple kecak dance bali",
            "label": {
              "es": "Tour Uluwatu + Kecak",
              "en": "Uluwatu & Kecak Dance Tour"
            }
          }
        ]
      },
      {
        "name": "Monte Batur — Trekking al amanecer",
        "description": {
          "es": "El volcán activo de 1717 metros ofrece uno de los trekkings más accesibles y espectaculares de Asia. Salida a las 2h de la madrugada para llegar a la cima al amanecer — porque si vas a sufrir, al menos que el paisaje lo justifique.",
          "en": "The 1,717-metre active volcano offers one of Asia's most accessible and spectacular treks. Depart at 2am to reach the summit at sunrise — because if you're going to suffer, the view should at least be worth it."
        },
        "type": "nature",
        "lat": -8.2422,
        "lng": 115.3752,
        "affiliateLinks": [
          {
            "partner": "getyourguide",
            "query": "mount batur sunrise trek bali",
            "label": {
              "es": "Trek amanecer Monte Batur",
              "en": "Mount Batur Sunrise Trek"
            }
          }
        ]
      }
    ],
    "events": [
      {
        "name": "Nyepi — Día de Silencio de Bali",
        "type": "cultural",
        "date": "Marzo 2026",
        "description": {
          "es": "El Año Nuevo balinés: 24 horas de silencio total en toda la isla. El aeropuerto de Bali cierra. Tu vuelo no cierra, pero el aeropuerto sí. Piénsalo bien antes de reservar para ese día. La experiencia de redescubrir el silencio real — y el aburrimiento real — no tiene precio.",
          "en": "The Balinese New Year: 24 hours of total silence across the entire island. Bali airport closes. Your flight doesn't close, but the airport does. Think carefully before booking for that day. The experience of rediscovering real silence — and real boredom — is genuinely priceless."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Experiencia Nyepi en Bali",
              "en": "Nyepi experience in Bali"
            },
            "partner": "getyourguide",
            "query": "nyepi bali day of silence experience 2026",
            "type": "activity"
          },
          {
            "label": {
              "es": "Tour Ogoh-ogoh parade Bali",
              "en": "Bali Ogoh-ogoh parade tour"
            },
            "partner": "viator",
            "query": "bali nyepi ogoh ogoh parade cultural",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Bali Arts Festival",
        "type": "art",
        "date": "Junio–Julio 2026",
        "description": {
          "es": "Un mes de danza, música gamelan, teatro tradicional y artesanía en Denpasar. El único festival del mundo donde la palabra auténtico no necesita entrecomillarse y donde entiendes en quince minutos por qué Bali tiene fama espiritual que trasciende los posts de Instagram.",
          "en": "A month of dance, gamelan music, traditional theatre and crafts in Denpasar. The one festival where the word authentic needs no scare quotes, and where you understand within fifteen minutes why Bali's spiritual reputation transcends Instagram posts."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour Bali Arts Festival",
              "en": "Bali Arts Festival tour"
            },
            "partner": "getyourguide",
            "query": "bali arts festival denpasar june 2026",
            "type": "activity"
          },
          {
            "label": {
              "es": "Experiencia danza y gamelan Bali",
              "en": "Bali dance and gamelan experience"
            },
            "partner": "viator",
            "query": "bali traditional dance gamelan festival",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Bali Spirit Festival",
        "type": "cultural",
        "date": "Abril 2026",
        "description": {
          "es": "El mayor festival de yoga, danza y música del sudeste asiático reúne a miles de personas en Ubud durante cinco días. Si viniste a Bali buscando lo auténtico y encuentras esto, Bali tiene sentido del humor — y también el mejor brunch post-yoga del hemisferio sur.",
          "en": "Southeast Asia's largest yoga, dance and music festival brings thousands to Ubud for five days. If you came to Bali searching for the authentic and found this instead, Bali has a sense of humour — and also the best post-yoga brunch in the southern hemisphere."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Entradas Bali Spirit Festival",
              "en": "Bali Spirit Festival tickets"
            },
            "partner": "tiqets",
            "query": "bali spirit festival ubud 2026 tickets",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Experiencia yoga y meditación Ubud",
              "en": "Ubud yoga and meditation experience"
            },
            "partner": "getyourguide",
            "query": "bali spirit festival yoga ubud experience",
            "type": "activity"
          }
        ]
      }
    ],
    "services": {
      "flights": [
        "skyscanner",
        "kiwi"
      ],
      "hotels": [
        "booking",
        "expedia"
      ],
      "cars": [
        "discovercars",
        "localrent"
      ],
      "activities": [
        "getyourguide",
        "viator",
        "tiqets",
        "klook"
      ],
      "insurance": [
        "safetywing",
        "worldnomads"
      ],
      "esim": [
        "airalo",
        "holafly",
        "saily",
        "yesim"
      ],
      "transfers": [
        "intui",
        "welcomepickups",
        "gettransfer",
        "indrive"
      ],
      "vpn": [
        "nordvpn"
      ]
    }
  },
  {
    "id": 13,
    "slug": "viena-guia-2026",
    "enSlug": "vienna-guide-2026",
    "narrator": "sofia",
    "city": "Vienna",
    "country": {
      "es": "Austria",
      "en": "Austria"
    },
    "emoji": "🎻",
    "date": "2026-03-15",
    "readTime": "9 min",
    "category": "europe",
    "heroImage": "https://images.unsplash.com/photo-1516550893923-42d28e5677af?w=1200&q=80",
    "title": {
      "es": "Viena: Música, Mármol y la Ciudad que Convirtió el Café en Filosofía de Vida",
      "en": "Vienna: Music, Marble and the City That Turned Coffee into a Philosophy of Life"
    },
    "subtitle": {
      "es": "Palacios imperiales, ópera de otro mundo, Sachertorte con nata y los cafés más elegantes en los que nunca nadie te pedirá que te vayas",
      "en": "Imperial palaces, world-class opera, Sachertorte with cream and the most elegant cafés on earth where nobody will ever ask you to leave"
    },
    "excerpt": {
      "es": "Viena es la ciudad que más seriamente se toma el placer de no hacer nada urgente. Sus cafés, sus palacios y su música clásica componen una ciudad que sigue gobernando culturalmente Europa — sin necesitar que nadie se lo confirme.",
      "en": "Vienna is the city that takes the pleasure of unhurried living most seriously. Its coffee houses, palaces and classical music compose a city that still governs Europe culturally — without requiring anyone's confirmation."
    },
    "metaDescription": {
      "es": "Guía completa Viena 2026: Schönbrunn, Belvedere, Ópera Estatal, Prater, Heurigen y los cafés imperiales. Con consejos para no perderse ni una nota.",
      "en": "Complete Vienna 2026 guide: Schönbrunn, Belvedere, State Opera, Prater, Heurigen and the imperial coffee houses. Tips for not missing a single note."
    },
    "keywords": {
      "es": [
        "guía viena",
        "viena 2026",
        "qué ver en viena",
        "palacio schönbrunn",
        "ópera viena",
        "austria viaje",
        "café viena"
      ],
      "en": [
        "vienna guide",
        "vienna 2026",
        "things to do vienna",
        "schonbrunn palace",
        "vienna opera",
        "austria travel",
        "vienna coffee house"
      ]
    },
    "pointsOfInterest": [
      {
        "name": "Palacio de Schönbrunn",
        "type": "Palacio",
        "lat": 48.1845,
        "lng": 16.3122,
        "description": {
          "es": "El Versalles de los Habsburgo: 1.441 habitaciones, jardines formales del siglo XVIII y la mejor vista de Viena desde el Gloriette en lo alto de la colina. Un recordatorio de que el exceso bien ejecutado puede ser una forma de arte.",
          "en": "The Habsburg Versailles: 1,441 rooms, 18th-century formal gardens and the best view of Vienna from the Gloriette at the top of the hill. A reminder that excess, when executed with conviction, can be a legitimate art form."
        },
        "rating": 4.9,
        "priceRange": "€16–26",
        "affiliateLinks": [
          {
            "label": {
              "es": "Entrada Schönbrunn + jardines",
              "en": "Schönbrunn + gardens ticket"
            },
            "partner": "tiqets",
            "query": "schonbrunn palace vienna gardens",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Tour palacio imperial",
              "en": "Imperial palace tour"
            },
            "partner": "civitatis",
            "query": "schonbrunn palace imperial tour vienna",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Palacio del Belvedere",
        "type": "Museo",
        "lat": 48.1914,
        "lng": 16.381,
        "description": {
          "es": "Arquitectura barroca espectacular y la colección de arte más importante de Austria. El Beso de Klimt en el Belvedere Superior detiene el tiempo de un modo que no debería ser posible para una pintura de hace más de un siglo.",
          "en": "Spectacular Baroque architecture and Austria's most important art collection. Klimt's The Kiss in the Upper Belvedere stops time in a way that shouldn't be possible for a painting over a century old."
        },
        "rating": 4.8,
        "priceRange": "€16",
        "affiliateLinks": [
          {
            "label": {
              "es": "Entrada Belvedere Superior",
              "en": "Upper Belvedere ticket"
            },
            "partner": "tiqets",
            "query": "upper belvedere vienna klimt kiss",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Tour arte vienés",
              "en": "Viennese art tour"
            },
            "partner": "getyourguide",
            "query": "belvedere palace klimt vienna art tour",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Ópera Estatal de Viena",
        "type": "Teatro",
        "lat": 48.203,
        "lng": 16.3687,
        "description": {
          "es": "Una de las salas de ópera más importantes del mundo con 300 producciones anuales distintas. Las entradas de pie desde 3€ son la mejor propuesta cultural-precio del mundo. Llegas de pie, te quedas de pie, y eso lo convierte en el concierto más memorable de tu vida.",
          "en": "One of the world's most important opera houses with 300 different annual productions. Standing tickets from €3 are the world's finest culture-to-price proposition. You arrive standing, you stay standing, and that makes it the most memorable concert of your life."
        },
        "rating": 4.9,
        "priceRange": "€3–250",
        "affiliateLinks": [
          {
            "label": {
              "es": "Entradas Ópera Estatal Viena",
              "en": "Vienna State Opera tickets"
            },
            "partner": "tiqets",
            "query": "vienna state opera tickets 2026",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Tour tras bambalinas ópera",
              "en": "Opera backstage tour"
            },
            "partner": "getyourguide",
            "query": "vienna state opera backstage tour",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Cafés Imperiales",
        "type": "Gastronómico",
        "lat": 48.2069,
        "lng": 16.3697,
        "description": {
          "es": "El Café Central, el Café Schwarzenberg, el Landtmann: los cafés de Viena son un estilo de vida declarado Patrimonio Cultural Inmaterial por la UNESCO. Un Melange y un periódico durante tres horas no es procrastinación — es cultura.",
          "en": "Café Central, Café Schwarzenberg, Landtmann: Vienna's coffee houses are a way of life declared Intangible Cultural Heritage by UNESCO. A Melange and a newspaper for three hours is not procrastination — it's culture."
        },
        "rating": 4.7,
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour cafés imperiales viena",
              "en": "Viennese imperial café tour"
            },
            "partner": "viator",
            "query": "vienna coffee house imperial tour",
            "type": "activity"
          },
          {
            "label": {
              "es": "Reservar café central viena",
              "en": "Book Café Central Vienna"
            },
            "partner": "thefork",
            "query": "cafe central vienna",
            "type": "restaurant"
          }
        ]
      },
      {
        "name": "Prater y Riesenrad",
        "type": "Parque",
        "lat": 48.2165,
        "lng": 16.3958,
        "description": {
          "es": "El parque de atracciones más antiguo del mundo con la noria gigante del siglo XIX que domina el Prater. La noria aparece en El Tercer Hombre — y desde las cabinas, Viena entera se despliega como un mapa de su propio esplendor.",
          "en": "The world's oldest amusement park and its 19th-century giant Ferris wheel that dominates the Prater. The wheel appears in The Third Man — and from the gondolas, all of Vienna unfolds like a map of its own splendour."
        },
        "rating": 4.6,
        "priceRange": "€15",
        "affiliateLinks": [
          {
            "label": {
              "es": "Entrada Riesenrad",
              "en": "Riesenrad ticket"
            },
            "partner": "tiqets",
            "query": "riesenrad ferris wheel vienna prater",
            "type": "tickets"
          }
        ]
      }
    ],
    "events": [
      {
        "name": "Wiener Festwochen 2026",
        "type": "art",
        "date": "May–Jun 2026",
        "venue": "Varios teatros y espacios",
        "urgency": true,
        "description": {
          "es": "El festival de artes escénicas más importante de Austria llena de teatro, danza y ópera contemporánea los mejores escenarios de la ciudad durante seis semanas. El programa 2026 mezcla producciones de la Burgtheater con directores internacionales de vanguardia y actuaciones en espacios no convencionales de la ciudad.",
          "en": "Austria's most important performing arts festival fills the city's finest stages with theatre, dance and contemporary opera for six weeks. The 2026 programme mixes Burgtheater productions with international avant-garde directors and performances in unconventional city spaces."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Entradas Wiener Festwochen",
              "en": "Wiener Festwochen tickets"
            },
            "partner": "tiqets",
            "query": "wiener festwochen vienna 2026 theatre dance",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Tour escénico Viena",
              "en": "Vienna theatre scene tour"
            },
            "partner": "getyourguide",
            "query": "vienna wiener festwochen performing arts experience",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Viena Clásica — Conciertos en palacio",
        "type": "cultural",
        "date": "Todo el año",
        "venue": "Palacio Schönbrunn y Sala Dorada",
        "urgency": false,
        "description": {
          "es": "Conciertos de Mozart y Strauss en los salones del Palacio de Schönbrunn y en la Sala Dorada del Musikverein — el mejor sonido de Europa en el espacio arquitectónico más bello en el que un ser humano puede escuchar una sinfonía. El único dilema: si mirar el techo o cerrar los ojos.",
          "en": "Mozart and Strauss concerts in the halls of Schönbrunn Palace and in the Golden Hall of the Musikverein — Europe's finest sound in the most beautiful architectural space a human being can listen to a symphony in. The only dilemma: whether to look at the ceiling or close your eyes."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Concierto Mozart en Schönbrunn",
              "en": "Mozart concert at Schönbrunn"
            },
            "partner": "tiqets",
            "query": "mozart concert schonbrunn palace vienna",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Concierto Sala Dorada Musikverein",
              "en": "Musikverein Golden Hall concert"
            },
            "partner": "getyourguide",
            "query": "musikverein golden hall concert vienna",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Vienna City Marathon",
        "type": "sport",
        "date": "Abr 2026",
        "venue": "Centro histórico",
        "urgency": false,
        "description": {
          "es": "Uno de los maratones urbanos más bellos del mundo: el trazado pasa por la Ringstrasse, los palacios imperiales y el Ring vienés. Correr Viena a las 7 de la mañana del domingo antes de que abran los cafés es una experiencia que ningún café puede igualar — aunque al llegar a la meta, uno lo intenta igualmente.",
          "en": "One of the world's most beautiful city marathons: the route passes along the Ringstrasse, the imperial palaces and the Viennese Ring. Running Vienna at 7am on Sunday before the coffee houses open is an experience no café can match — though at the finish line, you try one anyway."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Inscripción Maratón de Viena",
              "en": "Vienna Marathon registration"
            },
            "partner": "getyourguide",
            "query": "vienna city marathon 2026 registration run",
            "type": "activity"
          },
          {
            "label": {
              "es": "Tour running Ringstrasse",
              "en": "Ringstrasse running tour"
            },
            "partner": "viator",
            "query": "vienna marathon ringstrasse running tour palaces",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Heuriger Season — Vino de la vendimia",
        "type": "gastronomy",
        "date": "May–Oct 2026",
        "venue": "Grinzing, Heiligenstadt, Nussdorf",
        "urgency": false,
        "description": {
          "es": "Los Heurigen son las tabernas de vino nuevo que los viticultores vieneses abren en sus propias casas cuando hay cosecha fresca. Beber vino blanco joven en los viñedos de las colinas de Viena con las agujas de la catedral de fondo es el plan menos turístico y más perfecto de la ciudad.",
          "en": "The Heurigen are new-wine taverns that Viennese winemakers open in their own homes when the fresh harvest is ready. Drinking young white wine in Vienna's hillside vineyards with the cathedral spires in the background is the least touristy and most perfect plan the city has to offer."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour Heuriger viñedos viena",
              "en": "Vienna Heuriger vineyard tour"
            },
            "partner": "viator",
            "query": "vienna heuriger wine tavern tour grinzing",
            "type": "activity"
          },
          {
            "label": {
              "es": "Experiencia vino vienés",
              "en": "Viennese wine experience"
            },
            "partner": "getyourguide",
            "query": "vienna wine tasting heuriger vineyards",
            "type": "activity"
          }
        ]
      }
    ],
    "services": {
      "flights": [
        "skyscanner",
        "kiwi"
      ],
      "hotels": [
        "booking",
        "hostelworld",
        "expedia"
      ],
      "cars": [
        "discovercars",
        "rentalcars",
        "autoeurope"
      ],
      "activities": [
        "getyourguide",
        "viator",
        "tiqets",
        "civitatis",
        "klook"
      ],
      "restaurants": [
        "thefork",
        "opentable"
      ],
      "insurance": [
        "safetywing",
        "worldnomads"
      ],
      "esim": [
        "airalo",
        "holafly",
        "saily",
        "yesim"
      ],
      "transfers": [
        "intui",
        "welcomepickups",
        "gettransfer"
      ],
      "transport": [
        "omio"
      ]
    }
  },
  {
    "id": 14,
    "slug": "seul-guia-completa-2026",
    "enSlug": "seoul-complete-guide-2026",
    "narrator": "marcos",
    "city": "Seoul",
    "country": {
      "es": "Corea del Sur",
      "en": "South Korea"
    },
    "emoji": "🇰🇷",
    "date": "2026-03-22",
    "readTime": "10 min",
    "category": "asia",
    "heroImage": "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=1200&q=80",
    "title": {
      "es": "Seúl: K-pop, Palacios Joseon y la Ciudad que Nunca Para de Reinventarse",
      "en": "Seoul: K-pop, Joseon Palaces and the City That Never Stops Reinventing Itself"
    },
    "subtitle": {
      "es": "Callejones de hanok entre rascacielos, ramyeon a medianoche y el país con la mejor conexión a internet del mundo — por si acaso",
      "en": "Hanok alleyways between skyscrapers, midnight ramyeon and the country with the world's best internet — just in case"
    },
    "excerpt": {
      "es": "Seúl es la ciudad que resolvió el problema de cómo ser simultáneamente antiquísima y completamente del futuro. Lo consigue cada día sin que parezca esfuerzo.",
      "en": "Seoul is the city that solved the problem of being simultaneously ancient and completely of the future. It manages it every day without appearing to try."
    },
    "metaDescription": {
      "es": "Guía completa Seúl 2026: Gyeongbokgung, Bukchon, Myeongdong, Hongdae, gastronomía coreana y K-pop. Todos los consejos para tu viaje a Corea del Sur.",
      "en": "Complete Seoul 2026 guide: Gyeongbokgung, Bukchon, Myeongdong, Hongdae, Korean cuisine and K-pop. All the tips for your South Korea trip."
    },
    "keywords": {
      "es": [
        "guía seúl",
        "seúl 2026",
        "qué ver en seúl",
        "corea del sur viaje",
        "palacio gyeongbokgung",
        "bukchon",
        "kpop seúl"
      ],
      "en": [
        "seoul guide",
        "seoul 2026",
        "things to do seoul",
        "south korea travel",
        "gyeongbokgung palace",
        "bukchon",
        "kpop seoul"
      ]
    },
    "pointsOfInterest": [
      {
        "name": "Palacio de Gyeongbokgung",
        "type": "Palacio histórico",
        "lat": 37.5796,
        "lng": 126.977,
        "description": {
          "es": "El palacio principal de la dinastía Joseon (siglo XIV) con el espectacular fondo de las montañas Bukak. El cambio de guardia real es una coreografía de veinte minutos que merece madrugar. Alquila un hanbok en la entrada — el acceso es gratis si llegas vestido de época y la foto vale cada won.",
          "en": "The main palace of the 14th-century Joseon dynasty with the spectacular Bukak mountain backdrop. The royal guard changing ceremony is a twenty-minute choreography worth an early start. Rent a hanbok at the entrance — entry is free if you arrive in traditional dress and the photo is worth every won."
        },
        "rating": 4.9,
        "priceRange": "₩3.000",
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour palacio Gyeongbokgung",
              "en": "Gyeongbokgung palace tour"
            },
            "partner": "getyourguide",
            "query": "gyeongbokgung palace seoul guided tour",
            "type": "activity"
          },
          {
            "label": {
              "es": "Tour palacios Joseon completo",
              "en": "Full Joseon palaces tour"
            },
            "partner": "viator",
            "query": "seoul joseon palaces full day tour",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Bukchon Hanok Village",
        "type": "Barrio histórico",
        "lat": 37.5826,
        "lng": 126.983,
        "description": {
          "es": "El barrio de casas hanok del siglo XIV que existe a quinientos metros de los rascacielos de Jongno. Sus callejuelas empedradas entre tejados de teja curva son lo más cercano al Seúl de la dinastía Joseon que queda en pie — y la fotografía más repetida de Corea del Sur por buenas razones.",
          "en": "The 14th-century hanok house neighbourhood that exists five hundred metres from the Jongno skyscrapers. Its cobblestone alleys between curved tile roofs are the closest thing to the Joseon-dynasty Seoul that survives — and South Korea's most repeated photograph for very good reasons."
        },
        "rating": 4.7,
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour barrios históricos Seúl",
              "en": "Seoul historic neighbourhood tour"
            },
            "partner": "civitatis",
            "query": "bukchon hanok village seoul guided walk",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Myeongdong",
        "type": "Barrio comercial",
        "lat": 37.5636,
        "lng": 126.9869,
        "description": {
          "es": "El epicentro de la K-beauty y la moda coreana. Las tiendas de skincare compiten en densidad con los puestos de comida callejera de tteokbokki y pajeon. Es imposible salir del barrio sin haber comprado al menos tres productos para la piel que no sabías que necesitabas.",
          "en": "The epicentre of K-beauty and Korean fashion. Skincare shops compete in density with street food stalls selling tteokbokki and pajeon. It is physically impossible to exit the neighbourhood without having bought at least three skincare products you didn't know you needed."
        },
        "rating": 4.5,
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour comida callejera Seúl",
              "en": "Seoul street food tour"
            },
            "partner": "getyourguide",
            "query": "seoul street food tour myeongdong korean",
            "type": "activity"
          },
          {
            "label": {
              "es": "Restaurantes coreanos Seúl",
              "en": "Seoul Korean restaurants"
            },
            "partner": "opentable",
            "query": "myeongdong seoul restaurant",
            "type": "restaurant"
          }
        ]
      },
      {
        "name": "Hongdae",
        "type": "Barrio cultural",
        "lat": 37.5563,
        "lng": 126.9234,
        "description": {
          "es": "El barrio universitario más creativo de Asia: arte callejero, actuaciones en directo espontáneas, cafés de temática absurda y la escena de clubs de música electrónica más seria de Corea del Sur. El viernes por la noche aquí es una clase magistral de lo que significa que una generación decida que el futuro se parece a esto.",
          "en": "Asia's most creative university neighbourhood: street art, spontaneous live performances, absurdly themed cafés and South Korea's most serious electronic music club scene. Friday night here is a masterclass in what it looks like when a generation decides that the future looks like this."
        },
        "rating": 4.6,
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour nocturno Hongdae Seúl",
              "en": "Hongdae Seoul night tour"
            },
            "partner": "viator",
            "query": "hongdae seoul night tour kpop clubs",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Mercado de Gwangjang",
        "type": "Mercado",
        "lat": 37.5699,
        "lng": 126.9996,
        "description": {
          "es": "El mercado tradicional más antiguo de Seúl, abierto desde 1905. Los puestos de bindaetteok (tortitas de judías mungo), mayak gimbap y yukhoe (steak tartare coreano) son la razón por la que Seúl tiene fama gastronómica que no necesita ningún restaurante con estrella para justificarse.",
          "en": "Seoul's oldest traditional market, open since 1905. The stalls of bindaetteok (mung bean pancakes), mayak gimbap and yukhoe (Korean steak tartare) are the reason Seoul has a culinary reputation that requires no Michelin stars to justify itself."
        },
        "rating": 4.8,
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour gastronómico mercados Seúl",
              "en": "Seoul market food tour"
            },
            "partner": "getyourguide",
            "query": "gwangjang market seoul food tour traditional",
            "type": "activity"
          }
        ]
      }
    ],
    "events": [
      {
        "name": "Cherry Blossom Season — Yeouido",
        "type": "natural",
        "date": "Abr 2026",
        "venue": "Parque Yeouido y ciudad entera",
        "urgency": true,
        "description": {
          "es": "La temporada de cerezos de Seúl no tiene nada que envidiarle a la de Japón y tiene la ventaja de que los vuelos son bastante más baratos. El parque de Yeouido se transforma en un túnel de flores rosas de más de cuatro kilómetros. Llevas cinco minutos ahí y entiendes por qué el mundo entero reserva vuelo con un año de antelación para ver algo que dura diez días.",
          "en": "Seoul's cherry blossom season has nothing to envy Japan's and has the considerable advantage of significantly cheaper flights. Yeouido Park transforms into a four-kilometre pink flower tunnel. You are there for five minutes and you understand exactly why the entire world books flights a year ahead to see something that lasts ten days."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour cerezos Seúl Yeouido",
              "en": "Seoul Yeouido cherry blossom tour"
            },
            "partner": "getyourguide",
            "query": "seoul cherry blossom yeouido spring tour 2026",
            "type": "activity"
          },
          {
            "label": {
              "es": "Experiencia hanami coreano",
              "en": "Korean hanami experience"
            },
            "partner": "viator",
            "query": "seoul cherry blossom festival hanami korean",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Seoul Fashion Week",
        "type": "art",
        "date": "Mar y Oct 2026",
        "venue": "Dongdaemun Design Plaza",
        "urgency": false,
        "description": {
          "es": "Una de las semanas de la moda más influyentes del mundo, celebrada en el Dongdaemun Design Plaza de Zaha Hadid. Los diseñadores coreanos llevan una década definiendo una estética propia que el resto del mundo lleva todavía intentando descifrar. Entrar a los desfiles es complicado. Ver el espectáculo fuera del DDP, con los asistentes como exhibición en sí mismos, no tiene precio.",
          "en": "One of the world's most influential fashion weeks, held at Zaha Hadid's Dongdaemun Design Plaza. Korean designers have spent a decade defining an aesthetic that the rest of the world is still trying to decode. Getting inside the shows is complicated. Watching the spectacle outside the DDP, with the attendees as the exhibition themselves, is free and unmissable."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour moda y diseño Seúl",
              "en": "Seoul fashion and design tour"
            },
            "partner": "getyourguide",
            "query": "seoul fashion week ddp design tour",
            "type": "activity"
          },
          {
            "label": {
              "es": "Experiencia DDP Seúl",
              "en": "DDP Seoul experience"
            },
            "partner": "viator",
            "query": "dongdaemun design plaza seoul tour architecture",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Boryeong Mud Festival",
        "type": "festival",
        "date": "Jul 2026",
        "venue": "Boryeong (2h de Seúl)",
        "urgency": false,
        "description": {
          "es": "El festival de barro más famoso de Asia a dos horas de Seúl en tren. Literalmente: toboganes, piscinas y peleas de barro con miles de personas. El barro de Boryeong es famoso por sus propiedades para la piel — aunque eso lo piensas antes de entrar, no durante.",
          "en": "Asia's most famous mud festival two hours from Seoul by train. Literally: slides, pools and mud fights with thousands of people. Boryeong's mud is famous for its skin properties — though that's what you think before entering, not during."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Excursión Boryeong Mud Festival",
              "en": "Boryeong Mud Festival day trip"
            },
            "partner": "getyourguide",
            "query": "boryeong mud festival day trip seoul 2026",
            "type": "activity"
          },
          {
            "label": {
              "es": "Tour desde Seúl a Boryeong",
              "en": "Seoul to Boryeong tour"
            },
            "partner": "viator",
            "query": "boryeong mud festival tour from seoul july",
            "type": "activity"
          }
        ]
      }
    ],
    "services": {
      "flights": [
        "skyscanner",
        "kiwi"
      ],
      "hotels": [
        "booking",
        "hostelworld",
        "expedia"
      ],
      "cars": [
        "discovercars",
        "rentalcars"
      ],
      "activities": [
        "getyourguide",
        "viator",
        "tiqets",
        "civitatis",
        "klook"
      ],
      "restaurants": [
        "opentable"
      ],
      "insurance": [
        "safetywing",
        "worldnomads"
      ],
      "esim": [
        "airalo",
        "holafly",
        "saily",
        "yesim"
      ],
      "transfers": [
        "intui",
        "welcomepickups",
        "gettransfer",
        "indrive"
      ],
      "vpn": [
        "nordvpn"
      ]
    }
  },
  {
    "id": 15,
    "slug": "buenos-aires-guia-2026",
    "enSlug": "buenos-aires-guide-2026",
    "narrator": "elena",
    "city": "Buenos Aires",
    "country": {
      "es": "Argentina",
      "en": "Argentina"
    },
    "emoji": "🇦🇷",
    "date": "2026-04-05",
    "readTime": "10 min",
    "category": "america",
    "heroImage": "https://images.unsplash.com/photo-1589909202802-8f4aadce1849?w=1200&q=80",
    "title": {
      "es": "Buenos Aires: Tango, Asado y la Ciudad que Tiene Más Librerías por Habitante que Ninguna Otra",
      "en": "Buenos Aires: Tango, Asado and the City with More Bookshops per Capita Than Anywhere on Earth"
    },
    "subtitle": {
      "es": "Barrios con carácter propio, el mejor bife del planeta y la conciencia de que llevas demasiados días ahí y sigues sin tener ganas de irte",
      "en": "Neighbourhoods with distinct personalities, the finest steak on the planet and the dawning awareness that you've been here too long and still don't want to leave"
    },
    "excerpt": {
      "es": "Buenos Aires es la ciudad latinoamericana que más seriamente se toma a sí misma. Lo cual, lejos de hacerla pretenciosa, la hace fascinante — cada barrio es un argumento cultural distinto y todos tienen razón.",
      "en": "Buenos Aires is the Latin American city that takes itself most seriously. Which, far from making it pretentious, makes it fascinating — every neighbourhood is a different cultural argument and all of them are right."
    },
    "metaDescription": {
      "es": "Guía completa Buenos Aires 2026: Palermo, San Telmo, La Boca, Recoleta, tango, asado, librerías y el mejor plan para no querer marcharte nunca.",
      "en": "Complete Buenos Aires 2026 guide: Palermo, San Telmo, La Boca, Recoleta, tango, asado, bookshops and the best plan for not ever wanting to leave."
    },
    "keywords": {
      "es": [
        "guía buenos aires",
        "buenos aires 2026",
        "qué ver en buenos aires",
        "tango buenos aires",
        "san telmo",
        "palermo buenos aires",
        "argentina viaje"
      ],
      "en": [
        "buenos aires guide",
        "buenos aires 2026",
        "things to do buenos aires",
        "tango buenos aires",
        "san telmo",
        "palermo buenos aires",
        "argentina travel"
      ]
    },
    "pointsOfInterest": [
      {
        "name": "San Telmo",
        "type": "Barrio histórico",
        "lat": -34.622,
        "lng": -58.3727,
        "description": {
          "es": "El barrio más antiguo de Buenos Aires: adoquines del siglo XIX, el mejor mercado de antigüedades de Sudamérica y el tango que sale de los bares sin que nadie lo haya planeado. Los domingos, la Feria de San Telmo transforma la calle Defensa en un museo callejero de dos kilómetros.",
          "en": "Buenos Aires' oldest neighbourhood: 19th-century cobblestones, the finest antiques market in South America and tango that spills out of bars without anyone having planned it. On Sundays, the San Telmo Fair turns Defensa Street into a two-kilometre street museum."
        },
        "rating": 4.8,
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour tango en San Telmo",
              "en": "Tango tour in San Telmo"
            },
            "partner": "civitatis",
            "query": "san telmo tango tour buenos aires antiques",
            "type": "activity"
          },
          {
            "label": {
              "es": "Clase de tango BA",
              "en": "Buenos Aires tango class"
            },
            "partner": "getyourguide",
            "query": "tango class buenos aires san telmo",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Palermo",
        "type": "Barrio",
        "lat": -34.5885,
        "lng": -58.4282,
        "description": {
          "es": "El barrio más grande y diverso de la ciudad, dividido en microbarrios con personalidad propia: Palermo Soho para galerías y restaurantes de autor, Palermo Hollywood para bares y discotecas, Palermo Chico para las embajadas y los parques del Rosedal. El tipo de barrio donde podrías vivir un año y no repetir restaurante.",
          "en": "The city's largest and most diverse neighbourhood, divided into micro-neighbourhoods with distinct personalities: Palermo Soho for galleries and signature restaurants, Palermo Hollywood for bars and clubs, Palermo Chico for embassies and the Rosedal parks. The kind of neighbourhood where you could live for a year without eating at the same restaurant twice."
        },
        "rating": 4.7,
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour gastronómico Palermo",
              "en": "Palermo food tour"
            },
            "partner": "viator",
            "query": "palermo buenos aires food tour restaurants gastronomy",
            "type": "activity"
          },
          {
            "label": {
              "es": "Reservar restaurante Palermo",
              "en": "Book Palermo restaurant"
            },
            "partner": "opentable",
            "query": "palermo buenos aires restaurant",
            "type": "restaurant"
          }
        ]
      },
      {
        "name": "La Boca — Caminito",
        "type": "Barrio icónico",
        "lat": -34.6345,
        "lng": -58.3632,
        "description": {
          "es": "Las casas de chapa de colores del Caminito son la imagen más reproducida de Argentina después del Obelisco. El barrio obrero de inmigrantes italianos que dio origen al tango mantiene un carácter genuino mezclado con turismo intenso — ve a primera hora para ver La Boca antes de que el mercado de souvenirs tome el control del espacio.",
          "en": "Caminito's colourful corrugated iron houses are Argentina's most reproduced image after the Obelisco. The working-class Italian immigrant neighbourhood that gave birth to tango retains genuine character alongside intense tourism — go early to see La Boca before the souvenir market takes possession of the space."
        },
        "rating": 4.5,
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour La Boca + tango",
              "en": "La Boca + tango tour"
            },
            "partner": "getyourguide",
            "query": "la boca caminito tango tour buenos aires",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Recoleta — Cementerio y barrio",
        "type": "Barrio cultural",
        "lat": -34.5875,
        "lng": -58.3935,
        "description": {
          "es": "El barrio más parisino de Buenos Aires tiene el cementerio más visitado del mundo — donde Evita Perón tiene su mausoleo rodeado de flores frescas todos los días del año. Los calafates del Bosque de Palermo y los cafés de la Plaza Francia completan una tarde perfecta para quien prefiere la cultura al ruido.",
          "en": "Buenos Aires' most Parisian neighbourhood has the world's most visited cemetery — where Evita Perón's mausoleum is surrounded by fresh flowers every single day of the year. The Bosque de Palermo and the Plaza Francia cafés complete a perfect afternoon for those who prefer culture to noise."
        },
        "rating": 4.8,
        "priceRange": "Gratis",
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour Cementerio Recoleta + Evita",
              "en": "Recoleta Cemetery + Evita tour"
            },
            "partner": "civitatis",
            "query": "recoleta cemetery evita peron buenos aires tour",
            "type": "activity"
          },
          {
            "label": {
              "es": "Tour barrios BA completo",
              "en": "Buenos Aires neighbourhood tour"
            },
            "partner": "viator",
            "query": "buenos aires neighbourhood tour recoleta palermo san telmo",
            "type": "activity"
          }
        ]
      },
      {
        "name": "El Ateneo Grand Splendid",
        "type": "Librería",
        "lat": -34.5956,
        "lng": -58.3939,
        "description": {
          "es": "La librería más bella del mundo, construida en un teatro de ópera de 1919 donde los palcos se convirtieron en estantes y el escenario en una cafetería. National Geographic la declaró la segunda librería más bonita del mundo — el primero en decirte que fue injusta es el argentino que tienes más cerca.",
          "en": "The world's most beautiful bookshop, built inside a 1919 opera theatre where the boxes became shelves and the stage became a café. National Geographic named it the second most beautiful bookshop in the world — the first Argentine you ask will tell you that was unjust."
        },
        "rating": 4.9,
        "priceRange": "Gratis",
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour literario Buenos Aires",
              "en": "Buenos Aires literary tour"
            },
            "partner": "getyourguide",
            "query": "buenos aires bookshop literary tour ateneo",
            "type": "activity"
          }
        ]
      }
    ],
    "events": [
      {
        "name": "Festival Mundial de Tango",
        "type": "cultural",
        "date": "Ago 2026",
        "venue": "Toda la ciudad",
        "urgency": true,
        "description": {
          "es": "El mayor evento de tango del mundo durante dos semanas de agosto: milongas en el Luna Park, clases gratuitas en la calle, el Campeonato Mundial de Tango y actuaciones en espacios que van desde el Teatro Colón hasta las plazas de San Telmo. Si hay un solo momento para estar en Buenos Aires, es este — aunque el tango aquí es imprescindible los 365 días.",
          "en": "The world's largest tango event across two August weeks: milongas at the Luna Park, free lessons in the street, the World Tango Championship and performances in spaces ranging from the Teatro Colón to San Telmo's plazas. If there is one moment to be in Buenos Aires, this is it — though tango here is essential all 365 days."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Entradas Festival Tango BA",
              "en": "Buenos Aires Tango Festival tickets"
            },
            "partner": "ticketmaster",
            "query": "festival mundial tango buenos aires agosto 2026",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Clases y milongas Festival",
              "en": "Festival tango classes and milongas"
            },
            "partner": "getyourguide",
            "query": "buenos aires tango festival world championship 2026",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Primavera Sound Buenos Aires",
        "type": "festival",
        "date": "Nov 2026",
        "venue": "Hipódromo de Palermo",
        "urgency": true,
        "description": {
          "es": "La expansión sudamericana del festival barcelonés lleva cinco años consolidándose como el mejor festival de rock e indie de Latinoamérica. El cartel de 2026 no se ha anunciado pero el historial de las últimas ediciones — Blur, Arcade Fire, The National, Radiohead-style headliners — indica que las entradas se agotan en 48 horas después del anuncio. Esto es solo un aviso.",
          "en": "The South American expansion of the Barcelona festival has spent five years establishing itself as Latin America's finest rock and indie festival. The 2026 lineup has not been announced but the history of recent editions — Blur, Arcade Fire, The National, Radiohead-calibre headliners — suggests tickets sell out within 48 hours of the announcement. Consider this a heads-up."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Entradas Primavera Sound BA",
              "en": "Primavera Sound BA tickets"
            },
            "partner": "ticketmaster",
            "query": "primavera sound buenos aires noviembre 2026",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Reventa verificada",
              "en": "Verified resale"
            },
            "partner": "stubhub",
            "query": "primavera sound buenos aires 2026 festival",
            "type": "tickets"
          }
        ]
      },
      {
        "name": "Feria Internacional del Libro de Buenos Aires",
        "type": "cultural",
        "date": "Abr–May 2026",
        "venue": "La Rural, Palermo",
        "urgency": false,
        "description": {
          "es": "Una de las ferias del libro más grandes del mundo hispanohablante, con un millón de visitantes en tres semanas y la ciudad que tiene más librerías por habitante del planeta como anfitriota. Presentaciones, debates, firmas y la posibilidad real de que el escritor que más admiras esté firmando en el stand de al lado mientras tú estás mirando libros de segunda mano en el pasillo.",
          "en": "One of the largest book fairs in the Spanish-speaking world, with a million visitors over three weeks and the city with the most bookshops per capita on the planet as host. Presentations, debates, signings and the real possibility that the author you most admire is signing copies at the next stand while you browse second-hand books in the aisle."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Experiencia Feria del Libro BA",
              "en": "Buenos Aires Book Fair experience"
            },
            "partner": "getyourguide",
            "query": "feria libro buenos aires 2026 tour cultural",
            "type": "activity"
          },
          {
            "label": {
              "es": "Tour barrio literario BA",
              "en": "Buenos Aires literary neighbourhood tour"
            },
            "partner": "viator",
            "query": "buenos aires book fair literary palermo tour",
            "type": "activity"
          }
        ]
      }
    ],
    "services": {
      "flights": [
        "skyscanner",
        "kiwi"
      ],
      "hotels": [
        "booking",
        "hostelworld",
        "vrbo"
      ],
      "cars": [
        "discovercars",
        "rentalcars",
        "localrent"
      ],
      "activities": [
        "getyourguide",
        "viator",
        "tiqets",
        "civitatis",
        "klook"
      ],
      "restaurants": [
        "opentable"
      ],
      "insurance": [
        "safetywing",
        "worldnomads"
      ],
      "esim": [
        "airalo",
        "holafly",
        "saily",
        "yesim"
      ],
      "transfers": [
        "intui",
        "welcomepickups",
        "gettransfer",
        "indrive"
      ]
    }
  },
  {
    "id": 16,
    "slug": "estambul-guia-2026",
    "enSlug": "istanbul-guide-2026",
    "narrator": "sofia",
    "heroImage": "https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1200&q=80",
    "city": {
      "es": "Estambul",
      "en": "Istanbul"
    },
    "country": {
      "es": "Turquía",
      "en": "Turkey"
    },
    "emoji": "🕌",
    "date": "2026-03-09",
    "readTime": "9 min",
    "category": "europe",
    "title": {
      "es": "Estambul: Donde Europa y Asia Comparten el Mismo Horizonte",
      "en": "Istanbul: Where Europe and Asia Share the Same Horizon"
    },
    "subtitle": {
      "es": "Mezquitas, bazares, bósforo y la ciudad que lleva dos milenios siendo el centro del mundo",
      "en": "Mosques, bazaars, the Bosphorus and the city that has been the centre of the world for two millennia"
    },
    "excerpt": {
      "es": "Estambul no es solo una ciudad entre dos continentes: es una ciudad que contiene dos civilizaciones enteras y las mezcla con una naturalidad desconcertante. El Cuerno de Oro al atardecer, el Bósforo con los cargueros y las gaviotas, los alminares al amanecer.",
      "en": "Istanbul is not just a city between two continents: it is a city that contains two entire civilisations and blends them with disconcerting ease. The Golden Horn at sunset, the Bosphorus with cargo ships and seagulls, minarets at dawn."
    },
    "metaDescription": {
      "es": "Guía completa Estambul 2026: Hagia Sophia, Gran Bazar, Bósforo, barrio de Beyoğlu y la mejor gastronomía otomana. Con consejos para no perderse nada.",
      "en": "Complete Istanbul 2026 guide: Hagia Sophia, Grand Bazaar, Bosphorus, Beyoğlu district and the finest Ottoman cuisine. Tips for missing nothing."
    },
    "keywords": {
      "es": [
        "guía estambul",
        "estambul 2026",
        "qué ver en estambul",
        "hagia sophia",
        "gran bazar",
        "bósforo turquía"
      ],
      "en": [
        "istanbul guide",
        "istanbul 2026",
        "things to do istanbul",
        "hagia sophia",
        "grand bazaar",
        "bosphorus turkey"
      ]
    },
    "pointsOfInterest": [
      {
        "name": "Hagia Sophia",
        "type": "Monumento",
        "lat": 41.0086,
        "lng": 28.9802,
        "description": {
          "es": "Construida en el año 537, fue durante casi un milenio la mayor catedral del mundo, luego mezquita otomana, luego museo y desde 2020 mezquita de nuevo. Cada capa histórica es visible: los mosaicos bizantinos dorados conviven con las caligrafías islámicas. Es el único edificio del mundo que contiene dos imperios en sus paredes.",
          "en": "Built in 537, for nearly a millennium it was the world's largest cathedral, then an Ottoman mosque, then a museum, and since 2020 a mosque once more. Every historical layer is visible: golden Byzantine mosaics coexist with Islamic calligraphy. It is the only building in the world that contains two empires within its walls."
        },
        "rating": 4.9,
        "priceRange": "Gratis / Free",
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour guiado Hagia Sophia + Topkapi",
              "en": "Hagia Sophia + Topkapi guided tour"
            },
            "partner": "getyourguide",
            "query": "hagia sophia topkapi palace istanbul tour",
            "type": "activity"
          },
          {
            "label": {
              "es": "Visita Hagia Sophia sin colas",
              "en": "Skip-the-line Hagia Sophia"
            },
            "partner": "civitatis",
            "query": "hagia sophia istanbul skip line",
            "type": "tickets"
          }
        ]
      },
      {
        "name": "Gran Bazar (Kapalıçarşı)",
        "type": "Mercado",
        "lat": 41.0108,
        "lng": 28.968,
        "description": {
          "es": "El mercado cubierto más grande del mundo: 61 calles cubiertas, más de 3.000 tiendas y el arte elevado del regateo. Hay lámparas de mosaico, alfombras turcas, especias y cerámica. Entra sin prisa, acepta el té que te ofrecerán, negocia sin prisa y sal con algo que no necesitabas pero que ahora es imprescindible.",
          "en": "The world's largest covered market: 61 covered streets, over 3,000 shops and the elevated art of bargaining. Mosaic lamps, Turkish carpets, spices and ceramics. Enter unhurried, accept the tea you'll be offered, negotiate without rushing, and leave with something you didn't need but now cannot live without."
        },
        "rating": 4.7,
        "priceRange": "Gratis / Free",
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour gastronómico Bazar de las Especias",
              "en": "Spice Bazaar food tour"
            },
            "partner": "viator",
            "query": "istanbul spice bazaar food tour grand bazaar",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Palacio de Topkapi",
        "type": "Palacio",
        "lat": 41.0115,
        "lng": 28.9833,
        "description": {
          "es": "El corazón del Imperio Otomano durante cuatro siglos. El Harén, la Sala del Trono y el Tesoro del Sultán — que incluye el Diamante del Esponjero de 86 quilates — son algunos de los interiores más fascinantes del mundo islámico.",
          "en": "The heart of the Ottoman Empire for four centuries. The Harem, the Throne Room and the Sultan's Treasury — which includes the 86-carat Spoonmaker's Diamond — are among the most fascinating interiors in the Islamic world."
        },
        "rating": 4.8,
        "priceRange": "€18",
        "affiliateLinks": [
          {
            "label": {
              "es": "Entrada Topkapi + Harén",
              "en": "Topkapi + Harem ticket"
            },
            "partner": "tiqets",
            "query": "topkapi palace harem istanbul",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Tour guiado Topkapi",
              "en": "Guided Topkapi tour"
            },
            "partner": "getyourguide",
            "query": "topkapi palace guided tour istanbul 2026",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Crucero por el Bósforo",
        "type": "Actividad",
        "lat": 41.0451,
        "lng": 29.032,
        "description": {
          "es": "El estrecho que divide Europa de Asia. Un crucero al atardecer desde el puente de Gálata hasta el segundo puente del Bósforo muestra los yalıs de madera del siglo XIX, los palacios imperiales a orillas del agua y el tráfico constante de cargueros que conectan el Mediterráneo con el Mar Negro.",
          "en": "The strait that divides Europe from Asia. A sunset cruise from the Galata Bridge to the Second Bosphorus Bridge reveals 19th-century wooden yalı mansions, imperial palaces on the waterfront and the constant traffic of cargo ships connecting the Mediterranean to the Black Sea."
        },
        "rating": 4.8,
        "priceRange": "€15–30",
        "affiliateLinks": [
          {
            "label": {
              "es": "Crucero al atardecer por el Bósforo",
              "en": "Bosphorus sunset cruise"
            },
            "partner": "civitatis",
            "query": "bosphorus sunset cruise istanbul 2026",
            "type": "activity"
          },
          {
            "label": {
              "es": "Tour Bósforo + dos continentes",
              "en": "Bosphorus two continents tour"
            },
            "partner": "viator",
            "query": "bosphorus cruise two continents istanbul",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Barrio de Beyoğlu y Torre de Gálata",
        "type": "Barrio",
        "lat": 41.0255,
        "lng": 28.9744,
        "description": {
          "es": "La orilla europea moderna de Estambul. La calle İstiklal es la arteria comercial y cultural de la ciudad contemporánea, y la Torre de Gálata del siglo XIV domina el horizonte con las mejores vistas del Cuerno de Oro y el casco histórico desde lo alto.",
          "en": "Istanbul's modern European shore. İstiklal Avenue is the commercial and cultural artery of the contemporary city, and the 14th-century Galata Tower dominates the skyline with the finest views of the Golden Horn and the historic peninsula from its top."
        },
        "rating": 4.6,
        "affiliateLinks": [
          {
            "label": {
              "es": "Entrada Torre Gálata",
              "en": "Galata Tower ticket"
            },
            "partner": "tiqets",
            "query": "galata tower istanbul ticket",
            "type": "tickets"
          }
        ]
      }
    ],
    "events": [
      {
        "name": "Festival Internacional de Cine de Estambul",
        "type": "cultural",
        "date": "Abr 2026",
        "venue": "Varios cines, Beyoğlu",
        "urgency": false,
        "description": {
          "es": "Uno de los festivales de cine más importantes del mundo islámico y del Mediterráneo oriental, con proyecciones en los cines históricos de Beyoğlu. Películas turcas, griegas, iraníes y árabes que nunca verás en ninguna plataforma de streaming.",
          "en": "One of the most important film festivals in the Islamic world and eastern Mediterranean, with screenings in Beyoğlu's historic cinemas. Turkish, Greek, Iranian and Arabic films you'll never find on any streaming platform."
        },
        "affiliateLinks": []
      },
      {
        "name": "Festival de Tulipanes de Estambul",
        "type": "festival",
        "date": "Abr 2026",
        "venue": "Parque Emirgan, Gülhane",
        "urgency": false,
        "description": {
          "es": "Cada abril, Estambul se convierte en la ciudad más colorida del mundo. El Parque Emirgan y los jardines de Gülhane, junto al palacio de Topkapi, se llenan de millones de tulipanes de cientos de variedades. El tulipán llegó a Europa desde Turquía — esto es la fuente.",
          "en": "Every April, Istanbul becomes the world's most colourful city. Emirgan Park and the Gülhane gardens, beside Topkapi Palace, fill with millions of tulips in hundreds of varieties. The tulip reached Europe from Turkey — this is the source."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour jardines y tulipanes",
              "en": "Tulip gardens tour"
            },
            "partner": "getyourguide",
            "query": "istanbul tulip festival gardens tour april",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Noche de Música Tradicional Turca (Sufi)",
        "type": "cultural",
        "date": "Todo el año",
        "venue": "Hodjapasha Cultural Centre",
        "urgency": false,
        "description": {
          "es": "Los derviches giróvagos del sufismo en la ceremonia del Sema: música mística ottomana en vivo, mientras los derviches giran en un estado de meditación. Una experiencia que solo existe en Turquía y que no se puede describir sin haberla visto.",
          "en": "The whirling dervishes of Sufism in the Sema ceremony: live Ottoman mystical music as the dervishes spin in a meditative state. An experience that exists only in Turkey and cannot be described without having witnessed it."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Entradas Dervishes giróvagos",
              "en": "Whirling Dervishes tickets"
            },
            "partner": "civitatis",
            "query": "whirling dervishes istanbul sema ceremony",
            "type": "tickets"
          }
        ]
      },
      {
        "name": "Istanbul Jazz Festival",
        "type": "festival",
        "date": "Jul 2026",
        "venue": "Varios escenarios, Estambul",
        "urgency": false,
        "description": {
          "es": "Más de 70 conciertos en quince días repartidos por los escenarios más bellos de la ciudad: jardines de palacios, claustros otomanos y la terraza del SALT Galata con vistas al Bósforo. Jazz, world music y fusión anatoliana que mezcla los dos hemisferios de la ciudad.",
          "en": "Over 70 concerts across fifteen days in the city's most beautiful venues: palace gardens, Ottoman cloisters and the SALT Galata rooftop overlooking the Bosphorus. Jazz, world music and Anatolian fusion that blends both hemispheres of the city."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Entradas Istanbul Jazz Festival",
              "en": "Istanbul Jazz Festival tickets"
            },
            "partner": "ticketmaster",
            "query": "istanbul jazz festival 2026",
            "type": "tickets"
          }
        ]
      }
    ],
    "services": {
      "flights": [
        "skyscanner",
        "kiwi"
      ],
      "hotels": [
        "booking",
        "hostelworld",
        "vrbo"
      ],
      "activities": [
        "getyourguide",
        "viator",
        "civitatis",
        "tiqets"
      ],
      "restaurants": [
        "thefork"
      ],
      "insurance": [
        "safetywing",
        "worldnomads"
      ],
      "esim": [
        "airalo",
        "holafly",
        "saily"
      ],
      "transfers": [
        "welcomepickups",
        "gettransfer",
        "indrive"
      ]
    }
  },
  {
    "id": 17,
    "slug": "ciudad-del-cabo-guia-2026",
    "enSlug": "cape-town-guide-2026",
    "narrator": "marcos",
    "heroImage": "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=1200&q=80",
    "city": {
      "es": "Ciudad del Cabo",
      "en": "Cape Town"
    },
    "country": {
      "es": "Sudáfrica",
      "en": "South Africa"
    },
    "emoji": "🦁",
    "date": "2026-03-09",
    "readTime": "9 min",
    "category": "africa",
    "title": {
      "es": "Ciudad del Cabo: El Fin del Mundo con Vistas a Dos Océanos",
      "en": "Cape Town: The End of the World with Views of Two Oceans"
    },
    "subtitle": {
      "es": "Montaña de la Mesa, cabo de Buena Esperanza, viñedos del Cabo y el país que más sorprende a quien llega sin expectativas",
      "en": "Table Mountain, Cape of Good Hope, Cape Winelands and the country that surprises most those who arrive without expectations"
    },
    "excerpt": {
      "es": "Ciudad del Cabo es una de esas ciudades que no necesitan justificarse. Montaña de la Mesa cayendo sobre el océano, pingüinos en la playa, viñedos a media hora y la gastronomía más interesante del continente africano.",
      "en": "Cape Town is one of those cities that needs no justification. Table Mountain falling into the ocean, penguins on the beach, vineyards half an hour away and the most interesting cuisine on the African continent."
    },
    "metaDescription": {
      "es": "Guía Ciudad del Cabo 2026: Montaña de la Mesa, Cabo de Buena Esperanza, Robben Island, De Waterkant y la Ruta del Vino. Todo lo que necesitas saber.",
      "en": "Cape Town 2026 guide: Table Mountain, Cape of Good Hope, Robben Island, De Waterkant and the Wine Route. Everything you need to know."
    },
    "keywords": {
      "es": [
        "ciudad del cabo",
        "cape town 2026",
        "qué ver ciudad del cabo",
        "montaña de la mesa",
        "cabo de buena esperanza",
        "sudáfrica viaje"
      ],
      "en": [
        "cape town guide",
        "cape town 2026",
        "things to do cape town",
        "table mountain",
        "cape of good hope",
        "south africa travel"
      ]
    },
    "pointsOfInterest": [
      {
        "name": "Montaña de la Mesa",
        "type": "Naturaleza",
        "lat": -33.9628,
        "lng": 18.4098,
        "description": {
          "es": "La montaña que define la ciudad. La meseta cubre 3 km de longitud a 1.086 metros de altura y domina Ciudad del Cabo con una presencia que hace que la ciudad entera parezca construida a sus pies por reverencia. El teleférico giratorio es la manera más práctica de subir; el senderismo desde Signal Hill o Platteklip Gorge es la más memorable.",
          "en": "The mountain that defines the city. The plateau extends 3km at 1,086 metres and dominates Cape Town with a presence that makes the entire city seem built at its feet in reverence. The rotating cable car is the most practical way up; hiking from Signal Hill or Platteklip Gorge is the most memorable."
        },
        "rating": 4.9,
        "priceRange": "€20 (teleférico)",
        "affiliateLinks": [
          {
            "label": {
              "es": "Entradas teleférico Montaña de la Mesa",
              "en": "Table Mountain cable car ticket"
            },
            "partner": "civitatis",
            "query": "table mountain cable car cape town ticket",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Tour senderismo Montaña de la Mesa",
              "en": "Table Mountain hiking tour"
            },
            "partner": "getyourguide",
            "query": "table mountain hiking tour cape town 2026",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Cabo de Buena Esperanza",
        "type": "Naturaleza",
        "lat": -34.3568,
        "lng": 18.4734,
        "description": {
          "es": "El punto más sudoccidental de África, donde el Atlántico y el Índico se agitan bajo los acantilados. El Parque Nacional de la Península del Cabo incluye babucinos en las carreteras, avestruces en los matorrales de fynbos y el faro de Cape Point con sus 239 escalones y vistas a dos océanos.",
          "en": "The southwesternmost point of Africa, where the Atlantic and Indian Oceans churn beneath the cliffs. The Cape Peninsula National Park includes baboons on the roads, ostriches in the fynbos scrubland, and the Cape Point lighthouse with its 239 steps and views of two oceans."
        },
        "rating": 4.8,
        "priceRange": "€15",
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour Cabo de Buena Esperanza + pingüinos",
              "en": "Cape of Good Hope + penguins tour"
            },
            "partner": "viator",
            "query": "cape of good hope cape point penguins boulders beach tour",
            "type": "activity"
          },
          {
            "label": {
              "es": "Tour península del Cabo día completo",
              "en": "Full day Cape Peninsula tour"
            },
            "partner": "getyourguide",
            "query": "cape peninsula full day tour cape town 2026",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Robben Island",
        "type": "Monumento",
        "lat": -33.8058,
        "lng": 18.3665,
        "description": {
          "es": "La isla donde Nelson Mandela estuvo encarcelado 18 de sus 27 años de prisión. Los recorridos son guiados por ex presos políticos que vivieron en la isla — no hay forma más directa de entender lo que el apartheid significó en la vida de personas reales.",
          "en": "The island where Nelson Mandela was imprisoned for 18 of his 27 years of incarceration. Tours are guided by former political prisoners who lived on the island — there is no more direct way to understand what apartheid meant in the lives of real people."
        },
        "rating": 4.8,
        "priceRange": "€28",
        "affiliateLinks": [
          {
            "label": {
              "es": "Ferry + tour Robben Island",
              "en": "Robben Island ferry + tour"
            },
            "partner": "civitatis",
            "query": "robben island ferry tour cape town mandela",
            "type": "tickets"
          }
        ]
      },
      {
        "name": "Playa de Boulders (Colonia de pingüinos)",
        "type": "Naturaleza",
        "lat": -34.1966,
        "lng": 18.4508,
        "description": {
          "es": "Una colonia de pingüinos africanos que vive en la playa de Boulders, en la pequeña ciudad de Simon's Town. Los pingüinos caminan entre los bañistas con una indiferencia absoluta que resulta completamente irresistible. Es una de las pocas playas del mundo donde puedes bañarte junto a pingüinos salvajes.",
          "en": "A colony of African penguins living on Boulders Beach in the small town of Simon's Town. The penguins walk among the swimmers with absolute indifference that proves entirely irresistible. It is one of the few beaches in the world where you can swim alongside wild penguins."
        },
        "rating": 4.7,
        "priceRange": "€10",
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour Simon's Town + pingüinos",
              "en": "Simon's Town + penguins tour"
            },
            "partner": "getyourguide",
            "query": "boulders beach penguins simons town cape town tour",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Barrio Bo-Kaap",
        "type": "Barrio",
        "lat": -33.9185,
        "lng": 18.415,
        "description": {
          "es": "El barrio de las casas de colores intensos en la ladera de Signal Hill. El corazón de la comunidad Malay Cape Town — descendientes de los esclavos traídos por los holandeses del sudeste asiático en el siglo XVII. La mezquita de Nurul Islam, el Museo Bo-Kaap y la gastronomía Malay Cape son únicas en el continente africano.",
          "en": "The neighbourhood of brightly coloured houses on the slopes of Signal Hill. The heart of Cape Town's Malay community — descendants of the slaves brought by the Dutch from Southeast Asia in the 17th century. The Nurul Islam Mosque, the Bo-Kaap Museum and Cape Malay cuisine are unique on the African continent."
        },
        "rating": 4.6,
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour Bo-Kaap + cocina Cape Malay",
              "en": "Bo-Kaap + Cape Malay cooking tour"
            },
            "partner": "viator",
            "query": "bo-kaap cape malay cooking tour cape town",
            "type": "activity"
          }
        ]
      }
    ],
    "events": [
      {
        "name": "Cape Town Jazz Festival",
        "type": "festival",
        "date": "Mar 2026",
        "venue": "Cape Town International Convention Centre",
        "urgency": false,
        "description": {
          "es": "El festival de jazz más grande de África: más de 40 artistas en dos días en el CTICC. Jazz sudafricano, afrobeat, soul y R&B en el evento cultural más importante del calendario capetoniano. La fusión de jazz americano con ritmos del continente africano produce algo que no se escucha en ningún otro festival del mundo.",
          "en": "The largest jazz festival in Africa: over 40 artists across two days at the CTICC. South African jazz, afrobeat, soul and R&B at the most important cultural event on the Cape Town calendar. The fusion of American jazz with African continental rhythms produces something heard at no other festival in the world."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Entradas Cape Town Jazz Festival",
              "en": "Cape Town Jazz Festival tickets"
            },
            "partner": "ticketmaster",
            "query": "cape town jazz festival 2026 south africa",
            "type": "tickets"
          }
        ]
      },
      {
        "name": "Ruta del Vino del Cabo: Vendimia",
        "type": "gastronomy",
        "date": "Feb-Mar 2026",
        "venue": "Stellenbosch, Franschhoek, Paarl",
        "urgency": false,
        "description": {
          "es": "La región vinícola del Cabo produce algunos de los mejores vinos del mundo a precios que en Europa no son posibles: Pinotage, Chenin Blanc y Shiraz de Stellenbosch y Franschhoek durante la temporada de vendimia. Las bodegas más históricas — Boschendal, Spier, Vergelegen — tienen tours y catas abiertas.",
          "en": "The Cape Winelands produce some of the world's finest wines at prices impossible in Europe: Pinotage, Chenin Blanc and Stellenbosch and Franschhoek Shiraz during harvest season. The most historic estates — Boschendal, Spier, Vergelegen — offer tours and open tastings."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour vinícola Stellenbosch y Franschhoek",
              "en": "Stellenbosch & Franschhoek wine tour"
            },
            "partner": "getyourguide",
            "query": "stellenbosch franschhoek wine tour cape town 2026",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Cape Town Carnival",
        "type": "festival",
        "date": "Mar 2026",
        "venue": "Green Point, Fan Walk",
        "urgency": false,
        "description": {
          "es": "El mayor espectáculo callejero del continente africano: carrozas, trajes elaborados y la energía de una ciudad que celebra su diversidad cultural. El carnaval de Ciudad del Cabo fusiona influencias Malay Cape, africanas, europeas y contemporáneas en dos horas de desfile que llenan de color la Green Point.",
          "en": "The largest street spectacle on the African continent: floats, elaborate costumes and the energy of a city celebrating its cultural diversity. Cape Town Carnival fuses Cape Malay, African, European and contemporary influences into two hours of parade that fill Green Point with colour."
        },
        "affiliateLinks": []
      }
    ],
    "services": {
      "flights": [
        "skyscanner",
        "kiwi"
      ],
      "hotels": [
        "booking",
        "hostelworld",
        "vrbo"
      ],
      "activities": [
        "getyourguide",
        "viator",
        "civitatis"
      ],
      "insurance": [
        "safetywing",
        "worldnomads"
      ],
      "esim": [
        "airalo",
        "holafly",
        "saily"
      ],
      "transfers": [
        "welcomepickups",
        "gettransfer"
      ],
      "cars": [
        "discovercars",
        "rentalcars"
      ]
    }
  },
  {
    "id": 18,
    "slug": "singapur-guia-2026",
    "enSlug": "singapore-guide-2026",
    "narrator": "sofia",
    "heroImage": "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=1200&q=80",
    "city": {
      "es": "Singapur",
      "en": "Singapore"
    },
    "country": {
      "es": "Singapur",
      "en": "Singapore"
    },
    "emoji": "🦁",
    "date": "2026-03-09",
    "readTime": "8 min",
    "category": "asia",
    "title": {
      "es": "Singapur: El Futuro Construido en el Presente, con Jardines",
      "en": "Singapore: The Future Built in the Present, with Gardens"
    },
    "subtitle": {
      "es": "Marina Bay, jardines verticales, hawker centres y la ciudad-estado que lo hace todo con una eficiencia que el resto del mundo observa con envidia",
      "en": "Marina Bay, vertical gardens, hawker centres and the city-state that does everything with an efficiency the rest of the world watches with envy"
    },
    "excerpt": {
      "es": "Singapur es la ciudad que te hace replantearte lo que una ciudad puede ser. Jardines dentro de edificios, árboles artificiales con vistas al Índico, sistemas de transporte que funcionan exactamente como dicen que funcionan y la mejor gastronomía callejera del planeta.",
      "en": "Singapore is the city that makes you rethink what a city can be. Gardens inside buildings, artificial trees with views to the Indian Ocean, transport systems that work exactly as advertised and the finest street food on the planet."
    },
    "metaDescription": {
      "es": "Guía Singapur 2026: Gardens by the Bay, Marina Bay Sands, Chinatown, Little India, hawker centres y qué hacer en este destino asiático único. Todo lo esencial.",
      "en": "Singapore 2026 guide: Gardens by the Bay, Marina Bay Sands, Chinatown, Little India, hawker centres and what to do in this unique Asian destination. All the essentials."
    },
    "keywords": {
      "es": [
        "guía singapur",
        "singapur 2026",
        "qué ver en singapur",
        "gardens by the bay",
        "marina bay sands",
        "hawker centres singapur"
      ],
      "en": [
        "singapore guide",
        "singapore 2026",
        "things to do singapore",
        "gardens by the bay",
        "marina bay sands",
        "singapore hawker centres"
      ]
    },
    "pointsOfInterest": [
      {
        "name": "Gardens by the Bay",
        "type": "Parque",
        "lat": 1.2816,
        "lng": 103.8636,
        "description": {
          "es": "Los Supertrees — árboles artificiales de hasta 50 metros de altura cubiertos de plantas verticales y conectados por una pasarela aérea — son el símbolo más fotogénico de la Singapur contemporánea. El Cloud Forest, con su cascada interior de 35 metros dentro de un domo refrigerado, es uno de los espacios más extraordinarios del planeta.",
          "en": "The Supertrees — artificial trees up to 50 metres tall covered in vertical gardens and connected by a skybridge — are the most photogenic symbol of contemporary Singapore. The Cloud Forest, with its 35-metre indoor waterfall inside a cooled dome, is one of the most extraordinary spaces on earth."
        },
        "rating": 4.9,
        "priceRange": "€25 (domes)",
        "affiliateLinks": [
          {
            "label": {
              "es": "Entrada Gardens by the Bay + domes",
              "en": "Gardens by the Bay + domes ticket"
            },
            "partner": "klook",
            "query": "gardens by the bay supertree cloud forest singapore ticket",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Tour nocturno Garden Rhapsody",
              "en": "Garden Rhapsody night show"
            },
            "partner": "getyourguide",
            "query": "gardens by the bay night show singapore supertree grove",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Marina Bay Sands & Skypark",
        "type": "Arquitectura",
        "lat": 1.2838,
        "lng": 103.8607,
        "description": {
          "es": "El hotel con la piscina infinita más famosa del mundo — en la cubierta de tres torres de 57 pisos — y el Skypark de acceso público con las mejores vistas del horizonte de Singapur. La piscina solo está disponible para huéspedes, pero el Skypark es accesible para todos con entrada.",
          "en": "The hotel with the world's most famous infinity pool — on the roof deck of three 57-storey towers — and the publicly accessible SkyPark with the finest views of the Singapore skyline. The pool is guests-only, but the SkyPark is accessible to all with a ticket."
        },
        "rating": 4.8,
        "priceRange": "€20 (Skypark)",
        "affiliateLinks": [
          {
            "label": {
              "es": "Entrada Marina Bay Sands Skypark",
              "en": "Marina Bay Sands SkyPark ticket"
            },
            "partner": "klook",
            "query": "marina bay sands skypark observation deck singapore",
            "type": "tickets"
          }
        ]
      },
      {
        "name": "Hawker Centres: Chinatown & Maxwell",
        "type": "Gastronomía",
        "lat": 1.2812,
        "lng": 103.8445,
        "description": {
          "es": "Los mercados de comida callejera de Singapur son Patrimonio Cultural de la Humanidad por la UNESCO — el único del mundo en esa categoría. El Maxwell Food Centre y el Chinatown Complex Food Centre concentran décadas de tradición culinaria china, malaya e india en puestos que llevan abiertos desde los años 60. El Hainanese Chicken Rice de Tian Tian en Maxwell tiene lista de espera a mediodía.",
          "en": "Singapore's hawker centres are UNESCO Intangible Cultural Heritage — the only street food tradition in the world in that category. The Maxwell Food Centre and the Chinatown Complex Food Centre concentrate decades of Chinese, Malay and Indian culinary tradition in stalls that have been open since the 1960s. Tian Tian's Hainanese Chicken Rice at Maxwell has a queue at midday."
        },
        "rating": 4.8,
        "priceRange": "€3–8",
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour gastronómico hawker centres",
              "en": "Hawker centres food tour"
            },
            "partner": "viator",
            "query": "singapore hawker centre food tour chinatown maxwell",
            "type": "activity"
          },
          {
            "label": {
              "es": "Tour nocturno gastronomía callejera",
              "en": "Night street food tour"
            },
            "partner": "getyourguide",
            "query": "singapore night street food tour hawker centre",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Barrio de Chinatown",
        "type": "Barrio",
        "lat": 1.2823,
        "lng": 103.8444,
        "description": {
          "es": "El barrio chino más ordenado del mundo y también el más auténtico en lo que importa: los templos, la gastronomía y el mercado nocturno de Pagoda Street. El Templo Sri Mariamman, el Templo de Buddha Tooth Relic y la mezquita Jamae Chulia coexisten en tres manzanas — tres civilizaciones en el mismo vecindario.",
          "en": "The world's most orderly Chinatown and also the most authentic in what matters: the temples, the food and the Pagoda Street night market. The Sri Mariamman Temple, the Buddha Tooth Relic Temple and the Jamae Chulia Mosque coexist within three blocks — three civilisations in the same neighbourhood."
        },
        "rating": 4.7,
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour cultural Chinatown + Little India",
              "en": "Chinatown + Little India cultural tour"
            },
            "partner": "civitatis",
            "query": "chinatown little india cultural tour singapore",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Sentosa Island & Universal Studios",
        "type": "Entretenimiento",
        "lat": 1.2494,
        "lng": 103.8303,
        "description": {
          "es": "La isla de ocio de Singapur: Universal Studios Asia, el casino del Marina Bay Sands, playas artificiales y el teleférico desde Mount Faber. Universal Studios Singapore tiene las atracciones de Minions, Transformers y la Zona de Harry Potter en su versión más nueva y tecnológica.",
          "en": "Singapore's entertainment island: Universal Studios Asia, the Marina Bay Sands casino, artificial beaches and the cable car from Mount Faber. Universal Studios Singapore has the Minions, Transformers and the most technologically advanced Harry Potter zone of any of its parks."
        },
        "rating": 4.6,
        "priceRange": "€65 (Universal Studios)",
        "affiliateLinks": [
          {
            "label": {
              "es": "Entradas Universal Studios Singapore",
              "en": "Universal Studios Singapore tickets"
            },
            "partner": "klook",
            "query": "universal studios singapore ticket 2026",
            "type": "tickets"
          }
        ]
      }
    ],
    "events": [
      {
        "name": "Singapore Food Festival",
        "type": "gastronomy",
        "date": "Jul 2026",
        "venue": "Diversos venues, Singapur",
        "urgency": false,
        "description": {
          "es": "El festival gastronómico anual que celebra la identidad culinaria única de Singapur: chefs estrella, cenas pop-up en localizaciones históricas y competiciones de hawker food que reúnen a los mejores puestos de la ciudad. La mejor semana del año para comer en Singapur, si eso es posible.",
          "en": "The annual food festival celebrating Singapore's unique culinary identity: Michelin-starred chefs, pop-up dinners in historic locations and hawker food competitions bringing together the city's finest stalls. The best week of the year to eat in Singapore, if that is even possible."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour gastronómico Singapore Food Festival",
              "en": "Singapore Food Festival culinary tour"
            },
            "partner": "getyourguide",
            "query": "singapore food festival culinary tour 2026",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Formula 1 Singapore Grand Prix",
        "type": "sport",
        "date": "Sep 2026",
        "venue": "Marina Bay Street Circuit",
        "urgency": true,
        "description": {
          "es": "El único Gran Premio de Fórmula 1 que se corre de noche: el circuito urbano de Marina Bay iluminado con 1.500 proyectores recorre la bahía con el skyline de la ciudad como telón de fondo. Uno de los espectáculos más impresionantes del deporte mundial.",
          "en": "The only Formula 1 Grand Prix held at night: the Marina Bay street circuit lit by 1,500 floodlights traces the bay with the city skyline as backdrop. One of the most spectacular spectacles in world sport."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Entradas F1 Singapur 2026",
              "en": "Singapore F1 Grand Prix 2026 tickets"
            },
            "partner": "ticketmaster",
            "query": "singapore formula 1 grand prix 2026 marina bay",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Paquete F1 + hotel Singapur",
              "en": "Singapore F1 + hotel package"
            },
            "partner": "stubhub",
            "query": "singapore f1 grand prix 2026 tickets",
            "type": "tickets"
          }
        ]
      },
      {
        "name": "Deepavali en Little India",
        "type": "cultural",
        "date": "Oct 2026",
        "venue": "Little India, Serangoon Road",
        "urgency": false,
        "description": {
          "es": "El Festival de las Luces hindú transforma Little India en el evento más colorido de Singapur: miles de farolillos de colores, decoraciones en las calles de Serangoon Road, comida india festiva y la energía de la comunidad Tamil celebrando la victoria de la luz sobre la oscuridad.",
          "en": "The Hindu Festival of Lights transforms Little India into Singapore's most colourful event: thousands of coloured lanterns, decorations on Serangoon Road, festive Indian food and the energy of the Tamil community celebrating the victory of light over darkness."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour nocturno Little India Deepavali",
              "en": "Little India Deepavali night tour"
            },
            "partner": "viator",
            "query": "little india deepavali festival night tour singapore",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Singapore Night Festival",
        "type": "art",
        "date": "Ago 2026",
        "venue": "Bras Basah-Bugis, Civic District",
        "urgency": false,
        "description": {
          "es": "Instalaciones de luz y arte contemporáneo en los edificios históricos del Civic District y el barrio de Bras Basah. Las proyecciones sobre la fachada del Museo Nacional, el Singapore Art Museum y los edificios coloniales de Stamford Road son el evento de arte visual más importante del año en Singapur.",
          "en": "Light installations and contemporary art on the historic buildings of the Civic District and Bras Basah neighbourhood. Projections on the façade of the National Museum, the Singapore Art Museum and the colonial buildings of Stamford Road are the most important visual art event of the year in Singapore."
        },
        "affiliateLinks": []
      }
    ],
    "services": {
      "flights": [
        "skyscanner",
        "kiwi"
      ],
      "hotels": [
        "booking",
        "hostelworld",
        "vrbo"
      ],
      "activities": [
        "getyourguide",
        "viator",
        "civitatis",
        "klook"
      ],
      "tickets": [
        "klook",
        "tiqets"
      ],
      "insurance": [
        "safetywing",
        "worldnomads"
      ],
      "esim": [
        "airalo",
        "holafly",
        "saily"
      ],
      "transfers": [
        "welcomepickups",
        "gettransfer",
        "indrive"
      ]
    }
  },
  {
    "id": "kioto-guide-2026",
    "slug": "kioto-guia-2026",
    "enSlug": "kyoto-travel-guide-2026",
    "narrator": "david",
    "heroImage": "https://images.unsplash.com/photo-1528360983277-13d401cdc186?q=80&w=2070&auto=format&fit=crop",
    "city": "Kioto",
    "country": {
      "es": "Japón",
      "en": "Japan"
    },
    "emoji": "🇯🇵",
    "date": "2026-03-12",
    "readTime": "9 min",
    "category": "asia",
    "title": {
      "es": "Kioto 2026: La ciudad que entiendes por la comida antes que por los templos",
      "en": "Kyoto 2026: The City You Understand Through Food Before Temples"
    },
    "subtitle": {
      "es": "Kaiseki, tofu de alta cocina, el Mercado de Nishiki y diez mil torii al amanecer",
      "en": "Kaiseki, high-end tofu, Nishiki Market and ten thousand torii at dawn"
    },
    "excerpt": {
      "es": "Llegué con una lista de restaurantes. Salí con la convicción de que el kaiseki es la forma más sofisticada que existe de comer en el mundo.",
      "en": "I arrived with a list of restaurants. I left convinced that kaiseki is the most sophisticated way of eating in the world."
    },
    "metaDescription": {
      "es": "Guía de Kioto 2026: Mercado de Nishiki, Fushimi Inari al amanecer, kaiseki y el barrio de Gion. Todo lo que necesitas saber antes de ir a Japón.",
      "en": "Kyoto guide 2026: Nishiki Market, Fushimi Inari at dawn, kaiseki and the Gion district. Everything you need to know before visiting Japan."
    },
    "keywords": {
      "es": [
        "kioto 2026",
        "que ver en kioto",
        "fushimi inari",
        "mercado nishiki",
        "kaiseki"
      ],
      "en": [
        "kyoto 2026",
        "what to see in kyoto",
        "fushimi inari",
        "nishiki market",
        "kaiseki dinner"
      ]
    },
    "pointsOfInterest": [
      {
        "name": "Mercado de Nishiki",
        "type": "Mercado",
        "lat": 35.0052,
        "lng": 135.7659,
        "description": {
          "es": "Cuatro cuadras bajo techo, trescientas tiendas y en cada mostrador algo que no has probado y que vas a necesitar probar antes de irte. Los tsukemono en tonalidades que van del morado oscuro al amarillo brillante, las brochetas de tofu frito y los wagashi que parecen pequeñas obras de artesanía comestible.",
          "en": "Four covered blocks, three hundred shops and at every counter something you haven't tried and will need to try before leaving. Tsukemono in tones from deep purple to bright yellow, fried tofu skewers and wagashi that look like small edible artworks."
        },
        "rating": 4.7,
        "priceRange": "Libre",
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour gastronómico Mercado de Nishiki",
              "en": "Nishiki Market food tour"
            },
            "partner": "getyourguide",
            "query": "nishiki market food tour kyoto",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Fushimi Inari",
        "type": "Templo",
        "lat": 34.9671,
        "lng": 135.7727,
        "description": {
          "es": "Diez mil torii naranjas formando túneles hasta la cima del monte Inari. La perspectiva es de una belleza que ninguna foto reproduce del todo. Solución: llegar a las 7:00 de la mañana. El santuario está abierto las 24 horas y antes de las 9 tienes los túneles prácticamente para ti solo.",
          "en": "Ten thousand orange torii forming tunnels up Mount Inari. The tunnel perspective is a beauty no photograph fully reproduces. Solution: arrive at 7am. The shrine is open 24 hours and before 9am you essentially have the tunnels to yourself."
        },
        "rating": 4.9,
        "priceRange": "Gratis",
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour al amanecer Fushimi Inari",
              "en": "Fushimi Inari dawn tour"
            },
            "partner": "getyourguide",
            "query": "fushimi inari early morning tour kyoto",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Arashiyama",
        "type": "Parque",
        "lat": 35.0094,
        "lng": 135.6731,
        "description": {
          "es": "El bosque de bambú (sobreturístico pero merece 20 minutos) y el templo Tenryu-ji con su jardín zen sobre el estanque. También tiene el mejor tofu de la ciudad — Kioto es famosa por su tofu de alta calidad y los restaurantes de Arashiyama lo sirven de formas que convierten algo infrautilizado en Europa en un ingrediente principal con carácter propio.",
          "en": "The bamboo grove (over-touristed but worth 20 minutes) and Tenryu-ji temple with its Zen garden over the pond. It also has the best tofu in the city — Kyoto is famous for high-quality tofu and Arashiyama restaurants serve it in ways that transform a European afterthought into a main ingredient with genuine character."
        },
        "rating": 4.8,
        "priceRange": "€5",
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour por Arashiyama y bambú",
              "en": "Arashiyama bamboo grove tour"
            },
            "partner": "getyourguide",
            "query": "arashiyama bamboo grove temple tour kyoto",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Gion",
        "type": "Barrio",
        "lat": 35.0031,
        "lng": 135.7752,
        "description": {
          "es": "El barrio histórico de las geishas. Al atardecer, entre las 17:00 y las 19:00, la probabilidad de ver a una geiko o maiko caminando hacia su primer compromiso del día es real. No son actores ni una atracción turística — trabajan en la industria del entretenimiento formal más antigua de Japón. Mirar está permitido; interrumpirlas no.",
          "en": "The historic geisha district. At dusk, between 5pm and 7pm, the chance of seeing a geiko or maiko walking to their first evening engagement is real. They're not actors or a tourist attraction — they work in Japan's oldest formal entertainment industry. Looking is fine; interrupting them is not."
        },
        "rating": 4.8,
        "priceRange": "Libre",
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour por Gion al atardecer",
              "en": "Gion dusk walking tour"
            },
            "partner": "civitatis",
            "query": "gion district walking tour kyoto geisha evening",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Kinkaku-ji (Pabellón Dorado)",
        "type": "Templo",
        "lat": 35.0394,
        "lng": 135.7292,
        "description": {
          "es": "El templo cubierto de pan de oro reflejado en el estanque es tan bonito que parece irreal aunque lo estés mirando en directo. El más fotografiado de Japón por razones que se hacen evidentes en el momento en que lo ves. Llega a primera hora; el camino circular dura 30-40 minutos y el acceso está controlado.",
          "en": "The gold-leaf-covered temple reflected in the pond is so beautiful it seems unreal even as you're looking at it directly. The most photographed in Japan for reasons that become evident the moment you see it. Go early; the circular path takes 30-40 minutes and access is controlled."
        },
        "rating": 4.8,
        "priceRange": "€3",
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour templos de Kioto con Kinkaku-ji",
              "en": "Kyoto temples tour with Kinkaku-ji"
            },
            "partner": "getyourguide",
            "query": "kinkakuji golden pavilion kyoto temples tour",
            "type": "activity"
          }
        ]
      }
    ],
    "events": [
      {
        "name": "Hanami — Sakura en Kioto 2026",
        "type": "natural",
        "date": "25 Mar – 10 Abr 2026",
        "venue": "Maruyama Park y ribera del río Kamo",
        "urgency": true,
        "description": {
          "es": "La floración de los cerezos convierte Kioto en la ciudad más hermosa de Japón durante dos semanas. El Maruyama Park con el cerezo lloron iluminado por la noche, el camino del Filósofo bordeado de cerezos sobre el canal y los jardines de Heian Shrine son los puntos de mayor concentración. Reserva alojamiento con meses de antelación — Kioto en hanami se agota antes que Glastonbury.",
          "en": "The cherry blossom turns Kyoto into Japan's most beautiful city for two weeks. Maruyama Park with the illuminated weeping cherry at night, the Philosopher's Path lined with cherry trees over the canal and Heian Shrine gardens are the top spots. Book accommodation months in advance — Kyoto during hanami sells out faster than Glastonbury."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour hanami Kioto al atardecer",
              "en": "Kyoto hanami evening tour"
            },
            "partner": "getyourguide",
            "query": "kyoto cherry blossom hanami evening tour maruyama",
            "type": "activity"
          },
          {
            "label": {
              "es": "Hotel en Kioto durante hanami",
              "en": "Kyoto hotel during hanami season"
            },
            "partner": "booking",
            "query": "kyoto hotel hanami cherry blossom april",
            "type": "hotel"
          }
        ]
      },
      {
        "name": "Gion Matsuri 2026",
        "type": "cultural",
        "date": "Jul 2026",
        "venue": "Barrio de Gion",
        "urgency": false,
        "description": {
          "es": "El festival más importante de Kioto y uno de los tres grandes matsuri de Japón, celebrado durante todo el mes de julio. El punto culminante son los desfiles de carrozas Yamaboko Junko los días 17 y 24 — estructuras de madera de varios pisos decoradas con tapices históricos arrastradas por las calles del centro. El Yoiyama la noche anterior, cuando las carrozas se iluminan y las calles se llenan de personas en yukata, es de los mejores espectáculos del año.",
          "en": "Kyoto's most important festival and one of Japan's three great matsuri, celebrated throughout July. The highlight is the Yamaboko Junko float procession on the 17th and 24th — multi-story wooden structures decorated with historical tapestries pulled through the city centre. The Yoiyama the night before, when the floats are illuminated and streets fill with people in yukata, is one of the year's best spectacles."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Experiencia Gion Matsuri Kioto",
              "en": "Gion Matsuri Kyoto experience"
            },
            "partner": "getyourguide",
            "query": "gion matsuri kyoto festival july experience",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Daimonji Gozan Okuribi 2026",
        "type": "cultural",
        "date": "16 Ago 2026",
        "venue": "Colinas que rodean Kioto",
        "urgency": false,
        "description": {
          "es": "Cinco hogueras en forma de kanji y símbolos encendidas simultáneamente en las colinas que rodean la ciudad para guiar a los espíritus ancestrales de vuelta al más allá al final del Obon. La más famosa es la Gran Daimonji en el monte Nyoigadake, visible desde casi cualquier punto del norte de la ciudad. El espectáculo dura unos treinta minutos y los puntos de observación se llenan dos horas antes.",
          "en": "Five bonfires in the shape of kanji characters and symbols lit simultaneously on the hills surrounding the city to guide ancestral spirits back to the afterlife at the end of Obon. The most famous is the Great Daimonji on Mount Nyoigadake, visible from almost anywhere in northern Kyoto. The spectacle lasts about thirty minutes and viewing points fill up two hours before."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour Daimonji Kioto agosto",
              "en": "Daimonji Kyoto August fire festival"
            },
            "partner": "getyourguide",
            "query": "daimonji fire festival kyoto august viewpoint",
            "type": "activity"
          }
        ]
      }
    ],
    "services": {
      "flights": [
        "skyscanner",
        "kiwi"
      ],
      "hotels": [
        "booking",
        "hostelworld"
      ],
      "activities": [
        "getyourguide",
        "viator",
        "klook",
        "civitatis"
      ],
      "insurance": [
        "safetywing",
        "worldnomads"
      ],
      "esim": [
        "airalo",
        "saily",
        "yesim"
      ],
      "transfers": [
        "intui",
        "welcomepickups"
      ]
    }
  },
  {
    "id": "phuket-guide-2026",
    "slug": "phuket-guia-2026",
    "enSlug": "phuket-travel-guide-2026",
    "narrator": "marcos",
    "heroImage": "https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?q=80&w=2070&auto=format&fit=crop",
    "city": "Phuket",
    "country": {
      "es": "Tailandia",
      "en": "Thailand"
    },
    "emoji": "🇹🇭",
    "date": "2026-03-12",
    "readTime": "8 min",
    "category": "asia",
    "title": {
      "es": "Phuket 2026: Lo que nadie te dice antes de que llegues",
      "en": "Phuket 2026: What Nobody Tells You Before You Arrive"
    },
    "subtitle": {
      "es": "Phi Phi, Bangla Road de noche, Old Town y por qué la segunda visita siempre es mejor que la primera",
      "en": "Phi Phi, Bangla Road at night, Old Town and why the second visit is always better than the first"
    },
    "excerpt": {
      "es": "Lo voy a decir sin rodeos: Phuket no es para todo el mundo. Y lo digo como alguien que ha ido dos veces.",
      "en": "I'll say it plainly: Phuket isn't for everyone. And I say that as someone who's been twice."
    },
    "metaDescription": {
      "es": "Guía de Phuket 2026: Islas Phi Phi, Bangla Road, Phuket Old Town y las mejores playas. Qué hacer, dónde alojarse y cómo moverse por la isla.",
      "en": "Phuket guide 2026: Phi Phi Islands, Bangla Road, Phuket Old Town and the best beaches. What to do, where to stay and how to get around the island."
    },
    "keywords": {
      "es": [
        "phuket 2026",
        "islas phi phi",
        "bangla road",
        "phuket old town",
        "playas tailandia"
      ],
      "en": [
        "phuket 2026",
        "phi phi islands",
        "bangla road",
        "phuket old town",
        "thailand beaches"
      ]
    },
    "pointsOfInterest": [
      {
        "name": "Islas Phi Phi",
        "type": "Playa",
        "lat": 7.7407,
        "lng": 98.7784,
        "description": {
          "es": "La bahía Maya Bay — la de la película La Playa — tiene el agua turquesa imposible que solo existe en Tailandia y en los protectores de pantalla de los Mac. Salir en barco a las 7 de la mañana antes de que lleguen los tours masivos marca la diferencia entre tener la bahía para ti solo y compartirla con ochocientas personas haciéndose la misma foto.",
          "en": "Maya Bay — the one from The Beach — has the impossible turquoise water that only exists in Thailand and Mac screensavers. Leaving by boat at 7am before the mass tours arrive means the difference between having the bay to yourself and sharing it with eight hundred people taking the exact same photograph."
        },
        "rating": 4.9,
        "priceRange": "€35-60",
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour en barco a las Islas Phi Phi",
              "en": "Phi Phi Islands boat tour"
            },
            "partner": "getyourguide",
            "query": "phi phi islands boat tour phuket maya bay",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Bangla Road",
        "type": "Barrio",
        "lat": 7.8959,
        "lng": 98.2944,
        "description": {
          "es": "Tres cuadras con quince bares por cuadra, cada uno con sus propios DJs, su propio sistema de sonido y su propio concepto. El resultado es una superposición de géneros que a las 2 de la madrugada ya no se distingue como géneros separados sino como un ecosistema acústico propio. Funciona si tienes la actitud correcta, que es no tener expectativas de coherencia musical.",
          "en": "Three blocks with fifteen bars each, their own DJs, their own sound systems and their own concept. The result is an overlap of genres that by 2am can no longer be distinguished as separate but as its own acoustic ecosystem. Works if you have the right attitude — no expectations of musical coherence."
        },
        "rating": 4.3,
        "priceRange": "Libre",
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour nocturno Bangla Road Phuket",
              "en": "Bangla Road Phuket night tour"
            },
            "partner": "getyourguide",
            "query": "bangla road phuket nightlife tour",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Phuket Old Town",
        "type": "Barrio",
        "lat": 7.8855,
        "lng": 98.392,
        "description": {
          "es": "Casas sino-portuguesas del siglo XIX pintadas en colores pastel, cafeterías con café tailandés frío que sabe mejor de lo que ninguna descripción puede capturar, galerías de arte local y calles donde la vida transcurre sin la aceleración turística de Patong. La calle Thalang y la calle Dibuk tienen la mayor concentración de edificios bien conservados.",
          "en": "19th-century Sino-Portuguese houses painted in pastel colours, cafés with cold Thai coffee that tastes better than any description can capture, local art galleries and streets where life moves without Patong's tourist acceleration. Thalang Road and Dibuk Road have the highest concentration of well-preserved buildings."
        },
        "rating": 4.7,
        "priceRange": "Libre",
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour a pie Phuket Old Town",
              "en": "Phuket Old Town walking tour"
            },
            "partner": "getyourguide",
            "query": "phuket old town walking tour sino portuguese heritage",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Playa de Patong",
        "type": "Playa",
        "lat": 7.896,
        "lng": 98.2972,
        "description": {
          "es": "La playa más famosa de Phuket y la más concurrida. Tres kilómetros de arena blanca con aguas cálidas, deportes acuáticos, tumbonas en cada centímetro y chiringuitos con precios que van de razonables a astronómicos según lo cerca del mar que estés. La playa de Kata o Karon, 15 minutos al sur, es más tranquila y casi igual de bonita.",
          "en": "Phuket's most famous beach and its most crowded. Three kilometres of white sand with warm waters, water sports, sunbeds on every centimetre and beach bars with prices ranging from reasonable to astronomical depending on how close to the sea you are. Kata or Karon beach, 15 minutes south, is quieter and almost as beautiful."
        },
        "rating": 4.4,
        "priceRange": "Libre",
        "affiliateLinks": [
          {
            "label": {
              "es": "Actividades acuáticas en Patong",
              "en": "Patong water activities"
            },
            "partner": "getyourguide",
            "query": "patong beach water sports phuket snorkel",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Big Buddha",
        "type": "Monumento",
        "lat": 7.8278,
        "lng": 98.3088,
        "description": {
          "es": "45 metros de mármol blanco en la colina de Nakkerd, visible desde casi cualquier punto de la isla. El camino hasta arriba en moto — alquila una por 200 baht al día — tiene vistas panorámicas sobre la costa oeste que justifican el trayecto aunque los templos no te digan nada en particular. Entrada gratuita.",
          "en": "45 metres of white marble on Nakkerd Hill, visible from almost anywhere on the island. The road up by motorbike — rent one for 200 baht a day — has panoramic views over the west coast that justify the journey even if temples don't particularly speak to you. Free entry."
        },
        "rating": 4.5,
        "priceRange": "Gratis",
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour en moto por Phuket con Big Buddha",
              "en": "Phuket motorbike tour with Big Buddha"
            },
            "partner": "getyourguide",
            "query": "phuket big buddha viewpoints island tour",
            "type": "activity"
          }
        ]
      }
    ],
    "events": [
      {
        "name": "Festival Vegetariano de Phuket 2026",
        "type": "cultural",
        "date": "2–11 Oct 2026",
        "venue": "Phuket Old Town y templos chinos",
        "urgency": false,
        "description": {
          "es": "Nueve días en los que Phuket Old Town se transforma en un festival religioso taoísta de una intensidad que no esperabas en absoluto. Las procesiones con penitentes que se perforan las mejillas con objetos metálicos, los altares con ofrendas en cada esquina y el aroma a incienso cubriendo el Old Town son una experiencia completamente distinta a la imagen turística habitual de Phuket. Estrictamente vegetariano durante los nueve días.",
          "en": "Nine days in which Phuket Old Town transforms into a Taoist religious festival of an intensity you absolutely didn't expect. Processions with penitents piercing their cheeks with metal objects, offering altars on every corner and incense covering the Old Town are a completely different experience from Phuket's usual tourist image. Strictly vegetarian for all nine days."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour Festival Vegetariano Phuket",
              "en": "Phuket Vegetarian Festival tour"
            },
            "partner": "getyourguide",
            "query": "phuket vegetarian festival october cultural tour",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Full Moon Party — Koh Phangan",
        "type": "festival",
        "date": "Mensual (luna llena)",
        "venue": "Haad Rin Beach, Koh Phangan",
        "urgency": false,
        "description": {
          "es": "Técnicamente no está en Phuket, pero está a dos horas en ferry desde el sur de la isla y merece mencionarse porque es el motivo real por el que muchos vienen a esta parte de Tailandia. Diez mil personas bailando en la playa hasta el amanecer con sound systems que tocan house, reggaeton, dubstep y hardstyle en zonas separadas. Va una vez. Si vas dos veces, ya sabes por qué.",
          "en": "Technically not in Phuket, but two hours by ferry from the south of the island and worth mentioning because it's the real reason many people come to this part of Thailand. Ten thousand people dancing on the beach until sunrise with sound systems playing house, reggaeton, dubstep and hardstyle in separate zones. Go once. If you go twice, you already know why."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Ferry Phuket a Koh Phangan Full Moon",
              "en": "Phuket to Koh Phangan Full Moon ferry"
            },
            "partner": "getyourguide",
            "query": "koh phangan full moon party ferry phuket",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Réveillon en Patong 2026",
        "type": "cultural",
        "date": "31 Dic 2026",
        "venue": "Patong Beach, Phuket",
        "urgency": false,
        "description": {
          "es": "La playa de Patong en Nochevieja tiene fuegos artificiales sobre el mar, music stages en la arena y Bangla Road multiplicada por diez. No es el evento más íntimo del mundo — está al mismo nivel de masificación que Copacabana o Dubái — pero la combinación de playa tropical, temperatura perfecta y el caos organizado de Phuket a máxima potencia tiene su propio atractivo.",
          "en": "Patong beach on New Year's Eve has fireworks over the sea, music stages on the sand and Bangla Road multiplied by ten. It's not the most intimate event in the world — the crowds match Copacabana or Dubai — but the combination of tropical beach, perfect temperature and Phuket's organised chaos at full power has its own appeal."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Hotel en Phuket para Nochevieja",
              "en": "Phuket New Year's Eve hotel"
            },
            "partner": "booking",
            "query": "phuket patong beach hotel new year's eve december",
            "type": "hotel"
          }
        ]
      }
    ],
    "services": {
      "flights": [
        "skyscanner",
        "kiwi"
      ],
      "hotels": [
        "booking",
        "hostelworld"
      ],
      "activities": [
        "getyourguide",
        "viator",
        "klook"
      ],
      "insurance": [
        "safetywing",
        "worldnomads"
      ],
      "esim": [
        "airalo",
        "saily",
        "yesim"
      ],
      "transfers": [
        "intui",
        "welcomepickups",
        "indrive"
      ]
    }
  },
  {
    "id": "rio-guide-2026",
    "slug": "rio-de-janeiro-guia-2026",
    "enSlug": "rio-de-janeiro-travel-guide-2026",
    "narrator": "sofia",
    "heroImage": "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=2070&auto=format&fit=crop",
    "city": "Río de Janeiro",
    "country": {
      "es": "Brasil",
      "en": "Brazil"
    },
    "emoji": "🇧🇷",
    "date": "2026-03-12",
    "readTime": "9 min",
    "category": "america",
    "title": {
      "es": "Río de Janeiro 2026: La ciudad que siempre sale mejor de lo que planeas",
      "en": "Rio de Janeiro 2026: The City That Always Turns Out Better Than You Plan"
    },
    "subtitle": {
      "es": "Cristo Redentor, Copacabana, Lapa de noche y por qué la hoja de cálculo siempre queda a medias",
      "en": "Christ the Redeemer, Copacabana, Lapa at night and why the spreadsheet always falls apart"
    },
    "excerpt": {
      "es": "Tenía un Google Sheet con tres pestañas, dieciséis marcadores en Chrome y una carpeta de Instagram con 273 publicaciones. Llegué al aeropuerto, tomé el taxi equivocado y llegué al hotel correcto por error.",
      "en": "I had a Google Sheet with three tabs, sixteen Chrome bookmarks and an Instagram folder with 273 posts. I arrived at the airport, took the wrong taxi, and ended up at the right hotel by mistake."
    },
    "metaDescription": {
      "es": "Guía de Río de Janeiro 2026: Cristo Redentor, Copacabana, Ipanema, Lapa y Santa Teresa. Rock in Rio 2026 y Carnaval. Todo lo que necesitas para planear tu viaje a Brasil.",
      "en": "Rio de Janeiro guide 2026: Christ the Redeemer, Copacabana, Ipanema, Lapa and Santa Teresa. Rock in Rio 2026 and Carnival. Everything you need to plan your Brazil trip."
    },
    "keywords": {
      "es": [
        "rio de janeiro 2026",
        "que ver en rio",
        "cristo redentor",
        "copacabana",
        "rock in rio 2026"
      ],
      "en": [
        "rio de janeiro 2026",
        "what to see in rio",
        "christ the redeemer",
        "copacabana",
        "rock in rio 2026"
      ]
    },
    "pointsOfInterest": [
      {
        "name": "Cristo Redentor",
        "type": "Monumento",
        "lat": -22.9519,
        "lng": -43.2105,
        "description": {
          "es": "En persona es más grande de lo que recuerdas aunque nunca lo hayas visto — ocupa el cielo de una manera que en fotos no se transmite. Sube a primera hora de la mañana antes de que lleguen las nubes, que en Río llegan con puntualidad de cónsul europeo a media mañana y se llevan las vistas consigo.",
          "en": "In person it's larger than you remember despite never having seen it — it occupies the sky in a way photographs don't transmit. Go first thing in the morning before the clouds arrive, which in Rio come in with the punctuality of a European diplomat around mid-morning and take the views with them."
        },
        "rating": 4.9,
        "priceRange": "€20",
        "affiliateLinks": [
          {
            "label": {
              "es": "Entrada Cristo Redentor sin esperas",
              "en": "Christ the Redeemer skip-the-queue ticket"
            },
            "partner": "tiqets",
            "query": "christ the redeemer rio de janeiro ticket skip queue",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Tour Cristo Redentor + Sugarloaf",
              "en": "Christ the Redeemer + Sugarloaf tour"
            },
            "partner": "civitatis",
            "query": "christ redeemer sugarloaf rio de janeiro tour",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Copacabana e Ipanema",
        "type": "Playa",
        "lat": -22.9711,
        "lng": -43.1819,
        "description": {
          "es": "Las dos playas son distintas. Copacabana es más democrática, ruidosa, con vendedores de caipirinha ambulantes. Ipanema es más ordenada con la montaña de los Dos Hermanos de fondo. La Pedra do Arpoador — la roca entre las dos playas — tiene las mejores puestas de sol de la ciudad y un aplauso colectivo cada tarde cuando el sol toca el horizonte. No es una metáfora: ocurre.",
          "en": "The two beaches are different. Copacabana is more democratic, noisier, with roving caipirinha vendors. Ipanema is more ordered with the Two Brothers mountain as backdrop. Pedra do Arpoador — the rock between the two beaches — has the best sunsets in the city and a collective round of applause each evening when the sun touches the horizon. This is not a metaphor: it happens."
        },
        "rating": 4.8,
        "priceRange": "Libre",
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour playas de Río e Ipanema",
              "en": "Rio beaches and Ipanema tour"
            },
            "partner": "getyourguide",
            "query": "ipanema copacabana beach tour rio de janeiro",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Lapa",
        "type": "Barrio",
        "lat": -22.9104,
        "lng": -43.178,
        "description": {
          "es": "El barrio de la samba en vivo. Los Arcos da Lapa — el acueducto del siglo XVIII convertido en viaducto del tranvía — iluminados de noche con música saliendo de los bares del entorno. El Carioca da Gema tiene samba en vivo hasta las 2 de la madrugada. Fui con intención de quedarme hasta las 11 y salí a las 3 — el spreadsheet decía que el martes era el día de descanso.",
          "en": "The live samba neighbourhood. The Arcos da Lapa — the 18th-century aqueduct converted into a tram viaduct — illuminated at night with music spilling from surrounding bars. The Carioca da Gema has live samba until 2am. I went planning to stay until 11 and left at 3 — the spreadsheet said Tuesday was supposed to be a rest day."
        },
        "rating": 4.7,
        "priceRange": "Libre",
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour de samba en vivo por Lapa",
              "en": "Lapa live samba night tour"
            },
            "partner": "getyourguide",
            "query": "lapa samba night tour rio de janeiro live music",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Santa Teresa",
        "type": "Barrio",
        "lat": -22.9249,
        "lng": -43.185,
        "description": {
          "es": "El barrio bohemio en las colinas sobre el centro: las mejores galerías de arte independientes, restaurantes con mejor relación calidad-precio de la ciudad y el tranvía histórico — el bonde — que sube serpenteando entre casas de colores. El punto de vista desde el Parque das Ruínas tiene una de las mejores panorámicas de la bahía de Guanabara.",
          "en": "The bohemian neighbourhood on the hills above the centre: the best independent art galleries, restaurants with the best value for money in the city, and the historic tram — the bonde — winding up between coloured houses. The viewpoint at Parque das Ruínas has one of the best panoramas of Guanabara Bay."
        },
        "rating": 4.6,
        "priceRange": "Libre",
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour por Santa Teresa y arte local",
              "en": "Santa Teresa and local art tour"
            },
            "partner": "getyourguide",
            "query": "santa teresa rio de janeiro art gallery bohemian tour",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Pan de Azúcar (Pão de Açúcar)",
        "type": "Mirador",
        "lat": -22.9489,
        "lng": -43.1555,
        "description": {
          "es": "Dos teleféricos hasta la cima del Pan de Azúcar, con vistas a Copacabana, el Cristo Redentor, la bahía de Guanabara y el Atlántico. Al atardecer, con el cielo naranja sobre la ciudad, es de los mejores miradores de América del Sur. El segundo teleférico, entre el Morro da Urca y la cima, tiene las mejores vistas del trayecto.",
          "en": "Two cable cars to the top of Sugarloaf Mountain, with views of Copacabana, Christ the Redeemer, Guanabara Bay and the Atlantic. At sunset, with an orange sky over the city, it's one of the best viewpoints in South America. The second cable car, between Morro da Urca and the summit, has the best views of the journey."
        },
        "rating": 4.8,
        "priceRange": "€25",
        "affiliateLinks": [
          {
            "label": {
              "es": "Teleférico Pan de Azúcar entrada sin cola",
              "en": "Sugarloaf Mountain cable car skip-the-line"
            },
            "partner": "tiqets",
            "query": "sugarloaf mountain pao de acucar cable car rio skip line",
            "type": "tickets"
          }
        ]
      }
    ],
    "events": [
      {
        "name": "Rock in Rio 2026",
        "type": "festival",
        "date": "Sep–Oct 2026",
        "venue": "Cidade do Rock, Río de Janeiro",
        "urgency": true,
        "description": {
          "es": "El mayor festival de música de América Latina regresa a Río. La Cidade do Rock en la zona norte de la ciudad se convierte en una ciudad dentro de la ciudad durante varios fines de semana. Cartel internacional de primera división con los artistas más grandes del pop, rock, electrónica y hip-hop globales. Los días sin headliner tienen entradas más accesibles y el ambiente es idéntico.",
          "en": "The largest music festival in Latin America returns to Rio. The Cidade do Rock in the northern zone becomes a city within a city for several weekends. Top-tier international lineup featuring the biggest names in pop, rock, electronic and global hip-hop. Days without a headliner have more accessible tickets and the atmosphere is identical."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Entradas Rock in Rio 2026",
              "en": "Rock in Rio 2026 tickets"
            },
            "partner": "ticketmaster",
            "query": "rock in rio 2026 festival tickets brasil",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Hotel en Río para Rock in Rio",
              "en": "Rio hotel for Rock in Rio"
            },
            "partner": "booking",
            "query": "rio de janeiro hotel rock in rio september 2026",
            "type": "hotel"
          }
        ]
      },
      {
        "name": "Carnaval do Rio 2027",
        "type": "festival",
        "date": "Feb 2027",
        "venue": "Sambódromo y toda la ciudad",
        "urgency": true,
        "description": {
          "es": "El espectáculo más elaborado del mundo. Los desfiles de las escolas de samba en el Sambódromo son una producción de escala cinematográfica imposible de describir adecuadamente sin haberla visto. Compra con muchos meses de antelación — las mejores entradas para el Sambódromo se agotan antes de que acabe el carnaval anterior. Los blocos de calle (gratuitos) son otra forma completamente distinta de vivirlo.",
          "en": "The most elaborate spectacle in the world. The samba school parades in the Sambódromo are a cinematic-scale production impossible to adequately describe without having seen it. Buy many months in advance — the best Sambódromo tickets sell out before the previous carnival ends. The street blocos (free) are a completely different way of experiencing it."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Experiencia Sambódromo Carnaval de Río",
              "en": "Rio Carnival Sambódromo experience"
            },
            "partner": "getyourguide",
            "query": "rio carnival sambodromo experience 2027 samba parade",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Réveillon de Copacabana 2026",
        "type": "cultural",
        "date": "31 Dic 2026",
        "venue": "Playa de Copacabana",
        "urgency": false,
        "description": {
          "es": "Dos millones de personas vestidas de blanco en la playa de Copacabana mirando los fuegos artificiales sobre el mar a medianoche. Una de las celebraciones de Año Nuevo más grandes del mundo, gratuita y al aire libre. La tradición de ofrecer flores al mar (para Iemanjá, la diosa del mar en el candomblé) le da una dimensión que va más allá del turismo de masas.",
          "en": "Two million people dressed in white on Copacabana beach watching fireworks over the sea at midnight. One of the world's largest New Year's Eve celebrations, free and outdoors. The tradition of offering flowers to the sea (to Iemanjá, the candomblé sea goddess) gives it a dimension that goes beyond mass tourism."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Hotel en Copacabana para Nochevieja",
              "en": "Copacabana hotel for New Year's Eve"
            },
            "partner": "booking",
            "query": "copacabana hotel new year's eve rio december 2026",
            "type": "hotel"
          }
        ]
      }
    ],
    "services": {
      "flights": [
        "skyscanner",
        "kiwi"
      ],
      "hotels": [
        "booking",
        "hostelworld",
        "vrbo"
      ],
      "cars": [
        "discovercars",
        "rentalcars"
      ],
      "activities": [
        "getyourguide",
        "viator",
        "civitatis",
        "tiqets"
      ],
      "insurance": [
        "safetywing",
        "worldnomads"
      ],
      "esim": [
        "airalo",
        "saily"
      ],
      "transfers": [
        "intui",
        "welcomepickups",
        "indrive"
      ]
    }
  },
  {
    "id": "paris-guide-2026",
    "slug": "paris-guia-2026",
    "enSlug": "paris-travel-guide-2026",
    "narrator": "carmen",
    "heroImage": "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2070&auto=format&fit=crop",
    "city": "París",
    "country": {
      "es": "Francia",
      "en": "France"
    },
    "emoji": "🇫🇷",
    "date": "2026-03-12",
    "readTime": "9 min",
    "category": "europe",
    "title": {
      "es": "París 2026: La guía que no te va a mentir sobre la Gioconda",
      "en": "Paris 2026: The Guide That Won't Lie to You About the Mona Lisa"
    },
    "subtitle": {
      "es": "Museos, barrios y la pregunta de si hay algo que no hayas visto ya en fotos",
      "en": "Museums, neighbourhoods and the question of whether there's anything you haven't already seen in photos"
    },
    "excerpt": {
      "es": "Llegué con La guía Michelin de 2023 y la seguridad de quien ha leído demasiados libros sobre París. Salí convencida de que no había entendido nada las veces anteriores.",
      "en": "I arrived with the 2023 Michelin guide and the certainty of someone who has read too many books about Paris. I left convinced I hadn't understood anything on previous visits."
    },
    "metaDescription": {
      "es": "Guía honesta de París 2026: Louvre, Orsay, Montmartre, Le Marais y consejos prácticos para no gastar de más. Roland Garros y Fête de la Musique incluidos.",
      "en": "Honest Paris guide 2026: Louvre, Orsay, Montmartre, Le Marais and practical tips to avoid overspending. Roland Garros and Fête de la Musique included."
    },
    "keywords": {
      "es": [
        "paris 2026",
        "que ver en paris",
        "louvre entradas",
        "montmartre",
        "paris viaje"
      ],
      "en": [
        "paris 2026",
        "what to see in paris",
        "louvre tickets",
        "montmartre",
        "paris travel guide"
      ]
    },
    "pointsOfInterest": [
      {
        "name": "Musée du Louvre",
        "type": "Museo",
        "lat": 48.8606,
        "lng": 2.3376,
        "description": {
          "es": "380.000 obras, el edificio de un palacio medieval que nadie terminó de limpiar, y La Gioconda al fondo de una sala detrás de un cristal antibalas rodeada de cuarenta personas haciéndose selfis. Reserva con franja horaria o la fila en el patio de la Pirámide te enseñará todo lo que necesitas saber sobre la paciencia.",
          "en": "380,000 works, the building of a medieval palace nobody ever quite finished tidying, and the Mona Lisa at the end of a room behind bulletproof glass surrounded by forty people taking selfies. Book a timed entry or the queue in the Pyramid courtyard will teach you everything about patience."
        },
        "rating": 4.9,
        "priceRange": "€22",
        "affiliateLinks": [
          {
            "label": {
              "es": "Entrada con hora fija al Louvre",
              "en": "Timed entry ticket to the Louvre"
            },
            "partner": "tiqets",
            "query": "louvre museum paris timed entry",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Tour guiado lo mejor del Louvre",
              "en": "Guided best-of Louvre tour"
            },
            "partner": "getyourguide",
            "query": "louvre museum highlights tour paris",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Musée d'Orsay",
        "type": "Museo",
        "lat": 48.86,
        "lng": 2.3266,
        "description": {
          "es": "El mejor museo de París, en mi opinión personal y bastante informada. Monet, Renoir, Degas, Van Gogh y Cézanne en una estación de tren desafectada con relojes de hierro y luz de cristal. Llega a primera hora o después de las 16:30.",
          "en": "The best museum in Paris, in my personal and fairly informed opinion. Monet, Renoir, Degas, Van Gogh and Cézanne in a decommissioned railway station with iron clocks and glass light. Arrive first thing or after 4:30pm."
        },
        "rating": 4.9,
        "priceRange": "€16",
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour impresionismo en el Orsay",
              "en": "Impressionism tour at the Orsay"
            },
            "partner": "getyourguide",
            "query": "musee d'orsay impressionism tour paris",
            "type": "activity"
          },
          {
            "label": {
              "es": "Entrada sin cola al Orsay",
              "en": "Skip-the-line Orsay ticket"
            },
            "partner": "tiqets",
            "query": "musee d'orsay paris skip line",
            "type": "tickets"
          }
        ]
      },
      {
        "name": "Montmartre",
        "type": "Barrio",
        "lat": 48.8867,
        "lng": 2.3431,
        "description": {
          "es": "Al amanecer, antes de las 9, las escaleras de la Butte vacías y el Sacré-Cœur sin cola tienen una calidad de silencio que no tiene ningún otro barrio de París. Por la tarde llegan los turistas y los pintores de la Place du Tertre y es otro sitio completamente distinto.",
          "en": "At dawn, before 9am, the empty Butte steps and Sacré-Cœur without queues have a quality of silence found nowhere else in Paris. By afternoon the tourists arrive along with the painters of Place du Tertre and it becomes a completely different place."
        },
        "rating": 4.7,
        "priceRange": "Gratis",
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour a pie por Montmartre",
              "en": "Montmartre walking tour"
            },
            "partner": "civitatis",
            "query": "montmartre walking tour paris morning",
            "type": "activity"
          },
          {
            "label": {
              "es": "Tour nocturno Montmartre",
              "en": "Montmartre night tour"
            },
            "partner": "getyourguide",
            "query": "montmartre night tour paris wine",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Le Marais",
        "type": "Barrio",
        "lat": 48.8566,
        "lng": 2.3522,
        "description": {
          "es": "El Museo Picasso, el Museo Carnavalet, la Place des Vosges —la plaza más antigua de París y la más elegante—, galerías de arte contemporáneo y el mejor falafel de Europa en la rue des Rosiers. Todo en radio de medio kilómetro.",
          "en": "The Picasso Museum, the Carnavalet Museum, Place des Vosges — the oldest and most elegant square in Paris — contemporary art galleries and the best falafel in Europe on rue des Rosiers. All within a half-kilometre radius."
        },
        "rating": 4.8,
        "priceRange": "Libre",
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour gastronómico Le Marais",
              "en": "Le Marais food tour"
            },
            "partner": "getyourguide",
            "query": "le marais food tour paris jewish quarter",
            "type": "activity"
          },
          {
            "label": {
              "es": "Cenar en Le Marais",
              "en": "Dinner in Le Marais"
            },
            "partner": "thefork",
            "query": "le marais paris restaurant",
            "type": "restaurant"
          }
        ]
      },
      {
        "name": "Torre Eiffel",
        "type": "Monumento",
        "lat": 48.8584,
        "lng": 2.2945,
        "description": {
          "es": "Obligatoria aunque hayas visto la foto dos mil veces. De noche, cada hora en punto, la lluvia de luces dura exactamente cinco minutos y la gente deja de hacer lo que estaba haciendo para mirarla. Sin reserva en temporada alta la fila supera las tres horas.",
          "en": "Compulsory even if you've seen the photo two thousand times. At night, every hour on the hour, the light show lasts exactly five minutes and people stop what they're doing to watch. Without a booking in peak season the queue exceeds three hours."
        },
        "rating": 4.8,
        "priceRange": "€29–35",
        "affiliateLinks": [
          {
            "label": {
              "es": "Entrada a la cima de la Torre Eiffel",
              "en": "Eiffel Tower summit ticket"
            },
            "partner": "tiqets",
            "query": "eiffel tower summit ticket paris",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Tour nocturno Torre Eiffel",
              "en": "Eiffel Tower evening tour"
            },
            "partner": "getyourguide",
            "query": "eiffel tower evening tour paris seine",
            "type": "activity"
          }
        ]
      }
    ],
    "events": [
      {
        "name": "Roland Garros 2026",
        "type": "sport",
        "date": "24 May – 7 Jun 2026",
        "venue": "Stade Roland Garros",
        "urgency": true,
        "description": {
          "es": "El Grand Slam de tierra batida más importante del mundo lleva la misma dirección desde 1928. Las entradas para las primeras rondas son razonablemente accesibles; las de cuartos de final en adelante se agotan muy deprisa. La atmósfera del estadio en el Roland Garros —con el polvo rojo, el rebote alto y los aficionados que opinan en voz alta— no tiene parangón en ningún otro torneo del circuito.",
          "en": "The world's most important clay-court Grand Slam has been at the same address since 1928. Early round tickets are reasonably accessible; quarter-finals onwards sell out fast. The Roland Garros atmosphere — red clay dust, high bounce, spectators with opinions — has no equivalent in any other tournament on the circuit."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Entradas Roland Garros 2026",
              "en": "Roland Garros 2026 tickets"
            },
            "partner": "ticketmaster",
            "query": "roland garros 2026 paris tennis",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Experiencia VIP Roland Garros",
              "en": "Roland Garros VIP experience"
            },
            "partner": "getyourguide",
            "query": "roland garros vip experience paris",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Fête de la Musique 2026",
        "type": "cultural",
        "date": "21 Jun 2026",
        "venue": "Toda la ciudad de París",
        "urgency": false,
        "description": {
          "es": "El solsticio de verano convierte cada calle, cada plaza y cada terraza de París en un escenario. Conciertos gratuitos de todos los géneros imaginables desde las 18:00 hasta la madrugada. Los barrios con más concentración de actuaciones: Le Marais, Bastille, Montmartre, Belleville y los quais del Sena. Completamente gratuito y absolutamente inimitable.",
          "en": "The summer solstice turns every street, square and terrace in Paris into a stage. Free concerts of every imaginable genre from 6pm until the early hours. The neighbourhoods with the highest concentration of performances: Le Marais, Bastille, Montmartre, Belleville and the Seine quais. Completely free and absolutely inimitable."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour musical por París esa noche",
              "en": "Musical tour of Paris that night"
            },
            "partner": "civitatis",
            "query": "fete musique paris musical tour",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Festival Jazz à la Villette 2026",
        "type": "art",
        "date": "Sep 2026",
        "venue": "Parc de la Villette",
        "urgency": false,
        "description": {
          "es": "Diez días de jazz en el Parc de la Villette con una mezcla de grandes nombres del circuito internacional y artistas emergentes de la escena francesa. Conciertos al aire libre gratuitos durante el día; los conciertos de sala de noche tienen precio de entrada. El parque en septiembre, con el verano todavía en el aire, es uno de los mejores planes de ocio de París.",
          "en": "Ten days of jazz in the Parc de la Villette mixing major names from the international circuit with emerging French scene artists. Free outdoor concerts during the day; evening hall concerts have entry prices. The park in September, with summer still in the air, is one of Paris's best leisure options."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour de jazz por París",
              "en": "Paris jazz tour"
            },
            "partner": "getyourguide",
            "query": "paris jazz tour villette music",
            "type": "activity"
          }
        ]
      }
    ],
    "services": {
      "flights": [
        "skyscanner",
        "kiwi"
      ],
      "hotels": [
        "booking",
        "hostelworld",
        "vrbo"
      ],
      "cars": [
        "discovercars",
        "rentalcars",
        "autoeurope",
        "localrent"
      ],
      "activities": [
        "getyourguide",
        "viator",
        "tiqets",
        "civitatis"
      ],
      "restaurants": [
        "thefork",
        "opentable"
      ],
      "insurance": [
        "safetywing",
        "worldnomads"
      ],
      "esim": [
        "airalo",
        "holafly",
        "saily",
        "yesim"
      ],
      "transfers": [
        "intui",
        "welcomepickups",
        "gettransfer"
      ],
      "parking": [
        "parkimeter"
      ]
    }
  },
  {
    "id": "london-guide-2026",
    "slug": "londres-guia-2026",
    "enSlug": "london-travel-guide-2026",
    "narrator": "marcos",
    "heroImage": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop",
    "city": "Londres",
    "country": {
      "es": "Reino Unido",
      "en": "United Kingdom"
    },
    "emoji": "🇬🇧",
    "date": "2026-03-12",
    "readTime": "9 min",
    "category": "europe",
    "title": {
      "es": "Londres 2026: La ciudad donde la música no duerme (y la cerveza no es barata)",
      "en": "London 2026: The City Where Music Never Sleeps (and Beer Is Never Cheap)"
    },
    "subtitle": {
      "es": "Salas, mercados, arte gratis y la pregunta de cuánto cuesta realmente una semana aquí",
      "en": "Venues, markets, free art and the question of what a week here actually costs"
    },
    "excerpt": {
      "es": "Londres me costó dos visitas entender. La primera vez llegué pensando que era París pero gris y con peor comida. La segunda vez llegué en febrero, me instalé en Hackney por una semana y lo entendí.",
      "en": "London took me two visits to understand. The first time I thought it was Paris but grey with worse food. The second time I came in February, installed myself in Hackney for a week, and got it."
    },
    "metaDescription": {
      "es": "Guía de Londres 2026: Tate Modern, Camden, Borough Market, Shoreditch y la escena musical más densa de Europa. Glastonbury, Wireless Festival y consejos para no arruinarse.",
      "en": "London guide 2026: Tate Modern, Camden, Borough Market, Shoreditch and Europe's densest music scene. Glastonbury, Wireless Festival and tips for not going broke."
    },
    "keywords": {
      "es": [
        "londres 2026",
        "que hacer en londres",
        "glastonbury 2026",
        "camden market",
        "tate modern gratis"
      ],
      "en": [
        "london 2026",
        "things to do in london",
        "glastonbury 2026",
        "camden market",
        "tate modern free"
      ]
    },
    "pointsOfInterest": [
      {
        "name": "Tate Modern",
        "type": "Museo",
        "lat": 51.5076,
        "lng": -0.0994,
        "description": {
          "es": "Gratis. Este es el tipo de información que cambia el plan mental de todo. Rothko, Picasso, Warhol, Louise Bourgeois en una central eléctrica desafectada sobre el Támesis con una sala de turbinas de las más impresionantes que he visto en ningún edificio. La Turbine Hall con instalaciones de escala arquitectónica que rotan cada temporada.",
          "en": "Free. This is the kind of information that changes your entire mental plan. Rothko, Picasso, Warhol, Louise Bourgeois in a decommissioned power station on the Thames with one of the most impressive turbine halls I've seen in any building. Rotating large-scale installations each season."
        },
        "rating": 4.8,
        "priceRange": "Gratis",
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour de lo mejor de la Tate Modern",
              "en": "Tate Modern highlights tour"
            },
            "partner": "getyourguide",
            "query": "tate modern tour london highlights modern art",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Camden Market",
        "type": "Mercado",
        "lat": 51.5414,
        "lng": -0.1432,
        "description": {
          "es": "Trescientas tiendas de ropa vintage, artesanía, discos de vinilo, comida de todo el mundo y gente con estilos que en otras ciudades serían imposibles y aquí son el miércoles normal. El canal después del mercado tiene los pubs con terraza junto al agua donde los londinenses toman el sábado con seriedad admirable.",
          "en": "Three hundred shops selling vintage clothes, crafts, vinyl records, food from everywhere, and people with styles that would be impossible in other cities and here are a normal Wednesday. The canal after the market has waterside pub terraces where Londoners take Saturday afternoon with admirable seriousness."
        },
        "rating": 4.6,
        "priceRange": "Libre",
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour gastronómico por Camden",
              "en": "Camden food tour"
            },
            "partner": "getyourguide",
            "query": "camden market food tour london vinyl records",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Borough Market",
        "type": "Mercado",
        "lat": 51.5051,
        "lng": -0.091,
        "description": {
          "es": "En el mismo sitio desde 1851. Jamón ibérico de productores españoles, quesos artesanos ingleses que revisaron mis prejuicios, pasteles de carne a la antigua y café de especialidad servido por alguien que tiene un doctorado no oficial en el tema. El mejor mercado gastronómico de la ciudad sin debate posible.",
          "en": "On the same site since 1851. Iberian ham from Spanish producers, artisan English cheeses that revised my prejudices, old-fashioned meat pies and speciality coffee served by someone with an unofficial doctorate in the subject. The best food market in the city, without debate."
        },
        "rating": 4.8,
        "priceRange": "Libre",
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour de comida Borough Market",
              "en": "Borough Market food tour"
            },
            "partner": "getyourguide",
            "query": "borough market food tour london southwark",
            "type": "activity"
          },
          {
            "label": {
              "es": "Mesa cerca del Borough Market",
              "en": "Table near Borough Market"
            },
            "partner": "thefork",
            "query": "borough market london restaurant southwark",
            "type": "restaurant"
          }
        ]
      },
      {
        "name": "Shoreditch",
        "type": "Barrio",
        "lat": 51.523,
        "lng": -0.0775,
        "description": {
          "es": "Arte urbano en cada pared —algunos de Banksy, otros de artistas que serán relevantes en cinco años. Bares donde antes había talleres. Restaurantes de cocinas que no existían en el menú europeo hace una década. Por la noche, el Truman Brewery convierte este rincón del East End en una de las zonas más activas de Europa.",
          "en": "Street art on every wall — some by Banksy, others by artists who will be relevant in five years. Bars where workshops used to be. Restaurants serving cuisines that didn't exist on the European menu a decade ago. At night, the Truman Brewery makes this corner of the East End one of the most active areas in Europe."
        },
        "rating": 4.7,
        "priceRange": "Libre",
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour de arte urbano Shoreditch",
              "en": "Shoreditch street art tour"
            },
            "partner": "getyourguide",
            "query": "shoreditch street art tour london east end banksy",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Tower of London",
        "type": "Monumento",
        "lat": 51.5081,
        "lng": -0.0759,
        "description": {
          "es": "Novecientos años de historia en un castillo normando a orillas del Támesis: las joyas de la Corona, los cuervos que supuestamente protegen el reino si se van (hay seis en plantilla más un suplente oficial), y las historias de las ejecuciones que los Beefeaters cuentan con una alegría que resulta inquietante.",
          "en": "Nine hundred years of history in a Norman castle on the Thames: the Crown Jewels, the ravens that supposedly protect the kingdom if they leave (six on staff plus an official reserve), and the execution stories the Beefeaters recount with an unsettling cheerfulness."
        },
        "rating": 4.7,
        "priceRange": "£33",
        "affiliateLinks": [
          {
            "label": {
              "es": "Entrada Tower of London sin cola",
              "en": "Tower of London skip-the-line ticket"
            },
            "partner": "tiqets",
            "query": "tower of london skip line ticket crown jewels",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Tour histórico Torre de Londres",
              "en": "Tower of London historical tour"
            },
            "partner": "getyourguide",
            "query": "tower of london guided tour beefeater",
            "type": "activity"
          }
        ]
      }
    ],
    "events": [
      {
        "name": "Glastonbury 2026",
        "type": "festival",
        "date": "24–28 Jun 2026",
        "venue": "Worthy Farm, Somerset",
        "urgency": true,
        "description": {
          "es": "El festival más importante del planeta durante cinco días en Somerset, a dos horas de Londres en tren. Las entradas se agotan en horas desde que salen a la venta, generalmente en octubre del año anterior, con lista de registro obligatoria previa. Si no consigues entrada: el Pyramid Stage se retransmite en directo en la BBC y hay pubs en todo el país donde verlo con la misma gente que tampoco consiguió entrada y lo lleva con deportividad.",
          "en": "The most important festival on the planet for five days in Somerset, two hours from London by train. Tickets sell out within hours of going on sale, usually in October the previous year, with mandatory prior registration. If you don't get a ticket: the Pyramid Stage is broadcast live on the BBC and there are pubs across the country watching it with people who also didn't get tickets and are taking it well."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Lista de espera Glastonbury 2026",
              "en": "Glastonbury 2026 resale tickets"
            },
            "partner": "stubhub",
            "query": "glastonbury festival 2026 tickets resale",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Alojamiento cerca de Glastonbury",
              "en": "Accommodation near Glastonbury"
            },
            "partner": "booking",
            "query": "glastonbury somerset accommodation festival 2026",
            "type": "hotel"
          }
        ]
      },
      {
        "name": "Wireless Festival 2026",
        "type": "festival",
        "date": "3–5 Jul 2026",
        "venue": "Crystal Palace Park, Londres",
        "urgency": true,
        "description": {
          "es": "El festival de rap, R&B y música urbana más importante del Reino Unido en Crystal Palace Park. Cartel con los artistas más grandes del género internacional y la escena británica emergente. Tres días, varios escenarios, producción de primer nivel y ambiente de los que solo genera Londres cuando pone la música en el centro de todo.",
          "en": "The UK's most important rap, R&B and urban music festival in Crystal Palace Park. Lineup featuring the biggest names in international hip-hop and the British emerging scene. Three days, multiple stages, top-level production and the kind of atmosphere only London generates when it puts music at the centre of everything."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Entradas Wireless Festival 2026",
              "en": "Wireless Festival 2026 tickets"
            },
            "partner": "ticketmaster",
            "query": "wireless festival 2026 london crystal palace",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Experiencia festival en Londres",
              "en": "London festival experience"
            },
            "partner": "getyourguide",
            "query": "wireless festival london music experience",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Notting Hill Carnival 2026",
        "type": "cultural",
        "date": "30–31 Ago 2026",
        "venue": "Notting Hill, Londres",
        "urgency": false,
        "description": {
          "es": "El mayor festival de calle de Europa y el segundo mayor carnaval del mundo después de Río. Dos días de música caribeña, trajes elaborados, sound systems que te sientes en el pecho y comida de Jamaica, Trinidad y Barbados cocinada en la calle. El domingo es el día de los niños y la familia; el lunes es el desfile principal. Entrada gratuita.",
          "en": "The largest street festival in Europe and the second largest carnival in the world after Rio. Two days of Caribbean music, elaborate costumes, sound systems you feel in your chest, and food from Jamaica, Trinidad and Barbados cooked on the street. Sunday is the children's and family day; Monday is the main parade. Free entry."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour cultural del Caribe en Londres",
              "en": "Caribbean culture tour in London"
            },
            "partner": "getyourguide",
            "query": "notting hill carnival london caribbean culture tour",
            "type": "activity"
          }
        ]
      }
    ],
    "services": {
      "flights": [
        "skyscanner",
        "kiwi"
      ],
      "hotels": [
        "booking",
        "hostelworld",
        "vrbo"
      ],
      "cars": [
        "discovercars",
        "rentalcars",
        "autoeurope",
        "localrent"
      ],
      "activities": [
        "getyourguide",
        "viator",
        "tiqets",
        "civitatis"
      ],
      "restaurants": [
        "thefork",
        "opentable"
      ],
      "insurance": [
        "safetywing",
        "worldnomads"
      ],
      "esim": [
        "airalo",
        "holafly",
        "saily",
        "yesim"
      ],
      "transfers": [
        "intui",
        "welcomepickups",
        "gettransfer"
      ],
      "parking": [
        "parkimeter"
      ]
    }
  },
  {
    "id": "berlin-guide-2026",
    "slug": "berlin-guia-2026",
    "enSlug": "berlin-travel-guide-2026",
    "narrator": "elena",
    "heroImage": "https://images.unsplash.com/photo-1587330979470-3595ac045fba?q=80&w=2070&auto=format&fit=crop",
    "city": "Berlín",
    "country": {
      "es": "Alemania",
      "en": "Germany"
    },
    "emoji": "🇩🇪",
    "date": "2026-03-12",
    "readTime": "9 min",
    "category": "europe",
    "title": {
      "es": "Berlín 2026: La ciudad más barata de Europa que todavía importa",
      "en": "Berlin 2026: The Cheapest Major City in Europe That Still Matters"
    },
    "subtitle": {
      "es": "Museos de clase mundial, coworking excelente, electrónica sin igual y bares que cierran cuando decide la gente",
      "en": "World-class museums, excellent coworking, unmatched electronic music and bars that close when people decide to leave"
    },
    "excerpt": {
      "es": "Para alguien que trabaja en remoto y necesita una base europea que no cueste un órgano al mes, Berlín no es una opción: es la respuesta.",
      "en": "For anyone working remotely who needs a European base that doesn't cost an organ a month, Berlin isn't an option: it's the answer."
    },
    "metaDescription": {
      "es": "Guía de Berlín 2026: Isla de los Museos, East Side Gallery, Kreuzberg y Prenzlauer Berg. La mejor ciudad para nómadas digitales de Europa. Lollapalooza Berlin incluido.",
      "en": "Berlin guide 2026: Museum Island, East Side Gallery, Kreuzberg and Prenzlauer Berg. Europe's best city for digital nomads. Lollapalooza Berlin included."
    },
    "keywords": {
      "es": [
        "berlin 2026",
        "que ver en berlin",
        "isla museos berlin",
        "nomada digital berlin",
        "kreuzberg"
      ],
      "en": [
        "berlin 2026",
        "what to see in berlin",
        "museum island berlin",
        "digital nomad berlin",
        "kreuzberg"
      ]
    },
    "pointsOfInterest": [
      {
        "name": "Isla de los Museos",
        "type": "Museo",
        "lat": 52.5205,
        "lng": 13.4005,
        "description": {
          "es": "Cinco museos de clase mundial en una isla en el Spree. El Pergamonmuseum tiene la Puerta de Ishtar de Babilonia y el Altar de Pérgamo — dos piezas de escala arquitectónica que no tienen referencia en ningún otro museo. El Neues Museum tiene el busto de Nefertiti. La entrada combinada cubre varios museos y la franja horaria es obligatoria.",
          "en": "Five world-class museums on an island in the Spree. The Pergamon Museum has the Ishtar Gate of Babylon and the Pergamon Altar — two pieces of architectural scale with no equivalent in any other museum. The Neues Museum has the bust of Nefertiti. The combined ticket covers several museums and a timed slot is essential."
        },
        "rating": 4.9,
        "priceRange": "€18",
        "affiliateLinks": [
          {
            "label": {
              "es": "Entrada combinada Isla de los Museos",
              "en": "Museum Island combined ticket"
            },
            "partner": "tiqets",
            "query": "berlin museum island pergamon nefertiti timed entry",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Tour guiado Isla de los Museos",
              "en": "Museum Island guided tour"
            },
            "partner": "getyourguide",
            "query": "berlin museum island guided tour pergamon altar",
            "type": "activity"
          }
        ]
      },
      {
        "name": "East Side Gallery",
        "type": "Monumento",
        "lat": 52.5058,
        "lng": 13.44,
        "description": {
          "es": "1,3 kilómetros del muro de Berlín convertidos en galería de arte al aire libre justo después de la caída en 1989. La 'Prueba Fraternal' de Dmitri Vrubel — los dos líderes besándose en la boca — es la imagen más fotografiada. Gratuita, al aire libre, abierta 24 horas. Sin contexto histórico son murales bonitos; con contexto son otra cosa completamente diferente.",
          "en": "1.3 kilometres of the Berlin Wall turned into an open-air art gallery immediately after the 1989 fall. Dmitri Vrubel's 'Fraternal Kiss' — the two leaders kissing — is the most photographed image. Free, outdoors, open 24 hours. Without historical context they're beautiful murals; with context they're something else entirely."
        },
        "rating": 4.8,
        "priceRange": "Gratis",
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour guiado Muro de Berlín y East Side Gallery",
              "en": "Berlin Wall and East Side Gallery guided tour"
            },
            "partner": "getyourguide",
            "query": "berlin wall east side gallery guided tour history",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Kreuzberg",
        "type": "Barrio",
        "lat": 52.4938,
        "lng": 13.3898,
        "description": {
          "es": "El distrito que mejor define Berlín en 2026: multicultural, creativo, políticamente activo. El mercado turco de Maybachufer los martes y viernes, el canal del Landwehrkanal con sus bistrots de verano, y la mayor densidad de restaurantes internacionales de la ciudad. Todo sin los precios de Mitte.",
          "en": "The district that best defines Berlin in 2026: multicultural, creative, politically active. The Turkish market at Maybachufer on Tuesdays and Fridays, the Landwehrkanal canal with its summer bistros, and the city's highest density of international restaurants. All without Mitte's prices."
        },
        "rating": 4.7,
        "priceRange": "Libre",
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour gastronómico Kreuzberg",
              "en": "Kreuzberg street food tour"
            },
            "partner": "getyourguide",
            "query": "kreuzberg street food tour berlin turkish market canal",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Prenzlauer Berg",
        "type": "Barrio",
        "lat": 52.5367,
        "lng": 13.4123,
        "description": {
          "es": "Donde vive la clase media berlinesa con niños y perros y muy buenas cafeterías. Las plazas con terraza en primavera tienen esa calma perfecta para trabajar con el portátil dos horas antes de explorar. Helmholtzplatz, Kollwitzplatz, Oderberger Strasse con tiendas de diseño. Precios notablemente menores que el centro.",
          "en": "Where Berlin's middle class lives with children, dogs and excellent coffee shops. The terrace squares in spring have a calm that's perfect for laptop work for two hours before exploring. Helmholtzplatz, Kollwitzplatz, Oderberger Strasse with design shops. Prices notably lower than the centre."
        },
        "rating": 4.6,
        "priceRange": "Libre",
        "affiliateLinks": [
          {
            "label": {
              "es": "Cenar en Prenzlauer Berg",
              "en": "Dinner in Prenzlauer Berg"
            },
            "partner": "thefork",
            "query": "prenzlauer berg berlin restaurant dinner",
            "type": "restaurant"
          }
        ]
      },
      {
        "name": "Puerta de Brandenburgo",
        "type": "Monumento",
        "lat": 52.5163,
        "lng": 13.3777,
        "description": {
          "es": "Obligatoria aunque hayas visto la foto dos mil veces. De noche, iluminada, tiene una presencia que las fotos no capturan. El kilómetro cuadrado entre la Puerta, el Reichstag, el Memorial del Holocausto y Checkpoint Charlie tiene la mayor densidad histórica del siglo XX en Europa.",
          "en": "Compulsory even if you've seen the photo two thousand times. At night, lit up, it has a presence photos don't capture. The square kilometre between the Gate, the Reichstag, the Holocaust Memorial and Checkpoint Charlie has the highest 20th-century historical density in Europe."
        },
        "rating": 4.8,
        "priceRange": "Gratis",
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour histórico a pie por Berlín",
              "en": "Berlin historical walking tour"
            },
            "partner": "civitatis",
            "query": "berlin city walking tour history holocaust memorial checkpoint charlie",
            "type": "activity"
          },
          {
            "label": {
              "es": "Tour en bici por Berlín histórico",
              "en": "Historical Berlin bike tour"
            },
            "partner": "getyourguide",
            "query": "berlin bike tour historical sites cold war",
            "type": "activity"
          }
        ]
      }
    ],
    "events": [
      {
        "name": "Lollapalooza Berlin 2026",
        "type": "festival",
        "date": "12–13 Sep 2026",
        "venue": "Olympiagelände, Berlín",
        "urgency": true,
        "description": {
          "es": "El Olympiagelände — el estadio olímpico de 1936 — se convierte en uno de los festivales más completos del calendario europeo. Cartel que mezcla pop, rock, electrónica e hip-hop en cinco escenarios simultáneos con producción de nivel que justifica el precio del vuelo por sí sola. Dos días de música sin interrupciones en uno de los recintos más fotogénicos de Europa.",
          "en": "The Olympiagelände — the 1936 Olympic stadium — becomes one of the most complete festivals on the European calendar. Lineup mixing pop, rock, electronic and hip-hop across five simultaneous stages with production values that alone justify the price of the flight. Two days of uninterrupted music in one of Europe's most photogenic venues."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Entradas Lollapalooza Berlin 2026",
              "en": "Lollapalooza Berlin 2026 tickets"
            },
            "partner": "ticketmaster",
            "query": "lollapalooza berlin 2026 olympiagelande",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Alojamiento para el festival en Berlín",
              "en": "Festival accommodation in Berlin"
            },
            "partner": "booking",
            "query": "berlin accommodation lollapalooza september 2026",
            "type": "hotel"
          }
        ]
      },
      {
        "name": "Festival of Lights Berlin 2026",
        "type": "art",
        "date": "8–17 Oct 2026",
        "venue": "Todo Berlín",
        "urgency": false,
        "description": {
          "es": "Diez días en octubre en que los edificios más emblemáticos de Berlín — la Puerta de Brandenburgo, la Catedral, el Berliner Dom, el Fernsehturm — se convierten en lienzos de luz. Proyecciones de arte digital a escala arquitectónica visible desde la calle, de acceso gratuito. Uno de los festivales de arte lumínico más importantes de Europa.",
          "en": "Ten days in October when Berlin's most iconic buildings — the Brandenburg Gate, the Cathedral, the Berliner Dom, the Fernsehturm — become canvases of light. Large-scale digital art projections viewable from the street, free access. One of Europe's most important light art festivals."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour nocturno Festival of Lights",
              "en": "Festival of Lights night tour"
            },
            "partner": "getyourguide",
            "query": "berlin festival of lights night tour october projections",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Maratón de Berlín 2026",
        "type": "sport",
        "date": "27 Sep 2026",
        "venue": "Centro histórico de Berlín",
        "urgency": false,
        "description": {
          "es": "Uno de los seis World Marathon Majors, con el récord mundial actual establecido en su circuito plano que pasa por la Puerta de Brandenburgo. Aunque no corras, la ciudad convierte el día de la maratón en un acontecimiento colectivo: los berlineses salen a la calle a animar con una seriedad y organización que dice mucho de cómo funciona esta ciudad.",
          "en": "One of the six World Marathon Majors, with the current world record set on its flat course passing through the Brandenburg Gate. Even if you're not running, the city turns marathon day into a collective event: Berliners take to the streets to cheer with a seriousness and organisation that says a lot about how this city works."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour a pie por la ruta de la maratón",
              "en": "Walking tour along the marathon route"
            },
            "partner": "civitatis",
            "query": "berlin marathon route walking tour historical",
            "type": "activity"
          }
        ]
      }
    ],
    "services": {
      "flights": [
        "skyscanner",
        "kiwi"
      ],
      "hotels": [
        "booking",
        "hostelworld",
        "vrbo"
      ],
      "cars": [
        "discovercars",
        "rentalcars",
        "autoeurope",
        "localrent"
      ],
      "activities": [
        "getyourguide",
        "viator",
        "tiqets",
        "civitatis"
      ],
      "restaurants": [
        "thefork",
        "opentable"
      ],
      "insurance": [
        "safetywing",
        "worldnomads"
      ],
      "esim": [
        "airalo",
        "holafly",
        "saily",
        "yesim"
      ],
      "transfers": [
        "intui",
        "welcomepickups",
        "gettransfer"
      ],
      "parking": [
        "parkimeter"
      ]
    }
  },
  {
    "id": "atenas-guia-2026",
    "slug": "atenas-guia-2026",
    "enSlug": "athens-travel-guide-2026",
    "narrator": "carmen",
    "heroImage": "https://images.unsplash.com/photo-1555993539-1732b0258235?q=80&w=2070&auto=format&fit=crop",
    "city": "Atenas",
    "country": {
      "es": "Grecia",
      "en": "Greece"
    },
    "emoji": "🏛️",
    "date": "2026-03-13",
    "readTime": "9 min",
    "category": "europe",
    "title": {
      "es": "Atenas 2026: La ciudad más antigua de Europa que sigue sin aburrir",
      "en": "Athens 2026: Europe's Oldest City That Still Doesn't Get Boring"
    },
    "subtitle": {
      "es": "Acrópolis, mezze, barrios que funcionan de verdad y uno de los museos arqueológicos más importantes del mundo",
      "en": "Acropolis, mezze, neighbourhoods that actually work and one of the world's most important archaeological museums"
    },
    "excerpt": {
      "es": "Atenas no es el museo al aire libre que te han vendido. Es una ciudad mediterránea ruidosa, complicada, genuina y más barata que Lisboa. Por eso la gente que va una vez vuelve.",
      "en": "Athens isn't the open-air museum you've been sold. It's a loud, complicated, genuine Mediterranean city that's cheaper than Lisbon. That's why people who go once go back."
    },
    "metaDescription": {
      "es": "Guía de Atenas 2026: Acrópolis, Museo Arqueológico Nacional, Plaka y Monastiraki. Qué ver, comer y hacer en Atenas. Festival de Atenas y Epidauro incluido.",
      "en": "Athens guide 2026: Acropolis, National Archaeological Museum, Plaka and Monastiraki. What to see, eat and do in Athens. Athens & Epidaurus Festival included."
    },
    "keywords": {
      "es": [
        "atenas 2026",
        "que ver en atenas",
        "acropolis atenas",
        "guia atenas grecia",
        "plaka monastiraki"
      ],
      "en": [
        "athens 2026",
        "what to see in athens",
        "acropolis athens",
        "athens greece travel guide",
        "plaka monastiraki"
      ]
    },
    "pointsOfInterest": [
      {
        "name": "Acrópolis",
        "type": "Monumento",
        "lat": 37.9715,
        "lng": 23.7267,
        "description": {
          "es": "El Partenón en vivo tiene una escala que ninguna foto transmite. La colina entera — el Erecteion con las cariátides, el Propileos, el templo de Atenea Niké — es una acumulación de arquitectura que justifica el viaje por sí sola. Llega a las 8am cuando abre: las siguientes dos horas antes de que lleguen los grupos son otro mundo.",
          "en": "The Parthenon in person has a scale no photograph transmits. The whole hill — the Erechtheion with its Caryatids, the Propylaea, the Temple of Athena Nike — is an accumulation of architecture that justifies the trip on its own. Arrive at 8am when it opens: the next two hours before tour groups arrive are another world entirely."
        },
        "rating": 4.9,
        "priceRange": "€20 (combinado)",
        "affiliateLinks": [
          {
            "label": {
              "es": "Entrada Acrópolis sin colas",
              "en": "Acropolis skip-the-line ticket"
            },
            "partner": "tiqets",
            "query": "acropolis athens skip the line entry ticket 2026",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Tour guiado Acrópolis temprano",
              "en": "Acropolis early morning guided tour"
            },
            "partner": "getyourguide",
            "query": "acropolis athens early morning guided tour sunrise",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Museo de la Acrópolis",
        "type": "Museo",
        "lat": 37.9684,
        "lng": 23.7292,
        "description": {
          "es": "Uno de los diez mejores museos del mundo. La sala del Partenón en el tercer piso — con luz natural, orientada en la misma dirección que el templo — es la sala de museo más impresionante de Europa. Las esculturas originales del friso están aquí. Los mármoles que el Lord Elgin se llevó al British Museum están representados con moldes grises. El contraste no necesita comentario.",
          "en": "One of the ten best museums in the world. The Parthenon hall on the third floor — in natural light, oriented in the same direction as the temple — is the most impressive museum room in Europe. The original frieze sculptures are here. The marbles Lord Elgin took to the British Museum are represented with grey casts. The contrast needs no comment."
        },
        "rating": 4.9,
        "priceRange": "€10",
        "affiliateLinks": [
          {
            "label": {
              "es": "Entrada Museo de la Acrópolis",
              "en": "Acropolis Museum ticket"
            },
            "partner": "tiqets",
            "query": "acropolis museum athens ticket entry",
            "type": "tickets"
          }
        ]
      },
      {
        "name": "Monastiraki",
        "type": "Barrio",
        "lat": 37.9755,
        "lng": 23.7244,
        "description": {
          "es": "La plaza y su mercadillo son el centro nervioso de Atenas: tiendas de todo y nada, la mezquita otomana todavía en pie, el ágora antigua a dos pasos y el mejor souvlaki de la ciudad. El domingo hay mercado de pulgas en la calle Ifestou. La terraza con vistas a la Acrópolis iluminada de noche es obligatoria al menos una vez.",
          "en": "The square and its flea market are the nerve centre of Athens: shops selling everything and nothing, the Ottoman mosque still standing, the ancient agora two steps away and the city's best souvlaki. On Sundays there's a flea market on Ifestou street. The rooftop bar with views of the illuminated Acropolis at night is compulsory at least once."
        },
        "rating": 4.7,
        "priceRange": "Libre",
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour gastronómico Monastiraki",
              "en": "Monastiraki food and market tour"
            },
            "partner": "getyourguide",
            "query": "monastiraki food tour athens market souvlaki greek street food",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Museo Arqueológico Nacional",
        "type": "Museo",
        "lat": 37.9892,
        "lng": 23.7318,
        "description": {
          "es": "El museo más importante de Grecia. La máscara de Agamenón, el Poseidón de bronce de Artemision y la colección de Thera — frescos minoicos del 1600 a.C. que parecen pintados ayer. Se necesitan tres horas mínimo para verlo con sentido.",
          "en": "The most important museum in Greece. The Mask of Agamemnon, the bronze Poseidon of Artemision and the Thera collection — Minoan frescoes from 1600 BC that look painted yesterday. You need a minimum of three hours to see it properly."
        },
        "rating": 4.8,
        "priceRange": "€12",
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour guiado Museo Arqueológico",
              "en": "National Archaeological Museum guided tour"
            },
            "partner": "civitatis",
            "query": "national archaeological museum athens guided tour ancient greece",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Cabo Sounion",
        "type": "Excursión",
        "lat": 37.6517,
        "lng": 24.026,
        "description": {
          "es": "A 70km de Atenas, el templo de Poseidón sobre el acantilado — del siglo V a.C. — con el Egeo azul en todas direcciones. Lord Byron grabó su nombre en una columna (sigue ahí). La puesta de sol desde el promontorio es uno de los mejores momentos del país.",
          "en": "70km from Athens, the Temple of Poseidon on the cliff — 5th century BC — with the Aegean blue in every direction. Lord Byron carved his name on a column (it's still there). The sunset from the promontory is one of the best moments in the country."
        },
        "rating": 4.8,
        "priceRange": "€20 entrada + transporte",
        "affiliateLinks": [
          {
            "label": {
              "es": "Excursión Cabo Sounion desde Atenas",
              "en": "Cape Sounion day trip from Athens"
            },
            "partner": "civitatis",
            "query": "cape sounion day trip athens temple poseidon sunset",
            "type": "activity"
          }
        ]
      }
    ],
    "events": [
      {
        "name": "Festival de Atenas y Epidauro 2026",
        "type": "cultural",
        "date": "Jun–Sep 2026",
        "venue": "Odeón de Herodes Ático, Atenas",
        "description": {
          "es": "El festival cultural más importante de Grecia. Ópera, teatro y música en el Odeón de Herodes Ático — un teatro al aire libre del año 161 d.C. al pie de la Acrópolis. La experiencia de ver un concierto con la Acrópolis iluminada de fondo y el cielo mediterráneo encima es una de las más memorables de Europa.",
          "en": "Greece's most important cultural festival. Opera, theatre and music at the Odeon of Herodes Atticus — an open-air theatre from 161 AD at the foot of the Acropolis. The experience of attending a concert with the illuminated Acropolis behind you and the Mediterranean sky above is one of the most memorable in Europe."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Entradas Festival de Atenas 2026",
              "en": "Athens Festival 2026 tickets"
            },
            "partner": "tiqets",
            "query": "athens epidaurus festival 2026 odeon herodes atticus tickets",
            "type": "tickets"
          }
        ],
        "urgency": false
      },
      {
        "name": "Maratón de Atenas 2026",
        "type": "sport",
        "date": "Nov 2026",
        "venue": "Maratón – Estadio Panatenaico",
        "description": {
          "es": "El maratón original: desde la ciudad de Maratón hasta el Estadio Panatenaico, el mismo recorrido de Filípides en el 490 a.C. Terminar dentro del estadio de mármol blanco construido en 1896 para los primeros Juegos Olímpicos modernos es uno de los momentos más singulares del deporte amateur mundial.",
          "en": "The original marathon: from the town of Marathon to the Panathenaic Stadium, the same route Pheidippides ran in 490 BC. Finishing inside the white marble stadium built in 1896 for the first modern Olympic Games is one of the most singular moments in amateur sport worldwide."
        },
        "affiliateLinks": [],
        "urgency": true
      },
      {
        "name": "Synch Festival 2026",
        "type": "electronic",
        "date": "Jun 2026",
        "venue": "Parque Fáliro, Atenas",
        "description": {
          "es": "El festival de música electrónica más importante de Grecia. El Parque Fáliro, con la bahía de Atenas de fondo, alberga los nombres más relevantes del circuito europeo de techno. Las noches de verano atenienses — calor seco, brisa del Egeo, amanecer visible desde la pista — hacen que la experiencia sea difícil de reproducir.",
          "en": "Greece's most important electronic music festival. Faliron Park, with the Athens bay as backdrop, hosts the most relevant names on the European techno circuit. Athenian summer nights — dry heat, Aegean breeze, sunrise visible from the dancefloor — make the experience difficult to reproduce elsewhere."
        },
        "affiliateLinks": [],
        "urgency": false
      }
    ],
    "services": {
      "tickets": [
        "tiqets",
        "getyourguide"
      ],
      "activity": [
        "getyourguide",
        "civitatis"
      ],
      "hotel": [
        "booking",
        "hostelworld"
      ],
      "insurance": [
        "safetywing",
        "worldnomads"
      ],
      "esim": [
        "airalo",
        "saily"
      ]
    }
  },
  {
    "id": "sydney-guia-2026",
    "slug": "sydney-guia-2026",
    "enSlug": "sydney-travel-guide-2026",
    "narrator": "marcos",
    "heroImage": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=2070&auto=format&fit=crop",
    "city": "Sydney",
    "country": {
      "es": "Australia",
      "en": "Australia"
    },
    "emoji": "🦘",
    "date": "2026-03-13",
    "readTime": "9 min",
    "category": "oceania",
    "title": {
      "es": "Sydney 2026: La ciudad más espectacular del mundo que nadie sabe cómo pronunciar",
      "en": "Sydney 2026: The Most Spectacular City in the World That Nobody Knows How to Pronounce"
    },
    "subtitle": {
      "es": "Ópera, Bondi, el puente y Vivid Sydney: una ciudad construida alrededor de uno de los puertos naturales más hermosos del planeta",
      "en": "Opera House, Bondi, the Bridge and Vivid Sydney: a city built around one of the most beautiful natural harbours on the planet"
    },
    "excerpt": {
      "es": "Sydney es cara, está lejos, y no importa. El puerto a las 6am con el sol saliendo detrás del puente es uno de los momentos más difíciles de olvidar del mundo.",
      "en": "Sydney is expensive, it's far away, and none of that matters. The harbour at 6am with the sun rising behind the bridge is one of the hardest things to forget in the world."
    },
    "metaDescription": {
      "es": "Guía de Sydney 2026: Ópera de Sydney, Bondi Beach, Harbour Bridge y Blue Mountains. Qué ver, dónde comer y cuándo ir. Vivid Sydney incluido.",
      "en": "Sydney guide 2026: Sydney Opera House, Bondi Beach, Harbour Bridge and Blue Mountains. What to see, where to eat and when to go. Vivid Sydney included."
    },
    "keywords": {
      "es": [
        "sydney 2026",
        "que ver en sydney",
        "opera house sydney",
        "bondi beach",
        "vivid sydney",
        "guia viaje australia"
      ],
      "en": [
        "sydney 2026",
        "what to see in sydney",
        "sydney opera house",
        "bondi beach",
        "vivid sydney",
        "australia travel guide"
      ]
    },
    "pointsOfInterest": [
      {
        "name": "Ópera de Sydney",
        "type": "Monumento",
        "lat": -33.8568,
        "lng": 151.2153,
        "description": {
          "es": "La Ópera de Sydney no es solo un edificio: es el argumento más convincente de que la arquitectura puede ser, además de funcional, emocionante. Las cáscaras de hormigón de Jørn Utzon — construidas entre 1959 y 1973 con tecnología que no existía cuando empezaron — siguen siendo la referencia de que lo imposible puede ejecutarse si alguien se empeña suficientemente. El interior se visita con tour; el exterior y los escalones de Bennelong Point son de acceso libre.",
          "en": "The Sydney Opera House is not just a building: it's the most convincing argument that architecture can be, in addition to functional, genuinely exciting. Jørn Utzon's concrete shells — built between 1959 and 1973 with technology that didn't exist when they started — remain the reference for the idea that the impossible can be executed if someone is determined enough. The interior can be visited by tour; the exterior and Bennelong Point steps are freely accessible."
        },
        "rating": 4.9,
        "priceRange": "Tour desde AUD 44",
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour Ópera de Sydney",
              "en": "Sydney Opera House guided tour"
            },
            "partner": "getyourguide",
            "query": "sydney opera house guided tour inside backstage",
            "type": "activity"
          },
          {
            "label": {
              "es": "Entradas espectáculo en la Ópera",
              "en": "Sydney Opera House performance tickets"
            },
            "partner": "tiqets",
            "query": "sydney opera house performance tickets 2026",
            "type": "tickets"
          }
        ]
      },
      {
        "name": "Bondi Beach",
        "type": "Playa",
        "lat": -33.8908,
        "lng": 151.2743,
        "description": {
          "es": "La playa urbana más famosa del hemisferio sur y, en temporada (noviembre-marzo), probablemente la más dinámica del mundo. El paseo costero de Bondi a Coogee — seis kilómetros de acantilados, piscinas de roca y playas intermedias — es la caminata urbana más cinematográfica de Australia. La piscina de Bondi Icebergs, construida sobre las rocas con el Pacífico golpeando el borde, es obligatoria aunque no nades.",
          "en": "The most famous urban beach in the Southern Hemisphere and, in season (November-March), probably the most dynamic in the world. The coastal walk from Bondi to Coogee — six kilometres of cliffs, rock pools and intermediate beaches — is the most cinematic urban walk in Australia. The Bondi Icebergs pool, built on the rocks with the Pacific crashing against the edge, is compulsory even if you don't swim."
        },
        "rating": 4.8,
        "priceRange": "Libre",
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour Bondi Beach y paseo costero",
              "en": "Bondi Beach and coastal walk tour"
            },
            "partner": "getyourguide",
            "query": "bondi beach coastal walk coogee sydney tour",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Harbour Bridge",
        "type": "Monumento",
        "lat": -33.8523,
        "lng": 151.2108,
        "description": {
          "es": "Cruzar el puente a pie es gratis y da las mejores vistas del puerto y la Ópera. Subir al arco — el BridgeClimb — cuesta unos 200 dólares australianos y da las mejores vistas de Sydney desde 134 metros de altura. Vale la pena si el presupuesto lo permite; el cruce a pie ya es de por sí suficientemente espectacular.",
          "en": "Crossing the bridge on foot is free and gives the best views of the harbour and Opera House. Climbing the arch — BridgeClimb — costs around AUD 200 and gives the best views of Sydney from 134 metres up. Worth it if the budget allows; the on-foot crossing is already spectacular enough on its own."
        },
        "rating": 4.8,
        "priceRange": "Gratis (pie) / AUD 200 (arco)",
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour panorámico del puerto de Sydney",
              "en": "Sydney Harbour panoramic cruise"
            },
            "partner": "getyourguide",
            "query": "sydney harbour cruise panoramic opera house bridge",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Montañas Azules",
        "type": "Excursión",
        "lat": -33.7153,
        "lng": 150.3115,
        "description": {
          "es": "A 90 minutos de Sydney en tren, el Parque Nacional de las Blue Mountains tiene los Three Sisters — la formación rocosa más fotografiada de Australia — el Gran Cañón del Yarramundi y el ferrocarril más empinado del mundo (52 grados). La niebla de aceite de eucalipto que da el color azul al horizonte en los días claros es fenómeno real, no postal turística.",
          "en": "90 minutes from Sydney by train, the Blue Mountains National Park has the Three Sisters — the most photographed rock formation in Australia — the Yarramundi Grand Canyon and the steepest railway in the world (52 degrees). The eucalyptus oil mist that gives the horizon its blue colour on clear days is a real phenomenon, not a tourist poster."
        },
        "rating": 4.8,
        "priceRange": "Desde AUD 99 (excursión)",
        "affiliateLinks": [
          {
            "label": {
              "es": "Excursión Montañas Azules desde Sydney",
              "en": "Blue Mountains day trip from Sydney"
            },
            "partner": "getyourguide",
            "query": "blue mountains day trip sydney three sisters katoomba",
            "type": "activity"
          }
        ]
      },
      {
        "name": "The Rocks",
        "type": "Barrio",
        "lat": -33.8599,
        "lng": 151.209,
        "description": {
          "es": "El barrio más antiguo de Sydney, donde la Primera Flota desembarcó en 1788. Las calles empedradas, los almacenes de piedra convertidos en bares y el mercado del fin de semana son el contraste perfecto con el CBD de cristal que empieza justo detrás. El Saturday Market tiene el mejor street food de la ciudad.",
          "en": "Sydney's oldest neighbourhood, where the First Fleet landed in 1788. The cobbled streets, stone warehouses converted into bars and the weekend market are the perfect contrast with the glass CBD that starts just behind it. The Saturday Market has the best street food in the city."
        },
        "rating": 4.6,
        "priceRange": "Libre",
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour histórico The Rocks",
              "en": "The Rocks historical walking tour"
            },
            "partner": "getyourguide",
            "query": "the rocks sydney historical walking tour colonial history",
            "type": "activity"
          }
        ]
      }
    ],
    "events": [
      {
        "name": "Vivid Sydney 2026",
        "type": "art",
        "date": "May–Jun 2026",
        "venue": "Puerto de Sydney",
        "description": {
          "es": "El festival de luz, música e ideas más grande del hemisferio sur. Durante tres semanas, la Ópera, el Harbour Bridge, el CBD y el puerto se convierten en instalaciones de luz interactiva a escala arquitectónica. Gratuito en su mayor parte, con algunos espectáculos de pago. El reflejo de las instalaciones en el puerto de noche es la imagen que define Sydney en 2026.",
          "en": "The largest festival of light, music and ideas in the Southern Hemisphere. For three weeks, the Opera House, Harbour Bridge, CBD and harbour become interactive light installations at architectural scale. Mostly free, with some ticketed shows. The reflection of the installations in the harbour at night is the defining image of Sydney in 2026."
        },
        "affiliateLinks": [],
        "urgency": false
      },
      {
        "name": "Sydney Festival 2026",
        "type": "cultural",
        "date": "Ene 2026",
        "venue": "Sydney (varios recintos)",
        "description": {
          "es": "El festival cultural de verano australiano más importante. Tres semanas de teatro, música, danza y arte visual en una ciudad que, en enero, vive literalmente en la calle. La programación al aire libre en Hyde Park y en el puerto es gratuita. Es también el mes con el tiempo más perfecto del año en Sydney.",
          "en": "Australia's most important summer cultural festival. Three weeks of theatre, music, dance and visual art in a city that, in January, literally lives in the street. The outdoor programme in Hyde Park and at the harbour is free. It's also the month with the most perfect weather of the year in Sydney."
        },
        "affiliateLinks": [],
        "urgency": false
      },
      {
        "name": "Nochevieja en el Puerto 2026",
        "type": "festival",
        "date": "31 Dic 2026",
        "venue": "Puerto de Sydney",
        "description": {
          "es": "Los fuegos artificiales del Puerto de Sydney en Nochevieja son los primeros en verse en las ciudades más pobladas del mundo — Sydney es una de las primeras capitales en entrar en el año nuevo. El espectáculo desde Circular Quay, Mrs Macquaries Point o Cremorne Point tiene una escala que la televisión no transmite fielmente. Las mejores ubicaciones se llenan horas antes.",
          "en": "The Sydney Harbour fireworks on New Year's Eve are among the first seen in the world's most populated cities — Sydney is one of the first major capitals to enter the new year. The spectacle from Circular Quay, Mrs Macquaries Point or Cremorne Point has a scale that television doesn't faithfully convey. The best locations fill up hours in advance."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Crucero Nochevieja Puerto de Sydney",
              "en": "Sydney Harbour New Year's Eve cruise"
            },
            "partner": "getyourguide",
            "query": "sydney harbour new year eve fireworks cruise dinner 2026",
            "type": "tickets"
          }
        ],
        "urgency": true
      }
    ],
    "services": {
      "tickets": [
        "tiqets",
        "getyourguide"
      ],
      "activity": [
        "getyourguide",
        "klook"
      ],
      "hotel": [
        "booking",
        "hostelworld"
      ],
      "insurance": [
        "safetywing",
        "worldnomads"
      ],
      "esim": [
        "airalo",
        "saily"
      ]
    }
  },
  {
    "id": "tiflis-guia-2026",
    "slug": "tiflis-guia-2026",
    "enSlug": "tbilisi-travel-guide-2026",
    "narrator": "elena",
    "heroImage": "https://images.unsplash.com/photo-1565008576549-57569a49371d?q=80&w=2070&auto=format&fit=crop",
    "city": {
      "es": "Tiflis",
      "en": "Tbilisi"
    },
    "country": {
      "es": "Georgia",
      "en": "Georgia"
    },
    "emoji": "🇬🇪",
    "date": "2026-03-13",
    "readTime": "9 min",
    "category": "europe",
    "title": {
      "es": "Tiflis 2026: La capital que todavía no sabe que es la más interesante de Europa",
      "en": "Tbilisi 2026: The Capital That Doesn't Know Yet It's the Most Interesting in Europe"
    },
    "subtitle": {
      "es": "Baños de azufre, vino natural, casco antiguo declarado Patrimonio y la comunidad de nómadas digitales más densa de la región",
      "en": "Sulphur baths, natural wine, UNESCO-listed old town and the densest digital nomad community in the region"
    },
    "excerpt": {
      "es": "Tiflis tiene todo lo que Berlín tenía en 2010: creatividad brutal, precio razonable, escena cultural en ebullición y la sensación de llegar antes de que llegue todo el mundo. Esa ventana no se queda abierta mucho tiempo.",
      "en": "Tbilisi has everything Berlin had in 2010: brutal creativity, reasonable prices, a boiling cultural scene and the feeling of arriving before everyone else does. That window doesn't stay open long."
    },
    "metaDescription": {
      "es": "Guía de Tiflis 2026: Casco Antiguo, baños de azufre, vino georgiano y Fabrika. Qué ver y hacer en Tiflis. La ciudad más interesante de Europa del Este.",
      "en": "Tbilisi guide 2026: Old Town, sulphur baths, Georgian wine and Fabrika. What to see and do in Tbilisi. The most interesting city in Eastern Europe."
    },
    "keywords": {
      "es": [
        "tiflis 2026",
        "que ver en tiflis",
        "guia tiflis georgia",
        "nomada digital tiflis",
        "tbilisi viaje"
      ],
      "en": [
        "tbilisi 2026",
        "what to see in tbilisi",
        "tbilisi georgia travel guide",
        "digital nomad tbilisi",
        "georgia travel"
      ]
    },
    "pointsOfInterest": [
      {
        "name": "Casco Antiguo (Kala)",
        "type": "Barrio",
        "lat": 41.69,
        "lng": 44.801,
        "description": {
          "es": "El Kala de Tiflis — las calles de madera tallada, los balcones que vuelan sobre los callejones, las iglesias armenias y ortodoxas a metros de distancia, los baños de azufre debajo de las cúpulas — es el conjunto urbano más singular de Europa del Este. No hay un punto de inicio: se camina. El barrio de Abanotubani, con las cúpulas de los baños de azufre sobre el río Mtkvari, es la imagen más reconocible de la ciudad.",
          "en": "Tbilisi's Kala district — the carved wooden streets, the balconies that fly out over the alleyways, the Armenian and Orthodox churches metres apart, the sulphur baths beneath the domes — is the most singular urban ensemble in Eastern Europe. There's no starting point: you just walk. The Abanotubani neighbourhood, with the sulphur bath domes above the Mtkvari river, is the city's most recognisable image."
        },
        "rating": 4.9,
        "priceRange": "Libre",
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour a pie Casco Antiguo de Tiflis",
              "en": "Tbilisi Old Town walking tour"
            },
            "partner": "getyourguide",
            "query": "tbilisi old town walking tour abanotubani narikala history",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Baños de Azufre de Abanotubani",
        "type": "Experiencia",
        "lat": 41.6862,
        "lng": 44.8073,
        "description": {
          "es": "Los baños de azufre llevan funcionando en este sitio desde el siglo V. El agua caliente natural — 37-38°C, con olor a azufre que desaparece en veinte minutos — sale directamente del subsuelo. Las opciones van desde baños públicos por dos laris hasta habitaciones privadas con servicio de masaje por 30-50 euros. Alexandre Dumas, Pushkin y Marco Polo mencionaron los baños. Probablemente no hay mejor endorsement posible.",
          "en": "The sulphur baths have been operating on this site since the 5th century. The natural hot water — 37-38°C, with a sulphur smell that disappears within twenty minutes — comes directly from underground. Options range from public baths for two laris to private rooms with massage service for €30-50. Alexandre Dumas, Pushkin and Marco Polo all mentioned the baths. There is probably no better endorsement possible."
        },
        "rating": 4.8,
        "priceRange": "2-50 GEL",
        "affiliateLinks": [
          {
            "label": {
              "es": "Reserva baños de azufre privados",
              "en": "Book private sulphur bath Tbilisi"
            },
            "partner": "getyourguide",
            "query": "tbilisi sulphur bath private abanotubani traditional experience",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Fortaleza de Narikala",
        "type": "Monumento",
        "lat": 41.6879,
        "lng": 44.81,
        "description": {
          "es": "La fortaleza del siglo IV que domina el casco antiguo desde la colina. Sube a pie por las calles del Kala o en el teleférico desde Rike Park. Las vistas sobre la ciudad — el Mtkvari, las cúpulas de los baños, las iglesias, los barrios nuevos al fondo — son las mejores de Tiflis. El atardecer desde las murallas convierte el skyline en algo que los Instagram handles de viaje todavía no han terminado de procesar correctamente.",
          "en": "The 4th-century fortress that dominates the old town from the hill. Walk up through the Kala streets or take the cable car from Rike Park. The views over the city — the Mtkvari, the bath domes, the churches, the new districts in the distance — are Tbilisi's best. Sunset from the walls turns the skyline into something that travel Instagram accounts still haven't finished processing correctly."
        },
        "rating": 4.7,
        "priceRange": "Libre",
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour Narikala y casco antiguo",
              "en": "Narikala fortress and old town tour"
            },
            "partner": "getyourguide",
            "query": "narikala fortress tbilisi old town sunset views tour",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Fabrika",
        "type": "Barrio",
        "lat": 41.7,
        "lng": 44.7941,
        "description": {
          "es": "Una antigua fábrica de costura soviética reconvertida en el espacio cultural más interesante de Tiflis: hostels, estudios de tatuaje, cafeterías de tercera ola, galerías, tiendas de ropa de segunda mano y bares que empiezan a las 10pm. El patio central tiene la concentración de opciones buenas por metro cuadrado más alta de Georgia. Es también el epicentro de la comunidad de nómadas digitales de la ciudad.",
          "en": "A former Soviet sewing factory converted into Tbilisi's most interesting cultural space: hostels, tattoo studios, third-wave coffee shops, galleries, vintage clothing stores and bars that start at 10pm. The central courtyard has the highest concentration of good options per square metre in Georgia. It's also the epicentre of the city's digital nomad community."
        },
        "rating": 4.7,
        "priceRange": "Libre",
        "affiliateLinks": []
      },
      {
        "name": "Kakheti y las bodegas georgianas",
        "type": "Excursión",
        "lat": 41.65,
        "lng": 45.35,
        "description": {
          "es": "Georgia es el lugar donde nació el vino — literalmente: las primeras evidencias de vinificación en el mundo datan del 6000 a.C. en este territorio. La región de Kakheti, a 90 minutos de Tiflis, tiene bodegas que producen el vino en ánforas de barro enterradas (qvevri) siguiendo métodos del Neolítico. El vino natural georgiano — sin sulfitos, fermentado con piel, de color ámbar — es una categoría propia. Una excursión de día al valle de Alazani y sus bodegas es una de las mejores inversiones culturales y gastronómicas del viaje.",
          "en": "Georgia is where wine was born — literally: the earliest evidence of winemaking in the world dates to 6000 BC in this territory. The Kakheti region, 90 minutes from Tbilisi, has wineries that produce wine in buried clay amphorae (qvevri) following Neolithic methods. Georgian natural wine — without sulphites, skin-fermented, amber in colour — is a category of its own. A day excursion to the Alazani valley and its wineries is one of the best cultural and gastronomic investments of the trip."
        },
        "rating": 4.9,
        "priceRange": "Desde 50€ (excursión)",
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour vino georgiano Kakheti",
              "en": "Georgian wine tour Kakheti day trip"
            },
            "partner": "getyourguide",
            "query": "kakheti georgia wine tour day trip tbilisi alazani valley qvevri",
            "type": "activity"
          }
        ]
      }
    ],
    "events": [
      {
        "name": "Tbilisi Open Air 2026",
        "type": "electronic",
        "date": "Jul 2026",
        "venue": "Tsinandali Estate, Kakheti",
        "description": {
          "es": "El festival de música electrónica más importante del Cáucaso y uno de los mejor curados de Europa del Este. En el recinto histórico de Tsinandali, en la región vinícola de Kakheti, con artistas del circuito de Berlín, Ámsterdam y Tbilisi. La combinación de música electrónica de alta calidad, vino georgiano y el paisaje del Cáucaso es difícil de superar.",
          "en": "The most important electronic music festival in the Caucasus and one of the best-curated in Eastern Europe. At the historic Tsinandali estate in the Kakheti wine region, with artists from the Berlin, Amsterdam and Tbilisi circuits. The combination of high-quality electronic music, Georgian wine and the Caucasus landscape is hard to beat."
        },
        "affiliateLinks": [],
        "urgency": false
      },
      {
        "name": "Tbilisi Jazz Festival 2026",
        "type": "festival",
        "date": "Oct 2026",
        "venue": "Centro de Tiflis",
        "description": {
          "es": "Festival de jazz internacional que lleva décadas consolidado en el calendario cultural de Tiflis. Artistas internacionales y georgianos en los principales recintos del centro histórico. El jazz en Tiflis tiene una tradición específica desde la época soviética — la ciudad fue uno de los pocos lugares del bloque donde el jazz occidental se toleró y desarrolló con cierta libertad.",
          "en": "International jazz festival that has been established in Tbilisi's cultural calendar for decades. International and Georgian artists at the main venues in the historic centre. Jazz in Tbilisi has a specific tradition since the Soviet era — the city was one of the few places in the bloc where Western jazz was tolerated and developed with some freedom."
        },
        "affiliateLinks": [],
        "urgency": false
      },
      {
        "name": "Rtveli — Vendimia Georgiana 2026",
        "type": "gastronomy",
        "date": "Sep–Oct 2026",
        "venue": "Kakheti, Georgia",
        "description": {
          "es": "La vendimia georgiana — el Rtveli — es un acontecimiento cultural y social tan importante en Georgia como la Navidad en otros países. Las bodegas de Kakheti abren sus viñedos y qvevris al público. Pisar uva en ánforas de barro, comer en mesas comunales con vino sin parar y entender por qué los georgianos tienen la relación con la hospitalidad que tienen. Una de las experiencias más genuinas disponibles en Europa del Este.",
          "en": "The Georgian harvest — the Rtveli — is a cultural and social event as important in Georgia as Christmas is in other countries. The Kakheti wineries open their vineyards and qvevris to the public. Treading grapes in clay amphorae, eating at communal tables with endless wine and understanding why Georgians have the relationship with hospitality that they do. One of the most genuine experiences available in Eastern Europe."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Experiencia vendimia georgiana Kakheti",
              "en": "Georgian harvest experience Kakheti"
            },
            "partner": "getyourguide",
            "query": "georgia rtveli wine harvest experience kakheti tbilisi",
            "type": "activity"
          }
        ],
        "urgency": false
      }
    ],
    "services": {
      "tickets": [
        "tiqets",
        "getyourguide"
      ],
      "activity": [
        "getyourguide",
        "civitatis"
      ],
      "hotel": [
        "booking",
        "hostelworld"
      ],
      "insurance": [
        "safetywing",
        "worldnomads"
      ],
      "esim": [
        "airalo",
        "saily"
      ]
    }
  },
  {
    "id": "30",
    "slug": "florencia-guia-2026",
    "enSlug": "florence-travel-guide-2026",
    "narrator": "carmen",
    "category": "europe",
    "city": "Florencia",
    "country": {
      "es": "Italia",
      "en": "Italy"
    },
    "emoji": "🌸",
    "heroImage": "https://images.unsplash.com/photo-1541370976299-4d24be33238b?w=1200&q=80",
    "title": {
      "es": "Florencia 2026: La Ciudad Que Puso el Arte en la Calle",
      "en": "Florence 2026: The City That Put Art on the Street"
    },
    "subtitle": {
      "es": "El Renacimiento en vivo — museos, mercados y cómo no colapsar en la cola de los Uffizi",
      "en": "The Renaissance live — museums, markets and how not to collapse in the Uffizi queue"
    },
    "date": "2026-03-13",
    "readTime": "10 min",
    "metaDescription": {
      "es": "Guía completa Florencia 2026: Uffizi, Duomo, Galería de la Academia, Oltrarno y los mejores restaurantes. Con consejos para evitar colas y lo que Carmen descubrió sobre el arte que ninguna audioguía cuenta.",
      "en": "Complete Florence 2026 guide: Uffizi, Duomo, Galleria dell'Accademia, Oltrarno and the best restaurants. Tips to skip queues and what Carmen discovered about art that no audio guide covers."
    },
    "keywords": {
      "es": [
        "florencia 2026",
        "guía florencia",
        "uffizi entradas",
        "duomo florencia",
        "galería academia",
        "david miguel ángel",
        "oltrarno barrios"
      ],
      "en": [
        "florence 2026",
        "florence travel guide",
        "uffizi tickets",
        "florence duomo",
        "galleria accademia",
        "michelangelo david",
        "oltrarno district"
      ]
    },
    "excerpt": {
      "es": "Florencia es la ciudad donde el arte dejó de ser decoración y se convirtió en argumento. Carmen lleva cuatro semanas leyendo sobre el Renacimiento y aún así la primera mañana frente al David la dejó sin palabras. Hay destinos que te preparan. Florencia te sorprende.",
      "en": "Florence is the city where art stopped being decoration and became argument. Carmen spent four weeks reading about the Renaissance and yet the first morning in front of the David left her speechless. Some destinations prepare you. Florence surprises you."
    },
    "pointsOfInterest": [
      {
        "name": "Galería de los Uffizi",
        "emoji": "🖼️",
        "category": "museum",
        "rating": 4.8,
        "description": {
          "es": "El museo más importante del Renacimiento italiano. Botticelli, Leonardo, Miguel Ángel, Rafael y Tiziano bajo el mismo techo. La colección de la familia Medici que acabó siendo patrimonio de toda la humanidad. Reserva con meses de antelación — la cola sin reserva puede superar las tres horas.",
          "en": "The most important museum of the Italian Renaissance. Botticelli, Leonardo, Michelangelo, Raphael and Titian under one roof. The Medici family collection that became the heritage of all humanity. Book months in advance — the walk-up queue can exceed three hours."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Entradas Uffizi sin colas",
              "en": "Uffizi skip-the-line tickets"
            },
            "partner": "tiqets",
            "query": "uffizi florence skip line",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Tour guiado Uffizi",
              "en": "Guided Uffizi tour"
            },
            "partner": "musement",
            "query": "uffizi guided tour florence",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Duomo — Cattedrale di Santa Maria del Fiore",
        "emoji": "⛪",
        "category": "landmark",
        "rating": 4.9,
        "description": {
          "es": "La cúpula de Brunelleschi es una de las obras de ingeniería más audaces de la historia: construida entre 1420 y 1436 sin cimbra, con técnicas que el propio Brunelleschi inventó sobre la marcha. Sube a la cúpula o al campanile de Giotto para las mejores vistas del tejado rojo de la ciudad.",
          "en": "Brunelleschi's dome is one of the most audacious engineering feats in history: built between 1420 and 1436 without centering, using techniques Brunelleschi invented as he went. Climb the dome or Giotto's campanile for the best views of the city's red rooftops."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Entradas Duomo y cúpula",
              "en": "Duomo and dome tickets"
            },
            "partner": "tiqets",
            "query": "duomo florence cathedral dome",
            "type": "tickets"
          }
        ]
      },
      {
        "name": "Galería de la Academia — El David",
        "emoji": "🏛️",
        "category": "museum",
        "rating": 4.8,
        "description": {
          "es": "El David de Miguel Ángel mide 5,17 metros. Las fotos no transmiten la escala. Tampoco la tensión del cuerpo en el momento exacto antes de lanzar la piedra — Miguel Ángel esculpió el instante de máxima concentración, no el triunfo. Reserva entrada con antelación. Sin reserva, la cola puede durar dos horas.",
          "en": "Michelangelo's David stands 5.17 metres tall. Photos don't convey the scale. Nor the body's tension in the exact moment before releasing the stone — Michelangelo sculpted maximum concentration, not triumph. Book in advance. Walk-up queues can be two hours."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Entradas Galería Academia",
              "en": "Galleria Accademia tickets"
            },
            "partner": "tiqets",
            "query": "galleria accademia florence david",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Tour David + Uffizi",
              "en": "David + Uffizi tour"
            },
            "partner": "getyourguide",
            "query": "david michelangelo florence tour",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Ponte Vecchio y Oltrarno",
        "emoji": "🌉",
        "category": "neighborhood",
        "rating": 4.7,
        "description": {
          "es": "El Ponte Vecchio es el único puente de Florencia que sobrevivió a la Segunda Guerra Mundial — según la leyenda, por orden directa de Hitler, que no quiso destruir algo tan bello. El barrio de Oltrarno, al otro lado, es el Florencia sin filtros: artesanos, restaurantes locales, cuestas empedradas y vecinos reales.",
          "en": "Ponte Vecchio is the only bridge in Florence to survive World War II — according to legend, on Hitler's direct orders, who couldn't bring himself to destroy something so beautiful. The Oltrarno district on the far side is unfiltered Florence: craftspeople, local restaurants, cobbled slopes and real residents."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Walking tour Oltrarno",
              "en": "Oltrarno walking tour"
            },
            "partner": "musement",
            "query": "oltrarno florence walking tour",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Jardines de Bóboli y Palazzo Pitti",
        "emoji": "🌿",
        "category": "attraction",
        "rating": 4.5,
        "description": {
          "es": "Los jardines de Bóboli son el pulmón verde de Florencia: un laberinto de estatuas, fuentes y cipreses que sube por la colina detrás del Palazzo Pitti. El palazzo en sí alberga seis museos, incluyendo la Galería Palatina con más Rafaeles y Titzianos de los que ninguna mente puede procesar en un día.",
          "en": "The Boboli Gardens are Florence's green lung: a labyrinth of statues, fountains and cypresses climbing the hill behind Palazzo Pitti. The palazzo itself houses six museums, including the Palatine Gallery with more Raphaels and Titians than any mind can process in a day."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Entrada Bóboli + Pitti",
              "en": "Boboli + Pitti ticket"
            },
            "partner": "tiqets",
            "query": "boboli gardens palazzo pitti florence",
            "type": "tickets"
          }
        ]
      }
    ],
    "events": [
      {
        "name": {
          "es": "Scoppio del Carro — Pascua",
          "en": "Scoppio del Carro — Easter"
        },
        "date": "2026-04-05",
        "type": "cultural",
        "venue": {
          "es": "Plaza del Duomo, Florencia",
          "en": "Piazza del Duomo, Florence"
        },
        "description": {
          "es": "El Scoppio del Carro (Explosión del Carro) es una de las tradiciones de Pascua más antiguas de Europa: un carro histórico lleno de fuegos artificiales se hace estallar en la Plaza del Duomo. La tradición data del siglo XV. Los florentinos lo ven como augurio de la cosecha del año.",
          "en": "The Scoppio del Carro (Explosion of the Cart) is one of Europe's oldest Easter traditions: a historic cart filled with fireworks is detonated in Piazza del Duomo. The tradition dates to the 15th century. Florentines see it as an omen for the year's harvest."
        },
        "image": "https://images.unsplash.com/photo-1568454537842-d933259bb258?w=800&q=80"
      },
      {
        "name": {
          "es": "Calcio Storico Fiorentino",
          "en": "Calcio Storico Fiorentino"
        },
        "date": "2026-06-24",
        "type": "sport",
        "venue": {
          "es": "Plaza de Santa Croce, Florencia",
          "en": "Piazza Santa Croce, Florence"
        },
        "description": {
          "es": "El Calcio Storico es el deporte más violento del mundo con uniforme del siglo XVI. Una mezcla de fútbol, rugby y lucha libre jugada por cuatro equipos que representan los cuatro barrios históricos de Florencia. Las finales son en junio, en la Plaza de Santa Croce convertida en campo de tierra.",
          "en": "Calcio Storico is the world's most violent sport played in 16th-century costume. A blend of football, rugby and wrestling played by four teams representing Florence's four historic districts. Finals are in June, in Piazza Santa Croce transformed into a dirt pitch."
        },
        "image": "https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=800&q=80"
      },
      {
        "name": {
          "es": "Estate Fiesolana — Festival de Verano",
          "en": "Estate Fiesolana — Summer Festival"
        },
        "date": "2026-06-15",
        "type": "cultural",
        "venue": {
          "es": "Teatro Romano de Fiesole, Florencia",
          "en": "Roman Theatre of Fiesole, Florence"
        },
        "description": {
          "es": "El festival de verano de Fiesole lleva décadas con conciertos de música clásica, ópera y jazz en el Teatro Romano de 70 a.C., con vistas panorámicas sobre Florencia. Subir en autobús desde la ciudad, cenar en Fiesole y bajar a pie con el sol cayendo sobre el Arno es una de las experiencias que Carmen anota en su cuaderno de 'imprescindibles'.",
          "en": "Fiesole's summer festival has run for decades with classical music, opera and jazz concerts in the 70 BC Roman Theatre, with panoramic views over Florence. Taking the bus up from the city, dining in Fiesole and walking back as the sun drops over the Arno is one of those experiences Carmen notes in her 'unmissables' book."
        },
        "image": "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80"
      }
    ],
    "services": {
      "activities": [
        "tiqets",
        "musement",
        "getyourguide"
      ],
      "hotels": [
        "booking"
      ],
      "insurance": [
        "safetywing"
      ],
      "esim": [
        "airalo"
      ]
    }
  },
  {
    "id": "31",
    "slug": "venecia-guia-2026",
    "enSlug": "venice-travel-guide-2026",
    "narrator": "david",
    "category": "europe",
    "city": "Venecia",
    "country": {
      "es": "Italia",
      "en": "Italy"
    },
    "emoji": "🚢",
    "heroImage": "https://images.unsplash.com/photo-1534113414509-0eec2bfb493f?w=1200&q=80",
    "title": {
      "es": "Venecia 2026: La Ciudad Que No Debería Existir (Y Sin Embargo)",
      "en": "Venice 2026: The City That Shouldn't Exist (And Yet)"
    },
    "subtitle": {
      "es": "Cicchetti en el Cannaregio, góndolas que no vas a coger y por qué el mejor restaurante de Venecia no tiene menú",
      "en": "Cicchetti in Cannaregio, gondolas you won't take and why the best restaurant in Venice has no menu"
    },
    "date": "2026-03-16",
    "readTime": "10 min",
    "metaDescription": {
      "es": "Guía Venecia 2026: Palacio Ducal, Carnaval, bacari y cicchetti en Cannaregio, evitar colas y los mejores restaurantes sin trampa. Con consejos de David, el gastrónomo que planifica los viajes por la comida.",
      "en": "Venice 2026 guide: Doge's Palace, Carnival, bacari and cicchetti in Cannaregio, skip the queues and the best restaurants with no tourist traps. With David's tips, the foodie who plans trips around eating."
    },
    "keywords": {
      "es": [
        "venecia 2026",
        "guía venecia",
        "que ver venecia",
        "palacio ducal entradas",
        "carnaval venecia 2026",
        "bacari cicchetti",
        "restaurantes venecia",
        "cannaregio"
      ],
      "en": [
        "venice 2026",
        "venice travel guide",
        "what to see venice",
        "doge's palace tickets",
        "venice carnival 2026",
        "bacari cicchetti",
        "venice restaurants",
        "cannaregio district"
      ]
    },
    "excerpt": {
      "es": "Venecia es la única ciudad del mundo donde me he perdido deliberadamente y he llegado a un sitio mejor del que buscaba. David lleva tres días aquí, ha comido en ocho bacari y ya sabe que la ruta de los cicchetti por el Cannaregio vale más que cualquier audioguía.",
      "en": "Venice is the only city in the world where I've deliberately got lost and ended up somewhere better than where I was headed. David has been here three days, eaten in eight bacari, and already knows that the cicchetti route through Cannaregio is worth more than any audio guide."
    },
    "pointsOfInterest": [
      {
        "name": "Palacio Ducal",
        "emoji": "🏛️",
        "category": "museum",
        "rating": 4.8,
        "description": {
          "es": "El centro del poder de la República Serenísima durante casi mil años. El Palacio Ducal es la sede del Dogo, el Senado, los tribunales y las prisiones — todo en el mismo edificio. El Puente de los Suspiros conecta los salones del poder con las celdas: la distancia entre la condena y el encierro era literalmente de veinte metros. Reserva con antelación o la cola puede ser de dos horas.",
          "en": "The seat of power of the Serenissima Republic for nearly a thousand years. The Doge's Palace housed the Doge, the Senate, the courts and the prisons — all in the same building. The Bridge of Sighs connects the halls of power to the cells: the distance between sentencing and imprisonment was literally twenty metres. Book ahead or the queue can be two hours."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Entradas Palacio Ducal sin colas",
              "en": "Doge's Palace skip-the-line tickets"
            },
            "partner": "tiqets",
            "query": "doge's palace venice skip line",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Tour Palacio Ducal + San Marcos",
              "en": "Doge's Palace + St Mark's tour"
            },
            "partner": "musement",
            "query": "doge's palace venice guided tour",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Basílica de San Marcos",
        "emoji": "⛪",
        "category": "landmark",
        "rating": 4.9,
        "description": {
          "es": "La basílica más fastuosa de Europa occidental: mosaicos dorados del siglo XI que cubren 8.000 metros cuadrados de techo y paredes. La entrada a la basílica es gratuita, pero la Pala d'Oro — el retablo de oro con 2.000 piedras preciosas — y el museo tienen tarifa aparte. Llega antes de las 9 de la mañana para evitar las colas de grupos.",
          "en": "The most opulent basilica in Western Europe: 11th-century golden mosaics covering 8,000 square metres of ceiling and walls. Entry to the basilica itself is free, but the Pala d'Oro — the gold altarpiece with 2,000 precious stones — and the museum have separate fees. Arrive before 9am to avoid group queues."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Reserva acceso San Marcos",
              "en": "Book St Mark's Basilica access"
            },
            "partner": "tiqets",
            "query": "st marks basilica venice",
            "type": "tickets"
          }
        ]
      },
      {
        "name": "Ruta de Bacari — Cicchetti en Cannaregio",
        "emoji": "🍷",
        "category": "food",
        "rating": 4.9,
        "description": {
          "es": "Los bacari son los bares de vino locales donde Venecia come de verdad. Un cicchetto — la tapa veneciana — cuesta entre 1 y 2,50 euros: baccalà mantecato sobre pan tostado, sardinas en saor, nervetti con cebollas. La calle Sottoportego dei Preti y la zona de Cannaregio concentran los mejores. Un ombra de vino blanco (la medida veneciana, unos 75ml) vale 1,50 euros. Evita la zona de Rialto y San Marcos: los mismos cicchetti cuestan el triple.",
          "en": "Bacari are the local wine bars where Venice actually eats. A cicchetto — the Venetian tapa — costs between 1 and 2.50 euros: baccalà mantecato on toast, sardines in saor, nervetti with onions. Sottoportego dei Preti and the Cannaregio area concentrate the best ones. An ombra of white wine (the Venetian measure, about 75ml) costs 1.50 euros. Avoid the Rialto and San Marco area: the same cicchetti cost three times as much."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Food tour cicchetti y vinos",
              "en": "Cicchetti and wine food tour"
            },
            "partner": "getyourguide",
            "query": "venice cicchetti food tour",
            "type": "activity"
          },
          {
            "label": {
              "es": "Tour gastronómico Venecia",
              "en": "Venice gastronomic tour"
            },
            "partner": "musement",
            "query": "venice food tour cannaregio",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Isla de Murano — Vidrio Soplado",
        "emoji": "🏺",
        "category": "attraction",
        "rating": 4.6,
        "description": {
          "es": "Murano es la isla donde Venecia desterró a sus maestros vidrieros en 1291 — para controlar el secreto del vidrio soplado y evitar incendios en la ciudad. Las demostraciones en los hornos son gratuitas si entras por las fábricas artesanales (no los showrooms turísticos). El Museo del Vidrio tiene piezas del siglo XV que demuestran por qué Murano dominó la manufactura de espejos y vasos de lujo durante 400 años.",
          "en": "Murano is the island where Venice exiled its master glassblowers in 1291 — to control the secret of blown glass and prevent fires in the city. Furnace demonstrations are free if you enter through artisan workshops (not tourist showrooms). The Glass Museum has 15th-century pieces that explain why Murano dominated luxury mirror and glassware production for 400 years."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour Murano con demostración",
              "en": "Murano tour with demonstration"
            },
            "partner": "getyourguide",
            "query": "murano glass tour venice",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Gran Canal al Atardecer — Vaporetto Nº 1",
        "emoji": "🌊",
        "category": "experience",
        "rating": 4.8,
        "description": {
          "es": "El vaporetto número 1 recorre el Gran Canal de punta a punta en 45 minutos, parando en todos los embarcaderos. Vale 9,50 euros y es el tour de arquitectura más barato del mundo: 170 palacios del siglo XIII al XVIII, incluyendo el Ca' d'Oro, el Fondaco dei Turchi y el Palazzo Grassi. Coge el vaporetto en la parada Ferrovia (estación de Santa Lucía) al atardecer hacia la plaza San Marcos — la luz sobre los mármoles rosados es la razón por la que Venecia tiene más pinturas por habitante que cualquier otra ciudad del mundo.",
          "en": "Vaporetto number 1 runs the Grand Canal from end to end in 45 minutes, stopping at every landing. It costs 9.50 euros and is the cheapest architecture tour in the world: 170 palaces from the 13th to 18th centuries, including Ca' d'Oro, Fondaco dei Turchi and Palazzo Grassi. Board the vaporetto at the Ferrovia stop (Santa Lucia station) at sunset towards San Marco — the light on the pink marbles is why Venice has more paintings per capita than any other city in the world."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Pase de transporte Venecia",
              "en": "Venice transport pass"
            },
            "partner": "tiqets",
            "query": "venice vaporetto pass transport",
            "type": "tickets"
          }
        ]
      }
    ],
    "events": [
      {
        "name": {
          "es": "Carnaval de Venecia 2027",
          "en": "Venice Carnival 2027"
        },
        "date": "2027-02-06",
        "type": "cultural",
        "venue": {
          "es": "Plaza San Marcos y ciudad histórica, Venecia",
          "en": "Piazza San Marco and historic city, Venice"
        },
        "description": {
          "es": "El Carnaval de Venecia es la mascarada más antigua del mundo occidental: trajes del siglo XVIII, máscaras de commedia dell'arte y una ciudad que durante diez días se convierte en teatro. El concurso de disfraces en San Marcos, los bailes de máscaras en palacios privados y el vuelo del ángel sobre la plaza son los momentos más fotografiados. Reserva alojamiento con mínimo seis meses de antelación — los precios se multiplican por tres.",
          "en": "The Venice Carnival is the oldest masquerade in the Western world: 18th-century costumes, commedia dell'arte masks and a city that becomes a theatre for ten days. The costume competition in San Marco, masked balls in private palaces and the angel's flight over the square are the most photographed moments. Book accommodation at least six months ahead — prices triple."
        },
        "image": "https://images.unsplash.com/photo-1518563172008-e56c5dfbaef6?w=800&q=80"
      },
      {
        "name": {
          "es": "Biennale de Venecia — Arte 2026",
          "en": "Venice Biennale — Art 2026"
        },
        "date": "2026-04-18",
        "type": "art",
        "venue": {
          "es": "Giardini y Arsenale, Venecia",
          "en": "Giardini and Arsenale, Venice"
        },
        "description": {
          "es": "La Biennale di Venezia es la exposición de arte contemporáneo más importante del mundo, fundada en 1895. Cada dos años, 90 países instalan pabellones nacionales en los Giardini y el Arsenale. La edición de 2026 abre en abril y se extiende hasta noviembre. El Arsenale — el astillero medieval de la República — es la sala de exposición más espectacular que jamás ha albergado arte contemporáneo.",
          "en": "The Venice Biennale is the world's most important contemporary art exhibition, founded in 1895. Every two years, 90 countries install national pavilions in the Giardini and Arsenale. The 2026 edition opens in April and runs until November. The Arsenale — the medieval shipyard of the Republic — is the most spectacular exhibition space ever to host contemporary art."
        },
        "image": "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80"
      },
      {
        "name": {
          "es": "Regata Histórica de Venecia",
          "en": "Venice Historical Regatta"
        },
        "date": "2026-09-06",
        "type": "cultural",
        "venue": {
          "es": "Gran Canal, Venecia",
          "en": "Grand Canal, Venice"
        },
        "description": {
          "es": "La Regata Histórica es el desfile náutico más antiguo de Europa: galeras históricas del siglo XVI reman por el Gran Canal con tripulaciones en trajes de época, seguidas de competiciones de remo entre los gondolieri. Se celebra el primer domingo de septiembre. Posición recomendada: el Rialto o la Ca' Rezzonico, dos horas antes del inicio.",
          "en": "The Historical Regatta is Europe's oldest nautical parade: 16th-century historical galleys row down the Grand Canal with crews in period costume, followed by rowing competitions between gondolieri. Held on the first Sunday of September. Best viewing spots: the Rialto or Ca' Rezzonico, two hours before the start."
        },
        "image": "https://images.unsplash.com/photo-1529260830199-42c24126f198?w=800&q=80"
      }
    ],
    "services": {
      "activities": [
        "tiqets",
        "musement",
        "getyourguide"
      ],
      "hotels": [
        "booking"
      ],
      "transport": [
        "trainline"
      ],
      "insurance": [
        "safetywing"
      ],
      "esim": [
        "airalo"
      ]
    }
  },
  {
    "id": "32",
    "slug": "osaka-guia-2026",
    "enSlug": "osaka-travel-guide-2026",
    "narrator": "david",
    "category": "asia",
    "city": "Osaka",
    "country": {
      "es": "Japón",
      "en": "Japan"
    },
    "emoji": "🐙",
    "heroImage": "https://images.unsplash.com/photo-1590559899731-a382839e5549?w=1200&q=80",
    "title": {
      "es": "Osaka 2026: La Ciudad Que Come Mejor Que Cualquier Otra",
      "en": "Osaka 2026: The City That Eats Better Than Anyone"
    },
    "subtitle": {
      "es": "Takoyaki, ramen, kushikatsu y neones en Dotonbori — la capital gastronómica de Japón sin filtros",
      "en": "Takoyaki, ramen, kushikatsu and neon lights in Dotonbori — Japan's food capital without filters"
    },
    "date": "2026-03-16",
    "readTime": "10 min",
    "metaDescription": {
      "es": "Guía completa Osaka 2026: Dotonbori, Castillo de Osaka, Mercado Kuromon, Namba y Universal Studios. Qué comer, dónde alojarse y por qué los osakeños presumen de comer hasta arruinarse.",
      "en": "Complete Osaka 2026 guide: Dotonbori, Osaka Castle, Kuromon Market, Namba and Universal Studios. What to eat, where to stay and why Osakans brag about eating themselves broke."
    },
    "keywords": {
      "es": [
        "osaka 2026",
        "guía osaka",
        "dotonbori",
        "takoyaki osaka",
        "kushikatsu",
        "mercado kuromon",
        "namba shinsaibashi"
      ],
      "en": [
        "osaka 2026",
        "osaka travel guide",
        "dotonbori",
        "takoyaki osaka",
        "kushikatsu",
        "kuromon market",
        "namba shinsaibashi"
      ]
    },
    "excerpt": {
      "es": "Los osakeños tienen un concepto propio para comer hasta arruinarse: kuidaore. David llegó con una lista de restaurantes y una semana de margen. Salió con la certeza de que Osaka es la ciudad donde la comida no es parte del viaje — es el argumento completo.",
      "en": "Osakans have their own concept for eating yourself broke: kuidaore. David arrived with a restaurant list and a week to spare. He left certain that Osaka is the city where food isn't part of the trip — it's the whole point."
    },
    "pointsOfInterest": [
      {
        "name": "Dotonbori",
        "emoji": "🌃",
        "category": "neighborhood",
        "rating": 4.8,
        "description": {
          "es": "El canal y la calle más famosa de Osaka: neones gigantes, el letrero de Glico corriendo, takoyaki en cada esquina y el olor a salsa okonomiyaki flotando sobre el agua. Dotonbori es donde Osaka se exhibe a sí misma sin pudor. La mejor hora: después de las 19:00, cuando los letreros luminosos se encienden del todo.",
          "en": "Osaka's most famous canal and street: giant neon signs, the Glico running man, takoyaki on every corner and the smell of okonomiyaki sauce floating over the water. Dotonbori is where Osaka shows off without shame. Best time: after 7pm when the lights come fully alive."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour gastronómico Dotonbori",
              "en": "Dotonbori food tour"
            },
            "partner": "getyourguide",
            "query": "dotonbori food tour osaka night",
            "type": "activity"
          },
          {
            "label": {
              "es": "Tour nocturno Osaka",
              "en": "Osaka night tour"
            },
            "partner": "viator",
            "query": "osaka dotonbori night tour",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Castillo de Osaka",
        "emoji": "🏯",
        "category": "landmark",
        "rating": 4.6,
        "description": {
          "es": "Construido por Toyotomi Hideyoshi en 1583 y reconstruido múltiples veces — la última en 1931, con interior de museo moderno que no todo el mundo perdona. Los jardines que lo rodean son de los mejores de Japón para el hanami de primavera. La vista desde el torreón sobre la ciudad es especialmente buena al atardecer.",
          "en": "Built by Toyotomi Hideyoshi in 1583 and reconstructed multiple times — most recently in 1931, with a modern museum interior that not everyone forgives. The surrounding gardens are among Japan's best for spring cherry blossom viewing. The view from the keep over the city is particularly good at sunset."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour Castillo de Osaka",
              "en": "Osaka Castle tour"
            },
            "partner": "getyourguide",
            "query": "osaka castle tour history",
            "type": "activity"
          },
          {
            "label": {
              "es": "Entradas Castillo de Osaka",
              "en": "Osaka Castle tickets"
            },
            "partner": "tiqets",
            "query": "osaka castle admission",
            "type": "tickets"
          }
        ]
      },
      {
        "name": "Mercado Kuromon",
        "emoji": "🐟",
        "category": "market",
        "rating": 4.7,
        "description": {
          "es": "El mercado de los chefs de Osaka, en activo desde 1902. Tiene 170 puestos que venden wagyu cortado al momento, cangrejos vivos, ostras de Hiroshima, anguilas a la parrilla y takoyaki de nivel superior. Llega antes de las 11 para encontrar los mejores productos antes de que los restaurantes locales los compren. La regla de David: desayunar aquí, siempre.",
          "en": "Osaka's chef's market, operating since 1902. Has 170 stalls selling freshly cut wagyu, live crab, Hiroshima oysters, grilled eel and premium takoyaki. Arrive before 11am to find the best produce before local restaurants buy it. David's rule: breakfast here, always."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour mercado Kuromon",
              "en": "Kuromon market tour"
            },
            "partner": "getyourguide",
            "query": "kuromon market osaka food tour",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Namba y Shinsaibashi",
        "emoji": "🛍️",
        "category": "neighborhood",
        "rating": 4.6,
        "description": {
          "es": "Namba es el epicentro del entretenimiento de Osaka: grandes almacenes, arcades, Namba Parks, y la calle Amerikamura con tiendas de streetwear vintage. Shinsaibashi es la calle comercial cubierta más larga de Japón — 600 metros bajo techo donde puedes encontrar desde marcas de lujo hasta tiendas de 100 yenes. Ambas funcionan como un organismo único conectado.",
          "en": "Namba is Osaka's entertainment epicentre: department stores, arcades, Namba Parks, and Amerika-Mura street with vintage streetwear shops. Shinsaibashi is Japan's longest covered shopping street — 600 metres under roof where you can find everything from luxury brands to 100-yen shops. Both function as a single connected organism."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour Namba y Shinsaibashi",
              "en": "Namba and Shinsaibashi tour"
            },
            "partner": "viator",
            "query": "namba shinsaibashi osaka walking tour",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Universal Studios Japan",
        "emoji": "🎡",
        "category": "attraction",
        "rating": 4.7,
        "description": {
          "es": "El USJ de Osaka tiene algo que ningún otro parque Universal tiene: la zona de Nintendo World, con Super Mario en realidad aumentada y experiencias de Donkey Kong que abrieron en 2024. El parque también mantiene su zona de Harry Potter y las atracciones clásicas. Compra entradas con semanas de antelación — se agotan, especialmente en temporada alta.",
          "en": "Osaka's USJ has something no other Universal park has: Nintendo World, with augmented reality Super Mario and Donkey Kong experiences that opened in 2024. The park also keeps its Wizarding World of Harry Potter and classic rides. Buy tickets weeks in advance — they sell out, especially in high season."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Entradas Universal Studios Japan",
              "en": "Universal Studios Japan tickets"
            },
            "partner": "tiqets",
            "query": "universal studios japan osaka tickets",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Entradas USJ con acceso prioritario",
              "en": "USJ express access tickets"
            },
            "partner": "viator",
            "query": "universal studios japan osaka express pass",
            "type": "tickets"
          }
        ]
      }
    ],
    "events": [
      {
        "name": {
          "es": "Tenjin Matsuri",
          "en": "Tenjin Matsuri"
        },
        "date": "2026-07-25",
        "type": "cultural",
        "venue": {
          "es": "Santuario Osaka Temmangu, Osaka",
          "en": "Osaka Temmangu Shrine, Osaka"
        },
        "description": {
          "es": "Uno de los tres grandes festivales de Japón, celebrado el 24 y 25 de julio desde el siglo X. La procesión fluvial de barcas iluminadas por el río Okawa con el acompañamiento de música gagaku y los fuegos artificiales finales hacen de esta noche una de las más fotografiadas del país.",
          "en": "One of Japan's three great festivals, celebrated on July 24th and 25th since the 10th century. The river procession of illuminated boats along the Okawa River with gagaku music accompaniment and the final fireworks make this one of the most photographed nights in the country."
        },
        "image": "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=800&q=80"
      },
      {
        "name": {
          "es": "Osaka Ramen Festa",
          "en": "Osaka Ramen Festa"
        },
        "date": "2026-11-01",
        "type": "gastronomy",
        "venue": {
          "es": "Parque Expo '70, Osaka",
          "en": "Expo '70 Commemorative Park, Osaka"
        },
        "description": {
          "es": "El mayor festival de ramen de Japón, celebrado cada noviembre con más de 20 ramen-ya de todo el país. Cada puesto sirve sus variedades regionales — Sapporo miso, Fukuoka tonkotsu, Tokyo shoyu — en formato festival con mesas comunales. El problema: elegir entre 20 cuencos distintos con solo un estómago.",
          "en": "Japan's largest ramen festival, held each November with over 20 ramen shops from across the country. Each stall serves regional varieties — Sapporo miso, Fukuoka tonkotsu, Tokyo shoyu — in festival format with communal tables. The problem: choosing between 20 different bowls with only one stomach."
        },
        "image": "https://images.unsplash.com/photo-1569050467447-ce54b3bbc37d?w=800&q=80"
      },
      {
        "name": {
          "es": "Maratón de Osaka",
          "en": "Osaka Marathon"
        },
        "date": "2026-10-25",
        "type": "sport",
        "venue": {
          "es": "Castillo de Osaka, Osaka",
          "en": "Osaka Castle, Osaka"
        },
        "description": {
          "es": "El Maratón de Osaka es una de las carreras más grandes de Japón con más de 30.000 participantes. El recorrido pasa por los principales monumentos de la ciudad: el Castillo de Osaka, Dotonbori, Namba y el puerto. Para los corredores que no participan: el recorrido también sirve como ruta turística a pie perfecta.",
          "en": "The Osaka Marathon is one of Japan's largest races with over 30,000 participants. The route passes the city's main landmarks: Osaka Castle, Dotonbori, Namba and the port. For runners not participating: the course also works as a perfect walking tourist route."
        },
        "image": "https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?w=800&q=80"
      }
    ],
    "services": {
      "activities": [
        "getyourguide",
        "tiqets",
        "viator"
      ],
      "hotels": [
        "booking"
      ],
      "esim": [
        "airalo"
      ],
      "insurance": [
        "safetywing"
      ]
    }
  },
  {
    "id": "33",
    "slug": "milan-guia-2026",
    "enSlug": "milan-travel-guide-2026",
    "narrator": "carmen",
    "category": "europe",
    "city": "Milán",
    "country": {
      "es": "Italia",
      "en": "Italy"
    },
    "emoji": "🏛️",
    "heroImage": "https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?w=1200&q=80",
    "title": {
      "es": "Milán 2026: La Ciudad Que Siempre Tiene Algo Que Enseñarte",
      "en": "Milan 2026: The City That Always Has Something to Teach You"
    },
    "subtitle": {
      "es": "El Duomo, La Última Cena, Brera, los Navigli y el aperitivo — guía de la capital del diseño italiano",
      "en": "The Duomo, The Last Supper, Brera, the Navigli and aperitivo — guide to Italy's design capital"
    },
    "date": "2026-03-16",
    "readTime": "10 min",
    "metaDescription": {
      "es": "Guía completa Milán 2026: Duomo, La Última Cena, barrio de Brera, Navigli, aperitivo y Galleria Vittorio Emanuele II. Con la perspectiva de Carmen, que llegó sobreinformada y encontró lo inesperado.",
      "en": "Complete Milan 2026 guide: Duomo, The Last Supper, Brera neighbourhood, Navigli, aperitivo and Galleria Vittorio Emanuele II. With Carmen's perspective — she arrived over-researched and found the unexpected."
    },
    "keywords": {
      "es": [
        "milán 2026",
        "guía milán",
        "última cena milán",
        "duomo milán",
        "brera milán",
        "navigli aperitivo",
        "salone del mobile"
      ],
      "en": [
        "milan 2026",
        "milan travel guide",
        "last supper milan",
        "milan duomo",
        "brera milan",
        "navigli aperitivo",
        "salone del mobile"
      ]
    },
    "excerpt": {
      "es": "Carmen llegó a Milán con toda la investigación hecha: la historia del Duomo, la técnica de Leonardo, el mapa de Brera marcado en tres colores. Y aun así la ciudad tuvo la descortesía de sorprenderla. Los Navigli a las seis de la tarde. La Pinacoteca di Brera en martes sin turistas. El aperitivo que no aparece en ninguna guía.",
      "en": "Carmen arrived in Milan with all the research done: the history of the Duomo, Leonardo's technique, Brera's map marked in three colours. And yet the city had the discourtesy to surprise her. The Navigli at six in the evening. The Pinacoteca di Brera on a Tuesday without tourists. The aperitivo that appears in no guide."
    },
    "pointsOfInterest": [
      {
        "name": "Duomo di Milano",
        "emoji": "⛪",
        "category": "landmark",
        "rating": 4.9,
        "description": {
          "es": "La catedral gótica más grande de Italia y la tercera del mundo. Construcción que comenzó en 1386 y se consideró formalmente acabada en 1965 — seis siglos de obra. Las 3.400 estatuas que decoran sus fachadas y pináculos hacen que cada metro cuadrado de la fachada sea diferente. Sube a las terrazas: caminar entre los pináculos a nivel del techo es la experiencia de Milán que más infravaloran los visitantes.",
          "en": "Italy's largest Gothic cathedral and the third largest in the world. Construction began in 1386 and was formally completed in 1965 — six centuries of work. The 3,400 statues decorating its facades and pinnacles make every square metre of the facade different. Go up to the terraces: walking among the pinnacles at rooftop level is Milan's most underrated visitor experience."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Entradas Duomo y terrazas",
              "en": "Duomo and terraces tickets"
            },
            "partner": "tiqets",
            "query": "duomo milan cathedral rooftop terraces",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Tour guiado Duomo Milán",
              "en": "Milan Duomo guided tour"
            },
            "partner": "musement",
            "query": "duomo milan guided tour",
            "type": "activity"
          }
        ]
      },
      {
        "name": "La Última Cena — Santa Maria delle Grazie",
        "emoji": "🎨",
        "category": "museum",
        "rating": 5,
        "description": {
          "es": "La Última Cena de Leonardo da Vinci es la obra que más visitas requiere reservar con antelación en Europa. Los grupos entran en tandas de 25 personas durante 15 minutos. La pintó entre 1495 y 1498 sobre la pared del refectorio del convento — no es un fresco sino un temple sobre yeso, técnica que explica el deterioro que comenzó antes de que Leonardo muriera. Reserva con meses de antelación; entradas para fecha concreta se agotan semanas antes.",
          "en": "Leonardo da Vinci's Last Supper requires the most advance booking of any artwork in Europe. Groups enter in batches of 25 for 15 minutes. He painted it between 1495 and 1498 on the refectory wall of the convent — not a fresco but tempera on plaster, a technique that explains the deterioration that began before Leonardo died. Book months in advance; dated tickets sell out weeks ahead."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Entradas La Última Cena",
              "en": "Last Supper tickets"
            },
            "partner": "tiqets",
            "query": "last supper milan tickets leonardo",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Tour La Última Cena con guía",
              "en": "Last Supper guided tour"
            },
            "partner": "musement",
            "query": "last supper milan guided tour",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Brera y Pinacoteca di Brera",
        "emoji": "🖼️",
        "category": "neighborhood",
        "rating": 4.8,
        "description": {
          "es": "El barrio de Brera es la Milán bohemia que coexiste con la Milán del diseño: galerías, librerías de viejo, trattorias sin menú turístico y la Academia de Bellas Artes que da nombre al barrio. La Pinacoteca di Brera tiene la mejor colección de pintura italiana del norte: Mantegna, Caravaggio, Hayez, Raffaello. A diferencia de los Uffizi de Florencia, raramente hay cola y puedes ver los cuadros sin empujones.",
          "en": "Brera is the bohemian Milan that coexists with design Milan: galleries, second-hand bookshops, trattorias without tourist menus and the Academy of Fine Arts that gives the neighbourhood its name. The Pinacoteca di Brera has northern Italy's best Italian painting collection: Mantegna, Caravaggio, Hayez, Raphael. Unlike the Uffizi in Florence, there are rarely queues and you can see the paintings without jostling."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Entradas Pinacoteca di Brera",
              "en": "Pinacoteca di Brera tickets"
            },
            "partner": "tiqets",
            "query": "pinacoteca brera milan tickets",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Tour barrio Brera",
              "en": "Brera neighbourhood tour"
            },
            "partner": "musement",
            "query": "brera milan walking tour art",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Navigli y aperitivo",
        "emoji": "🍹",
        "category": "neighborhood",
        "rating": 4.6,
        "description": {
          "es": "Los Navigli son los canales históricos de Milán, construidos en el siglo XII para transportar el mármol del Duomo desde las canteras del Lago Mayor. Hoy son el epicentro del aperitivo milanés: entre las 18 y las 21 horas, los bares sirven bebidas con una mesa entera de comida incluida — focaccia, pasta fría, risotto, embutidos — a 8-12 euros. El aperitivo milanés no es un aperitivo: es la cena.",
          "en": "The Navigli are Milan's historic canals, built in the 12th century to transport Duomo marble from quarries near Lake Maggiore. Today they're the epicentre of Milanese aperitivo: between 6pm and 9pm, bars serve drinks with an entire table of food included — focaccia, cold pasta, risotto, charcuterie — for €8-12. The Milanese aperitivo isn't an aperitif: it's dinner."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour Navigli con aperitivo",
              "en": "Navigli tour with aperitivo"
            },
            "partner": "getyourguide",
            "query": "milan navigli aperitivo tour evening",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Galleria Vittorio Emanuele II",
        "emoji": "🏛️",
        "category": "landmark",
        "rating": 4.7,
        "description": {
          "es": "Construida entre 1865 y 1877, la Galleria es el primer centro comercial de la historia de Italia y uno de los más espectaculares del mundo: bóvedas de hierro y cristal a 47 metros de altura, mosaicos de mármol en el suelo y las tiendas más caras del país en las cuatro naves. El mosaico del toro en el crucero central tiene la tradición de pisar los genitales del animal mientras giras sobre un pie para dar suerte — el mosaico está notablemente desgastado.",
          "en": "Built between 1865 and 1877, the Galleria is Italy's first shopping mall and one of the world's most spectacular: iron and glass vaults 47 metres high, marble mosaics on the floor and the country's most expensive shops in its four naves. The bull mosaic at the central crossing has the tradition of stepping on the animal's genitals while spinning on one foot for luck — the mosaic is noticeably worn."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour Milán centro histórico",
              "en": "Milan historic centre tour"
            },
            "partner": "musement",
            "query": "milan city centre historical tour galleria duomo",
            "type": "activity"
          }
        ]
      }
    ],
    "events": [
      {
        "name": {
          "es": "Salone del Mobile — Semana del Diseño",
          "en": "Salone del Mobile — Design Week"
        },
        "date": "2026-04-20",
        "type": "technology",
        "venue": {
          "es": "Fiera Milano, Rho, Milán",
          "en": "Fiera Milano, Rho, Milan"
        },
        "description": {
          "es": "El Salone del Mobile de abril es la mayor feria de diseño y mobiliario del mundo, con más de 300.000 visitantes profesionales y la transformación paralela de toda la ciudad: el Fuorisalone convierte garajes, almacenes, patios y galerías de toda Milán en instalaciones de diseño durante la semana. El distrito de Brera y los Navigli concentran la mayoría de las intervenciones públicas y gratuitas.",
          "en": "April's Salone del Mobile is the world's largest design and furniture fair, with over 300,000 professional visitors and the parallel transformation of the entire city: the Fuorisalone turns garages, warehouses, courtyards and galleries throughout Milan into design installations during the week. The Brera district and Navigli concentrate most of the free public interventions."
        },
        "image": "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
      },
      {
        "name": {
          "es": "Semana de la Moda de Milán — Septiembre",
          "en": "Milan Fashion Week — September"
        },
        "date": "2026-09-16",
        "type": "art",
        "venue": {
          "es": "Varios espacios, Milán",
          "en": "Various venues, Milan"
        },
        "description": {
          "es": "La Semana de la Moda de Milán de septiembre (colecciones de primavera-verano) es uno de los cuatro grandes eventos del calendario de la moda mundial, junto a París, Londres y Nueva York. Los desfiles de las marcas principales no son accesibles al público, pero el ambiente en el barrio de Brera, Porta Nuova y los Navigli durante esa semana es en sí mismo un espectáculo.",
          "en": "Milan's September Fashion Week (spring-summer collections) is one of the four great events in the global fashion calendar, alongside Paris, London and New York. The main brand shows are not accessible to the public, but the atmosphere in Brera, Porta Nuova and the Navigli during that week is a spectacle in itself."
        },
        "image": "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80"
      },
      {
        "name": {
          "es": "Sant'Ambrogio — Feria Oh Bej Oh Bej",
          "en": "Sant'Ambrogio — Oh Bej Oh Bej Fair"
        },
        "date": "2026-12-07",
        "type": "cultural",
        "venue": {
          "es": "Alrededores del Castillo Sforzesco, Milán",
          "en": "Around Castello Sforzesco, Milan"
        },
        "description": {
          "es": "El 7 de diciembre es Sant'Ambrogio, el patrón de Milán y uno de los días de fiesta más importantes de la ciudad. La Feria Oh Bej Oh Bej — cuyo nombre viene de la exclamación infantil en dialecto milanés 'oh qué bonito' — lleva celebrándose desde 1288 con puestos de artesanía, dulces tradicionales y objetos de anticuario alrededor del Castillo Sforzesco.",
          "en": "December 7th is Sant'Ambrogio, Milan's patron saint and one of the city's most important feast days. The Oh Bej Oh Bej Fair — whose name comes from the Milanese dialect children's exclamation 'oh how beautiful' — has been held since 1288 with craft stalls, traditional sweets and antique objects around Castello Sforzesco."
        },
        "image": "https://images.unsplash.com/photo-1482189349482-28807e85a2dc?w=800&q=80"
      }
    ],
    "services": {
      "activities": [
        "tiqets",
        "musement",
        "getyourguide"
      ],
      "hotels": [
        "booking"
      ],
      "insurance": [
        "safetywing"
      ],
      "esim": [
        "airalo"
      ]
    }
  },
  {
    "id": "34",
    "slug": "copenhague-guia-2026",
    "enSlug": "copenhagen-travel-guide-2026",
    "narrator": "elena",
    "category": "europe",
    "city": "Copenhague",
    "country": {
      "es": "Dinamarca",
      "en": "Denmark"
    },
    "emoji": "🚲",
    "heroImage": "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=1200&q=80",
    "title": {
      "es": "Copenhague 2026: La Ciudad Que Trabaja Mejor Que Tú",
      "en": "Copenhagen 2026: The City That Works Better Than You"
    },
    "subtitle": {
      "es": "Nyhavn, Tivoli, smørrebrød y la mejor infraestructura de nómada digital de Europa — con el coste incluido",
      "en": "Nyhavn, Tivoli, smørrebrød and Europe's best digital nomad infrastructure — cost included"
    },
    "date": "2026-03-16",
    "readTime": "10 min",
    "metaDescription": {
      "es": "Guía completa Copenhague 2026: Nyhavn, Tivoli, Christiania, Museo Louisiana y smørrebrød. Cafés con wifi para trabajar, cómo gestionar el presupuesto y por qué Elena elige Copenhague aunque sea cara.",
      "en": "Complete Copenhagen 2026 guide: Nyhavn, Tivoli, Christiania, Louisiana Museum and smørrebrød. Wifi cafes to work from, how to manage the budget and why Elena chooses Copenhagen despite the cost."
    },
    "keywords": {
      "es": [
        "copenhague 2026",
        "guía copenhague",
        "nyhavn",
        "tivoli copenhague",
        "christiania copenhague",
        "nomada digital copenhague",
        "smørrebrød"
      ],
      "en": [
        "copenhagen 2026",
        "copenhagen travel guide",
        "nyhavn",
        "tivoli copenhagen",
        "christiania copenhagen",
        "digital nomad copenhagen",
        "smørrebrød"
      ]
    },
    "excerpt": {
      "es": "Copenhague es cara — eso está fuera de discusión. Pero Elena lleva tres visitas y sigue volviendo. El wifi funciona en todos los cafés. Las bicicletas tienen prioridad sobre los coches. Y la comida nueva nórdica tiene esa honestidad de ingredientes que convierte el smørrebrød en argumento filosófico. Presupuesto alto, retorno alto.",
      "en": "Copenhagen is expensive — that's beyond dispute. But Elena has visited three times and keeps coming back. The wifi works in every cafe. Bicycles have priority over cars. And New Nordic food has that ingredient honesty that turns smørrebrød into philosophical argument. High budget, high return."
    },
    "pointsOfInterest": [
      {
        "name": "Nyhavn",
        "emoji": "⚓",
        "category": "neighborhood",
        "rating": 4.7,
        "description": {
          "es": "El canal con fachadas de colores del siglo XVII que aparece en todas las fotos de Copenhague. Hans Christian Andersen vivió en el número 20 durante veinte años. Los restaurantes del canal son caros (25-40 euros por persona) pero la experiencia de comer arenque encurtido con aquavit mientras los barcos pasan es auténticamente danesa. Los meses de verano convierten el malecón en una terraza comunal de la ciudad entera.",
          "en": "The 17th-century colourful canal that appears in every Copenhagen photo. Hans Christian Andersen lived at number 20 for twenty years. Canal restaurants are expensive (€25-40 per person) but eating pickled herring with aquavit while boats pass is authentically Danish. Summer months turn the waterfront into a communal terrace for the whole city."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour por Nyhavn y canales",
              "en": "Nyhavn and canals tour"
            },
            "partner": "getyourguide",
            "query": "nyhavn canal tour copenhagen",
            "type": "activity"
          },
          {
            "label": {
              "es": "Tour en barco por Copenhague",
              "en": "Copenhagen boat tour"
            },
            "partner": "tiqets",
            "query": "copenhagen canal boat tour nyhavn",
            "type": "tickets"
          }
        ]
      },
      {
        "name": "Tivoli Gardens",
        "emoji": "🎢",
        "category": "attraction",
        "rating": 4.8,
        "description": {
          "es": "El segundo parque de atracciones más antiguo del mundo (1843), que inspiró directamente a Walt Disney para diseñar Disneyland. A diferencia de Disneyland, Tivoli es parte del tejido urbano de Copenhague: está en el centro de la ciudad, tiene restaurantes de calidad dentro y los copenhaguenses van a pasear en él como si fuera un parque público con atracciones. Por la noche, las 100.000 luces que lo iluminan convierten el parque en el escenario más fotogénico de la ciudad.",
          "en": "The world's second-oldest amusement park (1843), which directly inspired Walt Disney to design Disneyland. Unlike Disneyland, Tivoli is part of Copenhagen's urban fabric: it's in the city centre, has quality restaurants inside and Copenhageners go to stroll there as if it were a public park with rides. At night, the 100,000 lights illuminating it turn the park into the city's most photogenic scene."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Entradas Tivoli Gardens",
              "en": "Tivoli Gardens tickets"
            },
            "partner": "tiqets",
            "query": "tivoli gardens copenhagen tickets",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Tour Copenhague con entrada Tivoli",
              "en": "Copenhagen tour with Tivoli entry"
            },
            "partner": "getyourguide",
            "query": "copenhagen tivoli tour tickets",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Freetown Christiania",
        "emoji": "🌿",
        "category": "neighborhood",
        "rating": 4.4,
        "description": {
          "es": "Christiania es una comunidad autogestionada de 850 personas establecida en 1971 en una base militar abandonada, con estatus legal ambiguo negociado con el Estado danés durante décadas. La calle principal (Pusher Street) tiene una economía paralela que el gobierno danés tolera desde 1971. El resto de la comunidad tiene talleres de artesanía, restaurantes vegetarianos, una sala de conciertos y casas construidas con materiales reciclados que son obras de arquitectura amateur genuinamente sorprendentes.",
          "en": "Christiania is a self-governing community of 850 people established in 1971 on an abandoned military base, with ambiguous legal status negotiated with the Danish state over decades. The main street (Pusher Street) has a parallel economy the Danish government has tolerated since 1971. The rest of the community has craft workshops, vegetarian restaurants, a concert hall and houses built with recycled materials that are genuinely surprising works of amateur architecture."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour Christiania y Copenhague alternativa",
              "en": "Christiania and alternative Copenhagen tour"
            },
            "partner": "getyourguide",
            "query": "christiania copenhagen alternative tour",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Museo Louisiana de Arte Moderno",
        "emoji": "🎨",
        "category": "museum",
        "rating": 4.9,
        "description": {
          "es": "A 35 kilómetros al norte de Copenhague, en la costa del Øresund frente a Suecia. El Louisiana es el museo de arte moderno mejor situado geográficamente del mundo: los jardines esculturales descienden hasta el estrecho, con obras de Henry Moore y Alexander Calder entre los árboles y el agua al fondo. La colección permanente incluye Giacometti, Warhol, Bacon y la mejor colección de arte danés contemporáneo. La cafetería con vistas al mar es un argumento por sí sola.",
          "en": "35 kilometres north of Copenhagen, on the Øresund coast facing Sweden. Louisiana is the world's best-situated modern art museum geographically: the sculpture gardens descend to the strait, with works by Henry Moore and Alexander Calder among the trees and the water beyond. The permanent collection includes Giacometti, Warhol, Bacon and the best collection of contemporary Danish art. The cafeteria with sea views is an argument in itself."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Entradas Museo Louisiana",
              "en": "Louisiana Museum tickets"
            },
            "partner": "tiqets",
            "query": "louisiana museum modern art copenhagen",
            "type": "tickets"
          },
          {
            "label": {
              "es": "Tour día completo Copenhague + Louisiana",
              "en": "Full day Copenhagen + Louisiana tour"
            },
            "partner": "getyourguide",
            "query": "louisiana museum day trip copenhagen",
            "type": "activity"
          }
        ]
      },
      {
        "name": "Strøget y Torvehallerne",
        "emoji": "🛒",
        "category": "market",
        "rating": 4.6,
        "description": {
          "es": "Strøget es la calle peatonal comercial más larga de Europa — 1,1 kilómetros desde la Plaza del Ayuntamiento hasta Kongens Nytorv. Al final está Torvehallerne, el mercado cubierto con los mejores puestos de comida de la ciudad: smorrebrod artesanal, cafés de tercera ola, flores, verduras ecológicas y la tienda de especias más completa de Escandinavia. Elena trabaja desde el café del mercado cuando está en Copenhague — el wifi es estable y los tostados de pan de centeno con queso son compensación suficiente por el precio.",
          "en": "Strøget is Europe's longest pedestrian shopping street — 1.1 kilometres from the City Hall Square to Kongens Nytorv. At the far end is Torvehallerne, the covered market with the city's best food stalls: artisan smørrebrød, third-wave coffee shops, flowers, organic vegetables and Scandinavia's most complete spice shop. Elena works from the market cafe when in Copenhagen — the wifi is stable and the rye bread toasts with cheese are sufficient compensation for the price."
        },
        "affiliateLinks": [
          {
            "label": {
              "es": "Tour gastronómico Copenhague",
              "en": "Copenhagen food tour"
            },
            "partner": "getyourguide",
            "query": "copenhagen food tour torvehallerne smørrebrod",
            "type": "activity"
          }
        ]
      }
    ],
    "events": [
      {
        "name": {
          "es": "Copenhagen Jazz Festival",
          "en": "Copenhagen Jazz Festival"
        },
        "date": "2026-07-03",
        "type": "festival",
        "venue": {
          "es": "Varios espacios, Copenhague",
          "en": "Various venues, Copenhagen"
        },
        "description": {
          "es": "El Festival de Jazz de Copenhague es el mayor festival de música de Escandinavia: 10 días en julio con más de 1.000 conciertos en 100 espacios diferentes — muchos de ellos gratuitos en plazas, patios y terrazas. Los conciertos de pago son en salas históricas como el Jazzhouse y el Copenhagen Jazzhouse. 2026 marca la 48ª edición.",
          "en": "The Copenhagen Jazz Festival is Scandinavia's largest music festival: 10 days in July with over 1,000 concerts in 100 different venues — many of them free in squares, courtyards and terraces. Paid concerts are in historic halls like Jazzhouse and Copenhagen Jazzhouse. 2026 marks the 48th edition."
        },
        "image": "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=800&q=80"
      },
      {
        "name": {
          "es": "Roskilde Festival",
          "en": "Roskilde Festival"
        },
        "date": "2026-06-27",
        "type": "festival",
        "venue": {
          "es": "Roskilde, 30 km de Copenhague",
          "en": "Roskilde, 30km from Copenhagen"
        },
        "description": {
          "es": "El Roskilde Festival, a 30 kilómetros de Copenhague en tren, es uno de los festivales de música más grandes de Europa con más de 130.000 asistentes durante 8 días. Organizado sin ánimo de lucro desde 1971, todos los beneficios van a causas humanitarias. El cartel de 2026 combina headliners internacionales con los mejores artistas nórdicos emergentes.",
          "en": "Roskilde Festival, 30 kilometres from Copenhagen by train, is one of Europe's largest music festivals with over 130,000 attendees over 8 days. Organised as a non-profit since 1971, all profits go to humanitarian causes. The 2026 lineup combines international headliners with the best emerging Nordic artists."
        },
        "image": "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&q=80"
      },
      {
        "name": {
          "es": "CPH:DOX — Festival Internacional de Documentales",
          "en": "CPH:DOX — International Documentary Festival"
        },
        "date": "2026-03-18",
        "type": "art",
        "venue": {
          "es": "Varios cines, Copenhague",
          "en": "Various cinemas, Copenhagen"
        },
        "description": {
          "es": "CPH:DOX es uno de los festivales de cine documental más importantes del mundo, celebrado en marzo con más de 200 películas de 60 países en salas de toda Copenhague. El festival tiene un enfoque fuerte en documentales sobre tecnología, política global y arte — exactamente lo que Elena ve en sus noches de trabajo cuando el ordenador ya no puede más.",
          "en": "CPH:DOX is one of the world's most important documentary film festivals, held in March with over 200 films from 60 countries in cinemas throughout Copenhagen. The festival has a strong focus on documentaries about technology, global politics and art — exactly what Elena watches on work evenings when the laptop can't take any more."
        },
        "image": "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=800&q=80"
      }
    ],
    "services": {
      "activities": [
        "getyourguide",
        "tiqets"
      ],
      "hotels": [
        "booking"
      ],
      "insurance": [
        "safetywing"
      ],
      "esim": [
        "airalo"
      ]
    }
  },
  {
    "id": "35",
    "city": "Hanói",
    "country": {
      "es": "Vietnam",
      "en": "Vietnam"
    },
    "slug": "hanoi-guia-2026",
    "enSlug": "hanoi-travel-guide-2026",
    "narrator": "elena",
    "category": "asia",
    "emoji": "🍜",
    "heroImage": "https://images.unsplash.com/photo-1583417319070-4a69db38a482?w=1200&q=80",
    "title": {
      "es": "Hanói 2026: la guía para nómadas digitales y viajeros con buen olfato",
      "en": "Hanoi 2026: the guide for digital nomads and travellers with good taste"
    },
    "subtitle": {
      "es": "Pho a las 6am, wifi rápido en cada café y una ciudad que cuesta lo que cuesta vivir bien.",
      "en": "Pho at 6am, fast wifi in every cafe and a city where living well is genuinely affordable."
    },
    "date": "2026-03-16",
    "readTime": "8 min",
    "metaDescription": {
      "es": "Guía completa de Hanói 2026: barrio antiguo, mejores cafés para trabajar, excursión a Halong Bay, comida callejera y costes reales para nómadas digitales.",
      "en": "Complete Hanoi 2026 guide: old quarter, best cafes for working, Halong Bay day trip, street food and real costs for digital nomads."
    },
    "keywords": {
      "es": [
        "hanoi guia 2026",
        "nomada digital vietnam",
        "que ver en hanoi",
        "barrio antiguo hanoi",
        "pho hanoi",
        "halong bay desde hanoi"
      ],
      "en": [
        "hanoi travel guide 2026",
        "digital nomad vietnam",
        "what to see in hanoi",
        "old quarter hanoi",
        "hanoi street food",
        "halong bay day trip"
      ]
    },
    "excerpt": {
      "es": "Hanói tiene el caos más organizado de Asia, la sopa más barata del mundo y una conexión wifi que te hará llorar de alegría después de pasar por Indonesia.",
      "en": "Hanoi has the most organised chaos in Asia, the cheapest soup in the world and wifi that will make you cry with joy after coming from Indonesia."
    },
    "pointsOfInterest": [
      {
        "name": {
          "es": "Barrio Antiguo (Hoan Kiem)",
          "en": "Old Quarter (Hoan Kiem)"
        },
        "description": {
          "es": "36 calles gremiales medievales convertidas en un laberinto de motocicletas, vendedores ambulantes y pho de calle a 1,50€ el cuenco. El caos tiene su lógica: cada calle lleva el nombre del gremio que la habitó durante siglos — Calle de la Seda, Calle del Papel, Calle del Estañador. La mejor forma de explorarlo es perderse intencionalmente a primera hora de la mañana, cuando los vendedores de desayuno montan sus taburetes de plástico en las aceras.",
          "en": "36 medieval guild streets turned into a labyrinth of motorbikes, street vendors and pho at €1.50 a bowl. The chaos has its logic: each street takes the name of the guild that inhabited it for centuries — Silk Street, Paper Street, Tinsmith Street. The best way to explore it is to get deliberately lost first thing in the morning, when breakfast vendors set out their plastic stools on the pavements."
        },
        "affiliateLinks": [
          {
            "partner": "getyourguide",
            "label": {
              "es": "Tour de comida callejera por el barrio antiguo",
              "en": "Street food tour of the old quarter"
            },
            "query": "hanoi old quarter street food tour"
          },
          {
            "partner": "viator",
            "label": {
              "es": "Tour gastronómico por Hanói",
              "en": "Hanoi food tour"
            },
            "query": "hanoi food tour"
          }
        ]
      },
      {
        "name": {
          "es": "Lago Hoan Kiem y Templo Ngoc Son",
          "en": "Hoan Kiem Lake and Ngoc Son Temple"
        },
        "description": {
          "es": "El corazón de la ciudad. Un lago de apenas 12 hectáreas en el centro de Hanói con una tortuga legendaria — la última tortuga gigante de caparazón blando fue avistada aquí y se ha convertido en símbolo sagrado. El Templo de la Montaña de Jade (Ngoc Son) ocupa una pequeña isla conectada al paseo peatonal por un puente rojo. Por la tarde y los fines de semana, el perímetro del lago se cierra al tráfico y los habitantes de Hanói salen a caminar, jugar al bádminton y charlar.",
          "en": "The heart of the city. A lake of barely 12 hectares in central Hanoi with a legendary tortoise — the last giant soft-shell turtle was spotted here and has become a sacred symbol. Ngoc Son Temple (Jade Mountain Temple) sits on a small island connected to the pedestrian walkway by a red bridge. On evenings and weekends, the perimeter of the lake closes to traffic and Hanoi residents come out to walk, play badminton and chat."
        },
        "affiliateLinks": [
          {
            "partner": "getyourguide",
            "label": {
              "es": "Tour histórico por el centro de Hanói",
              "en": "Historic tour of central Hanoi"
            },
            "query": "hanoi historic center tour"
          }
        ]
      },
      {
        "name": {
          "es": "Museo de Etnología de Vietnam",
          "en": "Vietnam Museum of Ethnology"
        },
        "description": {
          "es": "El mejor museo del Sudeste Asiático sobre culturas minoritarias. Vietnam tiene 54 grupos étnicos reconocidos y este museo —financiado con cooperación francesa— los documenta todos con rigor y respeto. Las réplicas a escala real de casas tradicionales en el jardín exterior son espectaculares. Si sólo tienes tiempo para un museo en Hanói, que sea este. A 7km del barrio antiguo, mejor en taxi o Grab.",
          "en": "The best museum in Southeast Asia on minority cultures. Vietnam has 54 recognised ethnic groups and this museum — funded with French cooperation — documents all of them with rigour and respect. The full-scale replicas of traditional houses in the outdoor garden are spectacular. If you only have time for one museum in Hanoi, make it this one. 7km from the old quarter, best reached by taxi or Grab."
        },
        "affiliateLinks": [
          {
            "partner": "viator",
            "label": {
              "es": "Tour cultural por Hanói con guía",
              "en": "Cultural Hanoi tour with guide"
            },
            "query": "hanoi cultural tour"
          }
        ]
      },
      {
        "name": {
          "es": "Prisión Hoa Lo (el Hilton de Hanói)",
          "en": "Hoa Lo Prison (the Hanoi Hilton)"
        },
        "description": {
          "es": "Fascinante y perturbadora a partes iguales. Construida por los franceses en 1896 para presos políticos vietnamitas, más tarde usada como prisión de guerra para pilotos estadounidenses durante la Guerra de Vietnam — los propios prisioneros la bautizaron como 'Hanoi Hilton' con amarga ironía. La exposición narra ambas historias con un sesgo claramente vietnamita, lo que la convierte en un documento histórico en sí misma. Está en el centro, entre el barrio antiguo y el lago Hoan Kiem.",
          "en": "Fascinating and unsettling in equal measure. Built by the French in 1896 for Vietnamese political prisoners, later used as a prisoner-of-war camp for American pilots during the Vietnam War — the prisoners themselves named it the 'Hanoi Hilton' with bitter irony. The exhibition tells both stories with a clearly Vietnamese slant, which makes it a historical document in itself. It's in the centre, between the old quarter and Hoan Kiem Lake."
        },
        "affiliateLinks": [
          {
            "partner": "getyourguide",
            "label": {
              "es": "Tour histórico de la Guerra de Vietnam en Hanói",
              "en": "Vietnam War history tour in Hanoi"
            },
            "query": "hanoi vietnam war history tour"
          }
        ]
      },
      {
        "name": {
          "es": "Barrio de Tay Ho (West Lake)",
          "en": "Tay Ho neighbourhood (West Lake)"
        },
        "description": {
          "es": "Donde viven los expatriados y los nómadas digitales que ya llevan más de dos semanas. El lago más grande de Hanói tiene cafés con vistas al agua donde puedes trabajar cuatro horas sin que nadie te moleste, brunchs internacionales y una concentración de co-working informal impropia de esta parte del mundo. Cà Phê Trứng — el café de huevo, una crema de yema batida sobre café negro — se inventó aquí y hay que probarlo mínimo una vez.",
          "en": "Where expats and digital nomads who have been here more than two weeks live. Hanoi's largest lake has waterfront cafes where you can work for four hours without anyone bothering you, international brunches and a concentration of informal co-working unusual for this part of the world. Cà Phê Trứng — egg coffee, a beaten egg yolk cream on black coffee — was invented here and must be tried at least once."
        },
        "affiliateLinks": [
          {
            "partner": "booking",
            "label": {
              "es": "Hoteles con vistas al lago Tay Ho",
              "en": "Hotels with West Lake views"
            },
            "query": "hanoi west lake hotel"
          }
        ]
      }
    ],
    "events": [
      {
        "name": {
          "es": "Tết Nguyên Đán — Año Nuevo Vietnamita",
          "en": "Tết Nguyên Đán — Vietnamese New Year"
        },
        "date": {
          "es": "Enero/Febrero 2027",
          "en": "January/February 2027"
        },
        "type": "cultural",
        "description": {
          "es": "El mayor evento del año en Vietnam. Hanói se vacía de trabajadores que vuelven a sus provincias de origen y la ciudad se transforma: flores de melocotón en cada esquina, fuegos artificiales sobre el lago Hoan Kiem, templos repletos. Viajar durante el Tết es barato pero los servicios se reducen notablemente. La semana previa es la más animada.",
          "en": "The biggest event of the year in Vietnam. Hanoi empties of workers returning to their home provinces and the city transforms: peach blossom on every corner, fireworks over Hoan Kiem Lake, temples packed. Travelling during Tết is cheap but services are noticeably reduced. The week before is the liveliest."
        }
      },
      {
        "name": {
          "es": "Festival de Combustión del Papel (Tháng Bảy Âm Lịch)",
          "en": "Ghost Money Burning Festival (Tháng Bảy Âm Lịch)"
        },
        "date": {
          "es": "Agosto",
          "en": "August"
        },
        "type": "cultural",
        "description": {
          "es": "El mes del fantasma en el calendario lunar vietnamita. Las familias queman ofrendas de papel — billetes, casas, coches y objetos de lujo en miniatura — para sus antepasados. En los templos del barrio antiguo y en los mercados se ve esta práctica cada noche durante semanas. Un ritual colectivo que mezcla budismo, taoísmo y tradiciones animistas locales.",
          "en": "The ghost month in the Vietnamese lunar calendar. Families burn paper offerings — bills, houses, cars and miniature luxury objects — for their ancestors. In the temples of the old quarter and in the markets this practice can be seen every night for weeks. A collective ritual mixing Buddhism, Taoism and local animist traditions."
        }
      },
      {
        "name": {
          "es": "Festival Internacional de Cine de Hanói",
          "en": "Hanoi International Film Festival"
        },
        "date": {
          "es": "Noviembre",
          "en": "November"
        },
        "type": "art",
        "description": {
          "es": "Festival bienal con proyecciones en el histórico Cine Tháng Tám y otros espacios por la ciudad. Selección de cine asiático contemporáneo e independiente con sección competitiva. Entradas muy asequibles. El festival ha crecido en relevancia desde su edición de 2020 y atrae a cineastas de Vietnam, Tailandia, Corea e Indonesia.",
          "en": "Biennial festival with screenings at the historic Tháng Tám Cinema and other spaces around the city. Selection of contemporary and independent Asian cinema with a competitive section. Very affordable tickets. The festival has grown in relevance since its 2020 edition and attracts filmmakers from Vietnam, Thailand, Korea and Indonesia."
        }
      }
    ],
    "services": {
      "activities": [
        "getyourguide",
        "viator"
      ],
      "hotels": [
        "booking"
      ],
      "esim": [
        "airalo"
      ],
      "insurance": [
        "safetywing"
      ]
    }
  },
  {
    "id": "36",
    "city": "Dubrovnik",
    "country": {
      "es": "Croacia",
      "en": "Croatia"
    },
    "slug": "dubrovnik-guia-2026",
    "enSlug": "dubrovnik-travel-guide-2026",
    "narrator": "marcos",
    "category": "europe",
    "emoji": "🏰",
    "heroImage": "https://images.unsplash.com/photo-1555990793-da11153b1d8a?w=1200&q=80",
    "title": {
      "es": "Dubrovnik 2026: la guía honesta para no arruinarte",
      "en": "Dubrovnik 2026: the honest guide to not going broke"
    },
    "subtitle": {
      "es": "Sí, es tan bonito como parece. No, no vayas en julio. Sí, los tours de Juego de Tronos valen la pena.",
      "en": "Yes, it's as beautiful as it looks. No, don't go in July. Yes, the Game of Thrones tours are worth it."
    },
    "date": "2026-03-16",
    "readTime": "7 min",
    "metaDescription": {
      "es": "Guía completa de Dubrovnik 2026: murallas medievales, ciudad vieja UNESCO, tours de Juego de Tronos, isla Lokrum y cuándo ir para evitar las masas.",
      "en": "Complete Dubrovnik 2026 guide: medieval walls, UNESCO old town, Game of Thrones tours, Lokrum island and when to go to avoid the crowds."
    },
    "keywords": {
      "es": [
        "dubrovnik guia 2026",
        "que ver en dubrovnik",
        "murallas dubrovnik",
        "juego de tronos dubrovnik",
        "cuando ir dubrovnik",
        "isla lokrum"
      ],
      "en": [
        "dubrovnik travel guide 2026",
        "what to see in dubrovnik",
        "dubrovnik walls",
        "game of thrones dubrovnik",
        "best time to visit dubrovnik",
        "lokrum island"
      ]
    },
    "excerpt": {
      "es": "Dubrovnik en julio es una pesadilla turística de manual. Dubrovnik en mayo o septiembre es una de las ciudades más bonitas de Europa. Elige bien.",
      "en": "Dubrovnik in July is a textbook tourist nightmare. Dubrovnik in May or September is one of the most beautiful cities in Europe. Choose wisely."
    },
    "pointsOfInterest": [
      {
        "name": {
          "es": "Murallas de Dubrovnik",
          "en": "Dubrovnik City Walls"
        },
        "description": {
          "es": "2km de murallas medievales sobre el Adriático. Las mejores vistas de la ciudad y del mar. Imprescindible madrugar: antes de las 9am el recorrido se hace sin multitudes y la luz del Adriático sobre los tejados de teja naranja es de las mejores cosas que verás en un viaje europeo. En julio a las 11am son un convoy de turistas sudorosos a 40°C. Hay taquillas en tres puntos de acceso — la entrada junto a la Puerta Pile es la más concurrida; prueba la entrada del Fuerte Revelin para evitar colas.",
          "en": "2km of medieval walls over the Adriatic. The best views of the city and the sea. Essential to get there early: before 9am the walk is done without crowds and the Adriatic light on the orange-tiled rooftops is one of the best things you'll see on a European trip. In July at 11am it's a convoy of sweaty tourists at 40°C. There are ticket booths at three access points — the entrance by Pile Gate is the most crowded; try the Revelin Fort entrance to avoid queues."
        },
        "affiliateLinks": [
          {
            "partner": "tiqets",
            "label": {
              "es": "Entrada a las murallas de Dubrovnik",
              "en": "Dubrovnik city walls entry ticket"
            },
            "query": "dubrovnik city walls ticket"
          },
          {
            "partner": "getyourguide",
            "label": {
              "es": "Tour guiado por las murallas",
              "en": "Guided walls tour"
            },
            "query": "dubrovnik walls guided tour"
          }
        ]
      },
      {
        "name": {
          "es": "Ciudad Vieja (Stari Grad)",
          "en": "Old Town (Stari Grad)"
        },
        "description": {
          "es": "Declarada Patrimonio de la Humanidad por la UNESCO. El Stradun —la calle principal de piedra pulida— fue reconstruido tras el terremoto de 1667 y los daños del sitio de 1991-1992 con una precisión casi obsesiva. Flanqueándolo: la Fuente Grande de Onofrio (1438), la iglesia de San Blas patrón de la ciudad, el Palacio del Rector, la Catedral. Todo en menos de 700m. Es una ciudad medieval que funciona: la gente vive aquí, hay una farmacia que lleva abierta sin interrupción desde 1317 (se dice que es la más antigua de Europa en funcionamiento) y las terrazas se llenan de lugareños por la noche.",
          "en": "Declared a UNESCO World Heritage Site. The Stradun — the main street of polished stone — was rebuilt after the 1667 earthquake and the damage from the 1991-1992 siege with an almost obsessive precision. Flanking it: the Large Onofrio Fountain (1438), the church of St Blaise patron of the city, the Rector's Palace, the Cathedral. All within less than 700m. It's a medieval city that works: people actually live here, there's a pharmacy that has been open continuously since 1317 (said to be the oldest working pharmacy in Europe) and the terraces fill up with locals at night."
        },
        "affiliateLinks": [
          {
            "partner": "getyourguide",
            "label": {
              "es": "Tour a pie por la ciudad vieja",
              "en": "Old town walking tour"
            },
            "query": "dubrovnik old town walking tour"
          },
          {
            "partner": "viator",
            "label": {
              "es": "Tour histórico de Dubrovnik",
              "en": "Dubrovnik historic tour"
            },
            "query": "dubrovnik historic walking tour"
          }
        ]
      },
      {
        "name": {
          "es": "Fuerte Lovrijenac y escenarios de Juego de Tronos",
          "en": "Lovrijenac Fortress and Game of Thrones locations"
        },
        "description": {
          "es": "El Fuerte Lovrijenac —pegado a las murallas occidentales, sobre un acantilado de 37 metros sobre el mar— es Desembarco del Rey en la vida real. Si nunca has visto Juego de Tronos, sigue siendo uno de los fuertes medievales más impresionantes de Europa. Si lo has visto, la experiencia de reconocer las localizaciones es genuinamente placentera aunque lo niegues. Los tours temáticos duran 2 horas, tienen guías que conocen el show mejor que los showrunners y cuestan alrededor de 30-35€.",
          "en": "Lovrijenac Fortress — pressed against the western walls, on a 37-metre cliff above the sea — is King's Landing in real life. If you've never seen Game of Thrones, it's still one of the most impressive medieval fortresses in Europe. If you have, the experience of recognising the locations is genuinely pleasurable even if you deny it. Themed tours last 2 hours, have guides who know the show better than the showrunners and cost around €30-35."
        },
        "affiliateLinks": [
          {
            "partner": "viator",
            "label": {
              "es": "Tour de Juego de Tronos en Dubrovnik",
              "en": "Game of Thrones tour Dubrovnik"
            },
            "query": "dubrovnik game of thrones tour"
          },
          {
            "partner": "getyourguide",
            "label": {
              "es": "Tour de GoT y murallas combinado",
              "en": "GoT and walls combined tour"
            },
            "query": "dubrovnik game of thrones walls tour"
          }
        ]
      },
      {
        "name": {
          "es": "Isla Lokrum",
          "en": "Lokrum Island"
        },
        "description": {
          "es": "15 minutos en barca desde el puerto antiguo. La isla tiene pavos reales sueltos que no le tienen miedo a nadie, playas de piedra con aguas cristalinas, un convento benedictino en ruinas del siglo XI y un pequeño lago salado interior (el Mar Muerto de Lokrum). La barca sale cada hora y la entrada incluye el barco de vuelta. Lleva algo de comida — hay un restaurante pero los precios son astronómicos. La leyenda dice que Ricardo Corazón de León naufragó aquí en 1192 y construyó una iglesia en agradecimiento.",
          "en": "15 minutes by boat from the old port. The island has free-roaming peacocks with no fear of humans, rocky beaches with crystal-clear water, a ruined 11th-century Benedictine monastery and a small inland saltwater lake (the Lokrum Dead Sea). The boat runs every hour and entry includes the return boat. Bring some food — there's a restaurant but the prices are astronomical. Legend has it that Richard the Lionheart was shipwrecked here in 1192 and built a church in gratitude."
        },
        "affiliateLinks": [
          {
            "partner": "tiqets",
            "label": {
              "es": "Barca y entrada a Lokrum",
              "en": "Lokrum island boat and entry"
            },
            "query": "lokrum island dubrovnik"
          }
        ]
      },
      {
        "name": {
          "es": "Monte Srđ y el teleférico",
          "en": "Mount Srđ and the cable car"
        },
        "description": {
          "es": "Vistas panorámicas de la ciudad y el Adriático desde 412 metros. El teleférico sube en 4 minutos. Desde arriba se ve la ciudad amurallada completa, las islas Elafiti y, en días claros, las costas de Bosnia y Montenegro. Hay un restaurante en la cima y un museo sobre el Sitio de Dubrovnik de 1991-1995 que merece más atención de la que recibe. El teleférico fue destruido durante el sitio y reconstruido en 2010.",
          "en": "Panoramic views of the city and the Adriatic from 412 metres. The cable car takes 4 minutes. From the top you see the complete walled city, the Elafiti islands and, on clear days, the coasts of Bosnia and Montenegro. There's a restaurant at the summit and a museum about the 1991-1995 Siege of Dubrovnik that deserves more attention than it gets. The cable car was destroyed during the siege and rebuilt in 2010."
        },
        "affiliateLinks": [
          {
            "partner": "tiqets",
            "label": {
              "es": "Ticket teleférico Monte Srđ",
              "en": "Mount Srđ cable car ticket"
            },
            "query": "dubrovnik cable car mount srd"
          },
          {
            "partner": "getyourguide",
            "label": {
              "es": "Tour panorámico de Dubrovnik",
              "en": "Dubrovnik panoramic tour"
            },
            "query": "dubrovnik panoramic tour"
          }
        ]
      }
    ],
    "events": [
      {
        "name": {
          "es": "Festival de Verano de Dubrovnik",
          "en": "Dubrovnik Summer Festival"
        },
        "date": {
          "es": "Julio–Agosto",
          "en": "July–August"
        },
        "type": "festival",
        "description": {
          "es": "Teatro, ópera, música clásica y danza en localizaciones históricas de la ciudad vieja: el Fuerte Lovrijenac, el Claustro del Convento Franciscano, el Atrio del Palacio del Rector. El festival más antiguo de Croacia (fundado en 1950). Entradas desde 15€ para conciertos menores hasta 80-100€ para ópera en el Fuerte. Coexiste con la invasión turística de julio, así que las entradas hay que comprarlas con meses de antelación.",
          "en": "Theatre, opera, classical music and dance at historic locations in the old town: Lovrijenac Fortress, the Franciscan Monastery Cloister, the Rector's Palace Atrium. The oldest festival in Croatia (founded in 1950). Tickets from €15 for minor concerts to €80-100 for opera at the Fortress. It coexists with the July tourist invasion, so tickets need to be bought months in advance."
        }
      },
      {
        "name": {
          "es": "Good Food Festival",
          "en": "Good Food Festival"
        },
        "date": {
          "es": "Octubre",
          "en": "October"
        },
        "type": "gastronomy",
        "description": {
          "es": "Festival gastronómico con chefs locales e internacionales, catas de vino dálmata y productos de la región. Octubre es además uno de los mejores meses para visitar Dubrovnik: menos turistas, precios más bajos y temperatura agradable (20-24°C). El festival tiene cenas de gala, mercados de productores y clases de cocina.",
          "en": "Gastronomy festival with local and international chefs, Dalmatian wine tastings and regional produce. October is also one of the best months to visit Dubrovnik: fewer tourists, lower prices and pleasant temperature (20-24°C). The festival includes gala dinners, producers' markets and cooking classes."
        }
      },
      {
        "name": {
          "es": "Festival de Invierno de Dubrovnik",
          "en": "Dubrovnik Winter Festival"
        },
        "date": {
          "es": "Diciembre",
          "en": "December"
        },
        "type": "cultural",
        "description": {
          "es": "Mercado navideño en el Stradun con puestos de artesanía, vino caliente y dulces croatas. La ciudad vacía de turistas de verano tiene otra dimensión en diciembre: los lugareños vuelven al Stradun, los precios de los hoteles caen un 60-70% y las murallas se pueden recorrer prácticamente en soledad. Es el secreto mejor guardado de Dubrovnik.",
          "en": "Christmas market on the Stradun with craft stalls, mulled wine and Croatian sweets. The city emptied of summer tourists takes on a different dimension in December: locals return to the Stradun, hotel prices drop 60-70% and the walls can be walked in near solitude. It's Dubrovnik's best-kept secret."
        }
      }
    ],
    "services": {
      "activities": [
        "getyourguide",
        "tiqets",
        "viator"
      ],
      "hotels": [
        "booking"
      ],
      "insurance": [
        "safetywing"
      ],
      "esim": [
        "airalo"
      ]
    }
  },
  {
    "id": "37",
    "city": "Medellín",
    "country": {
      "es": "Colombia",
      "en": "Colombia"
    },
    "slug": "medellin-guia-2026",
    "enSlug": "medellin-travel-guide-2026",
    "narrator": "sofia",
    "category": "america",
    "emoji": "🌺",
    "heroImage": "https://images.unsplash.com/photo-1597006031562-ef3e9051c277?w=1200&q=80",
    "title": {
      "es": "Medellín 2026: la ciudad que transformó su historia y conquistó a los nómadas",
      "en": "Medellín 2026: the city that transformed its history and conquered nomads"
    },
    "subtitle": {
      "es": "Tenía el itinerario perfecto. Me quedé cuatro días en El Poblado y olvidé el resto.",
      "en": "I had the perfect itinerary. I spent four days in El Poblado and forgot the rest."
    },
    "date": "2026-03-16",
    "readTime": "8 min",
    "metaDescription": {
      "es": "Guía completa de Medellín 2026: El Poblado, Comuna 13, Plaza Botero, Guatapé, costes para nómadas digitales y lo que nadie te cuenta sobre la transformación urbana.",
      "en": "Complete Medellín 2026 guide: El Poblado, Comuna 13, Plaza Botero, Guatapé, costs for digital nomads and what nobody tells you about the urban transformation."
    },
    "keywords": {
      "es": [
        "medellin guia 2026",
        "nomada digital medellin",
        "comuna 13 medellin",
        "el poblado medellin",
        "guatape excursion",
        "medellin ciudad eterna primavera"
      ],
      "en": [
        "medellin travel guide 2026",
        "digital nomad medellin",
        "comuna 13 medellin",
        "el poblado medellin",
        "guatape day trip",
        "medellin city of eternal spring"
      ]
    },
    "excerpt": {
      "es": "Medellín pasó de ser la ciudad más peligrosa del mundo a ser la capital del nomadismo digital en América Latina. La transformación urbana más impresionante del siglo XXI y una ciudad de la eterna primavera a 700€/mes.",
      "en": "Medellín went from being the world's most dangerous city to being the digital nomad capital of Latin America. The most impressive urban transformation of the 21st century and a city of eternal spring at €700/month."
    },
    "pointsOfInterest": [
      {
        "name": {
          "es": "El Poblado",
          "en": "El Poblado"
        },
        "description": {
          "es": "El barrio donde aterrizan todos los nómadas digitales, los expats y los viajeros con buena guía. Parque Lleras como epicentro de la vida nocturna, restaurantes de fusión colombo-internacional, hostels premium con piscina en la azotea y el mejor café de Colombia a 1.500 pesos (menos de 0,40€). El Poblado es el más seguro y el más caro del Medellín turístico — pero 'el más caro' aquí significa que un buen restaurante sale a 15-20€ para dos con vino. La trampa del Poblado es que puedes quedarte atrapada aquí cuatro días olvidando que existe el resto de la ciudad. Lo digo por experiencia.",
          "en": "The neighbourhood where all digital nomads, expats and well-guided travellers land. Parque Lleras as the epicentre of nightlife, Colombian-international fusion restaurants, premium hostels with rooftop pools and the best coffee in Colombia at 1,500 pesos (under €0.40). El Poblado is the safest and most expensive of tourist Medellín — but 'most expensive' here means a good restaurant costs €15-20 for two with wine. The Poblado trap is that you can get stuck here for four days forgetting the rest of the city exists. I speak from experience."
        },
        "affiliateLinks": [
          {
            "partner": "booking",
            "label": {
              "es": "Hoteles en El Poblado, Medellín",
              "en": "Hotels in El Poblado, Medellín"
            },
            "query": "el poblado medellin hotel"
          }
        ]
      },
      {
        "name": {
          "es": "Metrocable y las Comunas",
          "en": "Metrocable and the Comunas"
        },
        "description": {
          "es": "El sistema de metrocable que Medellín construyó para conectar los barrios más pobres de las laderas con el metro del valle. Una decisión de urbanismo social que transformó comunidades que antes tardaban 90 minutos en bajar al centro en 10 minutos de teleférico. El resultado más visible de esa transformación es la Comuna 13: antes el barrio más peligroso de la ciudad, hoy una galería de arte urbano al aire libre donde vivir. El tour de graffiti por la Comuna 13 es el mejor plan de un día en Medellín —guías del propio barrio, historia real, arte genuino.",
          "en": "The metrocable system that Medellín built to connect the poorest hillside neighbourhoods to the valley metro. A social urban planning decision that transformed communities that previously took 90 minutes to reach the city centre into a 10-minute cable car ride. The most visible result of that transformation is Comuna 13: once the most dangerous neighbourhood in the city, today an open-air urban art gallery to live in. The graffiti tour of Comuna 13 is the best day plan in Medellín — guides from the neighbourhood itself, real history, genuine art."
        },
        "affiliateLinks": [
          {
            "partner": "getyourguide",
            "label": {
              "es": "Tour de graffiti por la Comuna 13",
              "en": "Comuna 13 graffiti tour"
            },
            "query": "medellin comuna 13 graffiti tour"
          },
          {
            "partner": "viator",
            "label": {
              "es": "Tour por las comunas de Medellín",
              "en": "Medellin comunas tour"
            },
            "query": "medellin comunas cultural tour"
          }
        ]
      },
      {
        "name": {
          "es": "Plaza Botero y Centro Cultural",
          "en": "Plaza Botero and Cultural Centre"
        },
        "description": {
          "es": "23 esculturas monumentales de Fernando Botero —el artista colombiano más conocido internacionalmente— instaladas en la plaza frente al Museo de Antioquia. Los cuerpos exageradamente voluminosos de la escultura de Botero son tan reconocibles como controvertidos: el propio artista insiste en que no son gordos, sino llenos. El Museo de Antioquia alberga la colección permanente más grande de Botero en el mundo (donada por él mismo) y vale la entrada. El Centro está en plena transformación: la recuperación urbana del centro histórico de Medellín es uno de los proyectos más ambiciosos de Colombia.",
          "en": "23 monumental sculptures by Fernando Botero — the most internationally recognised Colombian artist — installed in the square in front of the Museum of Antioquia. The exaggeratedly voluminous bodies of Botero's sculpture are as recognisable as they are controversial: the artist himself insists they are not fat, but full. The Museum of Antioquia houses the world's largest permanent Botero collection (donated by the artist himself) and is worth the entry. The Centre is in full transformation: the urban recovery of Medellín's historic centre is one of Colombia's most ambitious projects."
        },
        "affiliateLinks": [
          {
            "partner": "getyourguide",
            "label": {
              "es": "Tour cultural por el centro de Medellín",
              "en": "Medellín cultural centre tour"
            },
            "query": "medellin city center cultural tour"
          }
        ]
      },
      {
        "name": {
          "es": "Jardín Botánico y Parque Explora",
          "en": "Botanical Garden and Parque Explora"
        },
        "description": {
          "es": "Un oasis verde en el corazón del centro de la ciudad. El Jardín Botánico tiene la mayor colección de orquídeas de Colombia (la flor nacional), mariposas en libertad en un orquideorama de madera y bambú y una laguna tranquila donde los paisanos jubilados juegan a las cartas. Adyacente, el Parque Explora es el mayor acuario de agua dulce de Sudamérica — más de 400 especies del río Amazonas y sus afluentes en el corazón de los Andes. El conjunto es de los mejores parques urbanos del continente.",
          "en": "A green oasis in the heart of the city centre. The Botanical Garden has Colombia's largest orchid collection (the national flower), free-roaming butterflies in a wood and bamboo orchidarium and a quiet lagoon where retired locals play cards. Adjacent, Parque Explora is the largest freshwater aquarium in South America — more than 400 species from the Amazon river and its tributaries in the heart of the Andes. Together, it's one of the best urban parks on the continent."
        },
        "affiliateLinks": [
          {
            "partner": "viator",
            "label": {
              "es": "Tour por los barrios verdes de Medellín",
              "en": "Medellin green neighbourhoods tour"
            },
            "query": "medellin botanical garden tour"
          }
        ]
      },
      {
        "name": {
          "es": "Guatapé — excursión de un día imprescindible",
          "en": "Guatapé — the essential day trip"
        },
        "description": {
          "es": "A 1h45 de Medellín por carretera, Guatapé es la mejor excursión de día desde cualquier ciudad colombiana. El Peñón de Guatapé —un monolito granítico de 200 metros de altura con 649 escalones tallados en la roca hasta la cima— ofrece vistas a 360° de un embalse artificial con más de 300 islas e islotes. El pueblo de Guatapé tiene las fachadas más coloridas de Colombia y restaurantes de trucha fresca en el lago. Sal antes de las 8am para evitar colas en el Peñón.",
          "en": "1h45 from Medellín by road, Guatapé is the best day trip from any Colombian city. The Peñón de Guatapé — a 200-metre granite monolith with 649 steps carved into the rock to the summit — offers 360° views over an artificial reservoir with more than 300 islands and islets. The town of Guatapé has the most colourful facades in Colombia and fresh trout restaurants on the lake. Leave before 8am to avoid queues at the Peñón."
        },
        "affiliateLinks": [
          {
            "partner": "viator",
            "label": {
              "es": "Excursión a Guatapé desde Medellín",
              "en": "Guatapé day trip from Medellín"
            },
            "query": "guatape day trip from medellin"
          },
          {
            "partner": "getyourguide",
            "label": {
              "es": "Tour a El Peñón y Guatapé",
              "en": "El Peñón and Guatapé tour"
            },
            "query": "medellin guatape penon tour"
          }
        ]
      }
    ],
    "events": [
      {
        "name": {
          "es": "Feria de las Flores",
          "en": "Flower Festival (Feria de las Flores)"
        },
        "date": {
          "es": "Agosto",
          "en": "August"
        },
        "type": "festival",
        "description": {
          "es": "El evento más importante de Medellín. El Desfile de Silleteros es el corazón del festival: campesinos antioqueños bajan desde las laderas cargando silletas — estructuras de flores de hasta 80kg — en una procesión de 3km por las calles del centro. Cada silleta puede tener más de 100 flores distintas. El festival dura diez días con conciertos, exposiciones de orquídeas, corridas de coches clásicos y feria. Agosto es caro y concurrido, pero la Feria de las Flores es de esas experiencias que justifican reservar con seis meses de antelación.",
          "en": "The most important event in Medellín. The Silleteros Parade is the heart of the festival: Antioquian peasants descend from the hillsides carrying silletas — flower structures weighing up to 80kg — in a 3km procession through the city centre streets. Each silleta can have more than 100 different flowers. The festival lasts ten days with concerts, orchid exhibitions, vintage car rallies and a fair. August is expensive and crowded, but the Flower Festival is one of those experiences that justifies booking six months in advance."
        }
      },
      {
        "name": {
          "es": "Festival Internacional de Poesía de Medellín",
          "en": "Medellín International Poetry Festival"
        },
        "date": {
          "es": "Julio",
          "en": "July"
        },
        "type": "art",
        "description": {
          "es": "Uno de los festivales de poesía más importantes del mundo hispanohablante, fundado en 1991. Poetas de 40-50 países leen en espacios públicos, plazas, parques y teatros de la ciudad durante una semana. Entrada gratuita a la mayoría de actos. El festival nació como acto de resistencia cultural durante los años más violentos de la ciudad y tiene una historia que lo hace único en el circuito internacional.",
          "en": "One of the most important poetry festivals in the Spanish-speaking world, founded in 1991. Poets from 40-50 countries read in public spaces, squares, parks and theatres across the city for a week. Free entry to most events. The festival was born as an act of cultural resistance during the city's most violent years and has a history that makes it unique on the international circuit."
        }
      },
      {
        "name": {
          "es": "Colombia Moda",
          "en": "Colombia Moda"
        },
        "date": {
          "es": "Julio",
          "en": "July"
        },
        "type": "technology",
        "description": {
          "es": "La semana de la moda colombiana, una de las más importantes de América Latina. Medellín es la capital textil de Colombia y Colombia Moda reúne diseñadores locales e internacionales, compradores y prensa en el recinto ferial de Plaza Mayor. Hay eventos públicos además de los profesionales: desfiles, pop-ups y showrooms. La industria textil de Medellín emplea a más de 50.000 personas y tiene una historia de innovación técnica desde los años 1960.",
          "en": "Colombian fashion week, one of the most important in Latin America. Medellín is Colombia's textile capital and Colombia Moda brings together local and international designers, buyers and press at the Plaza Mayor exhibition centre. There are public events alongside the professional programme: runway shows, pop-ups and showrooms. Medellín's textile industry employs more than 50,000 people and has a history of technical innovation since the 1960s."
        }
      }
    ],
    "services": {
      "activities": [
        "getyourguide",
        "viator"
      ],
      "hotels": [
        "booking"
      ],
      "insurance": [
        "safetywing"
      ],
      "esim": [
        "airalo"
      ]
    }
  },
  {
    "id": "38",
    "city": "Nápoles",
    "country": {
      "es": "Italia",
      "en": "Italy"
    },
    "slug": "napoles-guia-2026",
    "enSlug": "naples-travel-guide-2026",
    "narrator": "david",
    "category": "europe",
    "emoji": "🍕",
    "heroImage": "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?w=1200&q=80",
    "title": {
      "es": "Nápoles 2026: la pizza, Pompeya y el caos ordenado más hermoso de Italia",
      "en": "Naples 2026: the pizza, Pompeii and the most beautiful ordered chaos in Italy"
    },
    "subtitle": {
      "es": "Fui por la pizza. Me quedé por todo lo demás — aunque nunca lo admitiré en voz alta.",
      "en": "I went for the pizza. I stayed for everything else — although I'll never admit it out loud."
    },
    "date": "2026-03-16",
    "readTime": "9 min",
    "metaDescription": {
      "es": "Guía completa de Nápoles 2026: las mejores pizzerías del Centro Storico, Pompeya y el Vesubio, el MANN y Spaccanapoli. Todo lo que necesitas saber para comer bien y ver mucho.",
      "en": "Complete Naples 2026 guide: the best pizzerias in the Centro Storico, Pompeii and Vesuvius, the MANN and Spaccanapoli. Everything you need to eat well and see plenty."
    },
    "keywords": {
      "es": [
        "napoles guia 2026",
        "mejor pizza napoles",
        "pompeya visita",
        "centro storico napoles",
        "napoles viaje"
      ],
      "en": [
        "naples travel guide 2026",
        "best pizza naples",
        "pompeii visit",
        "naples centro storico",
        "naples trip"
      ]
    },
    "excerpt": {
      "es": "Nápoles tiene mala reputación — y es completamente injusta para un visitante de día con un mínimo de criterio. Tiene la mejor pizza del mundo, la mayor colección de arte romano del planeta y una ciudad bajo otra ciudad. Eso sí: llega con hambre.",
      "en": "Naples has a bad reputation — and it's completely unfair for a daytime visitor with basic awareness. It has the best pizza in the world, the largest collection of Roman art on the planet and a city beneath another city. Just arrive hungry."
    },
    "pointsOfInterest": [
      {
        "name": {
          "es": "Pizzerías del Centro Storico",
          "en": "Centro Storico Pizzerias"
        },
        "description": {
          "es": "L'Antica Pizzeria da Michele (desde 1870), Gino Sorbillo, Di Matteo. La pizza napoletana original: masa fina, bordes inflados (el cornicione), tomate San Marzano DO, fior di latte en lugar de mozzarella de búfala en la versión clásica. El debate sobre quién hace la mejor pizza de la ciudad es el argumento más largo de la historia de Italia — y ningún napolitano lo va a resolver porque cada uno tiene su respuesta y no está abierto a revisarla. Lo que sí es indiscutible: la pizza que comes aquí no tiene nada que ver con lo que venden en el resto del mundo con ese nombre.",
          "en": "L'Antica Pizzeria da Michele (since 1870), Gino Sorbillo, Di Matteo. The original Neapolitan pizza: thin base, puffed edges (the cornicione), San Marzano DOP tomatoes, fior di latte instead of buffalo mozzarella in the classic version. The debate over who makes the city's best pizza is the longest argument in Italian history — and no Neapolitan will ever settle it because each has their answer and isn't open to revision. What is indisputable: the pizza you eat here has nothing to do with what they sell in the rest of the world under that name."
        },
        "affiliateLinks": [
          {
            "partner": "getyourguide",
            "label": {
              "es": "Tour gastronómico por las pizzerías de Nápoles",
              "en": "Naples pizza tour"
            },
            "query": "naples pizza tour centro storico"
          }
        ]
      },
      {
        "name": {
          "es": "Museo Arqueológico Nacional de Nápoles (MANN)",
          "en": "National Archaeological Museum of Naples (MANN)"
        },
        "description": {
          "es": "La mayor colección de artefactos romanos del mundo, incluyendo los originales rescatados de Pompeya y Herculano. Mosaicos de una calidad técnica que sigue sorprendiendo a los conservadores modernos, estatuaria colosal, y el Gabinete Secreto — la sala de frescos eróticos que estaba cerrada al público durante siglos y que hoy se puede visitar con una simple advertencia de contenido para adultos. El MANN solo es una de las muchas razones por las que Nápoles tiene una densidad cultural por metro cuadrado difícilmente igualable en Europa.",
          "en": "The largest collection of Roman artefacts in the world, including the originals rescued from Pompeii and Herculaneum. Mosaics of technical quality that still astonishes modern conservators, colossal statuary, and the Secret Cabinet — the room of erotic frescoes that was closed to the public for centuries and can now be visited with a simple adult content advisory. The MANN is just one of the many reasons why Naples has a cultural density per square metre that is hard to match in Europe."
        },
        "affiliateLinks": [
          {
            "partner": "tiqets",
            "label": {
              "es": "Entrada al MANN sin colas",
              "en": "MANN skip-the-line ticket"
            },
            "query": "naples archaeological museum mann ticket"
          }
        ]
      },
      {
        "name": {
          "es": "Pompeya y el Vesubio",
          "en": "Pompeii and Vesuvius"
        },
        "description": {
          "es": "A 30 minutos en el tren Circumvesuviana desde la Estación Central. La ciudad romana conservada bajo la ceniza volcánica del Vesubio, congelada en el año 79 d.C. Más de 100 hectáreas excavadas — casas con frescos intactos, tabernas con el menú del día pintado en la pared, moldes en yeso de las víctimas atrapadas en el momento de la erupción. El Vesubio se puede subir desde Pompeya en taxi o tour organizado (unos 45 minutos al cráter). Consejo crítico: llega antes de las 9am. Los grupos de crucero desembarcan en masa y el sitio se colapsa. La primera hora después de la apertura es otro mundo.",
          "en": "30 minutes by Circumvesuviana train from the Central Station. The Roman city preserved under volcanic ash from Vesuvius, frozen in 79 AD. More than 100 excavated hectares — houses with intact frescoes, taverns with the daily menu painted on the wall, plaster casts of victims caught in the moment of eruption. Vesuvius can be climbed from Pompeii by taxi or organised tour (about 45 minutes to the crater). Critical advice: arrive before 9am. Cruise ship groups land en masse and the site collapses. The first hour after opening is another world."
        },
        "affiliateLinks": [
          {
            "partner": "tiqets",
            "label": {
              "es": "Entrada Pompeya sin colas",
              "en": "Pompeii skip-the-line ticket"
            },
            "query": "pompeii skip the line ticket"
          },
          {
            "partner": "civitatis",
            "label": {
              "es": "Tour guiado Pompeya + Herculano",
              "en": "Guided Pompeii + Herculaneum tour"
            },
            "query": "pompeii herculaneum guided tour naples"
          }
        ]
      },
      {
        "name": {
          "es": "Spaccanapoli y el Centro Storico",
          "en": "Spaccanapoli and the Centro Storico"
        },
        "description": {
          "es": "La calle que literalmente parte Nápoles en dos — su nombre significa exactamente eso: Spacca Napoli. Patrimonio UNESCO desde 1995. Por sus aceras: mercados de especias, talleres de artesanos del presepe (los belenes napolitanos son un arte secular), sfogliatelle riccia recién salida del horno en cada segunda esquina, el Gesù Nuovo con su fachada de piedra en punta de diamante, y Santa Chiara con su claustro de azulejos del siglo XVIII. Podría pasarse un día entero en Spaccanapoli sin repetir experiencia.",
          "en": "The street that literally splits Naples in two — its name means exactly that: Spacca Napoli. UNESCO World Heritage since 1995. Along its pavements: spice markets, presepe craftsmen's workshops (Neapolitan nativity scenes are a centuries-old art), sfogliatella riccia fresh from the oven on every other corner, the Gesù Nuovo with its diamond-point stone facade, and Santa Chiara with its 18th-century tiled cloister. You could spend an entire day on Spaccanapoli without repeating an experience."
        },
        "affiliateLinks": [
          {
            "partner": "getyourguide",
            "label": {
              "es": "Tour a pie por el Centro Storico de Nápoles",
              "en": "Naples Centro Storico walking tour"
            },
            "query": "naples historic centre walking tour"
          }
        ]
      },
      {
        "name": {
          "es": "Castel dell'Ovo y el Paseo Marítimo",
          "en": "Castel dell'Ovo and the Seafront"
        },
        "description": {
          "es": "El castillo más antiguo de Nápoles, construido sobre la pequeña isla de Megaride y unido al continente por una lengua de tierra. Entrada gratuita, vistas al Vesubio desde las murallas al atardecer, y la leyenda del huevo — Virgilio supuestamente enterró un huevo mágico bajo el castillo del que dependía la estabilidad de la ciudad. Frente al castillo, el barrio de Chiaia tiene los mejores restaurantes de pescado de Nápoles: fritto misto, alici marinadas, seppia alla griglia. El paseo marítimo hasta Posillipo al atardecer, con el Vesubio al fondo, es una de las pocas vistas en Italia que supera a la postal.",
          "en": "The oldest castle in Naples, built on the small island of Megaride and connected to the mainland by a narrow strip of land. Free entry, views over Vesuvius from the walls at sunset, and the legend of the egg — Virgil supposedly buried a magic egg beneath the castle on which the city's stability depended. Opposite the castle, the Chiaia neighbourhood has Naples' best fish restaurants: fritto misto, marinated anchovies, grilled cuttlefish. The seafront walk to Posillipo at sunset, with Vesuvius in the background, is one of the few views in Italy that surpasses the postcard."
        },
        "affiliateLinks": [
          {
            "partner": "booking",
            "label": {
              "es": "Hoteles en Chiaia o Centro Storico, Nápoles",
              "en": "Hotels in Chiaia or Centro Storico, Naples"
            },
            "query": "naples chiaia centro storico hotel"
          }
        ]
      }
    ],
    "events": [
      {
        "name": {
          "es": "Festa di San Gennaro",
          "en": "Festa di San Gennaro"
        },
        "date": {
          "es": "19 de septiembre",
          "en": "September 19"
        },
        "type": "cultural",
        "description": {
          "es": "La fiesta del patrón de Nápoles. La ciudad entera se paraliza esperando el milagro: si la sangre seca del santo guardada en una ampolla de cristal se licúa en la Catedral, el año será bueno para Nápoles. Lo hace siempre. Pero los napolitanos lo viven como si esta vez pudiera no ocurrir — que es exactamente lo que hace que funcione.",
          "en": "The feast of Naples' patron saint. The entire city stops waiting for the miracle: if the dried blood of the saint kept in a glass ampoule liquefies in the Cathedral, the year will be good for Naples. It always does. But Neapolitans experience it as if this time it might not happen — which is exactly what makes it work."
        }
      },
      {
        "name": {
          "es": "Napoli Pizza Village",
          "en": "Napoli Pizza Village"
        },
        "date": {
          "es": "Junio",
          "en": "June"
        },
        "type": "gastronomy",
        "description": {
          "es": "El festival de pizza más grande del mundo en el paseo marítimo de Nápoles. Más de 50 pizzerías napoletanas instalan sus hornos de leña junto al mar, con degustaciones, competiciones de acrobacias con la masa y el argumento inevitable sobre quién la hace mejor. La asistencia es de varios cientos de miles de personas en una semana.",
          "en": "The world's largest pizza festival on the Naples seafront. More than 50 Neapolitan pizzerias set up their wood-fired ovens beside the sea, with tastings, dough acrobatics competitions and the inevitable argument about who makes it best. Attendance runs to several hundred thousand people over a week."
        }
      },
      {
        "name": {
          "es": "Maggio dei Monumenti",
          "en": "Maggio dei Monumenti"
        },
        "date": {
          "es": "Mayo",
          "en": "May"
        },
        "type": "cultural",
        "description": {
          "es": "Durante todo el mes de mayo, Nápoles abre al público palacios, iglesias, cortili y monumentos que permanecen cerrados el resto del año. Es la mejor época para acceder al patrimonio oculto de la ciudad — subterráneos romanos, colecciones privadas, conventos clausurados. La iniciativa lleva décadas y cada año el programa es diferente.",
          "en": "Throughout the month of May, Naples opens to the public palaces, churches, courtyards and monuments that remain closed for the rest of the year. It is the best time to access the city's hidden heritage — Roman underground passages, private collections, enclosed convents. The initiative has been running for decades and every year the programme is different."
        }
      }
    ],
    "services": {
      "activities": [
        "tiqets",
        "getyourguide",
        "civitatis"
      ],
      "hotels": [
        "booking"
      ],
      "transport": [
        "kiwi"
      ],
      "insurance": [
        "safetywing"
      ],
      "esim": [
        "airalo"
      ]
    }
  },
  {
    "id": "39",
    "city": "Cusco",
    "country": {
      "es": "Perú",
      "en": "Peru"
    },
    "slug": "cusco-machu-picchu-guia-2026",
    "enSlug": "cusco-machu-picchu-travel-guide-2026",
    "narrator": "sofia",
    "category": "america",
    "emoji": "🏔️",
    "heroImage": "https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=1200&q=80",
    "title": {
      "es": "Cusco y Machu Picchu 2026: la guía que escribí después de ignorar la mía propia",
      "en": "Cusco and Machu Picchu 2026: the guide I wrote after ignoring my own"
    },
    "subtitle": {
      "es": "Tenía una hoja de cálculo de 47 puntos sobre el mal de altura. Me dio el mal de altura igual.",
      "en": "I had a 47-point spreadsheet on altitude sickness. I got altitude sickness anyway."
    },
    "date": "2026-03-16",
    "readTime": "10 min",
    "metaDescription": {
      "es": "Guía completa de Cusco y Machu Picchu 2026: cómo aclimatarse a la altitud, dónde comprar las entradas de Machu Picchu, el Valle Sagrado, el Camino Inca y los mejores barrios de Cusco.",
      "en": "Complete Cusco and Machu Picchu 2026 guide: how to acclimatise to altitude, where to buy Machu Picchu tickets, the Sacred Valley, the Inca Trail and the best neighbourhoods of Cusco."
    },
    "keywords": {
      "es": [
        "cusco guia 2026",
        "machu picchu entradas",
        "mal de altura cusco",
        "valle sagrado peru",
        "camino inca reserva"
      ],
      "en": [
        "cusco travel guide 2026",
        "machu picchu tickets",
        "altitude sickness cusco",
        "sacred valley peru",
        "inca trail booking"
      ]
    },
    "excerpt": {
      "es": "Cusco está a 3.400m de altitud y Machu Picchu a 2.430m. Los dos datos más importantes de este artículo. Lo demás — la ciudad inca bajo el Cusco colonial, el Valle Sagrado, el Camino Inca — es extraordinario y merece la logística. Pero la altitud manda.",
      "en": "Cusco is at 3,400m altitude and Machu Picchu at 2,430m. The two most important facts in this article. Everything else — the Inca city beneath colonial Cusco, the Sacred Valley, the Inca Trail — is extraordinary and worth the logistics. But altitude rules."
    },
    "pointsOfInterest": [
      {
        "name": {
          "es": "Machu Picchu",
          "en": "Machu Picchu"
        },
        "description": {
          "es": "La ciudad inca en la niebla, a 2.430m sobre el nivel del mar. Las entradas tienen aforo diario estrictamente limitado (actualmente 4.500 personas/día divididas en turnos de mañana y tarde) y se agotan con semanas o meses de antelación en temporada alta (junio-agosto). El tren Cusco-Aguas Calientes es imprescindible para llegar — los autobuses solo suben desde Aguas Calientes al sitio arqueológico. El Camino Inca (4 días, 43km, acceso por Ollantaytambo) requiere reserva con meses de antelación y cupo máximo de 500 personas al día. Consejo clave: Machu Picchu está a casi 1.000m menos de altitud que Cusco — si has aclimatado bien en Cusco, la subida no será un problema respiratorio.",
          "en": "The Inca city in the mist, at 2,430m above sea level. Entry tickets have strictly limited daily capacity (currently 4,500 people/day divided into morning and afternoon shifts) and sell out weeks or months in advance during peak season (June-August). The Cusco-Aguas Calientes train is essential to get there — buses only run from Aguas Calientes up to the archaeological site. The Inca Trail (4 days, 43km, access via Ollantaytambo) requires booking months in advance with a maximum daily quota of 500 people. Key tip: Machu Picchu is almost 1,000m lower in altitude than Cusco — if you have acclimatised well in Cusco, the ascent will not be a breathing problem."
        },
        "affiliateLinks": [
          {
            "partner": "getyourguide",
            "label": {
              "es": "Tour guiado a Machu Picchu desde Cusco",
              "en": "Guided Machu Picchu tour from Cusco"
            },
            "query": "machu picchu guided tour from cusco"
          },
          {
            "partner": "viator",
            "label": {
              "es": "Machu Picchu + Huayna Picchu — entrada y guía",
              "en": "Machu Picchu + Huayna Picchu — ticket and guide"
            },
            "query": "machu picchu huayna picchu tour ticket"
          }
        ]
      },
      {
        "name": {
          "es": "Plaza de Armas de Cusco y Centro Histórico",
          "en": "Cusco Plaza de Armas and Historic Centre"
        },
        "description": {
          "es": "La ciudad inca sobre la que los conquistadores españoles construyeron el Cusco colonial en el siglo XVI. El resultado es arquitectónicamente único: muros incas de piedra encajada con precisión milimétrica sin argamasa sirven de base a iglesias barrocas del XVII. El Templo del Sol (Qorikancha) es el ejemplo más impresionante — el convento de Santo Domingo fue construido literalmente sobre sus cimientos. La Catedral del Cusco, en la Plaza de Armas, tardó 100 años en construirse y tiene 400 pinturas de la escuela cusqueña de arte colonial.",
          "en": "The Inca city on top of which Spanish conquistadors built colonial Cusco in the 16th century. The architectural result is unique: Inca stone walls fitted with millimetric precision without mortar serve as foundations for 17th-century baroque churches. The Temple of the Sun (Qorikancha) is the most impressive example — the Convent of Santo Domingo was literally built on its foundations. Cusco Cathedral, on the Plaza de Armas, took 100 years to build and houses 400 paintings from the Cusqueñan school of colonial art."
        },
        "affiliateLinks": [
          {
            "partner": "civitatis",
            "label": {
              "es": "Tour histórico por el centro de Cusco",
              "en": "Cusco historic centre tour"
            },
            "query": "cusco historic centre walking tour"
          }
        ]
      },
      {
        "name": {
          "es": "Sacsayhuamán",
          "en": "Sacsayhuamán"
        },
        "description": {
          "es": "La fortaleza inca sobre la ciudad de Cusco, a 20 minutos a pie por cuestas pronunciadas desde la Plaza de Armas (o 5 minutos en taxi). Bloques de piedra de hasta 120 toneladas encajados con precisión imposible — el más grande, la Piedra del Cansancio, pesa estimativamente 125 toneladas. Cómo los incas movieron estas piedras desde canteras a kilómetros de distancia sigue siendo materia de debate académico activo. El recinto es enorme y relativamente poco visitado en comparación con Machu Picchu — se puede explorar con tranquilidad. Las vistas sobre Cusco desde las murallas son las mejores de la ciudad.",
          "en": "The Inca fortress above the city of Cusco, a 20-minute uphill walk from the Plaza de Armas (or 5 minutes by taxi). Stone blocks of up to 120 tonnes fitted with impossible precision — the largest, the Piedra del Cansancio, weighs an estimated 125 tonnes. How the Incas moved these stones from quarries kilometres away remains a matter of active academic debate. The enclosure is enormous and relatively little visited compared to Machu Picchu — you can explore it at leisure. The views over Cusco from the walls are the best in the city."
        },
        "affiliateLinks": [
          {
            "partner": "viator",
            "label": {
              "es": "Tour por Sacsayhuamán y los sitios arqueológicos de Cusco",
              "en": "Sacsayhuamán and Cusco archaeological sites tour"
            },
            "query": "sacsayhuaman cusco archaeological sites tour"
          }
        ]
      },
      {
        "name": {
          "es": "Valle Sagrado",
          "en": "Sacred Valley"
        },
        "description": {
          "es": "El valle entre Cusco y Machu Picchu, a lo largo del río Urubamba. Los tres puntos imprescindibles: Pisac (mercado artesanal en el pueblo y ruinas incas en lo alto del cerro), Ollantaytambo (la fortaleza inca mejor conservada del Perú — aquí los incas derrotaron a los españoles en 1537, la única batalla que ganaron) y Chinchero (pueblo de tejedoras tradicionales donde el proceso de teñido con plantas y la técnica del telar es una experiencia real, no un show turístico). Se puede hacer en un día desde Cusco, pero alojarse en el Valle una noche tiene la ventaja de aclimatarse a una altitud más baja (2.800-3.000m) antes de subir a Cusco (3.400m) o Machu Picchu.",
          "en": "The valley between Cusco and Machu Picchu, along the Urubamba river. The three essential stops: Pisac (craft market in the village and Inca ruins high on the hillside), Ollantaytambo (the best-preserved Inca fortress in Peru — here the Incas defeated the Spanish in 1537, the only battle they won) and Chinchero (village of traditional weavers where the plant-dyeing and loom-weaving process is a genuine experience, not a tourist show). It can be done as a day trip from Cusco, but staying in the Valley for one night has the advantage of acclimatising at a lower altitude (2,800-3,000m) before going up to Cusco (3,400m) or Machu Picchu."
        },
        "affiliateLinks": [
          {
            "partner": "civitatis",
            "label": {
              "es": "Excursión al Valle Sagrado desde Cusco",
              "en": "Sacred Valley day trip from Cusco"
            },
            "query": "sacred valley day trip from cusco"
          }
        ]
      },
      {
        "name": {
          "es": "Barrio de San Blas",
          "en": "San Blas neighbourhood"
        },
        "description": {
          "es": "El barrio de artesanos del Cusco colonial, subiendo por callejuelas empedradas de apenas un metro de anchura desde la Plaza de Armas hacia el cerro. Talleres de carpintería donde trabajan los mejores artesanos de madera religiosa del Perú, galerías de arte contemporáneo andino, hostels con terraza con vistas sobre los tejados coloniales. La mejor chicha morada de la ciudad —bebida andina de maíz morado, especias y fruta— está en una puerta sin letrero en la subida al barrio que abren cuando tienen. Es el tipo de cosa que encuentras por accidente y que es la mejor experiencia del viaje.",
          "en": "The artisans' quarter of colonial Cusco, climbing up cobblestoned alleyways barely a metre wide from the Plaza de Armas towards the hillside. Carpentry workshops where the best religious woodworking craftsmen in Peru work, contemporary Andean art galleries, hostels with terrace views over the colonial rooftops. The best chicha morada in the city — the Andean drink made from purple maize, spices and fruit — is behind an unlabelled door on the way up to the neighbourhood that they open when they have it. It is the kind of thing you find by accident and that turns out to be the best experience of the trip."
        },
        "affiliateLinks": [
          {
            "partner": "booking",
            "label": {
              "es": "Hoteles en San Blas o el Centro de Cusco",
              "en": "Hotels in San Blas or Cusco centre"
            },
            "query": "cusco san blas centre hotel"
          }
        ]
      }
    ],
    "events": [
      {
        "name": {
          "es": "Inti Raymi — Fiesta del Sol",
          "en": "Inti Raymi — Festival of the Sun"
        },
        "date": {
          "es": "24 de junio",
          "en": "June 24"
        },
        "type": "cultural",
        "description": {
          "es": "La recreación de la gran ceremonia inca del solsticio de invierno austral en Sacsayhuamán. El evento más importante del calendario andino, con miles de participantes en trajes ceremoniales y una representación teatral que ocupa todo el recinto de la fortaleza. El 24 de junio es festivo nacional en Perú y Cusco se llena completamente — reserva alojamiento con meses de antelación si planeas estar.",
          "en": "The re-enactment of the great Inca ceremony of the austral winter solstice at Sacsayhuamán. The most important event in the Andean calendar, with thousands of participants in ceremonial costumes and a theatrical representation that occupies the entire fortress enclosure. June 24 is a national holiday in Peru and Cusco fills completely — book accommodation months in advance if you plan to be there."
        }
      },
      {
        "name": {
          "es": "Carnaval de Cusco",
          "en": "Cusco Carnival"
        },
        "date": {
          "es": "Febrero",
          "en": "February"
        },
        "type": "festival",
        "description": {
          "es": "Uno de los carnavales más coloridos de Perú, con danzas tradicionales andinas, comparsas, batallas de agua y harina (el juego del carnaval andino, que aquí se toma en serio — lleva ropa que no te importe mojar), y el Unshu, un árbol cargado de regalos que se derriba entre todos en el día principal.",
          "en": "One of the most colourful carnivals in Peru, with traditional Andean dances, comparsas, water and flour battles (the Andean carnival game, taken seriously here — wear clothes you don't mind getting wet), and the Unshu, a tree laden with gifts that is knocked down collectively on the main day."
        }
      },
      {
        "name": {
          "es": "Señor de los Temblores",
          "en": "Señor de los Temblores"
        },
        "date": {
          "es": "Lunes de Pascua",
          "en": "Easter Monday"
        },
        "type": "cultural",
        "description": {
          "es": "La procesión del Cristo moreno de la Catedral del Cusco por las calles del Centro Histórico. La imagen — oscurecida por siglos de humo de velas — es la patrona de Cusco y se lleva en andas por las calles principales con miles de fieles. Una de las procesiones religiosas más importantes de los Andes.",
          "en": "The procession of the dark-skinned Christ from Cusco Cathedral through the streets of the Historic Centre. The image — darkened by centuries of candle smoke — is the patron of Cusco and is carried on a litter through the main streets with thousands of faithful. One of the most important religious processions in the Andes."
        }
      }
    ],
    "services": {
      "activities": [
        "getyourguide",
        "viator",
        "civitatis"
      ],
      "hotels": [
        "booking"
      ],
      "insurance": [
        "safetywing"
      ],
      "esim": [
        "airalo"
      ]
    }
  },
  {
    "id": "40",
    "city": "Chiang Mai",
    "country": {
      "es": "Tailandia",
      "en": "Thailand"
    },
    "slug": "chiang-mai-guia-2026",
    "enSlug": "chiang-mai-travel-guide-2026",
    "narrator": "elena",
    "category": "asia",
    "emoji": "🏯",
    "heroImage": "https://images.unsplash.com/photo-1598935888738-cd2622bcd437?w=1200&q=80",
    "title": {
      "es": "Chiang Mai 2026: el cuartel general del nómada digital en el sudeste asiático",
      "en": "Chiang Mai 2026: the digital nomad headquarters of Southeast Asia"
    },
    "subtitle": {
      "es": "Lo vine a evaluar como base de trabajo. Me quedé tres semanas. El khao soi tiene algo que ver.",
      "en": "I came to evaluate it as a work base. I stayed three weeks. The khao soi has something to do with it."
    },
    "date": "2026-03-16",
    "readTime": "9 min",
    "metaDescription": {
      "es": "Guía completa de Chiang Mai 2026 para nómadas digitales y viajeros: coste de vida, mejores co-workings, templos de la Ciudad Vieja, santuarios de elefantes éticos, SIM tailandesa y festival de las linternas Yi Peng.",
      "en": "Complete Chiang Mai 2026 guide for digital nomads and travellers: cost of living, best co-workings, Old City temples, ethical elephant sanctuaries, Thai SIM card and Yi Peng lantern festival."
    },
    "keywords": {
      "es": [
        "chiang mai guia 2026",
        "nomada digital chiang mai",
        "coste vida chiang mai",
        "elefantes eticos chiang mai",
        "yi peng festival linternas"
      ],
      "en": [
        "chiang mai travel guide 2026",
        "digital nomad chiang mai",
        "chiang mai cost of living",
        "ethical elephant sanctuary chiang mai",
        "yi peng lantern festival"
      ]
    },
    "excerpt": {
      "es": "Chiang Mai tiene algunos de los mejores co-workings del sudeste asiático, internet de fibra en los cafés, 300 templos en 2km² y el khao soi más bueno del mundo. Coste de vida: 700-1.000€/mes all-in. Es el punto de convergencia inevitable de todos los nómadas digitales que llegan a Asia.",
      "en": "Chiang Mai has some of the best co-workings in Southeast Asia, fibre internet in its cafés, 300 temples in 2km² and the best khao soi in the world. Cost of living: €700-1,000/month all-in. It is the inevitable convergence point for every digital nomad who arrives in Asia."
    },
    "pointsOfInterest": [
      {
        "name": {
          "es": "Ciudad Vieja (Old City)",
          "en": "Old City"
        },
        "description": {
          "es": "El cuadrado amurallado del Chiang Mai original, rodeado por el foso y los restos de la muralla del siglo XIII. Dentro: más de 300 templos en 2km². Los imprescindibles son tres: Wat Phra Singh (el más importante de la ciudad, con el Phra Singh Buda del siglo XIV en el viharn principal), Wat Chedi Luang (la pagoda mayor, parcialmente derrumbada por un terremoto en 1545 — la restauración que hicieron en los 90 es discutible, pero el conjunto sigue siendo impresionante) y Wat Suan Dok al atardecer, cuando los monjes jóvenes salen al patio y se puede hablar con ellos de forma informal en el programa 'Monk Chat'. La mayoría de los templos son de entrada gratuita — la donación está bien pero nadie te la exige.",
          "en": "The walled square of the original Chiang Mai, surrounded by the moat and remains of the 13th-century wall. Inside: more than 300 temples in 2km². The three essentials are: Wat Phra Singh (the most important in the city, with the 14th-century Phra Singh Buddha in the main viharn), Wat Chedi Luang (the main pagoda, partially collapsed by an earthquake in 1545 — the 1990s restoration is debatable, but the complex remains impressive) and Wat Suan Dok at sunset, when young monks come out to the courtyard and you can talk to them informally in the 'Monk Chat' programme. Most temples are free entry — a donation is welcome but not demanded."
        },
        "affiliateLinks": [
          {
            "partner": "viator",
            "label": {
              "es": "Tour por los templos de la Ciudad Vieja de Chiang Mai",
              "en": "Chiang Mai Old City temples tour"
            },
            "query": "chiang mai old city temples tour"
          }
        ]
      },
      {
        "name": {
          "es": "Nimman Road y el barrio nómada",
          "en": "Nimman Road and the nomad neighbourhood"
        },
        "description": {
          "es": "El eje de la Chiang Mai moderna y cosmopolita, a 15 minutos a pie de la Ciudad Vieja. Nimman concentra: specialty coffee (la densidad de cafés de especialidad por metro cuadrado es comparable a Berlín o Melbourne), brunch vegano, galerías de arte independiente, tiendas de diseñadores tailandeses y — lo más importante para el nómada — el ecosistema de co-workings más denso del sudeste asiático. CAMP (en el centro comercial Maya Mall, frente a los cines) es el co-working más famoso de Asia: enchufes en cada mesa, wifi de fibra a 100+ Mbps y consumición mínima de 80 baht (menos de 2,50€). Otros co-workings dedicados: Yellow, MANA, Punspace Nimman. Mensualidades en los co-workings formales: 2.000-4.000 baht/mes (50-110€).",
          "en": "The axis of modern, cosmopolitan Chiang Mai, 15 minutes' walk from the Old City. Nimman concentrates: specialty coffee (the density of specialty cafés per square metre is comparable to Berlin or Melbourne), vegan brunch, independent art galleries, Thai designer shops and — most importantly for the nomad — the densest co-working ecosystem in Southeast Asia. CAMP (in the Maya Mall shopping centre, opposite the cinema) is the most famous co-working space in Asia: power sockets at every table, fibre wifi at 100+ Mbps and a minimum spend of 80 baht (under €2.50). Other dedicated co-workings: Yellow, MANA, Punspace Nimman. Monthly memberships at formal co-workings: 2,000-4,000 baht/month (€50-110)."
        },
        "affiliateLinks": [
          {
            "partner": "booking",
            "label": {
              "es": "Alojamientos en el barrio Nimman, Chiang Mai",
              "en": "Accommodation in Nimman area, Chiang Mai"
            },
            "query": "chiang mai nimman area guesthouse"
          }
        ]
      },
      {
        "name": {
          "es": "Mercado Nocturno de Warorot (Talad Warorot)",
          "en": "Warorot Market (Talad Warorot)"
        },
        "description": {
          "es": "El mercado donde compran los locales, no los turistas. En el barrio chino de Chiang Mai, junto al río Ping. Seda tailandesa sin precio de expatriado, especias del norte de Tailandia (chili del norte, pasta de curry khao soi, jengibre fresco), flores de loto por kilos para las ofrendas de los templos, y comida de calle que cuesta entre 40 y 80 baht por plato. El contraste con el Night Bazaar turístico es completo. Abre durante todo el día pero la mejor hora es al atardecer cuando el mercado de flores se ilumina y los puestos de comida se llenan de gente local.",
          "en": "The market where locals shop, not tourists. In Chiang Mai's Chinatown, beside the Ping river. Thai silk without expat pricing, spices from northern Thailand (northern chili, khao soi curry paste, fresh ginger), lotus flowers by the kilo for temple offerings, and street food costing between 40 and 80 baht per dish. The contrast with the touristy Night Bazaar is complete. It opens throughout the day but the best time is at dusk when the flower market lights up and the food stalls fill with local people."
        },
        "affiliateLinks": [
          {
            "partner": "getyourguide",
            "label": {
              "es": "Tour de comida callejera por Chiang Mai",
              "en": "Chiang Mai street food tour"
            },
            "query": "chiang mai street food tour"
          }
        ]
      },
      {
        "name": {
          "es": "Doi Suthep",
          "en": "Doi Suthep"
        },
        "description": {
          "es": "El templo más sagrado del norte de Tailandia, a 1.073m sobre el nivel del mar en la montaña que da nombre al Parque Nacional Doi Suthep-Pui, a 15km del centro de Chiang Mai. El acceso al templo es por 309 escalones flanqueados por nagas (serpientes sagradas) o en funicular. Las vistas sobre la llanura de Chiang Mai son las mejores de la región. El templo fue fundado en 1383 y su chedi dorado de 24m alberga reliquias del Buda histórico. Se puede combinar con una visita al Palacio Real de Phuping (residencia de invierno de la familia real tailandesa) y a la aldea Hmong de Doi Pui en la misma excursión.",
          "en": "The most sacred temple in northern Thailand, at 1,073m above sea level on the mountain that gives its name to Doi Suthep-Pui National Park, 15km from the centre of Chiang Mai. Access to the temple is via 309 steps flanked by nagas (sacred serpents) or by funicular. The views over the Chiang Mai plain are the best in the region. The temple was founded in 1383 and its 24m golden chedi houses relics of the historical Buddha. It can be combined with a visit to Phuping Royal Palace (the Thai royal family's winter residence) and the Hmong village of Doi Pui on the same excursion."
        },
        "affiliateLinks": [
          {
            "partner": "viator",
            "label": {
              "es": "Tour Doi Suthep + templos de la Ciudad Vieja",
              "en": "Doi Suthep + Old City temples tour"
            },
            "query": "chiang mai doi suthep old city temples tour"
          }
        ]
      },
      {
        "name": {
          "es": "Santuarios de elefantes éticos",
          "en": "Ethical elephant sanctuaries"
        },
        "description": {
          "es": "El norte de Tailandia tiene la mayor concentración de elefantes asiáticos domésticos del país — la mayoría, rescatados de la industria maderera, los circos y el turismo de montar. Los santuarios éticos (Elephant Nature Park, Elephant Jungle Sanctuary, Patara Elephant Farm) permiten observar, bañar y alimentar a los elefantes en semilibertad, sin utilizarlos para actuaciones ni equitación. La diferencia con los campamentos de turismo convencional es real y significativa: en los santuarios éticos los elefantes no hacen trucos, no llevan howdah (silla de montar), y los visitantes no interactúan a escala masiva. Reserva con semanas de antelación — las plazas son intencionalmente limitadas.",
          "en": "Northern Thailand has the country's largest concentration of domestic Asian elephants — most of them rescued from the logging industry, circuses and riding tourism. Ethical sanctuaries (Elephant Nature Park, Elephant Jungle Sanctuary, Patara Elephant Farm) allow you to observe, bathe and feed elephants in semi-freedom, without using them for performances or riding. The difference from conventional tourism camps is real and significant: in ethical sanctuaries elephants don't do tricks, don't wear howdahs (riding seats), and visitor interaction is not at mass scale. Book weeks in advance — spots are intentionally limited."
        },
        "affiliateLinks": [
          {
            "partner": "getyourguide",
            "label": {
              "es": "Reservar santuario de elefantes ético — Chiang Mai",
              "en": "Book ethical elephant sanctuary — Chiang Mai"
            },
            "query": "chiang mai ethical elephant sanctuary"
          }
        ]
      }
    ],
    "events": [
      {
        "name": {
          "es": "Yi Peng — Festival de las Linternas",
          "en": "Yi Peng — Lantern Festival"
        },
        "date": {
          "es": "Noviembre (luna llena)",
          "en": "November (full moon)"
        },
        "type": "cultural",
        "description": {
          "es": "Miles de linternas de papel (khom loi) iluminadas con una llama interior ascienden simultáneamente sobre el foso de la Ciudad Vieja durante la luna llena de noviembre. La imagen — un cielo lleno de puntos de luz flotando en silencio — es la fotografía más reproducida de Tailandia. Coincide con Loi Krathong, cuando la gente suelta pequeñas balsas florales iluminadas en el río. El festival tiene también conciertos, desfiles y una atmósfera que es única en el sudeste asiático. Alojamiento: reservar con meses de antelación.",
          "en": "Thousands of paper lanterns (khom loi) lit with an inner flame rise simultaneously over the Old City moat during November's full moon. The image — a sky full of points of light floating silently upward — is the most reproduced photograph in Thailand. It coincides with Loi Krathong, when people release small illuminated floral rafts on the river. The festival also has concerts, parades and an atmosphere unique in Southeast Asia. Accommodation: book months in advance."
        }
      },
      {
        "name": {
          "es": "Songkran — Año Nuevo Tailandés",
          "en": "Songkran — Thai New Year"
        },
        "date": {
          "es": "13-15 de abril",
          "en": "April 13-15"
        },
        "type": "festival",
        "description": {
          "es": "El año nuevo tailandés y la guerra de agua más grande del mundo. En todo Tailandia se celebra, pero Chiang Mai tiene la versión más intensa del país — la Ciudad Vieja y el foso se convierten en una batalla de agua de tres días que no distingue turistas de locales ni edad. El objetivo es empaparte por completo. Lo consigues. Viaja con ropa que no te importe arruinar, envuelve el móvil en una bolsa hermética y olvida cualquier plan de trabajo esos días.",
          "en": "The Thai New Year and the world's largest water fight. It is celebrated across Thailand, but Chiang Mai has the country's most intense version — the Old City and moat become a three-day water battle that makes no distinction between tourists and locals or age groups. The objective is to get completely soaked. You achieve it. Travel with clothes you don't mind ruining, wrap your phone in a waterproof bag and forget any work plans for those days."
        }
      },
      {
        "name": {
          "es": "Flower Festival",
          "en": "Flower Festival"
        },
        "date": {
          "es": "Primer fin de semana de febrero",
          "en": "First weekend of February"
        },
        "type": "natural",
        "description": {
          "es": "El festival de flores de Chiang Mai celebra la floración de invierno del norte de Tailandia — la única región del país con una estación fresca real. Desfile de carrozas decoradas con flores, exposiciones florales en el Parque Nong Buak Haad, y una atmósfera completamente diferente al turismo habitual de la ciudad. Febrero es también uno de los mejores meses para visitar Chiang Mai: temperaturas suaves (25-28°C de día), sin lluvia y con el aire más limpio antes de la temporada de quema de campos (marzo-abril).",
          "en": "Chiang Mai's flower festival celebrates the winter blooming of northern Thailand — the only region in the country with a genuinely cool season. Parade of flower-decorated floats, floral exhibitions in Nong Buak Haad Park, and an atmosphere completely different from the city's usual tourism. February is also one of the best months to visit Chiang Mai: mild temperatures (25-28°C during the day), no rain and the cleanest air before the field-burning season (March-April)."
        }
      }
    ],
    "services": {
      "activities": [
        "getyourguide",
        "viator"
      ],
      "hotels": [
        "booking"
      ],
      "esim": [
        "airalo"
      ],
      "insurance": [
        "safetywing"
      ]
    }
  }
];
