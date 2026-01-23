import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig({
  plugins: [
    react(),
    dts({ 
      include: ['src'],
      insertTypesEntry: true,
      rollupTypes: true,
      outDir: 'dist',
      entryRoot: 'src',
      // This should force .d.ts extension
      beforeWriteFile: (filePath, content) => {
        // Change .d.mts to .d.ts
        return {
          filePath: filePath.replace('.d.mts', '.d.ts'),
          content
        };
      }
    })
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',  // Add this
        '@mantine/core',
        '@mantine/hooks',
        '@fortawesome/fontawesome-svg-core',
        '@fortawesome/free-regular-svg-icons',
        '@fortawesome/free-solid-svg-icons',
        '@fortawesome/react-fontawesome'
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          'react/jsx-runtime': 'react/jsx-runtime',
        }
      }
    },
    cssCodeSplit: false,
  },
});