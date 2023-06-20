/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  //configure image to include images from sanity
  images: {
    domains: ["cdn.sanity.io"],
  },
};

module.exports = nextConfig;
          
