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
import { computed, nextTick, onBeforeUnmount, onMounted, ref, useTemplateRef } from 'vue'
import { database, databaseRef, analytics } from '../firebase/firebase.ts'
import { update, increment, push, ref as firebaseRef } from 'firebase/database'
import { logEvent } from 'firebase/analytics'

const step = ref(0)
const footPrintsWidth = ref(0)
const surveyResults = ref([])
const sentEmail = ref(false)
const email = ref('')
const beagleRef = useTemplateRef('beagleRef')
const gridContainerRef = useTemplateRef('gridContainerRef')

function updateWidth() {
  nextTick(() => {
    footPrintsWidth.value = beagleRef?.value.getBoundingClientRect().left - gridContainerRef?.value.getBoundingClientRect().left
  })
}

onMounted(async () => {
  window.addEventListener('resize', updateWidth)
  updateWidth()

  const path = 'views-count/business'

  try {
    await update(databaseRef, {
      [path]: increment(1)
    })
  } catch (error) {
    console.error('Error incrementing:', error)
  }
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
  step.value++
  updateWidth()

  if (step.value > survey.length - 2) {
    const results = surveyResults.value.map((res) => Object.keys(res).find(key => res[key] === true))

    results.forEach((answer, index) => {
      incrementSurveyAnswer('business', index, answer)
    })
  }
}

const incrementSurveyAnswer = async (group, index, answer) => {
  const path = `survey/${group}/${index}/${answer}`

  try {
    await update(databaseRef, {
      [path]: increment(1)
    })
  } catch (error) {
    console.error('Error incrementing:', error)
  }
}

const addEmail = async () => {
  try {
    const emailsRef = firebaseRef(database, 'emails/business')
    await push(emailsRef, email.value)
    sentEmail.value = true
    email.value = ''

    logEvent(analytics, 'email_business')

  } catch (error) {
    console.error('Error saving email:', error)
  }
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
    <div
        class="flex justify-center flex-col lg:flex-row gap-0 lg:gap-40 items-center lg:pl-0 lg:pr-0 pl-24 pr-24  mt-50">
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

    <div class="flex justify-center mb-50">
      <h2 class="handwritten subtitle font-extrabold text-primary pa-0">Jesteśmy Zoovi</h2>
    </div>

    <SlideInDown :delay="300">
      <div class="flex flex-col items-center justify-center pl-24 pr-24 mb-200">
        <div class="w-full lg:w-860 text-center leading-40 relative text-2xl">
          Wspólnie tworzymy aplikację, która ma ułatwić opiekę nad zwierzętami, oferując intuicyjną platformę do
          szybkiego rezerwowania usług weterynaryjnych, pielęgnacyjnych i opieki nad zwierzętami — wszystko
          zaprojektowane dla wygody właścicieli i komfortu ich pupili.
          <div class="flex justify-end items-end gap-20 absolute right-[20px] bottom-[-110px]">
            <SlideInDown :delay="500">
              <div class="flex">
                <div class="text-neutral-light" style="font-family: 'Segoe Script', sans-serif; font-size: 30px;">Nasz
                  cel
                </div>
              </div>
            </SlideInDown>
            <SlideInDown :delay="400">
              <img :src="arrow2" class="w-80 pb-20">
            </SlideInDown>
          </div>
        </div>
      </div>
    </SlideInDown>

    <div class="flex justify-center" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 zoom-in-75 animate-duration-500' }">
      <Corgi/>
    </div>

    <div class="flex flex-col items-center">
      <div class="lg:text-5xl text-4xl font-medium lg:pl-0 lg:pr-0 pl-24 pr-24 mt-50 mb-50"
           v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 zoom-in-75 animate-duration-500' }">Dlaczego warto?</div>
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
    </div>

    <div class="flex flex-col items-center bg-surface-100 mt-100">
      <div class="lg:text-5xl text-4xl font-medium lg:pl-0 lg:pr-0 pl-24 pr-24 mt-50 mb-50"
           v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 zoom-in-75 animate-duration-500' }">A można tak bardziej obrazkowo? :)</div>
      <div class="flex flex-col items-center justify-center pl-24 pr-24 mb-100 w-[100%] ytplayer"
           v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 zoom-in-75 animate-duration-500' }">
        <iframe
            src="https://www.youtube.com/embed/1Y0tJY-hirE"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen>
        </iframe>
      </div>
    </div>

    <div class="flex flex-col items-center">
      <div class="lg:text-5xl text-4xl font-medium lg:pl-0 lg:pr-0 pl-24 pr-24 mt-100 mb-50"
           v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 zoom-in-75 animate-duration-500' }">Chcemy poznać Twoje zdanie</div>
      <div class="flex flex-col gap-24 lg:w-978 w-full lg:pl-0 lg:pr-0 pl-24 pr-24 mb-100"
           v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 zoom-in-75 animate-duration-500' }">
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

        <Carousel :page="step" :value="survey" :numVisible="1" :numScroll="1" :show-navigators="false"
                  :show-indicators="false">
          <template #item="{ data }">
            <LandingSurveyQuestion :item="data" :step="step" @value-change="onAnswerChange"/>
          </template>
        </Carousel>

        <div v-if="step < 6" class="flex justify-between gap-16">
          <Button @click="onPrevious" :disabled="step < 1" class="h-40 w-200" variant="outlined">Wstecz</Button>
          <Button @click="onNext" :disabled="surveyPrimaryButtonIsDisabled" class="h-40 w-200">
            {{ surveyPrimaryButtonLabel }}
          </Button>
        </div>
      </div>
    </div>

    <div class="flex items-center justify-center mt-50 mb-100" v-animateonscroll="{ enterClass: 'animate-enter fade-in-10 zoom-in-75 animate-duration-500' }">
      <div class="cta-final reveal surface max-w-[1200px] min-h-[295px] w-full flex flex-row items-center justify-center">
        <div v-if="sentEmail" class="lg:text-5xl text-4xl font-medium text-center">
          Dziękujemy
        </div>
        <div v-else style="display:grid; gap:10px; align-items:center">
          <h2 class="lg:text-5xl text-4xl font-medium lg:pl-0 lg:pr-0 mb-15">Może chciałbyś sprawdzić jak to działa?</h2>
          <p class="mb-15" style="color:#E2F7F3; margin:0 0 8px; max-width: 70%">Bylibyśmy zaszczyceni, gdybyś miał ochotę wziąć udział w przyszłych testach naszego rozwiązania. Aby wziąc
            udział w zamkniętej becie naszej aplikacji zostaw swojego maila. <br/>Obiecujemy nie wysyłać spamu - dostaniesz
            od nas jedynie zaproszenie do testów, gdy aplikacja będzie gotowa.</p>

          <div class="flex flex-row gap-16">
            <InputText v-model="email" type="email" placeholder="email" class="w-[100%]"></InputText>
            <Button @click="addEmail" class="h-40 w-200">Zapisz się</Button>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col items-center justify-center h-50 bg-primary-600 font-medium" style="color: #e8e8e8;">
      <span>Copyright © 2025, Zoovi | Icons by <a href="https://www.flaticon.com" target="_blank"
                                                  rel="noopener noreferrer">Flaticon</a>.</span>
    </div>
  </div>
</template>

<style scoped>
.handwritten {
  font-family: 'JustMeAgainDownHere';
}

.subtitle {
  font-size: 8rem;
  font-weight: 800;
}

.surface {
  background: #FFFFFF;
  border: 1px solid #E2E8F0;
  border-radius: var(--radius);
  box-shadow: 0 10px 30px rgba(19,163,139,.12);
}

.cta-final {
  position: relative;
  overflow: hidden;
  background: linear-gradient(120deg, #007a5c, #0E7F6B);
  color: white;
  border-radius:16px;
  padding: clamp(28px, 4vw, 44px)
}

.cta-final::after {
  content: "";
  position: absolute;
  width: 340px;
  height: 340px;
  border-radius: 50%;
  right: -120px;
  top: -120px;
  background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, .35), rgba(255, 255, 255, 0) 60%)
}

.ytplayer iframe{
  width:100%;
  max-width:1200px;
  aspect-ratio:16/9;
  height:auto;
  border:0;
  display:block;
}


</style>