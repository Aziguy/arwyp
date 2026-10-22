import { slugify } from '@/lib/format';

const names = [
  'Bariatric & Metabolic Surgery',
  'Cardiology',
  'Cardiothoracic Surgery',
  'Clinical Oncology',
  'Dermatology',
  'Endocrinology',
  'Ear, Nose & Throat (ENT)',
  'Gastroenterology',
  'General Practice',
  'General Surgery',
  'Gynaecology',
  'Hepatobiliary & Pancreatic Surgery',
  'HIV Specialist Care',
  'Interventional Radiology',
  'Maxillofacial Surgery',
  'Nephrology',
  'Neurology',
  'Neurosurgery',
  'Nuclear Medicine',
  'Ophthalmology',
  'Orthopaedic Surgery',
  'Paediatric Surgery',
  'Paediatrics',
  'Physician (Internal Medicine)',
  'Plastic Surgery',
  'Psychiatry',
  'Pulmonology',
  'Radiation Oncology',
  'Rheumatology',
  'Urology',
  'Vascular Surgery',
] as const;

export type Discipline = { name: string; slug: string; letter: string };

export const disciplines: Discipline[] = names.map((name) => ({ name, slug: slugify(name), letter: name[0] }));

export const disciplineBySlug = new Map(disciplines.map((d) => [d.slug, d]));
