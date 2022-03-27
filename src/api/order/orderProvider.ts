import axios from 'axios'
import authUtil from '@/utils/auth.util'
import { OrderInterface, OrdersCreateInterface } from '@/interfaces/order.interface'
// const apiURL = 'http://localhost:3000/api/orders/'
const apiURL = `${process.env.VUE_APP_API_BASE_URL}/api/orders/`

class OrderProvider {

  async createOrder(payload: OrdersCreateInterface): Promise<OrderInterface> {
    return axios.post(apiURL + 'create', payload, {
      headers: {
        ...authUtil.getAuthToken()
      }
    }).then(res => {
      return res.data
    })
  }

  async checkoutOrder(payload: OrderInterface): Promise<OrderInterface> {
    return axios.patch(apiURL + 'checkout', payload, {
      headers: {
        ...authUtil.getAuthToken()
      }
    }).then(res => {
      return res.data
    })
  }

  async getOrderByUser(): Promise<OrderInterface> {
    return axios.get(apiURL + 'get-order', {
      headers: {
        ...authUtil.getAuthToken()
      }
    }).then(res => {
      return res.data
    })
  }
}

export default OrderProvider