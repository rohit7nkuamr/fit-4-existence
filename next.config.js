/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    unoptimized: true,
  },
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  basePath: '/fit-4-existence',
  assetPrefix: '/fit-4-existence/',
}

module.exports = nextConfig
