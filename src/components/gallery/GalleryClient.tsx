"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowRight, X } from "lucide-react";
import {
  GALLERY_ITEMS,
  GALLERY_CATEGORIES,
  GalleryItem,
} from "@/data/gallery";

export default function GalleryClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  // Compute item count per category from actual gallery data
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: GALLERY_ITEMS.length,
    };
    GALLERY_ITEMS.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filter gallery items by category
  const filteredItems = useMemo(() => {
    if (selectedCategory === "all") {
      return GALLERY_ITEMS;
    }
    return GALLERY_ITEMS.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  // Handle escape key to close popup
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveItem(null);
      }
    },
    []
  );

  useEffect(() => {
    if (activeItem) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeItem, handleKeyDown]);

  return (
    <div className="bg-[#FAF8F5] min-h-screen font-sans antialiased">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* ═══════════════════════════════════════════════
            CATEGORY FILTER BUTTONS (Matching Reference)
        ═══════════════════════════════════════════════ */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-8 sm:mb-12">
          {GALLERY_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            const count = categoryCounts[cat.id] ?? 0;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer shadow-2xs hover:shadow-xs active:scale-95 ${
                  isSelected
                    ? "bg-[#274E37] text-white shadow-xs ring-1 ring-[#274E37]"
                    : "bg-white hover:bg-[#F2EFEA] text-[#181E1A] border border-[#E2DDD2]"
                }`}
              >
                <span>{cat.name}</span>{" "}
                <span
                  className={
                    isSelected
                      ? "text-white/80 font-normal"
                      : "text-[#717873] font-normal"
                  }
                >
                  ({count})
                </span>
              </button>
            );
          })}
        </div>

        {/* ═══════════════════════════════════════════════
            GALLERY IMAGE GRID (4 Columns on Desktop)
        ═══════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group relative bg-white border border-[#E5E0D5] rounded-xl overflow-hidden shadow-2xs hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col"
            >
              {/* Image Box */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FAF9F6]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Subtle Hover Overlay with Title and Arrow matching reference */}
                <div className="absolute inset-x-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-[#274E37] via-[#274E37]/95 to-[#274E37]/80 flex items-center justify-between gap-3 opacity-100 sm:opacity-0 sm:translate-y-2 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 transition-all duration-300 ease-out">
                  <h3 className="font-bold text-xs sm:text-sm text-white leading-snug line-clamp-2 flex-1">
                    {item.name}
                  </h3>
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center text-white flex-shrink-0 group-hover:bg-white group-hover:text-[#274E37] transition-all">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* ═══════════════════════════════════════════════
          IMAGE POPUP / LIGHTBOX (Enlarged Image & Name Only)
      ═══════════════════════════════════════════════ */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeItem.name}
          onClick={() => setActiveItem(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
        >
          {/* Close Button Top-Right (Prominent & easy to tap on mobile) */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setActiveItem(null);
            }}
            aria-label="Close image popup"
            className="absolute top-3 right-3 sm:top-6 sm:right-6 z-10 w-11 h-11 sm:w-10 sm:h-10 rounded-full bg-black/70 hover:bg-black/90 border border-white/30 text-white flex items-center justify-center transition-all cursor-pointer shadow-lg active:scale-95"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Modal Content Box (Image and Name Only) */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
          >
            {/* Enlarged Image */}
            <div className="relative w-full max-h-[68vh] sm:max-h-[75vh] aspect-[4/3] sm:aspect-[16/10] rounded-2xl overflow-hidden bg-black/40 shadow-2xl border border-white/10">
              <Image
                src={activeItem.image}
                alt={activeItem.name}
                fill
                priority
                className="object-contain"
              />
            </div>

            {/* Display Name ONLY beneath the image */}
            <h2 className="text-white font-bold text-sm sm:text-lg text-center mt-3 sm:mt-4 tracking-wide max-w-2xl px-4">
              {activeItem.name}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
}
