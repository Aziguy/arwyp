import type { APIRoute } from 'astro';
import { seo } from '@/config/seo';
import { absolute, url } from '@/lib/paths';

export const GET: APIRoute = () => {
  const rules = seo.indexable ? ['Allow: /', ...seo.disallow.map((p) => `Disallow: ${url(p)}`)] : ['Disallow: /'];
  const body = ['User-agent: *', ...rules, '', `Sitemap: ${absolute('/sitemap.xml')}`, ''].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
