
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
