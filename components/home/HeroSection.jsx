"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Sparkles,
  Target,
  TrendingUp,
  Code,
  Megaphone,
  Building,
  ChevronRight,
  Star,
  Zap,
  Globe,
  Shield,
  Cloud,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import HeroBackground from "../fixed/HeroBackground";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  // Services Data - using public folder images
  const services = [
    {
      id: 1,
      title: "Software Development",
      description:
        "Custom software solutions, web & mobile apps, and scalable platforms",
      icon: Code,
      color: "from-blue-500 to-cyan-400",
      linear:
        "linear-linear(135deg, #0cc0e1 0%, #83bfdf 50%, #137bca 100%)",
      stats: "500+ Projects",
      image: "/images/services/software-development.jpg",
    },
    {
      id: 2,
      title: "Digital Marketing",
      description:
        "SEO, social media marketing, PPC campaigns & brand strategy",
      icon: Megaphone,
      color: "from-purple-500 to-pink-500",
      linear: "linear-linear(135deg, #8b5cf6 0%, #ec4899 100%)",
      stats: "98% ROI",
      image: "/images/services/digital-marketing.jpg",
    },
    {
      id: 3,
      title: "Business Consulting",
      description:
        "Strategy development, process optimization & growth planning",
      icon: Building,
      color: "from-orange-500 to-red-500",
      linear: "linear-linear(135deg, #f97316 0%, #ef4444 100%)",
      stats: "95% Success",
      image: "/images/services/business-consulting.jpg",
    },
  ];

  // Floating images data
  const floatingImages = [
    {
      src: "/images/services/software-development.jpg",
      alt: "Software Development",
      position: "top-0 -right-8",
      size: { width: 120, height: 80 },
      color: "blue",
      delay: 0,
    },
    {
      src: "/images/services/digital-marketing.jpg",
      alt: "Digital Marketing",
      position: "-top-8 right-20",
      size: { width: 100, height: 70 },
      color: "cyan",
      delay: 0.5,
    },
    {
      src: "/images/services/business-consulting.jpg",
      alt: "Business Consulting",
      position: "bottom-8 -left-8",
      size: { width: 110, height: 75 },
      color: "purple",
      delay: 1,
    },
  ];

  // Animate counters
  useEffect(() => {
    const animation = animate(count, 100, { duration: 2 });
    return animation.stop;
  }, [count]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden"
    >
      <HeroBackground />
      <motion.div className="absolute inset-0 z-0" animate="animate" />

      <div className="absolute inset-0 z-1">
        <div className="absolute inset-0 bg-[linear-linear(rgba(255,255,255,0.02)_1px,transparent_1px),linear-linear(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-linear(ellipse_at_center,black,transparent_70%)]" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-42">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          >
            {/* Left Column - Content */}
            <div className="space-y-8 lg:space-y-12">
              <div className="space-y-6">
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-3xl text-[#e5edfc] sm:text-6xl lg:text-7xl tracking-tight"
                >
                  Transform Your Digital Vision Into Reality
                </motion.h1>

                <motion.p 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="text-lg lg:text-2xl text-gray-300 max-w-2xl leading-relaxed"
                >
                  We provide comprehensive digital solutions that blend
                  cutting-edge technology with strategic insight to drive
                  measurable business growth.
                </motion.p>
              </div>

              {/* CTA Buttons */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-6"
              >
                <Link href="/contactus">
                  <button className="group relative px-10 py-5 bg-linear-to-r from-[#0cc0e1] via-[#83bfdf] to-[#137bca] text-white font-bold rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_0_60px_rgba(12,192,225,0.5)] transform hover:-translate-y-1">
                    <div className="absolute inset-0 bg-linear-to-r from-[#137bca] to-[#0cc0e1] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <span className="relative z-10 flex items-center gap-3 text-lg">
                      Book Consultation
                      <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                    </span>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                    </div>
                  </button>
                </Link>

                <Link href="/about">
                  <button className="group px-10 py-5 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                    <span className="flex items-center gap-3">
                      <Play className="w-5 h-5" />
                      About Us
                    </span>
                  </button>
                </Link>
              </motion.div>

              {/* Stats */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-8 pt-8 border-t border-white/10"
              >
                {[
                  { value: "3000+", label: "Happy Clients", icon: Users },
                  { value: "1000+", label: "Projects", icon: Target },
                  { value: "98%", label: "Satisfaction", icon: Star },
                  { value: "24/7", label: "Support", icon: Shield },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <stat.icon className="w-5 h-5 text-blue-400" />
                      <div className="text-lg md:text-3xl font-bold bg-linear-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                        <span>{stat.value}</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-400">
                      <span>{stat.label}</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

           {/* Right Column - Single Hero Image with Floating Elements */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="relative h-[600px] flex items-center justify-center"
            >
              {/* Main Hero Image */}
              <motion.div
                animate={{
                  y: [0, -30, -15, -35, 0], // More dramatic top-bottom floating
                }}
                transition={{
                  duration: 20, // Slower for smoother movement
                  repeat: Infinity,
                  repeatType: "reverse", // Makes it go back and forth smoothly
                  ease: "easeInOut",
                  times: [0, 0.25, 0.5, 0.75, 1] // Custom timing for more natural movement
                }}
                className="relative w-full max-w-[500px] aspect-square"
              >
                {/* Glow Effects */}
                <motion.div 
                  className="absolute inset-0 bg-blue-500/30 rounded-full blur-[100px] animate-pulse"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <motion.div 
                  className="absolute inset-0 bg-cyan-500/20 rounded-full blur-[80px] animate-pulse delay-1000"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2]
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
                
                {/* Main Image Container */}
                <motion.div 
                  className="relative w-full h-full rounded-3xl overflow-hidden"
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                >
                  {/* Animated Gradient Overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent z-10"
                    animate={{
                      opacity: [0.4, 0.6, 0.4]
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-[radial-linear(circle_at_30%_20%,rgba(12,192,225,0.3),transparent_70%)]" />
                  
                  {/* Main Image */}
                  <Image
                    src="/element/element.png"
                    alt="Hero Image"
                    width={500}
                    height={700}
                    className="object-cover w-full h-full"
                    priority
                  />
                  
              
                  
                  
                </motion.div>
              </motion.div>

            
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(50px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-30px, 30px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        .animate-blob {
          animation: blob 8s infinite;
        }

        .animate-shimmer {
          animation: shimmer 2s infinite linear;
        }

        .delay-300 {
          animation-delay: 300ms;
        }

        .delay-700 {
          animation-delay: 700ms;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }
      `}</style>
    </section>
  );
};

// Helper components
const Play = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const Users = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export default HeroSection;