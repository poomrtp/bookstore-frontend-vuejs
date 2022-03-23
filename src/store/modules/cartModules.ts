import { ActionContext } from "vuex"

import { CartService } from '../../api'
import { CartInterface, CartItem, CartItemBySeller, FinalCartInterface } from "@/interfaces/cart.interface"
import { BookInterface } from "@/interfaces/book.interface"

const state = {
  cart: {},
  finalCart: {},
  ebookItems: {},
  bookItems: {}
}
const actions = {
  async fetchCart (store: ActionContext<typeof state, any>): Promise<void> {
    const result = await CartService.fetchCart() || {}
    console.log('cart', result)
    store.commit('SET_CART', result)
  },
  async fetchFinalCart (store: ActionContext<typeof state, any>): Promise<void> {
    const result = await CartService.fetchFinalCart()
    const ebookItems = result.orders.filter((seller: CartItemBySeller) => seller.seller === 'e-book')
    const bookItems = result.orders.filter((seller: CartItemBySeller) => seller.seller !== 'e-book')
    store.commit('SET_FINAL_CART', result)
    store.commit('SET_BOOK_ITEMS', bookItems)
    store.commit('SET_EBOOK_ITEMS', ebookItems)
  },
  async addToCart(store: ActionContext<typeof state, any>, params: BookInterface): Promise<void> {
    await CartService.addToCart(params)
  },
  async editCart(store: ActionContext<typeof state, any>, params: CartItem): Promise<void> {
    await CartService.editCart(params)
  },
  async removeItem(store: ActionContext<typeof state, any>, params: CartItem): Promise<void> {
    await CartService.removeItem(params)
  },
  // async createOrder(store: ActionContext<typeof state, any>, params: string): Promise<void> {
  //   console.log('createOrder-module')
  //   await CartService.createOrder(params)
  // },

}
const mutations = {
  SET_CART(state: any, data: CartInterface): void {
    state.cart = data
  },
  SET_FINAL_CART(state: any, data: FinalCartInterface): void {
    state.finalCart = data
  },
  SET_BOOK_ITEMS(state: any, data: CartItemBySeller): void {
    state.bookItems = data
  },
  SET_EBOOK_ITEMS(state: any, data: CartItemBySeller): void {
    state.ebookItems = data
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}