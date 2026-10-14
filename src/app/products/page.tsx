import { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { ArrowDownToLine } from "lucide-react";
import ProductsClient from "@/components/products/ProductsClient";

export const metadata: Metadata = {
  title: "Products Catalogue | Nelskraft Refractory Pvt. Ltd.",
  description:
    "Explore Nelskraft's complete range of Refractory Products (bricks, mortars, castables, bed material), Biomass Fuels (pellets, cashew cake), and Mineral Materials (ball clay, silica sand).",
};

export default function ProductsPage() {
  return (
    <div className="bg-white min-h-screen text-[#000d15]">
      {/* Products Banner */}
      <section className="relative py-20 md:py-28 bg-[#000d15] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/images/hero-industrial.jpg"
            alt="Nelskraft industrial materials plant"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/60" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#9bd71d] mb-4">
                <span className="w-6 h-[2px] bg-[#9bd71d]" />
                <span>Product Catalogue</span>
              </div>
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
                Engineered for Extreme Thermal Performance
              </h1>
              <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
                Refractory formulations, high-calorific biofuels, and premium
                industrial minerals sourced and tested to strict standards.
              </p>
            </div>

            {/* Download Full Catalogue PDF button */}
            <div className="flex-shrink-0">
              <a
                href="/Nelskraft-Catalogue.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white text-white hover:text-[#000d15] border border-white/30 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-sm transition-all duration-200"
              >
                <ArrowDownToLine className="w-4 h-4 text-[#9bd71d] group-hover:text-[#000d15]" />
                <span>Download Official Catalogue (PDF)</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Products Grid with Suspense */}
      <Suspense
        fallback={
          <div className="py-24 text-center text-gray-500">
            Loading products catalogue...
          </div>
        }
      >
        <ProductsClient />
      </Suspense>
    </div>
  );
}
