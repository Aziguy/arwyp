import type { APIRoute } from 'astro';
import { publicRoutes } from '@/lib/routes';
import { absolute } from '@/lib/paths';

export const GET: APIRoute = () => {
  const urls = publicRoutes()
    .map(
      (r) =>
        `  <url>\n    <loc>${absolute(r.path)}</loc>\n    <lastmod>${r.lastmod}</lastmod>\n    <changefreq>${r.changefreq}</changefreq>\n    <priority>${r.priority.toFixed(1)}</priority>\n  </url>`,
    )
    .join('\n');

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
