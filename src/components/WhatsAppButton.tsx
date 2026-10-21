"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { getWhatsAppUrl } from "@/data/catalogue";

export default function WhatsAppButton() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 250);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <aside
      aria-label="Floating quick actions"
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-3"
    >
      {/* Scroll-to-Top Button directly above WhatsApp button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top of page"
          className="w-10 h-10 sm:w-12 sm:h-12 bg-[#181E1A] hover:bg-[#274E37] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-200/50 cursor-pointer animate-in fade-in zoom-in-75"
        >
          <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </button>
      )}

      {/* WhatsApp Floating Button */}
      <div className="flex items-center group">
        <div className="hidden md:group-hover:flex items-center mr-3 bg-white text-gray-800 text-xs font-medium py-1.5 px-3 rounded-full shadow-lg border border-gray-100 animate-fadeIn whitespace-nowrap">
          Chat with our Material Specialists
        </div>
        <a
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact Nelskraft on WhatsApp (+91 7020309001)"
          className="w-12 h-12 sm:w-14 sm:h-14 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-200 cursor-pointer"
        >
          {/* Proper, authentic WhatsApp SVG Icon */}
          <svg
            className="w-6 h-6 sm:w-8 sm:h-8 text-white fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.301-.15-1.78-.879-2.056-.98-.276-.1-.476-.15-.677.15-.2.301-.777.98-.952 1.181-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.786-1.676-2.087-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.2-.301.3-.501.101-.2.051-.376-.025-.526-.075-.15-.677-1.631-.928-2.233-.244-.586-.492-.507-.677-.516l-.577-.01c-.2 0-.527.075-.802.376s-1.053 1.028-1.053 2.508 1.078 2.91 1.229 3.111c.15.201 2.122 3.24 5.14 4.544.718.31 1.279.496 1.716.635.722.23 1.379.197 1.9.12.58-.087 1.78-.727 2.03-1.43.251-.702.251-1.304.176-1.43-.076-.126-.276-.201-.577-.351zM12.04 2C6.516 2 2.022 6.49 2.022 12.013c0 1.912.54 3.696 1.472 5.215L2 22.04l4.957-1.442a9.96 9.96 0 0 0 5.083 1.415c5.523 0 10.017-4.49 10.017-10.013C22.057 6.49 17.563 2 12.04 2zm0 18.23a8.21 8.21 0 0 1-4.186-1.144l-.3-.178-3.109.904.912-3.023-.195-.311a8.213 8.213 0 0 1-1.26-4.465c0-4.542 3.697-8.239 8.238-8.239 4.541 0 8.238 3.697 8.238 8.239 0 4.542-3.697 8.217-8.238 8.217z" />
          </svg>
        </a>
      </div>
    </aside>
  );
}
