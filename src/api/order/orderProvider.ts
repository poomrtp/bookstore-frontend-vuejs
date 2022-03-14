import axios from 'axios'
const apiURL = 'http://localhost:3000/api/orders/'

class OrderProvider {

  createOrder(payload: any): any {
    return axios.post(apiURL + 'create', payload, {
      headers: {
        Authorization: 'poom'
      }
    }).then(res => {
      return res.data
    })
  }

  checkoutOrder(payload: any): any {
    return axios.patch(apiURL + 'checkout', payload, {
      headers: {
        Authorization: 'poom'
      }
    }).then(res => {
      return res.data
    })
  }
}

export default OrderProvider