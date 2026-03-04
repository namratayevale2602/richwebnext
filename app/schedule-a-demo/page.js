import Link from "next/link"
import { buildMetadata, getBreadcrumbSchema, siteSEO } from "@/utils/seoConfig";
import SeoWrapper from "@/components/seowrapper/SeoWrapper";
import ScheduleDemo from "@/components/scheduledemo/ScheduleDemo";

export const metadata = buildMetadata("scheduleademo");
export const dynamic = "force-static";

  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "About Us", href: "/scheduleademo" },
  ]);

function page() {
  return (
    <SeoWrapper pageUrl="/scheduleademo" schemas={[breadcrumb]} >
        <main className="pt-40">
          <ScheduleDemo/>
         
        </main>
    </SeoWrapper>
  )
}

export default page