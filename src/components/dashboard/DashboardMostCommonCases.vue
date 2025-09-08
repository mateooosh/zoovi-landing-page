<script setup lang="ts">
import CSSVars from '../../models/CSSVars'

const values = [
  {
    color: CSSVars.getVar('--p-primary-color'),
    value: 50
  }
]

const cases = [
    { label: 'Szczepienie', value: 50, color: CSSVars.getVar('--p-primary-color') },
    { label: 'Kastracja', value: 43, color: CSSVars.getVar('--p-primary-color') },
    { label: 'Badanie ogólne', value: 37, color: CSSVars.getVar('--p-primary-color') },
    { label: 'Operacja', value: 21, color: CSSVars.getVar('--p-primary-color') },
    { label: 'Szczepienie', value: 11, color: CSSVars.getVar('--p-primary-color') },
]

</script>

<template>
  <DashboardCard class="flex-1" title="Najczęstsze przypadki" :height="400">
    <div class="flex flex-col flex-1 gap-16">
      <div v-for="(item, i) in cases" :key="i" class="flex flex-col gap-8">
        <div class="flex flex-row">
          <div class="flex-1 bodyB">{{ item.label }}</div>
          <div class="bodyB">{{ item.value }}</div>
        </div>
        <MeterGroup :value="[item]" :legend="false"/>
      </div>
    </div>
  </DashboardCard>
</template>

<style scoped>
:deep(.p-metergroup-label-list) {
  display: none;
}
</style>