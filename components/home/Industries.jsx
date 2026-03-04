"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

const industries = [
  {
    title: "Custom Software Development",
    image: "/element/element5.png",
    bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
    accentColor: "from-blue-500 to-blue-600",
    path: "/software-it-services/custom-software-development",
  },
  {
    title: "Web Development",
    image: "/element/element4.png",
    bgColor: "bg-gradient-to-br from-emerald-50 to-emerald-100",
    accentColor: "from-emerald-500 to-emerald-600",
    path: "/software-it-services/web-development",
  },
  {
    title: "Mobile App Development",
    image: "/element/element4.png",
    bgColor: "bg-gradient-to-br from-teal-50 to-teal-100",
    accentColor: "from-teal-500 to-teal-600",
    path: "/software-it-services/mobile-app-development",
  },
  {
    title: "UI/UX Design",
    image: "/element/element3.png",
    bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
    accentColor: "from-purple-500 to-purple-600",
    path: "/software-it-services/ui-ux-design",
  },
  {
    title: "E-Commerce Solutions",
    image: "/element/element2.png",
    bgColor: "bg-gradient-to-br from-amber-50 to-amber-100",
    accentColor: "from-amber-500 to-amber-600",
    path: "/software-it-services/ecommerce-solutions",
  },
  {
    title: "Cloud Solutions",
    image: "/element/element4.png",
    bgColor: "bg-gradient-to-br from-cyan-50 to-cyan-100",
    accentColor: "from-cyan-500 to-cyan-600",
    path: "/software-it-services/cloud-solutions",
  },
  {
    title: "API Integration",
    image: "/element/element5.png",
    bgColor: "bg-gradient-to-br from-pink-50 to-pink-100",
    accentColor: "from-pink-500 to-pink-600",
    path: "/software-it-services/api-integration",
  },
  {
    title: "maintenance and technical support",
    image: "/element/Rich_04032026.png",
    bgColor: "bg-gradient-to-br from-orange-50 to-orange-100",
    accentColor: "from-orange-500 to-orange-600",
    path: "/software-it-services/maintenance-support",
  },
];

const Industries = () => {
  const router = useRouter();
  const totalCards = industries.length;

  // Calculate rows and last row cards
  const fullRows = Math.floor(totalCards / 3);
  const lastRowCards = totalCards % 3;

  // Generate row configurations
  const rows = [];
  for (let i = 0; i < fullRows; i++) {
    rows.push({
      type: "full",
      startIndex: i * 3,
      cards: 3,
      gridClass: "grid-cols-3",
    });
  }

  if (lastRowCards > 0) {
    rows.push({
      type: "partial",
      startIndex: fullRows * 3,
      cards: lastRowCards,
      gridClass:
        lastRowCards === 3
          ? "grid-cols-3"
          : lastRowCards === 2
            ? "grid-cols-2"
            : "grid-cols-1",
    });
  }

  const handleCardClick = (path) => {
    router.push(path);
  };

  return (
    <div className="w-full min-h-screen bg-transparent p-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-[#b8c7e0]">
          Industries
        </h1>
      </div>

      {/* Dynamic Grid Container */}
      <div className="max-w-7xl mx-auto space-y-0">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className={`grid ${row.gridClass} gap-0 mb-0`}>
            {Array.from({ length: row.cards }).map((_, cardIndex) => {
              const industryIndex = row.startIndex + cardIndex;
              const industry = industries[industryIndex];

              return (
                <motion.div
                  key={industryIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: industryIndex * 0.1,
                  }}
                  whileHover={{
                    scale: 1.02,
                    cursor: "pointer",
                  }}
                  onClick={() => handleCardClick(industry.path)}
                  className={`relative ${industry.bgColor} min-h-[320px] border-r border-b border-gray-200 overflow-hidden group transition-all duration-300 hover:shadow-xl`}
                >
                  {/* Two-column layout */}
                  <div className="flex h-full">
                    {/* Left Column - Text Content */}
                    <div className="w-2/3 p-6 md:p-8 flex flex-col justify-between">
                      <div>
                        {/* Number */}
                        <div className="mb-4">
                          <span className="text-4xl font-bold text-gray-900">
                            {String(industryIndex + 1).padStart(2, "0")}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
                          {industry.title}
                        </h3>
                      </div>

                      {/* Hover Line */}
                      <div className="flex items-center mt-4">
                        <div
                          className={`w-0 group-hover:w-12 h-1 bg-gradient-to-r ${industry.accentColor} rounded-full transition-all duration-300 mr-3`}
                        />
                        <span className="text-gray-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Learn more
                        </span>
                      </div>
                    </div>

                    {/* Right Column - Image */}
                    <div className="w-1/3 relative flex items-end justify-end">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + industryIndex * 0.1 }}
                        className="relative w-full h-4/5"
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src={industry.image}
                            alt={industry.title}
                            fill
                            className="object-contain object-right-bottom drop-shadow-lg"
                            sizes="(max-width: 768px) 33vw, 25vw"
                            priority={industryIndex < 3}
                          />
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-gray-300 rounded-tl-2xl z-10" />
                </motion.div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Industries;