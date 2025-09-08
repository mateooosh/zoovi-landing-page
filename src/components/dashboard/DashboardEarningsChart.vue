<script setup lang="ts">
import { Line } from 'vue-chartjs'
import CSSVars from '../../models/CSSVars'
import { MONTHS } from '../../common/MONTHS'

const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
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
      data: [1900, 5400, 3700, 8900, 2600, 6800, 9200, 4100, 7600, 3300, 10300, 5900],
      borderColor: CSSVars.getVar('--p-primary-color'),
      backgroundColor: CSSVars.getVar('--p-primary-color')
    }
  ]
}
</script>

<template>
  <DashboardCard class="flex-1" title="Wykres zarobków" :height="400" :padding-top="16">
    <div class="flex-1">
      <Line :options="options" :data="data"/>
    </div>
  </DashboardCard>
</template>

<style scoped>
</style>