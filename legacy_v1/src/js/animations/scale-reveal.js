import { gsap } from '../scroll-engine.js';

export function initScaleReveal() {
  gsap.utils.toArray('[data-reveal="scale"]').forEach((el) => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 85%' },
      scale: 0.85, opacity: 0, duration: 1.2, ease: 'expo.out',
    });
  });
}
