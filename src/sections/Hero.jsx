import React, { Suspense, useEffect, useState } from "react";
import HeroText from "../components/HeroText";
import Background from "../components/Background";
import { useMediaQuery } from "react-responsive";

// Lazy load heavy 3D elements to avoid blocking the main thread
const Hero3D = React.lazy(() => import("../components/Hero3D"));
const StarsCanvas = React.lazy(() => import("../components/StarBackground"));

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  
  // Delay loading of 3D elements to prioritize text rendering (FCP/LCP)
  const [shouldLoad3D, setShouldLoad3D] = useState(false);
  const [shouldLoadStars, setShouldLoadStars] = useState(false);
  
  useEffect(() => {
    const load3D = () => {
      setShouldLoadStars(true);
      setTimeout(() => setShouldLoad3D(true), 500);
      window.removeEventListener('mousemove', load3D);
      window.removeEventListener('touchstart', load3D);
    };

    window.addEventListener('mousemove', load3D, { once: true, passive: true });
    window.addEventListener('touchstart', load3D, { once: true, passive: true });

    return () => {
      window.removeEventListener('mousemove', load3D);
      window.removeEventListener('touchstart', load3D);
    };
  }, []);

  return (
    <section id="hero" className="relative flex items-start justify-center
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

export default Hero;