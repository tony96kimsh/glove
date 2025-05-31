// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'glove'

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`,
})