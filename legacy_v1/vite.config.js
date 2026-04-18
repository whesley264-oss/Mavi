import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html',
        lp: './templates/landing-page/index.html',
        portfolio: './templates/portfolio/index.html',
        auth: './templates/login-register/index.html',
        agency: './templates/agency/index.html',
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
