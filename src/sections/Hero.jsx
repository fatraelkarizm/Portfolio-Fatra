import React, { useEffect, useState } from "react";
import HeroText from "../components/HeroText";
import Background from "../components/Background";
import { isTrustedUserEvent } from "../utils/trustedEvent";

const Hero = () => {
  const [StarsCanvas, setStarsCanvas] = useState(null);
  const [Hero3D, setHero3D] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 853px)").matches;
    if (isMobile) return;

    const load3D = (event) => {
      if (event && !isTrustedUserEvent(event)) return;

      setIsMobile(false);

      import("../components/StarBackground").then((mod) => {
        setStarsCanvas(() => mod.default);
      });

      window.setTimeout(() => {
        import("../components/Hero3D").then((mod) => {
          setHero3D(() => mod.default);
        });
      }, 500);

      window.removeEventListener("mousemove", load3D);
      window.removeEventListener("touchstart", load3D);
    };

    window.addEventListener("mousemove", load3D, { once: true, passive: true });
    window.addEventListener("touchstart", load3D, { once: true, passive: true });

    return () => {
      window.removeEventListener("mousemove", load3D);
      window.removeEventListener("touchstart", load3D);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative flex w-full items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden"
    >
      <div className="relative z-10 w-full max-w-7xl mx-auto c-space">
        <HeroText />
      </div>
      <Background />
      {StarsCanvas ? <StarsCanvas /> : null}
      {Hero3D ? <Hero3D isMobile={isMobile} /> : null}
    </section>
  );
};

export default Hero;
