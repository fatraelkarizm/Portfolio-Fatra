// src/sections/Achievements.jsx

// Import Component
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";

// Impor data pencapaian dari constants
import { achievements } from "../constants/achievements"; // Pastikan path ini benar!



// Komponen kartu pencapaian
const AchievementCard = ({ achievement }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "oklch(0.381 0.176 304.987)", // Warna latar belakang konten kartu
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }} // Panah konten
      date={achievement.date} // Tanggal pencapaian
      iconStyle={{ background: achievement.iconBg }} // Warna latar belakang ikon
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          {/* Menampilkan ikon menggunakan tag <img> */}
          {achievement.icon && (
            <img
              src={achievement.icon}
              alt={`${achievement.title} icon`} // Teks alternatif untuk aksesibilitas
              loading="lazy"
              className='w-[60%] h-[60%] object-contain' // Styling ikon
            />
          )}
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{achievement.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {achievement.company_name} {/* Nama terkait pencapaian */}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {achievement.contents.map((content, index) => (
          <li
            key={`achievement-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
            
          >
            {content}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

// Komponen utama Achievements
const Achievements = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My Notable Milestones
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Achievements.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={`achievement-${index}`}
              achievement={achievement}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

// Ekspor komponen Achievements dengan SectionWrapper
// Sesuaikan ID section jika ini akan menjadi "achievements" di navigasi Anda
export default SectionWrapper(Achievements, "achievements");