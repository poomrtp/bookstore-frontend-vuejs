import axios from 'axios'
const apiURL = 'http://localhost:3000/api/carts/'

class CartProvider {
  fetchCart(): any {
    return axios.get(apiURL, {
      headers: {
        Authorization: 'poom'
      }
    }).then(res => {
      return res.data
    })
  }

  addToCart(payload: any): any {
    return axios.post(apiURL + 'add-to-cart', payload, {
      headers: {
        Authorization: 'poom'
      }
    }).then(res => {
      return res.data
    })
  }

  editCart(payload: any): any {
    return axios.patch(apiURL + 'edit', payload, {
      headers: {
        Authorization: 'poom'
      }
    }).then(res => {
      return res.data
    })
  }

  removeItem(payload: any): any {
    return axios.patch(apiURL + 'remove', payload, {
      headers: {
        Authorization: 'poom'
      }
    }).then(res => {
      return res.data
    })
  }
}

export default CartProvider