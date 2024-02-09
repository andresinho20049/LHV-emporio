const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, os: false, path: false };

    return config;
  },
  experimental: {
    serverComponentsExternalPackages: ["puppeteer-core"],
  },
};

module.exports = withContentlayer(nextConfig);
