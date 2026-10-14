"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/data/catalogue";

export default function WhatsAppButton() {
  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-40 flex items-center group">
      <div className="hidden group-hover:flex items-center mr-3 bg-white text-gray-800 text-xs font-medium py-1.5 px-3 rounded-full shadow-lg border border-gray-100 animate-fadeIn whitespace-nowrap">
        Chat with our Material Specialists
      </div>
      <a
        href={getWhatsAppUrl()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact Nelskraft on WhatsApp (+91 7020309001)"
        className="w-13 h-13 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform group-hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-200"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </aside>
  );
}
