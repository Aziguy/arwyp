export type Person = { name: string; role: string; years: number; bio: string; focus?: string };

export const executives: Person[] = [
  { name: 'Ms Nandi Mahlaba', role: 'Chief Executive Officer', years: 24, focus: 'Strategy & growth', bio: 'Leads Arwyp’s strategy and partnerships, with two decades in private hospital management across Gauteng.' },
  { name: 'Mr Werner Kotzé', role: 'Chief Financial Officer', years: 19, focus: 'Finance & investor relations', bio: 'Chartered accountant overseeing finance, treasury and investor relations since 2018.' },
  { name: 'Dr Suresh Moonsamy', role: 'Clinical Director', years: 22, focus: 'Clinical governance', bio: 'Specialist physician responsible for clinical governance, quality and the Medical Advisory Committee.' },
  { name: 'Mrs Lindiwe Zwane', role: 'Nursing Director', years: 27, focus: 'Nursing excellence', bio: 'Leads more than 600 nursing professionals and the Arwyp Training Institute clinical programme.' },
  { name: 'Mr Thabiso Lekalake', role: 'Chief Operating Officer', years: 16, focus: 'Operations & facilities', bio: 'Responsible for theatres, facilities, procurement and the hospital’s capital investment programme.' },
  { name: 'Ms Carmen Abrahams', role: 'Head of Marketing & Patient Experience', years: 12, focus: 'Brand & patient experience', bio: 'Drives patient experience, communications and partnerships with the communities we serve.' },
  { name: 'Mr Kyle Pieterse', role: 'Head of Information Technology', years: 14, focus: 'Digital & data protection', bio: 'Leads digital transformation, cybersecurity and POPIA information governance.' },
  { name: 'Ms Rethabile Moloi', role: 'Head of Human Resources', years: 15, focus: 'People & culture', bio: 'Oversees recruitment, staff wellness and professional development across all departments.' },
];

export const board: Person[] = [
  { name: 'Adv. Jacobus Venter', role: 'Chairperson', years: 30, bio: 'Independent non-executive chair with a background in health law.' },
  { name: 'Dr Zodwa Hadebe', role: 'Non-executive Director', years: 26, bio: 'Former provincial health executive and public health specialist.' },
  { name: 'Mr Anand Ramjee', role: 'Non-executive Director', years: 21, bio: 'Chairs the Audit & Risk Committee.' },
  { name: 'Prof Elsabé Kriel', role: 'Non-executive Director', years: 28, bio: 'Academic surgeon and chair of the Clinical Governance Committee.' },
];

export const testimonials = [
  {
    quote:
      'I was booked for foot surgery. Brilliant hospital! From the orthopaedic surgeon and rooms, to admissions, the ward, theatre and security, every staff member was professional, friendly and an absolute pleasure to interact with.',
    name: 'Annelize V.',
    context: 'Orthopaedic patient',
    date: '2026-05-19',
  },
  {
    quote: 'The maternity team made the birth of our daughter calm and joyful. The doula support was something we did not know we needed.',
    name: 'Kgomotso & Peter M.',
    context: 'Maternity Unit',
    date: '2026-08-02',
  },
  {
    quote: 'Fast, kind and thorough in the emergency department at 2am. I was seen within minutes and kept informed the whole way.',
    name: 'Rashid A.',
    context: 'Emergency Department',
    date: '2026-09-11',
  },
];
