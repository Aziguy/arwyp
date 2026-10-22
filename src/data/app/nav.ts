export type AppNavItem = { label: string; href: string; icon: string; quote?: 'a' | 'b'; badge?: string };
export type AppNavGroup = { title?: string; items: AppNavItem[] };

export const adminNav: AppNavGroup[] = [
  { items: [{ label: 'Dashboard', href: '/admin/', icon: 'layout-dashboard' }] },
  {
    title: 'Operations',
    items: [
      { label: 'Bookings', href: '/admin/bookings/', icon: 'calendar-days', quote: 'b', badge: '12' },
      { label: 'Patients', href: '/admin/patients/', icon: 'folder-lock', quote: 'b' },
      { label: 'Payments', href: '/admin/payments/', icon: 'credit-card', quote: 'b' },
      { label: 'Medical aid', href: '/admin/medical-aid/', icon: 'shield-plus', quote: 'b' },
      { label: 'GP referrals', href: '/admin/referrals/', icon: 'send', quote: 'b', badge: '4' },
    ],
  },
  {
    title: 'Content',
    items: [
      { label: 'Pages', href: '/admin/pages/', icon: 'file-text' },
      { label: 'Specialists', href: '/admin/specialists/', icon: 'stethoscope' },
      { label: 'News', href: '/admin/news/', icon: 'newspaper' },
      { label: 'Vacancies', href: '/admin/vacancies/', icon: 'briefcase' },
      { label: 'Programmes', href: '/admin/programmes/', icon: 'graduation-cap' },
      { label: 'Patient info', href: '/admin/patient-info/', icon: 'clock' },
      { label: 'Submissions', href: '/admin/submissions/', icon: 'inbox', badge: '7' },
      { label: 'Media library', href: '/admin/media/', icon: 'image' },
    ],
  },
  {
    title: 'Modules',
    items: [
      { label: 'Applicants', href: '/admin/applicants/', icon: 'user-search', quote: 'b' },
      { label: 'E-learning', href: '/admin/elearning/', icon: 'book-open-check', quote: 'b' },
      { label: 'Investor hub', href: '/admin/investors/', icon: 'landmark', quote: 'b' },
      { label: 'SEO & AI search', href: '/admin/seo/', icon: 'search-check', quote: 'b' },
      { label: 'Notifications', href: '/admin/notifications/', icon: 'bell', quote: 'b' },
    ],
  },
  {
    title: 'System',
    items: [
      { label: 'Users', href: '/admin/users/', icon: 'users' },
      { label: 'Roles & permissions', href: '/admin/roles/', icon: 'key-round', quote: 'b' },
      { label: 'Audit trail', href: '/admin/audit/', icon: 'scroll-text', quote: 'b' },
      { label: 'Settings', href: '/admin/settings/', icon: 'settings' },
    ],
  },
];

export const doctorNav: AppNavGroup[] = [
  {
    items: [
      { label: 'Today', href: '/doctor/', icon: 'layout-dashboard' },
      { label: 'Calendar', href: '/doctor/calendar/', icon: 'calendar-days' },
      { label: 'My patients', href: '/doctor/patients/', icon: 'folder-lock' },
      { label: 'Payments', href: '/doctor/payments/', icon: 'wallet' },
    ],
  },
];

export const portalNav: AppNavGroup[] = [
  {
    items: [
      { label: 'Home', href: '/portal/', icon: 'house' },
      { label: 'Appointments', href: '/portal/appointments/', icon: 'calendar-check' },
      { label: 'Records', href: '/portal/records/', icon: 'file-heart' },
      { label: 'Billing', href: '/portal/billing/', icon: 'receipt' },
      { label: 'Prescriptions', href: '/portal/prescriptions/', icon: 'pill' },
      { label: 'Messages', href: '/portal/messages/', icon: 'message-square', badge: '2' },
      { label: 'Health vault', href: '/portal/vault/', icon: 'heart-pulse' },
    ],
  },
];

export const portalTabs = ['/portal/', '/portal/appointments/', '/portal/records/', '/portal/billing/', '/portal/messages/'];
