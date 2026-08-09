import type { EventCard } from '../types/event';

export const eventCards: EventCard[] = [
  {
    title: 'Weddings',
    subtitle: 'Golden vows & cinematic storytelling',
    description: 'Intimate celebrations captured with luxurious depth, gentle direction, and natural emotion.',
    videoSrc: '/videos/wedding.mp4',
    accent: 'bg-gradient-to-br from-[#b08d66]/30 via-transparent to-[#1a0f0a]/0',
    pill: 'Wedding stories',
    highlights: ['Intimate framing', 'Warm editorial tone', 'Feel-first storytelling'],
  },
  {
    title: 'Corporate',
    subtitle: 'Executive identity, precision, and movement',
    description: 'High-end brand narratives produced with clarity, structure, and a polished executive feel.',
    videoSrc: '/videos/corporate.mp4',
    accent: 'bg-gradient-to-br from-[#a98664]/30 via-transparent to-[#120c0a]/0',
    pill: 'Corporate productions',
    highlights: ['Brand-forward detail', 'Clean composition', 'Professional pacing'],
  },
  {
    title: 'Celebrations',
    subtitle: 'Milestones with warmth and cinematic glow',
    description: 'Bold, joyful moments rendered with energy, elegance, and a timeless sense of occasion.',
    videoSrc: '/videos/birthday.mp4',
    accent: 'bg-gradient-to-br from-[#d5b489]/30 via-transparent to-[#150c0a]/0',
    pill: 'Celebration coverage',
    highlights: ['Energetic storytelling', 'Rich atmosphere', 'Fluid motion'],
  },
];
