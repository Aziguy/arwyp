export type QuoteId = 'a' | 'b';

export const DEFAULT_QUOTE: QuoteId = 'b';
export const QUOTE_STORAGE_KEY = 'arwyp.quote';

export const quotes = {
  a: {
    id: 'a',
    ref: 'AMC/2026/001-A',
    name: 'Quote A',
    title: 'The Website, As Specified',
    summary: 'Every landing page, section and feature in the AMC skeleton brief. Bookings continue by phone through each specialist’s rooms.',
    delivery: '90 working days',
    progress: 'Phase sign-offs & staging',
    backend: 'Content management for Arwyp staff',
  },
  b: {
    id: 'b',
    ref: 'AMC/2026/001-B',
    name: 'Quote B',
    title: 'The Complete Digital Platform',
    summary: 'Everything in Quote A, plus online booking and payments per specialist, a patient portal, a bespoke admin dashboard and advanced modules.',
    delivery: '8 months',
    progress: 'Monthly live demo & report',
    backend: 'Bespoke admin dashboard, specialist & patient portals',
  },
} as const;

export type FeatureRow = { label: string; a: string | boolean; b: string | boolean };

export const featureMatrix: FeatureRow[] = [
  { label: 'All 13 landing pages from the skeleton', a: true, b: true },
  { label: 'Find a Specialist search & 100+ profiles', a: true, b: '+ own SEO page each' },
  { label: 'Specialised departments & filterable services', a: true, b: true },
  { label: 'Patient information & pre-admission form', a: true, b: true },
  { label: 'Careers & Training Institute', a: 'Listings & Apply buttons', b: 'Online applications, HR & e-learning' },
  { label: 'Media/News & 3D maternity tour', a: true, b: '+ 360° hospital tour' },
  { label: 'Content management for Arwyp staff', a: true, b: 'Bespoke admin dashboard' },
  { label: 'Staff training on using the website', a: '7 days hands-on', b: true },
  { label: 'Mobile-first, SEO, schema & POPIA forms', a: true, b: true },
  { label: 'Online booking calendar per specialist', a: false, b: true },
  { label: 'Online payments (PayFast / Peach Payments)', a: false, b: true },
  { label: 'Private encrypted database per specialist', a: false, b: true },
  { label: 'Secure patient portal & installable app (PWA)', a: false, b: true },
  { label: 'Medical aid eligibility, pre-auth & claims', a: false, b: true },
  { label: 'AI search programme (300+ keywords)', a: false, b: true },
  { label: 'GP referral portal & investor hub', a: false, b: true },
  { label: 'Reporting & analytics', a: 'Google Analytics', b: 'Per-specialist dashboards' },
  { label: 'Delivery', a: '90 working days', b: '8 months' },
  { label: 'Progress visibility', a: 'Phase sign-offs & staging', b: 'Monthly live demo & report' },
];

export const quoteBHighlights = [
  { icon: 'calendar-check', label: 'Online booking', href: '/specialists/' },
  { icon: 'credit-card', label: 'Online payments', href: '/specialists/' },
  { icon: 'smartphone', label: 'Patient portal & PWA', href: '/portal/' },
  { icon: 'layout-dashboard', label: 'Admin dashboard', href: '/admin/' },
  { icon: 'stethoscope', label: 'Specialist workspace', href: '/doctor/' },
  { icon: 'send', label: 'GP referral portal', href: '/gp-referral/' },
] as const;
