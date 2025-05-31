// Import Navbar
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Projects from "./sections/Projects";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import About from "./sections/About";

const App = () => {
  return (
    <div className="container mx-auto max-w-7xl"> 
    
    {/* Navbar */}
    <Navbar/>

    {/* Hero section */}
    <Hero/>

    {/*about section*/}
    <About />

    {/*projects section*/}
     <Projects />

    {/*testimonial section*/}
    <Testimonial />

    {/*contact section*/}
    <Contact />



    </div>
  );
};

export default App;
