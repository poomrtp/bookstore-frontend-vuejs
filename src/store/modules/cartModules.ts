import { ActionContext } from "vuex"

import { CartService } from '../../api'

const state = {
  cart: {},
  finalCart: {}
}
const actions = {
  async fetchCart (store: ActionContext<typeof state, any>, params: string): Promise<void> {
    const result = await CartService.fetchCart()
    store.commit('SET_CART', result)
  },
  async fetchFinalCart (store: ActionContext<typeof state, any>, params: string): Promise<void> {
    const result = await CartService.fetchFinalCart()
    store.commit('SET_FINAL_CART', result)
  },
  async addToCart(store: ActionContext<typeof state, any>, params: string): Promise<void> {
    await CartService.addToCart(params)
  },
  async editCart(store: ActionContext<typeof state, any>, params: string): Promise<void> {
    await CartService.editCart(params)
  },
  async removeItem(store: ActionContext<typeof state, any>, params: string): Promise<void> {
    console.log('removeItem-module')
    await CartService.removeItem(params)
  },
  async createOrder(store: ActionContext<typeof state, any>, params: string): Promise<void> {
    console.log('createOrder-module')
    await CartService.createOrder(params)
  },

}
const mutations = {
  SET_CART(state: any, data: any): void {
    state.cart = data
  },
  SET_FINAL_CART(state: any, data: any): void {
    state.finalCart = data
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}