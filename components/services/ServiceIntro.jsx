// components/services/ServiceIntro.jsx
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getProductData } from "@/lib/serviceData";

const ServiceIntro = ({ slug }) => {
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductData = async () => {
      setLoading(true);
      try {
        const data = await getProductData(slug);
        setProductData(data);
      } catch (error) {
        console.error("Error fetching product data:", error);
        setProductData(null);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchProductData();
    }
  }, [slug]);

  if (loading) {
    return (
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full py-10">
        <div className="bg-white/10 shadow-xl flex flex-col sm:flex-row items-center px-5 w-full rounded-lg">
          <div className="w-full sm:w-2/5 p-5">
            <div className="animate-pulse w-full h-64 bg-gray-300 rounded-lg"></div>
          </div>
          <div className="w-full sm:w-3/5 p-5">
            <div className="animate-pulse h-8 bg-gray-300 rounded w-3/4 mb-4"></div>
            <div className="animate-pulse h-6 bg-gray-300 rounded w-1/2 mb-3"></div>
            <div className="space-y-2 mb-4">
              <div className="animate-pulse h-4 bg-gray-300 rounded w-full"></div>
              <div className="animate-pulse h-4 bg-gray-300 rounded w-5/6"></div>
              <div className="animate-pulse h-4 bg-gray-300 rounded w-4/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!productData) {
    return (
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full py-10 text-center">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
          Product not found: {slug}
        </div>
      </div>
    );
  }

  // Safe access to product data with fallbacks
  const title = productData?.title || productData?.name || slug;
  const subtitle = productData?.subtitle || "";
  const detailedDesc = productData?.detailedDesc || productData?.description || "";
  const image = productData?.image || "/images/default.png";

  return (
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full py-10">
      <div className="bg-white/10 shadow-xl flex flex-col sm:flex-row items-center px-5 w-full rounded-lg">
        <div className="w-full sm:w-2/5 p-5">
          <Image
            src={image}
            width={500}
            height={400}
            alt={title}
            className="w-full h-64 object-contain rounded-lg"
           
          />
        </div>

        <div className="w-full sm:w-3/5 p-5">
          <h1 className="text-4xl text-[#b8c7e0] font-bold capitalize">
            {title}
          </h1>
          {subtitle && (
            <h2 className="text-2xl text-[#0bc0df] my-3 font-semibold">
              {subtitle}
            </h2>
          )}
          <p className="text-sm text-[#e5edfc] text-justify leading-relaxed">
            {detailedDesc}
          </p>
          <div className="my-5 flex flex-row flex-wrap gap-2">
            <Link
              href="/schedule-a-demo"
              className="rounded-full border-2 border-sky-500 bg-blue-950 text-[#e5edfc] px-5 sm:px-8 py-2 hover:bg-sky-500 hover:text-white transition-colors duration-200"
            >
              Schedule A Demo
            </Link>
            <Link
              href="/contact"
              className="rounded-full border-2 border-sky-500 bg-blue-950 text-[#e5edfc] px-5 sm:px-8 py-2 hover:bg-sky-500 hover:text-white transition-colors duration-200"
            >
              Talk To Sales
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceIntro;