/* Whaid — WhatsApp chat animation
   Animates two phones on the Home page:
   - #wa-body-hero: scripted demo (shows/ferias) + link-card → web panel reveal
   - #wa-body-takelook: the "take a look" extended convo
*/

const HERO_SCRIPT_ES = [
  { t: 'out', text: 'Whaid, ¿cómo va el <b>piso 2</b> de la feria?', time: '09:14' },
  { t: 'typing', ms: 900 },
  { t: 'in', text: '<b>Piso 2 · ExpoAndina</b> — 86 stands activos, 2 con incidencias abiertas.<br><br><span class="pill">A-14 · sin energía</span><span class="pill pill--bad">B-04 · offline</span>', time: '09:14' },
  { t: 'out', text: '¿Quién atiende B-04?', time: '09:14' },
  { t: 'typing', ms: 1100 },
  { t: 'in', text: 'Asignado a <b>Laura P.</b> (operación piso). ETA: 6 min.', time: '09:15' },
  { t: 'typing', ms: 800 },
  { t: 'in', text: '¿Quieres ver el detalle del piso? Te dejo la vista enriquecida 👇', time: '09:15' },
  {
    t: 'linkcard',
    time: '09:15',
    title: 'Piso 2 · ExpoAndina — vista en vivo',
    domain: 'whaid.app',
    url: 'whaid.app/expoandina/piso-2',
    desc: 'Stands, incidencias y ETA en tiempo real. Acceso seguro con tu sesión.',
    chips: [
      { k: 'Stands', v: '86' },
      { k: 'Alertas', v: '2' },
      { k: 'ETA', v: '6m' }
    ],
  },
  { t: 'panel-open', ms: 600 },
  { t: 'wait', ms: 5200 },
  { t: 'panel-close' },
];

const HERO_SCRIPT_EN = [
  { t: 'out', text: 'Whaid, how\u2019s <b>floor 2</b> looking?', time: '09:14' },
  { t: 'typing', ms: 900 },
  { t: 'in', text: '<b>Floor 2 · ExpoAndina</b> — 86 booths active, 2 with open incidents.<br><br><span class="pill">A-14 · no power</span><span class="pill pill--bad">B-04 · offline</span>', time: '09:14' },
  { t: 'out', text: 'Who\u2019s on B-04?', time: '09:14' },
  { t: 'typing', ms: 1100 },
  { t: 'in', text: 'Assigned to <b>Laura P.</b> (floor ops). ETA: 6 min.', time: '09:15' },
  { t: 'typing', ms: 800 },
  { t: 'in', text: 'Want the full floor view? Here\u2019s the enriched link 👇', time: '09:15' },
  {
    t: 'linkcard',
    time: '09:15',
    title: 'Floor 2 · ExpoAndina — live view',
    domain: 'whaid.app',
    url: 'whaid.app/expoandina/floor-2',
    desc: 'Booths, incidents and ETA in real time. Secure access with your session.',
    chips: [
      { k: 'Booths', v: '86' },
      { k: 'Alerts', v: '2' },
      { k: 'ETA', v: '6m' }
    ],
  },
  { t: 'panel-open', ms: 600 },
  { t: 'wait', ms: 5200 },
  { t: 'panel-close' },
];

const TAKELOOK_SCRIPT_ES = [
  { t: 'out', text: 'Hola Whaid 👋 necesito saber cuántas entradas vendimos hoy en la feria.', time: '14:28' },
  { t: 'typing', ms: 800 },
  { t: 'in', text: '¡Hola Andrés! Tengo las cifras de <b>ExpoAndina</b> al corte de hoy 14:28.', time: '14:28' },
  { t: 'in', text: '<b>Ventas del día</b><br>• Entradas: <b>12.438</b><br>• Ingresos: <b>$184.2M COP</b><br>• Ticket promedio: <b>$14.800</b><br><br><span class="pill">+18% vs ayer</span>', time: '14:28' },
  { t: 'out', text: '¿Y el <b>stand B-04</b> por qué aparece offline?', time: '14:29' },
  { t: 'typing', ms: 1100 },
  { t: 'in', text: 'Revisé el POS de <b>B-04</b>: última transacción 11:42. El operador reportó corte eléctrico en el panel de esa zona.<br><br><span class="pill pill--warn">Ticket #4821 abierto hace 18min</span>', time: '14:29' },
  { t: 'out', text: 'Perfecto. Avísame cuando vuelva.', time: '14:30' },
  { t: 'in', text: 'Listo, te aviso en cuanto B-04 registre actividad. ✅', time: '14:30' },
];

const TAKELOOK_SCRIPT_EN = [
  { t: 'out', text: 'Hey Whaid 👋 how many tickets did we sell today at the fair?', time: '14:28' },
  { t: 'typing', ms: 800 },
  { t: 'in', text: 'Hi Andrés! Here are <b>ExpoAndina</b> numbers as of 14:28.', time: '14:28' },
  { t: 'in', text: '<b>Today\u2019s sales</b><br>• Tickets: <b>12,438</b><br>• Revenue: <b>$184.2M COP</b><br>• Avg ticket: <b>$14,800</b><br><br><span class="pill">+18% vs yesterday</span>', time: '14:28' },
  { t: 'out', text: 'And why is <b>booth B-04</b> showing offline?', time: '14:29' },
  { t: 'typing', ms: 1100 },
  { t: 'in', text: 'Checked the B-04 POS: last tx at 11:42. Operator reported a power outage on that zone panel.<br><br><span class="pill pill--warn">Ticket #4821 open for 18min</span>', time: '14:29' },
  { t: 'out', text: 'Great. Ping me when it\u2019s back.', time: '14:30' },
  { t: 'in', text: 'Got it, I\u2019ll message you as soon as B-04 records activity. ✅', time: '14:30' },
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
