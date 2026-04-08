import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.dentistanocentro.com.br",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
