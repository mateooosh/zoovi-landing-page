<script setup lang="ts">
const boldTypographyToUse = ['heading1B', 'heading2B', 'heading3B', 'bodyLargeB', 'bodyB', 'bodySmallB', 'captionB']
const lightTypographyToUse = ['heading1', 'heading2', 'heading3', 'bodyLarge', 'body', 'bodySmall', 'caption']
const fontColorsToUse = ['text-default' , 'text-neutral-heavy', 'text-neutral', 'text-neutral-light', 'text-disabled', 'text-primary']
</script>

<template>
  <div class="flex flex-col items-center w-full p-16 gap-32">
    <div class="text-5xl font-medium">Documentation</div>
    <div class="flex flex-col w-600">
      <div class="heading1B text-center">Typography (Custom)</div>
      <div class="flex flex-row">
        <div class="flex-1 flex flex-col gap-2">
          <div v-for="(type, index) in boldTypographyToUse" :key="index">
            <div :class="type">{{ type }}</div>
          </div>
        </div>
        <div class="flex-1 flex flex-col gap-2">
          <div v-for="(type, index) in lightTypographyToUse" :key="index">
            <div :class="type">{{ type }}</div>
          </div>
        </div>
      </div>
      <div class="heading1B text-center mt-20 mb-10">Typography <span class="bodyB">(Tailwind - bold with class="font-medium")</span></div>
      <div class="flex flex-row">
        <div class="flex-1 flex flex-col gap-2">
          <div class="text-5xl font-medium">text-5xl</div>
          <div class="text-4xl font-medium">text-4xl</div>
          <div class="text-3xl font-medium">text-3xl</div>
          <div class="text-2xl font-medium">text-2xl</div>
          <div class="text-xl font-medium">text-xl</div>
          <div class="text-lg font-medium">text-lg</div>
          <div class="text-base font-medium">text-base</div>
          <div class="text-sm font-medium">text-sm</div>
          <div class="text-xs font-medium">text-xs</div>
        </div>
        <div class="flex-1 flex flex-col gap-2">
          <div class="text-5xl">text-5xl</div>
          <div class="text-4xl">text-4xl</div>
          <div class="text-3xl">text-3xl</div>
          <div class="text-2xl">text-2xl</div>
          <div class="text-xl">text-xl</div>
          <div class="text-lg">text-lg</div>
          <div class="text-base">text-base</div>
          <div class="text-sm">text-sm</div>
          <div class="text-xs">text-xs</div>
        </div>
      </div>
    </div>
    <div class="flex flex-col w-600">
      <div class="heading1B text-center">Text colors</div>
      <div class="flex flex-col gap-2">
        <div class="flex flex-row">
          <div class="flex-1 heading3B">Color</div>
          <div class="flex-1 heading3B">Light</div>
          <div class="flex-1 heading3B">Bold</div>
        </div>
        <div v-for="color in fontColorsToUse" class="flex flex-row">
          <div class="flex-1">{{ color }}</div>
          <div :class="`flex-1 body ${color}`">Light</div>
          <div :class="`flex-1 bodyB ${color}`">Bold</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>