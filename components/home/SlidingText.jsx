"use client";

import React from "react";
import { motion } from "framer-motion";

const firstRow = [
  "Deep Learning Models",
  "Design Sprint",
  "Mobile Banking",
  "Strategic Consultancy",
  "Rapid Agility",
];

const secondRow = [
  "Intelligent Insurance Automation",
  "Cybersecurity",
  "Payments Infrastructure",
  "Digital e-Rupee",
];

const pillClass =
  "px-6 py-3 rounded-full bg-blue-50 text-gray-700 text-sm md:text-base font-medium whitespace-nowrap";

const SlidingText = () => {
  return (
    <section className="w-full bg-transparent py-24 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl font-bold text-[#b8c7e0] leading-tight">
          Technology Partner to a <br />
          Shared{" "}
          <span className="text-[#0895d9]">
            Tomorrow
          </span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg md:text-xl text-[#0bc0df]">
          Collaborating for success in a dynamic world
        </p>

        {/* Sliding Pills */}
        <div className="mt-14 space-y-6 overflow-hidden">
          {/* First Row – Left to Right */}
          <motion.div
            className="flex gap-4 w-max mx-auto"
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...firstRow, ...firstRow].map((item, index) => (
              <span key={index} className={pillClass}>
                {item}
              </span>
            ))}
          </motion.div>

          {/* Second Row – Right to Left */}
          <motion.div
            className="flex gap-4 w-max mx-auto"
            initial={{ x: "100%" }}
            animate={{ x: "-100%" }}
            transition={{
              duration: 52,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...secondRow, ...secondRow].map((item, index) => (
              <span key={index} className={pillClass}>
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SlidingText;