<template>
  <div class="w-full">
    <carousel-image :images="imagesCarousel"></carousel-image>
  </div>
  <div class="grid grid-cols-7">
    <div class="col-span-7 lg:col-span-5">
      <div class="grid grid-cols-1">
        <product-list :products="products" @clickDetail="onClickDetail($event)"></product-list>
      </div>
    </div>
    <div class="col-span-2 h-fit invisible lg:visible">
      <div class="flex justify-end">
        <account-detail :user="user" :isAuthentication="isAuthentication"></account-detail>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { mapState, mapActions } from 'vuex'
import ProductList from './components/ProductList.vue'
import AccountDetail from './components/AccountDetail.vue'
import CarouselImage from './components/CarouselImage.vue'
import { BookInterface } from "@/interfaces/book.interface"

@Options({
  components: {
    CarouselImage,
    ProductList,
    AccountDetail
  },
  // data() {
  //   return {
  //     search: this.$route.query.search || ''
  //   }
  // },
  computed: {
    ...mapState('Product', ['products']),
    ...mapState('Cart', ['cart']),
    ...mapState('User', ['user','isAuthentication']),
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
  readonly fetchCart!: any
  readonly products!: BookInterface[]

  private imagesCarousel = [
      'https://cdn3.mangaqube.com/UEgMLT0xGqch7cc4',
      'https://cdn3.mangaqube.com/rW2WtNcWHOgh67ed',
      'https://cdn3.mangaqube.com/IS3IVya5LyU9bcQq',
      'https://cdn3.mangaqube.com/kbZ7nGUXifH1Yy23',
      'https://cdn3.mangaqube.com/IS3IVya5LyU9bcQq',
      'https://cdn3.mangaqube.com/kbZ7nGUXifH1Yy23'
  ]

  async created(): Promise<void> {
    const search = this.$route.query.search || ''
    await this.fetchProducts(search)
    await this.fetchCart()
  }

  fetchData(): void {
    console.log('this.$route.query.search')
  }

  onClickDetail (name: string): void {
    const params = {
      name
    }
    this.$router.push({
      name: 'products-detail',
      params
    })
  }
}
</script>