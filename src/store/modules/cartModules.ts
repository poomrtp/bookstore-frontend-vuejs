import { ActionContext } from "vuex"

import { CartService } from '../../api'

const state = {
  cart: {},
  finalCart: {},
  ebookItems: {},
  bookItems: {}
}
const actions = {
  async fetchCart (store: ActionContext<typeof state, any>, params: string): Promise<void> {
    const result = await CartService.fetchCart()
    store.commit('SET_CART', result)
  },
  async fetchFinalCart (store: ActionContext<typeof state, any>, params: string): Promise<void> {
    const result = await CartService.fetchFinalCart()
    const ebookItems = result.orders.filter((seller: any) => seller.seller === 'e-book')
    const bookItems = result.orders.filter((seller: any) => seller.seller !== 'e-book')
    store.commit('SET_FINAL_CART', result)
    store.commit('SET_BOOK_ITEMS', bookItems)
    store.commit('SET_EBOOK_ITEMS', ebookItems)
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
  // async createOrder(store: ActionContext<typeof state, any>, params: string): Promise<void> {
  //   console.log('createOrder-module')
  //   await CartService.createOrder(params)
  // },

}
const mutations = {
  SET_CART(state: any, data: any): void {
    state.cart = data
  },
  SET_FINAL_CART(state: any, data: any): void {
    state.finalCart = data
  },
  SET_BOOK_ITEMS(state: any, data: any): void {
    state.bookItems = data
  },
  SET_EBOOK_ITEMS(state: any, data: any): void {
    state.ebookItems = data
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}