import { gsap } from '../scroll-engine.js';

export function initClipReveal() {
  gsap.utils.toArray('[data-reveal="clip"]').forEach((el) => {
    const dir = el.dataset.clipDirection || 'bottom';
    const clipMap = {
      bottom: ['inset(100% 0 0 0)', 'inset(0% 0 0 0)'],
      left:   ['inset(0 100% 0 0)', 'inset(0 0% 0 0)'],
      top:    ['inset(0 0 100% 0)', 'inset(0 0 0% 0)'],
      right:  ['inset(0 0 0 100%)', 'inset(0 0 0 0%)'],
    };
    const [from] = clipMap[dir];
    gsap.set(el, { clipPath: clipMap[dir][1] });
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 80%' },
      clipPath: from, duration: 1.2, ease: 'expo.inOut',
    });
  });
}
