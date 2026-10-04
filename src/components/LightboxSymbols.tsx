import type { SVGProps } from 'react';

type SymbolProps = SVGProps<SVGSVGElement>;

/** An original, open ink circle inspired by the Japanese ensō. */
export function ZenSymbol(props: SymbolProps) {
  return <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
    <path d="M18.65 5.42A8.7 8.7 0 0 0 12.3 3.6a8.55 8.55 0 1 0 8.15 10.2" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
    <path d="M18.65 5.42c.84.72 1.4 1.5 1.82 2.36" stroke="currentColor" strokeWidth="1.15" strokeLinecap="round" />
    <circle cx="20.62" cy="10.36" r="1.12" fill="#C8102E" />
  </svg>;
}

/** Four framing corners, like a viewfinder and the joinery of a shōji screen. */
export function FrameSymbol({ inset = false, ...props }: SymbolProps & { inset?: boolean }) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="square" aria-hidden="true" {...props}>
    {inset ? <path d="M9 3.5v5.5H3.5m11.5-5.5v5.5h5.5M9 20.5V15H3.5m11.5 5.5V15h5.5" />
      : <path d="M9 4H4v5m11-5h5v5M4 15v5h5m11-5v5h-5" />}
  </svg>;
}

export function CloseSymbol(props: SymbolProps) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="square" aria-hidden="true" {...props}>
    <path d="M5.3 5.3 18.7 18.7M18.7 5.3 5.3 18.7" />
  </svg>;
}
