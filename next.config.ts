import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cili7jis98fhhtqt.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
