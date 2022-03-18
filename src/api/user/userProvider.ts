import axios from 'axios'
const apiURL = 'http://localhost:3000/api/user/'

class UserProvider {

  createAccount(payload: any): any {
    return axios.post(apiURL + 'create', payload,).then(res => {
      return res.data
    })
  }

  login(payload: any): any {
    return axios.post(apiURL + 'login', payload,).then(res => {
      return res.data
    })
  }

  logout(): any {
    return axios.post(apiURL + 'logout').then(res => {
      return res.data
    })
  }

  getUser(payload: any): any {
    return axios.post(apiURL + 'getuser', payload).then(res => {
      return res.data
    })
  }
}

export default UserProvider