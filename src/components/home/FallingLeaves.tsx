"use client";

import { useEffect, useState, useRef } from "react";

interface LeafConfig {
  id: number;
  left: number; // percentage 0 - 100
  size: number; // px 16 - 38
  duration: number; // seconds 9 - 18
  delay: number; // seconds 0 - 10
  blur: number; // px 0 - 3 (bokeh depth of field)
  opacity: number; // 0.65 - 0.95
  drift1: number; // horizontal sway px
  drift2: number;
  drift3: number;
  drift4: number;
  rot1: number; // deg
  rot2: number;
  rot3: number;
  rot4: number;
  type: 0 | 1 | 2; // leaf SVG variation
}

// Pre-computed deterministic leaf configurations for consistent, smooth rendering
const LEAF_PRESETS: LeafConfig[] = [
  { id: 1, left: 6, size: 28, duration: 11, delay: 0.5, blur: 0, opacity: 0.9, drift1: 30, drift2: -20, drift3: 35, drift4: -10, rot1: 45, rot2: 110, rot3: 200, rot4: 290, type: 0 },
  { id: 2, left: 14, size: 36, duration: 13, delay: 2.5, blur: 2.2, opacity: 0.85, drift1: -35, drift2: 25, drift3: -30, drift4: 15, rot1: -60, rot2: 40, rot3: 160, rot4: 260, type: 1 },
  { id: 3, left: 22, size: 22, duration: 15, delay: 5.0, blur: 0, opacity: 0.95, drift1: 25, drift2: -30, drift3: 20, drift4: -25, rot1: 80, rot2: 170, rot3: 240, rot4: 330, type: 0 },
  { id: 4, left: 29, size: 32, duration: 12, delay: 1.0, blur: 1.2, opacity: 0.88, drift1: -20, drift2: 35, drift3: -15, drift4: 20, rot1: -45, rot2: -120, rot3: 40, rot4: 150, type: 2 },
  { id: 5, left: 37, size: 20, duration: 16, delay: 7.2, blur: 0, opacity: 0.9, drift1: 35, drift2: -25, drift3: 30, drift4: -20, rot1: 65, rot2: 145, rot3: 225, rot4: 315, type: 1 },
  { id: 6, left: 45, size: 26, duration: 10, delay: 3.2, blur: 0, opacity: 0.92, drift1: -30, drift2: 20, drift3: -35, drift4: 10, rot1: -50, rot2: 60, rot3: 180, rot4: 270, type: 0 },
  { id: 7, left: 52, size: 38, duration: 14, delay: 0.2, blur: 2.8, opacity: 0.8, drift1: 40, drift2: -35, drift3: 25, drift4: -30, rot1: 75, rot2: 160, rot3: 250, rot4: 340, type: 1 },
  { id: 8, left: 61, size: 24, duration: 13, delay: 4.8, blur: 0, opacity: 0.95, drift1: -25, drift2: 30, drift3: -20, drift4: 25, rot1: -70, rot2: -150, rot3: 30, rot4: 120, type: 2 },
  { id: 9, left: 68, size: 30, duration: 12, delay: 8.5, blur: 1.0, opacity: 0.88, drift1: 30, drift2: -20, drift3: 40, drift4: -15, rot1: 55, rot2: 135, rot3: 215, rot4: 305, type: 0 },
  { id: 10, left: 76, size: 22, duration: 16, delay: 1.8, blur: 0, opacity: 0.92, drift1: -35, drift2: 25, drift3: -30, drift4: 20, rot1: -65, rot2: 50, rot3: 170, rot4: 280, type: 1 },
  { id: 11, left: 84, size: 34, duration: 11, delay: 6.2, blur: 2.5, opacity: 0.82, drift1: 25, drift2: -30, drift3: 35, drift4: -20, rot1: 90, rot2: 180, rot3: 270, rot4: 360, type: 2 },
  { id: 12, left: 92, size: 26, duration: 14, delay: 3.8, blur: 0, opacity: 0.9, drift1: -30, drift2: 35, drift3: -25, drift4: 15, rot1: -80, rot2: -160, rot3: 20, rot4: 110, type: 0 },
  { id: 13, left: 10, size: 20, duration: 15, delay: 9.5, blur: 0, opacity: 0.88, drift1: 20, drift2: -25, drift3: 30, drift4: -15, rot1: 40, rot2: 120, rot3: 210, rot4: 300, type: 1 },
  { id: 14, left: 33, size: 28, duration: 12, delay: 4.2, blur: 0, opacity: 0.92, drift1: -30, drift2: 20, drift3: -25, drift4: 30, rot1: -55, rot2: 65, rot3: 175, rot4: 265, type: 0 },
  { id: 15, left: 58, size: 32, duration: 13, delay: 6.8, blur: 1.8, opacity: 0.85, drift1: 35, drift2: -30, drift3: 20, drift4: -25, rot1: 70, rot2: 155, rot3: 245, rot4: 335, type: 2 },
  { id: 16, left: 79, size: 22, duration: 17, delay: 2.0, blur: 0, opacity: 0.94, drift1: -20, drift2: 35, drift3: -30, drift4: 15, rot1: -75, rot2: 45, rot3: 165, rot4: 255, type: 1 },
  { id: 17, left: 88, size: 30, duration: 11, delay: 7.9, blur: 1.5, opacity: 0.86, drift1: 25, drift2: -20, drift3: 30, drift4: -10, rot1: 60, rot2: 140, rot3: 230, rot4: 320, type: 0 },
  { id: 18, left: 48, size: 24, duration: 14, delay: 10.5, blur: 0, opacity: 0.9, drift1: -25, drift2: 30, drift3: -20, drift4: 25, rot1: -60, rot2: -140, rot3: 40, rot4: 130, type: 2 },
];

export default function FallingLeaves() {
  const [mounted, setMounted] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    // Check reduced motion preference
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    mediaQuery.addEventListener("change", handleMotionChange);

    // Pause animation when the section is not in the viewport
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.02 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      mediaQuery.removeEventListener("change", handleMotionChange);
      observer.disconnect();
    };
  }, []);

  if (!mounted || prefersReducedMotion) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none overflow-hidden z-10"
      aria-hidden="true"
    >
      {/* Shared SVG Gradients */}
      <svg className="absolute w-0 h-0 pointer-events-none" aria-hidden="true">
        <defs>
          <linearGradient id="leafGrad0" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#68b648" />
            <stop offset="60%" stopColor="#54a937" />
            <stop offset="100%" stopColor="#3d7a22" />
          </linearGradient>
          <linearGradient id="leafGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#78c454" />
            <stop offset="50%" stopColor="#54a937" />
            <stop offset="100%" stopColor="#33661c" />
          </linearGradient>
          <linearGradient id="leafGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#86ce60" />
            <stop offset="55%" stopColor="#489a2c" />
            <stop offset="100%" stopColor="#2e5c19" />
          </linearGradient>
        </defs>
      </svg>

      {/* Falling Leaves Elements */}
      {LEAF_PRESETS.map((leaf) => (
        <div
          key={leaf.id}
          className="absolute top-0 will-change-transform"
          style={{
            left: `${leaf.left}%`,
            width: `${leaf.size}px`,
            height: `${leaf.size * 1.3}px`,
            filter: leaf.blur > 0 ? `blur(${leaf.blur}px)` : "none",
            opacity: leaf.opacity,
            animationName: isVisible ? `leafFall-${leaf.id}` : "none",
            animationDuration: `${leaf.duration}s`,
            animationDelay: `${leaf.delay}s`,
            animationIterationCount: "infinite",
            animationTimingFunction: "cubic-bezier(0.4, 0, 0.6, 1)",
            animationPlayState: isVisible ? "running" : "paused",
          }}
        >
          {leaf.type === 0 && (
            // Classic ovate leaf with central vein (matches Nelskraft brand leaf)
            <svg viewBox="0 0 32 44" fill="none" className="w-full h-full drop-shadow-xs">
              <path
                d="M16 2 C26 12 30 28 16 42 C2 28 6 12 16 2 Z"
                fill="url(#leafGrad0)"
              />
              <path
                d="M16 4 Q16 24 16 42"
                stroke="rgba(255, 255, 255, 0.35)"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <path
                d="M16 14 Q21 10 24 12"
                stroke="rgba(255, 255, 255, 0.22)"
                strokeWidth="0.8"
              />
              <path
                d="M16 22 Q11 18 8 20"
                stroke="rgba(255, 255, 255, 0.22)"
                strokeWidth="0.8"
              />
              <path
                d="M16 30 Q21 26 23 28"
                stroke="rgba(255, 255, 255, 0.22)"
                strokeWidth="0.8"
              />
            </svg>
          )}

          {leaf.type === 1 && (
            // Curved organic drifting leaf
            <svg viewBox="0 0 30 46" fill="none" className="w-full h-full drop-shadow-xs">
              <path
                d="M15 2 C28 10 28 32 15 44 C5 34 8 16 15 2 Z"
                fill="url(#leafGrad1)"
              />
              <path
                d="M15 3 Q16 23 15 44"
                stroke="rgba(255, 255, 255, 0.32)"
                strokeWidth="1.1"
                strokeLinecap="round"
              />
              <path
                d="M15 15 Q21 11 23 13"
                stroke="rgba(255, 255, 255, 0.2)"
                strokeWidth="0.75"
              />
              <path
                d="M15 25 Q9 21 7 23"
                stroke="rgba(255, 255, 255, 0.2)"
                strokeWidth="0.75"
              />
            </svg>
          )}

          {leaf.type === 2 && (
            // Delicate twin leaf pair
            <svg viewBox="0 0 42 42" fill="none" className="w-full h-full drop-shadow-xs">
              <path
                d="M21 21 C28 12 36 12 38 18 C38 26 30 26 21 21 Z"
                fill="url(#leafGrad2)"
              />
              <path
                d="M21 21 C14 28 8 34 4 30 C2 24 10 18 21 21 Z"
                fill="url(#leafGrad0)"
              />
              <path
                d="M21 21 L34 16"
                stroke="rgba(255, 255, 255, 0.3)"
                strokeWidth="0.9"
              />
              <path
                d="M21 21 L7 28"
                stroke="rgba(255, 255, 255, 0.3)"
                strokeWidth="0.9"
              />
            </svg>
          )}
        </div>
      ))}

      {/* Injected Keyframes for Each Individual Leaf Path */}
      <style jsx>{`
        ${LEAF_PRESETS.map(
          (leaf) => `
          @keyframes leafFall-${leaf.id} {
            0% {
              transform: translate3d(0, -40px, 0) rotate(0deg) rotateY(0deg);
              opacity: 0;
            }
            6% {
              opacity: ${leaf.opacity};
            }
            25% {
              transform: translate3d(${leaf.drift1}px, 25%, 0) rotate(${leaf.rot1}deg) rotateY(70deg);
            }
            50% {
              transform: translate3d(${leaf.drift2}px, 52%, 0) rotate(${leaf.rot2}deg) rotateY(180deg);
            }
            75% {
              transform: translate3d(${leaf.drift3}px, 78%, 0) rotate(${leaf.rot3}deg) rotateY(260deg);
            }
            90% {
              opacity: ${leaf.opacity * 0.9};
            }
            100% {
              transform: translate3d(${leaf.drift4}px, 105%, 0) rotate(${leaf.rot4}deg) rotateY(360deg);
              opacity: 0;
            }
          }
        `
        ).join("")}
      `}</style>
    </div>
  );
}
