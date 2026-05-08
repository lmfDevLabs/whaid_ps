"use client";

import {useState} from "react";

function FallbackGlyph() {
  return (
    <div className="post-hero-img__glyph" aria-hidden="true">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    </div>
  );
}

export default function ImageWithFallback({src, alt = "", className = "", fallbackClassName = ""}) {
  const [failed, setFailed] = useState(false);

  // Este componente concentra el único comportamiento de fallback visual de imágenes:
  // si la URL opcional falta o el navegador dispara error, se conserva el marco de la maqueta.
  if (!src || failed) {
    return (
      <div className={fallbackClassName || className}>
        <FallbackGlyph />
      </div>
    );
  }

  return <img className={className} src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />;
}
