import React, { useEffect, useMemo, useState } from "react";

/**
 * A lightweight background image slider/carousel.
 * - No external dependencies.
 * - Designed to sit behind the app content as a full-viewport layer.
 * - Supports single-slide usage (as requested) but can scale to multiple slides.
 */

/**
 * PUBLIC_INTERFACE
 */
export default function BackgroundSlider({
  slides,
  intervalMs = 8000,
  className = "",
  showControls = false,
  showIndicators = false,
}) {
  /** This component intentionally stays simple and resilient. */
  const normalizedSlides = useMemo(() => {
    if (!Array.isArray(slides) || slides.length === 0) return [];
    return slides
      .filter(Boolean)
      .map((s) => ({
        src: s.src,
        alt: s.alt || "Background slide",
      }))
      .filter((s) => typeof s.src === "string" && s.src.trim().length > 0);
  }, [slides]);

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (normalizedSlides.length <= 1) return undefined;

    const id = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % normalizedSlides.length);
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [normalizedSlides.length, intervalMs]);

  const canNavigate = normalizedSlides.length > 1;

  const goPrev = () => {
    if (!canNavigate) return;
    setActiveIndex((i) => (i - 1 + normalizedSlides.length) % normalizedSlides.length);
  };

  const goNext = () => {
    if (!canNavigate) return;
    setActiveIndex((i) => (i + 1) % normalizedSlides.length);
  };

  if (normalizedSlides.length === 0) return null;

  return (
    <div className={`bg-slider ${className}`} aria-hidden="true">
      <div className="bg-slider__viewport">
        {normalizedSlides.map((slide, idx) => (
          <div
            key={`${slide.src}-${idx}`}
            className={`bg-slider__slide ${idx === activeIndex ? "is-active" : ""}`}
            style={{ backgroundImage: `url("${slide.src}")` }}
            role="img"
            aria-label={slide.alt}
          />
        ))}
      </div>

      {showControls && (
        <div className="bg-slider__controls" aria-hidden="false">
          <button
            type="button"
            className="bg-slider__control"
            onClick={goPrev}
            disabled={!canNavigate}
            aria-label="Previous background"
            title="Previous"
          >
            ‹
          </button>
          <button
            type="button"
            className="bg-slider__control"
            onClick={goNext}
            disabled={!canNavigate}
            aria-label="Next background"
            title="Next"
          >
            ›
          </button>
        </div>
      )}

      {showIndicators && (
        <div className="bg-slider__indicators" aria-hidden="false">
          {normalizedSlides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`bg-slider__dot ${idx === activeIndex ? "is-active" : ""}`}
              onClick={() => setActiveIndex(idx)}
              disabled={!canNavigate}
              aria-label={`Go to background ${idx + 1}`}
              title={`Background ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
