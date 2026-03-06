# PWA con Vite y React

Progressive Web App básica creada con Vite y React.

## Características

- ⚡ Vite para desarrollo rápido
- ⚛️ React 18
- 📱 PWA con Service Worker (vite-plugin-pwa)
- 🔄 Auto-actualización cuando hay nuevas versiones

## Instalación

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

## Build

```bash
npm run build
```

## Preview (probar build local)

```bash
npm run preview
```

## Iconos PWA

Para producción, añade estos iconos en la carpeta `public/`:

- `pwa-192x192.png` - Icono 192x192
- `pwa-512x512.png` - Icono 512x512

El plugin genera automáticamente el manifest y el service worker durante el build.
