import { gsap, ScrollTrigger } from '../scroll-engine.js';

export function initHorizontalScroll() {
  document.querySelectorAll('[data-horizontal]').forEach((section) => {
    const track = section.querySelector('[data-horizontal-track]');
    if (!track) return;

    const totalScroll = track.scrollWidth - window.innerWidth;

    gsap.to(track, {
      x: -totalScroll, ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: `+=${totalScroll}`,
        pin: true, scrub: 1, anticipatePin: 1,
      },
    });
  });
}
