import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
// vite.config.ts
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "https://api.rawg.io",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  plugins: [react(), tsconfigPaths()],
});
