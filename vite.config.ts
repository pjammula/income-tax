// vite.config.ts

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import swc from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), swc()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "dist", // ensure the build output directory is set correctly
    rollupOptions: {
      input: path.resolve(__dirname, "index.html"), // make sure entry point is correct
    },
  },
});
