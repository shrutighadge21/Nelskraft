import type { Metadata } from "next";
import ProductsClient from "@/components/products/ProductsClient";

export const metadata: Metadata = {
  title: "Products & Materials | Nelskraft Refractory Pvt. Ltd.",
  description:
    "Explore Nelskraft's high-performance refractory products, biomass fuels, and industrial minerals engineered for high-temperature and heavy industrial applications.",
  keywords: [
    "Refractory Products",
    "High Alumina Brick Powder",
    "Boiler Bed Material",
    "Refractories Mortar",
    "Refractories Castable",
    "Fireclay",
    "CAT-9 Cement",
    "IS-6 Bricks",
    "IS-8 Bricks",
    "Biomass Pellets",
    "Cashew Nut Shell Cake",
    "Ball Clay",
    "Silica Sand",
    "Nelskraft Pune"
  ],
  openGraph: {
    title: "Products & Materials | Nelskraft Refractory Pvt. Ltd.",
    description:
      "High-Performance Materials for Industrial Applications: Refractory Products, Biomass Fuels, and Industrial Minerals.",
    url: "https://www.nelskraft.com/products",
  },
};

export default function ProductPage() {
  return (
    <main className="w-full">
      <ProductsClient />
    </main>
  );
}
