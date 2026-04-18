import { gsap } from '../scroll-engine.js';

export function initFadeUp() {
  gsap.utils.toArray('[data-reveal="fade-up"]').forEach((container) => {
    gsap.from(Array.from(container.children), {
      scrollTrigger: { trigger: container, start: 'top 80%' },
      y: 60, opacity: 0,
      duration: 0.9, stagger: 0.08,
      ease: 'power3.out',
    });
  });
}
