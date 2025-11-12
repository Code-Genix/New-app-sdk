import type { NextConfig } from "next";
import { baseURL } from "./baseUrl";

const nextConfig: NextConfig = {
  assetPrefix: baseURL,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors 'self' https://chat.openai.com https://chatgpt.com;",
          },
          {
            key: "X-Frame-Options",
            value: "ALLOW-FROM https://chat.openai.com",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
