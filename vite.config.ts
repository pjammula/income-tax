// vite.config.ts

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import swc from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), swc()],
});
