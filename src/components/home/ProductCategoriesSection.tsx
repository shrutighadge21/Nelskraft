"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Truck, Layers } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FallingLeaves from "./FallingLeaves";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const CATEGORIES = [
  {
    number: "01",
    id: "refractory-products",
    title: "Refractory Products",
    description:
      "Refractory bricks, powders, mortars and castables for industrial applications.",
    image: "/images/about-refractory-new.jpg",
    alt: "Industrial refractory firebricks, powders, and high-temperature furnace lining components",
    href: "/products?category=refractory-products",
    iconBg: "bg-[#f8ede6] border-[#ecdcd0] text-[#984629]",
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
    number: "02",
    id: "biomass-fuels",
    title: "Biomass Fuels",
    description:
      "Biomass pellets and de-oiled cashew nut shell cake for industrial fuel applications.",
    image: "/images/cat-biomass.jpg",
    alt: "High-density biomass fuel pellets and cashew shell cake for industrial combustion",
    href: "/products?category=biomass-fuels",
    iconBg: "bg-[#edf6e8] border-[#ddead5] text-[#54a937]",
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
    number: "03",
    id: "industrial-minerals",
    title: "Industrial Minerals",
    description:
      "Ball clay, silica sand and other mineral raw materials for industrial applications.",
    image: "/images/cat-minerals.jpg",
    alt: "Industrial refined ball clay and graded silica sand raw materials",
    href: "/products?category=mineral-materials",
    iconBg: "bg-[#f7f0e6] border-[#ece1d2] text-[#b07d4b]",
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

const TRUST_INDICATORS = [
  {
    title: "Quality-Focused Supply",
    subtitle: "Materials selected for industrial use.",
    icon: ShieldCheck,
  },
  {
    title: "Reliable Availability",
    subtitle: "Consistent supply for your needs.",
    icon: Truck,
  },
  {
    title: "Diverse Material Range",
    subtitle: "Refractory, biofuels and minerals.",
    icon: Layers,
  },
];

export default function ProductCategoriesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const bannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header entrance animation
      if (headerRef.current) {
        gsap.from(headerRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
          opacity: 0,
          y: 28,
          duration: 0.8,
          ease: "power2.out",
        });
      }

      // Sequential cards entrance animation
      if (cardsRef.current) {
        gsap.from(cardsRef.current.children, {
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 78%",
          },
          opacity: 0,
          y: 35,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
        });
      }

      // Banner reveal
      if (bannerRef.current) {
        gsap.from(bannerRef.current, {
          scrollTrigger: {
            trigger: bannerRef.current,
            start: "top 85%",
          },
          opacity: 0,
          y: 25,
          duration: 0.8,
          ease: "power2.out",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="products"
      ref={sectionRef}
      suppressHydrationWarning
      className="relative pb-14 md:pb-18 pt-8 md:pt-12 bg-[#FAF9F6] text-[#202522] overflow-hidden"
    >
      {/* Falling Green Leaves Layer strictly behind Product Categories */}
      <FallingLeaves />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12 md:mb-16"
        >
          {/* Left: Eyebrow, Heading, Description */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.22em] uppercase text-[#984629] mb-3">
              <span className="w-6 h-[2px] bg-[#984629]" />
              <span>OUR PRODUCTS</span>
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#202522] leading-[1.16] mb-3">
              Product <span className="text-[#984629]">Categories</span>
            </h2>
            <p className="text-sm sm:text-base text-[#454545] font-normal leading-relaxed">
              A focused range of refractory materials, biomass fuels, and
              industrial minerals for demanding industrial applications.
            </p>
          </div>

          {/* Right: Supporting Note with Vertical Accent Line (Desktop) */}
          <div className="hidden lg:flex items-center gap-6 max-w-md pl-6 border-l border-[#54a937]/50">
            <p className="text-sm text-[#454545] font-normal leading-relaxed">
              We supply industrial materials that support high-temperature
              processes, energy needs, and mineral requirements across diverse
              industries.
            </p>
          </div>
        </div>

        {/* Three Category Cards in Single Row on Desktop */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8 mb-14 md:mb-16"
        >
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="group flex flex-col bg-white rounded-3xl overflow-hidden border border-[#e8e6df] shadow-xs hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#54a937]"
            >
              {/* Card Image Container with Numbered Marker & Overlapping Icon Badge */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#f0eee9]">
                <Image
                  src={cat.image}
                  alt={cat.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Numbered Marker Badge (Upper-Right) */}
                <div className="absolute top-4 right-4 z-10 bg-white/95 backdrop-blur-xs text-[#202522] font-mono text-xs font-bold px-3 py-1 rounded-full shadow-xs border border-gray-100">
                  {cat.number}
                </div>

                {/* Compact Category Icon Badge (Lower-Left Overlay) */}
                <div
                  className={`absolute -bottom-1 left-5 z-10 w-12 h-12 rounded-2xl ${cat.iconBg} border flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-110`}
                >
                  {cat.icon}
                </div>
              </div>

              {/* Card Body */}
              <div className="pt-6 p-7 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="font-sans text-xl sm:text-[1.35rem] font-bold text-[#202522] group-hover:text-[#984629] transition-colors mb-2.5">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-[#454545] font-normal leading-relaxed mb-6">
                    {cat.description}
                  </p>
                </div>

                {/* Explore Products Action Link */}
                <div className="pt-2 flex items-center">
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3e7828] group-hover:text-[#2d581d] transition-colors">
                    <span>Explore Products</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Industrial Enquiry Banner */}
        <div
          ref={bannerRef}
          className="relative rounded-3xl overflow-hidden bg-[#18231c] text-white shadow-md border border-[#27382d] p-8 sm:p-10 lg:p-12 mb-10"
        >
          {/* Subtle refractory material background photo on the right */}
          <div className="absolute inset-y-0 right-0 w-full md:w-1/2 z-0 opacity-25">
            <Image
              src="/images/cat-refractory.jpg"
              alt="Refractory materials texture"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-right"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#18231c] via-[#18231c]/80 to-transparent" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            {/* Left: Eyebrow & Heading */}
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[#88c96f] mb-3">
                <span className="w-6 h-[2px] bg-[#88c96f]" />
                <span>MATERIALS FOR REAL-WORLD INDUSTRIES</span>
              </div>
              <h3 className="font-sans text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white leading-tight">
                Reliable Materials for <br className="hidden sm:inline" />
                Industrial Applications.
              </h3>
            </div>

            {/* Middle: Supporting Text (Desktop) */}
            <div className="max-w-sm">
              <p className="text-sm sm:text-base text-gray-300 font-normal leading-relaxed">
                Refractory products, biomass fuels, and industrial minerals
                sourced to support diverse industrial requirements.
              </p>
            </div>

            {/* Right: View All Products Action Button */}
            <div className="flex-shrink-0">
              <Link
                href="/products"
                className="inline-flex items-center gap-2.5 bg-[#42792e] hover:bg-[#346622] text-white px-7 py-3.5 rounded-xl text-sm font-semibold tracking-wide shadow-md transition-all duration-200 group transform hover:-translate-y-0.5"
              >
                <span>View All Products</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>

        {/* Trust Indicators Bar directly below banner */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2">
          {TRUST_INDICATORS.map((indicator, idx) => {
            const Icon = indicator.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/70 border border-[#e8e6df] shadow-2xs"
              >
                <div className="w-11 h-11 rounded-xl bg-[#edf6e8] border border-[#ddead5] flex items-center justify-center text-[#54a937] flex-shrink-0">
                  <Icon className="w-5 h-5" strokeWidth={1.8} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#202522]">
                    {indicator.title}
                  </h4>
                  <p className="text-xs text-[#555555] mt-0.5">
                    {indicator.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
