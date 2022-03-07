<template>
  <div class="grid grid-cols-7">
    <div class="col-span-5">
      <div class="grid grid-cols-1">
        <product-list :products="products" @clickDetail="onClickDetail($event)"></product-list>
      </div>
    </div>
    <div class="col-span-2 h-fit invisible md:visible">
      <div class="flex justify-end">
        <account-detail></account-detail>
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
  },
  methods: {
    ...mapActions({
      fetchProducts: 'Product/fetchProducts'
    })
  }
})
export default class Home extends Vue {
  readonly fetchProducts!: any
  readonly products!: any

  async created(): Promise<void> {
    await this.fetchProducts()
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