import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Image optimization configuration
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
    // Optimize image formats
    formats: ["image/avif", "image/webp"],
    // Minimize image size
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
  },
  // Enable React strict mode for better debugging
  reactStrictMode: true,
  // Compress responses
  compress: true,
};

export default nextConfig;
