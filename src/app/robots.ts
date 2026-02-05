import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Sitemap {
  const baseUrl = 'https://djf-site.vercel.app';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/admin/'], // Keeps private directories hidden from crawlers
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}
