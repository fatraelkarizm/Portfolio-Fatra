/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from "react";

const LazySection = ({ loader, rootMargin = "300px" }) => {
  const ref = useRef(null);
  const [Component, setComponent] = useState(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          loader().then((mod) => setComponent(() => mod.default));
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [loader, rootMargin]);

  return (
    <div ref={ref} className="lazy-section">
      {Component ? <Component /> : null}
    </div>
  );
};

export default LazySection;
