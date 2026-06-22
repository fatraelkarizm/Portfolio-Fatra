import React, { Suspense, useEffect, useState } from "react";
import HeroText from "../components/HeroText";
import Background from "../components/Background";
import { useMediaQuery } from "react-responsive";
import SectionWrapper from "../hoc/SectionWrapper";

// Lazy load heavy 3D elements to avoid blocking the main thread
const Hero3D = React.lazy(() => import("../components/Hero3D"));
const StarsCanvas = React.lazy(() => import("../components/StarBackground"));

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  
  // Delay loading of 3D elements to prioritize text rendering (FCP/LCP)
  const [shouldLoad3D, setShouldLoad3D] = useState(false);
  const [shouldLoadStars, setShouldLoadStars] = useState(false);
  
  useEffect(() => {
    // Load stars first (lighter) after a short delay
    const starsTimer = requestIdleCallback 
      ? requestIdleCallback(() => setShouldLoadStars(true), { timeout: 1000 })
      : setTimeout(() => setShouldLoadStars(true), 800);
    
    // Load 3D model much later to not compete with LCP
    const modelTimer = setTimeout(() => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => setShouldLoad3D(true), { timeout: 3000 });
      } else {
        setShouldLoad3D(true);
      }
    }, 2000); // 2s delay gives main thread time to settle
    
    return () => {
      if (typeof starsTimer === 'number' && 'cancelIdleCallback' in window) {
        cancelIdleCallback(starsTimer);
      } else {
        clearTimeout(starsTimer);
      }
      clearTimeout(modelTimer);
    };
  }, []);

  return (
    <section className="flex items-start justify-center
    md:items-start md:justify-start min-h-screen overflow-hidden c-space">
      <HeroText />
      <Background />
      
      {shouldLoadStars && (
        <Suspense fallback={null}>
          <StarsCanvas />
        </Suspense>
      )}
      
      {shouldLoad3D && (
        <Suspense fallback={null}>
          <Hero3D isMobile={isMobile} />
        </Suspense>
      )}
    </section>
  )
}

export default SectionWrapper(Hero, "hero");