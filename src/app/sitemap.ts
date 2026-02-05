import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://djf.vercel.app';
  
  // Current date for lastmod (ensures search engines see fresh content)
  const lastModified = new Date();

  const routes = [
    {
      url: '',
      priority: 1.0,
    },
    {
      url: '/dossier/digital-integration',
      priority: 0.8,
    },
    {
      url: '/dossier/strategic-growth',
      priority: 0.8,
    },
    {
      url: '/contact',
      priority: 0.8,
    },
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route.url}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: route.priority,
  }));
}
