import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

// https://vitejs.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  css: {
    transformer: "lightningcss",
  },
  plugins: [tailwindcss(), react()],
  build: {
    rollupOptions: {
      output: isSsrBuild
        ? {}
        : {
            manualChunks: {
              "vendor-three": ["three"],
              "vendor-swiper": ["swiper"],
              "vendor-misc": ["axios", "simplex-noise", "react-scroll", "react-intersection-observer"],
            },
          },
    },
  },
}))
