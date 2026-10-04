import { copy, languageOptions, type Locale } from '@/i18n/copy';

export function LanguageSwitcher({ locale, onChange }: { locale: Locale; onChange: (value: Locale) => void }) {
  return <div className="hz-language" role="group" aria-label={copy[locale].language}>
    {languageOptions.map(({ value, label, name }) => <button key={value} type="button" lang={value === 'ja' ? 'ja' : value === 'en' ? 'en' : 'pt-BR'}
      className={locale === value ? 'is-active' : ''} aria-label={name} aria-pressed={locale === value}
      onClick={() => onChange(value)}>{label}</button>)}
  </div>;
}
