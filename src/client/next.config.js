/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  basePath: '/zesty',
  reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '~': path.resolve(__dirname, '.'),
    };
    return config
  },
  experimental: {
    images: {
      unoptimized: true,
    },
  },
}

module.exports = nextConfig
