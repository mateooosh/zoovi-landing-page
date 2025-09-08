import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config'
import Aura from '@primeuix/themes/aura'
import { definePreset } from '@primeuix/themes'

import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement, LineElement, ArcElement } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, PointElement, LineElement, ArcElement)

const MyPreset = definePreset(Aura, {
    semantic: {
        primary: {
            50:  '#e6f7f3',
            100: '#c2efe2',
            200: '#85dfc6',
            300: '#42cfa5',
            400: '#26c299',
            500: '#009872', // base color
            600: '#007a5c',
            700: '#006549',
            800: '#004d37',
            900: '#003326',
            950: '#001a13'
        },
        colorScheme: {
            light: {
                surface: {
                    0:   '#FFFFFF',  // backgroundDefault
                    50:  '#F8F9FA',  // backgroundNeutralLight
                    100: '#F0F2F5',  // backgroundNeutral
                    200: '#D4D9DE',
                    300: '#BFC6CD',
                    400: '#A3ACB6',
                    500: '#87929E',
                    600: '#6B7985',
                    700: '#4F5F6C',
                    800: '#344653',
                    900: '#2A3640',
                    950: '#20303C'
                }
            }
        }
    }
});

const pinia = createPinia()
const app = createApp(App)

app.use(PrimeVue, {
    theme: {
        preset: MyPreset,
        options: {
            darkModeSelector: '.dark',
        }
    }
})
app.use(router)
app.use(pinia)

app.mount('#app')
