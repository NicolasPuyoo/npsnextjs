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
  // Security headers. Note : avec OpenNext sur Cloudflare Workers, ces headers
  // sont appliqués sur les pages dynamiques (server-rendered). Pour les assets
  // statiques servis par Cloudflare Assets binding, configurer en plus via
  // Cloudflare Dashboard > Rules > Transform Rules > Modify Response Header.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), browsing-topics=()",
          },
          {
            // CSP basique permissive (le site n'utilise pas d'injection inline
            // dangereuse). 'unsafe-inline' nécessaire pour Next.js streaming
            // scripts + Tailwind JIT styles. À durcir progressivement avec
            // CSP nonces si on adopte un middleware Next.js plus tard.
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://api.fontshare.com",
              "style-src 'self' 'unsafe-inline' https://api.fontshare.com",
              "img-src 'self' data: https:",
              "font-src 'self' data: https://api.fontshare.com https://cdn.fontshare.com",
              "connect-src 'self' https://api.anthropic.com",
              "media-src 'self'",
              "frame-ancestors 'self'",
              "base-uri 'self'",
              "form-action 'self'",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
