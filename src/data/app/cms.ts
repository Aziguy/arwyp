import { seeded } from '@/lib/random';
import { TODAY, addDays, dayMonth, patientNames, time } from './common';

const rng = seeded(12);

export const sitePages = [
  { title: 'Home', path: '/', template: 'Home', updated: '2026-10-21', editor: 'Carmen Abrahams', status: 'Published' },
  { title: 'About Arwyp', path: '/about/', template: 'Landing', updated: '2026-10-02', editor: 'Carmen Abrahams', status: 'Published' },
  { title: 'Management Team', path: '/about/management/', template: 'People grid', updated: '2026-09-14', editor: 'Rethabile Moloi', status: 'Published' },
  { title: 'Investor Information', path: '/about/investors/', template: 'Landing', updated: '2026-08-30', editor: 'Werner Kotze', status: 'Published' },
  { title: 'Our Services', path: '/services/', template: 'Filterable grid', updated: '2026-10-11', editor: 'Carmen Abrahams', status: 'Published' },
  { title: 'Specialised Departments', path: '/departments/', template: 'Department', updated: '2026-10-19', editor: 'Suresh Moonsamy', status: 'In review' },
  { title: 'Patient Information', path: '/patients/', template: 'Hub', updated: '2026-10-08', editor: 'Lindiwe Zwane', status: 'Published' },
  { title: 'Find a Specialist', path: '/specialists/', template: 'Directory', updated: '2026-10-22', editor: 'System sync', status: 'Published' },
  { title: 'Medical Tourism & Travel Clinic', path: '/medical-tourism/', template: 'Landing', updated: '2026-09-21', editor: 'Carmen Abrahams', status: 'Published' },
  { title: 'Media / News', path: '/news/', template: 'Feed', updated: '2026-10-20', editor: 'Carmen Abrahams', status: 'Published' },
  { title: 'Careers', path: '/careers/', template: 'Listings', updated: '2026-10-15', editor: 'Rethabile Moloi', status: 'Published' },
  { title: 'Training Institute', path: '/training/', template: 'Programmes', updated: '2026-10-05', editor: 'Lindiwe Zwane', status: 'Draft' },
  { title: 'Contact Us', path: '/contact/', template: 'Form + map', updated: '2026-07-28', editor: 'Carmen Abrahams', status: 'Published' },
  { title: 'Privacy Policy', path: '/legal/privacy/', template: 'Legal', updated: '2026-06-30', editor: 'Information Officer', status: 'Published' },
];

const subjects = ['Appointments & bookings', 'Billing & accounts', 'Medical aid query', 'Compliments', 'Complaint', 'Media enquiry', 'General enquiry'];

export const submissions = Array.from({ length: 26 }, (_, i) => {
  const form = i % 3 === 0 ? 'Pre-admission' : 'Contact Us';
  return {
    id: `FS-${String(5120 + i)}`,
    form,
    name: patientNames[(i * 11 + 4) % patientNames.length],
    subject: form === 'Pre-admission' ? `Admission on ${dayMonth(addDays(TODAY, rng.int(1, 12)))}` : rng.pick(subjects),
    routed: form === 'Pre-admission' ? 'admissions@' : rng.pick(['bookings@', 'accounts@', 'patientcare@', 'media@', 'info@']),
    received: `${addDays(TODAY, -Math.floor(i / 4))} ${time(8 * 60 + rng.int(0, 22) * 30)}`,
    consent: 'Granted',
    status: i < 7 ? 'New' : rng.pick(['Closed', 'Closed', 'In progress']),
  };
});

export const media = [
  { name: 'hero-maternity-ward.jpg', icon: 'image', tone: 'sky', size: '1.8 MB', dims: '2400 x 1350', used: 3 },
  { name: 'o-arm-theatre.jpg', icon: 'scan', tone: 'navy', size: '2.2 MB', dims: '2400 x 1600', used: 2 },
  { name: 'emergency-entrance.jpg', icon: 'siren', tone: 'rose', size: '1.4 MB', dims: '2000 x 1333', used: 4 },
  { name: 'coffee-shop.jpg', icon: 'coffee', tone: 'sand', size: '960 KB', dims: '1600 x 1067', used: 1 },
  { name: 'management-team.jpg', icon: 'users', tone: 'teal', size: '2.6 MB', dims: '3000 x 2000', used: 1 },
  { name: 'training-lab.jpg', icon: 'graduation-cap', tone: 'teal', size: '1.1 MB', dims: '1800 x 1200', used: 2 },
  { name: 'maternity-3d-tour.mp4', icon: 'video', tone: 'sky', size: '84 MB', dims: '1080p', used: 2 },
  { name: 'patients-rights-charter.pdf', icon: 'file-text', tone: 'navy', size: '420 KB', dims: 'PDF', used: 3 },
  { name: 'pre-admission-form.pdf', icon: 'file-text', tone: 'navy', size: '310 KB', dims: 'PDF', used: 2 },
  { name: 'gift-shop-flowers.jpg', icon: 'flower-2', tone: 'rose', size: '880 KB', dims: '1600 x 1067', used: 1 },
  { name: 'hybrid-theatre.jpg', icon: 'monitor-dot', tone: 'navy', size: '2.0 MB', dims: '2400 x 1600', used: 2 },
  { name: 'travel-clinic.jpg', icon: 'plane', tone: 'teal', size: '1.2 MB', dims: '1800 x 1200', used: 1 },
] as const;

export const cmsUsers = [
  { name: 'Carmen Abrahams', email: 'c.abrahams@arwyp.example', role: 'Admin', lastActive: '2026-10-22 09:14', status: 'Active', quote: 'both' },
  { name: 'Rethabile Moloi', email: 'r.moloi@arwyp.example', role: 'Editor', lastActive: '2026-10-21 16:40', status: 'Active', quote: 'both' },
  { name: 'Lindiwe Zwane', email: 'l.zwane@arwyp.example', role: 'Editor', lastActive: '2026-10-20 11:02', status: 'Active', quote: 'both' },
  { name: 'Kyle Pieterse', email: 'k.pieterse@arwyp.example', role: 'Admin', lastActive: '2026-10-22 08:01', status: 'Active', quote: 'both' },
  { name: 'Werner Kotze', email: 'w.kotze@arwyp.example', role: 'Editor', lastActive: '2026-10-12 14:22', status: 'Active', quote: 'both' },
  { name: 'Nandi Mahlaba', email: 'n.mahlaba@arwyp.example', role: 'Super-admin', lastActive: '2026-10-22 07:45', status: 'Active', quote: 'b' },
  { name: 'Front Desk 01', email: 'reception.01@arwyp.example', role: 'Receptionist', lastActive: '2026-10-22 10:30', status: 'Active', quote: 'b' },
  { name: 'Ward 3 Sister', email: 'ward3@arwyp.example', role: 'Nurse', lastActive: '2026-10-22 06:58', status: 'Active', quote: 'b' },
  { name: 'Marketing Intern', email: 'intern@arwyp.example', role: 'Editor', lastActive: '2026-09-02 12:10', status: 'Invited', quote: 'both' },
];

export const activity = [
  { icon: 'newspaper', text: 'Carmen published "Know your normal: breast health"', at: '09:14' },
  { icon: 'briefcase', text: 'Rethabile added vacancy "Registered Nurse: ICU"', at: '08:52' },
  { icon: 'stethoscope', text: 'Specialist profile updated: Dr Lerato Mokoena', at: '08:30' },
  { icon: 'clock', text: 'Visiting hours updated for Maternity Ward', at: 'Yesterday' },
  { icon: 'graduation-cap', text: 'Programme intake changed: Diploma in Nursing', at: 'Yesterday' },
];
