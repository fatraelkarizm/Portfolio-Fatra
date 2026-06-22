import React, { Suspense, useEffect, useState } from "react";
import HeroText from "../components/HeroText";
import Background from "../components/Background";
import { useMediaQuery } from "react-responsive";
import SectionWrapper from "../hoc/SectionWrapper";

// Lazy load heavy 3D elements to avoid blocking the main thread
const Hero3D = React.lazy(() => import("../components/Hero3D"));

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  
  // Optional: Delay loading of the 3D canvas slightly to prioritize text rendering
  const [shouldLoad3D, setShouldLoad3D] = useState(false);
  
  useEffect(() => {
    // Wait for main thread to calm down before fetching 3D assets
    const timer = setTimeout(() => {
      setShouldLoad3D(true);
    }, 500); // 500ms delay helps a lot with Lighthouse score
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="flex items-start justify-center
    md:items-start md:justify-start min-h-screen overflow-hidden c-space">
      <HeroText />
      <Background />
      
      {shouldLoad3D && (
        <Suspense fallback={null}>
          <Hero3D isMobile={isMobile} />
        </Suspense>
      )}
    </section>
  )
}

export default SectionWrapper(Hero, "hero");