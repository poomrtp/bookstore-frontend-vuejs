import axios from 'axios'
import authUtil from '@/utils/auth.util'
// import dotenv from 'dotenv'
import { CartInterface, CartItem, FinalCartInterface } from '@/interfaces/cart.interface'
import { BookInterface } from "@/interfaces/book.interface"
// const apiURL = 'http://localhost:3000/api/carts/'
const apiURL = `${process.env.VUE_APP_API_BASE_URL}/api/carts/`

class CartProvider {

  fetchCart(): Promise<CartInterface> {
    return axios.get(apiURL, {
      headers: {
        ...authUtil.getAuthToken()
      }
    }).then(res => {
      return res.data
    })
  }

  fetchFinalCart(): Promise<FinalCartInterface> {
    return axios.get(apiURL+ 'getfull', {
      headers: {
        ...authUtil.getAuthToken()
      }
    }).then(res => {
      return res.data
    })
  }

  addToCart(payload: BookInterface): Promise<CartInterface> {
    return axios.post(apiURL + 'add-to-cart', payload, {
      headers: {
        ...authUtil.getAuthToken()
      }
    }).then(res => {
      return res.data
    })
  }

  editCart(payload: CartItem): Promise<CartInterface> {
    return axios.patch(apiURL + 'edit', payload, {
      headers: {
        ...authUtil.getAuthToken()
      }
    }).then(res => {
      return res.data
    })
  }

  removeItem(payload: CartItem): Promise<CartInterface> {
    return axios.patch(apiURL + 'remove', payload, {
      headers: {
        ...authUtil.getAuthToken()
      }
    }).then(res => {
      return res.data
    })
  }

  // createOrder(payload: any): any {
  //   return axios.patch(apiURL + 'checkout', payload, {
  //     headers: {
  //       ...authUtil.getAuthToken()
  //     }
  //   }).then(res => {
  //     return res.data
  //   })
  // }
}

export default CartProvider