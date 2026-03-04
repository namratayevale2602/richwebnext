// app/resources/how-to-guide/page.js
"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, FileText } from "lucide-react";
import howToGuideData from "@/data/howToGuide.json";
import Testimonials from "@/components/fixed/Testimonials";
import Enquiry from "@/components/form/Enquiry";

// Skeleton component for loading states
const Skeleton = ({ className }) => (
  <div className={`bg-gray-200 animate-pulse rounded ${className}`}></div>
);

const HowToGuide = () => {
  const [introduction, setIntroduction] = useState([]);
  const [magazines, setMagazines] = useState([]);
  const [samples, setSamples] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load data from JSON
    setIntroduction(howToGuideData.brochures || []);
    setMagazines(howToGuideData.magzines || []); // Note: 'magzines' with 'z' from JSON
    setSamples(howToGuideData.samples || []);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen pt-40">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl py-8">
          <div className="text-center mb-12">
            <Skeleton className="h-12 w-96 mx-auto mb-4" />
            <Skeleton className="h-4 w-full max-w-4xl mx-auto" />
            <Skeleton className="h-4 w-5/6 max-w-4xl mx-auto mt-2" />
          </div>
          <div className="space-y-12">
            {[1, 2].map((i) => (
              <Skeleton key={i} className="h-64 w-full" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-40">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl py-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="font-semibold text-3xl sm:text-4xl text-[#b8c7e0] mt-10 mb-6">
            Our Resources
          </h1>

          <p className="text-[#e5edfc] text-lg leading-relaxed max-w-4xl mx-auto">
            {introduction[0]?.introduction ||
              "Explore our comprehensive resources to help your business grow and succeed."}
          </p>
        </div>

        {/* Magazines/Downloads Section */}
        {magazines.length > 0 && (
          <div className="space-y-12 mb-16">
            {magazines.map((magazine) => (
              <Download
                key={magazine.id}
                title={magazine.title}
                subtitle={magazine.subtitle}
                description={magazine.description}
                document={magazine.document}
                image={magazine.image}
              />
            ))}
          </div>
        )}

        {/* SMS Templates Section */}
        {samples.length > 0 && (
          <div className="py-12">
            <div className="text-center mb-12">
              <h1 className="font-semibold text-3xl sm:text-4xl text-[#b8c7e0] mb-6">
                Ready-to-Use Bulk SMS Templates for Every Industry
              </h1>
              <p className="text-[#e5edfc] text-lg leading-relaxed max-w-4xl mx-auto">
                Our templates simplify the process of creating impactful messages,
                saving you time and effort while ensuring your campaigns resonate
                with your target audience.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {samples.map((sample) => (
                <Sample
                  key={sample.id}
                  title={sample.title}
                  description={sample.description}
                  link={sample.link}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      <Testimonials />
      <Enquiry />
    </div>
  );
};

export default HowToGuide;

// Download Component
export function Download({ title, subtitle, description, document, image }) {
  return (
    <div className="bg-transparent rounded-2xl shadow-lg border border-white/20 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-8 p-8">
        <div className="w-full lg:w-1/4 flex justify-center">
          <Image
            src={image}
            width={200}
            height={250}
            alt={title}
            className="rounded-lg shadow-md object-cover"
          />
        </div>

        <div className="w-full lg:w-3/4">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#b8c7e0] mb-2">
            {title}
          </h1>
          {subtitle && (
            <h2 className="text-xl text-[#0bc0df] font-semibold mb-4">
              {subtitle}
            </h2>
          )}
          <p className="text-[#e5edfc] text-lg leading-relaxed mb-6">
            {description}
          </p>
          <Link
            href={document}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-950 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
          >
            <FileText className="text-lg" />
            Download PDF
          </Link>
        </div>
      </div>
    </div>
  );
}

// Sample Component
export function Sample({ title, description, link }) {
  return (
    <div className="bg-white/12 hover:from-blue-950 hover:to-blue-900 hover:text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-white/20 cursor-pointer group">
      <div className="flex flex-col h-full">
        <h2 className="card-title text-xl font-bold text-[#b8c7e0] mb-4">
          {title}
        </h2>
        <p className="text-[#e5edfc] leading-relaxed flex-grow mb-6">
          {description}
        </p>

        <div className="flex flex-col items-center space-y-4 mt-auto">
          <ArrowDown className="text-2xl text-blue-600 group-hover:text-white animate-bounce" />
          <Link
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-sky-700 hover:bg-sky-800 text-white px-4 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2"
          >
            <FileText />
            Download Sample PDF
          </Link>
        </div>
      </div>
    </div>
  );
}