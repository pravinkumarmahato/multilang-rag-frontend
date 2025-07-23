import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const repoName = 'multilang-rag-frontend'

// https://vite.dev/config/
export default defineConfig({
  base: `/${repoName}/`, // Required for GitHub Pages
  plugins: [
    react(),
    tailwindcss(),
  ],
})
