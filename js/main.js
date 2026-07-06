// Hero photo slideshow — crossfade through band photos
(() => {
  const slides = document.querySelectorAll('.hero-slide');
  if (!slides.length) return;
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let current = 0;
  slides[0].classList.add('is-active');
  if (prefersReducedMotion) return; // show first photo only, no cycling

  setInterval(() => {
    slides[current].classList.remove('is-active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('is-active');
  }, 5000); // 5 seconds per photo
})();// Track carousel — smooth continuous scroll via JS (no restart stutter)
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
})();// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close mobile nav after clicking a link
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
  });
});

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
