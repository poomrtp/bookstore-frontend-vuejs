import { ActionContext } from "vuex"

import { OrderService } from '../../api'
import { OrderInterface, OrdersCreateInterface } from "@/interfaces/order.interface"

const state = {
  orders: {},
  order: {}
}
const actions = {
  async createOrder(store: ActionContext<typeof state, any>, params: OrdersCreateInterface): Promise<void> {
    await OrderService.createOrder(params)
  },
  async checkoutOrder(store: ActionContext<typeof state, any>, params: OrderInterface): Promise<void> {
    await OrderService.checkoutOrder(params)
  },
  async fetchOrderByUser (store: ActionContext<typeof state, any>): Promise<void> {
    const result = await OrderService.getOrderByUser()
    store.commit('SET_ORDER', result)
  },
}
const mutations = {
  SET_ORDERS(state: any, data: any): void {
    state.orders = data
  },
  SET_ORDER(state: any, data: any): void {
    state.order = data
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}