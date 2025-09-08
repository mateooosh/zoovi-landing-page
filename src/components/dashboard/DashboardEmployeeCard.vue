<script setup lang="ts">
const { name, phone, isAtWork } = defineProps<{
  name: string
  phone: string
  isAtWork: boolean
}>()
</script>

<template>
  <div class="flex justify-center items-center gap-16 min-h-60">
    <Avatar label="P" size="medium" shape="circle"/>
    <div class="flex flex-1 flex-col pt-8 pb-8">
      <div class="bodyB">{{ name }}</div>
      <div class="body text-neutral">{{ phone }}</div>
    </div>
    <Pill v-if="isAtWork" label="W pracy" class="pill-green"/>
    <Pill v-else label="Na urlopie" class="pill-red"/>
  </div>
</template>
