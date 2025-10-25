/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  
  images: {
    unoptimized: true,
  },

  headers: async () => {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
    ]
  },

  compress: true,
  poweredByHeader: false,

  // ❌ Remove this i18n section for static export
  // i18n: {
  //   locales: ["en"],
  //   defaultLocale: "en",
  // },

  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
