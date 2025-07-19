// src/sections/Hero.jsx
import HeroText from "../components/HeroText";
import Background from "../components/Background";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import AnimatedLostProgrammer from "../components/AnimatedLostProgrammer";
import SectionWrapper from "../hoc/SectionWrapper";
import StarsCanvas from '../components/StarBackground';

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  return (
    <section className="flex items-start justify-center
    md:items-start md:justify-start min-h-screen overflow-hidden c-space">
      <StarsCanvas />
      <HeroText />
      <Background />
      

      <figure className="absolute inset-0"
        style={{ width: "100vw", height: "100vh" }}>
        <Canvas camera={{ position: [3, 0, -3] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <AnimatedLostProgrammer scale={0.6} position={[0, -0.2, -10]} />
          <OrbitControls
            enableZoom={false}
            enablePan={true}
            enableRotate={true}
            zoomSpeed={1.2}
          />
        </Canvas>
      </figure>
      
    </section>
  )
}


export default SectionWrapper(Hero, "hero");