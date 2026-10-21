"use client";

import { useState } from "react";
import Image from "next/image";

interface WhyFeature {
  id: string;
  num: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  image: string;
  alt: string;
}

const FEATURES: WhyFeature[] = [
  {
    id: "products",
    num: "01",
    titleLine1: "Focused",
    titleLine2: "Product Range",
    description: "Refractory products, biomass fuels, and industrial minerals.",
    image: "/images/why-feature-1.png",
    alt: "Industrial furnace glow and authentic stacked refractory bricks",
  },
  {
    id: "applications",
    num: "02",
    titleLine1: "Industrial",
    titleLine2: "Applications",
    description:
      "Materials for relevant industrial and high-temperature processes.",
    image: "/images/why-feature-2.png",
    alt: "Industrial applications and high-temperature furnace processing facility",
  },
  {
    id: "support",
    num: "03",
    titleLine1: "Enquiry-Led",
    titleLine2: "Support",
    description:
      "A direct way to discuss material requirements and get support.",
    image: "/images/why-feature-3.png",
    alt: "Industrial warehouse storage with prepared refractory pallets for dispatch",
  },
];

export default function WhyChooseSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section
      id="why-choose"
      className="relative py-16 sm:py-20 lg:py-24 bg-[#FAF8F5] text-[#1B281A] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Composition: Left Text + Right Curved Large Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-20 lg:mb-24">
          {/* Left Text Column */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col justify-center">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.22em] uppercase text-[#6B7566] mb-4">
              <span className="w-5 h-[1.5px] bg-[#6B7566]" />
              <span>WHY NELSKRAFT</span>
            </div>

            {/* Main Headline */}
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-[3rem] font-bold tracking-tight leading-[1.16] mb-5">
              <span className="text-[#1A2819] block">Industrial Materials,</span>
              <span className="text-[#59664D] block">Thoughtfully Supplied.</span>
            </h2>

            {/* Supporting Paragraph */}
            <p className="text-[13.5px] sm:text-[14.5px] text-[#555E50] font-normal leading-relaxed max-w-lg">
              A focused range of refractory materials, biomass fuels, and
              industrial minerals to support varied industrial requirements.
            </p>
          </div>

          {/* Right Image Column: Dynamic Arched Large Visual */}
          <div className="lg:col-span-6 xl:col-span-6 flex justify-end">
            <div className="relative w-full max-w-[514px] aspect-[514/300] select-none">
              {FEATURES.map((item, idx) => (
                <div
                  key={item.id}
                  className={`absolute inset-0 transition-opacity duration-400 ease-in-out ${
                    activeIdx === idx
                      ? "opacity-100 z-10"
                      : "opacity-0 z-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    priority={idx === 0}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain object-right"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Feature Columns: 01, 02, 03 Separated by Subtle Vertical Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          {FEATURES.map((item, idx) => {
            const isActive = activeIdx === idx;
            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveIdx(idx)}
                onClick={() => setActiveIdx(idx)}
                className={`flex flex-col cursor-pointer transition-colors duration-200 group text-left ${
                  idx > 0
                    ? "md:border-l md:border-[#DDD6C7] md:pl-8 lg:md:pl-12"
                    : "md:pr-8 lg:md:pr-12"
                } ${idx === 1 ? "md:pr-8 lg:md:pr-12" : ""}`}
              >
                {/* Pale Beige Numeral */}
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className={`font-sans text-4xl sm:text-5xl font-bold leading-none select-none tracking-tight transition-colors duration-300 ${
                      isActive
                        ? "text-[#A89E84]"
                        : "text-[#DDD5C1] group-hover:text-[#BDB399]"
                    }`}
                  >
                    {item.num} —
                  </span>
                </div>

                {/* Bold Feature Heading */}
                <h3
                  className={`font-sans text-lg sm:text-xl font-bold leading-tight mb-2.5 transition-colors duration-200 ${
                    isActive
                      ? "text-[#1A2819]"
                      : "text-[#283626] group-hover:text-[#1A2819]"
                  }`}
                >
                  {item.titleLine1}
                  <br />
                  {item.titleLine2}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-[13.5px] text-[#636C5F] font-normal leading-relaxed">
                  {item.description}
                </p>

                {/* Subtle active indicator accent */}
                <div
                  className={`mt-4 h-[2px] transition-all duration-300 ${
                    isActive ? "bg-[#59664D] w-12" : "bg-transparent w-0"
                  }`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
