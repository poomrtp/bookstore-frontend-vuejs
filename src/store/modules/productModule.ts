import { ActionContext } from "vuex"

import { ProductService } from '../../api'
import { BookInterface } from "@/interfaces/book.interface"

const state = {
  products: [
  ],
  product: {}
}
const actions = {
  async fetchProducts ( store: ActionContext<typeof state, any>, query: string): Promise<void> {
    const result = await ProductService.fetchProducts(query)
    store.commit('SET_PRODUCTS', result)
  },
  async fetchProductsByName(store: ActionContext<typeof state, any>, params: string): Promise<void> {
    const result = await ProductService.fetchProductsByName(params)
    store.commit('SET_PRODUCT', result)
  },
}
const mutations = {
  SET_PRODUCTS (state: any, data: BookInterface[]): void {
    state.products = data
  },
  SET_PRODUCT (state: any, data: BookInterface): void {
    state.product = data
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}