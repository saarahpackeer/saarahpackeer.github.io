<script setup lang="ts">
import { profile } from '@/data/profile'

const gradients = [
  'linear-gradient(135deg, rgba(244,165,165,.3), rgba(232,197,216,.3))',
  'linear-gradient(135deg, rgba(245,212,176,.3), rgba(244,165,165,.3))',
  'linear-gradient(135deg, rgba(232,197,216,.3), rgba(245,212,176,.3))',
  'linear-gradient(135deg, rgba(244,165,165,.3), rgba(245,212,176,.3))',
]

const interestBgs = [
  'rgba(244,165,165,.08)',
  'rgba(245,212,176,.08)',
  'rgba(232,197,216,.08)',
]
</script>

<template>
  <section class="max-w-4xl mx-auto px-4 sm:px-6 py-16 w-full relative z-10">
    <div class="mb-12 fu-1">
      <h2 class="serif text-3xl sm:text-4xl font-bold mb-2">About Me</h2>
      <p class="opacity-60 text-lg"><span class="highlight">Get to know me a little better</span></p>
    </div>

    <div class="grid md:grid-cols-2 gap-10 fu-2">

      <div>
        <p class="text-base sm:text-lg leading-relaxed opacity-80 mb-8" style="line-height:1.2;">
          {{ profile.aboutBio }}
        </p>

        <div class="space-y-4">
          <p class="text-sm font-semibold opacity-60 uppercase tracking-wide">Some things I Love</p>
          <div class="space-y-3">
            <div
              v-for="(interest, i) in profile.interests"
              :key="interest.label"
              class="interest-row flex items-center gap-3 p-4 rounded-xl"
              :style="{ background: interestBgs[i % interestBgs.length] }"
            >
              <span class="text-2xl">{{ interest.emoji }}</span>
              <span class="text-base font-medium">{{ interest.label }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div
          v-for="(filename, i) in profile.photos"
          :key="filename"
          class="photo-tile h-40 sm:h-48"
          :style="{ background: gradients[i % gradients.length] }"
        >
          <img
            :src="`/photos/${filename}`"
            :alt="`Saarah — photo ${i + 1}`"
            class="w-full h-full object-cover block"
            @error="(e) => ((e.target as HTMLImageElement).style.display = 'none')"
          >
        </div>
      </div>

    </div>
  </section>
</template>

<style scoped>
.interest-row { transition: transform .3s ease; }
.interest-row:hover { transform: translateX(4px); }

.photo-tile {
  border-radius: 0px;
  overflow: hidden;
  transition: all .4s ease;
}
.photo-tile:hover { transform: scale(1.02); filter: brightness(1.08); }
</style>