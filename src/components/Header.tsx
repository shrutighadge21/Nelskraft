"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X, Phone, Mail } from "lucide-react";
import Logo from "./Logo";
import { COMPANY_DETAILS, getWhatsAppUrl } from "@/data/catalogue";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3"
            : "bg-white border-b border-gray-100 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Logo />

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-8 lg:space-x-10" aria-label="Main Navigation">
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative text-sm font-medium transition-colors duration-200 py-1 group/nav focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#54a937] rounded ${
                      isActive
                        ? "text-[#1a1f1c] font-semibold"
                        : "text-[#4b5563] hover:text-[#2d6b1f]"
                    }`}
                  >
                    <span>{link.name}</span>
                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-[#54a937] rounded-full transition-all duration-200 ${
                        isActive
                          ? "w-full"
                          : "w-0 group-hover/nav:w-full bg-[#54a937]/70"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Enquire Now Button with Subtle Lift & Soft Shadow */}
            <div className="hidden md:flex items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#2d6b1f] hover:bg-[#235518] text-white px-5 py-2.5 rounded-full text-xs lg:text-sm font-semibold tracking-wide shadow-xs hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 active:translate-y-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2d6b1f]"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex items-center md:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-700 hover:text-[#000d15] focus:outline-none"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden bg-black/40 backdrop-blur-sm animate-fadeIn">
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-gray-100">
                <Logo />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-gray-500 hover:text-black"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="mt-6 flex flex-col space-y-4">
                {NAV_LINKS.map((link) => {
                  const isActive =
                    link.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(link.href);

                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`text-base py-2 px-3 rounded-lg font-medium transition-colors ${
                        isActive
                          ? "bg-[#54a937]/10 text-[#54a937] font-semibold"
                          : "text-gray-800 hover:bg-gray-50"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Mobile Contact & CTA */}
            <div className="pt-6 border-t border-gray-100 space-y-4">
              <div className="text-xs text-gray-600 space-y-2">
                <a
                  href={`tel:${COMPANY_DETAILS.phone}`}
                  className="flex items-center gap-2 text-gray-700 hover:text-[#54a937]"
                >
                  <Phone className="w-4 h-4 text-[#54a937]" />
                  <span>{COMPANY_DETAILS.phoneDisplay}</span>
                </a>
                <a
                  href={`mailto:${COMPANY_DETAILS.email}`}
                  className="flex items-center gap-2 text-gray-700 hover:text-[#54a937]"
                >
                  <Mail className="w-4 h-4 text-[#54a937]" />
                  <span>{COMPANY_DETAILS.email}</span>
                </a>
              </div>

              <div className="flex flex-col gap-2 pt-2">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#54a937] hover:bg-[#46912c] text-white py-3 rounded-full text-sm font-semibold tracking-wide shadow transition-colors"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 bg-emerald-50 rounded-full transition-colors"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
