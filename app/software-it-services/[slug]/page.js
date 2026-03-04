// app/software-it-services/[slug]/page.js
import { notFound } from "next/navigation";
import { 
  buildMetadata, 
  getBreadcrumbSchema, 
  getServiceSchema,
  siteSEO,
  softwareServices 
} from "@/utils/seoConfig";
import SeoWrapper from "@/components/seowrapper/SeoWrapper";
import SoftDev from "@/components/software/SoftDev";
import servicesData from "@/data/softdev.json";

// Generate static paths for all software services at build time
export async function generateStaticParams() {
  return Object.keys(softwareServices).map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for each software service
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  
  // Check if slug exists in softwareServices
  if (softwareServices[slug]) {
    return buildMetadata(slug);
  }
  
  // Fallback to service data if available
  const serviceData = servicesData[slug];
  if (serviceData) {
    return {
      title: `${serviceData.hero?.title || serviceData.label} | ${siteSEO.siteName}`,
      description: serviceData.hero?.description || siteSEO.defaultDescription,
    };
  }
  
  return {};
}

export const dynamic = "force-static";

export default async function SoftwareServicePage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  
  // Check if service exists in softwareServices or servicesData
  const hasSEOData = !!softwareServices[slug];
  const hasServiceData = !!servicesData[slug];
  
  if (!hasSEOData && !hasServiceData) {
    notFound();
  }

  // Get SEO data for this service
  const seoData = softwareServices[slug];

  // Create breadcrumb schema
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Software & IT Services", href: "/software-it-services" },
  ];

  if (seoData) {
    breadcrumbItems.push({ 
      name: seoData.breadcrumb || seoData.h1 || "Service", 
      href: `/software-it-services/${slug}` 
    });
  } else {
    breadcrumbItems.push({ 
      name: servicesData[slug]?.label || "Service", 
      href: `/software-it-services/${slug}` 
    });
  }

  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbItems);

  // Create service schema if SEO data exists
  const serviceSchemas = [];
  if (seoData) {
    serviceSchemas.push(getServiceSchema(seoData, "software-it-services", slug));
  }

  return (
    <SeoWrapper pageUrl={`/software-it-services/${slug}`} schemas={[breadcrumbSchema, ...serviceSchemas]}>
      <SoftDev />
    </SeoWrapper>
  );
}