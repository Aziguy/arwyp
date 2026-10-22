export type CareerDepartment = 'Nursing' | 'Clinical Support' | 'Administration' | 'Allied Health' | 'Management';
export type EmploymentType = 'Full-time' | 'Part-time' | 'Locum';

export type Vacancy = {
  ref: string;
  title: string;
  department: CareerDepartment;
  unit: string;
  type: EmploymentType;
  closes: string;
  posted: string;
  summary: string;
};

export const careerDepartments: CareerDepartment[] = ['Nursing', 'Clinical Support', 'Administration', 'Allied Health', 'Management'];

export const vacancies: Vacancy[] = [
  { ref: 'AMC-N-2611', title: 'Registered Nurse: ICU', department: 'Nursing', unit: 'Adult ICU', type: 'Full-time', posted: '2026-10-14', closes: '2026-11-14', summary: 'Critical care trained RN for a 24-bed adult ICU. Day and night rotation.' },
  { ref: 'AMC-N-2612', title: 'Midwife', department: 'Nursing', unit: 'Maternity Unit', type: 'Full-time', posted: '2026-10-10', closes: '2026-11-10', summary: 'Advanced midwife to join our refurbished maternity unit.' },
  { ref: 'AMC-N-2613', title: 'Theatre Scrub Sister', department: 'Nursing', unit: 'Theatre Complex', type: 'Locum', posted: '2026-10-09', closes: '2026-10-31', summary: 'Locum shifts across orthopaedic, cardiac and general theatres.' },
  { ref: 'AMC-N-2614', title: 'Enrolled Nursing Auxiliary', department: 'Nursing', unit: 'General Wards', type: 'Part-time', posted: '2026-10-02', closes: '2026-11-02', summary: 'Supporting patient care across surgical and medical wards.' },
  { ref: 'AMC-C-2601', title: 'Radiographer', department: 'Clinical Support', unit: 'Radiology', type: 'Full-time', posted: '2026-10-12', closes: '2026-11-12', summary: 'Diagnostic radiographer with CT experience, HPCSA registered.' },
  { ref: 'AMC-C-2602', title: 'Pharmacist Assistant (Post-basic)', department: 'Clinical Support', unit: 'Retail Pharmacy', type: 'Full-time', posted: '2026-10-05', closes: '2026-11-05', summary: 'Dispensary support for inpatient and retail pharmacy.' },
  { ref: 'AMC-A-2604', title: 'Admissions Clerk', department: 'Administration', unit: 'Front Office', type: 'Full-time', posted: '2026-10-11', closes: '2026-11-11', summary: 'Patient admissions, medical aid verification and authorisations.' },
  { ref: 'AMC-A-2605', title: 'Medical Billing Specialist', department: 'Administration', unit: 'Finance', type: 'Full-time', posted: '2026-09-28', closes: '2026-10-28', summary: 'ICD-10 coding, claims submission and debtor follow-up.' },
  { ref: 'AMC-H-2607', title: 'Physiotherapist', department: 'Allied Health', unit: 'Rehabilitation', type: 'Part-time', posted: '2026-10-07', closes: '2026-11-07', summary: 'Inpatient and post-operative orthopaedic rehabilitation.' },
  { ref: 'AMC-H-2608', title: 'Dietitian', department: 'Allied Health', unit: 'Bariatric Centre', type: 'Full-time', posted: '2026-10-01', closes: '2026-11-01', summary: 'Pre- and post-bariatric nutrition counselling.' },
  { ref: 'AMC-M-2609', title: 'Unit Manager: Emergency Department', department: 'Management', unit: 'Emergency Department', type: 'Full-time', posted: '2026-10-15', closes: '2026-11-15', summary: 'Lead a 24/7 ED team of nurses and emergency practitioners.' },
  { ref: 'AMC-M-2610', title: 'Quality & Risk Manager', department: 'Management', unit: 'Clinical Governance', type: 'Full-time', posted: '2026-09-25', closes: '2026-10-30', summary: 'Drive COHSASA readiness, incident management and audits.' },
];

export const departmentProfiles: Record<CareerDepartment, { responsibilities: string[]; requirements: string[] }> = {
  Nursing: {
    responsibilities: ['Deliver safe, patient-centred nursing care', 'Maintain accurate clinical records', 'Collaborate with doctors and allied health teams', 'Uphold infection prevention and control standards'],
    requirements: ['Current SANC registration', 'Relevant clinical experience', 'BLS certification', 'Willingness to work shifts'],
  },
  'Clinical Support': {
    responsibilities: ['Provide accurate, timely clinical support services', 'Operate and maintain specialised equipment', 'Ensure quality and safety compliance'],
    requirements: ['HPCSA or SAPC registration where applicable', 'Relevant qualification and experience', 'Attention to detail'],
  },
  Administration: {
    responsibilities: ['Manage patient administration and records', 'Liaise with medical schemes', 'Deliver excellent front-office service'],
    requirements: ['Matric and a relevant qualification', 'Medical administration experience', 'Strong computer literacy'],
  },
  'Allied Health': {
    responsibilities: ['Assess and treat inpatients and outpatients', 'Develop individual care plans', 'Work within multidisciplinary teams'],
    requirements: ['HPCSA registration', 'Relevant clinical experience', 'Excellent communication skills'],
  },
  Management: {
    responsibilities: ['Lead and develop a high-performing team', 'Manage budgets, rosters and quality indicators', 'Drive COHSASA readiness and continuous improvement'],
    requirements: ['Relevant degree and registration', 'At least 5 years of management experience', 'Proven leadership in a hospital environment'],
  },
};

export const vacancySlug = (v: Vacancy) => v.ref.toLowerCase();
