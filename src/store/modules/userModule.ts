import { ActionContext } from "vuex"

import { UserService } from '../../api'
import auth from "@/utils/auth.util"
import { AccountInterface, LoginInterface, RegisterInterface } from "@/interfaces/account.interface"

const state = {
  user: {
    username: '',
    email: '',
    fullname: ''
  },
  isAuthentication: false
}
const actions = {
  async createAccount(store: ActionContext<typeof state, any>, params: RegisterInterface): Promise<void> {
    await UserService.createAccount(params)
  },
  async login(store: ActionContext<typeof state, any>, params: LoginInterface): Promise<void> {
    const token = await UserService.login(params)
    auth.setAuthUser(token)
    if (token) {
      store.commit('SET_IS_AUTH', true)
    }
  },
  async logout(store: ActionContext<typeof state, any>): Promise<void> {
    await UserService.logout()
    auth.clearAuth()
    store.commit('SET_IS_AUTH', false)
    store.commit('SET_USER', {})
  },
  async getUser(store: ActionContext<typeof state, any>): Promise<void> {
    const result = await UserService.getUser()
    store.commit('SET_USER', result)
    store.commit('SET_IS_AUTH', true)
  }
}
const mutations = {
  SET_USER(state: any, data: AccountInterface): void {
    state.user = data
  },
  SET_IS_AUTH(state: any, data: boolean): void {
    state.isAuthentication = data
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}