"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// JSON data with public folder image path
const flexBannerData = {
  offers: [
    {
      id: 1,
      image: "/homeimg/flexbanner.png", // Path from public folder
      alt: "Special Offer Banner",
      title: "Special Offer",
      description: "Limited time offer for our valued customers",
    },
  ],
};

const FlexBanner = () => {
  const [offer, setOffer] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call with JSON data
    const fetchData = async () => {
      try {
        // Using static JSON data
        setOffer(flexBannerData.offers[0]);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching banner data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="py-10 flex items-center justify-center">
        <div className="animate-pulse bg-gray-300 w-full h-64 rounded-lg"></div>
      </div>
    );
  }

  if (!offer) {
    return (
      <div className="py-10 flex items-center justify-center">
        <div className="text-gray-500">No banner available</div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="py-10"
    >
      <div className="py-10 flex items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full relative"
        >
          <Image
            src={offer.image}
            alt={offer.alt}
            width={1200}
            height={400}
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FlexBanner;