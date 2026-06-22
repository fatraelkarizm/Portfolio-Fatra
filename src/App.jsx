import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// --- Komponen yang dimuat secara EAGERLY (langsung) ---
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";

// --- Komponen yang di-lazy-load ---
const About = React.lazy(() => import("./sections/About.jsx"));
const Projects = React.lazy(() => import("./sections/Projects.jsx"));
const Testimonial = React.lazy(() => import("./sections/Testimonial.jsx"));
const Contact = React.lazy(() => import("./sections/Contact.jsx"));
const Footer = React.lazy(() => import("./sections/Footer.jsx"));
const Page404 = React.lazy(() => import("./sections/Page404.jsx"));

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl">
      {/* Navbar */}
      <Navbar />

      <Routes>
        {/* Hero Section */}
        <Route path="/" element={<Hero />} />
        <Route
          path="*" 
          element={
            <Suspense fallback={<div className="text-center py-8">Memuat halaman 404...</div>}>
              <Page404 />
            </Suspense>
          }
        />
      </Routes>

      <div className="lazy-section">
        <Suspense fallback={null}>
          <About />
        </Suspense>
      </div>

      <div className="lazy-section">
        <Suspense fallback={null}>
          <Projects />
        </Suspense>
      </div>

      <div className="lazy-section">
        <Suspense fallback={null}>
          <Testimonial />
        </Suspense>
      </div>

      <div className="lazy-section">
        <Suspense fallback={null}>
          <Contact />
        </Suspense>
      </div>

      <div className="lazy-section">
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </div>
    </div>
  );
};

export default App;
