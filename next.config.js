/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',        // sitio estático
  images: { unoptimized: true }, // sin optimizador de imágenes
};

module.exports = nextConfig;