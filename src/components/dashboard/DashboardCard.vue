<script setup lang="ts">
import { computed } from 'vue'

const { height, title, paddingTop } = defineProps<{
  height: number
  title?: string
  paddingTop?: number
}>()

const classes = computed(() => {
  let classes = `flex flex-col bg-surface-0 overflow-hidden rounded-[12px] shadow-[0_0_20px_0_rgba(0,0,0,0.05)]`

  return classes
})

</script>

<template>
  <div :class="classes" :style="{ height: `${height}px` }">
    <div v-if="title" class="flex items-center pl-24 pr-24 min-h-60 border-b-1 border-surface-100 heading3B">
      {{ title }}
    </div>
    <div class="flex-1 flex flex-col p-24 overflow-auto" :style="{ paddingTop: `${paddingTop}px` }">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>

</style>