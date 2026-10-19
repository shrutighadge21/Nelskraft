"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

/**
 * Statistics Data:
 * Note (Data Integrity): The figures below (15+, 200+, 1000+) are design placeholders
 * matching the visual reference specification. They should be verified against
 * certified company audit records prior to official regulatory publication.
 */
const STATS = [
  {
    target: 15,
    suffix: "+",
    label: "Industrial",
    sublabel: "Sectors Served",
  },
  {
    target: 200,
    suffix: "+",
    label: "Clients Across",
    sublabel: "India",
  },
  {
    target: 1000,
    suffix: "+",
    label: "MT Annual",
    sublabel: "Supply Capacity",
  },
];

/** Animated count-up stat strip — replays on every viewport entry */
function CountUpStrip() {
  const stripRef = useRef<HTMLDivElement>(null);
  const rafIdRef = useRef<number | null>(null);
  const [counts, setCounts] = useState<number[]>(STATS.map(() => 0));

  const startAnimation = useCallback(() => {
    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
    }

    // Respect prefers-reduced-motion
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setCounts(STATS.map((s) => s.target));
      return;
    }

    const duration = 1600; // ms
    const start = performance.now();

    function tick(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);

      setCounts(STATS.map((s) => Math.round(eased * s.target)));

      if (progress < 1) {
        rafIdRef.current = requestAnimationFrame(tick);
      } else {
        rafIdRef.current = null;
      }
    }

    rafIdRef.current = requestAnimationFrame(tick);
  }, []);

  const resetAnimation = useCallback(() => {
    if (rafIdRef.current) {
      cancelAnimationFrame(rafIdRef.current);
      rafIdRef.current = null;
    }
    setCounts(STATS.map(() => 0));
  }, []);

  useEffect(() => {
    const el = stripRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startAnimation();
        } else {
          resetAnimation();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (rafIdRef.current) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [startAnimation, resetAnimation]);

  return (
    <div ref={stripRef} className="flex flex-wrap sm:flex-nowrap items-center gap-6 sm:gap-8 lg:gap-14">
      {STATS.map((stat, index) => (
        <div key={stat.target} className="flex items-center gap-6 sm:gap-8 lg:gap-14">
          <div className="flex flex-col">
            <span className="font-sans text-2xl sm:text-3xl lg:text-[2.15rem] font-bold text-[#EDE6D8] leading-none tracking-tight">
              {counts[index]}
              {stat.suffix}
            </span>
            <span className="text-[10px] sm:text-[10.5px] text-[#A2ADA0] font-medium leading-tight mt-0.5">
              {stat.label}
              <br />
              {stat.sublabel}
            </span>
          </div>

          {/* Divider line between statistics */}
          {index < STATS.length - 1 && (
            <div
              className="hidden sm:block w-[1px] h-8 bg-white/20 flex-shrink-0"
              aria-hidden="true"
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#F7F5EE] text-[#1C261B] overflow-hidden flex flex-col justify-between"
      aria-label="Nelskraft - Materials That Power Industry"
    >
      {/* Ambient warm radial lighting layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 60% 36%, rgba(255, 252, 244, 0.88) 0%, rgba(247, 245, 238, 0) 70%)",
        }}
        aria-hidden="true"
      />

      {/* Decorative Drifting Green Leaves (matching the reference placement) */}
      <div className="hidden sm:block absolute inset-0 pointer-events-none z-15 overflow-hidden" aria-hidden="true">
        {/* Leaf 1: Drifting near left margin */}
        <div className="absolute top-[42%] -left-3 sm:left-2 w-10 sm:w-11 h-14 opacity-80 rotate-[-26deg] filter blur-[0.5px] select-none">
          <svg viewBox="0 0 32 44" fill="none" className="w-full h-full drop-shadow-xs">
            <path
              d="M16 2 C26 12 30 28 16 42 C2 28 6 12 16 2 Z"
              fill="url(#heroLeafGrad1)"
            />
            <path
              d="M16 4 Q16 24 16 42"
              stroke="rgba(255, 255, 255, 0.45)"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Leaf 2: Drifting above headline towards upper center */}
        <div className="absolute top-[10%] left-[38%] sm:left-[36%] lg:left-[37%] w-8 sm:w-9 h-12 opacity-85 rotate-[32deg] filter blur-[0.3px] select-none">
          <svg viewBox="0 0 30 46" fill="none" className="w-full h-full drop-shadow-xs">
            <path
              d="M15 2 C28 10 28 32 15 44 C5 34 8 16 15 2 Z"
              fill="url(#heroLeafGrad2)"
            />
            <path
              d="M15 3 Q16 23 15 44"
              stroke="rgba(255, 255, 255, 0.4)"
              strokeWidth="1.1"
              strokeLinecap="round"
            />
          </svg>
        </div>

        {/* Shared SVG leaf gradients */}
        <svg className="absolute w-0 h-0" aria-hidden="true">
          <defs>
            <linearGradient id="heroLeafGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#78BF50" />
              <stop offset="50%" stopColor="#559937" />
              <stop offset="100%" stopColor="#376822" />
            </linearGradient>
            <linearGradient id="heroLeafGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8ED565" />
              <stop offset="55%" stopColor="#529B31" />
              <stop offset="100%" stopColor="#32631C" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Main Editorial Hero Grid Container */}
      <div className="relative z-10 max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-12 pt-8 sm:pt-12 lg:pt-10 pb-0 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Editorial Typography, Description, & CTA */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center z-20 py-4 lg:py-6">
            {/* Eyebrow Label with Solid Horizontal Line */}
            <div className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.22em] uppercase text-[#6E776B] mb-2 sm:mb-2.5">
              <span className="w-6 sm:w-7 h-[2px] bg-[#54a937]" aria-hidden="true" />
              <span>ABOUT NELSKRAFT</span>
            </div>

            {/* Compact Refined Sans Headline matching Hero Scale */}
            <h2 className="font-sans text-3xl sm:text-4xl md:text-[2.65rem] lg:text-[3rem] font-bold tracking-tight text-[#162217] leading-[1.14] mb-3.5 sm:mb-4">
              Materials<br />
              That Power<br />
              Industry.
            </h2>

            {/* Supporting Company Description */}
            <p className="text-[14px] sm:text-base text-[#4E584C] font-normal leading-[1.65] max-w-[480px] mb-6 sm:mb-7">
              Nelskraft Refractory Pvt. Ltd. supplies refractory products, biomass
              fuels, and mineral materials for demanding industrial applications.
              We bring these material categories together to support the diverse
              requirements of industrial operations.
            </p>

            {/* Rounded CTA Button */}
            <div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 bg-[#445E3D] hover:bg-[#354B2F] text-white px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-[13px] font-semibold tracking-wide shadow-xs hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#445E3D]"
              >
                <span>Learn More About Us</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* RIGHT COLUMN: Layered Industrial Photography Composition */}
          <div className="lg:col-span-6 xl:col-span-6 relative w-full flex items-center justify-center lg:justify-end self-end">
            {/* Layered authentic industrial photography */}
            <div className="relative w-full max-w-[500px] lg:max-w-[540px] aspect-[584/520] select-none flex items-end">
              <Image
                src="/images/hero-right-visual.png"
                alt="Industrial factory plant with distillation towers and sunset sky, layered with authentic stacked refractory bricks, crushed aggregates, and carbon mineral materials"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-right-bottom drop-shadow-xs"
              />
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM STATISTICS STRIP */}
      <div className="relative w-full z-20">
        {/* Full-width textured forest green bar */}
        <div
          className="relative w-full bg-[#273426] text-white overflow-hidden shadow-inner"
          style={{
            backgroundImage: "url('/images/stats-texture-patch.png')",
            backgroundRepeat: "repeat",
            backgroundSize: "320px auto",
            backgroundBlendMode: "overlay",
          }}
        >
          {/* Subtle gradient overlay to enhance depth */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/20 pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-2.5 sm:py-3 lg:py-2.5">
            <CountUpStrip />
          </div>
        </div>
      </div>
    </section>
  );
}
