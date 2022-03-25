<template>
  <div class="flex justify-center border h-fit mx-0 p-2">
    <div class="flex-none items-center w-fit my-auto">
      <img :src="cart?.images[0]" alt="" class="h-24 w-auto" >
    </div>
    <div class="w-full flex items-start ml-1">
      {{ cart.name }}
    </div>
    <div class="flex items-center">
      <select 
        v-model="cart.quantity" 
        :disabled="cart.type?.name === 'e-book' || false" 
        class="w-14 h-9 border" 
        @change="onSelectQuantity(cart.quantity)">
        <option v-for="value in maxQuantity" :key="value">
          {{ value }}
        </option>
      </select>
    </div>
    <div class="w-2/6 flex justify-center items-center"
      @click="onRemoveItem">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 
          4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 
          0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" 
          clip-rule="evenodd" />
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  components: {
  },
  props: {
    isActive: {
      type: Boolean,
      default: false
    },
    cart: {
      type: Object,
      default: () => null
    }
  },
  emits: [
    'onSelectQuantity',
    'onRemoveItem'
  ],
  computed: {

  }
})
export default class CartItem extends Vue {
  readonly isActive!: boolean
  readonly cart!: any
  private quantitySelected = 1
  private maxQuantity = 10
  private quantitySelect = 0
  private showQuantityList = false
  // async created(): Promise<void> {

  // }

  onSelectQuantity(value: number): void {
    const data = {
      ...this.cart,
      quantity: +this.cart.quantity
    }
    this.$emit('onSelectQuantity', data)
  }

  onRemoveItem(): void {
    this.$emit('onRemoveItem', this.cart)
  }
}
</script>