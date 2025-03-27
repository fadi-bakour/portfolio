import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/portfolio/', // Match the repository name
  plugins: [
    TanStackRouterVite({ target: 'react', autoCodeSplitting: true }),
    react()],
})
