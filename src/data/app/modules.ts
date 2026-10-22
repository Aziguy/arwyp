import { vacancies } from '@/data/careers';
import { programmes } from '@/data/training';
import { seeded } from '@/lib/random';
import { TODAY, addDays, patientNames, time } from './common';

const rng = seeded(404);

export const pipelineStages = ['Applied', 'Screening', 'Interview', 'Offer', 'Hired'] as const;

export const applicants = Array.from({ length: 36 }, (_, i) => {
  const v = vacancies[i % vacancies.length];
  const stage = pipelineStages[Math.min(4, Math.floor(rng.next() * rng.next() * 6))];
  return {
    id: `AP-${String(6100 + i)}`,
    name: patientNames[(i * 5 + 3) % patientNames.length],
    role: v.title,
    vacancy: v.ref,
    department: v.department,
    applied: addDays(TODAY, -rng.int(0, 21)),
    stage,
    score: rng.int(58, 97),
    cv: `${patientNames[(i * 5 + 3) % patientNames.length].split(' ')[1].toLowerCase()}-cv.pdf`,
    interview: stage === 'Interview' ? `${addDays(TODAY, rng.int(1, 8))} ${time(9 * 60 + rng.int(0, 12) * 30)}` : '',
  };
});

export const courses = programmes.map((p, i) => ({
  slug: p.slug,
  name: p.name,
  nqf: p.nqf,
  mode: p.mode,
  enrolled: rng.int(14, 96),
  completion: rng.int(38, 94),
  cpd: p.cpd ?? 0,
  revenue: rng.int(40, 320) * 1000,
  status: i === 3 ? 'Draft' : 'Published',
}));

export const enrolments = Array.from({ length: 24 }, (_, i) => {
  const c = courses[i % courses.length];
  const progress = rng.int(5, 100);
  return {
    id: `EN-${String(3300 + i)}`,
    learner: patientNames[(i * 3 + 7) % patientNames.length],
    course: c.name,
    started: addDays(TODAY, -rng.int(5, 120)),
    progress,
    cpd: c.cpd ? Math.round((c.cpd * progress) / 100) : 0,
    status: progress === 100 ? 'Certified' : progress > 60 ? 'In progress' : 'Enrolled',
  };
});

export const investorDocs = [
  { title: 'Integrated Annual Report 2026', type: 'Annual report', version: 'v3.0', updated: '2026-09-30', access: 'Shareholders', size: '8.4 MB' },
  { title: 'Interim Financial Results H1 2026', type: 'Financials', version: 'v1.2', updated: '2026-08-28', access: 'Shareholders', size: '2.1 MB' },
  { title: 'Board Charter', type: 'Governance', version: 'v2.4', updated: '2026-06-15', access: 'Public', size: '640 KB' },
  { title: 'Audit & Risk Committee Terms of Reference', type: 'Governance', version: 'v1.8', updated: '2026-05-02', access: 'Public', size: '410 KB' },
  { title: 'Shareholding Structure', type: 'Governance', version: 'v4.1', updated: '2026-10-01', access: 'Shareholders', size: '220 KB' },
  { title: 'Capital Investment Plan 2027-2029', type: 'Strategy', version: 'v0.9', updated: '2026-10-18', access: 'Board only', size: '3.7 MB' },
  { title: 'B-BBEE Certificate', type: 'Compliance', version: 'v2026', updated: '2026-03-11', access: 'Public', size: '180 KB' },
];

const kwHeads = ['cardiologist', 'orthopaedic surgeon', 'knee replacement', 'maternity hospital', 'emergency room', 'neurosurgeon', 'bariatric surgery', 'ivf clinic', 'paediatrician', 'travel clinic', 'mri scan', 'urologist', 'hip replacement', 'spine surgeon', 'gynaecologist', 'ent specialist'];
const kwMods = ['kempton park', 'near or tambo airport', 'east rand', 'gauteng', 'near me', 'private hospital', 'cost', 'best'];

export const keywords = Array.from({ length: 324 }, (_, i) => {
  const head = kwHeads[i % kwHeads.length];
  const mod = kwMods[Math.floor(i / kwHeads.length) % kwMods.length];
  const rank = Math.max(1, Math.round(rng.next() ** 1.6 * 38));
  return {
    keyword: mod === 'best' || mod === 'cost' ? `${mod} ${head}` : `${head} ${mod}`,
    intent: rng.pick(['Booking', 'Booking', 'Research', 'Navigation']),
    volume: rng.int(2, 120) * 10,
    rank,
    change: rng.int(-4, 9),
    ai: rng.next() > 0.55 ? 'Cited' : 'Not cited',
  };
});

export const aiVisibility = [
  { label: 'Google AI Overviews', value: 62 },
  { label: 'ChatGPT', value: 48 },
  { label: 'Gemini', value: 44 },
  { label: 'Perplexity', value: 39 },
  { label: 'Bing Copilot', value: 33 },
];

export const notifications = Array.from({ length: 40 }, (_, i) => {
  const channel = rng.pick(['SMS', 'SMS', 'Email', 'WhatsApp']);
  return {
    id: `NT-${String(88000 + i)}`,
    channel,
    template: rng.pick(['Booking confirmation', '24-hour reminder', 'Payment receipt', 'Pre-admission link', 'Results available', 'Cancellation notice']),
    to: channel === 'Email' ? `${patientNames[i % patientNames.length].split(' ')[0].toLowerCase()}@mail.example` : `+27 8${rng.int(1, 4)} *** ${String(rng.int(1000, 9999))}`,
    sent: `${addDays(TODAY, -rng.int(0, 3))} ${time(7 * 60 + rng.int(0, 26) * 30)}`,
    status: rng.pick(['Delivered', 'Delivered', 'Delivered', 'Read', 'Queued', 'Failed']),
  };
});

const actors = ['n.mahlaba (super-admin)', 'reception.01 (receptionist)', 'ward3.sister (nurse)', 'k.pieterse (admin)', 'system'];
const actions = ['Signed in (2FA)', 'Viewed patient record', 'Updated booking', 'Issued refund', 'Exported report (CSV)', 'Changed role permissions', 'Published news article', 'Blocked out calendar', 'Downloaded investor document', 'Failed sign-in attempt'];

export const auditLog = Array.from({ length: 48 }, (_, i) => ({
  id: `AU-${String(1_204_900 + i)}`,
  at: `${addDays(TODAY, -Math.floor(i / 12))} ${time(18 * 60 - (i % 12) * 47)}`,
  actor: rng.pick(actors),
  action: rng.pick(actions),
  target: rng.pick(['PT-20418', 'BK-48233', 'TX-903142', 'Role: nurse', 'Article #42', 'Calendar: Dr Naidoo', 'Report: Revenue Q3']),
  ip: `196.${rng.int(20, 250)}.${rng.int(1, 250)}.${rng.int(1, 250)}`,
  hash: Math.floor(rng.next() * 0xffffffff).toString(16).padStart(8, '0'),
}));

export const roles = ['Receptionist', 'Nurse', 'Specialist', 'Admin', 'Super-admin'] as const;

export const permissions: { area: string; grants: (0 | 1 | 2)[] }[] = [
  { area: 'Bookings', grants: [2, 1, 2, 2, 2] },
  { area: 'Patient records', grants: [0, 1, 2, 1, 2] },
  { area: 'Clinical notes', grants: [0, 1, 2, 0, 1] },
  { area: 'Payments & refunds', grants: [1, 0, 1, 2, 2] },
  { area: 'Medical aid claims', grants: [1, 0, 1, 2, 2] },
  { area: 'Website content', grants: [0, 0, 0, 2, 2] },
  { area: 'Specialist onboarding', grants: [0, 0, 0, 2, 2] },
  { area: 'Reports & exports', grants: [0, 0, 1, 2, 2] },
  { area: 'Roles & permissions', grants: [0, 0, 0, 0, 2] },
  { area: 'Audit trail', grants: [0, 0, 0, 1, 2] },
];
