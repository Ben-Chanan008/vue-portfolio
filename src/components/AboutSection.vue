<script setup>
import Ben from '@/assets/images/Ben.jpg';
import Card from '@/components/Card.vue';
</script>

<template>
  <section class="p-5" id="about">
    <p class="text-gray-400 mb-2 text-center">Get To Know More</p>
    <p class="text-5xl font-bold text-center mb-16">About Me</p>
    <div class="grid grid-cols-250/1fr gap-6 mx-48">
      <img :src="Ben" alt="my-pic" width="400px" class="h-full rounded-pill row-span-2"/>
      <div class="flex gap-3 w-100 align-mid">
        <Card class-name="rounded-pill w-1/2 flex flex-col items-center justify-center">
          <i class="far fa-medal"></i>
          <p class="font-bold text-2xl">Experience</p>
          <span class="opacity-50">2+ years</span>
          <span class="opacity-50">Full Stack Development</span>
        </Card>
        <Card class-name="rounded-pill w-1/2 flex flex-col items-center justify-center">
          <i class="far fa-user-group"></i>
          <p class="font-bold text-2xl">Education</p>
          <span class="opacity-50">Codecademy Degree</span>
          <span class="opacity-50">High School Degree</span>
        </Card>
      </div>
      <div>
        <p>My name is Great Benchanan Ken-Idehen, a.k.a Ben. I am from Delta State, Nigeria, but currently residing in Saskatoon, Canada. I am solution driven when it comes to life, making sure there is a solution to whatever problem I face, either temporarily or permanently. I am ready to collaborate with you and turn your idea into a solution. "Every big app, was once an idea 💡!" </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
</style>
