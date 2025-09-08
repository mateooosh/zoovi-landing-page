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
      data: [21, 24, 27, 35, 46, 45, 47, 51, 52, 62, 67, 72],
      borderColor: CSSVars.getVar('--p-primary-color'),
      backgroundColor: CSSVars.getVar('--p-primary-color')
    }
  ]
}
</script>

<template>
  <DashboardCard class="2xl:flex-1" title="Liczba klientów" :height="400">
    <div class="flex-1">
      <Line :options="options" :data="data"/>
    </div>
  </DashboardCard>
</template>

<style scoped>
</style>