import { defineConfig } from 'vite';
import RubyPlugin from 'vite-plugin-ruby';
import ReactPlugin from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { splitVendorChunkPlugin } from 'vite';

export default defineConfig({
  build: {
    sourcemap: false,
  },
  plugins: [RubyPlugin(), ReactPlugin(), tsconfigPaths(), splitVendorChunkPlugin()],
});
