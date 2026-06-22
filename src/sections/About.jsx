// Import State React
import { useState } from "react";

// Import Requirements
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";

// Import Efek Motion
import { fadeIn, textVariant } from "../utils/motion";
import { motion } from "framer-motion";

// Import Component
import { TechBadge } from '../components/TechBadge';
import { ServiceCard } from "../components/ServiceCard";

// Import Jenis Service Card
import Organization from "./Organization";
import Experience from "./Experience";
import Achievements from "./Achievements";
import Certifications from "./Certifications";


const About = () => {
  const [showTimeline, setShowTimeline] = useState('learning');

  const handleServiceClick = (clickedTitle) => {
    if (clickedTitle === "Organizational Experiences") {
      setShowTimeline(prev => (prev === 'organization' ? null : 'organization'));
    }
    else if (clickedTitle === "Coding Journey") {
      setShowTimeline(prev => (prev === 'learning' ? null : 'learning'));
    }
    else if (clickedTitle === "Achievements") {
      setShowTimeline(prev => (prev === 'achievements' ? null : 'achievements'));
    }
    else if (clickedTitle === "Certifications") {
      setShowTimeline(prev => (prev === 'certifications' ? null : 'certifications'));
    }
  };

  return (
    <>
      {/* Container dengan max-width yang sama untuk semua konten */}
      <div className="max-w-7xl mx-auto c-space">

        <motion.div variants={textVariant()} className="mt-20 text-center">
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-4 text-secondary text-[16px] leading-[30px] text-justify'
        >
          I'm a software developer, focusing on <b className="text-purple-400 font-extrabold">Front-End Web Development</b>, specializing in {' '}
          <TechBadge tech="HTML" />
          <TechBadge tech="CSS" />
          and {' '}
          <TechBadge tech="JavaScript" />Ecosystem,
          with a strong command of modern front-end frameworks like {' '}
          <TechBadge tech="React" />.
          My expertise extends to styling with {' '}
          <TechBadge tech="TailwindCSS" />
          and <TechBadge tech="Bootstrap" />. Last one, for the back-end development, I am using {' '}
          <TechBadge tech="Python" />
          , {' '}
          <TechBadge tech="MySQL" />
          , {' '}
          <TechBadge tech="Node.js" />
          , {' '}
          {/* Perhatikan: Anda perlu menambahkan PHP dan Laravel ke tagIcons jika ingin mereka memiliki ikon */}
          <TechBadge tech="PHP" />and <TechBadge tech="Laravel" />.
          I'm dedicated to building modern website with efficient and user-friendly solutions.
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

      </div>
    </>
  );
};

export default SectionWrapper(About, "about");