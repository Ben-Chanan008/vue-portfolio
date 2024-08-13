<template>
  <footer class="md:px-16 py-5 flex justify-around">
    <a href="/" class="text-5xl text-green-500 font-bold">Ben.</a>
    <div class="flex gap-4">
      <Social />
      <Social class-name="fab fa-twitter fa-2x" href="https://x.com/benchanan008"/>
    </div>
    <TopButton />
  </footer>
</template>

<script setup>
import Social from "@/components/Social.vue";
import TopButton from "@/components/TopButton.vue";
</script>

<style scoped>

</style>
