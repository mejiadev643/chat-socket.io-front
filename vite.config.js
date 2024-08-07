import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {

      '@': path.resolve(__dirname, './src'),
      '@login': path.resolve(__dirname, './src/modules/login'),
      '@network': path.resolve(__dirname, './src/services'),
      '@modules': path.resolve(__dirname, './src/modules'),
      '@store': path.resolve(__dirname, './src/store'),
    }
  },
  server:{
    port: 3000,
    open: true,
  }
})
