export const TODAY = '2026-10-22';

export const patientNames = [
  'Ayesha Kader', 'Bheki Nxumalo', 'Carla de Wet', 'Dineo Matlala', 'Ethan Swart', 'Farah Jaffer', 'Gugu Mhlongo', 'Hannes Visser',
  'Itumeleng Serote', 'Janine Botes', 'Khaya Mabuza', 'Lerato Sebola', 'Mandla Zungu', 'Nicole Ferreira', 'Owethu Gumede', 'Pooja Ramlall',
  'Quinton Adams', 'Ruth Mokgadi', 'Sizwe Ntuli', 'Tanya Olivier', 'Unathi Bekwa', 'Vusi Mkhize', 'Wendy Groenewald', 'Xolani Shezi',
  'Yolanda Peters', 'Zinhle Cele', 'Anton Bezuidenhout', 'Busisiwe Mdlalose', 'Chris Engelbrecht', 'Dimakatso Ramoroka', 'Elaine Marais',
  'Fikile Hlongwane', 'Gerrit Nortje', 'Hlengiwe Mabaso', 'Ismail Desai', 'Jabu Sibiya', 'Karin Louw', 'Lwazi Dube', 'Mariska Jansen',
  'Nhlanhla Khoza', 'Oratile Moagi', 'Precious Masilela', 'Rudi Hattingh', 'Sibongile Tshabalala', 'Thato Motaung', 'Ursula Naicker',
  'Vernon Daniels', 'Wandile Majola', 'Yasmin Cassim', 'Zola Ngema', 'Amahle Ndaba', 'Bradley Muller', 'Charmaine Govender', 'Dumisani Zwane',
];

export const schemes = ['Discovery Health', 'Bonitas', 'Momentum Health', 'Medshield', 'Bestmed', 'GEMS', 'Fedhealth', 'Polmed'];

export function addDays(iso: string, days: number): string {
  const d = new Date(`${iso.slice(0, 10)}T00:00:00Z`);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
}

export const pad = (n: number, size = 2) => String(n).padStart(size, '0');

export const time = (minutes: number) => `${pad(Math.floor(minutes / 60))}:${pad(minutes % 60)}`;

export const maskId = (seed: number) => `${pad(seed % 100)}${pad((seed * 7) % 100)}** **** ${pad((seed * 13) % 100)}`;

export const maskMember = (seed: number) => `****${pad((seed * 37) % 10000, 4)}`;

export const weekdayShort = (iso: string) => new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-ZA', { weekday: 'short', timeZone: 'UTC' });

export const dayMonth = (iso: string) => new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-ZA', { day: 'numeric', month: 'short', timeZone: 'UTC' });
