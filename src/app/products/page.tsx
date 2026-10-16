import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product | Nelskraft Refractory Pvt. Ltd.",
  description: "Products of Nelskraft Refractory Pvt. Ltd.",
};

export default function ProductPage() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center bg-[#FAF8F5] text-[#1B281A] px-4 py-20">
      <div className="max-w-xl text-center">
        <h1 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Product
        </h1>
        <p className="text-sm sm:text-base text-[#555E50]">
          This page is currently being prepared and will be designed soon.
        </p>
      </div>
    </main>
  );
}
