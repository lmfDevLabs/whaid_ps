/* ==========================================================================
   Whaid site — shared JS (nav, theme, i18n, reveal, wa-chat animation)
   ========================================================================== */

// ---------- i18n ----------
const DICT = {
  es: {
    nav_home: 'Home',
    nav_blog: 'Blog',
    nav_product: 'Producto',
    nav_use_cases: 'Casos de uso',
    nav_cta: 'Agendar demo',
    hero_eyebrow: 'Asistente IA sobre WhatsApp',
    hero_title_a: 'Conoce tus ',
    hero_title_b: 'activos',
    hero_title_c: ' a un WhatsApp de distancia.',
    hero_sub: 'Whaid es el asistente conversacional que conecta tus sistemas y responde, en tiempo real, sobre el estado de tus inmuebles, empleados, productos, eventos y más — sin salir de WhatsApp.',
    hero_cta_primary: 'Agendar demo',
    hero_cta_secondary: 'Ver cómo funciona',
    keyshots_title_a: 'Pregúntale a tus datos ',
    keyshots_title_b: 'como le escribes a un colega',
    keyshots_title_c: '.',
    keyshots_sub: 'Cuatro capacidades que convierten WhatsApp en tu panel operativo.',
    k1_title: 'Consulta en lenguaje natural',
    k1_body: 'Pregunta en español por el estado de un activo, una venta, un evento o un arriendo. Whaid traduce tu pregunta a una consulta real.',
    k2_title: 'Conectado a tus sistemas',
    k2_body: 'Se integra con tus ERPs, hojas de cálculo, bases de datos y CRMs. La fuente de verdad sigue siendo tuya — Whaid solo traduce.',
    k3_title: 'Alertas proactivas',
    k3_body: 'Configura umbrales y disparadores. Whaid te escribe cuando algo requiere tu atención, antes de que lo tengas que buscar.',
    k4_title: 'Permisos y auditoría',
    k4_body: 'Cada conversación queda registrada. Define qué rol puede ver qué — la seguridad de tus datos es prioridad.',
    usecases_title_a: 'Hecho para operaciones ',
    usecases_title_b: 'complejas',
    usecases_title_c: '.',
    usecases_sub: 'Tres sectores donde la información sobre activos no puede esperar a un correo.',
    uc1_label: 'Shows y ferias',
    uc1_title: 'Controla el piso de feria en tiempo real.',
    uc1_body: 'Expositores, stands, asistencia y ventas del día consultables desde el celular del organizador. Sin tableros, sin logins extra.',
    uc1_stat_a: 'menos tiempo resolviendo incidencias en piso',
    uc2_label: 'Centros comerciales',
    uc2_title: 'La operación del CC a una conversación.',
    uc2_body: 'Ocupación de locales, estado de contratos, mantenimientos abiertos, tráfico y KPIs por marca. Todo sobre WhatsApp, para gerencia y para comité.',
    uc2_stat_a: 'de indicadores unificados en un solo canal',
    uc3_label: 'Universidades',
    uc3_title: 'Respuestas claras sobre campus y comunidad.',
    uc3_body: 'Aulas, laboratorios, inventarios, docentes, inscripciones. Whaid responde a decanaturas y administración con datos verificados.',
    uc3_stat_a: 'menos tickets a soporte por consultas de estado',
    form_eyebrow: '15 minutos, sin compromiso',
    form_title: '¿Listo para probar Whaid con tus datos?',
    form_sub: 'Agenda una demo con nuestro equipo. Te conectamos a una fuente tuya y verás a Whaid responder en tu WhatsApp el mismo día.',
    form_name: 'Nombre',
    form_last: 'Apellido',
    form_email: 'Correo corporativo',
    form_company: 'Empresa',
    form_role: 'Rol',
    form_size: 'Tamaño del equipo',
    form_submit: 'Agendar demo',
    form_disclaimer: 'No enviamos spam. Solo te contactamos para coordinar la demo.',
    assets_eyebrow: 'Tipos de activos',
    assets_title_a: 'Ocho categorías, ',
    assets_title_b: 'una sola conversación',
    assets_title_c: '.',
    assets_sub: 'Whaid razona sobre los activos que mueven tu negocio. Y suma nuevos conectores cada mes.',
    a1: 'Inmobiliarios',
    a2: 'Shows',
    a3: 'Espacios',
    a4: 'Compañías',
    a5: 'Empleados',
    a6: 'Productos',
    a7: 'Eventos',
    a8: 'Promociones',
    nav_pitch: 'Pitch',
    pitch_eyebrow: 'Pitch · 90 segundos',
    pitch_title: 'Whaid en menos de lo que dura un café.',
    pitch_sub: 'Mira a Whaid resolver un caso real — del WhatsApp del operador a la respuesta verificada.',
    pitch_caption: 'Reproducir pitch oficial',
    panel_eyebrow: 'Vista enriquecida · Piso 2',
    panel_title: '86 stands · 2 incidencias',
    panel_row_a14: 'Stand · sin energía',
    panel_row_b04: 'Stand · POS offline',
    panel_row_b05: 'Stand · operando',
    takelook_eyebrow: 'Take a look',
    takelook_title_a: 'Un vistazo a ',
    takelook_title_b: 'Whaid operando',
    takelook_title_c: '.',
    takelook_sub: 'Así se ve una conversación real entre un operador de feria y Whaid — resolviendo un caso en segundos.',
    footer_tagline: 'El asistente IA que responde por tus activos — desde WhatsApp.',
    footer_product: 'Producto',
    footer_company: 'Compañía',
    footer_legal: 'Legal',
    footer_copy: '© 2026 Whaid. Hecho con cuidado en LatAm.',
    blog_eyebrow: 'Journal',
    blog_title_a: 'Ideas sobre IA, operaciones y ',
    blog_title_b: 'conversación',
    blog_title_c: '.',
    blog_sub: 'Ensayos, casos de estudio y notas técnicas del equipo de Whaid.',
    read_more: 'Leer más',
    read_post: 'Leer post',
    featured: 'Destacado',
    back_to_blog: '← Volver al blog',
    min_read: 'min de lectura',
    share: 'Compartir',
    more_posts: 'Más lecturas',
    toc: 'En este artículo',
  },
  en: {
    nav_home: 'Home',
    nav_blog: 'Blog',
    nav_product: 'Product',
    nav_use_cases: 'Use cases',
    nav_cta: 'Book a demo',
    hero_eyebrow: 'AI assistant on WhatsApp',
    hero_title_a: 'Know your ',
    hero_title_b: 'assets',
    hero_title_c: ' a WhatsApp away.',
    hero_sub: 'Whaid is the conversational assistant that connects your systems and answers, in real time, about the state of your properties, employees, products, events and more — without leaving WhatsApp.',
    hero_cta_primary: 'Book a demo',
    hero_cta_secondary: 'See how it works',
    keyshots_title_a: 'Ask your data ',
    keyshots_title_b: 'like you text a colleague',
    keyshots_title_c: '.',
    keyshots_sub: 'Four capabilities that turn WhatsApp into your operations cockpit.',
    k1_title: 'Natural-language queries',
    k1_body: 'Ask in plain language about an asset, a sale, an event, a lease. Whaid translates your question into a real query.',
    k2_title: 'Connected to your systems',
    k2_body: 'Integrates with your ERPs, spreadsheets, databases and CRMs. Your source of truth stays yours — Whaid just translates.',
    k3_title: 'Proactive alerts',
    k3_body: 'Set thresholds and triggers. Whaid messages you when something needs attention, before you have to go look.',
    k4_title: 'Permissions and audit',
    k4_body: 'Every conversation is logged. Choose who sees what — your data security is the priority.',
    usecases_title_a: 'Built for ',
    usecases_title_b: 'complex',
    usecases_title_c: ' operations.',
    usecases_sub: 'Three sectors where asset information cannot wait for an email thread.',
    uc1_label: 'Shows & fairs',
    uc1_title: 'Run the show floor in real time.',
    uc1_body: 'Exhibitors, booths, attendance and daily sales — queried from the organizer\u2019s phone. No dashboards, no extra logins.',
    uc1_stat_a: 'less time resolving on-floor incidents',
    uc2_label: 'Shopping centers',
    uc2_title: 'Mall operations, one conversation.',
    uc2_body: 'Occupancy, contract status, open maintenance, traffic and per-brand KPIs. All on WhatsApp — for management and committee.',
    uc2_stat_a: 'of KPIs unified in a single channel',
    uc3_label: 'Universities',
    uc3_title: 'Clear answers about campus and community.',
    uc3_body: 'Classrooms, labs, inventories, faculty, enrolment. Whaid responds to deans and administration with verified data.',
    uc3_stat_a: 'fewer support tickets for status questions',
    form_eyebrow: '15 minutes, no strings',
    form_title: 'Ready to try Whaid with your data?',
    form_sub: 'Book a demo with our team. We\u2019ll plug into one of your sources and you\u2019ll see Whaid answering on your WhatsApp the same day.',
    form_name: 'First name',
    form_last: 'Last name',
    form_email: 'Work email',
    form_company: 'Company',
    form_role: 'Role',
    form_size: 'Team size',
    form_submit: 'Book a demo',
    form_disclaimer: 'No spam. We only reach out to schedule the demo.',
    assets_eyebrow: 'Asset types',
    assets_title_a: 'Eight categories, ',
    assets_title_b: 'one conversation',
    assets_title_c: '.',
    assets_sub: 'Whaid reasons about the assets that move your business. New connectors ship every month.',
    a1: 'Real estate',
    a2: 'Shows',
    a3: 'Spaces',
    a4: 'Companies',
    a5: 'Employees',
    a6: 'Products',
    a7: 'Events',
    a8: 'Promotions',
    nav_pitch: 'Pitch',
    pitch_eyebrow: 'Pitch · 90 seconds',
    pitch_title: 'Whaid in less time than a coffee break.',
    pitch_sub: 'Watch Whaid resolve a real case — from the operator’s WhatsApp to a verified answer.',
    pitch_caption: 'Play official pitch',
    panel_eyebrow: 'Enriched view · Floor 2',
    panel_title: '86 booths · 2 incidents',
    panel_row_a14: 'Booth · no power',
    panel_row_b04: 'Booth · POS offline',
    panel_row_b05: 'Booth · running',
    takelook_eyebrow: 'Take a look',
    takelook_title_a: 'A glimpse of ',
    takelook_title_b: 'Whaid at work',
    takelook_title_c: '.',
    takelook_sub: 'Here\u2019s a real conversation between a fair operator and Whaid — resolving a case in seconds.',
    footer_tagline: 'The AI assistant that answers for your assets — from WhatsApp.',
    footer_product: 'Product',
    footer_company: 'Company',
    footer_legal: 'Legal',
    footer_copy: '© 2026 Whaid. Made with care in LatAm.',
    blog_eyebrow: 'Journal',
    blog_title_a: 'Notes on AI, operations and ',
    blog_title_b: 'conversation',
    blog_title_c: '.',
    blog_sub: 'Essays, case studies and technical notes from the Whaid team.',
    read_more: 'Read more',
    read_post: 'Read post',
    featured: 'Featured',
    back_to_blog: '← Back to blog',
    min_read: 'min read',
    share: 'Share',
    more_posts: 'More reading',
    toc: 'In this article',
  },
};

function getLang() {
  return localStorage.getItem('whaid:lang') || 'es';
}
function setLang(l) {
  localStorage.setItem('whaid:lang', l);
  document.documentElement.setAttribute('data-lang', l);
  applyI18n();
}
function t(key) {
  const l = getLang();
  return (DICT[l] && DICT[l][key]) || (DICT.es[key] || key);
}
function applyI18n() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.getAttribute('data-i18n'));
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.setAttribute('placeholder', t(el.getAttribute('data-i18n-placeholder')));
  });
  // Update lang-switch button label
  const ls = document.getElementById('lang-switch');
  if (ls) ls.textContent = getLang() === 'es' ? 'EN' : 'ES';
}

// ---------- theme ----------
function getTheme() {
  return localStorage.getItem('whaid:theme') || 'light';
}
function setTheme(t) {
  localStorage.setItem('whaid:theme', t);
  document.documentElement.setAttribute('data-theme', t);
  const btn = document.getElementById('theme-switch');
  if (btn) btn.setAttribute('aria-label', t === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro');
}

// ---------- init early ----------
(function initEarly() {
  document.documentElement.setAttribute('data-theme', getTheme());
  document.documentElement.setAttribute('data-lang', getLang());
})();

// ---------- reveal on scroll ----------
function initReveal() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}

// ---------- nav wiring ----------
function wireChrome() {
  const ls = document.getElementById('lang-switch');
  if (ls) ls.addEventListener('click', () => setLang(getLang() === 'es' ? 'en' : 'es'));
  const ts = document.getElementById('theme-switch');
  if (ts) ts.addEventListener('click', () => setTheme(getTheme() === 'dark' ? 'light' : 'dark'));
  const menuBtn = document.getElementById('menu-toggle');
  const menu = document.getElementById('nav-menu');
  if (menuBtn && menu) {
    menuBtn.addEventListener('click', () => {
      const open = menu.classList.toggle('is-open');
      menuBtn.setAttribute('aria-expanded', open);
    });
  }
  // Scroll state on nav
  const nav = document.querySelector('.nav');
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 10) nav.classList.add('is-scrolled');
      else nav.classList.remove('is-scrolled');
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  applyI18n();
  wireChrome();
  initReveal();
  if (typeof initWAChat === 'function') initWAChat();
});
