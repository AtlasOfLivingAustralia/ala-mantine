import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm'],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ['react', 'react-dom', '@mantine/core', '@mantine/hooks'],
  bundle: true,
  splitting: false,
  esbuildOptions(options) {
    options.loader = {
      ...options.loader,
      '.module.css': 'local-css',
    };
  },
});