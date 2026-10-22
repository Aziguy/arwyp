import { specialists } from '@/data/specialists';
import { seeded } from '@/lib/random';
import { bookings } from './bookings';
import { TODAY, addDays, maskId, maskMember, patientNames, schemes } from './common';

const rng = seeded(77);

export const patients = patientNames.map((name, i) => {
  const owner = specialists[(i * 7) % 90];
  return {
    id: `PT-${String(20410 + i)}`,
    name,
    idNumber: maskId(i + 11),
    dob: `${rng.int(1952, 2019)}-${String(rng.int(1, 12)).padStart(2, '0')}-${String(rng.int(1, 28)).padStart(2, '0')}`,
    scheme: rng.pick(schemes),
    member: maskMember(i + 3),
    specialist: owner.name,
    database: `db_${owner.slug.replace(/-/g, '_').slice(0, 22)}`,
    lastVisit: addDays(TODAY, -rng.int(1, 120)),
    consent: rng.next() > 0.08 ? 'Granted' : 'Pending',
    portal: rng.next() > 0.3 ? 'Active' : 'Invited',
  };
});

export const payments = bookings
  .filter((b) => b.status !== 'Cancelled' || rng.next() > 0.5)
  .slice(0, 90)
  .map((b, i) => {
    const status = b.status === 'Cancelled' ? 'Refunded' : b.status === 'Pending payment' ? 'Pending' : rng.next() > 0.04 ? 'Successful' : 'Failed';
    return {
      ref: `TX-${String(903100 + i)}`,
      booking: b.ref,
      patient: b.patient,
      specialist: b.specialist,
      gateway: b.gateway,
      method: b.gateway === 'Medical aid' ? b.scheme : rng.pick(['Card', 'Instant EFT', 'SnapScan', 'Apple Pay']),
      kind: rng.next() > 0.7 ? 'Deposit' : 'Full payment',
      amount: b.amount,
      date: b.date,
      status,
    };
  });

export const eligibilityChecks = Array.from({ length: 18 }, (_, i) => ({
  ref: `EL-${String(7710 + i)}`,
  patient: patientNames[(i * 5) % patientNames.length],
  scheme: schemes[i % schemes.length],
  plan: rng.pick(['Classic Saver', 'Executive', 'Core', 'Comprehensive', 'Essential Plus']),
  benefit: rng.pick(['Specialist consultation', 'In-hospital procedure', 'MRI scan', 'Maternity programme']),
  result: rng.next() > 0.15 ? 'Eligible' : 'Not eligible',
  available: rng.int(4, 60) * 500,
  checked: addDays(TODAY, -rng.int(0, 6)),
}));

export const preAuths = Array.from({ length: 14 }, (_, i) => ({
  ref: `PA-${String(55120 + i)}`,
  patient: patientNames[(i * 3 + 2) % patientNames.length],
  scheme: schemes[(i + 3) % schemes.length],
  procedure: rng.pick(['Total knee replacement', 'Lumbar fusion L4-L5', 'Laparoscopic cholecystectomy', 'Coronary angiography', 'Caesarean section', 'Sleeve gastrectomy']),
  icd10: rng.pick(['M17.1', 'M51.2', 'K80.2', 'I25.1', 'O82.0', 'E66.0']),
  submitted: addDays(TODAY, -rng.int(0, 10)),
  status: rng.pick(['Approved', 'Approved', 'In review', 'Submitted', 'Declined']),
}));

export const claims = Array.from({ length: 22 }, (_, i) => ({
  ref: `CL-${String(310400 + i)}`,
  patient: patientNames[(i * 7 + 1) % patientNames.length],
  scheme: schemes[(i + 1) % schemes.length],
  amount: rng.int(12, 180) * 250,
  submitted: addDays(TODAY, -rng.int(2, 40)),
  status: rng.pick(['Paid', 'Paid', 'Processing', 'Submitted', 'Partial', 'Rejected']),
}));

export const tariffs = schemes.map((scheme, i) => ({
  scheme,
  consult: 1180 + i * 45,
  followUp: 820 + i * 30,
  ward: 3950 + i * 120,
  icu: 18400 + i * 650,
  status: i === 6 ? 'Expiring' : 'Active',
}));

export const referrals = Array.from({ length: 16 }, (_, i) => {
  const s = specialists[(i * 11) % 100];
  return {
    ref: `RF-${String(1840 + i)}`,
    gp: `Dr ${rng.pick(['M. Pillay', 'T. Mokoena', 'J. Kruger', 'S. Dlamini', 'A. Essop', 'L. Venter', 'N. Banda'])}`,
    practice: rng.pick(['Birchleigh Family Practice', 'Edenvale Medical Centre', 'Tembisa Clinic', 'Bonaero Park Rooms', 'Glen Marais GP']),
    patient: patientNames[(i * 9) % patientNames.length],
    specialist: s.name,
    discipline: s.discipline,
    urgency: rng.pick(['Routine', 'Routine', 'Urgent', 'Semi-urgent']),
    received: addDays(TODAY, -rng.int(0, 14)),
    status: rng.pick(['New', 'Accepted', 'Scheduled', 'Completed', 'Scheduled']),
  };
});
