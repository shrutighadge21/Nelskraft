import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import Logo from "./Logo";
import { COMPANY_DETAILS, PRODUCT_CATEGORIES } from "@/data/catalogue";

export default function Footer() {
  return (
    <footer className="bg-[#24352F] text-[#D1DCD6]">
      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-4 space-y-4 lg:border-r lg:border-white/10 lg:pr-8">
            <Logo variant="light" />
            <div className="pt-2 text-xs font-bold tracking-[0.15em] text-[#9db3a8] uppercase space-y-1">
              <p>BUILDING DURABILITY.</p>
              <p>ENABLING SUSTAINABILITY.</p>
            </div>
            <p className="text-xs text-[#D1DCD6] leading-relaxed max-w-sm pt-2">
              Supplying high-performance refractory materials, sustainable
              biomass fuels, and specialized industrial minerals with stringent
              quality control and reliable delivery.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 lg:border-r lg:border-white/10 lg:pr-4">
            <h4 className="text-sm font-bold tracking-wider text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D1DCD6]">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#78A85A] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-[#78A85A] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-[#78A85A] transition-colors"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-[#78A85A] transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Product Categories */}
          <div className="lg:col-span-3 lg:border-r lg:border-white/10 lg:pr-6">
            <h4 className="text-sm font-bold tracking-wider text-white mb-4">
              Products
            </h4>
            <ul className="space-y-2.5 text-xs text-[#D1DCD6]">
              {PRODUCT_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/products?category=${cat.id}`}
                    className="hover:text-[#78A85A] transition-colors"
                  >
                    {cat.title}
                  </Link>
                </li>
              ))}
              <li className="pt-3 text-[11px] text-[#9db3a8] border-t border-white/5 space-y-0.5">
                <div>CIN: {COMPANY_DETAILS.cin}</div>
                <div>GST: {COMPANY_DETAILS.gstin}</div>
              </li>
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold tracking-wider text-white mb-4">
              Get in Touch
            </h4>
            <ul className="space-y-3.5 text-xs text-[#D1DCD6]">
              <li>
                <a
                  href={`tel:${COMPANY_DETAILS.phone}`}
                  className="flex items-start gap-2.5 hover:text-[#78A85A] transition-colors group"
                >
                  <Phone className="w-4 h-4 text-[#78A85A] flex-shrink-0 mt-0.5" />
                  <span className="group-hover:underline text-white font-medium">
                    {COMPANY_DETAILS.phoneDisplay}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_DETAILS.email}`}
                  className="flex items-start gap-2.5 hover:text-[#78A85A] transition-colors group"
                >
                  <Mail className="w-4 h-4 text-[#78A85A] flex-shrink-0 mt-0.5" />
                  <span className="group-hover:underline text-white font-medium">
                    {COMPANY_DETAILS.email}
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#78A85A] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed text-[#D1DCD6]">
                  {COMPANY_DETAILS.address.full}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="bg-[#1B2924] border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#a2b5ab]">
          <div>
            © 2024 Nelskraft Refractory Pvt. Ltd. All rights reserved.
          </div>

          <div className="space-x-3">
            <Link
              href="/privacy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <span>|</span>
            <Link
              href="/terms"
              className="hover:text-white transition-colors"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
