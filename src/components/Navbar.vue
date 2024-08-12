<script setup>
 import { useRoute } from 'vue-router';
 // import {reactive} from "vue";

 const isActiveLink = (path) => {
   const route = useRoute();
   return route.fullPath === path;
 }

</script>

<template>
    <nav class="p-3">
      <div class="flex justify-around p-2">
        <a href="" class="text-green-500 font-bold text-5xl">Ben.</a>
        <div class="md:hidden block menu">
          <button><i class="far fa-bars fa-2x"></i></button>
        </div>
        <div class="md:flex items-center hidden big-nav">
          <a href="/" :class="['mx-2', 'p-2', 'rounded', isActiveLink('/') ? 'font-bold text-green-500' : 'hover:text-gray-500']">Home</a>
          <a href="/#about" :class="['mx-2', 'p-2', 'rounded', isActiveLink('/#about') ? 'font-bold text-green-500' : 'hover:text-gray-500']">About</a>
          <a href="/#projects" :class="['mx-2', 'p-2', 'rounded', isActiveLink('/#projects') ? 'font-bold text-green-500' : 'hover:text-gray-500']">Projects</a>
          <a href="/#contact" :class="['mx-2', 'p-2', 'rounded', isActiveLink('/#contact') ? 'font-bold text-green-500' : 'hover:text-gray-500']">Contact</a>
        </div>
        <!-- <div class="items-center flex-col md:block hidden absolute right-0">
          <a href="/" :class="['mx-2', 'p-2', 'rounded', isActiveLink('/') ? 'font-bold text-green-500' : 'hover:text-gray-500']">Home</a>
          <a href="/#about" :class="['mx-2', 'p-2', 'rounded', isActiveLink('/#about') ? 'font-bold text-green-500' : 'hover:text-gray-500']">About</a>
          <a href="/#projects" :class="['mx-2', 'p-2', 'rounded', isActiveLink('/#projects') ? 'font-bold text-green-500' : 'hover:text-gray-500']">Projects</a>
          <a href="/#contact" :class="['mx-2', 'p-2', 'rounded', isActiveLink('/#contact') ? 'font-bold text-green-500' : 'hover:text-gray-500']">Contact</a>
        </div> -->
      </div>
    </nav>
</template>

<style>

</style>
