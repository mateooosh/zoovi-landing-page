<script setup lang="ts">
const companyDashboardMenuItems = [
  {
    icon: 'home',
    label: 'Klinika'
  },
  {
    icon: 'calendar-month',
    label: 'Kalendarz'
  },
  {
    icon: 'account-multiple',
    label: 'Pracownicy'
  }
]

</script>

<template>
  <Dashboard :menu-items="companyDashboardMenuItems">
    <div class="flex flex-col gap-32 p-32">
      <SlideInDown>
        <DashboardCard class="flex-1" :height="120">
          <div class="flex gap-1 bg-surface-100">
            <div class="flex-1 justify-center items-center bg-surface-0 text-center">
              <div class="bodyB text-neutral">Wizyt dzisiaj</div>
              <div class="heading1B">24</div>
              <div class="captionB mt-8"><span class="caption text-neutral">W tym miesiącu:</span> 122</div>
            </div>
            <div class="flex-1 justify-center items-center bg-surface-0 text-center">
              <div class="bodyB text-neutral">Zysk dzisiaj</div>
              <div class="heading1B">650 zł</div>
              <div class="captionB mt-8"><span class="caption text-neutral">W tym miesiącu:</span> 10 200 zł</div>
            </div>
            <div class="flex-1 justify-center items-center bg-surface-0 text-center">
              <div class="bodyB text-neutral">Klientów</div>
              <div class="heading1B">86</div>
              <div class="captionB mt-8"><span class="caption text-neutral">W tym miesiącu:</span> 12</div>
            </div>
            <div class="flex-1 justify-center items-center bg-surface-0 text-center">
              <div class="bodyB text-neutral">Ocena klientów</div>
              <div class="heading1B">4.74</div>
              <div class="captionB mt-8"><span class="caption text-neutral">W tym miesiącu:</span> 381</div>
            </div>
          </div>
        </DashboardCard>
      </SlideInDown>
      <div class="flex flex-col gap-32 2xl:flex-row">
        <SlideInDown :delay="100">
          <DashboardEarningsChart/>
        </SlideInDown>
        <SlideInDown :delay="200">
          <DashboardAnimalTypesChart/>
        </SlideInDown>
      </div>
      <div class="flex flex-col gap-32 2xl:flex-row">
        <SlideInDown :delay="300">
          <DashboardUpcomingVisits/>
        </SlideInDown>
        <div class="flex flex-1 gap-32">
          <SlideInDown :delay="400">
            <DashboardEmployeesToday class="flex-5"/>
          </SlideInDown>
          <SlideInDown :delay="500">
            <DashboardOccupancy class="flex-4"/>
          </SlideInDown>
        </div>
      </div>
      <div class="flex flex-col gap-32 2xl:flex-row">
        <SlideInDown :delay="600">
          <DashboardClientsChart/>
        </SlideInDown>
        <SlideInDown :delay="700">
          <DashboardRecentReviews/>
        </SlideInDown>
      </div>
      <div class="flex gap-32 w-300">
        <SlideInDown :delay="800">
          <DashboardMostCommonCases/>
        </SlideInDown>
      </div>
    </div>
  </Dashboard>
</template>

<style scoped>

</style>