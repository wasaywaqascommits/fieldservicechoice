/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // The spec's canonical URLs use trailing slashes, e.g. /products/jobber/.
  // trailingSlash keeps routing + canonicals consistent with that convention.
  trailingSlash: true,
  poweredByHeader: false,
  async headers() {
    return [
      {
        // Keep the admin area and APIs out of the index defensively at the
        // header level, in addition to per-page robots directives.
        source: '/console-x7k29q/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
      {
        source: '/api/:path*',
        headers: [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }],
      },
    ];
  },
};

export default nextConfig;
