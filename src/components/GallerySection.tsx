"use client";

import { useState } from "react";
import { galleryImages } from "@/data/siteData";
import { ImageIcon } from "@/components/Icons";

export default function GallerySection() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  return (
    <section id="gallery" className="card gallery-section">
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
            key={index}
            onClick={() => setLightboxSrc(image.src)}
          >
            <img src={image.src} alt={image.alt} loading="lazy" />
          </div>
        ))}
      </div>

      {/* 灯箱 */}
      {lightboxSrc && (
        <div className="lightbox" onClick={() => setLightboxSrc(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={lightboxSrc} alt="作品大图" />
            <button
              className="lightbox-close"
              onClick={() => setLightboxSrc(null)}
              aria-label="关闭"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
