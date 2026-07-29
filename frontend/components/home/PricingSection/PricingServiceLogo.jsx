"use client";

import {useState} from "react";

// Browser image errors select the existing textual logo fallback.
export default function PricingServiceLogo({ src, fallback, nameKey }) {
  const [hasLogoError, setHasLogoError] = useState(false);

  return (
    <span className="pricing-card__logoWrap" aria-hidden="true">
      {hasLogoError ? (
        <span className="pricing-card__logoFallback">{fallback}</span>
      ) : (
        <img
          className="pricing-card__logo"
          src={src}
          alt=""
          data-i18n-title={nameKey}
          onError={() => setHasLogoError(true)}
        />
      )}
    </span>
  );

}
