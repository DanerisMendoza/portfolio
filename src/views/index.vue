<template>
  <main class="dark:bg-gray-900 main">
    <div class="md:px-20 p-5 lg:px-5" style="max-width: 1280px; margin: auto">
      <hero/>
      <portfolio/>
    </div>
  </main>
</template>

<script setup>
import hero from '@/components/hero.vue'
import portfolio from '@/components/portfolio.vue'
</script>
