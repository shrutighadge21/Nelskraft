"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CATEGORIES = [
  {
    title: "Refractory Products",
    description:
      "Refractory bricks, powders, mortars, and castables for industrial applications.",
    bgColor: "bg-[#f8ede6]",
    borderColor: "border-[#ecdcd0]",
    iconColor: "text-[#984629]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
        aria-hidden="true"
      >
        <rect x="2" y="6" width="20" height="5" rx="1" />
        <rect x="2" y="13" width="9.5" height="5" rx="1" />
        <rect x="12.5" y="13" width="9.5" height="5" rx="1" />
      </svg>
    ),
  },
  {
    title: "Biomass Fuels",
    description: "Biomass pellets and de-oiled cashew nut shell cake.",
    bgColor: "bg-[#edf6e8]",
    borderColor: "border-[#ddead5]",
    iconColor: "text-[#54a937]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
        aria-hidden="true"
      >
        <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
        <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
      </svg>
    ),
  },
  {
    title: "Industrial Minerals",
    description: "Ball clay, silica sand, and other mineral raw materials.",
    bgColor: "bg-[#f7f0e6]",
    borderColor: "border-[#ece1d2]",
    iconColor: "text-[#b07d4b]",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-5 h-5"
        aria-hidden="true"
      >
        <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
      </svg>
    ),
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Right Text Column Entrance
      if (textRef.current) {
        gsap.from(textRef.current.children, {
          opacity: 0,
          y: 20,
          duration: 0.65,
          stagger: 0.08,
          ease: "power2.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative pt-8 sm:pt-12 md:pt-14 pb-14 sm:pb-16 md:pb-20 bg-[#FAF9F6] text-[#202522] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* LEFT COLUMN: About Us Image */}
          <div className="lg:col-span-5 relative w-full aspect-[16/11] sm:aspect-[16/10] lg:aspect-[4/3.8] rounded-2xl overflow-hidden border border-[#e8e6df] shadow-xs bg-[#EDEBE4]">
            <Image
              src="/images/about-refractory-new.jpg"
              alt="Industrial refractory bricks, curved kiln blocks, and materials stacked on wooden pallets in manufacturing facility"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-center"
              priority
            />
          </div>

          {/* RIGHT COLUMN: Heading, Description, 3 Compact Columns & Button */}
          <div
            ref={textRef}
            className="lg:col-span-7 flex flex-col items-start lg:pl-2"
          >
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.22em] uppercase text-[#984629] mb-3">
              <span className="w-6 h-[2px] bg-[#984629]" />
              <span>ABOUT NELSKRAFT</span>
            </div>

            {/* Main Heading */}
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-[2.65rem] font-bold tracking-tight text-[#202522] leading-[1.18] mb-4">
              Materials That Power Industry.
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#454545] font-normal leading-relaxed mb-8 max-w-2xl">
              Nelskraft Refractory Pvt. Ltd. supplies refractory products,
              biomass fuels, and mineral materials for demanding industrial
              applications. The company brings these material categories together
              to support the diverse requirements of industrial operations.
            </p>

            {/* Three Compact Category Columns (Single horizontal row on desktop, stacked on mobile) */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-5 w-full mb-8">
              {CATEGORIES.map((cat) => (
                <div
                  key={cat.title}
                  className="group/col flex sm:flex-col items-start gap-3.5 sm:gap-2.5 transition-transform duration-200 hover:-translate-y-0.5"
                >
                  {/* Small Circular Icon Badge */}
                  <div
                    className={`w-11 h-11 rounded-full ${cat.bgColor} border ${cat.borderColor} flex items-center justify-center ${cat.iconColor} flex-shrink-0 transition-transform duration-200 group-hover/col:scale-110 shadow-2xs`}
                  >
                    {cat.icon}
                  </div>

                  {/* Category Title & Short Description */}
                  <div>
                    <h3 className="text-sm sm:text-[15px] font-bold text-[#202522] group-hover/col:text-[#2d6b1f] transition-colors leading-snug">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-[#555555] font-normal leading-relaxed mt-1">
                      {cat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Learn More About Us Button */}
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-[#2d6b1f] hover:bg-[#235518] text-white px-6 py-2.5 rounded-lg text-sm font-semibold tracking-wide shadow-xs hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 active:translate-y-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d6b1f]"
            >
              <span>Learn More About Us</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
