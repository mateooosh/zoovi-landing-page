import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Documentation from '../views/Documentation.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import CompanyDashboard from '../views/CompanyDashboard.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/company-dashboard',
        name: 'Company Dashboard',
        component: CompanyDashboard
    },
    {
        path: '/documentation',
        name: 'Documentation',
        component: Documentation
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
