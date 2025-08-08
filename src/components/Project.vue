<script setup>
import Card from "@/components/Card.vue";
import Button from "@/components/Button.vue";
import { defineProps } from 'vue';

defineProps({
  picture: String,
  title: String,
  gitHub: String,
  live: String
});

</script>

<template>
  <Card class-name="rounded-pill flex flex-col m-auto mb-4">
    <img :src="`${picture}`" alt="project-pic" class="rounded-pill"/>
    <p class="text-2xl p-3 font-bold text-center">{{ title }}</p>
    <div class="flex gap-2 w-full">
      <a :href="`https://github.com/Ben-Chanan008/${gitHub}`" target="_blank" class="w-full">
        <Button extra-classes="border-black border w-full hover:bg-black hover:text-white">
            Github
        </Button>
      </a>
      <a :href="`https://${live}`" target="_blank" class="w-full">
        <Button extra-classes="border-black border w-full hover:bg-black hover:text-white">
          Live Demo
        </Button>
      </a>
    </div>
  </Card>
</template>


<style scoped>
  img{
    height: 400px;
    width: 300px;
    object-fit: cover;
  }

  button{
    transition: all .3s ease-in-out;
  }
</style>
