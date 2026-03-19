<script setup lang="ts">
// App.vue is intentionally thin — just layout shell + router outlet.
// All page content lives in views/.
</script>

<template>
  <div class="relative min-h-screen">
    <!-- Decorative background circles — fixed, behind everything -->
    <div class="deco deco-1" aria-hidden="true" />
    <div class="deco deco-2" aria-hidden="true" />

    <!-- Page content injected by Vue Router -->
    <RouterView />
  </div>
</template>

<style scoped>
.deco {
  position: fixed;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
}
.deco-1 {
  top: -100px; right: -80px;
  width: 350px; height: 350px;
  background: var(--primary);
  opacity: 0.12;
}
.deco-2 {
  bottom: -120px; left: -100px;
  width: 400px; height: 400px;
  background: var(--accent);
  opacity: 0.08;
}
</style>
