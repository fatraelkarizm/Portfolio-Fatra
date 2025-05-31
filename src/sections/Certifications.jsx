// src/sections/Certifications.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { textVariant, fadeIn } from '../utils/motion';
import { styles } from '../styles';

// Import certifications data
import { certifications } from '../constants/certifications';
import { tagIcons } from '../constants/tagIcons';

const TechBadge = ({ tech }) => {
  const IconComponent = tagIcons[tech] ? tagIcons[tech].component : null;
  const iconColor = tagIcons[tech] ? tagIcons[tech].color : '#FFFFFF'; // Default to white if not found

  return (
    <span className="inline-flex items-center bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-200 mr-2 mb-2">
      {IconComponent && <IconComponent style={{ color: iconColor }} className="mr-1" />}
      {tech}
    </span>
  );
};

const CertificationCard = ({ certification }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.1, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="bg-tertiary p-6 rounded-lg shadow-lg flex flex-col h-full"
    >
      <img
        src={certification.image}
        alt={certification.title}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-white text-xl font-bold mb-2">{certification.title}</h3>
      <p className="text-secondary text-base mb-2">{certification.issuer} - {certification.date}</p>
      <p className="text-gray-300 text-sm flex-grow mb-4">{certification.description}</p>
      <div className="flex flex-wrap mb-4">
        {certification.technologies.map((tech, index) => (
          <TechBadge key={index} tech={tech} />
        ))}
      </div>
      <div className="mt-auto flex justify-end">
        {certification.link && (
          <a
            href={certification.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-white transition-colors duration-200 text-sm font-medium"
          >
            Verify Credential &rarr;
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Certifications = () => {
  return (
    <>
      <motion.div variants={textVariant()} initial="hidden" whileInView="show" viewport={{ once: true }} className='text-center z-100'>
        <p className={styles.sectionSubText}>My Formal Recognition</p>
        <h2 className={styles.sectionHeadText}>Certifications.</h2>
      </motion.div>

      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map(cert => (
          <CertificationCard key={cert.id} certification={cert} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");