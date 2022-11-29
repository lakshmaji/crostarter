import { defineConfig } from 'vite'
import RubyPlugin from 'vite-plugin-ruby'
import ReactPlugin from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    RubyPlugin(),
    ReactPlugin(),
    tsconfigPaths()
  ],
})
