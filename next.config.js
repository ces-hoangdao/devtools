/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.producthunt.com',
        port: '',
        pathname: '/widgets/embed-image/**',
      },
    ],
  },
};

module.exports = nextConfig;
