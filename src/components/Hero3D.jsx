// src/components/Hero3D.jsx
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import AnimatedLostProgrammer from "./AnimatedLostProgrammer";
import StarsCanvas from './StarBackground';

const Hero3D = ({ isMobile }) => {
  return (
    <>
      <StarsCanvas />
      <figure className="absolute inset-0" style={{ width: "100vw", height: "100vh" }}>
        <Canvas 
          camera={{ position: [3, 0, -3] }}
          dpr={isMobile ? [1, 1] : [1, 2]} // Performance optimization for mobile
          gl={{ powerPreference: "high-performance", antialias: false }} // Additional optimization
        >
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
    </>
  );
};

export default Hero3D;
