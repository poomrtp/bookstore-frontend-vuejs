<template>
  <div class="max-w-5xl mx-auto px-6 w-full">
    <div class="border-b border-gray ">
      <detail-header :product="product"></detail-header>
    </div>
    <div class="grid grid-cols-2">
      <div class="m-5">
        <image-preview :images="product.images"></image-preview>
      </div>
      <div class="m-5">
        <price-detail
          :product="product"
          :typeSelected="typeSelected"
          @onSelectProductType="onSelectProductType"
          @onSelectQuantity="onSelectQuantity">
        </price-detail>
        <div class="flex justify-between">
          <button
            class="w-full my-1 mr-1 py-2 text-blue-500 border border-blue-500 rounded">
            BUY NOW
          </button>
          <button
            class="w-full my-1 py-2 text-white bg-blue-500 rounded"
            @click="addProductToCart()">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-2 border-b border-gray ">
      <div class="m-4">
        เรื่องย่อ
        <p>{{ product.description || "-"}}</p>
      </div>
      <div class="ml-28 m-4">
        <div class="grid grid-cols-3">
          <div class="col-span-3">
            ข้อมูลหนังสือ
          </div>
          <div class="">
            เรื่อง: 
          </div>
          <div class="col-span-2">
            {{ product.name }}
          </div>
          <div class="">
            ภาพ: 
          </div>
          <div class="col-span-2">
            {{ productAuthor }}
          </div>
          <div class="">
            สำนักพิมพ์: 
          </div>
          <div class="col-span-2">
            {{ product.publisher }}
          </div>
          <div class="">
            Genres: 
          </div>
          <div class="col-span-2">
            {{ prodcutGenres }}
          </div>
          <div class="">
            น้ำหนัก: 
          </div>
          <div class="col-span-2">
            {{ product.weight }} กรัม
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { mapState, mapActions } from 'vuex'
import DetailHeader from './components/DetailHeader.vue'
import ImagePreview from './components/ImagePreview.vue'
import PriceDetail from './components/PriceDetail.vue'
import PreviewImageModal from '@/components/PreviewImageModal.vue'
import { Type, BookInterface } from '@/interfaces/book.interface'
import { CartInterface } from '@/interfaces/cart.interface'

@Options({
  components: {
    DetailHeader,
    ImagePreview,
    PriceDetail,
    PreviewImageModal
  },
  props: {
    name: {
      type: String,
      default: ''
    },
    callBackQuery: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    ...mapState('Product', ['product']),
    ...mapState('Cart', ['cart']),
    productAuthor() {
      return this.product.author ? this.product.author.join(', ') : '-'
    },
    prodcutGenres() {
      return this.product.genres ? this.product.genres.join(', ') : '-'
    }
  },
  methods: {
    ...mapActions({
      fetchProductsByName: 'Product/fetchProductsByName',
      addToCart: 'Cart/addToCart',
      fetchCart: 'Cart/fetchCart',
      fetchFinalCart: 'Cart/fetchFinalCart'
    })
  }
})
export default class Detail extends Vue {
  readonly fetchProductsByName!: any
  readonly fetchCart!: any
  readonly fetchFinalCart!: any
  readonly addToCart!: any
  readonly product!: BookInterface
  readonly name!: string
  readonly cart!: CartInterface
  private isActivePreviewImageModal = false
  private typeSelected: Type = {
    name: '',
    nameTH: '',
    price: 0,
    _id: ''
  }
  private quantitySelected = 1 

  async created(): Promise<void> {
    console.log(this.name)
    await this.fetchProductsByName(this.name)
    await this.fetchCart()
    this.typeSelected = this.product?.types[0]
    console.log('this.typeSelected', this.typeSelected)
    console.log('this.product', this.product)
  }

  onActivePreviewImageModal(): void {
    this.isActivePreviewImageModal = true
  }

  onSelectProductType(type: Type): void {
    this.typeSelected = type
  }

  onSelectQuantity(value: number):void {
    this.quantitySelected = value
  }

  findProductByName(): number {
    console.log('this.typeSelected.name', this.typeSelected.name)
    const result = this.cart.cartItems.findIndex(item => {
      return item.name + '-' + item.type.name === this.product.name + '-' + this.typeSelected.name
    })
    return result
  }

  async addProductToCart(): Promise<void> {
    if (this.typeSelected.name === 'e-book') {
      this.quantitySelected = 1
      if (this.findProductByName() !== -1 ) {
        return
      }
    }
    
    const payload = {
      id: this.product.id,
      name: this.product.name,
      author: this.product.author,
      illustrator : this.product.illustrator,
      description: this.product.description,
      publisher: this.product.publisher,
      genres: this.product.genres,
      publishedAt: this.product.publishedAt,
      weight: this.product.weight,
      images: this.product.images,
      status: this.product.status,
      category: this.product.category,
      quantity: this.quantitySelected,
      type: this.typeSelected
    }
    try {
      console.log(payload)
      await this.addToCart(payload)
      await this.fetchCart()
      await this.fetchFinalCart()
    } catch(error) {
      console.log(error)
    }
  }
}
</script>

<style></style>