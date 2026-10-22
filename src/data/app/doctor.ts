import { specialists } from '@/data/specialists';
import { seeded } from '@/lib/random';
import { TODAY, addDays, maskId, patientNames, schemes, time } from './common';

const rng = seeded(5150);

export const doctor = specialists.find((s) => s.disciplineSlug === 'cardiology') ?? specialists[0];

export const weekStart = addDays(TODAY, -3);
export const weekDays = Array.from({ length: 5 }, (_, i) => addDays(weekStart, i));

export type Slot = { day: number; start: number; minutes: number; patient: string; type: string; status: 'Confirmed' | 'Completed' | 'Pending payment' | 'No-show' };
export type Block = { day: number; start: number; minutes: number; label: string };

export const blocks: Block[] = [
  { day: 0, start: 12 * 60, minutes: 60, label: 'Lunch' },
  { day: 1, start: 7 * 60 + 30, minutes: 210, label: 'Theatre: Cath lab' },
  { day: 2, start: 12 * 60, minutes: 60, label: 'Lunch' },
  { day: 3, start: 12 * 60, minutes: 60, label: 'Lunch' },
  { day: 4, start: 14 * 60, minutes: 180, label: 'Blocked: CPD congress' },
];

const types = ['New patient', 'Follow-up', 'Echo review', 'Stress ECG', 'Telehealth'];

export const slots: Slot[] = weekDays.flatMap((_, day) => {
  const out: Slot[] = [];
  for (let m = 8 * 60; m < 17 * 60; m += 30) {
    if (blocks.some((b) => b.day === day && m >= b.start && m < b.start + b.minutes)) continue;
    if (rng.next() > 0.62) continue;
    const status = day < 3 ? (rng.next() > 0.08 ? 'Completed' : 'No-show') : rng.next() > 0.15 ? 'Confirmed' : 'Pending payment';
    out.push({ day, start: m, minutes: 30, patient: rng.pick(patientNames), type: rng.pick(types), status });
  }
  return out;
});

export const today = slots.filter((s) => s.day === 3).map((s) => ({ ...s, time: time(s.start) }));

export const doctorPatients = Array.from({ length: 28 }, (_, i) => ({
  id: `PT-${String(30120 + i)}`,
  name: patientNames[(i * 7 + 2) % patientNames.length],
  idNumber: maskId(i + 40),
  age: rng.int(19, 84),
  scheme: rng.pick(schemes),
  condition: rng.pick(['Hypertension', 'Atrial fibrillation', 'Heart failure', 'Post-PCI follow-up', 'Chest pain work-up', 'Valve disease']),
  lastVisit: addDays(TODAY, -rng.int(1, 90)),
  next: rng.next() > 0.4 ? addDays(TODAY, rng.int(1, 40)) : '',
  consent: rng.next() > 0.06 ? 'Granted' : 'Pending',
}));

export const doctorPayments = Array.from({ length: 24 }, (_, i) => ({
  ref: `TX-${String(904200 + i)}`,
  patient: patientNames[(i * 5 + 1) % patientNames.length],
  date: addDays(TODAY, -Math.floor(i / 2)),
  gateway: rng.pick(['PayFast', 'Peach Payments', 'Medical aid', 'Medical aid']),
  amount: doctor.fee,
  status: rng.pick(['Successful', 'Successful', 'Successful', 'Pending', 'Refunded']),
}));

export const doctorRevenue = { labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'], values: [118_400, 124_900, 131_200, 128_700, 139_600, 146_300] };
