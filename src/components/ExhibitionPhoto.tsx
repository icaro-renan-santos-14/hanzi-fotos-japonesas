import type { Photo } from '@/data/photos';
import { photoSources } from '@/data/exhibition';
import { OptimizedImage } from './OptimizedImage';
import { copy, type Locale } from '@/i18n/copy';
import { localizePhoto } from '@/i18n/photos';

export function ExhibitionPhoto({ photo, number, onOpen, locale, className = '', priority = false, sizes = '(max-width: 700px) 90vw, 50vw' }: {
  photo: Photo;
  number?: string;
  onOpen: (id: string) => void;
  locale: Locale;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  const display = localizePhoto(photo, locale);
  const c = copy[locale];
  const media = photoSources(photo);
  return (
    <button className={`hz-photo ${className}`} type="button" onClick={() => onOpen(photo.id)}
      aria-label={`${c.photo.view} ${number || ''} — ${c.photo.open}: ${display.title}`} data-cursor="VIEW">
      <OptimizedImage src={media.src} alt={display.alt || display.description} width={media.width} height={media.height}
        avifSrcSet={media.avif} webpSrcSet={media.webp} sizes={sizes} placeholder={media.placeholder}
        loading={priority ? 'eager' : 'lazy'} fetchPriority={priority ? 'high' : 'auto'}
        objectPosition={photo.position} showVignette={false} />
      <span className="hz-photo-mark" aria-hidden="true">{c.photo.view} <span>↗</span></span>
      {number && <span className="hz-photo-no" aria-hidden="true">{number}</span>}
    </button>
  );
}
