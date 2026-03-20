import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
    ];
  },
};

export default nextConfig;