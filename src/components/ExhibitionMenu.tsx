import { useEffect, useState } from 'react';
import { ArrowUpRight, X } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogTitle } from '@/components/ui/dialog';
import { exhibitionPhotos, photoSources } from '@/data/exhibition';
import { LanguageSwitcher } from './LanguageSwitcher';
import { copy, type Locale } from '@/i18n/copy';

const destinations = [
  { number: '01', href: '#gallery', photoId: 'tokyo-aerial', jp: '写真' },
  { number: '02', href: '#stories', photoId: 'kyoto-street', jp: '物語' },
  { number: '03', href: '#about', photoId: 'winter-forest', jp: '視点' },
  { number: '04', href: '#contact', photoId: 'tokyo-rain', jp: '連絡' },
] as const;

export function ExhibitionMenu({ open, onOpenChange, locale, onLocaleChange }: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  locale: Locale;
  onLocaleChange: (value: Locale) => void;
}) {
  const c = copy[locale];
  const [active, setActive] = useState(0);
  const labels = [c.nav.index, c.nav.stories, c.nav.about, c.nav.contact];
  const details = [c.nav.menuDetails.index, c.nav.menuDetails.stories, c.nav.menuDetails.about, c.nav.menuDetails.contact];
  const destination = destinations[active];
  const photo = exhibitionPhotos.find((item) => item.id === destination.photoId) ?? exhibitionPhotos[0];
  const source = photoSources(photo);

  useEffect(() => {
    if (!open) return;
    const closeOnHash = () => onOpenChange(false);
    window.addEventListener('hashchange', closeOnHash);
    return () => window.removeEventListener('hashchange', closeOnHash);
  }, [open, onOpenChange]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent showCloseButton={false} className="hz-menu-panel">
        <DialogTitle className="sr-only">{c.nav.title}</DialogTitle>
        <DialogDescription className="sr-only">{c.nav.description}</DialogDescription>

        <div className="hz-menu-top">
          <div className="hz-menu-brand"><span>HANZI<i /></span><small>{c.nav.menuKicker}</small></div>
          <div className="hz-menu-actions">
            <LanguageSwitcher locale={locale} onChange={onLocaleChange} />
            <button className="hz-menu-close" type="button" onClick={() => onOpenChange(false)} aria-label={c.nav.close}>
              <span>{c.nav.close}</span><X size={18} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div className="hz-menu-main">
          <div className="hz-menu-nav-wrap">
            <div className="hz-menu-intro"><span>{c.nav.menuLead}</span><span>01 — 04</span></div>
            <nav aria-label={c.nav.section} className="hz-menu-links">
              {destinations.map((item, index) => (
                <a href={item.href} key={item.href} className={active === index ? 'is-active' : ''}
                  onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} onClick={() => onOpenChange(false)}>
                  <span className="hz-menu-number">{item.number}</span>
                  <span className="hz-menu-link-copy"><strong>{labels[index]}</strong><small>{details[index]}</small></span>
                  <ArrowUpRight className="hz-menu-link-arrow" size={22} aria-hidden="true" />
                </a>
              ))}
            </nav>
            <span className="hz-menu-nav-foot" lang="ja">光と影の物語</span>
          </div>

          <div className="hz-menu-preview" aria-hidden="true">
            <div className="hz-menu-preview-image" style={{ backgroundImage: source.placeholder ? `url(${source.placeholder})` : undefined }}>
              <picture key={destination.photoId}>
                {source.avif && <source type="image/avif" srcSet={source.avif} sizes="(max-width: 760px) 90vw, 40vw" />}
                {source.webp && <source type="image/webp" srcSet={source.webp} sizes="(max-width: 760px) 90vw, 40vw" />}
                <img src={source.src} alt="" width={source.width} height={source.height} decoding="async" />
              </picture>
              <span className="hz-menu-preview-index">{destination.number} / 04</span>
            </div>
            <div className="hz-menu-preview-caption"><span>{details[active]}</span><span lang="ja">{destination.jp}</span></div>
          </div>
        </div>

        <div className="hz-menu-bottom"><span>{c.nav.menuClosing}</span><span>{c.hero.city}</span></div>
      </DialogContent>
    </Dialog>
  );
}
