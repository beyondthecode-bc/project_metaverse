const MS_PER_SECOND = 1000;
const SECONDS_PER_DAY = 86400;

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['127.0.0.1', 'cdn.sanity.io'],
  },
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: SECONDS_PER_DAY * MS_PER_SECOND,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 100,
  },
};

module.exports = nextConfig;
