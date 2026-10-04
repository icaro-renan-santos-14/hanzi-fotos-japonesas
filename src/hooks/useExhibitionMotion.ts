import { useEffect, useState } from 'react';

export function useReducedMotion() {
  const [reduced, setReduced] = useState(() => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReduced(query.matches);
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);
  return reduced;
}

export function useExhibitionMotion(reduced: boolean) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    document.querySelectorAll('.hz-reveal').forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (reduced) return;
    let frame = 0;
    const update = () => {
      const y = window.scrollY;
      const height = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const parallax: { element: HTMLElement; progress: number }[] = [];
      document.querySelectorAll<HTMLElement>('[data-hz-parallax]').forEach((element) => {
        const rect = element.parentElement?.getBoundingClientRect();
        if (rect && rect.bottom > 0 && rect.top < window.innerHeight) {
          const progress = (window.innerHeight / 2 - (rect.top + rect.height / 2)) / window.innerHeight;
          parallax.push({ element, progress });
        }
      });
      const silence = document.querySelector<HTMLElement>('.hz-silence-photo');
      const silenceRect = silence?.getBoundingClientRect();
      document.documentElement.style.setProperty('--hz-progress', `${(y / height) * 100}%`);
      document.querySelector('.hz-header')?.classList.toggle('is-scrolled', y > 40);
      document.querySelector('.hz-scroll-cue')?.classList.toggle('is-hidden', y > 70);
      parallax.forEach(({ element, progress }) => element.style.setProperty('--hz-parallax', `${Math.max(-1, Math.min(1, progress)) * 3}%`));
      if (silence && silenceRect) silence.style.setProperty('--hz-expand', String(Math.max(0, Math.min(1, (window.innerHeight - silenceRect.top) / (window.innerHeight + silenceRect.height)))));
      frame = 0;
    };
    const onScroll = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); window.cancelAnimationFrame(frame); };
  }, [reduced]);
}
