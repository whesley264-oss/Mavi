import { gsap } from '../scroll-engine.js';

export function initBigTextParallax() {
  document.querySelectorAll('[data-big-text]').forEach((section) => {
    const line1 = section.querySelector('.big-text-line-1');
    const line2 = section.querySelector('.big-text-line-2');

    if (line1) gsap.to(line1, {
      xPercent: -15, ease: 'none',
      scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: 1.5 },
    });
    if (line2) gsap.to(line2, {
      xPercent: 15, ease: 'none',
      scrollTrigger: { trigger: section, start: 'top bottom', end: 'bottom top', scrub: 1.5 },
    });
  });
}
