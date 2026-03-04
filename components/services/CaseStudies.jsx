// components/services/CaseStudies.js
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getProductData } from "@/lib/serviceData";

const CaseStudies = ({ subpage }) => {
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const product = await getProductData(subpage);
      setProductData(product);
      setLoading(false);
    };

    if (subpage) {
      fetchData();
    }
  }, [subpage]);

  if (loading) {
    return (
      <div className="px-6 mx-auto max-w-7xl pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-sky-100 rounded-lg p-6 h-32 animate-pulse"></div>
          ))}
        </div>
      </div>
    );
  }

  if (!productData || !productData.caseStudies || productData.caseStudies.length === 0) {
    return (
      <div className="px-6 mx-auto max-w-7xl pt-20 text-center">
        <h3 className="text-2xl font-bold text-[#b8c7e0] mb-4">
          Case Studies
        </h3>
        <p className="text-gray-400">
          No case studies available at the moment.
        </p>
      </div>
    );
  }

  return (
    <div className="px-6 mx-auto max-w-7xl pt-20 pb-16">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-[#b8c7e0] mb-4">
          {productData.title} Case Studies
        </h3>
        <p className="text-[#0bc0df]">
          See how we've helped businesses across industries
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {productData.caseStudies.slice(0, 6).map((study) => (
          <div
            key={study.id}
            className="bg-white/10 rounded-lg p-6 hover:bg-white/20 transition-colors"
          >
            <div className="flex items-center gap-4">
              <Image
                src={study.image}
                alt={study.title}
                width={50}
                height={50}
                className="rounded-full object-cover w-12 h-12"
              />
              <div>
                <h4 className="text-lg font-semibold text-[#b8c7e0]">
                  {study.title}
                </h4>
                {study.industry && (
                  <p className="text-sm text-gray-400">{study.industry}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          href="/contact"
          className="inline-block px-8 py-3 bg-[#f97316] hover:bg-[#ea580c] text-white rounded-lg font-semibold transition-colors"
        >
          Download Case Studies
        </Link>
      </div>
    </div>
  );
};

export default CaseStudies;