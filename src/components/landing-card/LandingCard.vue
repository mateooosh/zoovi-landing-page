<template>
  <div class="w-250 flex flex-col items-center gap-8 text-center">
    <div>
      <img :src="src" class="w-100 h-100 sm:w-130 sm:h-130">
    </div>
    <div class="heading2B">{{ title }}</div>
    <div class="body text-neutral">{{ caption }}</div>
  </div>
</template>

<script setup lang="ts">
const { src, title, caption } = defineProps<{
  src: string
  title: string
  caption: string
}>()
</script>

<style scoped>

</style>