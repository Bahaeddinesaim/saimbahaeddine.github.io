const isGithubActions = !!process.env.GITHUB_ACTIONS;
const repo = "saimbahaeddine.github.io";

/**
 * GitHub Pages serves project sites under:
 * https://<username>.github.io/<repo>/
 *
 * For local dev we keep basePath empty.
 */
const basePath = isGithubActions ? `/${repo}` : "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  reactStrictMode: true,
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath,
  assetPrefix: basePath
};

export default nextConfig;

