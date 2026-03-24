import type { Profile } from '@/types'

export const profile: Profile = {
  // ── Hero ──────────────────────────────────────────────────────────
  name: 'Saarah Packeer',
  role: 'Full Stack Engineer with FE Focus',
  status: 'Open to opportunities',
  heroBio:
    'I build aesthetic, functional web flows and systems. Passionate about clean code, delightful UX, and turning ideas into reality.',

  ctaLabel: "Let's chat!",
  // ── Socials ───────────────────────────────────────────────────────
  socials: [
    {
      label: 'GitHub',
      url: 'https://github.com/saarahpackeer',
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/saarah-packeer-77a256196/',
      icon: 'linkedin',
    },
  ],

  // ── About ─────────────────────────────────────────────────────────
  aboutBio:
    "I’m a full-stack engineer with a passion for building intuitive, beautiful experiences. Outside of work, " + 
    "I’m usually hunting down concert tickets for my favorite artists, taking photos of anything that catches my eye, " + 
    "baking cakes, or deep in a Pinterest spiral with an XL cup of tea.",

  interests: [
    { emoji: '🍰', label: 'Baking' },
    { emoji: '🎨', label: 'Art' },
    { emoji: '🎫', label: 'Music' },
  ],

  // ── Photos ────────────────────────────────────────────────────────
  photos: ['4.jpeg', '14.jpg', '8.jpg', '11.jpeg'],
}
