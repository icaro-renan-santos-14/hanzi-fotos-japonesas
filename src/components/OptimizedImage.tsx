import { useState, useRef, useEffect, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  loading?: "lazy" | "eager";
  decoding?: "async" | "sync" | "auto";
  fetchPriority?: "high" | "low" | "auto";
  style?: CSSProperties;
  aspectRatio?: string | number;
  width?: number | string;
  height?: number | string;
  objectPosition?: string;
  showVignette?: boolean;
  avifSrcSet?: string;
  webpSrcSet?: string;
  sizes?: string;
  placeholder?: string;
}

export function OptimizedImage({
  src,
  alt,
  className = "",
  imgClassName = "",
  loading = "lazy",
  decoding = "async",
  fetchPriority = "auto",
  style,
  aspectRatio,
  width,
  height,
  objectPosition,
  showVignette = true,
  avifSrcSet,
  webpSrcSet,
  sizes,
  placeholder,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current?.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
    }
  }, [src]);

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-neutral-950 isolate select-none",
        className
      )}
      style={{
        ...(aspectRatio ? { aspectRatio: String(aspectRatio) } : {}),
        ...(placeholder ? { backgroundImage: `url("${placeholder}")`, backgroundSize: 'cover', backgroundPosition: objectPosition || 'center' } : {}),
        ...style,
      }}
    >
      {/* Skeleton Shimmer enquanto a imagem carrega */}
      <div
        className={cn(
          "absolute inset-0 z-0 bg-neutral-900 transition-opacity duration-700 pointer-events-none",
          isLoaded ? "opacity-0" : "opacity-100"
        )}
      >
        <div className="skeleton-shimmer absolute inset-0" />
      </div>

      {/* Tag de Imagem com efeito Blur-up suave */}
      <picture>
        {avifSrcSet && <source type="image/avif" srcSet={avifSrcSet} sizes={sizes} />}
        {webpSrcSet && <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />}
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        loading={loading}
        decoding={decoding}
        fetchPriority={fetchPriority}
        sizes={sizes}
        width={width}
        height={height}
        onLoad={() => setIsLoaded(true)}
        className={cn(
          "h-full w-full object-cover transition-all duration-700 ease-out",
          isLoaded
            ? "blur-0 scale-100 opacity-100"
            : "blur-md scale-105 opacity-0",
          imgClassName
        )}
        style={{
          ...(objectPosition ? { objectPosition } : {}),
        }}
      />
      </picture>

      {/* Camada sutil de vinheta escura para enriquecer a estética cinematográfica */}
      {showVignette && (
        <div
          className="photo-vignette pointer-events-none absolute inset-0 z-10 transition-opacity duration-500"
          aria-hidden="true"
        />
      )}
    </div>
  );
}
