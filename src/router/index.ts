import { createRouter, createWebHashHistory } from 'vue-router'
import Documentation from '../views/Documentation.vue'
import Client from '../views/Client.vue'
import Business from '../views/Business.vue'

const routes = [
    {
        path: '/',
        name: 'Client',
        component: Client
    },
    {
        path: '/client',
        name: 'Client2',
        component: Client
    },
    {
        path: '/business',
        name: 'Business',
        component: Business
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
