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
  // Add basePath for GitHub Pages repository name if not using a custom domain
  // basePath: '/fit-4-existence',
}

module.exports = nextConfig
