/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Optional: Set a custom output directory if needed
  // distDir: 'out',
  images: {
    unoptimized: true, // Required for static export of images
  },
}

export default nextConfig; 