import axios from 'axios'
import { BookInterface } from "@/interfaces/book.interface"
// const apiURL = 'http://localhost:3000/api/products/'
const apiURL = `${process.env.VUE_APP_API_BASE_URL}/api/products/`

class ProductProvider {
  async fetchProducts(query: string) : Promise<BookInterface[]> {
    return axios.get(apiURL, { params: { search: query } }).then(res => {
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