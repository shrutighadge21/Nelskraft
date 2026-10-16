"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Leaf, Cog, Users } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { COMMITMENTS_LIST } from "@/data/catalogue";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function CommitmentSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const plantRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Plant image subtle float / scale reveal
      if (plantRef.current) {
        gsap.from(plantRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
          scale: 0.92,
          opacity: 0,
          duration: 1.2,
          ease: "power2.out",
        });
      }

      // Feature items stagger
      if (itemsRef.current) {
        gsap.from(itemsRef.current.children, {
          scrollTrigger: {
            trigger: itemsRef.current,
            start: "top 80%",
          },
          opacity: 0,
          x: 30,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const getCommitmentIcon = (title: string) => {
    if (title.includes("Sustainable")) {
      return <Leaf className="w-6 h-6 text-[#9bd71d]" />;
    }
    if (title.includes("Quality")) {
      return <Cog className="w-6 h-6 text-[#9bd71d]" />;
    }
    return <Users className="w-6 h-6 text-[#9bd71d]" />;
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 md:py-32 bg-[#000d15] text-white overflow-hidden"
    >
      {/* Background ambient gradient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#54a937]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#9bd71d] mb-4">
              <span className="w-6 h-[2px] bg-[#9bd71d]" />
              <span>Our Commitment</span>
            </div>

            <h2 className="font-sans text-3xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-white mb-6 leading-[1.18]">
              Enabling a More <br />
              <span className="text-[#9bd71d]">Sustainable Future</span>
            </h2>

            <p className="text-base sm:text-lg text-gray-300 leading-relaxed font-light">
              We aim to support industries with reliable materials while
              contributing to a more sustainable and responsible tomorrow.
            </p>
          </div>

          {/* Center Column: Growing Plant Seedling Image */}
          <div
            ref={plantRef}
            className="lg:col-span-3 flex justify-center items-center"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-2 border-[#54a937]/30 shadow-[0_0_50px_rgba(84,169,55,0.25)] group">
              <Image
                src="/images/sustain-commitment.jpg"
                alt="Green plant seedling sprouting from soil, symbol of industrial sustainability"
                fill
                sizes="(max-width: 768px) 280px, 320px"
                className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: 3 Circular Outlined Badges */}
          <div
            ref={itemsRef}
            className="lg:col-span-4 flex flex-col justify-center space-y-6 sm:space-y-8"
          >
            {COMMITMENTS_LIST.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-5 group p-2 rounded-xl transition-colors hover:bg-white/[0.03]"
              >
                {/* Circular Outlined Green Icon */}
                <div className="w-14 h-14 rounded-full border-2 border-[#54a937] flex items-center justify-center flex-shrink-0 bg-[#000d15]/80 group-hover:bg-[#54a937]/20 group-hover:scale-105 transition-all duration-300 shadow-sm">
                  {getCommitmentIcon(item.title)}
                </div>

                <div className="flex flex-col">
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#9bd71d] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
