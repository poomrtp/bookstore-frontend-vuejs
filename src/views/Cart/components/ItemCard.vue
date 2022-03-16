<template>
  <div class="bg-gray-50 border border-gray-300 rounded-lg w-full min-h-96 p-2">
    <div class="flex justify-between">
      <div>
        {{ productItem.seller }}
      </div>
      <div
        v-if="productItem.seller === 'e-book'"
        class="bg-green-400">
        {{ productItem.seller }}
      </div>
    </div>
    <div class="w-full p-2" v-for="item in productItem.items" :key="item">
      <div class="flex justify-center w-fit bg-white p-2">
        <div class="flex-none justify-start items-center w-fit max-w-fit overflow-hidden">
          <img :src="item?.images[0]" alt="" class="flex items-start h-32 w-auto">
        </div>
        <div class="w-full flex items-start">
          {{ item.name }}
        </div>
        <div class="flex items-center w-1/6">
          <select 
            v-model="item.quantity" 
            :disabled="productItem.seller === 'e-book' || false" 
            class="w-14 h-9 border" 
            @change="onSelectQuantity(item, item.quantity)">
            <option v-for="value in maxQuantity" :key="value">
              {{ value }}
            </option>
          </select>
        </div>
        <div class="w-1/6 flex justify-center items-center">
          {{ item.totalPrice }}
        </div>
        <div class="w-1/6 flex justify-center items-center"
          @click="onRemoveItem(item)">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 
              4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 
              0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" 
              clip-rule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
    <div class="flex p-2">
      <div class="flex justify-start w-full">
        <textarea placeholder="ข้อความถึงผู้ขาย" v-model="productItem.description"></textarea>
      </div>
      <div class="flex justify-end w-full">
        shipment - standart
      </div>
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
  emits: [
    'onSelectQuantity',
    'onRemoveItem'
  ],
  computed: {

  },
  methods: {
    
  }
})

export default class ItemCard extends Vue {
  readonly fetchCart!: any
  readonly productItem!: any

  private maxQuantity = 10
  // async created(): Promise<void> {
  //   await this.fetchCart()
  // }
  onSelectQuantity(item: any, value: number): void {
    const data = {
      ...item,
      quantity: +value
    }
    console.log('cart-cartitem', data)
    this.$emit('onSelectQuantity', data)
  }

  onRemoveItem(item: any): void {
    this.$emit('onRemoveItem', item)
  }

}
</script>