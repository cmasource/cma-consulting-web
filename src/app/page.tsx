import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { AboutSection } from "@/components/sections/AboutSection";
import { CasesLabsSection } from "@/components/sections/CasesLabsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Diagnosis360Section } from "@/components/sections/Diagnosis360Section";
import { HeroEditorial } from "@/components/sections/HeroEditorial";
import { OperationalManifestoSection } from "@/components/sections/OperationalManifestoSection";
import { SoftwareBoutiqueSection } from "@/components/sections/SoftwareBoutiqueSection";
import { WhatCmaSolvesSection } from "@/components/sections/WhatCmaSolvesSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroEditorial />
        <OperationalManifestoSection />
        <WhatCmaSolvesSection />
        <Diagnosis360Section />
        <SoftwareBoutiqueSection />
        <CasesLabsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <WhatsAppWidget />
      <Footer />
    </>
  );
}
