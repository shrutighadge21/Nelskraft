import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ProductCategoriesSection from "@/components/home/ProductCategoriesSection";
import ApplicationsSection from "@/components/home/ApplicationsSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import EnquiryCtaSection from "@/components/home/EnquiryCtaSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section (Preserved 3-image auto slideshow) */}
      <HeroSection />

      {/* 2. About Nelskraft Section */}
      <AboutSection />

      {/* 3. Product Categories Section */}
      <ProductCategoriesSection />

      {/* 5. Industries Served / Industrial Applications */}
      <ApplicationsSection />

      {/* 6. Why Choose Nelskraft Section */}
      <WhyChooseSection />

      {/* 7. Contact / Enquiry Call to Action */}
      <EnquiryCtaSection />
    </>
  );
}
