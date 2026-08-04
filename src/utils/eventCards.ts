import type { EventCard } from '../types/event';

export const eventCards: EventCard[] = [
  {
    title: 'Wedding',
    subtitle: 'Golden vows & cinematic storytelling',
    description: 'Intimate celebrations captured with luxurious depth and warm cinematic detail.',
    videoSrc: '/videos/wedding.mp4',
    accent: 'bg-gradient-to-br from-[#b08d66]/30 via-transparent to-[#1a0f0a]/0',
  },
  {
    title: 'Corporate',
    subtitle: 'Executive identity, precision, and motion',
    description: 'High-end corporate narratives produced with clarity, power, and brand-forward edge.',
    videoSrc: '/videos/corporate.mp4',
    accent: 'bg-gradient-to-br from-[#a98664]/30 via-transparent to-[#120c0a]/0',
  },
  {
    title: 'Birthday',
    subtitle: 'Celebrations with warmth and cinematic glow',
    description: 'Bold milestones rendered with energetic luxury and intimate visual storytelling.',
    videoSrc: '/videos/birthday.mp4',
    accent: 'bg-gradient-to-br from-[#d5b489]/30 via-transparent to-[#150c0a]/0',
  },
];
