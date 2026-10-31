import type { NextConfig } from "next";

// Check if building on Vercel
const isVercel = Boolean(process.env.VERCEL);

// Check if explicitly targeting GitHub Pages or local production export (default for gh-pages deployment)
const isGithubPages =
  process.env.GITHUB_PAGES === "true" ||
  Boolean(process.env.GITHUB_ACTIONS) ||
  (!isVercel && process.env.NODE_ENV === "production");

// Use repository name subpath for GitHub Pages, or root for Vercel / local dev
const basePath =
  process.env.NEXT_PUBLIC_BASE_PATH !== undefined
    ? process.env.NEXT_PUBLIC_BASE_PATH
    : isGithubPages
    ? "/aysha-developer-portfolio"
    : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: basePath || undefined,
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
