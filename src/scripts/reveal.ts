// Scroll-reveals: één IntersectionObserver voor de hele pagina.
// Content is standaard zichtbaar; zonder JS of met reduced motion gebeurt er niets.
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const els = document.querySelectorAll<HTMLElement>('[data-reveal]');

if (reduce || !('IntersectionObserver' in window)) {
  els.forEach((el) => el.classList.add('is-in'));
} else {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add('is-in');
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );
  els.forEach((el) => io.observe(el));
}
