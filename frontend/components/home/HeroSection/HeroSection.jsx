import TranslatedText from "../../../i18n/TranslatedText";
import WhaidVisualResponseCard from "../WhaidVisualResponseCard";

export default function HeroSection() {
  return (
      <header className="hero">
        <div className="hero__inner">
          <div>
            <span className="hero__eyebrow"><TranslatedText i18nKey="hero_eyebrow" /></span>
            <h1>
              <span><TranslatedText i18nKey="hero_title_a" /></span><span className="accent"><TranslatedText i18nKey="hero_title_b" /></span><span><TranslatedText i18nKey="hero_title_c" /></span>
            </h1>
            <p className="hero__lead"><TranslatedText i18nKey="hero_sub" /></p>
            <div className="hero__ctas">
              <a href="#demo" className="btn btn--primary btn--lg">
                <span><TranslatedText i18nKey="hero_cta_primary" /></span>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
              <a href="#takelook" className="btn btn--ghost btn--lg hero__secondary-cta">
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><polygon points="7,4 20,12 7,20"/></svg>
                <span><TranslatedText i18nKey="hero_cta_secondary" /></span>
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
            <WhaidVisualResponseCard
              id="web-panel-hero"
              hidden
              rows={[
                { id: "A-14", nameKey: "panel_row_a14", name: "EcoTela · Pabellón 2", tone: "warn" },
                { id: "B-04", nameKey: "panel_row_b04", name: "VerdeWear · Stand B-14", tone: "bad" },
                { id: "B-05", nameKey: "panel_row_b05", name: "Andes Fibers · Zona Diseño", tone: "ok" },
              ]}
            />
          </div>
        </div>
      </header>
  );
}
