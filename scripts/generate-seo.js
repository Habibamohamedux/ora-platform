const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const fallbackSiteUrl = 'https://www.ora-healthtech.com';
const rawSiteUrl = process.env.SITE_URL || process.env.REACT_APP_SITE_URL || fallbackSiteUrl;
const siteUrl = rawSiteUrl.replace(/\/+$/, '');
const buildDate = new Date().toISOString().split('T')[0];

const pages = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/circle', priority: '0.9', changefreq: 'weekly' },
  { path: '/invest', priority: '0.9', changefreq: 'weekly' },
  { path: '/trust', priority: '0.9', changefreq: 'monthly' },
  { path: '/insights', priority: '0.85', changefreq: 'weekly' },
  { path: '/contact', priority: '0.8', changefreq: 'monthly' },
  { path: '/futures', priority: '0.8', changefreq: 'weekly' },
  { path: '/privacy-policy', priority: '0.5', changefreq: 'monthly' },
  { path: '/terms-of-use', priority: '0.5', changefreq: 'monthly' },
  { path: '/cookie-policy', priority: '0.5', changefreq: 'monthly' },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    ({ path: pagePath, priority, changefreq }) => `  <url>
    <loc>${siteUrl}${pagePath}</loc>
    <lastmod>${buildDate}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml
`;

const manifest = {
  name: 'ORA',
  short_name: 'ORA',
  description:
    'ORA is an AI-powered maternal health platform supporting pregnancy, fertility, connected care, and clinical intelligence.',
  start_url: '/',
  display: 'standalone',
  background_color: '#faf8f9',
  theme_color: '#faf8f9',
  icons: [
    {
      src: '/icon-192.svg',
      sizes: 'any',
      type: 'image/svg+xml',
    },
    {
      src: '/icon-512.svg',
      sizes: 'any',
      type: 'image/svg+xml',
    },
  ],
};

if (siteUrl === fallbackSiteUrl) {
  console.log(
    '[seo] Using fallback SITE_URL https://www.ora-healthtech.com. Set SITE_URL or REACT_APP_SITE_URL at deploy time if your launch domain is different.'
  );
}

fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap, 'utf8');
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots, 'utf8');
fs.writeFileSync(path.join(publicDir, 'manifest.json'), `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
