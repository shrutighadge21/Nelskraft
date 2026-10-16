"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ProductCategoriesSection() {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const isExpanded = (idx: number) => activeItem === idx;

  return (
    <section
      id="products"
      className="relative py-16 sm:py-20 lg:py-24 bg-[#FAF8F5] text-[#1B281A] overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12 sm:mb-16 lg:mb-20">
          {/* Left: Eyebrow, Heading, Description */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.22em] uppercase text-[#6B7566] mb-3">
              <span className="w-5 h-[1.5px] bg-[#6B7566]" />
              <span>OUR PRODUCTS</span>
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl lg:text-[3rem] font-bold tracking-tight text-[#1B281A] leading-[1.15] mb-3.5">
              Product <span className="text-[#657357]">Categories</span>
            </h2>
            <p className="text-[13.5px] sm:text-[14.5px] text-[#555E50] font-normal leading-relaxed max-w-xl">
              A focused range of refractory materials, biomass fuels, and
              industrial minerals for demanding industrial applications.
            </p>
          </div>

          {/* Right: Supporting Note with Vertical Accent Line (Desktop) */}
          <div className="hidden lg:flex items-center max-w-md pl-6 border-l border-[#D8D2C4] py-1">
            <p className="text-[13px] sm:text-[13.5px] text-[#555E50] font-normal leading-relaxed">
              We supply industrial materials that support high-temperature
              processes, energy needs, and mineral requirements across diverse
              industries.
            </p>
          </div>
        </div>

        {/* Main Product Showcase: Asymmetric Editorial 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-0 items-stretch">
          {/* LEFT COLUMN: Featured Refractory Products (01) */}
          <div
            onMouseEnter={() => setActiveItem(1)}
            onMouseLeave={() => setActiveItem(null)}
            onClick={() => setActiveItem(activeItem === 1 ? null : 1)}
            className={`lg:col-span-7 lg:pr-10 xl:pr-14 lg:border-r lg:border-[#DDD6C7] flex flex-col justify-between group cursor-pointer transition-all duration-500 ease-out ${
              isExpanded(1) ? "sm:-translate-y-1" : "hover:sm:-translate-y-1"
            }`}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 sm:gap-8 h-full">
              {/* Coordinated Text & Content Unit */}
              <div
                className={`flex flex-col justify-between h-full py-2 max-w-[260px] sm:max-w-[240px] xl:max-w-[270px] flex-shrink-0 transition-transform duration-500 ease-out ${
                  isExpanded(1) ? "sm:translate-x-1.5" : "group-hover:sm:translate-x-1.5"
                }`}
              >
                <div>
                  <span
                    className={`font-sans text-4xl sm:text-5xl font-bold leading-none select-none tracking-tight transition-all duration-500 ease-out inline-block ${
                      isExpanded(1)
                        ? "text-[#A89E84] scale-105 origin-left"
                        : "text-[#DDD5C1] group-hover:text-[#A89E84] group-hover:scale-105 group-hover:origin-left"
                    }`}
                  >
                    01—
                  </span>
                  <h3
                    className={`font-sans text-2xl sm:text-3xl lg:text-[2rem] font-bold leading-[1.18] mt-4 mb-3 transition-colors duration-400 ${
                      isExpanded(1)
                        ? "text-[#0F1C0E]"
                        : "text-[#1B281A] group-hover:text-[#0F1C0E]"
                    }`}
                  >
                    Refractory
                    <br />
                    Products
                  </h3>
                  <p
                    className={`text-xs sm:text-[13.5px] leading-relaxed mb-6 sm:mb-8 transition-colors duration-400 ${
                      isExpanded(1)
                        ? "text-[#4A5446]"
                        : "text-[#636C5F] group-hover:text-[#4A5446]"
                    }`}
                  >
                    Bricks, powders,
                    <br />
                    mortars & castables
                  </p>
                </div>

                <div>
                  <Link
                    href="/products?category=refractory-products"
                    className={`inline-flex items-center gap-2 bg-[#1B291A] text-white text-[12px] font-medium tracking-wide px-5 py-2.5 rounded-full transition-all duration-300 shadow-xs ${
                      isExpanded(1)
                        ? "bg-[#283E27] shadow-md translate-x-1"
                        : "hover:bg-[#283E27] hover:shadow-md group-hover:translate-x-1"
                    }`}
                  >
                    <span>Explore Products</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Large Featured Photograph with Coordinated Expansion */}
              <div
                className={`relative w-full max-w-[340px] sm:max-w-none aspect-[346/401] rounded-tl-[80px] sm:rounded-tl-[100px] overflow-hidden bg-[#ECE7DC] flex-1 self-end sm:self-center transition-all duration-500 ease-out ${
                  isExpanded(1)
                    ? "scale-[1.03] shadow-md"
                    : "group-hover:scale-[1.03] group-hover:shadow-md"
                }`}
              >
                <Image
                  src="/images/cat-refractory-arch.png"
                  alt="Industrial refractory firebricks, powders, and high-temperature furnace lining components"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 35vw"
                  className={`object-cover object-center transition-transform duration-700 ease-out ${
                    isExpanded(1) ? "scale-[1.05]" : "group-hover:scale-[1.05]"
                  }`}
                />
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Two Stacked Product Entries (02 & 03) */}
          <div className="lg:col-span-5 lg:pl-10 xl:pl-14 flex flex-col justify-between gap-8 lg:gap-0">
            {/* Top Entry: Biomass Fuels (02) - Coordinated Unit */}
            <div
              onMouseEnter={() => setActiveItem(2)}
              onMouseLeave={() => setActiveItem(null)}
              onClick={() => setActiveItem(activeItem === 2 ? null : 2)}
              className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 lg:pb-8 lg:border-b lg:border-[#DDD6C7] group flex-1 cursor-pointer transition-all duration-500 ease-out ${
                isExpanded(2) ? "sm:-translate-y-1" : "hover:sm:-translate-y-1"
              }`}
            >
              {/* Coordinated Text Unit */}
              <div
                className={`max-w-[200px] flex-shrink-0 transition-transform duration-500 ease-out ${
                  isExpanded(2) ? "sm:translate-x-1.5" : "group-hover:sm:translate-x-1.5"
                }`}
              >
                <span
                  className={`font-sans text-3xl sm:text-4xl font-bold leading-none select-none tracking-tight transition-all duration-500 ease-out inline-block ${
                    isExpanded(2)
                      ? "text-[#A89E84] scale-105 origin-left"
                      : "text-[#DDD5C1] group-hover:text-[#A89E84] group-hover:scale-105 group-hover:origin-left"
                  }`}
                >
                  02—
                </span>
                <h3
                  className={`font-sans text-xl sm:text-2xl font-bold leading-tight mt-3 mb-2 transition-colors duration-400 ${
                    isExpanded(2)
                      ? "text-[#0F1C0E]"
                      : "text-[#1B281A] group-hover:text-[#0F1C0E]"
                  }`}
                >
                  Biomass Fuels
                </h3>
                <p
                  className={`text-xs sm:text-[13px] leading-relaxed mb-4 sm:mb-5 transition-colors duration-400 ${
                    isExpanded(2)
                      ? "text-[#4A5446]"
                      : "text-[#636C5F] group-hover:text-[#4A5446]"
                  }`}
                >
                  Pellets, briquettes
                  <br />
                  & shell cake
                </p>
                <Link
                  href="/products?category=biomass-fuels"
                  className={`inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold border-b pb-0.5 transition-all duration-300 ${
                    isExpanded(2)
                      ? "text-[#2D452B] border-[#2D452B]"
                      : "text-[#1B291A] border-[#1B291A] group-hover:text-[#2D452B] group-hover:border-[#2D452B]"
                  }`}
                >
                  <span>Explore Products</span>
                  <ArrowRight
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      isExpanded(2) ? "translate-x-1.5" : "group-hover:translate-x-1.5"
                    }`}
                  />
                </Link>
              </div>

              {/* Biomass Photograph with Coordinated Expansion */}
              <div
                className={`relative w-full max-w-[240px] sm:w-[210px] xl:w-[230px] aspect-[220/175] rounded-tl-[50px] sm:rounded-tl-[65px] overflow-hidden bg-[#ECE7DC] flex-shrink-0 self-end sm:self-center transition-all duration-500 ease-out ${
                  isExpanded(2)
                    ? "scale-[1.03] shadow-md"
                    : "group-hover:scale-[1.03] group-hover:shadow-md"
                }`}
              >
                <Image
                  src="/images/cat-biomass-arch.png"
                  alt="High-density biomass fuel pellets and cashew shell cake for industrial combustion"
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className={`object-cover object-center transition-transform duration-700 ease-out ${
                    isExpanded(2) ? "scale-[1.06]" : "group-hover:scale-[1.06]"
                  }`}
                />
              </div>
            </div>

            {/* Bottom Entry: Industrial Minerals (03) - Coordinated Unit */}
            <div
              onMouseEnter={() => setActiveItem(3)}
              onMouseLeave={() => setActiveItem(null)}
              onClick={() => setActiveItem(activeItem === 3 ? null : 3)}
              className={`flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-0 lg:pt-8 group flex-1 cursor-pointer transition-all duration-500 ease-out ${
                isExpanded(3) ? "sm:-translate-y-1" : "hover:sm:-translate-y-1"
              }`}
            >
              {/* Coordinated Text Unit */}
              <div
                className={`max-w-[200px] flex-shrink-0 transition-transform duration-500 ease-out ${
                  isExpanded(3) ? "sm:translate-x-1.5" : "group-hover:sm:translate-x-1.5"
                }`}
              >
                <span
                  className={`font-sans text-3xl sm:text-4xl font-bold leading-none select-none tracking-tight transition-all duration-500 ease-out inline-block ${
                    isExpanded(3)
                      ? "text-[#A89E84] scale-105 origin-left"
                      : "text-[#DDD5C1] group-hover:text-[#A89E84] group-hover:scale-105 group-hover:origin-left"
                  }`}
                >
                  03—
                </span>
                <h3
                  className={`font-sans text-xl sm:text-2xl font-bold leading-tight mt-3 mb-2 transition-colors duration-400 ${
                    isExpanded(3)
                      ? "text-[#0F1C0E]"
                      : "text-[#1B281A] group-hover:text-[#0F1C0E]"
                  }`}
                >
                  Industrial Minerals
                </h3>
                <p
                  className={`text-xs sm:text-[13px] leading-relaxed mb-4 sm:mb-5 transition-colors duration-400 ${
                    isExpanded(3)
                      ? "text-[#4A5446]"
                      : "text-[#636C5F] group-hover:text-[#4A5446]"
                  }`}
                >
                  Bauxite, silica sand
                  <br />
                  & other raw materials
                </p>
                <Link
                  href="/products?category=mineral-materials"
                  className={`inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-semibold border-b pb-0.5 transition-all duration-300 ${
                    isExpanded(3)
                      ? "text-[#2D452B] border-[#2D452B]"
                      : "text-[#1B291A] border-[#1B291A] group-hover:text-[#2D452B] group-hover:border-[#2D452B]"
                  }`}
                >
                  <span>Explore Products</span>
                  <ArrowRight
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      isExpanded(3) ? "translate-x-1.5" : "group-hover:translate-x-1.5"
                    }`}
                  />
                </Link>
              </div>

              {/* Minerals Photograph with Coordinated Expansion */}
              <div
                className={`relative w-full max-w-[240px] sm:w-[210px] xl:w-[230px] aspect-[220/175] rounded-tl-[50px] sm:rounded-tl-[65px] overflow-hidden bg-[#ECE7DC] flex-shrink-0 self-end sm:self-center transition-all duration-500 ease-out ${
                  isExpanded(3)
                    ? "scale-[1.03] shadow-md"
                    : "group-hover:scale-[1.03] group-hover:shadow-md"
                }`}
              >
                <Image
                  src="/images/cat-minerals-arch.png"
                  alt="Industrial refined ball clay and graded silica sand raw materials"
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className={`object-cover object-center transition-transform duration-700 ease-out ${
                    isExpanded(3) ? "scale-[1.06]" : "group-hover:scale-[1.06]"
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
