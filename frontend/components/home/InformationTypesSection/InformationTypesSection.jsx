export default function InformationTypesSection() {
  return (
    <>
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
            <aside className="asset-callout" aria-labelledby="asset-callout-label">
              <span className="asset-callout__icon" aria-hidden="true">
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M24 16v16M16 24h16M17 17l-5-5M31 17l5-5M17 31l-5 5M31 31l5 5" />
                  <circle cx="24" cy="24" r="6" />
                  <circle cx="10" cy="10" r="4" />
                  <circle cx="38" cy="10" r="4" />
                  <circle cx="10" cy="38" r="4" />
                  <circle cx="38" cy="38" r="4" />
                </svg>
              </span>
              <div className="asset-callout__content">
                <span id="asset-callout-label" className="asset-callout__label" data-i18n="assets_callout_label">Modelo flexible</span>
                <p data-i18n="assets_callout_body">Estas colecciones son solo un punto de partida. Whaid puede adaptarse al modelo de información de cada espacio para representar activos, servicios, personas, documentos, lugares, oportunidades o cualquier dato que necesite ser encontrado, entendido y consultado de forma natural.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <hr className="hr" />
    </>
  );
}
