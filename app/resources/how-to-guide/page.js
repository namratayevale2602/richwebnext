import Link from "next/link"
import { buildMetadata, getBreadcrumbSchema, siteSEO } from "@/utils/seoConfig";
import SeoWrapper from "@/components/seowrapper/SeoWrapper";
import HowToGuide from "@/components/resource/HowToGuide";

export const metadata = buildMetadata("howToGuide");
export const dynamic = "force-static";

  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "About Us", href: "/howToGuide" },
  ]);

function page() {
  return (
    <SeoWrapper pageUrl="/howToGuide" schemas={[breadcrumb]} >
        <main className="pt-40">
          <HowToGuide/>
         
        </main>
    </SeoWrapper>
  )
}

export default page