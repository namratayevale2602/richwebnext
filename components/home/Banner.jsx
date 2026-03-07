"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  
  // Array of images for the slideshow
  const images = [
    {
      src: "/banner/banner1.png",
      alt: "Digital Innovation",
      title: "Innovation That Drives Growth",
      subtitle: "Transforming ideas into digital reality"
    },
    {
      src: "/banner/banner2.png",
      alt: "Team Collaboration",
      title: "Collaborative Excellence",
      subtitle: "Building the future together"
    },
    {
      src: "/banner/banner3.png",
      alt: "Technology Solutions",
      title: "Cutting-Edge Technology",
      subtitle: "Leveraging AI for business transformation"
    },
    {
      src: "/banner/banner1.png",
      alt: "Business Strategy",
      title: "Strategic Consulting",
      subtitle: "Data-driven decisions for growth"
    },
  ];

  // Auto-advance slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setIsLoading(true);
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
      setTimeout(() => setIsLoading(false), 100);
    }, 6000);
    
    return () => clearInterval(timer);
  }, [images.length]);

  // Manual navigation
  const goToSlide = (index) => {
    setIsLoading(true);
    setCurrentImageIndex(index);
    setTimeout(() => setIsLoading(false), 100);
  };

  const nextSlide = () => {
    setIsLoading(true);
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setIsLoading(false), 100);
  };

  const prevSlide = () => {
    setIsLoading(true);
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    setTimeout(() => setIsLoading(false), 100);
  };

  const zoomAnimation = {
    initial: { scale: 1.2 },
    animate: { scale: 1 },
    transition: {
      duration: 8,
      ease: "easeOut",
    }
  };

  const fadeInAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.8 }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        {images.map((image, index) => (
          index === currentImageIndex && (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 1 }}
              animate={{ opacity: 2 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
            >
              {/* Image with Zoom */}
              <motion.div
                className="relative w-full h-full"
                {...zoomAnimation}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                  quality={90}
                  sizes="100vw"
                  onLoad={() => setIsLoading(false)}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
              </motion.div>

              {/* Text Content */}
              <motion.div 
                className="absolute inset-0 z-10 flex items-center justify-center px-4 sm:px-6 lg:px-8"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 1.2,
                  ease: "easeOut",
                  delay: 0.2
                }}
              >
                <div className="container mx-auto">
                  <div className="max-w-3xl lg:max-w-4xl mx-auto text-center text-white">
                    {/* Title */}
                    <motion.h1
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2"
                    >
                      {image.title}
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 mb-8 sm:mb-10 max-w-2xl mx-auto px-4"
                    >
                      {image.subtitle}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.8 }}
                      className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
                    >
                      <Link href="/contact" className="w-full sm:w-auto">
                        <button className="w-full sm:w-auto group relative px-6 sm:px-8 py-3 sm:py-4 bg-white text-black hover:text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.5)] text-sm sm:text-base">
                          <span className="relative z-10">Get Started</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </button>
                      </Link>
                      
                      <Link href="/portfolio" className="w-full sm:w-auto">
                        <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-transparent border-2 border-white text-white hover:bg-white hover:text-black font-semibold rounded-full transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] text-sm sm:text-base">
                          View Our Work
                        </button>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

      

      {/* Navigation Dots - Responsive */}
      <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2 sm:gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${
              index === currentImageIndex
                ? "w-6 sm:w-8 h-1.5 sm:h-2 bg-white"
                : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/50 hover:bg-white/80"
            } rounded-full`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows - Hidden on mobile, visible on larger screens */}
      <button
        onClick={prevSlide}
        className="hidden sm:flex absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-20 w-8 h-8 md:w-12 md:h-12 items-center justify-center rounded-full bg-black/30 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
        aria-label="Previous slide"
      >
        <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button
        onClick={nextSlide}
        className="hidden sm:flex absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-20 w-8 h-8 md:w-12 md:h-12 items-center justify-center rounded-full bg-black/30 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
        aria-label="Next slide"
      >
        <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Scroll Indicator - Hidden on mobile */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 z-20 hidden md:block"
      >
        <div className="flex items-center gap-2 text-white/60 text-xs sm:text-sm">
          <span>Scroll</span>
          <svg className="w-3 h-3 sm:w-4 sm:h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
          </svg>
        </div>
      </motion.div>

      {/* Mobile Swipe Hint */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 sm:hidden">
        <div className="flex items-center gap-1 text-white/40 text-xs">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          <span>Swipe</span>
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Banner;