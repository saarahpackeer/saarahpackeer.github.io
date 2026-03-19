<script setup lang="ts">
import { profile } from '@/data/profile'
</script>

<template>
  <header class="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20 w-full relative z-10">

    <!-- Status badge -->
    <div class="mb-6 fu-1">
      <span class="badge badge-primary">
        <span class="status-dot" aria-hidden="true" />
        {{ profile.status }}
      </span>
    </div>

    <!-- Name + role -->
    <div class="mb-8 fu-2">
      <h1 class="serif font-bold mb-4 hero-name">
        {{ profile.name }}
        <span class="float" aria-hidden="true">🌸</span>
      </h1>
      <p class="text-xl sm:text-2xl font-semibold opacity-80">{{ profile.role }}</p>
    </div>

    <!-- Bio -->
    <p class="text-base sm:text-lg opacity-70 max-w-2xl mb-8 fu-3 leading-relaxed">
      {{ profile.heroBio }}
    </p>

    <!-- CTA buttons -->
    <div class="flex flex-wrap gap-4 fu-4">
      <a :href="`mailto:${profile.ctaEmail}`" class="btn btn-primary">
        {{ profile.ctaLabel }}
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
             fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
        </svg>
      </a>
      <a
        :href="profile.resumeUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="btn btn-outline"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
             fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>
        </svg>
        Resume
      </a>
    </div>

    <!-- Social icons -->
    <div class="flex gap-4 mt-10 fu-5">
      <a
        v-for="social in profile.socials"
        :key="social.label"
        :href="social.url"
        :aria-label="social.label"
        target="_blank"
        rel="noopener noreferrer"
        class="social-icon"
      >
        <!-- GitHub -->
        <svg v-if="social.icon === 'github'" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
             viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
             stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54
                   6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38
                   13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0
                   -1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
        </svg>
        <!-- LinkedIn -->
        <svg v-else-if="social.icon === 'linkedin'" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
             viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
             stroke-linecap="round" stroke-linejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
        </svg>
        <!-- Mail -->
        <svg v-else-if="social.icon === 'mail'" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
             viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
             stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
          <polyline points="22,6 12,13 2,6"/>
        </svg>
      </a>
    </div>
  </header>
</template>

<style scoped>
.hero-name {
  font-size: clamp(2.6rem, 7vw, 4.2rem);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.status-dot {
  display: inline-block;
  width: 8px; height: 8px;
  border-radius: 50%;
  background: var(--primary);
}

.social-icon {
  width: 40px; height: 40px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  background: rgba(244,165,165,.1);
  color: var(--primary);
  transition: all .3s ease;
  text-decoration: none;
}
.social-icon:hover { transform: scale(1.15) rotate(5deg); }
</style>
