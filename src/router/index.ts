import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home/Home.vue')
  },
  {
    path: '/products/:name',
    name: 'products-detail',
    component: () => import('../views/ProductDetail/Detail.vue'),
    props: true
  },
  {
    path: '/cart',
    name: 'cart-detail',
    component: () => import('../views/Cart/Detail.vue'),
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('../views/Cart/Checkout.vue'),
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
