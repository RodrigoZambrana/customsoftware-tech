/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',        // 👈 genera sitio estático
  images: {
    unoptimized: true,     // 👈 evita optimizador de imágenes (no funciona en static export)
  },
  basePath: '/test',       // 👈 porque tu sitio vive en /test/
  assetPrefix: '/test/',   // 👈 asegura que los assets carguen desde /test
};

module.exports = nextConfig;

