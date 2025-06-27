// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist",
    chunkSizeWarningLimit: 1000, // Adjust based on your needs
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor chunks
          react: ["react", "react-dom"],
          amazon: ["@aws-amplify/auth"], // Add other large deps
        },
      },
    },
  },
  base: "/",
});
