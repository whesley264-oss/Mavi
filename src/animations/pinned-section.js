import { gsap, ScrollTrigger } from '../scroll-engine.js';

export function initPinnedSection() {
  document.querySelectorAll('[data-pinned]').forEach((section) => {
    const counter = section.querySelector('.pinned-counter');
    const items   = section.querySelectorAll('.pinned-item');
    if (!items.length) return;

    ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: `+=${items.length * 100}vh`,
      pin: true, scrub: 1,
      onUpdate: (self) => {
        const index = Math.min(
          Math.floor(self.progress * items.length),
          items.length - 1
        );
        items.forEach((item, i) => {
          gsap.to(item, { opacity: i === index ? 1 : 0, y: i === index ? 0 : 20, duration: 0.4 });
        });
        if (counter) counter.textContent = String(index + 1).padStart(2, '0');
      },
    });
  });
}
