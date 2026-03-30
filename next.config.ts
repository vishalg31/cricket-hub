import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      // IPL Trump Cards
      {
        source: "/ipl-trump-cards",
        destination:
          "https://ipl-trump-cards-eight.vercel.app/ipl-trump-cards",
      },
      {
        source: "/ipl-trump-cards/:path*",
        destination:
          "https://ipl-trump-cards-eight.vercel.app/ipl-trump-cards/:path*",
      },

      // Stat Engine (same pattern)
      {
        source: "/stat-engine",
        destination: "https://stat-engine.vercel.app/stat-engine",
      },
      {
        source: "/stat-engine/:path*",
        destination:
          "https://stat-engine.vercel.app/stat-engine/:path*",
      },
    ];
  },
};

export default nextConfig;