import { EventEmitter } from 'node:events';

EventEmitter.defaultMaxListeners = 25;

/** @type {import('next').NextConfig} */
const cspHeader = `
  default-src 'self';
  img-src 'self' blob: data: https://public.blob.vercel-storage.com https://www.transparenttextures.com https://images.unsplash.com https://invatlan.hn https://cdn.prod.website-files.com https://www.bancatlan.hn;
  media-src 'self' blob: data: https://public.blob.vercel-storage.com;
  script-src 'self' 'unsafe-eval' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
  connect-src 'self' https://public.blob.vercel-storage.com;
`;

const nextConfig = {
  output:'standalone',
  async headers() {
    return [
    {
      source: '/(.*)',
      headers: [
      {
        key: 'Content-Security-Policy',
        value: cspHeader.replace(/\s{2,}/g, ' ').trim(),
      }, ],
    }, ];
  },
  experimental: {
    optimizePackageImports: [],
  },
  transpilePackages: ['lucide-react'], 
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    remotePatterns: [
      { protocol: 'https', hostname: '**.public.blob.vercel-storage.com' }, // Removed wildcard here for safety
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: '**.bancatlan.hn' },
      { protocol: 'https', hostname: 'cdn.prod.website-files.com' },
      { protocol: 'https', hostname: '**.invatlan.hn' },
      { protocol: 'https', hostname: 'www.transparenttextures.com' }
    ],
  },
};

export default nextConfig;