import HeroSlideshow from "@/components/home/HeroSlideshow";
import HeroSection from "@/components/home/HeroSection";
import ProductCategoriesSection from "@/components/home/ProductCategoriesSection";
import ApplicationsSection from "@/components/home/ApplicationsSection";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import EnquiryCtaSection from "@/components/home/EnquiryCtaSection";

export default function HomePage() {
  return (
    <>
      {/* 1. Original Hero with 3 rotating background images */}
      <HeroSlideshow />

      {/* 2. Redesigned About Nelskraft Editorial Section */}
      <HeroSection />

      {/* 2. Product Categories Section */}
      <ProductCategoriesSection />

      {/* 3. Industries Served / Industrial Applications */}
      <ApplicationsSection />

      {/* 4. Why Choose Nelskraft Section */}
      <WhyChooseSection />

      {/* 5. Contact / Enquiry Call to Action */}
      <EnquiryCtaSection />
    </>
  );
}
