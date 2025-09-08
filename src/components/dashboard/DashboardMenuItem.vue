<script setup lang="ts">
import { computed } from 'vue'

const { label, isSelected } = defineProps<{
  // icon: string
  label: string
  isSelected?: boolean
}>()

const classes = computed((): string => {
  let classes = 'dashboard-menu-item flex items-center gap-8 pl-16 h-44 rounded-[12px] hover:cursor-pointer hover:bg-surface-100 border-1 border-transparent'

  if (isSelected) {
    classes += ' bg-surface-100 border'
  }

  return classes
})

</script>

<template>
  <div :class="classes">
    <!--    <div>{{ icon }}</div>-->
    <div class="bodyB text-neutral-heavy">{{ label }}</div>
  </div>
</template>

<style scoped>
.dashboard-menu-item {
  transition: background-color 0.3s ease;
}

.border {
  border: 1px solid var(--color-disabled)
}
</style>