<template>
  <div class="flex justify-center w-fit bg-white p-2">
    <div class="flex-none justify-start items-center w-fit max-w-fit overflow-hidden">
      <img :src="productItem?.images[0]" alt="" class="flex items-start h-32 w-auto">
    </div>
    <div class="w-full flex items-start">
      {{ productItem.name }}
    </div>
    <div class="flex items-center">
      <select 
        v-model="productItem.quantity" 
        :disabled="productItem.seller === 'e-book' || false" 
        class="w-14 h-9 border" 
        @change="onSelectQuantity(productItem.quantity)">
        <option v-for="value in maxQuantity" :key="value">
          {{ value }}
        </option>
      </select>
    </div>
    <div class="w-1/6 flex justify-center items-center"
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
    productItem: {
      type: Object,
      default: () => null
    }
  },
  computed: {

  },
  methods: {
    
  }
})

export default class ItemDetail extends Vue {
  readonly fetchCart!: any
  readonly productItem!: any

  private maxQuantity = 10

  // async created(): Promise<void> {
  //   await this.fetchCart()
  // }
  onSelectQuantity(value: number): void {
    const data = {
      ...this.productItem,
      quantity: +this.productItem.quantity
    }
    // console.log('cart-cartitem', data)
    this.$emit('onSelectQuantity', data)
  }

  onRemoveItem(): void {
    // console.log('cart-cartitem', data)
    this.$emit('onRemoveItem', this.productItem)
  }

}
</script>