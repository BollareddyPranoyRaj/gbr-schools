// app/sitemap.ts
// Generates an automated sitemap.xml for better SEO

import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://gbr-schools.vercel.app"; // Replace with your actual domain

  // Static routes
  const routes = [
    '',
    '/about',
    '/ac-campus',
    '/standard-campus',
    '/admissions',
    '/academics',
    '/parents',
    '/rules',
    '/calendar',
    '/facilities',
    '/student-life',
    '/leadership',
    '/events',
    '/news',
    '/notices',
    '/careers',
    '/alumni',
    '/apply',
    '/faq',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
