import HeroSection from "@/components/HeroSection";
import ServicesHub from "@/components/ServicesHub";
import SuccessFactors from "@/components/SuccessFactors";
import ContactFooter from "@/components/ContactFooter";

const Index = () => (
  <main className="min-h-screen bg-background">
    <HeroSection />
    <ServicesHub />
    <SuccessFactors />
    <ContactFooter />
  </main>
);

export default Index;
