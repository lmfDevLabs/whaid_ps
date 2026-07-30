import TranslatedText from "../../../i18n/TranslatedText";
export default function KeyshotsSection() {
  return (
      <section className="section" id="keyshots">
        <div className="container">
          <div className="section__head reveal">
            <span className="eyebrow">Capacidades clave</span>
            <h2>
              <span><TranslatedText i18nKey="keyshots_title_a" /></span><span className="accent"><TranslatedText i18nKey="keyshots_title_b" /></span><span><TranslatedText i18nKey="keyshots_title_c" /></span>
            </h2>
            <p><TranslatedText i18nKey="keyshots_sub" /></p>
          </div>

          <div className="keyshots">
            {/* #1 */}
            <article className="keyshot reveal">
              <div className="keyshot__num">01 <span aria-hidden="true">/ 04</span></div>
              <div className="keyshot__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </div>
              <h3><TranslatedText i18nKey="k1_title" /></h3>
              <p><TranslatedText i18nKey="k1_body" /></p>
            </article>
            
            {/* #2 */}
            <article className="keyshot reveal">
              <div className="keyshot__num">02 <span aria-hidden="true">/ 04</span></div>
              <div className="keyshot__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
              </div>
              <h3><TranslatedText i18nKey="k2_title" /></h3>
              <p><TranslatedText i18nKey="k2_body" /></p>
            </article>
            
            {/* #3 */}
            <article className="keyshot reveal">
              <div className="keyshot__num">03 <span aria-hidden="true">/ 04</span></div>
              <div className="keyshot__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
              </div>
              <h3><TranslatedText i18nKey="k3_title" /></h3>
              <p><TranslatedText i18nKey="k3_body" /></p>
            </article>
            
            {/* #4 */}
            <article className="keyshot reveal">
              <div className="keyshot__num">04 <span aria-hidden="true">/ 04</span></div>
              <div className="keyshot__icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3><TranslatedText i18nKey="k4_title" /></h3>
              <p><TranslatedText i18nKey="k4_body" /></p>
            </article>
          </div>
        </div>
      </section>
  );
}
