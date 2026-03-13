const repoName = process.env.NEXT_PUBLIC_PAGES_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true
  },
  basePath: repoName,
  assetPrefix: repoName
};

export default nextConfig;

