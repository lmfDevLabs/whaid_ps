import TranslatedText from "../../../i18n/TranslatedText";
import PricingServiceLogo from "./PricingServiceLogo";
import {PRICING_PROVIDERS} from "./pricing.data";

export default function PricingSection() {
  return (
    <section className="section section--pricing" id="pricing" aria-labelledby="pricing-title">
      <div className="container">
        <div className="pricing">
          <div className="pricing__head">
            <span className="eyebrow"><TranslatedText i18nKey="pricing_eyebrow" /></span>
            <h2 id="pricing-title"><TranslatedText i18nKey="pricing_title" /></h2>
            <p><TranslatedText i18nKey="pricing_subtitle" /></p>
          </div>

          <div className="pricing__formula" aria-label="Pricing formula">
            <span><TranslatedText i18nKey="pricing_formula_monthly" /></span>
            <strong><TranslatedText i18nKey="pricing_formula_consumption" /></strong>
            <span className="pricing__formula-plus" aria-hidden="true">+</span>
            <strong className="pricing__formula-maintenance"><TranslatedText i18nKey="pricing_formula_maintenance" /></strong>
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
                    <span className="pricing-card__label"><TranslatedText i18nKey="pricing_provider_label" /></span>
                    <h3><TranslatedText i18nKey={`pricing_${provider.id}_name`} /></h3>
                  </div>
                </div>
                <p className="pricing-card__description"><TranslatedText i18nKey={`pricing_${provider.id}_description`} /></p>

                <div className="pricing-card__services">
                  <span className="pricing-card__section-label"><TranslatedText i18nKey="pricing_services_label" /></span>
                  <ul>
                    {Array.from({ length: provider.services }, (_, index) => (
                      <li key={`${provider.id}-service-${index + 1}`}><TranslatedText i18nKey={`pricing_${provider.id}_service_${index + 1}`} /></li>
                    ))}
                  </ul>
                </div>

                <div className="pricing-card__metric">
                  <span className="pricing-card__section-label"><TranslatedText i18nKey="pricing_metric_label" /></span>
                  <span className="pricing-card__chip"><TranslatedText i18nKey={`pricing_${provider.id}_metric`} /></span>
                </div>

                <p className="pricing-card__demand"><TranslatedText i18nKey={`pricing_${provider.id}_demand`} /></p>
              </article>
            ))}
          </div>

          <div className="pricing__closing">
            <div>
              <span className="eyebrow"><TranslatedText i18nKey="pricing_closing_eyebrow" /></span>
              <h3><TranslatedText i18nKey="pricing_closing_title" /></h3>
              <p><TranslatedText i18nKey="pricing_closing_text" /></p>
            </div>
            <a href="#demo" className="btn btn--primary btn--lg">
              <span><TranslatedText i18nKey="pricing_cta" /></span>
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
            </a>
          </div>
        </div>
      </div>
    </section>

  );
}
