import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/PersonalPortFolio/', // Replace with your actual GitHub repository name
  plugins: [react()],
});
