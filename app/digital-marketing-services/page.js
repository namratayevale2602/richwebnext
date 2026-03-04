// app/digital-marketing-services/page.js
import { buildMetadata, getBreadcrumbSchema } from "@/utils/seoConfig";
import SeoWrapper from "@/components/seowrapper/SeoWrapper";
import DigitalMarketingList from "@/components/digitalmarketing/DigitalMarketingList";

export const metadata = buildMetadata("digitalMarketingServices");
export const dynamic = "force-static";

export default async function DigitalMarketingPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Digital Marketing Services", href: "/digital-marketing-services" },
  ]);
  
  return (
    <SeoWrapper pageUrl="/digital-marketing-services" schemas={[breadcrumbSchema]}>
      <DigitalMarketingList />
    </SeoWrapper>
  );
}