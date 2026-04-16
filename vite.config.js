import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { copyFileSync } from 'fs'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    react(), 
    tailwindcss(),
    {
      name: 'copy-verification-file',
      closeBundle() {
        // Copy the Google verification file from root to dist folder
        try {
          copyFileSync(
            resolve(__dirname, 'google9090b5ba8f4cb2fb.html'),
            resolve(__dirname, 'dist', 'google9090b5ba8f4cb2fb.html')
          )
          console.log('✅ Verification file copied successfully')
        } catch (error) {
          console.log('⚠️ Verification file not found, skipping...')
        }
      },
    },
  ],
})