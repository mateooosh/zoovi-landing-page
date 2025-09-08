<script setup lang="ts">
import { Doughnut } from 'vue-chartjs'
import CSSVars from '../../models/CSSVars'

const data = {
  datasets: [
    {
      data: [60, 30, 10],
      backgroundColor: [
        CSSVars.getVar('--p-primary-color'),
        CSSVars.getVar('--p-red-500'),
        CSSVars.getVar('--p-amber-400')
      ]
    }
  ]
}
</script>

<template>
  <DashboardCard class="flex-1" title="Obłożenie" :height="400">
    <div class="flex flex-col justify-between flex-1">
      <div class="flex flex-row self-center w-180 relative">
        <Doughnut :data="data" :options="{ cutout: '88%', rotation: -90 }"/>
        <div class="doughnut-value text-primary text-5xl font-medium absolute top-[50%] left-[50%] transform-[]">
          60%
        </div>
      </div>
      <div>
        <DashboardOccupancyLabel :color="CSSVars.getVar('--p-primary-color')" label="Zarezerwowane"/>
        <DashboardOccupancyLabel :color="CSSVars.getVar('--p-red-500')" label="Wolne"/>
        <DashboardOccupancyLabel :color="CSSVars.getVar('--p-amber-400')" label="Anulowane"/>
      </div>
    </div>
  </DashboardCard>
</template>

<style scoped>
.doughnut-value {
  transform: translate(-50%, -46%);
}
</style>