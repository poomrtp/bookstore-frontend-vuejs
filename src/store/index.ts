import { createStore } from 'vuex'

import Product from './modules/productModule'
import Cart from './modules/cartModules'

const store = createStore({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Product,
    Cart
  }
})

export default store
