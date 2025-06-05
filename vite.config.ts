// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup';

const repoName = 'glove'

export default defineConfig({
  plugins: [react(), mdx()],
  base: `/${repoName}/`,
})
