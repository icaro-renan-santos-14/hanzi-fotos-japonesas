import { useEffect, useState } from 'react';
import { copy, type Locale } from '@/i18n/copy';

const steps = [0, 17, 34, 62, 81, 100];

export function IntroLoader({ onComplete, reduced, locale }: { onComplete: () => void; reduced: boolean; locale: Locale }) {
  const c = copy[locale];
  const [step, setStep] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (reduced || sessionStorage.getItem('hanzi-intro-seen')) {
      onComplete();
      return;
    }
    const timers = steps.slice(1).map((_, i) => window.setTimeout(() => setStep(i + 1), 180 + i * 170));
    timers.push(window.setTimeout(() => setLeaving(true), 1180));
    timers.push(window.setTimeout(() => { sessionStorage.setItem('hanzi-intro-seen', '1'); onComplete(); }, 1750));
    return () => timers.forEach(window.clearTimeout);
  }, [onComplete, reduced]);

  return (
    <div className={`hz-loader ${leaving ? 'is-leaving' : ''}`} aria-label={c.loader.loading} aria-live="polite">
      <span className="hz-loader-jp" lang="ja">光</span>
      <span className="hz-loader-name">HANZI</span>
      <span className="hz-loader-line" />
      <span className="hz-loader-sub">{c.hero.tagline}</span>
      <span className="hz-loader-count">{String(steps[step]).padStart(2, '0')}</span>
      <button type="button" onClick={() => { sessionStorage.setItem('hanzi-intro-seen', '1'); onComplete(); }}
        className="hz-loader-skip">{c.loader.skip}</button>
    </div>
  );
}
