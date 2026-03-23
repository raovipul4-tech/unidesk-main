/** @type {import('next').NextConfig} */

const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  turbopack: {},
  devIndicators: false,
  // Image optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'app-cdn.appgen.com',
      },
      {
        protocol: 'https',
        hostname: '**.cloudinary.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Headers for SEO & Security
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          // Security headers
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          // Performance
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Static assets - long cache
      {
        source: '/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // API routes - no cache
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store, must-revalidate',
          },
        ],
      },
    ];
  },

  // Redirects for SEO
  redirects: async () => {
    return [
      // Redirect www to non-www
      {
        source: '/:path*',
        destination: '/:path*',
        permanent: true,
        has: [
          {
            type: 'host',
            value: 'www.unidesk.in',
          },
        ],
      },
    ];
  },

  // Rewrites for clean URLs
  rewrites: async () => {
    return {
      beforeFiles: [],
      afterFiles: [],
      fallback: [],
    };
  },

  // Webpack optimizations
  webpack: (config) => {
    return config;
  },

  // Compression
  compress: true,

  // Performance metrics
  productionBrowserSourceMaps: false,

  // Internationalization (if needed)
  i18n: {
    locales: ['en-IN', 'en'],
    defaultLocale: 'en-IN',
  },

  // Experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

module.exports = nextConfig;
