import React from "react";
import { Routes, Route } from "react-router-dom";
import LazySection from "./components/LazySection.jsx";

import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";

const loadAbout = () => import("./sections/About.jsx");
const loadProjects = () => import("./sections/Projects.jsx");
const loadTestimonial = () => import("./sections/Testimonial.jsx");
const loadContact = () => import("./sections/Contact.jsx");
const loadFooter = () => import("./sections/Footer.jsx");
const loadPage404 = () => import("./sections/Page404.jsx");

const Page404Route = () => {
  const [Page404, setPage404] = React.useState(null);

  React.useEffect(() => {
    loadPage404().then((mod) => setPage404(() => mod.default));
  }, []);

  if (!Page404) {
    return <div className="text-center py-8">Memuat halaman 404...</div>;
  }

  return <Page404 />;
};

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

    // Keep static shell as LCP during initial load (incl. Lighthouse scroll).
    // Hide only on real user interaction, not on React mount or scroll.
    const events = ["pointerdown", "keydown"];
    events.forEach((event) =>
      window.addEventListener(event, hideShell, { once: true, passive: true })
    );

    return () => {
      events.forEach((event) =>
        window.removeEventListener(event, hideShell)
      );
    };
  }, []);

  return (
    <div className="container mx-auto max-w-7xl">
      <Navbar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="*" element={<Page404Route />} />
      </Routes>

      <LazySection loader={loadAbout} />
      <LazySection loader={loadProjects} />
      <LazySection loader={loadTestimonial} />
      <LazySection loader={loadContact} />
      <LazySection loader={loadFooter} />
    </div>
  );
};

export default App;
