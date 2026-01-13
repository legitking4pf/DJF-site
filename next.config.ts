import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['10.161.32.3', 'localhost:3000'],
  reactCompiler: true,
};

export default nextConfig;
