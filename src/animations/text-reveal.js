import { gsap, ScrollTrigger } from '../scroll-engine.js';
// Note: In a real project you'd need SplitText (GSAP Club).
// For this boilerplate, we assume it's available or provided via CDN/Package.
export function initTextReveal() {
  document.querySelectorAll('[data-reveal="text"]').forEach((el) => {
    // If SplitText is available in the global scope or imported
    const SplitText = window.SplitText || gsap.utils.toArray(null)[0]; // Placeholder
    if (!window.SplitText) {
      console.warn('SplitText is required for text-reveal animation.');
      return;
    }
    const split = new window.SplitText(el, { type: 'lines' });

    split.lines.forEach((line) => {
      const wrapper = document.createElement('div');
      wrapper.style.overflow = 'hidden';
      line.parentNode.insertBefore(wrapper, line);
      wrapper.appendChild(line);
    });

    gsap.from(split.lines, {
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
      y: '110%',
      opacity: 0,
      duration: 1.1,
      stagger: 0.12,
      ease: 'expo.out',
    });
  });
}
