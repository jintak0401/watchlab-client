const withTwin = require('./withTwin.js');

/** @type {import('next').NextConfig} */
const nextConfig = withTwin({
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'watchlab-s3.s3.amazonaws.com',
      'watchlab-s3.s3.us-east-1.amazonaws.com',
    ],
  },
});

module.exports = nextConfig;
