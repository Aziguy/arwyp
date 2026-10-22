export const seo = {
  indexable: import.meta.env.PUBLIC_SEO_INDEX === 'true',
  siteName: 'Arwyp Medical Centre',
  locale: 'en_ZA',
  language: 'en-ZA',
  defaultImage: '/og/default.png',
  imageAlt: 'Arwyp Medical Centre, private hospital in Kempton Park since 1985',
  disallow: ['/admin/', '/doctor/', '/portal/', '/offline/'],
} as const;
