import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/auth/Register.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/auth/Login.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/product/:id/',
      name: 'product',
      component: () => import('./views/Product.vue')
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('./views/Cart.vue')
    },
    {
      path: '/checkout',
      name: 'checkout',
      component: () => import('./views/Checkout.vue')
    },
    {
      path: '/payment',
      name: 'payment',
      component: () => import('./views/Payment.vue')
    },
    {
      path: '/confirm',
      name: 'confirm',
      component: () => import('./views/Confirm.vue')
    },
    {
      path: '/orders',
      name: 'orders',
      component: () => import('./views/Orders.vue')
    },
    {
      path: '/reserve',
      name: 'reserves',
      component: () => import('./views/Reserves.vue')
    },
  ]
})
