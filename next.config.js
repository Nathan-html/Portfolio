const { i18n } = require('./next-i18next.config');

/**
 *  @type{import('next').NextConfig}
 */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.pixabay.com',
        pathname: '/photo/**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        pathname: '/**',
      },
    ],
  },
  i18n,
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
