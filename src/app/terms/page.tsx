import type { Metadata } from "next";
import { COMPANY_DETAILS } from "@/data/catalogue";

export const metadata: Metadata = {
  title: "Terms & Conditions | Nelskraft Refractory Pvt. Ltd.",
  description: "Terms and conditions of commercial engagements with Nelskraft Refractory Pvt. Ltd.",
};

export default function TermsPage() {
  return (
    <div className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-[#000d15]">
      <h1 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight mb-6">Terms & Conditions</h1>
      <p className="text-xs text-gray-500 mb-8">Effective Date: October 2024</p>

      <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
        <section>
          <h2 className="font-bold text-lg text-black mb-2">1. Scope of Operations</h2>
          <p>
            {COMPANY_DETAILS.name} (CIN: {COMPANY_DETAILS.cin}, GSTIN: {COMPANY_DETAILS.gstin}) supplies refractory materials, biomass fuels, and industrial mineral products according to agreed purchase orders, technical specifications, and laboratory test certificates.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-lg text-black mb-2">2. Product Specifications & Customization</h2>
          <p>
            Chemical specifications (Al₂O₃, SiO₂, Fe₂O₃, GCV values, and sieve analyses) provided in our catalogues represent typical standard values. Custom chemical percentages and particle size ranges may be customized according to formal customer purchase orders.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-lg text-black mb-2">3. Governing Law</h2>
          <p>
            All business transactions, delivery arrangements, and commercial disputes are subject to the jurisdiction of courts in Pune, Maharashtra, India.
          </p>
        </section>
      </div>
    </div>
  );
}
