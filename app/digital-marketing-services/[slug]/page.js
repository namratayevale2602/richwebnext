// app/digital-marketing-services/[slug]/page.js
import { notFound } from "next/navigation";
import { 
  buildMetadata, 
  getBreadcrumbSchema, 
  getServiceSchema,
  siteSEO,
  digitalMarketingServices 
} from "@/utils/seoConfig";
import SeoWrapper from "@/components/seowrapper/SeoWrapper";
import DigitalMarketing from "@/components/digitalmarketing/DigitalMarketing";
import digitalMarketingData from "@/data/digitalMarketingData.json";

// Generate static paths for all digital marketing services at build time
export async function generateStaticParams() {
  return Object.keys(digitalMarketingServices).map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for each digital marketing service
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  
  // Check if slug exists in digitalMarketingServices
  if (digitalMarketingServices[slug]) {
    return buildMetadata(slug);
  }
  
  // Fallback to service data if available
  const serviceData = digitalMarketingData[slug];
  if (serviceData) {
    return {
      title: `${serviceData.hero?.title || serviceData.label} | ${siteSEO.siteName}`,
      description: serviceData.hero?.description || siteSEO.defaultDescription,
    };
  }
  
  return {};
}

export const dynamic = "force-static";

export default async function DigitalMarketingServicePage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  
  // Check if service exists in digitalMarketingServices or digitalMarketingData
  const hasSEOData = !!digitalMarketingServices[slug];
  const hasServiceData = !!digitalMarketingData[slug];
  
  if (!hasSEOData && !hasServiceData) {
    notFound();
  }

  // Get SEO data for this service
  const seoData = digitalMarketingServices[slug];

  // Create breadcrumb schema
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Digital Marketing Services", href: "/digital-marketing-services" },
  ];

  if (seoData) {
    breadcrumbItems.push({ 
      name: seoData.breadcrumb || seoData.h1 || "Service", 
      href: `/digital-marketing-services/${slug}` 
    });
  } else {
    breadcrumbItems.push({ 
      name: digitalMarketingData[slug]?.label || "Service", 
      href: `/digital-marketing-services/${slug}` 
    });
  }

  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbItems);

  // Create service schema if SEO data exists
  const serviceSchemas = [];
  if (seoData) {
    serviceSchemas.push(getServiceSchema(seoData, "digital-marketing-services", slug));
  }

  return (
    <SeoWrapper pageUrl={`/digital-marketing-services/${slug}`} schemas={[breadcrumbSchema, ...serviceSchemas]}>
      <DigitalMarketing />
    </SeoWrapper>
  );
}