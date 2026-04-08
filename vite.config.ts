/// <reference types="vitest" />
import { defineConfig, type UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
import type { InlineConfig } from 'vitest/node';

interface VitestConfigExport extends UserConfig {
  test?: InlineConfig;
}

export default defineConfig({
  plugins: [react()],
  base: '/design-patterns/',
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    include: [
      'tests/**/*.{test,spec}.{ts,tsx}',
      'src/**/*.{test,spec}.{ts,tsx}',
    ],
  },
} as VitestConfigExport);