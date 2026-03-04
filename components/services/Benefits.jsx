// components/services/Benefits.js
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { getProductData } from "@/lib/serviceData";

const Benefits = ({ slug }) => {
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductData = async () => {
      setLoading(true);
      const data = await getProductData(slug);
      setProductData(data);
      setLoading(false);
    };

    fetchProductData();
  }, [slug]);

  if (loading) {
    return (
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="w-full lg:w-1/2 space-y-4">
            <div className="animate-pulse h-10 bg-gray-300 rounded w-3/4"></div>
            <div className="animate-pulse h-8 bg-gray-300 rounded w-1/2"></div>
            <div className="animate-pulse h-4 bg-gray-300 rounded w-full"></div>
            <div className="animate-pulse h-4 bg-gray-300 rounded w-5/6"></div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="animate-pulse w-full h-80 bg-gray-300 rounded-lg"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!productData || !productData.benefits || productData.benefits.length === 0) {
    return null;
  }

  const benefit = productData.benefits[0];

  return (
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full py-16">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl lg:text-4xl font-bold text-[#b8c7e0] mb-4">
            {benefit.title}
          </h2>
          <h3 className="text-xl lg:text-2xl text-[#0bc0df] mb-6">
            {benefit.subtitle}
          </h3>
          <p className="text-[#e5edfc] text-base lg:text-lg leading-relaxed mb-8">
            {benefit.description}
          </p>

          <div className="space-y-4">
            {benefit.list.map((item, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle className="text-green-400 w-6 h-6 flex-shrink-0 mt-1" />
                <span className="text-[#0895d9] text-base lg:text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <Image
            src={benefit.image}
            alt={benefit.title}
            width={500}
            height={400}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Benefits;