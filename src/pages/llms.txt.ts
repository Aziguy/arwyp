import type { APIRoute } from 'astro';
import { site } from '@/config/site';
import { departments } from '@/data/departments';
import { disciplines } from '@/data/disciplines';
import { publicRoutes } from '@/lib/routes';
import { absolute } from '@/lib/paths';

export const GET: APIRoute = () => {
  const key = publicRoutes().filter((r) => r.priority >= 0.7 && !r.path.startsWith('/specialists/dr') && !r.path.startsWith('/specialists/prof'));
  const body = [
    `# ${site.name}`,
    '',
    `> ${site.description}`,
    '',
    `- Location: ${site.address.street}, ${site.address.area}, ${site.address.city}, ${site.address.province}, South Africa`,
    `- 24/7 emergency: ${site.emergency.display}`,
    `- Founded: ${site.founded}`,
    '- Accreditation: COHSASA',
    `- Specialised departments: ${departments.map((d) => d.name).join('; ')}`,
    `- Disciplines: ${disciplines.map((d) => d.name).join('; ')}`,
    '',
    '## Key pages',
    '',
    ...key.map((r) => `- [${r.title}](${absolute(r.path)})`),
    '',
    '## Optional',
    '',
    `- [Sitemap](${absolute('/sitemap.xml')})`,
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
