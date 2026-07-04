// Track carousel — smooth continuous scroll via JS (no restart stutter)
(() => {
  const track = document.querySelector('.track-carousel-track');
  if (!track) return;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  let pos = 0;
  const speed = 0.6; // pixels per frame — raise for faster, lower for slower

  function step() {
    pos -= speed;
    const setWidth = track.scrollWidth / 2; // half, since content is duplicated once
    if (Math.abs(pos) >= setWidth) {
      pos += setWidth; // wrap seamlessly, no jump
    }
    track.style.transform = `translateX(${pos}px)`;
    requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
})();
// Starfield animation
(() => {
  const canvas = document.getElementById('starfield');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let width, height, stars;

  function resize() {
    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
    generateStars();
  }

  function generateStars() {
    const density = 0.00012;
    const count = Math.round(width * height * density);
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.3 + 0.3,
      baseAlpha: Math.random() * 0.5 + 0.3,
      twinkleSpeed: Math.random() * 0.015 + 0.005,
      twinklePhase: Math.random() * Math.PI * 2,
      driftSpeed: Math.random() * 0.05 + 0.01,
    }));
  }

  function draw(time) {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#f0a868';
    for (const star of stars) {
      const alpha = prefersReducedMotion
        ? star.baseAlpha
        : star.baseAlpha + Math.sin(time * star.twinkleSpeed + star.twinklePhase) * 0.3;
      ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fill();

      if (!prefersReducedMotion) {
        star.y += star.driftSpeed;
        if (star.y > height) {
          star.y = 0;
          star.x = Math.random() * width;
        }
      }
    }
    ctx.globalAlpha = 1;
    if (!prefersReducedMotion) requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  resize();
  requestAnimationFrame(draw);
})();

// Starfield animation
(() => {
  const canvas = document.getElementById('starfield');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let width, height, stars;

  function resize() {
    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
    generateStars();
  }

  function generateStars() {
    const density = 0.00012;
    const count = Math.round(width * height * density);
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.3 + 0.3,
      baseAlpha: Math.random() * 0.5 + 0.3,
      twinkleSpeed: Math.random() * 0.015 + 0.005,
      twinklePhase: Math.random() * Math.PI * 2,
      driftSpeed: Math.random() * 0.05 + 0.01,
    }));
  }

  function draw(time) {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#f0a868';
    for (const star of stars) {
      const alpha = prefersReducedMotion
        ? star.baseAlpha
        : star.baseAlpha + Math.sin(time * star.twinkleSpeed + star.twinklePhase) * 0.3;
      ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fill();

      if (!prefersReducedMotion) {
        star.y += star.driftSpeed;
        if (star.y > height) {
          star.y = 0;
          star.x = Math.random() * width;
        }
      }
    }
    ctx.globalAlpha = 1;
    if (!prefersReducedMotion) requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  resize();
  requestAnimationFrame(draw);
})();


// Starfield animation
(() => {
  const canvas = document.getElementById('starfield');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let width, height, stars;

  function resize() {
    width = canvas.width = canvas.offsetWidth;
    height = canvas.height = canvas.offsetHeight;
    generateStars();
  }

  function generateStars() {
    const density = 0.00012; // stars per pixel
    const count = Math.round(width * height * density);
    stars = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.3 + 0.3,
      baseAlpha: Math.random() * 0.5 + 0.3,
      twinkleSpeed: Math.random() * 0.015 + 0.005,
      twinklePhase: Math.random() * Math.PI * 2,
      driftSpeed: Math.random() * 0.05 + 0.01,
    }));
  }

  function draw(time) {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = '#f0a868'; // matches --color-moon
    for (const star of stars) {
      const alpha = prefersReducedMotion
        ? star.baseAlpha
        : star.baseAlpha + Math.sin(time * star.twinkleSpeed + star.twinklePhase) * 0.3;
      ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
      ctx.fill();

      if (!prefersReducedMotion) {
        star.y += star.driftSpeed;
        if (star.y > height) {
          star.y = 0;
          star.x = Math.random() * width;
        }
      }
    }
    ctx.globalAlpha = 1;
    if (!prefersReducedMotion) requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  resize();
  requestAnimationFrame(draw);
})();
// ============ STARFIELD ============
(function() {
  const canvas = document.getElementById('starfield');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
 
  let stars = [];
  const NUM_STARS = 280;
 
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
 
  function initStars() {
    stars = [];
    for (let i = 0; i < NUM_STARS; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.4 + 0.2,
        alpha: Math.random() * 0.7 + 0.2,
        speed: Math.random() * 0.4 + 0.05,
        twinkleSpeed: Math.random() * 0.015 + 0.005,
        twinkleDir: Math.random() > 0.5 ? 1 : -1,
      });
    }
  }
 
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach(s => {
      // twinkle
      s.alpha += s.twinkleSpeed * s.twinkleDir;
      if (s.alpha >= 0.9 || s.alpha <= 0.1) s.twinkleDir *= -1;
 
      // very slow drift downward
      s.y += s.speed * 0.08;
      if (s.y > canvas.height) {
        s.y = 0;
        s.x = Math.random() * canvas.width;
      }
 
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      // warm white with slight golden tint on larger stars
      const warm = s.r > 1.0 ? `rgba(255, 235, 200, ${s.alpha})` : `rgba(220, 220, 255, ${s.alpha})`;
      ctx.fillStyle = warm;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
 
  resize();
  initStars();
  draw();
  window.addEventListener('resize', () => { resize(); initStars(); });
})();
 
// ============ MOBILE NAV ============
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
 
navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});
 
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
  });
});
 
// ============ FOOTER YEAR ============
document.getElementById('year').textContent = new Date().getFullYear();
