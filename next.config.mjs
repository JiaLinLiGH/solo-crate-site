/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for GitHub Pages (https://jialinligh.github.io/solo-crate-site/)
  output: 'export',
  basePath: '/solo-crate-site',
  trailingSlash: true,
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
