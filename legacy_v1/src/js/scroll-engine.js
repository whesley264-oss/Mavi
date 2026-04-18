// AI INTENT: The central engine for smooth scrolling and animation orchestration.
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Note: SplitText is a GSAP Club plugin. For a public boilerplate, we might use a free alternative
// but since the prompt specified SplitText, we'll assume the user has access.
// In a real scenario, we might need a fallback or instructions.

gsap.registerPlugin(ScrollTrigger);

// ─── LENIS SMOOTH SCROLL ───
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  smoothTouch: false,
  touchMultiplier: 2,
});

lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);

// ─── SCROLL PROGRESS BAR ───
const progressBar = document.querySelector('.scroll-progress');
if (progressBar) {
  gsap.to(progressBar, {
    scaleX: 1,
    ease: 'none',
    scrollTrigger: {
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
    },
  });
}

// ─── CURSOR CUSTOM ───
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

if (cursor && follower) {
  document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.1 });
    gsap.to(follower, { x: e.clientX, y: e.clientY, duration: 0.4 });
  });

  document.querySelectorAll('a, button, [data-magnetic]').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      gsap.to(cursor, { scale: 3, duration: 0.3 });
      gsap.to(follower, { scale: 0, duration: 0.3 });
    });
    el.addEventListener('mouseleave', () => {
      gsap.to(cursor, { scale: 1, duration: 0.3 });
      gsap.to(follower, { scale: 1, duration: 0.3 });
    });
  });
}

export { lenis, gsap, ScrollTrigger };
