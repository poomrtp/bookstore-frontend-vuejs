<template>
  <div class="grid grid-cols-7">
    <div class="col-span-5">
      <div class="grid grid-cols-1">
        <product-list :products="products" @clickDetail="onClickDetail($event)"></product-list>
      </div>
    </div>
    <div class="col-span-2 h-fit invisible md:visible">
      <div class="flex justify-end">
        <account-detail :user="user"></account-detail>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { mapState, mapActions } from 'vuex'
import ProductList from './components/ProductList.vue'
import AccountDetail from './components/AccountDetail.vue'

@Options({
  components: {
    ProductList,
    AccountDetail
  },
  
  computed: {
    ...mapState('Product', ['products']),
    ...mapState('Cart', ['cart']),
    ...mapState('User', ['user']),
  },
  methods: {
    ...mapActions({
      fetchProducts: 'Product/fetchProducts',
      fetchCart: 'Cart/fetchCart'
    })
  }
})
export default class Home extends Vue {
  readonly fetchProducts!: any
  readonly products!: any
  readonly fetchCart!: any

  async created(): Promise<void> {
    await this.fetchProducts()
    await this.fetchCart()
    console.log('this.products', this.products)
  }

  onClickDetail (name: string): void {
    const params = {
      name
    }
    console.log('onClickDetail', name)
    this.$router.push({
      name: 'products-detail',
      params
    })
  }
}
</script>