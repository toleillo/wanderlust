import { useState, useEffect, useCallback, useRef, useMemo } from "react";

// ════════════════════════════════════════════════════════════
// CONFIGURATION & CONSTANTS
// ════════════════════════════════════════════════════════════

const AFFILIATE_CONFIG = {
  booking:      { id:"YOUR_BOOKING_ID",      name:"Booking.com",   commission:"25-40%",  cookie:"sesión",  logo:"🏨", deepUrl:(c,ci,co)=>`https://www.booking.com/searchresults.html?aid=YOUR_BOOKING_ID&ss=${encodeURIComponent(c)}&checkin=${ci}&checkout=${co}` },
  hostelworld:  { id:"YOUR_HW_ID",           name:"Hostelworld",   commission:"18%",     cookie:"30d",     logo:"🛏️", deepUrl:(c)=>`https://www.hostelworld.com/st/hostels/${encodeURIComponent(c)}/?affiliate=YOUR_HW_ID` },
  vrbo:         { id:"YOUR_VRBO_ID",         name:"Vrbo",          commission:"3%",      cookie:"7d",      logo:"🏡", deepUrl:(c)=>`https://www.vrbo.com/search?destination=${encodeURIComponent(c)}&MDPCID=YOUR_VRBO_ID` },
  skyscanner:   { id:"YOUR_SS_ID",           name:"Skyscanner",    commission:"20-50%",  cookie:"30d",     logo:"✈️", deepUrl:(c)=>`https://www.skyscanner.net/transport/flights/anywhere/${encodeURIComponent(c)}/?associateID=YOUR_SS_ID` },
  kiwi:         { id:"YOUR_KIWI_ID",         name:"Kiwi.com",      commission:"3-5%",    cookie:"30d",     logo:"🛫", deepUrl:(c)=>`https://www.kiwi.com/en/search/tiles/anywhere/${encodeURIComponent(c)}?affilid=YOUR_KIWI_ID` },
  omio:         { id:"YOUR_OMIO_ID",         name:"Omio",          commission:"6%",      cookie:"30d",     logo:"🚆", deepUrl:(c)=>`https://www.omio.com/search?destination=${encodeURIComponent(c)}&affiliate=YOUR_OMIO_ID` },
  discovercars: { id:"YOUR_DC_ID",           name:"DiscoverCars",  commission:"6-8%",    cookie:"30d",     logo:"🚗", deepUrl:(c,ci,co)=>`https://www.discovercars.com/?a_aid=YOUR_DC_ID&pickUp=${encodeURIComponent(c)}&dateFrom=${ci}&dateTo=${co}` },
  rentalcars:   { id:"YOUR_RC_ID",           name:"RentalCars",    commission:"4-6%",    cookie:"30d",     logo:"🚙", deepUrl:(c)=>`https://www.rentalcars.com/search-results?location=${encodeURIComponent(c)}&affiliateCode=YOUR_RC_ID` },
  autoeurope:   { id:"YOUR_AE_ID",           name:"AutoEurope",    commission:"€10/res", cookie:"90d",     logo:"🚘", deepUrl:(c)=>`https://www.autoeurope.com/go/search.cfm?affid=YOUR_AE_ID&pickup=${encodeURIComponent(c)}` },
  getyourguide: { id:"YOUR_GYG_ID",          name:"GetYourGuide",  commission:"8%",      cookie:"31d",     logo:"🎯", deepUrl:(c,q)=>`https://www.getyourguide.com/s/?partner_id=YOUR_GYG_ID&q=${encodeURIComponent(q||c)}` },
  viator:       { id:"YOUR_VIA_ID",          name:"Viator",        commission:"8%",      cookie:"30d",     logo:"🗺️", deepUrl:(c,q)=>`https://www.viator.com/searchResults/all?pid=YOUR_VIA_ID&text=${encodeURIComponent(q||c)}` },
  tiqets:       { id:"YOUR_TIQ_ID",          name:"Tiqets",        commission:"5-8%",    cookie:"90d",     logo:"🎟️", deepUrl:(c,q)=>`https://www.tiqets.com/en/search?partner=YOUR_TIQ_ID&q=${encodeURIComponent(q||c)}` },
  civitatis:    { id:"YOUR_CIV_ID",          name:"Civitatis",     commission:"8-10%",   cookie:"60d",     logo:"🌍", deepUrl:(c,q)=>`https://www.civitatis.com/es/${encodeURIComponent(c.toLowerCase())}/?aid=YOUR_CIV_ID` },
  ticketmaster: { id:"YOUR_TM_ID",           name:"Ticketmaster",  commission:"5-7%",    cookie:"30d",     logo:"🎤", deepUrl:(c,q)=>`https://www.ticketmaster.com/search?tm_link=tm_cic_YOUR_TM_ID&q=${encodeURIComponent(q||c)}` },
  stubhub:      { id:"YOUR_SH_ID",           name:"StubHub",       commission:"3-5%",    cookie:"7d",      logo:"🎫", deepUrl:(c,q)=>`https://www.stubhub.com/find/s/?gcid=YOUR_SH_ID&q=${encodeURIComponent(q||c)}` },
  thefork:      { id:"YOUR_TF_ID",           name:"TheFork",       commission:"€1-2 CPA",cookie:"30d",     logo:"🍴", deepUrl:(c)=>`https://www.thefork.com/search/?cc=YOUR_TF_ID&cityId=${encodeURIComponent(c.toLowerCase())}` },
  opentable:    { id:"YOUR_OT_ID",           name:"OpenTable",     commission:"$1-2 CPA",cookie:"14d",     logo:"🍽️", deepUrl:(c)=>`https://www.opentable.com/s/?rid=YOUR_OT_ID&covers=2&metroId=${encodeURIComponent(c.toLowerCase())}` },
  safetywing:   { id:"YOUR_SW_ID",           name:"SafetyWing",    commission:"10%",     cookie:"365d",    logo:"🛡️", deepUrl:()=>`https://safetywing.com/nomad-insurance?referenceID=YOUR_SW_ID` },
  worldnomads:  { id:"YOUR_WN_ID",           name:"World Nomads",  commission:"10%",     cookie:"60d",     logo:"🌐", deepUrl:(c)=>`https://www.worldnomads.com/travel-insurance/?affiliate=YOUR_WN_ID&destination=${encodeURIComponent(c)}` },
  airalo:       { id:"YOUR_AIR_ID",          name:"Airalo",        commission:"30%",     cookie:"30d",     logo:"📱", deepUrl:(c)=>`https://www.airalo.com/${encodeURIComponent(c.toLowerCase())}?ref=YOUR_AIR_ID` },
  holafly:      { id:"YOUR_HF_ID",           name:"Holafly",       commission:"15%",     cookie:"30d",     logo:"📶", deepUrl:(c)=>`https://www.holafly.com/esim-${encodeURIComponent(c.toLowerCase())}?ref=YOUR_HF_ID` },
  parkimeter:   { id:"YOUR_PM_ID",           name:"Parkimeter",    commission:"€2 CPA",  cookie:"30d",     logo:"🅿️", deepUrl:(c)=>`https://www.parkimeter.com/es/parking/${encodeURIComponent(c.toLowerCase())}?aff=YOUR_PM_ID` },
};

// A/B Testing system
const AB_VARIANTS = {
  ctaText: {
    A: { tickets: "Comprar entradas", hotel: "Reservar hotel", car: "Alquilar coche", activity: "Reservar", restaurant: "Ver restaurantes" },
    B: { tickets: "Consigue tu entrada", hotel: "Ver precios", car: "Comparar coches", activity: "Explorar", restaurant: "Reservar mesa" },
    C: { tickets: "Asegura tu plaza", hotel: "Mejores ofertas", car: "Desde €9/día", activity: "No te lo pierdas", restaurant: "Mesa disponible" }
  }
};

const getABVariant = () => {
  if (typeof window === "undefined") return "A";
  let v = null;
  try { v = window.__ab_variant; } catch(e) {}
  if (!v) { v = ["A","B","C"][Math.floor(Math.random()*3)]; try { window.__ab_variant = v; } catch(e){} }
  return v;
};

const trackClick = (partner, type, label, articleCity, variant) => {
  const event = { partner, type, label, city: articleCity, variant, timestamp: Date.now() };
  console.log("[Affiliate Click]", event);
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "affiliate_click", event);
  }
};

const getDynamicDates = (offsetDays = 14, nights = 3) => {
  const ci = new Date(Date.now() + offsetDays * 864e5);
  const co = new Date(ci.getTime() + nights * 864e5);
  const f = d => d.toISOString().split("T")[0];
  return { checkin: f(ci), checkout: f(co) };
};

const buildDeepLink = (partner, city, query, dates) => {
  const cfg = AFFILIATE_CONFIG[partner];
  if (!cfg) return "#";
  const { checkin, checkout } = dates || getDynamicDates();
  return cfg.deepUrl(city, query || city, checkin, checkout);
};

// ════════════════════════════════════════════════════════════
// SAMPLE ARTICLES — with inline CTA markers in content
// ════════════════════════════════════════════════════════════

const ARTICLES = [
  {
    id: 1, city: "Barcelona", country: "España", emoji: "🇪🇸", slug: "barcelona-primavera-2026",
    heroImage: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1200&q=80",
    title: "Barcelona en Primavera: Arte, Tapas y Festivales Imperdibles",
    subtitle: "La guía definitiva para descubrir la ciudad condal cuando cobra vida",
    date: "2026-02-24", readTime: "8 min", category: "Europa",
    excerpt: "Barcelona se transforma en primavera. Desde las terrazas de la Barceloneta hasta los festivales de música al aire libre.",
    metaDescription: "Guía completa de Barcelona en primavera 2026: mejores monumentos, barrios, restaurantes, festivales como Primavera Sound y Sónar. Reserva entradas y hoteles.",
    keywords: ["Barcelona", "primavera", "Primavera Sound", "Sónar", "Gaudí", "tapas", "festivales Barcelona"],
    pointsOfInterest: [
      { name: "La Sagrada Familia", type: "Monumento", lat: 41.4036, lng: 2.1744, description: "La obra maestra inacabada de Gaudí cobra nueva vida con la luz primaveral que atraviesa sus vitrales. Reserva entrada a primera hora.", rating: 4.9, priceRange: "€26-36",
        affiliateLinks: [
          { label: "Entradas sin cola", partner: "getyourguide", query: "sagrada familia skip line", type: "tickets" },
          { label: "Tour guiado + torres", partner: "civitatis", query: "sagrada familia tour torres", type: "activity" },
          { label: "Entrada + audioguía", partner: "tiqets", query: "sagrada familia audio", type: "tickets" }
        ]},
      { name: "Park Güell", type: "Parque", lat: 41.4145, lng: 2.1527, description: "Los mosaicos de Gaudí rodeados de jardines en flor. La zona gratuita ofrece las mejores vistas panorámicas de la ciudad.", rating: 4.7, priceRange: "€10",
        affiliateLinks: [
          { label: "Entrada + audioguía", partner: "tiqets", query: "park guell", type: "tickets" },
          { label: "Tour Gaudí completo", partner: "viator", query: "gaudi complete tour barcelona", type: "activity" }
        ]},
      { name: "El Born", type: "Barrio", lat: 41.3851, lng: 2.1834, description: "El barrio más vibrante para tapas, galerías de arte independiente y tiendas vintage. No te pierdas el Mercat de Santa Caterina.", rating: 4.6,
        affiliateLinks: [
          { label: "Tour gastronómico", partner: "getyourguide", query: "born food tour barcelona tapas", type: "activity" },
          { label: "Reservar restaurante", partner: "thefork", query: "born barcelona", type: "restaurant" }
        ]},
      { name: "Bunkers del Carmel", type: "Mirador", lat: 41.4184, lng: 2.1565, description: "Vistas 360° de toda la ciudad. Perfecto para atardeceres con una botella de cava.", rating: 4.8,
        affiliateLinks: [
          { label: "Tour atardecer + cava", partner: "civitatis", query: "bunkers carmel sunset", type: "activity" }
        ]},
      { name: "La Barceloneta", type: "Playa", lat: 41.3758, lng: 2.1899, description: "La playa urbana más famosa de Europa. En primavera puedes disfrutarla sin la masificación del verano.", rating: 4.4,
        affiliateLinks: [
          { label: "Kayak + snorkel", partner: "viator", query: "barceloneta kayak", type: "activity" },
          { label: "Chiringuitos playa", partner: "thefork", query: "barceloneta restaurant", type: "restaurant" }
        ]}
    ],
    events: [
      { name: "Primavera Sound 2026", type: "Festival", date: "5-7 Jun 2026", daysUntil: null, venue: "Parc del Fòrum", urgency: true,
        description: "El festival indie más importante de Europa. Agota entradas cada año.",
        affiliateLinks: [
          { label: "Comprar abono", partner: "ticketmaster", query: "primavera sound 2026", type: "tickets" },
          { label: "Reventa verificada", partner: "stubhub", query: "primavera sound 2026", type: "tickets" }
        ]},
      { name: "Festival Sónar", type: "Electrónica", date: "18-20 Jun 2026", venue: "Fira Gran Via", urgency: true,
        description: "Música electrónica, arte digital e innovación tecnológica.",
        affiliateLinks: [
          { label: "Entradas Sónar", partner: "ticketmaster", query: "sonar barcelona 2026", type: "tickets" },
          { label: "Reventa", partner: "stubhub", query: "sonar festival barcelona", type: "tickets" }
        ]},
      { name: "Feria de Abril de Catalunya", type: "Cultural", date: "24 Abr - 3 May 2026", venue: "Fira de Barcelona",
        description: "Sevillanas, casetas y gastronomía andaluza en plena Barcelona.",
        affiliateLinks: [
          { label: "Entradas online", partner: "ticketmaster", query: "feria abril barcelona", type: "tickets" }
        ]}
    ],
    services: {
      flights:     ["skyscanner", "kiwi"],
      hotels:      ["booking", "hostelworld", "vrbo"],
      cars:        ["discovercars", "rentalcars", "autoeurope"],
      activities:  ["getyourguide", "viator", "civitatis"],
      restaurants: ["thefork", "opentable"],
      insurance:   ["safetywing", "worldnomads"],
      esim:        ["airalo", "holafly"],
      parking:     ["parkimeter"]
    },
    // Content with {{CTA:type:partner:query}} markers for inline affiliate CTAs
    content: `Barcelona en primavera es una sinfonía de colores, sabores y sonidos que envuelve cada rincón de la ciudad. Desde marzo, la temperatura empieza a acariciar los 20 grados y los barceloneses salen a reconquistar sus terrazas, plazas y paseos marítimos.

El itinerario perfecto comienza en el Eixample, donde la arquitectura modernista brilla bajo la luz dorada de la mañana. La Sagrada Familia es obligatoria — {{CTA:tickets:getyourguide:sagrada familia skip line:Reserva tu entrada sin cola}} para evitar las dos horas de espera que son habituales en temporada alta. Pero el verdadero descubrimiento está en las casas menores de Gaudí que salpican cada manzana.

Desde ahí, perderse por el Born es un ritual. Este barrio medieval reinventado alberga las mejores tapas de la ciudad. {{CTA:activity:getyourguide:born food tour barcelona:Un tour gastronómico por el Born}} te descubrirá rincones que jamás encontrarías solo. El Mercat de Santa Caterina, con su techo ondulante de mosaicos, es perfecto para un almuerzo improvisado.

Por la tarde, la Barceloneta ofrece el contrapunto mediterráneo perfecto: arena, brisa salada y chiringuitos donde el vermut fluye sin prisa. Pero si buscas la foto que nadie tiene, sube a los Bunkers del Carmel al atardecer — la ciudad entera se despliega a tus pies como un mapa tridimensional.

Y luego están los festivales. Primavera Sound transforma la ciudad en la capital mundial del indie durante tres días de junio — {{CTA:tickets:ticketmaster:primavera sound 2026:consigue tu abono antes de que se agoten}}. Sónar lleva décadas en la vanguardia de la música electrónica. Y entre medias, decenas de eventos más pequeños que llenan cada noche barcelonesa.

Si necesitas moverte más allá de la ciudad, {{CTA:service:discovercars:barcelona:alquilar un coche}} te permitirá explorar la Costa Brava, Montserrat o las bodegas del Penedès en excursiones de un día que multiplican la experiencia.`
  },
  {
    id: 2, city: "Tokio", country: "Japón", emoji: "🇯🇵", slug: "tokio-guia-completa-2026",
    heroImage: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=80",
    title: "Tokio: Entre la Tradición Milenaria y el Futuro que ya Llegó",
    subtitle: "Templos zen, ramen perfecto y la cultura pop más vibrante del planeta",
    date: "2026-02-20", readTime: "10 min", category: "Asia",
    excerpt: "Tokio no se visita, se experimenta. Una ciudad donde un templo del siglo VII convive con un robot-café.",
    metaDescription: "Guía definitiva de Tokio 2026: templos, barrios, gastronomía, hanami, Tokyo Game Show y teamLab. Reserva tours, entradas y hoteles al mejor precio.",
    keywords: ["Tokio", "Japón", "hanami", "cerezos", "ramen", "Akihabara", "teamLab"],
    pointsOfInterest: [
      { name: "Senso-ji", type: "Templo", lat: 35.7148, lng: 139.7967, description: "El templo más antiguo de Tokio. La calle Nakamise que lleva hasta él está repleta de dulces y artesanías.", rating: 4.8, priceRange: "Gratis",
        affiliateLinks: [
          { label: "Tour guiado Asakusa", partner: "getyourguide", query: "sensoji asakusa tour", type: "activity" },
          { label: "Tour cultural privado", partner: "viator", query: "tokyo temple cultural tour", type: "activity" }
        ]},
      { name: "Shibuya Crossing", type: "Icónico", lat: 35.6595, lng: 139.7004, description: "El cruce peatonal más famoso del mundo. Sube al Starbucks del edificio Tsutaya para la mejor vista.", rating: 4.5,
        affiliateLinks: [
          { label: "Tour nocturno Shibuya", partner: "civitatis", query: "shibuya night tour", type: "activity" }
        ]},
      { name: "Shinjuku Gyoen", type: "Jardín", lat: 35.6852, lng: 139.7100, description: "Más de 1.000 cerezos crean un túnel rosado de ensueño en primavera.", rating: 4.9, priceRange: "¥500",
        affiliateLinks: [
          { label: "Tour jardines + té", partner: "getyourguide", query: "shinjuku gyoen cherry blossom", type: "activity" }
        ]},
      { name: "Akihabara", type: "Barrio", lat: 35.7023, lng: 139.7745, description: "La meca del anime, manga y tecnología.", rating: 4.6,
        affiliateLinks: [
          { label: "Tour otaku guiado", partner: "viator", query: "akihabara otaku tour", type: "activity" },
          { label: "Restaurantes temáticos", partner: "opentable", query: "tokyo akihabara", type: "restaurant" }
        ]},
      { name: "Tsukiji Outer Market", type: "Mercado", lat: 35.6654, lng: 139.7707, description: "El paraíso del sushi fresco y los snacks japoneses.", rating: 4.7,
        affiliateLinks: [
          { label: "Tour gastronómico", partner: "getyourguide", query: "tsukiji food tour sushi", type: "activity" }
        ]}
    ],
    events: [
      { name: "Hanami (Cerezos en flor)", type: "Natural", date: "Mar-Abr 2026", venue: "Toda la ciudad",
        description: "La tradición más bella de Japón: pícnics bajo los cerezos en flor.",
        affiliateLinks: [
          { label: "Tour hanami exclusivo", partner: "viator", query: "tokyo hanami cherry blossom", type: "activity" }
        ]},
      { name: "teamLab Borderless", type: "Arte", date: "Todo el año", venue: "Azabudai Hills", urgency: false,
        description: "La instalación de arte digital inmersiva más impresionante del mundo.",
        affiliateLinks: [
          { label: "Entrada prioritaria", partner: "tiqets", query: "teamlab borderless tokyo", type: "tickets" },
          { label: "Entrada + traslado", partner: "getyourguide", query: "teamlab borderless", type: "tickets" }
        ]},
      { name: "Tokyo Game Show", type: "Tecnología", date: "Sep 2026", venue: "Makuhari Messe", urgency: true,
        description: "La feria de videojuegos más grande de Asia.",
        affiliateLinks: [
          { label: "Entradas TGS", partner: "ticketmaster", query: "tokyo game show 2026", type: "tickets" }
        ]}
    ],
    services: {
      flights: ["skyscanner","kiwi"], hotels: ["booking","hostelworld"], cars: ["discovercars","rentalcars"],
      activities: ["getyourguide","viator","civitatis"], restaurants: ["opentable"],
      insurance: ["safetywing","worldnomads"], esim: ["airalo","holafly"], transport: ["omio"]
    },
    content: `Tokio es la ciudad que reinventa el concepto de metrópolis cada día. Con 14 millones de habitantes funciona con una precisión casi quirúrgica y una amabilidad que desarma.

Tu primer amanecer debería ser en Senso-ji — {{CTA:activity:getyourguide:sensoji asakusa tour:reserva un tour guiado por Asakusa}} para entender la historia detrás de cada ritual. A las 6 de la mañana, cuando los inciensos empiezan a arder, entiendes por qué Japón es un lugar aparte.

El contraste llega en minutos: un tren bala te deja en Shibuya, donde el cruce más famoso del mundo pulsa como el corazón eléctrico de la ciudad. Desde allí, Akihabara te sumerge en una realidad paralela de neones y figuras de anime de cinco pisos.

Pero Tokio también sabe ser silencio. Shinjuku Gyoen en primavera es un lienzo impresionista de cerezos en flor. Es la tradición del hanami: contemplar lo efímero y encontrar belleza en ello.

No te vayas sin visitar teamLab Borderless — {{CTA:tickets:tiqets:teamlab borderless tokyo:compra tu entrada con antelación}} porque se agotan semanas antes. Es la instalación de arte digital más impresionante que verás jamás.

Y la comida. El ramen de medianoche en Golden Gai. El sushi omakase donde el chef lleva 40 años perfeccionando el mismo corte. {{CTA:activity:getyourguide:tsukiji food tour sushi:Un tour gastronómico por Tsukiji}} es la mejor inversión culinaria del viaje.`
  },
  {
    id: 3, city: "Ciudad de México", country: "México", emoji: "🇲🇽", slug: "cdmx-guia-completa-2026",
    heroImage: "https://images.unsplash.com/photo-1585464231875-d9ef1f5ad396?w=1200&q=80",
    title: "CDMX: Sabor, Color y Caos Hermoso en la Capital del Mundo",
    subtitle: "Tacos al pastor a las 3AM, pirámides y la mejor escena de arte contemporáneo de Latinoamérica",
    date: "2026-02-15", readTime: "9 min", category: "América",
    excerpt: "Ciudad de México es excesiva en el mejor sentido posible. Una megalópolis donde Frida convive con galerías de vanguardia.",
    metaDescription: "Guía de Ciudad de México 2026: Teotihuacán, Frida Kahlo, Coyoacán, Xochimilco, Día de Muertos, Vive Latino. Reserva tours, entradas y restaurantes.",
    keywords: ["CDMX","México","Teotihuacán","Frida Kahlo","Coyoacán","Día de Muertos","Vive Latino"],
    pointsOfInterest: [
      { name: "Museo Frida Kahlo", type: "Museo", lat: 19.3550, lng: -99.1626, description: "La Casa Azul donde nació y murió Frida.", rating: 4.8, priceRange: "MXN 250",
        affiliateLinks: [
          { label: "Entrada sin cola", partner: "tiqets", query: "frida kahlo museum skip", type: "tickets" },
          { label: "Tour Frida completo", partner: "civitatis", query: "frida kahlo coyoacan tour", type: "activity" }
        ]},
      { name: "Teotihuacán", type: "Arqueología", lat: 19.6925, lng: -98.8438, description: "Pirámides del Sol y la Luna. Llega al amanecer para una experiencia mística.", rating: 4.9, priceRange: "MXN 85",
        affiliateLinks: [
          { label: "Tour amanecer + globo", partner: "getyourguide", query: "teotihuacan sunrise balloon", type: "activity" },
          { label: "Excursión día completo", partner: "viator", query: "teotihuacan full day mexico", type: "activity" }
        ]},
      { name: "Coyoacán", type: "Barrio", lat: 19.3467, lng: -99.1617, description: "Barrio bohemio: cafés, librerías, heladerías artesanales.", rating: 4.7,
        affiliateLinks: [
          { label: "Tour gastronómico", partner: "getyourguide", query: "coyoacan food tour", type: "activity" },
          { label: "Restaurantes", partner: "opentable", query: "coyoacan mexico city", type: "restaurant" }
        ]},
      { name: "Xochimilco", type: "UNESCO", lat: 19.2577, lng: -99.1040, description: "Canales prehispánicos con trajineras coloridas.", rating: 4.5, priceRange: "MXN 50-500",
        affiliateLinks: [
          { label: "Tour en trajinera", partner: "civitatis", query: "xochimilco trajinera tour", type: "activity" }
        ]},
      { name: "Roma-Condesa", type: "Barrio", lat: 19.4119, lng: -99.1707, description: "Art déco, mejores restaurantes de Latinoamérica y parques arbolados.", rating: 4.7,
        affiliateLinks: [
          { label: "Food tour Roma", partner: "viator", query: "roma condesa food tour cdmx", type: "activity" },
          { label: "Reservar restaurante", partner: "opentable", query: "roma condesa mexico city", type: "restaurant" }
        ]}
    ],
    events: [
      { name: "Día de Muertos", type: "Cultural", date: "1-2 Nov 2026", venue: "Zócalo", urgency: true,
        description: "Altares, ofrendas, calaveras y mega desfile.",
        affiliateLinks: [
          { label: "Tour nocturno especial", partner: "getyourguide", query: "dia muertos mexico city tour", type: "activity" }
        ]},
      { name: "Vive Latino 2026", type: "Festival", date: "Mar 2026", venue: "Foro Sol", urgency: true,
        description: "El festival de rock y alternativo más grande de Iberoamérica.",
        affiliateLinks: [
          { label: "Boletos", partner: "ticketmaster", query: "vive latino 2026", type: "tickets" },
          { label: "Reventa", partner: "stubhub", query: "vive latino 2026", type: "tickets" }
        ]},
      { name: "MUTEK México", type: "Arte Digital", date: "Oct 2026", venue: "Varios recintos",
        description: "Creatividad digital y música electrónica experimental.",
        affiliateLinks: [
          { label: "Entradas MUTEK", partner: "ticketmaster", query: "mutek mexico 2026", type: "tickets" }
        ]}
    ],
    services: {
      flights: ["skyscanner","kiwi"], hotels: ["booking","hostelworld","vrbo"], cars: ["discovercars","rentalcars"],
      activities: ["getyourguide","viator","civitatis"], restaurants: ["opentable"],
      insurance: ["safetywing","worldnomads"], esim: ["airalo","holafly"], parking: ["parkimeter"]
    },
    content: `Ciudad de México no se descubre, te descubre a ti. Es una ciudad que te envuelve en su caos organizado y no te suelta hasta que te has enamorado irremediablemente.

El Centro Histórico es donde todo empieza. El Zócalo te recibe con la majestuosidad del Palacio Nacional y los murales de Diego Rivera. A pocos pasos, el Templo Mayor recuerda que esta ciudad se construyó sobre las ruinas del imperio azteca.

Teotihuacán es imprescindible — {{CTA:activity:getyourguide:teotihuacan sunrise balloon:reserva el tour al amanecer con globo aerostático}} para una experiencia que jamás olvidarás. Subir la Pirámide del Sol cuando la niebla se levanta es uno de esos momentos que se tatúan en la memoria.

El alma de CDMX late en sus barrios. Coyoacán conserva el espíritu bohemio que enamoró a Frida y Diego. La Casa Azul es peregrinación obligatoria — {{CTA:tickets:tiqets:frida kahlo museum skip:compra la entrada con antelación}} porque las colas pueden superar las dos horas.

Roma-Condesa es la otra cara: gastronomía contemporánea de nivel Michelin junto a fondas donde el mole lleva cociéndose tres días. {{CTA:activity:viator:roma condesa food tour cdmx:Un food tour por Roma-Condesa}} te revelará los secretos mejor guardados de la escena culinaria. Un taco al pastor a las 3AM en un puesto callejero es una experiencia religiosa.

Y si planeas estar en noviembre, el Día de Muertos transforma toda la ciudad — {{CTA:activity:getyourguide:dia muertos mexico city tour:reserva un tour nocturno especial}} para vivir la celebración más fotogénica del mundo.`
  }
];

// Supplementary content
const GUIDES = [
  { id: "g1", title: "Cómo conseguir vuelos baratos: 12 trucos que realmente funcionan", category: "Guías", readTime: "6 min", partner: "skyscanner", query: "cheap flights" },
  { id: "g2", title: "Comparativa de seguros de viaje 2026: SafetyWing vs World Nomads", category: "Comparativas", readTime: "5 min", partner: "safetywing", query: "" },
  { id: "g3", title: "eSIM para viajar: Airalo vs Holafly, ¿cuál elegir?", category: "Comparativas", readTime: "4 min", partner: "airalo", query: "" },
  { id: "g4", title: "Las mejores apps para encontrar parking barato en Europa", category: "Guías", readTime: "4 min", partner: "parkimeter", query: "" },
];

// ════════════════════════════════════════════════════════════
// ICONS
// ════════════════════════════════════════════════════════════
const I = {
  MapPin:()=><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  Calendar:()=><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  Star:({f})=><svg width="13" height="13" viewBox="0 0 24 24" fill={f?"currentColor":"none"} stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
  Clock:()=><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  Sparkle:()=><svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z"/></svg>,
  Arrow:()=><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>,
  Back:()=><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>,
  Spin:()=><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{animation:"spin 1s linear infinite"}}><path d="M21 12a9 9 0 11-6.219-8.56"/></svg>,
  Ext:()=><svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>,
  Globe:()=><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>,
  Ticket:()=><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9a3 3 0 013-3h14a3 3 0 013 3v1a2 2 0 01-2 2 2 2 0 000 4 2 2 0 012 2v1a3 3 0 01-3 3H5a3 3 0 01-3-3v-1a2 2 0 012-2 2 2 0 000-4 2 2 0 01-2-2V9z"/></svg>,
  Fire:()=><svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 23c-4.97 0-9-3.58-9-8 0-3.19 2.13-6.12 3.5-7.5.27-.27.72-.1.72.28v2.28c0 .53.59.85 1.02.56C10.76 8.94 13 6 13 3c0-.83-.33-1.5-.33-1.5.18-.27.58-.33.8-.1C16.37 4.25 21 9.28 21 15c0 4.42-4.03 8-9 8z"/></svg>,
  Check:()=><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  Info:()=><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/></svg>,
  ChevDown:()=><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg>,
  Compare:()=><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>,
};

// ════════════════════════════════════════════════════════════
// STYLE CONSTANTS
// ════════════════════════════════════════════════════════════
const TYPE_COLORS = {
  tickets:    { bg:"#2a1e38", text:"#cba6f0", border:"#5c3d82" },
  activity:   { bg:"#1a2e1a", text:"#8ed68e", border:"#3a6e3a" },
  restaurant: { bg:"#382a1a", text:"#e8c88a", border:"#7a5c2e" },
  hotel:      { bg:"#1a2838", text:"#8ab8e8", border:"#2e5c7a" },
  service:    { bg:"#1e1c18", text:"#d4a853", border:"#4a4030" },
};

const EVT_COLORS = {
  Festival:    { bg:"#2a1e38", text:"#cba6f0", border:"#5c3d82" },
  Cultural:    { bg:"#382a1a", text:"#e8c88a", border:"#7a5c2e" },
  Electrónica: { bg:"#1a2e2a", text:"#8ee8d6", border:"#3a7a6e" },
  Natural:     { bg:"#2e2a1a", text:"#e8d88a", border:"#7a6e2e" },
  Tecnología:  { bg:"#1a2838", text:"#8ab8e8", border:"#2e5c7a" },
  Arte:        { bg:"#2a1e38", text:"#cba6f0", border:"#5c3d82" },
  "Arte Digital":{bg:"#2a1e38",text:"#cba6f0",border:"#5c3d82"},
  default:     { bg:"#262420", text:"#c4b89a", border:"#4a4035" },
};

const SVC_LABELS = {
  flights:"✈️ Vuelos", hotels:"🏨 Alojamiento", cars:"🚗 Coches", activities:"🎯 Actividades",
  restaurants:"🍽️ Restaurantes", insurance:"🛡️ Seguros", esim:"📱 eSIM", parking:"🅿️ Parking", transport:"🚆 Transporte"
};

// ════════════════════════════════════════════════════════════
// COMPONENTS
// ════════════════════════════════════════════════════════════

const AffBtn = ({ label, partner, query, type = "service", city = "", small, className }) => {
  const [h, setH] = useState(false);
  const s = TYPE_COLORS[type] || TYPE_COLORS.service;
  const cfg = AFFILIATE_CONFIG[partner];
  const variant = useMemo(getABVariant, []);
  const url = buildDeepLink(partner, city, query);

  return (
    <a href={url} target="_blank" rel="noopener noreferrer sponsored"
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      onClick={() => trackClick(partner, type, label, city, variant)}
      className={className}
      style={{
        display:"inline-flex", alignItems:"center", gap:"5px",
        padding: small ? "4px 9px" : "7px 13px",
        borderRadius:"7px", border:`1px solid ${s.border}`,
        background: h ? `${s.bg}ee` : s.bg, color: s.text,
        fontFamily:"'Libre Franklin', sans-serif", fontSize: small ? "0.7rem" : "0.78rem",
        fontWeight:600, textDecoration:"none", transition:"all 0.15s", cursor:"pointer", whiteSpace:"nowrap",
        transform: h ? "translateY(-1px)" : "none",
        boxShadow: h ? `0 4px 12px ${s.border}44` : "none"
      }}>
      {cfg?.logo && <span style={{fontSize: small?"0.7rem":"0.78rem"}}>{cfg.logo}</span>}
      {label} <I.Ext />
    </a>
  );
};

// Price comparison widget
const PriceCompare = ({ partners, city, category, label }) => {
  const [open, setOpen] = useState(false);
  return (
    <div style={{
      background:"#14120f", border:"1px solid #2a2520", borderRadius:"12px",
      overflow:"hidden", transition:"all 0.3s"
    }}>
      <button onClick={() => setOpen(!open)} style={{
        width:"100%", padding:"12px 16px", background:"none", border:"none",
        color:"#c4b89a", fontFamily:"'Libre Franklin', sans-serif", fontSize:"0.82rem",
        fontWeight:600, cursor:"pointer", display:"flex", alignItems:"center",
        justifyContent:"space-between"
      }}>
        <span style={{display:"flex",alignItems:"center",gap:"8px"}}>
          <I.Compare /> {label || "Comparar precios"}
        </span>
        <span style={{transform:open?"rotate(180deg)":"none",transition:"transform 0.2s",display:"flex"}}><I.ChevDown /></span>
      </button>
      {open && (
        <div style={{padding:"0 16px 14px", display:"flex", gap:"6px", flexWrap:"wrap",animation:"fadeIn 0.2s ease"}}>
          {partners.map(p => (
            <AffBtn key={p} label={AFFILIATE_CONFIG[p]?.name || p} partner={p} city={city} type={category} small />
          ))}
        </div>
      )}
    </div>
  );
};

const Rating = ({ v }) => (
  <span style={{display:"inline-flex",alignItems:"center",gap:"1px",color:"#d4a853"}}>
    {[1,2,3,4,5].map(i=><I.Star key={i} f={i<=Math.round(v)}/>)}
    <span style={{color:"#8a7e6b",fontSize:"0.78rem",marginLeft:"3px",fontFamily:"'Libre Franklin', sans-serif"}}>{v}</span>
  </span>
);

const UrgencyBadge = ({ text }) => (
  <span style={{
    display:"inline-flex", alignItems:"center", gap:"4px",
    background:"rgba(240,80,60,0.12)", border:"1px solid rgba(240,80,60,0.3)",
    color:"#f0503c", borderRadius:"6px", padding:"3px 9px",
    fontFamily:"'Libre Franklin', sans-serif", fontSize:"0.68rem", fontWeight:700,
    animation:"pulse 2s ease-in-out infinite"
  }}>
    <I.Fire /> {text}
  </span>
);

// Parse content with inline {{CTA}} markers
const RichContent = ({ content, city }) => {
  const parts = content.split(/({{CTA:[^}]+}})/g);
  return (
    <div>
      {parts.map((part, i) => {
        const match = part.match(/{{CTA:(\w+):(\w+):([^:]+):([^}]+)}}/);
        if (match) {
          const [, type, partner, query, label] = match;
          return <AffBtn key={i} label={label} partner={partner} query={query} type={type} city={city}
            className="inline-cta" />;
        }
        if (part.trim() === "") return null;
        // Split by double newlines for paragraphs
        return part.split("\n\n").map((para, j) => (
          para.trim() ? <p key={`${i}-${j}`} style={{
            fontFamily:"'Source Serif 4', serif", color:"#c8bda4", fontSize:"1.05rem",
            lineHeight:1.85, margin:"0 0 22px 0"
          }}>{para}</p> : null
        ));
      })}
    </div>
  );
};

// Floating mobile booking bar
const MobileBookingBar = ({ city, show }) => {
  if (!show) return null;
  return (
    <div style={{
      position:"fixed", bottom:0, left:0, right:0, zIndex:200,
      background:"rgba(15,13,10,0.95)", backdropFilter:"blur(16px)",
      borderTop:"1px solid #2a2520", padding:"10px 16px",
      display:"flex", gap:"8px", justifyContent:"center",
      animation:"slideUp 0.3s ease", WebkitBackdropFilter:"blur(16px)"
    }}>
      <AffBtn label="Vuelos" partner="skyscanner" city={city} type="service" small />
      <AffBtn label="Hotel" partner="booking" city={city} type="hotel" small />
      <AffBtn label="Coche" partner="discovercars" city={city} type="service" small />
      <AffBtn label="Tours" partner="getyourguide" city={city} type="activity" small />
    </div>
  );
};

// Sidebar panel
const Sidebar = ({ services, city }) => (
  <aside style={{position:"sticky",top:"82px"}}>
    <div style={{
      background:"linear-gradient(160deg, #14120f 0%, #1a1510 100%)",
      border:"1px solid #2a2520", borderRadius:"14px", padding:"22px", marginBottom:"18px"
    }}>
      <h3 style={{fontFamily:"'Cormorant Garamond', serif",fontSize:"1.15rem",color:"#e8e0d4",margin:"0 0 4px 0",fontWeight:600}}>
        Planifica tu viaje a {city}
      </h3>
      <p style={{fontFamily:"'Libre Franklin', sans-serif",fontSize:"0.72rem",color:"#6b6358",margin:"0 0 18px 0",lineHeight:1.4}}>
        Reserva a través de estos enlaces y apóyanos sin coste adicional.
      </p>
      <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
        {Object.entries(services).map(([key, partners]) => (
          <PriceCompare key={key} partners={partners} city={city} category={key === "hotels" ? "hotel" : "service"} label={SVC_LABELS[key] || key} />
        ))}
      </div>
      <div style={{
        marginTop:"14px", padding:"10px 12px", borderRadius:"8px",
        background:"rgba(212,168,83,0.05)", border:"1px solid rgba(212,168,83,0.1)"
      }}>
        <p style={{fontFamily:"'Libre Franklin', sans-serif",fontSize:"0.66rem",color:"#7a7060",margin:0,lineHeight:1.5,display:"flex",alignItems:"start",gap:"6px"}}>
          <span style={{flexShrink:0,marginTop:"1px"}}><I.Info /></span>
          Este blog contiene enlaces de afiliado. Si reservas a través de ellos, recibimos una comisión sin coste adicional para ti.
        </p>
      </div>
    </div>
    {/* Schema markup preview */}
    <div style={{
      background:"#14120f", border:"1px solid #2a2520", borderRadius:"14px", padding:"18px"
    }}>
      <h4 style={{fontFamily:"'Libre Franklin', sans-serif",fontSize:"0.75rem",color:"#6b6358",margin:"0 0 8px 0",fontWeight:600,letterSpacing:"0.08em",textTransform:"uppercase"}}>
        SEO & Schema
      </h4>
      <div style={{display:"flex",flexDirection:"column",gap:"4px"}}>
        {["Article","Event","Place","BreadcrumbList","FAQPage"].map(s=>(
          <span key={s} style={{display:"flex",alignItems:"center",gap:"6px",fontFamily:"'Libre Franklin', sans-serif",fontSize:"0.72rem",color:"#4a7a4a"}}>
            <I.Check /> <span style={{color:"#8a7e6b"}}>{s}</span>
          </span>
        ))}
      </div>
    </div>
  </aside>
);

// Article Card
const Card = ({ article, onClick, i }) => {
  const [h, setH] = useState(false);
  return (
    <article onClick={()=>onClick(article)} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
      style={{
        cursor:"pointer", borderRadius:"14px", overflow:"hidden", background:"#16140f",
        border:`1px solid ${h?"#4a4030":"#242018"}`, transition:"all 0.35s cubic-bezier(0.25,0.46,0.45,0.94)",
        transform:h?"translateY(-3px)":"none", boxShadow:h?"0 18px 36px rgba(0,0,0,0.35)":"0 2px 8px rgba(0,0,0,0.15)",
        animation:`fadeSlideUp 0.5s ease ${i*0.12}s both`
      }}>
      <div style={{height:"210px",overflow:"hidden",position:"relative"}}>
        <img src={article.heroImage} alt={article.city} loading="lazy"
          style={{width:"100%",height:"100%",objectFit:"cover",transition:"transform 0.5s",transform:h?"scale(1.04)":"scale(1)"}} />
        <div style={{position:"absolute",bottom:0,left:0,right:0,background:"linear-gradient(transparent,rgba(0,0,0,0.75))",padding:"22px 18px 14px"}}>
          <span style={{fontFamily:"'Libre Franklin', sans-serif",fontSize:"0.65rem",fontWeight:700,letterSpacing:"0.13em",textTransform:"uppercase",color:"#d4a853",background:"rgba(212,168,83,0.12)",padding:"3px 9px",borderRadius:"4px",border:"1px solid rgba(212,168,83,0.25)"}}>
            {article.category}
          </span>
        </div>
      </div>
      <div style={{padding:"18px"}}>
        <h3 style={{fontFamily:"'Cormorant Garamond', serif",fontSize:"1.18rem",color:"#e8e0d4",margin:"0 0 7px 0",lineHeight:1.25,fontWeight:600}}>{article.title}</h3>
        <p style={{fontFamily:"'Libre Franklin', sans-serif",color:"#8a7e6b",fontSize:"0.82rem",lineHeight:1.55,margin:"0 0 14px 0",display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden"}}>{article.excerpt}</p>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",paddingTop:"14px",borderTop:"1px solid #242018"}}>
          <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
            <span style={{fontFamily:"'Libre Franklin', sans-serif",fontSize:"0.72rem",color:"#5e5648",display:"flex",alignItems:"center",gap:"4px"}}><I.Clock /> {article.readTime}</span>
            <span style={{fontFamily:"'Libre Franklin', sans-serif",fontSize:"0.72rem",color:"#5e5648"}}>{article.pointsOfInterest.length} lugares · {article.events.length} eventos</span>
          </div>
          <span style={{color:h?"#d4a853":"#5e5648",transition:"all 0.25s",transform:h?"translateX(3px)":"none",display:"flex"}}><I.Arrow /></span>
        </div>
      </div>
    </article>
  );
};

// Detail View
const Detail = ({ article, onBack }) => {
  const [tab, setTab] = useState("article");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 500);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div style={{animation:"fadeIn 0.35s ease"}}>
      <button onClick={onBack} style={{display:"inline-flex",alignItems:"center",gap:"7px",background:"rgba(255,255,255,0.04)",border:"1px solid #242018",borderRadius:"9px",color:"#8a7e6b",fontFamily:"'Libre Franklin', sans-serif",fontSize:"0.82rem",padding:"9px 16px",cursor:"pointer",marginBottom:"22px",transition:"all 0.15s"}}>
        <I.Back /> Volver
      </button>

      {/* Hero */}
      <div style={{borderRadius:"18px",overflow:"hidden",position:"relative",height:"380px",marginBottom:"30px"}}>
        <img src={article.heroImage} alt={article.city} style={{width:"100%",height:"100%",objectFit:"cover"}} />
        <div style={{position:"absolute",inset:0,background:"linear-gradient(transparent 35%, rgba(0,0,0,0.88))",display:"flex",flexDirection:"column",justifyContent:"flex-end",padding:"36px"}}>
          <span style={{fontFamily:"'Libre Franklin', sans-serif",fontSize:"0.68rem",fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"#d4a853",marginBottom:"10px"}}>
            {article.emoji} {article.city}, {article.country} · /{article.slug}
          </span>
          <h1 style={{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(1.7rem,3.8vw,2.5rem)",color:"#fff",margin:"0 0 6px 0",lineHeight:1.15,fontWeight:700,maxWidth:"750px"}}>{article.title}</h1>
          <p style={{fontFamily:"'Libre Franklin', sans-serif",color:"rgba(255,255,255,0.65)",fontSize:"0.95rem",margin:0,maxWidth:"580px"}}>{article.subtitle}</p>
          <div style={{display:"flex",gap:"14px",marginTop:"14px",alignItems:"center",flexWrap:"wrap"}}>
            <span style={{fontFamily:"'Libre Franklin', sans-serif",fontSize:"0.76rem",color:"rgba(255,255,255,0.45)",display:"flex",alignItems:"center",gap:"4px"}}><I.Clock /> {article.readTime}</span>
            <span style={{fontFamily:"'Libre Franklin', sans-serif",fontSize:"0.76rem",color:"rgba(255,255,255,0.45)"}}>
              {new Date(article.date).toLocaleDateString("es-ES",{day:"numeric",month:"long",year:"numeric"})}
            </span>
            <span style={{fontFamily:"'Libre Franklin', sans-serif",fontSize:"0.66rem",color:"rgba(255,255,255,0.3)",background:"rgba(255,255,255,0.06)",padding:"2px 8px",borderRadius:"4px"}}>
              rel="sponsored" · Schema.org
            </span>
          </div>
        </div>
      </div>

      {/* Two-column layout */}
      <div style={{display:"grid",gridTemplateColumns:"1fr 320px",gap:"28px",alignItems:"start"}} className="detail-grid">
        <div>
          {/* Tabs */}
          <div style={{display:"flex",gap:"3px",background:"#12100d",padding:"3px",borderRadius:"11px",marginBottom:"28px",border:"1px solid #242018"}}>
            {[{k:"article",l:"Artículo"},{k:"places",l:`Lugares (${article.pointsOfInterest.length})`},{k:"events",l:`Eventos (${article.events.length})`}].map(t=>(
              <button key={t.k} onClick={()=>setTab(t.k)} style={{flex:1,padding:"11px",borderRadius:"8px",border:"none",background:tab===t.k?"#262420":"transparent",color:tab===t.k?"#e8e0d4":"#5e5648",fontFamily:"'Libre Franklin', sans-serif",fontSize:"0.82rem",fontWeight:600,cursor:"pointer",transition:"all 0.15s"}}>{t.l}</button>
            ))}
          </div>

          {/* Article tab */}
          {tab === "article" && (
            <div style={{maxWidth:"680px"}}>
              <RichContent content={article.content} city={article.city} />
              {/* End-of-article CTA */}
              <div style={{background:"linear-gradient(135deg, #1a1714, #14120f)",border:"1px solid #3a3530",borderRadius:"14px",padding:"24px",marginTop:"12px"}}>
                <h4 style={{fontFamily:"'Cormorant Garamond', serif",color:"#e8e0d4",margin:"0 0 6px 0",fontSize:"1.15rem",fontWeight:600}}>¿Listo para tu viaje a {article.city}?</h4>
                <p style={{fontFamily:"'Libre Franklin', sans-serif",color:"#6b6358",fontSize:"0.8rem",margin:"0 0 14px 0",lineHeight:1.5}}>Compara precios y reserva directamente desde aquí.</p>
                <div style={{display:"flex",gap:"7px",flexWrap:"wrap"}}>
                  <AffBtn label="Buscar vuelos" partner="skyscanner" city={article.city} type="service" />
                  <AffBtn label="Hoteles" partner="booking" city={article.city} type="hotel" />
                  <AffBtn label="Coches" partner="discovercars" city={article.city} type="service" />
                  <AffBtn label="Actividades" partner="getyourguide" city={article.city} type="activity" />
                  <AffBtn label="Restaurantes" partner="thefork" city={article.city} type="restaurant" />
                </div>
              </div>
            </div>
          )}

          {/* Places tab */}
          {tab === "places" && (
            <div style={{display:"grid",gap:"14px"}}>
              {article.pointsOfInterest.map((poi,i)=>(
                <div key={i} style={{background:"#16140f",border:"1px solid #242018",borderRadius:"12px",padding:"22px",animation:`fadeSlideUp 0.35s ease ${i*0.08}s both`}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"start",marginBottom:"7px",flexWrap:"wrap",gap:"7px"}}>
                    <div style={{display:"flex",alignItems:"center",gap:"9px",flexWrap:"wrap"}}>
                      <span style={{color:"#d4a853",display:"flex"}}><I.MapPin /></span>
                      <h4 style={{fontFamily:"'Cormorant Garamond', serif",color:"#e8e0d4",margin:0,fontSize:"1.08rem",fontWeight:600}}>{poi.name}</h4>
                      <span style={{fontFamily:"'Libre Franklin', sans-serif",fontSize:"0.65rem",color:"#8a7e6b",background:"#242018",padding:"2px 7px",borderRadius:"4px",fontWeight:600}}>{poi.type}</span>
                      {poi.priceRange && <span style={{fontFamily:"'Libre Franklin', sans-serif",fontSize:"0.65rem",color:"#6b6358",background:"rgba(212,168,83,0.08)",padding:"2px 7px",borderRadius:"4px"}}>{poi.priceRange}</span>}
                    </div>
                    <Rating v={poi.rating} />
                  </div>
                  <p style={{fontFamily:"'Libre Franklin', sans-serif",color:"#8a7e6b",fontSize:"0.88rem",lineHeight:1.6,margin:"0 0 12px 0"}}>{poi.description}</p>
                  {poi.affiliateLinks && (
                    <div style={{display:"flex",gap:"7px",flexWrap:"wrap"}}>
                      {poi.affiliateLinks.map((l,j)=>(
                        <AffBtn key={j} label={l.label} partner={l.partner} query={l.query} type={l.type} city={article.city} />
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}

          {/* Events tab */}
          {tab === "events" && (
            <div style={{display:"grid",gap:"14px"}}>
              {article.events.map((ev,i)=>{
                const c = EVT_COLORS[ev.type] || EVT_COLORS.default;
                return (
                  <div key={i} style={{background:"#16140f",border:"1px solid #242018",borderRadius:"12px",padding:"22px",animation:`fadeSlideUp 0.35s ease ${i*0.08}s both`}}>
                    <div style={{display:"flex",alignItems:"center",gap:"9px",marginBottom:"9px",flexWrap:"wrap"}}>
                      <span style={{color:c.text,display:"flex"}}><I.Ticket /></span>
                      <h4 style={{fontFamily:"'Cormorant Garamond', serif",color:"#e8e0d4",margin:0,fontSize:"1.08rem",fontWeight:600}}>{ev.name}</h4>
                      <span style={{fontFamily:"'Libre Franklin', sans-serif",fontSize:"0.65rem",color:c.text,background:c.bg,padding:"3px 9px",borderRadius:"4px",fontWeight:600,border:`1px solid ${c.border}`}}>{ev.type}</span>
                      {ev.urgency && <UrgencyBadge text="Alta demanda — se agotan" />}
                    </div>
                    <p style={{fontFamily:"'Libre Franklin', sans-serif",color:"#8a7e6b",fontSize:"0.88rem",lineHeight:1.6,margin:"0 0 11px 0"}}>{ev.description}</p>
                    <div style={{display:"flex",gap:"14px",flexWrap:"wrap",marginBottom:ev.affiliateLinks?"12px":0}}>
                      <span style={{fontFamily:"'Libre Franklin', sans-serif",fontSize:"0.78rem",color:"#5e5648",display:"flex",alignItems:"center",gap:"5px"}}><I.Calendar /> {ev.date}</span>
                      <span style={{fontFamily:"'Libre Franklin', sans-serif",fontSize:"0.78rem",color:"#5e5648",display:"flex",alignItems:"center",gap:"5px"}}><I.MapPin /> {ev.venue}</span>
                    </div>
                    {ev.affiliateLinks && (
                      <div style={{display:"flex",gap:"7px",flexWrap:"wrap"}}>
                        {ev.affiliateLinks.map((l,j)=>(
                          <AffBtn key={j} label={l.label} partner={l.partner} query={l.query} type={l.type} city={article.city} />
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Sidebar */}
        <Sidebar services={article.services} city={article.city} />
      </div>

      <MobileBookingBar city={article.city} show={scrolled} />
    </div>
  );
};

// AI Generator
const Generator = ({ onGenerate }) => {
  const [city, setCity] = useState("");
  const [gen, setGen] = useState(false);
  const [prog, setProg] = useState("");

  const go = async () => {
    if (!city.trim() || gen) return;
    setGen(true);
    for (const s of ["Investigando puntos de interés...","Buscando eventos y festivales...","Generando deep links de afiliación...","Redactando artículo con IA...","Optimizando CTAs y SEO..."]) {
      setProg(s); await new Promise(r => setTimeout(r, 1000));
    }
    const c = city.trim();
    const slug = c.toLowerCase().replace(/\s+/g,"-").replace(/[^a-z0-9-]/g,"");
    onGenerate({
      id: Date.now(), city: c, country: "IA", emoji: "✨", slug: `${slug}-guia-2026`,
      heroImage: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80",
      title: `Descubre ${c}: Guía Completa Generada por IA`,
      subtitle: `Puntos de interés, eventos y enlaces de reserva para ${c}`,
      date: new Date().toISOString().split("T")[0], readTime: "7 min", category: "IA",
      excerpt: `Guía de ${c} generada por IA con deep links de afiliación, comparador de precios y CTAs contextuales.`,
      metaDescription: `Guía completa de ${c}: mejores lugares, eventos y donde reservar al mejor precio.`,
      keywords: [c, "viaje", "guía", "2026"],
      pointsOfInterest: [
        { name:`Centro de ${c}`,type:"Zona Histórica",description:"El corazón cultural de la ciudad.",rating:4.7,priceRange:"Variable",
          affiliateLinks:[{label:"Tour guiado",partner:"getyourguide",query:`${c} tour`,type:"activity"},{label:"Restaurantes",partner:"thefork",query:c,type:"restaurant"}]},
        { name:"Mirador Principal",type:"Mirador",description:"Las mejores vistas panorámicas.",rating:4.8,
          affiliateLinks:[{label:"Entrada",partner:"tiqets",query:`${c} viewpoint`,type:"tickets"}]}
      ],
      events: [
        { name:`Festival de ${c}`,type:"Cultural",date:"Próximamente",venue:"Centro",
          description:"Celebración anual de cultura local.",
          affiliateLinks:[{label:"Entradas",partner:"ticketmaster",query:c,type:"tickets"}]}
      ],
      services:{flights:["skyscanner","kiwi"],hotels:["booking","hostelworld"],cars:["discovercars"],activities:["getyourguide","viator"],restaurants:["thefork"],insurance:["safetywing"],esim:["airalo"]},
      content:`${c} es un destino fascinante. Este artículo de demostración muestra cómo la IA genera contenido con CTAs inline.\n\nEn producción, aquí irían párrafos ricos con {{CTA:activity:getyourguide:${encodeURIComponent(c)} tour:reserva un tour guiado}} integrados naturalmente en la narrativa.\n\nCada enlace usa deep linking dinámico con fechas preseleccionadas y tracking A/B para maximizar conversiones.`
    });
    setGen(false); setProg(""); setCity("");
  };

  return (
    <div style={{background:"linear-gradient(140deg, #16140f 0%, #0f1a12 100%)",border:"1px solid #2e4a2e",borderRadius:"14px",padding:"28px",marginBottom:"44px",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse at 25% 50%, rgba(74,144,74,0.06) 0%, transparent 55%)",pointerEvents:"none"}} />
      <div style={{position:"relative",zIndex:1}}>
        <div style={{display:"flex",alignItems:"center",gap:"9px",marginBottom:"6px"}}>
          <I.Sparkle />
          <h3 style={{fontFamily:"'Cormorant Garamond', serif",fontSize:"1.3rem",color:"#e8e0d4",margin:0,fontWeight:600}}>Generador de Artículos con IA</h3>
        </div>
        <p style={{fontFamily:"'Libre Franklin', sans-serif",color:"#7a7a6e",fontSize:"0.85rem",margin:"0 0 18px 0",lineHeight:1.5}}>
          Escribe una ciudad → la IA genera artículo + deep links de afiliación + comparadores de precio + CTAs inline + schema SEO.
        </p>
        <div style={{display:"flex",gap:"10px"}}>
          <input type="text" value={city} onChange={e=>setCity(e.target.value)} onKeyDown={e=>e.key==="Enter"&&go()}
            placeholder="Ej: París, Buenos Aires, Estambul..." disabled={gen}
            style={{flex:1,padding:"13px 16px",borderRadius:"9px",border:"1px solid #343028",background:"#12100d",color:"#e8e0d4",fontFamily:"'Libre Franklin', sans-serif",fontSize:"0.92rem",outline:"none"}} />
          <button onClick={go} disabled={gen||!city.trim()}
            style={{padding:"13px 26px",borderRadius:"9px",border:"none",background:gen?"#1e2e1e":"linear-gradient(135deg,#3a6a3a,#2e5a2e)",color:"#e8e0d4",fontFamily:"'Libre Franklin', sans-serif",fontSize:"0.92rem",fontWeight:600,cursor:gen?"wait":"pointer",display:"flex",alignItems:"center",gap:"7px",opacity:!city.trim()&&!gen?0.5:1}}>
            {gen?<I.Spin />:<I.Sparkle />} {gen?"Generando...":"Generar"}
          </button>
        </div>
        {prog && (
          <div style={{marginTop:"14px",padding:"10px 14px",borderRadius:"8px",background:"rgba(74,144,74,0.08)",border:"1px solid rgba(74,144,74,0.15)",display:"flex",alignItems:"center",gap:"9px"}}>
            <I.Spin />
            <span style={{fontFamily:"'Libre Franklin', sans-serif",color:"#8ed68e",fontSize:"0.82rem"}}>{prog}</span>
          </div>
        )}
      </div>
    </div>
  );
};

// ════════════════════════════════════════════════════════════
// MAIN APP
// ════════════════════════════════════════════════════════════
export default function ElTechoEncima() {
  const [articles, setArticles] = useState(ARTICLES);
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState("Todos");
  const cats = ["Todos", ...new Set(articles.map(a => a.category))];
  const filtered = filter === "Todos" ? articles : articles.filter(a => a.category === filter);

  return (
    <div style={{minHeight:"100vh",background:"#0e0c09",color:"#e8e0d4"}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Libre+Franklin:wght@300;400;500;600;700&family=Source+Serif+4:ital,wght@0,400;0,600;1,400&display=swap');
        *{box-sizing:border-box;margin:0;padding:0;}
        @keyframes fadeSlideUp{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
        @keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
        @keyframes gradientShift{0%,100%{background-position:0% 50%}50%{background-position:100% 50%}}
        @keyframes pulse{0%,100%{opacity:1}50%{opacity:0.7}}
        @keyframes slideUp{from{transform:translateY(100%);opacity:0}to{transform:translateY(0);opacity:1}}
        input:focus{border-color:#3a6a3a !important;box-shadow:0 0 0 3px rgba(58,106,58,0.12);}
        button:hover:not(:disabled){filter:brightness(1.08);}
        a.inline-cta{display:inline !important;padding:2px 8px !important;margin:0 2px;border-radius:5px !important;font-size:0.88rem !important;vertical-align:baseline;}
        ::-webkit-scrollbar{width:5px} ::-webkit-scrollbar-track{background:#0e0c09} ::-webkit-scrollbar-thumb{background:#242018;border-radius:3px}
        @media(max-width:900px){
          .detail-grid{grid-template-columns:1fr !important;}
        }
      `}</style>

      {/* Header */}
      <header style={{borderBottom:"1px solid #1a1714",padding:"0 22px",position:"sticky",top:0,zIndex:100,background:"rgba(14,12,9,0.92)",backdropFilter:"blur(18px)",WebkitBackdropFilter:"blur(18px)"}}>
        <div style={{maxWidth:"1140px",margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",height:"66px"}}>
          <div onClick={()=>{setSelected(null);setFilter("Todos");}} style={{display:"flex",alignItems:"center",gap:"9px",cursor:"pointer"}}>
            <I.Globe />
            <span style={{fontFamily:"'Cormorant Garamond', serif",fontSize:"1.35rem",fontWeight:700,color:"#e8e0d4",letterSpacing:"-0.03em"}}>ElTechoEncima</span>
            <span style={{fontFamily:"'Libre Franklin', sans-serif",fontSize:"0.6rem",fontWeight:700,letterSpacing:"0.14em",textTransform:"uppercase",color:"#3a6a3a",background:"rgba(58,106,58,0.1)",padding:"3px 7px",borderRadius:"4px"}}>AI + Affiliate</span>
          </div>
          <nav style={{display:"flex",gap:"24px"}}>
            {["Destinos","Eventos","Guías","Transparencia"].map(n=>(
              <a key={n} href="#" onClick={e=>e.preventDefault()} style={{fontFamily:"'Libre Franklin', sans-serif",fontSize:"0.82rem",color:"#5e5648",textDecoration:"none",fontWeight:500}}>{n}</a>
            ))}
          </nav>
        </div>
      </header>

      <main style={{maxWidth:"1140px",margin:"0 auto",padding:"36px 22px 80px"}}>
        {selected ? (
          <Detail article={selected} onBack={()=>setSelected(null)} />
        ) : (
          <>
            {/* Hero */}
            <div style={{textAlign:"center",marginBottom:"44px",animation:"fadeSlideUp 0.5s ease"}}>
              <p style={{fontFamily:"'Libre Franklin', sans-serif",fontSize:"0.66rem",fontWeight:700,letterSpacing:"0.2em",textTransform:"uppercase",color:"#d4a853",marginBottom:"14px"}}>
                Blog de viajes · IA + Afiliación · Deep Links · SEO · A/B Testing
              </p>
              <h1 style={{fontFamily:"'Cormorant Garamond', serif",fontSize:"clamp(2rem,5vw,3.1rem)",fontWeight:700,color:"#e8e0d4",lineHeight:1.12,marginBottom:"14px",letterSpacing:"-0.025em"}}>
                Descubre el mundo con{" "}
                <span style={{background:"linear-gradient(135deg, #d4a853, #e8c87a, #d4a853)",backgroundSize:"200% 200%",animation:"gradientShift 4s ease infinite",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>
                  guías inteligentes
                </span>
              </h1>
              <p style={{fontFamily:"'Libre Franklin', sans-serif",color:"#5e5648",fontSize:"1rem",maxWidth:"580px",margin:"0 auto",lineHeight:1.6}}>
                Artículos generados por IA con enlaces de afiliación contextuales, comparador de precios, urgencia en eventos y CTAs optimizados con A/B testing.
              </p>
            </div>

            <Generator onGenerate={(a)=>setArticles(p=>[a,...p])} />

            {/* Filters */}
            <div style={{display:"flex",gap:"7px",marginBottom:"28px",flexWrap:"wrap"}}>
              {cats.map(c=>(
                <button key={c} onClick={()=>setFilter(c)} style={{padding:"7px 16px",borderRadius:"7px",border:`1px solid ${filter===c?"#d4a853":"#242018"}`,background:filter===c?"rgba(212,168,83,0.08)":"transparent",color:filter===c?"#d4a853":"#5e5648",fontFamily:"'Libre Franklin', sans-serif",fontSize:"0.78rem",fontWeight:600,cursor:"pointer",transition:"all 0.15s"}}>{c}</button>
              ))}
            </div>

            {/* Grid */}
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(310px, 1fr))",gap:"22px"}}>
              {filtered.map((a,i) => <Card key={a.id} article={a} onClick={setSelected} i={i} />)}
            </div>

            {filtered.length === 0 && (
              <div style={{textAlign:"center",padding:"56px 20px",color:"#5e5648",fontFamily:"'Libre Franklin', sans-serif"}}>
                <p style={{fontSize:"1rem",marginBottom:"7px"}}>Sin artículos en esta categoría.</p>
                <p style={{fontSize:"0.85rem"}}>Genera uno con la IA.</p>
              </div>
            )}

            {/* Supplementary Content */}
            <div style={{marginTop:"56px"}}>
              <h2 style={{fontFamily:"'Cormorant Garamond', serif",fontSize:"1.5rem",color:"#e8e0d4",marginBottom:"18px",fontWeight:600}}>Guías y Comparativas</h2>
              <p style={{fontFamily:"'Libre Franklin', sans-serif",color:"#5e5648",fontSize:"0.88rem",marginBottom:"22px",lineHeight:1.5}}>Contenido SEO complementario que genera tráfico orgánico y convierte con afiliación.</p>
              <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(260px, 1fr))",gap:"14px"}}>
                {GUIDES.map(g=>(
                  <div key={g.id} style={{background:"#16140f",border:"1px solid #242018",borderRadius:"12px",padding:"18px",cursor:"pointer",transition:"all 0.2s"}}>
                    <span style={{fontFamily:"'Libre Franklin', sans-serif",fontSize:"0.62rem",fontWeight:700,letterSpacing:"0.12em",textTransform:"uppercase",color:"#d4a853",marginBottom:"6px",display:"block"}}>{g.category}</span>
                    <h4 style={{fontFamily:"'Cormorant Garamond', serif",color:"#e8e0d4",fontSize:"1rem",margin:"0 0 8px 0",lineHeight:1.3,fontWeight:600}}>{g.title}</h4>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
                      <span style={{fontFamily:"'Libre Franklin', sans-serif",fontSize:"0.7rem",color:"#5e5648",display:"flex",alignItems:"center",gap:"4px"}}><I.Clock /> {g.readTime}</span>
                      <AffBtn label="Ver más" partner={g.partner} query={g.query} city="" type="service" small />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Transparency Page Preview */}
            <div style={{marginTop:"36px",padding:"28px",background:"#14120f",border:"1px solid #242018",borderRadius:"14px"}}>
              <h3 style={{fontFamily:"'Cormorant Garamond', serif",color:"#e8e0d4",fontSize:"1.2rem",marginBottom:"6px",fontWeight:600}}>
                🤝 Página de Transparencia
              </h3>
              <p style={{fontFamily:"'Libre Franklin', sans-serif",color:"#6b6358",fontSize:"0.85rem",lineHeight:1.6,marginBottom:"16px"}}>
                Este blog se financia mediante comisiones de afiliación. Cuando reservas a través de nuestros enlaces, recibimos una pequeña comisión sin coste adicional para ti. Esto nos permite seguir creando contenido gratuito y de calidad. Solo recomendamos servicios que hemos investigado o utilizado personalmente.
              </p>
              <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"10px"}}>
                {[
                  {icon:"✅",text:"Todos los enlaces de afiliación están marcados con rel='sponsored'"},
                  {icon:"✅",text:"Cumplimiento GDPR — Consentimiento de cookies obligatorio"},
                  {icon:"✅",text:"Sin publicidad intrusiva — Solo enlaces contextuales"},
                  {icon:"✅",text:"A/B testing ético — Solo texto de botones, no contenido"},
                  {icon:"✅",text:"Datos de eventos verificados con fuentes oficiales"},
                  {icon:"✅",text:"Schema.org markup en todos los artículos"}
                ].map((item,i)=>(
                  <div key={i} style={{padding:"10px",background:"#16140f",borderRadius:"8px",border:"1px solid #242018",display:"flex",alignItems:"start",gap:"8px"}}>
                    <span>{item.icon}</span>
                    <span style={{fontFamily:"'Libre Franklin', sans-serif",fontSize:"0.74rem",color:"#8a7e6b",lineHeight:1.4}}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Architecture */}
            <div style={{marginTop:"20px",padding:"28px",background:"#14120f",border:"1px solid #242018",borderRadius:"14px"}}>
              <h3 style={{fontFamily:"'Cormorant Garamond', serif",color:"#e8e0d4",fontSize:"1.2rem",marginBottom:"14px",fontWeight:600}}>
                🛠 Arquitectura Completa
              </h3>
              <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))",gap:"12px"}}>
                {[
                  {t:"Deep Linking Dinámico",d:"Los enlaces apuntan a la página exacta del destino con fechas preseleccionadas (checkin/checkout) según temporada."},
                  {t:"Comparador de Precios",d:"Widgets colapsables que comparan precios de múltiples partners para cada servicio (hotel, coche, vuelo)."},
                  {t:"CTAs Contextuales Inline",d:"La IA inserta {{CTA}} dentro del texto narrativo, convirtiendo menciones naturales en enlaces de afiliación."},
                  {t:"A/B Testing de CTAs",d:"3 variantes de texto por botón. Sistema asigna variante al usuario y trackea conversión por variante en GA4."},
                  {t:"Urgencia en Eventos",d:"Badges de 'Alta demanda' con animación para eventos que históricamente agotan entradas."},
                  {t:"Barra Móvil Flotante",d:"Al hacer scroll, aparece un bottom bar sticky con los 4 servicios principales para reservar."},
                  {t:"Schema.org Markup",d:"Article, Event, Place, BreadcrumbList y FAQPage en cada artículo para rich snippets en Google."},
                  {t:"Contenido Complementario",d:"Guías y comparativas SEO que atraen tráfico long-tail y convierten con afiliación."},
                  {t:"Transparencia Legal",d:"Disclaimer visible, rel='sponsored', política cookies GDPR y página de transparencia dedicada."}
                ].map((item,i)=>(
                  <div key={i} style={{padding:"14px",background:"#16140f",borderRadius:"10px",border:"1px solid #242018"}}>
                    <h4 style={{fontFamily:"'Libre Franklin', sans-serif",color:"#d4a853",fontSize:"0.8rem",fontWeight:600,marginBottom:"4px"}}>{item.t}</h4>
                    <p style={{fontFamily:"'Libre Franklin', sans-serif",color:"#5e5648",fontSize:"0.74rem",lineHeight:1.5,margin:0}}>{item.d}</p>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </main>

      <footer style={{borderTop:"1px solid #1a1714",padding:"28px 22px",textAlign:"center"}}>
        <p style={{fontFamily:"'Libre Franklin', sans-serif",color:"#2e2a20",fontSize:"0.76rem",lineHeight:1.6}}>
          ElTechoEncima AI Blog · Contenido generado por IA · Los enlaces de este sitio son de afiliación · <a href="#" style={{color:"#4a4030",textDecoration:"underline"}}>Política de transparencia</a> · <a href="#" style={{color:"#4a4030",textDecoration:"underline"}}>Cookies</a> · 2026
        </p>
      </footer>
    </div>
  );
}
