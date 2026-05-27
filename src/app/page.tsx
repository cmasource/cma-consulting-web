import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { AboutSection } from "@/components/sections/AboutSection";
import { BusinessUnitsSection } from "@/components/sections/BusinessUnitsSection";
import { ConsultingServicesSection } from "@/components/sections/ConsultingServicesSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { DiagnosisCTASection } from "@/components/sections/DiagnosisCTASection";
import { HeroSection } from "@/components/sections/HeroSection";
import { MethodologySection } from "@/components/sections/MethodologySection";
import { PortfolioSection } from "@/components/sections/PortfolioSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { SourceSolutionsSection } from "@/components/sections/SourceSolutionsSection";
import { StorytellingSection } from "@/components/sections/StorytellingSection";
import { ValuePropositionSection } from "@/components/sections/ValuePropositionSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <ValuePropositionSection />
        <StorytellingSection />
        <BusinessUnitsSection />
        <ConsultingServicesSection />
        <SourceSolutionsSection />
        <ProductsSection />
        <PortfolioSection />
        <MethodologySection />
        <AboutSection />
        <DiagnosisCTASection />
        <ContactSection />
      </main>
      <WhatsAppWidget />
      <Footer />
    </>
  );
}
