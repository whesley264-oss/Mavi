import { gsap } from '../scroll-engine.js';

export function initMarquee() {
  document.querySelectorAll('[data-marquee]').forEach((track) => {
    const direction = track.dataset.direction === 'right' ? 1 : -1;
    const speed = parseFloat(track.dataset.speed) || 40;

    track.innerHTML += track.innerHTML;
    const totalWidth = track.scrollWidth / 2;

    gsap.to(track, {
      x: direction * -totalWidth,
      duration: totalWidth / speed,
      ease: 'none',
      repeat: -1,
      modifiers: { x: (x) => `${parseFloat(x) % totalWidth}px` },
    });

    const wrap = track.closest('[data-marquee-wrap]');
    wrap?.addEventListener('mouseenter', () => gsap.to(track, { timeScale: 0.25, duration: 0.5 }));
    wrap?.addEventListener('mouseleave', () => gsap.to(track, { timeScale: 1, duration: 0.5 }));
  });
}
