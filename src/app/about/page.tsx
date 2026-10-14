import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Target,
  Workflow,
  BarChart3,
  CheckCircle,
} from "lucide-react";
import { COMPANY_DETAILS } from "@/data/catalogue";

export const metadata: Metadata = {
  title: "About Us | Nelskraft Refractory Pvt. Ltd.",
  description:
    "Learn about Nelskraft Refractory Pvt. Ltd., our mission, specialized advisory team, strict quality controls, and our commitment to building durability and enabling sustainability.",
};

const PILLARS = [
  {
    icon: Target,
    title: "Customer-Centric Focus",
    description:
      "Deeply understanding client technical constraints and operational demands to deliver tailored refractory and thermal solutions.",
  },
  {
    icon: Shield,
    title: "Strict Quality Control",
    description:
      "Rigorous chemical characterization, laboratory testing (XRF, thermal limits), and consistent grade standards across all supplies.",
  },
  {
    icon: Workflow,
    title: "Robust Supply Chain Network",
    description:
      "Process-oriented logistics and year-round availability ensuring seamless supply for continuous industrial plant operations.",
  },
  {
    icon: BarChart3,
    title: "Evidence-Based MIS Reports",
    description:
      "Dedicated relationship managers providing timely Management Information System reports to facilitate data-driven decision making.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white text-[#000d15]">
      {/* Page Header Banner */}
      <section className="relative py-20 md:py-28 bg-[#000d15] text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/images/hero-industrial.jpg"
            alt="Nelskraft industrial background"
            fill
            sizes="100vw"
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/60" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#9bd71d] mb-4">
              <span className="w-6 h-[2px] bg-[#9bd71d]" />
              <span>Corporate Profile</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
              About Nelskraft
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed">
              A professionally managed company dedicated to building durability
              and enabling sustainability across high-temperature industries.
            </p>
          </div>
        </div>
      </section>

      {/* Main Company Story Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Wall Image */}
            <div className="lg:col-span-6 relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
              <Image
                src="/images/about-wall.jpg"
                alt="Nelskraft Refractory corporate entrance"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            {/* Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#54a937]">
                <span className="w-6 h-[2px] bg-[#54a937]" />
                <span>Who We Are</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#000d15] leading-snug">
                Building Lasting Value Through Materials & Technical Integrity
              </h2>

              <p className="text-base text-gray-600 leading-relaxed">
                Nelskraft Refractory Pvt Ltd is a professionally managed legal
                entity focused on customer-centric objectives that involve
                understanding client needs and preferences while delivering
                exceptional service.
              </p>

              <p className="text-base text-gray-600 leading-relaxed">
                Our mission is to create value for our customers and earn
                recognition both domestically and internationally as a unique
                company with distinct qualities, products, and services.
              </p>

              <div className="pt-2 border-t border-gray-100">
                <blockquote className="border-l-4 border-[#54a937] pl-4 italic text-sm text-gray-700 font-medium">
                  “Our business plan and operations are led by a team of
                  experienced professionals in the various product areas we
                  offer.”
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Advisory Team & Multidisciplinary Expertise */}
      <section className="py-20 bg-[#fbfbfa] border-y border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#54a937] mb-3">
              <span className="w-6 h-[2px] bg-[#54a937]" />
              <span>Multi-Disciplinary Strength</span>
              <span className="w-6 h-[2px] bg-[#54a937]" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#000d15] mb-4">
              Expertise Driven Advisory Council
            </h2>
            <p className="text-base text-gray-600 leading-relaxed">
              Our multidisciplinary advisory council brings together veteran
              experts across key industrial disciplines to guarantee technical
              excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMPANY_DETAILS.advisoryFocus.map((domain, index) => (
              <div
                key={domain}
                className="bg-white p-6 rounded-2xl border border-gray-200/80 shadow-sm hover:shadow-md transition-all flex items-start gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-[#54a937]/10 text-[#54a937] flex items-center justify-center flex-shrink-0 group-hover:bg-[#54a937] group-hover:text-white transition-colors duration-200">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-gray-400 font-semibold tracking-wider uppercase">
                    Core Capability #{index + 1}
                  </span>
                  <h3 className="text-base font-bold text-[#000d15] mt-1 group-hover:text-[#54a937] transition-colors">
                    {domain}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Pillars */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-16">
            <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#54a937] mb-3">
              <span className="w-6 h-[2px] bg-[#54a937]" />
              <span>Our Operating Philosophy</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#000d15]">
              How We Create Client Advantage
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {PILLARS.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pillar.title}
                  className="p-8 rounded-2xl bg-[#fbfbfa] border border-gray-200/80 flex flex-col justify-between hover:border-[#54a937]/50 hover:shadow-lg transition-all"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[#000d15] text-[#9bd71d] flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-[#000d15] mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Corporate Identity & Compliance Bar */}
      <section className="py-14 bg-[#000d15] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="px-4">
              <p className="text-xs uppercase tracking-widest text-[#9bd71d] font-semibold mb-1">
                Corporate Entity
              </p>
              <p className="text-lg font-bold">{COMPANY_DETAILS.name}</p>
              <p className="text-xs text-gray-400 mt-1">
                Registered in Pune, Maharashtra
              </p>
            </div>

            <div className="px-4 pt-6 md:pt-0">
              <p className="text-xs uppercase tracking-widest text-[#9bd71d] font-semibold mb-1">
                Government Compliance
              </p>
              <p className="text-sm font-semibold font-mono text-gray-200">
                CIN: {COMPANY_DETAILS.cin}
              </p>
              <p className="text-sm font-semibold font-mono text-gray-200 mt-1">
                GSTIN: {COMPANY_DETAILS.gstin}
              </p>
            </div>

            <div className="px-4 pt-6 md:pt-0">
              <p className="text-xs uppercase tracking-widest text-[#9bd71d] font-semibold mb-1">
                Official Catalogue
              </p>
              <p className="text-sm text-gray-300">
                Verified specifications and product properties
              </p>
              <a
                href="/Nelskraft-Catalogue.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#9bd71d] hover:underline mt-2"
              >
                <span>View Full PDF Catalogue</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#000d15] mb-4">
            Ready to Discuss Your High-Temperature Requirements?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Contact our technical team to discuss material specifications, custom
            particle sizing, and bulk industrial shipments.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-[#54a937] hover:bg-[#46912c] text-white px-8 py-3.5 rounded-full text-sm font-semibold shadow-md hover:shadow-lg transition-all"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center border border-gray-300 hover:border-[#000d15] text-[#000d15] px-8 py-3.5 rounded-full text-sm font-semibold transition-all"
            >
              Contact Our Office
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
