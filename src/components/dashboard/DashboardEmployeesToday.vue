<script setup lang="ts">

</script>

<template>
  <DashboardCard class="flex-1" title="Pracownicy dziś" :height="400" :padding-top="4">
    <div class="flex-1">
      <DashboardEmployeeCard name="Janusz Filipiak" phone="523 967 002" is-at-work/>
      <DashboardEmployeeCard name="Janusz Filipiak" phone="523 967 002"/>
      <DashboardEmployeeCard name="Janusz Filipiak" phone="523 967 002" is-at-work/>
      <DashboardEmployeeCard name="Janusz Filipiak" phone="523 967 002"/>
    </div>
  </DashboardCard>
</template>

<style scoped>
</style>