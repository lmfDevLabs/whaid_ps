import TranslatedText from "../../../i18n/TranslatedText";
import WhaidVisualResponseCard from "../WhaidVisualResponseCard";

export default function TakeALookSection() {
  return (
      <section className="takelook" id="takelook">
        <div className="section__head reveal" style={{color: "#fff"}}>
          <span className="eyebrow" style={{color: "var(--c-lime)"}}><TranslatedText i18nKey="takelook_eyebrow" /></span>
          <h2 style={{color: "#fff"}}>
            <span><TranslatedText i18nKey="takelook_title_a" /></span><span className="accent"><TranslatedText i18nKey="takelook_title_b" /></span><span><TranslatedText i18nKey="takelook_title_c" /></span>
          </h2>
          <p style={{color: "var(--c-muted-dark)"}}><TranslatedText i18nKey="takelook_sub" /></p>
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
            <div className="takelook__note takelook__note--expanded">
              <div className="takelook__note-label">05 · Ampliación</div>
              <h4>URLs extendidas</h4>
              <p>Se ofrecen enlaces dinámicos y seguros, con información más completa acorde al contexto de la conversación</p>
              <WhaidVisualResponseCard
                className="web-panel--inline takelook__visual-card"
                url="whaid.app/evento/opciones"
                urlKey="takelook_visual_url"
                eyebrowKey="takelook_visual_eyebrow"
                eyebrow="VISTA VISUAL · OPCIONES ENCONTRADAS"
                titleKey="takelook_visual_title"
                title="3 opciones relevantes"
                rows={[
                  { id: "A", idKey: "takelook_visual_row_1_id", nameKey: "takelook_visual_row_1", name: "Auditorio A · Charla recomendada", tone: "ok" },
                  { id: "B-12", idKey: "takelook_visual_row_2_id", nameKey: "takelook_visual_row_2", name: "Stand B-12 · Innovación", tone: "warn" },
                  { id: "P2", idKey: "takelook_visual_row_3_id", nameKey: "takelook_visual_row_3", name: "Piso 2 · Networking", tone: "ok" },
                ]}
              />
            </div>
          </div>
        </div>
      </section>
  );
}
