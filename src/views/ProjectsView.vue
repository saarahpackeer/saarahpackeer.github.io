<script setup lang="ts">
import SquiggleDivider from '@/components/SquiggleDivider.vue'
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
    <header class="max-w-5xl mx-auto px-4 sm:px-6 pt-12 pb-4 w-full relative z-10">
      <div class="mb-4 fu-1">
        <span class="badge badge-primary">🎓 University of Wollongong</span>
      </div>
      <h1 class="serif font-bold mb-3 fu-2" style="font-size: clamp(2.2rem, 6vw, 3.5rem);">
        Uni Projects
      </h1>
      <p class="text-base sm:text-lg opacity-70 max-w-2xl fu-3 leading-relaxed">
        <span class="highlight">A collection of coursework and projects from my Software Engineering degree.</span>
      </p>
    </header>

    <div class="max-w-5xl mx-auto px-4 sm:px-6 w-full z-10 mt-8">
      <SquiggleDivider />
    </div>

    <!-- Project grid -->
    <section class="max-w-5xl mx-auto px-4 sm:px-6 py-12 w-full relative z-10">
      <div class="project-grid">
        <div
          v-for="project in uniProjects"
          :key="project.title"
          class="project-tile"
        >
          <!-- Project image -->
          <div v-if="project.imgSrc" class="tile-img-wrap">
            <img
              :src="project.imgSrc"
              :alt="project.title"
              class="tile-img"
              loading="lazy"
              @error="(e) => ((e.target as HTMLImageElement).parentElement!.style.display = 'none')"
            >
          </div>

          <!-- Project info -->
          <div class="tile-body">
            <div class="flex flex-wrap gap-2 mb-3">
              <span
                v-for="(tag, i) in project.tags"
                :key="tag"
                class="badge"
                :class="`badge-${project.tagVariants?.[i] ?? 'primary'}`"
              >
                {{ tag }}
              </span>
            </div>

            <h3 class="serif font-bold mb-2 tile-title">{{ project.title }}</h3>
            <p class="tile-desc">{{ project.description }}</p>

            <div class="flex gap-3 mt-4" v-if="project.repoUrl || project.liveUrl">
              <a
                v-if="project.repoUrl"
                :href="project.repoUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="btn btn-outline btn-sm"
              >
                View
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                     fill="none" stroke="currentColor" stroke-width="2"
                     stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <footer class="max-w-5xl mx-auto px-4 sm:px-6 py-12 w-full mt-auto relative z-10">
      <div class="text-center opacity-50 text-sm">
        <p>Designed &amp; built by Saarah Packeer</p>
      </div>
    </footer>

  </div>
</template>

<style scoped>
/* ---- Breadcrumb ---- */
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

/* ---- Masonry-style grid ---- */
.project-grid {
  columns: 1;
  column-gap: 1.5rem;
}
@media (min-width: 640px) {
  .project-grid { columns: 2; }
}
@media (min-width: 1024px) {
  .project-grid { columns: 3; }
}

/* ---- Card tile ---- */
.project-tile {
  break-inside: avoid;
  margin-bottom: 1.5rem;
  background: var(--surface);
  border: 1px solid rgba(61,48,41,.08);
  border-radius: 16px;
  overflow: hidden;
  transition: transform .35s cubic-bezier(.16,1,.3,1), box-shadow .35s ease;
}
.project-tile:hover {
  transform: translateY(-5px);
  box-shadow: 0 16px 32px rgba(61,48,41,.08);
}

/* ---- Image ---- */
.tile-img-wrap {
  width: 100%;
  overflow: hidden;
  background: rgba(61,48,41,.04);
  max-height: 220px;
}
.tile-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
  display: block;
  transition: transform .4s ease;
}
.project-tile:hover .tile-img { transform: scale(1.04); }

/* ---- Body ---- */
.tile-body {
  padding: 1.25rem;
}
.tile-title {
  font-size: 1.2rem;
  line-height: 1.3;
  color: var(--text);
}
.tile-desc {
  font-size: .875rem;
  line-height: 1.65;
  opacity: .7;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>