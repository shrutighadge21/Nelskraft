"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface HeroSlide {
  src: string;
  alt: string;
}

const SLIDES: HeroSlide[] = [
  {
    src: "/images/hero/hero-slide-1.png",
    alt: "Refractory bricks in front of an active glowing industrial furnace",
  },
  {
    src: "/images/hero/hero-slide-2.jpg",
    alt: "High-density biomass fuel pellets for clean industrial energy",
  },
  {
    src: "/images/hero/hero-slide-3.jpg",
    alt: "Industrial mineral mounds and processing plant at sunset",
  },
];

export default function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatic slideshow advancing every 2.8 seconds continuously (1 -> 2 -> 3 -> 1...)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 2800);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="relative w-full min-h-[380px] sm:min-h-[480px] md:min-h-[640px] lg:h-[86vh] max-h-[880px] overflow-hidden flex items-center bg-[#fbfbfb]"
      aria-label="Nelskraft Homepage Hero"
    >
      {/* Background Slideshow - 100% natural colors, full contrast & vivid details */}
      <div className="absolute inset-0 z-0">
        {SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-900 ease-in-out will-change-opacity ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
              aria-hidden={!isActive}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          );
        })}
      </div>

      {/* Localized semi-transparent warm-white gradient ONLY on the left behind the text */}
      {/* Desktop: fades out completely before reaching the center (transparent from ~46% onwards) */}
      <div
        className="absolute inset-y-0 left-0 w-full sm:w-[54%] lg:w-[46%] pointer-events-none z-10 hidden sm:block"
        style={{
          background:
            "linear-gradient(90deg, rgba(255, 255, 255, 0.94) 0%, rgba(255, 253, 248, 0.85) 45%, rgba(255, 253, 248, 0.4) 78%, rgba(255, 255, 255, 0) 100%)",
        }}
        aria-hidden="true"
      />
      {/* Mobile: subtle, balanced overlay keeping industrial image clearly visible */}
      <div
        className="absolute inset-0 pointer-events-none z-10 sm:hidden"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0.65) 0%, rgba(255, 253, 248, 0.45) 55%, rgba(255, 253, 248, 0.15) 85%, rgba(255, 255, 255, 0) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Hero Content - Restricted to ~45% width on desktop for balanced composition */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-14 md:py-20 lg:py-24 w-full flex items-center">
        <div className="w-full sm:max-w-xl lg:max-w-[45%] text-left">
          {/* Introductory Eyebrow Text */}
          <div className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.22em] uppercase text-[#984629] mb-2 sm:mb-4">
            <span className="w-6 h-[2px] bg-[#54a937]" />
            <span>Nelskraft Refractory Pvt. Ltd.</span>
          </div>

          {/* Headline with High Contrast Charcoal (#202522) and Muted Terracotta (#984629) */}
          <h1 className="font-sans text-[1.4rem] sm:text-4xl md:text-[2.75rem] lg:text-[3.1rem] font-bold tracking-tight text-[#202522] leading-[1.2] mb-2.5 sm:mb-5">
            High-Performance <span className="text-[#984629]">Refractories</span>, Biomass Fuels &amp; Industrial Minerals
          </h1>

          {/* Supporting Paragraph with Crisp Dark Neutral Gray (#454545) and Comfortable Spacing */}
          <p className="text-[13px] sm:text-[1.0625rem] text-[#333a35] font-medium leading-[1.55] sm:leading-[1.7] max-w-lg">
            Supplying durable refractory bricks, low-emission biomass fuels, and verified mineral raw materials engineered for severe industrial applications across India.
          </p>

          {/* Subtle Visual Slide Progress Indicator */}
          <div className="flex items-center gap-2 mt-5 sm:mt-8 pointer-events-none" aria-hidden="true">
            {SLIDES.map((_, index) => (
              <span
                key={index}
                className={`h-1.5 rounded-full transition-all duration-500 ${
                  index === currentSlide
                    ? "w-7 bg-[#54a937]"
                    : "w-2 bg-[#454545]/25"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
