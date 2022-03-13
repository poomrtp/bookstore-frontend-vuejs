<template>
  <div class="max-w-5xl mx-auto">
    Your Cart
    <div
      v-for="order in finalCart.orders"
      :key="order"
      class="w-full">
      <item-card :productItem="order">
      </item-card>
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
    // ...mapState('Product', ['product']),
    ...mapState('Cart', ['cart', 'finalCart']),
  },
  methods: {
    ...mapActions({
      addToCart: 'Cart/addToCart',
      fetchCart: 'Cart/fetchCart',
      fetchFinalCart: 'Cart/fetchFinalCart'
    })
    
  }
})
export default class CartDetail extends Vue {
  readonly fetchCart!: any
  readonly fetchFinalCart!: any


  async created(): Promise<void> {
    await this.fetchCart()
    await this.fetchFinalCart()
  }


  // async fetchCart(): Promise<void> {
  //   await this.fetchCart()
  // }
}
</script>

<style></style>