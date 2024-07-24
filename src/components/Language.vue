<script setup>
  import { defineProps } from 'vue';

  defineProps({
    title: {
      type: String,
    },
    level: {
      type: String,
    },
    icon: {
      type: String,
      default: 'badge-check'
    },
    brand: {
      type: Boolean,
      default: false
    }
  })
</script>

<template>
  <div class="flex gap-3 mb-8">
    <i :class="['fa-2x', brand ? 'fab' : 'far', `fa-${icon}`]"></i>
    <div>
      <p class="text-xl">{{ title }}</p>
      <span class="opacity-50">{{ level }}</span>
    </div>
  </div>
</template>

<style scoped>

</style>
