import { createRouter, createWebHistory } from 'vue-router';
import Home_Page from '@/components/client/Home_Page.vue';
import Details_Product from '@/components/client/Details_Product.vue';
import Login from '@/components/auth/Login.vue';
import Register from '@/components/auth/Register.vue';
import Shopping_cart from '@/components/client/Shopping_cart.vue';
import Book_History from '@/components/client/Book_History.vue';
import Order from '@/components/client/Order.vue';
import Info from '@/components/client/Info.vue';

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
        path: '/shopping_cart',
        name: 'Shopping_cart',
        component: Shopping_cart
    },
    {
        path: '/Book_history',
        name: 'Book_History',
        component: Book_History
    },
    {
        path: '/order',
        name: 'Order',
        component: Order
    },
    {
        path: '/info',
        name: 'Info',
        component: Info
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  });

export default router;