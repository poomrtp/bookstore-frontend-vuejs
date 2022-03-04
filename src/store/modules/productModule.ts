import { ActionContext } from "vuex"

import { ProductService } from '../../api'

const state = {
  products: [
  ],
  product: {}
}
const actions = {
  async fetchProducts ( store: ActionContext<typeof state, any>, params: string): Promise<void> {
    const result = await ProductService.fetchProducts()
    console.log('fetchProducts', result)
    store.commit('SET_PRODUCTS', result)
  },
  async fetchProductsByName ( store: ActionContext<typeof state, any>, params: string): Promise<void> {
    const result = await ProductService.fetchProductsByName(params)
    console.log('fetchProductsByName', result)
    store.commit('SET_PRODUCT', result)
  },
}
const mutations = {
  SET_PRODUCTS (state: any, data: Array<any>): void {
    state.products = data
  },
  SET_PRODUCT (state: any, data: any): void {
    state.product = data
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}