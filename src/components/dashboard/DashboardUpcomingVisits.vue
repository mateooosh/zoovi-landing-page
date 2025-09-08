<script setup lang="ts">
import CSSVars from '../../models/CSSVars.ts'

const dataSource = [
  {
    id: 1,
    hour: '10:00',
    doctor: 'Jan Filipiak',
    animal: 'Pies',
    type: 'Szczepienie',
    owner: 'Paweł Piwko'
  },
  {
    id: 2,
    hour: '11:00',
    doctor: 'Jan Filipiak',
    animal: 'Kot',
    type: 'Szczepienie',
    owner: 'Paweł Piwko'
  },
  {
    id: 3,
    hour: '12:00',
    doctor: 'Jan Filipiak',
    animal: 'Pies',
    type: 'Szczepienie',
    owner: 'Paweł Piwko'
  }
]
</script>

<template>
  <DashboardCard class="flex-1" title="Nadchodzące wizyty" :height="400" :padding-top="4">
    <div class="flex-1">
      <DataTable :value="dataSource" style="color: red;">
        <Column field="hour" header="Godzina"
                :headerStyle="{ color: CSSVars.getVar('--color-black') }"
                :body-style="{ color: CSSVars.getVar('--color-neutral-heavy') }"/>
        <Column field="doctor" header="Lekarz"
                :headerStyle="{ color: CSSVars.getVar('--color-black') }"
                :body-style="{ color: CSSVars.getVar('--color-neutral-heavy') }"/>
        <Column field="animal" header="Zwierzę"
                :headerStyle="{ color: CSSVars.getVar('--color-black') }"
                :body-style="{ color: CSSVars.getVar('--color-neutral-heavy') }"/>
        <Column field="type" header="Typ wizyty"
                :headerStyle="{ color: CSSVars.getVar('--color-black') }"
                :body-style="{ color: CSSVars.getVar('--color-neutral-heavy') }"/>
        <Column field="owner" header="Właściciel"
                :headerStyle="{ color: CSSVars.getVar('--color-black') }"
                :body-style="{ color: CSSVars.getVar('--color-neutral-heavy') }"/>
      </DataTable>
    </div>
  </DashboardCard>
</template>

<style scoped>
</style>