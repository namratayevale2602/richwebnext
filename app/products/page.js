// app/products/page.js
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getAllProducts } from "@/lib/serviceData";

export const metadata = {
  title: "Our Products & Services | Rich System Solutions",
  description: "Explore our comprehensive range of digital products and services including Bulk SMS, WhatsApp Business, Digital Marketing, and more.",
};

export default async function ProductsPage() {
  const products = await getAllProducts();
  
  return (
    <div className="min-h-screen bg-transparent pt-40">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full">
        <h1 className="text-4xl text-[#b8c7e0] font-bold text-center mb-12">
          Our Products & Services
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group p-6 bg-white/10 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-white/20 hover:border-blue-500/30 hover:-translate-y-1"
            >
              <h2 className="text-2xl text-[#b8c7e0] font-bold mb-3 group-hover:text-blue-400 transition-colors">
                {product.name}
              </h2>
              <p className="text-[#e5edfc] text-sm mb-4 line-clamp-3">
                {product.description}
              </p>
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 text-blue-400 text-sm font-semibold group-hover:gap-3 transition-all">
                  Learn More <ArrowRight className="w-4 h-4" />
                </span>
                <span className="text-xs text-gray-400">Service</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}