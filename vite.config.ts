import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { resolve } from 'path';


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      "~": resolve(__dirname, "src"),
      "@sass": resolve(__dirname, "src/styles"),
    },
  },
  server:
  {
    allowedHosts: true,
  }
});
