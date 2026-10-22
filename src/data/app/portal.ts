import { specialists } from '@/data/specialists';
import { TODAY, addDays } from './common';

const cardio = specialists.find((s) => s.disciplineSlug === 'cardiology') ?? specialists[0];
const ortho = specialists.find((s) => s.disciplineSlug === 'orthopaedic-surgery') ?? specialists[1];
const gp = specialists.find((s) => s.disciplineSlug === 'general-practice') ?? specialists[2];

export const patient = {
  name: 'Thandiwe Nkosi',
  first: 'Thandiwe',
  id: 'PT-20488',
  dob: '1984-03-14',
  scheme: 'Discovery Health',
  plan: 'Classic Comprehensive',
  member: '****4821',
  phone: '+27 82 *** 4410',
  email: 'thandiwe.n@mail.example',
};

export const appointments = [
  { ref: 'BK-48391', specialist: cardio.name, slug: cardio.slug, discipline: cardio.discipline, rooms: cardio.rooms, date: addDays(TODAY, 4), time: '09:30', type: 'Follow-up', status: 'Confirmed', paid: 'Paid' },
  { ref: 'BK-48402', specialist: ortho.name, slug: ortho.slug, discipline: ortho.discipline, rooms: ortho.rooms, date: addDays(TODAY, 13), time: '14:00', type: 'New patient', status: 'Pending payment', paid: 'Deposit due' },
  { ref: 'BK-48120', specialist: cardio.name, slug: cardio.slug, discipline: cardio.discipline, rooms: cardio.rooms, date: addDays(TODAY, -21), time: '10:00', type: 'Echo review', status: 'Completed', paid: 'Paid' },
  { ref: 'BK-47766', specialist: gp.name, slug: gp.slug, discipline: gp.discipline, rooms: gp.rooms, date: addDays(TODAY, -48), time: '08:15', type: 'Consultation', status: 'Completed', paid: 'Paid' },
  { ref: 'BK-47410', specialist: ortho.name, slug: ortho.slug, discipline: ortho.discipline, rooms: ortho.rooms, date: addDays(TODAY, -90), time: '11:30', type: 'Follow-up', status: 'Cancelled', paid: 'Refunded' },
];

export const records = [
  { title: 'Full blood count', kind: 'Lab result', source: 'Lancet Laboratories', date: addDays(TODAY, -2), status: 'Normal', icon: 'flask-conical' },
  { title: 'Lipid profile', kind: 'Lab result', source: 'Ampath', date: addDays(TODAY, -2), status: 'Abnormal', icon: 'flask-conical' },
  { title: 'Echocardiogram report', kind: 'Radiology', source: cardio.name, date: addDays(TODAY, -21), status: 'Normal', icon: 'heart-pulse' },
  { title: 'Chest X-ray', kind: 'Radiology', source: 'Drs Burger Radiologists', date: addDays(TODAY, -22), status: 'Normal', icon: 'scan' },
  { title: 'Discharge summary: day ward', kind: 'Discharge summary', source: 'Arwyp Day Ward', date: addDays(TODAY, -140), status: 'Signed', icon: 'file-text' },
  { title: 'Consultation note', kind: 'Doctor note', source: gp.name, date: addDays(TODAY, -48), status: 'Signed', icon: 'square-pen' },
];

export const invoices = [
  { ref: 'INV-260981', description: `Consultation: ${cardio.name}`, date: addDays(TODAY, -21), amount: cardio.fee, claim: 'Paid', status: 'Paid' },
  { ref: 'INV-260774', description: 'Echocardiogram', date: addDays(TODAY, -21), amount: 2450, claim: 'Partial', status: 'Overdue' },
  { ref: 'INV-259903', description: `Consultation: ${gp.name}`, date: addDays(TODAY, -48), amount: gp.fee, claim: 'Paid', status: 'Paid' },
  { ref: 'INV-261120', description: `Deposit: ${ortho.name}`, date: TODAY, amount: 500, claim: 'Not claimed', status: 'Pending' },
];

export const prescriptions = [
  { name: 'Amlodipine 5 mg', dose: '1 tablet daily', prescriber: cardio.name, issued: addDays(TODAY, -21), repeats: 5, status: 'Active' },
  { name: 'Rosuvastatin 10 mg', dose: '1 tablet at night', prescriber: cardio.name, issued: addDays(TODAY, -21), repeats: 5, status: 'Active' },
  { name: 'Ibuprofen 400 mg', dose: 'As needed, max 3 daily', prescriber: gp.name, issued: addDays(TODAY, -48), repeats: 0, status: 'Expired' },
];

export const thread = {
  with: `${cardio.name} (rooms)`,
  messages: [
    { from: 'rooms', text: 'Good morning Thandiwe, your lipid results are back. Dr would like to discuss them at your follow-up on Monday.', at: 'Tue 08:42' },
    { from: 'me', text: 'Thank you. Should I continue with the current medication until then?', at: 'Tue 09:05' },
    { from: 'rooms', text: 'Yes, please continue as prescribed. Bring your home blood pressure readings if you have them.', at: 'Tue 09:20' },
    { from: 'me', text: 'Will do, see you Monday.', at: 'Tue 09:22' },
  ],
};

export const inbox = [
  { with: `${cardio.name} (rooms)`, last: 'Bring your home blood pressure readings if you have them.', at: 'Tue', unread: 1 },
  { with: 'Admissions', last: 'Your pre-admission form has been received.', at: 'Mon', unread: 1 },
  { with: 'Accounts', last: 'Your medical aid has paid INV-259903 in full.', at: '12 Oct', unread: 0 },
];

export const vault = {
  allergies: [
    { name: 'Penicillin', severity: 'Severe', reaction: 'Rash, swelling' },
    { name: 'Latex', severity: 'Mild', reaction: 'Skin irritation' },
  ],
  conditions: ['Hypertension (2019)', 'Hypercholesterolaemia (2024)'],
  medication: ['Amlodipine 5 mg daily', 'Rosuvastatin 10 mg nightly'],
  contacts: [
    { name: 'Sipho Nkosi', relation: 'Spouse', phone: '+27 83 *** 1290' },
    { name: 'Nomsa Dube', relation: 'Sister', phone: '+27 72 *** 8841' },
  ],
  bloodType: 'O+',
};
