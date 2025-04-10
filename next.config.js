/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/Ananya-portfolio',
  assetPrefix: '/Ananya-portfolio/',
  trailingSlash: true,
};

module.exports = nextConfig; 