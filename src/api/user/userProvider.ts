import axios from 'axios'
import authUtil from '@/utils/auth.util'
import { AccountInterface, MessageResponse, RegisterInterface, LoginInterface } from "@/interfaces/account.interface"
const apiURL = 'http://localhost:3000/api/user/'

class UserProvider {

  async createAccount(payload: RegisterInterface): Promise<string> {
    return axios.post(apiURL + 'create', payload).then(res => {
      return res.data
    })
  }

  async login(payload: LoginInterface): Promise<string> {
    return axios.post(apiURL + 'login', payload).then(res => {
      return res.data
    })
  }

  async logout(): Promise<MessageResponse> {
    return axios.post(apiURL + 'logout').then(res => {
      return res.data
    })
  }

  async getUser(): Promise<AccountInterface> {
    return axios.get(apiURL + 'getuser', {
      headers: {
        ...authUtil.getAuthToken()
      }
    }).then(res => {
      return res.data
    })
  }
}

export default UserProvider