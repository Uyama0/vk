import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      app: "/src/app",
      entities: "/src/entities",
      features: "/src/features",
      pages: "/src/pages",
      widgets: "/src/widgets",
      shared: "/src/shared",
    },
  },
});
