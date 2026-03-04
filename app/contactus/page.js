import Link from "next/link"
import { buildMetadata, getBreadcrumbSchema, siteSEO } from "@/utils/seoConfig";
import SeoWrapper from "@/components/seowrapper/SeoWrapper";
import ContactPage from "@/components/contact/ContactPage";

export const metadata = buildMetadata("contact");
export const dynamic = "force-static";

  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "About Us", href: "/contact" },
  ]);

function page() {
  return (
    <SeoWrapper pageUrl="/contact" schemas={[breadcrumb]} >
        <main className="pt-40">
          <ContactPage/>
         
        </main>
    </SeoWrapper>
  )
}

export default page