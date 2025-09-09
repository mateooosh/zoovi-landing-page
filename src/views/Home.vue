<script setup lang="ts">
import calendar from '../assets/gifs/calendar.gif'
import report from '../assets/gifs/report.gif'
import payment from '../assets/gifs/payment.gif'
import notification from '../assets/gifs/notification.gif'
import prescription from '../assets/gifs/prescription.gif'
import rating from '../assets/gifs/rating.gif'
import _24h from '../assets/gifs/24h.gif'
import message from '../assets/gifs/message.gif'
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="text-5xl font-medium mt-50 mb-50">Dlaczego warto?</div>
    <div class="grid gap-24 sm:gap-60 2xl:gap-140 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
      <LandingCard :src="calendar"
                   title="Wygodna rezerwacja"
                   caption="Rezerwuj, zmień termin wizyty lub odwołaj w razie potrzeby - wszystko wykonasz wygodnie w aplikacji"/>
      <LandingCard :src="report"
                   title="Historia leczenia"
                   caption="Wszystkie dane medyczne Twojego pupila w jednym miejscu"/>
      <LandingCard :src="payment"
                   title="Płatności online"
                   caption="Za wizytę zapłacisz szybko, bezpiecznie i wygodnie"/>
      <LandingCard :src="notification"
                   title="Przypomnienia"
                   caption="Nie przegapisz już żadnej wizyty ani szczepienia - aplikacja przypomni Ci o wszystkich ważnych sprawach związanych z pupilem"/>
    </div>

    <div class="grid gap-24 sm:gap-60 2xl:gap-140 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 mt-50">
      <LandingCard :src="prescription"
                   title="E-recepty"
                   caption="Otrzymuj recepty bez wychodzenia z domu - kilka kliknięć, a leki możesz odebrać w wybranej aptece"/>
      <LandingCard :src="rating"
                   title="System ocen"
                   caption="Sprawdź opinie o weterynarzu i oceń swoje wizyty - łatwiej wybierzesz najlepszego specjalistę dla swojego pupila"/>
      <LandingCard :src="_24h"
                   title="Dyżury nocne"
                   caption="W nagłej sytuacji aplikacja pomoże Ci znaleźć pomoc, nawet w godzinach nocnych"/>
      <LandingCard :src="message"
                   title="Kontakt z lekarzem"
                   caption="W razie potrzeby po wizycie możesz zadać dodatkowe pytania lekarzowi"/>
    </div>
  </div>
</template>

<style scoped>

</style>