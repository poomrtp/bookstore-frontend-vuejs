import axios from 'axios'
const apiURL = 'http://localhost:3000/api/products/'

class ProductProvider {
  fetchProducts() : any {
    return axios.get(apiURL).then(res => {
      return res.data
    })
  }

  fetchProductsByName(name: string) : any {
    return axios.get(apiURL + name).then(res => {
      return res.data
    })
  }
}

export default ProductProvider