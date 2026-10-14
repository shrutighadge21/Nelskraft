"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, MessageCircle, Phone, Mail } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { COMPANY_DETAILS, getWhatsAppUrl } from "@/data/catalogue";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function EnquiryCtaSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      if (cardRef.current) {
        gsap.from(cardRef.current, {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
          opacity: 0,
          y: 30,
          duration: 0.85,
          ease: "power2.out",
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-28 bg-[#FAF9F6] text-[#202522] border-t border-[#eeece6]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={cardRef}
          className="relative bg-white rounded-3xl border border-[#e8e6df] shadow-xs p-8 sm:p-12 lg:p-16 overflow-hidden"
        >
          {/* Subtle decorative background accent */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#edf6e8]/40 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
            {/* Left Content */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2.5 text-xs font-semibold tracking-[0.22em] uppercase text-[#54a937] mb-3">
                <span className="w-6 h-[2px] bg-[#54a937]" />
                <span>GET IN TOUCH</span>
              </div>

              <h2 className="font-sans text-3xl sm:text-4xl md:text-[2.65rem] font-bold tracking-tight text-[#202522] leading-[1.2] mb-4">
                Looking for Industrial Materials?
              </h2>

              <p className="text-base sm:text-lg text-[#454545] font-normal leading-relaxed mb-6">
                Contact Nelskraft to enquire about refractory materials, biomass
                fuels, and industrial minerals for your requirements.
              </p>

              {/* Verified Quick Contact Details */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-[#454545]">
                <a
                  href={`tel:${COMPANY_DETAILS.phone}`}
                  className="inline-flex items-center gap-2 hover:text-[#54a937] transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#54a937]" />
                  <span>{COMPANY_DETAILS.phoneDisplay}</span>
                </a>
                <a
                  href={`mailto:${COMPANY_DETAILS.email}`}
                  className="inline-flex items-center gap-2 hover:text-[#54a937] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#54a937]" />
                  <span>{COMPANY_DETAILS.email}</span>
                </a>
              </div>
            </div>

            {/* Right Action Buttons */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 flex-shrink-0">
              {/* Primary CTA: Enquire Now */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 bg-[#54a937] hover:bg-[#46912c] text-white px-8 py-3.5 rounded-full text-base font-semibold tracking-wide shadow-xs hover:shadow-md transition-all duration-200 group"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>

              {/* Secondary CTA: Contact Us */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#FAF9F6] hover:bg-[#f0eee9] text-[#202522] border border-[#e8e6df] px-8 py-3.5 rounded-full text-base font-semibold tracking-wide transition-colors"
              >
                <span>Contact Us</span>
              </Link>

              {/* WhatsApp Enquiry Link with prefilled message */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-[#3d7a22] hover:text-[#2e5c19] py-1 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#54a937]" />
                <span>Or message us on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
