"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const VideoLoader = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isVideoEnded, setIsVideoEnded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure video plays
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.log("Video autoplay failed:", error);
      });
    }

    // Set minimum loading time (optional)
    const minLoadTime = setTimeout(() => {
      if (isVideoEnded) {
        setIsLoading(false);
        onLoadingComplete?.();
      }
    }, 2000);

    return () => clearTimeout(minLoadTime);
  }, [isVideoEnded, onLoadingComplete]);

  const handleVideoEnd = () => {
    setIsVideoEnded(true);
    setIsLoading(false);
    onLoadingComplete?.();
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0a]"
        >
          {/* Video Container */}
          <div className="relative w-full h-full flex items-center justify-center">
            <video
              ref={videoRef}
              src="/logo/loader_logo_build.mp4"
              className="w-full h-full object-contain"
              autoPlay
              muted
              playsInline
              onEnded={handleVideoEnd}
              onError={(e) => {
                console.log("Video error:", e);
                handleVideoEnd(); // Proceed even if video fails
              }}
            />
            
           
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoLoader;