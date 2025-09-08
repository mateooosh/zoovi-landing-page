<script setup lang="ts">
</script>

<template>
  <DashboardCard class="2xl:flex-1" title="Ostatnie oceny" :height="400" :padding-top="4">
    <div class="flex-1">
      <DashboardEmployeePanel v-for="i in [1,2,3]" :key="i" name="Janusz Filipiak">
        <template #right>
          <div>5 gwiazdek</div>
        </template>
      </DashboardEmployeePanel>
    </div>
  </DashboardCard>
</template>

<style scoped>
</style>