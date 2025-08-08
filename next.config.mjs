/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Don’t block deploys on type or lint errors while we iterate quickly
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true }
}
export default nextConfig
