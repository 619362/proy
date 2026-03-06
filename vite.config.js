import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-google-auth': ['@react-oauth/google'],
          'vendor-qr': ['html5-qrcode']
        }
      }
    }
  },
  server: {
    proxy: {
      '/api': { target: 'http://localhost:3001', changeOrigin: true }
    }
  },
  preview: {
    proxy: {
      '/api': { target: 'http://localhost:3001', changeOrigin: true }
    }
  },
  plugins: [
    react(),
    VitePWA({
      injectRegister: 'inline',
      registerType: 'autoUpdate',
      includeAssets: [
        'favicon.svg',
        'fondo.png',
        'logotipo.png',
        'pwa-192x192.png',
        'pwa-512x512.png'
      ],
      manifest: {
        id: '/',
        name: 'SMART CLEANED',
        short_name: 'SMARTCLEANED',
        description: 'SMART CLEANED - Asistencia y Herramientas',
        theme_color: '#0a0a0a',
        background_color: '#0a0a0a',
        lang: 'es',
        display: 'standalone',
        display_override: ['standalone', 'minimal-ui', 'browser'],
        orientation: 'portrait-primary',
        scope: '/',
        start_url: '/?source=pwa',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2,webmanifest}']
      }
    })
  ]
})
