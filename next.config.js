/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  trailingSlash: true,
  
  basePath: '/repo-name',
  assetPrefix: '/repo-name/',
};

module.exports = nextConfig;