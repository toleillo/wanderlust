export const AB_VARIANTS = {
  ctaText: {
    A: { tickets: "Comprar entradas", hotel: "Reservar hotel", car: "Alquilar coche", activity: "Reservar", restaurant: "Ver restaurantes" },
    B: { tickets: "Consigue tu entrada", hotel: "Ver precios", car: "Comparar coches", activity: "Explorar", restaurant: "Reservar mesa" },
    C: { tickets: "Asegura tu plaza", hotel: "Mejores ofertas", car: "Desde €9/día", activity: "No te lo pierdas", restaurant: "Mesa disponible" },
  },
};

export const getABVariant = () => {
  if (typeof window === "undefined") return "A";
  let v = null;
  try { v = window.__ab_variant; } catch (e) {}
  if (!v) {
    v = ["A", "B", "C"][Math.floor(Math.random() * 3)];
    try { window.__ab_variant = v; } catch (e) {}
  }
  return v;
};
