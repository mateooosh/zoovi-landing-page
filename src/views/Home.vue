<script setup lang="ts">
import calendar from '../assets/gifs/calendar.gif'
import report from '../assets/gifs/report.gif'
import payment from '../assets/gifs/payment.gif'
import notification from '../assets/gifs/notification.gif'
import prescription from '../assets/gifs/prescription.gif'
import rating from '../assets/gifs/rating.gif'
import _24h from '../assets/gifs/24h.gif'
import message from '../assets/gifs/message.gif'
import beagle from '../assets/gifs/beagle.gif'
import bone from '../assets/gifs/bone.gif'
import dogFood from '../assets/gifs/dog-food.gif'
import Corgi from "../components/corgi/Corgi.vue";
import AnimatedText from "../components/animated-text/AnimatedText.vue";
import { ref } from 'vue'

const step = ref(0)

const onPrevious = () => {
  if (step.value < 1) {
    return
  }
  step.value--
}

const onNext = () => {
  if (step.value > 4) {
    return
  }
  step.value++
}
</script>

<template>
  <div>
    <div class="flex justify-center">
      <AnimatedText  text="Cześć" color="#009872"/>
    </div>


    <div class="flex justify-center text-2xl">
      <p>Tworzymy wspólnie aplikację, która ma ułatwić opiekę nad zwierzętami, oferując intuicyjną platformę do szybkiego rezerwowania usług weterynaryjnych, pielęgnacyjnych i opieki nad zwierzętami — wszystko zaprojektowane dla wygody właścicieli i komfortu ich pupili.</p>
    </div>

    <div class="flex justify-center">
      <Corgi/>
    </div>

    <div class="flex flex-col items-center">
      <div class="lg:text-5xl text-4xl font-medium lg:pl-0 lg:pr-0 pl-24 pr-24 mt-50 mb-50">Dlaczego warto?</div>
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

      <div class="lg:text-5xl text-4xl font-medium lg:pl-0 lg:pr-0 pl-24 pr-24 mt-100 mb-50">Chcemy poznać Twoje zdanie</div>
      <div class="flex flex-col gap-24 lg:w-978 w-full lg:pl-0 lg:pr-0 pl-24 pr-24 mb-50">
        <div class="grid lg:gap-80 items-center grid-cols-6 mb-16">
          <div class="flex justify-center" :style="{ gridColumnStart: step + 1 }">
            <img :src="beagle" class="sm:w-100 sm:h-100 w-60 h-60">
          </div>
          <div v-if="step < 1" class="flex justify-center">
            <img :src="bone" class="sm:w-60 sm:h-60 w-36 h-36">
          </div>
          <div v-if="step < 2" class="flex justify-center">
            <img :src="bone" class="sm:w-60 sm:h-60 w-36 h-36">
          </div>
          <div v-if="step < 3" class="flex justify-center">
            <img :src="bone" class="sm:w-60 sm:h-60 w-36 h-36">
          </div>
          <div v-if="step < 4" class="flex justify-center">
            <img :src="bone" class="sm:w-60 sm:h-60 w-36 h-36">
          </div>
          <div v-if="step < 5" class="flex justify-center">
            <img :src="dogFood" class="sm:w-100 sm:h-100 w-60 h-60">
          </div>
        </div>

        <div class="heading2B">Jak często chodzisz do weterynarza?</div>
        <div class="body flex gap-16 items-center">
          <Checkbox binary input-id="label1"/>
          <label for="label1">Raz w tygodniu</label>
        </div>
        <div class="body flex gap-16 items-center">
          <Checkbox binary input-id="label2"/>
          <label for="label2" class="body">Raz w miesiącu</label>
        </div>
        <div class="body flex gap-16 items-center">
          <Checkbox binary input-id="label3"/>
          <label for="label3" class="body">Raz w roku</label>
        </div>
        <div class="body flex gap-16 items-center">
          <Checkbox binary input-id="label4"/>
          <label for="label4" class="body">Rzadziej</label>
        </div>

        <div class="flex justify-between gap-16">
          <Button @click="onPrevious" class="h-40 w-200" variant="outlined">Wstecz</Button>
          <Button @click="onNext" class="h-40 w-200">Dalej</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>