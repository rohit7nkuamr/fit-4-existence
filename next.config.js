/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
    unoptimized: true,
  },
  // Remove 'output: export' for Vercel deployment to enable API routes
  // output: 'export',
  trailingSlash: true,
}

module.exports = nextConfig
