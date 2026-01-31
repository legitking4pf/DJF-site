/** @type {import('next').NextConfig} */
const cspHeader = `
  default-src 'self';
  img-src 'self' blob: data: https://**.public.blob.vercel-storage.com https://www.transparenttextures.com https://images.unsplash.com https://invatlan.hn https://cdn.prod.website-files.com https://www.bancatlan.hn;
  script-src 'self' 'unsafe-eval' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
`;

const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: cspHeader.replace(/\n/g, ''),
          },
        ],
      },
    ];
  },

  experimental: {
    cacheComponents: true,
    optimizePackageImports: ['lucide-react'],
  },
  
  reactStrictMode: true,
  bundlePagesRouterDependencies: true,
  
  images: {
    formats: ['image/avif', 'image/webp'], 
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.public.blob.vercel-storage.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '**.bancatlan.hn', // Added wildcard for subdomains
      },
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com', // Removed 'www.' prefix
      },
      {
        protocol: 'https',
        hostname: '**.invatlan.hn', // Added wildcard for subdomains
      },
      {
        protocol: 'https',
        hostname: 'www.transparenttextures.com',
      }
    ],
  },
};

export default nextConfig;
