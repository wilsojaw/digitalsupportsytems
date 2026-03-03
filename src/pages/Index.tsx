import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import VisualBreakSection from "@/components/VisualBreakSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import IndustriesSection from "@/components/IndustriesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <VisualBreakSection />
      <WhyChooseUs />
      <IndustriesSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
