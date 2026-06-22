import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";

// Impor learningExperiences dari constants
import { learningExperiences } from "../constants/learningExperiences";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "oklch(0.381 0.176 304.987)",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          {experience.icon && (
            <img
              src={experience.icon}
              alt={`${experience.title} icon`} 
              loading="lazy"
              width="48"
              height="48"
              className='w-[60%] h-[60%] object-contain' 
            />
          )}
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.contents.map((content, index) => (
          <li
            key={`learning-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {content}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My Journey of Growth
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Learning Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {learningExperiences.map((experience, index) => (
            <ExperienceCard
              key={`learning-experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "learning");
