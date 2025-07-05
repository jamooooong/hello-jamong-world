import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), TanStackRouterVite()],
  base: "/hello-jamong-world/",
  resolve: {
    alias: {
      "@": "/src",
      "@shared": "/src/shared",
      "@components": "/src/shared/components",
      "@assets": "/src/shared/assets",
    },
  },
});
