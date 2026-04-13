/* ============================================================
   Lê Quang Vũ — Portfolio Scripts
   ============================================================ */

// --- Cursor glow ---------------------------------------------
document.addEventListener('mousemove', e => {
  const g = document.getElementById('glow');
  if (g) { g.style.left = e.clientX + 'px'; g.style.top = e.clientY + 'px'; }
});

// --- Typing effect in hero -----------------------------------
const phrases = [
  'LOADING ENGINEER PROFILE...',
  'ENGINE PROGRAMMER @ GAMELOFT',
  'C++ | VULKAN | MULTI-PLATFORM',
];
let phraseIdx = 0, charIdx = 0, deleting = false;
const typeEl = document.getElementById('typeText');
function type() {
  if (!typeEl) return;
  const phrase = phrases[phraseIdx];
  if (!deleting) {
    typeEl.textContent = phrase.slice(0, ++charIdx);
    if (charIdx === phrase.length) { deleting = true; setTimeout(type, 2200); return; }
    setTimeout(type, 75);
  } else {
    typeEl.textContent = phrase.slice(0, --charIdx);
    if (charIdx === 0) { deleting = false; phraseIdx = (phraseIdx + 1) % phrases.length; }
    setTimeout(type, 38);
  }
}
type();

// --- Nav: scroll class, active links, back-to-top -----------
const navEl = document.getElementById('nav');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('[data-nav]');
const btt = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  const sy = window.scrollY;
  navEl.classList.toggle('scrolled', sy > 50);
  if (btt) btt.classList.toggle('visible', sy > 400);

  let current = '';
  sections.forEach(s => { if (sy >= s.offsetTop - 140) current = s.id || ''; });
  navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + current));
}, { passive: true });

// --- Mobile nav toggle --------------------------------------
const toggle = document.getElementById('navToggle');
const navLinksEl = document.getElementById('navLinks');
if (toggle && navLinksEl) {
  toggle.addEventListener('click', () => navLinksEl.classList.toggle('open'));
  navLinksEl.querySelectorAll('a').forEach(a =>
    a.addEventListener('click', () => navLinksEl.classList.remove('open'))
  );
}

// --- Scroll reveal ------------------------------------------
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); revealObs.unobserve(e.target); }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revealObs.observe(el));

// --- Skill bars animate on scroll ---------------------------
const skillObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.skill-fill').forEach(f => { f.style.width = f.dataset.w + '%'; });
      skillObs.unobserve(e.target);
    }
  });
}, { threshold: 0.25 });
document.querySelectorAll('.skill-group').forEach(el => skillObs.observe(el));

// --- Stat counter animation ---------------------------------
function animateCounter(el) {
  const target = parseInt(el.dataset.count);
  const suffix = el.dataset.suffix || '';
  let current = 0;
  const step = Math.max(1, Math.ceil(target / 45));
  const iv = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = current + suffix;
    if (current >= target) clearInterval(iv);
  }, 28);
}
const counterObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('[data-count]').forEach(animateCounter);
      counterObs.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.stats-row').forEach(el => counterObs.observe(el));

// --- Video modal ---------------------------------------------
const modal = document.getElementById('videoModal');
const videoPlayer = document.getElementById('videoPlayer');
function openModal(src) {
  videoPlayer.src = src;
  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
  videoPlayer.play().catch(() => {});
}
function closeModal() {
  modal.classList.remove('open');
  videoPlayer.pause();
  videoPlayer.src = '';
  document.body.style.overflow = '';
}
document.getElementById('videoModalClose').addEventListener('click', closeModal);
modal.querySelector('.video-modal-backdrop').addEventListener('click', closeModal);
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
document.querySelectorAll('.game-card[data-video]').forEach(card => {
  card.querySelector('.play-btn').addEventListener('click', () => {
    const src = card.dataset.video;
    if (src) openModal(src);
  });
});

// --- Hero particle field (canvas) ----------------------------
(function () {
  const canvas = document.getElementById('heroParticles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H;
  function resize() {
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  const particles = Array.from({ length: 55 }, () => ({
    x: Math.random() * 1920, y: Math.random() * 1080,
    vx: (Math.random() - .5) * 0.25, vy: -(Math.random() * 0.35 + 0.08),
    r: Math.random() * 1.4 + 0.3,
    a: Math.random() * 0.35 + 0.05,
  }));

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.y < -4) { p.y = H + 4; p.x = Math.random() * W; }
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,255,255,${p.a})`; ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  draw();
})();

// --- Canvas: Render Pipeline (animated waves) ----------------
function drawRender(canvas) {
  const ctx = canvas.getContext('2d');
  const w = canvas.width, h = canvas.height;
  let t = 0;
  const layers = [
    { y: h * 0.28, color: 'rgba(0,255,255,0.75)',  glow: 'rgba(0,255,255,0.4)',  label: 'GBuffer — Albedo',  phase: 0 },
    { y: h * 0.52, color: 'rgba(240,0,255,0.75)',  glow: 'rgba(240,0,255,0.4)',  label: 'GBuffer — Normals', phase: 1.6 },
    { y: h * 0.76, color: 'rgba(255,240,0,0.65)',  glow: 'rgba(255,240,0,0.35)', label: 'Lighting Pass',     phase: 3.1 },
  ];
  function frame() {
    ctx.fillStyle = '#040c14'; ctx.fillRect(0, 0, w, h);
    // Grid
    ctx.strokeStyle = 'rgba(0,255,255,0.09)'; ctx.lineWidth = 1;
    for (let x = 0; x < w; x += 40) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,h); ctx.stroke(); }
    for (let y = 0; y < h; y += 25) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(w,y); ctx.stroke(); }
    // Waves
    layers.forEach(l => {
      ctx.shadowColor = l.glow; ctx.shadowBlur = 8;
      ctx.strokeStyle = l.color; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.moveTo(0, l.y);
      for (let x = 0; x <= w; x += 3)
        ctx.lineTo(x, l.y + Math.sin(x * 0.028 + t + l.phase) * 7);
      ctx.stroke();
      ctx.shadowBlur = 0;
      ctx.fillStyle = l.color; ctx.font = '9px Share Tech Mono'; ctx.textAlign = 'left';
      ctx.fillText(l.label, 10, l.y - 9);
    });
    // Drifting dots
    for (let i = 0; i < 18; i++) {
      const px = ((i * 71 + t * 12) % (w * 60)) / 60;
      const py = (i * 53) % h;
      const op = Math.sin(i * 0.9 + t) * 0.12 + 0.12;
      ctx.beginPath(); ctx.arc(px, py, 1.1, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0,255,255,${op})`; ctx.fill();
    }
    t += 0.018; requestAnimationFrame(frame);
  }
  frame();
}

// --- Init canvases on load -----------------------------------
document.addEventListener('DOMContentLoaded', () => {
  const c1 = document.getElementById('c1');
  if (c1) drawRender(c1);
});
