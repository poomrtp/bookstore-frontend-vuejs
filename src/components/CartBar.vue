<template>
  <div class="flex items-end justify-end">
    <div 
      class="z-20
        top-0 fixed
        h-screen w-9/12 sm:w-80 
        bg-white 
        overflow-y-auto
        "
      :class="isActive ? 'right-0 duration-300 ease-out' : '-right-96 duration-300 ease-out'">
      <nav v-if="cart?.cartItems" class="py-2">
        <div class="flex justify-center gap-4 pb-4 w-full">
          <router-link to="/cart">
            <button class="border border-gray-500 p-2 rounded-full">สั่งซื้อสินค้า</button>
          </router-link>
        </div>
        <div class="relative">
          <form action="" class="text-gray-500 focus-within:text-cyan-400 focus-within:bg-white focus-within:shadow rounded search transition duration-300">
            <div class="relative w-full">
              <input type="search" placeholder="Rechercher" name="search" id="search" class="text-sm text-gray-500 placeholder-gray-500 w-full rounded py-3 pr-4 pl-12 bg-gray-200 bg-opacity-75 outline-none focus:bg-transparent focus:rounded-3xl transition-all" />
            </div>
          </form>
        </div>

        <div class="mt-4 relative overflow-y-auto overflow-x-hidden">
          <span class="uppercase px-4 text-gray-500">Docs</span>
          <ul v-for="(item) in cart?.cartItems" :key="item" class="space-y-4 mb-12  mt-8">
            <li>
              <div>
                <cart-item 
                  :cart="item"
                  @onSelectQuantity="onSelectQuantity"
                  @onRemoveItem="onRemoveItem">
                </cart-item>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <div v-else>
        ไม่มีข้อมูล
      </div>
    </div>
    <div
      class="z-10 fixed top-0 w-full h-screen bg-gray-900 bg-opacity-30 duration-700"
      :class="isActive ? '' : 'hidden'"
      @click="onBlur">
    </div>
  </div>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { mapState, mapMutations, mapActions } from 'vuex'
import CartItem from './CartItem.vue'

@Options({
  components: {
    CartItem
  },
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    // cart: {

    // }
  },
  emits: [
    'onActiveCartbar'
  ],
  computed: {
    ...mapState('Cart', ['cart']),
    ...mapMutations(['Cart/SET_CART']) 
  },
  methods: {
    ...mapActions({
      fetchCart: 'Cart/fetchCart',
      addToCart: 'Cart/addToCart',
      editCart: 'Cart/editCart',
      removeItem: 'Cart/removeItem'
    })
  }
})
export default class Detail extends Vue {
  readonly isActive!: boolean
  readonly fetchCart!: any
  readonly editCart!: any
  readonly removeItem!: any
  // async created(): Promise<void> {

  // }
  onBlur():void {
    this.$emit('onActiveCartbar', false)
  }
  
  async onSelectQuantity(payload: any): Promise<void> {
    console.log('onSelectQuantity', payload)
    await this.editCart(payload)
    await this.fetchCart()
  }

  async onRemoveItem(payload: any): Promise<void> {
    console.log('onRemoveItem', payload)
    await this.removeItem(payload)
    await this.fetchCart()
  }
}
</script>
<style>

</style>