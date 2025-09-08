<script setup lang="ts">
import { ref } from 'vue'

const { menuItems } = defineProps<{
  menuItems: any[]
}>()

const selectedOption = ref(0)

const changeSelectedOption = (index: number): void => {
  selectedOption.value = index
}
</script>

<template>
  <div class="flex flex-1 w-full bg-surface-0 h-screen">
    <div class="flex flex-col w-320 pt-16 pb-32">
      <div class="text-4xl font-medium ml-32">Zoovi</div>
      <div class="flex flex-col flex-1 gap-8 mt-48 pl-12 pr-12">
        <DashboardMenuItem v-for="(item, index) in menuItems" :key="index"
                           @click="changeSelectedOption(index)"
                           :icon="item.icon"
                           :label="item.label"
                           :is-selected="selectedOption === index"/>
      </div>
      <div class="pl-12 pr-12">
        <DashboardMenuItem icon="test" label="Ustawienia"/>
      </div>
    </div>
    <div class="flex flex-col flex-1 bg-surface-50 overflow-hidden">
      <div class="flex items-center h-80 pl-32 pr-32 bg-surface-0 border-surface-100 border-b-1">
        <div class="flex-1 heading2B">Nazwa kliniki</div>
        <Avatar label="P" size="large" shape="circle"/>
      </div>
      <div class="flex flex-col flex-1 overflow-auto">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>