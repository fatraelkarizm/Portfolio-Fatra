import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";


export const ServiceCard = ({ index, title, icon, onClick }) => (
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
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
      role="button"
      tabIndex={0}
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

