<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'
import { uniProjects } from '@/data/projects'
import { profile } from '@/data/profile'
</script>

<template>
  <div class="flex flex-col min-h-screen">

    <!-- Breadcrumb nav -->
    <nav class="back-nav relative z-10">
      <RouterLink to="/" class="back-link">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
             fill="none" stroke="currentColor" stroke-width="2.5"
             stroke-linecap="round" stroke-linejoin="round">
          <line x1="19" y1="12" x2="5" y2="12"/>
          <polyline points="12 19 5 12 12 5"/>
        </svg>
        {{ profile.name }}
      </RouterLink>
      <span class="sep">/</span>
      <span class="current">Uni Projects</span>
    </nav>

    <!-- Page header -->
    <header class="max-w-4xl mx-auto px-4 sm:px-6 pt-12 pb-4 w-full relative z-10">
      <div class="mb-4 fu-1">
        <span class="badge badge-primary">🎓 University of Wollongong</span>
      </div>
      <h1 class="serif font-bold mb-3 fu-2" style="font-size: clamp(2.2rem, 6vw, 3.5rem);">
        Uni Projects
      </h1>
      <p class="text-base sm:text-lg opacity-70 max-w-2xl fu-3 leading-relaxed">
        A collection of coursework and projects from my Software Engineering degree.
      </p>
    </header>

    <div class="max-w-4xl mx-auto px-4 sm:px-6 w-full z-10 mt-8">
      <hr class="divider">
    </div>

    <!-- Project grid -->
    <section class="max-w-4xl mx-auto px-4 sm:px-6 py-16 w-full relative z-10">
      <div
        v-if="uniProjects.length"
        class="space-y-6 fu-2"
      >
        <ProjectCard
          v-for="project in uniProjects"
          :key="project.title"
          :project="project"
        />
      </div>

      <!-- Empty state — shows if uniProjects array is empty -->
      <div v-else class="card p-12 text-center fu-2">
        <p class="text-4xl mb-4">🚧</p>
        <p class="text-lg font-semibold mb-2">Projects coming soon</p>
        <p class="opacity-60">
          Add your uni projects to
          <code class="text-sm bg-black/5 px-1 py-0.5 rounded">src/data/projects.ts</code>
        </p>
      </div>
    </section>

    <footer class="max-w-4xl mx-auto px-4 sm:px-6 py-12 w-full mt-auto relative z-10">
      <div class="text-center opacity-50 text-sm">
        <p>Designed &amp; built by Saarah Packeer</p>
      </div>
    </footer>

  </div>
</template>

<style scoped>
.back-nav {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 14px 24px;
  background: var(--bg);
  border-bottom: 1px solid rgba(61,48,41,.1);
  font-family: 'Plus Jakarta Sans', sans-serif;
  font-size: .875rem;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: var(--primary);
  font-weight: 700;
  text-decoration: none;
  transition: opacity .2s;
}
.back-link:hover { opacity: .7; }

.sep     { color: rgba(61,48,41,.3); }
.current { color: rgba(61,48,41,.55); }
</style>
