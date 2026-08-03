import TranslatedText from "../../../i18n/TranslatedText";
import {SECURITY_CARDS} from "./security.data";

export default function SecuritySection() {
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
            <span className="security-card__badge"><TranslatedText i18nKey="security_badge" /></span>
            <h2 id="security-title"><TranslatedText i18nKey="security_title" /></h2>
            <p className="security-card__subtitle"><TranslatedText i18nKey="security_subtitle" /></p>
            <p className="security-card__text"><TranslatedText i18nKey="security_text" /></p>
          </div>

          <div className="security-card__grid" aria-label="Security controls">
            {SECURITY_CARDS.map((card) => (
              <article className="security-mini" key={card.id}>
                <span className="security-mini__icon">{card.icon}</span>
                <div>
                  <h3><TranslatedText i18nKey={card.titleKey} /></h3>
                  <p><TranslatedText i18nKey={card.textKey} /></p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>

  );
}
