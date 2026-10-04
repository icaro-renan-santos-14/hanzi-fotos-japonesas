import { useEffect, useState } from 'react';
import { ArrowDown, ArrowLeft, ArrowRight } from 'lucide-react';
import { exhibitionPhotos, photoSources } from '@/data/exhibition';
import type { Photo } from '@/data/photos';
import { copy, type Locale } from '@/i18n/copy';

const slides = ['tokyo-aerial', 'tokyo-shibuya', 'fuji-lake'].map((id) => exhibitionPhotos.find((photo) => photo.id === id)!);

export function ExhibitionHero({ onOpen, reduced, ready, locale }: { onOpen: (id: string, set?: Photo[]) => void; reduced: boolean; ready: boolean; locale: Locale }) {
  const c = copy[locale];
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (reduced || paused) return;
    const timer = window.setInterval(() => setActive((index) => (index + 1) % slides.length), 7600);
    return () => window.clearInterval(timer);
  }, [reduced, paused]);

  return (
    <section id="home" className={`hz-hero ${ready ? 'is-ready' : ''}`} aria-label={c.hero.aria}
      onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="hz-hero-images">
        {slides.map((photo, index) => {
          const media = photoSources(photo);
          return <div className={`hz-hero-slide ${active === index ? 'is-active' : ''}`} key={photo.id} aria-hidden={active !== index}>
            <picture>
              <source type="image/avif" srcSet={media.avif} sizes="100vw" />
              <source type="image/webp" srcSet={media.webp} sizes="100vw" />
              <img src={media.src} alt="" width={media.width} height={media.height} loading={index === 0 ? 'eager' : 'lazy'}
                fetchPriority={index === 0 ? 'high' : 'auto'} decoding="async" />
            </picture>
          </div>;
        })}
      </div>
      <div className="hz-hero-shade" />
      <div className="hz-hero-kicker"><span>{c.hero.journal}</span><span>{c.hero.city}</span></div>
      <div className="hz-hero-title"><span lang="ja">光の物語</span><h1>HANZI</h1><p>{c.hero.tagline}</p></div>
      <div className="hz-hero-bottom">
        <a href="#arrival" className="hz-scroll-cue"><ArrowDown size={18}/><span>{c.hero.scroll}</span></a>
        <span className="hz-hero-tag">{c.hero.topics}</span>
        <div className="hz-hero-controls" aria-label={c.hero.controls}>
          <button type="button" onClick={() => setActive((active + slides.length - 1) % slides.length)} aria-label={c.hero.previous}><ArrowLeft size={17}/></button>
          <span>{String(active + 1).padStart(2, '0')} <i/> {String(slides.length).padStart(2, '0')}</span>
          <button type="button" onClick={() => setActive((active + 1) % slides.length)} aria-label={c.hero.next}><ArrowRight size={17}/></button>
          <button type="button" className="hz-hero-view" onClick={() => onOpen(slides[active].id, slides)}>{c.hero.view} ↗</button>
        </div>
      </div>
    </section>
  );
}
