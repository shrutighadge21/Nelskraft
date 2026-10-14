"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  MessageCircle,
  Check,
  ArrowRight,
} from "lucide-react";
import {
  PRODUCTS,
  PRODUCT_CATEGORIES,
  ProductItem,
  getWhatsAppUrl,
} from "@/data/catalogue";

export default function ProductsClient() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "all") {
      return PRODUCTS;
    }
    return PRODUCTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
        <button
          onClick={() => setSelectedCategory("all")}
          className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
            selectedCategory === "all"
              ? "bg-[#000d15] text-white shadow-md"
              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
          }`}
        >
          All Materials ({PRODUCTS.length})
        </button>

        {PRODUCT_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 cursor-pointer ${
              selectedCategory === cat.id
                ? "bg-[#54a937] text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {cat.title}
          </button>
        ))}
      </div>

      {/* Category Overview Card (if specific category selected) */}
      {selectedCategory !== "all" && (
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-[#fbfbfa] border border-gray-200/80 flex flex-col md:flex-row items-center gap-6">
          {(() => {
            const catInfo = PRODUCT_CATEGORIES.find((c) => c.id === selectedCategory);
            if (!catInfo) return null;
            return (
              <>
                <div className="relative w-full md:w-48 h-32 rounded-2xl overflow-hidden flex-shrink-0">
                  <Image
                    src={catInfo.image}
                    alt={catInfo.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold tracking-widest text-[#54a937] uppercase">
                    Category Overview
                  </span>
                  <h2 className="text-2xl font-bold font-serif text-[#000d15] mt-1 mb-2">
                    {catInfo.title}
                  </h2>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {catInfo.description}
                  </p>
                </div>
              </>
            );
          })()}
        </div>
      )}

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Product Card Image */}
              <div className="relative h-56 w-full overflow-hidden bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-[#000d15]/80 backdrop-blur-md text-white text-[10px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full">
                  {product.categoryName}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-[#000d15] mb-2 leading-snug group-hover:text-[#54a937] transition-colors">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-600 leading-relaxed line-clamp-3 mb-4">
                  {product.shortDesc}
                </p>

                {/* Technical Highlights Pills */}
                <div className="space-y-1.5 mb-4">
                  {product.specs.slice(0, 3).map((spec) => (
                    <div
                      key={spec.label}
                      className="flex items-center justify-between text-xs py-1 px-2.5 rounded bg-gray-50 border border-gray-100"
                    >
                      <span className="text-gray-500 font-medium">{spec.label}</span>
                      <span className="text-[#000d15] font-semibold">{spec.value}</span>
                    </div>
                  ))}
                </div>

                {/* Applications list tags */}
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {product.applications.slice(0, 2).map((app) => (
                    <span
                      key={app}
                      className="text-[10px] bg-emerald-50 text-emerald-800 font-medium px-2 py-0.5 rounded-full"
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
                className="text-xs font-semibold text-[#000d15] hover:text-[#54a937] transition-colors underline cursor-pointer"
              >
                View Full Specs
              </button>

              <div className="flex items-center gap-2">
                <a
                  href={getWhatsAppUrl(product.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Enquire about ${product.name} on WhatsApp`}
                  className="p-2 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full transition-all shadow-sm"
                  title="Enquire on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>

                <Link
                  href={`/contact?product=${encodeURIComponent(product.name)}`}
                  className="inline-flex items-center gap-1.5 bg-[#000d15] hover:bg-[#54a937] text-white text-xs font-semibold px-4 py-2 rounded-full transition-colors"
                >
                  <span>Enquire</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Product Details Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative border border-gray-200">
            <button
              type="button"
              onClick={() => setSelectedProduct(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center cursor-pointer text-sm font-bold"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="text-xs font-bold tracking-widest text-[#54a937] uppercase mb-1">
              {selectedProduct.categoryName}
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#000d15] mb-4">
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
                    <Check className="w-4 h-4 text-[#54a937] flex-shrink-0" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h4 className="text-xs font-bold tracking-wider text-gray-400 uppercase mb-3">
                Verified Technical Specifications
              </h4>
              <div className="bg-gray-50 rounded-2xl border border-gray-200/80 divide-y divide-gray-200/60 overflow-hidden">
                {selectedProduct.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="px-4 py-2.5 flex items-center justify-between text-xs sm:text-sm"
                  >
                    <span className="text-gray-600 font-medium">{spec.label}</span>
                    <span className="text-[#000d15] font-semibold text-right">
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
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-6 rounded-full text-sm font-semibold shadow transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Enquire via WhatsApp</span>
              </a>

              <Link
                href={`/contact?product=${encodeURIComponent(selectedProduct.name)}`}
                onClick={() => setSelectedProduct(null)}
                className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-[#000d15] hover:bg-[#54a937] text-white py-3 px-6 rounded-full text-sm font-semibold shadow transition-colors"
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
