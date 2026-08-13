import ContactSection from "../components/home/ContactSection/ContactSection";
import HeroSection from "../components/home/HeroSection/HeroSection";
import InformationTypesSection from "../components/home/InformationTypesSection/InformationTypesSection";
import KeyshotsSection from "../components/home/KeyshotsSection/KeyshotsSection";
import OtherPossibilitiesSection from "../components/home/OtherPossibilitiesSection/OtherPossibilitiesSection";
import PitchSection from "../components/home/PitchSection/PitchSection";
import PricingSection from "../components/home/PricingSection/PricingSection";
import QaStrip from "../components/home/QaStrip/QaStrip";
import SecuritySection from "../components/home/SecuritySection/SecuritySection";
import TakeALookSection from "../components/home/TakeALookSection/TakeALookSection";
import UseCasesSection from "../components/home/UseCasesSection/UseCasesSection";
import SiteFooter from "../components/layout/SiteFooter";
import SiteNav from "../components/layout/SiteNav";

export default function HomePage() {
  return (
    <>
      <SiteNav activeItem="home" demoHref="#demo" />
      <main>
        <HeroSection />
        <QaStrip />
        <PitchSection />
        <KeyshotsSection />
        <SecuritySection />
        <UseCasesSection />
        <OtherPossibilitiesSection />
        <PricingSection />
        <ContactSection />
        <InformationTypesSection />
        <TakeALookSection />
      </main>
      <SiteFooter />
    </>
  );
}
