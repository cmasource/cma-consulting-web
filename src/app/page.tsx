import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { AboutSection } from "@/components/sections/AboutSection";
import { CasesLabsSection } from "@/components/sections/CasesLabsSection";
import { CmaSystemSection } from "@/components/sections/CmaSystemSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { DiagnosisCTASection } from "@/components/sections/DiagnosisCTASection";
import { HeroEditorial } from "@/components/sections/HeroEditorial";
import { MethodologySection } from "@/components/sections/MethodologySection";
import { OperationalManifestoSection } from "@/components/sections/OperationalManifestoSection";
import { ProductEcosystemSection } from "@/components/sections/ProductEcosystemSection";
import { ServicesSystemSection } from "@/components/sections/ServicesSystemSection";
import { SoftwareBoutiqueSection } from "@/components/sections/SoftwareBoutiqueSection";
import { TwoLayersSection } from "@/components/sections/TwoLayersSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroEditorial />
        <OperationalManifestoSection />
        <CmaSystemSection />
        <TwoLayersSection />
        <SoftwareBoutiqueSection />
        <ServicesSystemSection />
        <ProductEcosystemSection />
        <CasesLabsSection />
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
