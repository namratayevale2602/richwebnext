"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import faqData from "@/data/productFaqs.json";

const ProductFAQ = ({ product }) => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openItem, setOpenItem] = useState(0);

  useEffect(() => {
    setFaqs(faqData.faqs);
    setLoading(false);
  }, []);

  // Filter FAQs based on the product slug
  const productSpecificFaqs = faqs.filter((faq) => faq.product_name === product?.slug);
  const generalFaqs = faqs.filter((faq) => faq.product_name === "general");
  
  // Combine product-specific FAQs first, then general FAQs
  const displayFaqs = productSpecificFaqs.length > 0 
    ? [...productSpecificFaqs, ...generalFaqs] 
    : generalFaqs;

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  if (loading) {
    return (
      <div className="py-10 flex items-center w-full">
        <div className="px-4 max-w-7xl w-full mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <div className="animate-pulse h-10 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
            <div className="animate-pulse h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
          </div>
          {[...Array(3)].map((_, index) => (
            <div key={index} className="animate-pulse bg-gray-200 h-20 rounded-lg mb-5"></div>
          ))}
        </div>
      </div>
    );
  }

  if (displayFaqs.length === 0) return null;

  return (
    <div className="py-10 flex items-center w-full">
      <div className="px-4 max-w-7xl w-full mx-auto sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="max-w-2xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h1
            className="text-3xl font-bold leading-tight text-[#e5edfc] sm:text-4xl lg:text-5xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {faqData.sectionTitle}
          </motion.h1>
          <motion.p
            className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-[#0bc0df]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {faqData.sectionDescription}
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-5">
          {displayFaqs.map((faq, index) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <FaqItem
                question={faq.question}
                answer={faq.answer}
                isOpen={openItem === index}
                onToggle={() => toggleItem(index)}
                isProductSpecific={faq.product_name === product?.slug}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

// FAQ Item Component
const FaqItem = ({ question, answer, isOpen, onToggle, isProductSpecific }) => {
  return (
    <div className={`bg-white/12 shadow-md rounded-lg overflow-hidden ${isProductSpecific ? 'border-l-4 border-blue-500' : ''}`}>
      <motion.button
        className="w-full px-6 py-4 text-left flex justify-between items-center cursor-pointer transition-colors duration-200"
        onClick={onToggle}
        transition={{ duration: 0.2 }}
      >
        <span className="text-lg font-medium text-[#b8c7e0] pr-4">
          {question}
          {isProductSpecific && (
            <span className="ml-2 text-xs bg-blue-500 text-white px-2 py-1 rounded-full">Product Specific</span>
          )}
        </span>
        <motion.svg
          className={`w-5 h-5 text-[#b8c7e0] transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </motion.svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-4 pt-2 border-t border-white/20">
              <p className="text-[#b8c7e0] leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductFAQ;