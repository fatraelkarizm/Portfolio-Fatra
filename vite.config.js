// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const asyncCssPlugin = () => ({
  name: "async-css",
  transformIndexHtml: {
    order: "post",
    handler(html) {
      return html.replace(
        /<link rel="stylesheet" crossorigin href="(\/assets\/[^"]+\.css)">/,
        '<link rel="preload" href="$1" as="style" onload="this.onload=null;this.rel=\'stylesheet\'"><noscript><link rel="stylesheet" crossorigin href="$1"></noscript>'
      );
    },
  },
});

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), asyncCssPlugin()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  esbuild: {
    drop: ["console", "debugger"],
  },
  build: {
    modulePreload: false,
    chunkSizeWarningLimit: 1000,
  },
});
