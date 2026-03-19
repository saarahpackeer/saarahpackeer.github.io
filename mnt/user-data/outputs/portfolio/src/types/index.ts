export interface SocialLink {
  label: string
  url: string
  icon: 'github' | 'linkedin' | 'mail'
}

export interface Interest {
  emoji: string
  label: string
}

export interface Profile {
  name: string
  role: string
  heroBio: string
  aboutBio: string
  ctaLabel: string
  ctaEmail: string
  resumeUrl: string
  status: string
  interests: Interest[]
  socials: SocialLink[]
  /** Filenames inside public/photos/ e.g. "photo1.jpg" */
  photos: string[]
}

export interface SkillGroup {
  category: string
  skills: string[]
}

export interface Project {
  title: string
  description: string
  emoji: string
  tags: string[]
  /** 'primary' | 'secondary' | 'accent' maps to your colour tokens */
  tagVariants?: Array<'primary' | 'secondary' | 'accent'>
  liveUrl?: string
  repoUrl?: string
  /** true = show on home page featured list; false = uni projects page only */
  featured: boolean
}
