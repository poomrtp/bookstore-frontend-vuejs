import ProductProvider from './product/productProvider'
import CartProvider from './cart/cartProvider'
import OrderProvider from './order/orderProvider'

export const ProductService = new ProductProvider()
export const CartService = new CartProvider()
export const OrderService = new OrderProvider()