// vite.config.ts

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import swc from "@vitejs/plugin-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    swc({
      jsc: {
        parser: {
          syntax: "typescript",
          tsx: true, // Enable TSX
        },
      },
    }),
  ],
});
