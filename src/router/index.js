import { createRouter, createWebHistory } from 'vue-router';
import Home_Page from '@/components/Home_Page.vue';
import Details_Product from '@/components/Details_Product.vue';

const routes = [
    {
        path: '/',
        name: 'Home_Page',
        component: Home_Page
    },
    {
        path: '/details',
        name: 'Details_Product',
        component: Details_Product
    },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  });

export default router;