const withTwin = require('./withTwin.js');
const { i18n } = require('./next-i18next.config');

/** @type {import('next').NextConfig} */
const nextConfig = withTwin({
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    domains: ['lh3.googleusercontent.com', 'watchlab-s3.s3.amazonaws.com'],
  },
  i18n,
});

module.exports = nextConfig;
