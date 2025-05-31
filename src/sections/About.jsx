import { useState } from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { services } from "../constants"; 
import { SectionWrapper } from "../hoc"; 
import { fadeIn, textVariant } from "../utils/motion"; 

import Organization from "./Organization";
import Experience from "./Experience"; 
import Achievements from "./Achievements";
import Certifications from "./Certifications";

import { styles } from "../styles";

const ServiceCard = ({ index, title, icon, onClick }) => (
  <Tilt 
    className='w-full max-w-xs sm:w-[250px] mx-auto' 
    tiltMaxAngleX={45}
    tiltMaxAngleY={45}
    scale={1.05}
    transitionSpeed={450}
    perspective={1000}
    glareEnable={true}
    glareMaxOpacity={0.8}
    glareColor="#ffffff"
    glarePosition="bottom"
  >
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      onClick={onClick}
      style={{ cursor: 'pointer' }}
    >
      <div
        className='bg-tertiary rounded-[20px] py-5 px-6 sm:px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt={title}
          className='w-32 h-32 object-contain'
        />
        <h3 
          className='text-white text-lg sm:text-[20px] font-bold text-center'
        >
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);


const About = () => {
  const [showTimeline, setShowTimeline] = useState('learning'); 

  const handleServiceClick = (clickedTitle) => { 
    
    if (clickedTitle === "Organizational Experiences") { 
      // Toggle untuk Organizational Experiences
      setShowTimeline(prev => (prev === 'organization' ? null : 'organization'));

    } 
    else if (clickedTitle === "Coding Journey") { 
      // Toggle untuk Learning Experiences (melalui Fullstack Web Developer card)
      setShowTimeline(prev => (prev === 'learning' ? null : 'learning'));
     
    }
    else if (clickedTitle === "Achievements") { 
      // Toggle untuk Achievements
      setShowTimeline(prev => (prev === 'achievements' ? null : 'achievements'));

    }
    else if (clickedTitle === "Certifications") {
      // Toggle untuk Certifications
      setShowTimeline(prev => (prev === 'certifications' ? null : 'certifications'));

    }

  };

  return (
    <>
      <motion.div variants={textVariant()} className="mt-20">
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-7xl leading-[30px] text-justify'
      >
        I'm a software developer, focusing on <b className="text-purple-600 font-extrabold">Front-End Web Development</b>, specializing in HTML, CSS, and JavaScript Ecosystem, 
        with a strong command of modern front-end frameworks like React. 
        My expertise extends to styling with Bootstrap and Tailwind CSS, and back-end development using Python, Node.Js, PHP and Laravel. 
        I'm dedicated to building efficient, scalable, and user-friendly solutions.
      </motion.p>

      <div className='mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10'>
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            index={index}
            {...service}
            onClick={() => handleServiceClick(service.title)}
          />
        ))}
      </div>

      {/* Render timeline berdasarkan nilai showTimeline */}
      {showTimeline === 'organization' && (
        <div id="organization-experience-timeline" className="mt-10">
          <Organization />
        </div>
      )}
      
      {showTimeline === 'learning' && (
        <div id="learning-experience-timeline" className="mt-10">
          <Experience />
        </div>
      )}

      {showTimeline === 'achievements' && (
        <div id="achievements-timeline" className="mt-10">
          <Achievements /> 
        </div>
      )}
      {showTimeline === 'certifications' && (
        <div id="certifications-timeline" className="mt-10">
          <Certifications />
        </div>
      )}
    </>
  );
};

export default SectionWrapper(About, "about");