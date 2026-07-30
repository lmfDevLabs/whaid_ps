/* ==========================================================================
   Whaid site — shared JS (nav, theme, reveal, wa-chat animation)
   ========================================================================== */

// Language content and selection are controlled by React (frontend/i18n).

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

function initSite() {
  wireChrome();
  initReveal();
  if (typeof initWAChat === 'function') initWAChat();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSite);
} else {
  initSite();
}
