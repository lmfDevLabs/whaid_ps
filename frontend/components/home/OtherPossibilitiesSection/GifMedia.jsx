"use client";

import useLanguage from "../../../i18n/useLanguage";

export default function GifMedia({src, altKey}) {
  const {t} = useLanguage();

  return (
    <div className="other-possibility-card__media">
      <img
        src={src}
        alt={altKey ? t(altKey) : "Demostración animada de Whaid"}
        loading="lazy"
        decoding="async"
      />
    </div>
  );
}
