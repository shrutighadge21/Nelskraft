import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Search,
  Layers,
  Truck,
} from "lucide-react";
import { COMPANY_DETAILS } from "@/data/catalogue";
import EnquiryCtaSection from "@/components/home/EnquiryCtaSection";

export const metadata: Metadata = {
  title: "About Us | Nelskraft Refractory Pvt. Ltd.",
  description:
    "Learn about Nelskraft Refractory Pvt. Ltd. — Built on Materials, Driven by Reliability. Discover our refractory solutions, biomass fuels, and industrial minerals.",
};

const OFFERINGS = [
  {
    id: "refractory",
    title: "Refractory Materials",
    description:
      "High-alumina bricks, mortars, and castables engineered for extreme thermal environments up to 1700°C.",
    image: "/images/cat-refractory.jpg",
    link: "/products#refractory-products",
  },
  {
    id: "biomass",
    title: "Biomass Fuels",
    description:
      "Clean-burning biomass pellets and de-oiled cashew shell cake delivering high calorific combustion efficiency.",
    image: "/images/cat-biomass.jpg",
    link: "/products#biomass-fuels",
  },
  {
    id: "minerals",
    title: "Industrial Minerals",
    description:
      "High-plasticity ball clay and graded silica sand with strict chemical consistency for ceramics and metallurgy.",
    image: "/images/cat-minerals.jpg",
    link: "/products#mineral-materials",
  },
];

const APPROACH_STAGES = [
  {
    step: "01",
    title: "Understand Requirements",
    description:
      "Evaluating operating temperatures, thermal cycling, and chemical exposure conditions of your plant.",
    icon: Search,
  },
  {
    step: "02",
    title: "Recommend Suitable Materials",
    description:
      "Selecting precise Al₂O₃ percentages, grain distributions, or calorific fuel specifications.",
    icon: Layers,
  },
  {
    step: "03",
    title: "Support Your Supply Needs",
    description:
      "Ensuring dependable batch dispatches, quality certificates, and proactive logistical coordination.",
    icon: Truck,
  },
];

const APPLICATIONS = [
  {
    title: "Steel & Metallurgy",
    subtitle: "Furnace linings, ladles & tundish setups",
    image: "/images/app-furnace.jpg",
    link: "/products#refractory-products",
  },
  {
    title: "Power & Steam Boilers",
    subtitle: "Boiler beds, bed materials & biomass fuel",
    image: "/images/app-boiler.jpg",
    link: "/products#biomass-fuels",
  },
  {
    title: "Ceramics & Glass Kilns",
    subtitle: "Kiln furniture, ball clay & refractory blocks",
    image: "/images/app-ceramic.jpg",
    link: "/products#mineral-materials",
  },
  {
    title: "Foundries & Metal Casting",
    subtitle: "Crucible linings, ramming mass & silica sand",
    image: "/images/app-industrial.jpg",
    link: "/products#refractory-products",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-white text-[#1c242c] overflow-x-hidden font-sans">
      {/* ========================================================= */}
      {/* SECTION 2: DARK INDUSTRIAL HERO                           */}
      {/* ========================================================= */}
      <section className="relative min-h-[90vh] lg:min-h-[92vh] bg-[#121c17] text-white flex items-center overflow-hidden">
        {/* Right-Side Industrial Photograph with Left Gradient Blend */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-3/5 z-0">
          <Image
            src="/images/hero-industrial.jpg"
            alt="Nelskraft industrial refractory plant and thermal facility"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
            className="object-cover object-center opacity-80 lg:opacity-90"
          />
          {/* Subtle horizontal gradient to blend with left text area */}
          <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-[#121c17] via-[#121c17]/45 to-transparent" />
        </div>

        {/* Content Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 relative z-10 w-full">
          <div className="max-w-2xl lg:max-w-3xl">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.22em] uppercase text-[#78a85a] mb-5">
              <span className="w-5 h-[2px] bg-[#78a85a]" />
              <span>ABOUT US</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-sans text-2xl sm:text-4xl md:text-[2.75rem] lg:text-[3.1rem] font-bold tracking-tight text-white leading-[1.16] mb-5 sm:mb-6">
              Building Durability, <br className="hidden sm:inline" />
              Enabling <span className="text-[#54a937]">Sustainability.</span>
            </h1>

            {/* Short Company Introduction */}
            <p className="text-base sm:text-lg text-gray-300 font-normal leading-relaxed max-w-xl">
              Nelskraft Refractory Pvt. Ltd. supplies high-performance refractory
              materials, clean biomass fuels, and specialized industrial minerals
              engineered to power, protect, and sustain heavy industry.
            </p>
          </div>
        </div>

        {/* Narrow Vertical Numbered Navigation Detail (Right Edge) */}
        <div className="hidden xl:flex absolute right-8 top-1/2 -translate-y-1/2 z-20 flex-col items-center gap-6 text-[11px] font-mono tracking-widest text-white/50 select-none">
          <div className="w-[1px] h-12 bg-white/20" />
          <span className="text-[#54a937] font-bold">01</span>
          <span>02</span>
          <span>03</span>
          <span>04</span>
          <div className="w-[1px] h-12 bg-white/20" />
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: WHO WE ARE (Asymmetric Layout, Overlapping)     */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-28 bg-[#FAF9F6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Column: Numeral, Heading & Narrative */}
            <div className="lg:col-span-6 relative z-10">
              {/* Large Faint "01" Numeral */}
              <span className="text-7xl sm:text-8xl font-sans font-black text-gray-200/80 select-none -mb-8 sm:-mb-10 block pointer-events-none">
                01
              </span>

              {/* Eyebrow Label */}
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#54a937] mb-3">
                <span className="w-4 h-[2px] bg-[#54a937]" />
                <span>WHO WE ARE</span>
              </div>

              {/* Heading */}
              <h2 className="font-sans text-2xl sm:text-3xl lg:text-[2.65rem] font-bold tracking-tight text-[#000d15] leading-[1.18] mb-6">
                Supplying Materials for a{" "}
                <span className="text-[#54a937]">Stronger Tomorrow.</span>
              </h2>

              {/* Company Introduction */}
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">
                Nelskraft Refractory Pvt. Ltd. is a customer-centric industrial material
                supplier based in Pune, Maharashtra. We provide essential thermal and
                mineral solutions across refractory manufacturing, clean boiler combustion,
                and ceramic casting.
              </p>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
                With a focus on technical integrity, strict batch sampling, and dependable
                delivery schedules, we help industrial operators protect their thermal
                assets, reduce maintenance downtime, and transition toward sustainable energy.
              </p>

              {/* Rounded Green Action Button */}
              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2.5 bg-[#54a937] hover:bg-[#438b29] text-white px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Column: Two Overlapping Organically Cropped Images */}
            <div className="lg:col-span-6 relative mt-6 lg:mt-0">
              {/* Decorative Green Curved Accent Behind Images */}
              <div className="absolute -top-6 -right-6 w-72 h-72 rounded-full border-2 border-[#54a937]/30 pointer-events-none" />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-full bg-[#54a937]/5 pointer-events-none" />

              <div className="relative w-full aspect-[4/3.4] sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border border-gray-200/80 bg-white">
                <Image
                  src="/images/about-refractory-new.jpg"
                  alt="Industrial refractory bricks, curved kiln blocks, and materials stacked in manufacturing facility"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center"
                />

                {/* Floating Info Label Top Right */}
                <div className="absolute top-4 right-4 z-10 bg-white/95 backdrop-blur-md border border-gray-200/90 rounded-xl px-3.5 py-2 shadow-lg flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#54a937] animate-pulse" />
                  <span className="text-[11px] font-bold text-[#000d15] tracking-wide">
                    Al₂O₃ Up to 70%
                  </span>
                </div>
              </div>

              {/* Secondary Overlapping Image (Bottom-Left Offset) */}
              <div className="relative -mt-16 sm:-mt-24 ml-6 sm:ml-10 w-2/3 sm:w-3/5 aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white z-20">
                <Image
                  src="/images/cat-minerals.jpg"
                  alt="Industrial ball clay and mineral materials"
                  fill
                  sizes="(max-width: 1024px) 60vw, 25vw"
                  className="object-cover object-center"
                />

                {/* Floating Info Label Bottom Left */}
                <div className="absolute bottom-3 left-3 z-10 bg-[#000d15]/90 backdrop-blur-md border border-white/20 rounded-lg px-3 py-1.5 shadow-md flex items-center gap-1.5 text-white">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#54a937]" />
                  <span className="text-[10px] font-semibold tracking-wide">
                    Multi-Disciplinary Advisory
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: WHAT WE BRING TO INDUSTRY (Angled Panels)      */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-28 bg-[#121c17] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Row */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              {/* Large Subtle "02" Numeral */}
              <span className="text-7xl sm:text-8xl font-sans font-black text-white/10 select-none block -mb-8 pointer-events-none">
                02
              </span>
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#78a85a] mb-3">
                <span className="w-4 h-[2px] bg-[#78a85a]" />
                <span>OUR OFFERING</span>
              </div>
              <h2 className="font-sans text-2xl sm:text-3xl lg:text-[2.65rem] font-bold tracking-tight text-white leading-[1.18]">
                What We Bring to Industry.
              </h2>
              <p className="text-sm sm:text-base text-gray-300 mt-3 leading-relaxed">
                Engineered material solutions categorized across high-temperature refractory
                linings, clean bio-energy fuels, and refined industrial minerals.
              </p>
            </div>

            {/* Outlined Explore Products Button */}
            <div className="flex-shrink-0">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white text-white hover:bg-white/10 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider transition-all"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Three Angled Overlapping Offering Panels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {OFFERINGS.map((item, index) => (
              <Link
                key={item.id}
                href={item.link}
                className="group relative rounded-2xl overflow-hidden border border-white/15 bg-[#1b2720] shadow-2xl aspect-[3/4] sm:aspect-[4/5] flex flex-col justify-end p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#54a937]/80"
              >
                {/* Background Material Photograph */}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0e1713] via-[#0e1713]/60 to-transparent" />

                {/* Content Overlay */}
                <div className="relative z-10 flex flex-col justify-end">
                  <div className="text-[11px] font-mono tracking-widest text-[#9bd71d] uppercase font-bold mb-1">
                    Category 0{index + 1}
                  </div>
                  <h3 className="font-sans text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-[#9bd71d] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed line-clamp-3 mb-4">
                    {item.description}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-white/15">
                    <span className="text-xs font-semibold text-gray-300 group-hover:text-white">
                      View Specifications
                    </span>
                    <div className="w-9 h-9 rounded-full bg-white/15 text-white flex items-center justify-center backdrop-blur-sm group-hover:bg-[#54a937] group-hover:text-white transition-all">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5: OUR APPROACH (Curved Process Line)             */}
      {/* ========================================================= */}
      <section className="py-20 sm:py-28 bg-[#FAF9F6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            {/* Left Content Area */}
            <div className="lg:col-span-5">
              {/* Large Pale "03" Numeral */}
              <span className="text-7xl sm:text-8xl font-sans font-black text-gray-200/80 select-none block -mb-8 pointer-events-none">
                03
              </span>
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#54a937] mb-3">
                <span className="w-4 h-[2px] bg-[#54a937]" />
                <span>OUR APPROACH</span>
              </div>
              <h2 className="font-sans text-2xl sm:text-3xl lg:text-[2.65rem] font-bold tracking-tight text-[#000d15] leading-[1.18] mb-4">
                Understanding Your Material Needs.
              </h2>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
                We believe technical accuracy must precede material dispatch. Our approach
                focuses on evaluating specific thermal loads, verifying chemical composition,
                and aligning logistics to your plant&apos;s operational schedule.
              </p>
            </div>

            {/* Right Process Stages Connected by Curved Line */}
            <div className="lg:col-span-7 relative">
              {/* Decorative Subtle Line */}
              <div className="hidden sm:block absolute top-12 left-12 right-12 h-[2px] bg-gradient-to-r from-[#54a937]/30 via-[#54a937] to-[#54a937]/30 z-0" />

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative z-10">
                {APPROACH_STAGES.map((stage) => {
                  const Icon = stage.icon;
                  return (
                    <div
                      key={stage.step}
                      className="flex flex-col items-start sm:items-center text-left sm:text-center group"
                    >
                      {/* Circular Icon Marker */}
                      <div className="w-16 h-16 rounded-full bg-white border-2 border-[#54a937] text-[#54a937] shadow-md flex items-center justify-center mb-5 group-hover:bg-[#54a937] group-hover:text-white transition-all duration-300">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-[11px] font-mono font-bold text-[#54a937] tracking-widest uppercase mb-1">
                        Stage {stage.step}
                      </span>
                      <h3 className="font-sans text-base sm:text-lg font-bold text-[#000d15] mb-2 leading-snug">
                        {stage.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        {stage.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 6: INDUSTRIAL APPLICATIONS (Cinematic Split)       */}
      {/* ========================================================= */}
      <section className="bg-[#121c17] text-white overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">
          {/* Left Half: Manufacturing Photograph */}
          <div className="lg:col-span-5 relative min-h-[350px] lg:min-h-full">
            <Image
              src="/images/app-furnace.jpg"
              alt="Industrial furnace and high-temperature manufacturing facility"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent to-[#121c17]" />
          </div>

          {/* Right Half: Content Area & Verified Application List */}
          <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
            {/* Large Faint "04" Numeral */}
            <span className="text-7xl sm:text-8xl font-sans font-black text-white/10 select-none block -mb-8 pointer-events-none">
              04
            </span>
            <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#78a85a] mb-3">
              <span className="w-4 h-[2px] bg-[#78a85a]" />
              <span>INDUSTRIAL APPLICATIONS</span>
            </div>
            <h2 className="font-sans text-2xl sm:text-3xl lg:text-[2.65rem] font-bold tracking-tight text-white mb-4 leading-[1.18]">
              Materials That Keep Industries Moving.
            </h2>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl mb-6">
              Our refractory bricks, clean biomass fuels, and graded minerals power critical
              thermal operations across core industrial sectors, protecting assets and
              optimizing energy throughput.
            </p>

            {/* Vertical List of Verified Industrial Applications */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/15">
              {APPLICATIONS.map((app) => (
                <Link
                  key={app.title}
                  href={app.link}
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#54a937] hover:bg-white/10 transition-all group"
                >
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-black/50">
                    <Image
                      src={app.image}
                      alt={app.title}
                      fill
                      sizes="48px"
                      className="object-cover object-center group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="text-sm font-bold text-white group-hover:text-[#9bd71d] transition-colors truncate">
                      {app.title}
                    </h4>
                    <p className="text-xs text-gray-400 truncate">
                      {app.subtitle}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 7: CLOSING ENQUIRY CTA                           */}
      {/* ========================================================= */}
      <EnquiryCtaSection />
    </div>
  );
}
