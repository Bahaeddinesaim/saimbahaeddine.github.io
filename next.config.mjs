/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true
  }
};

export default nextConfig;

