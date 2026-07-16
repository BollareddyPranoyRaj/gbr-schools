// app/manifest.ts
// Generates a manifest.json to allow the website to act as a Progressive Web App (PWA) on mobile devices

import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'GBR Group of Schools',
    short_name: 'GBR Schools',
    description: 'Nurturing Minds from Nursery to 10th Grade in Anaparthi.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#1e3a8a', // Using your primary blue color
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      // You will need to add these actual image files to your /public folder later
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}