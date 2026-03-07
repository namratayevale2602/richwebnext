"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import VideoLoader from "./VideoLoader";

export default function VideoLoaderWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  useEffect(() => {
    setIsMounted(true);
    
    // If not homepage, don't show loader
    if (!isHomepage) {
      setIsLoading(false);
    }
  }, [isHomepage]);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Show nothing during SSR to avoid hydration mismatch
  if (!isMounted) {
    return (
      <div style={{ visibility: 'hidden' }}>{children}</div>
    );
  }

  // If not homepage, show content immediately
  if (!isHomepage) {
    return <>{children}</>;
  }

  // On homepage, show loader then content
  return (
    <>
      {isLoading && <VideoLoader onLoadingComplete={handleLoadingComplete} />}
      <div style={{ display: isLoading ? 'none' : 'block' }}>
        {children}
      </div>
    </>
  );
}