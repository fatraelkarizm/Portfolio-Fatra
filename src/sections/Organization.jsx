import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles"; 

import { organizationExperiences } from "../constants/organization"; 
import { SectionWrapper } from "../hoc"; 
import { textVariant } from "../utils/motion"; 

const OrganizationExperienceCard = ({ experience }) => {
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
          <img
            src={experience.icon}
            alt={experience.company_name} 
            className='w-[70%] h-[70%] object-contain'
          />
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
            key={`org-content-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {content}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Organization = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My Roles Beyond Technical
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Organizational Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {organizationExperiences.map((experience, index) => (
            <OrganizationExperienceCard
              key={`org-experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Organization, "organization");
