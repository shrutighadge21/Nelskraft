"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X, Phone, Mail } from "lucide-react";
import Logo from "./Logo";
import { COMPANY_DETAILS, getWhatsAppUrl } from "@/data/catalogue";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Product", href: "/products" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact Us", href: "/contact" },
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
            ? "bg-[#F7F5EE]/95 backdrop-blur-md shadow-xs border-b border-[#E5E0D5] py-3.5 sm:py-4"
            : "bg-[#F7F5EE] border-b border-[#E5E0D5] py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between">
            {/* Logo (Official Nelskraft Brand) */}
            <div className="flex-shrink-0 z-10">
              <Logo />
            </div>

            {/* Desktop Navigation Links - Centered Horizontally */}
            <nav
              className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2 space-x-7 lg:space-x-9"
              aria-label="Main Navigation"
            >
              {NAV_LINKS.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(link.href);

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative text-[16px] transition-colors duration-200 py-1.5 group/nav focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#486341] rounded ${
                      isActive
                        ? "text-[#1C261B] font-bold"
                        : "text-[#3A4538] font-medium hover:text-[#1C261B]"
                    }`}
                  >
                    <span>{link.name}</span>
                    <span
                      className={`absolute -bottom-1 left-0 h-[2.5px] bg-[#3B5436] rounded-full transition-all duration-200 ${
                        isActive
                          ? "w-full"
                          : "w-0 group-hover/nav:w-full bg-[#3B5436]/70"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Enquire Now Button on Right */}
            <div className="hidden md:flex items-center z-10 -mr-1 sm:-mr-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#445E3D] hover:bg-[#354B2F] text-white px-5 py-2.5 rounded-full text-xs lg:text-[13px] font-semibold tracking-wide shadow-xs hover:shadow-sm transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 active:translate-y-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#445E3D]"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="flex items-center md:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#1C261B] hover:text-[#445E3D] focus:outline-none"
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
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#F7F5EE] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#E5E0D5]">
                <Logo />
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-gray-600 hover:text-black"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Items */}
              <nav className="mt-6 flex flex-col space-y-3">
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
                      className={`text-base py-2.5 px-3 rounded-lg font-medium transition-colors ${
                        isActive
                          ? "bg-[#445E3D]/10 text-[#445E3D] font-bold"
                          : "text-[#2A3628] hover:bg-black/5"
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </nav>
            </div>

            {/* Mobile Contact & CTA */}
            <div className="pt-6 border-t border-[#E5E0D5] space-y-4">
              <div className="text-xs text-[#4A5547] space-y-2">
                <a
                  href={`tel:${COMPANY_DETAILS.phone}`}
                  className="flex items-center gap-2 hover:text-[#445E3D]"
                >
                  <Phone className="w-4 h-4 text-[#445E3D]" />
                  <span>{COMPANY_DETAILS.phoneDisplay}</span>
                </a>
                <a
                  href={`mailto:${COMPANY_DETAILS.email}`}
                  className="flex items-center gap-2 hover:text-[#445E3D]"
                >
                  <Mail className="w-4 h-4 text-[#445E3D]" />
                  <span>{COMPANY_DETAILS.email}</span>
                </a>
              </div>

              <div className="flex flex-col gap-2 pt-2">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#445E3D] hover:bg-[#354B2F] text-white py-3 rounded-full text-sm font-semibold tracking-wide shadow transition-colors"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 text-xs font-semibold text-[#2D4528] hover:text-[#21351E] bg-[#445E3D]/10 rounded-full transition-colors"
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
