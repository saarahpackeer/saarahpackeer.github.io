import type { Profile } from '@/types'

export const profile: Profile = {
  // ── Hero ──────────────────────────────────────────────────────────
  name: 'Saarah Packeer',
  role: 'Full Stack Developer with FE Focus',
  status: 'Open to opportunities',
  heroBio:
    'I build beautiful, functional web experiences. Passionate about clean code, delightful UX, and turning ideas into reality.',

  ctaLabel: "Let's chat!",
  // TODO: replace with your real email
  ctaEmail: 'saarah@example.com',
  // TODO: replace with your resume PDF URL or Google Drive share link
  resumeUrl: '#',

  // ── Socials ───────────────────────────────────────────────────────
  socials: [
    {
      label: 'GitHub',
      url: 'https://github.com/saarahpackeer',
      icon: 'github',
    },
    {
      label: 'LinkedIn',
      // TODO: replace with your LinkedIn profile URL
      url: '#',
      icon: 'linkedin',
    },
    {
      label: 'Email',
      // TODO: replace with your real email
      url: 'mailto:saarah@example.com',
      icon: 'mail',
    },
  ],

  // ── About ─────────────────────────────────────────────────────────
  // TODO: rewrite in your own voice
  aboutBio:
    "I'm a full-stack developer with a passion for creating intuitive, beautiful experiences. " +
    "When I'm not coding, you'll find me baking, exploring new design trends, or hunting down the perfect outfit.",

  interests: [
    { emoji: '🍰', label: 'Baking & Cake Design' },
    { emoji: '🎨', label: 'Art & Design' },
    { emoji: '👗', label: 'Fashion & Style' },
  ],

  // ── Photos ────────────────────────────────────────────────────────
  // Add images to public/photos/ and list their filenames here.
  // The About grid shows them in order; missing files show a gradient placeholder.
  photos: ['photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg'],
}
