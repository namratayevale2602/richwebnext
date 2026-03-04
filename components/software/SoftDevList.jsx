// components/software/SoftDevList.jsx
"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Palette,
  ShoppingCart,
  Cloud,
  Server,
  Globe,
  ArrowRight,
  Database,
  Shield,
  Zap,
  TrendingUp,
  Layers,
  Target,
  Wrench,
} from "lucide-react";
import servicesData from "@/data/softdev.json";

// Service icons mapping
const serviceIcons = {
  "custom-software-development": <Code className="h-8 w-8 text-white" />,
  "web-development": <Globe className="h-8 w-8 text-white" />,
  "mobile-app-development": <Smartphone className="h-8 w-8 text-white" />,
  "ui-ux-design": <Palette className="h-8 w-8 text-white" />,
  "ecommerce-solutions": <ShoppingCart className="h-8 w-8 text-white" />,
  "cloud-solutions": <Cloud className="h-8 w-8 text-white" />,
  "api-integration": <Database className="h-8 w-8 text-white" />,
  "maintenance-support": <Wrench className="h-8 w-8 text-white" />,
};

// Default icon if slug doesn't match
const defaultIcon = <Code className="h-8 w-8 text-white" />;

// Image paths from public folder
const serviceImages = {
  "custom-software-development": "/images/services/customsoftware.jpg",
  "web-development": "/images/services/webdeve.jpg",
  "mobile-app-development": "/images/services/mobileappdeve.png",
  "ui-ux-design": "/images/services/UiUx.png",
  "ecommerce-solutions": "/images/services/ecommercesolu.jpg",
  "cloud-solutions": "/images/services/cloudsol.jpg",
  "api-integration": "/images/services/apiintegration.png",
  "maintenance-support": "/images/services/maintenanceandsupport.png",
};

const SoftDevList = () => {
  // Convert servicesData object to array for mapping
  const services = Object.entries(servicesData).map(([slug, data]) => ({
    slug,
    ...data,
  }));

  return (
    <div className="min-h-screen bg-transparent pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#b8c7e0] mb-6">
            Software & IT Services
          </h1>
          <p className="text-xl text-[#0bc0df] max-w-3xl mx-auto">
            Comprehensive software development and IT solutions tailored to your business needs. 
            From custom software to cloud solutions, we deliver excellence.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <Link href={`/software-it-services/${service.slug}`}>
                <div className="bg-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 h-full flex flex-col">
                  {/* Service Image */}
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={serviceImages[service.slug] || serviceImages["web-development"]}
                      alt={service.label}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    
                    {/* Icon Overlay */}
                    <div className="absolute bottom-4 left-4">
                      <div className="bg-[#127cc9] p-3 rounded-xl">
                        {serviceIcons[service.slug] || defaultIcon}
                      </div>
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <h2 className="text-2xl font-bold text-[#b8c7e0] mb-3 group-hover:text-[#127cc9] transition-colors">
                      {service.label}
                    </h2>
                    
                    <p className="text-[#e5edfc] mb-4 line-clamp-3">
                      {service.hero?.description || "Professional software development services tailored to your business needs."}
                    </p>

                    {/* Key Features Preview */}
                    {service.hero?.features && (
                      <div className="mt-auto">
                        <div className="space-y-2 mb-4">
                          {service.hero.features.slice(0, 2).map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-sm text-[#0bc0df]">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#127cc9]"></div>
                              <span className="truncate">{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Learn More Link */}
                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                          <span className="text-[#127cc9] font-semibold group-hover:gap-3 transition-all flex items-center gap-2">
                            Learn More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </span>
                          <span className="text-xs text-gray-400">Software Service</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-[#127cc9]/20 to-[#07337a]/20 rounded-3xl p-12 border border-white/20">
            <h2 className="text-3xl md:text-4xl font-bold text-[#b8c7e0] mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-[#0bc0df] mb-8 max-w-2xl mx-auto">
              Let's discuss your requirements and create a custom solution that drives your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-[#0cc0e1] to-[#127cc9] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Get Free Consultation
              </Link>
              <Link
                href="/schedule-a-demo"
                className="bg-white/10 text-white border-2 border-white/20 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all hover:scale-105"
              >
                Schedule a Demo
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default SoftDevList;