import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  // Only use assetPrefix in production
  ...(process.env.NODE_ENV === 'production' && {
    assetPrefix: '.',
    basePath: '',
  }),
}

export default nextConfig
