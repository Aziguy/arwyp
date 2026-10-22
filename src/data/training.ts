export type Programme = {
  slug: string;
  name: string;
  nqf: string;
  duration: string;
  intake: string;
  mode: string;
  accreditation: string;
  summary: string;
  modules: string[];
  requirements: string[];
  documents: string[];
  cpd?: number;
};

const baseDocuments = ['Certified copy of ID', 'Certified copy of highest qualification', 'Detailed CV', 'Proof of residence'];

export const programmes: Programme[] = [
  {
    slug: 'higher-certificate-auxiliary-nursing',
    name: 'Higher Certificate in Auxiliary Nursing',
    nqf: 'NQF 5',
    duration: '1 year',
    intake: 'February 2027',
    mode: 'Full-time, on-site',
    accreditation: 'SANC accredited',
    summary: 'Foundational nursing knowledge and supervised clinical practice inside a working hospital.',
    modules: ['Fundamentals of nursing', 'Anatomy & physiology', 'Ethics & professional practice', 'Clinical practice (ward rotations)'],
    requirements: ['National Senior Certificate (NSC) with English', 'Minimum age 18', 'Medical fitness certificate'],
    documents: baseDocuments,
  },
  {
    slug: 'diploma-in-nursing',
    name: 'Diploma in Nursing',
    nqf: 'NQF 6',
    duration: '3 years',
    intake: 'February 2027',
    mode: 'Full-time, on-site',
    accreditation: 'SANC accredited',
    summary: 'Professional nurse training with exposure to Arwyp specialist departments.',
    modules: ['General nursing science', 'Community health', 'Pharmacology', 'Mental health nursing', 'Midwifery foundations'],
    requirements: ['NSC with Mathematics or Mathematical Literacy and Life Sciences', 'Minimum 50% in English'],
    documents: [...baseDocuments, 'Academic transcript'],
  },
  {
    slug: 'pharmacist-assistant-basic',
    name: "Pharmacist's Assistant (Basic)",
    nqf: 'NQF 3',
    duration: '1 year',
    intake: 'April 2027',
    mode: 'Blended learning',
    accreditation: 'SAPC accredited',
    summary: 'Dispensing, stock control and patient counselling under pharmacist supervision.',
    modules: ['Pharmaceutical calculations', 'Dispensing practice', 'Stock management', 'Workplace experience'],
    requirements: ['Grade 12 or equivalent', 'Employment or placement in a pharmacy'],
    documents: baseDocuments,
  },
  {
    slug: 'ancillary-health-care',
    name: 'Ancillary Health Care Certificate',
    nqf: 'NQF 1',
    duration: '6 months',
    intake: 'Monthly',
    mode: 'Part-time',
    accreditation: 'QCTO registered',
    summary: 'Entry-level patient care skills for caregivers and support staff.',
    modules: ['Basic patient care', 'Infection prevention & control', 'Communication skills'],
    requirements: ['Grade 10 or equivalent'],
    documents: baseDocuments.slice(0, 3),
  },
  {
    slug: 'bls-acls-cpd',
    name: 'BLS & ACLS Certification (CPD)',
    nqf: 'CPD',
    duration: '2 days',
    intake: 'Every second Saturday',
    mode: 'On-site simulation lab',
    accreditation: 'Resuscitation Council of SA',
    summary: 'Life support certification for doctors, nurses and paramedics.',
    modules: ['Adult & paediatric BLS', 'Advanced airway management', 'Arrhythmia recognition', 'Mega-code simulation'],
    requirements: ['Registered healthcare professional'],
    documents: ['Proof of professional registration'],
    cpd: 12,
  },
  {
    slug: 'infection-prevention-cpd',
    name: 'Infection Prevention & Control (CPD)',
    nqf: 'CPD',
    duration: '1 day',
    intake: 'Quarterly',
    mode: 'Online + practical',
    accreditation: 'HPCSA CPD accredited',
    summary: 'Current guidelines for hand hygiene, isolation and outbreak management.',
    modules: ['Transmission-based precautions', 'Sterilisation standards', 'Outbreak response'],
    requirements: ['Healthcare worker'],
    documents: ['Proof of employment'],
    cpd: 6,
  },
];
