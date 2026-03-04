// app/products/[slug]/page.js
import { notFound } from "next/navigation";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import productsData from "@/data/products.json";
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
  const product = productsData.products.find(p => p.slug === slug);

  if (!product) return {};

  return {
    title: `${product.title} | Rich System Solutions`,
    description: product.fullDesc,
  };
}

// Main product detail page
export default async function ProductDetailPage({ params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;
  const product = productsData.products.find(p => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
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
  );
}