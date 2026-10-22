import { byDiscipline, type Specialist } from './specialists';

export type Department = {
  slug: string;
  name: string;
  tagline: string;
  icon: string;
  tone: 'teal' | 'navy' | 'sky' | 'rose' | 'sand';
  summary: string;
  focus: string[];
  referrers?: string;
  highlight?: string;
  disciplines: string[];
};

export const departments: Department[] = [
  {
    slug: 'bariatric-metabolic-surgery',
    name: 'Bariatric & Metabolic Surgery',
    tagline: 'Sustainable weight loss. Better metabolic health.',
    icon: 'activity',
    tone: 'teal',
    summary:
      'A complete pathway of assessment, surgery, recovery and long-term follow-up for patients managing obesity and related metabolic conditions, supported by a multidisciplinary team of surgeons, physicians, dietitians and psychologists.',
    focus: [
      'Surgical weight-loss procedures: sleeve gastrectomy, gastric bypass, Roux-en-Y, SADI-S, revisional surgery',
      'Non-surgical (endobariatric) options: intragastric balloon, endoscopic sleeve gastroplasty',
      'Reflux Centre testing: pH studies, manometry',
      'Endoscopy Centre: gastroscopy, colonoscopy, capsule endoscopy',
      "Conditions treated: reflux, hiatal hernia, Barrett's oesophagus, obesity-related metabolic disease",
    ],
    disciplines: ['bariatric-and-metabolic-surgery', 'gastroenterology'],
  },
  {
    slug: 'cardiothoracic-cardiology',
    name: 'Cardiothoracic Care & Cardiology',
    tagline: 'Advanced care for the heart, lungs and chest.',
    icon: 'heart-pulse',
    tone: 'rose',
    summary:
      'Comprehensive cardiac and thoracic care, from diagnostic cardiology to complex open-heart surgery, supported by two dedicated cardiac theatres, intensive and high-care units and a full multidisciplinary team.',
    highlight: 'Part of the Discovery Health Medical Scheme (DHMS) Transcatheter Aortic Valve Implantation Network.',
    focus: [
      'Cardiac surgery: coronary artery bypass grafting (CABG), valve repair and replacement, open-heart surgery',
      'Thoracic surgery: lung, mediastinal and pleural procedures, minimally invasive options',
      'Interventional cardiology: coronary angiography and angioplasty (PCI) with stenting, pacemaker implantation',
      'Diagnostics: echocardiography, stress ECG, Holter monitoring, cardiac CT and MRI',
      'Ongoing care: heart failure, hypertension, preventive cardiology, cardiac rehabilitation',
      'Transcatheter Aortic Valve Implantation (TAVI) procedures',
    ],
    referrers: 'A connected pathway spanning diagnostics, interventional cardiology, surgery and inpatient cardiac care.',
    disciplines: ['cardiology', 'cardiothoracic-surgery'],
  },
  {
    slug: 'hepatobiliary-pancreatic-surgery',
    name: 'Hepatobiliary & Pancreatic Surgery',
    tagline: 'Specialist surgical care for the liver, biliary tract and pancreas.',
    icon: 'scan-line',
    tone: 'sand',
    summary:
      'A dedicated centre for complex conditions of the liver, gallbladder, bile ducts and pancreas, supported by advanced imaging and a multidisciplinary team of surgeons, radiologists, oncologists and gastroenterologists.',
    focus: [
      'Laparoscopic and open cholecystectomy (gallbladder surgery)',
      'Hepatobiliary and pancreatic (HPB) surgery',
      'Liver resection surgery',
      'Management of biliary tract disease',
      'Surgical oncology support and advanced diagnostic imaging',
    ],
    referrers: 'A coordinated specialist pathway backed by advanced imaging, theatre infrastructure and critical care.',
    disciplines: ['hepatobiliary-and-pancreatic-surgery'],
  },
  {
    slug: 'neurosurgery-neurocare',
    name: 'Neurosurgery & Neurocare',
    tagline: 'Advanced care for the brain, spine and nervous system.',
    icon: 'brain',
    tone: 'navy',
    summary: 'Our neurosurgical service combines specialist expertise, advanced imaging and surgical technology to support complex neurological care.',
    focus: [
      'Cranial neurosurgery, including tumour resection',
      'Spinal neurosurgery and complex spine surgery',
      'Neuroendoscopic (minimally invasive) procedures',
      'Neurovascular and cerebrovascular surgery',
      'Management of head injuries and neurotrauma',
    ],
    referrers: 'A collaborative pathway for neurosurgical assessment, advanced imaging, surgery and specialist follow-up.',
    disciplines: ['neurosurgery', 'neurology'],
  },
  {
    slug: 'vascular-surgery',
    name: 'Vascular Surgery',
    tagline: 'Specialist treatment for arterial and venous conditions.',
    icon: 'droplets',
    tone: 'rose',
    summary:
      'Our centre of vascular surgery is combined with a full diagnostic suite, covering everything from routine screening to complex arterial and venous intervention.',
    focus: [
      'Peripheral arterial disease management and bypass surgery',
      'Aneurysm repair (open and endovascular)',
      'Carotid endarterectomy for stroke prevention',
      'Varicose vein treatment and venous disease management',
      'Dialysis access surgery',
      'Diabetic limb salvage',
    ],
    referrers: 'A connected environment for referrals, diagnostics, specialist intervention, inpatient management and ongoing care.',
    disciplines: ['vascular-surgery', 'interventional-radiology'],
  },
  {
    slug: 'fertility-ivf',
    name: 'Fertility & Assisted Reproductive Care (IVF)',
    tagline: 'Supporting your journey to parenthood.',
    icon: 'baby',
    tone: 'sky',
    summary:
      'Individualised fertility assessment and treatment for patients and couples, in a supportive, confidential environment that combines clinical expertise with compassionate care.',
    focus: [
      'Female and male fertility assessment and investigations',
      'Assisted reproductive treatment and IVF support',
      'Specialist consultations and pre-treatment counselling',
      'Pregnancy monitoring following treatment',
    ],
    referrers:
      "For general obstetric and gynaecological care, including complex conditions and gynaecological oncology, our multidisciplinary team covers a broad range of women's health needs.",
    disciplines: ['gynaecology'],
  },
  {
    slug: 'ent-surgery',
    name: 'ENT (Ear, Nose & Throat) Surgery',
    tagline: 'Comprehensive ear, nose and throat care for adults and children.',
    icon: 'ear',
    tone: 'teal',
    summary:
      'Our ENT service provides diagnostic and surgical treatment for common and complex conditions affecting the ear, nose, throat and related head and neck structures.',
    focus: ['Tonsil and adenoid surgery', 'Sinus and endoscopic sinus surgery', 'Middle-ear and hearing-related procedures', 'Head and neck surgery'],
    disciplines: ['ear-nose-and-throat-ent'],
  },
  {
    slug: 'orthopaedics-sports-medicine',
    name: 'Orthopaedic Surgery & Sports Medicine',
    tagline: 'Restoring movement. Rebuilding strength. Returning you to what you love.',
    icon: 'bone',
    tone: 'navy',
    summary:
      'Full-spectrum orthopaedic care, from acute trauma to elective joint reconstruction and sports injury management, supported by advanced surgical imaging including the O-Arm® Surgical Imaging System.',
    focus: [
      'Joint replacement surgery: hip, knee and shoulder arthroplasty',
      'Arthroscopic surgery for knee, shoulder and ankle',
      'Sports medicine and ligament reconstruction (e.g. ACL repair)',
      'Fracture fixation and orthopaedic trauma surgery',
      'Spinal orthopaedic and paediatric orthopaedic care',
      'Rehabilitation and return-to-sport planning',
    ],
    referrers: 'Access to hospital-based diagnostics, theatres, anaesthesia, critical care and rehabilitation for orthopaedic and sports medicine patients.',
    disciplines: ['orthopaedic-surgery'],
  },
  {
    slug: 'paediatric-surgery',
    name: 'Paediatric Surgery',
    tagline: 'Dedicated surgical care for infants and children.',
    icon: 'smile',
    tone: 'sky',
    summary: 'Paediatric-trained specialists supported by 10 neonatal ICU beds, providing surgical care across general, orthopaedic and ENT paediatric needs.',
    focus: ['General paediatric surgery', 'Paediatric orthopaedic surgery', 'Paediatric ENT procedures', 'Neonatal surgical support alongside a dedicated neonatal ICU'],
    disciplines: ['paediatric-surgery'],
  },
];

export const departmentSpecialists = (d: Department): Specialist[] => byDiscipline(...d.disciplines);

export const technologies = [
  {
    name: 'Ziehm Vision RFD Hybrid Theatre',
    icon: 'monitor-dot',
    text: 'An advanced hybrid operating environment combining surgical capabilities with high-quality real-time imaging, supporting complex vascular, cardiac, orthopaedic and other image-guided procedures.',
  },
  {
    name: 'O-Arm® Surgical Imaging System',
    icon: 'scan',
    text: 'Advanced intraoperative 2D and 3D imaging that supports surgical planning, navigation and precision, particularly in complex spinal and orthopaedic procedures.',
  },
];
