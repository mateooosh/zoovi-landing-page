<template>
  <Transition name="fade-in"
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
.fade-in-enter-active {
  transition: all 0.5s ease-out var(--delay);
}

.fade-in-leave-active {
  transition: all 0.5s ease-in;
}

.fade-in-enter-from {
  opacity: 0;
}

.fade-in-leave-to {
  opacity: 0;
}
</style>