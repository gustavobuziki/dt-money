import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dns from "dns";
import * as path from "path";

dns.setDefaultResultOrder("verbatim");

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
      "~/assets": path.resolve(__dirname, "./src/assets"),
      "~/components": path.resolve(__dirname, "./src/components"),
      "~/styles": path.resolve(__dirname, "./src/styles"),
      "~/contexts": path.resolve(__dirname, "./src/contexts"),
      "~/utils": path.resolve(__dirname, "./src/utils"),
    },
  },
  plugins: [react()],
  server: {
    host: "localhost",
    port: 3000,
  },
});
