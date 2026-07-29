export default function KeyshotsSection() {
  return (
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
  );
}
