"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  MessageCircle,
  Check,
  ArrowRight,
  Sparkles,
  Info,
} from "lucide-react";
import {
  PRODUCTS,
  PRODUCT_CATEGORIES,
  ProductItem,
  getWhatsAppUrl,
} from "@/data/catalogue";

// Direct, reliable Product Image component with zero temporary state delays
function ProductCardImage({
  src,
  alt,
  categoryName,
}: {
  src: string;
  alt: string;
  categoryName: string;
}) {
  const [hasError, setHasError] = useState(false);

  return (
    <div className="relative h-56 w-full overflow-hidden bg-[#f0eee9]">
      <Image
        src={hasError ? "/images/cat-refractory.jpg" : src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        onError={() => setHasError(true)}
      />
      {/* Category Pill Badge */}
      <div className="absolute top-3 left-3 bg-[#000d15]/85 backdrop-blur-md text-white text-[10px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full shadow-xs border border-white/10 transition-colors group-hover:bg-[#2d6b1f]">
        {categoryName}
      </div>
    </div>
  );
}

export default function ProductsClient() {
  const searchParams = useSearchParams();
  const rawCategory = searchParams.get("category") || "all";
  // Normalize category id (handles both 'mineral-materials' and 'industrial-minerals')
  const initialCategory =
    rawCategory === "industrial-minerals" ? "mineral-materials" : rawCategory;

  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  // Sync state if URL query param changes via navigation or browser history
  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) {
      setSelectedCategory(cat === "industrial-minerals" ? "mineral-materials" : cat);
    }
  }, [searchParams]);

  // Update selected category and reflect in browser URL so refresh always remembers the category
  const handleSelectCategory = (catId: string) => {
    setSelectedCategory(catId);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      if (catId === "all") {
        url.searchParams.delete("category");
      } else {
        url.searchParams.set("category", catId);
      }
      window.history.replaceState(null, "", url.pathname + url.search);
    }
  };

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "all") {
      return PRODUCTS;
    }
    return PRODUCTS.filter(
      (p) =>
        p.category === selectedCategory ||
        (selectedCategory === "mineral-materials" && p.category === "mineral-materials")
    );
  }, [selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Category Tabs with Interactive Micro-Interactions */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 mb-12">
        <button
          type="button"
          onClick={() => handleSelectCategory("all")}
          className={`px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d6b1f] ${
            selectedCategory === "all"
              ? "bg-[#000d15] text-white shadow-md ring-2 ring-[#000d15]/20"
              : "bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-black shadow-xs"
          }`}
        >
          All Materials ({PRODUCTS.length})
        </button>

        {PRODUCT_CATEGORIES.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => handleSelectCategory(cat.id)}
              className={`px-5 sm:px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer transform hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d6b1f] ${
                isSelected
                  ? "bg-[#2d6b1f] text-white shadow-md ring-2 ring-[#2d6b1f]/30"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-black shadow-xs"
              }`}
            >
              {cat.title}
            </button>
          );
        })}
      </div>

      {/* Category Overview Card (if specific category selected) */}
      {selectedCategory !== "all" && (
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-[#FAF9F6] border border-[#e8e6df] shadow-xs flex flex-col md:flex-row items-center gap-6 animate-fadeIn transition-all duration-300">
          {(() => {
            const catInfo = PRODUCT_CATEGORIES.find(
              (c) => c.id === selectedCategory || (selectedCategory === "industrial-minerals" && c.id === "mineral-materials")
            );
            if (!catInfo) return null;
            return (
              <>
                <div className="relative w-full md:w-56 h-36 rounded-2xl overflow-hidden flex-shrink-0 bg-gray-100 border border-gray-200/80 shadow-xs">
                  <Image
                    src={catInfo.image}
                    alt={catInfo.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 224px"
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#2d6b1f] uppercase mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Category Overview</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold font-sans text-[#1a1f1c] mb-2">
                    {catInfo.title}
                  </h2>
                  <p className="text-sm sm:text-base text-[#4a4a4a] leading-relaxed">
                    {catInfo.description}
                  </p>
                </div>
              </>
            );
          })()}
        </div>
      )}

      {/* Product Grid with Smooth Category Switch Fade */}
      <div
        key={selectedCategory}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn transition-opacity duration-200"
      >
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between"
          >
            <div>
              {/* Reliable Product Image with fallback */}
              <ProductCardImage
                src={product.image}
                alt={product.name}
                categoryName={product.categoryName}
              />

              {/* Product Info */}
              <div className="p-6">
                <h3 className="font-sans text-xl font-bold text-[#1a1f1c] mb-2 leading-snug group-hover:text-[#2d6b1f] transition-colors duration-200">
                  {product.name}
                </h3>
                <p className="text-xs sm:text-[13px] text-[#4a4a4a] leading-relaxed line-clamp-3 mb-4">
                  {product.shortDesc}
                </p>

                {/* Technical Highlights Pills */}
                <div className="space-y-1.5 mb-4">
                  {product.specs.slice(0, 3).map((spec) => (
                    <div
                      key={spec.label}
                      className="flex items-center justify-between text-xs py-1.5 px-3 rounded-lg bg-[#FAF9F6] border border-[#e8e6df]"
                    >
                      <span className="text-gray-500 font-medium">{spec.label}</span>
                      <span className="text-[#1a1f1c] font-semibold">{spec.value}</span>
                    </div>
                  ))}
                </div>

                {/* Applications list tags */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {product.applications.slice(0, 2).map((app) => (
                    <span
                      key={app}
                      className="text-[10px] bg-emerald-50 text-emerald-800 font-medium px-2.5 py-0.5 rounded-full border border-emerald-100"
                    >
                      {app}
                    </span>
                  ))}
                  {product.applications.length > 2 && (
                    <span className="text-[10px] bg-gray-100 text-gray-600 font-medium px-2 py-0.5 rounded-full">
                      +{product.applications.length - 2} more
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="p-6 pt-0 border-t border-gray-100 mt-4 flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={() => setSelectedProduct(product)}
                className="inline-flex items-center gap-1 text-xs font-semibold text-[#1a1f1c] hover:text-[#2d6b1f] transition-colors cursor-pointer py-1 group/btn focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d6b1f] rounded"
              >
                <Info className="w-3.5 h-3.5 text-gray-400 group-hover/btn:text-[#2d6b1f] transition-colors" />
                <span className="underline underline-offset-2">View Full Specs</span>
              </button>

              <div className="flex items-center gap-2">
                <a
                  href={getWhatsAppUrl(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Enquire about ${product.name} on WhatsApp`}
                  className="p-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full transition-all duration-200 transform hover:scale-110 active:scale-95 shadow-xs hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
                  title="Enquire on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>

                <Link
                  href={`/contact?product=${encodeURIComponent(product.name)}`}
                  className="inline-flex items-center gap-1.5 bg-[#1a1f1c] hover:bg-[#2d6b1f] text-white text-xs font-semibold px-4 py-2.5 rounded-full transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 shadow-xs hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d6b1f]"
                >
                  <span>Enquire</span>
                  <ArrowRight className="w-3 h-3 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-label={selectedProduct.name}
        >
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative border border-gray-200">
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center cursor-pointer text-sm font-bold transition-all hover:scale-105 active:scale-95"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="text-xs font-bold tracking-widest text-[#2d6b1f] uppercase mb-1">
              {selectedProduct.categoryName}
            </div>
            <h3 className="font-sans text-2xl sm:text-3xl font-bold text-[#1a1f1c] mb-4">
              {selectedProduct.name}
            </h3>

            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              {selectedProduct.description}
            </p>

            <div className="mb-6">
              <h4 className="text-xs font-bold tracking-wider text-gray-400 uppercase mb-3">
                Key Industrial Applications
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                {selectedProduct.applications.map((app) => (
                  <li key={app} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#2d6b1f] flex-shrink-0" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h4 className="text-xs font-bold tracking-wider text-gray-400 uppercase mb-3">
                Verified Technical Specifications
              </h4>
              <div className="bg-[#FAF9F6] rounded-2xl border border-[#e8e6df] divide-y divide-[#e8e6df] overflow-hidden">
                {selectedProduct.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="px-4 py-2.5 flex items-center justify-between text-xs sm:text-sm"
                  >
                    <span className="text-gray-600 font-medium">{spec.label}</span>
                    <span className="text-[#1a1f1c] font-semibold text-right">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-gray-100">
              <a
                href={getWhatsAppUrl(selectedProduct.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 px-6 rounded-full text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Enquire via WhatsApp</span>
              </a>

              <Link
                href={`/contact?product=${encodeURIComponent(selectedProduct.name)}`}
                onClick={() => setSelectedProduct(null)}
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-[#1a1f1c] hover:bg-[#2d6b1f] text-white py-3.5 px-6 rounded-full text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95"
              >
                <span>Request Quotation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
