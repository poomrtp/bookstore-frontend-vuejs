import { ActionContext } from "vuex"

import { CartService } from '../../api'

const state = {
  cart: {}
}
const actions = {
  async fetchCart (store: ActionContext<typeof state, any>, params: string): Promise<void> {
    const result = await CartService.fetchCart()
    store.commit('SET_CART', result)
  },
  async addToCart(store: ActionContext<typeof state, any>, params: string): Promise<void> {
    await CartService.addToCart(params)
  }

}
const mutations = {
  SET_CART(state: any, data: any): void {
    state.cart = data
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}