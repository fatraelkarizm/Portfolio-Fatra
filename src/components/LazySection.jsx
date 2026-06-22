/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react";
import { isTrustedUserEvent } from "../utils/trustedEvent";

const LazySection = ({ loader, minHeight = "800px" }) => {
  const ref = useRef(null);
  const [Component, setComponent] = useState(null);
  const userEngagedRef = useRef(false);

  useEffect(() => {
    const engage = (event) => {
      if (!isTrustedUserEvent(event)) return;
      userEngagedRef.current = true;
    };

    window.addEventListener("scroll", engage, { passive: true });
    window.addEventListener("pointerdown", engage, { passive: true });

    return () => {
      window.removeEventListener("scroll", engage);
      window.removeEventListener("pointerdown", engage);
    };
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (!node || Component) return;

    const loadIfReady = () => {
      if (!userEngagedRef.current) return;

      const rect = node.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;

      if (inView) {
        loader().then((mod) => setComponent(() => mod.default));
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) loadIfReady();
      },
      { rootMargin: "0px", threshold: 0.01 }
    );

    observer.observe(node);

    const onEngage = (event) => {
      if (!isTrustedUserEvent(event)) return;
      userEngagedRef.current = true;
      loadIfReady();
    };

    window.addEventListener("scroll", onEngage, { passive: true });
    window.addEventListener("pointerdown", onEngage, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onEngage);
      window.removeEventListener("pointerdown", onEngage);
    };
  }, [loader, Component]);

  return (
    <div ref={ref} className="lazy-section" style={{ minHeight }}>
      {Component ? <Component /> : null}
    </div>
  );
};

export default LazySection;
