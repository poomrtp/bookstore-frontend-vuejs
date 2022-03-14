<template>
  <div class="max-w-5xl mx-auto">
    Payment
    <div class="bg-blue-300 p-2" @click="onSubmitCheckout">CONFIRM</div>
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
    // ...mapState('Product', ['product']),
    ...mapState('Cart', ['cart', 'finalCart']),
  },
  methods: {
    ...mapActions({
      addToCart: 'Cart/addToCart',
      fetchCart: 'Cart/fetchCart',
      fetchFinalCart: 'Cart/fetchFinalCart',
      editCart: 'Cart/editCart',
      removeItem: 'Cart/removeItem',
      createOrder: 'Order/createOrder',
      checkoutOrder: 'Order/checkoutOrder'
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
  readonly checkoutOrder!: any

  private ebookItems: any = []
  private nonEbookItems: any = []

  async created(): Promise<void> {
    await this.fetchCart()
    await this.fetchFinalCart()
    this.splitEbookData()
  }

  splitEbookData(): void {
    this.ebookItems = this.finalCart.orders.filter((seller: any) => seller.seller === 'e-book')
    this.nonEbookItems = this.finalCart.orders.filter((seller: any) => seller.seller !== 'e-book')
  }

  async onSubmitCheckout(): Promise<void> {
    await this.checkoutOrder(this.finalCart)
  }


}
</script>

<style></style>