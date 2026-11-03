import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [360, 480, 640, 768, 1024, 1280, 1536, 1920, 2560],
    imageSizes: [64, 128, 256, 384, 512],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    qualities: [60, 70, 75, 82],
  },
  async redirects() {
    // Keep legacy URLs from the previous site working.
    return [
      { source: "/news", destination: "/events", permanent: true },
      { source: "/promotions", destination: "/advertise", permanent: true },
      { source: "/register", destination: "/join", permanent: true },
      { source: "/feed", destination: "/join", permanent: true },
      { source: "/technology", destination: "/about", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/media/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/brand/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },
};

export default nextConfig;
