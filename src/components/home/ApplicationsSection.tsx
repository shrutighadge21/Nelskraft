"use client";

import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Package,
  Thermometer,
  Leaf,
  Flame,
  Layers,
  Building2,
  Factory,
  Cog,
} from "lucide-react";

const INDUSTRIES = [
  {
    number: "01",
    id: "foundries",
    title: "Foundries",
    description:
      "Refractory mortars, castables, and ladle linings for high-heat molten metal casting.",
    icon: Flame,
    badgeBg: "bg-[#f8ede6] text-[#984629] border-[#ecdcd0]",
    href: "/products?application=furnace-construction",
  },
  {
    number: "02",
    id: "steel-metal-processing",
    title: "Steel & Metal Processing",
    description:
      "High-alumina bricks and refractory materials engineered for blast furnaces and severe thermal loads.",
    icon: Layers,
    badgeBg: "bg-[#f8ede6] text-[#984629] border-[#ecdcd0]",
    href: "/products?application=furnace-construction",
  },
  {
    number: "03",
    id: "cement-building-materials",
    title: "Cement & Building Materials",
    description:
      "Durable refractory linings for rotary kilns, pre-calciner towers, and clinker cooling zones.",
    icon: Building2,
    badgeBg: "bg-[#f7f0e6] text-[#b07d4b] border-[#ece1d2]",
    href: "/products?application=ceramic-industry",
  },
  {
    number: "04",
    id: "boilers-industrial-heating",
    title: "Boilers & Industrial Heating",
    description:
      "Low-attrition fluidized bed boiler materials, dense castables, and biomass fuels for steam plants.",
    icon: Factory,
    badgeBg: "bg-[#edf6e8] text-[#54a937] border-[#ddead5]",
    href: "/products?application=boiler-applications",
  },
  {
    number: "05",
    id: "other-process-industries",
    title: "Other Process Industries",
    description:
      "Industrial minerals, casting sand, and clean bio-energy fuels for continuous process facilities.",
    icon: Cog,
    badgeBg: "bg-[#edf6e8] text-[#54a937] border-[#ddead5]",
    href: "/products?application=industrial-use",
  },
];

export default function ApplicationsSection() {
  return (
    <section
      id="industries"
      className="pt-10 md:pt-14 pb-14 md:pb-18 bg-[#FAF9F6] text-[#202522] border-t border-[#eeece6]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Compact & Direct */}
        <div className="max-w-3xl mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.22em] uppercase text-[#984629] mb-3">
            <span className="w-6 h-[2px] bg-[#984629]" />
            <span>INDUSTRIAL APPLICATIONS</span>
          </div>

          <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#202522] leading-[1.16] mb-4">
            Industries <span className="text-[#984629]">We Serve</span>
          </h2>

          <p className="text-sm sm:text-base text-[#454545] font-normal leading-relaxed mb-6">
            Our refractory products, biomass fuels, and mineral materials are
            used in various industrial applications where high-temperature
            performance, reliable materials, and consistent supply are
            important.
          </p>

          {/* Micro Indicator Badges */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-1 text-xs text-[#202522]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#edf6e8] border border-[#ddead5] flex items-center justify-center text-[#54a937] flex-shrink-0">
                <Package className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold">Reliable Materials</span>
                <span className="text-[11px] text-[#666666] block">
                  For industrial use
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#edf6e8] border border-[#ddead5] flex items-center justify-center text-[#54a937] flex-shrink-0">
                <Thermometer className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold">High-Temperature</span>
                <span className="text-[11px] text-[#666666] block">
                  Applications
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#edf6e8] border border-[#ddead5] flex items-center justify-center text-[#54a937] flex-shrink-0">
                <Leaf className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold">Diverse Needs</span>
                <span className="text-[11px] text-[#666666] block">
                  Industrial support
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Distinctive Showcase: Large Industrial Image on Left + Numbered Industry List on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Large Industrial Photo Frame & CTA */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/4.2] rounded-3xl overflow-hidden border border-[#e8e6df] shadow-xs bg-white group">
              <Image
                src="/images/hero-industrial.jpg"
                alt="Heavy industrial rotary kiln and continuous manufacturing plant"
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* In-image caption badge */}
              <div className="absolute bottom-5 left-5 right-5 z-10 text-white">
                <div className="text-xs font-semibold tracking-wider uppercase text-[#88c96f] mb-1">
                  High-Temperature & Processing
                </div>
                <div className="text-base sm:text-lg font-bold leading-snug">
                  Engineered for Demanding Industrial Operating Conditions
                </div>
              </div>
            </div>

            {/* Direct Action Link */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2.5 bg-[#3e7828] hover:bg-[#346622] text-white px-7 py-3.5 rounded-2xl text-sm font-semibold tracking-wide shadow-xs hover:shadow-md transition-all duration-200 group"
            >
              <span>Enquire for Your Industry</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Right Column: Clearly Visible Numbered Industry List (Distinctive Editorial Layout) */}
          <div className="lg:col-span-7 flex flex-col space-y-3.5">
            {INDUSTRIES.map((ind) => {
              const Icon = ind.icon;
              return (
                <Link
                  key={ind.id}
                  href={ind.href}
                  className="group relative flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-[#e8e6df] shadow-2xs hover:border-[#54a937]/50 hover:shadow-md transition-all duration-200"
                >
                  {/* Number Badge */}
                  <div className="font-mono text-xs font-bold text-[#888888] group-hover:text-[#3e7828] transition-colors mt-1 w-6 flex-shrink-0">
                    {ind.number}
                  </div>

                  {/* Icon Badge */}
                  <div
                    className={`w-10 h-10 rounded-xl ${ind.badgeBg} border flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-105`}
                  >
                    <Icon className="w-5 h-5" strokeWidth={1.8} />
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 min-w-0 pr-2">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-sans text-base sm:text-lg font-bold text-[#202522] group-hover:text-[#3e7828] transition-colors leading-snug">
                        {ind.title}
                      </h3>
                      <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#3e7828] transition-transform duration-200 group-hover:translate-x-1 flex-shrink-0" />
                    </div>
                    <p className="text-xs sm:text-sm text-[#555555] font-normal leading-relaxed mt-1">
                      {ind.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
