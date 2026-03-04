"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const factsData = {
  sectionTitle: "Facts & Figures",
  sectionDescription:
    "Understand the Powerful Insights and Metrics That Demonstrate Our Success and Future Potential",
  facts: [
    {
      id: 1,
      icon: "/homeimg/troffe.png", // Direct path from public folder
      number: 16,
      title: "Years",
      subtitle: "of learning as a marketer",
    },
    {
      id: 2,
      icon: "/homeimg/user.png",
      number: 2000,
      title: "+",
      subtitle: "Satisfied Clients",
    },
    {
      id: 3,
      icon: "/homeimg/graph.png",
      number: 10,
      title: "Million +",
      subtitle: "Text delivering capacity / year",
    },
    {
      id: 4,
      icon: "/homeimg/clock.png",
      number: 99,
      title: "%",
      subtitle: "API Uptime",
    },
  ],
};

const Counter = () => {
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    setFacts(factsData.facts);
  }, []);

  return (
    <div className="py-20 bg-transparent">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl text-[#b8c7e0] mb-4">
            {factsData.sectionTitle}
          </h1>
          <p className="max-w-xl mx-auto text-base leading-relaxed text-[#e5edfc] ">
            {factsData.sectionDescription}
          </p>
        </motion.div>

        <div className="px-20 flex flex-col sm:flex-row justify-between items-center">
          {facts.map((fact, index) => (
            <motion.div
              key={fact.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center mt-10"
            >
              <div className="w-16 h-16 relative mb-4">
                <Image
                  src={fact.icon}
                  alt={fact.subtitle}
                  fill
                  className="object-contain filter invert"
                  sizes="64px"
                />
              </div>
             
                <CounterNumber digit={fact.number} title={fact.title} />
              
              <p className="text-[#0895d9] text-center mt-2">{fact.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Counter Number Component with improved animation
const CounterNumber = ({ digit, title }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0);
    
    if (digit > 0) {
      // Calculate increment based on digit size
      const steps = 50; // Number of steps
      const increment = digit / steps;
      let currentStep = 0;
      
      const interval = setInterval(() => {
        currentStep++;
        setCount(Math.min(Math.ceil(increment * currentStep), digit));
        
        if (currentStep >= steps) {
          clearInterval(interval);
          setCount(digit); // Ensure exact final number
        }
      }, 30);

      return () => clearInterval(interval);
    }
  }, [digit]);

  return (
    <h2 className="text-3xl mt-4 text-[#b8c7e0] font-semibold text-center">
      {count.toLocaleString()} {title}
    </h2>
  );
};

export default Counter;