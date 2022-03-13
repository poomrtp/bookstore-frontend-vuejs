<template>
  <div class="bg-gray-50 border border-gray-300 rounded-lg w-full min-h-96 p-2">
    <div class="flex justify-between">
      <div>
        {{ productItem.seller }}
      </div>
        <!-- v-if="productItem.type.name === 'e-book'" -->
      <div
        class="bg-green-400">
        {{ productItem.seller }}
      </div>
    </div>
    <div class="w-full p-2" v-for="item in productItem.items" :key="item">
      <item-detail :productItem="item"></item-detail>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import ItemDetail from './ItemDetail.vue'

@Options({
  components: { 
    ItemDetail
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

export default class ItemCard extends Vue {
  readonly fetchCart!: any
  readonly productItem!: any

  private maxQuantity = 10

  // async created(): Promise<void> {
  //   await this.fetchCart()
  // }
  onSelectQuantity(value: number): void {
    // const data = {
    //   ...this.productItem,
    //   quantity: +this.productItem.quantity
    // }
    // // console.log('cart-cartitem', data)
    // this.$emit('onSelectQuantity', data)
  }

  onRemoveItem(): void {
    // console.log('cart-cartitem', data)
    // this.$emit('onRemoveItem', this.productItem)
  }

}
</script>