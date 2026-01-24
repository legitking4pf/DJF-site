import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* 1. IMAGE OPTIMIZATION & WHITELISTING */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hv4w1qmfjrk8zaij.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'bancatlan.hn',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  /* 2. SECURITY & PERFORMANCE HEADERS */
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: `
              default-src 'self'; 
              script-src 'self' 'unsafe-inline' 'unsafe-eval'; 
              style-src 'self' 'unsafe-inline'; 
              img-src 'self' blob: data: hv4w1qmfjrk8zaij.public.blob.vercel-storage.com bancatlan.hn images.unsplash.com; 
              media-src 'self' blob: hv4w1qmfjrk8zaij.public.blob.vercel-storage.com; 
              font-src 'self' data:; 
              connect-src 'self';
            `.replace(/\s{2,}/g, ' ').trim(),
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
