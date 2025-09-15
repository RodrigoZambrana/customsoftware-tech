/** @type {import('next-sitemap').IConfig} */
const siteUrl = 'https://www.software-strategy.com';

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  outDir: 'out',
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  autoLastmod: true,
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
  alternateRefs: [
    { href: `${siteUrl}`, hreflang: 'es' },
    { href: `${siteUrl}/en`, hreflang: 'en' },
  ],
  transform: async (config, path) => ({
    loc: path,
    changefreq: 'weekly',
    priority: path === '/' || path === '/en' ? 1.0 : 0.8,
    lastmod: new Date().toISOString(),
    // Provide language base URLs; next-sitemap appends current path
    alternateRefs: [
      { href: `${siteUrl}`, hreflang: 'es' },
      { href: `${siteUrl}/en`, hreflang: 'en' },
    ],
  }),
  additionalPaths: async (config) => {
    const paths = [
      '/',
      '/en',
      '/pricing',
      '/en/pricing',
      '/contact',
      '/en/contact',
      '/faqs',
      '/en/faqs',
      '/web-development',
      '/en/web-development',
      '/custom-software',
      '/en/custom-software',
      '/services/digital-marketing',
      '/en/services/digital-marketing',
      '/seo-sem',
      '/en/seo-sem',
      '/services',
      '/en/services',
    ];

    return paths.map((p) => ({ loc: p, changefreq: 'weekly', priority: p === '/' || p === '/en' ? 1.0 : 0.8 }));
  },
};
