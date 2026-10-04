import { lazy, Suspense, useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Menu } from 'lucide-react';
import { exhibitionCategories, exhibitionPhotos, exhibitionStories, photoSources } from '@/data/exhibition';
import { photos as archivePhotos, storySets as archiveStories, type Photo } from '@/data/photos';
import { ExhibitionPhoto } from '@/components/ExhibitionPhoto';
import { ExhibitionHero } from '@/components/ExhibitionHero';
import { ExhibitionMenu } from '@/components/ExhibitionMenu';
import { IntroLoader } from '@/components/IntroLoader';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';
import { copy, languageFromStorage, type Locale } from '@/i18n/copy';
import { localizeArchiveSeries, localizePhoto } from '@/i18n/photos';
import { useExhibitionMotion, useReducedMotion } from '@/hooks/useExhibitionMotion';

const LightboxModal = lazy(() => import('@/components/LightboxModal').then((module) => ({ default: module.LightboxModal })));
const pad = (value: number) => String(value).padStart(2, '0');
const allPhotos = [...exhibitionPhotos, ...archivePhotos];
const photoById = new Map(allPhotos.map((photo) => [photo.id, photo]));
const getPhoto = (id: string) => photoById.get(id)!;

function PhotoFigure({ id, number, onOpen, locale, className = '', label = true, sizes = '(max-width: 700px) 46vw, 45vw' }: {
  id: string; number: string; onOpen: (id: string) => void; locale: Locale; className?: string; label?: boolean; sizes?: string;
}) {
  const photo = localizePhoto(getPhoto(id), locale);
  return <figure className={`hz-figure ${className}`}>
    <ExhibitionPhoto photo={photo} locale={locale} number={number} onOpen={onOpen} sizes={sizes} />
    {label && <figcaption><span>{number} / {photo.place}</span><span>{photo.title}</span></figcaption>}
  </figure>;
}

export default function Home() {
  const systemReduced = useReducedMotion();
  const [manualReduced, setManualReduced] = useState(false);
  const reduced = systemReduced || manualReduced;
  const [locale, setLocale] = useState<Locale>(languageFromStorage);
  const c = copy[locale];
  const [introDone, setIntroDone] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [filter, setFilter] = useState<string>('Todas');
  const [selection, setSelection] = useState<{ ids: string[]; index: number; story?: number | string } | null>(null);
  const framesRef = useRef<HTMLDivElement>(null);
  const lastFocus = useRef<HTMLElement | null>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  useExhibitionMotion(reduced);

  useEffect(() => { document.documentElement.dataset.motion = reduced ? 'reduced' : 'full'; }, [reduced]);
  useEffect(() => {
    document.documentElement.lang = locale === 'pt' ? 'pt-BR' : locale;
    try { localStorage.setItem('hanzi-language', locale); } catch { /* private browsing */ }
    document.querySelector('meta[name="description"]')?.setAttribute('content', c.metaDescription);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', c.metaDescription);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', c.metaDescription);
  }, [locale, c.metaDescription]);
  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.dataset.visible = 'false';
      const text = cursorRef.current.querySelector('span');
      if (text) text.textContent = '';
    }
  }, [locale]);
  useEffect(() => {
    if (reduced || !window.matchMedia('(pointer:fine)').matches) return;
    let frame = 0;
    let x = -100, y = -100, targetX = -100, targetY = -100;
    const tick = () => {
      x += (targetX - x) * 0.22; y += (targetY - y) * 0.22;
      if (cursorRef.current) cursorRef.current.style.transform = `translate3d(${x}px,${y}px,0)`;
      if (Math.abs(targetX - x) + Math.abs(targetY - y) > 0.2) frame = requestAnimationFrame(tick);
      else frame = 0;
    };
    const move = (event: PointerEvent) => {
      targetX = event.clientX; targetY = event.clientY;
      const target = event.target as HTMLElement;
      const action = target.closest<HTMLElement>('[data-cursor],a,button');
      if (cursorRef.current) {
        const label = action?.dataset.cursor || (action ? 'OPEN' : '');
        const labels: Record<string, string> = locale === 'ja' ? { VIEW: '見る', OPEN: '開く', EXPLORE: '巡る', CLOSE: '閉じる' }
          : locale === 'pt' ? { VIEW: 'VER', OPEN: 'ABRIR', EXPLORE: 'EXPLORAR', CLOSE: 'FECHAR' }
          : { VIEW: 'VIEW', OPEN: 'OPEN', EXPLORE: 'EXPLORE', CLOSE: 'CLOSE' };
        cursorRef.current.dataset.label = label;
        const text = cursorRef.current.querySelector('span');
        if (text) text.textContent = labels[label] || label;
        cursorRef.current.dataset.visible = 'true';
      }
      if (!frame) frame = requestAnimationFrame(tick);
    };
    const hide = () => { if (cursorRef.current) cursorRef.current.dataset.visible = 'false'; };
    window.addEventListener('pointermove', move);
    document.addEventListener('pointerleave', hide);
    return () => { window.removeEventListener('pointermove', move); document.removeEventListener('pointerleave', hide); cancelAnimationFrame(frame); };
  }, [reduced, locale]);

  const openPhoto = useCallback((id: string, set: Photo[] = exhibitionPhotos, story?: number | string) => {
    lastFocus.current = document.activeElement as HTMLElement;
    const ids = set.map((photo) => photo.id);
    setSelection({ ids, index: Math.max(0, ids.indexOf(id)), story });
  }, []);
  const closePhoto = useCallback(() => {
    setSelection(null);
    window.setTimeout(() => lastFocus.current?.focus(), 0);
  }, []);
  const selectedPhotos = useMemo(() => selection?.ids.map((id) => localizePhoto(getPhoto(id), locale)) || [], [selection?.ids, locale]);
  const visible = filter === 'Arquivo original' ? archivePhotos : filter === 'Todas' ? exhibitionPhotos : exhibitionPhotos.filter((photo) => photo.tags.includes(filter));
  const collection = filter === 'Arquivo original' ? archivePhotos : exhibitionPhotos;
  const openVisible = (id: string) => openPhoto(id, visible);
  const handleIntroComplete = useCallback(() => setIntroDone(true), []);
  const selectedStory = selection?.story === undefined ? undefined : typeof selection.story === 'number' ? c.stories.items[selection.story]?.title : selection.story;

  return <>
    {!introDone && <IntroLoader reduced={reduced} locale={locale} onComplete={handleIntroComplete} />}
    <a className="hz-skip" href="#gallery">{c.skip}</a>
    <div className="hz-progress" aria-hidden="true" />
    <div className="hz-grain" aria-hidden="true" />
    <div className="hz-cursor" ref={cursorRef} aria-hidden="true"><span /></div>

    <header className="hz-header">
      <a href="#home" className="hz-brand" aria-label={c.home}>HANZI<span /></a>
      <span className="hz-header-center">STORIES THROUGH LIGHT <i/> JAPAN / 2026</span>
      <nav className="hz-header-nav" aria-label={c.nav.main}>
        <a href="#gallery" data-cursor="EXPLORE">{c.nav.index}</a>
        <a href="#about" data-cursor="OPEN">{c.nav.about}</a>
        <LanguageSwitcher locale={locale} onChange={setLocale} />
        <button type="button" onClick={() => setMenuOpen(true)} aria-label={c.nav.menu} data-cursor="EXPLORE">{c.nav.menu} <Menu size={17}/></button>
      </nav>
    </header>

    <main className="hz-main">
      <ExhibitionHero onOpen={openPhoto} reduced={reduced} ready={introDone} locale={locale} />

      <section className="hz-arrival hz-section" id="arrival" aria-labelledby="arrival-title">
        <div className="hz-section-line"><span>{c.arrival.chapter}</span><span>日本へようこそ</span></div>
        <div className="hz-arrival-heading hz-reveal">
          <p className="hz-eyebrow">{c.arrival.eyebrow}</p>
          <h2 id="arrival-title">{c.arrival.first} <em>{c.arrival.accent}</em><br/>{c.arrival.last}</h2>
          <p>{c.arrival.intro}</p>
        </div>
        <div className="hz-arrival-images">
          <PhotoFigure id="tokyo-rain" number="001" onOpen={openPhoto} locale={locale} className="hz-arrival-first hz-reveal" />
          <PhotoFigure id="kyoto-street" number="002" onOpen={openPhoto} locale={locale} className="hz-arrival-second hz-reveal" />
          <div className="hz-arrival-people hz-reveal">
            <span className="hz-arrival-people-label">{c.arrival.peopleLabel}</span>
            <p className="hz-arrival-people-line">{c.arrival.peopleLine}</p>
            <p className="hz-arrival-people-note">{c.arrival.peopleNote}</p>
            <span className="hz-arrival-people-kanji" lang="ja" aria-hidden="true">人</span>
          </div>
        </div>
        <div className="hz-arrival-foot"><span>{c.arrival.rhythm}</span><span>{c.arrival.slowly} <ArrowDown size={15}/></span></div>
      </section>

      <section className="hz-tokyo hz-section" id="tokyo" aria-labelledby="tokyo-title">
        <div className="hz-section-line"><span>{c.tokyo.chapter}</span><span>35.6762° N — 139.6503° E</span></div>
        <div className="hz-tokyo-title hz-reveal"><span lang="ja">東京</span><h2 id="tokyo-title">{c.tokyo.name}</h2><p>{c.tokyo.line}</p></div>
        <PhotoFigure id="tokyo-shibuya" number="003" onOpen={openPhoto} locale={locale} className="hz-tokyo-wide hz-reveal" sizes="(max-width: 700px) 90vw, 82vw" />
        <div className="hz-tokyo-aside"><span>{c.tokyo.still}</span><p>{c.tokyo.aside}</p></div>
        <div className="hz-additional-pair"><PhotoFigure id="shinjuku-wet" number="004" onOpen={openPhoto} locale={locale} className="hz-reveal"/><PhotoFigure id="tokyo-tower" number="005" onOpen={openPhoto} locale={locale} className="hz-reveal"/></div>
        <div className="hz-tokyo-afterword hz-reveal">
          <span className="hz-tokyo-afterword-symbol" lang="ja" aria-hidden="true">日常</span>
          <div><span className="hz-eyebrow">{c.tokyo.peopleLabel}</span><p>{c.tokyo.peopleLine}</p></div>
        </div>
      </section>

      <section className="hz-night" id="night" aria-labelledby="night-title">
        <div className="hz-night-backdrop"><ExhibitionPhoto photo={getPhoto('shinjuku-umbrellas')} locale={locale} onOpen={openPhoto} sizes="100vw" /></div>
        <div className="hz-night-overlay" />
        <div className="hz-night-content hz-reveal"><span>{c.night.chapter}</span><h2 id="night-title">{c.night.name}{locale !== 'ja' && <span lang="ja">夜</span>}</h2><p>02:37 AM<br/>{c.night.place}</p></div>
        <span className="hz-night-bottom">{c.night.line}</span>
      </section>

      <section className="hz-frames-section hz-section" aria-labelledby="frames-title">
        <div className="hz-section-line"><span>{c.frames.chapter}</span><span>{c.frames.instruction}</span></div>
        <div className="hz-frames-people hz-reveal"><span>{c.frames.peopleLabel}</span><p>{c.frames.peopleLine}</p></div>
        <div className="hz-frames-head hz-reveal"><h2 id="frames-title">{c.frames.first} <em>{c.frames.accent}</em></h2><div><span>{c.frames.line}</span><button type="button" aria-label={c.frames.previous} onClick={() => framesRef.current?.scrollBy({ left: -Math.min(620, innerWidth * .8), behavior: reduced ? 'instant' : 'smooth' })}><ArrowLeft/></button><button type="button" aria-label={c.frames.next} onClick={() => framesRef.current?.scrollBy({ left: Math.min(620, innerWidth * .8), behavior: reduced ? 'instant' : 'smooth' })}><ArrowRight/></button></div></div>
        <div className="hz-frames-track" ref={framesRef}>
          {['tokyo-platform', 'aomori-rail', 'akita-snow', 'tokyo-familymart', 'kyoto-station', 'tokyo-rain'].map((id, index) => <PhotoFigure key={id} id={id} number={`${c.frames.frame} ${pad(index + 1)}`} onOpen={openPhoto} locale={locale} sizes="(max-width: 700px) 78vw, 42vw" />)}
        </div>
      </section>

      <section className="hz-tradition hz-section" id="tradition" aria-labelledby="tradition-title">
        <div className="hz-section-line"><span>{c.tradition.chapter}</span><span>KYOTO / 京都</span></div>
        <div className="hz-tradition-heading hz-reveal"><p className="hz-eyebrow">{c.tradition.eyebrow}</p><h2 id="tradition-title">{c.tradition.first}<br/><em>{c.tradition.accent}</em></h2></div>
        <div className="hz-tradition-grid">
          <PhotoFigure id="kyoto-temple" number="006" onOpen={openPhoto} locale={locale} className="hz-tradition-main hz-reveal" />
          <div className="hz-tradition-side hz-reveal"><p lang="ja">古い道を歩く</p><PhotoFigure id="kyoto-torii" number="007" onOpen={openPhoto} locale={locale} /><span>{c.tradition.line}</span></div>
        </div>
        <div className="hz-additional-pair hz-additional-tradition"><PhotoFigure id="gion-motion" number="008" onOpen={openPhoto} locale={locale} className="hz-reveal"/><PhotoFigure id="kyoto-sakura-lantern" number="009" onOpen={openPhoto} locale={locale} className="hz-reveal"/></div>
      </section>

      <section className="hz-silence hz-section" id="silence" aria-labelledby="silence-title">
        <div className="hz-section-line"><span>{c.silence.chapter}</span><span>静寂</span></div>
        <div className="hz-silence-inner"><p className="hz-eyebrow">{c.silence.eyebrow}</p><h2 id="silence-title">静寂</h2><p>{c.silence.line}</p><div className="hz-silence-photo hz-reveal"><ExhibitionPhoto photo={getPhoto('winter-forest')} locale={locale} onOpen={openPhoto} sizes="(max-width: 700px) 85vw, 65vw" /></div></div>
      </section>

      <section className="hz-nature" id="nature" aria-labelledby="nature-title">
        <div className="hz-nature-image"><picture><source type="image/avif" srcSet={photoSourcesForFuji.avif} sizes="100vw"/><source type="image/webp" srcSet={photoSourcesForFuji.webp} sizes="100vw"/><img src={photoSourcesForFuji.src} alt={localizePhoto(getPhoto('fuji-lake'), locale).alt} width={photoSourcesForFuji.width} height={photoSourcesForFuji.height} loading="lazy" data-hz-parallax /></picture></div>
        <div className="hz-nature-shade"/><div className="hz-nature-copy"><span>{c.nature.chapter}</span><h2 id="nature-title">FUJI</h2><p>{c.nature.line}</p><button type="button" onClick={() => openPhoto('fuji-lake')}>{c.nature.view} <ArrowUpRight size={17}/></button></div>
      </section>

      <section className="hz-gallery hz-section" id="gallery" aria-labelledby="gallery-title">
        <div className="hz-section-line"><span>{c.gallery.chapter}</span><span>{c.gallery.subtitle}</span></div>
        <div className="hz-gallery-head hz-reveal"><div><p className="hz-eyebrow">{c.gallery.eyebrow}</p><h2 id="gallery-title">{c.gallery.first} <em>{c.gallery.accent}</em></h2></div><span>{pad(visible.length)} <small>{c.gallery.count}</small></span></div>
        <div className="hz-filters" role="group" aria-label={c.gallery.filter}>
          {[...exhibitionCategories, 'Arquivo original'].map((name) => <button type="button" key={name} className={filter === name ? 'is-active' : ''} aria-pressed={filter === name} onClick={() => setFilter(name)}>{name === 'Arquivo original' ? c.gallery.archive : c.gallery.categories[name as keyof typeof c.gallery.categories]}<sup>{name === 'Arquivo original' ? archivePhotos.length : name === 'Todas' ? exhibitionPhotos.length : exhibitionPhotos.filter((photo) => photo.tags.includes(name)).length}</sup></button>)}
        </div>
        <p className="sr-only" role="status">{visible.length} {c.gallery.in} {filter === 'Arquivo original' ? c.gallery.archive : c.gallery.categories[filter as keyof typeof c.gallery.categories]}</p>
        <div className={`hz-gallery-grid ${filter === 'Arquivo original' ? 'is-archive' : ''}`} key={filter}>
          {visible.map((photo, index) => <PhotoFigure key={photo.id} id={photo.id} number={pad(index + 1)} onOpen={openVisible} locale={locale} />)}
        </div>
        <div className="hz-gallery-end"><span>{c.gallery.end}</span><span>{pad(visible.length)} / {pad(collection.length)}</span></div>
      </section>

      <section className="hz-stories hz-section" id="stories" aria-labelledby="stories-title">
        <div className="hz-section-line"><span>{c.stories.chapter}</span><span>{c.stories.subtitle}</span></div>
        <div className="hz-stories-head hz-reveal"><h2 id="stories-title">{c.stories.first} <em>{c.stories.accent}</em></h2><p>{c.stories.intro}</p></div>
        <div className="hz-stories-grid">{exhibitionStories.map((story, index) => {
          const photo = getPhoto(story.ids[0]);
          return <article className="hz-story" key={story.title} data-cursor="EXPLORE">
            <ExhibitionPhoto photo={photo} locale={locale} onOpen={() => openPhoto(photo.id, story.ids.map(getPhoto), index)} sizes="(max-width: 700px) 88vw, 32vw" />
            <button type="button" className="hz-story-link" onClick={() => openPhoto(photo.id, story.ids.map(getPhoto), index)}><span className="hz-story-meta"><span>{pad(index + 1)} / {c.stories.items[index].eyebrow}</span><ArrowUpRight size={19}/></span><strong>{c.stories.items[index].title}</strong><small>{pad(story.ids.length)} {c.stories.frames}</small></button>
          </article>;
        })}</div>
        <details className="hz-archive-stories"><summary>{c.stories.archive} <span>↗</span></summary><div>{archiveStories.map((story, index) => { const translated = localizeArchiveSeries(index, locale, story); return <button type="button" key={story.title} onClick={() => openPhoto(story.ids[0], story.ids.map(getPhoto), translated.title)}>{translated.title}<span>{translated.eyebrow}</span></button>; })}</div></details>
      </section>

      <section className="hz-about hz-section" id="about" aria-labelledby="about-title"><div className="hz-section-line"><span>{c.about.chapter}</span><span>{c.about.subtitle}</span></div><div className="hz-about-grid"><span lang="ja">光</span><div className="hz-reveal"><p className="hz-eyebrow">{c.about.eyebrow}</p><h2 id="about-title">{c.about.first} <em>{c.about.accent}</em></h2><p>{c.about.p1}</p><p>{c.about.p2}</p></div></div></section>
    </main>

    <footer className="hz-footer" id="contact"><div className="hz-footer-top"><span>HANZI</span><p>STORIES THROUGH LIGHT<br/>{locale !== 'ja' && <><span lang="ja">写真は記憶になる</span><br/></>}{c.footer.memory}</p></div><div className="hz-footer-bottom"><span>{c.hero.city}</span><button type="button" onClick={() => setManualReduced((value) => !value)} aria-pressed={reduced}>{c.footer.movement}: {reduced ? c.footer.off : c.footer.on}</button><a href="#home">{c.footer.back}</a></div></footer>

    <ExhibitionMenu open={menuOpen} onOpenChange={setMenuOpen} locale={locale} onLocaleChange={setLocale}/>
    {selection && <Suspense fallback={null}><LightboxModal open={true} onOpenChange={(open) => { if (!open) closePhoto(); }} photos={selectedPhotos} currentId={selection.ids[selection.index]} storyTitle={selectedStory} locale={locale} onNavigate={(delta) => setSelection((current) => current ? { ...current, index: (current.index + delta + current.ids.length) % current.ids.length } : null)} onSelectPhoto={(id) => setSelection((current) => current ? { ...current, index: Math.max(0, current.ids.indexOf(id)) } : null)}/></Suspense>}
  </>;
}

const photoSourcesForFuji = photoSources(getPhoto('fuji-lake'));
