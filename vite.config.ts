import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import { VitePluginFonts } from 'vite-plugin-fonts';

export default defineConfig({
  plugins: [
    react(),
    VitePluginFonts({
      google: {
        families: [
          {
            name: 'Rubik',
            styles: 'ital,wght@0,400;1,200',
          },
        ],
      },
    }),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
      manifest: {
        name: '126 ОБрТрО',
        short_name: '126 ОБрТрО',
        description: 'Допомога військовослужбовцям 126 ОБрТрО',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'favicons/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'favicons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'favicons/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@appTypes', replacement: '/src/shared/types' },
      { find: '@services', replacement: '/src/shared/services' },
      { find: '@shared', replacement: '/src/shared' },
      { find: '@layout', replacement: '/src/components/layout' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@components', replacement: '/src/components/features' },
      { find: '@ui', replacement: '/src/components/ui' },
      { find: '@data', replacement: '/src/data' },
    ],
  },
});
