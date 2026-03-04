// app/products/page.js
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllProducts } from "@/lib/serviceData";
import SoftDevList from "@/components/software/SoftDevList";
import { buildMetadata, getBreadcrumbSchema } from "@/utils/seoConfig";
import SeoWrapper from "@/components/seowrapper/SeoWrapper";

export const metadata = buildMetadata("softwareIT");

export default async function SoftwarePage() {
  const products = await getAllProducts();
  
  const breadcrumb = getBreadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Software & IT Services", href: "/software-it-services" },
  ]);
  
  return (
    <SeoWrapper pageUrl="/software-it-services" schemas={[breadcrumb]}>
      <SoftDevList />
    </SeoWrapper>
  );
}