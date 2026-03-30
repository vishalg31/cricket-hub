import path from "path";
import type { NextConfig } from "next";

const workspaceRoot = path.join(process.cwd(), "..");
const statEngineBaseUrl = process.env.STAT_ENGINE_URL || "http://localhost:3000";

const nextConfig: NextConfig = {
  outputFileTracingRoot: workspaceRoot,
  turbopack: {
    root: workspaceRoot,
  },
  async rewrites() {
    return [
      {
        source: '/ipl-trump-cards',
        destination: 'https://ipl-trump-cards-eight.vercel.app/ipl-trump-cards',
      },
      {
        source: '/ipl-trump-cards/:path+',
        destination: 'https://ipl-trump-cards-eight.vercel.app/ipl-trump-cards/:path+',
      },
      {
        source: '/stat-engine',
        destination: `${statEngineBaseUrl}/stat-engine`,
      },
      {
        source: '/stat-engine/:path+',
        destination: `${statEngineBaseUrl}/stat-engine/:path+`,
      },
    ];
  },
};

export default nextConfig;
