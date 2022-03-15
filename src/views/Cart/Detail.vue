<template>
  <div class="max-w-5xl mx-auto">
    <div class="text-4xl font-bolt my-2">Your Cart</div>
    <div
      v-for="order in ebookItems"
      :key="order"
      class="w-full mb-2">
      <item-card
        :productItem="order"
        :messageToSeller="messageToSeller"
        @onSelectQuantity="onSelectQuantity"
        @onRemoveItem="onRemoveItem">
      </item-card>
    </div>
    <div
      v-for="order in nonEbookItems"
      :key="order"
      class="w-full mb-2">
      <item-card
        :productItem="order"
        :messageToSeller="messageToSeller"
        @onSelectQuantity="onSelectQuantity"
        @onRemoveItem="onRemoveItem">
      </item-card>
    </div>
    <div class="flex justify-end">
      <div class="w-80 bg-gray-50 border border-gray-300 rounded-lg min-h-0 p-4 px-8">
        <div  class="w-full flex justify-between">
          <span class="w-3/5">Subtotal 1 ({{ ebookItems[0]?.quantity }} รายการ)</span>
          <span class="min-w-fit">{{ ebookItems[0]?.totalPrice || '-' }} บาท</span>
        </div>
        <div v-for="(order, index) in nonEbookItems" :key="order" class="w-full flex justify-between my-1">
          <span class="w-3/5">Subtotal {{ index+2 }} ({{order.quantity}} รายการ)</span>
          <span class="min-w-fit">{{order.totalPrice}} บาท</span>
        </div>
        <div class="w-full flex justify-between">
          <span class="w-3/5">รวมค่าส่ง</span>
          <span class="min-w-fit">{{ cartClone.totalShipmentPrice || '-' }} บาท</span>
        </div>
        <div class="w-full flex justify-between">
          <span class="w-3/5">รวม</span>
          <div class="min-w-fit"><span class="text-red-500 text-2xl">{{cartClone.totalPrice}}</span><span> บาท</span></div>
        </div>
        <button
          class="w-full p-2 bg-blue-400 bg-opacity-90 text-white rounded-full my-1 mt-2"
          @click="onSubmitOrder">
          Checkout
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { mapState, mapActions } from 'vuex'
import ItemCard from './components/ItemCard.vue'

@Options({
  components: {
    ItemCard
  },
  props: {

  },
  computed: {
    ...mapState('Cart', ['cart', 'finalCart']),
  },
  methods: {
    ...mapActions({
      addToCart: 'Cart/addToCart',
      fetchCart: 'Cart/fetchCart',
      fetchFinalCart: 'Cart/fetchFinalCart',
      editCart: 'Cart/editCart',
      removeItem: 'Cart/removeItem',
      createOrder: 'Order/createOrder'
    })
    
  }
})
export default class CartDetail extends Vue {
  readonly fetchCart!: any
  readonly fetchFinalCart!: any
  readonly finalCart!: any
  readonly editCart!: any
  readonly removeItem!: any
  readonly createOrder!: any

  private ebookItems: any = []
  private nonEbookItems: any = []

  private messageToSeller:any = []

  private cartClone:any = []

  async created(): Promise<void> {
    await this.fetchCart()
    await this.fetchFinalCart()
    this.cartClone = this.finalCart
    this.splitEbookData()
  }

  splitEbookData(): void {
    this.ebookItems = this.cartClone.orders.filter((seller: any) => seller.seller === 'e-book')
    this.nonEbookItems = this.cartClone.orders.filter((seller: any) => seller.seller !== 'e-book')
  }

  async onSubmitOrder(): Promise<void> {
    const payload = {
      orders: [...this.ebookItems, ...this.nonEbookItems],
      ...this.cartClone
    }
    console.log('cartClone', this.cartClone)
    console.log('onSubmitOrder', payload)
    await this.createOrder(payload)
    this.$router.push({ name: 'checkout' })
  }

  addDescriptionToPayload(): void {
    this.messageToSeller = []
  }

  async onSelectQuantity(payload: any): Promise<void> {
    console.log('onSelectQuantity', payload)
    await this.editCart(payload)
    await this.fetchCart()
    await this.fetchFinalCart()
    this.cartClone = this.finalCart
    this.splitEbookData()
  }

  async onRemoveItem(payload: any): Promise<void> {
    console.log('onRemoveItem', payload)
    await this.removeItem(payload)
    await this.fetchCart()
    await this.fetchFinalCart()
    this.cartClone = this.finalCart
    this.splitEbookData()
  }
}
</script>

<style></style>