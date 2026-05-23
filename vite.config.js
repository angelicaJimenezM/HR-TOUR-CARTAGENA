import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // <--- ¡Esta es la clave en v4!

export default defineConfig({
  base: './',
  plugins: [
    react(),
    tailwindcss(), // <--- Agrégalo aquí
    
  ],
   server: {
    host: true
  }
})