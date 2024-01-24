import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', name: 'Welcome', component: () => import('../components/WelcomePage.vue') },
    { path: '/heros', name: 'Hero', component: () => import('../components/DcHeros.vue') },
    { path: '/calendar', name: 'Calendar', component: () => import('../components/MyCalendar.vue') },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
