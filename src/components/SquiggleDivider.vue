<template>
  <div class="squiggle-wrap" aria-hidden="true">
    <svg
      viewBox="0 0 900 20"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
      class="squiggle-svg"
    >
      <path
        d="M0,10
           C30,2 60,18 90,10
           C120,2 150,18 180,10
           C210,2 240,18 270,10
           C300,2 330,18 360,10
           C390,2 420,18 450,10
           C480,2 510,18 540,10
           C570,2 600,18 630,10
           C660,2 690,18 720,10
           C750,2 780,18 810,10
           C840,2 870,18 900,10"
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        stroke-linecap="round"
      />
    </svg>
  </div>
</template>

<style scoped>
.squiggle-wrap {
  width: 100%;
  color: rgba(61, 48, 41, 0.18);
  padding: 4px 0;
}
.squiggle-svg {
  width: 100%;
  height: 20px;
  display: block;
}
</style>
