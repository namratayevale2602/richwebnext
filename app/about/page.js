import Link from "next/link"
import { buildMetadata, getBreadcrumbSchema, siteSEO } from "@/utils/seoConfig";
import SeoWrapper from "@/components/seowrapper/SeoWrapper";
import AboutHero from "@/components/aboutus/AboutHero";
import Counter from "@/components/fixed/Counter";
import AboutUs from "@/components/aboutus/AboutUs";
import AboutKey from "@/components/aboutus/AboutKey";
import Testimonials from "@/components/fixed/Testimonials";
import Enquiry from "@/components/form/Enquiry";
import EnquiryFlex from "@/components/fixed/EnquiryFlex";


export const metadata = buildMetadata("about");
export const dynamic = "force-static";

  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
  ]);

function page() {
  return (
    <SeoWrapper pageUrl="/about" schemas={[breadcrumb]} >
        <main className="pt-40">
          <AboutHero/>
          <Counter/>
          <AboutUs/>
          <AboutKey/>
          <Testimonials/>
          <Enquiry/>
          <EnquiryFlex/>
        </main>
    </SeoWrapper>
  )
}

export default page