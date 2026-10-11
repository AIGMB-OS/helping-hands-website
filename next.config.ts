import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dq5pwpg1q8ru0.cloudfront.net",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "denverumc.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.denverumc.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pciprdprodfmssa.blob.core.windows.net",
        pathname: "/**",
      },
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
