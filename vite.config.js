// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      // REKOMENDASI: '@' menunjuk ke folder 'src'
      '@': path.resolve(__dirname, './src'),
    },
  },
  // esbuild options for production minification
  esbuild: {
    drop: ['console', 'debugger'],
  },
  build: {
    modulePreload: false,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          // Separate Three.js into its own chunk so main bundle loads faster
          'vendor-three': ['three', '@react-three/fiber', '@react-three/drei'],
          // Separate animation libraries
          'vendor-motion': ['motion', 'framer-motion', 'gsap'],
        },
      },
    },
  },
});