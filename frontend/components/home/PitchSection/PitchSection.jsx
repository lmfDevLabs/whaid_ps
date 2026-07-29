export default function PitchSection() {
  return (
      <section className="video-pitch" id="pitch" aria-label="Video pitch">
        <div className="container video-pitch__inner">
          <div className="video-pitch__copy">
            <span className="eyebrow video-pitch__eyebrow" data-i18n="pitch_eyebrow">Pitch · 90 segundos</span>
            <h3 data-i18n="pitch_title">Whaid en menos de lo que dura un café.</h3>
            <p data-i18n="pitch_sub">Mira a Whaid resolver un caso real — del WhatsApp del operador a la respuesta verificada.</p>
          </div>
          <a className="video-pitch__player" href="#" data-pitch="youtube" aria-label="Reproducir video pitch de Whaid">
            <div className="video-pitch__thumb">
              <span className="video-pitch__chrome">
                <span className="video-pitch__dots"><span></span><span></span><span></span></span>
                <span className="video-pitch__url">youtube.com/@whaid</span>
              </span>
              <span className="video-pitch__badge">YT</span>
              <span className="video-pitch__duration">01:24</span>
              <span className="video-pitch__play" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor"><polygon points="8,5 20,12 8,19"/></svg>
              </span>
              <span className="video-pitch__caption" data-i18n="pitch_caption">Reproducir pitch oficial</span>
            </div>
          </a>
        </div>
      </section>
  );
}
