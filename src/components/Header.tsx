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

  // Track header scroll state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#F7F5EE]/95 backdrop-blur-md shadow-xs border-b border-[#E5E0D5] py-3.5 sm:py-4"
            : "bg-[#F7F5EE] border-b border-[#E5E0D5] py-4 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between">
            {/* Logo (Official Nelskraft Brand) */}
            <div className="flex-shrink-0 z-10">
              <Logo />
            </div>

            {/* Desktop Navigation Links - Centered Horizontally (Visible on desktop >= 1024px) */}
            <nav
              className="hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2 space-x-7 xl:space-x-9"
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

            {/* Desktop Enquire Now Button on Right (Visible on desktop >= 1024px) */}
            <div className="hidden lg:flex items-center z-10 -mr-1 sm:-mr-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#445E3D] hover:bg-[#354B2F] text-white px-5 py-2.5 rounded-full text-xs lg:text-[13px] font-semibold tracking-wide shadow-xs hover:shadow-sm transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 active:translate-y-0 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#445E3D]"
              >
                <span>Enquire Now</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Mobile / Tablet Hamburger Menu Trigger (Visible on < 1024px) */}
            <div className="flex items-center lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="p-2.5 -mr-1.5 text-[#1C261B] hover:text-[#445E3D] hover:bg-black/5 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#445E3D] cursor-pointer"
                aria-label="Open navigation menu"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-navigation-drawer"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════════════
          MOBILE / TABLET SLIDE-OVER NAVIGATION DRAWER
          - Smooth Left-to-Right slide-in when opened
          - Smooth Right-to-Left slide-out when closed
          - 300ms transition duration
          - Accessible keyboard & screen reader support
      ══════════════════════════════════════════════════════════ */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-xs transition-opacity duration-300 lg:hidden ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Sliding Panel: Anchored to LEFT */}
      <aside
        id="mobile-navigation-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
        className={`fixed inset-y-0 left-0 z-50 w-[85vw] max-w-xs sm:max-w-sm bg-[#F7F5EE] shadow-2xl flex flex-col justify-between overflow-y-auto transition-transform duration-300 ease-in-out lg:hidden ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-5 sm:p-6">
          {/* Drawer Header: Official Logo + Close Button */}
          <div className="flex items-center justify-between pb-5 border-b border-[#E5E0D5]">
            <Logo />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 -mr-1 text-[#2A3628] hover:text-black hover:bg-black/5 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#445E3D] cursor-pointer"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-6 flex flex-col space-y-1.5" aria-label="Mobile Navigation">
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
                  className={`flex items-center justify-between text-base py-3 px-3.5 rounded-xl font-medium transition-all min-h-[44px] ${
                    isActive
                      ? "bg-[#445E3D]/12 text-[#2D4528] font-bold shadow-2xs"
                      : "text-[#2A3628] hover:bg-black/5 hover:text-[#1C261B]"
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#445E3D]" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Drawer Footer: Contacts + CTA Actions */}
        <div className="p-5 sm:p-6 border-t border-[#E5E0D5] bg-[#EFECE3]/60 space-y-4">
          {/* Quick Contact Links */}
          <div className="text-xs text-[#4A5547] space-y-2.5">
            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              className="flex items-center gap-2.5 hover:text-[#445E3D] transition-colors py-1"
            >
              <div className="w-6 h-6 rounded-md bg-[#445E3D]/10 text-[#445E3D] flex items-center justify-center flex-shrink-0">
                <Phone className="w-3.5 h-3.5" />
              </div>
              <span className="font-medium">{COMPANY_DETAILS.phoneDisplay}</span>
            </a>
            <a
              href={`mailto:${COMPANY_DETAILS.email}`}
              className="flex items-center gap-2.5 hover:text-[#445E3D] transition-colors py-1"
            >
              <div className="w-6 h-6 rounded-md bg-[#445E3D]/10 text-[#445E3D] flex items-center justify-center flex-shrink-0">
                <Mail className="w-3.5 h-3.5" />
              </div>
              <span className="font-medium break-all">{COMPANY_DETAILS.email}</span>
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-2.5 pt-1">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 bg-[#445E3D] hover:bg-[#354B2F] text-white py-3.5 px-4 rounded-xl text-sm font-semibold tracking-wide shadow-sm active:scale-[0.99] transition-all min-h-[44px]"
            >
              <span>Enquire Now</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 px-4 text-xs font-semibold text-[#2D4528] hover:text-[#1E301B] bg-[#445E3D]/10 hover:bg-[#445E3D]/15 rounded-xl transition-colors min-h-[40px] flex items-center justify-center"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </aside>
    </>
  );
}
