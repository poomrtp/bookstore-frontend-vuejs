import axios from 'axios'
import { BookInterface } from "@/interfaces/book.interface"
const apiURL = 'http://localhost:3000/api/products/'

class ProductProvider {
  async fetchProducts() : Promise<BookInterface[]> {
    return axios.get(apiURL).then(res => {
      return res.data
    })
  }

  async fetchProductsByName(name: string) : Promise<BookInterface[]> {
    return axios.get(apiURL + name).then(res => {
      return res.data
    })
  }
}

export default ProductProvider