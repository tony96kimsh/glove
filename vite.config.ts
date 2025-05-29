// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const repoName = 'https://github.com/tony96kimsh/glove.git'

export default defineConfig({
  plugins: [react()],
  base: `/${repoName}/`, // 꼭 슬래시로 감싸기
})