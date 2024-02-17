import react from '@vitejs/plugin-react';
import Path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: Path.resolve(__dirname, 'src/index.tsx'),
      name: 'UI',
      fileName: 'ui',
      formats: ['cjs', 'es'],
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react', 'react-dom'],
    },
  },
});
