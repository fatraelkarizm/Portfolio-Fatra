// Keyword: Tag Icons
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaJava } from 'react-icons/fa';
import { BiLogoFirebase } from "react-icons/bi";
import {
  SiTailwindcss,
  SiSupabase,
  SiFramer,
  SiTypescript,
  SiNextdotjs,
  SiStripe,
  SiFigma,
  SiCplusplus,
  SiMysql,
} from 'react-icons/si';
import { ExternalLink, Github, X, BookOpen } from 'lucide-react'; // Pastikan ini terinstal jika digunakan di proyek lain

export const tagIcons = {
  // Languages
  JavaScript: { component: FaJsSquare, color: '#F7DF1E' },
  HTML: { component: FaHtml5, color: '#E34F26' },
  CSS: { component: FaCss3Alt, color: '#1572B6' },
  Python: { component: FaPython, color: '#3776AB' },
  Java: { component: FaJava, color: '#007396' },
  'C++': { component: SiCplusplus, color: '#00599C' },
  TypeScript: { component: SiTypescript, color: '#3178C6' },

  // Frameworks/Libraries (yang sudah ada dan terkait languages)
  React: { component: FaReact, color: '#61DAFB' },
  'React Native': { component: FaReact, color: '#61DAFB' },
  'Node.js': { component: FaNodeJs, color: '#339933' },
  'Next.js': { component: SiNextdotjs, color: '#FFFFFF' },
  'Framer Motion': { component: SiFramer, color: '#0055FF' },
  TailwindCSS: { component: SiTailwindcss, color: '#06B6D4' }, // Meskipun CSS Framework, sering dipakai bersama
  
  // Databases & Tools (yang sudah ada dari import Anda)
  Supabase: { component: SiSupabase, color: '#3ECF8E' },
  Firebase: { component: BiLogoFirebase, color: '#FFCA28' },
  MySQL: { component: SiMysql, color: '#4479A1' },
  Stripe: { component: SiStripe, color: '#635BFF' },
  Figma: { component: SiFigma, color: '#A259FF' },


  'User Research': { component: BookOpen, color: '#007ACC' },
  'UI/UX Design': { component: ExternalLink, color: '#FFA500' },
  Github: { component: Github, color: '#EAEAEA' },
  X: { component: X, color: '#EAEAEA' },
};