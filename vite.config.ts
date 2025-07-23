import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// const repoName = 'multilang-rag-frontend'

export default defineConfig({
  base: `/`,
  plugins: [
    react(),
    tailwindcss(),
  ],
})
