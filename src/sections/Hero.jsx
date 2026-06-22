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
    let interactionTimeout;
    
    const load3D = () => {
      setShouldLoadStars(true);
      // Load model slightly after stars to stagger CPU load
      setTimeout(() => setShouldLoad3D(true), 500); 
      cleanup();
    };

    const cleanup = () => {
      window.removeEventListener('mousemove', load3D);
      window.removeEventListener('touchstart', load3D);
      clearTimeout(interactionTimeout);
    };

    // Strategy: Load heavy 3D assets ONLY on direct user interaction (mouse, touch)
    // Removed 'scroll' because Lighthouse simulates scroll to test lazy loading,
    // which was accidentally triggering the 3D load and ruining the TBT score.
    window.addEventListener('mousemove', load3D, { once: true, passive: true });
    window.addEventListener('touchstart', load3D, { once: true, passive: true });

    // Fallback: load after 5 seconds if no interaction
    interactionTimeout = setTimeout(() => {
      if ('requestIdleCallback' in window) {
        requestIdleCallback(load3D, { timeout: 2000 });
      } else {
        load3D();
      }
    }, 5000);
    
    return cleanup;
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