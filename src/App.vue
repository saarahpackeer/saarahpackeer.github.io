<script setup lang="ts">
// App.vue is intentionally thin — just layout shell + router outlet.
// All page content lives in views/.
</script>

<template>
  <div class="relative min-h-screen">
    <!-- Decorative background circles — fixed, behind everything -->
    <!--div class="deco deco-1" aria-hidden="true" />
    <div class="deco deco-2" aria-hidden="true" /-->

    <div class="dot-grid" aria-hidden="true" />

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

.dot-grid {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  background-image: radial-gradient(
    circle,
    rgba(61, 48, 41, 0.12) 1px,
    transparent 1px
  );
  background-size: 28px 28px;
  /* Fade out toward the edges so it doesn't feel heavy */
  -webkit-mask-image: radial-gradient(
    ellipse 80% 80% at 50% 50%,
    black 40%,
    transparent 100%
  );
  mask-image: radial-gradient(
    ellipse 80% 80% at 50% 50%,
    black 40%,
    transparent 100%
  );
}

</style>
