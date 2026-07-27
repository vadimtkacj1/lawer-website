/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable compression
  compress: true,
  
  // Optimize images
  images: {
    // WebP only. AVIF encoding is 7-11x slower on the server (measured: 2861ms vs
    // 704ms for the hero, 292ms vs 39ms for a blog card) and only buys ~25% fewer
    // bytes on images that are already 20-50KB. On a single-container deploy those
    // seconds queue up and become the "images load forever" symptom.
    formats: ['image/webp'],
    // Capped at 1920: a 3840 variant costs ~4x the encode time of 1920 and nothing
    // on this site renders wider than a full-bleed hero.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year cache
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // One quality level = half as many cache permutations to generate and store.
    qualities: [75],
    // Disable static image optimization in development for faster builds
    unoptimized: process.env.NODE_ENV === 'development',
    // Enable image optimization
    remotePatterns: [],
  },

  // Performance optimizations
  poweredByHeader: false,
  
  // React strict mode for better development
  reactStrictMode: true,

  // Output configuration for Docker
  output: 'standalone',

  // Set project directory as root to avoid lockfile warnings
  outputFileTracingRoot: process.cwd(),
  
  // Disable source maps in production for smaller bundle size
  productionBrowserSourceMaps: false,
  
  // Experimental features for better performance
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  
  // Turbopack configuration (empty config to silence the error)
  turbopack: {},
  
  // Webpack optimizations
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Optimize bundle splitting
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          cacheGroups: {
            default: false,
            vendors: false,
            // Vendor chunk for large libraries
            vendor: {
              name: 'vendor',
              chunks: 'all',
              test: /node_modules/,
              priority: 20,
            },
            // Separate chunk for framer-motion
            framerMotion: {
              name: 'framer-motion',
              test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
              chunks: 'all',
              priority: 30,
            },
            // Common chunk for shared code
            common: {
              name: 'common',
              minChunks: 2,
              chunks: 'all',
              priority: 10,
              reuseExistingChunk: true,
            },
          },
        },
      };
    }
    return config;
  },

  // HTTPS + canonical host (order matters: HTTP rules first so www+http becomes one hop to apex)
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          { type: 'header', key: 'x-forwarded-proto', value: 'http' },
          { type: 'host', value: 'avi-mashkanta.com' },
        ],
        destination: 'https://avi-mashkanta.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [
          { type: 'header', key: 'x-forwarded-proto', value: 'http' },
          { type: 'host', value: 'www.avi-mashkanta.com' },
        ],
        destination: 'https://avi-mashkanta.com/:path*',
        permanent: true,
      },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.avi-mashkanta.com' }],
        destination: 'https://avi-mashkanta.com/:path*',
        permanent: true,
      },
      // Deleted pages that Google still crawls (GSC "Not found" report) → current equivalents
      {
        source: '/pdfs/accessibility.pdf',
        destination: '/accessibility',
        permanent: true,
      },
      {
        source: '/pdfs/privacy.pdf',
        destination: '/privacy',
        permanent: true,
      },
      {
        source: '/pdfs/terms.pdf',
        destination: '/terms',
        permanent: true,
      },
      {
        source: '/services/commercial',
        destination: '/services',
        permanent: true,
      },
    ];
  },

  // Headers for caching and security
  async headers() {
    const securityHeaders = [
      {
        key: 'X-DNS-Prefetch-Control',
        value: 'on'
      },
      {
        key: 'Strict-Transport-Security',
        value: 'max-age=63072000; includeSubDomains; preload'
      },
      {
        key: 'X-Frame-Options',
        value: 'SAMEORIGIN'
      },
      {
        key: 'X-Content-Type-Options',
        value: 'nosniff'
      },
      {
        key: 'Referrer-Policy',
        value: 'origin-when-cross-origin'
      },
      {
        key: 'X-XSS-Protection',
        value: '1; mode=block'
      },
      {
        key: 'Permissions-Policy',
        value: 'camera=(), microphone=(), geolocation=()'
      },
      {
        key: 'Content-Security-Policy',
        // No upgrade-insecure-requests: on HTTP-only hosts (e.g. IP:80) it forces https:// and breaks assets (connection refused on :443).
        value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://*.equalweb.com https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://*.equalweb.com; img-src 'self' data: blob: https://*.equalweb.com https://grainy-gradients.vercel.app https://www.google-analytics.com https://www.googletagmanager.com https://*.googleapis.com https://*.gstatic.com; font-src 'self' data:; connect-src 'self' https://*.equalweb.com https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://region1.google-analytics.com; frame-src 'self' https://www.google.com https://maps.google.com https://maps.googleapis.com; object-src 'none'; base-uri 'self'; form-action 'self'; frame-ancestors 'none';"
      }
    ];

    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
      {
        source: '/images/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/_next/image',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:path*.{js,css,json,woff,woff2,ttf}',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;

