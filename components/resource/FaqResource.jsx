// app/resources/faq/page.js
"use client";

import React, { useState, useEffect } from "react";
import faqData from "@/data/faqResource.json";
// import Blog from "@/components/home/Blog";
import Testimonials from "@/components/fixed/Testimonials";
import Enquiry from "@/components/form/Enquiry";

const FaqResource = () => {
  const [types, setTypes] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [faqs, setFaqs] = useState(1);
  const [loading, setLoading] = useState(true);
  const [openItems, setOpenItems] = useState({});

  useEffect(() => {
    // Load data from JSON
    setTypes(faqData.products);
    setQuestions(faqData.faqs);
    setLoading(false);
  }, []);

  const handleClick = (id) => {
    setFaqs(id);
  };

  const toggleItem = (index) => {
    setOpenItems((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  if (loading) {
    return (
      <div className="min-h-screen pt-40">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="animate-pulse h-10 bg-gray-300 rounded w-96 mx-auto mb-10"></div>
          <div className="flex flex-col lg:flex-row gap-8">
            {/* FAQ Questions Loading */}
            <div className="w-full lg:w-3/5 space-y-4">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="animate-pulse bg-gray-200 h-24 rounded-lg"
                ></div>
              ))}
            </div>
            {/* Categories Loading */}
            <div className="w-full lg:w-2/5">
              <div className="animate-pulse h-10 bg-gray-300 rounded w-48 mx-auto mb-6"></div>
              <div className="space-y-3">
                {[1, 2, 3, 4].map((item) => (
                  <div
                    key={item}
                    className="animate-pulse bg-gray-200 h-16 rounded-lg"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-40">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* FAQ Questions Section */}
          <div className="w-full lg:w-3/5">
            <h1 className="text-3xl sm:text-4xl font-bold text-center text-[#b8c7e0] mb-10">
              Frequently Asked Questions
            </h1>

            <div className="space-y-4">
              {questions
                .filter((que) => que.product_id == faqs)
                .map((que, i) => (
                  <div
                    key={que.id}
                    className="bg-white/12 rounded-lg shadow-md border border-white/20 overflow-hidden"
                  >
                    <button
                      className="w-full px-6 py-4 text-left flex justify-between items-center cursor-pointer duration-200"
                      onClick={() => toggleItem(i)}
                    >
                      <span className="text-lg font-medium text-[#e5edfc] pr-4">
                        {que.question}
                      </span>
                      <svg
                        className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${
                          openItems[i] ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>

                    {openItems[i] && (
                      <div className="px-6 pb-4">
                        <p className="text-[#e5edfc] leading-relaxed">
                          {que.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}

              {questions.filter((que) => que.product_id == faqs).length ===
                0 && (
                <div className="text-center py-8">
                  <p className="text-gray-500 text-lg">
                    No FAQs found for this category.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Related FAQ Categories */}
          <div className="w-full lg:w-2/5">
            <div className="bg-white/12 rounded-lg shadow-md p-6 sticky top-8">
              <h2 className="text-2xl font-bold text-center text-[#b8c7e0] mb-6">
                Related FAQ
              </h2>

              <div className="max-h-96 overflow-auto space-y-3">
                {types.map((items) => (
                  <Types
                    key={items.id}
                    title={items.title}
                    isActive={faqs === items.id}
                    onClick={() => handleClick(items.id)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Blog /> */}
      <Testimonials />
      <Enquiry />
    </div>
  );
};

export default FaqResource;

// Types Component
export function Types({ title, isActive, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`rounded-lg p-4 cursor-pointer transition-all duration-200 border ${
        isActive
          ? "bg-blue-600/12 text-white border-white/20 shadow-md"
          : "bg-blue-600/12 text-white border-white/20 hover:text-gray-800 hover:bg-blue-50 hover:border-blue-200"
      }`}
    >
      <div className="flex items-center">
        <h2 className="text-md font-semibold">{title}</h2>
        {isActive && (
          <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>
    </div>
  );
}