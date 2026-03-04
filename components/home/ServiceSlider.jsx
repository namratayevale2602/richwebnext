"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  MessageSquare,
  Phone,
  Smartphone,
  Megaphone,
  Bot,
  Zap,
  Code,
  Palette,
  AlertCircle,
  PhoneCall,
  Mail,
  Building,
} from "lucide-react";

// Import assets - adjust paths based on your Next.js public folder structure
const alertsystems = "/productsimg/alertsystem.png";
const bulkemails = "/productsimg/bulkvoiece.png";
const bulksmss = "/productsimg/rechservises.png";
const bulkvoicee = "/productsimg/bulkvoiece.png";
const designdevelopementt = "/productsimg/designdevelopementt.png";
const digitalautomationn = "/productsimg/digitalautomation.png";
const graphicDesignn = "/productsimg/graphicDesignn.png";
const ivrr = "/productsimg/ivrsystem.png";
const outdoormarketingg = "/productsimg/outdoormarketingg.png";
const whatsappchatbots = "/productsimg/whatsAppchatbot.png";
const whatsappservices = "/productsimg/whatsappservices.png";
const designmarketingg = "/productsimg/designmarketingg.png";
const digitalmarketing = "/productsimg/digitalmarketing.png";

// For audio files in Next.js
const audioFile = "/sounds/flipcard.mp3";

const ServiceSlider = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasPlayedIntroSound, setHasPlayedIntroSound] = useState(false);
  const [isAudioReady, setIsAudioReady] = useState(false);
  const autoPlayRef = useRef(null);
  const audioRef = useRef(null);
  const componentRef = useRef(null);
  const observerRef = useRef(null);
  const touchStartX = useRef(0);
  const cardsPerView = 5;

  // Initialize audio
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        audioRef.current = new Audio(audioFile);
        audioRef.current.volume = 0.3;
        audioRef.current.preload = "auto";
        setIsAudioReady(true);
      } catch (error) {
        console.log("Audio initialization failed:", error);
        setIsAudioReady(false);
      }
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  // Intersection Observer
  useEffect(() => {
    if (!componentRef.current) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting);

        if (entry.isIntersecting && !hasPlayedIntroSound && isAudioReady) {
          setTimeout(() => {
            try {
              if (audioRef.current) {
                audioRef.current.currentTime = 0;
                audioRef.current.volume = 0.2;
                audioRef.current
                  .play()
                  .then(() => {
                    setHasPlayedIntroSound(true);
                  })
                  .catch((error) => {
                    console.log("Intro audio play failed:", error);
                    setHasPlayedIntroSound(true);
                  });
              }
            } catch (error) {
              console.log("Intro audio error:", error);
              setHasPlayedIntroSound(true);
            }
          }, 500);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
      }
    );

    observerRef.current.observe(componentRef.current);

    return () => {
      if (observerRef.current && componentRef.current) {
        observerRef.current.unobserve(componentRef.current);
      }
    };
  }, [hasPlayedIntroSound, isAudioReady]);

  // Products data with your images
  const productsData = {
    sectionTitle: "Our Digital Services",
    sectionDescription: "Comprehensive Solutions for Modern Business Needs",
    products: [
      {
        id: 1,
        title: "Bulk SMS",
        product_name: "bulk-sms",
        description:
          "Reliable bulk SMS services for marketing campaigns, alerts, and notifications. Reach thousands instantly with our robust SMS platform.",
        image: bulksmss,
        icon: MessageSquare,
        category: "Communication",
        slug: "bulk-sms",
      },
      {
        id: 2,
        title: "Bulk Voice",
        product_name: "bulk-voice",
        description:
          "Professional bulk voice messaging services for customer engagement, alerts, and marketing campaigns with high delivery rates.",
        image: bulkvoicee,
        icon: Phone,
        category: "Communication",
        slug: "bulk-voice",
      },
      {
        id: 3,
        title: "WhatsApp Services",
        product_name: "whatsapp-services",
        description:
          "Official WhatsApp Business API services for marketing, customer support, and automated messaging with high engagement rates.",
        image: whatsappservices,
        icon: Smartphone,
        category: "Communication",
        slug: "whatsapp-services",
      },
      {
        id: 4,
        title: "Digital Marketing",
        product_name: "digital-marketing",
        description:
          "Comprehensive digital marketing services including SEO, social media marketing, PPC, and content marketing to grow your business online.",
        image: digitalmarketing,
        icon: Megaphone,
        category: "Marketing",
        slug: "digital-marketing",
      },
      {
        id: 5,
        title: "WhatsApp Chatbot",
        product_name: "whatsapp-chatbot",
        description:
          "Intelligent WhatsApp chatbots for customer service, lead generation, and automated conversations. 24/7 customer support solutions.",
        image: whatsappchatbots,
        icon: Bot,
        category: "Automation",
        slug: "whatsapp-chatbot",
      },
      {
        id: 6,
        title: "Digital Automation",
        product_name: "digital-automation",
        description:
          "Advanced automation solutions for business processes, workflow optimization, and operational efficiency improvement.",
        image: digitalautomationn,
        icon: Zap,
        category: "Automation",
        slug: "digital-automation",
      },
      {
        id: 7,
        title: "Design & Development",
        product_name: "design-development",
        description:
          "Professional website design, web development, and mobile app development services to establish your strong digital presence.",
        image: designdevelopementt,
        icon: Code,
        category: "Development",
        slug: "design-development",
      },
      {
        id: 8,
        title: "Graphic Design",
        product_name: "graphic-design",
        description:
          "Professional graphic design services including logos, branding, marketing materials, and digital graphics for your business.",
        image: graphicDesignn,
        icon: Palette,
        category: "Creative",
        slug: "graphic-design",
      },
      {
        id: 9,
        title: "Alert System",
        product_name: "alert-system",
        description:
          "Custom alert and notification systems for businesses. Real-time alerts via SMS, voice, email, and push notifications.",
        image: alertsystems,
        icon: AlertCircle,
        category: "Automation",
        slug: "alert-system",
      },
      {
        id: 10,
        title: "IVR System",
        product_name: "ivr-system",
        description:
          "Professional IVR system development for call centers and businesses. Automate customer interactions and improve call management.",
        image: ivrr,
        icon: PhoneCall,
        category: "Communication",
        slug: "ivr-system",
      },
      {
        id: 11,
        title: "Bulk Email",
        product_name: "bulk-email",
        description:
          "Professional bulk email marketing services for newsletters, promotions, and customer engagement campaigns with high deliverability rates.",
        image: bulkemails,
        icon: Mail,
        category: "Marketing",
        slug: "bulk-email",
      },
      {
        id: 12,
        title: "Outdoor Marketing",
        product_name: "outdoor-marketing",
        description:
          "Comprehensive outdoor marketing services including hoardings, billboards, transit ads, and OOH advertising for maximum brand visibility.",
        image: outdoormarketingg,
        icon: Building,
        category: "Marketing",
        slug: "outdoor-marketing",
      },
    ],
  };

  // Handle card click for navigation
  const handleCardClick = useCallback((product, e) => {
    if (isAnimating || e.target.closest('button')) {
      return;
    }
    router.push(`/products/${product.slug}`);
  }, [router, isAnimating]);

  // Get visible cards for the carousel
  const getVisibleCards = useCallback(() => {
    const total = productsData.products.length;
    if (total === 0) return [];

    const cards = [];
    const halfView = Math.floor(cardsPerView / 2);

    for (let i = -halfView; i <= halfView; i++) {
      let index = currentIndex + i;
      if (index < 0) index = total + index;
      if (index >= total) index = index - total;
      cards.push({
        ...productsData.products[index],
        position: i,
        isCenter: i === 0,
      });
    }

    return cards;
  }, [currentIndex, productsData.products]);

  const visibleCards = getVisibleCards();

  const playSlideSound = useCallback(() => {
    if (audioRef.current && isInView) {
      try {
        audioRef.current.currentTime = 0;
        audioRef.current.volume = 0.3;
        audioRef.current.play().catch((error) => {
          console.log("Slide audio play failed:", error);
        });
      } catch (error) {
        console.log("Slide audio error:", error);
      }
    }
  }, [isInView]);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    playSlideSound();

    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === productsData.products.length - 1 ? 0 : prev + 1
      );
      setIsAnimating(false);
    }, 300);
  }, [isAnimating, productsData.products.length, playSlideSound]);

  const prevSlide = useCallback(() => {
    if (isAnimating) return;

    setIsAnimating(true);
    playSlideSound();

    setTimeout(() => {
      setCurrentIndex((prev) =>
        prev === 0 ? productsData.products.length - 1 : prev - 1
      );
      setIsAnimating(false);
    }, 300);
  }, [isAnimating, productsData.products.length, playSlideSound]);

  const goToSlide = useCallback(
    (index) => {
      if (isAnimating || index === currentIndex) return;

      setIsAnimating(true);
      playSlideSound();

      setTimeout(() => {
        setCurrentIndex(index);
        setIsAnimating(false);
      }, 300);
    },
    [isAnimating, currentIndex, playSlideSound]
  );

  // Touch and mouse handlers
  const handleTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e) => {
      if (!touchStartX.current) return;

      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX.current - touchEndX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }

      touchStartX.current = 0;
    },
    [nextSlide, prevSlide]
  );

  const handleMouseDown = useCallback(
    (e) => {
      touchStartX.current = e.clientX;

      const handleMouseMove = (e) => {
        if (!touchStartX.current) return;
        e.preventDefault();
      };

      const handleMouseUp = (e) => {
        if (!touchStartX.current) return;

        const touchEndX = e.clientX;
        const diff = touchStartX.current - touchEndX;

        if (Math.abs(diff) > 50) {
          if (diff > 0) {
            nextSlide();
          } else {
            prevSlide();
          }
        }

        touchStartX.current = 0;
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    },
    [nextSlide, prevSlide]
  );

  // Auto-play
  useEffect(() => {
    if (isAutoPlaying && !isAnimating && isInView) {
      autoPlayRef.current = setInterval(() => {
        nextSlide();
      }, 5000); // Changed to 5 seconds for better UX
    } else if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, isAnimating, nextSlide, isInView]);

  const toggleAutoPlay = useCallback(() => {
    setIsAutoPlaying(!isAutoPlaying);
  }, [isAutoPlaying]);

  if (!productsData.products || productsData.products.length === 0) {
    return (
      <section className="relative py-16 bg-transparent overflow-hidden">
        <div className="text-center text-white">No products available</div>
      </section>
    );
  }

  return (
    <section
      ref={componentRef}
      className="relative py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {productsData.sectionTitle}
          </h1>
          <p className="text-xl text-blue-400 max-w-3xl mx-auto">
            {productsData.sectionDescription}
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-20 p-3 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 group"
          >
            <div className="w-6 h-6 text-white group-hover:scale-110 transition-transform">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </div>
          </button>

          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-20 p-3 rounded-full bg-black/50 backdrop-blur-sm hover:bg-black/70 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 group"
          >
            <div className="w-6 h-6 text-white group-hover:scale-110 transition-transform">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>
          </button>

          {/* Cards Container */}
          <div
            className="flex items-center justify-center min-h-[600px] md:min-h-[700px] px-8 md:px-12"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
          >
            <div className="flex items-center justify-center gap-4 md:gap-8">
              {visibleCards.map((product, index) => {
                const Icon = product.icon;
                const position = product.position;
                const isCenter = product.isCenter;

                // Calculate scale and opacity based on position
                const absPosition = Math.abs(position);
                const scale = 1 - absPosition * 0.15;
                const opacity = 1 - absPosition * 0.25;
                const zIndex = 10 - absPosition;

                return (
                  <div
                    key={`${product.id}-${index}`}
                    className={`
                      relative transition-all duration-500 ease-out
                      ${isAnimating ? "transition-all duration-300" : ""}
                      ${isCenter ? "cursor-pointer" : "cursor-pointer"}
                      group
                    `}
                    style={{
                      transform: `scale(${scale})`,
                      opacity: opacity,
                      zIndex: zIndex,
                      width: isCenter ? "320px" : "220px",
                      maxWidth: isCenter ? "320px" : "220px",
                      transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                    onClick={(e) => handleCardClick(product, e)}
                  >
                    {/* Card with Image and Text Overlay */}
                    <div
                      className={`
                      relative rounded-2xl overflow-hidden
                      ${isCenter ? "h-[500px] shadow-2xl" : "h-[400px] shadow-xl"}
                      transition-all duration-500
                      group-hover:shadow-blue-500/20
                    `}
                    >
                      {/* Product Image */}
                      <div className="absolute inset-0 w-full h-full">
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          priority={isCenter}
                          sizes={isCenter ? "320px" : "220px"}
                        />
                        
                    
                      </div>

                      {/* Text Content - Always at bottom */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-500 translate-y-0">
                      
                        {/* Title */}
                        <h3
                          className={`
                            font-bold mb-2 transition-all duration-300
                            ${isCenter ? "text-2xl" : "text-lg"}
                            group-hover:text-blue-400
                          `}
                        >
                          {product.title}
                        </h3>
                        
                        {/* Description - Only visible for center card or on hover */}
                        <div className={`
                          transition-all duration-500 overflow-hidden
                          ${isCenter 
                            ? "max-h-20 opacity-100" 
                            : "max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100"
                          }
                        `}>
                          <p className="text-sm text-gray-200 line-clamp-2">
                            {product.description}
                          </p>
                          
                          {/* Category Tag */}
                          <div className="mt-2">
                            <span className="text-xs px-2 py-1 bg-blue-500/20 rounded-full text-blue-300">
                              {product.category}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Hover effect border */}
                      <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400/50 rounded-2xl transition-all duration-300" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Auto-play Toggle Button */}
        <div className="flex justify-center mt-8">
          <button
            onClick={toggleAutoPlay}
            className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300"
          >
            {isAutoPlaying ? "Pause Auto-play" : "Start Auto-play"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServiceSlider;