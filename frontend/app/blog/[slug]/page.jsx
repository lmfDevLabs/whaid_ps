export default function BlogPostPage({ params }) {
  void params?.slug;

  return (
    <>
{/* NAV */}
<nav className="nav" aria-label="Principal">
  <div className="nav__inner">
    <a href="/" className="nav__logo" aria-label="Whaid">
      <img src="/assets/whaid-logo-nav.png" alt="Whaid" />
    </a>
    <div className="nav__links" id="nav-menu">
      <a href="/" data-i18n="nav_home">Home</a>
      <a href="/#keyshots" data-i18n="nav_product">Producto</a>
      <a href="/#usecases" data-i18n="nav_use_cases">Casos de uso</a>
      <a href="/blog" aria-current="page" data-i18n="nav_blog">Blog</a>
    </div>
    <div className="nav__actions">
      <button className="chip-btn" id="lang-switch" aria-label="Cambiar idioma">EN</button>
      <button className="chip-btn" id="theme-switch" aria-label="Cambiar tema">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
      </button>
      <a href="/#demo" className="btn btn--primary btn--sm"><span data-i18n="nav_cta">Agendar demo</span></a>
      <button className="menu-toggle" id="menu-toggle" aria-label="Menú" aria-expanded="false"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><line x1="4" y1="7" x2="20" y2="7"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="4" y1="17" x2="20" y2="17"/></svg></button>
    </div>
  </div>
</nav>

{/* POST HEADER */}
<header className="post-header">
  <div className="post-header__inner">
    <a href="/blog" className="post-back">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
      <span data-i18n="back_to_blog">Volver al blog</span>
    </a>

    <div className="post-meta">
      <span className="post-meta__tag">Producto</span>
      <span>20 MAR 2026</span>
      <span className="dot-sep"></span>
      <span>12 <span data-i18n="min_read">min de lectura</span></span>
    </div>

    <h1 className="post-title">
      Por qué elegimos <span className="accent">WhatsApp</span> como interfaz para datos operativos.
    </h1>

    <p className="post-lede">La conversación siempre ganó al tablero. Cuando un gerente de feria pregunta "¿cómo vamos?", no quiere un login — quiere una respuesta. Así nos dimos cuenta de que el canal ya existía; solo faltaba el asistente que entendiera los datos.</p>

    <div className="post-author">
      <div className="post-author__avatar">MC</div>
      <div>
        <div className="post-author__name">Martín Castellanos</div>
        <div className="post-author__role">Co-fundador · Whaid</div>
      </div>
    </div>
  </div>
</header>

{/* HERO IMAGE */}
<div className="post-hero-img">
  <div className="post-hero-img__inner">
    <div className="post-hero-img__glyph">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
      </svg>
    </div>
  </div>
</div>

{/* BODY: 2-column */}
<article className="post-body-wrap">
  <div className="post-body">

    <p>En 2023, mientras acompañábamos la operación de una feria comercial en Bogotá, notamos un patrón incómodo. El gerente de piso no miraba el tablero que habíamos construido. Lo que hacía — con religiosa insistencia — era abrir WhatsApp y preguntar al coordinador de cada zona cómo iban las cosas. Respuestas, preguntas de seguimiento, foto del stand, dos stickers, listo.</p>

    <p>El tablero había costado cuatro meses de trabajo. WhatsApp no costaba nada. Y funcionaba mejor. Ese fue el momento en el que decidimos dejar de construir tableros para empezar a construir respuestas.</p>

    <p>La información operativa — la que de verdad se usa para decidir — no vive en dashboards. Vive en conversaciones. Está atrapada entre turnos, radios, correos reenviados y planillas que nadie lee. El problema no es la falta de datos; es el costo de extraerlos cuando se los necesita.</p>

    <p>Esa es la pregunta que nos hicimos: ¿y si el sistema al que se le pregunta fuera el mismo en el que ya sabemos preguntar? ¿Y si en lugar de obligar al gerente a aprender tu dashboard, le escribieras por WhatsApp?</p>

    <h2 className="post-h2">El canal no estaba roto — <span className="accent">faltaba el asistente.</span></h2>

    <p>WhatsApp tiene propiedades que ningún dashboard puede replicar. Está abierto. Ya está instalado. La notificación llega. No requiere onboarding. Se usa con una sola mano, en el piso, bajo el sol, con audio si hace falta. Para el 80% de las consultas operativas en LatAm, es el mejor canal que existe — y además, es el canal en el que ya están teniendo la conversación.</p>

    <p>Lo que no existía era un asistente que entendiera los datos de la empresa. Que pudiera razonar sobre ellos, validar permisos, traducir preguntas en lenguaje natural a consultas reales, y devolver una respuesta que pareciera escrita por un colega — corta, útil, accionable.</p>

    <div className="post-quote">
      El mejor tablero es el que no existe porque alguien ya respondió la pregunta.
      <cite>— Cuaderno interno, abril 2024</cite>
    </div>

    <p>Al principio pensamos que el reto era técnico: conectar ERPs, CRMs, hojas, bases de datos, obligar al LLM a comportarse. Lo fue. Pero el reto más profundo fue aceptar una idea incómoda: el usuario no quiere usar tu producto. Quiere una respuesta. Cuanto menos dure la interacción, mejor la experiencia.</p>

    <p>Así que diseñamos Whaid para ser lo más invisible posible. No hay app. No hay login. No hay una "experiencia de usuario" en el sentido clásico. Hay un número de WhatsApp, una pregunta y una respuesta. Todo lo demás — el modelo, los conectores, las validaciones — es nuestro problema, no del usuario.</p>

    <h2 className="post-h2">Lo que aprendimos en los primeros <span className="accent">12 meses.</span></h2>

    <div className="post-image-pair">
      <div className="post-image">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
        <span className="post-image__caption">Fig. 1 — Operación en piso, conversación como interfaz</span>
      </div>
      <div className="post-image">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>
        <span className="post-image__caption">Fig. 2 — Tiempo promedio a primera respuesta</span>
      </div>
    </div>

    <p>Lo primero fue entender que la gente no pregunta como escribe un SQL. Pregunta como le pregunta a un colega: "¿y el stand B-04 qué pasa?", "¿cuánto vendimos hoy?", "¿quién está de turno en la zona sur?". Hay contexto implícito en cada frase — el día actual, la feria en curso, la zona asignada al que pregunta. El asistente tiene que traer ese contexto de vuelta.</p>

    <p>Lo segundo fue que las respuestas tienen que ser honestas sobre su incertidumbre. Si Whaid no puede responder con confianza, tiene que decirlo — y ofrecer la pregunta que sí puede responder. La alucinación en un contexto operativo no es un inconveniente; es una mentira que cuesta dinero.</p>

    <ul className="post-list">
      <li>Las preguntas más útiles son cortas. El 68% tiene menos de 12 palabras.</li>
      <li>El 40% de las consultas son de seguimiento — el contexto de la conversación importa tanto como los datos.</li>
      <li>Los audios de voz aparecen con fuerza en operación de campo. Diseñamos para eso desde el día uno.</li>
      <li>El tablero nunca desaparece — convive con el chat. La conversación lo vuelve innecesario para el 80% de los casos.</li>
    </ul>

    <h2 className="post-h2">Lo que viene.</h2>

    <p>Estamos recién empezando. El modelo conversacional que construimos sobre WhatsApp es el primer paso — nuestro norte es que cualquier persona en una organización pueda preguntar por el estado de un activo, una operación, un contrato, y obtener una respuesta en segundos, sin importar el sistema de origen.</p>

    <p>La parte hermosa es que el canal no lo inventamos nosotros. Ya estaba. Solo necesitaba un asistente que entendiera qué tenías que responder. Eso es Whaid. Gracias por leer hasta acá.</p>
  </div>
</article>

{/* SHARE */}
<div className="post-footer">
  <div className="post-share">
    <span className="post-share__label" data-i18n="share">Compartir</span>
    <a href="#" aria-label="Twitter"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
    <a href="#" aria-label="LinkedIn"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14M8.339 18.339v-8.68H5.666v8.68h2.673zM7.003 8.476c.858 0 1.554-.71 1.554-1.568a1.554 1.554 0 1 0-3.108 0c0 .858.696 1.568 1.554 1.568zm11.335 9.863v-4.757c0-2.317-.5-4.098-3.208-4.098-1.3 0-2.172.713-2.528 1.389h-.036v-1.174H9.998v8.64h2.673v-4.277c0-1.125.214-2.214 1.609-2.214 1.374 0 1.392 1.286 1.392 2.286v4.205h2.666z"/></svg></a>
    <a href="#" aria-label="WhatsApp"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347"/></svg></a>
    <a href="#" aria-label="Copy link"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg></a>
  </div>
  <a href="/#demo" className="btn btn--primary btn--sm">
    <span>Probar Whaid</span>
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
  </a>
</div>

{/* RELATED */}
<section className="related-posts">
  <div className="container">
    <div className="related-posts__head">
      <div>
        <span className="eyebrow" data-i18n="more_posts">Más lecturas</span>
        <h2>Sigue con <span className="accent">estos tres</span>.</h2>
      </div>
      <a href="/blog" className="learn-more">Ver todo el blog <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
    </div>
    <div className="related-grid">
      <a href="/blog/test" className="post-card" style={{color: "inherit", textDecoration: "none"}}>
        <div className="post-card__cover">
          <span className="post-card__cover-badge">Caso de estudio</span>
          <div className="post-card__cover-glyph">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
          </div>
        </div>
        <div className="post-card__meta"><span>Casos</span><span className="dot-sep"></span><span>6 min</span></div>
        <h3 className="post-card__title">ExpoAndina bajó 43% sus tiempos de respuesta.</h3>
        <p className="post-card__excerpt">De radios y planillas a un chat — un caso real de ferias.</p>
      </a>
      <a href="/blog/test" className="post-card" style={{color: "inherit", textDecoration: "none"}}>
        <div className="post-card__cover">
          <span className="post-card__cover-badge">IA &amp; LLMs</span>
          <div className="post-card__cover-glyph">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6"/></svg>
          </div>
        </div>
        <div className="post-card__meta"><span>IA</span><span className="dot-sep"></span><span>8 min</span></div>
        <h3 className="post-card__title">Cómo mantenemos al LLM honesto.</h3>
        <p className="post-card__excerpt">RAG no basta. Validación cruzada de contexto y permisos.</p>
      </a>
      <a href="/blog/test" className="post-card" style={{color: "inherit", textDecoration: "none"}}>
        <div className="post-card__cover">
          <span className="post-card__cover-badge">Operaciones</span>
          <div className="post-card__cover-glyph">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
          </div>
        </div>
        <div className="post-card__meta"><span>Ops</span><span className="dot-sep"></span><span>7 min</span></div>
        <h3 className="post-card__title">Dashboard vs. respuesta.</h3>
        <p className="post-card__excerpt">Un gerente no mira gráficos a las 9pm. Escribe un mensaje.</p>
      </a>
    </div>
  </div>
</section>

{/* FOOTER */}
<footer className="footer">
  <div className="container">
    <div className="footer__grid">
      <div>
        <div className="footer__logo">
          <img src="/assets/whaid-logo.png" alt="Whaid" />
        </div>
        <p className="footer__tag" data-i18n="footer_tagline">El asistente IA que responde por tus activos — desde WhatsApp.</p>
      </div>
      <div className="footer__col">
        <h4 data-i18n="footer_product">Producto</h4>
        <ul>
          <li><a href="/#keyshots">Capacidades</a></li>
          <li><a href="/#usecases">Casos de uso</a></li>
          <li><a href="#">Integraciones</a></li>
          <li><a href="#">Seguridad</a></li>
          <li><a href="#">Pricing</a></li>
        </ul>
      </div>
      <div className="footer__col">
        <h4 data-i18n="footer_company">Compañía</h4>
        <ul>
          <li><a href="/blog">Blog</a></li>
          <li><a href="#">Sobre nosotros</a></li>
          <li><a href="#">Contacto</a></li>
          <li><a href="#">Careers</a></li>
        </ul>
      </div>
      <div className="footer__col">
        <h4 data-i18n="footer_legal">Legal</h4>
        <ul>
          <li><a href="#">Privacidad</a></li>
          <li><a href="#">Términos</a></li>
          <li><a href="#">Cookies</a></li>
          <li><a href="#">DPA</a></li>
        </ul>
      </div>
    </div>
    <div className="footer__bottom">
      <span className="footer__copy" data-i18n="footer_copy">© 2026 Whaid. Hecho con cuidado en LatAm.</span>
      <div className="footer__socials">
        <a className="footer__social" href="#" aria-label="Twitter / X"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
        <a className="footer__social" href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14M8.339 18.339v-8.68H5.666v8.68h2.673zM7.003 8.476c.858 0 1.554-.71 1.554-1.568a1.554 1.554 0 1 0-3.108 0c0 .858.696 1.568 1.554 1.568zm11.335 9.863v-4.757c0-2.317-.5-4.098-3.208-4.098-1.3 0-2.172.713-2.528 1.389h-.036v-1.174H9.998v8.64h2.673v-4.277c0-1.125.214-2.214 1.609-2.214 1.374 0 1.392 1.286 1.392 2.286v4.205h2.666z"/></svg></a>
        <a className="footer__social" href="#" aria-label="WhatsApp"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0 0 20.464 3.488"/></svg></a>
      </div>
    </div>
  </div>
</footer>
    </>
  );
}
