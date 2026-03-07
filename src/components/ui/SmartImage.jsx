import { useState } from "react";

export const SmartImage = ({ src, alt, width = 800, height, className, style, priority = false }) => {
  const [loaded, setLoaded] = useState(false);

  // If it's an Unsplash image, we inject optimization parameters
  const isUnsplash = src?.includes("images.unsplash.com");

  const optimizedSrc = isUnsplash
    ? `${src.split("?")[0]}?auto=format&fit=crop&q=80&w=${width}${height ? `&h=${height}` : ""}&fm=webp`
    : src;

  return (
    <div style={{
      position: "relative",
      overflow: "hidden",
      backgroundColor: "#F0EEE9",
      ...style
    }} className={className}>
      <img
        src={optimizedSrc}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchpriority={priority ? "high" : "low"}
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
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}</style>
    </div>
  );
};
