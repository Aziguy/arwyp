import { site } from '@/config/site';

const origin = 'https://aziguy.github.io/arwyp/';

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['Hospital', 'MedicalOrganization'],
    name: site.name,
    url: origin,
    telephone: site.phone.display,
    email: site.email,
    foundingDate: String(site.founded),
    medicalSpecialty: ['Emergency', 'Surgical', 'Obstetric', 'Cardiovascular', 'Neurologic', 'Oncologic'],
    address: {
      '@type': 'PostalAddress',
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.province,
      postalCode: site.address.postcode,
      addressCountry: 'ZA',
    },
    geo: { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng },
    openingHours: 'Mo-Su 00:00-23:59',
  };
}

export function physicianSchema(p: { name: string; specialty: string; qualifications: string; phone: string; slug: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Physician',
    name: p.name,
    medicalSpecialty: p.specialty,
    description: p.qualifications,
    telephone: p.phone,
    url: `${origin}specialists/${p.slug}/`,
    hospitalAffiliation: { '@type': 'Hospital', name: site.name },
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })),
  };
}
