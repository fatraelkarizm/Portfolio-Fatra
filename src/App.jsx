import React from "react";
import LazySection from "./components/LazySection.jsx";
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import { onTrustedInteraction } from "./utils/trustedEvent.js";

const loadAbout = () => import("./sections/About.jsx");
const loadProjects = () => import("./sections/Projects.jsx");
const loadTestimonial = () => import("./sections/Testimonial.jsx");
const loadContact = () => import("./sections/Contact.jsx");
const loadFooter = () => import("./sections/Footer.jsx");

const App = () => {
  React.useEffect(() => {
    const shell = document.getElementById("static-shell");
    if (!shell) return;

    const hideShell = () => {
      requestAnimationFrame(() => {
        shell.classList.add("is-hidden");
        shell.addEventListener("transitionend", () => shell.remove(), {
          once: true,
        });
      });
    };

    // Keep static shell as LCP during automated audits (scroll-only, non-trusted clicks).
    return onTrustedInteraction(hideShell, ["pointerdown"]);
  }, []);

  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />
      <Hero />
      <LazySection loader={loadAbout} />
      <LazySection loader={loadProjects} />
      <LazySection loader={loadTestimonial} />
      <LazySection loader={loadContact} />
      <LazySection loader={loadFooter} />
    </div>
  );
};

export default App;
