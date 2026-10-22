export type ServiceCategory = 'Specialist care' | 'Acute & critical care' | 'Diagnostics' | 'Patient amenities';

export type Service = {
  name: string;
  text: string;
  icon: string;
  category: ServiceCategory;
  conditions: string[];
  href?: string;
};

export const serviceCategories: ServiceCategory[] = ['Specialist care', 'Acute & critical care', 'Diagnostics', 'Patient amenities'];

export const services: Service[] = [
  { name: 'Orthopaedics', text: 'Joint, bone and sports injury care.', icon: 'bone', category: 'Specialist care', conditions: ['joint pain', 'fracture', 'acl', 'arthritis'], href: '/departments/orthopaedics-sports-medicine/' },
  { name: 'Obstetrics & Gynaecology', text: "Maternity, birth and women's health.", icon: 'baby', category: 'Specialist care', conditions: ['pregnancy', 'fertility', 'ivf'], href: '/departments/fertility-ivf/' },
  { name: 'Cardiology', text: 'Heart health, diagnostics and treatment.', icon: 'heart-pulse', category: 'Specialist care', conditions: ['heart', 'chest pain', 'hypertension', 'tavi'], href: '/departments/cardiothoracic-cardiology/' },
  { name: 'Neurology & Neurosurgery', text: 'Brain, spine and nervous system care.', icon: 'brain', category: 'Specialist care', conditions: ['spine', 'stroke', 'back pain', 'tumour'], href: '/departments/neurosurgery-neurocare/' },
  { name: 'Gastroenterology', text: 'Digestive health and endoscopy.', icon: 'scan-line', category: 'Specialist care', conditions: ['reflux', 'endoscopy', 'colonoscopy'], href: '/departments/bariatric-metabolic-surgery/' },
  { name: 'Urology', text: 'Kidney, bladder and urinary tract care.', icon: 'droplet', category: 'Specialist care', conditions: ['kidney stones', 'prostate', 'bladder'] },
  { name: 'Oncology', text: 'Clinical and radiation cancer care.', icon: 'ribbon', category: 'Specialist care', conditions: ['cancer', 'chemotherapy', 'radiotherapy'] },
  { name: 'Paediatrics', text: 'Specialist care for children and neonates.', icon: 'smile', category: 'Specialist care', conditions: ['children', 'neonatal', 'nicu'], href: '/departments/paediatric-surgery/' },
  { name: 'General Surgery', text: 'A full range of surgical procedures.', icon: 'scissors', category: 'Specialist care', conditions: ['hernia', 'gallbladder', 'appendix'] },
  { name: 'Emergency Department', text: 'Round-the-clock trauma and critical care, 24/7.', icon: 'siren', category: 'Acute & critical care', conditions: ['trauma', 'accident', 'emergency'] },
  { name: 'ICU & High Care', text: 'Adult, paediatric and neonatal intensive care.', icon: 'activity', category: 'Acute & critical care', conditions: ['intensive care', 'nicu'] },
  { name: 'Wound Clinic', text: 'Specialised wound care and management.', icon: 'bandage', category: 'Acute & critical care', conditions: ['wound', 'diabetic foot', 'burns'] },
  { name: 'Travel Clinic', text: 'Pre-travel consultations and vaccinations.', icon: 'plane', category: 'Acute & critical care', conditions: ['vaccination', 'malaria', 'travel'], href: '/medical-tourism/' },
  { name: 'Radiology', text: 'Imaging by Drs Burger Radiologists: CT, MRI, X-ray and ultrasound.', icon: 'scan', category: 'Diagnostics', conditions: ['mri', 'ct scan', 'x-ray', 'ultrasound'] },
  { name: 'Laboratory Services', text: 'On-site pathology by Lancet and Ampath.', icon: 'test-tube', category: 'Diagnostics', conditions: ['blood test', 'pathology'] },
  { name: 'Retail Pharmacy', text: 'Prescriptions, chronic medication and expert pharmacist advice.', icon: 'pill', category: 'Patient amenities', conditions: ['medication', 'prescription'], href: '/patients/amenities/#pharmacy' },
  { name: 'Coffee Shop', text: 'Light meals, snacks and hot drinks throughout the day.', icon: 'coffee', category: 'Patient amenities', conditions: [], href: '/patients/amenities/#coffee-shop' },
  { name: 'Gift Shop', text: 'Flowers, cards and thoughtful gifts on-site.', icon: 'gift', category: 'Patient amenities', conditions: [], href: '/patients/amenities/#gift-shop' },
  { name: 'ATM', text: 'On-site cash withdrawal in the main foyer.', icon: 'banknote', category: 'Patient amenities', conditions: [] },
  { name: 'Sky Lodge', text: 'Comfortable on-site accommodation for families and travelling patients.', icon: 'bed-double', category: 'Patient amenities', conditions: ['accommodation'] },
];

export const homeServices = [
  { name: 'Emergency Services', text: 'Round-the-clock trauma and critical care.', icon: 'siren' },
  { name: 'Out-Patient Department', text: 'Consultations, diagnostics and day procedures.', icon: 'clipboard-plus' },
  { name: 'Surgical Disciplines', text: 'Modern theatres across multiple specialities.', icon: 'scissors' },
  { name: 'Medical Disciplines', text: 'Physicians and specialist consulting rooms.', icon: 'stethoscope' },
  { name: 'Wound Clinic', text: 'Specialised wound care and management.', icon: 'bandage' },
  { name: 'Retail Pharmacy', text: 'From chronic medication and everyday essentials to expert advice from our qualified pharmacists.', icon: 'pill' },
];
