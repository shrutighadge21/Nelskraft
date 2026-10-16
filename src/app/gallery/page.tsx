import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Nelskraft Refractory Pvt. Ltd.",
  description: "Gallery of Nelskraft Refractory Pvt. Ltd.",
};

export default function GalleryPage() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center bg-[#FAF8F5] text-[#1B281A] px-4 py-20">
      <div className="max-w-xl text-center">
        <h1 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight mb-4">
          Gallery
        </h1>
        <p className="text-sm sm:text-base text-[#555E50]">
          Industrial photo and facility gallery coming soon.
        </p>
      </div>
    </main>
  );
}
