"use client";

import {useState} from "react";
import TranslatedText from "../../../i18n/TranslatedText";
import {trackAnalyticsEvent} from "../../../lib/analytics";

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleDemoSubmit(event) {
    event.preventDefault();
    setIsSubmitted(true);
    trackAnalyticsEvent("contact_form_submit");
  }

  return (
    <section className="section" id="demo">
      <div className="container">
        <div className="demo reveal">
          <div className="demo__content">
            <span className="eyebrow"><TranslatedText i18nKey="form_eyebrow" /></span>
            <h2><TranslatedText i18nKey="form_title" /></h2>
            <p><TranslatedText i18nKey="form_sub" /></p>
            <ul>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> 15 minutos de tu tiempo</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Conoce nuestro demo funcional</li>
              <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Obten un plan de activación claro al final de la llamada solo para ti</li>
            </ul>
          </div>

          <form className="demo__form" onSubmit={handleDemoSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label><TranslatedText i18nKey="form_name" /></label>
                <input type="text" required placeholder="Ana" />
              </div>
              <div className="form-group">
                <label><TranslatedText i18nKey="form_last" /></label>
                <input type="text" required placeholder="Martínez" />
              </div>
            </div>
            <div className="form-single form-group">
              <label><TranslatedText i18nKey="form_email" /></label>
              <input type="email" required placeholder="ana@tuempresa.com" />
            </div>
            <div className="form-row">
              <div className="form-group">
                <label><TranslatedText i18nKey="form_company" /></label>
                <input type="text" required placeholder="Tuya S.A.S." />
              </div>
              <div className="form-group">
                <label><TranslatedText i18nKey="form_size" /></label>
                <select>
                  <option>1–10</option>
                  <option>11–50</option>
                  <option>51–200</option>
                  <option>200+</option>
                </select>
              </div>
            </div>
            <button type="submit" className={`form-submit${isSubmitted ? " form-submit--success" : ""}`}>
              {isSubmitted ? (
                <span>✓ Solicitud enviada</span>
              ) : (
                <>
                  <span><TranslatedText i18nKey="form_submit" /></span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                </>
              )}
            </button>
            <p className="form-disclaimer"><TranslatedText i18nKey="form_disclaimer" /></p>
          </form>
        </div>
      </div>
    </section>
  );
}
