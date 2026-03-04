import Link from "next/link"
import { buildMetadata, getBreadcrumbSchema, siteSEO } from "@/utils/seoConfig";
import SeoWrapper from "@/components/seowrapper/SeoWrapper";
import PrivacyPolicy from "@/components/privacypolicy/PrivacyPolicy";

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
          <PrivacyPolicy/>
         
        </main>
    </SeoWrapper>
  )
}

export default page