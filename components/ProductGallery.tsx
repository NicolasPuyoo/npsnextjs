"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { Volume2, ChevronLeft, ChevronRight } from "lucide-react";

const SWIPE_THRESHOLD_PX = 40;

export type GalleryImage = {
  src: string;
  alt: string;
  /** "cover" = remplit le cadre (photo en situation). "contain" = packshot fond blanc avec padding. */
  fit?: "cover" | "contain";
};

interface ProductGalleryProps {
  images: GalleryImage[];
  productName: string;
  /** Badge dB optionnel à afficher en surimpression sur l'image active. */
  acousticDb?: string | null;
}

const ProductGallery = ({ images, productName, acousticDb }: ProductGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = images[activeIndex] ?? images[0];
  const hasMultiple = images.length > 1;
  const touchStartX = useRef<number | null>(null);

  const goPrev = useCallback(() => {
    setActiveIndex((i) => (i - 1 + images.length) % images.length);
  }, [images.length]);

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (!hasMultiple) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [hasMultiple, goPrev, goNext]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || !hasMultiple) return;
    const endX = e.changedTouches[0]?.clientX;
    if (endX === undefined) {
      touchStartX.current = null;
      return;
    }
    const diff = touchStartX.current - endX;
    if (Math.abs(diff) >= SWIPE_THRESHOLD_PX) {
      if (diff > 0) goNext();
      else goPrev();
    }
    touchStartX.current = null;
  };

  if (!active) return null;

  return (
    <div className="space-y-4">
      {/* Image principale active */}
      <div
        className={
          active.fit === "contain"
            ? "bg-white rounded-3xl shadow-card relative overflow-hidden aspect-square flex items-center justify-center p-8 touch-pan-y select-none"
            : "bg-white rounded-3xl shadow-card relative overflow-hidden aspect-square touch-pan-y select-none"
        }
        onTouchStart={hasMultiple ? onTouchStart : undefined}
        onTouchEnd={hasMultiple ? onTouchEnd : undefined}
      >
        {acousticDb && (
          <div className="absolute top-6 right-6 bg-primary text-primary-foreground rounded-2xl px-4 py-2 flex items-center gap-2 shadow-lg z-10">
            <Volume2 className="h-5 w-5" />
            <div className="text-right">
              <span className="block text-xs opacity-80">Performance</span>
              <span className="block text-lg font-bold leading-tight">jusqu'à {acousticDb} dB</span>
            </div>
          </div>
        )}
        {active.fit === "contain" ? (
          <img
            src={active.src}
            alt={active.alt}
            draggable={false}
            className="max-w-[85%] max-h-[85%] w-auto h-auto object-contain pointer-events-none"
          />
        ) : (
          <img
            src={active.src}
            alt={active.alt}
            draggable={false}
            className="w-full h-full object-cover pointer-events-none"
          />
        )}

        {/* Flèches latérales — clic souris/desktop, hidden sur 1 image */}
        {hasMultiple && (
          <>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Image précédente"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/90 hover:bg-white shadow-md hover:shadow-lg flex items-center justify-center text-foreground/70 hover:text-foreground transition-all backdrop-blur-sm"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Image suivante"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-white/90 hover:bg-white shadow-md hover:shadow-lg flex items-center justify-center text-foreground/70 hover:text-foreground transition-all backdrop-blur-sm"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}
      </div>

      {/* Miniatures cliquables — visible seulement si plus d'une image */}
      {hasMultiple && (
        <div
          role="tablist"
          aria-label={`Images de ${productName}`}
          className="flex gap-3 overflow-x-auto pb-1 -mx-1 px-1 snap-x"
        >
          {images.map((img, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={img.src + i}
                role="tab"
                aria-selected={isActive}
                aria-label={`Voir l'image ${i + 1} sur ${images.length}`}
                onClick={() => setActiveIndex(i)}
                className={
                  "shrink-0 snap-start w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-white border-2 transition-all duration-200 " +
                  (isActive
                    ? "border-primary shadow-md scale-[1.02]"
                    : "border-border hover:border-primary/40")
                }
              >
                <img
                  src={img.src}
                  alt=""
                  className={img.fit === "contain" ? "w-full h-full object-contain p-1" : "w-full h-full object-cover"}
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
