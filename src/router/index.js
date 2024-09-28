import { createRouter, createWebHistory } from 'vue-router';
import Home_Page from '@/components/Home_Page.vue';

const routes = [
    {
        path: '/',
        name: 'Home_Page',
        component: Home_Page
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  });

export default router;