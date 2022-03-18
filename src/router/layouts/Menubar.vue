
<template>
  <navbar
    :isAuthentication="isAuthentication"
    :accountItems="accountItems"
    @onActiveCartbar="onActiveCartbar">
  </navbar>
  <side-cart-menu
    :isActive="isActive"
    @onActiveCartbar="onActiveCartbar">
  </side-cart-menu>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { mapState, mapActions } from 'vuex'
import Navbar from './components/Navbar.vue'
import SideCartMenu from './components/SideCartMenu.vue'

@Options({
  components: {
    Navbar,
    SideCartMenu
  },
  props: {
    message: String,
    accountItems: {
      type: Array,
      default: []
    }
  },
  computed: {
    ...mapState('Cart', ['cart']),
    ...mapState('User', ['isAuthentication']),
  },
  methods: {
    ...mapActions({
      fetchCart: 'Cart/fetchCart',
      addToCart: 'Cart/addToCart',
      editCart: 'Cart/editCart',
      removeItem: 'Cart/removeItem',
      fetchFinalCart: 'Cart/fetchFinalCart',
    })
  }
})
export default class Menubar extends Vue {

  readonly fetchCart!: any
  readonly editCart!: any
  readonly removeItem!: any
  readonly fetchFinalCart!: any
  readonly message!: string

  private isActive = false
  private showAccountDropdown = false

  activateAccountDropdown() : boolean {
    return this.showAccountDropdown = !this.showAccountDropdown
  }

  onActiveCartbar(status: boolean): void {
    this.isActive = status
  }

  async onSelectQuantity(payload: any): Promise<void> {
    console.log('onSelectQuantity', payload)
    await this.editCart(payload)
    await this.fetchCart()
    await this.fetchFinalCart()
  }

  async onRemoveItem(payload: any): Promise<void> {
    console.log('onRemoveItem', payload)
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
