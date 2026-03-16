import { useState } from "react";

export const SmartImage = ({ src, alt, width = 800, height, className, style, priority = false, sizes }) => {
  const [loaded, setLoaded] = useState(false);

  const isUnsplash = src?.includes("images.unsplash.com");
  const base = isUnsplash ? src.split("?")[0] : null;

  const optimizedSrc = isUnsplash
    ? `${base}?auto=format&fit=crop&q=80&w=${width}${height ? `&h=${height}` : ""}&fm=webp`
    : src;

  // Responsive srcset for Unsplash: 3 sizes covering mobile → desktop
  const srcSet = isUnsplash
    ? [400, 800, 1200]
        .filter((w) => w <= width * 1.5)  // don't generate sizes much larger than requested
        .map((w) => `${base}?auto=format&fit=crop&q=80&w=${w}${height ? `&h=${Math.round(height * (w / width))}`  : ""}&fm=webp ${w}w`)
        .join(", ")
    : undefined;

  return (
    <div style={{
      position: "relative",
      overflow: "hidden",
      backgroundColor: "#F0EEE9",
      ...style
    }} className={className}>
      <img
        src={optimizedSrc}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchpriority={priority ? "high" : undefined}
        decoding={priority ? "sync" : "async"}
        onLoad={() => setLoaded(true)}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          transition: "opacity 0.4s ease, transform 0.6s ease",
          opacity: loaded ? 1 : 0,
          transform: loaded ? "scale(1)" : "scale(1.05)",
        }}
      />
      {!loaded && (
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(90deg, #F0EEE9 25%, #E8E4DC 50%, #F0EEE9 75%)",
          backgroundSize: "200% 100%",
          animation: "shimmer 1.5s infinite linear",
        }} />
      )}
    </div>
  );
};
