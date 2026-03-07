"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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

export default function FiveSections() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const totalCards = sections.length - 1;

  return (
    <div
      ref={containerRef}
      className="relative w-full"
      style={{ height: `${totalCards * 90}vh` }}
    >
      {/* Sticky Area */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

        {sections.map((section, index) => {
          const start = index / totalCards;
          const end = (index + 1) / totalCards;

          const scale = useTransform(scrollYProgress, [start, end], [1, 0.85]);

          const y = useTransform(scrollYProgress, [start, end], [0, -120]);

          const opacity = useTransform(
            scrollYProgress,
            [start, start + 0.15, end],
            [1, 1, 0]
          );

          return (
            <motion.div
              key={index}
              style={{
                scale,
                y,
                opacity: index === sections.length - 1 ? 1 : opacity,
                zIndex: sections.length - index,
              }}
              className={`
                absolute
                w-[90%] md:w-[70%] lg:w-[55%]
                h-[420px] md:h-[480px]
                rounded-3xl
                shadow-2xl
                flex items-center justify-center
                text-center
                px-8
                ${section.bg}
              `}
            >
              <div>
                {/* Section Number */}
                <p className="text-sm tracking-widest text-gray-500 mb-3">
                  0{index + 1}
                </p>

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {section.title}
                </h2>

                {/* Description */}
                <p className="text-lg text-gray-600">
                  {section.description}
                </p>

                {/* Decorative line */}
                <div className="w-20 h-1 bg-gray-400 mx-auto mt-6 rounded-full" />
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}



// "use client";

// import React, { useRef } from "react";
// import { motion, useScroll, useTransform } from "framer-motion";

// const sections = [
//   {
//     title: "Audit & AI Diagnosis",
//     description: "KPI review + AI readiness scan.",
//     bg: "bg-gray-50",
//   },
//   {
//     title: "90-Day Action Plan",
//     description: "Roadmap for revenue, ROAS, operations.",
//     bg: "bg-gray-100",
//   },
//   {
//     title: "AI + Team Execution",
//     description: "Media, funnels, creatives, retention, tech.",
//     bg: "bg-gray-200",
//   },
//   {
//     title: "Weekly Growth Sprints",
//     description: "Outputs, insights, experiments.",
//     bg: "bg-gray-300",
//   },
//   {
//     title: "Strategic Consultancy",
//     description: "Driving transformation with agility",
//     bg: "bg-gray-400",
//   },
// ];

// const Card = ({ section, index }) => {
//   const ref = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["start end", "start center"],
//   });

//   const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
//   const opacity = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
//   const y = useTransform(scrollYProgress, [0, 1], [80, 0]);

//   return (
//     <div
//       ref={ref}
//       className="h-screen flex items-center justify-center sticky top-0"
//     >
//       <motion.div
//         style={{ scale, opacity, y }}
//         className={`
//           w-[90%] md:w-[70%] lg:w-[55%]
//           h-[420px] md:h-[480px]
//           rounded-3xl
//           shadow-2xl
//           flex items-center justify-center
//           text-center
//           px-8
//           ${section.bg}
//         `}
//       >
//         <div>
//           <p className="text-sm tracking-widest text-gray-500 mb-3">
//             0{index + 1}
//           </p>

//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             {section.title}
//           </h2>

//           <p className="text-lg text-gray-600">
//             {section.description}
//           </p>

//           <div className="w-20 h-1 bg-gray-400 mx-auto mt-6 rounded-full" />
//         </div>
//       </motion.div>
//     </div>
//   );
// };

// export default function FiveSections() {
//   return (
//     <div className="relative">
//       {sections.map((section, index) => (
//         <Card key={index} section={section} index={index} />
//       ))}
//     </div>
//   );
// }