/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '**',
      },
    ],
    minimumCacheTTL: 60,
  },
};

module.exports = nextConfig;
