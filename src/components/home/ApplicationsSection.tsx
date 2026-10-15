"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const INDUSTRIES = [
  {
    number: "01",
    id: "foundries",
    title: "Foundries",
    description: "Refractory mortars, castables and ladle linings for high-heat molten metal casting.",
    image: "/images/app-furnace.jpg",
    alt: "Molten metal pouring in a foundry with high-temperature furnaces",
    href: "/products?application=furnace-construction",
  },
  {
    number: "02",
    id: "steel-metal-processing",
    title: "Steel & Metal Processing",
    description: "High-alumina bricks and refractory materials for blast furnaces, reheating furnaces and thermal processes.",
    image: "/images/app-industrial.jpg",
    alt: "Glowing hot steel in a metal processing plant",
    href: "/products?application=furnace-construction",
  },
  {
    number: "03",
    id: "cement-industry",
    title: "Cement Industry",
    description: "Refractory and mineral materials for kilns, preheaters and high-temperature zones.",
    image: "/images/app-ceramic.jpg",
    alt: "Cement manufacturing plant with industrial kilns",
    href: "/products?application=ceramic-industry",
  },
];

// Every panel uses the same skew angle so all diagonal edges are perfectly parallel
const SKEW = 6;
// Panels after the first overlap by this many px to close the gap created by the skew
const OVERLAP = 30;

export default function ApplicationsSection() {
  return (
    <section id="industries" className="bg-[#F5F3EE] overflow-hidden border-t border-[#e8e6df]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-stretch">

          {/* ═══════ LEFT INTRO COLUMN ═══════ */}
          <div className="flex-shrink-0 w-full lg:w-[300px] xl:w-[340px] flex flex-col justify-center py-12 lg:py-20 pr-0 lg:pr-10 xl:pr-14">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-[2px] bg-[#2d6b1f] flex-shrink-0" />
              <span className="text-[10px] font-bold tracking-[0.22em] uppercase text-[#2d6b1f]">
                INDUSTRIAL APPLICATIONS
              </span>
            </div>
            {/* Heading */}
            <h2
              className="font-bold leading-[1.06] mb-6 text-[#1a1a1a]"
              style={{ fontFamily: "'Cinzel','Playfair Display',Georgia,serif", fontSize: "clamp(2.3rem,3.8vw,3.1rem)" }}
            >
              Industries<br />
              <span className="text-[#2d6b1f]">We Serve</span>
            </h2>
            {/* Body */}
            <p className="text-[0.88rem] text-[#4a4a4a] leading-relaxed mb-9 max-w-[265px]">
              Our refractory products, biomass fuels, and mineral materials serve diverse
              high-temperature applications where performance, reliable supply, and consistent
              quality are essential.
            </p>
            {/* CTA */}
            <Link
              href="/products"
              className="inline-flex items-center gap-2.5 bg-[#2d6b1f] hover:bg-[#245518] text-white text-sm font-semibold px-6 py-3.5 rounded-full transition-all duration-200 group w-fit shadow-sm hover:shadow-md"
            >
              <span>Explore All Industries</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* ═══════ DESKTOP — THREE DIAGONAL PANELS ═══════ */}
          {/*
           * Geometry: each panel is wrapped in a div with skewX(-SKEW deg).
           * Because all three share the same angle every edge is parallel.
           * The image inside is counter-skewed (+SKEW deg) so it is undistorted.
           * Panels after the first use negative margin-left to close the seam gap.
           */}
          <div className="hidden lg:block flex-1 py-8 xl:py-10 overflow-hidden">
            <div className="flex h-[500px] xl:h-[540px]">
              {INDUSTRIES.map((industry, idx) => {
                const isFirst = idx === 0;
                const isLast = idx === INDUSTRIES.length - 1;
                return (
                  <div
                    key={industry.id}
                    className="relative flex-1"
                    style={{
                      marginLeft: isFirst ? 0 : `-${OVERLAP}px`,
                      zIndex: INDUSTRIES.length - idx,
                    }}
                  >
                    {/* SKEWED SHELL — houses all geometry */}
                    <div
                      className="absolute inset-0 overflow-hidden"
                      style={{
                        transform: `skewX(-${SKEW}deg)`,
                        transformOrigin: "top left",
                        clipPath: "inset(0)",
                        borderRadius: isFirst ? "14px 0 0 14px" : isLast ? "0 14px 14px 0" : "0",
                      }}
                    >
                      {/* Counter-skewed image so photo is undistorted */}
                      <div
                        className="absolute"
                        style={{ inset: "0", left: "-40px", right: "-40px", transform: `skewX(${SKEW}deg)` }}
                      >
                        <Image
                          src={industry.image}
                          alt={industry.alt}
                          fill
                          quality={95}
                          sizes="(max-width: 1280px) 34vw, 440px"
                          className="object-cover object-center"
                          priority={isFirst}
                        />
                      </div>
                      {/* Gradient — inside shell so it also skews (visually fine) */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/82 via-black/25 to-black/0 pointer-events-none" />
                    </div>

                    {/* UPRIGHT CONTENT + LINK */}
                    <Link
                      href={industry.href}
                      className="absolute inset-0 z-10 flex flex-col justify-between group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#54a937]"
                      aria-label={`Explore ${industry.title}`}
                    >
                      <div className="absolute inset-0 bg-[#1a4010]/0 group-hover:bg-[#1a4010]/18 transition-colors duration-500 pointer-events-none" />
                      {/* Number — top */}
                      <div className="relative flex items-center gap-2 p-6 pb-0 z-10">
                        <span className="text-xs font-bold text-white/80 tracking-[0.2em] font-mono">{industry.number}</span>
                        <span className="inline-block w-7 h-[1px] bg-white/40" />
                      </div>
                      {/* Bottom */}
                      <div className="relative p-6 pt-0 z-10">
                        <h3 className="text-white font-bold text-xl leading-tight mb-2 drop-shadow-md">{industry.title}</h3>
                        <p className="text-white/75 text-[13px] leading-snug mb-5 line-clamp-2 max-w-[230px]">{industry.description}</p>
                        <div className="w-9 h-9 rounded-full border border-white/50 flex items-center justify-center text-white group-hover:border-[#88c96f] group-hover:text-[#88c96f] group-hover:bg-white/10 transition-all duration-300">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ═══════ MOBILE — STACKED CARDS ═══════ */}
          <div className="lg:hidden flex flex-col gap-4 py-6">
            {INDUSTRIES.map((industry) => (
              <Link
                key={`mob-${industry.id}`}
                href={industry.href}
                className="relative w-full h-56 rounded-2xl overflow-hidden group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#54a937]"
              >
                <Image
                  src={industry.image}
                  alt={industry.alt}
                  fill
                  quality={90}
                  sizes="100vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-[11px] font-mono text-white/60 mb-1 tracking-widest">{industry.number}</p>
                  <h3 className="text-white font-bold text-lg leading-tight mb-1">{industry.title}</h3>
                  <p className="text-white/70 text-xs leading-snug line-clamp-2">{industry.description}</p>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
