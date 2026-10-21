"use client";

import { useState, useMemo, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  ArrowRight,
  ChevronRight,
  MessageCircle,
  ChevronDown,
} from "lucide-react";
import {
  PRODUCTS,
  PRODUCT_CATEGORIES,
  ProductItem,
  getWhatsAppUrl,
} from "@/data/catalogue";

export default function ProductsClient() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [visibleCount, setVisibleCount] = useState<number>(6);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem>(PRODUCTS[0]);
  const [selectedVarietyIndex, setSelectedVarietyIndex] = useState<number>(0);
  const [activeThumbIndex, setActiveThumbIndex] = useState<number>(0);

  const catalogueSectionRef = useRef<HTMLElement>(null);
  const detailSectionRef = useRef<HTMLDivElement>(null);

  // Filter products by category, search query, and variety names
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === "all" ||
        product.category === selectedCategory ||
        (selectedCategory === "industrial-minerals" &&
          (product.category === "industrial-minerals" ||
            product.category === "mineral-materials"));

      const q = searchQuery.trim().toLowerCase();
      const matchesSearch =
        q === "" ||
        product.name.toLowerCase().includes(q) ||
        product.shortDesc.toLowerCase().includes(q) ||
        product.categoryName.toLowerCase().includes(q) ||
        (product.varieties &&
          product.varieties.some((v) =>
            v.name.toLowerCase().includes(q)
          ));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Handle category selection
  const handleCategorySelect = (categoryId: string) => {
    setSelectedCategory(categoryId);
    setVisibleCount(6);
    if (catalogueSectionRef.current) {
      catalogueSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle viewing product details (with optional initial variety)
  const handleViewDetails = (product: ProductItem, varietyIndex: number = 0) => {
    setSelectedProduct(product);
    setSelectedVarietyIndex(varietyIndex);
    setActiveThumbIndex(0);
    if (detailSectionRef.current) {
      detailSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Derive active variety (if product supports selectable varieties)
  const hasVarieties = Boolean(
    selectedProduct.varieties && selectedProduct.varieties.length > 0
  );
  const activeVariety =
    hasVarieties && selectedProduct.varieties
      ? selectedProduct.varieties[
          Math.min(
            selectedVarietyIndex,
            selectedProduct.varieties.length - 1
          )
        ] || selectedProduct.varieties[0]
      : null;

  // Active display details synchronized with selected variety
  const activeTitle = activeVariety ? activeVariety.name : selectedProduct.name;
  const activeDescription =
    activeVariety?.description || selectedProduct.description;
  const activeSpecs = activeVariety
    ? activeVariety.specs
    : selectedProduct.specs;

  // Get current active images and thumbnails
  const currentThumbnails = activeVariety
    ? activeVariety.thumbnails && activeVariety.thumbnails.length > 0
      ? activeVariety.thumbnails
      : [activeVariety.image]
    : selectedProduct.thumbnails && selectedProduct.thumbnails.length > 0
    ? selectedProduct.thumbnails
    : [selectedProduct.image];

  const currentDisplayImage =
    currentThumbnails[activeThumbIndex] ||
    currentThumbnails[0] ||
    selectedProduct.image;

  // Category counts
  const totalCount = PRODUCTS.length;
  const refractoryCount = PRODUCTS.filter(
    (p) => p.category === "refractory-products"
  ).length;
  const biomassCount = PRODUCTS.filter(
    (p) => p.category === "biomass-fuels"
  ).length;
  const mineralsCount = PRODUCTS.filter(
    (p) =>
      p.category === "industrial-minerals" ||
      p.category === "mineral-materials"
  ).length;

  return (
    <div className="bg-[#FAF8F5] text-[#181E1A] font-sans antialiased">
      {/* ═══════════════════════════════════════════════
          HERO SECTION
      ═══════════════════════════════════════════════ */}
      <section className="relative w-full bg-[#121915] overflow-hidden py-16 sm:py-24 md:py-28">
        {/* Authentic Industrial Refractory Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/about-bricks.jpg"
            alt="Nelskraft Refractory High-Performance Materials"
            fill
            priority
            sizes="100vw"
            className="object-cover object-right md:object-center opacity-40 mix-blend-luminosity"
          />
          {/* Deep dark overlay to ensure readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0C120E] via-[#0E1611]/90 to-transparent" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-[#0C120E]/70" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            {/* Small label */}
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[1.5px] bg-[#678B60]" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#98A89A]">
                OUR PRODUCTS
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-4">
              High-Performance Materials for Industrial Applications.
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#B3C2B7] leading-relaxed max-w-xl">
              A comprehensive range of refractory products, biomass fuels, and industrial
              minerals to meet diverse industry needs.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          THREE PRODUCT CATEGORY PANELS
      ═══════════════════════════════════════════════ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 pb-4">
          <div className="flex items-center gap-2">
            <span className="w-5 h-[1.5px] bg-[#445E3D]" />
            <h2 className="text-xs font-bold tracking-[0.2em] uppercase text-[#5A665D]">
              OUR PRODUCT CATEGORIES
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#7D8880]">
            Explore our product range across three key categories.
          </p>
        </div>

        {/* 3 Category Panels */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mt-2">
          {/* Panel 1: Refractory Products */}
          <div
            onClick={() => handleCategorySelect("refractory-products")}
            className={`group bg-white hover:bg-[#F4F1EA] border rounded-2xl p-3 sm:p-4 flex items-center justify-between cursor-pointer transition-all duration-200 shadow-2xs hover:shadow-sm ${
              selectedCategory === "refractory-products"
                ? "border-[#274E37] ring-2 ring-[#274E37]/15"
                : "border-[#E5E0D5]"
            }`}
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="relative w-20 h-16 sm:w-24 sm:h-20 rounded-xl overflow-hidden bg-[#EAE6DD] flex-shrink-0">
                <Image
                  src="/images/about-bricks.jpg"
                  alt="Refractory Products"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-[#181E1A] text-sm sm:text-base leading-snug group-hover:text-[#274E37] transition-colors">
                  Refractory<br />Products
                </h3>
                <p className="text-xs text-[#717873] mt-1">
                  {refractoryCount} Products
                </p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full border border-[#D5CFBF] flex items-center justify-center text-[#181E1A] group-hover:border-[#274E37] group-hover:bg-[#274E37] group-hover:text-white transition-all flex-shrink-0 ml-2">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Panel 2: Biomass Fuels */}
          <div
            onClick={() => handleCategorySelect("biomass-fuels")}
            className={`group bg-white hover:bg-[#F4F1EA] border rounded-2xl p-3 sm:p-4 flex items-center justify-between cursor-pointer transition-all duration-200 shadow-2xs hover:shadow-sm ${
              selectedCategory === "biomass-fuels"
                ? "border-[#274E37] ring-2 ring-[#274E37]/15"
                : "border-[#E5E0D5]"
            }`}
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="relative w-20 h-16 sm:w-24 sm:h-20 rounded-xl overflow-hidden bg-[#EAE6DD] flex-shrink-0">
                <Image
                  src="/images/catalogue/page_8_img_0_71.jpeg"
                  alt="Biomass Fuels"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-[#181E1A] text-sm sm:text-base leading-snug group-hover:text-[#274E37] transition-colors">
                  Biomass<br />Fuels
                </h3>
                <p className="text-xs text-[#717873] mt-1">
                  {biomassCount} Products
                </p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full border border-[#D5CFBF] flex items-center justify-center text-[#181E1A] group-hover:border-[#274E37] group-hover:bg-[#274E37] group-hover:text-white transition-all flex-shrink-0 ml-2">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          {/* Panel 3: Industrial Minerals */}
          <div
            onClick={() => handleCategorySelect("industrial-minerals")}
            className={`group bg-white hover:bg-[#F4F1EA] border rounded-2xl p-3 sm:p-4 flex items-center justify-between cursor-pointer transition-all duration-200 shadow-2xs hover:shadow-sm ${
              selectedCategory === "industrial-minerals"
                ? "border-[#274E37] ring-2 ring-[#274E37]/15"
                : "border-[#E5E0D5]"
            }`}
          >
            <div className="flex items-center gap-3.5 min-w-0">
              <div className="relative w-20 h-16 sm:w-24 sm:h-20 rounded-xl overflow-hidden bg-[#EAE6DD] flex-shrink-0">
                <Image
                  src="/images/catalogue/page_10_img_1_87.jpeg"
                  alt="Industrial Minerals"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="min-w-0">
                <h3 className="font-bold text-[#181E1A] text-sm sm:text-base leading-snug group-hover:text-[#274E37] transition-colors">
                  Industrial<br />Minerals
                </h3>
                <p className="text-xs text-[#717873] mt-1">
                  {mineralsCount} Products
                </p>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full border border-[#D5CFBF] flex items-center justify-center text-[#181E1A] group-hover:border-[#274E37] group-hover:bg-[#274E37] group-hover:text-white transition-all flex-shrink-0 ml-2">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          PRODUCT CATALOGUE & FILTERS SECTION
      ═══════════════════════════════════════════════ */}
      <section
        ref={catalogueSectionRef}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 sm:pb-24"
      >
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* ────── LEFT SIDEBAR ────── */}
          <aside className="w-full lg:w-64 flex-shrink-0">
            <h3 className="text-xs font-bold tracking-[0.16em] uppercase text-[#717873] mb-3">
              FILTER BY CATEGORY
            </h3>

            {/* Filter Buttons */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1 gap-2">
              {/* All Products */}
              <button
                type="button"
                onClick={() => handleCategorySelect("all")}
                className={`w-full flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 text-left cursor-pointer ${
                  selectedCategory === "all"
                    ? "bg-[#274E37] text-white shadow-xs"
                    : "bg-white hover:bg-[#F2EFEA] text-[#181E1A] border border-[#E5E0D5]"
                }`}
              >
                <span>All Products</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    selectedCategory === "all"
                      ? "bg-white/20 text-white"
                      : "bg-[#EAE6DD] text-[#555E52]"
                  }`}
                >
                  {totalCount}
                </span>
              </button>

              {/* Refractory Products */}
              <button
                type="button"
                onClick={() => handleCategorySelect("refractory-products")}
                className={`w-full flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 text-left cursor-pointer ${
                  selectedCategory === "refractory-products"
                    ? "bg-[#274E37] text-white shadow-xs"
                    : "bg-white hover:bg-[#F2EFEA] text-[#181E1A] border border-[#E5E0D5]"
                }`}
              >
                <span>Refractories</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    selectedCategory === "refractory-products"
                      ? "bg-white/20 text-white"
                      : "bg-[#EAE6DD] text-[#555E52]"
                  }`}
                >
                  {refractoryCount}
                </span>
              </button>

              {/* Biomass Fuels */}
              <button
                type="button"
                onClick={() => handleCategorySelect("biomass-fuels")}
                className={`w-full flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 text-left cursor-pointer ${
                  selectedCategory === "biomass-fuels"
                    ? "bg-[#274E37] text-white shadow-xs"
                    : "bg-white hover:bg-[#F2EFEA] text-[#181E1A] border border-[#E5E0D5]"
                }`}
              >
                <span>Biomass Fuels</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    selectedCategory === "biomass-fuels"
                      ? "bg-white/20 text-white"
                      : "bg-[#EAE6DD] text-[#555E52]"
                  }`}
                >
                  {biomassCount}
                </span>
              </button>

              {/* Industrial Minerals */}
              <button
                type="button"
                onClick={() => handleCategorySelect("industrial-minerals")}
                className={`w-full flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 text-left cursor-pointer ${
                  selectedCategory === "industrial-minerals"
                    ? "bg-[#274E37] text-white shadow-xs"
                    : "bg-white hover:bg-[#F2EFEA] text-[#181E1A] border border-[#E5E0D5]"
                }`}
              >
                <span>Minerals</span>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    selectedCategory === "industrial-minerals"
                      ? "bg-white/20 text-white"
                      : "bg-[#EAE6DD] text-[#555E52]"
                  }`}
                >
                  {mineralsCount}
                </span>
              </button>
            </div>

          </aside>

          {/* ────── MAIN PRODUCTS CONTENT ────── */}
          <div className="flex-1 w-full">
            {/* Top Bar: Title & Search Field */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#181E1A]">
                {selectedCategory === "all"
                  ? `All Products (${filteredProducts.length})`
                  : selectedCategory === "refractory-products"
                  ? `Refractory Products (${filteredProducts.length})`
                  : selectedCategory === "biomass-fuels"
                  ? `Biomass Fuels (${filteredProducts.length})`
                  : `Industrial Minerals (${filteredProducts.length})`}
              </h2>

              {/* Search Field matching sketch top-right position */}
              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-[#8C968E] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setVisibleCount(6);
                  }}
                  placeholder="Search products & varieties..."
                  className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-white border border-[#D5CFBF] rounded-full focus:outline-none focus:ring-2 focus:ring-[#274E37] focus:border-transparent placeholder-[#8A948C] transition-all"
                />
              </div>
            </div>

            {/* Product Cards Grid (3 Columns on Desktop) */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-2xl border border-[#E5E0D5] p-12 text-center mt-4">
                <p className="text-sm font-semibold text-[#181E1A]">
                  No products found matching your search.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("all");
                  }}
                  className="mt-3 text-xs font-semibold text-[#274E37] hover:underline"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-2">
                {filteredProducts.slice(0, visibleCount).map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleViewDetails(product)}
                    className="group bg-white border border-[#E5E0D5] rounded-2xl overflow-hidden hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer"
                  >
                    <div>
                      {/* Product Image Area */}
                      <div className="relative h-44 sm:h-48 w-full bg-[#FAF9F6] p-4 flex items-center justify-center overflow-hidden border-b border-[#F0EEEA]">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          unoptimized={product.image.endsWith(".svg")}
                          className="object-contain p-3 group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>

                      {/* Card Content */}
                      <div className="p-4 sm:p-5">
                        <h3 className="font-bold text-sm sm:text-base text-[#181E1A] group-hover:text-[#274E37] transition-colors leading-snug line-clamp-1">
                          {product.name}
                        </h3>

                        {/* Category Tag & Varieties Badge */}
                        <div className="flex flex-wrap items-center gap-1.5 mt-2 mb-2">
                          <span className="inline-block text-[11px] font-medium text-[#2E5339] bg-[#EAF2EC] px-2.5 py-0.5 rounded-full">
                            {product.categoryName}
                          </span>
                          {product.varieties && product.varieties.length > 0 && (
                            <span className="inline-block text-[10px] font-semibold text-[#274E37] bg-[#E1EDE3] px-2 py-0.5 rounded-full border border-[#BCDDC3]">
                              {product.varieties.length} Varieties
                            </span>
                          )}
                        </div>

                        {/* Short Description */}
                        <p className="text-xs text-[#6B756E] line-clamp-2 leading-relaxed">
                          {product.shortDesc}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Action Row */}
                    <div className="px-4 sm:px-5 pb-4 pt-3 border-t border-[#F0EEEA] flex items-center justify-between">
                      <span className="text-xs font-semibold text-[#181E1A] group-hover:text-[#274E37] flex items-center gap-1">
                        View Details &rarr;
                      </span>
                      <div className="w-7 h-7 rounded-full border border-[#D5CFBF] flex items-center justify-center text-[#181E1A] group-hover:border-[#274E37] group-hover:bg-[#274E37] group-hover:text-white transition-all">
                        <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Load More Products Button matching sketch */}
            {visibleCount < filteredProducts.length && (
              <div className="text-center mt-10">
                <button
                  type="button"
                  onClick={() => setVisibleCount((prev) => prev + 6)}
                  className="inline-flex items-center gap-1.5 bg-white hover:bg-[#F2EFEA] text-[#181E1A] border border-[#D5CFBF] text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full shadow-2xs transition-all hover:border-[#274E37]"
                >
                  <span>Load More Products</span>
                  <ChevronDown className="w-4 h-4 text-[#555E52]" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* ═══════════════════════════════════════════════
            FEATURED PRODUCT DETAIL AREA
        ═══════════════════════════════════════════════ */}
        <div
          ref={detailSectionRef}
          className="bg-[#EDEAE1] border border-[#DCD6C7] rounded-3xl p-6 sm:p-10 mt-16 shadow-2xs"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Big Product Image & Thumbnails */}
            <div className="lg:col-span-5 flex flex-col items-center">
              {/* Large Main Image Display */}
              <div className="relative w-full aspect-[4/3] bg-white rounded-2xl p-6 border border-[#DDD7C9] shadow-xs flex items-center justify-center overflow-hidden">
                <Image
                  src={currentDisplayImage}
                  alt={activeTitle}
                  fill
                  unoptimized={currentDisplayImage.endsWith(".svg")}
                  className="object-contain p-4 transition-all duration-300"
                />
              </div>

              {/* Thumbnails below main image */}
              {currentThumbnails.length > 1 && (
                <div className="flex items-center gap-3 mt-4 w-full justify-start overflow-x-auto pb-1">
                  {currentThumbnails.map((thumbUrl, idx) => (
                    <button
                      key={thumbUrl + idx}
                      type="button"
                      onClick={() => setActiveThumbIndex(idx)}
                      className={`relative w-20 h-16 sm:w-24 sm:h-20 bg-white rounded-xl overflow-hidden border-2 cursor-pointer transition-all flex-shrink-0 ${
                        activeThumbIndex === idx
                          ? "border-[#274E37] ring-1 ring-[#274E37]"
                          : "border-transparent hover:border-[#C5BDAA]"
                      }`}
                    >
                      <Image
                        src={thumbUrl}
                        alt={`${activeTitle} thumbnail ${idx + 1}`}
                        fill
                        unoptimized={thumbUrl.endsWith(".svg")}
                        className="object-cover p-1"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right Column: Title, Description, Technical Specs Table, and Action Buttons */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                {/* Category tag with dash indicator */}
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="w-4 h-[1.5px] bg-[#445E3D]" />
                  <span className="text-xs font-bold tracking-[0.18em] uppercase text-[#445E3D]">
                    {selectedProduct.categoryName}
                  </span>
                </div>

                {/* Main Product Title */}
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#181E1A] tracking-tight mb-3">
                  {selectedProduct.name}
                </h3>

                {/* Main Description (displayed before selectable varieties) */}
                <p className="text-xs sm:text-sm text-[#505A52] leading-relaxed mb-5">
                  {selectedProduct.description}
                </p>

                {/* Selectable Varieties (for Biomass Pellets & Biomass Briquettes) */}
                {hasVarieties && selectedProduct.varieties && (
                  <div className="mb-6 bg-white/80 border border-[#D5CFBF] rounded-2xl p-4 sm:p-5 shadow-2xs">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#3D5B3A] flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#274E37]" />
                        Select Variety ({selectedProduct.varieties.length} Available)
                      </span>
                      <span className="text-[11px] text-[#717A6F] hidden sm:inline">
                        Click to view details & specifications
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 mb-4">
                      {selectedProduct.varieties.map((variety, vIdx) => {
                        const isSelected = selectedVarietyIndex === vIdx;
                        return (
                          <button
                            key={variety.id || variety.name}
                            type="button"
                            onClick={() => {
                              setSelectedVarietyIndex(vIdx);
                              setActiveThumbIndex(0);
                            }}
                            className={`text-left p-3 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                              isSelected
                                ? "bg-[#274E37] text-white border-[#274E37] shadow-sm ring-2 ring-[#274E37]/15"
                                : "bg-white hover:bg-[#FAF8F5] text-[#181E1A] border-[#D5CFBF] hover:border-[#274E37]"
                            }`}
                          >
                            <div className="flex items-start justify-between gap-1.5">
                              <span className="text-xs sm:text-[13px] font-bold leading-snug">
                                {variety.name}
                              </span>
                              <span
                                className={`w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] mt-0.5 ${
                                  isSelected
                                    ? "bg-white text-[#274E37] font-bold"
                                    : "border border-[#C8C2B3] text-transparent"
                                }`}
                              >
                                ✓
                              </span>
                            </div>
                            {variety.specs && variety.specs.length > 0 && (
                              <span
                                className={`text-[11px] mt-2 font-medium ${
                                  isSelected ? "text-[#CDE3D2]" : "text-[#6C756B]"
                                }`}
                              >
                                GCV: {variety.specs.find((s) => s.label === "GCV")?.value}
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Active Variety Information */}
                    {activeVariety && (
                      <div className="border-t border-[#E8E3D7] pt-3.5 mt-1">
                        <div className="flex items-center gap-2 mb-1.5">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-[#274E37] bg-[#E2EDE4] px-2 py-0.5 rounded-md">
                            Selected Variety
                          </span>
                          <h4 className="text-sm sm:text-base font-bold text-[#181E1A]">
                            {activeVariety.name}
                          </h4>
                        </div>
                        <p className="text-xs sm:text-[13px] text-[#556054] leading-relaxed">
                          {activeVariety.description}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Technical Specification Table (only displayed when specifications are supplied) */}
                {activeSpecs && activeSpecs.length > 0 && (
                  <div className="bg-white rounded-xl border border-[#D8D2C2] overflow-x-auto shadow-2xs mb-6">
                    <table className="w-full text-left border-collapse min-w-[280px]">
                      <tbody>
                        {activeSpecs.map((spec, sIdx) => (
                          <tr
                            key={spec.label + sIdx}
                            className={
                              sIdx !== activeSpecs.length - 1
                                ? "border-b border-[#EBE6DB]"
                                : ""
                            }
                          >
                            <td className="w-2/5 py-2.5 px-4 text-xs sm:text-sm font-semibold text-[#505A52] bg-[#FAF8F5] whitespace-nowrap">
                              {spec.label}
                            </td>
                            <td className="py-2.5 px-4 text-xs sm:text-sm font-medium text-[#181E1A] break-words">
                              {spec.value}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2 w-full">
                <Link
                  href={`/contact?product=${encodeURIComponent(activeTitle)}`}
                  className="bg-[#274E37] hover:bg-[#1E3E2B] text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-full shadow-xs transition-all flex items-center justify-center gap-2 text-center"
                >
                  <span>Enquire About This Product</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={getWhatsAppUrl(activeTitle)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-transparent hover:bg-white/80 text-[#181E1A] border border-[#BDB5A4] text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-full transition-all flex items-center justify-center gap-2 shadow-2xs text-center"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Discuss on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
