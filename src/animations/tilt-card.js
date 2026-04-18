import { gsap } from '../scroll-engine.js';

export function initTiltCards() {
  document.querySelectorAll('[data-tilt]').forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      gsap.to(el, {
        rotationY: x * 20,
        rotationX: -y * 20,
        transformPerspective: 1000,
        ease: 'power2.out',
        duration: 0.4
      });
    });

    el.addEventListener('mouseleave', () => {
      gsap.to(el, {
        rotationY: 0,
        rotationX: 0,
        ease: 'elastic.out(1, 0.5)',
        duration: 0.8
      });
    });
  });
}
