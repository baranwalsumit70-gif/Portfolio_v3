// ---------- Content ----------
const INTRO = 'Product designer with 3+ years in enterprise SaaS, AI-powered products and workflow tools. M.Des, IIT Guwahati.';

const MARQUEE_WORDS = ['Enterprise SaaS', 'AI products', 'Design systems', 'UX research'];

const PROJECTS = [
  { title: 'Recruiter SaaS design system', desc: 'Reusable components and interface standards, plus journeys and prototypes for AI resume/JD parsing and matching.', meta: 'TVARAH · Design system', when: '2026', image: 'assets/images/projects/recruiter-saas-design-system.webp' },
  { title: 'Ferry Management System', desc: 'Role-based analytics dashboard for ferry ticketing, boarding and reporting, refined through usability testing.', meta: 'ERP dashboard', when: '2025—26', image: 'assets/images/projects/ferry-management-system.webp' },
  { title: 'Pebble', desc: 'AI-powered habit app with a streak-based engagement system, validated with 10 users.', meta: 'Mobile · Research', when: '2025', image: '' },
  { title: 'CGIS redesign', desc: 'UX audits and redesign of network-planning software used by telecom engineers.', meta: 'Congruex · Enterprise', when: '2021—23', image: '' },
  { title: 'Developer Alerts AI Agent', desc: 'An AI-powered security alert dashboard that helps developers resolve issues faster.', meta: '48-hour sprint', when: '2025', image: '' },
  { title: 'Spotify queue', desc: 'Improved navigation and song queue management in the Spotify experience.', meta: '48-hour challenge', when: '2024', image: '' }
];
const SHADOWS = ['#d9452b', '#2f8f8a', '#f3b23a', '#f07a2a', '#2f8f8a', '#d9452b'];
const TILTS = [-1.2, 0.8, 1, -0.8, -1, 0.9];

const BOOKS = [
  { name: 'UX Research', detail: 'Interviews · Usability · Heuristics', bg: '#1b1e30', fg: '#f6e6c8', w: '86%', ml: '4%' },
  { name: 'Interaction Design', detail: 'Journeys · IA · Prototyping', bg: '#d9452b', fg: '#f6e6c8', w: '92%', ml: '0%' },
  { name: 'Design Systems', detail: 'Tokens · Components · Standards', bg: '#2f8f8a', fg: '#f6e6c8', w: '88%', ml: '8%' },
  { name: 'Accessibility', detail: 'Inclusive design', bg: '#f3b23a', fg: '#1b1e30', w: '76%', ml: '3%' },
  { name: 'Collaboration', detail: 'Stakeholders · Dev handoff', bg: '#1b1e30', fg: '#f6e6c8', w: '94%', ml: '5%' }
];

const TOOLS = [
  { name: 'DESIGN', items: 'FIGMA · FRAMER · SKETCH · MIRO · PHOTOSHOP · PROCREATE' },
  { name: 'AI-ASSISTED', items: 'CLAUDE · CHATGPT · GEMINI · NOTION AI · WISPR FLOW' },
  { name: 'FRONT-END', items: 'HTML · CSS · JS · REACT · ANGULAR · DEV MODE' }
];

const EXPERIENCE = [
  { years: 'JAN — JUN 2026', place: 'Bangalore · Remote', role: 'Product Design Intern', company: 'TVARAH Private Limited', points: [
    'Designed a scalable design system with reusable components and interface standards to ensure visual consistency, usability, and accessibility across a recruiter SaaS platform.',
    'Built user journeys, information architecture, and interactive prototypes for AI-enabled features (resume/JD parsing and matching), simplifying complex recruiter workflows.',
    'Translated stakeholder requirements and behavioural insights into practical design improvements, collaborating closely with product and engineering teams for seamless implementation.'
  ] },
  { years: 'JUN 2021 — JUL 2023', place: 'Mohali, Punjab · Hybrid', role: 'UX Designer', company: 'Congruex Asia Pacific LLP', points: [
    'Led UX audits and redesign of CGIS software used by telecom engineers, identifying critical usability, navigation, and information-architecture issues to reduce task complexity.',
    'Designed user journeys, wireframes, interaction flows, and high-fidelity prototypes for network-planning modules, enhancing navigation and reducing user errors for faster project execution.',
    'Applied user-centred design principles to translate complex engineering workflows into intuitive interfaces, ensuring design feasibility and effective developer handover.',
    'Conducted heuristic evaluations and usability studies to validate design improvements, supporting iterative enhancement of the enterprise platform.'
  ] }
];

const EDUCATION = [
  { years: '2024 — 2026', score: '8.48', degree: 'M.Des', school: 'Indian Institute of Technology, Guwahati' },
  { years: '2016 — 2020', score: '8.50', degree: 'B.Tech', school: 'KIET Group of Institutions, Delhi NCR' }
];

// ---------- Render ----------
const $ = (id) => document.getElementById(id);
const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

$('marquee').innerHTML = Array.from({ length: 20 }, (_, i) => `<span>${MARQUEE_WORDS[i % 4]}<i></i></span>`).join('');

$('workGrid').innerHTML = PROJECTS.map((p, i) => `
  <a class="card" href="#work" style="box-shadow: 10px 10px 0 ${SHADOWS[i]}; transform: rotate(${TILTS[i]}deg);">
    <div class="card-media">
      ${p.image ? `<img src="${p.image}" alt="${esc(p.title)}" loading="lazy">` : `<span class="placeholder">[ ADD COVER ]</span>`}
    </div>
    <div class="card-body">
      <div class="card-title-row">
        <span class="card-title">${esc(p.title)}</span>
        <span class="card-num">${String(i + 1).padStart(2, '0')}</span>
      </div>
      <span class="card-desc">${esc(p.desc)}</span>
      <div class="card-meta"><span>${esc(p.meta)}</span><span>${p.when}</span></div>
    </div>
  </a>`).join('');

$('books').innerHTML = BOOKS.map((b) => `
  <div class="book" style="background:${b.bg}; color:${b.fg}; width:${b.w}; margin-left:${b.ml};">
    <strong>${esc(b.name)}</strong><span>${esc(b.detail)}</span>
  </div>`).join('');

$('tools').innerHTML = TOOLS.map((t) => `
  <div class="group"><span class="crt-label">${t.name}</span><span>&gt; ${t.items}</span></div>`).join('') + '<span>&gt; _</span>';

$('expList').innerHTML = EXPERIENCE.map((e) => `
  <div class="exp">
    <div class="exp-when"><span class="mono">${e.years}</span><small>${esc(e.place)}</small></div>
    <div class="exp-body">
      <span class="exp-role">${esc(e.role)}</span>
      <span class="exp-company">${esc(e.company)}</span>
      <ul class="exp-points">${e.points.map((pt) => `<li>${esc(pt)}</li>`).join('')}</ul>
    </div>
  </div>`).join('');

$('eduGrid').innerHTML = EDUCATION.map((ed) => `
  <div class="edu">
    <span class="mono">${ed.years} · CGPA ${ed.score}</span>
    <strong>${ed.degree}</strong>
    <span>${esc(ed.school)}</span>
  </div>`).join('');

// ---------- Smooth nav ----------
document.querySelectorAll('[data-scroll]').forEach((a) => {
  a.addEventListener('click', (e) => {
    e.preventDefault();
    const id = a.dataset.scroll;
    const el = $(id);
    const top = id === 'top' ? 0 : el.getBoundingClientRect().top + window.scrollY - 70;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// ---------- Animation loop ----------
const clamp = (v) => Math.min(1, Math.max(0, v));
const smooth = (t) => t * t * (3 - 2 * t);
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const heroText = $('heroText'), poster = $('poster'), posterImg = $('posterImg'), posterSun = $('posterSun');
const crt = $('heroCrt'), typed = $('typed'), caret = $('caret'), hint = $('scrollHint');
const stripes = document.querySelectorAll('[data-stripe]');
const marquee = $('marquee'), sunsetSun = $('sunsetSun'), contact = $('contact');

const start = performance.now();
let lastTyped = -1;

function frame(now) {
  const t = reduce ? 1e6 : now - start;
  const sy = window.scrollY;
  const vh = window.innerHeight || 800;
  const intro = clamp(t / 1100);
  const inE = 1 - Math.pow(1 - intro, 3);
  const out = clamp(sy / vh);

  heroText.style.transform = `translate3d(0, ${((1 - inE) * 30 + out * 60).toFixed(2)}px, 0)`;
  poster.style.transform = `translate3d(0, ${((1 - inE) * 50 - out * 40).toFixed(2)}px, 0) rotate(-2deg) scale(${(0.95 + 0.05 * inE - out * 0.04).toFixed(3)})`;
  posterImg.style.transform = `scale(${(1.1 + out * 0.08).toFixed(3)}) translate3d(0, ${(out * 24).toFixed(1)}px, 0)`;
  posterSun.style.transform = `translate3d(-50%, ${((1 - inE) * 70 + out * 120).toFixed(1)}px, 0)`;
  stripes.forEach((s, i) => { s.style.transform = `scaleX(${smooth(clamp(intro * 1.6 - i * 0.15)).toFixed(3)})`; });

  const termIn = smooth(clamp((intro - 0.3) / 0.5));
  crt.style.opacity = termIn.toFixed(3);
  crt.style.transform = `translate3d(0, ${((1 - termIn) * 20).toFixed(1)}px, 0)`;

  const n = Math.floor(clamp((t - 700) / (INTRO.length * 32)) * INTRO.length);
  if (n !== lastTyped) { typed.textContent = INTRO.slice(0, n); lastTyped = n; }
  caret.style.opacity = n < INTRO.length ? 1 : (Math.floor(now / 530) % 2 ? 1 : 0);

  hint.style.opacity = (1 - clamp(sy / 160)).toFixed(3);
  marquee.style.transform = `translateX(${(-(sy * 0.35) - 200).toFixed(1)}px)`;

  const r = contact.getBoundingClientRect();
  const sunP = clamp((vh - r.top) / (vh * 0.9));
  sunsetSun.style.transform = `translateY(${(60 - 60 * smooth(sunP)).toFixed(1)}%)`;

  requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
