<template>
  <navbar
    :isAuthentication="isAuthentication"
    :accountItems="accountItems"
    :cartQuantity="cart !== null ? cart.cartItems?.length : 0"
    @onSearch="onSearch"
    @onActiveCartbar="onActiveCartbar">
  </navbar>
  <side-cart-menu
    :isActive="isActive"
    @onSelectQuantity="onSelectQuantity"
    @onRemoveItem="onRemoveItem"
    @onActiveCartbar="onActiveCartbar">
  </side-cart-menu>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { mapState, mapActions } from 'vuex'
import Navbar from './components/Navbar.vue'
import SideCartMenu from './components/SideCartMenu.vue'
import { CartItem } from '@/interfaces/cart.interface'

@Options({
  components: {
    Navbar,
    SideCartMenu
  },
  props: {
    accountItems: {
      type: Array,
      default: []
    }
  },
  computed: {
    ...mapState('Product', ['products']),
    ...mapState('Cart', ['cart', 'finalCart']),
    ...mapState('User', ['isAuthentication']),
    setCartItemQuantity() {
      return this.cart !== null ? this.cart.cartItems.length : 0
    }
  },
  methods: {
    ...mapActions({
      fetchProducts: 'Product/fetchProducts',
      fetchCart: 'Cart/fetchCart',
      addToCart: 'Cart/addToCart',
      editCart: 'Cart/editCart',
      removeItem: 'Cart/removeItem',
      fetchFinalCart: 'Cart/fetchFinalCart',
    })
  }
})
export default class Menubar extends Vue {

  readonly fetchProducts!: any
  readonly fetchCart!: any
  readonly editCart!: any
  readonly removeItem!: any
  readonly fetchFinalCart!: any

  private isActive = false
  private showAccountDropdown = false

  activateAccountDropdown() : boolean {
    return this.showAccountDropdown = !this.showAccountDropdown
  }

  onActiveCartbar(status: boolean): void {
    this.isActive = status
  }

  async onSearch(searchValue: string): Promise<void> {
    if (this.$route.name === 'home'){
      await this.fetchProducts(searchValue)
    }
    this.$router.replace({ name: 'home', query: { search: searchValue }})
  }

  async onSelectQuantity(payload: CartItem): Promise<void> {
    await this.editCart(payload)
    await this.fetchCart()
    await this.fetchFinalCart()
  }

  async onRemoveItem(payload: CartItem): Promise<void> {
    await this.removeItem(payload)
    await this.fetchCart()
    await this.fetchFinalCart()
  }

}
</script>
<style>
.dropdown:hover .dropdown-menu {
  display: block;
}
</style>
