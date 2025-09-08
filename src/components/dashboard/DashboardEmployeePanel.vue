<script setup lang="ts">

const { name } = defineProps<{
  name: string
}>()

</script>

<template>
  <div>
    <div class="flex flex-row justify-center items-center gap-16 h-60">
      <Avatar label="P" size="medium" shape="circle"/>
      <div class="bodyB">{{ name }}</div>
      <div class="flex-1 body text-neutral">31.07.2025</div>
      <slot name="right"/>
    </div>
    <div class="mb-12 body text-neutral">
      Bardzo fajna klinika. Polecam serdecznie, bardzo dobrze zaopiekowali się moim kotkiem i pieskiem. Bardzo fajna
      klinika. Polecam serdecznie, bardzo dobrze zaopiekowali się moim pieskiem.
    </div>
  </div>
</template>

<style scoped>

</style>