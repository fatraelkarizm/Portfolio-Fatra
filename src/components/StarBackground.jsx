import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";


const StarBackground = (props) => {
  const ref = useRef();
  const [sphere] = useState(() => {
    const count = 1500; // Reduced from 5000 for mobile performance
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 2 * 1.2;
      const y = (Math.random() - 0.5) * 2 * 1.2;
      const z = (Math.random() - 0.5) * 2 * 1.2;
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;
    }
    return positions;
  });
  // --- AKHIR UBAH BAGIAN INI ---

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={sphere} // Menggunakan posisi yang dibuat manual
        stride={3}
        frustumCulled
        {...props}
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.0015}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => (
  <div className="w-full h-auto fixed inset-0 z-[-5] pointer-events-none">
    <Canvas
      camera={{ position: [0, 0, 1] }}
      className="w-full h-full"
      dpr={[1, 1]}
      gl={{ powerPreference: "low-power", antialias: false }}
    >
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>
);

export default StarsCanvas;