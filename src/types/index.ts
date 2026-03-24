import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

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
  status: string
  interests: Interest[]
  socials: SocialLink[]
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
  tagVariants?: Array<'primary' | 'secondary' | 'accent' | 'neutral'>
  liveUrl?: string
  repoUrl?: string
  imgSrc?: string
  featured: boolean
}

// Hash mode (/#/projects) works on GitHub Pages without any server config.
// If you later move to a host that supports redirects (Vercel, Netlify),
// swap createWebHashHistory for createWebHistory and remove the hash.
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/projects',
      name: 'projects',
      // Lazy-load — only fetched when the user navigates to the page
      component: () => import('@/views/ProjectsView.vue'),
    },
  ],
  scrollBehavior: () => ({ top: 0 }),
})

export default router
