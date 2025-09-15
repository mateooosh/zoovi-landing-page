<template>
  <div v-if="item.isLast" class="h-full flex items-center justify-center">
    <div class="heading2B text-center">Dziękujemy za wypełnienie ankiety!</div>
  </div>
  <div v-else class="flex flex-col gap-24">
    <div class="heading2B">{{ item.question }}</div>
    <div v-for="answer in item.answers" :key="answer" class="body flex gap-16 items-center">
      <Checkbox v-model="innerValue[answer]" @value-change="onValueChange($event, answer)" binary :input-id="`label-${item.id}-${answer}`"/>
      <label :for="`label-${item.id}-${answer}`">{{ answer }}</label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emit = defineEmits(['value-change'])

const { item, step } = defineProps<{
  item: any
  step: number
}>()

const innerValue = ref(
    item.answers.reduce((acc, answer) => {
      acc[answer] = false
      return acc
    }, {})
)

const onValueChange = (e, answer) => {
  Object.keys(innerValue.value).forEach(key => {
    innerValue.value[key] = false
  })
  innerValue.value[answer] = e

  emit('value-change', innerValue.value)
}
</script>

<style scoped>

</style>