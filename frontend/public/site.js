/* ==========================================================================
   Whaid site — shared JS kept for viewport reveal animations and WA chat boot.
   React owns language, theme, navigation state, and content rendering.
   ========================================================================== */

function initReveal() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {threshold: 0.12, rootMargin: '0px 0px -40px 0px'});

  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
}

function initSite() {
  initReveal();
  if (typeof initWAChat === 'function') initWAChat();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSite, {once: true});
} else {
  initSite();
}
