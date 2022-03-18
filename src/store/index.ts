import { createStore } from 'vuex'

import Product from './modules/productModule'
import Cart from './modules/cartModules'
import Order from './modules/orderModules'
import User from './modules/userModule'

const store = createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Product,
    Cart,
    Order,
    User
  }
})

export default store
