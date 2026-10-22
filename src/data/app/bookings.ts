import { specialists } from '@/data/specialists';
import { seeded } from '@/lib/random';
import { TODAY, addDays, patientNames, schemes, time } from './common';

export type BookingStatus = 'Confirmed' | 'Completed' | 'Pending payment' | 'Cancelled' | 'No-show';
export type Gateway = 'PayFast' | 'Peach Payments' | 'Medical aid';

export type Booking = {
  ref: string;
  patient: string;
  specialist: string;
  specialistSlug: string;
  discipline: string;
  date: string;
  start: string;
  minutes: number;
  type: 'New patient' | 'Follow-up' | 'Procedure consult' | 'Telehealth';
  status: BookingStatus;
  gateway: Gateway;
  amount: number;
  scheme: string;
  source: 'Website' | 'Patient portal' | 'GP referral' | 'Phone (admin)' | 'Google Business';
  reminder: 'Sent' | 'Queued' | 'Delivered';
};

const rng = seeded(2026);
const types: Booking['type'][] = ['New patient', 'Follow-up', 'Follow-up', 'Procedure consult', 'Telehealth'];
const sources: Booking['source'][] = ['Website', 'Website', 'Patient portal', 'Patient portal', 'GP referral', 'Phone (admin)', 'Google Business'];
const gateways: Gateway[] = ['PayFast', 'Peach Payments', 'Medical aid', 'Medical aid'];

function statusFor(offset: number): BookingStatus {
  const r = rng.next();
  if (offset < 0) return r < 0.82 ? 'Completed' : r < 0.92 ? 'No-show' : 'Cancelled';
  return r < 0.78 ? 'Confirmed' : r < 0.92 ? 'Pending payment' : 'Cancelled';
}

export const bookings: Booking[] = Array.from({ length: 168 }, (_, i): Booking => {
  const s = rng.pick(specialists.slice(0, 90));
  const offset = rng.int(-24, 14);
  const status = statusFor(offset);
  return {
    ref: `BK-${String(48210 + i)}`,
    patient: rng.pick(patientNames),
    specialist: s.name,
    specialistSlug: s.slug,
    discipline: s.discipline,
    date: addDays(TODAY, offset),
    start: time(8 * 60 + rng.int(0, 17) * 30),
    minutes: rng.pick([15, 30, 30, 45]),
    type: rng.pick(types),
    status,
    gateway: rng.pick(gateways),
    amount: s.fee,
    scheme: rng.pick(schemes),
    source: rng.pick(sources),
    reminder: offset < 0 ? 'Delivered' : offset < 2 ? 'Sent' : 'Queued',
  };
}).sort((a, b) => (a.date + a.start < b.date + b.start ? 1 : -1));

export const upcoming = bookings.filter((b) => b.date >= TODAY && b.status !== 'Cancelled').reverse();
