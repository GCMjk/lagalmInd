/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["picsum.photos", "img.freepik.com"],
  },
};

module.exports = nextConfig;
