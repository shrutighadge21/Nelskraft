import { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import ContactClient from "@/components/contact/ContactClient";

export const metadata: Metadata = {
  title: "Contact & Enquiry | Nelskraft Refractory Pvt. Ltd.",
  description:
    "Contact Nelskraft Refractory Pvt. Ltd. in Pune, Maharashtra. Reach us by phone (+91 7020309001), email (info@nelskraft.com), or submit an industrial quotation request.",
};

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen text-[#000d15]">
      {/* Banner */}
      <section className="relative py-20 md:py-28 bg-[#000d15] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/images/hero-industrial.jpg"
            alt="Nelskraft factory background"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/60" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#9bd71d] mb-4">
              <span className="w-6 h-[2px] bg-[#9bd71d]" />
              <span>Connect With Us</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
              Let&apos;s Discuss Your Requirements
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
              Reach out directly to discuss high-temperature refractory needs,
              biomass fuel supply chains, or industrial mineral procurement.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Contact & Enquiry Form with Suspense */}
      <Suspense
        fallback={
          <div className="py-24 text-center text-gray-500">
            Loading enquiry form...
          </div>
        }
      >
        <ContactClient />
      </Suspense>
    </div>
  );
}
