// components/services/Digital.js
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getProductData } from "@/lib/serviceData";

const Digital = ({ slug }) => {
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductData = async () => {
      setLoading(true);
      const data = await getProductData(slug);
      setProductData(data);
      setLoading(false);
    };

    if (slug) {
      fetchProductData();
    }
  }, [slug]);

  if (loading) {
    return (
      <section className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full py-16">
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="rounded-md p-6 bg-sky-100 shadow-md">
              <div className="animate-pulse w-20 h-20 bg-gray-300 rounded-full mx-auto mb-4"></div>
              <div className="animate-pulse h-6 bg-gray-300 rounded w-3/4 mx-auto mb-3"></div>
              <div className="animate-pulse h-4 bg-gray-300 rounded w-full mb-2"></div>
              <div className="animate-pulse h-4 bg-gray-300 rounded w-5/6 mx-auto"></div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (!productData || !productData.subtypes || productData.subtypes.length === 0) {
    return null;
  }

  const formatTitle = (title) => {
    return title;
  };

  return (
    <section className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl w-full py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl text-[#b8c7e0] font-bold md:text-4xl capitalize">
          {productData.title} Services
        </h2>
        <p className="mt-4 text-[#0bc0df] max-w-2xl mx-auto">
          We are one of the best {productData.title} Agency
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {productData.subtypes.map((subtype) => (
          <DigitalCard
            key={subtype.id}
            title={subtype.title}
            description={subtype.description}
            image={subtype.image}
          />
        ))}
      </div>
    </section>
  );
};

function DigitalCard({ title, description, image }) {
  return (
    <div className="bg-white/10 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex justify-center mb-4">
        <Image
          src={image}
          width={80}
          height={80}
          alt={title}
          className="rounded-full object-cover w-20 h-20"
        />
      </div>
      <h3 className="text-xl font-semibold text-[#0895d9] text-center mb-3">
        {title}
      </h3>
      <p className="text-sm text-[#e5edfc] text-center leading-relaxed">
        {description}
      </p>
    </div>
  );
}

export default Digital;