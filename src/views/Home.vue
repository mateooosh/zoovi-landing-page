<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="text-5xl font-medium mt-50 mb-50">Dlaczego warto?</div>
    <div class="grid gap-24 sm:gap-60 2xl:gap-140 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
      <LandingCard src="/gifs/calendar.gif"
                   title="Wygodna rezerwacja"
                   caption="Rezerwuj, zmień termin wizyty lub odwołaj w razie potrzeby - wszystko wykonasz wygodnie w aplikacji"/>
      <LandingCard src="/gifs/report.gif"
                   title="Historia leczenia"
                   caption="Wszystkie dane medyczne Twojego pupila w jednym miejscu"/>
      <LandingCard src="/gifs/payment.gif"
                   title="Płatności online"
                   caption="Za wizytę zapłacisz szybko, bezpiecznie i wygodnie"/>
      <LandingCard src="/gifs/notification.gif"
                   title="Przypomnienia"
                   caption="Nie przegapisz już żadnej wizyty ani szczepienia - aplikacja przypomni Ci o wszystkich ważnych sprawach związanych z pupilem"/>
    </div>

    <div class="grid gap-24 sm:gap-60 2xl:gap-140 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 mt-50">
      <LandingCard src="/gifs/prescription.gif"
                   title="E-recepty"
                   caption="Otrzymuj recepty bez wychodzenia z domu - kilka kliknięć, a leki możesz odebrać w wybranej aptece"/>
      <LandingCard src="/gifs/rating.gif"
                   title="System ocen"
                   caption="Sprawdź opinie o weterynarzu i oceń swoje wizyty - łatwiej wybierzesz najlepszego specjalistę dla swojego pupila"/>
      <LandingCard src="/gifs/24h.gif"
                   title="Dyżury nocne"
                   caption="W nagłej sytuacji aplikacja pomoże Ci znaleźć pomoc, nawet w godzinach nocnych"/>
      <LandingCard src="/gifs/message.gif"
                   title="Kontakt z lekarzem"
                   caption="W razie potrzeby po wizycie możesz zadać dodatkowe pytania lekarzowi"/>
    </div>
  </div>
</template>

<style scoped>

</style>