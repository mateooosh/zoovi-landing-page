<script setup lang="ts">
const { label } = defineProps<{
  label: string
}>()
</script>

<template>
  <div class="pt-6 pb-6 pl-12 pr-12 rounded-[12px]">
    <div class="bodyB">{{ label }}</div>
  </div>
</template>
