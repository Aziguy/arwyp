import { seeded } from '@/lib/random';
import { bookings } from './bookings';
import { TODAY, addDays, dayMonth } from './common';

const rng = seeded(31);

export const days30 = Array.from({ length: 30 }, (_, i) => addDays(TODAY, i - 29));
export const days30Labels = days30.map(dayMonth);

const wave = (i: number, base: number, amp: number) => Math.round(base + Math.sin(i / 2.4) * amp + i * (base / 90) + rng.int(-amp, amp) / 2);

export const bookingsDaily = {
  online: days30.map((_, i) => wave(i, 46, 9)),
  phone: days30.map((_, i) => wave(i, 22, 5) - Math.round(i / 6)),
};

export const sessionsDaily = days30.map((_, i) => wave(i, 1850, 260));

export const months = ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'];
export const revenueMonthly = [1_240_000, 1_310_000, 1_395_000, 1_462_000, 1_538_000, 1_612_000];

export const kpis = {
  bookings: { value: 1_428, delta: 12.4, trend: [880, 910, 960, 1010, 1080, 1120, 1190, 1240, 1300, 1350, 1390, 1428] },
  revenue: { value: 1_612_000, delta: 4.8, trend: [1.1, 1.15, 1.18, 1.21, 1.24, 1.31, 1.35, 1.4, 1.46, 1.5, 1.54, 1.61] },
  conversion: { value: 6.8, delta: 0.9, trend: [4.9, 5.1, 5.2, 5.4, 5.6, 5.8, 6, 6.1, 6.3, 6.5, 6.6, 6.8] },
  noShow: { value: 3.1, delta: -1.2, trend: [5.4, 5.1, 4.9, 4.6, 4.4, 4.2, 3.9, 3.8, 3.6, 3.4, 3.2, 3.1] },
  patients: { value: 9_842, delta: 6.1, trend: [7400, 7650, 7900, 8100, 8320, 8550, 8790, 9010, 9230, 9450, 9650, 9842] },
  sessions: { value: 58_420, delta: 9.3, trend: [41, 43, 44, 46, 47, 49, 50, 52, 54, 55, 57, 58.4] },
  avgTime: { value: '2m 48s', delta: 7.2, trend: [2.1, 2.2, 2.2, 2.3, 2.4, 2.4, 2.5, 2.6, 2.6, 2.7, 2.7, 2.8] },
  forms: { value: 412, delta: 18.5, trend: [210, 230, 250, 270, 290, 300, 320, 340, 360, 380, 398, 412] },
  rank: { value: 4.2, delta: -1.6, trend: [9.8, 9.1, 8.4, 7.9, 7.2, 6.6, 6.1, 5.6, 5.1, 4.8, 4.5, 4.2] },
};

const tally = new Map<string, number>();
bookings.forEach((b) => tally.set(b.discipline, (tally.get(b.discipline) ?? 0) + 1));
export const bookingsByDiscipline = [...tally.entries()]
  .sort((a, b) => b[1] - a[1])
  .slice(0, 8)
  .map(([label, value]) => ({ label, value }));

const perSpecialist = new Map<string, { name: string; slug: string; bookings: number; revenue: number; noShow: number }>();
bookings.forEach((b) => {
  const row = perSpecialist.get(b.specialistSlug) ?? { name: b.specialist, slug: b.specialistSlug, bookings: 0, revenue: 0, noShow: 0 };
  row.bookings += 1;
  if (b.status === 'Completed' || b.status === 'Confirmed') row.revenue += b.amount;
  if (b.status === 'No-show') row.noShow += 1;
  perSpecialist.set(b.specialistSlug, row);
});
export const topSpecialists = [...perSpecialist.values()].sort((a, b) => b.revenue - a.revenue).slice(0, 6);

export const sourceShare = [
  { label: 'Organic search', value: 41 },
  { label: 'Direct', value: 23 },
  { label: 'Google Business Profile', value: 14 },
  { label: 'AI assistants', value: 9 },
  { label: 'Social', value: 8 },
  { label: 'Referral', value: 5 },
];

export const topPages = [
  { label: 'Find a Specialist', value: 18_420 },
  { label: 'Home', value: 12_960 },
  { label: 'Visiting Hours', value: 6_210 },
  { label: 'Careers', value: 4_880 },
  { label: 'Maternity', value: 3_940 },
  { label: 'Contact Us', value: 3_120 },
];
