import { ContactSection } from "@/components/contact";
import { FeaturesSection } from "@/components/Features";
import { HeroSection } from "@/components/Hero";
import { PricingSection } from "@/components/Pricing";
import { ServicesSection } from "@/components/Services";
import { TestimonialSection } from "@/components/Testimonial";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <TestimonialSection />
      <PricingSection />
      <ContactSection />
    </div>
  );
}
