import ProductProvider from './product/productProvider'
import CartProvider from './cart/cartProvider'
import OrderProvider from './order/orderProvider'
import UserProvider from './user/userProvider'

export const ProductService = new ProductProvider()
export const CartService = new CartProvider()
export const OrderService = new OrderProvider()
export const UserService = new UserProvider()