import { site } from '@/config/site';
import { seo } from '@/config/seo';
import { absolute } from '@/lib/paths';

type Schema = Record<string, unknown>;

const ctx = 'https://schema.org';
export const ORG_ID = `${absolute('/')}#hospital`;
const WEBSITE_ID = `${absolute('/')}#website`;

const postalAddress = {
  '@type': 'PostalAddress',
  streetAddress: site.address.street,
  addressLocality: site.address.city,
  addressRegion: site.address.province,
  postalCode: site.address.postcode,
  addressCountry: 'ZA',
};

const orgRef = { '@id': ORG_ID };

export function organizationSchema(): Schema {
  return {
    '@context': ctx,
    '@type': ['Hospital', 'MedicalOrganization'],
    '@id': ORG_ID,
    name: site.name,
    alternateName: 'Arwyp Hospital',
    description: site.description,
    url: absolute('/'),
    logo: absolute('/icons/icon-512.png'),
    image: absolute(seo.defaultImage),
    telephone: site.phone.display,
    email: site.email,
    foundingDate: String(site.founded),
    address: postalAddress,
    geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
    hasMap: `https://maps.google.com/?q=${site.geo.lat},${site.geo.lng}`,
    areaServed: ['Kempton Park', 'East Rand', 'Gauteng', 'South Africa'],
    isAcceptingNewPatients: true,
    emergencyService: 'Emergency department open 24 hours',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '00:00',
      closes: '23:59',
    },
    contactPoint: [
      { '@type': 'ContactPoint', contactType: 'emergency', telephone: site.emergency.display, availableLanguage: ['English', 'Afrikaans', 'isiZulu'] },
      { '@type': 'ContactPoint', contactType: 'customer service', telephone: site.phone.display, email: site.email },
    ],
    medicalSpecialty: ['Cardiovascular', 'Emergency', 'Gynecologic', 'Neurologic', 'Oncologic', 'Pediatric', 'Surgical', 'Urologic'],
    sameAs: site.social.map((s) => s.href),
  };
}

export function websiteSchema(): Schema {
  return {
    '@context': ctx,
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: site.name,
    url: absolute('/'),
    inLanguage: seo.language,
    publisher: orgRef,
    potentialAction: {
      '@type': 'SearchAction',
      target: { '@type': 'EntryPoint', urlTemplate: `${absolute('/specialists/')}?q={search_term_string}` },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function breadcrumbSchema(items: { label: string; href?: string }[]): Schema {
  return {
    '@context': ctx,
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: absolute(item.href) } : {}),
    })),
  };
}

export function physicianSchema(p: {
  name: string;
  slug: string;
  discipline: string;
  subSpecialty: string;
  qualifications: string;
  bio: string;
  languages: string[];
  accepting: boolean;
  practiceNumber: string;
}): Schema {
  return {
    '@context': ctx,
    '@type': 'Physician',
    '@id': `${absolute(`/specialists/${p.slug}/`)}#physician`,
    name: p.name,
    url: absolute(`/specialists/${p.slug}/`),
    description: p.bio,
    medicalSpecialty: p.discipline,
    knowsAbout: [p.discipline, p.subSpecialty],
    hasCredential: p.qualifications,
    knowsLanguage: p.languages,
    isAcceptingNewPatients: p.accepting,
    identifier: { '@type': 'PropertyValue', propertyID: 'Practice number', value: p.practiceNumber },
    telephone: site.phone.display,
    address: postalAddress,
    hospitalAffiliation: orgRef,
    memberOf: orgRef,
  };
}

export function faqSchema(items: { q: string; a: string }[]): Schema {
  return {
    '@context': ctx,
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })),
  };
}

export function articleSchema(a: { slug: string; title: string; excerpt: string; date: string; author: string; category: string }): Schema {
  const page = absolute(`/news/${a.slug}/`);
  return {
    '@context': ctx,
    '@type': 'NewsArticle',
    '@id': `${page}#article`,
    headline: a.title,
    description: a.excerpt,
    articleSection: a.category,
    datePublished: a.date,
    dateModified: a.date,
    inLanguage: seo.language,
    mainEntityOfPage: page,
    image: absolute(seo.defaultImage),
    author: { '@type': 'Organization', name: a.author },
    publisher: orgRef,
  };
}

export function jobPostingSchema(v: {
  title: string;
  ref: string;
  description: string;
  posted: string;
  closes: string;
  type: string;
  department: string;
}): Schema {
  const types: Record<string, string> = { 'Full-time': 'FULL_TIME', 'Part-time': 'PART_TIME', Locum: 'CONTRACTOR' };
  return {
    '@context': ctx,
    '@type': 'JobPosting',
    title: v.title,
    description: v.description,
    identifier: { '@type': 'PropertyValue', name: site.name, value: v.ref },
    datePosted: v.posted,
    validThrough: `${v.closes}T23:59:59+02:00`,
    employmentType: types[v.type] ?? 'OTHER',
    occupationalCategory: v.department,
    hiringOrganization: { '@type': 'Organization', name: site.name, sameAs: absolute('/'), logo: absolute('/icons/icon-512.png') },
    jobLocation: { '@type': 'Place', address: postalAddress },
    directApply: true,
  };
}

export function clinicSchema(d: { slug: string; name: string; summary: string; focus: string[] }): Schema {
  return {
    '@context': ctx,
    '@type': 'MedicalClinic',
    '@id': `${absolute(`/departments/${d.slug}/`)}#clinic`,
    name: `${d.name}, ${site.name}`,
    description: d.summary,
    url: absolute(`/departments/${d.slug}/`),
    address: postalAddress,
    telephone: site.phone.display,
    parentOrganization: orgRef,
    availableService: d.focus.map((f) => ({ '@type': 'MedicalProcedure', name: f.split(':')[0] })),
  };
}

export function courseListSchema(courses: { slug: string; name: string; summary: string; accreditation: string }[]): Schema {
  return {
    '@context': ctx,
    '@type': 'ItemList',
    itemListElement: courses.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'Course',
        '@id': `${absolute('/training/')}#${c.slug}`,
        name: c.name,
        description: c.summary,
        educationalCredentialAwarded: c.accreditation,
        provider: { '@type': 'EducationalOrganization', name: 'Arwyp Training Institute', parentOrganization: orgRef },
      },
    })),
  };
}

export function itemListSchema(name: string, paths: string[]): Schema {
  return {
    '@context': ctx,
    '@type': 'ItemList',
    name,
    numberOfItems: paths.length,
    itemListElement: paths.map((p, i) => ({ '@type': 'ListItem', position: i + 1, url: absolute(p) })),
  };
}

export function medicalPageSchema(p: { title: string; description: string; path: string; audience?: 'Patient' | 'Clinician' }): Schema {
  return {
    '@context': ctx,
    '@type': 'MedicalWebPage',
    name: p.title,
    description: p.description,
    url: absolute(p.path),
    inLanguage: seo.language,
    isPartOf: { '@id': WEBSITE_ID },
    about: orgRef,
    audience: { '@type': 'MedicalAudience', audienceType: p.audience ?? 'Patient' },
    lastReviewed: '2026-10-01',
  };
}
