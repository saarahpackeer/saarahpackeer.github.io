<script setup lang="ts">
import HeroSection from '@/components/HeroSection.vue'
import AboutSection from '@/components/AboutSection.vue'
import SkillsSection from '@/components/SkillsSection.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import SquiggleDivider from '@/components/SquiggleDivider.vue'
import { featuredProjects } from '@/data/projects'
</script>

<template>
  <div class="flex flex-col min-h-screen">

    <HeroSection />

    <div class="max-w-4xl mx-auto px-4 sm:px-6 w-full z-10">
      <hr class="divider">
    </div>

    <AboutSection />

    <div class="max-w-4xl mx-auto px-4 sm:px-6 w-full z-10">
      <hr class="divider">
    </div>

    <SkillsSection />

    <div class="max-w-4xl mx-auto px-4 sm:px-6 w-full z-10">
      <hr class="divider">
    </div>

    <!-- Featured projects -->
    <section class="max-w-4xl mx-auto px-4 sm:px-6 py-16 w-full relative z-10">
      <div class="mb-12 fu-1">
        <h2 class="serif text-3xl sm:text-4xl font-bold mb-2">Projects</h2>
        <p class="opacity-60 text-lg"><span class="highlight">Things I've built</span></p>
      </div>

      <div class="space-y-6 fu-2">
        <ProjectCard
          v-for="project in featuredProjects"
          :key="project.title"
          :project="project"
        />
      </div>

      <!-- Link to uni projects page -->
      <div class="mt-10 fu-3">
        <RouterLink to="/projects" class="btn btn-outline skill-pill">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
               fill="none" stroke="currentColor" stroke-width="2"
               stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
            <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
          </svg>
          View all uni projects
        </RouterLink>
      </div>
    </section>

    <footer class="max-w-4xl mx-auto px-4 sm:px-6 py-12 w-full mt-auto relative z-10">
      <div class="text-center opacity-50 text-sm">
        <p>Designed &amp; built by Saarah Packeer</p>
      </div>
    </footer>

  </div>
</template>