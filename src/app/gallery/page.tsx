import type { Metadata } from "next";
import GalleryClient from "@/components/gallery/GalleryClient";

export const metadata: Metadata = {
  title: "Gallery | Nelskraft Refractory Pvt. Ltd.",
  description:
    "Explore our industrial photo gallery showcasing high-performance refractory products, biomass fuels, industrial minerals, and advanced thermal applications.",
  keywords: [
    "Nelskraft Gallery",
    "Refractory Products Photos",
    "Biomass Pellets",
    "Industrial Minerals",
    "Furnace Construction",
    "Boiler Bed Material",
    "Pune Refractory"
  ],
  openGraph: {
    title: "Gallery | Nelskraft Refractory Pvt. Ltd.",
    description:
      "Explore genuine industrial photographs of Nelskraft's refractory products, biomass fuels, minerals, and high-temperature applications.",
    url: "https://www.nelskraft.com/gallery",
  },
};

export default function GalleryPage() {
  return <GalleryClient />;
}
