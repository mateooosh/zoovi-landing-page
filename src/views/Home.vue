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
import pawSvg from "../assets/paw.svg"
import zooviLogo from "../assets/zoovi-logo.svg"
import arrow1 from "../assets/arrow-1.svg"
import arrow2 from "../assets/arrow-2.svg"
import Corgi from "../components/corgi/Corgi.vue"
import AnimatedText from "../components/animated-text/AnimatedText.vue"
import { ref, useTemplateRef, onMounted, computed, onBeforeUnmount, nextTick } from 'vue'

const step = ref(0)
const footPrintsWidth = ref(0)
const surveyResults = ref([])
const beagleRef = useTemplateRef('beagleRef')
const gridContainerRef = useTemplateRef('gridContainerRef')

function updateWidth() {
  nextTick(() => {
    footPrintsWidth.value =  beagleRef?.value.getBoundingClientRect().left - gridContainerRef?.value.getBoundingClientRect().left
  })
}

onMounted(() => {
  window.addEventListener('resize', updateWidth)
  updateWidth()
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateWidth)
})

const footPrintsAmount = computed(() => {
  if (!gridContainerRef?.value || !beagleRef?.value || footPrintsWidth.value === 0) {
    return 0
  }

  return Math.floor(footPrintsWidth.value / 17) + 1
})

const onPrevious = () => {
  if (step.value < 1) {
    return
  }
  step.value--
  updateWidth()
}

const onNext = () => {
  if (step.value > survey.length - 2) {
    console.log('koniec', surveyResults.value)
    return
  }
  step.value++
  updateWidth()
}

const onAnswerChange = (value) => {
  surveyResults.value[step.value] = value
}

const surveyPrimaryButtonIsDisabled = computed(() => {
  if (surveyResults.value[step.value]) {
    return !Object.values(surveyResults.value[step.value]).some(v => v === true)
  }

  return true
})

const surveyPrimaryButtonLabel = computed(() => {
  if (step.value >= survey.length - 2) {
    return 'Zakończ'
  }
  return 'Dalej'
})

const survey = [
  {
    id: 0,
    question: 'Czy landing page zachęcił Pana/Panią do skorzystania ze strony i aplikacji Zoovi?',
    answers: ['Tak', 'Nie']
  },
  {
    id: 1,
    question: 'Czy explainer video zachęcił do skorzystania ze strony i aplikacji Zoovi?',
    answers: ['Tak', 'Nie']
  },
  {
    id: 2,
    question: 'Czy chciałby/-aby Pan/-i wziąć udział w testach systemu?',
    answers: ['Tak', 'Nie']
  },
  {
    id: 3,
    question: 'Czy główne cechy produkty zostały przedstawione w zrozumiałej formie?',
    answers: ['Tak', 'Nie']
  },
  {
    id: 4,
    question: 'Czy landing page i explaner video są wystarczające do zapoznania się z naszym produktem?',
    answers: ['Tak', 'Nie']
  },
  {
    id: 5,
    question: 'Czy wpółpraca Zoovi z partnerami (np. Główny Inspektorat Weterynarii, Krajowa Izba Lekarsko-Weterynaryjna, Schroniska) zachęciłby Pana/-i do korzystania ze strony i aplikacji?',
    answers: ['Tak', 'Nie']
  },
  {
    id: 6,
    isLast: true,
    question: 'Koniec',
    answers: ['Tak', 'Nie']
  }
]
</script>

<template>
  <div>
    <div class="flex justify-center flex-col lg:flex-row gap-0 lg:gap-40 items-center lg:pl-0 lg:pr-0 pl-24 pr-24 mt-50">
      <AnimatedText text="Cześć" color="#009872"/>
      <div class="relative lg:block flex items-end gap-12">
        <SlideInDown>
          <img :src="zooviLogo">
        </SlideInDown>
        <SlideInDown :delay="100">
          <img :src="arrow1" class="lg:absolute lg:mb-0 mb-30 w-100" style="right: -120px; bottom: 30px;">
        </SlideInDown>

        <SlideInDown :delay="200">
          <span class="lg:absolute text-neutral-light"
                style="right: -260px; bottom: -20px; font-family: 'Segoe Script', sans-serif; font-size: 30px;">Nasze logo</span>
        </SlideInDown>
      </div>
    </div>
    <div class="flex justify-center lg:pl-0 lg:pr-0 pl-24 pr-24 mb-100 lg:mt-0 mt-50">
      <AnimatedText class="h-120" text="Jesteśmy Zoovi" color="#009872" :view-box-width="400"/>
    </div>

    <SlideInDown :delay="300">
      <div class="flex flex-col items-center justify-center pl-24 pr-24 mb-200">
        <div class="w-full lg:w-860 text-center leading-40 relative text-2xl">
          Tworzymy wspólnie aplikację, która ma ułatwić opiekę nad zwierzętami, oferując intuicyjną platformę do szybkiego rezerwowania usług weterynaryjnych, pielęgnacyjnych i opieki nad zwierzętami — wszystko zaprojektowane dla wygody właścicieli i komfortu ich pupili.
          <div class="flex justify-end items-end gap-20 absolute right-[20px] bottom-[-110px]">
            <SlideInDown :delay="500">
              <div class="flex">
                <div class="text-neutral-light" style="font-family: 'Segoe Script', sans-serif; font-size: 30px;">Nasz cel</div>
              </div>
            </SlideInDown>
            <SlideInDown :delay="400">
              <img :src="arrow2" class="w-80 pb-20">
            </SlideInDown>
          </div>
        </div>
      </div>
    </SlideInDown>

    <div class="flex flex-col items-center justify-center pl-24 pr-24 mb-100">
      <iframe
          width="800"
          height="450"
          src="https://www.youtube.com/embed/8nd5n5KVOUo"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
      </iframe>
    </div>

    <div class="flex justify-center">
      <Corgi/>
    </div>

    <div class="flex flex-col items-center">
      <div class="lg:text-5xl text-4xl font-medium lg:pl-0 lg:pr-0 pl-24 pr-24 mt-50 mb-50">Dlaczego warto?</div>
      <div class="grid gap-24 sm:gap-60 2xl:gap-140 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
        <LandingCard v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 zoom-in-75 animate-duration-500' }"
                     :src="calendar"
                     title="Wygodna rezerwacja"
                     caption="Rezerwuj, zmień termin wizyty lub odwołaj w razie potrzeby - wszystko wykonasz wygodnie w aplikacji"/>
        <LandingCard v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 zoom-in-75 animate-duration-500' }"
                     :src="report"
                     title="Historia leczenia"
                     caption="Wszystkie dane medyczne Twojego pupila w jednym miejscu"/>
        <LandingCard v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 zoom-in-75 animate-duration-500' }"
                     :src="payment"
                     title="Płatności online"
                     caption="Za wizytę zapłacisz szybko, bezpiecznie i wygodnie"/>
        <LandingCard v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 zoom-in-75 animate-duration-500' }"
                     :src="notification"
                     title="Przypomnienia"
                     caption="Nie przegapisz już żadnej wizyty ani szczepienia - aplikacja przypomni Ci o wszystkich ważnych sprawach związanych z pupilem"/>
      </div>

      <div class="grid gap-24 sm:gap-60 2xl:gap-140 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 mt-50">
        <LandingCard v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 zoom-in-75 animate-duration-500' }"
                     :src="prescription"
                     title="E-recepty"
                     caption="Otrzymuj recepty bez wychodzenia z domu - kilka kliknięć, a leki możesz odebrać w wybranej aptece"/>
        <LandingCard v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 zoom-in-75 animate-duration-500' }"
                     :src="rating"
                     title="System ocen"
                     caption="Sprawdź opinie o weterynarzu i oceń swoje wizyty - łatwiej wybierzesz najlepszego specjalistę dla swojego pupila"/>
        <LandingCard v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 zoom-in-75 animate-duration-500' }"
                     :src="_24h"
                     title="Dyżury nocne"
                     caption="W nagłej sytuacji aplikacja pomoże Ci znaleźć pomoc, nawet w godzinach nocnych"/>
        <LandingCard v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 zoom-in-75 animate-duration-500' }"
                     :src="message"
                     title="Kontakt z lekarzem"
                     caption="W razie potrzeby po wizycie możesz zadać dodatkowe pytania lekarzowi"/>
      </div>

      <div class="lg:text-5xl text-4xl font-medium lg:pl-0 lg:pr-0 pl-24 pr-24 mt-100 mb-50">Chcemy poznać Twoje zdanie</div>
      <div class="flex flex-col gap-24 lg:w-978 w-full lg:pl-0 lg:pr-0 pl-24 pr-24 mb-100">
        <div ref="gridContainerRef" class="grid items-center grid-cols-7 mb-16 relative">
          <FadeIn v-for="index in footPrintsAmount" :key="index" :delay="index / footPrintsAmount * 50">
            <img
                 class="absolute"
                 :style="`left: ${17 * (index - 1)}px; bottom: ${index % 2 ? 4 : 16}px;`" :src="pawSvg">
          </FadeIn>

          <div class="flex justify-center" :style="{ gridColumnStart: step + 1, minWidth: '60px' }">
            <img ref="beagleRef" :src="beagle" class="sm:w-100 sm:h-100 w-60 h-60">
          </div>
          <div v-if="step < 1" class="flex justify-center">
            <img :src="bone" class="sm:w-60 sm:h-60 w-32 h-32">
          </div>
          <div v-if="step < 2" class="flex justify-center">
            <img :src="bone" class="sm:w-60 sm:h-60 w-32 h-32">
          </div>
          <div v-if="step < 3" class="flex justify-center">
            <img :src="bone" class="sm:w-60 sm:h-60 w-32 h-32">
          </div>
          <div v-if="step < 4" class="flex justify-center">
            <img :src="bone" class="sm:w-60 sm:h-60 w-32 h-32">
          </div>
          <div v-if="step < 5" class="flex justify-center">
            <img :src="bone" class="sm:w-60 sm:h-60 w-32 h-32">
          </div>
          <div v-if="step < 6" class="flex justify-center" style="min-width: 60px;">
            <img :src="dogFood" class="sm:w-100 sm:h-100 w-60 h-60">
          </div>
        </div>

        <Carousel :page="step" :value="survey" :numVisible="1" :numScroll="1" :show-navigators="false" :show-indicators="false">
          <template #item="{ data }">
            <LandingSurveyQuestion :item="data" :step="step" @value-change="onAnswerChange"/>
          </template>
        </Carousel>

        <div v-if="step < 6" class="flex justify-between gap-16">
          <Button @click="onPrevious" :disabled="step < 1" class="h-40 w-200" variant="outlined">Wstecz</Button>
          <Button @click="onNext" :disabled="surveyPrimaryButtonIsDisabled" class="h-40 w-200">{{ surveyPrimaryButtonLabel }}</Button>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-center justify-center h-50 bg-primary-600 font-medium" style="color: #e8e8e8;">
      <span>Copyright © 2025, Zoovi | Icons by <a href="https://www.flaticon.com" target="_blank" rel="noopener noreferrer">Flaticon</a>.</span>
    </div>
  </div>
</template>

<style scoped>

</style>