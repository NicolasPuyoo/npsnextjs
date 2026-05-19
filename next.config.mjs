/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Cloudflare Pages has no native Next.js image optimization service.
    // We bypass the loader so images load as plain assets. Dimensions are
    // still respected because hero imports come from /assets with known
    // dimensions. If we later move to Vercel, set this to false to get
    // automatic resizing back.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
