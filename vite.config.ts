import { defineConfig } from 'vite';
import RubyPlugin from 'vite-plugin-ruby';
import ReactPlugin from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { dependencies } from './package.json';

function renderChunks(deps: Record<string, string>) {
  const chunks: Record<string, any> = {};
  Object.keys(deps).forEach((key) => {
    if (['react', 'react-select', 'recharts', 'react-dom'].includes(key)) return;
    chunks[key] = [key];
  });
  return chunks;
}

export default defineConfig({
  build: {
    sourcemap: false,

    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-select', 'recharts', 'react-dom'],
          ...renderChunks(dependencies),
        },
      },
    },
  },
  plugins: [RubyPlugin(), ReactPlugin(), tsconfigPaths()],
});
