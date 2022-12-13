/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sample-posts-frontend-test.s3.amazonaws.com',
        pathname: '/**',
      }
    ]
  }
};

module.exports = nextConfig;
