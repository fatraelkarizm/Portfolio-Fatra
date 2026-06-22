/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

export const FlipWords = ({
  words,
  duration = 3000,
  className
}) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const delay = hasStarted ? duration : 5000; // Delay first flip to prevent early LCP recalculation
    const timer = setTimeout(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
      setHasStarted(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [wordIndex, words, duration, hasStarted]);

  const currentWord = words[wordIndex];

  return (
    <span
      key={currentWord}
      className={twMerge(
        "z-10 inline-block animate-flip-word text-left",
        className
      )}
    >
      {currentWord}
    </span>
  );
};
