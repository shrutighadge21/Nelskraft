"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/catalogue";

export default function EnquiryCtaSection() {
  return (
    <section
      id="cta"
      className="group/cta relative w-full bg-[#FAF9F6] border-t border-[#e8e6df] overflow-hidden"
      aria-label="Contact and Material Enquiries"
    >
      {/* Background Industrial Photograph on Desktop / Right Half */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[58%] xl:w-[52%] z-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/hero-industrial.jpg"
          alt="Industrial manufacturing facility with high-temperature rotary kilns and processing infrastructure"
          fill
          quality={95}
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-cover object-right lg:object-center transition-transform duration-1000 ease-out group-hover/cta:scale-105"
          priority
        />
        {/* Soft Off-White Gradient Overlay to ensure crisp typography and smooth blending */}
        <div
          className="absolute inset-0 hidden lg:block"
          style={{
            background:
              "linear-gradient(90deg, #FAF9F6 0%, #FAF9F6 18%, rgba(250, 249, 246, 0.92) 42%, rgba(250, 249, 246, 0.55) 70%, rgba(250, 249, 246, 0.15) 100%)",
          }}
          aria-hidden="true"
        />
        {/* Mobile/Tablet localized top-to-bottom fade */}
        <div
          className="absolute inset-0 lg:hidden"
          style={{
            background:
              "linear-gradient(180deg, #FAF9F6 0%, #FAF9F6 45%, rgba(250, 249, 246, 0.88) 75%, rgba(250, 249, 246, 0.45) 100%)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Restrained Geometric Angled Shape in Muted Green (Signature Industrial Accent) */}
      <div
        className="absolute bottom-0 right-0 w-[240px] sm:w-[320px] md:w-[420px] lg:w-[480px] h-[90px] sm:h-[120px] lg:h-[150px] z-10 pointer-events-none"
        style={{
          clipPath: "polygon(100% 20%, 100% 100%, 0% 100%)",
          background:
            "linear-gradient(135deg, rgba(84, 169, 55, 0.9) 0%, rgba(45, 107, 31, 0.95) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Main Container Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-10 lg:gap-14">
          
          {/* Left Column: Eyebrow, Headline, Description & Direct Quick Contacts */}
          <div className="max-w-2xl">
            {/* Eyebrow Label with Accent Line */}
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-[#2d6b1f] flex-shrink-0" />
              <span className="text-xs font-bold tracking-[0.22em] uppercase text-[#2d6b1f]">
                GET IN TOUCH
              </span>
            </div>

            {/* Main Headline */}
            <h2 className="font-sans text-2xl sm:text-4xl md:text-[2.75rem] font-bold tracking-tight text-[#1a1f1c] leading-[1.18] mb-4">
              Looking for Industrial Materials?
            </h2>

            {/* Supporting Description */}
            <p className="text-base sm:text-lg text-[#4a4a4a] font-normal leading-relaxed mb-6 max-w-xl">
              Contact Nelskraft to enquire about refractory materials, biomass
              fuels, and industrial minerals for your requirements.
            </p>

            {/* Subtle Inline Phone & Email */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-sm text-[#4a4a4a] pt-1">
              <a
                href={`tel:${COMPANY_DETAILS.phone}`}
                className="inline-flex items-center gap-2 hover:text-[#2d6b1f] transition-colors font-medium"
              >
                <Phone className="w-4 h-4 text-[#2d6b1f]" />
                <span>{COMPANY_DETAILS.phoneDisplay}</span>
              </a>
              <span className="text-gray-300 hidden sm:inline">•</span>
              <a
                href={`mailto:${COMPANY_DETAILS.email}`}
                className="inline-flex items-center gap-2 hover:text-[#2d6b1f] transition-colors font-medium break-all"
              >
                <Mail className="w-4 h-4 text-[#2d6b1f]" />
                <span>{COMPANY_DETAILS.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Actions (Side-by-side on desktop, clean responsive stack on mobile) */}
          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row items-stretch sm:items-center gap-3 sm:gap-4 flex-shrink-0 w-full sm:w-auto">
            {/* Primary Button: Enquire Now */}
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#2d6b1f] hover:bg-[#235518] text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-semibold tracking-wide shadow-sm hover:shadow-md transition-all duration-200 group transform hover:-translate-y-0.5 active:scale-95 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d6b1f]"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Link>

            {/* Secondary Action: Contact Us */}
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/85 hover:bg-white text-[#1a1f1c] hover:text-[#2d6b1f] border border-[#cfccc4] hover:border-[#2d6b1f] px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-semibold tracking-wide backdrop-blur-xs shadow-xs hover:shadow-sm transition-all duration-200 group transform hover:-translate-y-0.5 active:scale-95 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d6b1f]"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 text-gray-500 group-hover:text-[#2d6b1f]" />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
