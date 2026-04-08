"use client";

import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import {
  pricingColumnLayout,
  pricingGuideNote,
  pricingGuideQuestions,
  pricingItems,
  type PricingItem,
} from "@/data/siteData";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MessageIcon,
  PriceTagIcon,
} from "@/components/Icons";

type PricingImage = {
  itemTitle: string;
  imageIndex: number;
  src: string;
  alt: string;
};

type PricingLightboxProps = {
  images: PricingImage[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

type PricingCardProps = {
  item: PricingItem;
  onPreview: (image: PricingImage) => void;
  cardClassName?: string;
  style?: CSSProperties;
  imageLoading?: "eager" | "lazy";
};

function PricingLightbox({
  images,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}: PricingLightboxProps) {
  const [mounted, setMounted] = useState(false);

  const currentImage = images[currentIndex];
  const total = images.length;

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
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <button
        className="lightbox-nav lightbox-nav-prev"
        onClick={(event) => {
          event.stopPropagation();
          onPrev();
        }}
        aria-label="上一张"
      >
        <ChevronLeftIcon size={26} color="currentColor" />
      </button>

      <button
        className="lightbox-nav lightbox-nav-next"
        onClick={(event) => {
          event.stopPropagation();
          onNext();
        }}
        aria-label="下一张"
      >
        <ChevronRightIcon size={26} color="currentColor" />
      </button>

      <div className="lightbox-content" onClick={(event) => event.stopPropagation()}>
        <div className="lightbox-image-shell">
          <img
            key={currentImage.src}
            src={currentImage.src}
            alt={currentImage.alt}
          />
          <div className="lightbox-counter">
            {currentIndex + 1} / {total}
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}

function PricingCard({
  item,
  onPreview,
  cardClassName = "",
  style,
  imageLoading = "lazy",
}: PricingCardProps) {
  return (
    <article className={`pricing-item-card ${cardClassName}`.trim()} style={style}>
      <div className="pricing-item-card-top">

        <div className="pricing-order-chip">{item.order}</div>
        <div className="pricing-price-block">
          <p className="pricing-item-title">{item.title}</p>
          <p className="pricing-main-price">{item.price}</p>
          {item.priceDetail && (
            <p className="pricing-price-detail">{item.priceDetail}</p>
          )}
        </div>
      </div>

      <ul className="pricing-description-list">
        {item.description.map((text) => (
          <li key={text}>{text}</li>
        ))}
      </ul>

      {item.extras && item.extras.length > 0 && (
        <div className="pricing-extra-box">
          <p className="pricing-extra-title">
            {item.extrasTitle ?? "补充说明"}
          </p>
          <div className="pricing-extra-tags">
            {item.extras.map((extra) => (
              <span className="pricing-extra-tag" key={extra}>
                {extra}
              </span>
            ))}
          </div>
        </div>
      )}

      {item.images.length > 0 ? (
        <div className="pricing-sample-grid">
          {item.images.map((image, index) => (
            <button
              type="button"
              className={`pricing-sample-item ${
                item.images.length === 1
                  ? "pricing-sample-item-single"
                  : "pricing-sample-item-multi"
              }`}
              key={image.src}
              onClick={() =>
                onPreview({
                  itemTitle: item.title,
                  imageIndex: index,
                  src: image.src,
                  alt: image.alt,
                })
              }
            >
              <img src={image.src} alt={image.alt} loading={imageLoading} />
              <span className="pricing-sample-caption">
                {item.title}例图 {index + 1}
              </span>
            </button>
          ))}
        </div>
      ) : (
        <div className="pricing-empty-sample">
          该分类暂未放出例图，具体可私聊沟通参考方向 ^w^
        </div>
      )}
    </article>
  );
}

export default function PricingSection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isMobileLayout, setIsMobileLayout] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const syncLayout = (event?: MediaQueryListEvent) => {
      setIsMobileLayout(event ? event.matches : mediaQuery.matches);
    };

    syncLayout();

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", syncLayout);
      return () => mediaQuery.removeEventListener("change", syncLayout);
    }

    mediaQuery.addListener(syncLayout);
    return () => mediaQuery.removeListener(syncLayout);
  }, []);

  const pricingItemsById = useMemo(
    () => new Map(pricingItems.map((item) => [item.id, item])),
    []
  );

  const leftColumnItems = useMemo(() => {
    return pricingColumnLayout.left
      .map((id) => pricingItemsById.get(id))
      .filter((item): item is PricingItem => Boolean(item));
  }, [pricingItemsById]);

  const rightColumnItems = useMemo(() => {
    return pricingColumnLayout.right
      .map((id) => pricingItemsById.get(id))
      .filter((item): item is PricingItem => Boolean(item));
  }, [pricingItemsById]);

  const layoutIds = useMemo(
    () => new Set([...pricingColumnLayout.left, ...pricingColumnLayout.right]),
    []
  );

  const unassignedItems = useMemo(
    () => pricingItems.filter((item) => !layoutIds.has(item.id)),
    [layoutIds]
  );

  const mobileItems = useMemo(() => {
    const assignedItems = pricingItems.filter((item) => layoutIds.has(item.id));
    return [...assignedItems, ...unassignedItems];
  }, [layoutIds, unassignedItems]);

  const lightboxImages = useMemo(
    () =>
      pricingItems.flatMap((item) =>
        item.images.map((image, index) => ({
          itemTitle: item.title,
          imageIndex: index,
          src: image.src,
          alt: image.alt,
        }))
      ),
    []
  );

  const hasLightbox = lightboxIndex !== null;

  const openPreview = (image: PricingImage) => {
    const targetIndex = lightboxImages.findIndex(
      (entry) => entry.src === image.src
    );

    if (targetIndex >= 0) {
      setLightboxIndex(targetIndex);
    }
  };

  const handlePrev = () => {
    setLightboxIndex((previous) => {
      if (previous === null) return previous;
      return previous === 0 ? lightboxImages.length - 1 : previous - 1;
    });
  };

  const handleNext = () => {
    setLightboxIndex((previous) => {
      if (previous === null) return previous;

      return previous === lightboxImages.length - 1 ? 0 : previous + 1;
    });
  };

  return (
    <section className="card pricing-section-card">
      <div className="pricing-section-header">
        <div>
          <h2 className="section-heading pricing-section-title">
            <span className="section-heading-icon">
              <PriceTagIcon size={20} color="var(--primary-color)" />
            </span>
            价目表
          </h2>
          <p className="pricing-section-subtitle">
            这里是价目表！欢迎随时来加QQ私信估价想约的业务(≧▽≦)
          </p>
        </div>
      </div>

      {isMobileLayout ? (
        <div className="pricing-grid pricing-grid-mobile" role="list">
          {mobileItems.map((item) => (
            <div key={item.id} className="pricing-grid-item">
              <PricingCard item={item} onPreview={openPreview} />
            </div>
          ))}
        </div>
      ) : (
        <>
          <div className="pricing-grid pricing-grid-desktop" role="list">
            <div className="pricing-grid-column pricing-grid-column-left">
              {leftColumnItems.map((item) => (
                <div key={item.id} className="pricing-grid-item">
                  <PricingCard item={item} onPreview={openPreview} />
                </div>
              ))}
            </div>

            <div className="pricing-grid-column pricing-grid-column-right">
              {rightColumnItems.map((item) => (
                <div key={item.id} className="pricing-grid-item">
                  <PricingCard item={item} onPreview={openPreview} />
                </div>
              ))}
            </div>
          </div>

          {unassignedItems.length > 0 && (
            <div className="pricing-grid pricing-grid-fallback" role="list">
              <div className="pricing-grid-column pricing-grid-column-left">
                {unassignedItems.map((item) => (
                  <div key={item.id} className="pricing-grid-item">
                    <PricingCard item={item} onPreview={openPreview} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      <div className="pricing-guide-card">
        <h3 className="pricing-guide-heading">
          <MessageIcon size={18} color="var(--primary-color)" />
          大人想炒什么饭？
        </h3>

        <div className="pricing-guide-list">
          {pricingGuideQuestions.map((item) => (
            <div className="pricing-guide-item" key={item.question}>
              <p className="pricing-guide-question">{item.question}</p>
              <p className="pricing-guide-example">{item.example}</p>
            </div>
          ))}
        </div>
        <p className="pricing-guide-note">{pricingGuideNote}</p>
      </div>

      {hasLightbox && lightboxIndex !== null && lightboxImages.length > 0 && (
        <PricingLightbox
          images={lightboxImages}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  );
}
