export default function UseCasesSection() {
  return (
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
                <a href="https://whaid.co/blog/whaid-para-ferias-conectar-visitantes-expositores" className="learn-more"><span data-i18n="read_more">Leer más</span> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
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
                <a href="https://whaid.co/blog/whaid-para-centros-comerciales-descubrimiento-visitantes" className="learn-more"><span data-i18n="read_more">Leer más</span> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
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
                <a href="https://whaid.co/blog/whaid-para-universidades-informacion-publica-campus" className="learn-more"><span data-i18n="read_more">Leer más</span> <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
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
  );
}
