"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Navigation,
  ExternalLink,
  AlertCircle,
  MessageCircle,
  RotateCcw,
} from "lucide-react";
import { COMPANY_DETAILS } from "@/data/catalogue";

export default function ContactClient() {
  const searchParams = useSearchParams();
  const prefilledProduct = searchParams.get("product") || "";

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    category: "Refractory Products",
    product: prefilledProduct,
    message: "",
  });

  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [submissionState, setSubmissionState] = useState<{
    status: "idle" | "prepared";
    mailtoUrl: string;
    whatsappUrl: string;
  }>({
    status: "idle",
    mailtoUrl: "",
    whatsappUrl: "",
  });

  // Client-side validation logic
  const errors = {
    name: !formData.name.trim() ? "Full name is required." : "",
    email: !formData.email.trim()
      ? "Business email is required."
      : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
      ? "Please enter a valid email address."
      : "",
    phone: !formData.phone.trim()
      ? "Phone number is required."
      : formData.phone.trim().length < 8
      ? "Please enter a valid phone number (at least 8 digits)."
      : "",
    message: !formData.message.trim()
      ? "Requirement details / message is required."
      : "",
  };

  const isFormValid =
    !errors.name && !errors.email && !errors.phone && !errors.message;

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const buildPrefilledWhatsAppUrl = () => {
    const lines = [
      `*New Industrial Enquiry - Nelskraft Refractory Pvt. Ltd.*`,
      ``,
      `*Name:* ${formData.name || "N/A"}`,
      `*Company:* ${formData.company || "N/A"}`,
      `*Email:* ${formData.email || "N/A"}`,
      `*Phone:* ${formData.phone || "N/A"}`,
      `*Category:* ${formData.category}`,
      `*Material/Product:* ${formData.product || "General Enquiry"}`,
      ``,
      `*Requirement Details:*`,
      `${formData.message || "Please share product catalogue & pricing details."}`,
    ];
    return `https://wa.me/${COMPANY_DETAILS.whatsappNumber}?text=${encodeURIComponent(
      lines.join("\n")
    )}`;
  };

  const buildMailtoUrl = () => {
    const subject = `Industrial Enquiry: ${formData.category} - ${formData.name || "Client"}${
      formData.company ? ` (${formData.company})` : ""
    }`;
    const bodyLines = [
      `Dear Nelskraft Refractory Team,`,
      ``,
      `I would like to submit the following material requirement:`,
      ``,
      `Full Name: ${formData.name}`,
      `Company Name: ${formData.company || "N/A"}`,
      `Business Email: ${formData.email}`,
      `Phone Number: ${formData.phone}`,
      `Product Category: ${formData.category}`,
      `Product / Material Required: ${formData.product || "N/A"}`,
      ``,
      `Requirement Details:`,
      `${formData.message}`,
      ``,
      `Regards,`,
      `${formData.name}`,
    ];
    return `mailto:${COMPANY_DETAILS.email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setTouched({
      name: true,
      email: true,
      phone: true,
      message: true,
    });

    if (!isFormValid) {
      return;
    }

    const mailto = buildMailtoUrl();
    const whatsapp = buildPrefilledWhatsAppUrl();

    setSubmissionState({
      status: "prepared",
      mailtoUrl: mailto,
      whatsappUrl: whatsapp,
    });

    if (typeof window !== "undefined") {
      window.location.href = mailto;
    }
  };

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    "Grace Villa, Waghere Colony-1, Pimpri Gaon, Pimpri, Pune 411017"
  )}`;

  const mapEmbedUrl = `https://maps.google.com/maps?q=18.6279,73.8009&hl=en&z=15&output=embed`;

  return (
    <>
      {/* ========================================================= */}
      {/* 1. MAIN TWO-COLUMN CONTACT SECTION (Exact Reference Layout)*/}
      {/* ========================================================= */}
      <section className="bg-[#f8fafc] text-[#1c242c] py-14 sm:py-18 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* ----------------------------------------------------- */}
            {/* LEFT COLUMN: Contact Enquiry Form                     */}
            {/* ----------------------------------------------------- */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl border border-gray-200/90 p-6 sm:p-8 md:p-10 shadow-sm">
                {/* Form Header */}
                <div className="mb-6">
                  <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#54a937] mb-2">
                    <span className="w-4 h-[2px] bg-[#54a937]" />
                    <span>SEND US A MESSAGE</span>
                    <span className="w-4 h-[2px] bg-[#54a937]" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#000d15]">
                    Get in Touch With Our Team
                  </h2>
                  <p className="text-sm text-gray-600 mt-1.5 leading-relaxed">
                    Share your requirement with us. Our technical team will get back to you shortly.
                  </p>
                </div>

                {/* Transparent Notice if user submitted */}
                {submissionState.status === "prepared" && (
                  <div className="mb-6 p-5 rounded-xl bg-amber-50/90 border border-amber-200 text-amber-900 text-xs sm:text-sm space-y-3 animate-fadeIn">
                    <div className="flex items-start gap-2.5">
                      <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-amber-950">
                          Enquiry Draft Prepared for info@nelskraft.com
                        </p>
                        <p className="text-amber-800 mt-1 leading-relaxed">
                          Notice: An automated backend email dispatch server is not configured in
                          this web build. Your detailed enquiry draft has been prepared and opened
                          in your email application. You can also send it directly via WhatsApp:
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 pt-1">
                      <a
                        href={submissionState.mailtoUrl}
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Send via Email Client</span>
                      </a>

                      <a
                        href={submissionState.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Send via WhatsApp</span>
                      </a>

                      <button
                        type="button"
                        onClick={() =>
                          setSubmissionState({
                            status: "idle",
                            mailtoUrl: "",
                            whatsappUrl: "",
                          })
                        }
                        className="inline-flex items-center gap-1 px-3 py-2 text-gray-600 hover:text-gray-900 text-xs font-semibold cursor-pointer"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>Edit Form</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* Form Inputs */}
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Row 1: Full Name & Company Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5"
                      >
                        FULL NAME <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onBlur={() => handleBlur("name")}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Rajesh Patil"
                        className={`w-full px-4 py-3 rounded-lg border text-sm text-[#000d15] placeholder:text-gray-400 bg-[#fafafa] transition-all outline-none ${
                          touched.name && errors.name
                            ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                            : "border-gray-300 focus:border-[#54a937] focus:ring-2 focus:ring-[#54a937]/20"
                        }`}
                      />
                      {touched.name && errors.name && (
                        <p className="text-xs text-red-500 mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-company"
                        className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5"
                      >
                        COMPANY NAME
                      </label>
                      <input
                        id="contact-company"
                        type="text"
                        value={formData.company}
                        onChange={(e) =>
                          setFormData({ ...formData, company: e.target.value })
                        }
                        placeholder="e.g. ABC Power Systems"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm text-[#000d15] placeholder:text-gray-400 bg-[#fafafa] focus:border-[#54a937] focus:ring-2 focus:ring-[#54a937]/20 outline-none transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email Address & Phone Number */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5"
                      >
                        EMAIL ADDRESS <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onBlur={() => handleBlur("email")}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="e.g. name@company.com"
                        className={`w-full px-4 py-3 rounded-lg border text-sm text-[#000d15] placeholder:text-gray-400 bg-[#fafafa] transition-all outline-none ${
                          touched.email && errors.email
                            ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                            : "border-gray-300 focus:border-[#54a937] focus:ring-2 focus:ring-[#54a937]/20"
                        }`}
                      />
                      {touched.email && errors.email && (
                        <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5"
                      >
                        PHONE NUMBER <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="contact-phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onBlur={() => handleBlur("phone")}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="e.g. +91 70203 09001"
                        className={`w-full px-4 py-3 rounded-lg border text-sm text-[#000d15] placeholder:text-gray-400 bg-[#fafafa] transition-all outline-none ${
                          touched.phone && errors.phone
                            ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                            : "border-gray-300 focus:border-[#54a937] focus:ring-2 focus:ring-[#54a937]/20"
                        }`}
                      />
                      {touched.phone && errors.phone && (
                        <p className="text-xs text-red-500 mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  {/* Row 3: Product Category Dropdown */}
                  <div>
                    <label
                      htmlFor="contact-category"
                      className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5"
                    >
                      PRODUCT CATEGORY <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="contact-category"
                      value={formData.category}
                      onChange={(e) =>
                        setFormData({ ...formData, category: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm text-[#000d15] bg-[#fafafa] focus:border-[#54a937] focus:ring-2 focus:ring-[#54a937]/20 outline-none transition-all cursor-pointer"
                    >
                      <option value="Refractory Products">Refractory Products</option>
                      <option value="Biomass Fuels">Biomass Fuels</option>
                      <option value="Industrial Minerals">Industrial Minerals</option>
                      <option value="General Enquiry">General Enquiry</option>
                    </select>
                  </div>

                  {/* Row 4: Product Requirement Text Field */}
                  <div>
                    <label
                      htmlFor="contact-product"
                      className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5"
                    >
                      PRODUCT REQUIREMENT
                    </label>
                    <input
                      id="contact-product"
                      type="text"
                      value={formData.product}
                      onChange={(e) =>
                        setFormData({ ...formData, product: e.target.value })
                      }
                      placeholder="e.g. High Alumina Brick Powder 70%, Biomass Pellets 8mm, Ball Clay..."
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 text-sm text-[#000d15] placeholder:text-gray-400 bg-[#fafafa] focus:border-[#54a937] focus:ring-2 focus:ring-[#54a937]/20 outline-none transition-all"
                    />
                  </div>

                  {/* Row 5: Message Textarea */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5"
                    >
                      MESSAGE <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      required
                      value={formData.message}
                      onBlur={() => handleBlur("message")}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Briefly describe your refractory materials, biomass fuels, industrial minerals, or custom project requirements..."
                      className={`w-full px-4 py-3 rounded-lg border text-sm text-[#000d15] placeholder:text-gray-400 bg-[#fafafa] transition-all outline-none resize-y ${
                        touched.message && errors.message
                          ? "border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-100"
                          : "border-gray-300 focus:border-[#54a937] focus:ring-2 focus:ring-[#54a937]/20"
                      }`}
                    />
                    {touched.message && errors.message && (
                      <p className="text-xs text-red-500 mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button (Matching reference design) */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#54a937] hover:bg-[#438a2c] text-white py-3.5 px-8 rounded-lg text-sm font-bold tracking-wider uppercase transition-all shadow hover:shadow-md cursor-pointer"
                    >
                      <span>SEND INQUIRY</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* ----------------------------------------------------- */}
            {/* RIGHT COLUMN: Contact Details Cards (Exact 4 Cards)   */}
            {/* ----------------------------------------------------- */}
            <div className="lg:col-span-5 flex flex-col space-y-4">
              {/* Column Header */}
              <div className="mb-2">
                <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#54a937] mb-2">
                  <span className="w-4 h-[2px] bg-[#54a937]" />
                  <span>CONTACT DETAILS</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[#000d15] uppercase font-sans">
                  NELSKRAFT REFRACTORY
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  Let&apos;s discuss your requirement.
                </p>
              </div>

              {/* Card 1: Phone Card */}
              <div className="bg-white rounded-2xl border border-gray-200/90 p-5 sm:p-6 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#54a937]/10 text-[#54a937] flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500">Call us for enquiries</p>
                  <a
                    href={`tel:${COMPANY_DETAILS.phone}`}
                    className="block text-lg font-bold text-[#000d15] hover:text-[#54a937] transition-colors mt-0.5"
                  >
                    {COMPANY_DETAILS.phone}
                  </a>
                  <p className="text-xs text-gray-500 mt-1">
                    Contact: Technical &amp; Sales Enquiries
                  </p>
                </div>
              </div>

              {/* Card 2: Email Card */}
              <div className="bg-white rounded-2xl border border-gray-200/90 p-5 sm:p-6 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#54a937]/10 text-[#54a937] flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500">Send us an email</p>
                  <a
                    href={`mailto:${COMPANY_DETAILS.email}`}
                    className="block text-lg font-bold text-[#000d15] hover:text-[#54a937] transition-colors mt-0.5 break-all"
                  >
                    {COMPANY_DETAILS.email}
                  </a>
                  <p className="text-xs text-gray-500 mt-1">
                    Guaranteed response within 24 business hours
                  </p>
                </div>
              </div>

              {/* Card 3: Address Card */}
              <div className="bg-white rounded-2xl border border-gray-200/90 p-5 sm:p-6 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#54a937]/10 text-[#54a937] flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500">Visit our facility / office</p>
                  <p className="text-sm font-semibold text-[#000d15] mt-1 leading-snug">
                    {COMPANY_DETAILS.address.full}
                  </p>
                </div>
              </div>

              {/* Card 4: Operating Schedule Card */}
              <div className="bg-white rounded-2xl border border-gray-200/90 p-5 sm:p-6 shadow-sm flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#54a937]/10 text-[#54a937] flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500">Operating schedule</p>
                  <p className="text-sm font-bold text-[#000d15] mt-1">
                    Monday – Saturday: 9:00 AM – 6:30 PM
                  </p>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Sunday: Closed / Urgent dispatches on prior order
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. MAP SECTION ("OUR LOCATION" / "Find Us") - Exact Match */}
      {/* ========================================================= */}
      <section className="bg-[#000d15] text-white py-16 sm:py-20 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#54a937] mb-2">
                <span className="w-4 h-[2px] bg-[#54a937]" />
                <span>OUR LOCATION</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Find Us
              </h2>
            </div>

            {/* Top-Right Info Card (Matches Reference Exactly) */}
            <div className="bg-[#101b26]/90 border border-white/15 rounded-xl p-4 sm:p-5 max-w-md">
              <p className="text-sm font-bold text-white">
                M/s. {COMPANY_DETAILS.name}
              </p>
              <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                {COMPANY_DETAILS.address.full}
              </p>
            </div>
          </div>

          {/* Interactive Map Container */}
          <div className="relative w-full h-[450px] sm:h-[500px] lg:h-[540px] rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#e5e3df]">
            {/* Embedded Interactive Google Map pointing accurately to Pimpri, Pune */}
            <iframe
              title="Nelskraft Refractory Pvt. Ltd. Location Map"
              src={mapEmbedUrl}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            {/* Floating Location Card on Top-Left (Matches Reference) */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10 max-w-[280px] sm:max-w-sm bg-[#000d15]/95 backdrop-blur-md border border-white/15 rounded-xl p-4 shadow-xl text-left pointer-events-auto">
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-full bg-[#54a937] text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 fill-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    M/s. {COMPANY_DETAILS.shortName}
                  </h4>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#9bd71d]">
                    REGISTERED OFFICE
                  </p>
                  <p className="text-xs text-gray-300 mt-1 leading-snug">
                    {COMPANY_DETAILS.address.line1}, {COMPANY_DETAILS.address.city} – {COMPANY_DETAILS.address.pincode}
                  </p>
                </div>
              </div>

              <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-[#9bd71d] font-semibold text-[11px]">
                  Verified Location
                </span>
                <a
                  href={directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-white hover:text-[#54a937] font-semibold transition-colors"
                >
                  <span>Navigate</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Center Pin Marker Badge Overlay (Matching Reference Visual) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10 flex flex-col items-center">
              <div className="bg-[#000d15]/95 border border-white/20 text-white text-[11px] font-semibold px-2.5 py-1 rounded-md shadow-lg flex items-center gap-1.5 whitespace-nowrap mb-1">
                <span className="w-2 h-2 rounded-full bg-[#54a937] animate-pulse" />
                <span>M/s. {COMPANY_DETAILS.name}</span>
              </div>
              <div className="w-7 h-7 rounded-full bg-[#54a937] border-2 border-white text-white flex items-center justify-center shadow-lg">
                <MapPin className="w-3.5 h-3.5 fill-white" />
              </div>
            </div>

            {/* Bottom-Right "GET DIRECTIONS IN GOOGLE MAPS" Button (Matches Reference) */}
            <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-10 pointer-events-auto">
              <a
                href={directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#54a937] hover:bg-[#438a2c] text-white px-5 py-3 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Navigation className="w-4 h-4 fill-white" />
                <span>GET DIRECTIONS IN GOOGLE MAPS</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
