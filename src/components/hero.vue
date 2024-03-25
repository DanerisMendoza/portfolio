<template>
  <div class="flex h-screen-80 max-w-7xl m-center mt-24 md:flex-col lg:flex-row md:pt-10">
    <div class="info flex flex-col items-start lg:w-3/6 m-auto">
      <h2 class="text-5xl pb-3 font-extrabold f-black name dark:text-white">
        Daneris Mendoza
      </h2>
      <h4 class="text-lg pb-2 f-gray dark:text-white">
        Fullstack Developer
      </h4>
      <h5 class="text-sm pb-12 f-gray dark:text-white">
        I'm a recent computer science graduate,
        currently working on freelance projects 
        from my 4th year of school to the present.
        My current stack includes Laravel and VueJS
      </h5>
      <div>
        <a class="btn-accent cursor-pointer flex items-center" href="mailto:danerismendoza096@gmail.com">
          <span> Contact Me&nbsp;</span>
          <span><font-awesome-icon class="w-4" :icon="['fas', 'paper-plane']" /></span>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import portfolio from '@/components/portfolio.vue'
</script>
