"use client";

import { useEffect, useRef } from "react";
import { Package, Flame, MessageSquare } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const WHY_CHOOSE_ITEMS = [
  {
    title: "Focused Product Range",
    description:
      "A selection of refractory products, biomass fuels, and industrial minerals.",
    icon: Package,
    iconColor: "text-[#54a937]",
    iconBg: "bg-[#edf6e8] border-[#ddead5]",
  },
  {
    title: "Industrial Applications",
    description:
      "Materials intended for relevant industrial and high-temperature applications, according to the specific product.",
    icon: Flame,
    iconColor: "text-[#984629]",
    iconBg: "bg-[#f8ede6] border-[#ecdcd0]",
  },
  {
    title: "Enquiry-Led Support",
    description:
      "A direct way for customers to enquire about available materials and discuss their requirements.",
    icon: MessageSquare,
    iconColor: "text-[#54a937]",
    iconBg: "bg-[#edf6e8] border-[#ddead5]",
  },
];

export default function WhyChooseSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const blocksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
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

      if (blocksRef.current) {
        gsap.from(blocksRef.current.children, {
          scrollTrigger: {
            trigger: blocksRef.current,
            start: "top 78%",
          },
          opacity: 0,
          y: 32,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="why-choose"
      ref={sectionRef}
      className="py-24 md:py-32 bg-[#FAF9F6] text-[#202522] border-t border-[#eeece6]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 md:mb-16"
        >
          <div>
            <div className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.22em] uppercase text-[#984629] mb-3">
              <span className="w-6 h-[2px] bg-[#984629]" />
              <span>WHY NELSKRAFT</span>
            </div>
            <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#202522] leading-[1.18]">
              Industrial Materials, Thoughtfully Supplied.
            </h2>
          </div>

          <p className="text-sm sm:text-base text-[#454545] font-normal leading-relaxed max-w-md">
            A focused range of refractory materials, biomass fuels, and
            industrial minerals to support varied industrial requirements.
          </p>
        </div>

        {/* Three Balanced Blocks */}
        <div
          ref={blocksRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {WHY_CHOOSE_ITEMS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col bg-white rounded-3xl p-8 sm:p-9 border border-[#e8e6df] shadow-xs hover:shadow-md transition-shadow duration-300"
              >
                {/* Minimal Icon Badge */}
                <div
                  className={`w-14 h-14 rounded-2xl ${item.iconBg} border flex items-center justify-center ${item.iconColor} mb-6`}
                >
                  <Icon className="w-6 h-6" strokeWidth={1.8} />
                </div>

                {/* Content */}
                <h3 className="font-sans text-xl sm:text-2xl font-bold text-[#202522] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-[#454545] font-normal leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
