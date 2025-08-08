<script setup>
import Ben from '@/assets/images/Ben.jpg';
import Card from '@/components/Card.vue';
</script>

<template>
  <section class="p-5" id="about">
    <p class="text-gray-400 mb-2 text-center">Get To Know More</p>
    <p class="text-5xl font-bold text-center mb-16">About Me</p>
    <div class="md:grid md:grid-cols-250/1fr md:gap-6 lg:mx-48 mx-3">
      <img :src="Ben" alt="my-pic" class="mx-auto md:mb-0 mb-4 h-full rounded-pill row-span-2"/>
      <div class="flex gap-3 w-100 align-mid">
        <Card class-name="rounded-pill w-1/2 md:mb-0 mb-4 flex flex-col items-center justify-center">
          <i class="fas fa-medal"></i>
          <p class="font-bold text-2xl">Experience</p>
          <span class="opacity-50">2+ years</span>
          <span class="opacity-50">Full Stack Development</span>
        </Card>
        <Card class-name="rounded-pill w-1/2 flex flex-col lg:mb-0 mb-4 items-center justify-center">
          <i class="fas fa-user-group"></i>
          <p class="font-bold text-2xl">Education</p>
          <span class="opacity-50">Codecademy Degree</span>
          <span class="opacity-50">High School Degree</span>
        </Card>
      </div>
      <div>
        <p>My name is Great Benchanan Ken-Idehen, a.k.a Ben. I am solution driven when it comes to life, making sure there is a solution to whatever problem I face, either temporarily or permanently. Bringing this mentality to tech and digital solutions is a great asset, as I make sure I provide the best value solution possible for whatever problem using web apps. I am ready to collaborate with you and turn your idea into a solution. "Every big app, was once an idea 💡!" </p>
      </div>
    </div>
  </section>
</template>

<style scoped>
img{
  width: 300px;
}

@media (min-width: 992px){
  img{
    width: 400px;
  }
}
</style>
