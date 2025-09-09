import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Documentation from '../views/Documentation.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/documentation',
        name: 'Documentation',
        component: Documentation
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
