/** @type {import('next-sitemap').IConfig} */
const siteUrl = 'https://www.software-strategy.com';

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  outDir: './out',                 // 👈 Asegura que se escriba en /out (post-export)
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  autoLastmod: true,
  // Excluir la versión EN de las URLs; usaremos hreflang en ES para enlazar EN
  exclude: ['/en', '/en/*'],

  // Si tu Next tiene trailingSlash: true, descomenta esta línea para que coincida.
  // trailingSlash: false,

  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
    // (Opcional) si tienes más sitemaps (cuando se particiona):
    // additionalSitemaps: [`${siteUrl}/sitemap.xml`],
  },

  // Hreflang para ES, EN y x-default (buena práctica)
  // alternateRefs computed per-path in transform

  // Control fino por URL
  transform: async (config, path) => {
    const isEn = path === '/en' || path.startsWith('/en/');
    const base = {
      loc: path,
      changefreq: 'weekly',
      priority: (path === '/' || path === '/en') ? 1.0 : 0.8,
      lastmod: new Date().toISOString(),
    };
    // Only add alternateRefs on ES pages to avoid wrong double "/en/" on EN paths
    if (!isEn) {
      return {
        ...base,
        alternateRefs: [
          { href: `${siteUrl}`, hreflang: 'es' },
          { href: `${siteUrl}/en`, hreflang: 'en' },
          { href: `${siteUrl}`, hreflang: 'x-default' },
        ],
      };
    }
    return base;
  },

  // Rutas adicionales (mantén solo las que existen)
  additionalPaths: async (config) => {
    const paths = [
      '/',
      '/pricing',
      '/contact',
      '/about',
      '/faqs',
      // Only canonical service paths under /services
      '/services/digital-marketing',
      '/services/google-seo',
      '/services',
    ];
    return paths.map(p => ({
      loc: p,
      changefreq: 'weekly',
      priority: (p === '/' || p === '/en') ? 1.0 : 0.8
    }));
  },
};
