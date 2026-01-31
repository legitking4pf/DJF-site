/** @type {import('next').NextConfig} */
const cspHeader = `
  default-src 'self';
  img-src 'self' blob: data: https://**.public.blob.vercel-storage.com https://www.transparenttextures.com https://images.unsplash.com;
  script-src 'self' 'unsafe-eval' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
`;

const nextConfig = {
  // 1. Headers (Including CSP)
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

  // 2. Experimental Features
  experimental: {
    cacheComponents: true,
    optimizePackageImports: ['lucide-react'],
  },
  
  reactStrictMode: true,
  bundlePagesRouterDependencies: true,
  
  // 3. Image Optimization & Security
  images: {
    formats: ['image/avif', 'image/webp', 'image/jpg', 'image/jpeg', 'image/png'],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.public.blob.vercel-storage.com', // For your Vercel Blob images
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com', // For Unsplash
      },
      {
        protocol: 'https',
        hostname: 'www.bancatlan.hn'
      },
      {
        protocol: 'https',
        hostname: 'www.cdn.prod.website-files.com'
      },
      {
        protocol: 'https',
        hostname: 'www.invatlan.hn'
      },
      {
        protocol: 'https',
        hostname: 'www.transparenttextures.com', // For your textures
      }
    ],
  },
};

export default nextConfig;
