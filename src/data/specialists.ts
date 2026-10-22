import { disciplines } from './disciplines';
import { seeded } from '@/lib/random';
import { slugify } from '@/lib/format';

export type Specialist = {
  id: string;
  slug: string;
  name: string;
  title: 'Dr' | 'Prof';
  firstName: string;
  lastName: string;
  discipline: string;
  disciplineSlug: string;
  subSpecialty: string;
  qualifications: string;
  practiceNumber: string;
  rooms: string;
  phone: string;
  email: string;
  bio: string;
  languages: string[];
  medicalAids: string[];
  fee: number;
  rating: number;
  reviews: number;
  accepting: boolean;
  nextAvailable: string;
};

const counts: Record<string, number> = {
  'bariatric-and-metabolic-surgery': 3,
  cardiology: 9,
  'cardiothoracic-surgery': 3,
  'clinical-oncology': 4,
  dermatology: 3,
  endocrinology: 2,
  'ear-nose-and-throat-ent': 5,
  gastroenterology: 4,
  'general-practice': 6,
  'general-surgery': 6,
  gynaecology: 8,
  'hepatobiliary-and-pancreatic-surgery': 2,
  'hiv-specialist-care': 2,
  'interventional-radiology': 2,
  'maxillofacial-surgery': 2,
  nephrology: 3,
  neurology: 3,
  neurosurgery: 7,
  'nuclear-medicine': 2,
  ophthalmology: 3,
  'orthopaedic-surgery': 10,
  'paediatric-surgery': 4,
  paediatrics: 6,
  'physician-internal-medicine': 5,
  'plastic-surgery': 3,
  psychiatry: 2,
  pulmonology: 3,
  'radiation-oncology': 2,
  rheumatology: 2,
  urology: 4,
  'vascular-surgery': 3,
};

const subSpecialties: Record<string, string[]> = {
  'bariatric-and-metabolic-surgery': ['Sleeve gastrectomy & gastric bypass', 'Revisional bariatric surgery', 'Endobariatric procedures'],
  cardiology: ['Interventional cardiology', 'Electrophysiology & pacing', 'Heart failure', 'Cardiac imaging', 'Structural heart & TAVI'],
  'cardiothoracic-surgery': ['Coronary artery bypass', 'Valve repair & replacement', 'Minimally invasive thoracic surgery'],
  'clinical-oncology': ['Breast & gynaecological cancers', 'Gastrointestinal oncology', 'Haemato-oncology'],
  dermatology: ['Skin cancer screening', 'Paediatric dermatology', 'Medical dermatology'],
  endocrinology: ['Diabetes & metabolism', 'Thyroid disorders'],
  'ear-nose-and-throat-ent': ['Endoscopic sinus surgery', 'Otology & hearing', 'Head & neck surgery', 'Paediatric ENT'],
  gastroenterology: ['Therapeutic endoscopy', 'Inflammatory bowel disease', 'Hepatology'],
  'general-practice': ['Family medicine', 'Travel medicine', 'Occupational health', 'Emergency medicine'],
  'general-surgery': ['Laparoscopic surgery', 'Hernia surgery', 'Breast & endocrine surgery', 'Colorectal surgery'],
  gynaecology: ['High-risk obstetrics', 'Fertility & IVF', 'Gynaecological oncology', 'Minimally invasive gynaecology'],
  'hepatobiliary-and-pancreatic-surgery': ['Liver resection', 'Pancreatic surgery'],
  'hiv-specialist-care': ['HIV & infectious diseases'],
  'interventional-radiology': ['Endovascular procedures', 'Image-guided biopsy'],
  'maxillofacial-surgery': ['Orthognathic surgery', 'Facial trauma'],
  nephrology: ['Dialysis & renal replacement', 'Hypertension', 'Transplant follow-up'],
  neurology: ['Stroke & cerebrovascular', 'Epilepsy', 'Movement disorders'],
  neurosurgery: ['Complex spine surgery', 'Cranial & tumour surgery', 'Neurovascular surgery', 'Neuroendoscopy', 'Neurotrauma'],
  'nuclear-medicine': ['PET-CT imaging', 'Thyroid therapy'],
  ophthalmology: ['Cataract & refractive surgery', 'Retina', 'Glaucoma'],
  'orthopaedic-surgery': ['Hip & knee arthroplasty', 'Shoulder & elbow', 'Sports medicine & ACL', 'Foot & ankle', 'Orthopaedic trauma', 'Paediatric orthopaedics'],
  'paediatric-surgery': ['Neonatal surgery', 'Paediatric urology', 'General paediatric surgery'],
  paediatrics: ['Neonatology', 'Paediatric pulmonology', 'Developmental paediatrics', 'Paediatric cardiology'],
  'physician-internal-medicine': ['Critical care', 'Diabetes', 'General internal medicine'],
  'plastic-surgery': ['Reconstructive surgery', 'Hand surgery', 'Aesthetic surgery'],
  psychiatry: ['Adult psychiatry', 'Child & adolescent psychiatry'],
  pulmonology: ['Sleep medicine', 'Interventional bronchoscopy', 'Asthma & COPD'],
  'radiation-oncology': ['Stereotactic radiotherapy', 'Brachytherapy'],
  rheumatology: ['Inflammatory arthritis', 'Autoimmune disease'],
  urology: ['Endourology & stones', 'Uro-oncology', 'Robotic-assisted urology'],
  'vascular-surgery': ['Endovascular aneurysm repair', 'Venous disease', 'Diabetic limb salvage'],
};

const degrees: Record<string, string> = {
  'general-practice': 'MBChB',
  paediatrics: 'MBChB, FC Paed (SA), MMed (Paed)',
  gynaecology: 'MBChB, FCOG (SA), MMed (O&G)',
  cardiology: 'MBChB, FCP (SA), Cert Cardiology (SA) Phys',
  'orthopaedic-surgery': 'MBChB, FC Orth (SA), MMed (Ortho)',
  neurosurgery: 'MBChB, FC Neurosurg (SA), MMed (Neurosurg)',
};

const first = ['Thandeka', 'Sipho', 'Lerato', 'Johan', 'Pieter', 'Anika', 'Nomvula', 'Kagiso', 'Priya', 'Ravi', 'Fatima', 'Yusuf', 'Chantelle', 'Marius', 'Zanele', 'Bongani', 'Naledi', 'Tshepo', 'Ayanda', 'Refilwe', 'Mpho', 'Liesl', 'Hendrik', 'Aisha', 'Kavitha', 'Themba', 'Lindiwe', 'Elize', 'Ruan', 'Neo', 'Kabelo', 'Palesa', 'Imran', 'Sarah', 'Michael', 'Grace', 'Daniel', 'Olivia', 'Jacques', 'Karabo', 'Amara', 'Tendai', 'Chidi', 'Wanjiru', 'Kofi', 'Ingrid', 'Rohan', 'Nadia'];
const last = ['Mokoena', 'Naidoo', 'van der Merwe', 'Dlamini', 'Botha', 'Khumalo', 'Pillay', 'Nkosi', 'Pretorius', 'Mahlangu', 'Govender', 'Ndlovu', 'Smit', 'Molefe', 'Patel', 'Sithole', 'du Plessis', 'Mabena', 'Chetty', 'Venter', 'Mthembu', 'Moodley', 'Coetzee', 'Radebe', 'Maseko', 'Joubert', 'Ngcobo', 'Reddy', 'Steyn', 'Mokwena', 'Hassan', 'Fourie', 'Mbatha', 'Kruger', 'Tau', 'Okafor', 'Mensah', 'Banda', 'Phiri', 'Essop', 'Lombard', 'Nel'];
const universities = ['Wits', 'UP', 'UCT', 'UKZN', 'Stellenbosch', 'UFS', 'SMU'];
const languages = ['Afrikaans', 'isiZulu', 'Sesotho', 'Setswana', 'isiXhosa', 'Sepedi', 'French', 'Portuguese', 'Hindi'];
const aids = ['Discovery Health', 'Bonitas', 'Momentum Health', 'Medshield', 'Bestmed', 'GEMS', 'Fedhealth', 'Polmed'];
const wings = ['East Wing', 'West Wing', 'Medical Centre Tower', 'Pine Avenue Suites'];

const rng = seeded(1985);
const used = new Set<string>();
const startDate = new Date('2026-10-23T00:00:00Z');

function uniqueName() {
  for (;;) {
    const f = rng.pick(first);
    const l = rng.pick(last);
    if (!used.has(`${f} ${l}`)) {
      used.add(`${f} ${l}`);
      return [f, l] as const;
    }
  }
}

function bio(name: string, short: string, discipline: string, sub: string, years: number) {
  return `${name} is a ${discipline.toLowerCase()} specialist with ${years} years of clinical experience and a special interest in ${sub.toLowerCase()}. At Arwyp Medical Centre, ${short} works closely with the multidisciplinary team to provide coordinated, patient-centred care from first consultation to recovery.`;
}

export const specialists: Specialist[] = disciplines.flatMap((d) =>
  Array.from({ length: counts[d.slug] ?? 2 }, () => {
    const [firstName, lastName] = uniqueName();
    const title: Specialist['title'] = rng.next() < 0.09 ? 'Prof' : 'Dr';
    const name = `${title} ${firstName} ${lastName}`;
    const sub = rng.pick(subSpecialties[d.slug] ?? [d.name]);
    const years = rng.int(8, 32);
    const day = new Date(startDate);
    day.setUTCDate(day.getUTCDate() + rng.int(0, 9));
    return {
      id: '',
      slug: slugify(`${title} ${firstName} ${lastName}`),
      name,
      title,
      firstName,
      lastName,
      discipline: d.name,
      disciplineSlug: d.slug,
      subSpecialty: sub,
      qualifications: `${degrees[d.slug] ?? 'MBChB, FCS (SA), MMed'} (${rng.pick(universities)})`,
      practiceNumber: `0${rng.int(100000, 999999)}`,
      rooms: `Medical Suite ${rng.int(1, 6)}${String(rng.int(1, 30)).padStart(2, '0')}, ${rng.pick(wings)}`,
      phone: `011 922 1000 (ext. ${rng.int(2100, 2999)})`,
      email: `rooms.${slugify(lastName).replace(/-/g, '')}@arwyp.example`,
      bio: bio(name, `${title} ${lastName}`, d.name, sub, years),
      languages: ['English', rng.pick(languages)],
      medicalAids: aids.filter(() => rng.next() > 0.35),
      fee: rng.int(19, 37) * 50,
      rating: Math.round((4.4 + rng.next() * 0.6) * 10) / 10,
      reviews: rng.int(12, 240),
      accepting: rng.next() > 0.12,
      nextAvailable: day.toISOString().slice(0, 10),
    };
  }),
).map((s, i) => ({ ...s, id: `SP-${String(i + 1).padStart(3, '0')}` }));

export const specialistBySlug = new Map(specialists.map((s) => [s.slug, s]));

export const byDiscipline = (...slugs: string[]) => specialists.filter((s) => slugs.includes(s.disciplineSlug));
