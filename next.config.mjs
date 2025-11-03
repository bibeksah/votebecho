/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  turbopack: {
    // Silence workspace root warning when multiple lockfiles exist on Windows
    root: process.cwd(),
  },
}

export default nextConfig
