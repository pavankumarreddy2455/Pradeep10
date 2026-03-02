import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Changed to relative path for free hosting
  build: {
    assetsDir: 'assets',
    sourcemap: false, // Disabled for production
    rollupOptions: {
      output: {
        manualChunks: undefined,
        assetFileNames: 'assets/[name].[ext]',
        chunkFileNames: 'js/[name].js',
        entryFileNames: 'js/[name].js',
      },
    },
    cssCodeSplit: false, // Prevents CSS splitting issues
    minify: 'esbuild', // Use built-in minifier
  },
  server: {
    port: 3000,
    host: true,
  },
})
