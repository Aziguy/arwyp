export type Tone = 'green' | 'amber' | 'red' | 'teal' | 'navy' | 'neutral';

const tones: Record<Tone, string[]> = {
  green: ['confirmed', 'paid', 'published', 'active', 'approved', 'completed', 'successful', 'delivered', 'granted', 'hired', 'eligible', 'passed', 'live', 'normal', 'accepted', 'read', 'signed', 'settled', 'verified'],
  amber: ['pending', 'pending payment', 'draft', 'in review', 'scheduled', 'submitted', 'processing', 'interview', 'awaiting', 'partial', 'queued', 'new', 'expiring', 'screening', 'in progress', 'review', 'unread', 'abnormal', 'semi-urgent', 'expiring soon', 'moderate', 'deposit due'],
  red: ['cancelled', 'failed', 'rejected', 'no-show', 'declined', 'expired', 'refunded', 'blocked', 'critical', 'not eligible', 'overdue', 'bounced', 'withdrawn', 'urgent', 'severe'],
  teal: ['offer', 'shortlisted', 'referred', 'enrolled', 'certified', 'sent', 'cited', 'shareholders', 'public'],
  navy: ['archived', 'closed', 'board only'],
  neutral: [],
};

export function toneOf(status: string): Tone {
  const key = status.toLowerCase();
  return (Object.keys(tones) as Tone[]).find((t) => tones[t].includes(key)) ?? 'neutral';
}

export const badgeClass = (status: string) => {
  const tone = toneOf(status);
  return `badge badge--dot${tone === 'neutral' ? '' : ` badge--${tone === 'navy' ? 'navy' : tone}`}`;
};
