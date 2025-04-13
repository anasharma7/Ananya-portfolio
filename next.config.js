/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/Ananya-portfolio' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Ananya-portfolio/' : '',
  trailingSlash: true,
  distDir: 'out',
};

module.exports = nextConfig; 