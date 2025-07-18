/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client'],
  },
  // Optimize for Vercel deployment
  output: 'standalone',
}

module.exports = nextConfig
