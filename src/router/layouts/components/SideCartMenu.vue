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
        <div class="mt-4 relative overflow-y-auto overflow-x-hidden">
          <ul v-for="(item) in cart?.cartItems" :key="item" class="space-y-4 mb-12  mt-8">
            <li>
              <div>
                <side-cart-item 
                  :cart="item"
                  @onSelectQuantity="onSelectQuantity"
                  @onRemoveItem="onRemoveItem">
                </side-cart-item>
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
import { mapState, mapActions } from 'vuex'
import SideCartItem from './SideCartItem.vue'
import { CartItem } from '@/interfaces/cart.interface'

@Options({
  components: {
    SideCartItem
  },
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    isAuthentication: {
      type: Boolean,
      default: false
    }
    // cart: {

    // }
  },
  emits: [
    'onActiveCartbar',
    'onSelectQuantity',
    'onRemoveItem'
  ],
  computed: {
    ...mapState('Cart', ['cart']),
  },
  methods: {
    ...mapActions({
      fetchCart: 'Cart/fetchCart',
      editCart: 'Cart/editCart',
      removeItem: 'Cart/removeItem'
    })
  }
})
export default class Cartbar extends Vue {
  readonly isActive!: boolean
  readonly fetchCart!: any
  readonly editCart!: any
  readonly removeItem!: any
  // async created(): Promise<void> {

  // }
  onBlur():void {
    this.$emit('onActiveCartbar', false)
  }
  
  async onSelectQuantity(payload: CartItem): Promise<void> {
    this.$emit('onSelectQuantity', payload)
  }

  async onRemoveItem(payload: CartItem): Promise<void> {
    this.$emit('onRemoveItem', payload)
  }
}
</script>
<style>

</style>