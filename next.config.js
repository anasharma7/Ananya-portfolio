/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  experimental: {
    optimizeCss: true,
  },
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/Ananya-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Ananya-portfolio/' : '',
  trailingSlash: true,
  distDir: 'out',
};

module.exports = nextConfig; 