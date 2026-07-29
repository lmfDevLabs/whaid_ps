"use client";

// The submit feedback mutates the submitted button, so this is intentionally a small client boundary.
function handleDemoSubmit(event) {
  event.preventDefault();
  const button = event.currentTarget.querySelector(".form-submit");
  button.innerHTML = "✓ Solicitud enviada";
  button.style.background = "#18a758";
  button.style.color = "#fff";
}

export default function ContactSection() {
  return (
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
  );
}
