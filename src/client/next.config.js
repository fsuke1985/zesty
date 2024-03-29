/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  basePath: '/codespaces01',
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
}

module.exports = nextConfig
