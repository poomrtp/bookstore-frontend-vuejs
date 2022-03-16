import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: {
      layout: 'Menubar.vue',
    },
    component: () => import('../views/Home/Home.vue')
  },
  {
    path: '/products/:name',
    name: 'products-detail',
    meta: {
      layout: 'Menubar.vue',
    },
    component: () => import('../views/ProductDetail/Detail.vue'),
    props: true
  },
  {
    path: '/cart',
    name: 'cart-detail',
    meta: {
      layout: 'Menubar.vue',
    },
    component: () => import('../views/Cart/Detail.vue'),
  },
  {
    path: '/checkout',
    name: 'checkout',
    meta: {
      layout: 'Menubar.vue',
    },
    component: () => import('../views/Cart/Checkout.vue'),
  },
  {
    path: '/account',
    name: 'account',
    
    component: () => import('../views/Account/Login.vue'),
  },
  {
    path: '/account/register',
    name: 'register',
    component: () => import('../views/Account/Register.vue'),
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
