import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import auth from '@/middleware/auth'
import authUtil from '@/utils/auth.util'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    meta: {
      layout: 'Menubar',
      middleware: auth,
    },
    component: () => import('../views/Home/Home.vue')
  },
  {
    path: '/products/:name',
    name: 'products-detail',
    meta: {
      layout: 'Menubar',
      middleware: auth,
    },
    component: () => import('../views/ProductDetail/Detail.vue'),
    props: true
  },
  {
    path: '/cart',
    name: 'cart-detail',
    meta: {
      layout: 'Menubar',
      middleware: auth,
    },
    component: () => import('../views/Cart/Detail.vue'),
  },
  {
    path: '/checkout',
    name: 'checkout',
    meta: {
      layout: 'Menubar',
      middleware: auth,
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
    path: '/logout',
    name: 'logout',
    component: () => import('../views/Account/Logout.vue'),
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

const publicRoute = [
  'home',
  'products-detail',
  'account',
  'register',
  'logout'
]
router.beforeEach((to, from, next) => {
  const routeName = to.name
  if (publicRoute.some((pr) => pr === routeName)) {
    next()
  } else if (!authUtil.getAuth()) {
    next({ name: 'account' })
  } else {
    next()
  }
})

export default router
