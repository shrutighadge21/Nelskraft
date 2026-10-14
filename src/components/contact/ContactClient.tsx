"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle2,
} from "lucide-react";
import { COMPANY_DETAILS, PRODUCTS, getWhatsAppUrl } from "@/data/catalogue";

export default function ContactClient() {
  const searchParams = useSearchParams();
  const prefilledProduct = searchParams.get("product") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    product: prefilledProduct,
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppRedirect = () => {
    const text = `Hello Nelskraft Team,
My Name: ${formData.name || "Client"}
Company: ${formData.company || "N/A"}
Phone: ${formData.phone || "N/A"}
Product: ${formData.product || "General Enquiry"}
Requirements: ${formData.message || "Please share catalogue & quote."}`;

    const url = `https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Left Column: Verified Contact Details */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-[#54a937] mb-3">
              <span className="w-6 h-[2px] bg-[#54a937]" />
              <span>Direct Communication</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#000d15] mb-4">
              Get in Touch with Our Material Specialists
            </h2>
            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Whether you require tailored particle sizing for refractory mortar,
              bulk biomass pellet logistics, or high-plasticity ball clay samples,
              our advisory and operational teams are at your disposal.
            </p>
          </div>

          {/* Cards for Phone, Email, Address */}
          <div className="space-y-4">
            <a
              href={`tel:${COMPANY_DETAILS.phone}`}
              className="flex items-start gap-4 p-5 rounded-2xl bg-[#fbfbfa] border border-gray-200/80 hover:border-[#54a937] transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#54a937]/10 text-[#54a937] flex items-center justify-center flex-shrink-0 group-hover:bg-[#54a937] group-hover:text-white transition-colors">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Call Our Office
                </p>
                <p className="text-base font-bold text-[#000d15] mt-0.5 group-hover:text-[#54a937] transition-colors">
                  {COMPANY_DETAILS.phoneDisplay}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  Direct Line for Technical & Sales Enquiries
                </p>
              </div>
            </a>

            <a
              href={`mailto:${COMPANY_DETAILS.email}`}
              className="flex items-start gap-4 p-5 rounded-2xl bg-[#fbfbfa] border border-gray-200/80 hover:border-[#54a937] transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#54a937]/10 text-[#54a937] flex items-center justify-center flex-shrink-0 group-hover:bg-[#54a937] group-hover:text-white transition-colors">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Email Us
                </p>
                <p className="text-base font-bold text-[#000d15] mt-0.5 group-hover:text-[#54a937] transition-colors">
                  {COMPANY_DETAILS.email}
                </p>
                <p className="text-xs text-gray-500 mt-0.5">
                  Official Technical & Quotation Requests
                </p>
              </div>
            </a>

            <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#fbfbfa] border border-gray-200/80">
              <div className="w-12 h-12 rounded-xl bg-[#54a937]/10 text-[#54a937] flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  Registered Office (R.O.)
                </p>
                <p className="text-sm font-bold text-[#000d15] mt-0.5 leading-snug">
                  {COMPANY_DETAILS.address.full}
                </p>
              </div>
            </div>
          </div>

          {/* Quick WhatsApp Action Banner */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-800 text-white shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <MessageCircle className="w-5 h-5 text-emerald-200" />
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-200">
                  Instant Support
                </span>
              </div>
              <h3 className="text-lg font-bold mb-2">
                Prefer WhatsApp for Quick Inquiries?
              </h3>
              <p className="text-xs text-emerald-100 leading-relaxed mb-4">
                Chat directly with our relationship manager regarding material
                availability, batch certificates and delivery schedules.
              </p>
            </div>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-emerald-800 hover:bg-emerald-50 px-5 py-3 rounded-full text-xs font-bold tracking-wide transition-all shadow"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Open WhatsApp Chat ({COMPANY_DETAILS.phoneDisplay})</span>
            </a>
          </div>

          {/* Compliance Info */}
          <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200/60 text-xs text-gray-600 space-y-1.5 font-mono">
            <div className="flex justify-between">
              <span className="text-gray-500 font-sans">Corporate CIN:</span>
              <span className="font-bold text-gray-800">{COMPANY_DETAILS.cin}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-500 font-sans">GST Registration:</span>
              <span className="font-bold text-gray-800">{COMPANY_DETAILS.gstin}</span>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Enquiry Form */}
        <div id="enquiry" className="lg:col-span-7">
          <div className="bg-white rounded-3xl border border-gray-200 p-8 sm:p-10 shadow-lg">
            <div className="mb-8">
              <span className="text-xs font-bold tracking-widest text-[#54a937] uppercase">
                Technical RFQ & Inquiry
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#000d15] mt-1">
                Submit Your Requirements
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-2">
                Fill in the details below. Our customer relationship manager will
                reach out with relevant test data, specifications and estimates.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#54a937] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-emerald-950 font-serif">
                  Thank You for Your Enquiry!
                </h4>
                <p className="text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                  Your requirements have been noted. A representative from Nelskraft
                  Refractory Pvt. Ltd. will review your request and get in touch
                  promptly.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-semibold text-[#54a937] hover:underline cursor-pointer"
                  >
                    Submit another requirement
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-bold tracking-wider text-gray-700 uppercase mb-2"
                    >
                      Your Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="e.g. Rajesh Patil"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#54a937] focus:ring-2 focus:ring-[#54a937]/20 outline-none text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-company"
                      className="block text-xs font-bold tracking-wider text-gray-700 uppercase mb-2"
                    >
                      Company / Plant Name
                    </label>
                    <input
                      id="contact-company"
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      placeholder="e.g. Mahadev Steel Works"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#54a937] focus:ring-2 focus:ring-[#54a937]/20 outline-none text-sm transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-bold tracking-wider text-gray-700 uppercase mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="name@company.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#54a937] focus:ring-2 focus:ring-[#54a937]/20 outline-none text-sm transition-all"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-xs font-bold tracking-wider text-gray-700 uppercase mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#54a937] focus:ring-2 focus:ring-[#54a937]/20 outline-none text-sm transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-product"
                    className="block text-xs font-bold tracking-wider text-gray-700 uppercase mb-2"
                  >
                    Product / Material of Interest
                  </label>
                  <select
                    id="contact-product"
                    value={formData.product}
                    onChange={(e) =>
                      setFormData({ ...formData, product: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#54a937] focus:ring-2 focus:ring-[#54a937]/20 outline-none text-sm transition-all bg-white"
                  >
                    <option value="">-- Select Material / General Enquiry --</option>
                    <optgroup label="Refractory Products">
                      {PRODUCTS.filter(
                        (p) => p.category === "refractory-products"
                      ).map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="Biomass Fuels">
                      {PRODUCTS.filter((p) => p.category === "biomass-fuels").map(
                        (p) => (
                          <option key={p.id} value={p.name}>
                            {p.name}
                          </option>
                        )
                      )}
                    </optgroup>
                    <optgroup label="Mineral Materials">
                      {PRODUCTS.filter(
                        (p) => p.category === "mineral-materials"
                      ).map((p) => (
                        <option key={p.id} value={p.name}>
                          {p.name}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-bold tracking-wider text-gray-700 uppercase mb-2"
                  >
                    Requirement Details (Quantities, Temperature, Delivery Timeline)
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    placeholder="Provide details such as intended application, quantity in MT, custom sizing needs..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#54a937] focus:ring-2 focus:ring-[#54a937]/20 outline-none text-sm transition-all resize-y"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 bg-[#54a937] hover:bg-[#46912c] text-white py-3.5 px-6 rounded-full text-sm font-semibold tracking-wide shadow-md hover:shadow-lg transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Enquiry</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppRedirect}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 px-6 rounded-full text-sm font-semibold tracking-wide shadow transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
