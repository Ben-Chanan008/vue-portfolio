<script setup>
import { defineProps } from 'vue';

defineProps({
  className: {
    type: String,
    default: "fab fa-github text-black fa-2x"
  },
  href: {
    type: String,
    default: 'https://github.com/Ben-Chanan008'
  }
});
</script>

<template>
  <a :href="`${href}`">
    <i :class="`${className}`"></i>
  </a>
</template>


<style scoped>

</style>
