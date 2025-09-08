<script setup lang="ts">
import { Line } from 'vue-chartjs'
import CSSVars from '../../models/CSSVars'
import { MONTHS } from '../../common/MONTHS'

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true
    }
  },
  elements: {
    line: {
      tension: 0.4    // Makes the line curved instead of sharp angles
    }
  }
}

const data = {
  labels: MONTHS,
  datasets: [
    {
      label: 'Psy',
      data: [23, 63, 56, 31, 72, 74, 65, 42, 63, 78, 64, 61],
      borderColor: CSSVars.getVar('--p-primary-color'),
      backgroundColor: CSSVars.getVar('--p-primary-color')
    },
    {
      label: 'Koty',
      data: [47, 45, 31, 25, 43, 73, 34, 26, 32, 59, 41, 53],
      borderColor: CSSVars.getVar('--p-red-500'),
      backgroundColor: CSSVars.getVar('--p-red-500')
    },
    {
      label: 'Węże',
      data: [14, 25, 22, 21, 17, 11, 13, 22, 15, 11, 6, 8],
      borderColor: CSSVars.getVar('--p-amber-400'),
      backgroundColor: CSSVars.getVar('--p-amber-400')
    }
  ]
}
</script>

<template>
  <DashboardCard class="flex-1" title="Rodzaje zwierząt" :height="400" :padding-top="8">
    <div class="flex-1">
      <Line :options="options" :data="data"/>
    </div>
  </DashboardCard>
</template>

<style scoped>
</style>