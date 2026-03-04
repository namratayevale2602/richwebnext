"use client";

import React from "react";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Audit & AI Diagnosis",
    description: "KPI review + AI readiness scan.",
    bg: "bg-gray-50",
  },
  {
    title: "90-Day Action Plan",
    description: "Roadmap for revenue, ROAS, operations.",
    bg: "bg-gray-100",
  },
  {
    title: "AI + Team Execution",
    description: "Media, funnels, creatives, retention, tech.",
    bg: "bg-gray-200",
  },
  {
    title: "Weekly Growth Sprints",
    description: "Outputs, insights, experiments.",
    bg: "bg-gray-300",
  },
  {
    title: "Strategic Consultancy",
    description: "Driving transformation with agility",
    bg: "bg-gray-400",
  },
];

const animation = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0 },
};

const FiveSections = () => {
  return (
    <div className="w-full">
        {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-[#b8c7e0]">
          How We Work
        </h1>
      </div>
      {sections.map((section, index) => (
        <motion.section
          key={index}
          className={`
            ${section.bg}
            sticky top-0
            h-[500px]
            flex items-center justify-center
            px-6
          `}
          style={{ zIndex: index + 1 }}
          variants={animation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="max-w-4xl text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              {section.title}
            </h2>
            <p className="mt-6 text-lg md:text-xl text-gray-600">
              {section.description}
            </p>
          </div>
        </motion.section>
      ))}
    </div>
  );
};

export default FiveSections;