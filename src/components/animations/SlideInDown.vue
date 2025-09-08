<template>
  <Transition name="slide-in-down"
              appear
              :style="{ '--delay': `${delay}ms` }">
    <slot/>
  </Transition>
</template>

<script setup lang="ts">
interface Props {
  delay?: number
}

withDefaults(defineProps<Props>(), {
  delay: 0
})
</script>

<style scoped>
.slide-in-down-enter-active {
  transition: transform 0.5s ease-out var(--delay), opacity 0.5s ease-out var(--delay);
}

.slide-in-down-leave-active {
  transition: transform 0.5s ease-in, opacity 0.5s ease-in;
}

.slide-in-down-enter-from {
  transform: translateY(100px);
  opacity: 0;
}

.slide-in-down-leave-to {
  transform: translateY(100px);
  opacity: 0;
}
</style>