import { ActionContext } from "vuex"

import { OrderService } from '../../api'

const state = {
  orders: {}
}
const actions = {
  async createOrder(store: ActionContext<typeof state, any>, params: string): Promise<void> {
    console.log('createOrder-module')
    await OrderService.createOrder(params)
  },
  async checkoutOrder(store: ActionContext<typeof state, any>, params: string): Promise<void> {
    console.log('createOrder-module')
    await OrderService.checkoutOrder(params)
  },

}
const mutations = {
  SET_ORDERS(state: any, data: any): void {
    state.orders = data
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}