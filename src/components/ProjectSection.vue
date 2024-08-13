<script setup>
import ProjectPic from '@/assets/images/project.png';
import Project from "@/components/Project.vue";
</script>

<template>
  <section class="p-5 mt-16" id="projects">
    <p class="text-gray-500 mb-2 text-center">Browse My Recent</p>
    <p class="text-5xl font-bold text-center mb-16">Projects</p>

    <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
      <Project git-hub="delevia" :picture="ProjectPic" title="Delevia" live="delevia.000.pe"/>
      <Project git-hub="creos" :picture="ProjectPic" title="Creos" live="creosxyz.com"/>
      <Project git-hub="academia" :picture="ProjectPic" title="Academia" live="acadome.000.pe"/>
      <Project git-hub="wdi" :picture="ProjectPic" title="WDI" live="wdi.yowec.org"/>
    </div>
  </section>
</template>
