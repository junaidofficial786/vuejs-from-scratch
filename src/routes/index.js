import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', name: 'welcome', component: () => import('@/Pages/WelcomePage.vue') },
    { path: '/heroes/:id', name: 'hero', component: () => import('@/Pages/DcHeroes.vue') },
    { path: '/calendar', name: 'calendar', component: () => import('@/Pages/MyCalendar.vue') },
    { path: '/mark-down', name: 'markdown', component: () => import('@/Pages/MarkDown.vue') },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
