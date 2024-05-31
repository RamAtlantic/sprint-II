import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Configura el servidor de desarrollo
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Proxy todas las solicitudes a tu backend
      "/": {
        target: "https://api.curso.spazioserver.online",
        changeOrigin: true,
      },
    },
  },
});
