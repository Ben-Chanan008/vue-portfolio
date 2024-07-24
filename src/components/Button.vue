<script setup>
  import {defineProps} from 'vue';

  defineProps({
    extraClasses: {
      type: String,
    }
  })
</script>

<template>
  <button :class="`${extraClasses} rounded-pill py-3 px-5 text-xs`">
    <slot></slot>
  </button>
</template>

<style scoped>

</style>
