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
}

// Only add basePath and assetPrefix when building for production/GitHub Pages
if (process.env.NODE_ENV === 'production') {
  nextConfig.basePath = '/fit-4-existence'
  nextConfig.assetPrefix = '/fit-4-existence/'
}

module.exports = nextConfig
