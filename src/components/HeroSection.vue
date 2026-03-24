<script setup lang="ts">
import { Linkedin } from 'lucide-vue-next'
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
    <p class="text-base sm:text-lg opacity-70 max-w-2xl mb-8 fu-3 leading-relaxed bio">
      {{ profile.heroBio }}
    </p>

    <!-- LinkedIn circle button -->
    <div class="fu-4">
      <a
        :href="profile.socials.find(s => s.icon === 'linkedin')?.url"
        target="_blank"
        rel="noopener noreferrer"
        class="linkedin-btn"
        aria-label="LinkedIn"
      >
        <Linkedin :size="22" />
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

.bio {
  line-height: 1.2;
}

/* Pill shape — fully rounded, gradient fill */
.linkedin-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: rgb(34, 34, 34);
  color: #fff;
  text-decoration: none;
  transition: all .3s cubic-bezier(.16,1,.3,1);
}
.linkedin-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 20px rgba(0,0,0,.15);
}
.linkedin-btn:active { transform: scale(1); }
.linkedin-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 12px 24px rgba(207, 206, 206, 0.35);
}
.linkedin-btn:active { transform: translateY(0); }
</style>