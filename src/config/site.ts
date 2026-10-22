export const site = {
  name: 'Arwyp Medical Centre',
  shortName: 'Arwyp',
  tagline: "Kempton Park's Trusted Private Hospital Since 1985",
  founded: 1985,
  description:
    'Arwyp Medical Centre is a COHSASA-accredited multidisciplinary private hospital in Kempton Park, Gauteng, with 100+ specialists, modern theatres and a 24-hour emergency department.',
  phone: { display: '+27 (0)11 922 1000', href: 'tel:+27119221000' },
  emergency: { display: '+27 (0)11 922 1000', href: 'tel:+27119221000' },
  email: 'info@arwyp.example',
  whatsapp: { display: '+27 (0)82 000 1985', href: 'https://wa.me/27820001985' },
  address: {
    street: '20 Pine Avenue',
    area: 'Kempton Park CBD',
    city: 'Kempton Park',
    province: 'Gauteng',
    postcode: '1619',
    country: 'South Africa',
  },
  geo: { lat: -26.1063, lng: 28.2319 },
  social: [
    { label: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/' },
    { label: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/' },
    { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/' },
    { label: 'X', icon: 'twitter', href: 'https://x.com/' },
  ],
  accreditations: ['COHSASA', 'HASA', 'NHN', 'BHF', 'HPCSA'],
} as const;

export type NavLink = { label: string; href: string; description?: string; icon?: string; quote?: 'b' };
export type NavItem = { label: string; href: string; children?: NavLink[] };

export const primaryNav: NavItem[] = [
  {
    label: 'About Us',
    href: '/about/',
    children: [
      { label: 'About Arwyp', href: '/about/', description: 'Our story since 1985', icon: 'landmark' },
      { label: 'Management Team', href: '/about/management/', description: 'Executives and board', icon: 'users' },
      { label: 'Investors', href: '/about/investors/', description: 'Governance and partner enquiries', icon: 'trending-up' },
    ],
  },
  {
    label: 'Services',
    href: '/services/',
    children: [
      { label: 'Our Services', href: '/services/', description: 'The full range of care we provide', icon: 'stethoscope' },
      { label: 'Specialised Departments', href: '/departments/', description: 'Centres of expertise', icon: 'microscope' },
      { label: 'GP Referral Portal', href: '/gp-referral/', description: 'Refer a patient online', icon: 'send', quote: 'b' },
    ],
  },
  {
    label: 'Patient Information',
    href: '/patients/',
    children: [
      { label: 'Visiting Hours', href: '/patients/visiting-hours/', icon: 'clock' },
      { label: 'Pre-Admission', href: '/patients/pre-admission/', icon: 'clipboard-check' },
      { label: "Patients' Rights Charter", href: '/patients/rights-charter/', icon: 'scale' },
      { label: 'Gift, Coffee Shop & Pharmacy', href: '/patients/amenities/', icon: 'gift' },
      { label: 'Maternity, Babyshooze & Doula', href: '/patients/maternity/', icon: 'baby' },
      { label: 'Patient Experience', href: '/patients/experience/', icon: 'message-square-heart' },
    ],
  },
  { label: 'Find a Specialist', href: '/specialists/' },
  { label: 'Medical Tourism', href: '/medical-tourism/' },
  {
    label: 'Media',
    href: '/news/',
    children: [
      { label: 'News & Health Insights', href: '/news/', icon: 'newspaper' },
      { label: '3D Maternity Tour', href: '/news/3d-tour/', icon: 'box' },
      { label: '360° Hospital Tour', href: '/news/3d-tour/#virtual-tour', icon: 'rotate-3d', quote: 'b' },
    ],
  },
];

export const utilityNav: NavLink[] = [
  { label: 'Careers', href: '/careers/' },
  { label: 'Training Institute', href: '/training/' },
  { label: 'Contact Us', href: '/contact/' },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: 'Hospital',
    links: [
      { label: 'About Us', href: '/about/' },
      { label: 'Management Team', href: '/about/management/' },
      { label: 'Investors', href: '/about/investors/' },
      { label: 'Careers', href: '/careers/' },
      { label: 'Training Institute', href: '/training/' },
    ],
  },
  {
    title: 'Care',
    links: [
      { label: 'Our Services', href: '/services/' },
      { label: 'Specialised Departments', href: '/departments/' },
      { label: 'Find a Specialist', href: '/specialists/' },
      { label: 'Medical Tourism', href: '/medical-tourism/' },
      { label: 'GP Referral Portal', href: '/gp-referral/', quote: 'b' },
    ],
  },
  {
    title: 'Patients',
    links: [
      { label: 'Visiting Hours', href: '/patients/visiting-hours/' },
      { label: 'Pre-Admission', href: '/patients/pre-admission/' },
      { label: "Patients' Rights", href: '/patients/rights-charter/' },
      { label: 'Patient Portal', href: '/portal/', quote: 'b' },
      { label: 'Media & News', href: '/news/' },
      { label: 'Contact Us', href: '/contact/' },
    ],
  },
];

export const legalNav: NavLink[] = [
  { label: 'Privacy Policy', href: '/legal/privacy/' },
  { label: 'Terms & Conditions', href: '/legal/terms/' },
  { label: 'POPIA', href: '/legal/popia/' },
  { label: 'PAIA Manual', href: '/legal/paia/' },
  { label: 'Cookie Policy', href: '/legal/cookies/' },
];
