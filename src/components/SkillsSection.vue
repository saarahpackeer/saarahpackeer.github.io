<script setup lang="ts">
import { skillGroups } from '@/data/skills'
</script>

<template>
  <section class="max-w-4xl mx-auto px-4 sm:px-6 py-16 w-full relative z-10">
    <div class="mb-12 fu-1">
      <h2 class="serif text-3xl sm:text-4xl font-bold mb-2">Skills</h2>
      <p class="opacity-60 text-lg"><span class="highlight">Technologies I work with</span></p>
    </div>

    <div class="fu-2 space-y-8">
      <div v-for="group in skillGroups" :key="group.category">
        <p class="text-sm font-semibold opacity-60 uppercase tracking-wide mb-4">
          {{ group.category }}
        </p>
        <div class="flex flex-wrap gap-3">
          <span
            v-for="skill in group.skills"
            :key="skill"
            class="skill-pill"
          >
            {{ skill }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>