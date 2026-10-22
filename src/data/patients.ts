export const visitingHours = [
  { ward: 'General Wards', hours: '08h00 - 20h00', visitors: 'Two visitors per patient' },
  { ward: 'Maternity Ward', hours: '08h00 - 20h00', visitors: 'Two visitors per patient (partner and grandparent)' },
  { ward: 'ICU / High Care', hours: '08h00 - 20h00', visitors: 'Two visitors per patient' },
  { ward: 'Paediatric Ward', hours: '08h00 - 20h00', visitors: 'Two visitors per patient', note: 'One parent or guardian may stay overnight' },
];

export const admissionChecklist = [
  'Medical aid card',
  'ID document or passport',
  'Main member ID',
  "Doctor's referral letter",
  'Proof of medical aid',
  'Medical aid authorisation number',
];

export const patientTopics = [
  { slug: 'visiting-hours', title: 'Visiting Hours', icon: 'clock', text: 'When and how your family can be with you, ward by ward.' },
  { slug: 'pre-admission', title: 'Pre-Admission Requirements', icon: 'clipboard-check', text: 'What to bring, and the form to complete before you arrive.' },
  { slug: 'rights-charter', title: "Patients' Rights Charter", icon: 'scale', text: 'Know what to expect from us, and your responsibilities.' },
  { slug: 'amenities', title: 'Gift Shop, Coffee Shop & Retail Pharmacy', icon: 'gift', text: 'Small comforts and everyday essentials, all on-site.' },
  { slug: 'maternity', title: 'Maternity, Babyshooze & Doula Services', icon: 'baby', text: 'Support from pregnancy through delivery and beyond.' },
  { slug: 'experience', title: 'Patient Experience Survey', icon: 'message-square-heart', text: 'Tell us how we did. Every response is read.' },
];

export const amenities = [
  {
    id: 'coffee-shop',
    name: 'Coffee Shop',
    brand: 'The Coffee Bean',
    icon: 'coffee',
    text: 'A warm meal or a decent cup of coffee matters more than people expect during a hospital visit. Our on-site coffee shop is open to patients, visitors and staff, serving light meals, snacks and hot drinks throughout the day.',
    hours: ['06h00 - 21h00, Monday to Friday', '07h00 - 21h00, weekends and public holidays'],
    contact: { person: 'Coffee Shop Manager', email: 'coffeeshop@arwyp.example', phone: '011 922 1000 (ext. 1555)' },
    items: ['Breakfast & light meals', 'Barista coffee', 'Fresh juices', 'Ward delivery'],
    cta: 'View menu',
  },
  {
    id: 'gift-shop',
    name: 'Gift Shop',
    brand: 'Cottontails & Friends',
    icon: 'gift',
    text: "Flowers, cards and small gifts for a new arrival, a loved one on the mend, or a colleague you're thinking of, all available on-site, so you're never empty-handed on your way to a ward.",
    hours: ['08h00 - 20h00, Monday to Saturday'],
    contact: { person: 'Gift Shop Owner', email: 'giftshop@arwyp.example', phone: '011 922 1000 (ext. 1347)' },
    items: ['Fresh flowers', 'Plush toys', 'Gift baskets', 'Balloons & cards'],
    cta: 'Send a gift',
  },
  {
    id: 'pharmacy',
    name: 'Retail Pharmacy',
    brand: 'Arwyp Pharmacy',
    icon: 'pill',
    text: 'Our on-site retail pharmacy dispenses prescription medication as well as everyday healthcare and personal care items, so you can collect what you need without an extra trip across town. Pharmacist advice is available for over-the-counter queries.',
    hours: ['06h00 - 22h00, Monday to Sunday, including public holidays'],
    contact: { person: 'Front Shop Supervisor', email: 'pharmacy@arwyp.example', phone: '011 922 1000 (ext. 1310)' },
    items: ['Prescriptions', 'Chronic medication', 'Baby care', 'Personal care'],
    cta: 'Order for collection',
  },
];

export const rightsCharter = {
  rights: [
    'A healthy and safe environment',
    'Participation in decision-making on matters affecting your health',
    'Access to healthcare, including emergency care',
    'Knowledge of your medical scheme and its benefits',
    'Choice of health services and healthcare provider',
    'Treatment by a named healthcare provider',
    'Confidentiality and privacy of your information',
    'Informed consent before any procedure',
    'Refusal of treatment, in writing',
    'A second opinion',
    'Continuity of care',
    'To complain about health services',
  ],
  responsibilities: [
    'Take care of your own health and follow agreed treatment',
    'Provide accurate information about your health and medical history',
    'Respect the rights of other patients and healthcare workers',
    'Keep your medical aid details and authorisations up to date',
    'Utilise the healthcare system properly and not abuse it',
  ],
};
