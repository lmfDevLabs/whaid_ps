"use client";

import { useEffect, useMemo, useState } from "react";

const PRICING_LOGO_BASE_PATH = "/assets/logos_servicios";

const PRICING_PROVIDERS = [
  { id: "gcp", logo: `${PRICING_LOGO_BASE_PATH}/google-cloud-logo.svg`, logoFallback: "GCP", services: 5 },
  { id: "openai", logo: `${PRICING_LOGO_BASE_PATH}/openai-logo.svg`, logoFallback: "AI", services: 2 },
  { id: "pinecone", logo: `${PRICING_LOGO_BASE_PATH}/pinecone-logo.svg`, logoFallback: "PC", services: 3 },
  { id: "algolia", logo: `${PRICING_LOGO_BASE_PATH}/algolia-logo.svg`, logoFallback: "AG", services: 3 },
  { id: "firecms", logo: `${PRICING_LOGO_BASE_PATH}/firecms-logo.svg`, logoFallback: "CMS", services: 3 },
  { id: "langsmith", logo: `${PRICING_LOGO_BASE_PATH}/langsmith-logo.svg`, logoFallback: "LS", services: 3 },
];

const SECURITY_CARDS = [
  {
    id: "public-data",
    titleKey: "security_card_public_title",
    textKey: "security_card_public_text",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-5" />
      </svg>
    ),
  },
  {
    id: "restricted-access",
    titleKey: "security_card_access_title",
    textKey: "security_card_access_text",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="4" y="11" width="16" height="9" rx="2" />
        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
        <path d="M12 15v2" />
      </svg>
    ),
  },
  {
    id: "cloud-security",
    titleKey: "security_card_cloud_title",
    textKey: "security_card_cloud_text",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17.5 19H8a5 5 0 1 1 .9-9.9A6 6 0 0 1 20 11.5 3.8 3.8 0 0 1 17.5 19z" />
        <path d="M12 18s3-1.5 3-4v-2l-3-1-3 1v2c0 2.5 3 4 3 4z" />
      </svg>
    ),
  },
  {
    id: "traceability",
    titleKey: "security_card_traceability_title",
    textKey: "security_card_traceability_text",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <ellipse cx="12" cy="5" rx="7" ry="3" />
        <path d="M5 5v10c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
        <path d="M5 10c0 1.7 3.1 3 7 3s7-1.3 7-3" />
        <path d="M14 20l2 2 4-5" />
      </svg>
    ),
  },
];

function SecuritySection() {
  return (
    <section className="section section--security" id="security" aria-labelledby="security-title">
      <div className="container">
        <div className="security-card reveal">
          <div className="security-card__content">
            <div className="security-card__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M9.5 12.5l1.8 1.8 3.7-5" />
              </svg>
            </div>
            <span className="security-card__badge" data-i18n="security_badge"></span>
            <h2 id="security-title" data-i18n="security_title"></h2>
            <p className="security-card__subtitle" data-i18n="security_subtitle"></p>
            <p className="security-card__text" data-i18n="security_text"></p>
          </div>

          <div className="security-card__grid" aria-label="Security controls">
            {SECURITY_CARDS.map((card) => (
              <article className="security-mini" key={card.id}>
                <span className="security-mini__icon">{card.icon}</span>
                <div>
                  <h3 data-i18n={card.titleKey}></h3>
                  <p data-i18n={card.textKey}></p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingServiceLogo({ src, fallback, nameKey }) {
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

function PricingSection() {
  return (
    <section className="section section--pricing" id="pricing" aria-labelledby="pricing-title">
      <div className="container">
        <div className="pricing reveal">
          <div className="pricing__head">
            <span className="eyebrow" data-i18n="pricing_eyebrow"></span>
            <h2 id="pricing-title" data-i18n="pricing_title"></h2>
            <p data-i18n="pricing_subtitle"></p>
          </div>

          <div className="pricing__formula" aria-label="Pricing formula">
            <span data-i18n="pricing_formula_monthly"></span>
            <strong data-i18n="pricing_formula_consumption"></strong>
            <span className="pricing__formula-plus" aria-hidden="true">+</span>
            <strong className="pricing__formula-maintenance" data-i18n="pricing_formula_maintenance"></strong>
          </div>

          <div className="pricing__grid">
            {PRICING_PROVIDERS.map((provider) => (
              <article className="pricing-card" key={provider.id}>
                <div className="pricing-card__top">
                  <PricingServiceLogo
                    src={provider.logo}
                    fallback={provider.logoFallback}
                    nameKey={`pricing_${provider.id}_name`}
                  />
                  <div>
                    <span className="pricing-card__label" data-i18n="pricing_provider_label"></span>
                    <h3 data-i18n={`pricing_${provider.id}_name`}></h3>
                  </div>
                </div>
                <p className="pricing-card__description" data-i18n={`pricing_${provider.id}_description`}></p>

                <div className="pricing-card__services">
                  <span className="pricing-card__section-label" data-i18n="pricing_services_label"></span>
                  <ul>
                    {Array.from({ length: provider.services }, (_, index) => (
                      <li key={`${provider.id}-service-${index + 1}`} data-i18n={`pricing_${provider.id}_service_${index + 1}`}></li>
                    ))}
                  </ul>
                </div>

                <div className="pricing-card__metric">
                  <span className="pricing-card__section-label" data-i18n="pricing_metric_label"></span>
                  <span className="pricing-card__chip" data-i18n={`pricing_${provider.id}_metric`}></span>
                </div>

                <p className="pricing-card__demand" data-i18n={`pricing_${provider.id}_demand`}></p>
              </article>
            ))}
          </div>

          <div className="pricing__closing">
            <div>
              <span className="eyebrow" data-i18n="pricing_closing_eyebrow"></span>
              <h3 data-i18n="pricing_closing_title"></h3>
              <p data-i18n="pricing_closing_text"></p>
            </div>
            <a href="#demo" className="btn btn--primary btn--lg">
              <span data-i18n="pricing_cta"></span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const OTHER_POSSIBILITIES_MEDIA = {
  realEstate: {
    youtubeId: "_gQMjWyR1eQ",
    titleKey: "other_possibilities_real_estate_video_title",
  },
  inventory: {
    youtubeId: "_gQMjWyR1eQ",
    titleKey: "other_possibilities_inventory_video_title",
  },
};

function getYouTubeEmbedUrl(videoSource) {
  if (!videoSource || typeof videoSource !== "string") return "";

  const cleanSource = videoSource.trim();

  if (!cleanSource) return "";

  try {
    const url = new URL(cleanSource);
    const host = url.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      const id = url.pathname.replace("/", "").trim();
      return id ? `https://www.youtube-nocookie.com/embed/${id}` : "";
    }

    if (host.endsWith("youtube.com")) {
      if (url.pathname.startsWith("/embed/")) {
        return cleanSource.replace("https://www.youtube.com", "https://www.youtube-nocookie.com");
      }

      const id = url.searchParams.get("v");
      return id ? `https://www.youtube-nocookie.com/embed/${id}` : "";
    }
  } catch {
    return `https://www.youtube-nocookie.com/embed/${encodeURIComponent(cleanSource)}`;
  }

  return "";
}

function YouTubeEmbed({ youtubeId, titleKey }) {
  const embedUrl = getYouTubeEmbedUrl(youtubeId);

  console.log("[OtherPossibilities][YouTubeEmbed]", {
    youtubeId,
    source: youtubeId,
    embedUrl,
  });

  return (
    <div className="other-possibility-card__video" data-video-debug={embedUrl ? "has-url" : "missing-url"}>
      {embedUrl ? (
        <iframe
          src={embedUrl}
          title={titleKey || "Whaid video"}
          data-i18n-title={titleKey}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <div className="other-possibility-card__video-fallback">
          Missing YouTube source
        </div>
      )}
    </div>
  );
}

function OtherPossibilitiesBlock() {
  return (
    <section className="section section--other-possibilities" id="other-possibilities" aria-labelledby="other-possibilities-title">
      <div className="container">
        <div className="other-possibilities reveal">
          <div className="other-possibilities__head">
            <h2 id="other-possibilities-title" data-i18n="other_possibilities_title"></h2>
            <p className="other-possibilities__intro" data-i18n="other_possibilities_intro"></p>
          </div>

          <div className="other-possibilities__cards">
            <article className="other-possibility-card other-possibility-card--real-estate">
              <div className="other-possibility-card__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18"/><path d="M5 21V8l7-5 7 5v13"/><path d="M9 21v-6h6v6"/><path d="M9 10h.01"/><path d="M15 10h.01"/></svg>
              </div>
              <YouTubeEmbed {...OTHER_POSSIBILITIES_MEDIA.realEstate} />
              <h3 data-i18n="other_possibilities_real_estate_title"></h3>
              <p data-i18n="other_possibilities_real_estate_description"></p>
              <ul className="other-possibility-card__prompts">
                <li data-i18n="other_possibilities_real_estate_prompt_1"></li>
                <li data-i18n="other_possibilities_real_estate_prompt_2"></li>
                <li data-i18n="other_possibilities_real_estate_prompt_3"></li>
              </ul>
            </article>

            <article className="other-possibility-card other-possibility-card--inventory">
              <div className="other-possibility-card__icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.3 7 12 12l8.7-5"/><path d="M12 22V12"/></svg>
              </div>
              <YouTubeEmbed {...OTHER_POSSIBILITIES_MEDIA.inventory} />
              <h3 data-i18n="other_possibilities_inventory_title"></h3>
              <p data-i18n="other_possibilities_inventory_description"></p>
              <ul className="other-possibility-card__prompts">
                <li data-i18n="other_possibilities_inventory_prompt_1"></li>
                <li data-i18n="other_possibilities_inventory_prompt_2"></li>
                <li data-i18n="other_possibilities_inventory_prompt_3"></li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

function handleDemoSubmit(event) {
  event.preventDefault();
  const button = event.currentTarget.querySelector(".form-submit");
  button.innerHTML = "✓ Solicitud enviada";
  button.style.background = "#18a758";
  button.style.color = "#fff";
}

export default function HomePage() {
  const [qaCopy, setQaCopy] = useState(null);
  const [activeQaTab, setActiveQaTab] = useState(null);
  const [activeQaItem, setActiveQaItem] = useState(null);

  useEffect(() => {
    const syncQaCopy = () => {
      const lang = document.documentElement.getAttribute("data-lang") || localStorage.getItem("whaid:lang") || "es";
      const copy = window.WHAID_SITE?.[lang]?.qaStrip || window.WHAID_SITE?.es?.qaStrip || null;
      setQaCopy(copy);
    };

    syncQaCopy();
    const observer = new MutationObserver(syncQaCopy);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-lang"] });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const firstTabId = qaCopy?.tabs?.[0]?.id || null;
    setActiveQaTab((prev) => {
      if (!qaCopy?.tabs?.length) return null;
      const exists = qaCopy.tabs.some((tab) => tab.id === prev);
      return exists ? prev : firstTabId;
    });
    setActiveQaItem(null);
  }, [qaCopy]);

  const activeTab = useMemo(
    () => qaCopy?.tabs?.find((tab) => tab.id === activeQaTab) || qaCopy?.tabs?.[0],
    [qaCopy, activeQaTab]
  );

  return (
    <>
      {/* NAV */}
      <nav className="nav" aria-label="Principal">
        <div className="nav__inner">
          <a href="/" className="nav__logo" aria-label="Whaid">
            <img src="/assets/whaid-logo-nav.png" alt="Whaid" />
          </a>

          <div className="nav__links" id="nav-menu">
            <a href="/" aria-current="page" data-i18n="nav_home">Home</a>
            <a href="/#pitch" data-i18n="nav_pitch">Pitch</a>
            <a href="/#keyshots" data-i18n="nav_product">Producto</a>
            <a href="/#usecases" data-i18n="nav_use_cases">Casos de uso</a>
            <a href="/#pricing" data-i18n="nav_pricing">Pricing</a>
            <a href="/blog" data-i18n="nav_blog">Blog</a>
          </div>

          <div className="nav__actions">
            <button className="chip-btn" id="lang-switch" aria-label="Cambiar idioma">EN</button>
            <button className="chip-btn" id="theme-switch" aria-label="Cambiar tema">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
            </button>
            <a href="#demo" className="btn btn--primary btn--sm"><span data-i18n="nav_cta">Agendar demo</span></a>
            <button className="menu-toggle" id="menu-toggle" aria-label="Menú" aria-expanded="false"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg></button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <header className="hero">
        <div className="hero__inner">
          <div>
            <span className="hero__eyebrow" data-i18n="hero_eyebrow">Asistente IA en WhatsApp para tus eventos y recintos</span>
            <h1>
              <span data-i18n="hero_title_a">Haz parte a los visitantes</span><span className="accent" data-i18n="hero_title_b">de tus eventos</span><span data-i18n="hero_title_c"> a un WhatsApp de distancia.</span>
            </h1>
            <p className="hero__lead" data-i18n="hero_sub">
              Whaid es el asistente conversacional que conencta tu evento o recinto con tus visitantes, en tiempo real y sin salir de WhatsApp.
            </p>
            <div className="hero__ctas">
              <a href="#demo" className="btn btn--primary btn--lg">
                <span data-i18n="hero_cta_primary">Agendar demo</span>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
              <a href="#takelook" className="btn btn--ghost btn--lg" style={{color: "#fff", borderColor: "var(--c-line-dark)"}}>
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><polygon points="7,4 20,12 7,20"/></svg>
                <span data-i18n="hero_cta_secondary">Ver cómo funciona</span>
              </a>
            </div>

            <div className="hero__meta">
              <div className="hero__meta-item">
                <span className="hero__meta-k">Listo para</span>
                <span className="hero__meta-v">WhatsApp<span className="dot">.</span></span>
              </div>
              <div className="hero__meta-item">
                <span className="hero__meta-k">Tiempo a primera respuesta</span>
                <span className="hero__meta-v">&lt; 3s<span className="dot">.</span></span>
              </div>
              <div className="hero__meta-item">
                <span className="hero__meta-k">Idiomas</span>
                <span className="hero__meta-v">ES · EN <span className="dot">.</span></span>
              </div>
            </div>
          </div>

          {/* WhatsApp phone mock (animated) */}
          <div className="wa-phone" aria-label="Demostración de conversación con Whaid en WhatsApp">
            <div className="wa-phone__screen">
              <div className="wa-header">
                <span className="wa-header__back"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg></span>
                <span className="wa-header__avatar">
                  <img src="/assets/whaid-mark.svg" alt="Whaid" />
                </span>
                <div className="wa-header__info">
                  <p className="wa-header__name">
                    Whaid
                    <span className="verify" aria-label="Verificado"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span>
                  </p>
                  <p className="wa-header__status" id="wa-status">en línea</p>
                </div>
                <div className="wa-header__icons">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.45-1.2a2 2 0 0 1 2.11-.45c.85.3 1.73.5 2.63.62A2 2 0 0 1 22 16.92z"/></svg>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="5" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="12" cy="19" r="1.5"/></svg>
                </div>
              </div>

              <div className="wa-body" id="wa-body-hero">
                <span className="wa-date">HOY</span>
              </div>

              <div className="wa-footer-bar">
                <div className="wa-input">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8696a0" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
                  <span>Mensaje</span>
                </div>
                <span className="wa-send"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></span>
              </div>
            </div>

            {/* Web panel that "pops out" of the chat when a link card is tapped */}
            <div className="web-panel" id="web-panel-hero" aria-hidden="true">
              <div className="web-panel__bar">
                <div className="web-panel__dots"><span></span><span></span><span></span></div>
                <div className="web-panel__url"><span className="lock">🔒</span>whaid.app/expoandina/piso-2</div>
              </div>
              <div className="web-panel__body">
                <p className="web-panel__eyebrow" data-i18n="panel_eyebrow">Vista enriquecida · Piso 2</p>
                <h4 className="web-panel__title" data-i18n="panel_title">86 stands · 2 incidencias</h4>
                
                <div className="web-panel__list">
                  <div className="web-panel__row warn">
                    <span className="id">A-14</span>
                    <span className="name" data-i18n="panel_row_a14"></span>
                    
                  </div>
                  <div className="web-panel__row bad">
                    <span className="id">B-04</span>
                    <span className="name" data-i18n="panel_row_b04"></span>
                    
                  </div>
                  <div className="web-panel__row ok">
                    <span className="id">B-05</span>
                    <span className="name" data-i18n="panel_row_b05"></span>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* QA STRIP */}
      <section className="logos qa-strip" aria-label="QA Strip">
        <div className="container">
          <p className="logos__label qa-strip__label">{qaCopy?.label || ""}</p>

          <div className="qa-strip__tabs" role="tablist" aria-label={qaCopy?.label || ""}>
            {qaCopy?.tabs?.map((tab) => (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={activeTab?.id === tab.id}
                aria-controls={`qa-panel-${tab.id}`}
                className={`qa-strip__tab ${activeTab?.id === tab.id ? "qa-strip__tab--active" : ""}`}
                onClick={() => {
                  setActiveQaTab(tab.id);
                  setActiveQaItem(null);
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="logos__row qa-strip__row" id={`qa-panel-${activeTab?.id || "default"}`} role="tabpanel">
            {activeTab?.items?.map((item, index) => {
              const itemId = `${activeTab.id}-${index}`;
              const isActive = activeQaItem === itemId;
              return (
                <button
                  key={itemId}
                  type="button"
                  className={`qa-strip__item ${isActive ? "qa-strip__item--active" : ""}`}
                  onMouseEnter={() => setActiveQaItem(itemId)}
                  onMouseLeave={() => setActiveQaItem(null)}
                  onFocus={() => setActiveQaItem(itemId)}
                  onBlur={() => setActiveQaItem(null)}
                  onClick={() => setActiveQaItem((prev) => (prev === itemId ? null : itemId))}
                  aria-expanded={isActive}
                  aria-label={item.question}
                >
                  <span className="qa-strip__question">{item.question}</span>
                  <span className="qa-strip__answer">{item.answer}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* VIDEO PITCH */}
      <section className="video-pitch" id="pitch" aria-label="Video pitch">
        <div className="container video-pitch__inner">
          <div className="video-pitch__copy">
            <span className="eyebrow video-pitch__eyebrow" data-i18n="pitch_eyebrow">Pitch · 90 segundos</span>
            <h3 data-i18n="pitch_title">Whaid en menos de lo que dura un café.</h3>
            <p data-i18n="pitch_sub">Mira a Whaid resolver un caso real — del WhatsApp del operador a la respuesta verificada.</p>
          </div>
          <a className="video-pitch__player" href="#" data-pitch="youtube" aria-label="Reproducir video pitch de Whaid">
            <div className="video-pitch__thumb">
              <span className="video-pitch__chrome">
                <span className="video-pitch__dots"><span></span><span></span><span></span></span>
                <span className="video-pitch__url">youtube.com/@whaid</span>
              </span>
              <span className="video-pitch__badge">YT</span>
              <span className="video-pitch__duration">01:24</span>
              <span className="video-pitch__play" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="8,5 20,12 8,19"/></svg>
              </span>
              <span className="video-pitch__caption" data-i18n="pitch_caption">Reproducir pitch oficial</span>
            </div>
          </a>
        </div>
      </section>

      {/* KEYSHOTS */}
      <section className="section" id="keyshots">
        <div className="container">
          <div className="section__head reveal">
            <span className="eyebrow">Capacidades clave</span>
            <h2>
              <span data-i18n="keyshots_title_a">Deja que los visitantes hablen con los datos</span><span className="accent" data-i18n="keyshots_title_b">como le escribes a un colega</span><span data-i18n="keyshots_title_c">.</span>
            </h2>
            <p data-i18n="keyshots_sub">Cuatro capacidades que convierten Whaid en tu canal para hacer visible todo de tu evento o recinto</p>
          </div>

          <div className="keyshots">
            {/* #1 */}
            <article className="keyshot reveal">
              <div className="keyshot__num">01 <span aria-hidden="true">/ 04</span></div>
              <div className="keyshot__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </div>
              <h3 data-i18n="k1_title">Consultas para todos siempre en lenguaje natural</h3>
              <p data-i18n="k1_body">Deja que tus visitantes pregunten en español o en ingles, de productos, espacios, personas, eventos, promociones, y más. </p>
            </article>
            
            {/* #2 */}
            <article className="keyshot reveal">
              <div className="keyshot__num">02 <span aria-hidden="true">/ 04</span></div>
              <div className="keyshot__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
              </div>
              <h3 data-i18n="k2_title">Haz más visible tus eventos</h3>
              <p data-i18n="k2_body">Whaid es un asistente en tiempo real que contesta sobre todo aquello que tus visitantes deberian conocer</p>
            </article>
            
            {/* #3 */}
            <article className="keyshot reveal">
              <div className="keyshot__num">03 <span aria-hidden="true">/ 04</span></div>
              <div className="keyshot__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
              </div>
              <h3 data-i18n="k3_title">Propicia un networking activo</h3>
              <p data-i18n="k3_body">Conecta la oferta con la demanda, haz que tus visitamtes encuentren lo que están buscando y vean más de lo que hay</p>
            </article>
            
            {/* #4 */}
            <article className="keyshot reveal">
              <div className="keyshot__num">04 <span aria-hidden="true">/ 04</span></div>
              <div className="keyshot__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3 data-i18n="k4_title">Todo es de caracter público</h3>
              <p data-i18n="k4_body">Whaid solo habla de información que se debe mostrar, datos que ayudan a visibilzar tu evento</p>
            </article>
          </div>
        </div>
      </section>

      {/* SECURITY */}
      <SecuritySection />

      <hr className="hr" />

      {/* USE CASES */}
      <section className="section section--alt" id="usecases">
        <div className="container">
          <div className="section__head reveal">
            <span className="eyebrow">Casos de uso</span>
            <h2>
              <span data-i18n="usecases_title_a">Hecho para ser </span><span className="accent" data-i18n="usecases_title_b">simple y directo</span><span data-i18n="usecases_title_c">.</span>
            </h2>
            <p data-i18n="usecases_sub">Los tres sectores donde los visitantes quieren saber más</p>
          </div>

          <div className="usecases">
            {/* UC 1: Shows / ferias */}
            <article className="usecase reveal">
              <div>
                <span className="usecase__label" data-i18n="uc1_label">Shows y ferias</span>
                <h3 data-i18n="uc1_title">Ofrece información actualizada de todo sobre tu evento sobre:</h3>
                <p data-i18n="uc1_body">Expositores, stands, productos, eventos, agenda, ubicaciones, promociones, personal y más</p>
                <a href="/blog" className="learn-more"><span data-i18n="read_more">Leer más</span> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
                <div className="usecase__stat">
                  <span className="usecase__stat-num">50%</span>
                  <span className="usecase__stat-txt" data-i18n="uc1_stat_a">Menos tiempo buscando y más cerrando negocios</span>
                </div>
              </div>
              <div className="usecase__visual">
                <div className="uv-header">
                  <span>Showroom: I Salón del Automóvil Usado 2026</span>
                </div>
                <div className="uv-title">¿Qué automoviles hay superiores al 2020 en la feria?</div>
                <div className="uv-grid uv-grid--cars">
                  <div className="uv-cell"><span className="k">Audi A3</span><span className="v">2024 <span className="dot" style={{background: "#bdff00"}}></span></span></div>
                  <div className="uv-cell"><span className="k">BMW X3</span><span className="v">2025 <span className="dot" style={{background: "#bdff00"}}></span></span></div>
                  <div className="uv-cell"><span className="k">Mazda 6</span><span className="v">2023 <span className="dot" style={{background: "#bdff00"}}></span></span></div>
                  <div className="uv-cell"><span className="k">Renault Duster</span><span className="v">2021 <span className="dot" style={{background: "#bdff00"}}></span></span></div>
                  <div className="uv-cell"><span className="k">VW Taos</span><span className="v">2022 <span className="dot" style={{background: "#bdff00"}}></span></span></div>
                  <div className="uv-cell"><span className="k">Subaru Sportback</span><span className="v">2022 <span className="dot" style={{background: "#bdff00"}}></span></span></div>
                  <div className="uv-cell"><span className="k">Toyota Camry</span><span className="v">2025 <span className="dot" style={{background: "#bdff00"}}></span></span></div>
                  <div className="uv-cell"><span className="k">Volvo XC-40</span><span className="v">2023 <span className="dot" style={{background: "#bdff00"}}></span></span></div>
                  <div className="uv-cell"><span className="k">GMC Sierra</span><span className="v">2020 <span className="dot" style={{background: "#bdff00"}}></span></span></div>
                  <div className="uv-cell"><span className="k">Honda Civic</span><span className="v">2024 <span className="dot" style={{background: "#bdff00"}}></span></span></div>
                  <div className="uv-cell"><span className="k">Nissan Sentra</span><span className="v">2022 <span className="dot" style={{background: "#bdff00"}}></span></span></div>
                  <div className="uv-cell"><span className="k">Ford Expedition</span><span className="v">2023 <span className="dot" style={{background: "#bdff00"}}></span></span></div>
                </div>
              </div>
            </article>

            {/* UC 2: Centros comerciales */}
            <article className="usecase reveal">
              <div>
                <span className="usecase__label" data-i18n="uc2_label">Centros comerciales</span>
                <h3 data-i18n="uc2_title">Todo sobre el Centro Comercial en una sola conversación</h3>
                <p data-i18n="uc2_body">Locales, promociones, productos, ubicación de espacios, eventos especiales todo lo que tus visitantes quisieran conocer</p>
                <a href="/blog" className="learn-more"><span data-i18n="read_more">Leer más</span> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
                <div className="usecase__stat">
                  <span className="usecase__stat-num">100%</span>
                  <span className="usecase__stat-txt" data-i18n="uc2_stat_a">De más de información relevante durante la visita</span>
                </div>
              </div>
              <div className="usecase__visual">
                <div className="uv-header">
                  <span>CC Gran Titan Plaza</span>
                </div>
                <div className="uv-title">¿Qué locales de ropa informal para hombre hay?</div>
                <div className="uv-grid uv-grid--stores">
                  <div className="uv-cell uv-cell--compact"><span className="k">Levi´s</span><span className="v v--large">Local L9-B</span></div>
                  <div className="uv-cell uv-cell--compact"><span className="k">Diesel</span><span className="v v--large">Local L1-A</span></div>
                  <div className="uv-cell uv-cell--compact"><span className="k">Pilatos</span><span className="v v--large">Local L10-B</span></div>
                  <div className="uv-cell uv-cell--compact"><span className="k">Tennis</span><span className="v v--large">Local L18-C</span></div>
                  <div className="uv-cell uv-cell--compact"><span className="k">Lec Lee</span><span className="v v--large">Local L21-B</span></div>
                  <div className="uv-cell uv-cell--compact"><span className="k">Americanico</span><span className="v v--large">Local L11-C</span></div>
                </div>
              </div>
            </article>

            {/* UC 3: Universidades */}
            <article className="usecase reveal">
              <div>
                <span className="usecase__label" data-i18n="uc3_label">Universidades</span>
                <h3 data-i18n="uc3_title">Respuestas claras sobre campus y comunidad.</h3>
                <p data-i18n="uc3_body">Aulas, laboratorios, inventarios, equipos, profesores, capital humano, eventos, agendas y todo lo que se debe saber de un Campus</p>
                <a href="/blog" className="learn-more"><span data-i18n="read_more">Leer más</span> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
                <div className="usecase__stat">
                  <span className="usecase__stat-num">3×</span>
                  <span className="usecase__stat-txt" data-i18n="uc3_stat_a">Más nocion sobre todo lo que hay en el campus</span>
                </div>
              </div>
              <div className="usecase__visual">
                <div className="uv-header">
                  <span>¿Cuales sala de conferencias estan disponibles que cuenten con videobeam del Ed. Barón y de cuantas personas es su aforo?</span>
                </div>
                <div className="uv-title">Aulas &amp; laboratorios</div>
                <div className="uv-grid uv-grid--campus">
                  <div className="uv-cell"><span className="k">S1-101</span><span className="v">Aforo 50 puestos</span></div>
                  <div className="uv-cell"><span className="k">S1-102</span><span className="v">Aforo 50 puestos</span></div>
                  <div className="uv-cell"><span className="k">S1-103</span><span className="v">Aforo 150 puestos</span></div>
                  <div className="uv-cell"><span className="k">504</span><span className="v">Aforo 25 puestos</span></div>
                  <div className="uv-cell"><span className="k">405</span><span className="v">Aforo 25 puestos</span></div>
                  <div className="uv-cell"><span className="k">201</span><span className="v">Aforo 25 puestos</span></div>
                  <div className="uv-cell"><span className="k">404</span><span className="v">Aforo 25 puestos</span></div>
                  <div className="uv-cell"><span className="k">305</span><span className="v">Aforo 25 puestos</span></div>
                  <div className="uv-cell"><span className="k">301</span><span className="v">Aforo 25 puestos</span></div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <OtherPossibilitiesBlock />
      <PricingSection />
      {/* DEMO / SIGNUP */}
      <section className="section" id="demo">
        <div className="demo reveal">
          <div className="demo__content">
            <span className="eyebrow" data-i18n="form_eyebrow">15 minutos, sin compromiso</span>
            <h2 data-i18n="form_title">¿Listo para probar Whaid para tu Showroom, Centro Comercial o Universidad?</h2>
            <p data-i18n="form_sub">Agenda una demostración para ver lo simple pero poderoso que es Whaid</p>
            <ul>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> 15 minutos de tu tiempo</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Conoce nuestro demo funcional</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Obten un plan de activación claro al final de la llamada solo para ti</li>
            </ul>
          </div>

          <form className="demo__form" onSubmit={handleDemoSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label data-i18n="form_name">Nombre</label>
                <input type="text" required placeholder="Ana" />
              </div>
              <div className="form-group">
                <label data-i18n="form_last">Apellido</label>
                <input type="text" required placeholder="Martínez" />
              </div>
            </div>
            <div className="form-single form-group">
              <label data-i18n="form_email">Correo corporativo</label>
              <input type="email" required placeholder="ana@tuempresa.com" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label data-i18n="form_company">Empresa</label>
                <input type="text" required placeholder="Tuya S.A.S." />
              </div>
              <div className="form-group">
                <label data-i18n="form_size">Tamaño del equipo</label>
                <select>
                  <option>1–10</option>
                  <option>11–50</option>
                  <option>51–200</option>
                  <option>200+</option>
                </select>
              </div>
            </div>
            <button type="submit" className="form-submit">
              <span data-i18n="form_submit">Agendar demo</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </button>
            <p className="form-disclaimer" data-i18n="form_disclaimer">No enviamos spam. Solo te contactamos para coordinar la demo.</p>
          </form>
        </div>
      </section>

      {/* TRACKABLE ASSETS CARROUSEL */}
      <section className="section section--alt">
        <div className="container">
          <div className="section__head reveal">
            <span className="eyebrow" data-i18n="assets_eyebrow">Tipos de activos</span>
            <h2>
              <span data-i18n="assets_title_a">Ocho categorías, </span><span className="accent" data-i18n="assets_title_b">una sola conversación</span><span data-i18n="assets_title_c">.</span>
            </h2>
            <p data-i18n="assets_sub">Whaid puede hablar sobre los activos que mueven tu recinto o evento</p>
          </div>

          <div className="assets-carrousel reveal">
            <article className="asset-card">
              <span className="asset-card__num">01 / 08</span>
              <span className="asset-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></span>
              <div className="asset-card__footer">
                <h3 data-i18n="a1">Inmobiliarios</h3>
                <p>Edificios, locales, bodegas y predios.</p>
              </div>
            </article>
            <article className="asset-card">
              <span className="asset-card__num">02 / 08</span>
              <span className="asset-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="2"/><path d="M7 10h0M12 10h5M7 14h10"/></svg></span>
              <div className="asset-card__footer">
                <h3 data-i18n="a2">Shows</h3>
                <p>Funciones, artistas, taquilla y boletería.</p>
              </div>
            </article>
            <article className="asset-card">
              <span className="asset-card__num">03 / 08</span>
              <span className="asset-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg></span>
              <div className="asset-card__footer">
                <h3 data-i18n="a3">Espacios</h3>
                <p>Stands, aulas, salones y áreas comunes.</p>
              </div>
            </article>
            <article className="asset-card">
              <span className="asset-card__num">04 / 08</span>
              <span className="asset-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/><path d="M6 12H4a2 2 0 0 0-2 2v8h4"/><path d="M18 9h2a2 2 0 0 1 2 2v11h-4"/><path d="M10 6h4M10 10h4M10 14h4M10 18h4"/></svg></span>
              <div className="asset-card__footer">
                <h3 data-i18n="a4">Compañías</h3>
                <p>Marcas, unidades de negocio, filiales.</p>
              </div>
            </article>
            <article className="asset-card">
              <span className="asset-card__num">05 / 08</span>
              <span className="asset-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg></span>
              <div className="asset-card__footer">
                <h3 data-i18n="a5">Empleados</h3>
                <p>Turnos, roles, directorio y asistencia.</p>
              </div>
            </article>
            <article className="asset-card">
              <span className="asset-card__num">06 / 08</span>
              <span className="asset-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg></span>
              <div className="asset-card__footer">
                <h3 data-i18n="a6">Productos</h3>
                <p>SKUs, inventario, lotes y disponibilidad.</p>
              </div>
            </article>
            <article className="asset-card">
              <span className="asset-card__num">07 / 08</span>
              <span className="asset-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></span>
              <div className="asset-card__footer">
                <h3 data-i18n="a7">Eventos</h3>
                <p>Agenda, sesiones, asistentes y aforos.</p>
              </div>
            </article>
            <article className="asset-card">
              <span className="asset-card__num">08 / 08</span>
              <span className="asset-card__icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="5" x2="5" y2="19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg></span>
              <div className="asset-card__footer">
                <h3 data-i18n="a8">Promociones</h3>
                <p>Campañas, cupones y métricas de activación.</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <hr className="hr" />

      {/* TAKE A LOOK */}
      <section className="takelook" id="takelook">
        <div className="section__head reveal" style={{color: "#fff"}}>
          <span className="eyebrow" style={{color: "var(--c-lime)"}} data-i18n="takelook_eyebrow">Take a look</span>
          <h2 style={{color: "#fff"}}>
            <span data-i18n="takelook_title_a">Un vistazo a </span><span className="accent" data-i18n="takelook_title_b">Whaid operando</span><span data-i18n="takelook_title_c">.</span>
          </h2>
          <p style={{color: "var(--c-muted-dark)"}} data-i18n="takelook_sub">Así se ve una conversación real entre un operador de feria y Whaid — resolviendo un caso en segundos.</p>
        </div>

        <div className="takelook__showcase">
          <div className="takelook__phone reveal">
            <div className="wa-phone">
              <div className="wa-phone__screen">
                <div className="wa-header">
                  <span className="wa-header__back"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="15 18 9 12 15 6"/></svg></span>
                  <span className="wa-header__avatar">
                    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 4C12 10 6 20 6 30c0 6 3 10 8 10 1 0 2 0 3-1-1-3-1-6 0-10 2-8 8-14 14-18C28 9 25 6 22 4z" fill="#bdff00"/>
                      <path d="M22 4c2 4 3 9 2 15-2 10-9 18-17 21 2 0 3 0 5-1 10-3 19-13 21-25 1-4 0-8-1-10H22z" fill="#18a758"/>
                    </svg>
                  </span>
                  <div className="wa-header__info">
                    <p className="wa-header__name">Whaid <span className="verify"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg></span></p>
                    <p className="wa-header__status" id="wa-status-2">en línea</p>
                  </div>
                </div>
                <div className="wa-body" id="wa-body-takelook">
                  <span className="wa-date">HOY</span>
                </div>
                <div className="wa-footer-bar">
                  <div className="wa-input">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8696a0" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
                    <span>Mensaje</span>
                  </div>
                  <span className="wa-send"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></span>
                </div>
              </div>
            </div>
          </div>

          <div className="takelook__notes reveal">
            <div className="takelook__note">
              <div className="takelook__note-label">01 · Pregunta</div>
              <h4>Conversación natural, sin formularios.</h4>
              <p>El visitante simplemente describe lo que necesita saber. Sin sintaxis, sin comandos. Tal cual como se habla con alguien</p>
            </div>
            <div className="takelook__note">
              <div className="takelook__note-label">02 · Consulta</div>
              <h4>Consulta a la fuente real.</h4>
              <p>Whaid interpreta la pregunta, para traducir y mejoramejorar lo que quiere decir el visitante</p>
            </div>
            <div className="takelook__note">
              <div className="takelook__note-label">03 · Respuesta</div>
              <h4>Con datos verificados, actualizados, legibles, accionables.</h4>
              <p>La respuesta llega en lenguaje natural siempre, llena de información relevante</p>
            </div>
            <div className="takelook__note">
              <div className="takelook__note-label">04 · Contexto activo</div>
              <h4>Puedes seguir preguntando.</h4>
              <p>En la conversación se mantiene el hilo. El visitante no necesita repetir el contexto</p>
            </div>
            <div className="takelook__note">
              <div className="takelook__note-label">05 · Ampliación</div>
              <h4>URLs extendidas</h4>
              <p>Se ofrecen enlaces dinamicos y seguros, con información más completa acorde al contexto de la conversación</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer__grid">
            <div>
              <div className="footer__logo">
                <img src="/assets/whaid-logo.png" alt="Whaid" />
              </div>
              <p className="footer__tag" data-i18n="footer_tagline">El asistente IA que responde por tus activos — desde WhatsApp.</p>
            </div>
            <div className="footer__col">
              <h4 data-i18n="footer_product">Producto</h4>
              <ul>
                <li><a href="/#keyshots">Capacidades</a></li>
                <li><a href="/#usecases">Casos de uso</a></li>
                <li><a href="#">Integraciones</a></li>
                <li><a href="/#security" data-i18n="footer_security">Seguridad</a></li>
                <li><a href="/#pricing" data-i18n="footer_pricing">Pricing</a></li>
              </ul>
            </div>
            <div className="footer__col">
              <h4 data-i18n="footer_company">Compañía</h4>
              <ul>
                <li><a href="/blog">Blog</a></li>
                <li><a href="#">Sobre nosotros</a></li>
                <li><a href="/#demo" data-i18n="footer_contact">Contacto</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
            <div className="footer__col">
              <h4 data-i18n="footer_legal">Legal</h4>
              <ul>
                <li><a href="#">Privacidad</a></li>
                <li><a href="#">Términos</a></li>
                <li><a href="#">Cookies</a></li>
                <li><a href="#">DPA</a></li>
              </ul>
            </div>
          </div>
          <div className="footer__bottom">
            <span className="footer__copy" data-i18n="footer_copy">© 2026 Whaid. Hecho con cuidado en LatAm.</span>
            <div className="footer__socials">
              <a className="footer__social" href="#" aria-label="Twitter / X"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
              <a className="footer__social" href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14M8.339 18.339v-8.68H5.666v8.68h2.673zM7.003 8.476c.858 0 1.554-.71 1.554-1.568a1.554 1.554 0 1 0-3.108 0c0 .858.696 1.568 1.554 1.568zm11.335 9.863v-4.757c0-2.317-.5-4.098-3.208-4.098-1.3 0-2.172.713-2.528 1.389h-.036v-1.174H9.998v8.64h2.673v-4.277c0-1.125.214-2.214 1.609-2.214 1.374 0 1.392 1.286 1.392 2.286v4.205h2.666z"/></svg></a>
              <a className="footer__social" href="#" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
              <a className="footer__social" href="#" aria-label="WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488"/></svg></a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
