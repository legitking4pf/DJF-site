/** @type {import('next').NextConfig} */
// next.config.js
const cspHeader = `
  default-src 'self';
  img-src 'self' blob: data: https://www.transparenttextures.com https://images.unsplash.com;
  script-src 'self' 'unsafe-eval' 'unsafe-inline';
  style-src 'self' 'unsafe-inline';
`;

module.exports = {
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
};

const nextConfig = {
  // 1. Next.js 16 Caching & PPR
  // This enables the modern "Cache Components" model which replaces the old PPR flag.
  // It allows your institutional portfolio to load the static shell instantly.
  experimental: {
    cacheComponents: true,
    optimizePackageImports: ['lucide-react'],
  },
  
  // 2. Production Optimizations
  reactStrictMode: true,
  
  // 3. Bundle Optimization
  // Ensures heavy libraries like 'leaflet' or 'html2canvas' don't bloat the main bundle.
  bundlePagesRouterDependencies: true,
  
  // 4. Image Optimization
  // Essential for institutional portfolios with many project/team images.
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },

  // 5. Build Speed (Turbopack)
  // Next 16 uses Turbopack by default, which trims legacy polyfills for modern browsers.
};

export default nextConfig;