export const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/**
 * Returns the proper path for static assets, taking into account
 * the subpath on GitHub Pages or root on Vercel/local dev.
 */
export function getAssetPath(path: string): string {
  if (!path) return "";
  if (/^(?:[a-z]+:)?\/\//i.test(path)) {
    return path;
  }
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
}
