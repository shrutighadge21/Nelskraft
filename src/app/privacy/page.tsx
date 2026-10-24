import type { Metadata } from "next";
import { COMPANY_DETAILS } from "@/data/catalogue";

export const metadata: Metadata = {
  title: "Privacy Policy | Nelskraft Refractory Pvt. Ltd.",
  description: "Privacy policy and client data protection practices of Nelskraft Refractory Pvt. Ltd.",
};

export default function PrivacyPage() {
  return (
    <div className="py-20 max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-[#000d15]">
      <h1 className="font-sans text-3xl sm:text-4xl font-bold tracking-tight mb-6">Privacy Policy</h1>
      <p className="text-xs text-gray-500 mb-8">Effective Date: October 2024</p>

      <div className="space-y-6 text-sm text-gray-700 leading-relaxed">
        <section>
          <h2 className="font-bold text-lg text-black mb-2">1. Overview</h2>
          <p>
            {COMPANY_DETAILS.name} (&quot;Nelskraft&quot;, &quot;we&quot;, &quot;us&quot;) respects the privacy of our industrial clients, partners, and website visitors. This policy outlines how we collect, store, and utilize technical inquiries and contact information.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-lg text-black mb-2">2. Information Collection</h2>
          <p>
            We collect information provided directly through our technical RFQ forms, emails, and direct phone/WhatsApp interactions, such as company name, contact person, material specifications, and delivery logistics requirements.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-lg text-black mb-2">3. Commercial Confidentiality</h2>
          <p>
            All custom formulations, particle sizing requirements, and commercial volumes shared with Nelskraft are treated with strict industrial confidentiality.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-lg text-black mb-2">4. Contact Information</h2>
          <p>
            For privacy questions or data updates, please contact us at {COMPANY_DETAILS.email} or by post at our registered office: {COMPANY_DETAILS.address.full}
          </p>
        </section>
      </div>
    </div>
  );
}
