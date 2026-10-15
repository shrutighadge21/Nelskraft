import { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import ContactClient from "@/components/contact/ContactClient";

export const metadata: Metadata = {
  title: "Contact Nelskraft | Refractory Products, Biomass Fuels & Minerals",
  description:
    "Looking for refractory products, biomass fuels, or industrial minerals? Contact Nelskraft Refractory Pvt. Ltd. in Pune, Maharashtra. Phone: +91 7020309001, Email: info@nelskraft.com.",
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen text-[#000d15]">
      {/* ========================================================= */}
      {/* 1. HERO SECTION (Follows reference layout & industrial style) */}
      {/* ========================================================= */}
      <section className="relative py-20 sm:py-24 md:py-28 bg-[#000d15] text-white overflow-hidden text-center">
        {/* Industrial Background with Dark Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-industrial.jpg"
            alt="Nelskraft industrial refractory plant and thermal facility"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#000d15]/90 via-[#000d15]/80 to-[#000d15]" />
        </div>

        {/* Hero Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center justify-center gap-2.5 text-xs sm:text-sm font-bold tracking-[0.22em] uppercase text-[#54a937] mb-4">
            <span className="w-5 h-[2px] bg-[#54a937]" />
            <span>CONTACT NELSKRAFT</span>
            <span className="w-5 h-[2px] bg-[#54a937]" />
          </div>

          {/* Main Heading */}
          <h1 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-tight text-white mb-5 leading-[1.12]">
            Let’s Talk About Your{" "}
            <span className="text-[#54a937]">Material Requirements.</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 font-normal leading-relaxed max-w-2xl mx-auto">
            Looking for refractory products, biomass fuels, or industrial
            minerals? Contact Nelskraft Refractory Pvt. Ltd. to discuss your
            requirements and product enquiries.
          </p>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. MAIN INTERACTIVE CONTENT (Two-Column Layout & Actions) */}
      {/* ========================================================= */}
      <Suspense
        fallback={
          <div className="py-24 text-center text-gray-500">
            <div className="w-8 h-8 border-4 border-[#54a937] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            <p className="text-sm">Loading contact page...</p>
          </div>
        }
      >
        <ContactClient />
      </Suspense>
    </div>
  );
}
