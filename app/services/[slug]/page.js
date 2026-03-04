// app/products/[slug]/page.js
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import productsData from "@/data/products.json";
import { 
  buildMetadata, 
  getBreadcrumbSchema, 
  getServiceSchema,
  siteSEO,
  industrialServices,
  softwareServices,
  digitalMarketingServices 
} from "@/utils/seoConfig";
import SeoWrapper from "@/components/seowrapper/SeoWrapper";
import ServiceIntro from "@/components/services/ServiceIntro";
import Digital from "@/components/services/Digital";
import Benefits from "@/components/services/Benefits";
import CaseStudies from "@/components/services/CaseStudies";
import ProductFAQ from "@/components/services/ProductFAQ";
import Testimonials from "@/components/fixed/Testimonials";
import Enquiry from "@/components/form/Enquiry";
import EnquiryFlex from "@/components/fixed/EnquiryFlex";
import Quote from "@/components/services/Quote";
import FlexBanner from "@/components/services/FlexBanner";

// Generate static paths for all products at build time
export async function generateStaticParams() {
  return productsData.products.map((product) => ({
    slug: product.slug,
  }));
}

// Generate metadata for each product
export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  
  // Find which service category this slug belongs to
  let pageKey = slug;
  
  // Check in all service categories
  if (industrialServices[slug]) {
    pageKey = slug;
  } else if (softwareServices[slug]) {
    pageKey = slug;
  } else if (digitalMarketingServices[slug]) {
    pageKey = slug;
  } else {
    // If not found in SEO config, fallback to product data
    const product = productsData.products.find(p => p.slug === slug);
    if (!product) return {};
    
    return {
      title: `${product.title} | ${siteSEO.siteName}`,
      description: product.fullDesc,
    };
  }
  
  return buildMetadata(pageKey);
}

export const dynamic = "force-static";

// Main product detail page
export default async function ProductDetailPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const product = productsData.products.find(p => p.slug === slug);

  if (!product) {
    notFound();
  }

  // Get SEO data for this product
  const seoData = industrialServices[slug] || 
                  softwareServices[slug] || 
                  digitalMarketingServices[slug];

  // Determine category for breadcrumb
  let category = "products";
  if (softwareServices[slug]) category = "software-it-services";
  else if (digitalMarketingServices[slug]) category = "digital-marketing-services";

  // Create breadcrumb schema
  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
  ];

  if (seoData) {
    breadcrumbItems.push({ 
      name: seoData.breadcrumb || product.title, 
      href: `/products/${slug}` 
    });
  } else {
    breadcrumbItems.push({ 
      name: product.title, 
      href: `/products/${slug}` 
    });
  }

  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbItems);

  // Create service schema if SEO data exists
  const serviceSchemas = [];
  if (seoData) {
    serviceSchemas.push(getServiceSchema(seoData, category, slug));
  }

  return (
    <SeoWrapper pageUrl={`/products/${slug}`} schemas={[breadcrumbSchema, ...serviceSchemas]}>
      <div className="min-h-screen bg-transparent">
        {/* Hero Section with padding for navbar */}
        <div className="pt-40">
          {/* Service Intro Component */}
          <ServiceIntro slug={slug} />
          
          {/* Digital/Subtypes Component - Only show if subtypes exist */}
          {product.subtypes && product.subtypes.length > 0 && (
            <Digital slug={slug} />
          )}
          
          {/* Benefits Component - Only show if benefits exist */}
          {product.benefits && product.benefits.length > 0 && (
            <Benefits slug={slug} />
          )}
          
          {/* Case Studies Component - Only show if caseStudies exist */}
          {product.caseStudies && product.caseStudies.length > 0 && (
            <CaseStudies subpage={slug} />
          )}
          
          <Quote />
          <FlexBanner />
          
          {/* Testimonials Component */}
          <Testimonials />
          
          {/* Product FAQ Component - Pass the entire product object */}
          <ProductFAQ product={product} />
          
          {/* Enquiry Components */}
          <Enquiry />
          <EnquiryFlex />
        </div>
      </div>
    </SeoWrapper>
  );
}