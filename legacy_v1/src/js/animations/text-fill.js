import { gsap } from '../scroll-engine.js';

export function initTextFill() {
  document.querySelectorAll('[data-fill]').forEach((el) => {
    if (!window.SplitText) return;
    const split = new window.SplitText(el, { type: 'words' });
    gsap.from(split.words, {
      scrollTrigger: {
        trigger: el,
        start: 'top 70%',
        end: 'bottom 30%',
        scrub: 1,
      },
      color: 'rgba(255,255,255,0.12)',
      stagger: 0.05,
      ease: 'none',
    });
  });
}
