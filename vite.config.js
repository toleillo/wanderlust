import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@config": resolve(__dirname, "src/config"),
      "@data": resolve(__dirname, "src/data"),
      "@utils": resolve(__dirname, "src/utils"),
      "@styles": resolve(__dirname, "src/styles"),
      "@hooks": resolve(__dirname, "src/hooks"),
      "@components": resolve(__dirname, "src/components"),
      "@i18n": resolve(__dirname, "src/i18n"),
    },
  },
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
      },
    },
  },
});
