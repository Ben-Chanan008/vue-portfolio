<script setup>
import {defineProps} from 'vue';

defineProps({
  className: {
    type: String,
  }
});
</script>

<template>
  <div :class="`border p-5 ${className}`">
    <slot></slot>
  </div>
</template>

<style scoped>

</style>
