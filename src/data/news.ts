export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: 'Health Insights' | 'Hospital News' | 'Maternity' | 'Technology' | 'Community';
  date: string;
  readTime: number;
  author: string;
  icon: string;
  tone: 'teal' | 'navy' | 'sky' | 'rose' | 'sand';
  body: string[];
};

export const articles: Article[] = [
  {
    slug: 'know-your-normal-breast-health',
    title: 'Know your normal: the simple habit that could help prevent breast cancer',
    excerpt: 'No two bodies are the same. Learning what is normal for you is one of the most powerful things you can do for early detection.',
    category: 'Health Insights',
    date: '2026-10-20',
    readTime: 5,
    author: 'Arwyp Oncology Team',
    icon: 'ribbon',
    tone: 'rose',
    body: [
      'When it comes to breast health, knowledge really is power. Breast tissue changes throughout life, with hormonal cycles, pregnancy and age. That is why the most important habit is simply knowing what normal looks and feels like for you.',
      'A monthly self-check takes less than five minutes. Look for changes in size, shape or skin texture, and feel for lumps or thickening in the breast and underarm. Any persistent change deserves a conversation with your doctor.',
      'From the age of 40, or earlier with a family history, regular mammograms are recommended. Our radiology partners offer screening on-site, with results shared directly with your referring doctor.',
    ],
  },
  {
    slug: 'o-arm-precision-spine-surgery',
    title: 'How the O-Arm is changing spine surgery at Arwyp',
    excerpt: 'Real-time 3D imaging in theatre means greater accuracy, less radiation and a smoother road to recovery.',
    category: 'Technology',
    date: '2026-10-08',
    readTime: 4,
    author: 'Neurosurgery & Neurocare',
    icon: 'scan',
    tone: 'navy',
    body: [
      'Some procedures need more than a steady hand: they need a clear view. The O-Arm gives our surgical teams real-time 3D imaging during spine and neurosurgical procedures.',
      'Because images are captured intraoperatively, surgeons can confirm implant placement before the procedure ends, reducing the need for revision surgery.',
      'For patients, that translates into safer surgery, less radiation exposure and fewer surprises on the way to recovery.',
    ],
  },
  {
    slug: 'maternity-ward-refurbishment',
    title: 'Our refurbished maternity ward opens its doors',
    excerpt: 'New private rooms, a calmer birthing environment and more space for partners. Take the 3D tour before your big day.',
    category: 'Maternity',
    date: '2026-09-29',
    readTime: 3,
    author: 'Maternity Unit',
    icon: 'baby',
    tone: 'sky',
    body: [
      'Bringing a baby into the world is daunting enough without wondering what the ward will look like. Our refurbished maternity unit now offers private rooms, a dedicated partner area and updated neonatal facilities.',
      'Expecting parents can walk through the new facilities from home with our 3D maternity tour, a calm and informed way to prepare.',
    ],
  },
  {
    slug: 'travel-health-before-you-fly',
    title: 'Travelling this festive season? Visit the Travel Clinic first',
    excerpt: 'Some vaccinations need four to six weeks to take full effect. Here is what to plan before you book your flights.',
    category: 'Health Insights',
    date: '2026-09-16',
    readTime: 4,
    author: 'Travel Clinic',
    icon: 'plane',
    tone: 'teal',
    body: [
      'Between 22% and 64% of international travellers report falling ill during or after a trip. A pre-travel consultation tailored to your destination makes the difference.',
      'Bring your itinerary, any chronic medication and your vaccination card. Our travel medicine practitioner will advise on vaccinations, malaria prophylaxis and regional health risks.',
    ],
  },
  {
    slug: 'cohsasa-accreditation-renewed',
    title: 'Arwyp renews its COHSASA accreditation',
    excerpt: 'An independent assessment reaffirms our commitment to clinical excellence, patient safety and quality healthcare.',
    category: 'Hospital News',
    date: '2026-08-27',
    readTime: 2,
    author: 'Office of the CEO',
    icon: 'award',
    tone: 'sand',
    body: [
      'Arwyp Medical Centre has successfully renewed its accreditation with the Council for Health Service Accreditation of Southern Africa (COHSASA).',
      'The assessment covers clinical governance, infection control, patient rights and facility management across every department.',
    ],
  },
  {
    slug: 'mental-health-wellbeing',
    title: 'Taking charge of mental health and well-being',
    excerpt: 'Practical steps for recognising burnout, anxiety and low mood, and knowing when to ask for help.',
    category: 'Health Insights',
    date: '2026-08-12',
    readTime: 6,
    author: 'Psychiatry',
    icon: 'brain',
    tone: 'teal',
    body: [
      'Mental health is health. Sleep changes, withdrawal from activities you enjoy and persistent worry are all signals worth paying attention to.',
      'Speaking to your GP is a good first step. Our psychiatrists and allied health partners offer confidential assessment and ongoing support.',
    ],
  },
  {
    slug: 'kempton-park-fun-run',
    title: 'Over 600 runners join the Arwyp Community Fun Run',
    excerpt: 'Funds raised support the neonatal ICU and community screening days across the East Rand.',
    category: 'Community',
    date: '2026-07-30',
    readTime: 2,
    author: 'Marketing & Communications',
    icon: 'heart-handshake',
    tone: 'sky',
    body: [
      'Thank you to every runner, volunteer and sponsor who joined us. Proceeds go to new equipment for the neonatal ICU.',
      'Our next community screening day takes place in November, with free blood pressure, glucose and BMI checks.',
    ],
  },
  {
    slug: 'pet-ct-cancer-treatment',
    title: 'Did you know? PET-CT reduces trial and error in cancer treatment',
    excerpt: 'PET-CT gives doctors a clearer, more accurate view of what is happening inside the body, earlier.',
    category: 'Technology',
    date: '2026-07-14',
    readTime: 4,
    author: 'Nuclear Medicine',
    icon: 'scan-line',
    tone: 'navy',
    body: [
      'PET-CT combines functional and anatomical imaging in a single scan, helping oncologists stage cancer accurately and measure treatment response.',
      'Earlier, more precise information means treatment plans can be adjusted sooner, sparing patients ineffective therapies.',
    ],
  },
  {
    slug: 'new-specialists-joined',
    title: 'Six new specialists join Arwyp this quarter',
    excerpt: 'Welcoming new consultants in cardiology, urology, paediatrics and vascular surgery.',
    category: 'Hospital News',
    date: '2026-06-30',
    readTime: 2,
    author: 'Medical Advisory Committee',
    icon: 'user-plus',
    tone: 'sand',
    body: [
      'We are proud to welcome six new specialists to our consulting rooms, strengthening services across four disciplines.',
      'Profiles and booking details are available in the Find a Specialist directory.',
    ],
  },
];

export const articleCategories = [...new Set(articles.map((a) => a.category))];
