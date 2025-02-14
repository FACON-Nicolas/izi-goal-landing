/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
    ],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/izi-goal-landing' : '',
};

module.exports = nextConfig;
