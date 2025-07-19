// src/components/AnimatedLostProgrammer.jsx
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber'; // PENTING: Pastikan ini diimpor!
import { LostProgrammer } from './LostProgrammer'; // Sesuaikan path jika LostProgrammer ada di lokasi berbeda

// Component untuk mengontrol animasi 3D object
const AnimatedLostProgrammer = ({ scale, position }) => {
  const meshRef = useRef();
  const timeRef = useRef(0);

  // useFrame adalah hook dari @react-three/fiber yang menjalankan callback setiap frame
  useFrame((state, delta) => {  
    if (!meshRef.current) return;

    timeRef.current += delta; // Akumulasi waktu
    const time = timeRef.current;

    // Hitung gerakan random yang akan digunakan sepanjang waktu
    // Ini menciptakan gerakan melayang yang alami dan tidak berulang
    const baseX = Math.sin(time * 0.3) * 0.8;
    const baseY = -0.2 + Math.sin(time * 0.4) * 0.3;
    const baseZ = Math.cos(time * 0.25) * 0.6;

    const offsetX = Math.sin(time * 0.7) * 0.3;
    const offsetY = Math.cos(time * 0.8) * 0.2;
    const offsetZ = Math.sin(time * 0.6) * 0.4;

    // Target posisi final dengan gerakan random
    const targetX = baseX + offsetX;
    const targetY = baseY + offsetY;
    const targetZ = baseZ + offsetZ;

    // Untuk 3 detik pertama, lerp dari posisi awal ke posisi target
    // Ini menciptakan transisi masuk yang smooth saat komponen pertama kali dirender
    if (time < 3.0) {
      const progress = time / 3.0; // Hitung progres dari 0 hingga 1 dalam 3 detik
      // Gunakan fungsi easing cubic out untuk transisi yang lebih alami
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      // Posisi awal sebelum animasi masuk
      const startX = 0;
      const startY = -0.2;
      const startZ = -10;

      // Interpolasi smooth dari start ke target
      meshRef.current.position.x = startX + (targetX - startX) * easeProgress;
      meshRef.current.position.y = startY + (targetY - startY) * easeProgress;
      meshRef.current.position.z = startZ + (targetZ - startZ) * easeProgress;
    } else {
      // Setelah 3 detik, gunakan posisi target langsung (gerakan random yang sudah smooth)
      meshRef.current.position.x = targetX;
      meshRef.current.position.y = targetY;
      meshRef.current.position.z = targetZ;
    }

    // Rotasi yang smooth sepanjang waktu untuk menambah dinamisme
    meshRef.current.rotation.y = Math.sin(time * 0.2) * 0.3;
    meshRef.current.rotation.x = Math.cos(time * 0.15) * 0.1;
    meshRef.current.rotation.z = Math.sin(time * 0.1) * 0.05;
  });

  return (
    // Group ini digunakan sebagai container untuk LostProgrammer dan menerapkan posisi awal
    <group ref={meshRef} position={[0, -0.2, -10]}>
      {/* LostProgrammer adalah model 3D yang dirender */}
      <LostProgrammer scale={scale} position={[0, 0, 0]} />
    </group>
  );
};

export default AnimatedLostProgrammer;
