import Link from "next/link"
import { buildMetadata, getBreadcrumbSchema, siteSEO } from "@/utils/seoConfig";
import SeoWrapper from "@/components/seowrapper/SeoWrapper";
import FaqResource from "@/components/resource/FaqResource";

export const metadata = buildMetadata("faq");
export const dynamic = "force-static";

  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "About Us", href: "/faq" },
  ]);

function page() {
  return (
    <SeoWrapper pageUrl="/faq" schemas={[breadcrumb]} >
        <main className="pt-40">
          <FaqResource/>
         
        </main>
    </SeoWrapper>
  )
}

export default page