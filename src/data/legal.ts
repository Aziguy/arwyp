export type LegalPage = { slug: string; title: string; updated: string; sections: { heading: string; body: string }[] };

export const legalPages: LegalPage[] = [
  {
    slug: 'privacy',
    title: 'Privacy Policy',
    updated: '2026-10-01',
    sections: [
      { heading: 'Who we are', body: 'Arwyp Medical Centre (Pty) Ltd is the responsible party for personal information processed through this website and our patient services.' },
      { heading: 'What we collect', body: 'Contact details, identity and medical aid information, and health information you choose to share through forms, bookings or the patient portal.' },
      { heading: 'Why we collect it', body: 'To respond to enquiries, manage admissions and appointments, process payments and meet our legal and clinical obligations.' },
      { heading: 'How we protect it', body: 'Encryption in transit and at rest, role-based access control, audit logging and regular security reviews.' },
      { heading: 'Your rights', body: 'You may request access to, correction of or deletion of your personal information by contacting our Information Officer.' },
    ],
  },
  {
    slug: 'terms',
    title: 'Terms & Conditions',
    updated: '2026-10-01',
    sections: [
      { heading: 'Use of this website', body: 'Content is provided for general information and does not replace professional medical advice.' },
      { heading: 'Bookings and payments', body: 'Appointments are subject to specialist availability. Deposits and cancellations follow each practice’s published policy.' },
      { heading: 'Intellectual property', body: 'All content, branding and design belong to Arwyp Medical Centre (Pty) Ltd unless stated otherwise.' },
      { heading: 'Governing law', body: 'These terms are governed by the laws of the Republic of South Africa.' },
    ],
  },
  {
    slug: 'popia',
    title: 'POPIA Notice',
    updated: '2026-10-01',
    sections: [
      { heading: 'Lawful processing', body: 'We process personal information in line with the Protection of Personal Information Act 4 of 2013, with consent or another lawful basis.' },
      { heading: 'Special personal information', body: 'Health information is processed only for treatment, medical aid administration and legal compliance.' },
      { heading: 'Information Officer', body: 'Our Information Officer oversees compliance, data-subject requests and breach notifications. Contact: privacy@arwyp.example.' },
      { heading: 'Complaints', body: 'You may lodge a complaint with the Information Regulator of South Africa.' },
    ],
  },
  {
    slug: 'paia',
    title: 'PAIA Manual',
    updated: '2026-10-01',
    sections: [
      { heading: 'Purpose', body: 'This manual explains how to request access to records held by Arwyp Medical Centre under the Promotion of Access to Information Act.' },
      { heading: 'Records available', body: 'Categories of records include corporate, patient, employee and supplier records, subject to legal grounds for refusal.' },
      { heading: 'How to request', body: 'Submit the prescribed form to the Information Officer. Fees may apply as set out in the regulations.' },
    ],
  },
  {
    slug: 'cookies',
    title: 'Cookie Policy',
    updated: '2026-10-01',
    sections: [
      { heading: 'Essential storage', body: 'We use essential browser storage to remember preferences such as dismissed alerts.' },
      { heading: 'Analytics', body: 'With your consent, anonymous analytics help us improve the website experience.' },
      { heading: 'Managing cookies', body: 'You can clear or block cookies in your browser settings at any time.' },
    ],
  },
];
