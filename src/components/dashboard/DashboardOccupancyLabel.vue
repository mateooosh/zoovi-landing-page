<script setup lang="ts">
const { color, label } = defineProps<{
  color: string
  label: string
}>()
</script>

<template>
  <div class="flex flex-row items-center gap-8">
    <div class="w-10 h-10 rounded-[9px] border-3" :style="{ borderColor: color }"/>
    <div class="bodySmall mb-2 text-neutral">{{ label }}</div>
  </div>
</template>
