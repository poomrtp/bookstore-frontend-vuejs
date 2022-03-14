import { createStore } from 'vuex'

import Product from './modules/productModule'
import Cart from './modules/cartModules'
import Order from './modules/orderModules'

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
    Order
  }
})

export default store
