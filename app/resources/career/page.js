import Link from "next/link"
import { buildMetadata, getBreadcrumbSchema, siteSEO } from "@/utils/seoConfig";
import SeoWrapper from "@/components/seowrapper/SeoWrapper";
import Career from "@/components/resource/Career";

export const metadata = buildMetadata("career");
export const dynamic = "force-static";

  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "About Us", href: "/career" },
  ]);

function page() {
  return (
    <SeoWrapper pageUrl="/career" schemas={[breadcrumb]} >
        <main className="pt-40">
          <Career/>
         
        </main>
    </SeoWrapper>
  )
}

export default page