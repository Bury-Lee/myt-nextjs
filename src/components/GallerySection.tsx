"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { galleryImages } from "@/data/siteData";
import { ChevronLeftIcon, ChevronRightIcon, ImageIcon } from "@/components/Icons";

type LightboxProps = {
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

function Lightbox({ currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  const [mounted, setMounted] = useState(false);
  const currentImage = galleryImages[currentIndex];
  const total = galleryImages.length;

  useEffect(() => {
    setMounted(true);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
      if (event.key === "ArrowLeft") {
        onPrev();
      }
      if (event.key === "ArrowRight") {
        onNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, onPrev, onNext]);

  if (!mounted || !currentImage) {
    return null;
  }

  return createPortal(
    <div className="lightbox" onClick={onClose}>
      <button
        className="lightbox-close"
        onClick={onClose}
        aria-label="关闭"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <button
        className="lightbox-nav lightbox-nav-prev"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="上一张"
      >
        <ChevronLeftIcon size={26} color="currentColor" />
      </button>

      <button
        className="lightbox-nav lightbox-nav-next"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="下一张"
      >
        <ChevronRightIcon size={26} color="currentColor" />
      </button>

      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <div className="lightbox-image-shell">
          <img key={currentImage.src} src={currentImage.src} alt={currentImage.alt} />
          <div className="lightbox-counter">{currentIndex + 1} / {total}</div>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const hasLightbox = useMemo(() => lightboxIndex !== null, [lightboxIndex]);

  const handlePrev = () => {
    setLightboxIndex((prev) => {
      if (prev === null) return prev;
      return prev === 0 ? galleryImages.length - 1 : prev - 1;
    });
  };

  const handleNext = () => {
    setLightboxIndex((prev) => {
      if (prev === null) return prev;
      return prev === galleryImages.length - 1 ? 0 : prev + 1;
    });
  };

  return (
    <section className="card gallery-section">
      <h2 className="section-heading">
        <span className="section-heading-icon">
          <ImageIcon size={20} color="var(--primary-color)" />
        </span>
        作品展示
      </h2>
      <div className="gallery-masonry">
        {galleryImages.map((image, index) => (
          <div
            className="gallery-item"
            key={image.src}
            onClick={() => setLightboxIndex(index)}
          >
            <img src={image.src} alt={image.alt} loading="lazy" />
          </div>
        ))}
      </div>

      {hasLightbox && lightboxIndex !== null && (
        <Lightbox
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  );
}
