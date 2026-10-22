import { specialists } from '@/data/specialists';
import { departments } from '@/data/departments';
import { articles } from '@/data/news';
import { vacancies, vacancySlug } from '@/data/careers';
import { legalPages } from '@/data/legal';
import { patientTopics } from '@/data/patients';

export type Route = { path: string; title: string; priority: number; changefreq: 'daily' | 'weekly' | 'monthly' | 'yearly'; lastmod?: string };

const UPDATED = '2026-10-22';

const core: Route[] = [
  { path: '/', title: 'Home', priority: 1, changefreq: 'weekly' },
  { path: '/specialists/', title: 'Find a Specialist', priority: 0.9, changefreq: 'daily' },
  { path: '/services/', title: 'Our Services', priority: 0.9, changefreq: 'monthly' },
  { path: '/departments/', title: 'Specialised Departments', priority: 0.9, changefreq: 'monthly' },
  { path: '/patients/', title: 'Patient Information', priority: 0.8, changefreq: 'monthly' },
  { path: '/medical-tourism/', title: 'Medical Tourism & Travel Clinic', priority: 0.7, changefreq: 'monthly' },
  { path: '/about/', title: 'About Us', priority: 0.7, changefreq: 'yearly' },
  { path: '/about/management/', title: 'Management Team', priority: 0.5, changefreq: 'yearly' },
  { path: '/about/investors/', title: 'Investor Information', priority: 0.5, changefreq: 'yearly' },
  { path: '/news/', title: 'Media & News', priority: 0.7, changefreq: 'weekly' },
  { path: '/news/3d-tour/', title: '3D Maternity Tour', priority: 0.5, changefreq: 'yearly' },
  { path: '/careers/', title: 'Careers', priority: 0.7, changefreq: 'weekly' },
  { path: '/training/', title: 'Training Institute', priority: 0.6, changefreq: 'monthly' },
  { path: '/contact/', title: 'Contact Us', priority: 0.8, changefreq: 'yearly' },
  { path: '/gp-referral/', title: 'GP Referral Portal', priority: 0.5, changefreq: 'yearly' },
];

export function publicRoutes(): Route[] {
  return [
    ...core,
    ...patientTopics.map((t) => ({ path: `/patients/${t.slug}/`, title: t.title, priority: 0.7, changefreq: 'monthly' as const })),
    ...departments.map((d) => ({ path: `/departments/${d.slug}/`, title: d.name, priority: 0.8, changefreq: 'monthly' as const })),
    ...specialists.map((s) => ({ path: `/specialists/${s.slug}/`, title: `${s.name}, ${s.discipline}`, priority: 0.6, changefreq: 'weekly' as const })),
    ...articles.map((a) => ({ path: `/news/${a.slug}/`, title: a.title, priority: 0.6, changefreq: 'yearly' as const, lastmod: a.date })),
    ...vacancies.map((v) => ({ path: `/careers/${vacancySlug(v)}/`, title: v.title, priority: 0.5, changefreq: 'weekly' as const, lastmod: v.posted })),
    ...legalPages.map((l) => ({ path: `/legal/${l.slug}/`, title: l.title, priority: 0.2, changefreq: 'yearly' as const, lastmod: l.updated })),
  ].map((r) => ({ lastmod: UPDATED, ...r }));
}
