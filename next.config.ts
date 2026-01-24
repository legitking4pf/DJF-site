import type { NextConfig } from "next";
const nextConfig = {
  async headers() {
    return [
    {
      allowedDevOrigins: ['10.161.32.3', 'localhost:3000'],
      reactCompiler: true,
      source: '/(.*)',
      headers: [
        { key: 'Content-Security-Policy',
          value: "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';" },
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      ],
    }, ];
  },
};
export default nextConfig;