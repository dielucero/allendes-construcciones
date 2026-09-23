const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const brandIntro = document.querySelector('.brand-intro');

if (brandIntro) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.setTimeout(() => brandIntro.classList.add('is-exiting'), reducedMotion ? 20 : 1450);
  window.setTimeout(() => brandIntro.remove(), reducedMotion ? 40 : 2200);
}

menuToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
});

document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

const galleryTrack = document.querySelector('.gallery-track');
document.querySelector('.gallery-prev').addEventListener('click', () => {
  galleryTrack.scrollBy({ left: -440, behavior: 'smooth' });
});
document.querySelector('.gallery-next').addEventListener('click', () => {
  galleryTrack.scrollBy({ left: 440, behavior: 'smooth' });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));