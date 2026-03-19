import type { Project } from '@/types'

export const projects: Project[] = [
  // ── Featured (shown on home page) ─────────────────────────────────
  {
    title: 'TravelMate',
    description: 'Plan trips collaboratively with friends in real-time.',
    emoji: '✈️',
    tags: ['React', 'Real-time', 'Collaborative'],
    tagVariants: ['primary', 'secondary', 'accent'],
    // TODO: add live URL when deployed
    liveUrl: '#',
    // TODO: add GitHub repo URL
    repoUrl: '#',
    featured: true,
  },

  // ── Uni projects (shown on /projects page) ─────────────────────────
  // TODO: fill in your actual university projects below.
  // Duplicate the block and set featured: false for uni work.
  {
    title: 'Uni Project One',
    description: 'Short description of what the project does and what you learnt.',
    emoji: '🎓',
    tags: ['Java', 'OOP'],
    tagVariants: ['primary', 'secondary'],
    repoUrl: '#',
    featured: false,
  },
  {
    title: 'Uni Project Two',
    description: 'Short description of what the project does and what you learnt.',
    emoji: '🗄️',
    tags: ['SQL', 'Database Design'],
    tagVariants: ['primary', 'accent'],
    repoUrl: '#',
    featured: false,
  },
  {
    title: 'Uni Project Three',
    description: 'Short description of what the project does and what you learnt.',
    emoji: '📱',
    tags: ['React Native', 'Mobile'],
    tagVariants: ['secondary', 'accent'],
    repoUrl: '#',
    featured: false,
  },
]

export const featuredProjects = projects.filter((p) => p.featured)
export const uniProjects = projects.filter((p) => !p.featured)
