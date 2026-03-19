import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

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
