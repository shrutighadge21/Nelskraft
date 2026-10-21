import Link from "next/link";
import { Phone, Mail, MapPin, ChevronRight } from "lucide-react";
import Logo from "./Logo";
import { COMPANY_DETAILS, PRODUCT_CATEGORIES } from "@/data/catalogue";

export default function Footer() {
  const currentYear = 2026;

  const QUICK_LINKS = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Product", href: "/products" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <footer className="bg-[#0B130E] text-[#D8E2DC] border-t border-[#1C2C24]">
      {/* Main Footer Body with 4 Aligned Columns and Thin Understated Vertical Separators */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-0">
          
          {/* ═══════ COLUMN 1 — COMPANY ═══════ */}
          <div className="lg:col-span-4 lg:pr-10 lg:border-r lg:border-white/10">
            <div className="space-y-4">
              {/* Existing Official Logo */}
              <Logo variant="light" />

              {/* Tagline in Subtle Brand Green */}
              <div className="pt-1">
                <p className="text-xs font-bold tracking-[0.16em] uppercase text-[#78c454]">
                  Building Durability. Enabling Sustainability.
                </p>
              </div>

              {/* Concise Company Description */}
              <p className="text-sm text-[#B4C2BA] leading-relaxed max-w-sm pt-1">
                Supplying high-performance refractory products, sustainable biomass
                fuels, and verified mineral materials engineered for severe
                high-temperature industrial operations across India.
              </p>
            </div>
          </div>

          {/* ═══════ COLUMN 2 — QUICK LINKS ═══════ */}
          <div className="lg:col-span-2 lg:px-8 lg:border-r lg:border-white/10">
            <h3 className="text-sm font-bold tracking-[0.18em] uppercase text-white mb-6 flex items-center gap-2">
              <span className="w-2.5 h-[2px] bg-[#54a937]" />
              <span>QUICK LINKS</span>
            </h3>

            <ul className="space-y-3.5 text-sm text-[#B4C2BA]">
              {QUICK_LINKS.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#54a937] transition-transform duration-200 group-hover:translate-x-1" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ═══════ COLUMN 3 — PRODUCTS ═══════ */}
          <div className="lg:col-span-3 lg:px-8 lg:border-r lg:border-white/10">
            <h3 className="text-sm font-bold tracking-[0.18em] uppercase text-white mb-6 flex items-center gap-2">
              <span className="w-2.5 h-[2px] bg-[#54a937]" />
              <span>PRODUCTS</span>
            </h3>

            <ul className="space-y-3.5 text-sm text-[#B4C2BA]">
              {PRODUCT_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/products?category=${cat.id}`}
                    className="group flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#54a937] transition-transform duration-200 group-hover:translate-x-1" />
                    <span>{cat.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/products"
                  className="group flex items-center gap-2 text-[#78c454] hover:text-white font-medium transition-colors pt-2"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#54a937] transition-transform duration-200 group-hover:translate-x-1" />
                  <span>Explore Full Catalogue</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* ═══════ COLUMN 4 — GET IN TOUCH ═══════ */}
          <div className="lg:col-span-3 lg:pl-8">
            <h3 className="text-sm font-bold tracking-[0.18em] uppercase text-white mb-6 flex items-center gap-2">
              <span className="w-2.5 h-[2px] bg-[#54a937]" />
              <span>GET IN TOUCH</span>
            </h3>

            <ul className="space-y-4 text-sm text-[#B4C2BA]">
              {/* Phone */}
              <li>
                <a
                  href={`tel:${COMPANY_DETAILS.phone}`}
                  className="flex items-start gap-3 group hover:text-white transition-all duration-200 active:scale-[0.99]"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#54a937] group-hover:bg-[#2d6b1f] group-hover:text-white group-hover:scale-105 transition-all duration-200 flex-shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs uppercase font-bold tracking-wider text-[#8EA096] block mb-0.5 group-hover:text-[#78c454] transition-colors">
                      Phone Number
                    </span>
                    <span className="text-white font-medium text-sm sm:text-base group-hover:text-[#78c454] transition-colors">
                      {COMPANY_DETAILS.phoneDisplay}
                    </span>
                  </div>
                </a>
              </li>

              {/* Email */}
              <li>
                <a
                  href={`mailto:${COMPANY_DETAILS.email}`}
                  className="flex items-start gap-3 group hover:text-white transition-all duration-200 active:scale-[0.99]"
                >
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#54a937] group-hover:bg-[#2d6b1f] group-hover:text-white group-hover:scale-105 transition-all duration-200 flex-shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-xs uppercase font-bold tracking-wider text-[#8EA096] block mb-0.5 group-hover:text-[#78c454] transition-colors">
                      Email Address
                    </span>
                    <span className="text-white font-medium text-sm sm:text-base group-hover:text-[#78c454] transition-colors break-all">
                      {COMPANY_DETAILS.email}
                    </span>
                  </div>
                </a>
              </li>

              {/* Verified Address */}
              <li className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#54a937] flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="text-xs uppercase font-bold tracking-wider text-[#8EA096] block mb-0.5">
                    Head Office
                  </span>
                  <p className="leading-relaxed text-[#B4C2BA] text-sm">
                    {COMPANY_DETAILS.address.full}
                  </p>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ═══════ SEPARATE SLIM BOTTOM STRIP ═══════ */}
      <div className="bg-[#060B08] border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#8EA096]">
          {/* Copyright notice */}
          <div>
            © {currentYear} Nelskraft Refractory Pvt. Ltd. All rights reserved.
          </div>

          {/* Developer credit */}
          <div className="text-xs sm:text-sm text-center sm:text-right">
            Designed and Developed by{" "}
            <a
              href="https://qirotec.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B4C2BA] hover:text-white transition-colors font-medium"
            >
              Qiro Tech Innovation Pvt. Ltd.
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
