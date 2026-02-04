import { EventEmitter } from 'node:events'; // Use the 'node:' prefix for clarity

EventEmitter.defaultMaxListeners = 25;

/** @type {import('next').NextConfig} */
const cspHeader = `
  default-src 'self';
  img-src 'self' blob: data: https://**.public.blob.vercel-storage.com https://www.transparenttextures.com https://images.unsplash.com https://invatlan.hn https://cdn.prod.website-files.com https://www.bancatlan.hn;
  media-src 'self' https://**.public.blob.vercel-storage.com;
  script-src 'self' 'unsafe-eval' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
`;

const nextConfig = {
  // Your existing configuration
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\s{2,}/g, ' ').trim(), // Cleaner regex for CSP formatting
          },
        ],
      },
    ];
  },

  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  
  reactStrictMode: true,
  
  images: {
    formats: ['image/avif', 'image/webp'], 
    minimumCacheTTL: 60,
    remotePatterns: [
      { protocol: 'https', hostname: '**.public.blob.vercel-storage.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: '**.bancatlan.hn' },
      { protocol: 'https', hostname: 'cdn.prod.website-files.com' },
      { protocol: 'https', hostname: '**.invatlan.hn' },
      { protocol: 'https', hostname: 'www.transparenttextures.com' }
    ],
  },
};

export default nextConfig;
