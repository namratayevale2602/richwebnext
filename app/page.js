import Link from "next/link";
import { buildMetadata,getBreadcrumbSchema,siteSEO } from "@/utils/seoConfig";
import SeoWrapper from "@/components/seowrapper/SeoWrapper";
import HeroSection from "@/components/home/HeroSection";
import Hero from "@/components/home/Hero";
import Products from "@/components/home/Products";
import Counter from "@/components/fixed/Counter";
import TrustedClientSection from "@/components/home/TrustedClientSection";
import ServicesWeOffer from "@/components/home/ServicesWeOffer";
import Industries from "@/components/home/Industries";
import SlidingText from "@/components/home/SlidingText";
import FiveSections from "@/components/home/FiveSections";
import Offer from "@/components/home/Offer";
import Testimonials from "@/components/fixed/Testimonials";
import Faq from "@/components/home/Faq";
import ServiceSlider from "@/components/home/ServiceSlider";

export const metadata = buildMetadata("home");

export const dynamic = "force-static";

export default function Home() {
  const breadcrumb = getBreadcrumbSchema([{ name: "Home", href: "/" }]);
  return (
    <>
    <SeoWrapper pageUrl="/" schemas={[breadcrumb]} >
      <main>
        <HeroSection />
        {/* <Hero /> */}
        {/* <Products /> */}
        <ServiceSlider />
        <Counter />
        <TrustedClientSection />
        <ServicesWeOffer />
        <Industries />
        {/* <SlidingText /> */}
        <FiveSections />
        <Offer />
        <Testimonials />
        <Faq />
      </main>
    </SeoWrapper>
    </>
  );
}
