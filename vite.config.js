import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig(() => {
  const isProd = process.env.NODE_ENV === 'production'
  const fallbackBase = isProd ? '/MasterTouch-Works/' : '/'

  return {
    plugins: [react()],
    base: process.env.VITE_BASE_PATH || fallbackBase,
  }
})
