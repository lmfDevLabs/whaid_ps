/* Whaid — WhatsApp chat animation
   Animates two phones on the Home page:
   - #wa-body-hero: scripted demo (shows/ferias) + link-card → web panel reveal
   - #wa-body-takelook: the "take a look" extended convo
*/

const HERO_SCRIPT_ES = [
  { 
    t: 'out', 
    text: 'Whaid, estoy en <b>ExpoAndina</b> y busco marcas de ropa sostenible.', 
    time: '09:14' 
  },
  { t: 'typing', ms: 900 },
  { 
    t: 'in', 
    text: 'Encontré varias opciones relacionadas con <b>moda sostenible</b>, textiles reciclados y producción responsable dentro de ExpoAndina.<br><br><span class="pill">EcoTela · Pabellón 2</span><span class="pill">VerdeWear · Stand B-14</span><span class="pill">Andes Fibers · Zona Diseño</span>', 
    time: '09:14' 
  },
  { 
    t: 'out', 
    text: '¿Cuál está más cerca de la entrada principal?', 
    time: '09:14' 
  },
  { t: 'typing', ms: 1100 },
  { 
    t: 'in', 
    text: 'La opción más cercana es <b>EcoTela</b>, ubicada en el <b>Pabellón 2</b>, a unos pocos minutos caminando desde la entrada principal.', 
    time: '09:15' 
  },
  { t: 'typing', ms: 800 },
  { 
    t: 'in', 
    text: 'También encontré una promoción activa y una charla relacionada con materiales sostenibles. Te dejo una vista visual con las opciones 👇', 
    time: '09:15' 
  },
  {
    t: 'linkcard',
    time: '09:15',
    title: 'Opciones sostenibles en ExpoAndina',
    domain: 'whaid.app',
    url: 'whaid.app/expoandina/moda-sostenible',
    desc: 'Marcas, stands, promociones y actividades relacionadas con moda sostenible dentro del evento.',
    chips: [
      { k: 'Marcas', v: '3' },
      { k: 'Promos', v: '1' },
      { k: 'Charla', v: 'Hoy' }
    ],
  },
  { t: 'panel-open', ms: 600 },
  { t: 'wait', ms: 5200 },
  { t: 'panel-close' },
];

const HERO_SCRIPT_EN = [
  { 
    t: 'out', 
    text: 'Whaid, I’m at <b>ExpoAndina</b> and I’m looking for sustainable fashion brands.', 
    time: '09:14' 
  },
  { t: 'typing', ms: 900 },
  { 
    t: 'in', 
    text: 'I found several options related to <b>sustainable fashion</b>, recycled textiles and responsible production inside ExpoAndina.<br><br><span class="pill">EcoTela · Pavilion 2</span><span class="pill">VerdeWear · Booth B-14</span><span class="pill">Andes Fibers · Design Zone</span>', 
    time: '09:14' 
  },
  { 
    t: 'out', 
    text: 'Which one is closest to the main entrance?', 
    time: '09:14' 
  },
  { t: 'typing', ms: 1100 },
  { 
    t: 'in', 
    text: 'The closest option is <b>EcoTela</b>, located in <b>Pavilion 2</b>, just a short walk from the main entrance.', 
    time: '09:15' 
  },
  { t: 'typing', ms: 800 },
  { 
    t: 'in', 
    text: 'I also found an active promotion and a talk related to sustainable materials. Here’s a visual view with the options 👇', 
    time: '09:15' 
  },
  {
    t: 'linkcard',
    time: '09:15',
    title: 'Sustainable options at ExpoAndina',
    domain: 'whaid.app',
    url: 'whaid.app/expoandina/sustainable-fashion',
    desc: 'Brands, booths, promotions and activities related to sustainable fashion inside the event.',
    chips: [
      { k: 'Brands', v: '3' },
      { k: 'Promos', v: '1' },
      { k: 'Talk', v: 'Today' }
    ],
  },
  { t: 'panel-open', ms: 600 },
  { t: 'wait', ms: 5200 },
  { t: 'panel-close' },
];

const TAKELOOK_SCRIPT_ES = [
  { 
    t: 'out', 
    text: 'Hola Whaid 👋 estoy en la feria y quiero ver qué actividades hay para hacer ahora.', 
    time: '14:28' 
  },
  { t: 'typing', ms: 800 },
  { 
    t: 'in', 
    text: '¡Hola! Para este momento en <b>ExpoAndina</b> encontré actividades abiertas al público y algunas recomendadas según lo que está disponible hoy.', 
    time: '14:28' 
  },
  { 
    t: 'in', 
    text: '<b>Actividades disponibles ahora</b><br>• Charla: <b>Materiales inteligentes</b> · Auditorio 1<br>• Demostración: <b>Textiles reciclados</b> · Zona Diseño<br>• Recorrido: <b>Nuevas marcas emergentes</b> · Pabellón 3<br><br><span class="pill">3 opciones activas</span>', 
    time: '14:28' 
  },
  { 
    t: 'out', 
    text: 'Me interesa la de <b>textiles reciclados</b>. ¿Dónde queda?', 
    time: '14:29' 
  },
  { t: 'typing', ms: 1100 },
  { 
    t: 'in', 
    text: 'La demostración de <b>textiles reciclados</b> está en la <b>Zona Diseño</b>, cerca del Pabellón 2. Según la información del evento, estará activa hasta las 15:30.', 
    time: '14:29' 
  },
  { 
    t: 'out', 
    text: '¿Hay alguna marca relacionada que pueda visitar después?', 
    time: '14:30' 
  },
  { 
    t: 'in', 
    text: 'Sí. Puedes visitar <b>EcoTela</b> y <b>Andes Fibers</b>. Ambas aparecen relacionadas con materiales sostenibles y producción textil responsable. ✅', 
    time: '14:30' 
  },
];

const TAKELOOK_SCRIPT_EN = [
  { 
    t: 'out', 
    text: 'Hey Whaid 👋 I’m at the fair and I want to see what activities are happening now.', 
    time: '14:28' 
  },
  { t: 'typing', ms: 800 },
  { 
    t: 'in', 
    text: 'Hi! For this moment at <b>ExpoAndina</b>, I found public activities and a few recommendations based on what is available today.', 
    time: '14:28' 
  },
  { 
    t: 'in', 
    text: '<b>Activities available now</b><br>• Talk: <b>Smart materials</b> · Auditorium 1<br>• Demo: <b>Recycled textiles</b> · Design Zone<br>• Tour: <b>Emerging brands</b> · Pavilion 3<br><br><span class="pill">3 active options</span>', 
    time: '14:28' 
  },
  { 
    t: 'out', 
    text: 'I’m interested in <b>recycled textiles</b>. Where is it?', 
    time: '14:29' 
  },
  { t: 'typing', ms: 1100 },
  { 
    t: 'in', 
    text: 'The <b>recycled textiles</b> demo is in the <b>Design Zone</b>, near Pavilion 2. According to the event information, it will be active until 3:30 PM.', 
    time: '14:29' 
  },
  { 
    t: 'out', 
    text: 'Are there any related brands I can visit after that?', 
    time: '14:30' 
  },
  { 
    t: 'in', 
    text: 'Yes. You can visit <b>EcoTela</b> and <b>Andes Fibers</b>. Both are related to sustainable materials and responsible textile production. ✅', 
    time: '14:30' 
  },
];

function appendMsg(body, m) {
  const el = document.createElement('div');
  el.className = 'wa-msg ' + (m.t === 'in' ? 'wa-msg--in' : 'wa-msg--out');
  const check = m.t === 'out' ? '<span class="check">✓✓</span>' : '';
  el.innerHTML = m.text + '<span class="wa-msg__time">' + (m.time || '') + ' ' + check + '</span>';
  body.appendChild(el);
  requestAnimationFrame(() => el.classList.add('is-shown'));
  body.scrollTop = body.scrollHeight;
  return el;
}
function appendTyping(body) {
  const el = document.createElement('div');
  el.className = 'wa-typing';
  el.innerHTML = '<span></span><span></span><span></span>';
  body.appendChild(el);
  body.scrollTop = body.scrollHeight;
  return el;
}
function appendLinkCard(body, m) {
  const el = document.createElement('div');
  el.className = 'wa-msg wa-msg--card';
  const chipsHtml = (m.chips || []).map(c =>
    '<div class="wa-link-card__chip"><span class="k">' + c.k + '</span><span class="v">' + c.v + '</span></div>'
  ).join('');
  el.innerHTML =
    '<div class="wa-link-card__preview">' +
      '<span class="wa-link-card__domain">' + (m.domain || 'whaid.app') + '</span>' +
      '<div class="wa-link-card__title">' + m.title + '</div>' +
      '<div class="wa-link-card__row">' + chipsHtml + '</div>' +
    '</div>' +
    '<div class="wa-link-card__meta">' +
      '<span class="url">' + (m.url || 'whaid.app') + '</span>' +
      '<span class="desc">' + (m.desc || '') + '</span>' +
    '</div>' +
    '<span class="wa-msg__time">' + (m.time || '') + '</span>';
  body.appendChild(el);
  requestAnimationFrame(() => el.classList.add('is-shown'));
  body.scrollTop = body.scrollHeight;
  return el;
}
function wait(ms) { return new Promise(r => setTimeout(r, ms)); }

async function runScript(body, script, statusEl, panelEl) {
  body.querySelectorAll('.wa-msg, .wa-typing').forEach(e => e.remove());
  if (panelEl) panelEl.classList.remove('is-shown');
  let lastCard = null;

  for (const step of script) {
    if (step.t === 'typing') {
      if (statusEl) statusEl.textContent = getLang() === 'en' ? 'typing…' : 'escribiendo…';
      const tp = appendTyping(body);
      await wait(step.ms);
      tp.remove();
      if (statusEl) statusEl.textContent = getLang() === 'en' ? 'online' : 'en línea';
    } else if (step.t === 'linkcard') {
      lastCard = appendLinkCard(body, step);
      await wait(1200);
    } else if (step.t === 'panel-open') {
      // simulate tap on the card, then reveal external panel
      if (lastCard) lastCard.classList.add('is-tapped');
      await wait(step.ms || 500);
      if (panelEl) panelEl.classList.add('is-shown');
    } else if (step.t === 'panel-close') {
      if (panelEl) panelEl.classList.remove('is-shown');
      if (lastCard) lastCard.classList.remove('is-tapped');
      await wait(500);
    } else if (step.t === 'wait') {
      await wait(step.ms || 1000);
    } else {
      appendMsg(body, step);
      await wait(step.t === 'in' ? 1100 : 700);
    }
  }
}

function initWAChat() {
  const heroBody = document.getElementById('wa-body-hero');
  const takeBody = document.getElementById('wa-body-takelook');
  const heroStatus = document.getElementById('wa-status');
  const takeStatus = document.getElementById('wa-status-2');
  const heroPanel = document.getElementById('web-panel-hero');

  const runAll = async () => {
    const lang = getLang();
    if (heroBody) {
      const loop = async () => {
        await wait(600);
        await runScript(heroBody, getLang() === 'en' ? HERO_SCRIPT_EN : HERO_SCRIPT_ES, heroStatus, heroPanel);
        await wait(3500);
        loop();
      };
      loop();
    }
    if (takeBody) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach(async (e) => {
          if (e.isIntersecting) {
            io.disconnect();
            const loop = async () => {
              await runScript(takeBody, getLang() === 'en' ? TAKELOOK_SCRIPT_EN : TAKELOOK_SCRIPT_ES, takeStatus);
              await wait(6000);
              loop();
            };
            loop();
          }
        });
      }, { threshold: 0.3 });
      io.observe(takeBody);
    }
  };

  runAll();

  const ls = document.getElementById('lang-switch');
  if (ls) ls.addEventListener('click', () => {
    setTimeout(() => {
      if (heroBody) runScript(heroBody, getLang() === 'en' ? HERO_SCRIPT_EN : HERO_SCRIPT_ES, heroStatus, heroPanel);
      if (takeBody) runScript(takeBody, getLang() === 'en' ? TAKELOOK_SCRIPT_EN : TAKELOOK_SCRIPT_ES, takeStatus);
    }, 150);
  });
}
