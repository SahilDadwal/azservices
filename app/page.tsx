import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ScrollAnimations } from "@/components/layout/ScrollAnimations";
import { AboutSection } from "@/components/sections/AboutSection";
import { AdvisoryPlansSection } from "@/components/sections/AdvisoryPlansSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";

export default function Home() {
  return (
    <>
      <ScrollAnimations />
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <FeaturesSection />
        <ProcessSection />
        <ServicesSection />
        <CtaSection />
        <WhyChooseUsSection />
        <StatsSection />
        <AdvisoryPlansSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
