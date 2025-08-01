import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    serverActions: {
      allowedOrigins: ["j1hp39t4-3000.use2.devtunnels.ms"],
    },
  },
};

export default nextConfig;
